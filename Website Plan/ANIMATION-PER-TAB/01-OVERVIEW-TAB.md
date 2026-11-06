# Tab Animation 01 — Overview

## Signature motion: Cinematic engineering reveal
**Trend-informed pattern:** editorial kinetic typography + layered depth + controlled scrollytelling.

### Entry sequence
1. Background/hero frame poster appears immediately.
2. Brand eyebrow fades/slides in by 8–12px.
3. Headline reveals line-by-line using a short vertical mask wipe.
4. Supporting copy fades in after headline settles.
5. Primary CTA reveals last with a restrained directional cue.
6. Existing frame-driven machinery visual remains the hero focus.

### Scroll behavior
If the existing 1,101-frame canvas is present and verified, keep its own scroll controller isolated. Do not attach a second competing pin to the same hero. Story text can change by progress using a small set of defined chapter markers.

### Motion rules
- Avoid continuous floating on critical text.
- Keep text selectable and outside canvas rendering.
- Avoid heavy blur and large parallax on mobile.
- Poster and content remain usable if canvas frames fail.

### Acceptance
Headline is readable immediately; hero canvas is not reset on tab changes; reduced-motion path shows static poster and all copy.
