# Moonframe UI — Design System Bible

**Document ID:** MF-BIBLE-001  
**Version:** 1.3.0 — repository edition  
**Status:** Specification; production implementation and asset creation have not started  
**Last reviewed:** 2026-10-25  
**Working package:** `@moonframe/ui` (verify scope/package availability before publishing)  
**Target stack:** React + TypeScript + Tailwind CSS v4, pending repository audit

> **North star:** One behavioral system. Fifteen distinct visual grammars. Thirty baseline appearances. Skin switching must change the design—not merely the colors.

This Bible is the primary design and engineering contract. It supersedes earlier concept notes wherever they conflict. It is a specification, not evidence that components, tokens, artwork, audio, or tests already exist.

## 1. Product definition

Moonframe is a first-party UI design system for Moon ecosystem apps. It comprises:

1. **Design language** — semantic tokens, type, rhythm, geometry, density, component recipes, layout grammar, motion, and decorative language.
2. **Theme engine** — runtime resolution of skin, Light/Dark/System, density, motion, and contrast preferences.
3. **Component library** — shared React components with consistent API, behavior, accessibility, and state semantics.
4. **Premium blocks and templates** — reusable page patterns and starter layouts; these are not product business logic.
5. **Skin Lab** — internal page to compare all baseline appearances, common components, states, breakpoints, and accessibility results.
6. **Original asset packs** — first-party vectors, marks, logos, textures, raster exports, icon families, illustrations and optional sound feedback, governed by provenance and licensing metadata.

### It is not

- Fifteen separate component libraries or fifteen forks of the same component.
- A color-theme selector that leaves every layout and component treatment unchanged.
- The Moonships infrastructure engine, Moonradio messaging engine, an RPG engine, or an ERP/accounting domain engine.
- Official shadcn/ui or a guarantee of parity before an upstream baseline has been audited and pinned.
- A promise that visual style may override usability, semantics, keyboard behavior, accessibility or performance.

## 2. Locked decisions

- The first catalog contains **exactly 15 stable skin IDs**.
- Each skin defines **Light** and **Dark**: 15 × 2 = **30 baseline appearances**.
- `system` resolves to Light or Dark according to the OS/browser preference. It is a mode preference, not another skin.
- Skin, appearance mode, density, motion preference and contrast preference are independent axes.
- Components share behavioral semantics and public APIs. Skins may supply visual recipes, asset mappings, and layout composition strategies.
- Classic is a shadcn-inspired visual reference, not source compatibility or a product affiliation claim; see the [dated baseline](research/classic-baseline.md).
- Moonquest contains optional game-oriented presentation patterns only; game rules and state belong to the consuming app.
- Moonledger contains a professional, compact ERP visual language only; accounting and business rules belong to the consuming app.
- Heavy decorative assets, audio and advanced effects must be optional and lazily loaded where practical.
- Never mark a component/skin as production-ready based on a mockup or compilation alone.

## 3. The design laws

### Law 1 — Skin means a complete visual grammar
A skin must specify page composition, shell/navigation, geometry, typography, surface construction, component recipes, data presentation, media treatment, motion signature and decoration policy. Color is only one dimension.

### Law 2 — Behavior is invariant
A button stays a button. Dialog focus handling, keyboard semantics, form validation, labels, disabled/loading semantics and screen-reader announcements must not change between skins.

### Law 3 — Shared primitive, approved visual recipe
Prefer one semantic component API with controlled recipe differences. If a skin requires a different DOM or interaction model, document it as an architecture decision and prove why a recipe cannot satisfy the requirement.

### Law 4 — Semantic tokens first
Product code should use semantic tokens such as `surface.canvas`, `text.primary`, `border.subtle`, `action.primary` and `status.danger`. Do not scatter raw hex values across components. Skin-specific raw values belong in the token source.

### Law 5 — Density is not a skin
Compact/comfortable/spacious is a separate preference. Moonledger may default to compact density; it must not silently force all consumers to compact. Respect target size and accessibility constraints.

### Law 6 — Decoration has a budget
Texture, grain, halftone, glitch, glow, blur, metallic gradients and brush marks must never obscure text, control boundaries, data, focus indicators or error states. Offer a reduced-effects path.

### Law 7 — Original assets need provenance
Each first-party asset must have an owner/creator, source/provenance, license/status, format, intended context, accessibility description where relevant, generation/editing notes when applicable, and approval status.

### Law 8 — Audio is opt-in
No audio on page load. Respect mute and reduced-motion/user preferences; audio feedback is supplementary, volume-limited, short, and never the only communication channel. Provide a global off switch and sensible event throttling.

### Law 9 — Fail safely
Unknown skin → Classic. Unknown mode → System. Invalid token reference → build/validation failure in CI, not a silent production surprise. A failed asset load must leave the interface usable.

### Law 10 — A green build is not a release
Release needs typecheck, lint, unit/integration tests, accessibility checks, token coverage checks, visual review, keyboard checks, consumer build and documented limitations.

## 4. The 15 skin catalog and unique visual territories

These territories are exclusive art-direction briefs. Each pairwise comparison must evaluate the actual rendered result; names and color alone do not prove uniqueness.

