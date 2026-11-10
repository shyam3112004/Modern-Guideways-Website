export const STORAGE_KEY = 'mg_site_data';

export const DEFAULT_DATA = {
  products: [
    {
      id: 'telescopic-covers',
      title: 'Telescopic Covers',
      label: '01 / WAY DEFENSE',
      metric: 'SPEED 60m/min · 1.5–3mm STEEL',
      description: 'Heavy-duty multi-section box steel covers with brass gliders and polyurethane wipers, safeguarding CNC, VMC and HMC machine bedways against sharp hot chips, heavy coolant washdown and mechanical collision.',
      mediaUrl: '/products/telescopic-covers.png',
      mediaType: 'image',
      mediaFileName: '1. Telescopic Covers.png'
    },
    {
      id: 'roller-covers',
      title: 'Roller Covers',
      label: '02 / RAPID APERTURE',
      metric: 'SPEED 90m/min · CONSTANT TENSION',
      description: 'High-velocity spring-tensioned roll-up curtains engineered with stainless steel bands or high-strength coated fabric for space-restricted machine axes, rapid cycle traverse, and coolant protection.',
      mediaUrl: '/products/roller-covers.png',
      mediaType: 'image',
      mediaFileName: '2. Roller Covers.png'
    },
    {
      id: 'apron-covers',
      title: 'Apron Covers',
      label: '03 / SLAT DEFENSE',
      metric: 'ALU-LINK · ARTICULATED SLATS',
      description: 'Flexible interlocking anodized aluminum slats with high-durability polyurethane hinge joints, providing rugged deflection against heavy chip bombardment, deep drop-offs, and roll-up way protection.',
      mediaUrl: '/products/apron-covers.png',
      mediaType: 'image',
      mediaFileName: '3Apron Covers.png'
    },
    {
      id: 'bellows',
      title: 'Bellows',
      label: '04 / EXPANSION SHIELD',
      metric: 'STROKE 1:10 · 120m/min',
      description: 'Precision accordion way bellows crafted from multi-ply coated fabric with internal PVC stiffener guides and optional stainless steel lamella scales, sealing laser, grinding, and multi-axis CNC slideways.',
      mediaUrl: '/products/bellows.png',
      mediaType: 'image',
      mediaFileName: '4. Bellows.png'
    },
    {
      id: 'lip-wipers',
      title: 'Lip Wipers',
      label: '05 / WAY WIPERS',
      metric: '85 SHORE A · PRELOADED LIP',
      description: 'Precision-molded polyurethane and NBR elastomer guide wipers with rigid metal backings, continuously clearing microscopic fines, abrasive swarf, and fluid film to prevent guideway scoring.',
      mediaUrl: '/products/lip-wipers.png',
      mediaType: 'image',
      mediaFileName: '5.Lip Wipers.png'
    },
    {
      id: 'enclosing-guard',
      title: 'Enclosing Guard',
      label: '06 / PERIMETER ARMOR',
      metric: 'ISO 23125 · CRCA STEEL',
      description: 'Complete modular machine tool safety cabins featuring heavy-gauge CRCA sheet steel panels, impact-resistant laminated polycarbonate viewing windows, safety interlocks, and 100% fluid mist containment.',
      mediaUrl: '/products/enclosing-guard.png',
      mediaType: 'image',
      mediaFileName: '6.Enclosing Guard.png'
    }
  ],
  finalShowcase: {
    title: 'MODERN GUIDEWAYS CNC 5-AXIS CENTER',
    badge: '07 / MASTER DATUM · CNC ASSEMBLY ANIMATION',
    metric: '500-FRAME SCROLL KINEMATICS',
    description: 'Six precision-engineered machine protection systems converging into a unified, fully protected CNC machining center.',
    mediaUrl: '',
    mediaType: 'animation',
    mediaFileName: 'Modern Guideways — CNC Assembly Animation'
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
        "id": "client-marks-engineering",
        "companyName": "Marks Engineering Works Pvt Ltd",
        "logo": "/uploads/Marks_Engineering_Works_Pvt_Ltd.jpeg",
        "logoFileName": "Marks Engineering Works Pvt Ltd.jpeg",
        "description": "Leading CNC machine tool, precision fabrication, and heavy industrial machinery manufacturer.",
        "websiteUrl": "https://www.marksengineeringworks.com/",
        "displayOrder": 1,
        "isPublished": true,
        "createdAt": "2026-11-09T08:00:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-bhavani-industries",
        "companyName": "Bhavani Industries",
        "logo": "/uploads/Bhavani_industries.jpeg",
        "logoFileName": "Bhavani industries.jpeg",
        "description": "Precision machined components manufacturer with 120+ CNCs serving automotive, electronics, and medical industries.",
        "websiteUrl": "https://www.bhavaniindustries.in/",
        "displayOrder": 2,
        "isPublished": true,
        "createdAt": "2026-11-09T08:00:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-dmw-cnc",
        "companyName": "DMW CNC Solutions India Private Limited",
        "logo": "/uploads/DMW_CNC_Solutions_India.jpeg",
        "logoFileName": "DMW CNC Solutions India.jpeg",
        "description": "Premier OEM supplier for high-precision CNC turned and milled components, sub-assemblies, and heavy machinery.",
        "websiteUrl": "https://www.dmwindia.com/",
        "displayOrder": 3,
        "isPublished": true,
        "createdAt": "2026-11-10T01:50:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-jrvd-defspace",
        "companyName": "JRVD DefSpace Pvt Ltd",
        "logo": "/uploads/JRVD_DefSpace.jpeg",
        "logoFileName": "JRVD DefSpace.jpeg",
        "description": "AS9100-certified precision engineering, CNC/VMC/HMC machining, and metal 3D printing for aerospace and defense.",
        "websiteUrl": "https://jrvddefspace.com/",
        "displayOrder": 4,
        "isPublished": true,
        "createdAt": "2026-11-10T01:50:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-rv-machine-tools",
        "companyName": "R.V. Machine Tools",
        "logo": "/uploads/RV_Machine_Tools.jpeg",
        "logoFileName": "R.V.Machine Tools.jpeg",
        "description": "Renowned manufacturer of high-precision heavy-duty CNC lathes, turning centers, and special purpose machinery.",
        "websiteUrl": "https://www.rvmachinetools.in/",
        "displayOrder": 5,
        "isPublished": true,
        "createdAt": "2026-11-09T05:09:33.612Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-technocast-foundry",
        "companyName": "Technocast Foundry Pvt Ltd",
        "logo": "/uploads/Technocast_Foundry_Pvt_Ltd.jpeg",
        "logoFileName": "Technocast Foundry Pvt Ltd.jpeg",
        "description": "Manufacturer and global exporter of high-grade grey iron, ductile (SG) iron castings, and machined components.",
        "websiteUrl": "https://technocastfoundry.com/",
        "displayOrder": 6,
        "isPublished": true,
        "createdAt": "2026-11-10T01:50:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-akr-machine-tools",
        "companyName": "AKR Machine Tools",
        "logo": "/uploads/AKR_Machine_Tools.jpeg",
        "logoFileName": "AKR Machine Tools.jpeg",
        "description": "Specialist manufacturer of Special Purpose Machines (SPMs), multi-spindle drilling/tapping heads, and machine automation.",
        "websiteUrl": "https://akrmachinetools.com/",
        "displayOrder": 7,
        "isPublished": true,
        "createdAt": "2026-11-10T01:50:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-velson-drilling",
        "companyName": "Velson Drilling Dynamics",
        "logo": "/uploads/VELSON_Drilling_Dynamics.jpeg",
        "logoFileName": "VELSON Drilling Dynamics.jpeg",
        "description": "Engineered water-well, exploration, blast hole, and specialised heavy mining & piling drilling equipment.",
        "websiteUrl": "https://velson.in/",
        "displayOrder": 8,
        "isPublished": true,
        "createdAt": "2026-11-09T08:00:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-sun-engineering",
        "companyName": "Sun Engineering",
        "logo": "/uploads/Sun_Engineering.jpeg",
        "logoFileName": "sun Engineering.jpeg",
        "description": "Trusted partner for precision sheet metal fabrication, CNC laser cutting, turret punching, and precision bending.",
        "websiteUrl": "https://sunengineering.in/",
        "displayOrder": 9,
        "isPublished": true,
        "createdAt": "2026-11-10T01:50:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    },
    {
        "id": "client-yume-newturn",
        "companyName": "Yume Newturn Private Limited",
        "logo": "/uploads/Yume_Newturn_Pvt_Ltd.jpeg",
        "logoFileName": "Yume Newturn Pvt Ltd.jpeg",
        "description": "Reputed manufacturer of Special Purpose Machines (SPMs), hydraulic systems, and 5-axis precision CNC/VMC machining.",
        "websiteUrl": "https://www.yumenewturn.com/",
        "displayOrder": 10,
        "isPublished": true,
        "createdAt": "2026-11-09T08:00:00.000Z",
        "updatedAt": "2026-11-10T01:50:00.000Z"
    }
]
};

