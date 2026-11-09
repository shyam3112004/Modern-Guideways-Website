# Modern Guideways — Master Documentation

This consolidated file summarizes the 35 individual documents. The individual files in `docs/` remain canonical for edits.


---

## 01 — Product Requirements Document

**Purpose:** The website introduces Modern Guideways and converts interested industrial visitors into direct enquiries.

**Context:** Visitors must understand the company machine-cover categories, service context and contact routes.

**Implementation:** Static responsive site, cinematic scroll story, product categories, company story and contact links.

**Scope / risks:** No checkout, accounts, admin panel, CMS, database or analytics in v1.

**Acceptance:** All primary sections render; mobile navigation works; every contact link opens the intended destination; scroll story responds in both directions.


---

## 02 — Technical Requirements Document

**Purpose:** Use semantic HTML, CSS and native JavaScript. Node built-in scripts serve locally and create the static dist/ build. Canvas 2D renders the frame sequence.

**Context:** No server runtime is required for current features.

**Implementation:** Node 20+ for build; static hosting for dist; images served from public/frames.

**Scope / risks:** No API or secrets. If enquiry form storage is later requested, design server-side delivery and privacy controls first.

**Acceptance:** npm run build succeeds and static preview works.


---

## 03 — Application Flow

**Purpose:** Visitor journey: land on story → explore company → browse products → understand capabilities → inspect visual story → contact.

**Context:** Primary conversion routes are WhatsApp, phone and email.

**Implementation:** Header anchors: Company, Products, Capabilities, Gallery, Contact.

**Scope / risks:** No user login or gated journey.

**Acceptance:** Every navigation anchor reaches a valid section; contact CTA is available from header and page end.


---

## 04 — UI/UX Design Brief

**Purpose:** Industrial luxury: deep navy, steel-grey, white and restrained indigo; precise grid, editorial type and purposeful motion.

**Context:** Design should feel credible to industrial buyers, not like a generic AI template.

**Implementation:** Typography: Manrope + DM Mono with Georgia italic display accents. Spacious layouts, sharp geometry, restrained borders.

**Scope / risks:** Use company-approved logo and real product photography when supplied.

**Acceptance:** Desktop and mobile visual review approved by company owner.


---

## 05 — Backend Schema

**Purpose:** Not applicable to static v1.

**Context:** No database entities are required because contact actions hand off to WhatsApp, email or phone.

**Implementation:** If lead capture is added later, define consent, purpose, retention, access and deletion before choosing a schema.

**Scope / risks:** Deferred. Do not create a database by default.

**Acceptance:** No backend database is provisioned in this release.


---

## 06 — Authentication

**Purpose:** Not applicable: visitors do not create accounts and there is no admin interface.

**Context:** No authentication provider or user data store is present.

**Implementation:** If a CMS/admin is approved later, use managed authentication, MFA for administrators and server-side authorization.

**Scope / risks:** Deferred.

**Acceptance:** No public sign-up, login route or exposed admin endpoint exists.


---

## 07 — Asset Pipeline

**Purpose:** Source video: Timeline 1.mp4, duration 18.432 seconds. 147 WebP frames extracted at 8 fps and width capped at 1440 pixels.

**Context:** Original MP4, scanned company profile PDF and business-card JPEG are retained under source-materials.

**Implementation:** Frame names: public/frames/frame_0001.webp through frame_0147.webp. Poster: public/images/hero-poster.webp.

**Scope / risks:** The uploaded sequence appears to contain concept imagery; get owner approval before describing as documentary company photography. Preserve original sources.

**Acceptance:** All 147 frames exist, decode in browser and render in correct numeric order.


---

## 08 — Deployment Runbook

**Purpose:** Build with npm run build; deploy dist/ to a static host.

**Context:** No environment variables required.

**Implementation:** Set custom domain, HTTPS and canonical redirect at chosen host. Configure SPA fallback only if routes are added.

**Scope / risks:** Host/provider selection and DNS access are TBD.

