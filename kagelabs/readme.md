# KageLabs Design System

KageLabs is a software company building AI products for real estate, businesses, small businesses and individuals. Its own description of itself: *"we are vanguard of development."* That posture — ahead of the market, unembellished, engineering-first — is what the visual system has to carry.

This repository is the design source of truth: tokens, foundations, reusable primitives and two full-screen UI kits, all built from the brand artwork that was supplied.

---

## 1. Sources used

| Source | What it was | What it gave us |
| --- | --- | --- |
| `kagelabs/` (attached local folder) | Five PNG files: `LOGO KAGELABS (3)…(7).png`. **No code, no styles, no product screens.** | The logo mark, the horizontal lockup, the brand sheet, and the two brand colours (sampled directly from the pixels). |
| `uploads/LOGO KAGELABS (3)…(7).png` | The same five files, uploaded. | Working copies; trimmed and exported into `assets/`. |
| Company description in the brief | One paragraph. | Product lines, audience, tone. |

**No Figma file, no GitHub repository, no codebase, no deck and no product screenshots were provided.** Everything below the brand artwork — the colour ramp beyond black and cream, the type pairing, the spacing scale, the component inventory and both UI kits — is a proposal derived from the marks, not a recreation of an existing KageLabs product. Where something was missing it is flagged inline rather than invented silently.

### Open substitutions (need your input)
1. **Fonts.** No font binaries were supplied. The logo lettering is a fat, slightly flared grotesque; the wordmark under it is a high-contrast serif. Nearest Google Fonts matches are in use: **Archivo Black** (display), **Instrument Serif** (wordmark voice), **Archivo** (UI/body), **JetBrains Mono** (data). Send the licensed families and `tokens/fonts.css` is a one-file swap.
2. **Icons.** No icon set was supplied. **Lucide** (outline, 2px, square caps) is linked from CDN via the `Icon` component, chosen because its hard geometry matches the mark. If KageLabs has an icon library, drop the SVGs into `assets/icons/` and repoint `Icon`.
3. **Imagery.** No photography or illustration was supplied. Image areas in the UI kits are left as labelled placeholders. Nothing was drawn or generated to fill them.
4. **Accent colour.** The artwork is black and cream only. A single deep teal (`#11706A`) was introduced as the accent, plus a warm semantic set. If the brand has a real accent, replace `tokens/colors.css` → `--teal-*`.

---

## 2. Index

**Root**
- `styles.css` — the one file consumers link. `@import` list only.
- `thumbnail.html` — homepage tile.
- `readme.md` — this document.
- `SKILL.md` — Agent Skills front matter for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `surfaces.css`, `motion.css`, `base.css`

**`guidelines/`** — 23 specimen cards: brand (`brand-mark`, `brand-lockup`, `brand-misuse`, `surfaces-pattern`), colours (brand, neutrals, accent, semantic, text roles, inverted zone), type (display, serif, body, mono, scale, eyebrow), spacing (scale, semantic, controls), surfaces (radius, borders, shadows), motion.

**`assets/`** — `logo-mark.png` (transparent), `logo-lockup.png` (transparent), `logo-mark-cream.png`, `logo-lockup-cream.png`, `brand-sheet.png`

**Components** — 17, grouped by concern:

| Group | Components |
| --- | --- |
| `components/core/` | **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**, **Logo** |
| `components/forms/` | **Field**, **Input**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `components/navigation/` | **Tabs** |
| `components/feedback/` | **Dialog**, **Toast**, **Tooltip** |

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage). Each directory has one `@dsCard`-tagged card HTML showing its states.

**Intentional additions.** No source defined a component inventory, so the standard set was authored. Three additions worth naming: **Icon** (wraps the substituted Lucide set so a future swap is one file), **Logo** (renders the supplied artwork so nobody re-draws it), **Field** (label/hint/error wrapper so every form in every product labels identically).

**UI kits**
- `ui_kits/marketing-site/` — homepage: nav, hero, product grid, proof band, footer.
- `ui_kits/estate-console/` — Kage Estate console: sidebar, listings table, listing detail with AI valuation.

Both carry a status note at the top of their README: they are brand-applied references, not recreations.

---

## 3. Content fundamentals

**Voice.** Plain, declarative, engineering-confident. Short sentences. The subject is the work, not the technology. No hype adjectives ("revolutionary", "seamless", "cutting-edge"), no hedging, no exclamation marks.

