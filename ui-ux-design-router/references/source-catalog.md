# Source Catalog And Retrieval

Use only the smallest source that resolves the current design question. These are the public sources referenced by the article; inspect them on demand rather than loading a full gallery into context.

For newly researched case libraries, design systems, benchmarks, and review sources, use [research-catalog.md](research-catalog.md). It records evidence levels, public-access limitations, what each source can and cannot prove, and which sources are visual discovery only.

## Optional Local Sources

- `awesome-design` workflow: when installed and the user explicitly invokes it or deeper art-direction detail is necessary, resolve its `SKILL.md` through the available-skills catalog.
- Premium lineage map: when installed, use `awesome-design/references/reference-map.md` under that skill's root; otherwise use the integrated mappings in `capability-router.md`.
- Local brand `DESIGN.md` references: when installed, use only `awesome-design-md/design-md/<brand>/README.md` for the selected lineage; otherwise use one justified public source or proceed from the router's local rules.
- Existing product-first UX workflow: its essential principles are integrated into this skill. Treat an installed `ui-ux-pro-max` as an optional explicit reference, not a dependency.
- Brand and graphic design: use the internal `brand/` references for strategy, identity creation, campaigns, editorial, packaging, signage, templates, and print production.

Read these local sources selectively through [capability-router.md](capability-router.md). Their absence must not block the route. Do not recursively load the entire brand library.

| Source | Use when | Extract |
| --- | --- | --- |
| https://styles.refero.design/ | Direction is unknown; need real product taste | Search by brand, mood, color, typography, or URL; then Preview, DESIGN.md, tokens, components, Do/Don't |
| https://www.designmd.supply/guides/stripe.com | A known site or competitor needs a rich breakdown | DESIGN.md, live screenshot, logo, palette, backdrop, components; compare CTA, type, forms, and cards |
| https://designmd.me/ | A fast runnable design context is enough | URL-derived tokens, typography, and component patterns |
| https://neuform.ai/ | Prompt-to-production landing-page concept work | Prompt-to-page behavior, remix/template workflow, reusable DESIGN.md |
| https://getdesign.md/ | Brand comparison or familiar industry references | Brand-specific rules and contrast between product categories |
| https://github.com/bergside/design-md-chrome | A page is already open and should be sampled | Extracted styles plus DESIGN.md/SKILL.md output behavior |
| https://github.com/google-labs-code/design.md | Need the portable format or CLI semantics | YAML/token and Markdown/rationale model, lint/diff/export concepts |
| https://designmd.ai/about | Need format portability context | How a markdown design system is used by coding agents |
| https://designmd.ai/cli | Need search/download/upload automation | CLI capabilities and JSON-oriented workflow |

## Browser Procedure

1. Open the chosen source with a real browser and wait for the page to finish dynamic loading. Re-snapshot after navigation or significant UI changes.
2. Skip login, account creation, paywalls, or permission prompts. Do not attempt to bypass them.
3. Inspect the specific style, case, or component needed. Capture the minimum useful rules: colors and roles, typography, spacing, radius, component states, image role, motion, and Do/Don't.
4. Separate observed facts from interpretation. A screenshot is evidence of appearance, not proof of an interaction rule.
5. If the page is blocked, rate-limited, or incomplete, stop using that source for the current decision. Use another source only when its role is explicitly justified by the routing matrix; never replace it with a random trend.
6. Link the source in the project's design context and record any limitations.
