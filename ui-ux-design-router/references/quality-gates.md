# Quality Gates

Use this after implementation and again after any meaningful visual change. It combines the `ui-ux-pro-max` bar with the article's DESIGN.md feedback loop. These gates guide every implementation; do not emit a numeric score unless the user explicitly requests review, audit, scoring, acceptance, or comparison, in which case also read [review-scorecard.md](review-scorecard.md).

## Always-On Release Decision

Run these checks before any weighted review. Any applicable failure means `NOT PASS` and cannot be offset by visual polish or a high score:

- the core task cannot be completed;
- overlap, clipping, overflow, or layout behavior hides critical content or actions;
- text, control boundaries, or essential graphics fail applicable contrast;
- keyboard focus is missing or a required touch target is undersized;
- a core flow lacks an applicable loading, empty, success, error, or recovery state;
- a destructive, payment, overwrite, permission, or other high-risk action does not identify the object and consequence;
- a logo is misused or a required font, image, logo, icon, or other asset has unknown rights;
- data, customer marks, endorsements, metrics, reviews, certifications, or claims are false, placeholder, or unsupported.

Mark a gate not applicable only when the state or capability cannot occur in the reviewed scope, and record the reason. For an explicit acceptance review, use [review-scorecard.md](review-scorecard.md) to attach evidence, severity, modifications, and retests to the decision.

## Evidence And Decision Review

Before implementation, write a small evidence chain for each non-obvious design choice:

| Question | Source / level | Observed | Cannot infer | Native decision | How to falsify |
| --- | --- | --- | --- | --- | --- |
| What user problem is being solved? |  |  |  |  |  |

Reject the decision when the only support is an award, screenshot, trend, or “popular product”. Use [research-catalog.md](research-catalog.md) to choose a stronger source or mark the choice as a hypothesis to test. Keep visual review and interaction review as separate passes.

## Capability Closure Audit

Before release, classify these capability families as `active` or `not applicable`: product/IA, hierarchy/grid, containers, components, typography/content/localization, color, icons/imagery/data, states/interaction/motion, responsive/input/accessibility, identity assets, performance, and handoff. For every active family, the design record must answer: what triggered it, what rule was chosen and why, how it simplifies or degrades under pressure, and what observable evidence accepts it. A missing answer reopens that family; an unsupported aesthetic preference is not evidence. Mark `not applicable` only when the capability cannot occur in scope and state the reason. This audit selects relevant gates; it does not require adding every feature or style.

## Product And Flow

- The first screen exposes the actual product or core action unless a landing page is explicitly requested.
- The primary user path is completable with visible progress and success feedback.
- Navigation, density, and control placement match the chosen mode and the user's repeated habits.
- The primary action is visually obvious; secondary actions do not compete with it.
- No copy, component, or decoration was added only to make the page feel fuller.

## Visual Foundations

Use [visual-foundations.md](visual-foundations.md) for route-specific criteria.

- Content priority maps to one clear visual hierarchy under blur/squint, grayscale, first-glance and actual-task checks.
- Grid, margins, columns/tracks, gutters, keylines and breakpoints respond to the content and preserve stable alignment.
- Spacing follows a compact semantic scale and the relation `inside < related items < groups < sections`; exceptions are documented optical corrections.
- Palette values map to canvas, surfaces, borders, text, actions, focus and semantic states. Meaning never depends on color alone.
- UI icons belong to one family and remain distinct from pictograms, app identity and logos; custom icons have explicit grid, weight, corner and optical-size rules.
- Component dimensions, padding, radius, border and elevation derive from density, input and hierarchy. States do not resize or shift the component.
- Shells, sections, workspaces, panels, cards, rows and overlays have distinct jobs, explicit scroll/state ownership and the minimum necessary boundaries; there is no accidental card nesting or framed-page composition.
- Components are selected from user intent, not appearance. Variants represent repeated semantic needs, and content pressure triggers wrap, reflow, disclosure or a pattern change rather than unreadable type or clipped actions.
- Cards, shadows, gradients, imagery and motion have an information or interaction purpose; removing decoration does not expose a missing hierarchy.

## States

For each core workflow, check the relevant states: first-use/empty, loading, in progress, success/completed, failed/retry, locked/premium, offline/unavailable, and no-results. Controls should cover default, hover, active, selected, disabled, loading, success, error, and locked states.

## Interaction Audit

- **Orientation:** the user can tell where they are, what changed, what happens next, and how to go back without losing work.
- **Flow:** steps follow the user's mental model; progress indicators map to real steps; high-consequence actions state their effect; navigation uses links for navigation and buttons for actions.
- **Feedback:** direct manipulation responds promptly; async work has an honest loading/progress state; optimistic updates reconcile on failure; toasts and validation are announced politely.
- **Recovery:** errors are adjacent, specific, and actionable; entered data persists; retry, undo, cancel, edit, and reset are available where appropriate.
- **Input:** labels remain visible; autocomplete/inputmode and mobile keyboards match the field; no needless formatting or “Apply” friction; focus is visible and managed across dialogs/drawers.
- **Keyboard and touch:** keyboard order and shortcuts work on desktop; touch targets are at least 44px; gestures have click/tap/keyboard alternatives unless essential; hover is never the only affordance.
- **Responsive:** mobile changes reachability and grouping, not only column count; keyboard, sticky bars, drawers, and dialogs do not cover the next action.
- **Motion and accessibility:** honor reduced motion; use contrast, shape, label, and status text rather than color alone; test with assistive technology where the product risk warrants it.
- **Ethics:** persuasion is transparent, optional, reversible, and privacy-respecting; no forced account, hidden fees, confusing consent, or hostile error language.

