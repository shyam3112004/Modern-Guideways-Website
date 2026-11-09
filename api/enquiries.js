import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';

const tmpEnquiriesFile = resolve(join(tmpdir(), 'mg_enquiries.json'));

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let list = [];
  if (existsSync(tmpEnquiriesFile)) {
    try {
      list = JSON.parse(readFileSync(tmpEnquiriesFile, 'utf-8'));
    } catch (_) {
      list = [];
    }
  }

  if (!list.length) {
    try {
      const bundledPath = resolve(join(process.cwd(), 'data', 'enquiries.json'));
      if (existsSync(bundledPath)) {
        list = JSON.parse(readFileSync(bundledPath, 'utf-8'));
      }
    } catch (_) {}
  }

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  return res.status(200).json({ enquiries: list });
}