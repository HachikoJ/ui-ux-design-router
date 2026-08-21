---
name: ui-ux-design-router
description: "Single default orchestration skill for product UI/UX plus brand and graphic design. Route web, mobile, SaaS, dashboards, creative tools, logos, identity systems, campaigns, posters, editorial, packaging, signage, templates, and mixed brand-product work to the smallest relevant internal branch; coordinate evidence, bilingual content, visual systems, interaction, production, and QA without stacking random styles."
metadata:
  short-description: "Route complete product, brand, and graphic design"
---

# UI/UX Design Router

Use this as the single public entry for design work. It first decides whether the deliverable is an interactive product, a brand/graphic communication system, or a mixed assignment. It then loads only the applicable internal branch and turns the decision into executable context. It is not a gallery, a brand-cloning tool, or a reason to add every design layer.

## Read Only What Applies

- Always read [routing-matrix.md](references/routing-matrix.md) first to choose the product, brand/graphic, or mixed branch.
- For an interactive product branch, read [visual-foundations.md](references/visual-foundations.md) for substantial visual design or an audit involving hierarchy, grid, spacing, containers, component choice, color, icons, or geometry.
- For a brand/graphic branch, read [brand/routing-matrix.md](references/brand/routing-matrix.md) and [brand/visual-foundations.md](references/brand/visual-foundations.md). Read [brand/brand-system.md](references/brand/brand-system.md) for strategy, naming, identity, logos, architecture, voice, or governance; read [brand/graphic-production.md](references/brand/graphic-production.md) for campaigns, posters, social, editorial, reports, packaging, signage, templates, data graphics, print, or export.
- Read [capability-router.md](references/capability-router.md) when the task asks for premium taste, a brand lineage, DESIGN.md, icons, a major visual redesign, or mixed product/identity coordination.
- Read [article-synthesis.md](references/article-synthesis.md) when a visual reference, DESIGN.md workflow, or tool choice is relevant.
- Read [case-index.md](references/case-index.md) when the task needs one of the article's 50 concrete style cases.
- Read [quality-gates.md](references/quality-gates.md) before product implementation review or visual QA. Read [brand/quality-gates.md](references/brand/quality-gates.md) before presenting or delivering brand/graphic work.
- Read [review-scorecard.md](references/review-scorecard.md) for explicit product review/scoring and [brand/review-scorecard.md](references/brand/review-scorecard.md) for explicit brand/graphic review/scoring. During ordinary creation, apply the relevant gates without automatically outputting a numeric score.
- Read [source-catalog.md](references/source-catalog.md) only when a live reference must be inspected or a fresh DESIGN.md must be extracted.
- Read [research-catalog.md](references/research-catalog.md) when selecting an external product case, pattern library, design system, benchmark, or review source. Read [brand/research-sources.md](references/brand/research-sources.md) only when a brand branch needs a current specification, legal/production rule, external case, or unfamiliar-domain evidence.
- Read [typography-content-brand.md](references/typography-content-brand.md) for Chinese/bilingual products, substantial typography or copy decisions, marketing, editorial, data-heavy work, or any product task involving a brand name, approved logo, or provisional identity asset.

Do not load every reference by default. The point of the skill is selective routing.

## Operating Contract

For a substantial design task, return one short route decision before implementation:

1. Deliverable, audience/user, context, core job or message, desired response, language, device/channel, lifespan, and content/density needs.
2. One primary branch: `product`, `brand/graphic`, or `mixed`; then one product mode or brand project mode/system depth, with a brief reason.
3. One primary visual lineage and, only when it resolves a named tension, one supporting lineage. Evidence sources are not extra styles: each must answer a specific design or validation question. Explain what each lineage contributes and what must not be copied.
4. Visual-system contract: hierarchy, grid, spacing, surface/container or canvas/module map, palette roles, type, icon/pictogram grammar, imagery, geometry, and depth/material model.
5. Typography/content/brand contract: locale, type roles by surface, density and content pressure, text colors, voice, terminology, and logo/asset source.
6. Execution contract: for products, primary path, navigation, input, feedback, recovery, keyboard/touch and responsive changes; for brand/graphic work, deliverables, variants/crops, editability, rights, output specs, proof and production checks.
7. Five non-negotiable visual/system principles and five branch-specific interaction or production principles.
8. Validation plan, stopping condition, and an applicable/not-applicable capability map. Product work covers structure, containers, controls, type/content, color, assets/data, interaction, responsive/accessibility and performance. Brand work covers brief/message, composition/modules, type/voice, color, identity/assets, channels, rights, production, templates/governance and validation.

If the user did not provide enough information to choose between materially different routes, ask one focused question. Otherwise make the smallest reasonable assumption and state it.

## Branch Before Style

