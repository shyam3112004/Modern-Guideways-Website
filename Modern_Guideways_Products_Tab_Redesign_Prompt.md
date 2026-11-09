# MODERN GUIDEWAYS — COMPLETE PRODUCTS TAB REDESIGN
## Premium Industrial Art Direction + 7 Synchronized Animations + Final Machine Assembly

### 1. YOUR TASK

Completely redesign the existing Products tab of the Modern Guideways website.

The current Products tab looks like a generic AI-generated dashboard. It uses basic rectangular cards, black animation areas, oversized typography, excessive technical labels and an unbalanced layout.

I need a premium, professional industrial manufacturing website experience that matches the visual quality of the other website sections.

Do not simply adjust the current card colors. Rethink the entire Products tab composition, typography, spacing, animation presentation, hierarchy and scroll experience.

The final experience must have:

- Seven separate product presentations.
- Seven individual frame-by-frame animations.
- All seven animations running simultaneously.
- One unified scroll-controlled timeline.
- A cinematic final transformation.
- One complete CNC machine at the final scroll position.

The visual story is:

SEVEN INDIVIDUAL PRODUCTS → SIMULTANEOUS MOVEMENT → MECHANICAL CONVERGENCE → ONE COMPLETE CNC MACHINE.

### 2. FIRST — INSPECT THE EXISTING WEBSITE

Before implementation:

1. Inspect the entire website and existing Products tab.
2. Study the Company, Capabilities, Gallery and Contact sections.
3. Understand their typography, colors, spacing, navigation, backgrounds and visual language.
4. Identify what makes the existing sections professional.
5. Reuse the website's established design system.
6. Inspect all eight video/frame folders and their actual filenames.
7. Verify image loading, dimensions and frame counts.
8. Inspect the existing animation implementation and browser console.

Do not redesign the other website sections.

Only modify the Products tab and its directly related animation components.

### 3. SEVEN PRODUCT PRESENTATIONS

Use the seven existing product video frame sequences.

PRODUCT 01 — BELLOWS COVER
Folder: 01_Bellows_Cover

PRODUCT 02 — SAFETY ENCLOSURE
Folder: 02_Safety_Enclosure

PRODUCT 03 — CNC MILLING MACHINE
Folder: 03_CNC_Milling_Machine

PRODUCT 04 — LINEAR GUIDE ASSEMBLIES
Folder: 04_Linear_Guide_Assemblies

PRODUCT 05 — ROLLER GUARD
Folder: 05_Roller_Guard

PRODUCT 06 — TELESCOPIC MACHINE COVER
Folder: 06_Telescopic_Machine_Cover

PRODUCT 07 — STEEL WAY COVER
Folder: 07_Steel_Way_Cover

FINAL ASSEMBLY VIDEO:
Use the Final_500_frames folder as the final machine assembly sequence.

Verify the real paths before implementation. Do not assume folder names or silently substitute assets.

### 4. PREMIUM PRODUCT DESIGN — NO AI SLOP

Create an editorial industrial design, inspired by premium engineering manufacturers and high-end industrial product websites.

Avoid the current dashboard appearance.

Design direction:

- Professional industrial art direction.
- Strong typography hierarchy.
- Large, beautifully composed product imagery.
- Clean alignment and precise spacing.
- Subtle metallic-blue details.
- Premium dark navy and steel palette.
- Clear separation between product sections.
- Minimal interface elements.
- Sophisticated animation transitions.

Colors:
- Deep navy: #061326
- Dark navy: #091A30
- Metallic blue: #2469B5
- Electric blue highlight: #56A8FF
- Steel silver: #C7D0DC
- White: #F5F7FA
- Muted grey: #9AA9BC

Use Outfit for large display headings and Plus Jakarta Sans for supporting text.

Typography must be carefully controlled:
- Large but not oversized headlines.
- Clear product titles.
- Readable supporting descriptions.
- Small technical labels only where useful.
- Consistent font weights and letter spacing.

Do not use orange or yellow accents.

### 5. LAYOUT — SEVEN SEPARATE PRODUCT WINDOWS

Create one cohesive Products experience.

Each of the seven products must have an individual visual presentation window.

The windows should feel like premium product showcases, not ordinary ecommerce cards or a monitoring dashboard.

Possible composition:
- Carefully balanced 3-column editorial layout on desktop.
- Seven products arranged with consistent proportions.
- The seventh product receives a balanced final position.
- Large enough animation windows to clearly see mechanical movement.
- Product name and concise description beneath or beside each window.
- Consistent margins, alignment and visual hierarchy.

Use a restrained border treatment. Avoid excessive outlines, heavy boxes, decorative corner brackets and unnecessary technical telemetry.

The product images and animations must dominate the layout.

Do not make the product windows so small that the mechanical details become unclear.

On mobile, use a readable responsive arrangement without breaking the master animation.

### 6. ALL SEVEN ANIMATIONS MUST RUN SIMULTANEOUSLY

This is a strict requirement.

Do not create a sequential product carousel.

Do not animate Product 1 first, Product 2 second and so on.

All seven product frame sequences must animate simultaneously.

Each product has:
- Its own image sequence.
- Its own independent frame index.
- Its own animation mapping.
- Its own product presentation window.

