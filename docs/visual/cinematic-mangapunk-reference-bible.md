# Moonframe — Cinematic Manga-Punk Visual Reference Bible

**Revision:** 2026-10-26 · **Status:** `reference-direction / not-produced / not-human-approved` · **Source:** four Moonwitness example images uploaded in the conversation. Their original bytes are **not yet committed** to this GitHub repository; hashes and capture metadata are in [the creative-reference contract](../../contracts/moonframe-creative-reference-contract-v0.1.json).

**Core distinction:** **Moonwitness** is the consumer/fictional story brand shown in the pictures. **Moonframe** is the general UI toolkit. Moonpunk is the leading skin illustrated here, not a command to recolor all fifteen skins magenta or replace their semantics. [Design System Bible](../moonframe-ui-design-system-bible-v1.3.md), [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json), and [Asset Brand Bible](../brand/original-asset-brand-bible.md) remain normative.

## 1. Art-direction statement

**Cinematic Manga-Punk Neo-Brutalism:** gritty black-and-chalk foundation; editorial manga ink; irregular scratch and pasted-paper motifs; hand-drawn crowns/stickers; electric fuchsia/cyan/signal-yellow bursts; oversized sharp expressive display lettering; dark neo-Tokyo-like imaginary urban world with a luminous moon; visual drama around, **never instead of**, accessible HTML content.

Visual identity is not a generic dark dashboard with neon buttons. Required distinctive differences are **silhouette**, **scene framing**, **panel construction**, **hierarchy**, **texture placement**, **editorial pacing**, **character/environment composition**, and **micro-decorative marks**. Palette alone cannot satisfy the reference. No claim is made that the provided illustrations or text are distributable Moonframe assets.

### What changes by layer

| Layer | Purpose | Component ownership | Rule |
|---|---|---|---|
| L0 — semantic | text, landmarks, labels, headings, form, charts, data, actions | shared Moonframe primitives + consumer data | required and accessible even with all decoration removed |
| L1 — structural | rail/header/hero/cards/panel geometry/spacing, responsive order | template and skin layout recipes | should remain distinct from other skins in grayscale |
| L2 — ink/tactile | paint strokes, chipped borders, paper tape, scribbles, hatching, crown-like geometry | optional original decorative pack or CSS | never across interactive text, focus, low-contrast data |
| L3 — cinematic | character, city, moon, stage, manga portraits, backdrop | opt-in scene/art slots supplied by consumer or licensed Moonframe sample | meaningful descriptions where informative; performance-conscious layered delivery |
| L4 — operational overlay | status chips, CTA, list content, title, metrics, accessible overlays | live HTML controls and charts | no rasterized navigation, forms or required words |

**Important:** The 4 pictured screens each use different L1 templates over compatible art grammar. A hero/scene component is not a full-screen bitmap substitution for app UI.

## 2. Explicit consumer-only words and symbols

The reference images are Moonwitness consumer material. The following content must remain supplied and controlled by that consumer; it is excluded from Moonframe framework defaults, generic component icons, starter assets, and reusable sample copy:

- The **Moonwitness** name and product identity, including any product or campaign wordmark.
- The **crown** and other symbols whose meaning identifies Moonwitness or its story world. A generic geometric decoration may use independent geometry, but must not reproduce or imply the consumer symbol.
- Named or recognizable fictional characters, their costumes and likenesses, and Moonwitness-specific locations, factions, sacred terms, and story references.
- Song titles, lyrics, slogans, dialogue, narrative copy, and other distinctive reference-image text. Reusable examples must use original neutral sample wording.
- Consumer-specific project names, cards, logos, portraits, and promotional artwork.

This is a scope and provenance boundary, not a finding about ownership or a license. A user-provided reference image does not grant permission to reproduce, distribute, or derive these elements. Use consumer-supplied content only in an explicitly consumer-owned integration with its own rights basis; otherwise use independently created generic material and record its source. The generic Moonframe mark and stable semantic icons remain separate from Moonwitness identity.

## 3. Reference-by-reference visual anatomy

### MWX-REF-001 — Mission Control dashboard, 1672×941

