# Source Catalog And Retrieval

Use only the smallest source that resolves the current design question. These are the public sources referenced by the article; inspect them on demand rather than loading a full gallery into context.

For newly researched case libraries, design systems, benchmarks, and review sources, use [research-catalog.md](research-catalog.md). It records evidence levels, public-access limitations, what each source can and cannot prove, and which sources are visual discovery only.

## Local Sources

- `awesome-design` workflow: `/Users/wilson/.codex/skills/awesome-design/SKILL.md`
- Premium lineage map: `/Users/wilson/.codex/skills/awesome-design/references/reference-map.md`
- Local brand `DESIGN.md` references: `/Users/wilson/.agents/skills/awesome-design-md/design-md/<brand>/README.md`
- Existing product-first UX workflow: `/Users/wilson/.codex/skills/ui-ux-pro-max/SKILL.md`

Read these local sources selectively through [capability-router.md](capability-router.md). Do not recursively load the entire brand library.

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
