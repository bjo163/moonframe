# M13 autonomous execution ledger

Updated 2026-10-26. This ledger records local task execution evidence; it does not certify owner, legal, license, or human visual approval.

## Current counts

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- `MF-PF-001`, `MF-PF-003`, `MF-PF-004`, `MF-PF-005`, `MF-PF-006`, and `MF-PF-019` are captured. `MF-PF-025` is implemented. `MF-PF-002` remains pending because it needs an explicit maintainer license/trademark distribution decision; no approval was inferred or recorded.
- Freeze baseline: 14 implemented / 474 pending. Live count: 21 implemented-or-captured (14 baseline implemented + 6 captured + 1 implemented), 0 blocked, 467 pending/planned. The license/trademark decision remains pending without inferred owner approval.

## MF-PF-001 — Freeze current package/release inventory

- Live HEAD inspected: `affdfe6a56362878b8ca19faab61c922a0264c4b`.
- Scope: `package.json`, `docs/audit/m13-final-reconciliation-2026-10-26.md`, this ledger, and the matching preflight backlog row.
- Inventory: `@moonwitness/moonframe@0.1.1`; `private:false`; `license: MIT`; public publish access; five declared export paths; no standalone `LICENSE` file. Registry status not verified; no publish attempted.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; emitted existing SFX consent/playback and missing LICENSE release warnings.
- `pnpm install --frozen-lockfile` — exit 0; restored the locked workspace dependencies without changing the lockfile.
- `pnpm test` — exit 0; 12/12 unit and SSR tests passed.
- `pnpm run typecheck` — exit 0.
- `pnpm run build` — exit 0; Next.js generated all 88 static/SSG routes.
- Initial runner verification exposed Windows `pnpm.cmd` process resolution; `scripts/run-m13-autopilot.mjs` now invokes the Windows shim through a shell for its fixed literal checks. A dry-run also exposed that task descriptions containing the word “blocked” were counted as blocked states; the runner now reads the explicit status field. `node --check scripts/run-m13-autopilot.mjs` — exit 0. The corrected counter reports 488 total / 15 complete-or-captured / 0 blocked / 473 pending after this task.
- Status: captured. No human review or acceptance claimed. Rollback: revert only the documentation and task-evidence edits above.

## MF-PF-003 — Current release evidence and registry status

- Inspected local HEAD before edits: `fcd2a165ac5517b09944076012837e4dc49b0c3a`.
- Scope: `docs/qa/rc-evidence-and-release-ledger.md`, `docs/backlog/m13-preflight-remediation-tasks.md`, and this ledger.
- Local `package.json` declares `@moonwitness/moonframe@0.1.1`, `private:false`, MIT, and public publish access. These declarations do not prove license authority or publication.
- Registry URL/tag/version/provenance: **not verified**. No registry request or publish attempted. Historical v0.1.0 release notes do not establish a v0.1.1 release.
- `node scripts/validate-contracts.mjs` — exit 0; structural contract checks passed.
- `node scripts/verify-m13-handoff.mjs` — exit 0; handoff integrity passed with existing SFX-consent/playback and missing-LICENSE warnings.
- Status: captured; no human review or acceptance claimed. Rollback: revert the current-release section and the corresponding task/ledger evidence edits only.

## MF-PF-004 — Public component export coverage

- Inspected source HEAD before documentation edits: `c7ee51e672b993c176719ca2e088ef302a86b38c`.
- Scope: `docs/audit/component-public-export-coverage.md`, matching preflight row, root TODO live counts, and this ledger.
- Compared every one of 151 manifest records against package root/runtime/type entry points. Result: 47 same-name runtime and type exports (including ThemeProvider), 104 records without a same-name runtime component export.
- `node scripts/validate-contracts.mjs` — exit 0; structural contract checks passed.
- `node scripts/verify-m13-handoff.mjs` — exit 0; handoff integrity passed with existing SFX consent/playback and missing LICENSE warnings.
- Status: captured. This static catalog does not establish behavior or human acceptance. Rollback: revert only the catalog, corresponding task/TODO count updates, and this ledger entry.

## MF-PF-005 — Page implementation coverage

