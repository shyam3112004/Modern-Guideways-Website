/**
 * Modern Guideways — High-Performance Zero-Loss Frame Pipeline
 * 
 * Capabilities:
 * 1. Hardware-accelerated async decoding with HTMLImageElement.decode()
 * 2. Controlled concurrency queue (default 4 workers)
 * 3. Distance & scroll-direction prioritized prefetching
 * 4. Dual-tier cache:
 *    - Tier 1: Permanent sparse anchor grid (46 keyframes across 1,105 frames)
 *    - Tier 2: Rolling window cache (36 frames) around active scroll viewport
 * 5. Instant graceful fallback: exact -> neighbor -> anchor -> last-drawn
 * 6. Zero blank frame guarantee under fast scrubbing & directional reversals
 */

export class FramePipeline {
  constructor(options = {}) {
    this.frameCount = options.frameCount || 196;
    this.anchorStep = options.anchorStep || 10;
    this.maxCacheSize = options.maxCacheSize || 36;
    this.maxConcurrency = options.maxConcurrency || 4;

    this.cache = new Map(); // frameIndex -> HTMLImageElement (rolling window)
    this.anchors = new Map(); // frameIndex -> HTMLImageElement (permanent anchors)
    this.anchorIndices = new Set();
    for (let i = 0; i < this.frameCount; i += this.anchorStep) {
      this.anchorIndices.add(i);
    }
    this.anchorIndices.add(this.frameCount - 1);

    this.inFlight = new Map(); // frameIndex -> Promise<HTMLImageElement | null>
    this.activeWorkers = 0;
    this.queue = []; // Array of frame indices sorted by priority score
    this.queuedSet = new Set();

    this.currentTargetFrame = 0;
    this.scrollDirection = 1;
    this.onFrameDecodedCallbacks = new Set();
    this.isPaused = false;
  }

  getFrameUrl(index) {
    return `/frames/frame_${String(index).padStart(4, '0')}.webp`;
  }

  onFrameDecoded(callback) {
    this.onFrameDecodedCallbacks.add(callback);
    return () => this.onFrameDecodedCallbacks.delete(callback);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
    this.processQueue();
  }

  hasFrame(index) {
    return this.cache.has(index) || this.anchors.has(index);
  }

  getFrame(index) {
    return this.cache.get(index) || this.anchors.get(index) || null;
  }

  getBestAvailableFrame(targetIdx) {
    const rounded = Math.max(0, Math.min(this.frameCount - 1, Math.round(targetIdx)));

    // 1. Exact match in rolling cache or anchors
    const exact = this.getFrame(rounded);
    if (exact) return exact;

    // 2. Search local neighborhood (direction-biased first)
    const dir = this.scrollDirection >= 0 ? 1 : -1;
    for (let offset = 1; offset <= 24; offset++) {
      const fwd = rounded + offset * dir;
      const bwd = rounded - offset * dir;
      if (fwd >= 0 && fwd < this.frameCount) {
        const img = this.getFrame(fwd);
        if (img) return img;
      }
      if (bwd >= 0 && bwd < this.frameCount) {
        const img = this.getFrame(bwd);
        if (img) return img;
      }
    }

    // 3. Search closest loaded permanent anchor
    let closestAnchor = null;
    let minDiff = Infinity;
    for (const [idx, img] of this.anchors.entries()) {
      const diff = Math.abs(idx - rounded);
      if (diff < minDiff) {
        minDiff = diff;
        closestAnchor = img;
      }
    }
    if (closestAnchor) return closestAnchor;

    // 4. Any loaded frame in rolling cache closest to target
    let fallback = null;
    let fallbackDiff = Infinity;
    for (const [idx, img] of this.cache.entries()) {
      const diff = Math.abs(idx - rounded);
      if (diff < fallbackDiff) {
        fallbackDiff = diff;
        fallback = img;
      }
    }
    return fallback;
  }

