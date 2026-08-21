# Capability Router

This is the synthesis layer for the installed design capabilities. It prevents `ui-ux-pro-max`, `awesome-design`, local `DESIGN.md` references, article sources, and icon rules from competing or being loaded all at once.

## The Stack

Apply the layers in this order:

1. **Product UX (`ui-ux-pro-max`)**: user, job, north-star action, information architecture, states, device, accessibility, and browser verification.
2. **Mode (`routing-matrix.md`)**: operational SaaS, devtool, editorial, brand, commerce, touch-first, creative, or data-heavy behavior model.
3. **Evidence (`research-catalog.md`)**: when a case or external rule is needed, select it by question and evidence level; do not let a visual gallery decide UX behavior.
4. **Art direction (`awesome-design`)**: choose one product-appropriate visual lineage and, only when useful, one counterweight.
5. **Design context (`DESIGN.md`)**: turn the selected lineage or source into tokens, rationale, component rules, and Do/Don't constraints in the project's theme layer.
6. **Icon system (Lucide or existing library)**: make controls recognizable, consistent, labeled, and keyboard/touch accessible.
7. **QA (`quality-gates.md`)**: verify the interaction and visual contract in real viewports and states.

Never start at layer 3 because a brand looks attractive. The product and its user behavior decide which visual direction is admissible.

## Source Priority And Conflict Rules

When sources disagree, use this priority order:

1. Explicit user brand, accessibility, content, or platform constraint.
2. Existing project `DESIGN.md`, theme, component library, and established user workflow.
3. Domain ergonomics and the selected product mode.
4. `awesome-design` lineage recommendation and local `awesome-design-md` reference.
5. A Refero case, `designmd.supply`, `DesignMD.me`, or another live source.
6. Generic visual trends or the agent's defaults.

The source with lower priority may supply a useful rule but cannot override a higher-priority constraint. Record the tradeoff instead of silently mixing incompatible systems.

## Dispatch Table

| User signal / task shape | Primary capability | Read or fetch | Output constraint |
| --- | --- | --- | --- |
| "Make it feel premium", weak aesthetic brief, direction unknown | `awesome-design` + article synthesis | `routing-matrix.md`, then `case-index.md` or Refero search | Choose one lineage; translate its decisions; no brand skin |
| Explicit Apple/Stripe/Linear/Figma/Airbnb/etc. request | `awesome-design` lineage | Installed `awesome-design-md/design-md/<brand>/README.md`; fetch its external link only if current detail is necessary | Local project rules and product ergonomics beat resemblance |
| Existing product needs a stable visual system | `DESIGN.md` workflow | Read project `DESIGN.md`; use local brand reference or `designmd.supply`/`DesignMD.me` only to fill gaps | Connect tokens to the theme; retain rationale and Do/Don't |
| Known competitor or URL needs reverse-engineering | Article source workflow | `designmd.supply` for rich breakdown; `DesignMD.me` for fast extraction | Compare CTA, type, cards, forms, palette, and density; state what is rejected |
| Prompt-to-page concept or landing-page exploration | `awesome-design` + Neuform | `source-catalog.md`, then Neuform if reachable | Treat output as a concept direction; do not let it replace an existing product system |
| Everyday page sampling | design-md-chrome concept | Use the current page or its generated DESIGN.md/SKILL.md | Sample only the needed rules; write back validated rules |
| User asks for a dense productivity/devtool interface | `ui-ux-pro-max` + Linear/Raycast/Superhuman lineage | `routing-matrix.md`, then relevant local reference or case | Prioritize shortcuts, focus, stable panes, scan density, and recovery over decoration |
| Creative editor/canvas/collaboration | `ui-ux-pro-max` + Figma/Miro/Framer/Webflow lineage | `routing-matrix.md`, then relevant local reference | Prioritize direct manipulation, tool grammar, selection, undo, and empty states |
| Children, learning, game, or family product | `ui-ux-pro-max` plus the installed child-design skill when explicitly relevant | Use the child-design skill's rules; use `awesome-design` only for a restrained visual counterweight | Safety, comprehension, touch, reward loops, and parent/child boundaries outrank brand mood |
| Any toolbar, navigation, table action, or icon-only control | Lucide/existing icon library | Inspect `package.json`, lockfile, and current imports first | Reuse existing library; use semantic icons, visible labels/tooltips, focus states, and 44px touch targets |
| Interaction audit, flow redesign, or state review | Page Flows/Mobbin + NN/g/Vercel; Baymard for commerce | `research-catalog.md`, then only the relevant source pages | Separate observed sequence from inferred quality; review recovery, keyboard, touch, responsive, and accessibility |
| Design-system governance or component drift | Component Gallery + GOV.UK/Figma Pattern Library | `research-catalog.md`, then the relevant component/system docs | Audit naming, variants, states, rationale, design-code mapping, and accessibility impact; tokens alone are insufficient |
| Persuasion, onboarding, or retention hypothesis | Growth.Design + NN/g ethics guidance | `research-catalog.md`, then relevant case and ethics article | Preserve user benefit, informed choice, privacy, and reversibility; never equate conversion with good UX |

