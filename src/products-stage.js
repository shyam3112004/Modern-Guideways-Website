/**
 * Modern Guideways — Products Tab Kinematic Controller
 * Six Core Machine Protection Systems → Precision Mechanical Convergence → Complete CNC Machine Assembly
 */

export const PRODUCTS_CONFIG = [
  {
    id: 'telescopic-covers',
    index: '01',
    category: 'WAY DEFENSE',
    name: 'Telescopic Covers',
    metric: 'SPEED 60m/min · 1.5–3mm STEEL',
    description: 'Heavy-duty multi-section box steel covers with brass gliders and polyurethane wipers, safeguarding CNC, VMC and HMC machine bedways against sharp hot chips, heavy coolant washdown and mechanical collision.',
    image: '/products/telescopic-covers.png',
    convergence: { x: 300, y: 140, scale: 0.55 }
  },
  {
    id: 'roller-covers',
    index: '02',
    category: 'RAPID APERTURE',
    name: 'Roller Covers',
    metric: 'SPEED 90m/min · CONSTANT TENSION',
    description: 'High-velocity spring-tensioned roll-up curtains engineered with stainless steel bands or high-strength coated fabric for space-restricted machine axes, rapid cycle traverse, and coolant protection.',
    image: '/products/roller-covers.png',
    convergence: { x: 0, y: 150, scale: 0.55 }
  },
  {
    id: 'apron-covers',
    index: '03',
    category: 'SLAT DEFENSE',
    name: 'Apron Covers',
    metric: 'ALU-LINK · ARTICULATED SLATS',
    description: 'Flexible interlocking anodized aluminum slats with high-durability polyurethane hinge joints, providing rugged deflection against heavy chip bombardment, deep drop-offs, and roll-up way protection.',
    image: '/products/apron-covers.png',
    convergence: { x: -300, y: 140, scale: 0.55 }
  },
  {
    id: 'bellows',
    index: '04',
    category: 'EXPANSION SHIELD',
    name: 'Bellows',
    metric: 'STROKE 1:10 · 120m/min',
    description: 'Precision accordion way bellows crafted from multi-ply coated fabric with internal PVC stiffener guides and optional stainless steel lamella scales, sealing laser, grinding, and multi-axis CNC slideways.',
    image: '/products/bellows.png',
    convergence: { x: 300, y: -140, scale: 0.55 }
  },
  {
    id: 'lip-wipers',
    index: '05',
    category: 'WAY WIPERS',
    name: 'Lip Wipers',
    metric: '85 SHORE A · PRELOADED LIP',
    description: 'Precision-molded polyurethane and NBR elastomer guide wipers with rigid metal backings, continuously clearing microscopic fines, abrasive swarf, and fluid film to prevent guideway scoring.',
    image: '/products/lip-wipers.png',
    convergence: { x: 0, y: -150, scale: 0.55 }
  },
  {
    id: 'enclosing-guard',
    index: '06',
    category: 'PERIMETER ARMOR',
    name: 'Enclosing Guard',
    metric: 'ISO 23125 · CRCA STEEL',
    description: 'Complete modular machine tool safety cabins featuring heavy-gauge CRCA sheet steel panels, impact-resistant laminated polycarbonate viewing windows, safety interlocks, and 100% fluid mist containment.',
    image: '/products/enclosing-guard.png',
    convergence: { x: -300, y: -140, scale: 0.55 }
  }
];

export const FINAL_ASSEMBLY_CONFIG = {
  folder: '/cnc_assembly',
  frameCount: 500,
  prefix: 'frame_',
  pad: 5,
  extension: '.jpg'
};

export class ProductsStageController {
  constructor(sectionSelector = '#products') {
    this.section = document.querySelector(sectionSelector);
    if (!this.section) return;

    this.grid = this.section.querySelector('.product-windows-grid');
    this.guidelinesLayer = this.section.querySelector('.assembly-guidelines-layer');
    this.finalCncStage = this.section.querySelector('.final-cnc-stage');
    this.finalCanvas = this.section.querySelector('#final-cnc-canvas');
    this.cncLockup = this.section.querySelector('.cnc-lockup-content');
    
    this.phaseTag = this.section.querySelector('.stage-phase-tag');
    this.timelinePct = this.section.querySelector('.timeline-pct');
    this.timelineFill = this.section.querySelector('.timeline-track-fill');
    this.phaseLabel = this.section.querySelector('.timeline-phase-label');

    // Canvas & Context References for 7 products
    this.productElements = [];
    this.productCanvases = [];
    this.productContexts = [];
    this.imageCache = new Map(); // url -> Image

    this.lastRenderedFrames = new Int32Array(PRODUCTS_CONFIG.length).fill(-1);
    this.lastRenderedFinalFrame = -1;
    this.currentProgress = -1;
    this.isRendering = false;
    window.__mg_controller = this;

    this.init();
  }