| ID | Skin | Composition & geometry | Signature language | Must not become |
|---|---|---|---|---|
| `moonpunk` | Moonpunk | Strong blocks, offset frames, asymmetric dashboard zones | Acid-lime punk, manga ink, thick outlines, hard offset shadows, ripped-edge accents | Generic neon dashboard |
| `moonriot` | Moonriot | Angular split panels, sharp diagonals, deliberate disruption | Riot/editorial cyberpunk, red signal marks, cut-up typography | Moonpunk recolored red |
| `moonzine` | Moonzine | Magazine spreads, collage grids, uneven editorial rhythm | Paper artifacts, pasted labels, photocopy grain, editorial image crops | A normal card grid with stickers |
| `moonhalftone` | Moonhalftone | Manga panel pacing, ink-heavy framing, raster fields | Monochrome ink, screentone, dot fields, bold negative space | Moonzine without color |
| `moonglitch` | Moonglitch | Telemetry rails, terminal bands, data-first zones | Signal interruption, scanlines, diagnostic glyphs, controlled digital distortion | Decorative cyberpunk without utility |
| `moonsmash` | Moonsmash | Impact zones, radial composition, oversized focal points | Kinetic bursts, explosive transitions, onomatopoeia-inspired display typography | Moonpunk with orange accents |
| `moonink` | Moonink | Organic composition with hand-drawn directional flow | Brush ink, expressive strokes, illustration-led storytelling | Generic blue SaaS UI with a brush image |
| `mooncrash` | Mooncrash | Mechanical plates, stacked utility sections, hazard zones | Industrial marking, numbered plates, caution stripes, rugged controls | A hazardous theme that sacrifices clarity |
| `moonpanel` | Moonpanel | Strict modular grid, visible frames and panel sequencing | Comic-panel hierarchy, clear gutters, bounded content modules | Moonhalftone with rectangular cards |
| `moonscrawl` | Moonscrawl | Sketchbook canvas, notes in margins, loose annotations | Draft marks, hand-drawn arrows, imperfect lines, exploratory composition | Randomly messy or unreadable UI |
| `moonraw` | Moonraw | Exposed structure, rigid geometry, minimal decoration | Raw brutalism, plain surfaces, visible divisions, restrained type | A generic stripped-down theme |
| `moonchrome` | Moonchrome | Layered reflective surfaces and precise contours | Metallic edges, controlled spectral highlights, futuristic material response | Glossy glassmorphism everywhere |
| `classic` | Classic | Familiar application shell, restrained surfaces, conventional hierarchy | Shadcn-style baseline, predictable controls, limited decoration | Claiming to be the official shadcn product |
| `moonquest` | Moonquest | Adventure HUD, quest journal, inventory and progression panels | RPG framing, rarity tiers, progress/XP visualization, map/log motifs | Game mechanics embedded in UI primitives |
| `moonledger` | Moonledger | Dense workbench, persistent filters, tables, split panes | Professional ERP, compact hierarchy, precise alignment, restrained accents | Tiny controls, illegible tables, or playful game styling |

### Pairwise uniqueness gate

There are 15 × 14 / 2 = **105 unique skin pairs**. Record an evaluation for every pair. At least four of these eight non-color dimensions must differ materially (target five or more for neighboring concepts):

1. Page/shell composition.
2. Geometry and shape language.
3. Typography hierarchy and display treatment.
4. Surface construction, borders, elevation and framing.
5. Data presentation and navigation.
6. Image/texture/illustration treatment.
7. Component visual recipes.
8. Motion and transition signature.

This numeric threshold is a review heuristic, not a proof of originality. Reviewers must additionally confirm that each skin remains recognizable in grayscale and with artwork/effects removed. Unreviewed pair status is `not-reviewed`, never `pass`.

## 5. The appearance model

The resolved UI state is a tuple:

`skin × appearance × density × motion × contrast × viewport`

- **Skin:** one of the 15 stable IDs.
- **Appearance:** `light`, `dark`, or `system`; system resolves to light/dark.
- **Density:** `compact`, `comfortable`, or `spacious`.
- **Motion:** `full` or `reduced`, with operating-system preference honored by default.
- **Contrast:** `normal` or `high`; OS forced-colors behavior must be respected.
- **Viewport:** responsive layout state, not a theme.

Persist user preferences safely. Handle invalid stored values, server rendering, hydration, no-JavaScript fallback and flash-of-wrong-theme. Use explicit root attributes (for example `data-skin`, `data-mode`, `data-density`, `data-motion`, `data-contrast`) and a single resolution function. Never construct unbounded Tailwind class names dynamically.

## 6. Token architecture

Use one source-of-truth token dictionary with typed tokens and references/aliases. Generate runtime CSS custom properties and framework integration from that source. Follow a DTCG-compatible model where practical, after validating toolchain support.

### Token layers

1. **Primitive/reference:** raw palette, base typography scales, base dimensions, radii, timings and shadows.
2. **Semantic/global:** canvas, surface levels, foregrounds, primary/secondary actions, subtle borders, focus, selection, status colors, overlays, data visualization colors.
3. **Skin visual grammar:** skin-only display type, geometry, border recipe, texture, artwork, shadow/material and layout recipes.
4. **Mode mapping:** explicit semantic values for each skin's Light and Dark mode.
5. **Component tokens:** only for meaningful, approved exceptions. Do not mint a token for every CSS declaration.
6. **Runtime preferences:** density, reduced motion and high contrast.

### Required token families

- Color: canvas/surface/elevated/inverse, text, muted text, action, border, focus, selection, overlay, status, charts, code.
- Typography: family, size, weight, line-height, letter-spacing, paragraph width, display scale and numeric/data styles.
- Spacing and layout: spacing scale, page gutters, section rhythm, container widths, grid gaps, breakpoints.
- Sizing: control heights, icon sizes, avatar sizes, touch targets, form row heights.
- Geometry: radius, border width/style, outline width/offset, divider behavior.
- Elevation/material: shadows, surface layers, glow, grain intensity and blur budgets.
- Motion: duration, easing, distance, stagger, enter/exit recipe and reduced-motion alternative.
- Layering: documented z-index scale for sticky UI, dropdowns, popovers, modals, toasts and tooltips.
- Density: spacing and sizing aliases that preserve readability and target requirements.
- Component semantics: deliberate tokens for high-value components only.
- Asset references: logo, icon, texture and illustration IDs—never embed binary data in CSS tokens.

