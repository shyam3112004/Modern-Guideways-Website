import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { insertSupabaseEnquiry } from './_supabase.js';

const tmpEnquiriesFile = resolve(join(tmpdir(), 'mg_enquiries.json'));

/**
 * Dispatch automated email notification via Resend API (Zero npm dependency, native fetch)
 */
async function dispatchEmailNotification(enquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { skipped: true, reason: 'No RESEND_API_KEY configured' };

  const notifyTo = process.env.ENQUIRY_NOTIFY_EMAIL || 'modernguideways@gmail.com';
  const fromAddress = process.env.RESEND_FROM || 'Modern Guideways <onboarding@resend.dev>';
  
  const clientPhone = (enquiry.phone || '').replace(/[^0-9+]/g, '');
  const waLink = clientPhone ? `https://wa.me/${clientPhone.replace(/^\+/, '')}` : null;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #071a31; color: #ffffff; padding: 24px; border-radius: 6px;">
      <div style="border-bottom: 2px solid #2469b5; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="margin: 0; color: #ffffff; font-size: 20px;">MODERN GUIDEWAYS</h2>
        <span style="font-size: 11px; letter-spacing: 2px; color: #56a8ff; text-transform: uppercase;">New Machine Protection Technical Enquiry</span>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
        <tr><td style="padding: 8px 0; color: #9cb1cf; width: 35%;">Enquiry ID:</td><td style="font-weight: bold; color: #fff;">${enquiry.id}</td></tr>
        <tr><td style="padding: 8px 0; color: #9cb1cf;">Client Name:</td><td style="font-weight: bold; color: #fff;">${enquiry.name}</td></tr>
        <tr><td style="padding: 8px 0; color: #9cb1cf;">Company / Plant:</td><td style="color: #fff;">${enquiry.company || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #9cb1cf;">Phone / WhatsApp:</td><td style="color: #fff;"><a href="tel:${enquiry.phone}" style="color: #56a8ff;">${enquiry.phone}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #9cb1cf;">Email Address:</td><td style="color: #fff;"><a href="mailto:${enquiry.email}" style="color: #56a8ff;">${enquiry.email || 'N/A'}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #9cb1cf;">Machine Type:</td><td style="color: #fff;">${enquiry.machineType || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #9cb1cf;">Protection System:</td><td style="color: #fff; font-weight: bold; color: #56a8ff;">${enquiry.protectionType || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; color: #9cb1cf;">Axis Travel / Dim:</td><td style="color: #fff;">${enquiry.stroke || 'N/A'}</td></tr>
      </table>

      ${enquiry.notes ? `
        <div style="background: rgba(255,255,255,0.06); padding: 14px; border-radius: 4px; margin-bottom: 24px; border-left: 3px solid #2469b5;">
          <div style="font-size: 11px; text-transform: uppercase; color: #9cb1cf; margin-bottom: 6px;">Technical Notes:</div>
          <div style="font-size: 13px; line-height: 1.5; color: #e2e8f0;">${enquiry.notes.replace(/\n/g, '<br>')}</div>
        </div>
      ` : ''}

      <div style="text-align: center; margin-top: 20px;">
        ${waLink ? `
          <a href="${waLink}" style="display: inline-block; background: #25d366; color: #ffffff; text-decoration: none; padding: 10px 20px; font-weight: bold; border-radius: 4px; margin-right: 10px;">
            Reply via WhatsApp ↗
          </a>
        ` : ''}
        <a href="mailto:${enquiry.email}" style="display: inline-block; background: #2469b5; color: #ffffff; text-decoration: none; padding: 10px 20px; font-weight: bold; border-radius: 4px;">
          Reply via Email ↗
        </a>
      </div>

      <div style="margin-top: 30px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px;">
        Logged at ${enquiry.receivedAt} • Dharmapuri Manufacturing Facility Desk
      </div>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [notifyTo],
        subject: `New Machine Protection Enquiry: ${enquiry.name} (${enquiry.company || 'Direct'})`,
        html: htmlBody
      })
    });
    const result = await response.json();
    return { success: response.ok, result };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * Dispatch automated webhook alert (Slack / Discord / Zapier / Telegram)
 */
async function dispatchWebhookAlert(enquiry) {
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhookUrl) return { skipped: true };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `*New Modern Guideways Lead:* ${enquiry.name} (${enquiry.company || 'Plant'}) - ${enquiry.protectionType} for ${enquiry.machineType}. Phone: ${enquiry.phone}`,
        enquiry
      })
    });
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (_) {}
    }
    const enquiry = body || {};

    if (!enquiry.name || (!enquiry.phone && !enquiry.email)) {
      return res.status(400).json({ error: 'Name and contact phone or email are required.' });
    }

    enquiry.id = enquiry.id || ('ENQ-' + Date.now());
    enquiry.receivedAt = enquiry.receivedAt || new Date().toISOString();

    let list = [];
    if (existsSync(tmpEnquiriesFile)) {
      try {
        list = JSON.parse(readFileSync(tmpEnquiriesFile, 'utf-8'));
      } catch (_) {
        list = [];
      }
    } else {
      try {
        const bundledPath = resolve(join(process.cwd(), 'data', 'enquiries.json'));
        if (existsSync(bundledPath)) {
          list = JSON.parse(readFileSync(bundledPath, 'utf-8'));
        }
      } catch (_) {}
    }

    enquiry.clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    enquiry.status = enquiry.status || 'NEW';

    list.unshift(enquiry);

    // Persist to Supabase Database
    let savedToSupabase = false;
    try {
      savedToSupabase = await insertSupabaseEnquiry(enquiry);
    } catch (e) {
      console.error('Supabase enquiry insert failed:', e.message);
    }

    try {
      writeFileSync(tmpEnquiriesFile, JSON.stringify(list, null, 2), 'utf-8');
    } catch (_) {}

    // Also persist to local data folder if accessible
    try {
      const dataEnquiriesPath = resolve(join(process.cwd(), 'data', 'enquiries.json'));
      writeFileSync(dataEnquiriesPath, JSON.stringify(list, null, 2), 'utf-8');
    } catch (_) {}

    // Background dispatches
    const [emailStatus, webhookStatus] = await Promise.all([
      dispatchEmailNotification(enquiry).catch(e => ({ error: e.message })),
      dispatchWebhookAlert(enquiry).catch(e => ({ error: e.message }))
    ]);

    return res.status(200).json({
      success: true,
      id: enquiry.id,
      savedToDatabase: savedToSupabase,
      message: 'Enquiry received and logged successfully.',
      emailNotification: emailStatus?.success ? 'delivered' : (emailStatus?.skipped ? 'skipped_no_api_key' : 'failed'),
      webhookAlert: webhookStatus?.success ? 'delivered' : 'skipped'
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}