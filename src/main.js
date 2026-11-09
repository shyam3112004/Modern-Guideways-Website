import { loadContent, renderSiteContent, syncContentFromBackend } from './content-manager.js';
import { initProductsStage } from './products-stage.js';
import { FramePipeline } from './frame-pipeline.js';

// Initialize content and listen for live updates from /admin
const initialData = loadContent();
renderSiteContent(initialData);
syncContentFromBackend();
window.addEventListener('mg_content_updated', (e) => renderSiteContent(e.detail));
window.addEventListener('storage', (e) => {
  if (e.key === 'mg_site_data') renderSiteContent(loadContent());
});

// --- Hero Cinematic Animation ---
const FRAME_COUNT = 1106;
const KEYFRAME_STEP = 25;
const INITIAL_BURST = 10;

const canvas = document.querySelector('#story-canvas');
const ctx = canvas ? canvas.getContext('2d', { alpha: false, desynchronized: true }) : null;
const preloader = document.querySelector('#preloader');
const progressLabel = document.querySelector('#load-progress');
const loadNumber = document.querySelector('#load-number');
const frameCounter = document.querySelector('#frame-counter');
const progressBar = document.querySelector('#story-progress');
const story = document.querySelector('#story');

const kickerEl = document.querySelector('#story-kicker');
const headingEl = document.querySelector('#story-heading');
const descEl = document.querySelector('#story-description');

const pipeline = new FramePipeline({
  frameCount: FRAME_COUNT,
  anchorStep: KEYFRAME_STEP,
  maxCacheSize: 60,
  maxConcurrency: 4
});

let targetFrame = 0;
let renderedFrame = -1;
let lastRenderedImg = null;
let needsFullRedraw = true;
let raf = 0;
let ready = false;
let lastScrollDirection = 1;

let storyTop = 0;
let storyRange = 1;

const scenes = [
  { at: 0, kicker: 'BUILT AROUND YOUR MACHINE', title: 'Protection in<br><em>every movement.</em>', body: 'Engineered machine protection for CNC, VMC and HMC applications.' },
  { at: 0.19, kicker: 'PRECISION IN EVERY COMPONENT', title: 'Every part has<br><em>a purpose.</em>', body: 'A considered approach to machine movement, exposed ways and working environments.' },
  { at: 0.38, kicker: 'FROM DESIGN TO ASSEMBLY', title: 'Made to move<br><em>with precision.</em>', body: 'Explore the thinking behind practical machine protection and manufacturing.' },
  { at: 0.58, kicker: 'PEOPLE. PROCESS. DETAIL.', title: 'Crafted through<br><em>careful work.</em>', body: 'Manufacturing is a sequence of decisions, skilled work and attention to detail.' },
  { at: 0.78, kicker: 'CHECKED AT EVERY STAGE', title: 'Confidence in<br><em>the details.</em>', body: 'Clear requirements and careful inspection are part of a dependable process.' },
  { at: 0.94, kicker: 'MODERN GUIDEWAYS', title: 'Protection for<br><em>what moves.</em>', body: 'Telescopic cover service and manufacturing for CNC, VMC and HMC machines.' }
];

let lastSceneAt = -1;
function updateScene(p) {
  let s = scenes[0];
  for (let i = scenes.length - 1; i >= 0; i--) {
    if (p >= scenes[i].at) {
      s = scenes[i];
      break;
    }
  }
  if (s.at !== lastSceneAt) {
    lastSceneAt = s.at;
    if (kickerEl) kickerEl.textContent = s.kicker;
    if (headingEl) headingEl.innerHTML = s.title;
    if (descEl) descEl.textContent = s.body;
  }
}

let lastReportedFrame = -1;
function updateUI(displayFrame, p) {
  if (displayFrame !== lastReportedFrame) {
    lastReportedFrame = displayFrame;
    if (frameCounter) {
      frameCounter.textContent = `${String(displayFrame + 1).padStart(4, '0')} / ${FRAME_COUNT}`;
    }
    if (progressBar) {
      progressBar.style.width = `${(p * 100).toFixed(2)}%`;
    }
  }
}

function measureStory() {
  if (!story) return;
  const rect = story.getBoundingClientRect();
  storyTop = rect.top + window.scrollY;
  storyRange = Math.max(1, story.offsetHeight - window.innerHeight);
}

function sizeCanvas() {
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const r = canvas.getBoundingClientRect();
  const w = Math.round(r.width * dpr);
  const h = Math.round(r.height * dpr);
  if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
    canvas.width = w;
    canvas.height = h;
    needsFullRedraw = true;
  }
  if (ctx) {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
  }
  draw();
}

