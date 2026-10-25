# Moonframe UI

> **One behavioral system. Fifteen distinct visual grammars. Thirty core appearances.**

Moonframe UI is the planned first-party React design system for the Moon ecosystem. It aims to provide a premium, reusable component library and a genuinely multi-skin design engine—not a color-switcher.

## Current status

**Verified 2026-10-25:** repository has specifications only. Contracts and a documentation-level validator are not working UI or approved token values. Provider, production token values, npm exports, assets, and SFX are intentionally pending. The 105 skin pair reviews remain unreviewed until real screenshots exist.


**Design specification stage.** This repository currently stores product and engineering contracts. Components, final tokens, original production assets, generated icon sets, and sound packs are not yet implemented or approved.

## Product promise

- **15 skins**, each intentionally different in layout grammar, geometry, typography, component recipes, navigation, media treatment, and motion signature.
- **Light + Dark** for every skin: 30 baseline appearances. `system` resolves to Light or Dark and is not another skin.
- One shared behavioral/accessibility contract and one public component API.
- Skin, color appearance, density, motion preference, and contrast preference remain independent axes.
- Optional original vector/bitmap assets and opt-in sound effects are designed and governed as separate asset packs.

## The 15 skin catalog

| # | Skin | Exclusive visual territory |
|---:|---|---|
| 01 | Moonpunk | Acid-lime manga punk; neo-brutalist impact; torn-edge accents; hard offset shadows |
| 02 | Moonriot | Riot/editorial cyberpunk; red signal marks; angular split compositions |
| 03 | Moonzine | Underground zine; collage; paper artifacts; editorial asymmetry |
| 04 | Moonhalftone | Manga screentone; monochrome ink; raster fields; panel pacing |
| 05 | Moonglitch | Terminal/cybernetic; signal interruption; scanline and telemetry motifs |
| 06 | Moonsmash | Kinetic impact; oversized display type; radial bursts and explosive transitions |
| 07 | Moonink | Brush-ink illustration; hand-painted strokes; expressive negative space |
| 08 | Mooncrash | Industrial hazard; mechanical plates; warning markings and rugged utility |
| 09 | Moonpanel | Modular comic-panel composition; strict framing and deliberate grids |
| 10 | Moonscrawl | Sketchbook and hand annotation; loose linework; draft-like visual marks |
| 11 | Moonraw | Raw/minimal brutalism; exposed structure; reduced decoration; rigid geometry |
| 12 | Moonchrome | Futuristic metallic surfaces; reflective contours; controlled spectral highlights |
| 13 | Classic | Familiar shadcn-style baseline; restrained surfaces and predictable hierarchy |
| 14 | Moonquest | RPG / adventure UI; quest journal, inventory, progression and game-like framing |
| 15 | Moonledger | Professional ERP; dense and precise data workspaces; compact but accessible controls |

Classic is a compatibility target inspired by the selected shadcn-style baseline—not a claim that Moonframe is the official shadcn product. Upstream version, style and interactive primitives must be audited and pinned before implementation.

## Documentation

### Package Architecture & Developer Experience (2026-10-25)

- [Audited live repo and P0–P3 package/DX findings](docs/audit/package-architecture-dx-audit.md)
- [Official npm/Node/TS/Vite/Tailwind/registry/OIDC research](docs/research/package-architecture-dx-research-log.md)
- [Canonical Package Architecture & Developer Experience Bible](docs/architecture/package-architecture-dx-bible.md)
- [ADR-0009 — Package topology, single runtime candidate](docs/adr/0009-package-topology.md)
- [ADR-0010 — npm runtime vs source-owned registry](docs/adr/0010-package-distribution.md)
- [Proposed package exports/metadata/distribution machine contract](contracts/moonframe-package-architecture-v0.1.json)
- [11 planned developer journeys and 13 diagnostics](contracts/moonframe-developer-experience-v0.1.json)
- [Bounded proposed package JSON Schema](schemas/moonframe-package-architecture.schema.json) and [16 invalid contract fixtures](contracts/fixtures/package-architecture-dx-v0.1.json)
- [16 small issue-ready DX/package tasks (no GitHub issues created)](docs/backlog/package-architecture-dx-atomic-issues.md)


### Accessibility & Visual QA (2026-10-25)

