# 02 — Technical Requirements Document

**Project:** Modern Guideways Website  
**Version:** 1.0  
**Status:** Starter — owner review required  
**Last updated:** 2026-11-07  
**Owner:** TBD

## 1. Purpose
Use semantic HTML, CSS and native JavaScript. Node built-in scripts serve locally and create the static dist/ build. Canvas 2D renders the frame sequence.

## 2. Project context
No server runtime is required for current features.

## 3. Requirements and implementation
Node 20+ for build; static hosting for dist; images served from public/frames.

## 4. Scope boundaries and risks
No API or secrets. If enquiry form storage is later requested, design server-side delivery and privacy controls first.

## 5. Acceptance criteria
npm run build succeeds and static preview works.

## 6. Dependencies and open items
- Confirm company-approved brand assets, business facts and content before public launch.
- Refer to [Project Brief](../PROJECT-BRIEF.md), [Decision Register](../DECISION-REGISTER.md) and [Document Index](../DOC-INDEX.md).
- The generated site is a starter implementation, not evidence of a completed production release.
