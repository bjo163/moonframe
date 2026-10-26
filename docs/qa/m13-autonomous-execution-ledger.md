# M13 autonomous execution ledger

Updated 2026-10-26. This ledger records local task execution evidence; it does not certify owner, legal, license, or human visual approval.

## Current counts

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- `MF-PF-001`, `MF-PF-003`, `MF-PF-004`, `MF-PF-005`, `MF-PF-006`, `MF-PF-019`, and `MF-PF-023` are captured. `MF-PF-007`, `MF-PF-008`, `MF-PF-009`, `MF-PF-010`, `MF-PF-011`, `MF-PF-012`, and `MF-PF-025` are implemented. `MF-PF-002` remains pending because it needs an explicit maintainer license/trademark distribution decision; no approval was inferred or recorded.
- Freeze baseline: 14 implemented / 474 pending. Live count: 28 implemented-or-captured (14 baseline implemented + 7 captured + 7 implemented), 0 blocked, 460 pending/planned. The license/trademark decision remains pending without inferred owner approval.

## MF-PF-012 — Stop sound on backgrounding; do not catch up

- Inspected source HEAD before edits: `8159af076f085fd7c46567875ecbe0c6139c26a4`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, matching preflight task row, root TODO counts, and this ledger.
- Added a document `visibilitychange` listener that stops active oscillators when the page becomes hidden. Existing `play()` guard returns `background-tab` for requests made while hidden. Browser regression schedules a cue, backgrounds the document and checks oscillator stop calls, exercises hidden-play rejection, then restores visibility and confirms no cue is scheduled automatically.
- `node --check src/components.js` — exit 0. `node --check tests/browser/components.spec.js` — exit 0. `node scripts/validate-contracts.mjs` — exit 0. `node scripts/verify-m13-handoff.mjs` — exit 0 with existing SFX playback-truth and missing-LICENSE warnings. `git diff --check` — exit 0.
- The unattended run hit Windows `EPERM` during pnpm dependency refresh; restored the 31 locked workspace packages with `pnpm install --frozen-lockfile --offline` (exit 0).
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 49/49 passed, including stop-on-hidden and no-catch-up behavior.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing generic playback-truth and missing-LICENSE warnings remain.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the visibility listener, browser regression, and matching task/TODO/ledger evidence.

## MF-PF-010 — Deterministic Web Audio resource cleanup

- Inspected source at HEAD `44fd9b2b0fe30df17edfef9af058717429a43f56`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, matching preflight task status/evidence. Reuse one provider-owned AudioContext, disconnect ended oscillators, and stop/disconnect active oscillators plus close the context on unmount. Added browser coverage for context reuse and unmount closure.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from the local pnpm cache.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated.
- `pnpm run test:browser` — exit 0; 48/48 passed, including AudioContext reuse and closure after client-side provider unmount. `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; the handoff verifier still reports its generic playback-truth warning and the separate missing-LICENSE warning.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the provider resource change, browser test, and this matching task/ledger evidence.

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

## MF-PF-007 — Separate SFX default enable intent from trusted consent

- Inspected source HEAD before edits: `625cf4b22ff427f7d30e9e38031f4f5ca6e7c81e`.
- Scope: `src/components.js`, `tests/runtime.test.mjs`, matching preflight task row and this ledger. `defaultEnabled` can no longer grant consent; the SSR fixture requests `defaultEnabled: true` and asserts `consentGranted` remains false.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing SFX playback-truth and missing-LICENSE warnings remain.
- The first unattended attempt hit Windows `EPERM` during pnpm dependency refresh; its bundled cache path also lacked `@emnapi/runtime` metadata. Restored the locked 31 packages through the user's pnpm cache with `pnpm install --frozen-lockfile --offline` (exit 0; no lockfile changes).
- `pnpm test` — exit 0; 12/12 tests passed, including the new default-enabled consent assertion.
- `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 46/46 passed.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing release warnings remain.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the initialization change, its runtime assertion, and matching task status/evidence.

## MF-PF-008 — Explicit trusted-event consent API

- Inspected source HEAD before edits: `d5d8ef9c29b466fc53ddd9896cb89c61bc47763b`.
- Scope: `src/components.js`, `src/components.d.ts`, `apps/moonframe/components/site/InteractivePlayground.tsx`, `docs/motion/motion-interaction-sfx-bible.md`, and `tests/browser/components.spec.js`.
- `grantConsent(event)` accepts only a trusted click, pointerup, keydown, or touchend event; synthetic events and calls without a native event leave consent disabled and return false. The playground forwards its actual click event. No browser permission, persistence, or autoplay is added.
- The unattended pnpm run hit Windows `EPERM` during dependency refresh. `pnpm install --frozen-lockfile --offline` — exit 0; restored the 31 locked workspace packages from the local cache.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing play-result and missing-LICENSE warnings remain.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 46/46 passed, including synthetic denial and real-click grant.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the explicit trusted-event API, call site, browser assertion, documentation, and matching task status/evidence.

## MF-PF-009 — Truthful Web Audio playback result

- Inspected source HEAD before edits: `0ebeb9de87aa66810e6035b9dc22699bc229efce`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, `contracts/moonframe-sfx-contract-v0.1.json`, matching preflight row, TODO counts, and this ledger.
- Unsupported Web Audio returns `{ played: false, reason: 'unsupported' }`; suspended/closed contexts and scheduling errors return `blocked`. Cooldown and last-event state are updated only after scheduling succeeds. Added an unsupported-API browser regression and updated the contract warning with local evidence; broader release approval remains separate.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from the local cache.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 47/47 passed.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0. The handoff verifier still reports its generic playback-truth warning; investigate/fix that independent static heuristic before clearing it.
- Status: implemented with local verification complete. No human review or release approval claimed. Rollback: revert the result states, browser regression, contract note, and matching task/evidence updates.

## MF-PF-011 — Stop active sound on mute or consent revocation

- Inspected source HEAD before edits: `2c480f99e403bd0cb3e725278e7aef4e42a7ecd9`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, `contracts/moonframe-sfx-contract-v0.1.json`, matching preflight row, root TODO counts, and this ledger.
- SFXProvider now stops and disconnects active oscillators immediately when muted, consent is revoked, or volume reaches zero. Browser coverage checks active oscillator stop calls, refusal after revoke, renewed consent, context reuse, and unmount closure.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing generic playback-truth and missing-LICENSE release warnings remain.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from the local cache.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 48/48 passed.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0. Handoff verifier still emits its generic playback-truth warning and missing-LICENSE warning.
- Status: implemented with local verification complete. No human review or release approval claimed. Rollback: revert provider stop handling, its browser regression, contract note, and matching task/TODO/ledger evidence only.

## MF-PF-023 — Motion recipe/runtime reconciliation

- Status: `captured`; canonical contract contains 25 recipe records and the planned matrix contains 180 QA slots.
- Artifact: `docs/qa/motion-runtime-reconciliation.md`. Source inspection records shared CSS transitions/reduced-motion handling while leaving per-recipe implementation, rendered captures, and human review unclaimed.
- Verification: `node scripts/validate-contracts.mjs` — exit 0; `node scripts/verify-m13-handoff.mjs` — exit 0 (existing playback-truth and missing-LICENSE warnings). Documentation-only change; browser tests not applicable.
- Rollback: remove the artifact and this entry, then restore matching status/counts in the backlog and TODO.
