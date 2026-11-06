# Technical Requirements Document

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

Set the technical baseline and quality constraints.

## Recommended baseline
- Existing project framework: retain the current Vite + TypeScript/JavaScript stack unless a code audit demonstrates a compelling reason to change.
- Styling: existing CSS tokens and component styles; avoid replacing the design system.
- Motion: GSAP + ScrollTrigger for advanced pinned/scrubbed scenes where already installed; CSS transitions for lightweight tab reveals and micro-interactions.
- Product navigation: native horizontal overflow + CSS scroll snap as the resilient baseline; optional desktop-only ScrollTrigger pinning after interaction/performance tests.
- Hosting: static hosting. Verify current commercial-use terms, limits, custom-domain support and payment-method requirements before choosing a provider.

## Architecture principles
1. Progressive enhancement: the website must work without animation libraries.
2. Do not replace or regress the existing 1,101-frame hero without owner approval.
3. No backend is needed for a static company profile and direct enquiry links.
4. Reuse existing GSAP installation; do not add a second animation library.
5. Keep content, data and animation controllers separated.
6. Avoid scroll hijacking. Preserve browser history, anchors and native touch gestures.

## Proposed quality targets
- Aim for strong Core Web Vitals at the 75th percentile once field data exists.
- Use Lighthouse as a diagnostic, not as proof of real-user performance.
- Keep animation work on transform/opacity where possible.
- Lazy-load noncritical imagery and avoid decoding every full-resolution frame at once.
- Test representative lower/mid-range mobile hardware and throttled networks.

## Technical decision gates
Audit the existing source, dependency versions, routing, asset pipeline and installed motion code before selecting implementation details. Record decisions in `DECISION-REGISTER.md`.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
