# 21 — State Management

**Project:** Modern Guideways Website  
**Version:** 1.0  
**Status:** Starter — owner review required  
**Last updated:** 2026-11-07  
**Owner:** TBD

## 1. Purpose
Local JS state only: loaded frames, loaded count, current frame, target frame and menu open state.

## 2. Project context
No global store or persisted visitor state.

## 3. Requirements and implementation
Animation state derives from scroll progress; menu state is reflected in aria-expanded.

## 4. Scope boundaries and risks
Do not store visitor personal data in localStorage.

## 5. Acceptance criteria
Scroll and navigation state stay synchronized with rendered UI.

## 6. Dependencies and open items
- Confirm company-approved brand assets, business facts and content before public launch.
- Refer to [Project Brief](../PROJECT-BRIEF.md), [Decision Register](../DECISION-REGISTER.md) and [Document Index](../DOC-INDEX.md).
- The generated site is a starter implementation, not evidence of a completed production release.