**Acceptance:** Production URL serves HTTPS, assets return 200 and all anchors/contact links pass smoke tests.


---

## 09 — QA Checklist

**Purpose:** Test navigation, scroll sequence, reverse scroll, frame load failures, reduced motion, contact links and responsive layouts.

**Context:** Check Chrome, Edge, Firefox, Safari and iOS/Android browsers.

**Implementation:** Test 360px, 390px, 768px, 1024px, 1440px viewports.

**Scope / risks:** Lighthouse and physical-device results are not yet measured.

**Acceptance:** No broken links, console errors, horizontal overflow or inaccessible controls.


---

## 10 — Content Editor Guide

**Purpose:** Edit source text in index.html and style.css. Product descriptions live in product card markup.

**Context:** Do not invent specifications, materials, warranties, certifications or customers.

**Implementation:** Use a code editor, commit changes, run build, preview and deploy.

**Scope / risks:** No CMS/editor account in v1.

**Acceptance:** A content change can be reviewed locally and deployed without changing the animation pipeline.


---

## 11 — Privacy and Legal

**Purpose:** The static website itself does not collect or store form submissions. Contact links hand off to the the visitor chosen app.

**Context:** Third-party WhatsApp, email, phone and Maps services have their own privacy terms.

**Implementation:** Add a reviewed privacy notice if analytics, cookies, server-side forms or embedded third-party widgets are introduced.

**Scope / risks:** Legal review and final privacy/terms text are owner responsibilities.

**Acceptance:** Publish only reviewed legal copy; document any later personal-data collection.


---

## 12 — Analytics Specification

**Purpose:** No analytics tracker is installed in v1.

**Context:** Do not add analytics without an approved purpose, provider and privacy review.

**Implementation:** If enabled later, define events for CTA clicks and product enquiries; avoid collecting unnecessary personal data.

**Scope / risks:** Deferred.

**Acceptance:** No analytics cookies or trackers are loaded by this package.


---

## 13 — Domain, DNS & Email

**Purpose:** Business card lists modernguideways.com and modernguideways@gmail.com.

**Context:** Domain ownership, registrar access, mailbox monitoring and SPF/DKIM/DMARC are unverified.

**Implementation:** Before launch, verify domain ownership, canonical www/non-www choice, HTTPS, MX and sender authentication.

**Scope / risks:** Do not change DNS until owner confirms registrar and hosting destination.

**Acceptance:** Domain resolves to approved host and business email receives a test message.


---

## 14 — SEO and Discoverability

**Purpose:** Title, description and Open Graph metadata are included.

**Context:** Focus on product and service phrases: CNC telescopic covers, VMC telescopic covers, HMC telescopic covers, roller covers, apron covers, bellows and guide wipers.

**Implementation:** Add sitemap.xml, robots.txt, canonical URL, local business schema and unique product landing pages before launch.

**Scope / risks:** Do not add unsupported service areas, ratings or certifications.

**Acceptance:** Metadata is unique, indexable and factual; Search Console ownership verified by owner.


---

## 15 — Launch and Go-Live

**Purpose:** Launch only after company details, brand assets, contact links, legal copy and imagery are approved.

**Context:** Deploy static dist build and verify HTTPS.

**Implementation:** Smoke test all nav links, phone, email, WhatsApp, maps, animation and reduced motion.

**Scope / risks:** Production launch is not completed by this ZIP generation.

**Acceptance:** Owner signs off on a deployed preview and release checklist.


---

## 16 — Maintenance and Operations

**Purpose:** Keep source in Git; update product content and images through reviewed commits.

**Context:** Retain source MP4 and source docs; keep optimized frames reproducible.

**Implementation:** Review contact details, domain renewal, dependency updates and link validity periodically.

**Scope / risks:** Operational owner and update cadence TBD.

**Acceptance:** Documented restore from repository and clean build verified.


---

## 17 — Implementation Plan

**Purpose:** Phases: verify content → approve design → audit assets → implement → QA → deploy.