  init() {
    this.setupProductCards();
    this.setupCanvases();
    this.setupGuidelines();
    this.preloadInitialFrames();

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });

    // Initial paint
    this.onResize();
    this.updateProgress(0);
  }

  setupProductCards() {
    this.grid = this.section.querySelector('.product-windows-grid');
    this.productElements = Array.from(this.section.querySelectorAll('.pwindow'));
    this.productCanvases = [];
    this.productContexts = [];

    this.finalCncStage = this.section.querySelector('.final-cnc-stage');
    this.finalCanvas = this.section.querySelector('#final-cnc-canvas');
    if (this.finalCanvas) {
      this.finalContext = this.finalCanvas.getContext('2d', { alpha: false });
    }
  }

  setupCanvases() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (this.finalCanvas) {
      const rect = this.finalCanvas.getBoundingClientRect();
      const w = Math.max(320, Math.floor(rect.width * dpr));
      const h = Math.max(200, Math.floor(rect.height * dpr));
      if (this.finalCanvas.width !== w || this.finalCanvas.height !== h) {
        this.finalCanvas.width = w;
        this.finalCanvas.height = h;
      }
    }
  }

  setupGuidelines() {
    if (!this.guidelinesLayer) return;
    const svg = this.guidelinesLayer.querySelector('.assembly-svg');
    if (!svg) return;

    // Dynamic alignment vectors from 6 component centers (3 columns x 2 rows) to central datum (50%, 50%)
    svg.innerHTML = `
      <defs>
        <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2469b5" stop-opacity="0.2" />
          <stop offset="50%" stop-color="#56a8ff" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#3cd4eb" stop-opacity="0.9" />
        </linearGradient>
      </defs>
      <g id="guideline-paths">
        <line class="align-line l0" x1="17%" y1="25%" x2="50%" y2="50%" stroke="url(#laserGrad)" stroke-width="1.5" stroke-dasharray="4 4" />
        <line class="align-line l1" x1="50%" y1="25%" x2="50%" y2="50%" stroke="url(#laserGrad)" stroke-width="1.5" stroke-dasharray="4 4" />
        <line class="align-line l2" x1="83%" y1="25%" x2="50%" y2="50%" stroke="url(#laserGrad)" stroke-width="1.5" stroke-dasharray="4 4" />
        <line class="align-line l3" x1="17%" y1="75%" x2="50%" y2="50%" stroke="url(#laserGrad)" stroke-width="1.5" stroke-dasharray="4 4" />
        <line class="align-line l4" x1="50%" y1="75%" x2="50%" y2="50%" stroke="url(#laserGrad)" stroke-width="1.5" stroke-dasharray="4 4" />
        <line class="align-line l5" x1="83%" y1="75%" x2="50%" y2="50%" stroke="url(#laserGrad)" stroke-width="1.5" stroke-dasharray="4 4" />
        <circle class="align-node" cx="50%" cy="50%" r="5" fill="#56a8ff" />
        <circle class="align-node-outer" cx="50%" cy="50%" r="12" fill="none" stroke="#56a8ff" stroke-width="1" opacity="0.6" />
      </g>
    `;
  }

  getFrameUrl(folder, index) {
    const pad = FINAL_ASSEMBLY_CONFIG.pad || 5;
    const prefix = FINAL_ASSEMBLY_CONFIG.prefix || 'frame_';
    const ext = FINAL_ASSEMBLY_CONFIG.extension || '.jpg';
    const padIndex = String(index).padStart(pad, '0');
    return `${folder}/${prefix}${padIndex}${ext}`;
  }

  getImage(url, onLoadCallback) {
    let img = this.imageCache.get(url);
    if (img) {
      if (img.complete && img.naturalWidth > 0) {
        if (onLoadCallback) onLoadCallback(img);
        return img;
      }
      if (onLoadCallback) {
        img.addEventListener('load', () => onLoadCallback(img), { once: true });
      }
      return null;
    }

    img = new Image();
    if (onLoadCallback) {
      img.addEventListener('load', () => onLoadCallback(img), { once: true });
    }
    img.onerror = () => {
      this.imageCache.delete(url);
    };
    img.src = url;
    this.imageCache.set(url, img);

    return null;
  }

  preloadInitialFrames() {
    // Preload frame 1 of CNC final assembly immediately and render
    const url1 = this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, 1);
    this.getImage(url1, (img) => {
      if (this.finalContext && this.finalCanvas) {
        this.drawFrameToCanvas(this.finalContext, this.finalCanvas, img);
      }
    });

    // Preload frame 500
    const url500 = this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, 500);
    this.getImage(url500);

    // Staggered background prefetch of keyframe anchors across the 500 frames
    setTimeout(() => {
      for (let f = 1; f <= 500; f += 5) {
        this.getImage(this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, f));
      }
    }, 200);

    setTimeout(() => {
      for (let f = 1; f <= 500; f++) {
        this.getImage(this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, f));
      }
    }, 1200);
  }

  measureSection() {
    if (!this.section) return;
    const rect = this.section.getBoundingClientRect();
    this.sectionTop = rect.top + window.scrollY;
    this.sectionHeight = this.section.offsetHeight;
    this.totalScroll = Math.max(1, this.sectionHeight - window.innerHeight);
  }

  onResize() {
    this.setupCanvases();
    this.measureSection();
    this.lastRenderedFrames.fill(-1);
    this.lastRenderedFinalFrame = -1;
    this.render();
  }

  onScroll() {
    if (!this.section) return;
    const rect = this.section.getBoundingClientRect();
    const totalScroll = Math.max(1, this.section.offsetHeight - window.innerHeight);
    const currentScroll = -rect.top;
    const progress = Math.min(1, Math.max(0, currentScroll / totalScroll));
    this.updateProgress(progress);
  }

  updateProgress(progress) {
    if (Math.abs(this.currentProgress - progress) < 0.0005) return;
    this.currentProgress = progress;

    if (!this.isRendering) {
      this.isRendering = true;
      requestAnimationFrame(() => {
        this.render();
        this.isRendering = false;
      });
    }
  }

  render() {
    const p = this.currentProgress;

    // Telemetry updates
    const pctInt = Math.round(p * 100);
    if (this.timelinePct) this.timelinePct.textContent = `${pctInt}%`;
    if (this.timelineFill) this.timelineFill.style.width = `${p * 100}%`;

    // Phase Logic:
    // Phase 1 (0.00 - 0.20): Six Engineered Systems
    // Phase 2 (0.20 - 0.45): Kinematic Datum Alignment
    // Phase 3 (0.45 - 0.70): Mechanical Convergence
    // Phase 4 (0.70 - 0.88): Exploded CNC Assembly
    // Phase 5 (0.88 - 1.00): Fully Integrated CNC Machining Center
    let phaseText = 'PHASE 01 / SIX ENGINEERED SYSTEMS';
    let phaseNarrative = 'PRECISION MACHINE PROTECTION — SIX SPECIALIZED SYSTEMS';

    if (p < 0.20) {
      phaseText = 'PHASE 01 / SIX ENGINEERED SYSTEMS';
      phaseNarrative = 'PRECISION MACHINE PROTECTION — SIX SPECIALIZED SYSTEMS';
      const introNorm = Math.min(1, p / 0.20);
      
      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = `${0.4 + 0.6 * introNorm}`;
        this.grid.style.transform = `scale(${0.98 + 0.02 * introNorm})`;
        this.grid.style.pointerEvents = 'auto';
      }
      this.resetProductCardTransforms();

      if (this.guidelinesLayer) this.guidelinesLayer.style.opacity = '0';
      if (this.finalCncStage) {
        this.finalCncStage.style.opacity = '0';
        this.finalCncStage.style.transform = 'scale(0.92)';
        this.finalCncStage.classList.remove('active');
      }
      if (this.cncLockup) this.cncLockup.classList.remove('visible');

      this.renderFinalCncAtFrame(1);

    } else if (p < 0.45) {
      phaseText = 'PHASE 02 / KINEMATIC DATUM ALIGNMENT';
      phaseNarrative = 'SIX SYSTEMS ALIGNED TO CENTRAL MACHINE DATUM';
      const p2Norm = (p - 0.20) / 0.25;

      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = '1';
        this.grid.style.transform = 'none';
        this.grid.style.pointerEvents = 'auto';
      }
      this.resetProductCardTransforms();

      if (this.guidelinesLayer) this.guidelinesLayer.style.opacity = `${p2Norm * 0.35}`;
      if (this.finalCncStage) {
        this.finalCncStage.style.opacity = '0';
        this.finalCncStage.style.transform = 'scale(0.92)';
        this.finalCncStage.classList.remove('active');
      }
      if (this.cncLockup) this.cncLockup.classList.remove('visible');

      this.renderFinalCncAtFrame(1);

    } else if (p < 0.70) {
      phaseText = 'PHASE 03 / MECHANICAL CONVERGENCE';
      phaseNarrative = 'WAY DEFENSE & ENCLOSURE CONVERGING TOWARD CORE DATUM';
      const p3Norm = (p - 0.45) / 0.25;

      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = `${1 - p3Norm * 0.3}`;
        this.grid.style.pointerEvents = 'none';
      }

      this.applyConvergenceTransforms(p3Norm);

      if (this.guidelinesLayer) {
        this.guidelinesLayer.style.opacity = `${0.35 + p3Norm * 0.55}`;
      }
      if (this.finalCncStage) {
        this.finalCncStage.style.opacity = `${p3Norm * 0.5}`;
        this.finalCncStage.style.transform = `scale(${0.92 + p3Norm * 0.04})`;
        this.finalCncStage.classList.remove('active');
      }
      if (this.cncLockup) this.cncLockup.classList.remove('visible');

      const cncAssemblyFrame = Math.min(180, Math.max(1, Math.floor(1 + p3Norm * 179)));
      this.renderFinalCncAtFrame(cncAssemblyFrame);

    } else if (p < 0.88) {
      phaseText = 'PHASE 04 / EXPLODED CNC ASSEMBLY';
      phaseNarrative = 'SEATING SUBSYSTEMS INTO INTEGRATED CNC MILLING ENVELOPE';
      const p4Norm = (p - 0.70) / 0.18;

      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = `${1 - p4Norm}`;
        this.grid.style.pointerEvents = 'none';
      }

      this.applyConvergenceTransforms(1.0 + p4Norm * 0.3, 1.0 - p4Norm);

      if (this.guidelinesLayer) {
        this.guidelinesLayer.style.opacity = `${(1 - p4Norm) * 0.9}`;
      }
      if (this.finalCncStage) {
        this.finalCncStage.style.opacity = `${0.5 + p4Norm * 0.5}`;
        this.finalCncStage.style.transform = `scale(${0.96 + p4Norm * 0.04})`;
        this.finalCncStage.classList.add('active');
      }
      if (this.cncLockup) this.cncLockup.classList.remove('visible');

      const cncAssemblyFrame = Math.min(450, Math.max(180, Math.floor(180 + p4Norm * 270)));
      this.renderFinalCncAtFrame(cncAssemblyFrame);

    } else {
      phaseText = 'PHASE 05 / COMPLETE INTEGRATION';
      phaseNarrative = 'MODERN GUIDEWAYS — FULLY INTEGRATED PRECISION CNC CENTER';
      const p5Norm = (p - 0.88) / 0.12;

      if (this.grid) {
        this.grid.style.visibility = 'hidden';
        this.grid.style.opacity = '0';
        this.grid.style.pointerEvents = 'none';
      }
      if (this.guidelinesLayer) {
        this.guidelinesLayer.style.opacity = '0';
      }

      if (this.finalCncStage) {
        this.finalCncStage.style.opacity = '1';
        this.finalCncStage.style.transform = 'scale(1)';
        this.finalCncStage.classList.add('active');
      }

      const cncAssemblyFrame = Math.min(500, Math.max(450, Math.floor(450 + p5Norm * 50)));
      this.renderFinalCncAtFrame(cncAssemblyFrame);

      if (this.cncLockup) {
        this.cncLockup.classList.add('visible');
      }
    }

    if (this.phaseTag) this.phaseTag.textContent = phaseText;
    if (this.phaseLabel) this.phaseLabel.textContent = phaseNarrative;

    const finalBadge = document.getElementById('final-box-badge');
    if (finalBadge) {
      const frameNum = (p < 0.45) ? 1 : (p < 0.70 ? Math.min(180, Math.max(1, Math.floor(1 + ((p - 0.45) / 0.25) * 179))) : (p < 0.88 ? Math.min(450, Math.max(180, Math.floor(180 + ((p - 0.70) / 0.18) * 270))) : Math.min(500, Math.max(450, Math.floor(450 + ((p - 0.88) / 0.12) * 50)))));
      finalBadge.textContent = `07 / MASTER DATUM · CNC ASSEMBLY (${String(frameNum).padStart(3, '0')}/500)`;
    }
  }

  renderAllProductsAtFrame() {
    // 6 Products are rendered with high-res photos via .pwindow-custom-media
  }

  renderFinalCncAtFrame(frameIndex) {
    if (!this.finalContext || !this.finalCanvas) return;
    frameIndex = Math.min(FINAL_ASSEMBLY_CONFIG.frameCount, Math.max(1, Math.round(frameIndex)));
    if (this.lastRenderedFinalFrame === frameIndex) return;

    const url = this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, frameIndex);
    const img = this.getImage(url, (loadedImg) => {
      this.drawFrameToCanvas(this.finalContext, this.finalCanvas, loadedImg);
      this.lastRenderedFinalFrame = frameIndex;
    });

    if (img) {
      this.drawFrameToCanvas(this.finalContext, this.finalCanvas, img);
      this.lastRenderedFinalFrame = frameIndex;
    } else {
      // Seek nearest loaded neighbor in imageCache to maintain continuity without flickering
      for (let offset = 1; offset <= 10; offset++) {
        const prevUrl = this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, Math.max(1, frameIndex - offset));
        const prevImg = this.imageCache.get(prevUrl);
        if (prevImg && prevImg.complete && prevImg.naturalWidth > 0) {
          this.drawFrameToCanvas(this.finalContext, this.finalCanvas, prevImg);
          break;
        }
        const nextUrl = this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, Math.min(FINAL_ASSEMBLY_CONFIG.frameCount, frameIndex + offset));
        const nextImg = this.imageCache.get(nextUrl);
        if (nextImg && nextImg.complete && nextImg.naturalWidth > 0) {
          this.drawFrameToCanvas(this.finalContext, this.finalCanvas, nextImg);
          break;
        }
      }
    }

    // Prefetch surrounding frames for responsive scrub
    for (let offset = 1; offset <= 4; offset++) {
      const nextF = Math.min(FINAL_ASSEMBLY_CONFIG.frameCount, frameIndex + offset);
      const prevF = Math.max(1, frameIndex - offset);
      this.getImage(this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, nextF));
      this.getImage(this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, prevF));
    }
  }

  drawFrameToCanvas(ctx, canvas, img) {
    if (!ctx || !canvas || !img || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.min(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.fillStyle = '#020712';
    ctx.fillRect(0, 0, cw, ch);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, iw, ih, dx, dy, dw, dh);
  }

  applyConvergenceTransforms(t, opacity = 1.0) {
    this.productElements.forEach((el, idx) => {
      const prod = PRODUCTS_CONFIG[idx];
      if (!prod || !prod.convergence) return;

      const tx = prod.convergence.x * t;
      const ty = prod.convergence.y * t;
      const scale = 1.0 - (1.0 - prod.convergence.scale) * t;

      el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
      el.style.opacity = `${opacity}`;

      const header = el.querySelector('.pwindow-header-bar');
      const info = el.querySelector('.pwindow-info');
      const title = el.querySelector('.pwindow-title');
      const fadeText = Math.max(0, 1.0 - t * 1.5);

      if (header) header.style.opacity = `${fadeText}`;
      if (info) info.style.opacity = `${fadeText}`;
      if (title) title.style.opacity = `${fadeText}`;
    });
  }

  resetProductCardTransforms() {
    this.productElements.forEach(el => {
      el.style.transform = 'none';
      el.style.opacity = '1';
      const header = el.querySelector('.pwindow-header-bar');
      const info = el.querySelector('.pwindow-info');
      const title = el.querySelector('.pwindow-title');
      if (header) header.style.opacity = '1';
      if (info) info.style.opacity = '1';
      if (title) title.style.opacity = '1';
    });
  }
}

export function initProductsStage() {
  return new ProductsStageController('#products');
}
