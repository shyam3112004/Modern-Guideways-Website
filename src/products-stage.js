/**
 * Modern Guideways — Products Tab Kinematic Controller
 * Seven Synchronized Product Animations → Cinematic Mechanical Convergence → Complete CNC Machine
 */

export const PRODUCTS_CONFIG = [
  {
    id: 'bellows-cover',
    index: '01',
    category: 'WAY DEFENSE',
    name: 'Bellows Cover',
    metric: 'STROKE 2400mm',
    description: 'High-speed elastomeric and coated-fabric accordion covers protecting precision guideways from heavy coolant and metal fines.',
    folder: '/product_animations/Bellows_Cover',
    frameCount: 500,
    convergence: { x: 260, y: 140, scale: 0.55 }
  },
  {
    id: 'safety-enclosure',
    index: '02',
    category: 'PERIMETER ARMOR',
    name: 'Safety Enclosure',
    metric: 'ISO 23125 CERT',
    description: 'Heavy-gauge modular machine housing with safety interlocks, acoustic dampening, and total fluid containment.',
    folder: '/product_animations/Industrial_Safety_Enclosure_Cabinet',
    frameCount: 500,
    convergence: { x: 90, y: 120, scale: 0.55 }
  },
  {
    id: 'cnc-milling-machine',
    index: '03',
    category: 'CORE CENTER',
    name: 'CNC Milling Center',
    metric: '5-AXIS DATUM',
    description: 'High-torque machining center core serving as the structural datum for synchronized guideway protection systems.',
    folder: '/product_animations/Final',
    frameCount: 500,
    convergence: { x: -90, y: 120, scale: 0.55 }
  },
  {
    id: 'linear-guide-assemblies',
    index: '04',
    category: 'LINEAR PRECISION',
    name: 'Linear Guide Assemblies',
    metric: 'P-GRADE PRELOAD',
    description: 'Precision-ground recirculating rail and carriage assemblies delivering sub-micron motion linearity.',
    folder: '/product_animations/Precision_Linear_Guide_Assemblies',
    frameCount: 500,
    convergence: { x: -260, y: 140, scale: 0.55 }
  },
  {
    id: 'roller-guard',
    index: '05',
    category: 'RAPID APERTURE',
    name: 'Roller Guard',
    metric: 'SPEED 90 m/min',
    description: 'Spring-tensioned stainless steel roll-up curtains engineered for restricted clearances and high-frequency traverse.',
    folder: '/product_animations/Stainless_Steel_Accordion_Roller_Guard',
    frameCount: 500,
    convergence: { x: 200, y: -120, scale: 0.55 }
  },
  {
    id: 'telescopic-machine-cover',
    index: '06',
    category: 'HEAVY BALLISTIC',
    name: 'Telescopic Machine Cover',
    metric: '2.5mm COLD STEEL',
    description: 'Multi-stage box-section steel telescoping guards with internal shock dampers to withstand heavy chip bombardment.',
    folder: '/product_animations/Telescopic_Steel_Machine_Cover',
    frameCount: 500,
    convergence: { x: 0, y: -130, scale: 0.55 }
  },
  {
    id: 'steel-way-cover',
    index: '07',
    category: 'SLIDEWAYS SHIELD',
    name: 'Steel Way Cover',
    metric: 'POLY WIPERS',
    description: 'Precision-stepped telescoping steel way cover engineered for horizontal and vertical CNC bedways.',
    folder: '/product_animations/Telescoping_Steel_Way_Cover_on_Blue',
    frameCount: 500,
    convergence: { x: -200, y: -120, scale: 0.55 }
  }
];

