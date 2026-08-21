# Digital Product Visual Foundations

Use this for substantial visual design, a new/rebuilt design system, or an audit involving hierarchy, grid, spacing, color, icons, or component parameters. Product hierarchy and interaction decisions remain stronger than aesthetic preferences.

## System Decision Loop

Route every visual layer through the same loop so the result is a system rather than a checklist:

1. name the user's job, content priority, frequency, input, viewport, risk, and existing conventions;
2. choose the page structure and stable regions before choosing surfaces or components;
3. add the fewest containers and components that clarify ownership, grouping, comparison, or interaction;
4. bind typography, color, icon, geometry, depth, imagery, and motion to semantic roles;
5. define states, responsive substitutions, content limits, and fallback behavior;
6. stress-test real content and interaction, remove unsupported variation, and record the reusable rule.

For each non-obvious choice, be able to state: **activate when**, **choose by**, **simplify when**, and **accept when**. If a layer cannot answer all four, it is decoration or an untested preference and should not enter the system.

## Content Hierarchy To Visual Hierarchy

Write the screen order before styling: page/workspace purpose, primary action or object, active context, supporting controls, status, and metadata. Then map importance with the fewest necessary signals.

- Contrast can come from scale, weight, value, saturation, shape, position, space, or motion. Do not maximize all of them.
- One primary region or action dominates; secondary and tertiary layers recede without becoming faint or undiscoverable.
- Proximity and whitespace group related controls/content. Larger gaps, keylines, tonal shifts, or common regions separate different groups.
- Preserve figure/ground and signal-to-noise. Borders, cards, shadows, color blocks, and decorative imagery must justify their information role.
- Check blur/squint, grayscale, first-glance reading order, and task completion. A beautiful first impression can mask interaction failures, so behavior wins.

## Rhythm, Whitespace, And Density

- Build rhythm from repeated alignments, type roles, row/control dimensions, and a compact spacing scale.
- Within-element spacing is smaller than related-item spacing; group spacing is smaller than section spacing. Keep this relation before tuning values.
- Whitespace communicates grouping, focus, and pacing. It is not a luxury effect and should not displace the real workspace.
- Choose compact, balanced, or airy density from frequency, scan/comparison needs, device, and user expertise. Do not give every mode marketing-page spacing.
- Keep repeated dimensions stable so labels, state changes, icons, and loading content do not shift the layout.

## Grid And Spacing Dispatch

| Surface | Grid behavior | Priority |
| --- | --- | --- |
| Operational SaaS / data | Stable shell plus fluid content columns; modular rows/tables | Scan alignment, comparison, persistent context |
| Devtool / editor | Resizable panes with fixed tool rails and explicit min/max sizes | Canvas/work area, focus, status, no layout jumps |
| Editorial / knowledge | Readable content measure plus wider media spans | Baseline rhythm, anchors, captions, long reading |
| Commerce / discovery | Product/media grid with controlled card variants | Object comparison, image ratio, price/availability alignment |
| Marketing | Fluid narrative grid with stable text/media anchors | Brand/product signal, CTA order, responsive crop |
| Mobile / touch | Single dominant flow with safe-area and bottom-reach rules | 44px targets, keyboard avoidance, sticky-action clearance |

- Start from the project's grid and tokens. When none exist, choose a small 2/4/8-related spacing scale for UI primitives and semantic layout roles; it is a starting model, not permission for arbitrary multiples.
- Define container behavior, margins, columns, gutters, min/max tracks, keylines, and breakpoints from content pressure. Test the longest label, widest data, narrowest target, and large empty state.
- Use CSS Grid/Flexbox or the framework layout system rather than manual offsets. Permit documented optical adjustments for icons and curved shapes.
- Break the grid only to express a meaningful hierarchy or direct-manipulation need, and keep other anchors stable.

## Typography And Color

Use [typography-content-brand.md](typography-content-brand.md) for type, bilingual content, logo use, and text-color acceptance.

Build palette roles before values:

- canvas, surface/layer, border/subtle, text primary/secondary/tertiary;
- primary action, secondary action, link/focus;
- success, warning, danger, information and data categories;
- brand accent and imagery colors when they do not conflict with interaction semantics.

Use neutral structure plus controlled chromatic emphasis unless the product mode justifies another system. Do not use color only to indicate state, selection, error, or chart category. Check light/dark/high-contrast variants only when requested or established; semantic roles must survive every supported theme.

## Container And Surface Dispatch

| Region | Use when | Boundary and behavior |
| --- | --- | --- |
| Canvas / app shell | It owns navigation, viewport, global status, or the primary work area | Establish root background, safe areas, persistent regions and scroll ownership; never style the whole page as a floating card |
| Section / band | Content purpose or narrative phase changes | Usually separate with spacing, alignment or tone; use a frame only when the boundary carries meaning |
| Workspace / canvas | Direct manipulation, editing, mapping or monitoring is the core job | Give it stable min/max dimensions, explicit overflow/zoom, focus and empty/loading behavior; do not bury it in decorative chrome |
| Panel / inspector | A bounded set of controls or supporting information belongs together | Own one purpose, heading and scroll behavior; use density appropriate to repeated work |
| Card | Repeated self-contained objects need independent scanning, comparison or action | Keep a stable internal grammar and limited variants; a card is not the default wrapper for every section |
| Row / cell / data region | Repeated records or attributes need dense comparison | Preserve keylines, alignment, row states and column meaning; use tables when relationships are truly tabular |
| Overlay: menu, popover, dialog, drawer | A temporary choice, short context, blocking decision or supporting task must sit above the current surface | Choose the smallest adequate overlay, manage focus and dismissal, state the consequence, and avoid turning long workflows into popovers |
| Inset / status region | Help, selection, warning, progress or an exceptional state must be associated with a parent | Use semantic tone/border/icon only as needed; keep the recovery action adjacent and do not nest another decorative card inside it |

