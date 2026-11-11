import { extname } from 'node:path';
import { uploadToSupabaseStorage, getSupabaseConfig } from './_supabase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
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
    const { filename, fileData } = body || {};

    if (!filename || !fileData) {
      return res.status(400).json({ error: 'Filename and fileData are required.' });
    }

    const ext = extname(filename).toLowerCase();
    const allowedExts = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];
    if (!allowedExts.includes(ext)) {
      return res.status(400).json({ error: `File type ${ext} not allowed. Supported: ${allowedExts.join(', ')}` });
    }

    const cleanBase = filename.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
    const safeName = `media_${Date.now()}_${cleanBase}${ext}`;
    
    let buffer;
    let mimeType = `image/${ext.replace('.', '')}`;
    if (ext === '.svg') mimeType = 'image/svg+xml';
    if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
    if (ext === '.mp4') mimeType = 'video/mp4';
    if (ext === '.webp') mimeType = 'image/webp';

    const matches = fileData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (matches && matches.length === 3) {
      mimeType = matches[1];
      buffer = Buffer.from(matches[2], 'base64');
    } else {
      buffer = Buffer.from(fileData, 'base64');
    }

    let finalUrl = fileData.startsWith('data:') ? fileData : `data:${mimeType};base64,${fileData}`;
    let uploadedToStorage = false;

    // Try Supabase Storage
    try {
      const { isConfigured } = getSupabaseConfig();
      if (isConfigured) {
        const storageUrl = await uploadToSupabaseStorage('media', safeName, buffer, mimeType);
        if (storageUrl) {
          finalUrl = storageUrl;
          uploadedToStorage = true;
        }
      }
    } catch (e) {
      console.error('Supabase storage upload error:', e.message);
    }

    return res.status(200).json({
      success: true,
      url: finalUrl,
      filename: safeName,
      storage: uploadedToStorage ? 'supabase' : 'base64'
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}