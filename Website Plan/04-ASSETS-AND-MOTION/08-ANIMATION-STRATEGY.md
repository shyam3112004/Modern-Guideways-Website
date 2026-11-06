# Motion Strategy and Animation System

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

Define a coherent animation language across all main tabs.

## Current design direction
Use a combination of:
- Chapter-based scrollytelling for the hero and product storytelling.
- Kinetic typography for short headings, not long paragraphs.
- Directional page/section transitions for navigation.
- Staggered editorial reveals for gallery tiles and content groups.
- Product-specific masks, wipes and mechanical transitions.
- Small stateful micro-interactions for controls and enquiry actions.

These are trend-informed choices for this brand, not a requirement to add motion everywhere. Current 2026 design coverage highlights immersive 3D, experimental navigation, motion narrative and bold typography; technical sources emphasize purposeful scroll animation and performance/accessibility constraints. See `REFERENCES.md`.

## Global motion rules
- One clear motion idea per section.
- Use transforms/opacity/clip-path rather than layout-thrashing properties where possible.
- Keep interactions interruptible and reversible.
- Use short transitions for navigation; reserve longer scrubbed sequences for product storytelling.
- Never trap vertical scroll or hide content behind an incomplete timeline.
- Add `prefers-reduced-motion` behavior: remove nonessential movement, retain state and content.
- Pause/limit offscreen work and clean up event listeners/ScrollTriggers.

## Required tab-specific specs
See `ANIMATION-PER-TAB/` and `PRODUCT-SEQUENCE/`.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
