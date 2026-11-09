export const STORAGE_KEY = 'mg_site_data';

export const DEFAULT_DATA = {
  products: [
    {
      id: 'bellows-cover',
      title: 'Bellows Cover',
      label: '01 / WAY DEFENSE',
      metric: 'STROKE 2400mm',
      description: 'High-speed elastomeric accordion covers protecting precision guideways from heavy coolant and metal fines.',
      mediaUrl: '',
      mediaType: 'image',
      mediaFileName: ''
    },
    {
      id: 'safety-enclosure',
      title: 'Safety Enclosure',
      label: '02 / PERIMETER ARMOR',
      metric: 'ISO 23125 CERT',
      description: 'Heavy-gauge modular machine housing with safety interlocks, acoustic dampening, and total fluid containment.',
      mediaUrl: '',
      mediaType: 'image',
      mediaFileName: ''
    },
    {
      id: 'cnc-milling-machine',
      title: 'CNC Milling Center',
      label: '03 / CORE CENTER',
      metric: '5-AXIS DATUM',
      description: 'High-torque machining center core serving as the structural datum for synchronized guideway protection systems.',
      mediaUrl: '',
      mediaType: 'image',
      mediaFileName: ''
    },
    {
      id: 'linear-guide-assemblies',
      title: 'Linear Guide Assemblies',
      label: '04 / LINEAR PRECISION',
      metric: 'P-GRADE PRELOAD',
      description: 'Precision-ground recirculating rail and carriage assemblies delivering sub-micron motion linearity.',
      mediaUrl: '',
      mediaType: 'image',
      mediaFileName: ''
    },
    {
      id: 'roller-guard',
      title: 'Roller Guard',
      label: '05 / RAPID APERTURE',
      metric: 'SPEED 90 m/min',
      description: 'Spring-tensioned stainless steel roll-up curtains engineered for restricted clearances and high-frequency traverse.',
      mediaUrl: '',
      mediaType: 'image',
      mediaFileName: ''
    },
    {
      id: 'telescopic-machine-cover',
      title: 'Telescopic Machine Cover',
      label: '06 / HEAVY BALLISTIC',
      metric: '2.5mm COLD STEEL',
      description: 'Multi-stage box-section steel telescoping guards with internal shock dampers to withstand heavy chip bombardment.',
      mediaUrl: '',
      mediaType: 'image',
      mediaFileName: ''
    },
    {
      id: 'steel-way-cover',
      title: 'Steel Way Cover',
      label: '07 / SLIDEWAYS SHIELD',
      metric: 'POLY WIPERS',
      description: 'Precision-stepped telescoping steel way cover engineered for horizontal and vertical CNC bedways.',
      mediaUrl: '',
      mediaType: 'image',
      mediaFileName: ''
    }
  ],
  finalShowcase: {
    title: 'Unified CNC Center',
    badge: 'CONVERGENCE',
    metric: '5-AXIS DATUM',
    description: '7 precision systems unified in motion.',
    mediaUrl: '/Final.mp4',
    mediaType: 'video',
    mediaFileName: 'Final.mp4'
  },
  capabilities: {
    headline: 'Made for the<br><em>real world.</em>',
    lead: 'A considered approach starts with understanding the machine, the movement and the environment.',
    steps: [
      {
        num: '01',
        title: 'Understand the application',
        detail: 'Machine type, travel, clearances and operating conditions.'
      },
      {
        num: '02',
        title: 'Plan the protection',
        detail: 'Discuss the suitable cover category and configuration.'
      },
      {
        num: '03',
        title: 'Manufacture & service',
        detail: 'Coordinate the work around the agreed requirement.'
      }
    ]
  },
  gallery: [
    {
      id: 'gal-1',
      large: true,
      image: '/frames/frame_00032.jpg',
      num: '01',
      title: 'MACHINE SYSTEMS',
      alt: 'Machining centre scene from supplied video'
    },
    {
      id: 'gal-2',
      large: false,
      image: '/frames/frame_00070.jpg',
      num: '02',
      title: 'WORKSHOP PROCESS',
      alt: 'Industrial team working on components in supplied video'
    },
    {
      id: 'gal-3',
      large: false,
      image: '/frames/frame_00096.jpg',
      num: '03',
      title: 'FABRICATION',
      alt: 'Metal fabrication scene from supplied video'
    },
    {
      id: 'gal-4',
      large: false,
      image: '/frames/frame_00114.jpg',
      num: '04',
      title: 'INSPECTION',
      alt: 'Precision measurement scene from supplied video'
    }
  ],
  contact: {
    phone1: '+91 80564 38763',
    phone2: '+91 87781 21768',
    email: 'modernguideways@gmail.com',
    address: '2/186, Gollapatti (Vill), Selliam Patti (Po), Palacode (Tk), Dharmapuri (Dt), Tamil Nadu – 636 809',
    whatsapp: '918056438763',
    whatsappMessage: 'Hello Modern Guideways, I would like to discuss a machine cover requirement.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=2%2F186%20Gollapatti%20Selliam%20Patti%20Palacode%20Dharmapuri%20Tamil%20Nadu%20636809'
  },
  clientele: [
  {
    "id": "client-zf",
    "companyName": "ZF Group",
    "logo": "/uploads/01_ZF.png",
    "logoFileName": "01_ZF.png",
    "description": "Global technology leader in driveline, chassis, and advanced industrial mobility systems.",
    "websiteUrl": "https://www.zf.com/",
    "displayOrder": 1,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-jk-maini",
    "companyName": "JK Maini Global Aerospace",
    "logo": "/uploads/02_JK_Maini_Global_Aerospace.png",
    "logoFileName": "02_JK_Maini_Global_Aerospace.png",
    "description": "Aerospace & defense precision engineering, aircraft structure assemblies, and precision aero-engine components.",
    "websiteUrl": "https://maini.com/",
    "displayOrder": 2,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-akr",
    "companyName": "AKR Express",
    "logo": "/uploads/03_AKR_Since_1969.jpeg",
    "logoFileName": "03_AKR_Since_1969.jpeg",
    "description": "Premier express logistics and cargo transport network with dedicated industrial operations across South India since 1969.",
    "websiteUrl": "https://www.akrexpress.com/",
    "displayOrder": 3,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-rv-machine-tools",
    "companyName": "R.V. Machine Tools",
    "logo": "/uploads/logo_1794201116955_logo.png",
    "logoFileName": "logo_1794201116955_logo.png",
    "description": "Leading manufacturer of high-precision CNC lathes, turning centers, and heavy-duty special purpose machinery.",
    "websiteUrl": "https://www.rvmachinetools.in/",
    "displayOrder": 4,
    "isPublished": true,
    "createdAt": "2026-11-09T05:09:33.612Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-m-monogram",
    "companyName": "Precision Engineering Partner (M)",
    "logo": "/uploads/05_Unidentified_M_Monogram.png",
    "logoFileName": "05_Unidentified_M_Monogram.png",
    "description": "Specialized precision CNC machining, tooling, and industrial machine fabrication partner.",
    "websiteUrl": "",
    "displayOrder": 5,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-bhavani",
    "companyName": "Bhavani Industries",
    "logo": "/uploads/06_Bhavani.jpg",
    "logoFileName": "06_Bhavani.jpg",
    "description": "Precision machined components manufacturer with 120+ CNCs serving automotive, electronics, and medical industries.",
    "websiteUrl": "https://www.bhavaniindustries.in/",
    "displayOrder": 6,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-e2r-dfac",
    "companyName": "E2R DFAC Technologies Pvt Ltd",
    "logo": "/uploads/07_Technologies_Pvt_Ltd.png",
    "logoFileName": "07_Technologies_Pvt_Ltd.png",
    "description": "Enterprise workplace dining management, corporate catering coordination, and industrial facility solutions.",
    "websiteUrl": "https://www.e2rdfac.com/",
    "displayOrder": 7,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-velson",
    "companyName": "Velson Drilling Dynamics",
    "logo": "/uploads/08_Velson_Drilling_Dynamics.webp",
    "logoFileName": "08_Velson_Drilling_Dynamics.webp",
    "description": "Engineered water-well, exploration, blast hole, and specialised heavy mining & piling drilling equipment.",
    "websiteUrl": "https://velson.in/",
    "displayOrder": 8,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-seonics",
    "companyName": "Southern Electronics (Seonics)",
    "logo": "/uploads/09_SE.jpeg",
    "logoFileName": "09_SE.jpeg",
    "description": "Premier aerospace, defense, and industrial precision electronic systems, avionics, and specialized test equipment since 1971.",
    "websiteUrl": "https://www.seonics.co.in/",
    "displayOrder": 9,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-tcf",
    "companyName": "Twin City Fan India (TCF)",
    "logo": "/uploads/10_TCF_Logo_Mark.webp",
    "logoFileName": "10_TCF_Logo_Mark.webp",
    "description": "World-class industrial air movement solutions, custom process fans, blowers, and heavy ventilation systems.",
    "websiteUrl": "https://in.tcf.com/",
    "displayOrder": 10,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  },
  {
    "id": "client-yume",
    "companyName": "Yume Newturn Private Limited",
    "logo": "/uploads/11_Yume_Newturn.png",
    "logoFileName": "11_Yume_Newturn.png",
    "description": "Reputed manufacturer of Special Purpose Machines (SPMs), hydraulic systems, and 5-axis precision CNC/VMC machining.",
    "websiteUrl": "https://www.yumenewturn.com/",
    "displayOrder": 11,
    "isPublished": true,
    "createdAt": "2026-11-09T08:00:00.000Z",
    "updatedAt": "2026-11-09T15:20:59.678Z"
  }
]
};