function draw() {
  if (!canvas || !ctx) return;
  const img = pipeline.getBestAvailableFrame(targetFrame);
  if (!img || !canvas.width || !canvas.height) return;
  if (img === lastRenderedImg && !needsFullRedraw) return;

  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.naturalWidth || img.width || 3840;
  const ih = img.naturalHeight || img.height || 2160;

  const scale = Math.max(cw / iw, ch / ih);
  const w = iw * scale;
  const h = ih * scale;
  const x = (cw - w) / 2;
  const y = (ch - h) / 2;

  if (w < cw || h < ch || x > 0 || y > 0) {
    ctx.fillStyle = '#06172b';
    ctx.fillRect(0, 0, cw, ch);
  }

  ctx.drawImage(img, x, y, w, h);
  lastRenderedImg = img;
  renderedFrame = targetFrame;
  needsFullRedraw = false;
}

function scheduleRender() {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    raf = 0;
    draw();
  });
}

pipeline.onFrameDecoded((idx) => {
  if (Math.abs(idx - targetFrame) <= 3) {
    scheduleRender();
  }
});

function onScroll() {
  if (!ready || !story) return;
  if (storyRange <= 1) {
    measureStory();
  }
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY < storyTop - window.innerHeight || scrollY > storyTop + storyRange + window.innerHeight) {
    return;
  }

  const p = Math.max(0, Math.min(1, (scrollY - storyTop) / storyRange));
  const newTarget = Math.round(p * (FRAME_COUNT - 1));
  const dir = newTarget >= targetFrame ? 1 : -1;

  targetFrame = newTarget;
  lastScrollDirection = dir;

  updateScene(p);
  updateUI(targetFrame, p);
  pipeline.setTarget(targetFrame, dir);
  scheduleRender();
}

function onResize() {
  measureStory();
  sizeCanvas();
  needsFullRedraw = true;
  scheduleRender();
}

async function preload() {
  measureStory();
  sizeCanvas();

  // 1. Immediately load frame 0 and render
  const frame0 = await pipeline.loadAndDecode(0, true);
  if (frame0) {
    targetFrame = 0;
    draw();
  }

  // 2. Preload initial burst frames (0..7) and key anchors (25%, 50%, 75%, 100%)
  const initialIndices = [];
  for (let i = 1; i < INITIAL_BURST && i < FRAME_COUNT; i++) initialIndices.push(i);
  initialIndices.push(Math.floor(FRAME_COUNT * 0.25));
  initialIndices.push(Math.floor(FRAME_COUNT * 0.5));
  initialIndices.push(Math.floor(FRAME_COUNT * 0.75));
  initialIndices.push(FRAME_COUNT - 1);

  let loadedInitial = 1;
  const totalInitial = initialIndices.length + 1;

  const onInitLoaded = () => {
    loadedInitial++;
    const pct = Math.min(100, Math.round((loadedInitial / totalInitial) * 100));
    if (progressLabel) progressLabel.style.width = pct + '%';
    if (loadNumber) loadNumber.textContent = pct + '%';
  };

  onInitLoaded(); // for frame 0

  await Promise.all(
    initialIndices.map(idx => pipeline.loadAndDecode(idx, pipeline.anchorIndices.has(idx)).then(onInitLoaded))
  );

  ready = true;
  if (preloader) preloader.classList.add('done');
  measureStory();
  onScroll();
  draw();

  // 3. Progressively load anchor keyframes in the background
  pipeline.loadAnchorKeyframes(2);
}

if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  if (preloader) preloader.classList.add('done');
  const fallback = document.querySelector('#story-fallback');
  if (fallback) fallback.style.display = 'block';
  if (canvas) canvas.style.display = 'none';
} else {
  preload();
  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pipeline.pause();
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    } else {
      pipeline.resume();
      measureStory();
      sizeCanvas();
      scheduleRender();
    }
  });
}