### Token rules

- Tokens need stable names, types, descriptions, owners and validation rules.
- Avoid cyclic aliases, undefined references and mode holes.
- Every required semantic token must resolve for all 30 baseline appearances.
- A skin may deliberately share a token value with another skin, but its full visual grammar cannot collapse to palette-only differences.
- High-contrast/forced-colors and reduced-motion modes may override visual recipes.
- Final numeric values and font licenses require an approval pass; concept colors are not production-approved values.

## 7. Component system and premium catalog

Organize by user task and interaction type. Keep components tree-shakeable and importable without the entire library.

### Foundations
- ThemeProvider, SkinProvider/ThemeController, SkinSwitcher and AppearanceSwitcher.
- Design token utilities, responsive container, Stack, Inline, Grid, Divider and VisuallyHidden.
- Icon interface, Logo/BrandMark interface, Motion primitives, TooltipProvider.
- Error boundary and optional feedback preference context.

### Actions and navigation
- Button, IconButton, ButtonGroup, Link, MenuBar, Breadcrumbs, Tabs, Pagination.
- Sidebar, AppShell, Topbar, CommandPalette, NavigationRail, ContextMenu.
- DropdownMenu, Menubar, NavigationMenu and keyboard-friendly mobile navigation.

### Forms and input
- Input, Textarea, Label, Field, Fieldset, FormMessage, Checkbox, RadioGroup, Switch.
- Select, Combobox, Autocomplete, SearchInput, MultiSelect, DatePicker, DateRangePicker.
- NumberInput, CurrencyInput, Slider, SegmentedControl, FileUpload, OTP input.
- Form-level validation summaries and pending/submitting states.

### Feedback and overlays
- Alert, AlertDialog, Dialog, Drawer, Popover, Tooltip, Toast/Toaster, Sonner-like notifications.
- Progress, Spinner, Skeleton, EmptyState, ErrorState, OfflineState, Confirmation flow.
- StatusBadge, Tag, Kbd, Callout and non-color-only validation indicators.

### Data and information
- Card, StatCard, Avatar, AvatarGroup, Badge, Chip, Accordion, Collapsible.
- Table, DataTable, sortable headers, column visibility, row selection, pagination.
- FilterBar, FilterBuilder, saved views, bulk action toolbar, density switcher.
- Timeline, ActivityFeed, TreeView, CommandList, Calendar, Kanban primitives.
- Chart containers and accessible chart legends/summary alternatives; chart engine stays replaceable.

### Specialized optional modules
- **Moonquest:** quest card, reward/rarity badge, inventory slot, XP/progression bar, journal/map frame. Presentation only; consumer owns rules and save state.
- **Moonledger:** dense data table presets, filter workbench, split detail pane, batch action toolbar, audit-log presentation. Consumer owns ERP data and accounting.
- **Operations:** service health, resource metric, event stream and log viewer presentation. Consumer owns monitoring data and permissions.

### Component contract (required for every exported component)

- Public name, purpose, export path and owner.
- Typed props; variants/sizes; controlled/uncontrolled rules where relevant.
- Default, hover, active, focus-visible, disabled, loading, invalid, selected, empty, error and pending states as applicable.
- Keyboard interactions and screen-reader labels/announcements.
- Token/recipe mapping across all 15 skins and both modes.
- Responsive behavior and overflow strategy.
- Test IDs/interaction test plan without coupling the API to test implementation.
- Documentation example, design specimen, known limitations and semver impact.
- Explicit decision whether it belongs in core, optional module, template/block, or app code.

## 8. Premium blocks and templates

Blocks are copy/composition-level patterns built on components; templates combine blocks into page shells. They must not hide business logic.

### Core templates
- Application shell: sidebar/topbar/content, compact navigation rail and mobile navigation.
- Dashboard: KPI row, trend area, activity feed, status panel and filters.
- CRUD list/detail: search, filter, saved views, table, bulk actions, pagination and detail drawer.
- Resource detail: tabs, metadata, activity, health/history and safe destructive actions.
- Settings workspace: grouped settings, form validation, unsaved-change confirmation.
- Analytics/reporting: filters, charts, data table, date ranges and export affordances.
- Auth/layout examples only if required by consumer; no hardcoded auth provider.
- Empty/error/loading/offline variants for every primary template.

### Specialist templates
- Operations command center (Moonships-inspired).
- Communication workspace (Moonradio-inspired).
- ERP workbench (Moonledger).
- RPG dashboard / quest journal / inventory (Moonquest).
- Editorial board, manga library or content workspace (Moonzine/Moonpanel).

Template acceptance requires narrow-screen behavior, realistic content, long text, loading/empty/error data, keyboard operation, and verification in selected skins. Templates may opt into a skin's composition grammar; they must not force every app to use the same page layout.

## 9. Original asset system

All 15 skins must receive independent identity work. Do not recolor one generic logo 15 times and call them original.

### Per-skin asset categories (planned)
- Primary symbol/brand mark as editable SVG.
- Wordmark and compact mark where relevant.
- App icon and favicon source/exports.
- Transparent raster exports (PNG at declared sizes); optimized WebP/AVIF only for appropriate imagery.
- Unique decorative pattern/texture language (SVG or raster as suited).
- Skin-specific illustrations or ornamental motifs where useful.
- Component-level icon mapping only where the generic functional icon is insufficient.
- Preview specimen and asset manifest.

### Asset rules
- SVG is the preferred source for scalable vector symbols; validate it and prohibit untrusted inline SVG/script payloads.
- PNG is an export format, not the canonical source when the asset is vector.
- Functional icons use a consistent icon API and accessible labels; decorative icons are hidden from assistive technology.
- Avoid using a branded manga illustration as the only way to convey state.
- Every file records stable asset ID, path, skin, format, dimensions/viewBox, light/dark usage, intended background, creator/provenance, license, optimization, accessibility treatment, status and checksum.
- No copyrighted characters, copied brand marks, unlicensed fonts, or internet-scraped art without explicit rights.
- Generated work still requires originality review and documented tool/prompt/editing provenance where applicable.
- Keep asset packs optional and lazy-load large files; provide fallback if assets fail.

