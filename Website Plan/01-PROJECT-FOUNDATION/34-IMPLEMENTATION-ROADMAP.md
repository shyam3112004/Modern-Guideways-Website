# Implementation Roadmap and Gate Plan

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

## Gate G1 — Discovery and approval
Inventory project files, 1,101-frame sequence (if present), logo, products and company facts. Approve scope and asset rights.

## Gate G2 — Design system
Approve color tokens sampled from logo, type scale, layout, section design and individual tab animation storyboards.

## Gate G3 — Animation proof
Prototype hero frame sequence and one product scene. Prove loading, reverse motion, mobile fallback and reduced motion before full build.

## Gate G4 — Core implementation
Implement the five primary tabs/sections, shared navigation, distinct tab transitions and six product scenes. Preserve existing site behaviors.

## Gate G5 — Content and media
Integrate verified product data, real product imagery, approved workshop assets, contact content, metadata and structured data.

## Gate G6 — QA and release readiness
Functional, visual, motion, accessibility, responsive, performance, SEO and production preview verification. Obtain owner sign-off.

## Gate G7 — Production deployment
Deploy approved static distribution, verify domain/TLS, run smoke tests and retain rollback.

## Dependencies
G1 precedes asset-dependent work. G2 precedes page-level styling. G3 precedes full motion build. G4/G5 precede comprehensive G6. G6 approval precedes G7 deployment.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