**Context:** Current package contains a generated starter; owner review and production launch remain outstanding.

**Implementation:** Gate 1 facts; Gate 2 visuals; Gate 3 desktop/mobile design; Gate 4 interactions; Gate 5 production checks.

**Scope / risks:** Backend and CMS are deferred unless approved.

**Acceptance:** All gates signed off and unresolved decisions closed or explicitly accepted.


---

## 18 — Frontend Architecture

**Purpose:** Single-page static application. index.html contains semantic sections; main.js controls the Canvas and navigation; style.css contains design system and responsive rules. Node built-in scripts serve locally and copy the production build.

**Context:** Canvas renderer uses 147 image assets. Native scroll progress maps to target frame.

**Implementation:** Future pages can be split into routes if content scope grows.

**Scope / risks:** No framework or state library needed in v1.

**Acceptance:** Modules remain understandable and build output is static.


---

## 19 — Backend Architecture

**Purpose:** Not applicable in current release.

**Context:** No server-side APIs, storage or account management.

**Implementation:** A future enquiry endpoint must validate server-side, rate-limit spam and protect personal information.

**Scope / risks:** Deferred pending an approved requirement and data-handling design.

**Acceptance:** No backend dependency required to run the current site.


---

## 20 — Component Library and Design System

**Purpose:** Tokens: navy #071a31, blue #2e5bba, electric #6688ed, paper #f3f5f7, ink #101b2b.

**Context:** Reusable patterns include brand lockup, header, section index, eyebrow, product card, detail block and CTA.

**Implementation:** Use consistent spacing, typography scale, borders and focus states.

**Scope / risks:** Do not introduce a component framework solely for styling.

**Acceptance:** New sections reuse existing type, color and spacing conventions.


---

## 21 — State Management

**Purpose:** Local JS state only: loaded frames, loaded count, current frame, target frame and menu open state.

**Context:** No global store or persisted visitor state.

**Implementation:** Animation state derives from scroll progress; menu state is reflected in aria-expanded.

**Scope / risks:** Do not store visitor personal data in localStorage.

**Acceptance:** Scroll and navigation state stay synchronized with rendered UI.


---

## 22 — API Documentation

**Purpose:** No API endpoints are present.

**Context:** Contact is via external intent links: tel, mailto, WhatsApp and Maps.

**Implementation:** If a form endpoint is added, document request schema, validation, abuse controls, errors and retention.

**Scope / risks:** Not applicable in v1.

**Acceptance:** No undocumented API calls in browser network activity.


---

## 23 — Integration Documentation

**Purpose:** External handoffs: WhatsApp click-to-chat, email client, phone dialer and Google Maps search.

**Context:** No API integration or webhook.

**Implementation:** Test links on desktop and mobile; WhatsApp availability depends on the visitor device/app.

**Scope / risks:** External service behavior is outside site control.

**Acceptance:** Each link opens the correct destination with encoded content.


---

## 24 — File and Media Management

**Purpose:** Static assets are versioned in public/. Source files remain in source-materials/.

**Context:** Frame filenames are zero-padded and ordered; WebP format reduces payload.

**Implementation:** Keep the MP4 as source of truth; regenerate frames only with an approved script and preserve exact count/sequence metadata.

**Scope / risks:** Review licensing and company approval before publishing supplied video.

**Acceptance:** Manifest and asset folder remain complete and deterministic.


---

## 25 — Payment and Subscription Documentation

**Purpose:** Not applicable: the website does not sell products or accept online payment.

**Context:** Enquiries are handled by direct contact outside the website.

**Implementation:** If online payments are requested later, scope products, taxes, invoices, payment provider, refunds and compliance separately.

**Scope / risks:** No checkout or payment credentials.

**Acceptance:** No payment SDK or billing route in bundle.


---

## 26 — Accessibility Standard

**Purpose:** Use semantic landmarks, descriptive links, visible focus, alt text and reduced-motion fallback.

**Context:** Canvas is decorative storytelling; equivalent headline and description are available as HTML.