## Responsive And Input

Check 375px phone, 768px tablet, 1024px small desktop/tablet landscape, and 1440px desktop unless the product specifies other targets. Look for overflow, clipped controls, inaccessible modals, sticky bars covering content, layout shift, and text collisions.

- Touch targets are at least 44px where touch is possible.
- Mobile changes reachability, grouping, and input model when required; it is not merely a shrunk desktop.
- Desktop supports visible focus, keyboard order, and shortcuts where repeated work benefits from them.
- Hover is never the only way to discover or operate a control.

## Typography And Localization

Use [typography-content-brand.md](typography-content-brand.md) for the route-specific contract.

- The declared locale, `lang` attributes, CJK glyph forms, fallback stack, and available weights match the product; meaningful English spans are identified when pronunciation or accessibility depends on it.
- The tested set contains real Simplified Chinese, Chinese-English mixed strings, punctuation, numbers, dates, time zones, currency, units, links, bold text, long names, errors, and user-generated content.
- Type roles use discrete tokens for family, size, weight, line height, and semantic text color. Letter spacing is `0`; hero scale does not leak into tools, dialogs, cards, or dashboards.
- Page shell, workspace, panel, table/list, form, overlay, chart/state, editorial and marketing contexts use typography appropriate to their available space, reading mode, density and consequence; context aliases are repeated roles, not one-off patches.
- Labels and controls survive bilingual expansion, wrapping, 200% zoom, 320 CSS-pixel reflow, and user text-spacing overrides without clipping, overlap, lost content, or obscured actions.
- Chinese IME composition is not submitted, searched, validated, or intercepted before composition ends. Mobile text inputs use the correct keyboard and do not force destructive reformatting.
- Locale-sensitive dates, times, currency, decimals, units, names, addresses, sorting, and search behavior are formatted as data, not assembled from translated string fragments.

## Content And Truth

- One stable term names each object across navigation, headings, controls, help, errors, and both languages. Translation preserves the task and consequence instead of mirroring words mechanically.
- Primary and destructive actions use specific verbs and name the affected object or outcome; confirmation copy and button labels agree.
- Errors state what happened and the next recovery action without blame. Loading and progress are honest; empty states explain the state and offer a useful next action.
- Permission, privacy, financial, health, legal, and irreversible flows explain purpose, scope, consequence, and alternatives at the decision point. Unverified legal/compliance wording is escalated rather than invented.
- Marketing claims, customer marks, metrics, reviews, awards, screenshots, urgency, and demo data are sourced or clearly identified. No placeholder proof is presented as real.

## Logo, Imagery, And Icons

- An existing brand uses the approved asset and correct light/dark/monochrome variant. It is not redrawn, recolored, distorted, or replaced by a text glyph.
- A new identity exists only when identity work was completed through the internal brand branch and approved for product use. Emoji, Lucide, Unicode glyphs, stock pictograms, and generic app icons never substitute for a logo.
- Required logo variants pass clear-space, alignment, contrast, transparent-background, and 16/24/48px reproduction checks. Linked logos have an accessible brand/home label.
- Product imagery shows the real object, interface, state, place, or person when users need proof. Cropping, aspect ratio, resolution, rights/provenance, alt text, loading, and missing-asset fallbacks are verified.
- Interface icons come from one coherent system, map to recognizable actions or objects, and have accessible names/tooltips where needed. They remain visually and semantically separate from brand identity.

## Data Visualization

- Every chart exposes its question, title, measure, unit, timeframe, comparison baseline, and uncertainty or caveat when relevant.
- Labels, values, legends, hover/focus details, and an accessible table or text summary make the result understandable without color alone or pointer hover.
- Semantic colors retain meaning across charts and UI; color-blind-safe shape, pattern, position, or direct labels carry distinctions.
- Loading, partial, stale, no-data, filtered-empty, and error states are distinguishable. Axes, truncation, aggregation, and scale choices do not misrepresent the data.

## Font And Asset Performance

- Font licenses permit the chosen delivery. Only used scripts, families, and weights ship; subsetting retains all required and user-generated glyphs.
- Critical fonts use an intentional WOFF2, preload, caching, and `font-display` strategy. Slow, blocked, and offline delivery remains readable.
- Fallback metrics, image dimensions, and reserved media space prevent avoidable layout shift. Check FCP/LCP/CLS where the surface is performance-sensitive.
- Missing glyphs, synthesized bold/italic, late font swaps, broken images, and high-density displays are visibly tested rather than assumed.

## Visual System

Compare the implementation with the selected reference's Do/Don't and the route decision:

- color roles and primary CTA usage are intentional;
- type roles, line length, letter spacing at `0`, and hierarchy are coherent;
- spacing and radius are token-driven, not one-off guesses;
- cards, borders, and shadows follow the selected density and edge language;
- images reveal the actual object/product/state when inspection matters;
- motion explains state changes and is not constant decoration;
- palette is not a generic purple gradient or another one-note hue family;
- assets are crisp, present, and relevant.

## Memory And Handoff

After screenshots pass, record reusable component rules and any new Do/Don't guidance in the project's DESIGN.md. Report the chosen route, source URLs, files changed, viewports/states tested, and unresolved assumptions. If a source was blocked or dynamic content was incomplete, state that instead of pretending the reference was fully verified.

## Stop Conditions

Stop and ask one focused question, or report a limitation, when the product mode is unclear, sources disagree on a high-risk behavior, dynamic content cannot be verified, or the only available support is an aesthetic example. Do not keep collecting cases after the route and review risks are covered.
