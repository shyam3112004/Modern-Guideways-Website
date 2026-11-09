# 27 — Performance Engineering

**Project:** Modern Guideways Website  
**Version:** 1.0  
**Status:** Starter — owner review required  
**Last updated:** 2026-11-07  
**Owner:** TBD

## 1. Purpose
Frame sequence uses WebP and progressive loading. Canvas DPR capped at 1.75.

## 2. Project context
Only keyframes load before the loader closes; remaining frames load sequentially.

## 3. Requirements and implementation
Measure LCP, CLS, INP and scroll responsiveness on real devices. Consider mobile-specific frame set after crop approval.

## 4. Scope boundaries and risks
Do not claim Lighthouse scores until measured.

## 5. Acceptance criteria
No major layout shift; animation remains responsive on supported target devices.

## 6. Dependencies and open items
- Confirm company-approved brand assets, business facts and content before public launch.
- Refer to [Project Brief](../PROJECT-BRIEF.md), [Decision Register](../DECISION-REGISTER.md) and [Document Index](../DOC-INDEX.md).
- The generated site is a starter implementation, not evidence of a completed production release.
