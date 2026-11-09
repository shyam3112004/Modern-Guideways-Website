# Modern Guideways — Website Starter & Implementation Pack

A complete, responsive, static website starter for Modern Guideways, with a scroll-controlled Canvas sequence generated from the supplied `Timeline 1.mp4`, product-category illustrations, company information, enquiry links and a 35-document planning set. The project uses Node built-ins only; no dependency installation is needed.

## Quick start

Requirements: Node.js 20+ (no external npm packages are required).

```bash
npm run dev
```

Open the local URL printed by the development server. For a production build:

```bash
npm run build
npm run preview
```

## Included

- Responsive industrial design system and single-page corporate website.
- Scroll-scrubbed Canvas image sequence with forward/backward scroll support.
- 147 optimized WebP frames derived from the supplied 18.432-second MP4.
- Reduced-motion fallback and static hero poster.
- Product sections for telescopic covers, roller covers, apron covers, bellows, guide wipers and enclosing guards.
- Company, capabilities, visual story, contact and footer sections.
- Click-to-call, email, WhatsApp and Google Maps directions.
- 35 tailored planning documents under `docs/`.
- Hermes implementation handoff prompt and skills map.
- Original source MP4, profile PDF and business-card image under `source-materials/`.

## Important content and asset notes

1. The PDF supplied in the workspace is a scanned two-page document; searchable text extraction returned no text. The supplied business-card artwork and the project-specific repository reference were used for the visible company facts.
2. The supplied MP4 is included and its frames power the hero and gallery. Its scenes appear to be concept visuals; the site labels them as supplied-film visuals, not independently verified photographs of the actual factory or staff.
3. Product cards use custom CSS illustrations, not photographs or technical product specifications.
4. Product copy is intentionally general. Confirm actual product configurations, materials, tolerances, warranties and services before adding detailed claims.
5. The enquiry actions open WhatsApp, phone or email. There is no backend form submission, CRM, database, authentication or admin dashboard in this static starter.
6. Confirm the address, phone numbers, monitored email inbox, legal details, domain ownership and permission to publish any claims before launch.
7. The requested Hermes model name `Gemini 3.8 Flash` is recorded as a user preference in the handoff prompt; verify the exact model ID and availability in the connected Hermes provider rather than assuming it exists.

## Structure

```text
index.html
src/main.js
src/style.css
public/frames/          # 147 scroll sequence frames
public/images/          # poster
source-materials/       # original supplied source files
prompts/                # Hermes handoff prompt
skills/                 # skills and agent map
docs/                   # 35 project documents
```

## Animation behavior

The hero section pins the Canvas while the user scrolls through a 460vh story range. Scroll position maps to frame index, and scrolling upward reverses the sequence. Five keyframes load first; the remaining sequence loads in the background. The current implementation uses Node built-ins for local serving/building and native scroll events and `requestAnimationFrame` rather than GSAP. GSAP/ScrollTrigger can be introduced later if the approved implementation needs more complex synchronized timelines.

## Deploy

The project is a static static site. It can be deployed to any static host that serves the `dist/` directory. Configure the domain and HTTPS with the selected host. No environment variables are required for the current version.

## Before public launch

- Approve logo artwork and brand typography.
- Verify all company details and contact routes.
- Replace illustrative product art with approved real product photography when available.
- Confirm image/video usage rights.
- Review privacy, terms and accessibility requirements for the chosen jurisdiction.
- Test on actual iOS and Android devices and run Lighthouse against the deployed build.
- Decide whether a real enquiry form and server-side delivery are required.