### Sound and SFX contract (planned, off by default)
- Small, original, cohesive feedback pack per chosen skin or pack-level sound profile.
- Event taxonomy: success, warning, error, notification, interaction/confirm, optional game reward. Never sonify every click by default.
- Sound must be user-enabled by a deliberate gesture; no playback on initial render.
- Global mute, volume control, per-category preference, event cooldown, dedupe and safe fallback when audio is unavailable.
- Never encode essential status solely with sound; pair with visual text/icon and accessible announcement.
- Respect user expectations for reduced stimulation, accessibility settings and browser autoplay rules.
- Optimize duration/encoding/size and lazy-load only after consent. Maintain a source file, web export, metadata and license/provenance for each sound.
- Do not build/ship sound files until the product team approves the interaction sound policy.

## 10. Technical architecture

Suggested logical separation (adapt after repository audit):

```text
packages/
  ui/                    # shared components and public API
  tokens/                # canonical source + generated CSS/token exports
  themes/                # 15 skin recipes and 30 semantic mode maps
  assets/                # manifests and optional per-skin assets
  icons/                 # functional icon facade and custom icons
  motion/                # optional motion primitives
  sound/                 # optional, opt-in sound controller and packs
  blocks/                # reusable premium compositions
  templates/             # page-level shells and examples
apps/
  skin-lab/               # appearance switcher and verification gallery
docs/
  ...                    # Bible, contracts, guides, ADRs, migration notes
contracts/
  ...                    # machine-readable token/theme/skin contracts
```

This is a target map, not a command to create every package immediately. Begin with the smallest package boundary that fits the repository. Split packages only when ownership, dependency, release or bundle-size reasons justify it.

### Runtime resolution order
1. Validate stored preferences.
2. Resolve requested skin, falling back to Classic if unknown.
3. Resolve `system` to the active Light/Dark preference without overwriting the user's selected mode.
4. Apply density/motion/contrast and OS forced-colors handling.
5. Apply semantic token map and approved skin recipes.
6. Load optional visual/audio asset packs only if required and allowed.
7. Render stable default styles before hydration; prevent avoidable theme flash.
8. Report invalid preference/asset fallback in development diagnostics.

### Dependency principles
- Audit actual repo versions before choosing primitives or migrating.
- Run a spike on Dialog, Select/Combobox and Dropdown/Menu before choosing or replacing Radix, Base UI or React Aria.
- Keep interactive primitives replaceable behind Moonframe's public API.
- Prefer explicit exports, tree-shakeable modules and no global side effects.
- Avoid dynamic class generation that cannot be statically detected by Tailwind.
- Support CSS variables and consumer override slots without requiring access to private internals.
- Do not ship optional art, charts, game widgets or audio in the core entry point.

## 11. Accessibility, safety and performance

- Target WCAG 2.2 AA as the baseline; evaluate relevant criteria for every component and appearance.
- Full keyboard navigation, visible focus, logical tab sequence, focus restoration and escape behavior for overlays.
- Label association, error summary, status announcements and useful accessible names.
- Contrast measured for text, controls, borders and focus—not judged by eye.
- Never rely on color, texture, sound or animation alone to convey meaning.
- Respect `prefers-reduced-motion`, forced-colors/high-contrast and zoom/reflow behavior.
- Support screen readers on core templates and data tables.
- Avoid excessive shadow, blur, large texture and animation costs; maintain useful behavior without decorative assets.
- Make touch target decisions based on WCAG criteria and context; compact ERP mode cannot shrink targets blindly.
- Sanitize externally supplied SVG/assets and avoid unsafe HTML injection.
- Honor user preference and browser policy for audio; no autoplay.
- Document data/telemetry behavior; library components must not silently phone home.

## 12. Test and review strategy

### Automated
- Type checking and lint.
- Token contract validation: completeness, token types, alias resolution, no cycles, mode coverage.
- Theme manifest validation: exact 15 skin IDs, two baseline modes per skin, valid fallbacks.
- Component unit and interaction tests.
- Keyboard and accessibility automation plus manual assistive-technology checks for critical patterns.
- Visual regression with stable fonts/viewports and reviewed baselines.
- Consumer build/tree-shaking/package export checks.
- Bundle-size budgets and optional asset/audio lazy-load checks.
- License/provenance manifest validation.
- Link/docs examples and schema validation.

### Visual matrix
- Every skin × Light/Dark: 30 baseline appearance checks.
- Every component family: default plus relevant focus, hover, active, disabled, loading, invalid, empty and error states.
- At minimum, representative desktop, tablet and mobile widths.
- Risk-based cross-products for density, reduced motion, high contrast/forced-colors, and representative long/localized text.
- Grayscale and decoration-off reviews for every skin and pairwise overlap scoring for all 105 pairs.
- Classic/Moonpunk/Moonzine/Moonledger first as the four divergent prototype grammars; do not extrapolate completion to remaining skins.

### Human review
- Design review for distinctive grammar and visual hierarchy.
- Keyboard review and manual screen-reader smoke test.
- Product consumer review and migration check.
- Asset originality/license review.
- Release checklist with known issues, browser support and rollback notes.

## 13. Skin Lab

The internal Skin Lab must provide:

- Selector for 15 skins and Light/Dark/System.
- Density, reduced-motion and high-contrast/forced-colors controls.
- Same reference screen and same realistic data across skins.
- Gallery of component states, forms, data tables, overlays, navigation and empty/error/loading states.
- Viewport controls, long text, localization/RTL specimens and overflow cases.
- Grayscale and decoration-off switch for uniqueness review.
- Pairwise review matrix for 105 skin pairs with notes, reviewer, evidence and status.
- Visual baseline approval and links to tests/issues.
- Clear distinction between generated preview, automated pass and human-approved release.

## 14. Release gates

A release cannot claim a higher status until all gates for that status are complete.

### Gate A — Contract ready
- Skin names and IDs frozen.
- Token dictionary, theme contract and component contract schema validated.
- Four prototype skins have approved non-color grammars.
- Primitive-provider decision recorded with evidence.
- Package boundaries and support policy recorded.

### Gate B — Foundation
- Token generator/validation works.
- Theme switching and persistence pass in SSR/client scenarios.
- Classic and Moonpunk render in Light/Dark from the same component API.
- First component families pass interaction and accessibility checks.

### Gate C — Skin system
- All 15 skin grammars implemented and reviewed.
- All 30 baseline appearances render.
- All 105 pairwise checks have recorded outcomes; unresolved failures block certification.
- Token coverage, asset fallback and reduced-motion behavior pass.

### Gate D — Premium package
- Component and block catalog meets the agreed MVP manifest.
- Templates have realistic loading/empty/error and responsive states.
- Docs, examples and consumer integration test pass.
- Optional modules are tree-shakeable/lazy-loaded.

### Gate E — Release candidate
- CI green, no unresolved critical/high accessibility or functional defects.
- License/provenance checks pass.
- Bundle budgets and target browser matrix pass.
- Migration/versioning/changelog documented.
- Release owner signs off; repository records tag and release notes.

## 15. Governance, versioning and documentation

- Skin IDs are stable API. Renaming/removing a skin is a breaking change.
- Public component props/exports, token names and theme contract schema are versioned.
- Every material decision gets an ADR: context, options, decision, consequences and revisit trigger.
- Each skin has a single visual owner and an asset provenance record.
- Each component has an owner, docs, tests, API notes and adoption status.
- Changelog distinguishes added, changed, deprecated, removed and migration required.
- Mark statuses truthfully: `proposed`, `specified`, `implemented`, `tested`, `reviewed`, `released`.
- AI agents must read this Bible, the contracts and the exact assigned issue before implementation; they must not invent new skin IDs or token namespaces.
- Do not have multiple agents editing the same contract or component file concurrently without an explicit integration plan.

## 16. Open decisions requiring repository audit

1. Actual runtime/framework/package-manager versions and workspace structure.
2. Exact shadcn generation/style/commit for Classic.
3. Current primitive provider(s) and whether migration is justified.
4. Minimum supported browsers/React version.
5. Font selection and license approval.
6. Whether public registry/CLI is part of v1 or deferred.
7. Whether Sound Pack ships in v1, later, or remains a documented extension.
8. Target package scope/name availability before publishing.
9. Final numeric token values after visual/accessibility evaluation.
10. Package release strategy: single package first vs split packages.

## 17. Execution order

1. Audit repository, dependencies, app consumers and current UI package.
2. Approve IDs, token namespaces, schema, and definition of each visual grammar.
3. Implement token generation and schema validation.
4. Prototype Classic, Moonpunk, Moonzine and Moonledger on identical reference screens.
5. Build Skin Lab and core component contracts/specimens.
6. Validate theme engine and representative accessibility/visual states.
7. Extend to the remaining skins with pairwise review.
8. Finish premium component/blocks/template manifest.
9. Produce original assets and optional SFX from approved art/audio briefs.
10. Run release gates, document migration, then tag a release.

## Definition of done for a skin

A skin is not done merely because it has colors assigned. It must have approved Light and Dark semantic mappings; a unique and documented composition/geometry/typography/surface/component/navigation/media/motion recipe; working previews for key components/templates; asset fallbacks; accessibility and responsive checks; pairwise distinctness evidence; and a human-approved Skin Lab record.

---

**Status reminder:** This document defines the target system. It does not assert that any component, final token set, asset pack, sound pack, generated package, or release gate has been implemented or passed.

---

## 18. 2026-10-25 research-driven repository refinement (normative clarification)

This amendment updates **interpretation, not product implementation**. Start with the [verified audit](audit/repository-baseline-audit.md) and [research log](research/research-log.md).

1. **Canonical data authority:** the [Theme Contract](../contracts/moonframe-theme-contract-v1.3.json) owns skin IDs, mode preference/resolution and fallback. The [Grammar Contract](../contracts/moonframe-skin-grammar-contract-v1.0.json) owns pair status; the [15 detailed visual specimens/recipe specifications](../contracts/moonframe-skin-specifications-v1.0.json) own per-component artistic intentions. Neither screenshot approval nor implemented tokens is implied.
2. **Token source clarification:** the [dictionary](../contracts/moonframe-token-dictionary-v0.1.json) names required roles only. The [token source plan](../contracts/moonframe-token-source-plan-v0.1.json) explicitly contains 30 pending coverage slots, and the [pipeline](architecture/token-pipeline.md) describes future DTCG subset generation. Never pass dictionary JSON to a production token generator as though it contained approved color/material/spacing values.
3. **Catalog detail:** the [component manifest](../contracts/moonframe-component-manifest-v0.1.json) and [block/template manifest](../contracts/moonframe-block-manifest-v0.1.json) record proposed scope, states, accessibility requirements, tiers and dependencies; API stubs are not approved TypeScript interfaces or shipped components.
4. **Original graphics and opt-in feedback:** [asset contract](../contracts/moonframe-asset-manifest-v0.1.json) contains empty production asset arrays and provenance/approval requirements. [SFX contract](../contracts/moonframe-sfx-contract-v0.1.json) defaults to silent and explicit consent; no audio was produced.
5. **Primitive provider open:** do not choose Base UI just because [shadcn changed its new-project default in July 2026](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default). [ADR-0001](adr/0001-primitive-provider.md) explicitly awaits an equal-fixture a11y/SSR/integration spike comparing Base UI, Radix and React Aria.
6. **State vocabulary:** `specified` is a documentation state; `implemented`, `tested`, `reviewed`, and `released` need independent evidence. Pair status `not-reviewed` is a separate human visual gate. `system` is a *requested appearance preference*; a DOM-resolved effective `data-mode` must be `light` or `dark`.
7. **Validation scope:** [contract validator and CI](../scripts/validate-contracts.mjs) check structural consistency; no claims about production quality, contrast, browser compatibility, bundle or WCAG compliance follow from a green docs-only run. See [QA strategy](qa/validation-strategy.md).

