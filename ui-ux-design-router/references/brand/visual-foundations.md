# Visual Foundations And System Rules

Use this reference to turn aesthetic judgment into observable relationships. Values are outputs of the brief, medium, and content; they are not universal presets.

## System Decision Loop

For every visual layer, record four things: **activate when**, **choose by**, **simplify when**, and **accept when**. Apply them in this order:

1. communication objective, audience, desired response, message truth and existing equity;
2. medium, viewing distance/duration, format, production and editability;
3. content hierarchy, canvas, modules, variable content and adaptation needs;
4. typography, color, graphic assets and detail parameters that support those conditions;
5. constrained-format, low-quality-output, multilingual, replacement-content and actual-use proofs.

Higher-order communication and production needs outrank stylistic preference. If a device, module, type treatment or effect cannot explain its job and proof, remove it rather than preserving it as decoration.

## Hierarchy Before Styling

Write the content order first: primary message, supporting proof, required detail, action or source, and brand attribution. The visual order must match it.

- Use contrast in scale, weight, value, saturation, shape, position, motion, or space. Do not turn every channel up at once.
- Make one element or group dominant, then create a controlled secondary and tertiary path. Equal emphasis creates no hierarchy.
- Use proximity and whitespace to group related content; use larger separation, a keyline, or a common region to separate different groups.
- Preserve figure/ground clarity. Decorative texture, imagery, or containers must not compete with the information they support.
- Check with squint/blur, grayscale, thumbnail, and reading-order tests. Then verify at actual size; a thumbnail cannot prove body-text legibility.

## Rhythm, Balance, And Whitespace

- Rhythm comes from repeated intervals, alignments, type roles, shapes, and image behavior. Break repetition only to signal a meaningful change.
- Balance visual weight across the canvas; symmetry is one option, not a default. Asymmetry still needs counterweight and a stable axis.
- Whitespace is active structure. Use it to create grouping, pacing, focus, and edge safety, not as arbitrary luxury.
- Within a group, gaps are smaller than gaps between groups; section spacing is larger than component spacing. Preserve this relational order before tuning numbers.
- Avoid accidental near-alignments, nearly equal gaps, stranded headings, and decorative emptiness that pushes required content out of view.

## Grid And Spacing Dispatch

| Content shape | Grid choice | Main control |
| --- | --- | --- |
| Continuous page, poster, campaign | Column or compound grid | Margins, columns, gutters, focal span, keylines |
| Catalog, dashboard-like report, comparison | Modular grid | Repeated rows/columns, data alignment, module rhythm |
| Editorial or long-form | Column plus baseline grid | Measure, baseline rhythm, folios, captions, image spans |
| Expressive key visual | Hierarchical or intentionally broken grid | Dominant axis and repeated anchors remain visible |
| Responsive digital surface | Fluid columns with breakpoint rules | Content priority, min/max tracks, safe areas, reflow |
| Packaging or spatial surface | Dieline/panel or physical-coordinate grid | Trim/folds/seams, viewing face, safe zones, fabrication |

- Choose a small primitive spacing scale and semantic uses. A 2/4/8-based scale is defensible for digital products but not mandatory for every print or display system.
- Align repeated elements to visible keylines. Permit optical correction for curves, overshoots, punctuation, and perceived centering; document exceptions.
- Do not force content into a grid that harms reading order or creates empty modules. The grid serves consistency and adaptation, not decoration.
- Define canvas margins, safe area, columns/modules, gutters, baseline behavior, and allowed spans. Test the most constrained and most spacious formats.

## Typography Dispatch

- Resolve typography in this order: message role -> medium and viewing conditions -> canvas/module -> language and real content -> family/cut -> size/weight/leading/color -> fallback/production -> proof. Select by script coverage, reading conditions, tone, optical size, available weights/styles, licensing, and output technology before visual novelty.
- Default Chinese and bilingual work to verified CJK plus Latin coverage. Test real mixed text, punctuation, numerals, currencies, units, names, legal copy, and bold/italic fallbacks.
- Define roles rather than arbitrary sizes: brand/display, title, section, body, label, caption, data, code/identifier, legal. Use the fewest roles that express the hierarchy.
- Control measure, leading, paragraph spacing, alignment, hyphenation/line breaking, widows/orphans, emphasis, and numeric alignment. Do not fix overflow by shrinking critical type below readable size.
- Use one primary family and at most one expressive family unless a deliberate editorial system proves more are needed. Monospace is functional, not decorative.
- Keep UI and running Chinese text at letter spacing `0`. Use manual optical kerning for wordmarks and short display lettering only when it improves the actual glyph pair.
- Keep source licenses, embedding/subsetting rights, fallback behavior, and output tests with the design record.