document.querySelector('#year').textContent=new Date().getFullYear();
window.__productsStageController = initProductsStage();
const menu=document.querySelector('#menu-toggle'),nav=document.querySelector('.desktop-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));

// --- Technical Enquiry Form & Gateway ---
const form = document.getElementById('technical-enquiry-form');
const alertEl = document.getElementById('enquiry-alert');
const submitBtn = document.getElementById('submit-enquiry-btn');
const waQuickBtn = document.getElementById('whatsapp-quick-btn');

function buildWhatsAppText() {
  const name = document.getElementById('client-name')?.value.trim() || 'Prospective Client';
  const company = document.getElementById('company-name')?.value.trim();
  const phone = document.getElementById('phone-number')?.value.trim();
  const email = document.getElementById('email-address')?.value.trim();
  const machine = document.getElementById('machine-type')?.value;
  const protection = document.getElementById('protection-type')?.value;
  const stroke = document.getElementById('axis-stroke')?.value.trim();
  const notes = document.getElementById('enquiry-notes')?.value.trim();

  let msg = `*Modern Guideways — Technical Enquiry*
`;
  msg += `• *Client:* ${name}
`;
  if (company) msg += `• *Company:* ${company}
`;
  if (phone) msg += `• *Phone:* ${phone}
`;
  if (email) msg += `• *Email:* ${email}
`;
  if (machine) msg += `• *Machine:* ${machine}
`;
  if (protection) msg += `• *Protection:* ${protection}
`;
  if (stroke) msg += `• *Travel / Dim:* ${stroke}
`;
  if (notes) msg += `• *Notes:* ${notes}
`;
  return encodeURIComponent(msg);
}

if (waQuickBtn) {
  waQuickBtn.addEventListener('click', (e) => {
    const text = buildWhatsAppText();
    waQuickBtn.href = `https://wa.me/918056438763?text=${text}`;
  });
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!submitBtn) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Submitting Enquiry...';
    if (alertEl) {
      alertEl.style.display = 'none';
      alertEl.className = 'form-alert';
    }

    const payload = {
      name: document.getElementById('client-name')?.value.trim(),
      company: document.getElementById('company-name')?.value.trim() || 'N/A',
      phone: document.getElementById('phone-number')?.value.trim(),
      email: document.getElementById('email-address')?.value.trim() || 'N/A',
      machineType: document.getElementById('machine-type')?.value,
      protectionType: document.getElementById('protection-type')?.value,
      stroke: document.getElementById('axis-stroke')?.value.trim() || 'N/A',
      notes: document.getElementById('enquiry-notes')?.value.trim() || '',
      timestamp: new Date().toISOString()
    };

    try {
      const saved = JSON.parse(localStorage.getItem('mg_customer_enquiries') || '[]');
      saved.unshift(payload);
      localStorage.setItem('mg_customer_enquiries', JSON.stringify(saved));
    } catch (_) {}

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        if (alertEl) {
          alertEl.className = 'form-alert success';
          alertEl.innerHTML = `✓ <strong>Enquiry Logged (${data.id || 'Confirmed'})!</strong> Our Dharmapuri engineering desk has received your specifications. <br><a href="https://wa.me/918056438763?text=${buildWhatsAppText()}" target="_blank" style="color:#03543f;font-weight:600;text-decoration:underline;display:inline-block;margin-top:6px;">Send immediate confirmation via WhatsApp ↗</a>`;
          alertEl.style.display = 'block';
        }
        form.reset();
      } else {
        throw new Error('Server returned ' + res.status);
      }
    } catch (err) {
      if (alertEl) {
        alertEl.className = 'form-alert success';
        alertEl.innerHTML = `✓ <strong>Enquiry Captured!</strong> We have saved your specifications locally. To connect instantly with our engineering team, please click below:<br><a href="https://wa.me/918056438763?text=${buildWhatsAppText()}" target="_blank" style="color:#03543f;font-weight:600;text-decoration:underline;display:inline-block;margin-top:6px;">Continue to WhatsApp with your specs ↗</a>`;
        alertEl.style.display = 'block';
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Submit Enquiry <span>↗</span>';
    }
  });
}

// --- Dynamic Section & SEO Title Management ---
const sectionTitles = {
  'top': 'Modern Guideways | Engineered Machine Protection',
  'story': 'Modern Guideways | Engineered Machine Protection',
  'company': 'Company | Modern Guideways',
  'products': 'Precision Protection Systems | Modern Guideways',
  'capabilities': 'Capabilities | Modern Guideways',
  'clientele': 'Clientele | Modern Guideways',
  'gallery': 'Visual Story | Modern Guideways',
  'contact': 'Contact | Modern Guideways'
};

const metaDescEl = document.querySelector('meta[name="description"]');
const defaultMetaDesc = metaDescEl ? metaDescEl.getAttribute('content') : '';

function updateActiveSection(id) {
  if (id === 'clientele') {
    document.title = 'Clientele | Modern Guideways';
    if (metaDescEl) {
      metaDescEl.setAttribute('content', 'Explore our industrial B2B clientele. Modern Guideways builds trusted partnerships with machine tool manufacturers that value precision, reliability and engineered machine protection.');
    }
  } else if (sectionTitles[id]) {
    document.title = sectionTitles[id];
    if (metaDescEl) metaDescEl.setAttribute('content', defaultMetaDesc);
  }
}

if ('IntersectionObserver' in window) {
  const secObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id) {
        updateActiveSection(entry.target.id);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section[id], header[id]').forEach(sec => secObserver.observe(sec));
}

// Check hash or path on load and hash change
window.addEventListener('hashchange', () => {
  const h = window.location.hash.replace('#', '');
  if (h) updateActiveSection(h);
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  const href = a.getAttribute('href');
  if (href && href.startsWith('#')) {
    updateActiveSection(href.slice(1));
  }
}));

if (window.location.hash) {
  const h = window.location.hash.replace('#', '');
  if (h === 'clientele') updateActiveSection('clientele');
} else if (window.location.pathname.includes('/clientele')) {
  updateActiveSection('clientele');
  const clientEl = document.getElementById('clientele');
  if (clientEl) clientEl.scrollIntoView({ behavior: 'smooth' });
}

