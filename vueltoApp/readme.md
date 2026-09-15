# Vuelto Design System

Vuelto is a personal finance assistant that lives inside WhatsApp. You send it a message — text, voice note, or a photo of a receipt — and it records the expense. The web app is the dashboard on top of that: metrics, history, budgets, categories, and installments (cuotas).

This design system covers **palette, typography, iconography, and brand marks** only. It was built to support social/marketing assets (Instagram posts), not to document components or screens.

**Source:** local codebase at `C:\Users\pepe_\repos\vueltoApp` — specifically `public/styles/*.css` (`index.css`, `dashboard.css`, `global.css`, `demo.css`, `cuotas.css`) and `public/scripts/dashboard.js` (category colours and emoji). Every value here is copied from those files; nothing is invented except where flagged below.

---

## Index

| Path | What's in it |
| --- | --- |
| `styles.css` | Entry point — imports everything below |
| `tokens/fonts.css` | Google Fonts import + family tokens |
| `tokens/colors.css` | Brand, neutral, semantic, WhatsApp, and category colours |
| `tokens/typography.css` | Size, weight, tracking, line-height scale |
| `tokens/shape.css` | Radii, hairlines, space scale, easing |
| `assets/icons/` | 24 Feather line icons + 2 filled glyphs (send, whatsapp), as SVG |
| `guidelines/*.card.html` | Foundation specimen cards (Design System tab) |
| `Vuelto Brand Sheet.dc.html` | Interactive brand sheet — click any swatch or icon to copy |

No components or UI kits — intentionally out of scope.

---

## Visual foundations

**Colour.** One brand hue: green `#1D9E75`, with `#0F6E56` for text on light and `#E1F5EE` as its tint. Green is an accent, not a wash — in the app it covers roughly one element per screen: a button, a figure, a single italic word. Everything else is neutral or semantic. There is no secondary brand colour and no gradient anywhere in the codebase.

**Grounds.** Four approved backgrounds: white, off-white `#F7F7F5` (the landing uses a slightly warmer `#F6F6F3`), near-black `#141414`, and full-bleed green. Green fields take white type only. Maximum two grounds per composition.

**Type.** Two families plus a mono. Fraunces 600 for anything that should read as a headline or a number, with tracking that tightens as size grows (−3px at 56px, −0.8px at 26px). Money is *always* Fraunces — never DM Sans. DM Sans 400/500 for all UI and body copy; there is no bold weight in use anywhere. DM Mono for codes, dates, and copyable values. Italic Fraunces in green marks one or two words in a headline, never a whole line.

**Shape.** Radii of 8, 12, 16, and 22, plus fully-rounded pills. Anything interactive and small is a pill: buttons, filter chips, status badges, category tags. Cards are white or off-white with a 0.5px hairline border at 8% black and no shadow — shadows appear only on modals.

**Borders.** All borders are hairlines: `0.5px`, not 1px. Two strengths — 8% black for card edges, 13% for secondary buttons and dividers that need to assert themselves.

**Shadow.** Essentially absent. The card system is border-based. Modals get a soft, large-radius drop shadow; nothing else does.

**Transparency.** Used for two things only: hairline borders, and category colours tinted to 14% alpha behind their emoji tile. No blur, no frosted glass, no scrim except the 35% black modal overlay.

**Motion.** Restrained — 0.15–0.2s with a standard ease-out. Colour and opacity transitions on hover, nothing that moves or bounces. Hover on a bordered element darkens the border rather than the fill; hover on a solid green button darkens toward `#0F6E56`. No press-scale.

**Imagery.** There is none. No photography, no illustration, no background pattern or texture in the entire repo. The visual interest comes from type contrast — a serif figure against small sans labels — and from the green accent. Keep social assets on that footing rather than introducing stock imagery.

---

## Content fundamentals

Spanish, Rioplatense — *vos*, not *tú*: "mandale", "gastás", "anotá". Second person throughout; the product speaks to you directly and describes itself in the third person ("Vuelto lo anota"), not as "I".

Sentence case everywhere. The only uppercase is the 11px eyebrow label at +1.5px tracking. The wordmark is lowercase.

Copy is short, concrete, and mechanical about what happens: "Mandale un audio, una foto del ticket o un texto. Vuelto lo anota." Claims are about effort saved, not about insight or intelligence. No exclamation marks, no hype, no metaphor.

Emoji appear in exactly one place: as category markers in transaction rows and category chips (🍔 comida, 🚕 transporte, 💰 sueldo). They are data, not decoration — don't use them in headlines or marketing copy.

---

## Iconography

Feather-style line icons, inlined as SVG in the HTML templates — there is no icon font, sprite, or package dependency. All are 24×24 viewBox, `fill: none`, `stroke: currentColor`, `stroke-width: 2`, round caps and joins. They inherit colour from their container, so tinting means setting `color`. Scale the viewBox, never the stroke.

The 24 line icons the app uses are extracted to `assets/icons/`: menu, grid, dollar-sign, file-text, credit-card, rotate-ccw, tag, download, activity, users, message-square, globe, monitor, layout, alert-triangle, alert-circle, align-left, plus, trash-2, phone, more-horizontal, check, chevron-right, eye. Two filled glyphs break the line-icon rule: `whatsapp` and `send`.

Stroke width is mostly 2, but the app sets `2.5` on small `plus` buttons (12px) and on the large success checkmark — a deliberate compensation for size, not a second icon style.

Every file is copied byte-for-byte from the source markup. One consequence: `globe.svg` is malformed in the repo itself — the path pair renders as a 3px dot flanked by two arcs rather than a globe. It is kept verbatim rather than corrected, since the goal is fidelity; if you need a real globe, take Feather's.

Not extracted: the multi-colour Google "G" mark (third-party), and the 10×10 inline check/cross glyphs used inside the 16px pricing bullets, which are geometry rather than icons.

Two tile treatments: a 40×40 feature tile at radius 10 on the green tint, and a 32×32 category tile at radius 8 on the category hue at 14% alpha (which holds an emoji, not an icon).

Two icons were added from Feather because the app has no equivalent and social assets needed them: `mic` and `camera`. They are flagged additions, not source values.

For other icons the app doesn't have, pull from [Feather](https://feathericons.com) — it's the matching set. Lucide also works and is CDN-available.

---

## Brand marks

**There is no logo file in the repo.** No SVG, PNG, favicon, or OG image exists anywhere in the source. The logo is set live in type: `vuelto`, lowercase, Fraunces 600, letter-spacing −0.5px, with `to` in green. On dark grounds the accent lightens to `#5DCAA5`. Nothing has been drawn or reconstructed here.

The only mark-like assets are circular initial avatars: a green circle with a Fraunces `V` for the bot, and a green-tint circle with DM Sans initials for the user.

### Flagged additions

Three values are derived rather than copied, because the source doesn't cover the case:

- `--green-light` `#5DCAA5` — the wordmark accent on dark grounds. The repo only ever sets the wordmark on light.
- The green-field lockup (all white, no accent) — no accent colour reads against `#1D9E75`.
- `--shadow-modal` — the repo's modal shadow was approximated rather than transcribed.

### Fonts

Fraunces, DM Sans, and DM Mono are loaded from Google Fonts, exactly as the source repo does. No font binaries exist in the repo to copy, so there is no substitution — these are the real families.
