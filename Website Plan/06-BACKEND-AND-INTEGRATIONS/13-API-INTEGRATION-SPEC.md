# API and Integration Specification

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

Release-one integrations:
- `tel:` links for verified phone numbers.
- `mailto:` for approved public email.
- WhatsApp click-to-chat only after confirming the chosen number is WhatsApp-enabled.
- Plain external map/directions link; embedded map optional and requires privacy/performance review.
- Static hosting/deployment integration.

No custom API is required. No payment, CRM, login, analytics pixel or database integration should be added by default.

For future integrations record purpose, data shared, vendor, current pricing, payment method, commercial terms, privacy impact, failure mode and owner approval.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
