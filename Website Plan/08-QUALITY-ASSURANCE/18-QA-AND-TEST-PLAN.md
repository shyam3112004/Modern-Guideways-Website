# QA and Test Plan

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

Create reproducible tests for the complete website.

## Functional
Navigation, direct anchors/routes, browser back/forward, CTAs, phone/email/directions, RFQ, Lightbox and all six product scenes.

## Motion
Each tab transition, product reveal, forward/reverse sequence, interruption, resize, image load delays, tab re-entry, reduced motion and no-JS fallback.

## Responsive
Narrow mobile, common mobile, tablet, laptop and wide desktop; portrait/landscape; touch and mouse/keyboard.

## Browser
Current stable Chrome, Edge, Firefox and Safari; iOS Safari and Android Chrome where available.

## Evidence
Capture browser screenshots/video, console/network findings, test version/device, expected vs actual and pass/fail. A clean build does not prove animation works.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