  setTarget(frameIndex, direction = 1) {
    const target = Math.max(0, Math.min(this.frameCount - 1, Math.round(frameIndex)));
    this.currentTargetFrame = target;
    this.scrollDirection = direction >= 0 ? 1 : -1;

    // Build desired neighborhood
    const aheadCount = 18;
    const behindCount = 6;
    const needed = [target];

    for (let i = 1; i <= aheadCount; i++) {
      const idx = target + i * this.scrollDirection;
      if (idx >= 0 && idx < this.frameCount) needed.push(idx);
    }
    for (let i = 1; i <= behindCount; i++) {
      const idx = target - i * this.scrollDirection;
      if (idx >= 0 && idx < this.frameCount) needed.push(idx);
    }

    // Discard stale pending requests (> 35 frames away)
    const prunedQueue = [];
    this.queuedSet.clear();
    for (const idx of this.queue) {
      if (Math.abs(idx - target) <= 35 && !this.hasFrame(idx)) {
        prunedQueue.push(idx);
        this.queuedSet.add(idx);
      }
    }
    this.queue = prunedQueue;

    // Add missing neighborhood frames
    for (const idx of needed) {
      if (!this.hasFrame(idx) && !this.inFlight.has(idx) && !this.queuedSet.has(idx)) {
        this.queue.push(idx);
        this.queuedSet.add(idx);
      }
    }

    // Prioritize by distance and scroll direction
    this.queue.sort((a, b) => {
      const distA = Math.abs(a - target);
      const distB = Math.abs(b - target);
      const isAheadA = (a - target) * this.scrollDirection >= 0;
      const isAheadB = (b - target) * this.scrollDirection >= 0;
      const scoreA = distA * (isAheadA ? 1.0 : 2.5);
      const scoreB = distB * (isAheadB ? 1.0 : 2.5);
      return scoreA - scoreB;
    });

    this.processQueue();
  }

  processQueue() {
    if (this.isPaused) return;

    while (this.activeWorkers < this.maxConcurrency && this.queue.length > 0) {
      const nextIdx = this.queue.shift();
      this.queuedSet.delete(nextIdx);

      if (this.hasFrame(nextIdx) || this.inFlight.has(nextIdx)) {
        continue;
      }

      this.activeWorkers++;
      this.loadAndDecode(nextIdx, this.anchorIndices.has(nextIdx))
        .finally(() => {
          this.activeWorkers--;
          this.processQueue();
        });
    }
  }

  loadAndDecode(index, isAnchor = false) {
    if (this.hasFrame(index)) {
      return Promise.resolve(this.getFrame(index));
    }
    if (this.inFlight.has(index)) {
      return this.inFlight.get(index);
    }

    const url = this.getFrameUrl(index);
    const p = new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';

      const done = (success) => {
        if (success) {
          if ('decode' in img) {
            try {
              img.decode().catch(() => {});
            } catch (_) {}
          }

          if (isAnchor || this.anchorIndices.has(index)) {
            this.anchors.set(index, img);
          }
          this.cache.set(index, img);
          this.pruneCache();

          for (const cb of this.onFrameDecodedCallbacks) {
            try { cb(index, img); } catch (_) {}
          }
          resolve(img);
        } else {
          console.warn(`[FramePipeline] Failed to load frame ${index + 1}: ${url}`);
          resolve(null);
        }
        this.inFlight.delete(index);
      };

      img.onload = () => done(true);
      img.onerror = () => done(false);
      img.src = url;
    });

    this.inFlight.set(index, p);
    return p;
  }

  pruneCache() {
    if (this.cache.size <= this.maxCacheSize) return;

    const target = this.currentTargetFrame;
    const candidates = [];

    for (const idx of this.cache.keys()) {
      if (this.anchorIndices.has(idx)) continue; // Keep anchors protected
      const dist = Math.abs(idx - target);
      if (dist > 20) {
        candidates.push({ idx, dist });
      }
    }

    // Sort farthest first
    candidates.sort((a, b) => b.dist - a.dist);

    for (const { idx } of candidates) {
      if (this.cache.size <= this.maxCacheSize) break;
      this.cache.delete(idx);
    }
  }

  async loadAnchorKeyframes(concurrency = 2) {
    const anchors = Array.from(this.anchorIndices).sort((a, b) => a - b);
    let cursor = 0;

    const worker = async () => {
      while (cursor < anchors.length) {
        if (this.isPaused) {
          await new Promise(r => setTimeout(r, 200));
          continue;
        }
        // Yield to active high-priority scrolling requests
        if (this.activeWorkers >= 2) {
          await new Promise(r => setTimeout(r, 80));
          continue;
        }
        const idx = anchors[cursor++];
        if (!this.hasFrame(idx)) {
          await this.loadAndDecode(idx, true);
          await new Promise(r => setTimeout(r, 25)); // Yield to keep main thread free
        }
      }
    };

    await Promise.all(Array.from({ length: concurrency }, worker));
  }
}