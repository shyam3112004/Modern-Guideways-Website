# Deployment Runbook

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

Use static hosting after G7/G8 acceptance.

## Release workflow
1. Confirm owner approval of content/assets.
2. Pull reviewed source branch.
3. Clean install from lockfile.
4. Run lint/type checks/tests available.
5. Run production build.
6. Preview the production `dist/` build.
7. Test route/anchor refresh, media, contact links and animations.
8. Deploy to preview/staging.
9. Obtain approval.
10. Deploy production and smoke-test.

Verify the host's current free-tier and commercial terms, build limits, traffic/bandwidth, custom domain, TLS and payment method. Do not state hosting is free until checked.

Keep the previous deployment available for rollback.

## Completion evidence
Record the actual source files, commands, browser/device, screenshots or video evidence, test results and owner approval associated with this document. A plan or successful compilation is not proof of runtime behavior.
