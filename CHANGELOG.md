# Changelog

## 1.4.0 — 2026-11-10 — 6 Core Engineered Protection Systems & 500-Frame CNC Assembly Animation
- Redesigned the Products tab with the exact six engineered products:
  1. Telescopic Covers (`/products/telescopic-covers.png`)
  2. Roller Covers (`/products/roller-covers.png`)
  3. Apron Covers (`/products/apron-covers.png`)
  4. Bellows (`/products/bellows.png`)
  5. Lip Wipers (`/products/lip-wipers.png`)
  6. Enclosing Guard (`/products/enclosing-guard.png`)
- Configured perfectly balanced 3x2 architectural grid with crisp blueprint borders, technical metrics, and hover dynamics.
- Integrated the 500-frame scroll-driven kinematic animation (`/cnc_assembly/frame_00001.jpg` to `frame_00500.jpg`) showcasing the complete CNC Machine Assembly with progressive scrub, convergence guidelines, and final CNC lockup.

## 1.3.0 — 2026-11-07 — Premium Industrial Art Direction & 7 Synchronized Kinematic Streams
- Completely redesigned the Products tab (`#products`) with premium editorial industrial art direction matching high-end manufacturing standards.
- Eliminated generic AI-dashboard styling, oversized typography, corner brackets, and black canvas containers.
- Deployed genuine 7-product kinematic presentation using real 500-frame sequences (500 frames each):
  1. Bellows Cover (`01_Bellows_Cover` / `Bellows_Cover_500_frames`)
  2. Safety Enclosure (`02_Safety_Enclosure` / `Industrial_Safety_Enclosure_Cabinet_500_frames`)
  3. CNC Milling Machine (`03_CNC_Milling_Machine` / `Final_500_frames` datum)
  4. Linear Guide Assemblies (`04_Linear_Guide_Assemblies` / `Precision_Linear_Guide_Assemblies_500_frames`)
  5. Roller Guard (`05_Roller_Guard` / `Stainless_Steel_Accordion_Roller_Guard_500_frames`)
  6. Telescopic Machine Cover (`06_Telescopic_Machine_Cover` / `Telescopic_Steel_Machine_Cover_500_frames`)
  7. Steel Way Cover (`07_Steel_Way_Cover` / `Telescoping_Steel_Way_Cover_on_Blue_500_frames`)
- Implemented synchronized 5-phase scroll controller:
  - Phase 01: Introduction & Array Initialization (0–10%)
  - Phase 02: Seven Simultaneous Mechanical Kinematics (10–55%)
  - Phase 03: Precision Mechanical Convergence & Spatial Translation (55–70%)
  - Phase 04: Cinematic Exploded Machine Assembly (70–85%)
  - Phase 05: Final Integrated CNC Machine Reveal (`Final_500_frames`, 85–100%)
- Fixed all black animation windows with instant Frame 0001 preloading, progressive prefetching, and aspect-fit 2D Canvas rendering.
- Refined brand typography to Outfit for display headlines, Plus Jakarta Sans for body text, and DM Mono for telemetry labels.
- Applied deep industrial navy (`#061326`, `#091A30`), metallic blue (`#2469B5`), electric blue (`#56A8FF`), and steel silver (`#C7D0DC`) palette with no orange/yellow accents.
- Verified full bidirectional scrubbing, reverse scrolling, and zero console errors via automated browser test suite.

## 1.2.0 — 2026-11-07 — Transformers-Style Cinematic Product Showcase (6-into-1)
- Redesigned the Products tab (`#products`) into a unified cinematic animation stage.
- Synchronized six simultaneous product keyframe sequences mapped to master scroll progress (240 frames each).
- Implemented 5-phase scroll timeline: Reveal (0–20%), Simultaneous Operation (20–55%), Transformer Convergence (55–70%), Exploded Assembly (70–85%), and Complete CNC Machine (85–100%).
- Integrated final CNC Milling Machine reference sequence (`03_CNC_Milling_Machine`) with full lockup typography and CTA integration.
- Added hardware-accelerated Canvas rendering with progressive preloading, nearest-frame decoding fallback, and full bidirectional scrubbing.

## 1.1.0 — 2026-11-07 — Live Admin Console & Dynamic Content Engine
- Added Admin Management Console accessible at `/admin` (or `/admin/` / `/admin.html`).
- Created `src/content-manager.js` for reactive data synchronization across tabs with LocalStorage persistence and `/api/save-content` disk backup.
- Enabled full CRUD operations for Products (add/edit/remove, titles, descriptions, visual shapes, grid spans).
- Enabled editing of Capabilities (headline, lead text, workflow steps).
- Enabled management of Visual Story gallery cards (indices, image paths, preview thumbnails, large feature toggles).
- Enabled direct editing of Company Contact Channels (phones, email, facility address, WhatsApp numbers, message prefill, Google Maps).
- Updated `scripts/serve.mjs` with `/admin` URL rewriting and `/api/save-content` POST handler.
- Updated `scripts/build.mjs` to package `admin.html` as both `/admin.html` and `/admin/index.html`.
- Added discreet Admin Console link in the website footer.

## 1.0.1 — 2026-11-07 — Production Engine & Asset Pipeline Polish
- Extracted exact 147 WebP frames (1440px width, 8 fps) from source Timeline 1.mp4 matching Document 07 specification.
- Cleaned up 1,105 uncompressed raw JPEGs from public/frames/, reducing workspace bundle size by ~500MB.
- Upgraded scripts/build.mjs and scripts/serve.mjs to properly route root assets (/frames, /images, /favicon.svg) and eliminate 404s.
- Enhanced src/main.js with getClosestFrame() interpolation and 6-worker concurrent background decoding pool.
- Corrected tel: click-to-call telephone protocols in contact block.
- Integrated OpenGraph, Twitter Card metadata, canonical URL, and JSON-LD LocalBusiness schema in index.html.
- Verified cross-viewport responsiveness (desktop, tablet, 390px mobile) and prefers-reduced-motion fallback via headless browser test suite.
- Added dedicated `/admin` Content Management Console for editing and adding Products, Capabilities, Visual Story (Gallery), and Contact channels live with instant site sync and disk persistence.
- Added discreet footer `[Admin Portal]` navigation link to `/admin`.

## 1.0.0 — 2026-11-07 — Generated starter package
- Created responsive Modern Guideways static website.
- Added Canvas scroll story using 147 WebP frames derived from supplied video.
- Added product, capability, visual story and contact sections.
- Added WhatsApp, phone, email and directions links.
- Added 35 project-specific planning documents and Hermes handoff materials.
- Included original supplied source assets.
- Status: starter generated; not yet owner-approved or production-launched.