export function loadContent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Detect legacy mock data or missing products
      const isLegacy = !Array.isArray(parsed.products) ||
        parsed.products.length === 0 ||
        parsed.products.some(p => p.id === 'prod-1' || p.visualType || p.id === 'prod-2');

      if (isLegacy) {
        parsed.products = JSON.parse(JSON.stringify(DEFAULT_DATA.products));
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...DEFAULT_DATA, ...parsed }));
        } catch (_) {}
      }
      const clientList = Array.isArray(parsed.clientele) && parsed.clientele.length > 0 ? parsed.clientele : JSON.parse(JSON.stringify(DEFAULT_DATA.clientele));
      return {
        ...DEFAULT_DATA,
        ...parsed,
        clientele: clientList,
        finalShowcase: {
          ...DEFAULT_DATA.finalShowcase,
          ...(parsed.finalShowcase || {})
        }
      };
    }
  } catch (e) {
    console.warn('Could not read from localStorage', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

export function saveContent(data) {
  let success = true;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
    success = false;
  }
  // Also post to backend if available
  try {
    const token = (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('mg_admin_auth_token')) ||
                  (typeof localStorage !== 'undefined' && localStorage.getItem('mg_admin_auth_token')) || '';
    fetch('/api/save-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data, null, 2)
    }).catch(() => {});
  } catch (_) {}
  window.dispatchEvent(new CustomEvent('mg_content_updated', { detail: data }));
  return success;
}

