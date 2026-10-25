# Moonframe — Original Asset & Brand live repository audit

**Audited:** 2026-10-25 WIB. **Repo:** https://github.com/bjo163/moonframe · default `main`, public, writable/branch unprotected (observed) · **starting HEAD:** [`daea86207bfa38529e689f278f11b9ab5eac12d1`](https://github.com/bjo163/moonframe/commit/daea86207bfa38529e689f278f11b9ab5eac12d1) · 79 tracked files (GitHub complete non-truncated recursive tree), 6 existing issues, 0 PRs, [baseline CI](https://github.com/bjo163/moonframe/actions/runs/40179497673) passed **static contracts only**. No mounted local checkout was inspected; **local working-tree status unknown**. Git history shows docs-only planning/refinement; no evidence of production asset creation or previous brand/trademark approval.

## Actual inventory and relevant canonical files

- [Asset manifest](../../contracts/moonframe-asset-manifest-v0.1.json): **15** `plannedPerSkin` entries all `not-produced`, each `assets: []`, 10 generic per-skin categories, record fields/approval states only. **No actual asset records or file paths, source checksums, creator/license attestations.**
- [SFX contract](../../contracts/moonframe-sfx-contract-v0.1.json): `status=specification-only-no-audio`, six optional event roles, `defaultEnabled=false`, `requiresExplicitConsent=true`, `producedAssets=[]`. No binaries or sounds.
- [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json), [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json): 15 stable IDs, Light/Dark (30 effective maps), 105 distinct pairs `not-reviewed`; skin art directions and anti-overlap already have one canonical owner.
- [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json), [Theme pipeline](../architecture/token-pipeline.md): role names and token layers, no final production values; asset IDs are **references**, not binary token entries.
- [Design System Bible](../moonframe-ui-design-system-bible-v1.3.md) §9 Original Asset System, [README](../../README.md), [Governance](../architecture/decisions-and-governance.md), [Roadmap](../implementation-roadmap.md) Phase 7 MF-080–086, [QA strategy](../qa/validation-strategy.md), [Backlog](../backlog/initial-issues.md): provenance and optional sound generally stated, not operationalized into conditional schema or approval evidence.
- [Component API Bible](../component-api-behavior-bible.md): icon, BrandMark and state semantics belong to generic component API, not duplicate asset behavior; [Premium Blocks](../premium/premium-scope-bible.md), [Auth](../premium/auth-ui-suite.md) and [Data Workspace](../premium/data-workspace.md) own slot composition and content/data meanings.
- [Existing validator](../../scripts/validate-contracts.mjs) verifies 15 planned asset entries empty, no SFX, 15/30/105 but not source license/format/approved record consistency; [workflow](../../.github/workflows/contract-validation.yml) runs Node22, no package.json/lockfile.
- **Tree evidence:** zero tracked `.svg`, `.png`, `.webp`, `.avif`, `.ico`, `.woff`, `.woff2`, `.ttf`, `.otf`, `.mp3`, `.wav`, `.ogg`, production artwork or source/design binary. No `LICENSE`, `LICENSE.md`, `LICENSE.txt`, `.gitattributes`, `assets/` folder, font manifest, asset generator, brand registry, provenance ledger or asset-schema validation installed. No conclusion about legally owned external assets outside this repository.
- [Existing Issues #1–6](https://github.com/bjo163/moonframe/issues) concern consumer stack, Classic, primitives, distribution, token proof, and Skin Lab. Reuse [#4](https://github.com/bjo163/moonframe/issues/4) for package/license/distribution context and [#6](https://github.com/bjo163/moonframe/issues/6) for visual fixtures. Existing MF-080–086 in roadmap include asset production phase; no new GitHub issues automatically.

## Prioritized findings — current planning gaps, NOT shipped runtime vulnerabilities

| ID | Severity | Evidence | Risk and response |
|---|---|---|---|
| ASSET-01 | **P1** | Manifest requires 10 categories per skin, including three separate logo forms | Incentivizes unnecessary 15 independent brands despite common umbrella; approve endorsed collection strategy and per-skin minimum vs optional assets |
| ASSET-02 | **P1** | 15 empty `assets`, no asset-record schema/provenance/licensing evidence | Can't trace ownership or clear redistribution; add conditional typed metadata, quarantine/rejection gate |
| ASSET-03 | **P1** | No repository LICENSE or accepted font/mark rights policy | Public readable is not a license to redistribute. Separate code/brand/asset/font/audio licensing decisions; request owner/legal sign-off |
| ASSET-04 | **P1** | SVG security listed only in prose; no reviewed input/optimizer/toolchain gates | Potential unsafe SVG processing in *future* pipeline; define fail-closed import security, don't imply SVGO sanitizes untrusted uploads by itself |
| ASSET-05 | **P1** | No deterministic source→export provenance/shape or checksum gate | Later missing/stale derivatives and ambiguous source licensing; specify outputs, checksums, manifest validation and CI strategy |
| ASSET-06 | **P2** | Existing 15 skin specifications have direction but no structured asset-specific minimum and anti-overlap scorecard | Need per-skin briefs linked to canonical grammar and 105 pair reviews; no new “uniqueness pass” claim |
| ASSET-07 | **P2** | Functional icon semantics vs decorative/brand artwork not registered | Risk of rebranding meaningful icons or copying third-party visual identity; stable semantic icon IDs |
| ASSET-08 | **P2** | No raster/favicons/format/density/optimization policy per target platform | Wasteful exports, format/pixel-edge issues and unnecessary bytes; responsive reference strategy first |
| ASSET-09 | **P2** | No selected licensed font, Unicode subset/fallback/provenance policy | Redistributed fonts may violate OFL RFN/other terms; no files until licensed and tested |
| ASSET-10 | **P2** | Asset-specific focus/contrast/texture/low-power/forced-colors review not structured | Decorative layers could impair functionality; artifact and 30-appearance QA plan |
| ASSET-11 | **P2** | Optional SFX contract exists but no production format/license/sound QA gates | Consent/mute already safe, yet encoding/bundle and normalization lack measured evidence |
| ASSET-12 | **P3** | No source/edit lineage/version, stable public asset IDs/migration/unused asset report | Governance drift; add accepted asset ID vs versioned export path policy |
| ASSET-13 | **P3** | No Git LFS/external asset storage sizing evidence | Keep spec-only text in Git now; decide binary strategy after production sample size |
| ASSET-14 | **P3** | No icon/component/brand cross-screen specimens | Pilot 4 divergent skins first before production-wide rollout |

**Baseline counts:** P0 **0** · P1 **5** · P2 **6** · P3 **3**. No brand approval, trademark clearance or visual differentiation is assumed.

## Source-of-truth and change rule

The existing [asset manifest](../../contracts/moonframe-asset-manifest-v0.1.json) remains authoritative for production inventory/asset metadata. The specialist [Original Asset & Brand Bible](../brand/original-asset-brand-bible.md) will own strategy, naming, rights/provenance and asset pipeline **without duplicating** semantic token values, existing skin grammar, component/blocks or SFX event defaults. Planned per-skin briefs link to canonical Skin Specification IDs. Schema, QA and policy docs are subordinate to this division. No production binary files, logo, font, audio or React code may be added under this phase.