# Brand and Design System

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

Create an explicit token system based on the real logo.

## Provisional palette supplied in prior project work
- Metallic Blue: `#002D71`
- Primary Blue: `#00459E`
- Specular Highlight: `#6874D4`

Treat these as provisional until sampled against the authoritative logo file and checked for contrast. Do not recolor the logo.

## Token groups
Colors, typography, spacing, layout, radius, borders, shadow, z-index, motion durations/easing and responsive breakpoints.

## Typography direction
Outfit for display headings and Plus Jakarta Sans for body/UI were used in previous project iterations. Verify font availability, licensing, rendering and fallbacks before release.

## Component rules
Shared header, nav item, CTA, product scene, product progress, gallery tile, contact row, footer, lightbox and RFQ action should use tokens rather than arbitrary per-page styling.

## Deliverable
`tokens.css`, component style guide, contrast matrix, typography scale and responsive token reference.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