**Person.** "We" for the company, "you" for the customer. Never "I". The product never speaks in first person — an AI result is attributed to the model, not personified: "Drafted from the deed and three comparables", not "I've drafted this for you".

**Casing.**
- Display headings and section headers: **ALL CAPS** in the display face, tracked tight. `VANGUARD OF SOFTWARE`
- Eyebrows, field labels, button labels, tab labels, badge text: **ALL CAPS**, 11px, `0.14em` tracking. `REQUEST ACCESS` · `ASKING PRICE`
- Body copy, card titles, table cells: **sentence case**. `12 Rua da Prata` · `Include off-market`
- Never title case. Never a full stop at the end of a label.

**Numbers are typographic.** Every figure, reference, percentage, area and timestamp is set in the mono face. `€480,000` · `84 m²` · `LSB-1184` · `CONF 0.86`. This is the system's main texture and it is non-negotiable.

**Emoji: never.** Not in product, not in marketing, not in commit-adjacent surfaces. The icon set covers what emoji would.

**Examples in the house voice**
- Hero: `Vanguard of software` / serif deck: `We build the AI layer for property, business and the paperwork in between.`
- Product card: `Valuations, listings and lead replies drafted from your own data.`
- Empty state: `No valuation on this record yet. The model reads the deed, the certificate and local comparables.`
- Toast: `Listing published` / `Live on 4 portals.`
- Field hint: `EUR, before fees`
- Error: `Enter a valid address` — what to do, not what went wrong.
- Newsletter: `One email a month. Product and nothing else.`

**What to avoid:** "unlock", "empower", "supercharge", "effortless", "journey", em-dash rhetorical flourishes, rhetorical questions as headings, "not X — but Y" constructions.

---

## 4. Visual foundations

**The governing idea** is the logo itself: a rectangle split in half, one half black with cream letters, one half cream with black letters. Hard division, no gradient, no softening. Everything in the system is a variation on that split.

**Colour.** Two brand colours, sampled from the artwork: cream `#F4F0E4` and black `#000000`, with `#1C1B18` as the softer ink used for running text. The neutral ramp is warm and cream-biased — never a blue-grey. One saturated accent (deep teal `#11706A`) carries links, AI attribution and the single accent action per view. Semantic colours are warm and desaturated (`#C13A22`, `#B8801A`, `#4A7A33`) and appear **only** for status, never decoration. Two background colours per surface, maximum: cream and black.

**The inverted zone.** `.kage-invert` on any container flips every semantic token to the black half of the mark. Used for app chrome, stat bands, feature blocks and the AI valuation panel. Because components read the aliases, they re-theme with no extra props.

**Type.** Display is Archivo Black, uppercase, `-0.035em` tracking, `0.86` leading — set large and flush, two or three words per line. Instrument Serif is the wordmark voice: used **once per surface** as a counterweight (a hero deck, a pull quote, a generated summary), mixed case. Archivo carries body at 16/1.5 with a 64ch measure. JetBrains Mono carries all data. Scale is a 1.25 minor third in whole pixels, 10px → 148px.

**Spacing and layout.** 2 → 192px scale, doubling above 16px, with named semantic slots (`--pad-card` 24, `--pad-panel` 32, `--gap-section` 96). Pages cap at 1320px and keep a 2px rule on both outer edges, so content sits inside a frame like the mark does. Sections are separated by rules, not by whitespace alone. Three control heights only: 30 / 40 / 52px; everything in a row shares one.

**Corners.** Zero radius, everywhere. `--radius-full` exists only for radios, status pips and avatars. No pill shapes — even the Switch has a square track and a square knob.

**Borders do the work shadows do elsewhere.** Four weights: 1px hairline (dividers, flat cards), 2px rule (default — cards, controls, tables), 3px heavy (modal frames), 6px frame (the logo frame, the Toast status bar, feature block rules).

**Shadows are hard offsets only** — solid black, down-right, never blurred: 3px on a focused input, 5px on a lifted card, 10px on a dialog. The single blurred shadow in the system is the modal overlay drop, and the single use of blur is the modal scrim (`rgba(28,27,24,.72)` + 6px). No glassmorphism anywhere else.

