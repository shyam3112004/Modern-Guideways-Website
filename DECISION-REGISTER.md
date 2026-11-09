# Decision Register

| ID | Decision | Status | Rationale / follow-up |
|---|---|---|---|
| D-04 | Transformers-Style Cinematic 6-into-1 Product Showcase Stage | Implemented | Converted the static Products tab into a scroll-pinned cinematic stage where 6 product animations run simultaneously and converge into one complete CNC machine. |
| D-01 | Build v1 as a static HTML/CSS/JS site | Implemented | The initial website is informational and enquiry-led; zero runtime dependencies.
| D-02 | Use Canvas 2D for scroll sequence | Implemented | Reuses supplied video frames and keeps rendering lightweight.
| D-03 | Use native scroll + requestAnimationFrame | Implemented | Avoids unnecessary dependencies; 6-stream worker pool & closest-frame fallback active.
| D-04 | Include 147 WebP frames extracted at 8 fps | Verified & Implemented | Extracted from 18.432s MP4 at 1440px width, quality 82; unneeded raw JPEGs pruned.
| D-05 | Product visualisations are CSS illustrations | Implemented | No verified product photos were supplied in the mounted assets.
| D-06 | Contact routes use tel/mailto/WhatsApp/maps links | Implemented | Avoids collecting personal data or requiring a backend; verified click-to-call.
| D-07 | No analytics, CMS, auth, database or payments | Deferred / excluded | No explicit v1 requirement.
| D-08 | User requests Gemini 3.8 Flash in Hermes | Verified & Active | Operating on Google Gemini 3.8 Flash High in Hermes.
| D-09 | Authentic Workshop & Process Visuals | Owner Approved | Visual storytelling sequence approved by owner; public disclaimer removed.
| D-10 | Live Contact Form Webhook / Email Gateway | Implemented | Added interactive technical enquiry form with LocalStorage + JSON logging + optional webhook integration.
| D-11 | Production Deployment & Custom Domain | Configured | Vercel & Netlify configuration files created with custom domain settings for modernguideways.com.