Authoritative references and versioning rules are in [governance](architecture/decisions-and-governance.md). No dependency, framework, package namespace, license, artwork or SFX was selected or shipped in this refinement.

---

## 19. Premium UI package scope extension — 2026-10-25

[Premium Scope Bible](premium/premium-scope-bible.md) is the authoritative cross-catalog interpretation for six levels A (primitive) through F (optional integration), while **IDs and item-level semantics are owned by their JSON manifests**. This extends, rather than supersedes, the original 15-skin design laws, token system, 30 Light/Dark baseline appearances and shared component behavior contract.

The existing high-level 13 `block` entries are retained as `family-blueprint`, while 131 new concrete blocks are marked Level C. Level D [page templates](../contracts/moonframe-page-template-manifest-v0.1.json) depend on Level C records; Level E [starter apps](../contracts/moonframe-starter-manifest-v0.1.json) depend on Level D page IDs; Level F [integrations](../contracts/moonframe-integration-manifest-v0.1.json) are optional candidates, not core dependencies. Component inventory now has 151 specified entries, **no shipped code**.

Security non-goals are deliberate: presentation and callbacks do **not** grant auth/session/security, execute payments or ERP bookkeeping, fetch/mutate backend records, run AI tools, store files, send messages, enforce permissions, or control infrastructure. The auth suite must never be sold or documented as a security service. Data table is not an enterprise spreadsheet/grid. FullCalendar Premium, MUI X Pro/Premium and Tiptap paid modules require separate licensing reviews, not silent inclusion.

[Auth suite](premium/auth-ui-suite.md), [data workspace](premium/data-workspace.md), [primary-source comparison](research/premium-competitive-analysis.md), [premium scope audit](audit/premium-scope-audit-2026-10-25.md), [initial priority breakdown](backlog/premium-catalog-atomic-issues.md) and [QA strategy](qa/validation-strategy.md) define the engineering readiness gates. A 660-cell **planned** premium reference matrix is not 660 passed tests; 105 visual pairs remain `not-reviewed`.

---

## 20. Token Architecture / Theme Engine contract refinement — 2026-10-25

The dedicated [token architecture](architecture/token-pipeline.md) provides the authoritative pipeline explanation while [Theme Contract](../contracts/moonframe-theme-contract-v1.3.json) remains authoritative for runtime preferences, root attributes, fallbacks and stable skin IDs; [token dictionary](../contracts/moonframe-token-dictionary-v0.1.json) keeps 78 historical names and type proposals; [source plan](../contracts/moonframe-token-source-plan-v0.1.json) describes non-existent future value sources and sparse Light/Dark overlays. Layout grammar stays in [skin recipes](../contracts/moonframe-skin-specifications-v1.0.json), NOT automatically converted into scalar tokens.

The requested `system` preference is distinct from effective Light/Dark root mode. Motion/density/contrast/dir are independent axes. Scope and environment caveats, DTCG/Style Dictionary limitations and SSR ambiguity are recorded in [audit](audit/token-theme-engine-audit.md), [research](research/token-theme-engine-research.md), [ADR-0002](adr/0002-token-format-and-generator.md) and [ADR-0003](adr/0003-theme-runtime-and-css-output.md). Nothing here approves a generator, implements an engine, produces assets, values or Light/Dark theme CSS, or marks visual pair/accessibility testing complete.

---

## 21. Component API & Behavior authority refinement — 2026-10-25

The [Component API & Behavior Bible](component-api-behavior-bible.md) owns public API naming, semantic/native interactions, controlled/uncontrolled state, events/refs/slots, form association, SSR and component readiness rules. [Per-ID API records](../contracts/moonframe-component-api-contract-v0.1.json) reference **all existing 151** component IDs without claiming TypeScript public exports. [State matrix](../contracts/moonframe-component-state-matrix-v0.1.json) maps 24 dimensions/applicability for each ID; [keyboard matrix](../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) maps 37 proposed APG/native patterns. Status remains **specified-provisional-not-implemented**.

The historical `componentManifest.components[].proposedAPI` is not a typed API: follow the new canonical behavior contract rather than inferring default props from boilerplate. Provider [ADR-0001](adr/0001-primitive-provider.md) is still open, React peer versions/distribution await existing issues #1/#3/#4, and 30 appearance/105 skin pair review evidence is still pending. Theme values/skin compositions/Auth UI/Data Workspace remain in their own canonical documents. [Audit](audit/component-api-behavior-audit.md) · [research](research/component-api-research-log.md) · [QA plan](qa/component-testing-strategy.md) · [atomic backlog](backlog/component-api-atomic-issues.md). This update contains **no React component implementation**.

---

## 22. Advanced Data Workspace source ownership and safety (2026-10-25)