1. **Product:** the primary deliverable is an interactive interface or workflow. Use the product modes, product foundations, typography/content rules, interaction loop, browser QA, and product gates in this skill.
2. **Brand/graphic:** the primary deliverable communicates or identifies through a logo, identity system, campaign, poster, editorial/report, packaging, signage, template, or production file. Use the internal `references/brand/` branch; do not force UI component logic onto a static or physical medium.
3. **Mixed:** both identity/communication and product behavior materially change. Define and validate the brand strategy, identity and representative application first; then translate approved roles/assets into product tokens and interaction rules. Keep brand and product acceptance separate.

Choose the smallest branch and system depth that own the requested decisions. A poster does not justify a rebrand; an identity is not complete with a logo alone; a product redesign does not automatically authorize a new identity.

## Product Route Before Style

1. Inspect the existing codebase, product conventions, and any `DESIGN.md`, `AGENTS.md`, or theme files.
2. Extract the task brief. Separate facts, assumptions, constraints, and preferences. Treat adjectives such as "modern", "premium", or "minimal" as incomplete until translated into observable decisions.
3. Score candidate modes against the user's job, usage context, content density, device, brand constraints, and risk. Choose the highest-fit mode; when tied, choose the simpler direction that preserves the user's current habits.
4. Select a visual reference only after the mode is known. Use the integrated lineage map in the capability router first; consult an optional local `awesome-design`/brand `DESIGN.md`, a Refero case, or a live URL extraction only when it resolves a remaining question.
5. Keep the visual system coherent: one dominant lineage, at most one justified counterweight, and no unrelated trend pile-up. Add evidence sources only to answer named questions, never as extra visual languages.

## Research Before Absorption

When external examples are relevant, route by the question rather than by popularity:

1. Name the question: visual direction, flow sequence, component behavior, implementation detail, or domain benchmark.
2. Select the smallest admissible source from [research-catalog.md](references/research-catalog.md). Use a documented rule or research source for high-consequence interaction decisions; use galleries only for visual discovery.
3. Separate observed facts, interpretation, and assumptions. Write down what the source cannot prove.
4. Convert the finding into one native design rule, rejection, or testable hypothesis. Do not copy the source's skin.
5. Stop researching when the route has one supported primary direction, the relevant interaction or production risks are covered, and the next step is implementation or testing.

## Build Executable Context

When a reference is selected, turn it into a small project-specific design context before making the deliverable:

- Preview: judge hierarchy, canvas, image role, title scale, and page rhythm.
- Foundations: define content hierarchy, grid/keylines, spacing relations, surface/container boundaries, component intent, palette roles, icon grammar, dimensions, radius, border, and depth before isolated values.
- Tokens: capture only needed colors, typography, spacing, radius, elevation, motion, and breakpoints.
- Module rules: for products, define only the controls/containers used, state ownership, dimensions, pressure behavior and minimum variants; for brand work, define canvas/module contracts, replacement zones, crops, format variants and production constraints.
- Rationale: record why a rule exists, when it applies, and its forbidden misuse.
- Do/Don't: convert the source's constraints into an acceptance checklist.
- Typography/content/brand: define locale-aware families and role tokens, action/error language, terminology, and the approved or generated identity assets.

Integrate tokens/rules in the project's theme, templates, masters, or existing design system. Do not leave them as a prompt-only list. Keep the project `DESIGN.md` evolving: write back validated component or module rules after real-output review.

## Type, Words, And Identity Are Functional

- Default to `zh-CN` plus credible Chinese-English mixed text unless the product defines another locale. Select fonts by glyph coverage, role, density, platform, license, and delivery cost before mood.
- Use one primary type family and at most one expressive display family; monospace is a functional exception for code/data. Define discrete size, weight, line-height, and text-color tokens by role. Keep letter spacing at `0` and do not use negative tracking.
- Write UI copy in the user's language: stable nouns, specific verb-led actions, recoverable errors, honest loading, and explicit high-consequence outcomes. Do not add filler or invented proof.
- Reuse an approved logo when one exists. When a new identity is in scope, run the internal brand/graphic branch first, then apply its approved wordmark/mark and variants in the product. Never use emoji, Lucide, or a generic UI icon as a logo substitute.
- Route independent strategy, identity/logo, campaign, poster, editorial, packaging, signage, template, and print work to `references/brand/`. The product branch owns only the application and behavior of approved identity assets inside interfaces.
- Treat type rendering, localization, logo variants, imagery, and data labels as testable product states. Use [typography-content-brand.md](references/typography-content-brand.md) for dispatch and acceptance rules.

## Interaction First

Apply the product-first principles integrated from `ui-ux-pro-max` below; the external skill is not required at runtime:

- Put the real workspace or core action early; do not replace it with a brochure unless a landing page is the explicit product.
- Design default, hover, active, selected, disabled, loading, success, error, locked, empty, and recovery states for every major control.
- Preserve the user's familiar information architecture unless the task calls for a workflow change. Novelty must earn its cost.
- Give direct manipulation feedback within roughly 100ms, use purposeful motion, and provide undo/reset where a change can be destructive or hard to reproduce.
- Support keyboard/focus behavior on desktop and thumb-friendly touch behavior on small screens. Use at least 44px touch targets.
- Make density intentional. Operational products optimize scanning and comparison; editorial products optimize reading rhythm; creative products optimize direct manipulation without hiding status.
- For responsive work, change hierarchy and interaction model when needed, not just column count. Check 375, 768, 1024, and 1440px unless the product has a different target.
- For controls and tools, inspect the project's icon dependencies first. Use Lucide or the project's existing icon library when available; pair unfamiliar icon-only controls with an accessible label or tooltip and never use an icon as decoration when text or a familiar symbol is clearer.
- Keep brand marks and interface icons separate. A logo identifies the product; Lucide or another icon library communicates UI actions and objects.

For interaction review, inspect sequence and recovery rather than only the final screenshot. Check orientation and next-step clarity, direct feedback, loading/error timing, preserved input, safe back navigation, keyboard/focus, touch and gesture alternatives, responsive reachability, reduced motion, and ethical consent. Use [quality-gates.md](references/quality-gates.md) for the review record.

## Brand And Graphic Execution

- Establish audience, category, proposition, proof, desired response, existing equity, message hierarchy, channels, rights and production constraints before choosing style.
- Select one brand mode and the smallest system depth from [brand/routing-matrix.md](references/brand/routing-matrix.md). Develop genuinely different concept territories, then converge against meaning, distinction, legibility, adaptability, accessibility and production cost.
- Treat canvas/module grammar, medium-specific typography, color reproduction, logo construction, imagery/pictograms, replacement-content behavior and output proof as one system. Use only the layers required by real touchpoints.
- Reuse approved assets for existing organizations. A new production logo requires original inspected vector geometry, purposeful lettering, required variants, small-size/monochrome tests, provenance and rights review. Never claim legal clearance from a visual search.
- Validate at overview, actual-use and detail scales. A beautiful mockup cannot prove production readiness, channel adaptation, editable masters, licensing, print output or template resilience.

## Reference Retrieval Rules

Use [source-catalog.md](references/source-catalog.md) to select the smallest useful external lookup:

- Unknown direction or need real product taste: search Refero Styles by brand, mood, color, typography, or URL.
- Known website or competitor: use `designmd.supply` for a richer breakdown or `DesignMD.me` for a fast production-ready extraction.
- Prompt-to-production concept validation: use Neuform.
- Brand comparison: use getdesign.md.
- One-click sampling from the current page: use design-md-chrome.

When browsing a source, wait for dynamic content, inspect only the relevant style or component, and skip any login wall. If a source is blocked, rate-limited, or incomplete, do not invent its rules or randomly substitute a new aesthetic; use the next explicitly justified source or state the limitation.

## Implementation Loop

1. State the branch, mode/depth, route rationale, and five principles.
2. For products, sketch information architecture and the primary flow. For brand work, write message hierarchy, concept criteria, applications and deliverable matrix. For mixed work, finish the brand decision first.
3. Build the smallest coherent system and real deliverables: screens/components/states for products; identity/assets/modules/variants for brand work.
4. Verify products in a real browser at target widths and states. Verify brand work at overview, actual channel/size, detail, difficult crop/content, and applicable production output.
5. Run the branch-specific quality gates. Mixed work runs brand gates before product gates; fix blockers before polishing.
6. Report files/outputs, route, sources, tested states/viewports/channels, rights/production evidence, and remaining assumptions.

The completion bar is a usable, coherent result whose rules can be explained, repeated and validated in its real context, not an attractive screenshot or mockup alone.

## Review And Acceptance Dispatch

- Ordinary product work: choose the product route, build, run [quality-gates.md](references/quality-gates.md), fix blockers, and report evidence without a score.
- Ordinary brand/graphic work: choose the brand route, make the artifacts, run [brand/quality-gates.md](references/brand/quality-gates.md), fix blockers, and report evidence without a score.
- Explicit product review, audit, scoring, acceptance, or comparison: run hard gates first, then use [review-scorecard.md](references/review-scorecard.md) to score, prioritize changes, and retest.
- Explicit brand/graphic review, audit, scoring, acceptance, or comparison: run brand hard gates first, then use [brand/review-scorecard.md](references/brand/review-scorecard.md).
- Mixed identity and product work: approve and, when requested, score the identity first; then review the product separately with the approved assets. Never hide a weak brand or weak UX inside one blended score.