- **Primary:** Moonpunk; secondary traits of Moonpanel (hand-inked panel grid), Moonglitch (monitor/telemetry), Moonriot (angular paint edges).
- **Zones:** narrow left brand/navigation rail; slim top utility/header line; wide large-type mission hero; right large moon, city skyline and anonymous observer; three-zone operational content grid with source cards, circular signal/world concept graphic, status/workflow feed and project artwork tiles.
- **Legibility:** nav active state is a black-ink/pink brush slab; metrics and feed must be DOM with statuses and programmatic labels, not just colored dots.
- **Material:** uneven white chalk/scrape borders, high contrast black field, isolated diagonal neon spritz, oversized custom typographic headers; keep lower-density information regions genuinely readable.
- **Anti-example:** standard shadcn dashboard + background image + pink accent is **not** sufficient.

### MWX-REF-002 — Storytelling home, 1024×576

- **Primary:** Moonpunk composition with Moonzine collage rhythm; Moonpanel framing and Moonhalftone manga print accents.
- **Zones:** high-impact painted masthead and layered manga/city illustration; CTA below or beside accessible hero heading; three editorial media tiles; crew/social constellation graphic; thin filmstrip archive; strong bottom recruitment/CTA.
- **Visual cadence:** image/text alternation, paper-cut torn-edge labels and energetic handwritten annotations, but key navigation and button labels remain live readable elements.
- **Anti-example:** a basic hero with a linear 3-card grid and gradient is not the target unless it reproduces the collage/grid composition in non-color dimensions.

### MWX-REF-003 — Tall campaign poster, 682×1024

- **Primary:** Moonsmash; allowed secondary Moonpunk and Moonzine graphic treatments.
- **Zones:** impact heading; full-bleed central band/fictional performance artwork; layered comic caption strips and dynamic audience silhouette; irregular note-like ephemera around edges.
- **Special separation:** this is a **poster composition** and a candidate for a campaign/poster editor template. It should never become a mandatory form, enterprise grid or universal dashboard skin.
- **Intellectual-property rule:** do not infer rights to quoted lyrics, original artists, third-party logo silhouettes, celebrity likenesses or recording art from the picture. Use original neutral sample text and original artwork for reusable template demos. If preserving editorial display text in a promotional image, provide equivalent accessible live text/description.

### MWX-REF-004 — Enter the Shadow sign-in, 1024×576

- **Primary:** Moonpunk, restrained in operational part; secondary neon futurism in illustration.
- **Zones:** split screen. Left = Moonwitness product brand, rough ink box, full labeled email/password form, functional remember/recovery, strong brush primary CTA. Right = luminous moon/cityscape/hooded observer art scene.
- **Core lesson:** an intentionally loud identity can still contain a calm, trustworthy, accessible form. Keep fields inside L0/L1 semantic container, **not** painted into the art.
- **Mobile:** collapse cinematic art beneath form or replace with a reduced decorative masthead; form comes first in DOM reading/focus order.
- **Demo safety:** avoid implying sign-in/OAuth succeeded without actual consumer authentication integration.

## 3. Design language: concrete reusable rules

**Canvas and black:** use ink-black panels with controlled chalk-white negative space; break uniformity through geometric borders, corner scratches and opaque shapes—not through noisy patterns under paragraphs.

**Neon:** fuchsia for attention/selected accents, electric blue for technical/world signals, yellow for marginal note/crown/CTA emphasis, optional violet for editorial detail. These are **reference artwork suggestions**, not universal CSS token values; light mode and other skin palettes remain free to differ. Semantic success/warning/danger must retain accessible labels and not borrow palette meaning.

**Border/roughness:** separate accessible CSS border/outline hit area from decorative chipped PNG/SVG scratch; active focus ring never becomes scribbled or partially erased. Prefer crisp geometry plus lightweight optional overlay; reduce noise near form/text.

### InkFrame — accessible border with optional texture

InkFrame is a visual treatment for a live HTML container, not an image-backed substitute for the container. Keep the structural border as a normal CSS border (or an equivalent shape with a solid fallback) so the edge remains perceivable when decoration is disabled, assets fail to load, or forced-colors mode replaces author colors. Any chipped-ink texture is a separate, optional decorative layer: it must not cover text, control hit areas, or keyboard focus, and may be removed without changing geometry, semantics, or state.