**Cards** are square, `--surface-card` on 2px ink rule, 24px padding, no shadow by default. `lifted` adds the 5px offset for the one thing on a page that should pop. `inverse` flips to black. Never a rounded card, never a blurred card shadow, never a coloured left-border-only card — the one legitimate coloured left bar in the system is the 6px semantic bar on a Toast.

**Hover.** Fills invert rather than tint: a secondary button goes black-on-cream → cream-on-black; a primary button shifts black → teal; ghost picks up `--surface-muted`; table rows lift to `--surface-raised`. No opacity fades, no drop shadows on hover.

**Press.** The element translates 2px down-right (`--press-offset`), as if pushed into the hard shadow. Never a scale transform, never a colour flash.

**Focus.** 2px solid `--focus-ring` outline at 2px offset. Text inputs additionally darken their rule to black and gain the 3px hard shadow — focus is visible even in a screenshot with no ring.

**Motion.** Short and almost linear: 120ms for hover/focus/colour, 180ms for tabs and disclosure, 280ms for dialogs and drawers. `cubic-bezier(.2,0,0,1)` on anything that enters. No bounce, no spring, no easing longer than 420ms. Everything collapses to 0ms under `prefers-reduced-motion`.

**Transparency and blur.** Used in exactly one place — the modal scrim. Surfaces are opaque; type is never set at partial opacity (use `--text-muted`, which is a real colour with real contrast).

**Texture.** Three motifs, all derived from the mark: the 16px checkerboard (`--pattern-checker`) for empty states and section breaks, the 8px vertical rule field (`--pattern-rule`), and the plain 50/50 black/cream split. No noise, no grain, no gradient meshes, no gradient text.

**Imagery.** None supplied. When it arrives the brief is: cool-neutral, high-contrast, black-and-white or heavily desaturated, architectural subjects, hard-cropped to the grid with no feathering and no rounded corners. Photographs sit full-bleed inside a ruled frame. No protection gradients — put type on a black panel next to the image instead of over it.

**Fixed elements.** The marketing nav is sticky and ruled at the bottom. App chrome (sidebar, top bar) is fixed and the content column scrolls. Toasts stack bottom-right, 24px inset.

---

## 5. Iconography

**System in use:** [Lucide](https://lucide.dev) 0.544.0 — outline, 2px stroke, square caps, 24px grid. **This is a documented substitution:** the brand artwork included no icon set, and Lucide's hard geometry and square terminals are the closest match to the mark's construction. Flag it and replace it if KageLabs has its own set.

**How it is consumed.** The `Icon` component loads a single Lucide SVG per glyph from `unpkg.com/lucide-static@0.544.0/icons/<name>.svg` and renders it as a **CSS mask filled with `currentColor`** — so every icon inherits text colour, inverts automatically inside `.kage-invert`, and needs no icon font, no sprite sheet and no JS library. There is no bundled icon font in this system.

**Sizes.** 16px inline with text · 20px inside controls · 24px in navigation · 28–32px as a feature mark on a product card. Never scale between those.

**Colour.** Icons are monochrome and inherit `color`. The only coloured icons in the system are the four Toast status glyphs, which take the semantic 500 value.

**Usage rules.**
- An icon-only control always has a `label` and a `Tooltip`.
- Icons never replace a word in running copy.
- Never emoji. Never a Unicode dingbat as an icon — the one Unicode character used as a glyph is `×` on a removable `Tag`, because it is typographic, not pictorial.
- Never hand-draw an SVG icon for this system; add the Lucide slug, or add the real asset to `assets/icons/`.

**Glyphs the products lean on:** `building-2`, `sparkles` (AI actions, always), `file-text`, `inbox`, `layout-dashboard`, `chart-no-axes-column`, `sliders-horizontal`, `bell`, `chevron-down`, `chevron-right`, `arrow-left`, `arrow-up-right`, `check`, `x`, `triangle-alert`, `octagon-alert`, `info`, `briefcase`, `store`, `user-round`.

---

## 6. Using the system

Link one file:

```html
<link rel="stylesheet" href="styles.css">
```

Read components off the compiled namespace (run `check_design_system` for the current value):

```js
const { Button, Card, Input, Field, Badge, Logo } = window.KageLabsDesignSystem_d8ed30;
```

Three rules that keep work on-brand: **use the semantic aliases** (`--text-muted`, not `#5C574C`), **keep the radius at zero**, and **set every number in the mono face**.
