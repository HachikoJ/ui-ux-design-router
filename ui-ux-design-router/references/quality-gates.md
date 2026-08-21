# Quality Gates

Use this after implementation and again after any meaningful visual change. It combines the `ui-ux-pro-max` bar with the article's DESIGN.md feedback loop.

## Evidence And Decision Review

Before implementation, write a small evidence chain for each non-obvious design choice:

| Question | Source / level | Observed | Cannot infer | Native decision | How to falsify |
| --- | --- | --- | --- | --- | --- |
| What user problem is being solved? |  |  |  |  |  |

Reject the decision when the only support is an award, screenshot, trend, or “popular product”. Use [research-catalog.md](research-catalog.md) to choose a stronger source or mark the choice as a hypothesis to test. Keep visual review and interaction review as separate passes.

## Product And Flow

- The first screen exposes the actual product or core action unless a landing page is explicitly requested.
- The primary user path is completable with visible progress and success feedback.
- Navigation, density, and control placement match the chosen mode and the user's repeated habits.
- The primary action is visually obvious; secondary actions do not compete with it.
- No copy, component, or decoration was added only to make the page feel fuller.

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

## Visual System

Compare the implementation with the selected reference's Do/Don't and the route decision:

- color roles and primary CTA usage are intentional;
- type roles, line length, tracking, and hierarchy are coherent;
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
