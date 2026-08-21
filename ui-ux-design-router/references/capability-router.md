# Capability Router

This is the synthesis layer for the single installed design entry. It internalizes the decision rules learned from the former product UX and art-direction skills, and prevents the internal `brand/` branch, optional local reference libraries, article sources, and icon rules from competing or being loaded all at once.

## The Stack

Apply the layers in this order:

1. **Branch (`routing-matrix.md`)**: product, brand/graphic, or mixed ownership from the primary deliverable.
2. **Integrated product UX or internal brand system (`brand/`)**: user/job/interaction for products; audience/message/channel/production for brand and graphic work. The installed `ui-ux-pro-max` skill is an optional explicit reference, not a runtime dependency.
3. **Mode**: product behavior mode or brand project mode/system depth.
4. **Visual foundations**: product surfaces/components use `visual-foundations.md`; brand canvases/modules use `brand/visual-foundations.md`.
5. **Typography and content**: product language and asset application use `typography-content-brand.md`; brand typography, voice and identity use the applicable `brand/` references.
6. **Evidence**: select the smallest relevant product or brand research source; galleries do not prove behavior or production.
7. **Integrated art direction**: choose one appropriate lineage and, only when it resolves a named tension, one counterweight. An installed `awesome-design` skill or local brand library may add detail but is not required.
8. **Design context (`DESIGN.md`)**: turn the route into tokens/rules, rationale, states or production constraints, and Do/Don't guidance.
9. **Assets and icons**: interface libraries communicate actions; original/approved brand assets identify. Never cross those roles.
10. **QA**: product and brand gates remain separate and mixed work runs brand approval before product verification.

Never start with an attractive brand or gallery case. The deliverable, audience/user, language, task or message, channel/behavior and risk decide which visual direction is admissible.

## Source Priority And Conflict Rules

When sources disagree, use this priority order:

1. Explicit user brand, accessibility, content, or platform constraint.
2. Existing project `DESIGN.md`, theme, component library, and established user workflow.
3. Domain ergonomics and the selected product mode.
4. This router's integrated lineage recommendation, optionally deepened by a local `awesome-design-md` reference.
5. A Refero case, `designmd.supply`, `DesignMD.me`, or another live source.
6. Generic visual trends or the agent's defaults.

The source with lower priority may supply a useful rule but cannot override a higher-priority constraint. Record the tradeoff instead of silently mixing incompatible systems.

## Dispatch Table

