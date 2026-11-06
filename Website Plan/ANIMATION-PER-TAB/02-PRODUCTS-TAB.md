# Tab Animation 02 — Products

## Signature motion: Zipper-open product runway
**Trend-informed pattern:** pinned product scrollytelling, horizontal product storytelling, mask/clip reveals, snap navigation and kinetic labels.

## Experience
The Products navigation item activates a dedicated product experience. At desktop widths, the section may pin while vertical scroll progress drives a horizontal track, but preserve normal page scroll outside the bounded scene. The user must also have visible previous/next controls and the ability to use the native track.

At mobile widths, prefer touch-first horizontal scroll-snap with visible progress and previous/next buttons. Do not force a pinned 1000px-wide animation onto a narrow viewport.

## Opening motion
A slim mechanical zipper rail spans the showcase. Its pull indicator moves from left to right as the scene opens. This is a visual metaphor only; do not obscure or delay the product content. The product reveal itself uses a clip-path or mask wipe from a center seam.

## Scene anatomy
- Large genuine product image/CAD render.
- Index label 01/06.
- Product name, large editorial typography.
- Plain-language function.
- Applications.
- Only verified material/specification fields.
- Enquiry CTA linked to the existing RFQ/WhatsApp workflow.

## Six distinct reveal signatures
1. Telescopic Covers — nested metal sections slide apart from the center, then settle into assembled view.
2. Roller Covers — a horizontal sheet/ribbon rolls out from a spindle; use a short transform/mask, not a fake mechanical simulation.
3. Apron Covers — metal slats reveal in a stepped cascade, with reduced perspective and no flashing.
4. Bellows — accordion folds expand horizontally in a controlled sequence.
5. Guide Wipers — narrow directional wipe passes across a product close-up, then reveals the full assembly.
6. Enclosing Guards — separate frame/panel layers slide into alignment and resolve into the complete guard silhouette.

## Desktop implementation options
Option A (recommended baseline): native horizontal track, scroll snap, controls and wheel-to-horizontal conversion only while pointer is over track.
Option B (approved cinematic mode): GSAP ScrollTrigger pins the containing section and scrubs track x-position from 0 to `-(track.scrollWidth - viewport.clientWidth)`. Calculate distance after fonts/images load; refresh after resize; use matchMedia; kill/rebuild trigger on route/unmount. Keep wheel and touch escape behavior so the page cannot trap scroll.

Do not use both A and B simultaneously in conflicting ways. Select one mode based on usability tests.

## State and URL
- Current product index stays synchronized with progress indicator.
- Next/previous controls update the native scroll position.
- Keyboard Left/Right works when track is focused.
- Each product may have a hash such as `#product-telescopic-covers` if direct linking is required.
- Back/forward and tab re-entry restore a predictable state.

## Mobile
Native swipe, snap points, compact copy and an image height suited to portrait. Product controls remain visible. Avoid full-screen sticky sections if they prevent normal reading.

## Reduced motion
Disable pin/scrub travel and individual unfolding effects. Show each product as a simple accessible horizontal slide/list with controls. All six product details remain present.

## Acceptance criteria
All six scenes render; each has its own transition; active index and progress are correct; track can reverse; controls and keyboard work; no accidental page lock; mobile touch and reduced-motion paths pass.
