# Article Synthesis: DESIGN.md As Visual Context

Source: [AI 不会做设计？先给它一份 DESIGN.md](https://waytoagi.feishu.cn/wiki/BtcmwsCDMiZJPbkbIYhcJO9xnLb). The page was read as a public, dynamically loaded document; login prompts were skipped. The article reports a July 13/14 update and says the author collected 50 global website design specifications.

## Thesis

AI can write increasingly reliable code yet still produces a "default template" interface: purple-blue gradients, oversized rounded cards, arbitrary buttons, and invented font/spacing choices. The failure is often missing design context rather than lack of model capability. Human shorthand such as "make it premium", "reference Stripe", or "like Linear" works only when the designer already carries the brand, component, rhythm, and visual history in their head. A coding agent needs a readable, reusable, project-root design context.

DESIGN.md is described as a visual role card: colors, typography, spacing, radius, and component patterns are the skeleton; brand character, reasons, and forbidden moves are the personality. It is neither an inspiration gallery nor a token-only file.

## Format And Collaboration

The article describes two layers:

1. YAML front matter: machine-readable tokens such as color, typography, spacing, radius, and component properties.
2. Markdown body: human-readable rationale such as brand character, how colors are used, and what components must not do.

Tokens alone tell an agent what values exist, not why or when to use them. The article also frames a useful three-layer project contract:

- `AGENTS.md`: engineering collaboration, commands, conventions, and testing.
- `SKILL.md`: professional workflow and domain-specific method selection.
- `DESIGN.md`: visual identity, repeated rules, and non-negotiable aesthetic boundaries.

Together these reduce re-invention between sessions. The design file should be portable, live in the project root when useful, and grow with validated component rules instead of remaining a one-time download.

## Tool Selection Table

| Need | Tool | Article's reason |
| --- | --- | --- |
| Find real product taste before a direction exists | Refero Styles | AI-readable inspiration library searchable by brand, mood, color, typography, or URL |
| Extract a known website quickly | DesignMD.me / designmd.supply | Paste a URL and obtain executable design rules |
| Stronger visual creation and prompt-to-production | Neuform | Design-generation workbench with fuller visual expression |
| Browse popular brand systems | getdesign.md | Clear brand coverage for Vercel, Stripe, Notion, Linear, and others |
| Sample the page currently open | design-md-chrome | Chrome extension for lightweight, immediate extraction |

The article's ranking is: (1) Refero Styles, (2) designmd.supply / DesignMD.me, (3) design-md-chrome, (4) Neuform / getdesign.md. The ranking is about fit, not universal quality.

## Refero Styles: Reference To Rules

Refero is recommended first because it lets an agent "see good design" through real product examples and provides 2,000+ DESIGN.md files according to the cited RicoUI post, plus DESIGN.md, Tailwind v4, CSS Variables, and Design Tokens outputs.

Example search families from the article:

- Developer tools: Linear, Vercel, Raycast, Warp.
- Payments/finance: Stripe, Revolut, Wise.
- Content: Notion, Medium, The Verge.
- High-end brand pages: Apple, BMW, Bugatti, Nike.

The Apple example is valuable because it decomposes style into five executable assets:

- Preview: first judge canvas, hero, title scale, image ratio, and rhythm; do not copy tokens before deciding the direction fits.
- DESIGN.md: copy the rules for colors, typography, spacing, components, layout, images, motion, and Do/Don't guidance to the coding agent.
- CSS Variables / Tailwind v4: put variables in the global theme so components do not invent values.
- Components: use concrete module rules such as hero, sticky sub-nav, feature-card grid, and product color swatch.
- Do / Don't: use as the acceptance checklist. The article's Apple example calls out 28px card radius, `#0071e3` reserved for the primary CTA, no card shadows, and negative letter spacing for large headings.

The recommended five-step usage is: choose one main style and one or two supporting references; inspect Preview and the written description; ask the agent to restate principles before coding; connect CSS variables or Tailwind tokens to the theme; generate by component rules rather than free-form whole-page improvisation; then run Do/Don't and Agent Prompt Guide checks for color misuse, shadows, tracking, radius, and density.

The article's reusable prompt pattern is:

> Read the selected Refero `DESIGN.md`, tokens, CSS Variables, and Tailwind v4. Before coding, output five non-negotiable visual principles and a page structure. Connect tokens to the theme layer. Extract the primary CTA color, card treatment, radius, type scale, spacing, and button height. Implement the requested product/page and finish with a file list plus checks for color, type, spacing, radius, cards, CTA, and image use.

The point is to give an agent executable rules instead of an aesthetic password such as "make it Apple-like".

## designmd.supply: Brand And Competitor Breakdown

The article calls this a brand decomposer. A Stripe case shows a generated DESIGN.md alongside a live screenshot, logo, palette, backdrop, and components.

Use it in two situations:

1. A known reference: for example, a payment infrastructure product that wants Stripe's white canvas, light type, colorful gradients, rational but not dull character. Extract the actual rules rather than asking an agent to guess "Stripe style".
2. Competitor analysis: compare primary and accent colors, CTA hierarchy, product-explanation versus brand-narrative typography, consistency of cards/buttons/forms, and which rules are worth borrowing or rejecting.

This changes critique from "it looks good" to "why does it work?".

## DesignMD.me: Low-Friction Start

DesignMD.me accepts a URL and generates a production-ready DESIGN.md with tokens, typography, and component patterns. The article positions it as the fast path:

1. Paste URL.
2. Generate DESIGN.md.
3. Put it at the project root.
4. Ask the agent to rebuild or test the page against it.

Its advantage is startup cost, not maximum completeness. It is useful when deciding whether a direction works and a runnable first draft is more valuable than several days of design-system documentation.

## Neuform: Prompt To Production

Neuform is described as a complete prompt-to-production workflow that turns prompts into AI HTML landing pages, remix templates, and reusable DESIGN.md files. The article agrees with RicoUI that its visual experience is stronger: dark canvas, workbench partitions, and a creator-oriented generation feel.

Use it for a prompt-to-page concept, a landing-page proof of direction, or a workflow linking page, template, and DESIGN.md. Do not make it the first choice for rigorously supplementing an existing product system; Refero and designmd.supply are better when the source of truth is a real product.

## getdesign.md: Brand Comparison, Not Skinning

The article lists brand inspiration including Vercel, Stripe, Figma, Notion, Supabase, Linear, Airbnb, Spotify, Apple, Uber, Cursor, Framer, and Claude. It suggests comparisons by job:

- Deployment: Vercel, Netlify, Railway.
- AI coding: Cursor, Claude, Raycast, Warp.
- Productivity: Notion, Linear, Superhuman.
- Consumer: Airbnb, Apple, Nike, Spotify.

The warning is central: borrow decisions, not brand skins. For example, Linear's precision comes from low noise, a restrained purple accent, minimal decoration, and consistent spacing; it does not mean every product should become black with purple light.

## design-md-chrome: Daily Sampling

The Chrome extension extracts styles and information from any page and can output DESIGN.md or SKILL.md for Google Stitch, Claude Code, and Codex. It is suited to designers sampling daily, independent developers grabbing a reference without leaving the current page, quickly giving an agent design context, and converting a useful page into a durable project rule. Its notable idea is joining visual rules with an agent-executable workflow rather than only exporting tokens.

## Real Workflow And Feedback Loop

For an AI research tool homepage that should avoid default SaaS styling:

1. Search Refero for `AI`, `developer tools`, and `editorial`; choose three references.
2. Use designmd.supply or DesignMD.me to extract a target such as `linear.app` or `stripe.com`.
3. Put the generated DESIGN.md in the project root.
4. Ask Codex: "Read `@DESIGN.md` and rebuild the homepage visual system. Keep the current information architecture; rework color, type hierarchy, buttons, cards, spacing, and mobile layout. Do not add marketing filler; only systematize the visual design."
5. Take a screenshot and ask the agent to check the prescribed primary color, type, radius, spacing, forbidden patterns, brand fit, and new component rules worth writing back.
6. Write validated rules back to the project's DESIGN.md.

The loop is important: the file is product visual memory, not a disposable download.

## Why It Matters And Pitfalls

The article says a human-feeling interface comes from decisions that have provenance: why a button is not too round, why the primary color appears on one key action, why a list is denser, why headings are restrained instead of poster-sized on every screen, and why one area has whitespace while another is compressed. DESIGN.md makes those reasons discussable, reusable, and correctable by an agent.

Avoid:

1. Copying a large brand's appearance; borrow rules, not the skin.
2. Treating DESIGN.md as a cure-all; screenshot review and human judgment remain necessary.
3. Writing tokens without rationale; agents will misuse them.
4. Stuffing in many styles; one main direction plus one or two helpers is enough.
5. Forgetting mobile; record breakpoints, touch sizes, and density changes.
6. Letting the file go stale; write back each validated component rule.

## Article Sources

- Google Labs design.md: https://github.com/google-labs-code/design.md
- DESIGNmd overview: https://designmd.ai/about
- DESIGNmd CLI: https://designmd.ai/cli
- Refero Styles: https://styles.refero.design/
- DesignMD.me: https://designmd.me/
- Neuform: https://neuform.ai/
- getdesign.md: https://getdesign.md/
- design-md-chrome: https://github.com/bergside/design-md-chrome
- designmd.supply Stripe case: https://www.designmd.supply/guides/stripe.com