All seven must be controlled by one shared scroll progress value.

When the user scrolls forward, all seven frame sequences advance together.

When the user scrolls backward, all seven sequences reverse together.

Use the existing extracted frame assets. Do not replace the actual frame sequences with CSS animations.

### 7. SCROLL-DRIVEN EXPERIENCE

Build one long, carefully paced, pinned Products experience.

PHASE 01 — INTRODUCTION (0–10%)

Introduce the Products section with an elegant heading:

ENGINEERED MACHINE PROTECTION

Seven precision-engineered protection systems.

Reveal all seven product windows using subtle, coordinated motion.

PHASE 02 — SEVEN SIMULTANEOUS ANIMATIONS (10–55%)

All seven products animate at the same time.

Each product must show its original mechanical motion.

The seven windows remain separate and clearly visible.

The user can observe every product moving independently.

PHASE 03 — TRANSFORMATION (55–70%)

Begin the final mechanical transformation.

All seven product windows gradually respond to the same timeline.

- The product windows begin moving toward the central composition.
- Their backgrounds and borders gradually disappear.
- The individual product animations become coordinated assembly elements.
- Use spatial movement, scaling, controlled rotation and depth.
- Avoid sudden transitions.

PHASE 04 — EXPLODED MACHINE ASSEMBLY (70–85%)

Transition into a large cinematic exploded machine composition.

Use the CNC milling machine reference as the central structure.

Show compatible product components approaching their installation positions.

Use realistic mechanical alignment and assembly movements.

Some products may be alternative protection systems. Do not force physically incompatible products onto the same machine. Show alternatives as part of the transformation, and assemble only a physically plausible final configuration.

PHASE 05 — FINAL MACHINE (85–100%)

Use the Final_500_frames sequence.

The seven individual product windows are now completely gone.

Show one large, beautifully composed complete CNC machine.

No remaining product cards.

No dashboard.

No extra panels.

Only one machine, with premium lighting and a smooth cinematic camera movement.

Final heading:

MODERN GUIDEWAYS

PRECISION MACHINE PROTECTION SYSTEMS

CNC • VMC • HMC

### 8. FRAME QUALITY AND CLARITY

The existing folders contain extracted PNG frame sequences.

Use the actual available frame counts. Some folders may have 240 frames and others may have 500 frames.

Do not assume every folder has the same number of frames.

Build a normalized frame mapping so all seven animations progress together, even when frame counts differ.

Requirements:
- Preserve original frame resolution.
- Preserve sharp metallic details.
- No unnecessary image compression.
- No stretching.
- No distortion.
- No flickering.
- No black animation windows.
- No missing frames.
- No visible loading gaps.
- No incorrect image paths.

Preload the first frames and progressively load the remaining frames.

Do not load thousands of full-resolution PNGs into browser memory simultaneously.

Use a shared scroll progress controller with efficient frame caching.

### 9. FIX THE CURRENT BLACK ANIMATION WINDOWS

The screenshots show that the existing product windows are black.

Investigate and fix the actual cause.

Check:
- Incorrect frame paths.
- Incorrect asset imports.
- Incorrect filename numbering.
- Missing image files.
- Incorrect public directory paths.
- Image loading failures.
- Canvas rendering errors.
- Frame index mapping.
- Browser console errors.

Do not hide black windows with placeholder gradients or decorative images.

Every product window must show its actual video frame sequence.

Add a clean fallback only when an asset genuinely fails to load, and report the missing asset.

### 10. MOTION QUALITY

Use a smooth, premium scroll experience.

If compatible with the existing stack, use GSAP ScrollTrigger.

Use canvas-based image sequence rendering where appropriate.

Requirements:
- Scroll-scrubbed animation.
- Smooth forward movement.
- Smooth reverse movement.
- Stable pinned section.
- Correct behavior during fast scrolling.
- No sudden frame jumps.
- No flickering.
- No layout shifts.
- Responsive behavior.
- Reduced-motion support.

The animation must feel smooth and controlled, not artificially overanimated.

### 11. FINAL VISUAL QUALITY ASSURANCE

Test the actual website in the browser.

Capture screenshots of:

1. Products introduction.
2. All seven product windows visible.
3. All seven animations running.
4. Mid-scroll animation.
5. Transformation beginning.
6. Exploded assembly.
7. Final machine reveal.

Verify:
- All seven product animations work.
- No black windows.
- Product images are clear.
- Typography is professional.
- The layout matches the other website sections.
- The final assembly transition works.
- Reverse scrolling works.
- No broken assets.
- No console errors.
- Desktop and mobile layouts are usable.

Do not claim completion without checking the actual browser result.

### 12. WORKFLOW

First inspect and prepare a visual storyboard.

Then implement the redesign.

Do not change unrelated pages.

Preserve the existing website functionality, navigation and branding.

The final result must feel like a premium industrial manufacturing company website, not an AI-generated dashboard.

FINAL ACCEPTANCE:

Seven individual product windows.

Seven real frame-by-frame animations.

All seven animate simultaneously.

One synchronized scroll timeline.

One cinematic mechanical assembly.

One complete CNC machine at the final scroll position.

Professional typography, colors, spacing and visual clarity throughout.