export async function syncContentFromBackend() {
  try {
    let res = await fetch('/api/content').catch(() => null);
    if (!res || !res.ok) {
      res = await fetch('/data/content.json').catch(() => null);
    }
    if (res && res.ok) {
      const serverData = await res.json();
      if (serverData && typeof serverData === 'object') {
        const local = loadContent();
        const serverClients = Array.isArray(serverData.clientele) && serverData.clientele.length > 0
          ? serverData.clientele
          : (Array.isArray(local.clientele) && local.clientele.length > 0 ? local.clientele : DEFAULT_DATA.clientele);
        const merged = {
          ...DEFAULT_DATA,
          ...local,
          ...serverData,
          clientele: serverClients
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        } catch (_) {}
        renderSiteContent(merged);
        return merged;
      }
    }
  } catch (_) {}
  return loadContent();
}

export function resetContent() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('mg_content_updated', { detail: DEFAULT_DATA }));
}

export function renderSiteContent(data) {
  if (!data) return;

  // 1. Render Products in #products (Seven Synchronized Architectural Windows)
  if (Array.isArray(data.products) && data.products.length > 0) {
    const windowsGrid = document.querySelector('.product-windows-grid');
    if (windowsGrid) {
      const pwindows = Array.from(windowsGrid.querySelectorAll('.pwindow'));

      data.products.forEach((p, i) => {
        let card = pwindows[i];
        if (!card) {
          card = document.createElement('article');
          card.className = `pwindow pwindow-${i % 7}`;
          card.id = `pwindow-${p.id || i}`;
          card.innerHTML = `
            <div class="pwindow-header-bar">
              <span class="pwindow-cat"></span>
              <span class="pwindow-metric"></span>
            </div>
            <h3 class="pwindow-title"></h3>
            <div class="pwindow-canvas-wrap">
              <canvas class="pwindow-canvas"></canvas>
            </div>
            <div class="pwindow-info">
              <p class="pwindow-desc"></p>
            </div>
          `;
          windowsGrid.appendChild(card);
          pwindows.push(card);
        } else {
          card.style.display = '';
        }

        // Title
        const titleEl = card.querySelector('.pwindow-title');
        if (titleEl && p.title !== undefined) titleEl.textContent = p.title;

        // Category / Badge
        const catEl = card.querySelector('.pwindow-cat');
        if (catEl && p.label !== undefined) catEl.textContent = p.label;

        // Metric
        const metricEl = card.querySelector('.pwindow-metric');
        if (metricEl && p.metric !== undefined) metricEl.textContent = p.metric;

        // Description
        const descEl = card.querySelector('.pwindow-desc');
        if (descEl && p.description !== undefined) descEl.textContent = p.description;

        // Custom Media (Image or Video uploaded from Admin)
        const canvasWrap = card.querySelector('.pwindow-canvas-wrap');
        if (canvasWrap) {
          let customMedia = canvasWrap.querySelector('.pwindow-custom-media');
          const canvas = canvasWrap.querySelector('.pwindow-canvas');

          if (p.mediaUrl && p.mediaUrl.trim()) {
            const isVideo = p.mediaType === 'video' || /\.(mp4|webm|mov|ogg)($|\?)/i.test(p.mediaUrl) || p.mediaUrl.startsWith('data:video');

            if (isVideo) {
              if (!customMedia || customMedia.tagName !== 'VIDEO') {
                customMedia?.remove();
                customMedia = document.createElement('video');
                customMedia.className = 'pwindow-custom-media';
                customMedia.autoplay = true;
                customMedia.loop = true;
                customMedia.muted = true;
                customMedia.playsInline = true;
                customMedia.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:4;border-radius:2px;';
                canvasWrap.appendChild(customMedia);
              }
              if (customMedia.src !== p.mediaUrl) {
                customMedia.src = p.mediaUrl;
              }
            } else {
              if (!customMedia || customMedia.tagName !== 'IMG') {
                customMedia?.remove();
                customMedia = document.createElement('img');
                customMedia.className = 'pwindow-custom-media';
                customMedia.alt = p.title || 'Product media';
                customMedia.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#020712;z-index:4;border-radius:2px;';
                canvasWrap.appendChild(customMedia);
              }
              if (customMedia.src !== p.mediaUrl) {
                customMedia.src = p.mediaUrl;
              }
            }
            if (canvas) canvas.style.opacity = '0';
          } else {
            if (customMedia) customMedia.remove();
            if (canvas) canvas.style.opacity = '1';
          }
        }
      });

      // If items removed, hide unused cards
      if (pwindows.length > data.products.length) {
        for (let j = data.products.length; j < pwindows.length; j++) {
          pwindows[j].style.display = 'none';
        }
      }
    }

    // Fallback for legacy .product-grid
    const grid = document.querySelector('.product-grid');
    if (grid) {
      grid.innerHTML = data.products.map(p => {
        const isVideo = p.mediaType === 'video' || /\.(mp4|webm|mov|ogg)($|\?)/i.test(p.mediaUrl || '') || (p.mediaUrl || '').startsWith('data:video');
        const mediaElement = p.mediaUrl
          ? (isVideo
              ? `<video src="${p.mediaUrl}" autoplay loop muted playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;"></video>`
              : `<img src="${p.mediaUrl}" alt="${p.title}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;" />`)
          : `<div class="${p.visualType || 'telescopic'}-stack"><i></i><i></i><i></i><i></i><i></i></div>`;

        return `
          <article class="product-card ${p.wide ? 'product-wide' : ''}">
            <div class="product-visual ${p.visualType || 'telescopic'}" style="position:relative;overflow:hidden;">
              ${mediaElement}
              <span class="visual-label" style="position:relative;z-index:2;">${p.label || 'PRODUCT'}</span>
            </div>
            <div class="product-meta">
              <div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
              </div>
              <a href="#contact" aria-label="Enquire about ${p.title}">↗</a>
            </div>
          </article>
        `;
      }).join('');
    }
  }

  // 1b. Render Final Showcase in #products
  if (data.finalShowcase) {
    const fs = data.finalShowcase;
    const badgeEl = document.getElementById('final-box-badge');
    const tagEl = document.getElementById('final-lockup-tag');
    const metricEl = document.getElementById('final-lockup-metric');
    const titleEl = document.getElementById('final-lockup-title');
    const descEl = document.getElementById('final-lockup-desc');

    if (badgeEl && fs.badge) badgeEl.textContent = `08 / MASTER DATUM · ${fs.badge}`;
    if (tagEl && fs.badge) tagEl.textContent = fs.badge;
    if (metricEl && fs.metric) metricEl.textContent = fs.metric;
    if (titleEl && fs.title) titleEl.textContent = fs.title;
    if (descEl && fs.description) descEl.textContent = fs.description;

    const mediaContainer = document.getElementById('final-media-container');
    const canvas = document.getElementById('final-cnc-canvas');
    if (mediaContainer) {
      if (fs.mediaUrl && fs.mediaUrl.trim()) {
        const isVideo = fs.mediaType === 'video' || /\.(mp4|webm|mov|ogg)($|\?)/i.test(fs.mediaUrl) || fs.mediaUrl.startsWith('data:video');
        if (isVideo) {
          mediaContainer.innerHTML = `<video id="final-stage-video" src="${fs.mediaUrl}" autoplay loop muted playsinline class="final-stage-media" style="position:absolute;inset:0;width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;display:block;background:#000;"></video>`;
          const vid = mediaContainer.querySelector('video');
          vid?.play().catch(() => {});
        } else {
          mediaContainer.innerHTML = `<img id="final-stage-img" src="${fs.mediaUrl}" alt="${fs.title || 'Final Machine Assembly'}" class="final-stage-media" style="position:absolute;inset:0;width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;display:block;">`;
        }
        mediaContainer.style.display = 'block';
        if (canvas) canvas.style.display = 'none';
      } else {
        mediaContainer.innerHTML = '';
        mediaContainer.style.display = 'none';
        if (canvas) canvas.style.display = 'block';
      }
    }
  }

  // 2. Render Capabilities
  if (data.capabilities) {
    const h2 = document.querySelector('#capabilities h2');
    if (h2 && data.capabilities.headline) h2.innerHTML = data.capabilities.headline;
    const lead = document.querySelector('.cap-lead');
    if (lead && data.capabilities.lead) lead.textContent = data.capabilities.lead;
    const capList = document.querySelector('.cap-list');
    if (capList && Array.isArray(data.capabilities.steps)) {
      capList.innerHTML = data.capabilities.steps.map(s => `
        <div>
          <b>${s.num}</b>
          <span><strong>${s.title}</strong><small>${s.detail}</small></span>
        </div>
      `).join('');
    }
  }

  // 3. Render Gallery
  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid && Array.isArray(data.gallery) && data.gallery.length > 0) {
    galleryGrid.innerHTML = data.gallery.map(g => `
      <figure class="${g.large ? 'gallery-large' : ''}">
        <img src="${g.image}" loading="lazy" alt="${g.alt || g.title}">
        <figcaption><span>${g.num}</span> ${g.title}</figcaption>
      </figure>
    `).join('');
  }

  // 4. Render Contact Details
  if (data.contact) {
    const phoneBlock = document.querySelector('.contact-details .detail-block:nth-child(1)');
    if (phoneBlock) {
      const p1 = data.contact.phone1 || '+91 80564 38763';
      const p2 = data.contact.phone2 || '+91 87781 21768';
      const p1Raw = p1.replace(/\s+/g, '');
      const p2Raw = p2.replace(/\s+/g, '');
      phoneBlock.innerHTML = `<span>CALL</span><a href="tel:${p1Raw}">${p1}</a><a href="tel:${p2Raw}">${p2}</a>`;
    }
    const emailBlock = document.querySelector('.contact-details .detail-block:nth-child(2)');
    if (emailBlock) {
      const email = data.contact.email || 'modernguideways@gmail.com';
      emailBlock.innerHTML = `<span>EMAIL</span><a href="mailto:${email}">${email}</a>`;
    }
    const addressBlock = document.querySelector('.contact-details .detail-block:nth-child(3)');
    if (addressBlock) {
      const addr = data.contact.address || '';
      const map = data.contact.mapUrl || '#';
      addressBlock.innerHTML = `<span>VISIT</span><p>${addr}</p><a class="map-link" href="${map}" target="_blank" rel="noreferrer">Open directions ↗</a>`;
    }
    const waBtn = document.querySelector('.contact-actions a.button-primary');
    if (waBtn && data.contact.whatsapp) {
      const msg = encodeURIComponent(data.contact.whatsappMessage || 'Hello Modern Guideways');
      waBtn.href = `https://wa.me/${data.contact.whatsapp}?text=${msg}`;
    }
  }

  // 5. Render Clientele Showcase
  const clienteleContainer = document.getElementById('clientele-container');
  if (clienteleContainer) {
    const clients = Array.isArray(data.clientele) ? data.clientele : [];
    const published = clients
      .filter(c => c && c.isPublished !== false)
      .sort((a, b) => (Number(a.displayOrder) || 0) - (Number(b.displayOrder) || 0));

    if (published.length === 0) {
      clienteleContainer.innerHTML = `
        <div class="clientele-empty-state">
          <div class="empty-state-badge">
            <span class="empty-icon">🛡️</span>
            <span class="empty-status">CONFIDENTIAL OEM SPECIFICATIONS</span>
          </div>
          <h3 class="empty-title">Industrial Partnerships in Progress</h3>
          <p class="empty-copy">
            Modern Guideways manufactures custom telescopic way covers, bellows and machine enclosures for leading machine tool builders and CNC manufacturing plants under direct NDA and proprietary specifications.
          </p>
          <div class="empty-actions">
            <a href="#contact" class="button-primary">Request Reference Applications <span>↗</span></a>
          </div>
        </div>
      `;
    } else {
      clienteleContainer.innerHTML = `
        <div class="clientele-grid">
          ${published.map(c => {
            const hasLogo = c.logo && c.logo.trim();
            const name = escapeHtml(c.companyName || 'Client Partner');
            const desc = c.description && c.description.trim() ? escapeHtml(c.description.trim()) : '';
            const url = c.websiteUrl && c.websiteUrl.trim() ? c.websiteUrl.trim() : '';

            return `
              <article class="client-card" id="client-${escapeHtml(c.id || '')}">
                ${hasLogo ? `
                  <div class="client-logo-frame">
                    <img src="${escapeHtml(c.logo)}" alt="${name} logo" loading="lazy" class="client-logo" onerror="this.onerror=null; this.closest('.client-card')?.classList.add('logo-load-error');" />
                    <div class="client-logo-fallback" aria-hidden="true">${name}</div>
                  </div>
                ` : `
                  <div class="client-logo-frame no-logo">
                    <div class="client-logo-fallback" aria-hidden="true">${name}</div>
                  </div>
                `}
                <div class="client-info">
                  <h3 class="client-name">${name}</h3>
                  ${desc ? `<p class="client-description">${desc}</p>` : ''}
                  ${url ? `
                    <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="client-website-link" aria-label="Visit ${name} website">
                      <span>Visit Website</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </a>
                  ` : ''}
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `;
    }
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
