/**
 * One-Time Seeder Script for Supabase
 * Migrates existing data/content.json and data/enquiries.json into Supabase
 * Usage: node scripts/seed-supabase.mjs
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { saveSupabaseContent, insertSupabaseEnquiry, getSupabaseConfig } from '../api/_supabase.js';

async function main() {
  console.log('--- Modern Guideways: Supabase Data Seeder ---');
  console.log('');

  const { url, isConfigured } = getSupabaseConfig();
  if (!isConfigured) {
    console.error('ERROR: Supabase credentials not found in environment!');
    console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment.');
    process.exit(1);
  }

  console.log(`Target Supabase URL: ${url}`);

  // 1. Seed site content
  const contentPath = resolve(join(process.cwd(), 'data', 'content.json'));
  if (existsSync(contentPath)) {
    console.log('[1/2] Seeding site_content from data/content.json...');
    try {
      const contentData = JSON.parse(readFileSync(contentPath, 'utf-8'));
      const ok = await saveSupabaseContent(contentData);
      if (ok) {
        console.log(' [OK] site_content successfully seeded into Supabase.');
      } else {
        console.error(' [FAILED] Failed to save site_content.');
      }
    } catch (err) {
      console.error(' [ERROR] Error reading/saving content.json:', err.message);
    }
  } else {
    console.log('[1/2] data/content.json not found, skipping content seed.');
  }

  // 2. Seed existing enquiries
  const enquiriesPath = resolve(join(process.cwd(), 'data', 'enquiries.json'));
  if (existsSync(enquiriesPath)) {
    console.log('[2/2] Seeding enquiries from data/enquiries.json...');
    try {
      const enquiries = JSON.parse(readFileSync(enquiriesPath, 'utf-8'));
      if (Array.isArray(enquiries)) {
        let count = 0;
        for (const enq of enquiries) {
          const ok = await insertSupabaseEnquiry(enq);
          if (ok) count++;
        }
        console.log(` [OK] Seeded ${count}/${enquiries.length} enquiries into Supabase.`);
      }
    } catch (err) {
      console.error(' [ERROR] Error reading/saving enquiries.json:', err.message);
    }
  } else {
    console.log('[2/2] data/enquiries.json not found, skipping enquiries seed.');
  }

  console.log('--- Seeding Process Finished ---');
}

main().catch(err => {
  console.error('Seeder execution error:', err);
  process.exit(1);
});