- [Live repository accessibility/visual QA audit](docs/audit/accessibility-visual-qa-baseline.md)
- [Accessibility & Visual QA delivery report and verified CI evidence](docs/audit/accessibility-visual-qa-delivery-2026-10-25.md)
- [WCAG/ACT/axe/Storybook/Playwright primary-source research](docs/research/accessibility-visual-qa-research-log.md)
- [Accessibility & Visual QA Bible — canonical methodology](docs/qa/accessibility-visual-qa-bible.md)
- [51 WCAG criteria and evidence/verification mapping](contracts/moonframe-accessibility-requirements-v0.1.json)
- [151 component QA profiles joined to the canonical state/keyboard inventory](contracts/moonframe-component-qa-profiles-v0.1.json)
- [270 unrendered baseline slots — nine reference screens × 30 appearances](contracts/moonframe-visual-baseline-matrix-v0.1.json)
- [Empty QA/waiver/defect evidence ledger](contracts/moonframe-accessibility-qa-evidence-v0.1.json)
- [Proposed conditional QA evidence JSON Schema](schemas/moonframe-accessibility-qa-record.schema.json)
- [14 synthetic invalid QA evidence fixtures](contracts/fixtures/accessibility-visual-qa-v0.1.json)
- [ADR-0008 — testing tools and browser/AT decision pending](docs/adr/0008-accessibility-visual-qa-tooling.md)
- [16 issue-ready QA tasks](docs/backlog/accessibility-visual-qa-atomic-issues.md)


### Motion, Interaction & SFX (2026-10-25)

- [Repository audit and P0–P3 evidence](docs/audit/motion-interaction-sfx-audit.md)
- [Verified Motion / Interaction / SFX delivery and CI report](docs/audit/motion-interaction-sfx-delivery-2026-10-25.md)
- [Primary WCAG, browser motion and sound research](docs/research/motion-interaction-sfx-research-log.md)
- [Motion, Interaction & SFX Bible](docs/motion/motion-interaction-sfx-bible.md)
- [25 named motion recipes, interrupt and reduced fallbacks](contracts/moonframe-motion-recipes-v0.1.json)
- [18 cross-component interaction patterns](contracts/moonframe-motion-interactions-v0.1.json)
- [15 distinct but behavior-stable motion directions](contracts/moonframe-motion-skin-matrix-v0.1.json)
- [Existing canonical six-event SFX contract, enriched safely](contracts/moonframe-sfx-contract-v0.1.json)
- [180 unrendered motion/interaction appearance QA cells](contracts/moonframe-motion-qa-coverage-v0.1.json)
- [Proposed motion recipe schema](schemas/moonframe-motion-recipe.schema.json) and [12 negative fixtures](contracts/fixtures/motion-interaction-sfx-v0.1.json)
- [ADR-0007 — native CSS / WAAPI / View Transition / Motion and audio engine options](docs/adr/0007-motion-and-optional-audio-engines.md)
- [QA/release validation plan](docs/qa/motion-interaction-sfx-validation-plan.md) and [14 atomic tasks](docs/backlog/motion-interaction-sfx-atomic-issues.md)


### Original Asset & Brand (2026-10-25)

- [Live asset inventory, provenance gaps and P0–P3 audit](docs/audit/original-asset-brand-audit.md)
- [Original Asset & Brand delivery, validation and owner-decision report](docs/audit/original-asset-brand-delivery-2026-10-25.md)
- [Original Asset & Brand Bible — canonical identity and rights policy](docs/brand/original-asset-brand-bible.md)
- [Research log: SVG 2, SVGO, fonts/OFL, licensing, formats, autoplay](docs/research/original-asset-brand-research-log.md)
- [Existing asset manifest, clarified as planned candidate pool](contracts/moonframe-asset-manifest-v0.1.json)
- [15 written skin asset briefs and anti-overlap constraints](contracts/moonframe-skin-asset-briefs-v0.1.json)
- [120 unrendered review cells across 30 Light/Dark appearances](contracts/moonframe-asset-qa-coverage-v0.1.json)
- [Conditional proposed Draft 2020-12 asset-record schema](schemas/moonframe-asset-record.schema.json)
- [Planned metadata and 10 synthetic invalid fixtures](contracts/fixtures/original-asset-v0.1.json)
- [ADR-0006 shared Moonframe brand and provenance pipeline — proposed](docs/adr/0006-original-asset-pipeline-and-brand.md)
- [Original asset-specific QA and provenance gates](docs/qa/original-asset-validation-plan.md)
- [15 issue-ready small follow-up tasks](docs/backlog/original-asset-atomic-issues.md)


### Auth & Security UI Integration (2026-10-25)

