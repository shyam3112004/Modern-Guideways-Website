import { extname } from 'node:path';

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
    const safeName = `logo_${Date.now()}_${cleanBase}${ext}`;
    const dataUrl = fileData.startsWith('data:') ? fileData : `data:image/${ext.replace('.', '')};base64,${fileData}`;

    return res.status(200).json({
      success: true,
      url: dataUrl,
      filename: safeName
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}