| Context | Typography route | Simplify / validate |
| --- | --- | --- |
| Logo / wordmark | Treat lettering as identity geometry; choose custom lettering or a defensible typographic base from name, positioning and reproduction | Do not reuse display type as body copy by default; test outline, spacing, black, 16/24/48px, blur, print and language variants |
| Campaign / key visual | One short expressive display role may carry the proposition; proof, CTA and required detail use the readable system | Shorten the message or change composition before adding more display styles; test channel crops and recognition without every element |
| Poster / outdoor / event | Size and weight follow viewing distance, dwell time, angle, light and message count | Remove lower-priority copy or create near/far layers before shrinking; test at simulated distance and actual production scale |
| Editorial / report / publication | Optimize running text, measure, navigation, hierarchy, captions, footnotes, tables and folios across pages | Reduce roles before families; test long chapters, dense data, widows/orphans, print and accessible digital output |
| Packaging / label | Map type to front/side/back panels, product/variant, amount, benefit, instruction, warning and legal hierarchy | Reallocate panels or create size variants before making mandatory copy illegible; proof on dieline, curved surface, shelf and e-commerce thumbnail |
| Signage / wayfinding | Prioritize rapid recognition, distance, direction, bilingual order and symbol/type relationship | Remove nonessential messages or split decision points; verify on location or dimensionally faithful simulation |
| Social / display / responsive crop | Use a small hierarchy that survives thumbnail, platform overlays, compression and alternate aspect ratios | Preserve proposition and brand anchors; test safe areas, auto-crop and first frame rather than scaling one master blindly |
| Template / office document | Use licensed, available families with robust metrics, styles and fallback; separate protected brand roles from editable content | Prefer fewer roles and system fallbacks when distribution is uncontrolled; stress-test long names, pasted content and ordinary printers/software |
| Data graphic | Prioritize labels, numerals, units, sources and comparison; use tabular figures when alignment improves reading | Reduce simultaneous annotations or provide a table before using tiny type; test grayscale, non-color paths and data extremes |
| Screen, print or material reproduction | Choose optical size, hinting/raster behavior, ink gain, substrate and minimum detail for the actual output | Use a sturdier cut, fewer weights or monochrome system when output is constrained; inspect the exported/produced artifact, not only the source canvas |

The same semantic role may need justified context variants, but each must recur across a real channel or module. When space tightens, remove optional content, change hierarchy, reflow or select a format-specific composition before reducing essential or legal text below its verified reading condition.

## Color System

Define color by role:

- identity colors: recognizable brand primary/secondary colors;
- neutrals and surfaces: background, text, line, container, substrate;
- emphasis: one controlled accent or key-visual behavior;
- semantic colors: success, warning, danger, information, categories;
- production equivalents: screen, process, spot, monochrome, reversed, and material-specific values as required.

Do not select a palette only from mood. Verify hierarchy, accessible pairings, grayscale separation, color-vision resilience, imagery interaction, and real output gamut. Use text, shape, pattern, position, or labels with color whenever meaning matters.

Work in the color space required by the final medium. For print, obtain the printer/substrate ICC profile and proof conditions; do not assume one CMYK conversion fits every press. For screen, verify current platform/export requirements and common display behavior.

Route color by job: identity colors build recognition, neutral/surface colors organize content, semantic colors carry operational meaning, and data colors distinguish measures. When gamut, ink count, contrast, material or accessibility limits conflict with the ideal palette, preserve hierarchy and recognition with monochrome, spot, pattern, label or value separation before preserving decorative effects. Accept color only after grayscale, relevant contrast/color-vision checks, imagery interaction and actual output proof.

## Canvas, Container, And Module Dispatch

