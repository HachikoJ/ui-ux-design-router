# Typography, Content, And Brand Router

Use this reference to make typography, wording, and approved brand assets part of the product decision rather than decoration added at the end. It governs product application, not independent brand strategy or identity creation. The default language baseline is Simplified Chinese (`zh-CN`) with credible Chinese-English mixed text. Preserve a different locale when the product already defines one.

## Route Inputs

Before choosing a font, phrase, or mark, identify:

- primary locale and region, secondary language, and whether both appear in the same line;
- product mode, user expertise, reading versus scanning, session length, and consequence of error;
- text role: brand, display, page title, section title, body, UI label, metadata, number, code, or legal text;
- existing brand assets, font licenses, platform conventions, bandwidth, and offline requirements;
- light/dark surfaces, target viewports, zoom/reflow needs, and localization expansion.

Do not route from adjectives such as “premium”, “technical”, or “friendly” alone. Translate them into observable choices: family category, glyph coverage, weight, size, line height, text color, density, voice, and asset treatment.

## Typography Dispatch

| Product mode | Primary system | Optional secondary | Role and density |
| --- | --- | --- | --- |
| Operational SaaS / enterprise / service | Full-CJK sans with calm Latin and clear numerals | Monospace only for code, IDs, or aligned technical values | Compact but readable UI; restrained headings; scanning and comparison outrank expression |
| Devtool / AI workspace | Full-CJK sans for UI | Monospace for code/logs, never for all Chinese UI; optional display face only on marketing surfaces | Stable panes, tabular values, distinguishable punctuation and code glyphs |
| Editorial / knowledge | Full-CJK sans for navigation and controls | CJK Song/Ming/serif for long reading or editorial display when it improves the publication voice | Wider line height, controlled measure, visible hierarchy, no decorative face in controls |
| Brand / marketing | Full-CJK readable body/UI family | One expressive CJK-capable display family or custom lettering for short headings | Large display type only in true hero/editorial positions; product and brand remain the first signal |
| Commerce / consumer | Full-CJK sans with strong numerals and clear variant labels | Optional restrained display face for campaign headings | Product name, price, availability, option, and CTA must remain immediately legible |
| Finance / health / legal / high consequence | Familiar full-CJK sans or restrained serif with tested glyphs | Monospace/tabular numerals only where alignment is useful | High contrast, explicit labels, conservative weights, no thin text or playful ambiguity |
| Children / learning | Clear humanist or friendly CJK sans with distinct glyphs | Expressive display face only for rewards/titles | Larger body/control text, generous line height, simple words, avoid ambiguous Latin glyphs |
| Data-heavy analysis | Full-CJK sans for UI and annotations | Tabular numerals; monospace only for technical identifiers | Units, timeframe, baseline, uncertainty, and labels stay visible; charts do not depend on color alone |

Default to one primary family plus at most one expressive family. A functional monospace face for code/data is an exception, not a third visual style. System fonts are valid when speed, native familiarity, or broad glyph coverage matters more than brand distinctiveness.

## Contextual Typography Decision

Do not choose a family or size in isolation. Resolve typography in this order:

1. task mode, reading versus scanning, session length, and consequence of error;
2. surface/container and the amount of stable space it owns;
3. semantic role, action/state meaning, and required prominence;
4. density, input method, viewing distance, and responsive behavior;
5. locale, actual content, expansion, numerals, symbols, and user-generated text;
6. family, optical cut, size, weight, line height, color, and numeric features;
7. fallback, loading, license, rendering, and platform constraints;
8. worst-case content and accessibility tests.

An earlier decision outranks a later stylistic preference. For example, a compact side panel may reduce spacing and title prominence, but it must not turn task-critical text faint or unreadable to preserve a chosen aesthetic.

