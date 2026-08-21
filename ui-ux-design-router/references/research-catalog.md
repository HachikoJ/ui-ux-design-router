# Evidence-Based Design Research Catalog

This is a routing catalog, not a gallery. Use the smallest source that answers the current design question, record what was observed, and turn it into a decision that can be tested. A source may be useful for discovery without being evidence that a pattern is correct.

## Evidence Levels

| Level | Meaning | Safe use |
| --- | --- | --- |
| E0 | Aesthetic hint from a screenshot or award entry | Mood, composition, image or motion hypothesis only |
| E1 | One real production example | Generate a comparison question; never call it a best practice |
| E2 | Repeated examples in a searchable flow/component library | Compare alternatives and identify a candidate pattern |
| E3 | Documented design-system rule, usability guidance, or implementation guideline | Adopt as a default when the product context matches |
| E4 | User research, usability testing, or benchmark evidence | Use for high-consequence flow decisions; still validate in the target product |

For a high-consequence interaction (payment, deletion, permissions, privacy, irreversible edits), require E3 or E4 evidence or an explicit product test. Do not upgrade an E0/E1 visual impression into a rule.

## Source Roles And Boundaries

| Source | Best question | What it can show | What it cannot prove | Access / use |
| --- | --- | --- | --- | --- |
| [Mobbin](https://mobbin.com) | How do real mobile/web products organize screens and repeated patterns? | Production screenshots, searchable UI elements, products, tasks, and flows; public pages report 1,428 apps, 621,500+ screens, and 323,900 flows | That a popular or repeated pattern is usable for this product; detailed content may require an account | Public index is usable; skip login and paid walls. Use as E1/E2 case evidence |
| [Page Flows](https://pageflows.com) | What happens over time in onboarding, search, checkout, account, or upgrade? | Screen sequences, recordings, hotspots, flow categories, and interaction rhythm | Hidden business logic, accessibility quality, or causal effectiveness | Public index loads in a real browser; non-browser requests may receive 403. Skip login/gated detail. Prefer it when timing, feedback, or transitions matter |
| [The Component Gallery](https://component.gallery) | What is this control called and how do systems vary it? | Real-system component names, variants, code/Figma links, usage/accessibility metadata, and design-system comparisons | That a component is right without context; popularity is not research | Use for naming, boundaries, states, and comparison; follow linked system rationale |
| [GOV.UK Design System](https://design-system.service.gov.uk) | How should a service flow, form, error, panel, or navigation pattern be documented? | Components versus task patterns, examples, code, limitations, and accessibility guidance | That using the system automatically makes a service accessible | Strong E3 source for service/product flows; still perform research, development, and accessibility testing |
| [Figma Pattern Library case](https://www.figma.com/blog/figma-pattern-library) | How do design systems stay coherent across design and code? | Lessons on fragmentation, variables, component priority, accessibility impact, and design-code mapping | That token synchronization alone prevents drift | Use for governance, adoption, and system-drift review |
| [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) | What implementation details commonly break interaction quality? | Focus, keyboard, links/buttons, touch, loading, URL state, undo, motion, reduced motion, contrast, and content rules | Universal brand or product rules; the page labels Vercel-specific guidance | Strong E3 implementation checklist; separate generic rules from Vercel preferences |
| [NN/g pattern guidelines](https://www.nngroup.com/articles/design-pattern-guidelines) | Which interaction pattern should be reviewed and what failure modes are known? | Pattern-specific guidance for forms, wizards, dialogs, tooltips, icons, navigation, search, errors, privacy, and ethics | A substitute for observing target users or measuring the product | E3 review index; open only the relevant pattern article |
| [Baymard](https://baymard.com/learn/checkout-flow-ux-optimization) | Where do commerce product, cart, and checkout flows create friction? | Research-backed checkout/product-page guidance, benchmarks, form ergonomics, guest checkout, error recovery, and mobile details | General SaaS or consumer-app rules; premium guideline details may be gated | E4/E3 commerce source; use only for commerce routes and cite public limits |
| [Growth.Design](https://growth.design/case-studies) | What behavioral hypothesis might explain onboarding, purchase, or retention friction? | Annotated cases, cognitive-bias explanations, and ethical checkout/onboarding discussions | Causality, universal effectiveness, or permission to manipulate users | E1/E2 hypothesis source. Pair with user benefit, consent, and dark-pattern review |
| [Refero Styles](https://styles.refero.design) and local `awesome-design-md` | Which visual lineage and executable rules fit the product? | Visual references, DESIGN.md tokens, components, and Do/Don't material | Usability, accessibility, conversion, or permission to copy a brand | Visual/system context only. Select after product mode; one primary lineage plus at most one counterweight |
| [DesignMD.me](https://designmd.me), [designmd.supply](https://www.designmd.supply), [getdesign.md](https://getdesign.md) | How can a known site be decomposed into a project design context? | Token, typography, component, and comparative brand summaries | Freshness, rationale quality, or whether the source fits the target workflow | Use as extraction aids; verify against the live site and keep only needed rules |
| [Awwwards](https://www.awwwards.com/websites/interaction-design), [Godly](https://godly.design/websites), [SiteInspire](https://www.siteinspire.com/about), [Land-book](https://land-book.com) | What visual directions are worth exploring for a brand/marketing surface? | Curated visual composition, typography, image, and motion ideas | Product usability, task completion, accessibility, or interaction correctness | E0 only. Never use as the primary UX or review source |
| [Screenlane](https://screenlane.com), [Pttrns](http://pttrns.com) | What mobile patterns or screen variants are available for discovery? | Curated mobile screenshots and pattern groupings | Correctness, flow completeness, accessibility, or why a pattern works | E0/E1 secondary source; prefer Mobbin/Page Flows when available; skip account walls |

## Limited Or Excluded Candidates

- **UI Sources:** current search results resolve mainly to Page Flows and third-party directories; no stable, independently verifiable official corpus was needed after Page Flows covered the same question, so it is not added as a separate dependency.
- **Land-book:** public gallery is useful for landing-page discovery, but Save/Copy actions lead to login or Pro prompts. Keep it E0 and skip those actions.
- **Awwwards, Godly, SiteInspire:** useful curation and strong visual material, but their selection criteria do not establish task success, accessibility, or interaction quality. They remain explicitly E0.
- **Screenlane and Pttrns:** useful secondary mobile screenshot sources, but source access and context are less consistently verifiable than Mobbin/Page Flows. Do not use them when a higher-evidence source answers the same question.

## Source Dispatch

- **Visual direction unknown:** route the product mode first, then use Refero or a local brand reference. Use one primary lineage and translate it into tokens, component rules, and forbidden moves.
- **Interaction sequence, onboarding, checkout, search, upgrade, or account:** use Page Flows when timing or recovery matters; use Mobbin for comparative screen and task evidence; use NN/g or Baymard for documented review rules as appropriate.
- **Component naming, states, or design-system consistency:** use Component Gallery, then follow the relevant system's guidance. Use GOV.UK or Figma Pattern Library when governance, accessibility, or design-code drift is in scope.
- **Implementation-level review:** use Vercel guidelines for browser behavior and interaction details, but discard its brand-specific copy/visual preferences unless they fit the selected product route.
- **Behavioral persuasion or retention:** use Growth.Design only to form hypotheses. Check user benefit, informed choice, reversibility, privacy, and dark-pattern risk before adopting any tactic.
- **Commerce:** use Baymard first for checkout/product-page friction; use Page Flows or Mobbin for concrete comparison; do not generalize commerce findings to unrelated products.

## Extraction Record

For every external reference that changes a design decision, record this compact chain in the project context or review notes:

1. **Question:** the user/job or review question being answered.
2. **Source role and level:** why this source is admissible and its E0-E4 level.
3. **Observed fact:** what the page, flow, system, or research explicitly shows.
4. **Limit:** what is not observable (for example, causal effect, hidden logic, or accessibility).
5. **Native translation:** the project-specific rule, component/state, or rejection decision.
6. **Verification:** the screenshot, keyboard/touch check, usability test, metric, or acceptance criterion that can falsify it.

If a source is blocked, dynamic content is incomplete, or a login/paywall appears, skip it and record the limitation. Never fill missing evidence with an imagined rule.

## Anti-Pattern Firewall

- Do not call a gallery, award, or popular product a “best practice” without E3/E4 support or a target-user test.
- Do not infer interaction order, feedback, or accessibility from a static screenshot.
- Do not copy a brand's logo, exact layout, text, proprietary asset, token set, or signature motion.
- Do not mix multiple visual lineages because they were found in one search. One coherent direction is the default.
- Do not use a component library as a substitute for content hierarchy, states, keyboard behavior, touch behavior, or accessibility testing.
- Do not optimize persuasion, speed, or conversion at the expense of comprehension, consent, privacy, reversibility, or trust.
- Do not load a whole gallery into context. Search by product mode and the current question, inspect the minimum useful case, and stop when the question is answered.