**Implementation:** Check keyboard navigation, contrast, zoom, screen reader order and motion preferences.

**Scope / risks:** Canvas frame detail is not a substitute for meaningful HTML content.

**Acceptance:** Core navigation and contact actions work by keyboard; reduced-motion mode is usable.


---

## 27 — Performance Engineering

**Purpose:** Frame sequence uses WebP and progressive loading. Canvas DPR capped at 1.75.

**Context:** Only keyframes load before the loader closes; remaining frames load sequentially.

**Implementation:** Measure LCP, CLS, INP and scroll responsiveness on real devices. Consider mobile-specific frame set after crop approval.

**Scope / risks:** Do not claim Lighthouse scores until measured.

**Acceptance:** No major layout shift; animation remains responsive on supported target devices.


---

## 28 — Disaster Recovery and Backup Plan

**Purpose:** Git repository is the primary code backup; preserve original source assets separately.

**Context:** Keep a copy of the ZIP and original MP4/PDF/business card in controlled storage.

**Implementation:** Test fresh clone, npm install, build and deployment rollback.

**Scope / risks:** No database backup required in v1.

**Acceptance:** A clean checkout can reproduce the website and build.


---

## 29 — Logging, Monitoring and Observability

**Purpose:** No application server or logging backend exists.

**Context:** Use host-level uptime and error monitoring if required.

**Implementation:** Do not add third-party monitoring scripts without owner approval and privacy review.

**Scope / risks:** Monitoring provider TBD.

**Acceptance:** Host uptime can be checked and critical deployment failures are observable.


---

## 30 — Git and Version Control Workflow

**Purpose:** Use main for production-ready code and short feature branches for changes.

**Context:** Commit source and docs; avoid committing build output unless host requires it.

**Implementation:** Review visual changes with screenshots and test build before merge.

**Scope / risks:** Never commit credentials or personal enquiry exports.

**Acceptance:** Repository can be cloned and built from a clean environment.


---

## 31 — Environment Configuration

**Purpose:** No environment variables are needed in v1.

**Context:** Node built-in dev/build/preview scripts are defined in package.json.

**Implementation:** Add environment variables only when a verified server-side integration is introduced; keep secrets server-side.

**Scope / risks:** No .env file required.

**Acceptance:** Build runs without secrets or external service credentials.


---

## 32 — User, Role and Permission Management

**Purpose:** Not applicable: there are no user accounts or role-controlled resources.

**Context:** All site content is public.

**Implementation:** If an editor/admin workflow is later approved, define roles, least privilege and audit needs.

**Scope / risks:** Deferred.

**Acceptance:** No private route or admin data is exposed.


---

## 33 — Browser and Device Compatibility

**Purpose:** Target current and previous major versions of Chrome, Edge, Firefox and Safari; current iOS Safari and Android Chrome.

**Context:** Responsive breakpoints at 900px and 680px.

**Implementation:** Test desktop 1440px, laptop 1024px, tablet 768px and mobile 360–430px.

**Scope / risks:** Actual device QA remains pending.

**Acceptance:** No horizontal overflow; menu, scroll and CTA behavior verified across target matrix.


---

## 34 — Data Migration Plan

**Purpose:** Not applicable: no database or customer data is stored.

**Context:** Static assets and content are version-controlled files.

**Implementation:** If CMS/database is added, plan export, transformation, validation, rollback and retention.

**Scope / risks:** Deferred.

**Acceptance:** No data migration tasks in v1.


---

## 35 — User Guide, FAQ and Troubleshooting

**Purpose:** Visitors scroll to explore and use product links or contact actions to reach the company.

**Context:** If the story is slow, wait for the initial keyframes; if motion is reduced, a poster is shown.

**Implementation:** Maintainers run npm install, npm run dev, npm run build and deploy dist/.

**Scope / risks:** Enquiries open the the visitor email or WhatsApp application; site does not store them.

**Acceptance:** A new maintainer can start, preview, build and deploy using this guide.
