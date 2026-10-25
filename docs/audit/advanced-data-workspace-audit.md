# Advanced Data Workspace — Repository Audit

**Tanggal:** 2026-10-25 Asia/Jakarta. **Repo:** https://github.com/bjo163/moonframe, public, writable, default `main`, HEAD **`8f372ea7160f160462d2a95defcffa424059489f`**. 57 tracked files from non-truncated GitHub tree, one workflow, six previously created issues, no PR, HEAD [Actions run 40175503069](https://github.com/bjo163/moonframe/actions/runs/40175503069) success for **structural specification tests only**. No local checkout was used, so local working-tree status was **not verifiable**. Branch was not protected at inspection. No `package.json`, lockfile, React UI, data engine, browser tests, generated assets or deployed releases.

## Evidence and existing canonical ownership

- [Existing Data Workspace Bible](../premium/data-workspace.md) (previous 28 lines): defines **four tiers** but not executable-data-shape, filter AST, export security, saved-view migrations, column IDs or per-skin workspace recipes.
- [Existing Data Workspace Contract](../../contracts/moonframe-data-workspace-contract-v0.1.json): tiers, string-based sketch of `controlledStateModel`, `serverContract`, eight empty/async states and future fixtures; no typed serializable input/response schemas or selection scope.
- [Component API Bible](../component-api-behavior-bible.md) and [component manifest](../../contracts/moonframe-component-manifest-v0.1.json): 151 component entries, **21** in `group=data`; Table and DataTable belong here, not redefined as full page blocks. No typed implemented props/engine.
- [Concrete block manifest](../../contracts/moonframe-block-manifest-v0.1.json): **19 `category=data`** blocks; references canonical. [Page manifest](../../contracts/moonframe-page-template-manifest-v0.1.json): **6** page templates `category=data`, plus existing related admin/ERP/report presentations; no duplication/mass renaming.
- [Premium Scope Bible](../premium/premium-scope-bible.md): levels A/B components, C blocks, D page templates, E starters, F integrations; do not confuse data workspace tier A–F with package tiers.
- [Theme contract](../../contracts/moonframe-theme-contract-v1.3.json): 15 skin IDs and Light/Dark; `system` preference not third appearance. [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json): 105 pair reviews **not-reviewed**. [Skin specs](../../contracts/moonframe-skin-specifications-v1.0.json): 15 detailed visual recipes, currently not rendered. [Token dictionary](../../contracts/moonframe-token-dictionary-v0.1.json): roles only, no approved values.
- [Validator](../../scripts/validate-contracts.mjs) and [workflow](../../.github/workflows/contract-validation.yml): parses contract JSON, reference integrity, 151 component APIs, skin/token invariants; no generic Draft-2020-12 validation engine installed or actual data grid test.
- [Issues #1](https://github.com/bjo163/moonframe/issues/1) consumer stack, [#3](https://github.com/bjo163/moonframe/issues/3) primitive provider, [#4](https://github.com/bjo163/moonframe/issues/4) distribution, [#5](https://github.com/bjo163/moonframe/issues/5) token proof, [#6](https://github.com/bjo163/moonframe/issues/6) same-data skin fixture already cover prerequisites. Existing backlog `MF-PREM-004/005/008/009` includes table contracts and licensing; do not duplicate issues.

## Findings (baseline prioritization, not runtime bugs)

| ID | Priority | Evidence, risk, action |
|---|---|---|
| DW-01 | **P1** | Existing contract stores query/pagination in prose strings, so API/controlled ownership is undecidable. Specify versioned state and mutually exclusive pagination modes. |
| DW-02 | **P1** | Selection scope is unspecified: page/loaded/query-all could drive accidental bulk action on unauthorized/unintended rows. Define tagged unions, all-query snapshot/exclusions, invalidation/expiry. |
| DW-03 | **P1** | Filter AST lacks allowlist/operator/types, null/timezone semantics and URL sensitivity policy. Create safe typed AST/validation contract, app translates to queries. |
| DW-04 | **P1** | Export is `onExportIntent` prose only; formula injection, scope, background progress and permission boundaries absent. Define safe CSV/export job intent with backend authorization, no false safe-export claim. |
| DW-05 | **P1** | Engine candidate from prior docs not pinned. Official TanStack docs now show **Table v9 Latest**, Virtual v3, MUI X v9.16.0, AG Grid v36.2.0; migration/license support must be measured before dependency selection. |
| DW-06 | **P2** | Column schema lacks serializable column identity/type/accessor/display separation, formatting/export allowlist and preference migration. |
| DW-07 | **P2** | Server adapter has no requestId/abort/stale/total-known/unknown/permissions/dataset revision semantics. |
| DW-08 | **P2** | Saved views lack owner/visibility/version, migration and concurrent update handling; security risk for URLs and local storage. |
| DW-09 | **P2** | Accessibility not scoped for native table versus interactive grid, focus/selection/virtualization; ARIA role confusion likely. |
| DW-10 | **P2** | Skin specs lack data-workspace-specific comparable recipe; 30 coverage cells not rendered and 105 pair reviews pending. |
| DW-11 | **P2** | Existing blocks/pages are broad generic `specified` records, not feature-specific dependencies/QA; prioritize reuse with references, no new duplicates. |
| DW-12 | **P3** | No measurable large-data performance benchmark, rendering fixture, SSR/RTL/zoom proof; estimates would be invented. |
| DW-13 | **P3** | Enterprise grid/pivot/edit/virtualization are future-only, but optional vendor license/redistribution strategy unapproved. |
| DW-14 | **P3** | Existing `premium-block` tier metadata on some data components could be misread as a Level C block; do not renumber IDs or conflate catalogs. |

**Counts:** P0=0, P1=5, P2=6, P3=3. P1 denotes high-risk specification gaps, not implemented security defects. No production failure is asserted.

## Canonical decisions to preserve and avoid duplication

**Maintain** `docs/premium/data-workspace.md` as the specialized Bible and `contracts/moonframe-data-workspace-contract-v0.1.json` as domain capability authority. Add narrowly focused serializable query/saved-view/export/column/schema and coverage extensions only when unique. Core `Table`, `DataTable` prop/keyboard rules stay in Component API Bible. Component/block/page IDs stay unchanged and referenced. Theme source owns 15 skin IDs; data workspace may define **references to those IDs** for recipe coverage without duplicating authoritative theme data.

**Excluded:** real SQL, backend endpoints, authorization, accounting, billing, server export jobs, saved-view DB, live data fetching, React components, imports, fonts/artwork/SFX, token values. All spec-only statuses remain honest.