The no-texture fallback uses the same layout and a continuous, sufficiently contrasted border. Do not make a decorative texture the sole indicator of grouping, selection, error, or focus; those meanings belong to live content and semantic state styling. This is a design recipe only; it does not introduce a runtime component, token, asset, or new contrast claim.

### TornTape — separate backing from live caption

TornTape is an optional decorative backing for a caption, label, or short callout. Keep the wording in ordinary selectable HTML text above or alongside the backing; the SVG/image contains only the paper shape and texture, never baked-in interface copy. The backing must not determine the caption's accessible name, meaning, or interaction state. Hide a purely decorative backing from assistive technology, preserve readable contrast in both themes, and keep a plain CSS/background fallback when artwork is disabled, unavailable, or suppressed by forced colors. Do not rotate or clip the text itself to imitate the paper edge. This is an art-direction recipe, not a runtime component or asset-rights grant.

### GraffitiDisplay — expressive styling on live text

Apply expressive display treatment to a real heading or label in selectable HTML; never bake required words, navigation, or control labels into an image. Keep the text content and heading level meaningful without the decorative font, and preserve a readable system-font fallback when a font is unavailable or not licensed for the intended distribution. Confirm the chosen font's license and glyph coverage for the content languages before bundling it. Allow natural wrapping at narrow widths, and keep skew, clipping, texture, or paint marks on a separate decorative layer that cannot obscure glyphs or focus. This recipe does not select or license a font and does not introduce a runtime component or token.

**Typography (at least 4 roles):** (1) heroic irregular expressive brush/splatter display, (2) condensed editorial labels/stickers, (3) readable long body sans, (4) monospaced telemetry/counts. Do not use Impact everywhere or convert headings to unselectable bitmap words. Specify font license, glyph coverage (ID/EN), fallback metrics and viewport wrap. Skew/rotation allowed only in non-interactive decoration, not input labels/focus surfaces.

**Illustration direction:** city + moon = cinematic setting; hoodie/character = a consumer-provided story figure or neutral anonymous sample; manga faces are allowed **where the consumer explicitly chooses**, not mandatory library identity. Avoid borrowed manga IP and photographic artist/celebrity likenesses. Make separate foreground/midground/background art layers if justified by visual proof and measured performance.

**Icon vs mark vs sticker:** a semantic icon always means the same action; a crown is a Moonwitness brand/story symbol, not the generic button icon for all Moonframe consumers. Skin decorative marks are reusable motifs; edition badges are labels, not corporate logos. Main Moonframe mark stays one brand.

**Panel system:** semantic `Card` keeps behavior across skins. Moonpunk may wrap it with offset ink frame, textured border and label tape; Moonpanel uses strict rectangles/gutters; Moonzine uses paper overlap. These are separate recipes. Dense DataTable always prioritizes alignment and readability.

**Motion:** subtle microfeedback only; visual energy should survive when motion is off. No flashing scanlines, aggressive page scroll jitter or essential meaning dependent on animations/SFX. Honor reduced-motion, forced colors, and low-power contexts.

## 4. Breakpoint contracts (proposed reference fixture targets, not new token defaults)

| Context | Wide desktop (1440) | Tablet (768) | Phone (360) |
|---|---|---|---|
| Mission control | rail + hero + multi-column operation grid | collapsible rail + 2-column workcards + simplified central visual | single content-first column, text cards then optional scene; no embedded fixed screenshot |
| Story landing | illustration-led hero and asymmetrical story collage | hero stacked/mixed, 2-column tiles | headline/CTA first; media tiles vertical; timeline horizontal scroll only within labelled region |
| Campaign poster | aspect-preserving portrait canvas plus separate accessible text | responsive poster preview, readable controls outside canvas | poster fit preview or zoom, accessible transcript/details outside art; do not overflow controls |
| Auth | left form/right atmosphere | form prominent, art subordinate | labeled fields + CTA first; artwork omitted or short banner; keyboard/zoom remain usable |