| Surface / container | Typography behavior | Pressure response |
| --- | --- | --- |
| App shell, header, navigation, sidebar | Stable 13-16px control/label roles, clear current location, restrained product name; no display face in repeated navigation | Shorten approved labels, allow a wider rail or switch navigation pattern before truncating destinations |
| Workspace, canvas, toolbar, inspector | Compact, stable control metrics; monospace only for code, IDs, coordinates or aligned technical values | Collapse secondary labels, group tools, or use progressive disclosure before shrinking controls or hiding status |
| Page section or panel | Scale headings relative to the page: panel titles are quieter than page titles; body and controls stay at UI roles | Wrap titles, rebalance columns, or move optional metadata; never place page-title scale inside a utility panel |
| Card, list row, table cell | Optimize scanning: stable label/value alignment, tabular figures when comparison matters, metadata visually secondary but readable | Wrap primary content; truncate only recoverable secondary content with a disclosure path; preserve units and status |
| Form and control | Persistent labels, 14-16px UI text, at least 16px mobile input text, specific help/error copy | Increase height, wrap help, or stack controls; never remove labels or clip validation to retain one line |
| Dialog, drawer, popover, toast | Dialog/drawer titles normally use compact section scale; consequences and recovery remain explicit; popovers/toasts stay brief | Reflow or use a larger surface when content becomes a task; do not compress legal or destructive meaning into a tiny overlay |
| Chart, KPI, data annotation | Value, unit, timeframe, baseline and uncertainty form one hierarchy; use tabular figures when alignment aids comparison | Reduce simultaneous labels, move detail to an accessible table, or change chart form before hiding units or distorting values |
| Empty, loading, warning, error, success | State name and next action outrank illustration or decorative display type; serious states use calm, direct language | Expand the state region or move recovery inline; do not make failures faint, playful, or dependent on a toast alone |
| Editorial reading surface | 16-18px Chinese body as a starting band, 1.6-1.8 leading, controlled measure and clear anchors/captions | Narrow the measure, reflow media, or paginate; do not shrink long-form type to fit a wide container |
| Marketing hero or campaign band | One short display role may be expressive; supporting claim, proof and CTA use the readable system | Shorten/restructure the message or change composition; do not carry hero scale into cards, pricing tables, forms or product tools |

Create context aliases only when the same semantic role genuinely changes across surfaces, such as `title-page`, `title-panel`, and `title-dialog`. Keep each alias tied to a repeated use case; do not create a one-off token for every container. Density should reduce space and optional information before it reduces readable type. Breakpoints use discrete role changes, not continuous viewport-scaled font sizes.

## Role Scale

Treat these as starting validation bands, not universal values. Use discrete tokens at breakpoints; do not scale font size continuously with viewport width. Set letter spacing to `0`; do not use negative tracking. Create hierarchy through family, size, weight, line height, color, and space.

| Role | Typical starting size | Line height | Weight / color intent |
| --- | --- | --- | --- |
| True hero / campaign display | Desktop 56-96px; mobile 36-56px | 1.05-1.2 | 500-700 or an appropriate display cut; primary text color |
| Page title | Desktop 28-40px; mobile 24-32px | 1.15-1.3 | 600-700; primary text |
| Section title | 20-32px | 1.2-1.4 | 500-700; primary text |
| Chinese long-form body | 16-18px | 1.6-1.8 | 400-500; primary or strong secondary text |
| UI body / field content | 14-16px; prefer 16px for mobile inputs | 1.4-1.65 | 400-500; primary text |
| Button / label / navigation | 14-16px | 1.25-1.5 | 500-600; action-appropriate contrast |
| Metadata / helper / caption | 12-14px | 1.4-1.6 | 400-500; readable secondary text, never faint decoration |
| Data value | 14-18px; key metric 24-48px | 1.15-1.4 | Tabular figures when comparison matters; show unit and timeframe |
| Code / ID / log | 13-15px | 1.45-1.7 | Monospace with distinguishable `0/O`, `1/l/I`, punctuation, and CJK fallback |

Do not put hero-scale type in dashboards, sidebars, cards, dialogs, or dense tools. Do not reduce critical text to make a layout fit; change the layout, wrapping, or label first.

## Chinese And Bilingual Rules

