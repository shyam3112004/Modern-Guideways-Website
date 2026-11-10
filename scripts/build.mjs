import { cp, mkdir, rm, readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('.');
const out = resolve('dist');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

// Copy index.html, privacy.html, terms.html and src assets
await cp(resolve(root, 'index.html'), resolve(out, 'index.html'));
if (existsSync(resolve(root, 'privacy.html'))) {
  await cp(resolve(root, 'privacy.html'), resolve(out, 'privacy.html'));
}
if (existsSync(resolve(root, 'terms.html'))) {
  await cp(resolve(root, 'terms.html'), resolve(out, 'terms.html'));
}
await cp(resolve(root, 'src'), resolve(out, 'src'), { recursive: true });

// Copy backend API serverless functions
if (existsSync(resolve(root, 'api'))) {
  await cp(resolve(root, 'api'), resolve(out, 'api'), { recursive: true });
}

// Copy package.json for module resolution
if (existsSync(resolve(root, 'package.json'))) {
  await cp(resolve(root, 'package.json'), resolve(out, 'package.json'));
}

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
for (const cfg of ['CNAME', 'netlify.toml', 'favicon.svg']) {
  if (existsSync(resolve(root, cfg))) {
    await cp(resolve(root, cfg), resolve(out, cfg));
  }
}

// Prepare dist/vercel.json tailored for prebuilt deployment
if (existsSync(resolve(root, 'vercel.json'))) {
  try {
    const vcfg = JSON.parse(await readFile(resolve(root, 'vercel.json'), 'utf-8'));
    delete vcfg.buildCommand;
    delete vcfg.outputDirectory;
    await writeFile(resolve(out, 'vercel.json'), JSON.stringify(vcfg, null, 2), 'utf-8');
  } catch (_) {
    await cp(resolve(root, 'vercel.json'), resolve(out, 'vercel.json'));
  }
}

// Copy contents of public directly to dist root so /frames, /images, /favicon.svg work
const publicDir = resolve(root, 'public');
const entries = await readdir(publicDir);
const exclude = new Set(['analysis', 'screenshots', 'product_animations', 'Final.mp4']);
for (const entry of entries) {
  if (exclude.has(entry)) continue;
  if (entry === 'frames') {
    // Copy active JPG frames used by FramePipeline
    const framesDir = resolve(publicDir, 'frames');
    const outFramesDir = resolve(out, 'frames');
    await mkdir(outFramesDir, { recursive: true });
    const frameFiles = await readdir(framesDir);
    for (const f of frameFiles) {
      if (f.endsWith('.jpg') || f.endsWith('.webp')) {
        await cp(resolve(framesDir, f), resolve(outFramesDir, f));
      }
    }
    continue;
  }
  await cp(resolve(publicDir, entry), resolve(out, entry), { recursive: true });
}

console.log('Static production build created in dist/');
