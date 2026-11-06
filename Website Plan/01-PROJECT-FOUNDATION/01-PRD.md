# Product Requirements Document

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

Define the website's business purpose, launch scope, audiences, content requirements and measurable acceptance criteria.

## Business objective
Build a premium industrial company website for Modern Guideways that explains machine-protection products, communicates manufacturing credibility and converts qualified visitors into direct enquiries.

## Primary audiences
- CNC, VMC and HMC machine owners/operators.
- Machine-tool builders, production managers and maintenance teams.
- Procurement teams comparing industrial protection suppliers.

## Release-one pages
Overview, Products, Gallery, About Us and Contact. These may be implemented as anchored sections in a single-page experience or as separate routes. Keep the navigation semantics consistent whichever architecture is selected.

## Product categories
1. Telescopic Covers
2. Roller Covers
3. Apron Covers
4. Bellows
5. Guide Wipers
6. Enclosing Guards

## Primary conversion actions
Call the approved phone number, email the company, open directions, or initiate an approved WhatsApp/RFQ enquiry. Confirm each channel before launch.

## Exclusions
No ecommerce checkout, payment gateway, customer login, subscription, public price list, live inventory, admin dashboard or database unless separately approved.

## Functional requirements
- PR-01: all five primary navigation destinations work and support direct links.
- PR-02: each destination has its own purposeful entrance/transition animation.
- PR-03: Products presents six categories with individual visual identity and readable detail.
- PR-04: Product showcase supports pointer, touch, keyboard and previous/next controls.
- PR-05: Home hero retains its approved frame-sequence experience if its 1,101 frames are confirmed in the source project.
- PR-06: Contact details, directions and RFQ channels are accurate and actionable.
- PR-07: content remains usable when animation is unavailable or reduced.
- PR-08: source media is preserved; optimized derivatives are separate.
- PR-09: site is responsive, accessible, searchable and static-hosting compatible.

## Success measures
All routes and actions work; all six products are discoverable; tab transitions remain quick and reversible; no content is hidden by motion; the production build and browser QA pass on representative devices.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
