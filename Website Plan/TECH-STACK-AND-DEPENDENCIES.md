# Technical Stack and Dependency Review

## Retain existing project first
Audit `package.json`, lockfile, Vite config, current source tree, existing GSAP version and animation controllers. Reuse what is already installed.

## Preferred pattern
Vite static build + TypeScript/JavaScript + CSS tokens. GSAP ScrollTrigger for complex product timeline if present. Native scroll-snap for mobile and fallback. No backend/database for launch-one scope.

## Dependency policy
Do not add a library for functionality achievable with existing browser APIs or current dependencies. Record package name, version, license, reason, bundle impact and rollback plan for any addition.

## Commands to confirm for the actual project
`npm ci`, `npm run build`, available lint/test commands, and `npm run preview`. Record actual outputs; do not fabricate them.