## `awesome-design` Integration

Use its product-surface mappings as a starting hypothesis, not a preset:

- Premium consumer: Apple/Airbnb/Spotify for clarity, warmth, and simple onboarding.
- SaaS landing/pricing: Stripe/Linear/Vercel/Resend for trust, conversion, and information hierarchy.
- Productivity: Linear/Raycast/Superhuman/Notion for density and fast scanning.
- Creation tools: Figma/Miro/Framer/Webflow for canvases, toolbars, and collaboration.
- Developer platform: Vercel/Sentry/PostHog/Supabase/MongoDB for technical credibility.
- Enterprise/data: IBM/ClickHouse/Salesforce/Airtable for governance, tables, and reports.
- Consumer discovery: Pinterest/Airbnb/Spotify for browsing, collections, and emotional reward.
- High-performance/launch: Tesla/BMW/Ferrari/SpaceX/NVIDIA sparingly for momentum and cinematic reveals.

Pair only when the pairing resolves a real tension, such as Apple + Stripe for premium subscription purchase or Linear + Figma for a dense professional editor. A pairing is not permission to use both palettes, type systems, or component languages wholesale.

Translate a reference into native decisions:

- Typography: role and rhythm, not an unlicensed exact font.
- Color: palette behavior and semantic roles, not trademark color copying.
- Layout: information hierarchy and density, not exact composition.
- Motion: timing and feedback purpose, not branded animation assets.
- Components: affordances adapted to the current workflow.

## Local `awesome-design-md` Integration

The local library is a source directory, not a command to copy files every time:

`awesome-design-md/design-md/<brand>/README.md` under the installed skill root

Read the relevant README only after the mode and lineage are selected. These READMEs may point to external `getdesign.md` pages; browse those pages only when the local summary is insufficient and the current task justifies the lookup. Do not copy a local `DESIGN.md` into the project unless the user asks for that artifact or the implementation needs a project-local source of truth. When copied, adapt it and add product-specific rationale rather than preserving brand language blindly.

## DESIGN.md Synthesis Contract

The selected source must become a small, project-specific contract:

1. Five visual invariants: palette roles, type hierarchy, spacing rhythm, edge/elevation language, and image/motion role.
2. Component rules for only the modules in scope, including dimensions and important states.
3. Five interaction invariants: primary path, navigation/focus, input model, feedback, and recovery.
4. A short list of forbidden patterns and why they are forbidden.
5. Theme-layer tokens and a screenshot-based acceptance checklist.

Do not copy an entire 60+ brand library or a full external case into the prompt. Read the relevant source, extract the needed rules, and leave the source URL/path in the project context.

## Lucide And Icon Dispatch

There is no separate installed Lucide skill in the current machine inventory. Treat Lucide as an implementation convention:

1. Inspect the project dependency and imports. Prefer `lucide-react`, `lucide-vue`, or the active Lucide package when present.
2. If another icon system is already established, use it consistently rather than introducing a second library.
3. If no icon library exists, use the framework's existing icon primitives or text labels. Add a new dependency only when it is a normal, authorized implementation choice, not merely to decorate a mockup.
4. Choose icons by semantic action (`Search`, `Settings`, `Download`, `ChevronRight`, `Undo2`, etc.), not by visual similarity alone. Do not hand-draw SVGs when a familiar library icon exists.
5. Use icon-only buttons only for familiar tools or when space requires them; provide `aria-label`, tooltip, visible focus, disabled/loading states, and a stable 44px hit area on touch devices.
6. Do not put text inside a rounded rectangle when a familiar symbol communicates the action more directly; retain text for ambiguous, high-consequence, or user-facing commands.
7. Never use color alone to communicate icon state. Pair color with shape, label, position, or status text.

## Stop Conditions

Stop and state the uncertainty when:

- the user asks for a brand but the product mode conflicts with that brand's ergonomics;
- two lineages imply incompatible typography, density, or interaction grammar;
- a local or external source is blocked or dynamic content is incomplete;
- the icon dependency is unknown and adding one would materially change project scope.
- an E0/E1 gallery example is being used to justify a high-consequence interaction without a documented rule, research, or test.

Resolve by asking one focused question only when the uncertainty changes the product direction. Otherwise choose the smallest defensible route and document the assumption.
