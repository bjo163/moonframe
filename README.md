# Moonframe UI

> **One behavioral system. Fifteen distinct visual grammars. Thirty core appearances.**

Moonframe UI is the planned first-party React design system for the Moon ecosystem. It aims to provide a premium, reusable component library and a genuinely multi-skin design engine—not a color-switcher.

## Current status

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

