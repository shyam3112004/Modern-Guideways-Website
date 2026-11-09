# 08 — Deployment Runbook

**Project:** Modern Guideways Website  
**Version:** 1.0  
**Status:** Starter — owner review required  
**Last updated:** 2026-11-07  
**Owner:** TBD

## 1. Purpose
Build with npm run build; deploy dist/ to a static host.

## 2. Project context
No environment variables required.

## 3. Requirements and implementation
Set custom domain, HTTPS and canonical redirect at chosen host. Configure SPA fallback only if routes are added.

## 4. Scope boundaries and risks
Host/provider selection and DNS access are TBD.

## 5. Acceptance criteria
Production URL serves HTTPS, assets return 200 and all anchors/contact links pass smoke tests.

## 6. Dependencies and open items
- Confirm company-approved brand assets, business facts and content before public launch.
- Refer to [Project Brief](../PROJECT-BRIEF.md), [Decision Register](../DECISION-REGISTER.md) and [Document Index](../DOC-INDEX.md).
- The generated site is a starter implementation, not evidence of a completed production release.