- [Auth/Security UI repository audit](docs/audit/auth-security-ui-audit.md)
- [Auth & Security UI delivery report and CI evidence](docs/audit/auth-security-ui-delivery-2026-10-25.md)
- [Current security standards and provider research](docs/research/auth-security-ui-research-log.md)
- [Expanded canonical Auth & Security UI Bible](docs/premium/auth-ui-suite.md)
- [62 flow contracts, 20 states and 26 guarded transitions](contracts/moonframe-auth-flow-contract-v0.1.json)
- [Six providers × 14 documented feature statuses](contracts/moonframe-auth-provider-capability-matrix-v0.1.json)
- [20 threat-informed acceptance cases](contracts/moonframe-auth-threat-model-v0.1.json)
- [240 planned Light/Dark auth skin specimens](contracts/moonframe-auth-skin-coverage-v0.1.json)
- [Safe UI event JSON Schema](schemas/moonframe-auth-safe-event.schema.json) and [synthetic fixtures](contracts/fixtures/auth-security-v0.1.json)
- [ADR-0005 provider-neutral integration](docs/adr/0005-auth-provider-neutral-ui-integration.md)
- [Auth QA and acceptance strategy](docs/qa/auth-security-ui-validation-plan.md)
- [14 atomic tasks for later implementation](docs/backlog/auth-security-ui-issues.md)


### Advanced Data Workspace (2026-10-25)

- [Repository audit and P0–P3 findings](docs/audit/advanced-data-workspace-audit.md)
- [Advanced Data Workspace final delivery and CI report](docs/audit/advanced-data-workspace-delivery-2026-10-25.md)
- [Canonical existing Data Workspace Bible — expanded](docs/premium/data-workspace.md)
- [Primary-source research and comparison](docs/research/advanced-data-workspace-research-log.md)
- [ADR-0004 — engine choice proposed, not approved](docs/adr/0004-data-workspace-engine.md)
- [Data model, query, selection, saved-view and export contract](contracts/moonframe-data-workspace-contract-v0.1.json)
- [30 appearance / 15 data workspace recipes and 180 pending cases](contracts/moonframe-data-skin-coverage-v0.1.json)
- [8 domain-neutral presets referencing existing blocks/pages](contracts/moonframe-data-preset-catalog-v0.1.json)
- [Proposed query/selection/export JSON Schema](schemas/moonframe-data-query.schema.json) and [fixture cases](contracts/fixtures/data-workspace-v0.1.json)
- [Data Workspace QA strategy](docs/qa/data-workspace-validation-plan.md) and [14 atomic tasks](docs/backlog/advanced-data-workspace-issues.md)


### Component API & Behavior (2026-10-25)

- [Component API delivery report with CI evidence](docs/audit/component-api-delivery-2026-10-25.md)

- [Live component behavior audit](docs/audit/component-api-behavior-audit.md)
- [Current primary-source research log](docs/research/component-api-research-log.md)
- [Component API & Behavior Bible — canonical API convention](docs/component-api-behavior-bible.md)
- [151 component-level API proposals](contracts/moonframe-component-api-contract-v0.1.json)
- [151 × 24 state applicability matrix](contracts/moonframe-component-state-matrix-v0.1.json)
- [37 keyboard patterns + 151 mappings](contracts/moonframe-keyboard-interaction-matrix-v0.1.json)
- [Component behavior/schema draft](schemas/moonframe-component-behavior.schema.json) and [state schema](schemas/moonframe-component-matrix.schema.json)
- [Component testing and release evidence plan](docs/qa/component-testing-strategy.md)
- [12 small issue-ready tasks](docs/backlog/component-api-atomic-issues.md)


### Token Architecture & Theme Engine (2026-10-25)

- [Live token/theme audit](docs/audit/token-theme-engine-audit.md)
- [Token/theme delivery and verification report](docs/audit/token-theme-engine-delivery-2026-10-25.md)
- [Token/theme primary-source research](docs/research/token-theme-engine-research.md)
- [Authoritative token pipeline & runtime spec](docs/architecture/token-pipeline.md)
- [ADR-0002 bounded DTCG format and generator (proposed)](docs/adr/0002-token-format-and-generator.md)
- [ADR-0003 theme precedence/CSS/SSR (proposed)](docs/adr/0003-theme-runtime-and-css-output.md)
- [Token/theme QA plan](docs/qa/token-theme-validation-plan.md)
- [Token subset structural schema](schemas/moonframe-token-subset.schema.json)
- [Theme preference structural schema](schemas/moonframe-theme-preferences.schema.json)
- [10 atomic token/theme tasks](docs/backlog/token-theme-atomic-issues.md)

### Premium package specifications (2026-10-25)

- [Premium scope delivery report — verified commits, tests, issues](docs/audit/premium-scope-delivery-2026-10-25.md)

