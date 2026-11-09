# 31 — Environment Configuration

**Project:** Modern Guideways Website  
**Version:** 1.0  
**Status:** Starter — owner review required  
**Last updated:** 2026-11-07  
**Owner:** TBD

## 1. Purpose
No environment variables are needed in v1.

## 2. Project context
Node built-in dev/build/preview scripts are defined in package.json.

## 3. Requirements and implementation
Add environment variables only when a verified server-side integration is introduced; keep secrets server-side.

## 4. Scope boundaries and risks
No .env file required.

## 5. Acceptance criteria
Build runs without secrets or external service credentials.

## 6. Dependencies and open items
- Confirm company-approved brand assets, business facts and content before public launch.
- Refer to [Project Brief](../PROJECT-BRIEF.md), [Decision Register](../DECISION-REGISTER.md) and [Document Index](../DOC-INDEX.md).
- The generated site is a starter implementation, not evidence of a completed production release.
