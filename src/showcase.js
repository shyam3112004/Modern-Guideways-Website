/**
 * Modern Guideways — Premium Horizontal Product Showcase Controller
 * Handles smooth horizontal transitions, gestures, wheel scrubbing, and accessible controls.
 */

export class ProductShowcase {
  constructor(containerSelector = '#product-showcase') {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;

    this.track = this.container.querySelector('#showcase-track');
    this.slides = Array.from(this.track.querySelectorAll('.showcase-slide'));
    this.prevBtn = this.container.querySelector('#showcase-prev');
    this.nextBtn = this.container.querySelector('#showcase-next');
    this.currNumEl = this.container.querySelector('#showcase-curr');
    this.totalNumEl = this.container.querySelector('.total-num');
    this.markersContainer = this.container.querySelector('#showcase-markers');

    this.currentIndex = 0;
    this.isAnimating = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.wheelLock = false;

    this.init();
  }

  init() {
    this.slides = Array.from(this.track.querySelectorAll('.showcase-slide'));
    if (this.slides.length === 0) return;

    if (this.totalNumEl) {
      this.totalNumEl.textContent = String(this.slides.length).padStart(2, '0');
    }

    this.renderMarkers();
    this.bindEvents();
    this.updateUI(0, 'init');
  }

  renderMarkers() {
    if (!this.markersContainer) return;
    this.markersContainer.innerHTML = this.slides.map((_, i) => `
      <button class="marker ${i === 0 ? 'active' : ''}" data-index="${i}" role="tab" aria-selected="${i === 0}" aria-label="Product slide ${i + 1}">
        <span class="marker-fill"></span>
      </button>
    `).join('');

    this.markers = Array.from(this.markersContainer.querySelectorAll('.marker'));
    this.markers.forEach(m => {
      m.addEventListener('click', () => {
        const idx = parseInt(m.dataset.index, 10);
        this.goToSlide(idx);
      });
    });
  }

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Keyboard Navigation
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.prev();
      }
    });

    // Touch Gestures for mobile
    this.container.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].clientX - this.touchStartX;
      const deltaY = e.changedTouches[0].clientY - this.touchStartY;
      // Only trigger if horizontal intent is greater than vertical
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
        if (deltaX < 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });

    // Wheel & Trackpad Horizontal Intent
    this.container.addEventListener('wheel', (e) => {
      // Detect horizontal wheel swipe
      if (Math.abs(e.deltaX) > 30 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (this.wheelLock) return;
        this.wheelLock = true;
        if (e.deltaX > 0) this.next();
        else this.prev();
        setTimeout(() => { this.wheelLock = false; }, 400);
      }
    }, { passive: true });
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.goToSlide(this.currentIndex + 1, 'next');
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1, 'prev');
    }
  }

  goToSlide(newIndex, forcedDirection = null) {
    if (newIndex === this.currentIndex || this.isAnimating) return;
    if (newIndex < 0 || newIndex >= this.slides.length) return;

    const direction = forcedDirection || (newIndex > this.currentIndex ? 'next' : 'prev');
    const outgoing = this.slides[this.currentIndex];
    const incoming = this.slides[newIndex];

    this.isAnimating = true;

    // Clear previous transitional classes
    this.slides.forEach(s => {
      s.classList.remove('exit-left', 'exit-right', 'enter-right', 'enter-left');
    });

    if (direction === 'next') {
      outgoing.classList.remove('active');
      outgoing.classList.add('exit-left');
      incoming.classList.add('enter-right');
      // Force layout reflow
      void incoming.offsetWidth;
      incoming.classList.remove('enter-right');
      incoming.classList.add('active');
    } else {
      outgoing.classList.remove('active');
      outgoing.classList.add('exit-right');
      incoming.classList.add('enter-left');
      void incoming.offsetWidth;
      incoming.classList.remove('enter-left');
      incoming.classList.add('active');
    }

    this.currentIndex = newIndex;
    this.updateUI(newIndex, direction);

    setTimeout(() => {
      outgoing.classList.remove('exit-left', 'exit-right');
      this.isAnimating = false;
    }, 650);
  }

  updateUI(index, direction) {
    // 1. Counter
    if (this.currNumEl) {
      this.currNumEl.textContent = String(index + 1).padStart(2, '0');
    }

    // 2. Buttons state
    if (this.prevBtn) {
      this.prevBtn.disabled = index === 0;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = index === this.slides.length - 1;
    }

    // 3. Markers
    if (this.markers) {
      this.markers.forEach((m, i) => {
        m.classList.toggle('active', i === index);
        m.classList.toggle('completed', i < index);
        m.setAttribute('aria-selected', String(i === index));
      });
    }
  }
}

export function initProductShowcase() {
  return new ProductShowcase('#product-showcase');
}