export function loadContent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Detect legacy mock data or missing products
      const isLegacy = !parsed._isCustomized && (!Array.isArray(parsed.products) ||
        parsed.products.length === 0 ||
        parsed.products.some(p => p.id === 'prod-1' || p.visualType || p.id === 'prod-2'));

      if (isLegacy) {
        parsed.products = JSON.parse(JSON.stringify(DEFAULT_DATA.products));
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...DEFAULT_DATA, ...parsed }));
        } catch (_) {}
      }
      
      // Auto-upgrade legacy mock clients (ZF, JK Maini, AKR Express, M-Monogram)
      const hasLegacyClients = Array.isArray(parsed.clientele) &&
        parsed.clientele.some(c => c && (c.id === 'client-zf' || c.id === 'client-jk-maini' || c.id === 'client-akr' || c.id === 'client-m-monogram' || c.companyName === 'ZF Group'));
      if (hasLegacyClients) {
        parsed.clientele = JSON.parse(JSON.stringify(DEFAULT_DATA.clientele));
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...parsed, clientele: DEFAULT_DATA.clientele }));
        } catch (_) {}
      }

      const clientList = Array.isArray(parsed.clientele)
        ? parsed.clientele
        : JSON.parse(JSON.stringify(DEFAULT_DATA.clientele));
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
  data._isCustomized = true;
  data._updatedAt = Date.now();
  data.updatedAt = new Date().toISOString();

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

