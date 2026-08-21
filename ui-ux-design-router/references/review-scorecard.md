# UI Product Review Scorecard

Use this only when the user explicitly asks for a review, audit, score, acceptance decision, or version comparison. During implementation, use the same criteria to guide changes but do not emit a numeric score unless requested. The release gates in [quality-gates.md](quality-gates.md) always apply.

## Review Contract

1. Define the product surface, primary user, core task, target devices, required states, and evidence available.
2. Run the hard gates before scoring. A failed gate makes the verdict `NOT PASS`; a high weighted total cannot compensate.
3. Trace each rating to observable evidence. Separate what was inspected, tested, inferred, and not available.
4. Turn every material deduction into a change and a retest. Do not report vague taste judgments.
5. Fix in this order: P0 release blockers, systemic P1 causes, local P1 defects, then P2 refinement.
6. Retest the affected path and likely regressions. Recalculate only after new evidence exists.

## Rating And Calculation

Rate each included dimension from 0 to 5:

| Rating | Meaning |
| ---: | --- |
| 0 | Required capability is missing or unusable. |
| 1 | Severe defects repeatedly block the task or contradict the product goal. |
| 2 | Major gaps remain; behavior or visual logic is weak or inconsistent. |
| 3 | Qualified: the task works and applicable baselines pass, with limited refinement or coverage. |
| 4 | Excellent: coherent, evidence-backed, and verified with representative edge cases; only minor defects remain. |
| 5 | Mature: clear, restrained, distinctive, repeatable as a system, and verified in real use with no unresolved P0/P1 defect. |

For each included dimension:

`dimension points = rating / 5 * weight`

If `N/A` is legitimate, normalize the included weights:

`raw score = sum(dimension points) / sum(included weights) * 100`

- Use `N/A` only when the deliverable genuinely does not own that dimension. Missing required work scores `0`.
- Untested claims are not evidence. A static mockup cannot receive a 4 or 5 for interaction, responsive behavior, accessibility, feedback, or recovery that was not exercised.
- Ratings 4 and 5 require observable evidence plus representative edge-case validation.
- If any hard gate fails, retain the raw score for diagnosis but cap the effective score at `59`.

Interpret the effective score:

| Score | Interpretation |
| ---: | --- |
| 90-100 | Mature and suitable as a benchmark. |
| 80-89 | Excellent; only small corrections remain. |
| 70-79 | Usable, but the system needs strengthening. |
| 60-69 | Significant problems; restructure and retest. |
| Below 60 | The direction or foundation is wrong. |

Default release acceptance requires all hard gates to pass and an effective score of at least 70. Treat 80 as the default quality target for requests such as high-quality, premium, polished, or launch-ready; a user-specified threshold overrides these score targets but never overrides a hard gate.

## Weighted Dimensions

| Dimension | Weight | Evidence and scoring focus |
| --- | ---: | --- |
| Product goal and UX | 20 | The user knows where they are, what can be done, and what happens next. Exercise the core path, success, back/edit, undo or recovery, and high-consequence actions. A visually polished product with an incomplete core task cannot exceed 60 overall. |
| Information architecture and layout | 15 | Verify grouping, order, navigation, labels, alignment, density, keylines, and whether the layout matches repeated work, reading, exploration, or conversion. |
| Visual hierarchy and whitespace | 15 | Test first attention, primary/secondary action competition, contrast, grouping, rhythm, reading order, and whether whitespace communicates relationships rather than merely creating emptiness. |
| Typography | 10 | Inspect role tokens, CJK/Latin coverage, size, weight, line height, text color, measure, punctuation, numerals, fallbacks, font loading, and Chinese-English stress strings. |
| Color | 10 | Inspect brand, action, surface, border, text, focus, and semantic roles; contrast; grayscale and color-vision behavior; and non-color state cues. |
| Components and icons | 10 | Inspect dimensions, hit areas, geometry, radius, borders, depth, stable state sizing, icon family/meaning, labels/tooltips, and all applicable control states. |
| Content and feedback | 10 | Inspect terminology, action labels, loading/progress honesty, empty/success/error/recovery copy, preserved input, and truthful claims/data. |
| Responsive and accessibility | 10 | Exercise target viewports, keyboard, focus, touch, zoom/reflow, reduced motion, assistive semantics, long content, IME, and reachable dialogs/sticky controls. |

## Always-On Hard Gates

Any applicable failure below produces `NOT PASS`:

- The core task cannot be completed.
- Overlap, clipping, overflow, or layout behavior hides critical content or actions.
- Text contrast, control boundaries, or essential graphics fail the applicable contrast requirement.
- Keyboard focus is missing or a required touch target is undersized.
- A core flow lacks an applicable loading, empty, success, error, or recovery state.
- A destructive, payment, overwrite, permission, or other high-risk action does not identify the object and consequence.
- A logo is distorted or misused, or a required font, image, logo, icon, or other asset has unknown rights.
- Data, customer logos, endorsements, metrics, reviews, certifications, or claims are false, placeholder, or unsupported.