**Original screenshot matching:** never declare pixel-perfect parity before reference images are ingested, normalized for viewport/fonts, and reviewed against runtime screenshots. Art/image matching and semantic control matching are separate gates.

## 5. Asset inventory and split between generic and consumer-specific

| Asset candidate | Core reusable? | Skin pack? | Moonwitness consumer only? | Suggested implementation |
|---|---|---|---|---|
| Search/trash/menu/warning icons | yes | optical frame variant only | no | stable SVG currentColor glyph |
| Generic rough frame / ink scratch | optional | Moonpunk/Moonzine-specific | no | lightweight CSS + safely sourced vector |
| Torn paper tape and sticker shapes | optional | Moonzine/Moonpunk | no | SVG mask/foreground under text, not text image |
| Graffiti display wordmark | no | sample typography recipe | actual Moonwitness lettering | licensed original wordmark asset in consumer |
| Crown symbol with product meaning | no | can inspire generic geometric motif | branded/story crown belongs in consumer | consumer-provided original asset |
| Neon city/moon/hooded observer | no generic core | optional original illustrative demo | actual narrative scene belongs in consumer | layered consumer asset with responsive derivatives |
| World-network radial diagram | possible generic visualization | styling recipe | content graph and actual relationships in consumer | semantic SVG/chart with accessible data table |
| Audio/performance poster scene | no | optional campaign template specimen | campaign narrative in consumer | standalone media/canvas with accessible transcript |
| Metrics, workflows, auth forms | yes | skin-specific visual layout | real data/auth behavior in consumer | shared components and typed adapter seams |

## 6. Common failed implementations to reject

1. Same gray card layout in all 15 skins with only fuchsia/cyan CSS variables changed.
2. Full dashboard screenshot used as a single fixed background while text/form buttons are invisible to keyboard or assistive technology.
3. A handwritten font applied to long table values or body copy at the expense of readability.
4. AI-generated neon art assigned to every skin—including Moonledger and Classic—destroying unique grammars.
5. Poster title/lyrics or character IP lifted from the reference into public npm package assets.
6. Infinite icon pack before semantic mapping, optical sizing and rights approval.
7. Artistically strong desktop image that shrinks and crops all controls on mobile.
8. Screenshot-generation “PASS” used in place of named human mockup comparison.
9. Fake owner signoffs or hardcoded asset SHA without the original file.
10. More gradients/splashes used to conceal missing hierarchy, uneven spacing or poor interaction.

## 7. Cross-file execution route

- [Creative-reference machine contract](../../contracts/moonframe-creative-reference-contract-v0.1.json): four uploaded reference IDs/hashes, four screen structures, 15-skin classification.
- [Visual subatomic backlog](../backlog/visual-fidelity-subatomic-tasks.md): existing 292 tasks; do not duplicate them.
- [Reference-specific subatomic backlog](../backlog/reference-mockups-subatomic-tasks.md): deep breakdown of each pictured screen, brand-specific exclusions and new tasks.
- [Brand Bible](../brand/original-asset-brand-bible.md): brand ownership, provenance and licensing authority.
- [QA Bible](../qa/accessibility-visual-qa-bible.md): same-content capture/human verdict authority.
- [Skin Lab fixtures](../qa/skin-lab-fixtures.md): fixed content and viewport inputs.

**State now:** reference classification and task planning only. Artwork production, logo approval, real visual similarity, and 105 human pair-review gates remain pending.

---

## 8. Default Moonpunk acid-lime vs Moonwitness magenta: avoid a palette-only patch

The *existing* Moonpunk runtime uses acid-lime as its signature default accent. The pictured Moonwitness application uses magenta/cyan/yellow accents. To preserve one reusable Moonpunk grammar, a separately controlled and contrast-tested [consumer brand palette overlay](../../contracts/moonframe-consumer-brand-overlay-contract-v0.1.json) is proposed. This is **not** a new skin, an implemented React prop, a demand to set pink globally, or a way to bypass status/focus/contrast semantics. Structural Moonpunk (ink framing, offset print, expressionistic display and layout) must be retained even when the consumer uses a different approved brand accent. Release only after light/dark/forced-colors/SSR proof.