The [existing dedicated Data Workspace Bible](premium/data-workspace.md) has been extended rather than cloned. [Data Workspace Contract](../contracts/moonframe-data-workspace-contract-v0.1.json) is authoritative for versioned columns/row identities/query/pagination/filter AST/selection/server adapter/saved views/export intent/capability dependency. Shared component naming/native semantics remain in [Component API & Behavior Bible](component-api-behavior-bible.md); 19 existing data blocks and 6 data page templates remain in [block](../contracts/moonframe-block-manifest-v0.1.json) and [page manifests](../contracts/moonframe-page-template-manifest-v0.1.json).

[ADR-0004](adr/0004-data-workspace-engine.md) is **proposed** (TanStack Table v9/React Aria vs licensed grid options); no library installed. [Dated research](research/advanced-data-workspace-research-log.md), [audit](audit/advanced-data-workspace-audit.md), [data QA](qa/data-workspace-validation-plan.md), [15 data workspace recipes + 180 pending specimens](../contracts/moonframe-data-skin-coverage-v0.1.json) and [issue-ready backlog](backlog/advanced-data-workspace-issues.md) specify the future evidence. Never claim hidden UI columns, selected rows, saved views or CSV download UI enforce server authorization. 105 global skin pairs remain `not-reviewed`.

---

## 23. Auth & Security UI Integration source-of-truth extension — 2026-10-25

The **existing** [Auth UI Bible](premium/auth-ui-suite.md) was expanded for protocol/trust/session/organization flow **presentation only**; do not clone the login block or security center. The [existing Auth catalog](../contracts/moonframe-auth-ui-catalog-v0.1.json) remains canonical for 26 referenced authentication blocks and four layout variants; the [block manifest](../contracts/moonframe-block-manifest-v0.1.json) and [page template manifest](../contracts/moonframe-page-template-manifest-v0.1.json) own actual IDs (17 authentication templates). [Auth flow contract](../contracts/moonframe-auth-flow-contract-v0.1.json) maps 62 named flows to these existing references and details 20 presentation states, 26 guarded state transitions and 14 safe UI intents. All statuses are **specified-provisional-not-implemented**.

[Provider capability matrix](../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) documents research for six providers × 14 features, not Moonframe feature support. [Threat register](../contracts/moonframe-auth-threat-model-v0.1.json), [research](research/auth-security-ui-research-log.md), [audit](audit/auth-security-ui-audit.md), [ADR-0005 (proposed)](adr/0005-auth-provider-neutral-ui-integration.md), [QA](qa/auth-security-ui-validation-plan.md), [240 unrendered appearance cells](../contracts/moonframe-auth-skin-coverage-v0.1.json), and [atomic backlog](backlog/auth-security-ui-issues.md) provide future evidence tasks. No provider, React auth components, backend, session code, secret fixture, artwork/SFX, browser AT or security certification was made.

---

## 24. Original Asset & Brand Bible and rights architecture — 2026-10-25

The new [Original Asset & Brand Bible](brand/original-asset-brand-bible.md) owns **shared Moonframe umbrella identity**, per-skin motif/device strategy, provenance/rights chain, SVG/raster/font/icon production policy and *planned* export governance. It **does not** replace [Theme](../contracts/moonframe-theme-contract-v1.3.json) (skin IDs/Light-Dark), [Skin Grammar](../contracts/moonframe-skin-grammar-contract-v1.0.json) (visual directions/105 pair reviews), [Token Dictionary](../contracts/moonframe-token-dictionary-v0.1.json) (token roles), [Component API](component-api-behavior-bible.md) (icon semantics/refs), [Premium Scope](premium/premium-scope-bible.md) (media/brand slots), or [SFX contract](../contracts/moonframe-sfx-contract-v0.1.json) (sound off/consent/event taxonomy).

[Existing asset manifest](../contracts/moonframe-asset-manifest-v0.1.json) retains all 15 empty `plannedPerSkin` records. Its historical ten categories per skin are **candidate families, not ten mandatory binary assets or fifteen separate logos**. [15 distinctive written briefs](../contracts/moonframe-skin-asset-briefs-v0.1.json) propose a shared master brand and fifteen endorsed editions; owner/trademark approval **open**. [Conditional metadata schema](../schemas/moonframe-asset-record.schema.json), [negative fixtures](../contracts/fixtures/original-asset-v0.1.json), [dated standards research](research/original-asset-brand-research-log.md), [audit](audit/original-asset-brand-audit.md), [proposed ADR-0006](adr/0006-original-asset-pipeline-and-brand.md), [QA gates](qa/original-asset-validation-plan.md), [15 task-ready seeds](backlog/original-asset-atomic-issues.md) guide future production. **No SVG/PNG/logo/font/audio, asset release, font/license/trademark approval or visual uniqueness review was produced.**

[Asset-specific planned 120-cell QA ledger](../contracts/moonframe-asset-qa-coverage-v0.1.json) tracks 4 context cases × 30 effective appearances and is **not** the global 105-pair distinctness matrix, nor proof images/assets exist.

---

## 25. Motion, Interaction & SFX normative-source map (2026-10-25)

The focused [Motion, Interaction & SFX Bible](motion/motion-interaction-sfx-bible.md) is canonical for *purpose, interruption, reduced/static equivalents and sound-eligibility of cross-component visual feedback*. [25 planned motion recipes](../contracts/moonframe-motion-recipes-v0.1.json) and [18 interaction-family mappings](../contracts/moonframe-motion-interactions-v0.1.json) are documentation, not React/CSS runtime code. [15 per-skin derivative motion directions](../contracts/moonframe-motion-skin-matrix-v0.1.json) reference existing Skin Grammar and must not fork keyboard/focus semantics. The **existing** [SFX contract](../contracts/moonframe-sfx-contract-v0.1.json) remains the single source of the six event IDs and sound opt-in/mute/cooldown; no new audio taxonomy or audio files. Existing [Token Dictionary](../contracts/moonframe-token-dictionary-v0.1.json) still owns five unapproved scalar motion IDs; proposed additional IDs do not have released numeric values. [ADR-0007](adr/0007-motion-and-optional-audio-engines.md), [WCAG/browser research](research/motion-interaction-sfx-research-log.md), [audit](audit/motion-interaction-sfx-audit.md), [motion QA](qa/motion-interaction-sfx-validation-plan.md) and [14 atomic tasks](backlog/motion-interaction-sfx-atomic-issues.md) define later tests/decisions. [180 QA cells](../contracts/moonframe-motion-qa-coverage-v0.1.json) are all `not-rendered`, while 105 global skin comparisons are still `not-reviewed`. Static contract tests are **not** animation/AT/audio verification.