Mark a gate `N/A` only with a reason. For example, a static read-only page may have no async loading state, but it still must handle missing or empty content if that state can occur.

## Starting Verification Ranges

These are starting ranges to validate against the product mode, content, platform, and existing design system. They are not universal presets and do not earn points by themselves.

| Area | Starting range and checks |
| --- | --- |
| Grid and spacing | Start from a 4px unit and `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`; keep same-group gaps smaller than between-group gaps. Reference grids: 4 columns mobile, 8 tablet, 12 desktop. Reference page margins: `16-24px` mobile and `24-48px` desktop. Prefer one strongest primary action per page. |
| Typography | Page title `28-40px` desktop, `24-32px` mobile; section title `20-32px`; body `14-18px`, with Chinese long-form usually `16-18px`; controls `14-16px`; supporting text `12-14px`. Chinese long-form leading `1.6-1.8`, UI text `1.4-1.65`, and roughly 24-40 Chinese characters per line. Usually use no more than two families; reserve monospace for code, identifiers, and data; keep letter spacing at `0`. |
| Color | Normal text at least `4.5:1`; large text at least `3:1`; important graphics and control boundaries at least `3:1`. Use semantic variables and one main action accent. Pair state color with text, icon, shape, or position. |
| Components and icons | Touch hit area at least `44 x 44px`; common icon visuals `16 / 20 / 24px`; mobile input text at least `16px`. Keep radius and elevation to about 2-3 intentional levels; ordinary cards usually start around `4-8px` radius. Inspect default, hover, pressed, focus, disabled, loading, error, and selected states as applicable. |
| Motion | Direct feedback appears around `100ms`; microinteractions usually `100-200ms`; panel/page transitions usually `200-350ms`. Motion must explain state, space, or result and honor reduced motion. |
| Responsive stress | Unless the brief says otherwise, inspect `375 / 768 / 1024 / 1440px`, 200% text zoom, long names, bilingual content, empty data, errors, keyboard operation, and touch operation. |

Use [visual-foundations.md](visual-foundations.md), [typography-content-brand.md](typography-content-brand.md), and [quality-gates.md](quality-gates.md) for route-specific evaluation. When an existing project system intentionally differs from a starting range, judge the reason and outcome rather than deducting mechanically.

## Required Evidence

Record the smallest evidence set that can support the verdict:

- source/version, route, primary user, core path, devices and viewports in scope;
- screenshots or rendered states at representative and difficult sizes;
- interaction trace for start, progress, success, failure, recovery, and back/edit behavior as applicable;
- computed contrast or an equivalent reliable check for consequential pairs;
- keyboard/focus, touch, zoom/reflow, long-string, bilingual, missing-data, and error results;
- asset source and rights status for fonts, images, logos, icons, and claims;
- explicit limitations for anything not run or observable.

Do not infer production behavior from a hero screenshot. If the artifact is incomplete, score only what is present and call out the evidence ceiling.

## Finding And Revision Format

Assign severity by effect:

- `P0`: hard-gate failure or release blocker.
- `P1`: major task, hierarchy, comprehension, accessibility, or system defect.
- `P2`: refinement that does not block the core outcome.

Write every finding as:

`Observed problem -> impact -> violated standard/evidence -> modification -> retest`

Example: `Secondary body text measures 3.2:1 -> sustained reading is difficult -> normal text requires 4.5:1 -> replace the one-off color with text-secondary that passes on both surfaces -> recompute contrast and inspect disabled text separately.`

Prefer a token, hierarchy, component, or flow correction that resolves several symptoms. Do not say only that the work is not premium or lacks atmosphere.

## Output Template

1. **Verdict:** `PASS` or `NOT PASS`; scope; evidence limitations; raw score; effective score; target.
2. **Hard gates:** pass/fail/N/A, evidence, and owner for each applicable gate.
3. **Dimensions:** rating, weighted points, evidence, and the one change with the highest expected impact.
4. **Findings:** P0/P1/P2 in the required problem-to-retest format.
5. **Revision order:** the smallest sequence that removes blockers and systemic causes.
6. **Retest matrix:** changed area, affected path/viewports/states, expected result, actual result, and regression check.

## Comparison And Stopping Rules

- Compare versions with the same scope, weights, target, and evidence conditions. Report dimension deltas and regressions, not only the total.
- A version that introduces a hard-gate failure loses acceptance regardless of score gain elsewhere.
- Keep UI and brand scores separate in mixed work. Run [brand/review-scorecard.md](brand/review-scorecard.md) first when identity changes, then this scorecard on the product using the approved identity.
- Continue the fix/retest loop while a P0 remains, the required threshold is unmet, or a changed systemic rule has not been checked in representative regressions.
- Stop when all gates pass, the target score is met, no P0 remains, and every P1 is resolved or explicitly accepted by the decision owner with its consequence recorded. For a premium target, do not leave a P1 open.
- Once acceptance passes and only unsupported P2 taste preferences remain, stop polishing and report them as optional rather than generating more design.
