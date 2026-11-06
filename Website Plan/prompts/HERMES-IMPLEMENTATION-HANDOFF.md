# Hermes Implementation Handoff — Modern Guideways Website Plan v2

You are the senior design/engineering agent implementing the Modern Guideways website.

## Mandatory preflight
Read:
- `README.md`
- `PROJECT-BRIEF.md`
- `DOC-INDEX.md`
- `DECISION-REGISTER.md`
- all 35 canonical documents
- all files in `ANIMATION-PER-TAB/`
- all six files in `PRODUCT-SEQUENCE/`
- relevant installed global design skills: design-foundation, color-system, typography, size-shape-proportion, background-surface-design, layout-grid, spacing-density, component-interaction-design, imagery-asset-direction, motion-scroll-animation, responsive-design, industrial-art-direction, accessibility-usability, anti-ai-slop-quality-control and frontend-implementation-rules.

## Project safety
1. Inspect the existing website source, package files, components, assets and current preview before editing.
2. Preserve the current Home 1,101-frame canvas sequence if it is present and working.
3. Preserve the approved logo and existing content unless a change is explicitly specified.
4. Do not delete, overwrite or recompress original media.
5. Do not replace the actual product catalogue with illustrative placeholders.
6. Do not fabricate product specs, materials, certifications, experience claims or customer references.
7. Do not report a gate as passed until its tests have actually run.

## Main deliverable
Implement five individually animated navigation destinations:
- Overview: kinetic headline and cinematic hero reveal.
- Products: zipper-open horizontal product runway; six individual product scenes with six distinct reveal signatures.
- Gallery: staggered editorial image reveals and accessible lightbox.
- About Us: drawn engineering timeline and sequential content reveal.
- Contact: animated contact rails and useful micro-interactions.

## Products acceptance
- One prominent product scene at a time on desktop.
- Vertical scroll may drive a pinned horizontal track only if it is stable, reversible and does not trap scroll.
- Native horizontal swipe + scroll-snap must be available, especially on mobile.
- Previous/next buttons, keyboard arrows and progress indicator work.
- Unique transitions: mechanical nested slide; roller sheet unroll; apron slat cascade; accordion bellows expansion; guide-wiper wipe; enclosure assembly reveal.
- All six product details and RFQ actions remain accessible.
- Reduced-motion fallback shows complete content without motion.

## Execution sequence
1. Inspect and report current architecture and root cause of any missing animation.
2. Map plan to existing components.
3. Implement tab-specific transitions in isolated controllers/components.
4. Implement Products scene sequence.
5. Test browser behavior: initial state, each tab, six products, reverse scroll, tab revisits, interrupted transitions, resize, mobile, reduced motion.
6. Run available lint/type/test commands and production build.
7. Preview the latest `dist/` build and capture evidence.
8. Report changed files, commands, actual test results, remaining defects and release status.

## Completion rule
A successful compile is not proof of animation behavior. Do not claim product animation complete until the six scenes visibly transition in the live browser and evidence is recorded. Do not deploy before G6 passes and owner approval is obtained.