- Declare the page language with `lang="zh-CN"`; mark meaningful English spans with `lang="en"`. Preserve `zh-Hant`, regional tags, or other locales when required because CJK glyph forms vary by region.
- Choose fonts with verified Simplified Chinese, Latin, punctuation, currency, symbols, and needed weight coverage. Noto Sans CJK / Source Han Sans are defensible open references, not mandatory defaults.
- Test actual mixed strings, not only alphabet specimens: `AI 工作台`, `2026年8月21日`, `¥1,299.00`, `API 密钥`, percentages, units, brackets, bold text, and error states.
- Use Chinese punctuation when Chinese is the primary sentence language. Do not mechanically insert spaces around every Latin word; follow the product's editorial convention consistently.
- Do not store full-width ASCII merely to fake alignment. Use proportional or tabular font features and layout primitives.
- Keep letter spacing at `0`. Avoid spaced-out Chinese labels, all-caps English paragraphs, excessive italics, and thin weights for body/UI text.
- Prefer natural wrapping. Use balanced wrapping only for short headings; do not hard-code `<br>` line breaks unless the composition is deliberate and separately checked on mobile.
- Define a tested fallback stack. A Latin-only web font that silently falls back to a visually incompatible Chinese system font is not a complete bilingual typography system.
- Keep terminology and proper names in one glossary. Do not alternate between `工作区`, `空间`, and `项目` for the same object, or translate a brand/product name inconsistently.
- Localize dates, times, currency, decimal/group separators, units, names, and address order. Do not translate only visible labels while leaving formatted data in the wrong locale.
- Keep strings localizable: avoid sentence construction from fragments, allow meaningful expansion, and preserve variables in translator context. Do not duplicate every control in both languages unless the product explicitly requires a parallel bilingual presentation.
- Respect Chinese IME composition. Search, validation, shortcuts, and submit handlers must not fire on an unfinished composition; test desktop and mobile input with real Chinese entry.

## Text Color And Resilience

Define semantic text tokens rather than arbitrary opacity:

- `text-primary`: task-critical content and headings;
- `text-secondary`: supporting content that remains comfortably readable;
- `text-tertiary`: metadata only, never instructions or required state;
- `text-link` / `text-action`: recognizable without color alone;
- `text-success`, `text-warning`, `text-danger`: paired with words or symbols;
- `text-disabled`: clearly inactive but still identifiable when users need to understand the option.

Meet WCAG contrast for the intended size: at least 4.5:1 for ordinary text and 3:1 for large text; non-text controls and meaningful graphics need 3:1 against adjacent colors. Treat those as minimum gates, not aesthetic targets. Verify that text can zoom to 200%, reflow without loss, and survive user text-spacing overrides. Avoid text baked into images except for a genuine logo/wordmark.

## Font Delivery And Licensing

- Inspect existing fonts, licenses, and theme tokens before adding a family. Never assume a commercial font may be redistributed or embedded.
- Load only the families, scripts, and weights used. CJK fonts can be large; subset only when the license and character requirements allow it, and never remove glyphs needed by real or user-generated content.
- Prefer WOFF2 for web delivery. Self-host when privacy, reliability, or offline use requires it.
- Use `font-display` intentionally, preload only the truly critical font, and match fallback metrics where possible. Test FCP/LCP and layout shift; a beautiful face that makes text invisible or moves the page is a failed choice.
- Test the fallback state, slow network, blocked third-party font host, bold synthesis, and missing-glyph behavior.

## Content And Microcopy Dispatch

Write from the user's task, knowledge, emotional state, and consequence of error. UI text should reduce the need for explanation, not narrate the interface.

| Context | Wording contract |
| --- | --- |
| Navigation and labels | Use the user's nouns and one stable term per object. Prefer concrete Chinese labels over internal jargon or clever metaphors |
| Primary actions | State the verb and, when useful, the object or next step: `保存并发布`, `继续付款`, `添加收货地址`; avoid vague `确定`, `提交`, or `继续` when consequences differ |
| Destructive / legal / financial actions | Name the affected object and outcome. Confirmation text and buttons must agree; distinguish reversible archive from permanent deletion |
| Forms | Ask one clear question at a time; keep labels visible; add help only for format, reason, or consequence the field cannot communicate itself |
| Validation and system errors | Say what happened, identify the affected field/object, and give the next recovery action. Preserve input; do not blame the user or use jokes in stressful contexts |
| Loading / progress | Describe the real activity and progress when known. Do not show fake precision or indefinite motion with no exit |
| Empty / no results | State why the view is empty when known and offer the most useful next action. Do not fill it with promotional copy |
| Permissions / privacy | Explain purpose, timing, scope, storage/sharing, and the alternative if declined before asking for access |
| Marketing | Lead with a specific offer or product, support claims with inspectable proof, and avoid invented metrics, testimonials, awards, or urgency |
| Bilingual content | Choose one primary language per flow. Use the second language for proper names, technical terms, or an explicit language mode, not duplicate every label by default |

