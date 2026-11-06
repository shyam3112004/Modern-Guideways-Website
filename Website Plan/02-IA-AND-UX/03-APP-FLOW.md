# Information Architecture and User Flows

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

Map the information structure and key visitor journeys.

## Primary navigation
Overview → Products → Gallery → About Us → Contact.

## Visitor journeys
1. New visitor: Overview hero → value proposition → product range → proof/gallery → enquiry.
2. Product-led visitor: direct Products anchor/route → select category → inspect use/application → contact/RFQ.
3. Returning buyer: Contact → tap-to-call/email/directions.
4. Mobile visitor: compact navigation → product section → tap-to-call or approved WhatsApp.

## Navigation behavior
- Each navigation item has a stable URL/hash target.
- Current section is reflected in navigation state.
- Browser back/forward restores the expected destination.
- Navigation remains functional with keyboard and touch.
- If implemented as tab panels, use correct tab semantics and roving keyboard focus; if implemented as page navigation, use links and `aria-current` instead.

## Motion behavior
The selected destination can animate into view, but navigation must not delay access or trap the user. Each section transition must be interruptible and must not block another navigation action.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
