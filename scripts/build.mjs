import { cp, mkdir, rm, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('.');
const out = resolve('dist');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

// Copy index.html and src assets
await cp(resolve(root, 'index.html'), resolve(out, 'index.html'));
await cp(resolve(root, 'src'), resolve(out, 'src'), { recursive: true });

// Copy admin console (both /admin.html and /admin/index.html)
if (existsSync(resolve(root, 'admin.html'))) {
  await cp(resolve(root, 'admin.html'), resolve(out, 'admin.html'));
  await mkdir(resolve(out, 'admin'), { recursive: true });
  await cp(resolve(root, 'admin.html'), resolve(out, 'admin', 'index.html'));
}

// Copy data directory if present
if (existsSync(resolve(root, 'data'))) {
  await mkdir(resolve(out, 'data'), { recursive: true });
  for (const f of ['content.json', 'enquiries.json']) {
    const src = resolve(root, 'data', f);
    if (existsSync(src)) {
      await cp(src, resolve(out, 'data', f));
    }
  }
}

// Copy configs
for (const cfg of ['CNAME', 'vercel.json', 'netlify.toml', 'favicon.svg']) {
  if (existsSync(resolve(root, cfg))) {
    await cp(resolve(root, cfg), resolve(out, cfg));
  }
}

// Copy contents of public directly to dist root so /frames, /images, /favicon.svg work
const publicDir = resolve(root, 'public');
const entries = await readdir(publicDir);
const exclude = new Set(['analysis', 'screenshots', 'product_animations', 'Final.mp4']);
for (const entry of entries) {
  if (exclude.has(entry)) continue;
  if (entry === 'frames') {
    // Only copy .webp frames used by FramePipeline (skip raw 530MB png dumps)
    const framesDir = resolve(publicDir, 'frames');
    const outFramesDir = resolve(out, 'frames');
    await mkdir(outFramesDir, { recursive: true });
    const frameFiles = await readdir(framesDir);
    for (const f of frameFiles) {
      if (f.endsWith('.webp')) {
        await cp(resolve(framesDir, f), resolve(outFramesDir, f));
      }
    }
    continue;
  }
  await cp(resolve(publicDir, entry), resolve(out, entry), { recursive: true });
}

console.log('Static production build created in dist/');
