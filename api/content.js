import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { getSupabaseContent } from './_supabase.js';

const tmpContentFile = resolve(join(tmpdir(), 'mg_content.json'));

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. Try Supabase Persistent Database
  try {
    const supabaseContent = await getSupabaseContent();
    if (supabaseContent) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return res.status(200).json(supabaseContent);
    }
  } catch (err) {
    console.error('Supabase content read error:', err.message);
  }

  // Check /tmp first for runtime modifications
  if (existsSync(tmpContentFile)) {
    try {
      const data = readFileSync(tmpContentFile, 'utf-8');
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return res.status(200).send(data);
    } catch (_) {}
  }

  // Fallback to bundled data/content.json
  try {
    const bundledPath = resolve(join(process.cwd(), 'data', 'content.json'));
    if (existsSync(bundledPath)) {
      const data = readFileSync(bundledPath, 'utf-8');
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return res.status(200).send(data);
    }
  } catch (_) {}

  return res.status(404).json({ error: 'content.json not found' });
}