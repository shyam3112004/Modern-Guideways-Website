# Motion Technical Specification

## Library strategy
- CSS for simple transitions, hover/focus and lightweight section reveals.
- GSAP ScrollTrigger for pinned/scrubbed product storytelling or complex coordinated timelines.
- Avoid adding Three.js/WebGL unless a specific interactive 3D asset provides clear business value and runs well on mobile.
- Do not install a smooth-scroll library merely for visual effect.

## GSAP integration
Register ScrollTrigger once. Use `gsap.context()` or equivalent lifecycle cleanup. Use `gsap.matchMedia()` for desktop/mobile/reduced-motion variants. Refresh after fonts/images/layout are ready. Kill triggers on unmount/route change. Use `invalidateOnRefresh` where geometry is dynamic.

## ScrollTrigger product option
Track width measured after media loads. End distance should be the actual horizontal overflow. Pin only the Products showcase. Avoid nested pin containers and multiple controllers on same scroller. Keep scroll input recoverable at boundaries.

## Performance
Prefer transform/opacity, pre-size image containers to avoid CLS, preload only the first scene, lazy-load the rest, use `decode()`/intersection observation where supported, and avoid per-scroll DOM measurements.

## Browser resilience
A native horizontal scroll-snap implementation is the fallback if GSAP fails or reduced motion is enabled.
