# Accessibility Standard

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

Target WCAG 2.2 AA as the engineering target; do not claim conformance without a genuine audit.

## Requirements
- Semantic navigation and landmarks.
- Correct link vs button semantics.
- Keyboard access and visible focus.
- Logical focus order and headings.
- Text and control contrast.
- Alternative text for meaningful images; empty alt for decorative visuals.
- Dialog focus management and Escape behavior.
- Reduced-motion mode.
- No flashing or forced scrolling.
- Touch targets and zoom/reflow support.
- Do not communicate state by color alone.

## Motion
When `prefers-reduced-motion: reduce` is set, disable nonessential panel movement, large parallax, scrubbed product travel and auto-scrolling. Keep all products and content available through static/step controls.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
