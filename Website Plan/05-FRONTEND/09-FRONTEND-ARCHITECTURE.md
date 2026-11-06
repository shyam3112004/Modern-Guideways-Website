# Frontend Architecture

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

Keep the current application architecture unless inspection identifies a concrete defect.

## Recommended separation
- `components/`: Header, Nav, ProductShowcase, ProductScene, Gallery, Lightbox, RFQ modal, ContactRows, Footer.
- `pages/` or `sections/`: Overview, Products, Gallery, About, Contact.
- `animation/`: tab transitions, product sequence controller, hero frame controller.
- `data/`: verified products, company facts, gallery assets.
- `styles/`: tokens, global styles, component styles.
- `utils/`: URL/hash, reduced-motion, focus and asset helpers.

## Rules
- Keep content data-driven.
- Keep animation logic out of large page-rendering components.
- Avoid global mutable state for simple local transitions.
- Preserve direct URL access and browser navigation.
- Make section content visible if JavaScript fails.
- Avoid duplicating a library already installed.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
