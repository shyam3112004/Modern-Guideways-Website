# Performance Engineering

- Project: Modern Guideways
- Version: 2.0
- Status: Planning specification / owner review
- Updated: 2026-11-06

## Project context and working assumptions
- Company: Modern Guideways.
- Focus: machine protection systems for CNC/VMC/HMC equipment.
- Product categories: telescopic covers, roller covers, apron covers, bellows, guide wipers and enclosing guards.
- Visual direction: Metallic Blue, deep navy, graphite, steel grey and clean light surfaces.
- Typography direction used in previous iterations: Outfit display + Plus Jakarta Sans body; validate font files/licensing.
- Existing project has been described as having 1,101 Full HD WebP frames; verify actual assets and manifest before making implementation claims.
- Contact/address details previously supplied must be owner-confirmed before public release.
- No ecommerce, payment gateway or unnecessary backend is assumed.
- The initial hosting cost constraint is low-cost/static; re-check provider terms at deployment time.

The two main performance risks are the 1,101-frame hero and media-heavy product scenes.

## Controls
- Poster-first hero rendering.
- Progressive frame loading with bounded concurrency.
- Avoid decoding/retaining all full-resolution frames simultaneously.
- Lazy-load below-fold product/gallery images.
- Prefer transform/opacity/clip-path for animation.
- Avoid long-running JavaScript on scroll.
- Use `requestAnimationFrame` for canvas drawing and avoid repeated forced layout.
- Pause nonessential work when the document is hidden.
- Use responsive image sources and caching.
- Measure on mobile and slower networks.

## Verification
Record real image bytes, decoded memory estimates, LCP, INP and CLS. Do not infer overall site weight from JS/CSS bundle size alone.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