export const FINAL_ASSEMBLY_CONFIG = {
  folder: '/product_animations/Final',
  frameCount: 500
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
    this.productCanvases = this.productElements.map(el => {
      let canvas = el.querySelector('.pwindow-canvas');
      if (!canvas) {
        const wrap = el.querySelector('.pwindow-canvas-wrap');
        if (wrap) {
          canvas = document.createElement('canvas');
          canvas.className = 'pwindow-canvas';
          wrap.appendChild(canvas);
        }
      }
      return canvas;
    });
    this.productContexts = this.productCanvases.map(canvas => canvas ? canvas.getContext('2d', { alpha: false }) : null);

    this.finalCncStage = this.section.querySelector('.final-cnc-stage');
    this.finalCanvas = this.section.querySelector('#final-cnc-canvas');
    if (this.finalCanvas) {
      this.finalContext = this.finalCanvas.getContext('2d', { alpha: false });
    }
  }

  setupCanvases() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.productCanvases.forEach(canvas => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(160, Math.floor(rect.width * dpr));
      const h = Math.max(100, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    });

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

    // Dynamic alignment vectors from 7 component centers to central datum
    svg.innerHTML = `
      <defs>
        <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2469b5" stop-opacity="0.2" />
          <stop offset="50%" stop-color="#56a8ff" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#3cd4eb" stop-opacity="0.9" />
        </linearGradient>
      </defs>
      <g id="guideline-paths">
        <line class="align-line l0" x1="18%" y1="25%" x2="50%" y2="50%" stroke="url(#laserGrad)" />
        <line class="align-line l1" x1="39%" y1="25%" x2="50%" y2="50%" stroke="url(#laserGrad)" />
        <line class="align-line l2" x1="61%" y1="25%" x2="50%" y2="50%" stroke="url(#laserGrad)" />
        <line class="align-line l3" x1="82%" y1="25%" x2="50%" y2="50%" stroke="url(#laserGrad)" />
        <line class="align-line l4" x1="23%" y1="75%" x2="50%" y2="50%" stroke="url(#laserGrad)" />
        <line class="align-line l5" x1="50%" y1="75%" x2="50%" y2="50%" stroke="url(#laserGrad)" />
        <line class="align-line l6" x1="77%" y1="75%" x2="50%" y2="50%" stroke="url(#laserGrad)" />
        <circle class="align-node" cx="50%" cy="50%" r="4" fill="#56a8ff" />
      </g>
    `;
  }

  getFrameUrl(folder, index) {
    const padIndex = String(index).padStart(4, '0');
    return `${folder}/frame_${padIndex}.webp`;
  }

  getImage(url, onLoadCallback) {
    let img = this.imageCache.get(url);
    if (img) {
      if (img.complete && img.naturalWidth > 0) {
        return img;
      }
      return null;
    }

    img = new Image();
    img.src = url;
    this.imageCache.set(url, img);

    img.onload = () => {
      if (onLoadCallback) onLoadCallback(img);
    };
    img.onerror = () => {
      this.imageCache.delete(url);
    };

    return null;
  }

  preloadInitialFrames() {
    // Immediately preload frame 1 of all 7 products
    PRODUCTS_CONFIG.forEach((prod, idx) => {
      const url = this.getFrameUrl(prod.folder, 1);
      this.getImage(url, (img) => {
        this.drawFrameToCanvas(this.productContexts[idx], this.productCanvases[idx], img);
      });
    });

    // Preload frame 1 of CNC final assembly
    const finalUrl1 = this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, 1);
    this.getImage(finalUrl1, (img) => {
      if (this.finalContext && this.finalCanvas) {
        this.drawFrameToCanvas(this.finalContext, this.finalCanvas, img);
      }
    });

    // Background staggered prefetch across the sequences
    setTimeout(() => {
      for (let f = 20; f <= 500; f += 25) {
        PRODUCTS_CONFIG.forEach(prod => {
          this.getImage(this.getFrameUrl(prod.folder, f));
        });
        this.getImage(this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, f));
      }
    }, 400);
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
    // Phase 1 (0.00 - 0.10): Intro
    // Phase 2 (0.10 - 0.55): 7 Simultaneous Animations
    // Phase 3 (0.55 - 0.70): Convergence
    // Phase 4 (0.70 - 0.85): Exploded Assembly
    // Phase 5 (0.85 - 1.00): Final Complete CNC Machine
    let phaseText = 'PHASE 01 / INTRODUCTION';
    let phaseNarrative = 'ENGINEERED MACHINE PROTECTION — SEVEN PRECISION SYSTEMS';

    if (p < 0.10) {
      phaseText = 'PHASE 01 / INITIALIZE ARRAYS';
      phaseNarrative = 'INITIALIZING 7 PRECISION GUIDANCE & ENCLOSURE SYSTEMS';
      const introNorm = Math.min(1, p / 0.10);
      
      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = `${0.35 + 0.65 * introNorm}`;
        this.grid.style.transform = `scale(${0.96 + 0.04 * introNorm})`;
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

      this.renderAllProductsAtFrame(1);

    } else if (p < 0.55) {
      phaseText = 'PHASE 02 / SIMULTANEOUS KINEMATICS';
      phaseNarrative = 'ALL 7 PROTECTION SYSTEMS KINEMATICALLY SYNCHRONIZED';
      const p2Norm = (p - 0.10) / 0.45;
      const activeFrame = Math.min(500, Math.max(1, Math.floor(p2Norm * 499) + 1));

      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = '1';
        this.grid.style.transform = 'none';
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

      this.renderAllProductsAtFrame(activeFrame);

    } else if (p < 0.70) {
      phaseText = 'PHASE 03 / MECHANICAL CONVERGENCE';
      phaseNarrative = 'COMPONENT TRAJECTORIES CONVERGING TOWARD CORE DATUM';
      const p3Norm = (p - 0.55) / 0.15;

      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = `${1 - p3Norm * 0.25}`;
        this.grid.style.pointerEvents = 'none';
      }

      this.applyConvergenceTransforms(p3Norm);

      if (this.guidelinesLayer) {
        this.guidelinesLayer.style.opacity = `${p3Norm * 0.85}`;
      }
      if (this.finalCncStage) {
        this.finalCncStage.style.opacity = `${p3Norm * 0.4}`;
        this.finalCncStage.style.transform = `scale(${0.92 + p3Norm * 0.04})`;
        this.finalCncStage.classList.remove('active');
      }
      if (this.cncLockup) this.cncLockup.classList.remove('visible');

      const holdingFrame = Math.min(500, Math.max(1, 450 + Math.floor(p3Norm * 50)));
      this.renderAllProductsAtFrame(holdingFrame);

      const cncAssemblyFrame = Math.min(200, Math.max(1, Math.floor(p3Norm * 200)));
      this.renderFinalCncAtFrame(cncAssemblyFrame);

    } else if (p < 0.85) {
      phaseText = 'PHASE 04 / EXPLODED ASSEMBLY';
      phaseNarrative = 'SEATING SUBSYSTEMS INTO INTEGRATED CNC MILLING ENVELOPE';
      const p4Norm = (p - 0.70) / 0.15;

      if (this.grid) {
        this.grid.style.visibility = 'visible';
        this.grid.style.opacity = `${1 - p4Norm}`;
        this.grid.style.pointerEvents = 'none';
      }

      this.applyConvergenceTransforms(1.0 + p4Norm * 0.35, 1.0 - p4Norm);

      if (this.guidelinesLayer) {
        this.guidelinesLayer.style.opacity = `${(1 - p4Norm) * 0.85}`;
      }
      if (this.finalCncStage) {
        this.finalCncStage.style.opacity = `${0.4 + p4Norm * 0.6}`;
        this.finalCncStage.style.transform = `scale(${0.96 + p4Norm * 0.04})`;
        this.finalCncStage.classList.add('active');
      }
      if (this.cncLockup) this.cncLockup.classList.remove('visible');

      const cncAssemblyFrame = Math.min(380, Math.max(200, 200 + Math.floor(p4Norm * 180)));
      this.renderFinalCncAtFrame(cncAssemblyFrame);

    } else {
      phaseText = 'PHASE 05 / COMPLETE INTEGRATION';
      phaseNarrative = 'MODERN GUIDEWAYS — FULLY INTEGRATED PRECISION CNC CENTER';
      const p5Norm = (p - 0.85) / 0.15;

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

      const finalVid = document.getElementById('final-stage-video');
      if (finalVid) {
        if (finalVid.paused) finalVid.play().catch(() => {});
      } else {
        const finalCinematicFrame = Math.min(500, Math.max(380, 380 + Math.floor(p5Norm * 120)));
        this.renderFinalCncAtFrame(finalCinematicFrame);
      }

      if (this.cncLockup) {
        this.cncLockup.classList.add('visible');
      }
    }

    if (p < 0.65) {
      const finalVid = document.getElementById('final-stage-video');
      if (finalVid && !finalVid.paused) finalVid.pause();
    }

    if (this.phaseTag) this.phaseTag.textContent = phaseText;
    if (this.phaseLabel) this.phaseLabel.textContent = phaseNarrative;
  }

  renderAllProductsAtFrame(frameIndex) {
    PRODUCTS_CONFIG.forEach((prod, idx) => {
      if (this.lastRenderedFrames[idx] === frameIndex) return;

      const url = this.getFrameUrl(prod.folder, frameIndex);
      const img = this.getImage(url, (loadedImg) => {
        this.drawFrameToCanvas(this.productContexts[idx], this.productCanvases[idx], loadedImg);
        this.lastRenderedFrames[idx] = frameIndex;
      });

      if (img) {
        this.drawFrameToCanvas(this.productContexts[idx], this.productCanvases[idx], img);
        this.lastRenderedFrames[idx] = frameIndex;
      }
    });

    // Prefetch surrounding frames
    for (let offset = 1; offset <= 3; offset++) {
      const nextF = Math.min(500, frameIndex + offset * 3);
      const prevF = Math.max(1, frameIndex - offset * 3);
      PRODUCTS_CONFIG.forEach(prod => {
        this.getImage(this.getFrameUrl(prod.folder, nextF));
        this.getImage(this.getFrameUrl(prod.folder, prevF));
      });
    }
  }

  renderFinalCncAtFrame(frameIndex) {
    if (!this.finalContext || !this.finalCanvas) return;
    if (this.lastRenderedFinalFrame === frameIndex) return;

    const url = this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, frameIndex);
    const img = this.getImage(url, (loadedImg) => {
      this.drawFrameToCanvas(this.finalContext, this.finalCanvas, loadedImg);
      this.lastRenderedFinalFrame = frameIndex;
    });

    if (img) {
      this.drawFrameToCanvas(this.finalContext, this.finalCanvas, img);
      this.lastRenderedFinalFrame = frameIndex;
    }

    for (let offset = 1; offset <= 3; offset++) {
      const nextF = Math.min(500, frameIndex + offset * 3);
      this.getImage(this.getFrameUrl(FINAL_ASSEMBLY_CONFIG.folder, nextF));
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
