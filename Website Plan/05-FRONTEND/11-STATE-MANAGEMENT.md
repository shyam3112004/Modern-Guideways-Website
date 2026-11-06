# State Management

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

Define minimal UI state.

## State
Current route/section, navigation menu open/closed, active product index, gallery active item, RFQ open/closed and pending feedback states.

## Rules
- Derive active product from scroll/track position rather than maintaining conflicting copies.
- Synchronize URL/hash when appropriate.
- Do not make the tab transition state the single source of page content.
- Clean up event listeners and observers on unmount.
- Keep scroll progress ephemeral and local to the animation controller.
- Respect browser history and restore scroll where reasonable.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
