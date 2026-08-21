# PULSELINE 脉线 Design Contract

## Route Decision

- Branch: `mixed`, with brand/graphic approval before product translation.
- Brand mode and depth: a compact visual identity plus event application family. The concept needs an original mark, route language, race bib, wayfinding and finish-post behavior, but not a governed corporate rebrand.
- Product mode: brand/marketing entry plus consumer registration. The core job is to compare a 5K/10K route, understand safety/hydration/elevation, select a wave, confirm a compact entry, receive a digital bib and see a simulated finish/share state.
- Audience and context: first-time and returning urban runners scanning on phone or desktop before an evening race. Primary locale is `zh-CN`; English is used for event identity, codes and globally familiar race terms rather than duplicating every control.
- Truth boundary: PULSELINE, the event, place usage, route, schedule, bib, participant details, rankings and results are all fictional concept/demo content. No purchase, upload, navigation or real event entry occurs.

## Evidence And Direction

- Primary lineage: high-energy sports editorial. It contributes a fast first read, large event display type, full-bleed documentary motion photography and format-aware identity applications.
- Supporting counterweight: restrained service UI. It contributes legible CJK controls, stable panels, explicit units, visible states and conservative form behavior so the event expression does not damage task clarity.
- Rejected: neon particles, glow effects, gradient decoration, dark-blue sci-fi styling, Canvas-rendered UI, generic rounded SaaS cards, map-as-wallpaper, and animated noise without state meaning.
- The event is recognizable without imagery through the mark, `PULSE THE CITY` line, date/location/distance lockup, signal-yellow route language and square-edged application system.

## Brand System

- Strategic idea: the city grid becomes a running pulse. The mark is made from two offset right-angle routes that converge and continue forward.
- Identity status: original concept vector, not legally cleared. It is not based on Lucide, emoji, Unicode, a stock pictogram or an existing event mark.
- Mark variants: `pulseline-mark.svg` for full color/reversed use and `pulseline-mark-mono.svg` for one-color reproduction. The mark is tested as favicon, 34px navigation identity, 36–64px application mark and large-format signage element.
- Clear space: preserve at least one internal route-stroke width around the mark. Do not stretch, rotate, add shadow, recolor individual path blocks, or replace it with the flag/ticket UI icons.
- Palette roles: ink `#11110f` for structure; paper `#f3f4ef`; signal yellow `#f2ff45` for brand discovery and the one primary action; coral `#ff6257` for finish/result and high-priority event emphasis; muted water blue only for geography; semantic focus blue remains separate.
- Event application invariants: mark + event name + date/place remain protected; route arrows and tape may reflow; runner name/number/distance are replaceable; essential text remains live HTML where the channel permits; photography always carries a disclaimer when it could imply a real event.

## Product Visual System

- First viewport: real night-running photography, PULSELINE as the dominant signal, a Chinese offer, date/location/distance and the route-registration action. No explanatory card covers the hero.
- Grid: fluid narrative bands use a max `1500px` content grid. Route work uses a map/inspector split; registration uses wave/form split. Both become one ordered column under pressure.
- Spacing: 4/8-related internal rhythm; repeated 18/24px UI padding; 54–110px narrative section intervals. Inside gaps stay smaller than group and section gaps.
- Containers: bands separate narrative phases; the map and inspector have operational borders; application frames represent real repeated artifacts. No generic floating page card and no card nesting.
- Geometry: 2–3px controls/dialog radius, square event applications, border-led depth. Shadows occur only on the physical bib/sign and the modal/toast overlap.
- Motion: 200ms route/state transitions and native scroll orientation only. `prefers-reduced-motion` removes nonessential transitions and smooth scrolling.

## Typography And Content

