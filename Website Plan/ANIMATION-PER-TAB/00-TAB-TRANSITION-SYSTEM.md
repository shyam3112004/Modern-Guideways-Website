# Global Tab Transition System

## Navigation model
Use semantic links for route/section navigation. Use ARIA tab roles only if the controls truly switch mutually exclusive tab panels. Keep URL/hash, browser history and active navigation state synchronized.

## Transition behavior
- Old content may fade/shift by a few pixels during exit.
- New content enters with a short directional reveal (typically 300–650ms).
- Stagger only important elements; do not animate every line.
- Avoid blocking navigation until animation completes.
- Cancel/overwrite a transition when a different tab is selected.
- Focus the destination heading or panel appropriately without unexpected scroll jumps.

## Five tab signatures
Overview: headline mask reveal + hero depth.
Products: zipper rail + individual horizontal product scenes.
Gallery: staggered image masks.
About: drawn engineering timeline.
Contact: staggered contact rails + action micro-feedback.

## URL architecture
Prefer true URLs/routes for distinct pages when SEO and shareability matter. For one-page sections, use stable IDs and hash/history behavior. Do not call them ARIA tabs if they are ordinary page links.

## Motion timing guidance
Navigation transition: fast and subtle. Product scene: scrubbed/step-based. Gallery: staggered but short. Timeline: draw once per entry or when visible. Contact: micro-interaction only.

## Reduced motion
Use no large travel, parallax or scrubbed pinned transitions. Preserve all content and all controls.