- Inspected source HEAD before documentation edits: `ae6395d420c455246aadfb0d0753de631e9f28d5`.
- Scope: `docs/audit/page-implementation-coverage.md`, matching preflight row, root TODO live counts, and this ledger.
- Compared all 72 D-level IDs in `contracts/moonframe-page-template-manifest-v0.1.json` with `TEMPLATE_CATALOG` in `apps/moonframe/lib/catalog.ts` and `TemplateRenderer` cases in `apps/moonframe/templates/index.tsx`. 43 IDs are in both runtime sources; 29 are pending. All catalog IDs are present in the manifest and renderer.
- Route source files exist for `/templates/[id]` and `/preview/[id]`. Per-record screenshots and human visual review are not established; all rows explicitly say `not-reviewed`.
- `node scripts/validate-contracts.mjs` — exit 0; structural contract checks passed.
- `node scripts/verify-m13-handoff.mjs` — exit 0; handoff integrity passed with existing SFX consent/playback and missing LICENSE release warnings.
- Status: captured; no human review or acceptance claimed. Rollback: revert only the catalog, matching task/TODO count updates, and this ledger entry.

## MF-PF-006 — Truthful pairwise QA report

- Inspected source HEAD before edits: `a32b9cb66d713c657018936efd2fbdf30f4dc9a3`.
- Scope: regenerated `docs/qa/skin-pairwise-review-report.md`, matching preflight task row, root TODO live counts, and this ledger.
- `scripts/audit-skin-pairs.mjs` already distinguished automated structural checks and PNG-path inventory from human visual review; the checked-in report was stale and still contained historical `OWNER-APPROVED`, “Verified”, and plain `PASS` language.
- `pnpm run audit:pairs` — exit 0; regenerated 105 pair records as `STRUCTURAL-PASS`, listed 30/30 screenshot paths, and retained pending human visual review. The script does not inspect PNG pixels or provenance.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; emitted existing SFX consent/playback and missing LICENSE warnings.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 packages from cache without lockfile changes.
- `pnpm test` — exit 0; 12/12 tests passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `git diff --check` — exit 0. Browser tests were not needed for this report-only change.
- Status: captured; no human review/acceptance claimed. Rollback: restore the report and revert this task's matching status/count/ledger evidence only.

## MF-PF-019 — Proposed token inventory against runtime CSS bridge

- Inspected source before edits: `src/styles.css` and `contracts/moonframe-token-dictionary-v0.1.json`; dictionary contains 78 proposed IDs and CSS contains 17 distinct `--mf-*` declarations.
- Scope: `docs/audit/token-runtime-coverage.md`, matching preflight row, root TODO live counts, and this ledger. Candidate role relationships are explicitly marked as inference; no aliases, canonical values, 30-appearance coverage, DTCG conformance, or owner approval are claimed.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing SFX consent/playback and missing LICENSE warnings remain.
- The unattended runner hit `EPERM`/`EACCES` while trying to recreate the dependency tree. Outside that subprocess, `pnpm install --frozen-lockfile --offline` exited 0 and restored all 31 locked workspace packages from the existing cache without lockfile changes.
- `pnpm test` — exit 0; 12/12 tests passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 static/SSG routes generated.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing release warnings remain.
- Status: captured from direct source inventory and successful structural/unit/type/build checks. No human review/acceptance claimed. Rollback: remove the inventory and matching task/TODO/ledger evidence only.

## MF-PF-025 — Explicit simulated auth demo states

- Inspected source HEAD: `e1a17d5`.
- Scope: `apps/moonframe/templates/index.tsx`, matching preflight task evidence, root TODO live count, and this ledger.
- Updated demo sign-in, OAuth/SSO, verification, recovery, MFA, and onboarding wording/actions to state that each is simulated. Removed claims of actual authentication, redirects, messages, token timing, verified factors, sessions, or provisioned workspaces.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing SFX consent/playback and missing LICENSE warnings remain.
- The runner's first package check hit `EPERM` while recreating `node_modules` and could not restore packages online (`EACCES`); dependencies were restored with `pnpm install --frozen-lockfile --offline` (exit 0, 31 packages reused from cache).
- `pnpm test` — exit 0; 12/12 unit and SSR tests passed.
- `pnpm run typecheck` — exit 0.
- `pnpm run build` — exit 0; all 88 static/SSG routes generated.
- `pnpm run test:browser` — exit 0; 46/46 Playwright tests passed.
- Status: implemented with local verification complete. No authentication integration or real account action is claimed. Rollback: revert only the template wording/action edits and this evidence.
