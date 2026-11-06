# Frontend Component Specification

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

Define reusable UI components.

## Core components
Header, NavigationLink/Tab, SectionIntro, PrimaryCTA, ProductShowcase, ProductScene, ProductProgress, ProductNavControls, GalleryGrid, GalleryLightbox, AboutTimeline, ContactLink, RFQLauncher and Footer.

## ProductScene contract
Inputs: product data, image sources, index, active state, transition variant and enquiry callback. Outputs: semantic heading, description, application, verified specs, imagery and accessible CTA.

## Motion integration
Component animation must not own global scroll position. Parent controller coordinates timeline/progress; component owns local visual entrance. Do not initialize duplicate ScrollTriggers on every React/Vue render or tab revisit.

## Acceptance
Reusable components support keyboard, touch, loading, empty and reduced-motion states.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