- [Premium Scope Bible — six levels A–F](docs/premium/premium-scope-bible.md)
- [Premium scope audit with P0–P3 findings](docs/audit/premium-scope-audit-2026-10-25.md)
- [Research and competitive analysis](docs/research/premium-competitive-analysis.md)
- [Authentication UI suite](docs/premium/auth-ui-suite.md) and [Auth flow references](contracts/moonframe-auth-ui-catalog-v0.1.json)
- [Four-tier Data Workspace](docs/premium/data-workspace.md) and [Data contract](contracts/moonframe-data-workspace-contract-v0.1.json)
- [151 proposed components](contracts/moonframe-component-manifest-v0.1.json), [144 block records (13 families + 131 concrete)](contracts/moonframe-block-manifest-v0.1.json)
- [72 page templates](contracts/moonframe-page-template-manifest-v0.1.json), [8 starter applications](contracts/moonframe-starter-manifest-v0.1.json)
- [16 optional integrations](contracts/moonframe-integration-manifest-v0.1.json), [660 pending reference specimens](contracts/moonframe-premium-coverage-v0.1.json)
- [10 atomic issue-ready premium tasks](docs/backlog/premium-catalog-atomic-issues.md)

- [Baseline repository audit](docs/audit/repository-baseline-audit.md)
- [Refinement delivery report](docs/audit/refinement-delivery-2026-10-25.md)
- [Primary-source research log](docs/research/research-log.md)
- [Primitive provider ADR (open)](docs/adr/0001-primitive-provider.md)
- [Architecture, ownership and governance](docs/architecture/decisions-and-governance.md)
- [Token pipeline and 30 pending coverage slots](docs/architecture/token-pipeline.md)
- [QA strategy and release gates](docs/qa/validation-strategy.md)
- [Initial small-task backlog](docs/backlog/initial-issues.md)
- [Full skin recipes](contracts/moonframe-skin-specifications-v1.0.json)
- [Component manifest (103 proposed entries)](contracts/moonframe-component-manifest-v0.1.json)
- [Blocks and template manifest (13 proposed entries)](contracts/moonframe-block-manifest-v0.1.json)
- [Token source/coverage plan](contracts/moonframe-token-source-plan-v0.1.json)
- [Asset contract](contracts/moonframe-asset-manifest-v0.1.json)
- [SFX contract](contracts/moonframe-sfx-contract-v0.1.json)
- [Contract validation (Node, no installed packages)](scripts/validate-contracts.mjs)
- [Contract CI](.github/workflows/contract-validation.yml)

- [Design System Bible v1.3](docs/moonframe-ui-design-system-bible-v1.3.md)
- [Skin Grammar Contract v1.0](contracts/moonframe-skin-grammar-contract-v1.0.json)
- [Theme Contract v1.3](contracts/moonframe-theme-contract-v1.3.json)
- [Token Dictionary Contract v0.1](contracts/moonframe-token-dictionary-v0.1.json)
- [Implementation Roadmap](docs/implementation-roadmap.md)

## Non-negotiable design laws

1. **Skin ≠ palette.** Every skin changes the visual grammar and must be recognizable in grayscale and with decorative artwork removed.
2. **One behavior, many skins.** Skin selection never changes component semantics, keyboard behavior, or business logic.
3. **No duplicate component forks.** Differences use semantic tokens and approved skin recipes; a behavioral fork requires an architecture decision record.
4. **Accessible by contract.** Focus, keyboard, screen-reader semantics, contrast, target size, forced-colors and reduced-motion are tested—not left to art direction.
5. **No fake completion.** Contracts and mockups are specifications only. Production status requires code, tests, review, and consumer validation.
6. **Original assets require provenance.** Each logo, vector, PNG, icon, texture, and sound effect must have a source/creator, license/status, format, intended use, and review record.
7. **Sound is opt-in.** No automatic audio; sound can be muted and never carries meaning unavailable visually or to assistive technology.

## Initial implementation strategy

1. Audit the target repository and current React/Tailwind/shadcn setup.
2. Lock token names, semantic roles, component contracts, and visual primitives.
3. Prototype Classic, Moonpunk, Moonzine, and Moonledger on the same reference screens.
4. Validate theme switching and shared behavior before scaling to all 15 skins.
5. Build the Skin Lab and test 30 baseline appearances plus risk-based state/density/viewport combinations.
6. Develop remaining skins, premium blocks/templates, original asset packs, and optional SFX.
7. Publish only after release gates pass.

## Scope boundaries

Moonframe provides UI components, layouts, tokens, themes, motion, asset contracts, and optional UI feedback sounds. It does **not** own Moonships infrastructure behavior, Moonradio messaging behavior, RPG rules, ERP/accounting logic, authentication policy, authorization policy, or product-specific data models.

## Versioning

The numbered contracts are versioned independently. Any breaking public API, token rename, skin ID change, or behavior change requires a migration note and an explicit versioning decision. Skin IDs are stable identifiers; display names may evolve only through a documented change.

