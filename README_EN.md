# UI/UX Design Router

[简体中文](./README.md) | [English](./README_EN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Showcase](https://img.shields.io/badge/Showcase-GitHub%20Pages-1f6feb)](https://hachikoj.github.io/ui-ux-design-router/)

A unified design-routing skill for AI coding/design agents. It first classifies the deliverable as product UI/UX, brand/graphic, or mixed work, then loads only the relevant internal branch. It is intended for tools that support `SKILL.md`, project instructions, or a comparable agent workflow; Codex is only one installation example. Product interaction and brand/graphic production share one `$ui-ux-design-router` entry and retain separate validation gates.

> This is an independent project. It is not an official distribution of, and is not endorsed by, any upstream project or organization.

## Project Links

- GitHub repository: <https://github.com/HachikoJ/ui-ux-design-router>
- Live showcase: <https://hachikoj.github.io/ui-ux-design-router/>
- Sources and acknowledgments: [`ACKNOWLEDGMENTS.md`](./ACKNOWLEDGMENTS.md)
- Chinese README: [`README.md`](./README.md)

## What It Does

- Selects the product, brand/graphic, or mixed branch from the final deliverable; mixed work runs brand decisions before product application.
- The product branch covers users, tasks, IA, components, interaction states, recovery, responsive behavior, and browser QA.
- The brand/graphic branch covers strategy, naming, logos, identity, campaigns, posters, editorial, packaging, signage, templates, and production.
- Selects a product behavior mode or a brand project mode/system depth from the actual context.
- Selects one primary visual reference and, when justified, at most one supporting reference.
- Translates references into native tokens, component rules, interaction states, and Do/Don't constraints.
- Reviews keyboard, focus, touch, responsive, loading, error, recovery, and reduced-motion behavior.

## Installation

Clone the repository and copy the skill directory into your agent's skills folder. For Codex:

```bash
git clone https://github.com/HachikoJ/ui-ux-design-router.git /tmp/ui-ux-design-router
mkdir -p ~/.codex/skills
cp -R /tmp/ui-ux-design-router/ui-ux-design-router ~/.codex/skills/
```

Then invoke the skill in a task:

```text
Use $ui-ux-design-router. Choose the product, brand/graphic, or mixed branch first,
then execute the relevant design process and quality gates.
```

Other tools that support skill files or project-level agent instructions can reference the same `ui-ux-design-router/SKILL.md`; adapt the installation path and invocation syntax to that tool.

## Repository Layout

```text
ui-ux-design-router/   # Single installable entry with product and brand/graphic branches
showcase/              # Two static, interactive case studies
docs/screenshots/      # Screenshots of the current live deployment
assets/                # Contact and optional-support images
ACKNOWLEDGMENTS.md     # Upstream sources and credits
.github/workflows/      # GitHub Pages deployment workflow
```

## Showcase Cases

- **ROOMSHIFT / 格间**: small-home renovation × material system × budget decisions. It tests an original spatial identity, photographic concept comparison, household and material configuration, linked budget/schedule feedback, undo/recovery, concept-plan generation, and review booking.
- **PULSELINE / 脉线**: city night running × event identity × route safety × registration. It tests an original event system, race-bib and wayfinding applications, 5K/10K route decisions, reviewable form submission, a digital bib, and a finish/share state.

The cases use original copy and SVG marks, clearly labelled demo data, and traceable public photography. They do not copy upstream logos, proprietary copy, or exact layouts. Interfaces are semantic HTML/CSS rather than Canvas-rendered UI; all places, budgets, schedules, event details, rankings, and results are concept data rather than real services.

## Screenshots

### Showcase Home

![UI/UX Design Router showcase home](./docs/screenshots/showcase-home.webp)

<table>
  <tr>
    <td width="50%">
      <strong>ROOMSHIFT / 格间</strong><br>
      <img src="./docs/screenshots/roomshift-workspace.webp" alt="ROOMSHIFT small-home renovation planner screenshot">
    </td>
    <td width="50%">
      <strong>PULSELINE / 脉线</strong><br>
      <img src="./docs/screenshots/pulseline-event.webp" alt="PULSELINE city night-run event screenshot">
    </td>
  </tr>
</table>

## License

This project is released under the [MIT License](./LICENSE). Upstream projects retain their own licenses; see [`ACKNOWLEDGMENTS.md`](./ACKNOWLEDGMENTS.md) for verified original repositories and license notes.

## Author And Contact

- Author: **Wilson** · [@HachikoJ](https://github.com/HachikoJ)
- Repository: <https://github.com/HachikoJ/ui-ux-design-router>
- Issues: <https://github.com/HachikoJ/ui-ux-design-router/issues>
- WeChat: `hostrow` (please mention “UI/UX Design Router” in your request)

Use GitHub Issues for routing decisions, skill structure, showcase interactions, or documentation feedback. Do not post tokens, account credentials, client data, or other sensitive information in a public issue.

<table>
  <tr>
    <td align="center">
      <strong>WeChat Contact</strong><br>
      <img src="./assets/wechat-contact.png" alt="Wilson WeChat contact QR code" width="220">
    </td>
    <td align="center">
      <strong>WeChat Support</strong><br>
      <img src="./assets/donate-wechat.png" alt="WeChat support QR code" width="220">
    </td>
    <td align="center">
      <strong>Alipay Support</strong><br>
      <img src="./assets/donate-alipay.png" alt="Alipay support QR code" width="220">
    </td>
  </tr>
</table>

Support is entirely optional and does not affect access, issue handling, or future updates.