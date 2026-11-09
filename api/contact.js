import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';

const tmpEnquiriesFile = resolve(join(tmpdir(), 'mg_enquiries.json'));

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

    list.unshift(enquiry);
    try {
      writeFileSync(tmpEnquiriesFile, JSON.stringify(list, null, 2), 'utf-8');
    } catch (_) {}

    return res.status(200).json({
      success: true,
      id: enquiry.id,
      message: 'Enquiry received successfully.'
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}