| Structure | Use when | Required contract |
| --- | --- | --- |
| Canvas / field | One format or surface owns the complete message | Size/aspect, margins/safe area, dominant axis, reading path, background/substrate and crop behavior |
| Band / frame / panel | A message phase, category, legal region or production face needs a boundary | Purpose, entry/exit alignment, boundary cue and whether it repeats; do not frame every section |
| Reusable module | A card, story tile, product block, quote, data block or template region repeats with variable content | Required/optional fields, min/max content, internal keylines, spacing, image behavior, overflow and variants |
| Lockup zone | Logo, descriptor, partner or campaign line must remain a controlled relationship | Priority, scale, alignment, clear space, backgrounds, minimum size and co-brand rules |
| Image field | Photography, illustration or product imagery carries evidence, narrative or recognition | Aspect/crop family, focal/safe area, subject scale, treatment, caption/credit and missing-image behavior |
| Editorial page system | Long content needs navigation and repeated page grammar | Master pages, columns/baseline, running elements, section openings, tables/figures and exceptional spreads |
| Packaging panel / dieline region | Information crosses viewing faces, folds, seams, materials or regulatory zones | Panel order, mandatory content owner, dieline layers, safe areas, variant data and production tolerance |
| Signage message zone | A decision point or environment needs a bounded message at distance | Destination hierarchy, arrow/pictogram relation, language order, distance, angle, lighting, mounting and obstruction |
| Template / replacement zone | Non-designers or systems will replace text, image or data | Editable/protected fields, content limits, fallback assets/fonts, failure behavior, instructions and approval path |

Use open composition when a single controlled message benefits from uninterrupted figure/ground and stable anchors. Use containment when ownership, repetition, comparison, variable replacement, legal separation or physical production requires it. Usually choose one boundary signal among space, tone, line, shape or depth. Nested frames require independently meaningful content; decorative boxes inside boxes are a failure of hierarchy.

Every reusable module needs a content contract and a responsible owner. Define what may change, what stays locked, what happens with missing/long content, and which variants cover genuinely different formats. When pressure exceeds a module, revise the message, change its span/layout, move secondary information, or use a documented alternate. Do not silently shrink type, crop critical imagery, overlap legal copy, or create one-off exceptions.

Responsive campaign crops and format families preserve message order, signature assets and brand recognition, not pixel positions. Templates must survive ordinary pasted text, long Chinese-English names, missing images, untrained edits and common output software. Accept the module system only after one representative application and one deliberately difficult replacement-content case pass at actual use size.

## Icon, Pictogram, And Symbol Grammar

First classify the asset:

- UI icon: action, object, or status inside an interface;
- pictogram: broader concept, category, wayfinding, or large graphic moment;
- illustration: narrative or explanatory scene;
- app icon: product identifier in an OS/store context;
- logo: protected identity of an organization/product.

Never substitute one category for another without a deliberate identity decision.

For a custom set, define the master grid, live/bounding area, keylines, stroke/fill family, optical weight, corner radii, caps/joins, terminal treatment, perspective, detail ceiling, baseline, directionality, and size variants. A 24-unit grid is common for UI icons, not a universal rule for pictograms or marks.

Test each symbol alone and as a family at final sizes, pixel density, light/dark backgrounds, and with neighboring type. Check recognition without labels, then retain labels where ambiguity or consequence requires them. Review cultural meaning, handedness, color dependence, and similarity to protected marks.

## Images, Illustration, Texture, And Motion

- Give every asset a job: evidence, explanation, recognition, emotion, navigation, or atmosphere. Remove it when it does not improve the communication.
- Define subject, casting/representation, viewpoint, crop, focal point, depth, light, grade, background, treatment, and relationship to type.
- Keep image rights, model/property releases, generation provenance, and manipulation limits. Do not fabricate documentary evidence or customer use.
- Illustration systems need repeatable shape, line, palette, perspective, texture, character, and detail rules. One-off style mimicry is not a system.
- Motion needs purpose, staging, timing, continuity, reduced-motion or static alternatives, and channel-specific delivery. Secondary action must not compete with the message.

## Detail Parameters

Derive dimensions, strokes, corners, borders, shadows, and depth from the chosen grammar and reproduction scale:

- use a small token set and name roles, not isolated values;
- keep repeated modules stable and component families internally consistent;
- use radius to express the identity and containment, not to make every object friendly;
- use shadows or tonal separation only when they clarify layering, focus, material, or the concept;
- test thin lines, small counters, gradients, transparencies, textures, and reversed type in the actual medium;
- inspect optical centering and perceived weight; mathematical equality is not always visual equality.

Consistency means repeated logic, not identical treatment everywhere. Unity allows controlled variation; randomness does not.