Start with alignment, proximity and whitespace. Add a tonal surface, border, radius or elevation only when it clarifies a boundary, state, ownership or overlap; usually one boundary cue is enough. Keep nesting shallow: shell to section/panel to actual content or repeated object. A card inside a card, panel inside a floating section, or multiple framed wrappers requires a distinct independent object and a real interaction reason.

Define each container's width/min/max, padding role, scroll owner, content contract, density, state owner and responsive replacement. When content pressure exceeds it, prefer wrap/reflow, a wider or different layout, progressive disclosure, or removing optional metadata. Use horizontal scrolling only for genuinely wide data/canvas content with preserved context. Do not solve pressure by shrinking essential type, clipping actions, or piling on nested containers.

## Component Intent And Composition

Choose a component from the user's intent, not from visual novelty:

| Intent | Default pattern | Change only when |
| --- | --- | --- |
| Navigate or change location | Link, breadcrumb, navigation item, or tab for a sibling view | The action mutates data rather than location |
| Execute a command | Button; familiar icon button for compact repeated tools | The choice represents navigation, a persistent setting, or direct selection |
| Toggle one independent setting | Checkbox or switch; use a switch for an immediate on/off setting | Options are mutually exclusive or require an explicit apply step |
| Choose one or many options | Radio/list for visible few; select/combobox for longer sets; checkbox group for many | Search, hierarchy, comparison, or creation requires a richer picker |
| Select a mode or sibling view | Segmented control for a small immediate set; tabs for view/navigation structure | Space or option count makes the whole set unreadable |
| Enter or adjust a value | Appropriate field, stepper or slider with visible value and bounds | Precision, range, units, or error cost makes another control safer |
| Scan/compare records | Table for shared columns; list for heterogeneous summaries; cards for self-contained visual objects | Responsive pressure requires a deliberate alternate representation |
| Reveal secondary detail | Disclosure/accordion or details panel | The information is required for the main task and should already be visible |
| Choose contextual actions | Menu or popover | The action is primary, high consequence, or needs a full workflow |
| Confirm/block or support a side task | Dialog for focused blocking decisions; drawer/panel for contextual supporting work | The task needs a route, history, or deep linking and should be a page |
| Report transient outcome | Inline state for actionable/local issues; toast for non-blocking global confirmation | The user must compare, recover, or retain the message |

- Define the content/data parent as owner of selection, async data and shared status; let a control own only its local interaction state. Do not duplicate loading, error or selection truth in several wrappers.
- Every variant must correspond to a repeated intent, emphasis, density or state. Add a new variant only after an existing one fails a real repeated case; remove cosmetic variants with no semantic difference.
- Compose toolbars by frequency and consequence, forms by question and dependency, tables by comparison task, and dialogs by decision. Visual grouping must match DOM, focus and reading order.
- Keep dimensions stable across default, hover, focus, pressed, selected, disabled, loading and error states. Icon buttons retain accessible names and full targets; high-consequence or ambiguous commands retain text.
- When a component cannot carry real content, localization, accessibility or recovery without distortion, change the component or split the task. Do not keep it because it looks better in the ideal screenshot.

## UI Icon System

- Use the project's existing icon library; use Lucide when it is the established or appropriate implementation library. Keep one family per surface.
- Classify logo, app icon, UI icon, pictogram, illustration, and status badge separately. Interface icons never substitute for product identity.
- Before drawing a custom UI set, prove the domain concept is missing from the existing family. Define artboard/live area, keylines, optical size, stroke/fill, corner/cap/join, baseline, directionality, and filled/outlined state behavior.
- A 24-unit artboard is a common baseline, not a mandatory final size. Test recognition and optical weight at every rendered size and next to actual labels.
- Icon-only controls require familiar meaning, accessible names, focus/hover/pressed/disabled states, tooltips where useful, and stable touch targets. High-consequence or ambiguous actions retain text.

For brand pictograms, app identity, or a new logo system, route to [brand/visual-foundations.md](brand/visual-foundations.md) and [brand/brand-system.md](brand/brand-system.md).

## Component Geometry And Depth

Derive parameters from interaction, density, input, and the selected visual grammar:

- size: touch target, text line height, content, repeated alignment, and platform conventions;
- radius: a small semantic scale for controls, containers, overlays, and circular objects; do not round every rectangle;
- border: separation or state, not automatic decoration;
- shadow/elevation: actual overlap, focus, drag, menu/dialog, or necessary surface separation; use tonal layers/keylines when clearer;
- stroke and icon weight: harmonize with type and rendered size;
- padding: preserve the spacing hierarchy and stable control dimensions across labels/states.

Use reference, semantic/system, and component tokens when the project is large enough to benefit. Component values should point to roles instead of hard-coded one-offs. Avoid nested cards, excessive elevation, and incompatible radius languages.

## Visual Acceptance

- Hierarchy matches the task when blurred and in grayscale.
- Repeated keylines, spacing and dimensions are visibly consistent.
- Every container has a stated grouping, ownership, comparison or layering purpose; nested boundaries and card count are the minimum needed.
- Every component maps to a user intent, has one state owner, a justified variant set, and a pressure/fallback behavior.
- The palette has semantic roles, accessible pairings and non-color cues.
- Type roles fit their actual shell, panel, card, table, form, overlay, data and state contexts; icons and controls align optically and survive real content.
- Corners, borders and shadows express one depth model.
- Default, hover, focus, active, selected, disabled, loading, success and error states do not resize or shift components.
- The surface works at target viewports, 200% zoom, text-spacing overrides, slow font/image loading, and missing-asset fallbacks.
