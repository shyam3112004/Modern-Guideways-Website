import http from 'node:http';
import { createReadStream, existsSync, statSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve, extname, join, dirname } from 'node:path';

const root = resolve(process.argv[2] || '.');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

  // API to retrieve full site content
  if (req.method === 'GET' && (pathname === '/api/content' || pathname === '/api/content/')) {
    const dataPath = resolve(join(root, 'data', 'content.json'));
    if (existsSync(dataPath)) {
      try {
        const content = readFileSync(dataPath, 'utf-8');
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        return res.end(content);
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: e.message }));
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'content.json not found' }));
    }
  }

  // API to upload client logos and media assets
  if (req.method === 'POST' && pathname === '/api/upload') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { filename, fileData } = JSON.parse(body);
        if (!filename || !fileData) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Filename and fileData are required.' }));
        }

        const ext = extname(filename).toLowerCase();
        const allowedExts = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.mp4', '.webm', '.mov', '.ogg'];
        if (!allowedExts.includes(ext)) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: `File type ${ext} not allowed. Supported: ${allowedExts.join(', ')}` }));
        }

        let buffer;
        const matches = fileData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          buffer = Buffer.from(matches[2], 'base64');
        } else {
          buffer = Buffer.from(fileData, 'base64');
        }

        const isVideo = ['.mp4', '.webm', '.mov', '.ogg'].includes(ext);
        const maxLimit = isVideo ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
        if (buffer.length > maxLimit) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: `File size exceeds ${isVideo ? '50MB' : '10MB'} limit.` }));
        }

        const cleanBase = filename.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
        const prefix = isVideo ? 'video' : 'media';
        const safeName = `${prefix}_${Date.now()}_${cleanBase}${ext}`;

        const uploadDir = resolve(join(root, 'public', 'uploads'));
        mkdirSync(uploadDir, { recursive: true });
        const filePath = resolve(join(uploadDir, safeName));
        writeFileSync(filePath, buffer);

        if (root.endsWith('dist')) {
          const rootUploadDir = resolve(join(root, '..', 'public', 'uploads'));
          mkdirSync(rootUploadDir, { recursive: true });
          writeFileSync(resolve(join(rootUploadDir, safeName)), buffer);
        } else if (existsSync(resolve(join(root, 'dist')))) {
          const distUploadDir = resolve(join(root, 'dist', 'uploads'));
          mkdirSync(distUploadDir, { recursive: true });
          writeFileSync(resolve(join(distUploadDir, safeName)), buffer);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          url: `/uploads/${safeName}`,
          filename: safeName
        }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // API to save content directly
  if (req.method === 'POST' && pathname === '/api/save-content') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const json = JSON.parse(body);
        const dataPath = resolve(join(root, 'data', 'content.json'));
        mkdirSync(dirname(dataPath), { recursive: true });
        writeFileSync(dataPath, JSON.stringify(json, null, 2), 'utf-8');
        if (root.endsWith('dist')) {
          const rootDataPath = resolve(join(root, '..', 'data', 'content.json'));
          mkdirSync(dirname(rootDataPath), { recursive: true });
          writeFileSync(rootDataPath, JSON.stringify(json, null, 2), 'utf-8');
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // API to receive contact enquiries
  if (req.method === 'POST' && pathname === '/api/contact') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const enquiry = JSON.parse(body);
        if (!enquiry.name || (!enquiry.phone && !enquiry.email)) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Name and contact phone or email are required.' }));
          return;
        }
        enquiry.id = 'ENQ-' + Date.now();
        enquiry.receivedAt = new Date().toISOString();

        const enquiriesPath = resolve(join(root, 'data', 'enquiries.json'));
        mkdirSync(dirname(enquiriesPath), { recursive: true });
        let list = [];
        if (existsSync(enquiriesPath)) {
          try {
            list = JSON.parse(readFileSync(enquiriesPath, 'utf-8'));
          } catch (_) {
            list = [];
          }
        }
        list.unshift(enquiry);
        writeFileSync(enquiriesPath, JSON.stringify(list, null, 2), 'utf-8');

        if (root.endsWith('dist')) {
          const rootPath = resolve(join(root, '..', 'data', 'enquiries.json'));
          mkdirSync(dirname(rootPath), { recursive: true });
          writeFileSync(rootPath, JSON.stringify(list, null, 2), 'utf-8');
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, id: enquiry.id }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // API to retrieve contact enquiries
  if (req.method === 'GET' && pathname === '/api/enquiries') {
    const enquiriesPath = resolve(join(root, 'data', 'enquiries.json'));
    let list = [];
    if (existsSync(enquiriesPath)) {
      try {
        list = JSON.parse(readFileSync(enquiriesPath, 'utf-8'));
      } catch (_) {}
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ enquiries: list }));
    return;
  }

  let relPath = pathname.replace(/^\/+/,'');

  // Rewrite /admin, /Admin, /admin/ to admin.html; /clientele to index.html
  const lowerPath = pathname.toLowerCase();
  if (lowerPath === '/admin' || lowerPath === '/admin/') {
    relPath = 'admin.html';
  } else if (lowerPath === '/clientele' || lowerPath === '/clientele/') {
    relPath = 'index.html';
  }

  let file = resolve(join(root, relPath));

  if (!file.startsWith(root)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  // Fallback to public/ directory if running dev server in root and file isn't in root
  if (!existsSync(file) && existsSync(join(root, 'public', relPath))) {
    file = resolve(join(root, 'public', relPath));
  }

  // Fallback to project root if running with dist root
  if (!existsSync(file) && (root.endsWith('dist') || root.endsWith('dist/'))) {
    const parentRoot = resolve(join(root, '..'));
    const parentFile = resolve(join(parentRoot, relPath));
    if (parentFile.startsWith(parentRoot) && existsSync(parentFile)) {
      file = parentFile;
    }
  }

  if (existsSync(file) && statSync(file).isDirectory()) {
    file = join(file, 'index.html');
  }

  if (!existsSync(file)) {
    res.writeHead(404);
    return res.end('Not found');
  }

  const isStaticMedia = /^\/(frames|product_animations|images|uploads)\//.test(pathname) || /\.(webp|jpg|jpeg|png|svg|mp4)$/.test(pathname);
  res.writeHead(200, {
    'Content-Type': types[extname(file)] || 'application/octet-stream',
    'Cache-Control': isStaticMedia ? 'public, max-age=31536000, immutable' : 'no-cache'
  });
  createReadStream(file).pipe(res);
});

const port = Number(process.env.PORT || 4173);
server.listen(port, '0.0.0.0', () => console.log(`Modern Guideways preview: http://localhost:${port}`));
