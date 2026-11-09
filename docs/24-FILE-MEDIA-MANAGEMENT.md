# 24 — File and Media Management

**Project:** Modern Guideways Website  
**Version:** 1.0  
**Status:** Starter — owner review required  
**Last updated:** 2026-11-07  
**Owner:** TBD

## 1. Purpose
Static assets are versioned in public/. Source files remain in source-materials/.

## 2. Project context
Frame filenames are zero-padded and ordered; WebP format reduces payload.

## 3. Requirements and implementation
Keep the MP4 as source of truth; regenerate frames only with an approved script and preserve exact count/sequence metadata.

## 4. Scope boundaries and risks
Review licensing and company approval before publishing supplied video.

## 5. Acceptance criteria
Manifest and asset folder remain complete and deterministic.

## 6. Dependencies and open items
- Confirm company-approved brand assets, business facts and content before public launch.
- Refer to [Project Brief](../PROJECT-BRIEF.md), [Decision Register](../DECISION-REGISTER.md) and [Document Index](../DOC-INDEX.md).
- The generated site is a starter implementation, not evidence of a completed production release.