---

## 26. Accessibility & Visual QA authority and evidence status — 2026-10-25

The [focused Accessibility & Visual QA Bible](qa/accessibility-visual-qa-bible.md) is canonical for W3C criterion/test/evidence mapping, visual baseline governance, AT/manual review, defect/waiver policy and later release signoff. It **references rather than redefines** Theme/Token/15 skin grammar/105 pair records, [Component API](component-api-behavior-bible.md), and premium block/page IDs. [51 high-relevance WCAG 2.2 criteria](../contracts/moonframe-accessibility-requirements-v0.1.json) (27 Level A, 22 Level AA, 2 Level AAA advisory) are specified, **not audited against real UI or exhaustive of every use case**. [151 proposed component QA profiles](../contracts/moonframe-component-qa-profiles-v0.1.json) and [270 same-content baseline slots](../contracts/moonframe-visual-baseline-matrix-v0.1.json) (nine screens × 15 Light/Dark) are all untested/unrendered. [Empty evidence ledger](../contracts/moonframe-accessibility-qa-evidence-v0.1.json), [conditional record schema](../schemas/moonframe-accessibility-qa-record.schema.json), [negative fixtures](../contracts/fixtures/accessibility-visual-qa-v0.1.json), [official research](research/accessibility-visual-qa-research-log.md), [repo audit](audit/accessibility-visual-qa-baseline.md), [ADR-0008](adr/0008-accessibility-visual-qa-tooling.md) and [16 future atomic tasks](backlog/accessibility-visual-qa-atomic-issues.md) establish evidence gates. Only static Node checks exist; **no components, fonts/media, browser screenshots, axe/Storybook/Playwright scans, screen-reader checks, WCAG conformance or reviewed skin pairs yet**.

---

## 27. Package Architecture & Developer Experience source ownership (2026-10-25)

The [Package & DX Bible](architecture/package-architecture-dx-bible.md) is canonical for *package topology/distribution, npm exports, CSS entrypoint consumer setup, developer journeys, TypeScript/peer compatibility, tarball/SSR consumer proof, version/release/supply-chain policy and future docs/Skin Lab package boundaries*. It references rather than duplicates [Token/Theme](architecture/token-pipeline.md), [Component API](component-api-behavior-bible.md), [Premium](premium/premium-scope-bible.md), [Auth](premium/auth-ui-suite.md), [Data](premium/data-workspace.md), [Assets](brand/original-asset-brand-bible.md), [Motion/SFX](motion/motion-interaction-sfx-bible.md) and [Accessibility QA](qa/accessibility-visual-qa-bible.md). [Actual 115-file audit](audit/package-architecture-dx-audit.md), [2026 primary research](research/package-architecture-dx-research-log.md), [ADR-0009 topology](adr/0009-package-topology.md), [ADR-0010 distribution](adr/0010-package-distribution.md), [unpublished package/exports proposal](../contracts/moonframe-package-architecture-v0.1.json), [11 proposed DX journeys](../contracts/moonframe-developer-experience-v0.1.json), [proposed schema](../schemas/moonframe-package-architecture.schema.json) and [16 atomic tasks](backlog/package-architecture-dx-atomic-issues.md) define later work. **`@moonframe/ui` is an unverified working name, not npm-owned/published**. **No package.json, TS/CSS runtime, workspace, registry, CLI, consumer tarball, trusted publisher, license selection or SFX/assets created**. Single package first / registry later is a PROPOSED path pending #1/#3/#4/#5; don't infer implemented support or npm name rights from this Bible.

---

## 2026-10-26 visual-reference clarification: cinematic manga-punk is a Moonpunk example, not the entire system

The four supplied Moonwitness reference pictures now have an explicit [creative reference contract](../contracts/moonframe-creative-reference-contract-v0.1.json), a [Visual Reference Bible](visual/cinematic-mangapunk-reference-bible.md), and [four-image subatomic tasks](backlog/reference-mockups-subatomic-tasks.md). These are reference interpretations, **not** an override of the original 15-skin behavioral/public-API laws or automatically approved production art.

- **R01** illustrated Mission Control dashboard: Moonpunk with Moonpanel and Moonglitch support.
- **R02** storytelling landing: Moonpunk with Moonzine/Moonhalftone support.
- **R03** performance campaign poster: Moonsmash with Moonpunk/Moonzine art direction; a standalone media/template context, not a global form or finance skin.
- **R04** cinematic sign-in: controlled Moonpunk sign-in layout, original optional moon-city artwork separate from semantic fields.

**Skin != product brand != content:** MOONWITNESS typography/crown/campaign text and character stories are **consumer assets/data**, not the Moonframe master logo, generic semantic icon pack or default core. Four images are reference only; source PNGs have not been committed. Original/copyright/license approval is separately required.

**Implementation discipline:** Preserve L0 semantic DOM content and actions; layer L1 geometry, L2 optional ink/collage, L3 optional scene illustration and L4 active controls. Compare non-color geometry and safe decoration-off fallback. Do not replace an entire app with one fixed screenshot; phone and zoom recompose content meaningfully. All visual/pair approval claims require actual screenshots and named human review. Earlier headings and statuses above describe historical specification phases, not approval of this 2026-10-26 reference set.
