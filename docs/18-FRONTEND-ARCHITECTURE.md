# 18 — Frontend Architecture

**Project:** Modern Guideways Website  
**Version:** 1.0  
**Status:** Starter — owner review required  
**Last updated:** 2026-11-07  
**Owner:** TBD

## 1. Purpose
Single-page static application. index.html contains semantic sections; main.js controls the Canvas and navigation; style.css contains design system and responsive rules. Node built-in scripts serve locally and copy the production build.

## 2. Project context
Canvas renderer uses 147 image assets. Native scroll progress maps to target frame.

## 3. Requirements and implementation
Future pages can be split into routes if content scope grows.

## 4. Scope boundaries and risks
No framework or state library needed in v1.

## 5. Acceptance criteria
Modules remain understandable and build output is static.

## 6. Dependencies and open items
- Confirm company-approved brand assets, business facts and content before public launch.
- Refer to [Project Brief](../PROJECT-BRIEF.md), [Decision Register](../DECISION-REGISTER.md) and [Document Index](../DOC-INDEX.md).
- The generated site is a starter implementation, not evidence of a completed production release.