Match tone to risk: calm and precise for service, finance, health, legal, and errors; concise and professional for repeated work; warmer for consumer discovery; simple and concrete for children. A premium tone is restrained and specific, not obscure.

## Logo And Brand Asset Dispatch

First distinguish identity from interface controls. A logo identifies the product or organization; an icon communicates an action, object, or status. Lucide, emoji, a random glyph, or a generic app icon must never substitute for a logo.

1. **Existing brand:** search project assets, manifest, current header, and official brand package. Use the approved SVG/PNG and correct light/dark/monochrome variant. Do not redraw, recolor, distort, or fabricate a trademark.
2. **New brand or identity creation is in scope:** route strategy, concept development, logo construction, rights review, variants, and guidelines through the internal [brand/brand-system.md](brand/brand-system.md) branch. Return here to apply approved assets to product navigation, responsive headers, loading, themes, accessibility, and performance.
3. **New product prototype:** a carefully typeset wordmark can be the legitimate temporary identity. Do not add an emoji or Lucide symbol merely to fill the logo position. State when the identity is provisional.
4. **Logo not authorized or information missing:** use the supplied product name as a neutral wordmark and flag the missing identity. Do not invent a corporate mark for a real organization.

For a new identity supplied by the brand skill, import only the variants the product needs: primary lockup, compact mark when justified, monochrome/light/dark versions, and favicon/app-icon crop when relevant. Check clear space, alignment, minimum size, high/low contrast, 16/24/48px reproduction, and export dimensions. In HTML, give a linked logo an accessible brand/home label; repeated decorative marks use empty alternative text.

## Remaining Visual Asset Rules

- Use the real product, place, person, object, state, chart, or workflow when the user must inspect it. Atmospheric imagery cannot replace proof.
- Use one coherent icon library for UI actions. Add text or a tooltip when an icon is unfamiliar; never use an icon for decoration that competes with information.
- Give charts a title, unit, timeframe, direct labels or accessible data alternative, and explicit no-data/error states. Use color-blind-safe semantic color plus shape, pattern, position, or text.
- Do not invent customer logos, press marks, certifications, usage numbers, reviews, or product screenshots. Mark demo data as demo data when ambiguity matters.
- Support dark/light/high-contrast modes only when requested or established. Each mode needs semantic tokens and asset variants; inversion alone is not a theme.

## Decision Record

For substantial work, add this compact contract to the route decision or project `DESIGN.md`:

- locale and bilingual behavior;
- UI, display, and code/data families with fallback and license source;
- type-role tokens and justified context aliases: surface, size, weight, line height, color, numeric behavior, and responsive step;
- content voice, terminology, action/error pattern, and truth constraints;
- logo source or generation status, allowed variants, and forbidden substitutions;
- font performance, contrast, zoom/reflow, mixed-text, container-pressure, and asset verification plan.

For acceptance, place the longest realistic Chinese and English labels, large/small numbers, validation text, user names, and loading/error strings in the narrowest supported instance of every used surface. Verify normal and bold weights, fallback fonts, 200% text zoom, keyboard/touch states, and slow font loading. If the layout passes only by reducing essential text or hiding meaning, revise the container or component route rather than approving the typography.

Stop and ask one focused question when the primary locale, brand ownership, legal wording, or irreversible-action meaning changes the correct design. Otherwise choose the smallest defensible system and document the assumption.

## Authoritative References

- W3C Requirements for Chinese Text Layout: https://www.w3.org/TR/clreq/
- W3C language declarations: https://www.w3.org/International/questions/qa-html-language-declarations
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Material Design type-scale model: https://m3.material.io/styles/typography/type-scale-tokens
- Google Noto CJK background: https://developers.googleblog.com/noto-a-cjk-font-that-is-complete-beautiful-and-right-for-your-language-and-region/
- web.dev font performance: https://web.dev/articles/font-best-practices
- GOV.UK writing for user interfaces: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- GOV.UK button guidance: https://design-system.service.gov.uk/components/button/
- Microsoft UI text guidance: https://learn.microsoft.com/en-us/windows-server/manage/windows-admin-center/extend/guides/ui-text-style-guide
- Harvard accessible data visualization: https://accessibility.huit.harvard.edu/data-viz-charts-graphs