| User signal / task shape | Primary capability | Read or fetch | Output constraint |
| --- | --- | --- | --- |
| "Make it feel premium", weak aesthetic brief, direction unknown | Integrated lineage map + article synthesis | `routing-matrix.md`, then the lineage map below; use `case-index.md` or Refero only if a concrete example is still needed | Choose one lineage; translate its decisions; no brand skin |
| Explicit Apple/Stripe/Linear/Figma/Airbnb/etc. request | Integrated lineage map | Use the mapping below; if the optional `awesome-design-md` library is installed, read only that brand's README, and fetch its external link only if current detail is necessary | Local project rules and product ergonomics beat resemblance |
| Existing product needs a stable visual system | `DESIGN.md` workflow | Read project `DESIGN.md`; use local brand reference or `designmd.supply`/`DesignMD.me` only to fill gaps | Connect tokens to the theme; retain rationale and Do/Don't |
| Known competitor or URL needs reverse-engineering | Article source workflow | `designmd.supply` for rich breakdown; `DesignMD.me` for fast extraction | Compare CTA, type, cards, forms, palette, and density; state what is rejected |
| Prompt-to-page concept or landing-page exploration | Integrated art direction + Neuform | `source-catalog.md`, then Neuform if reachable | Treat output as a concept direction; do not let it replace an existing product system |
| Everyday page sampling | design-md-chrome concept | Use the current page or its generated DESIGN.md/SKILL.md | Sample only the needed rules; write back validated rules |
| User asks for a dense productivity/devtool interface | Integrated product UX + Linear/Raycast/Superhuman lineage | `routing-matrix.md`, then a relevant local reference or case only if needed | Prioritize shortcuts, focus, stable panes, scan density, and recovery over decoration |
| Creative editor/canvas/collaboration | Integrated product UX + Figma/Miro/Framer/Webflow lineage | `routing-matrix.md`, then a relevant local reference only if needed | Prioritize direct manipulation, tool grammar, selection, undo, and empty states |
| Children, learning, game, or family product | Integrated product UX plus an installed child-design skill when explicitly relevant | Use the child-design skill's rules when available; use the lineage map only for a restrained visual counterweight | Safety, comprehension, touch, reward loops, and parent/child boundaries outrank brand mood |
| Visual hierarchy feels weak; layout, spacing, color, or component details are inconsistent | Digital visual-foundations router | `visual-foundations.md`; inspect actual content, tokens, theme, screenshots, and states | Define content order, keylines, spacing relations, palette roles, icon grammar, geometry and depth before polishing |
| New grid or spacing system | Digital visual-foundations router | Project layout/theme first, then `visual-foundations.md`; Carbon/Material only as models when evidence is needed | Choose grid from content and behavior; use a compact semantic scale; no arbitrary one-off gaps |
| New palette, dark/light mode, or color audit | Visual foundations plus typography/content router | `visual-foundations.md`, `typography-content-brand.md`, then WCAG or current platform guidance | Define semantic roles and non-color cues; test contrast, grayscale, imagery, states and supported themes |
| Custom UI icon set or missing domain symbol | Visual foundations plus existing icon library | `visual-foundations.md`; inspect current package/imports and actual rendered sizes | Define family grammar and optical tests; create custom icons only when the established family cannot express the concept |
| Component dimensions, radius, border, shadow, or elevation system | Visual foundations plus project design system | `visual-foundations.md`, existing tokens/components, then selected reference rationale | Derive parameters from density, input, hierarchy and depth; keep a small role-based scale |
| Simplified Chinese or Chinese-English product | Typography/content/brand router | `typography-content-brand.md`; inspect real strings, existing fonts, locale settings, and content model | Default to `zh-CN`; define CJK/Latin fallbacks, role tokens, mixed-text behavior, locale-formatted values, terminology, and font-loading checks |
| High-consequence, error, permission, financial, health, or legal wording | Content router plus documented UX guidance | `typography-content-brand.md`; use GOV.UK, Microsoft, WCAG, or domain-approved copy when the consequence warrants it | Name the action, object, consequence, and recovery; preserve user input; do not invent legal or compliance language |
| Existing logo used inside a product | Product brand asset router | Search approved project/brand assets first; read `typography-content-brand.md` for placement and variants | Use the correct official asset and accessible label; never redraw or replace it with an interface icon |
| Brand strategy, rebrand, new logo/identity, campaign, poster, editorial, packaging, signage, or print | Internal brand/graphic branch | `brand/routing-matrix.md`, `brand/visual-foundations.md`, then applicable brand/production rules and gates | Treat it as a communication/production project; do not reduce it to UI art direction |
| Mixed identity and product design | Internal brand branch, then product branch | Define strategy/identity first; then translate approved brand roles through product mode, foundations and interaction rules | Product ergonomics constrain brand expression; campaign layouts and print parameters do not become UI components |
| Chart, dashboard, or data visualization | Data-heavy mode plus typography/content/brand router | `routing-matrix.md`, `typography-content-brand.md`, then a documented accessibility or domain source when needed | Show title, unit, timeframe, baseline/uncertainty, labels, no-data/error states, and a non-color-only reading path |
| Any toolbar, navigation, table action, or icon-only control | Lucide/existing icon library | Inspect `package.json`, lockfile, and current imports first | Reuse existing library; use semantic icons, visible labels/tooltips, focus states, and 44px touch targets |
| Interaction audit, flow redesign, or state review | Page Flows/Mobbin + NN/g/Vercel; Baymard for commerce | `research-catalog.md`, then only the relevant source pages | Separate observed sequence from inferred quality; review recovery, keyboard, touch, responsive, and accessibility |
| Explicit UI/product review, audit, score, acceptance, or version comparison | This router's review scorecard | Run `quality-gates.md` hard gates first, then `review-scorecard.md`; fetch external evidence only for a disputed or unfamiliar rule | Keep raw/effective scores distinct, attach evidence to deductions, convert findings into modifications and retests |
| Explicit brand/graphic review, audit, score, acceptance, or comparison | Internal brand review branch | Run `brand/quality-gates.md`, then `brand/review-scorecard.md` | Score brand separately from product UX; real applications and production evidence constrain ratings |
| Mixed brand and product acceptance | Brand review first, then product review | Score identity/brand applications, approve assets, then score the product implementation | Never average the two scorecards into one number unless the user defines a weighting; a hard-gate failure in either remains visible |
| Design-system governance or component drift | Component Gallery + GOV.UK/Figma Pattern Library | `research-catalog.md`, then the relevant component/system docs | Audit naming, variants, states, rationale, design-code mapping, and accessibility impact; tokens alone are insufficient |
| Persuasion, onboarding, or retention hypothesis | Growth.Design + NN/g ethics guidance | `research-catalog.md`, then relevant case and ethics article | Preserve user benefit, informed choice, privacy, and reversibility; never equate conversion with good UX |

