# Backend and Data Schema Decision

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

Release-one decision: no backend/database required.

The launch scope is a static company profile with direct phone/email/directions and an optional visitor-composed WhatsApp message. Product copy and verified company data can live in version-controlled static content files.

Do not store form submissions or collect personal information without an approved purpose, privacy notice, retention policy and service provider.

Introduce a backend only for a clearly approved need such as enquiry inbox, CMS, protected portal or catalogue administration. Document data controller, fields, security, access roles, retention, deletion and backup before implementation.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