- UI and Chinese: `Noto Sans SC`, `Source Han Sans SC`, `PingFang SC`, `Microsoft YaHei`, Arial, sans-serif. This is a fallback stack; no font file is redistributed.
- Display: system condensed Latin preference (`Arial Narrow`, then Helvetica/Arial) only for short event headings and large bib distances. Chinese, forms, route notes and legal/demo copy stay in the full-CJK UI stack.
- Monospace: event codes, route readings, dates and bib numbers only.
- Letter spacing is `0` everywhere. Font sizes change discretely at breakpoints and never scale continuously with viewport width.
- Voice: direct and specific. Actions name the next outcome (`核对报名资料`, `确认并生成号码布`, `模拟完赛结果`). Errors state what remains saved and how to recover.
- Pressure response: optional English and low-priority metadata disappear before task text shrinks; form fields stack; route panels reflow; buttons wrap to full width on mobile.

## Interaction Contract

1. Switch `5K / 10K`; route path, distance, elevation, lighting, hydration, time and detail copy update from one distance state.
2. Inspect safety, hydration and elevation in a keyboard-operable tab set.
3. Select a start wave, enter runner/emergency details and explicitly acknowledge the route notice.
4. Validate adjacent fields without erasing input, review the exact runner/route/wave/contact in a dialog, then generate a simulated digital bib.
5. Move to a simulated finish/share state; return to the bib, edit registration, clear only the form or reset the complete demo at any point.

Network loss during confirmation preserves all fields and reports a retry instruction. Direct controls respond immediately; simulated bib generation uses a short honest loading label. Buttons and inputs remain at least 44px. Dialog focus follows native `showModal()` behavior.

## Assets And Provenance

- `pulseline-mark.svg`, `pulseline-mark-mono.svg`: original SVG geometry made for this concept. No external identity asset.
- Hero photo, local file `assets/city-night-run.jpg`: downloaded from Unsplash's public image CDN at 1800px. Source page: https://unsplash.com/photos/a-group-of-people-running-down-a-street-at-night-J4XpGYk_o9k. License: Unsplash License, https://unsplash.com/license. It is used as illustrative event atmosphere; no endorsement, participation or relationship with this fictional event is implied.
- Motion photo, local file `assets/night-runners.jpg`: Ayla Meinberg, source page https://unsplash.com/photos/blurred-runners-race-past-spectators-on-street-uKZr44AI9OQ. License: Unsplash License, https://unsplash.com/license. It is used in the identity application and simulated finish poster; the same non-endorsement boundary applies.
- The source pages and license descriptions were checked through public search extracts on 2026-08-21. Raw command-line access to Unsplash returned an anti-bot challenge, so no login was attempted; exact source URLs and local copies are retained for audit.
- UI icons: Lucide `0.468.0`, loaded from https://cdn.jsdelivr.net/npm/lucide@0.468.0/dist/umd/lucide.min.js under the ISC license. Icons communicate UI actions/status only. Text remains on ambiguous or consequential actions. A symbol fallback is present for close/reset if the CDN is unavailable.
- Route map: original abstract SVG geometry embedded in `index.html`. It does not use geographic, Leaflet or OpenStreetMap data and is explicitly labeled as non-navigational concept content.

## Acceptance Record

Brand gates run before product gates.

### Brand

- Active: message, hierarchy, canvas/modules, typography/voice, color, original identity, imagery, event applications, rights/accessibility and validation.
- Not applicable: printer-specific color conversion, dielines, fabrication, trademark clearance and governed multi-owner templates. The deliverable is a browser concept, not production artwork.
- Required proof: the mark survives monochrome and small size; bib, wayfinding and social formats remain one system; demo claims and photo boundaries are visible; no application depends on a mock sponsorship or real result.

### Product

- Active: IA, hierarchy/grid, containers, controls, bilingual type/content, color, imagery/data, interaction/states, responsive/input/accessibility, identity application, performance and handoff.
- Required viewports: 375, 768, 1024 and 1440 CSS pixels; also keyboard focus, form errors, confirmation/loading, offline retry, bib, finish/share, long Chinese names, reduced motion and missing Lucide CDN.
- Hard stop: do not release with an incomplete route-to-bib flow, hidden critical overflow, missing focus, targets below 44px, inaccessible contrast, unknown asset rights, unmarked demo data or a broken reset/recovery path.