## Integrated Art-Direction Lineages

These product-surface mappings are retained locally from `awesome-design` as starting hypotheses, not presets:

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

## Optional Local `awesome-design-md` Integration

When installed, the local library is a source directory, not a command to copy files every time:

`awesome-design-md/design-md/<brand>/README.md` under the installed skill root

Read the relevant README only after the mode and lineage are selected. If the library is unavailable, continue with the integrated mappings above or one justified public source; do not fail or substitute a random style. These READMEs may point to external `getdesign.md` pages; browse those pages only when the local summary is insufficient and the current task justifies the lookup. Do not copy a local `DESIGN.md` into the project unless the user asks for that artifact or the implementation needs a project-local source of truth. When copied, adapt it and add product-specific rationale rather than preserving brand language blindly.

## DESIGN.md Synthesis Contract

The selected source must become a small, project-specific contract:

1. Five visual invariants: palette roles, type hierarchy, spacing rhythm, edge/elevation language, and image/motion role.
2. Component rules for only the modules in scope, including dimensions and important states.
3. Five interaction invariants: primary path, navigation/focus, input model, feedback, and recovery.
4. A short list of forbidden patterns and why they are forbidden.
5. Theme-layer tokens and a screenshot-based acceptance checklist.

Do not copy an entire 60+ brand library or a full external case into the prompt. Read the relevant source, extract the needed rules, and leave the source URL/path in the project context.

## Lucide And Icon Dispatch

There is no separate installed Lucide skill in the current machine inventory. Treat Lucide as an interface implementation convention, never an identity source:

1. Inspect the project dependency and imports. Prefer `lucide-react`, `lucide-vue`, or the active Lucide package when present.
2. If another icon system is already established, use it consistently rather than introducing a second library.
3. If no icon library exists, use the framework's existing icon primitives or text labels. Add a new dependency only when it is a normal, authorized implementation choice, not merely to decorate a mockup.
4. Choose icons by semantic action (`Search`, `Settings`, `Download`, `ChevronRight`, `Undo2`, etc.), not by visual similarity alone. Do not hand-draw SVGs when a familiar library icon exists.
5. Use icon-only buttons only for familiar tools or when space requires them; provide `aria-label`, tooltip, visible focus, disabled/loading states, and a stable 44px hit area on touch devices.
6. Do not put text inside a rounded rectangle when a familiar symbol communicates the action more directly; retain text for ambiguous, high-consequence, or user-facing commands.
7. Never use color alone to communicate icon state. Pair color with shape, label, position, or status text.

## Brand Identity Boundary

1. Search existing project assets, manifests, headers, and the official brand package before using identity assets. Preserve approved geometry, colors, clear space, and variants.
2. Route strategy, naming, identity creation, rebrands, logo systems, brand guidelines, campaigns, packaging, signage, and print production to the internal `brand/` branch.
3. For a product prototype without an approved identity, use a carefully typeset provisional wordmark and state its status. Do not invent a corporate mark for a real organization.
4. This router owns how an approved identity behaves in product navigation, loading, responsive headers, favicons/app shells, light/dark surfaces, accessibility and performance.
5. Do not add a symbol merely to fill space. Emoji, Lucide, Unicode glyphs, stock pictograms and UI icons remain forbidden as logo substitutes.

## Stop Conditions

Stop and state the uncertainty when:

- the user asks for a brand but the product mode conflicts with that brand's ergonomics;
- two lineages imply incompatible typography, density, or interaction grammar;
- a local or external source is blocked or dynamic content is incomplete;
- the icon dependency is unknown and adding one would materially change project scope.
- an E0/E1 gallery example is being used to justify a high-consequence interaction without a documented rule, research, or test.

Resolve by asking one focused question only when the uncertainty changes the product direction. Otherwise choose the smallest defensible route and document the assumption.
