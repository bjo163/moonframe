# Moonframe UI — Token & Theme Engine audit

**Audit:** 2026-10-25 (Asia/Jakarta). **Repository:** https://github.com/bjo163/moonframe. **Baseline:** `main` at `aeb0056619bd0fb96b48f4f64fe15164250e8f6f`. Method: complete, non-truncated GitHub tree, full theme/token/roadmap/Bible/QA documents, related manifests, issue/PR search and primary standards research. A remote tree is **not** a local working-tree status.

## Baseline inventory and evidence

Repository baseline: 36 tracked files, including `README.md`, master Bible, theme/skin/token contracts, 15 skin specifications, 30 planned coverage slots, Node structural validator, GitHub Actions workflow, 6 GitHub issues (#1–#6), no PRs. HEAD CI run #40172591809 had passed structural specification tests. No `package.json`, dependencies, lockfile, React source, runtime provider, production token values, generated CSS, TypeScript token exports, SSR implementation, screenshot fixtures or sound/art assets. Theme tooling versions cannot be called *installed*.

| Claim | Canonical evidence | Baseline status |
|---|---|---|
| Exactly 15 immutable skin IDs and `system` preference | `contracts/moonframe-theme-contract-v1.3.json` | verified-existing **specification**, not runtime |
| 105 visual pair comparisons | `contracts/moonframe-skin-grammar-contract-v1.0.json` | 105 `not-reviewed` |
| Required vocabulary | `contracts/moonframe-token-dictionary-v0.1.json` | 78 example semantic names, values missing |
| Source values + mode maps | `contracts/moonframe-token-source-plan-v0.1.json` | 30 `pending-values-and-contrast-review`; `valuesSource=null` |
| Pipeline/outputs | `docs/architecture/token-pipeline.md` | partially-specified, unimplemented |
| Preference resolution | theme contract `preferenceResolution` and `fallbacks` | partial prose only, no algorithm/persistence contract |
| Consumer/framework stack | README/Bible says *target* React/Tailwind | no installed stack, SSR mechanism unknown |
| Contract tests | `scripts/validate-contracts.mjs`, workflow | implemented-and-tested **structural spec checks only** |

Source: [remote baseline tree](https://api.github.com/repos/bjo163/moonframe/git/trees/aeb0056619bd0fb96b48f4f64fe15164250e8f6f?recursive=1), [baseline commit](https://github.com/bjo163/moonframe/commit/aeb0056619bd0fb96b48f4f64fe15164250e8f6f), [baseline CI](https://github.com/bjo163/moonframe/actions/runs/40172591809).

## Findings by severity (initial, before refinement)

| ID | Priority | Evidence / problem | Impact and corrective action |
|---|---|---|---|
| TE-01 | P1 | Token source plan is pending; `canonicalSource=null` and 30 slots have no values | Define one future source format + inheritance/coverage algorithm without inventing values |
| TE-02 | P1 | Theme mode/root attrs defined without exact resolver precedence or requested/effective persistence | Specify typed resolution state, OS updates, invalid input and SSR/no-JS fallback |
| TE-03 | P1 | Dictionary only has 78 untyped **examples**, not typed semantic contracts or contrast pair requirements | Add proposed role/type metadata and reproducible validation with pending status |
| TE-04 | P1 | DTCG 2025.10 compatibility not proven, and Style Dictionary documents incomplete support | Bounded subset ADR with verification spike; do not claim full DTCG or selected generator |
| TE-05 | P1 | Naming rule `stableLowerCase` conflicts with `lineHeight`, `controlHeight` and other camelCase token IDs | Grandfather current IDs; new-key convention and migration policy before changes |
| TE-06 | P2 | `docs/architecture/token-pipeline.md` does not choose CSS cascade/output boundary | Define deterministic CSS/Tailwind/TS shape and versioned generator checks |
| TE-07 | P2 | Contrast criteria and exceptions not role/surface specific | Define pairing matrix, thresholds, alpha/texture/manual review |
| TE-08 | P2 | No dedicated token/source schema or invalid fixtures | Add bounded schema/spec-only validator tests; maintain implementation gates as pending |
| TE-09 | P2 | Density, motion, contrast, forced-colors, direction and decoration ownership partially overlap | Define orthogonal preferences and overlay order |
| TE-10 | P3 | Theme SSR/persistence and framework not established in repository | Record framework-neutral strategy and open ADR until consumer matrix |
| TE-11 | P3 | No generated output/reference provenance model | Specify manifest/report/checksum/version conventions without building output |
| TE-12 | P3 | Optional component exception and asset refs lack finite governance budget | Require owner/reason/fallback and anti-proliferation review |

**Initial severity counts:** P0=0, **P1=5**, **P2=4**, **P3=3**. These are specification gaps, not production defects. Older premium audit P0/P1 counts are independent and should not be conflated.

## Keep unchanged

Stable exact skin IDs and `classic` fallback; 30 intended Light/Dark appearances; `system` not a third generated set; density independent of skin; original skin grammar in its existing contract; all 105 visual pairs `not-reviewed`; existing 78 token IDs unmodified for compatibility; non-auto-play SFX; no frontend implementation at this phase.

## Source ownership policy

[Theme contract](../../contracts/moonframe-theme-contract-v1.3.json) owns skin ID and runtime precedence/fallback. [Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) owns required token IDs and type proposals. [Token source plan](../../contracts/moonframe-token-source-plan-v0.1.json) owns the **future** authorable-value path, merge order, coverage and generation strategy. [Skin specifications](../../contracts/moonframe-skin-specifications-v1.0.json) own visual recipes. [QA token test plan](../qa/token-theme-validation-plan.md) owns evidence gates. Generated files are NEVER editable/canonical.

No `-v0.2` dictionary or `-v1.4` theme copy is introduced merely for better prose: existing versions remain canonical; their additive metadata records are annotated as specification refinement, not an approved public package API.

## Work sequence

Audit → primary-source log → architecture/ADR with bounded DTCG subset and unknowns → runtime resolver contract → schema + invalid contract fixtures → roadmap and README → GitHub Actions verification. Do not install Style Dictionary or build ThemeProvider to validate these documents.