export async function syncContentFromBackend(forceServer = false) {
  try {
    let res = await fetch('/api/content', { cache: 'no-store' }).catch(() => null);
    if (!res || !res.ok) {
      res = await fetch('/data/content.json', { cache: 'no-store' }).catch(() => null);
    }
    if (res && res.ok) {
      const serverData = await res.json();
      if (serverData && typeof serverData === 'object') {
        const local = loadContent();

        // If local has been customized by admin and forceServer is false, keep admin's custom data!
        if (local && local._isCustomized && !forceServer) {
          const serverTimestamp = serverData._updatedAt ? new Date(serverData._updatedAt).getTime() : 0;
          const localTimestamp = local._updatedAt || (local.updatedAt ? new Date(local.updatedAt).getTime() : 0);

          if (serverTimestamp <= localTimestamp) {
            // Local is newer or equal: preserve local edits!
            renderSiteContent(local);
            return local;
          }
        }

        const serverClients = Array.isArray(serverData.clientele) && serverData.clientele.length > 0
          ? serverData.clientele
          : (Array.isArray(local?.clientele) && local.clientele.length > 0 ? local.clientele : DEFAULT_DATA.clientele);

        const merged = {
          ...DEFAULT_DATA,
          ...serverData,
          clientele: serverClients,
          _isCustomized: false
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
          card.className = `pwindow pwindow-${i % 6}`;
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
                customMedia.loading = 'eager';
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

    if (badgeEl && fs.badge) {
      badgeEl.textContent = fs.badge.startsWith('0') ? fs.badge : `07 / MASTER DATUM · ${fs.badge}`;
    }
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
