# Brand And Graphic Review Scorecard

Use this only when the user explicitly asks for a review, audit, score, acceptance decision, or version comparison. During creation, use the criteria to guide revisions without automatically emitting a score. The release gates in [quality-gates.md](quality-gates.md) always apply.

## Review Contract

1. Define the communication objective, audience, context, channels, system depth, required deliverables, and evidence available.
2. Run the hard gates before scoring. Any failure makes the verdict `NOT PASS`; a high total cannot compensate.
3. Review meaning before styling, the system before isolated artifacts, and real applications before mockup polish.
4. Convert each material deduction into a production-aware change and a retest.
5. Fix P0 release blockers first, then systemic P1 causes, local P1 defects, and P2 refinement.

## Rating And Calculation

Rate each included dimension from 0 to 5:

| Rating | Meaning |
| ---: | --- |
| 0 | Required capability is missing or unusable. |
| 1 | Severe defects contradict the brief, prevent recognition/comprehension, or make delivery unusable. |
| 2 | Major strategic, visual, system, or production gaps remain. |
| 3 | Qualified: the work communicates and applicable baselines pass, with limited system depth or refinement. |
| 4 | Excellent: coherent, distinctive, evidence-backed, and verified in representative plus difficult applications. |
| 5 | Mature: strategically accurate, restrained, ownable, repeatable, and production-proven with no unresolved P0/P1 defect. |

For each included dimension:

`dimension points = rating / 5 * weight`

With a legitimate `N/A`:

`raw score = sum(dimension points) / sum(included weights) * 100`

- `N/A` means the deliverable does not own the decision. Missing required work scores `0`.
- When an artifact uses an existing approved identity without altering it, Logo quality may be `N/A`; logo selection, placement, clear space, color variant, rights, and consistency remain reviewable and can still fail a gate.
- A static mockup cannot receive a 4 or 5 for extension, governance, production, or real-channel performance that was not tested.
- Ratings 4 and 5 require observable evidence and a representative edge case.
- If any hard gate fails, retain the raw score for diagnosis but cap the effective score at `59`.

Interpret the effective score:

| Score | Interpretation |
| ---: | --- |
| 90-100 | Mature and suitable as a benchmark. |
| 80-89 | Excellent; only small corrections remain. |
| 70-79 | Usable, but the system needs strengthening. |
| 60-69 | Significant problems; restructure and retest. |
| Below 60 | The direction or foundation is wrong. |

Default release acceptance requires all hard gates to pass and an effective score of at least 70. Use 80 as the default quality target for high-quality, premium, launch-ready, or portfolio-grade work; a user-specified threshold overrides score targets but never a hard gate.

## Weighted Dimensions

| Dimension | Weight | Evidence and scoring focus |
| --- | ---: | --- |
| Positioning accuracy | 20 | Trace the work to the audience, category, price/value position, proposition, desired response, brand behavior, and available proof. Stakeholder taste alone is not evidence. |
| Distinctiveness and differentiation | 15 | Compare category conventions and relevant competitors; inspect silhouette, composition, type/color behavior, graphic devices, naming context, and whether recognition survives without relying only on the name. |
| Logo quality | 20 | Inspect concept fit, vector construction, proportion, optical weight, balance, contour, negative space, lettering/mark relationship, variants, clear space, monochrome, backgrounds, and small-size behavior. |
| Typography and color | 15 | Inspect role and tone, CJK/Latin coverage, licensing, hierarchy, measure, optical spacing, brand/neutral/semantic roles, contrast, grayscale, substrate/gamut, and reproduction equivalents. |
| Graphic and imagery language | 10 | Inspect whether photography, illustration, pattern, icon/pictogram, data graphic, composition, crop, texture, and optional motion share a purposeful family grammar and valid rights. |
| Extension capability | 10 | Verify the system on at least one representative application and one difficult edge case across the actual channel, content, size, crop, language, substrate, or production constraint. |
| Consistency | 5 | Inspect whether repeated rules, templates, variants, assets, and exceptions still feel like one brand without forcing identical treatment everywhere. |
| Originality and compliance | 5 | Inspect similarity risk, font/media/asset licenses, claims, customer marks, privacy, cultural meaning, mandatory content, platform/vendor rules, and approval ownership. Do not claim legal clearance. |

Use [visual-foundations.md](visual-foundations.md), [brand-system.md](brand-system.md), [graphic-production.md](graphic-production.md), and [quality-gates.md](quality-gates.md) for medium-specific evidence. Do not deduct mechanically because a system differs from a familiar style or generic preset.

## Always-On Hard Gates

Any applicable failure below produces `NOT PASS`:

- The intended audience cannot identify the core message, offer, identity, or required response in the real viewing context.
- Overlap, clipping, unsafe crop, illegible reproduction, or production geometry hides critical content or makes a required deliverable unusable.
- Text, essential graphics, controls, or wayfinding fail applicable contrast and legibility requirements.
- An interactive brand application lacks visible keyboard focus or has required touch targets below the applicable minimum.
- An interactive or variable application lacks an applicable loading, empty, success, error, or recovery state.
- A payment, permission, deletion, submission, safety, legal, or other high-risk action fails to state the object and consequence.
- A logo is stretched, recolored, shadowed, recomposed, or otherwise misused, or a required font, image, mark, template, or other asset has unknown rights.
- Data, customer logos, endorsements, metrics, reviews, certifications, sustainability statements, product claims, or documentary imagery are false, placeholder, or unsupported.

Mark a gate `N/A` only with a reason. Physical and static artifacts do not need interaction states, but they still must pass truth, rights, legibility, brand-use, and production gates.

## Logo And Identity Starting Tests

These are starting tests, not a universal construction recipe:

- Verify standard, monochrome, reversed, and light/dark-background versions required by the touchpoints.
- Define clear space from a repeatable structural unit `x`, then test actual lockups and nearby content.
- Inspect `16 / 24 / 48px` where small digital reproduction is relevant; prioritize contour and negative space over internal detail.
- Test wordmark and mark separately, then verify the combined lockup's optical balance, alignment, and responsive behavior.
- Do not stretch, casually recolor, add shadows/effects, alter proportions, or substitute emoji, Lucide, Unicode, stock pictograms, or generic interface icons.
- Test black first, poor reproduction, blur/silhouette, required substrates/backgrounds, competitor context, and the largest/smallest real applications.
- Preserve editable vector masters, approved exports, version/owner information, and usage/misuse rules.

Typography, color, grid, spacing, imagery, icon/pictogram, production, bilingual, and print parameters must come from the selected route and final medium. Current vendor/platform specifications override remembered defaults.

## Required Evidence

Record the smallest evidence set that can support the verdict:

- approved brief/version, audience, category, message hierarchy, channels, system depth, owners, and success criteria;
- asset inventory, source, rights/license, edit status, claims/proof, and approval status;
- category/competitor comparison sufficient to assess differentiation and similarity risk;
- primary marks, lockups, black/monochrome/reversed/background variants, clear-space and size tests when identity is in scope;
- representative application plus a difficult edge case using real content, language, crop, size, material, or production constraints;
- final-channel proof: actual size/distance/platform chrome, print proof/preflight, dieline, template edit, or equivalent as applicable;
- explicit limitations for evidence that was not available or a test that was not run.

A polished mockup proves context only. It does not prove strategy, originality, asset rights, editable masters, production readiness, or cross-channel extension.

## Finding And Revision Format

- `P0`: hard-gate failure or release blocker.
- `P1`: major positioning, recognition, hierarchy, system, accessibility, or production defect.
- `P2`: refinement that does not block communication or delivery.

Write each finding as:

`Observed problem -> impact -> violated standard/evidence -> modification -> retest`

Prefer a strategic criterion, master asset, token, template, or family-grammar correction that resolves multiple symptoms. Do not say only that a design feels cheap, generic, or not premium.

## Output Template

1. **Verdict:** `PASS` or `NOT PASS`; scope; evidence limitations; raw score; effective score; target.
2. **Hard gates:** pass/fail/N/A, evidence, and owner for each applicable gate.
3. **Dimensions:** rating, weighted points, evidence, and the highest-impact change.
4. **Findings:** P0/P1/P2 in the required problem-to-retest format.
5. **Revision order:** minimal sequence from strategic/system cause to local outputs.
6. **Retest matrix:** changed rule/asset, affected applications, expected result, actual result, and regression check.

## Comparison And Stopping Rules

- Compare versions with the same brief, scope, weights, target, applications, and evidence conditions. Report dimension deltas and regressions, not only the total.
- A version that introduces a hard-gate failure loses acceptance regardless of gains elsewhere.
- Keep UI and brand scores separate. For mixed identity/product work, score the identity and representative brand applications first; after approval, run the parent skill's product scorecard on the implementation.
- Continue while a P0 remains, the threshold is unmet, required production evidence is missing, or a changed master rule has not been regression-tested.
- Stop when every gate passes, the target is met, no P0 remains, and every P1 is resolved or explicitly accepted by the decision owner with the consequence recorded. Premium work cannot retain an open P1.
- Once acceptance passes and only unsupported P2 preference remains, stop polishing and report it as optional.
