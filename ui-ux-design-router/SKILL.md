---
name: ui-ux-design-router
description: "Default orchestration layer for user-facing design work. Route web, mobile, SaaS, dashboard, devtool, content, commerce, and expressive interfaces to one evidence-backed visual direction, interaction strategy, and review plan; coordinate ui-ux-pro-max, awesome-design, awesome-design-md, Lucide, DESIGN.md, and browser QA instead of stacking random styles."
metadata:
  short-description: "Choose the right visual direction and UX method"
---

# UI/UX Design Router

Use this skill as the routing and synthesis layer on top of the existing `ui-ux-pro-max` product-first workflow. Its job is to make a defensible design choice for the actual product and user, then turn that choice into executable design context. It is not a gallery, a brand-cloning tool, or a reason to add more decoration.

## Read Only What Applies

- Always read [routing-matrix.md](references/routing-matrix.md) before choosing a direction.
- Always read [capability-router.md](references/capability-router.md) when the task asks for premium taste, a brand lineage, DESIGN.md, icons, or a major visual redesign.
- Read [article-synthesis.md](references/article-synthesis.md) when a visual reference, DESIGN.md workflow, or tool choice is relevant.
- Read [case-index.md](references/case-index.md) when the task needs one of the article's 50 concrete style cases.
- Read [quality-gates.md](references/quality-gates.md) before implementation review or visual QA.
- Read [source-catalog.md](references/source-catalog.md) only when a live reference must be inspected or a fresh DESIGN.md must be extracted.
- Read [research-catalog.md](references/research-catalog.md) when selecting an external case, pattern library, design system, benchmark, or review source. It defines evidence levels, source boundaries, and the anti-pattern firewall.

Do not load every reference by default. The point of the skill is selective routing.

## Operating Contract

For a substantial design task, return a short route decision before implementation:

1. Product, primary user, context, core job, north-star action, device priority, and content/density needs.
2. One primary design mode from the routing matrix, with a brief reason.
3. One primary visual reference and at most two supporting references. Explain what each contributes and what must not be copied.
4. Interaction contract: primary path, navigation model, input model, feedback timing, recovery, keyboard/focus, touch, and responsive changes.
5. Five non-negotiable visual principles and five non-negotiable interaction principles.
6. Validation plan and stopping condition.

If the user did not provide enough information to choose between materially different routes, ask one focused question. Otherwise make the smallest reasonable assumption and state it.

## Route Before Style

1. Inspect the existing codebase, product conventions, and any `DESIGN.md`, `AGENTS.md`, or theme files.
2. Extract the task brief. Separate facts, assumptions, constraints, and preferences. Treat adjectives such as "modern", "premium", or "minimal" as incomplete until translated into observable decisions.
3. Score candidate modes against the user's job, usage context, content density, device, brand constraints, and risk. Choose the highest-fit mode; when tied, choose the simpler direction that preserves the user's current habits.
4. Select a visual reference only after the mode is known. Use the capability router to decide whether the source should be `awesome-design`, a local brand `DESIGN.md`, a Refero case, or a live URL extraction.
5. Keep the visual system coherent: one dominant direction, up to two supporting references, and no unrelated trend pile-up.

## Research Before Absorption

When external examples are relevant, route by the question rather than by popularity:

1. Name the question: visual direction, flow sequence, component behavior, implementation detail, or domain benchmark.
2. Select the smallest admissible source from [research-catalog.md](references/research-catalog.md). Use a documented rule or research source for high-consequence interaction decisions; use galleries only for visual discovery.
3. Separate observed facts, interpretation, and assumptions. Write down what the source cannot prove.
4. Convert the finding into one native product rule, rejection, or testable hypothesis. Do not copy the source's skin.
5. Stop researching when the route has one supported primary direction, the relevant interaction risks are covered, and the next step is implementation or testing.

## Build Executable Context

When a reference is selected, turn it into a small project-specific design context before writing UI:

- Preview: judge hierarchy, canvas, image role, title scale, and page rhythm.
- Tokens: capture only needed colors, typography, spacing, radius, elevation, motion, and breakpoints.
- Component rules: define the actual modules used by the task, their dimensions, states, and variants.
- Rationale: record why a rule exists, when it applies, and its forbidden misuse.
- Do/Don't: convert the source's constraints into an acceptance checklist.

Integrate tokens in the project's theme layer or existing design system. Do not leave them as a prompt-only list. Keep the project `DESIGN.md` evolving: write back validated component rules after screenshot review.

## Interaction First

Apply the product-first principles from `ui-ux-pro-max`:

- Put the real workspace or core action early; do not replace it with a brochure unless a landing page is the explicit product.
- Design default, hover, active, selected, disabled, loading, success, error, locked, empty, and recovery states for every major control.
- Preserve the user's familiar information architecture unless the task calls for a workflow change. Novelty must earn its cost.
- Give direct manipulation feedback within roughly 100ms, use purposeful motion, and provide undo/reset where a change can be destructive or hard to reproduce.
- Support keyboard/focus behavior on desktop and thumb-friendly touch behavior on small screens. Use at least 44px touch targets.
- Make density intentional. Operational products optimize scanning and comparison; editorial products optimize reading rhythm; creative products optimize direct manipulation without hiding status.
- For responsive work, change hierarchy and interaction model when needed, not just column count. Check 375, 768, 1024, and 1440px unless the product has a different target.
- For controls and tools, inspect the project's icon dependencies first. Use Lucide or the project's existing icon library when available; pair unfamiliar icon-only controls with an accessible label or tooltip and never use an icon as decoration when text or a familiar symbol is clearer.

For interaction review, inspect sequence and recovery rather than only the final screenshot. Check orientation and next-step clarity, direct feedback, loading/error timing, preserved input, safe back navigation, keyboard/focus, touch and gesture alternatives, responsive reachability, reduced motion, and ethical consent. Use [quality-gates.md](references/quality-gates.md) for the review record.

## Reference Retrieval Rules

Use [source-catalog.md](references/source-catalog.md) to select the smallest useful external lookup:

- Unknown direction or need real product taste: search Refero Styles by brand, mood, color, typography, or URL.
- Known website or competitor: use `designmd.supply` for a richer breakdown or `DesignMD.me` for a fast production-ready extraction.
- Prompt-to-production concept validation: use Neuform.
- Brand comparison: use getdesign.md.
- One-click sampling from the current page: use design-md-chrome.

When browsing a source, wait for dynamic content, inspect only the relevant style or component, and skip any login wall. If a source is blocked, rate-limited, or incomplete, do not invent its rules or randomly substitute a new aesthetic; use the next explicitly justified source or state the limitation.

## Implementation Loop

1. State the route and five principles.
2. Sketch the information architecture and primary flow.
3. Implement tokens and real screens/components, including the important states.
4. Verify in a real browser at the target widths. Capture screenshots when the change is visual.
5. Compare against the selected reference's Do/Don't and the quality gates. Fix visible defects before polishing.
6. Report files changed, route rationale, reference sources, tested states/viewports, and remaining assumptions.

The completion bar is a usable, coherent product experience whose visual rules can be explained and repeated, not a page that merely looks stylish in one screenshot.
