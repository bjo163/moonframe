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

