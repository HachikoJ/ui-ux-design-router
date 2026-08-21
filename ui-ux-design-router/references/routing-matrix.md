# Routing Matrix

Use this matrix to choose a product mode before choosing a brand or visual trend. A mode is a behavior and information-architecture decision first; its visual language follows from that decision.

## Candidate Modes

| Mode | Strong signals | Visual direction | Interaction priorities | Avoid |
| --- | --- | --- | --- | --- |
| Operational SaaS / dashboard | Repeated work, comparison, status, tables, permissions | Restrained palette, high scan density, clear hierarchy, low decoration | Keyboard flow, filters, bulk actions, persistent context, empty/error/recovery states | Hero-sized type, card nesting, decorative gradients, hiding status in modals |
| Devtool / AI workspace | Panels, files, prompts, logs, technical users, frequent return visits | Precise neutral base, deliberate accent, pane structure, compact type | Shortcuts, focus management, resizable regions, streaming/loading feedback, undo | Treating a workbench like a marketing page, over-rounded controls, unbounded motion |
| Editorial / knowledge | Long reading, references, search, chronology, mixed media | Typography-led rhythm, readable measure, calm contrast, explicit section structure | TOC, anchors, search, progressive disclosure, reading position, link clarity | Dense dashboard chrome, oversized UI cards, decorative text effects |
| Brand / marketing / landing | First-visit persuasion, narrative, brand recognition, one main conversion | Brand signal in the first viewport, controlled art direction, strong media, clear CTA hierarchy | Scroll narrative, sticky sub-nav when useful, accessible CTA, responsive media crop | Generic split hero, brand skin copying, multiple competing CTAs, filler copy |
| Commerce / consumer | Browse, compare, trust, object recognition, purchase or save | Product/object is visible and inspectable, trust cues, purposeful emphasis | Search/filter/sort, gallery, sticky purchase/save, cart recovery, feedback | Atmospheric images that hide the object, dark patterns, unclear availability |
| Mobile / touch-first | Thumb use, short sessions, one-handed reach, constrained width | Hierarchy compressed without losing identity, strong contrast, stable controls | 44px targets, bottom-reachable actions, gestures with visible alternatives, keyboard avoidance | Desktop shrinkage, tiny icon-only controls, hover-only affordances |
| Creative / game / expressive | Direct manipulation, exploration, emotion, play, visual feedback | More expressive palette/assets/motion, but with a stable interaction grammar | Immediate feedback, gesture/drag behavior, pause/reset/undo, progress and recovery | Decoration that competes with the task, motion without state meaning, inaccessible controls |
| Data-heavy analysis | Metrics, trends, anomalies, repeated inspection | Quiet chrome, semantic color, strong alignment, density tuned to scan speed | Cross-filtering, drill-down, visible query state, loading/empty/no-data clarity | Rainbow charts, color-only meaning, decorative cards, hiding units/context |

## Scoring

Score each candidate 0-2 for: core job fit, usage context, content density, device fit, brand constraints, and implementation risk. Choose the highest total. A tie goes to the mode that preserves current user habits and requires fewer new interaction concepts. Do not average several modes into a visual collage.

## Style Axes To Make Explicit

Before choosing a reference, state the needed values on these axes:

- Energy: quiet, confident, warm, playful, dramatic.
- Density: airy, balanced, compact, information-dense.
- Contrast: soft, balanced, high-contrast.
- Edge language: sharp, restrained radius, friendly radius, expressive shape.
- Type role: utilitarian, editorial, technical, premium, conversational.
- Color behavior: neutral base with one accent, semantic multi-color, monochrome, image-led, or high-energy controlled palette.
- Image role: object proof, product UI, editorial content, brand atmosphere, or none.
- Motion role: none, feedback only, transition explanation, or expressive interaction.

These are design decisions, not keywords to paste into a generator. Each selected value must trace to the product job or user context.

## Interaction Selection Heuristics

- Repeated actions favor persistent navigation, visible filters, keyboard shortcuts, and stable dimensions.
- Exploration favors progressive disclosure, previews, breadcrumbs/TOC, and reversible choices.
- High-consequence actions favor confirmation at the point of risk, clear status, undo, and recovery.
- One primary action favors a single visual accent and a predictable location; do not color every action as primary.
- Mobile variants should preserve the task order while changing reachability, grouping, and input method.
- When introducing an unfamiliar icon or gesture, pair it with an accessible label or visible alternative.
