# Advanced Data Workspace — Issue-ready Atomic Backlog

**25 October 2026.** This is **not a list of created GitHub issues**. Existing [#1](https://github.com/bjo163/moonframe/issues/1), [#3](https://github.com/bjo163/moonframe/issues/3), [#4](https://github.com/bjo163/moonframe/issues/4), [#5](https://github.com/bjo163/moonframe/issues/5), [#6](https://github.com/bjo163/moonframe/issues/6) and [MF-PREM-004/005](premium-catalog-atomic-issues.md) already cover prerequisites; do not create duplicate issues. All new tasks **proposed**, no implementation in this specification task.

## DW-001 — Review engine ADR and consumer support

**Goal:** Review engine ADR and consumer support. **Dependencies:** existing issue #1, #3, #4. **Exact edit scope:** docs/adr/0004-data-workspace-engine.md. **Priority:** P1. **Status:** proposed.

**Acceptance:** Pin versions and measure identical semantic table/TanStack v9/React Aria/AG Grid/MUI X fixtures; record licensing and keyboard suitability.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-002 — Freeze row identity and column schema

**Goal:** Freeze row identity and column schema. **Dependencies:** DW-001, existing MF-PREM-004. **Exact edit scope:** contracts/moonframe-data-workspace-contract-v0.1.json. **Priority:** P1. **Status:** proposed.

**Acceptance:** Reject duplicate/index IDs; distinguishing accessor/display + column allowlists + migrations.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-003 — Finalize offset/cursor/server contract

**Goal:** Finalize offset/cursor/server contract. **Dependencies:** DW-002. **Exact edit scope:** contracts/moonframe-data-workspace-contract-v0.1.json. **Priority:** P1. **Status:** proposed.

**Acceptance:** Query fingerprint/requestId race, total unknown, no server/client double sort.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-004 — Filter AST types/operators and security

**Goal:** Filter AST types/operators and security. **Dependencies:** DW-002. **Exact edit scope:** contracts/moonframe-data-workspace-contract-v0.1.json; schemas/moonframe-data-query.schema.json. **Priority:** P1. **Status:** proposed.

**Acceptance:** Nested AND/OR, null/date/list bounds, allowlisted field types, reject unsupported operators.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-005 — Selection scope and bulk semantics

**Goal:** Selection scope and bulk semantics. **Dependencies:** DW-003, DW-004. **Exact edit scope:** contracts/moonframe-data-workspace-contract-v0.1.json. **Priority:** P1. **Status:** proposed.

**Acceptance:** Explicit/page/loaded/query-all-except unique intent, expiring server snapshot and permissions.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-006 — Saved views, URL and schema migrations

**Goal:** Saved views, URL and schema migrations. **Dependencies:** DW-004, existing MF-PREM-005. **Exact edit scope:** contracts/moonframe-data-workspace-contract-v0.1.json. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** ETag conflict, privacy, URL allowlist, orphan columns and safe default.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-007 — Export job and CSV-injection threat model

**Goal:** Export job and CSV-injection threat model. **Dependencies:** DW-005. **Exact edit scope:** contracts/moonframe-data-workspace-contract-v0.1.json; docs/qa/data-workspace-validation-plan.md. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** Scope clarity, server reauthorization, RFC/OWASP cases and spreadsheet save/reopen in future implementation.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-008 — Responsive/mobile and accessibility contract

**Goal:** Responsive/mobile and accessibility contract. **Dependencies:** DW-002, existing issue #6. **Exact edit scope:** docs/premium/data-workspace.md; docs/qa/data-workspace-validation-plan.md. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** Semantic table versus grid, focus/keyboard/mobile data equivalence.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-009 — Approve domain preset cross-refs and catalog reuse

**Goal:** Approve domain preset cross-refs and catalog reuse. **Dependencies:** DW-002, DW-004. **Exact edit scope:** contracts/moonframe-data-preset-catalog-v0.1.json. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** All referenced page/block IDs exist; no copied business logic.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-010 — Review per-skin data-workspace recipes

**Goal:** Review per-skin data-workspace recipes. **Dependencies:** DW-008, existing issue #6, #5. **Exact edit scope:** contracts/moonframe-data-skin-coverage-v0.1.json. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** All canonical IDs, 180 planned specimens; no false pass; 4 divergent initial skins.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-011 — Contract validator and negative fixtures

**Goal:** Contract validator and negative fixtures. **Dependencies:** DW-002 through DW-007. **Exact edit scope:** scripts/validate-contracts.mjs; schemas/moonframe-data-query.schema.json. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** Reject malformed filter/cursor/selection/coverage with reproducible CI, schemas considered proposal until generic engine run.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-012 — Future implementation vertical slice (not performed)

**Goal:** Future implementation vertical slice (not performed). **Dependencies:** DW-001 through DW-011. **Exact edit scope:** future UI source only once separately authorized. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** Semantic Table → P1 DataTable → list page using synthetic fixture; browser/TS/a11y/skin reviews.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-013 — Optional enterprise grid/virtualization spike (not performed)

**Goal:** Optional enterprise grid/virtualization spike (not performed). **Dependencies:** DW-001, DW-008, app demand. **Exact edit scope:** docs/adr/0004-data-workspace-engine.md. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** Pinned vendor license, ARIA focus, 50k rows performance, build bytes, migration and fallback.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## DW-014 — Consumer integration/release test plan

**Goal:** Consumer integration/release test plan. **Dependencies:** DW-012, DW-013 optional, issue #4. **Exact edit scope:** docs/qa/data-workspace-validation-plan.md. **Priority:** P2/P3 after app evidence. **Status:** proposed.

**Acceptance:** Package import+SSR, query adapter, security and AT evidence, publication policy; no status promotion before proof.

**Non-goals:** no backend authorizations/queries, no production components/assets/SFX, no new branch, no claim of tests before actual runtime. **Definition of Done:** scoped diff, owner/reviewer recorded, applicable APG/keyboard consequences, source URL and version, migration risk, rollback, executable `node scripts/validate-contracts.mjs --self-test` where relevant, manual/browser tests future-only until environment installed.


## Dependency spine

Consumer matrix (#1) + primitive ADR (#3) + distribution (#4) → DW-001 → DW-002 → DW-003/DW-004 → DW-005 → DW-006/DW-007 → DW-008/DW-009 → DW-010/DW-011 → future DW-012/013/014. Use `main` per verified repo workflow; no PR/branch invented.
