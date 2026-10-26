# M13 autonomous execution ledger

Updated 2026-10-26. This ledger records local task execution evidence; it does not certify owner, legal, license, or human visual approval.

## Current counts

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- `MF-PF-001`, `MF-PF-003`, `MF-PF-004`, `MF-PF-005`, `MF-PF-006`, `MF-PF-019`, `MF-PF-023`, `MF-PF-018`, `MF-PF-026`, and `MF-PF-027` are captured. `MF-PF-007`, `MF-PF-008`, `MF-PF-009`, `MF-PF-010`, `MF-PF-011`, `MF-PF-012`, `MF-PF-013`, `MF-PF-014`, `MF-PF-016`, `MF-PF-017`, `MF-PF-024`, and `MF-PF-025` are implemented. `MF-PF-002`, `MF-PF-020`, `MF-PF-021`, `MF-PF-022`, and `MF-PF-028` are blocked on owner or dependency/clean-clone requirements; `MF-VF-033` is blocked pending brand hierarchy owner sign-off. No approval was inferred or recorded.
- Freeze baseline: 14 implemented / 474 pending. Live count: 67 implemented-or-captured (14 baseline implemented + 11 captured + 42 implemented), 6 blocked, 415 pending/planned. The license/trademark decision remains pending without inferred owner approval.
- Overall progress: 67/488 (13.7%) done/captured; 415/488 (85.0%) still actionable; 6/488 (1.2%) externally blocked. Including blockers, 421/488 (86.3%) remain incomplete.



## MF-VF-033 — Approve one-umbrella logo vs edition devices

- Inspected `docs/brand/original-asset-brand-bible.md` and `docs/research/original-asset-brand-research-log.md`.
- The umbrella-brand recommendation is explicitly not owner-approved; owner approval and trademark decisions are listed as blockers. The task requires accepting that brand hierarchy before production marks or edition devices are created.
- Status: `blocked-external-approval`. No owner decision was available in this repo/task context. No approval or logo direction was invented; no production mark is authorized. Resume after the owner records the umbrella/edition naming decision.
## MF-VF-279 — Compare Moonpunk vs Moonriot vs Moonsmash

- Scope: `docs/qa/reviews/punk-riot-smash.md`; six existing ignored default captures (Moonpunk, Moonriot, Moonsmash × light/dark).
- Inspected the six 1440×960 captures directly. The persistent vertical command rail and offset slabs (Moonpunk), top-spanning horizontal navigation and asymmetric editorial panels (Moonriot), and centered single-column layout with oversized radial hero/headline (Moonsmash) remain structurally distinct in both modes. `src/styles.css` defines corresponding geometry and typography; the screenshot comparison records observations and all six hashes.
- Provenance audit: 6/6 image hashes match sidecars; all use source commit `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, same fixed fixture/time/viewport/browser, and loaded fonts.
- The full browser suite at that source was 61/61 (recorded under MF-VF-278); it is functional/capture evidence, not human visual approval. Reviewer/approval remains pending. Contract/handoff validators and `git diff --check` are recorded after the documentation update. Rollback: revert the evidence/count documentation commit.

## MF-VF-280 — Compare Moonzine vs Moonhalftone vs Moonpanel

- Scope: `docs/qa/reviews/zine-halftone-panel.md`; six existing ignored default captures (three skins × light/dark).
- Direct inspection records the editorial magazine/serif spread (Moonzine), monochrome screened gutters and ink-caption framing (Moonhalftone), and strict rectangular panel/table grid (Moonpanel). Layout and framing differences persist across both appearance modes; no human approval is claimed.
- Provenance/hash audit: 6/6 hashes match sidecars; shared source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, 1440×960, fixed fixture/time, Chromium 156, fonts loaded.
- Browser suite at source was 61/61 (MF-VF-278); functional/capture evidence only. Human review remains pending. Rollback: revert this evidence/count commit.

## MF-VF-281 — Compare Moonink vs Moonscrawl

- Scope: `docs/qa/reviews/ink-scrawl.md`; four existing ignored default captures (two skins × light/dark).
- Direct inspection distinguishes Moonink's open reading composition, curved unboxed hero and ruled text sections from Moonscrawl's page-wide notebook rules, bordered sheets and irregular pencil contours. Captured difference persists across modes; human approval remains pending.
- Provenance/hash audit: 4/4 hashes match sidecars; shared source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, same 1440×960 fixture/time/browser and loaded fonts.
- Browser suite at source was 61/61 (MF-VF-278); it is functional/capture evidence only. Rollback: revert this evidence/count commit.
## MF-VF-278 — Freeze loading/empty/error/denied specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/states.md`; 120 ignored captures in `artifacts/skins/*-1440x960-state-{loading,empty,error,denied}.png` and provenance sidecars.
- Added a deterministic `/lab/behavior?fixture=states` state chooser for loading, empty, error and access-denied states. Tests cover exact messages, semantic status/alert/busy roles, available actions, and their local transitions/confirmation behavior across all 15 skins × two modes; no service call, project creation or access request occurs.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 61/61 passed; state and dialog capture matrices passed at test commit `a2baccb89d904d628187899396b74c26fa8e2c3b`.
- Capture audit — 120/120 image hashes match sidecars; one fingerprint/source commit; 30 images per each of four states; explicit route/state, loaded fonts and 1440×960. `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed. No human visual review is claimed.
- Status: implemented as a frozen state/message/action contract; reviewer remains pending. Rollback: revert implementation and timeout commits plus the matching evidence/count commit.
## MF-VF-277 — Freeze compact ERP specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/enterprise.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-enterprise.png` and provenance sidecars.
- Added an explicit `/lab/behavior?fixture=enterprise` compact operations fixture with fixed demo-only summary values, six service rows, status and region selectors, and service/region search. Browser assertions compare the full content and exercise each filter in all 15 skins × two modes.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 60/60 passed at implementation commit `cc9a95d5c9139dedba8a2d1b4347e69e364ae071`. Capture audit — 30/30 image hashes match sidecars; one fingerprint/source commit; explicit enterprise fixture and default state; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. The fixture is demo data, not production telemetry; visual review remains pending.
- Status: implemented as a frozen compact data/filter contract. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-276 — Freeze editorial long article specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/article.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-article.png` and provenance sidecars.
- Added an explicit `/lab/behavior?fixture=article` long-form specimen with fixed title, deck, author/date/reading-time metadata, ordered sections, quote, caption and accessible CSS-drawn image context. Browser assertions compare the same content/semantic typography structure across all 15 skins × two modes.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 59/59 passed at implementation commit `b71b11376c42a734444b5927a3cb945bd3cfa315`. Capture audit — 30/30 image hashes match sidecars; one fingerprint/source commit; explicit article fixture and `article-default` state; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. No human visual parity verdict is claimed.
- Status: implemented as a frozen article content/image-context contract; reviewer remains pending. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-275 — Freeze auth flow specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/auth.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-auth.png` and provenance sidecars.
- Added an explicit `/lab/behavior?fixture=auth` sign-in simulation with required email/password inputs, a remember-device control and a clear local-only privacy statement. Submit is intercepted locally: it sends or stores no credential and creates no account/session. Browser assertions check required and invalid-email validity plus the deterministic result and unchanged route across all 15 skins × two modes.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 58/58 passed at implementation commit `1ac3ab57ec6ec4dee47919335545f64814e6ffa8`. Capture audit — 30/30 hashes match sidecars; one fingerprint/source commit; explicit auth fixture and `auth-preview-ready` state; loaded fonts; 1440×960.
- `node scripts/verify-m13-handoff.mjs` and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. No production authentication or human visual review is claimed.
- Status: implemented as a frozen simulated-flow contract; reviewer and production-auth status remain unclaimed. Rollback: revert implementation commits and the matching evidence/count commit.
## MF-VF-274 — Freeze sidebar/header specimen

- Scope: `tests/browser/skins.spec.js`; `docs/qa/reference-screens/navigation.md`; 30 ignored local `/lab` captures in `artifacts/skins/*-1440x960-default.png` and provenance sidecars.
- Every skin/mode browser case asserts the sidebar landmark and main-navigation order (Overview, Components), initial active item, selected-state transfer to Components, matching header breadcrumb, and return to Overview. The deterministic dashboard's nested workspace navigation and selected state remain asserted in each case.
- `pnpm run test:browser` — 57/57 passed at implementation commit `4377daba041b9824b5b0882814a20219c06f789b`. Capture audit — 30/30 image SHA-256 values match sidecars; one source fingerprint and commit; `/lab` default Overview fixture; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. `git diff --check` — passed. No human visual review is claimed.
- Status: implemented as a frozen navigation/content contract; visual review remains pending. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-273 — Freeze dialog/popover specimen

- Scope: `tests/browser/components.spec.js`; `docs/qa/reference-screens/dialog.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-archive-dialog.png` and provenance sidecars.
- The browser matrix freezes the completed T-1045 archive dialog, accessible name/description and actions, Escape/focus return from its actual trigger, and non-destructive Keep task close. It also verifies Quick help popover content, Escape dismissal and focus return for every one of 15 skins × two modes.
- `pnpm run test:browser` — 57/57 passed at implementation commit `c9e221838c7212ec5c269dc31b012938e4ce525b`. Capture audit — 30/30 image SHA-256 values match sidecars; one source fingerprint and commit; open-dialog state; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. `git diff --check` — passed. No human visual review is claimed.
- Status: implemented as a frozen content/interaction contract; visual review remains pending. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-272 — Freeze long form/error specimen

- Scope: `docs/qa/reference-screens/form.md`; fixed Workspace profile form values, helper/error copy, feedback and reset behavior.
- Recorded default values plus deterministic invalid URL/ARIA association, helper restoration, pending `Saving…`, success and Cancel/reset states. The same 30 full-page desktop skin/mode screenshots show the form in its default helper state. The transient error/pending/success states are asserted by the existing Playwright loop in all 30 cases but are not separate PNG captures; visual review of those states is not claimed.
- Verified 30 screenshot hashes and sidecars: one fixed fixture, 1440×960, fonts loaded. Full local browser suite passed 56/56 with form assertions per skin/mode; contract/handoff validators passed.
- Status: implemented as a frozen state/content contract; human visual review remains pending. Rollback: remove the specimen doc and restore prior task/count entries.
## MF-VF-271 — Freeze sortable table specimen

- Scope: `docs/qa/reference-screens/table.md`; same-content project task table across 15 skins × light/dark.
- Frozen accessible name/caption, five columns, all five T-1042–T-1046 task rows, due-date default order, task-name order, and the `Hana Kim` search result (`1 of 5 tasks`). The document indexes 30 1440×960 skin/mode captures with per-image hashes and source commits.
- Verified 30 sidecars share one fixture, loaded fonts and expected viewport; PNG hashes match. `tests/browser/skins.spec.js` asserts table headings, every row field, sorting and search in each skin/mode test. Current local full browser run passed 56/56; contract/handoff validators passed. Human visual review remains pending.
- Status: implemented as a frozen data/interaction contract. Rollback: remove the specimen doc and restore the prior task/count entries.
## MF-VF-270 — Freeze executive dashboard specimen

- Scope: `docs/qa/reference-screens/dashboard.md`; deterministic Northstar Studio dashboard data contract and all skin/mode desktop captures.
- Recorded the exact Overview heading, workspace, frozen date, selected navigation, three KPI labels/values, five activity items and shared long copy. The document indexes 30 actual desktop screenshots with SHA-256/source commit from sidecars. Reviewer remains pending; no parity/approval claim.
- Verified all 30 capture sidecars: identical fixture, loaded fonts, 1440×960 viewport; PNG digests match. `tests/browser/skins.spec.js` asserts dashboard labels/metrics/activity in each of the 15 skin × 2 mode cases. The latest full local run on this source line passed browser 56/56 and built 88 routes. Contract/handoff validators passed.
- Status: implemented as a frozen content/evidence contract; pixel review remains pending. Rollback: remove this specimen doc and restore matching task/count entries.
## MF-VF-032 — Record pilot manual review fields

- Scope: `docs/qa/visual-fidelity-evidence-ledger.md`; six pilot skin pairs × light/dark = 12 review cells.
- All cells link the actual A/B screenshots for the same fixed `/lab` + Northstar Studio fixture. Checked 24 PNG files and sidecars: image digests match, capture viewport is 1440×960, fonts are loaded, and all fixture strings match exactly.
- Added typed `review_status`, `verdict`, `reviewer`, `reviewed_at`, `observations` and `exception` fields. Initial values are `pending` / `unreviewed` / `unassigned` / `not-reviewed` / `not-recorded` / `not-assessed`. No manual visual verdict or reviewer identity was invented. The contact sheet link is included for direct comparison.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs` and `git diff --check` — passed. This documentation task adds no visual approval; all 12 cells remain pending human review.
- Status: implemented. Rollback: remove the worksheet and restore the prior MF-VF-032 task/count entries.
## MF-VF-031 — Build contact sheet with A/B rendered images

- Inspected implementation baseline after MF-VF-030; pilot captures have current-source SHA-256 provenance.
- Scope: `scripts/audit-skin-pairs.mjs`; generated local artifact `artifacts/skins/pilot-pair-contact-sheet.html` and refreshed structural report.
- The existing six-pair pilot set is rendered as direct A/B comparisons for both light and dark modes at matching 1440×960 capture viewports. The HTML has jump links, responsive two-column presentation, descriptive image text and lazy image loading. It explicitly labels the result machine-assembled; no scores are presented as human visual verdicts.
- `node --check scripts/audit-skin-pairs.mjs` — passed. `pnpm run audit:pairs` — passed: 105 structural pair records, 30 desktop + 30 tablet + 30 phone current-source captures. Browser inspection loaded all 24 images across six pair sections. Contract and handoff validators and `git diff --check` passed. The local screenshot suite was run in this checkout: unit 13/13, typecheck, production build 88 routes and browser 56/56.
- Status: implemented; reviewer remains pending. Implementation commit: `6bf517524b78a0017a69ef3ab1bee3e9389918eb`. Rollback: `git revert 6bf517524b78a0017a69ef3ab1bee3e9389918eb`; revert matching evidence-only commit if needed.
## MF-VF-030 — Capture forced-colors specimen

- Inspected implementation commit `9cb668c55cc6c5512417cd2147c6f4ed86d14fbe`.
- Scope: `tests/browser/skins.spec.js`; evidence in `artifacts/skins/*-1440x960-forced-colors.png` and sidecars plus visual capture ledger.
- Added 30 browser captures (15 skins × 2 modes) under active forced-colors preference, focusing Workspace name before capture. Browser checks verify forced-colors media state, visible focus outline, appearance selector, navigation, search/sort controls, five task rows, blocked status, and profile name.
- `pnpm test` — 13/13 passed. `pnpm run typecheck` — passed. `pnpm run test:browser` — 56/56 passed; production build generated 88 routes. `pnpm run audit:pairs` — passed (105 pair records and default profile captures). 30/30 forced-colors sidecars match PNG SHA-256 and source commit and record active preference, focused control `workspaceName`, and loaded fonts. `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff verifier retains existing SFX playback-truth and missing standalone LICENSE warnings.
- Status: implemented with local structural verification complete; no human visual review or accessibility conformance claimed. Rollback: `git revert 9cb668c55cc6c5512417cd2147c6f4ed86d14fbe`.
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

## MF-PF-013 — Reduced-motion priority for SFX

- Inspected source HEAD before edits: `47d7a544eb06b05ee2c90e50bdb064eae807b521`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, task evidence, TODO and this ledger. A live OS motion-preference listener and root `data-motion` observer stop active oscillators when reduced motion becomes active; future cues remain suppressed while the status interface stays usable.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from local cache. Syntax checks and both structural validators — exit 0; handoff retains its generic playback-truth and missing-LICENSE warnings.
- `pnpm test` — exit 0; 12/12. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes. `pnpm run test:browser` — exit 0; 50/50, including reduced-motion stop/suppression regression. `git diff --check` — exit 0.
- Status: implemented, local verification complete. No human review or acceptance claimed. After restoring dependencies with `pnpm install --frozen-lockfile --offline`, the current checkout was revalidated: unit 13/13, typecheck, build 88 routes, browser 56/56 (including this regression), both contract/handoff validators, and `git diff --check` passed. The implementation commit remains `e8c05e3` (`fix(sfx): honor reduced motion preference`); no duplicate implementation commit was needed. Rollback: revert the motion listeners, browser test and matching ledger/task evidence.
## MF-PF-014 — Sensitive consumer-context SFX suppression

- Source baseline: commit `e8c05e3` (MF-PF-013 verified). Added explicit provider `context` and root `data-sfx-context` fallback. Auth/authentication, finance/financial, destructive, and security contexts suppress playback even after user consent.
- Browser regression exercises authentication, finance and destructive categories and confirms consent status remains available while sound is suppressed.
- `pnpm install --frozen-lockfile --offline` — exit 0; 31 packages restored. Syntax checks, `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs` — exit 0 (generic playback-truth and missing-LICENSE warnings remain). `pnpm test` — 12/12; typecheck — exit 0; build — 88 routes; browser — 51/51; `git diff --check` — exit 0.
- Status: implemented and locally verified; no consumer review or release approval claimed.
## MF-PF-015 — Freeze alias compatibility semantics

- Preserved six current runtime aliases and their TypeScript input types as compatibility inputs for contract v0.1; no new aliases or remappings in this contract version. Removal or semantic changes need a future major-version migration decision. No owner approval inferred.
- Evidence is contract/source comparison only. `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` passed with the existing generic playback-truth and missing-LICENSE warnings; `git diff --check` passed. No browser QA is claimed for this documentation/contract decision.
- Status: captured; runtime behavior unchanged.
## MF-PF-016 — SFX interaction and browser-denial regressions

- Browser regressions cover trusted consent and synthetic-event denial, missing/suspended AudioContext, focus-only silence, mute/revoke, visibility/background behavior, reduced motion, and sensitive contexts. Dedicated suspended-context case confirms focus creates no context, attempted playback reports `blocked`, and revoke prevents further creation.
- Full checks: unit 12/12, typecheck passed, build generated 88 routes, browser suite passed 52/52, structural validators passed. Status: implemented; no human/release approval claimed.

## MF-PF-017 — SFX global rate and deduplication windows

- Playwright clock test verifies 1000 ms global throttling and 2000 ms same-event deduplication: different event immediately rate-limited, same event still deduplicated after 1001 ms, then allowed after 2000 ms.
- Full checks: unit 12/12, typecheck passed, build 88 routes, browser 53/53, validators passed. Automated timing evidence does not equal human UX review. Status: implemented.

## MF-PF-018 — SFX package asset inventory

- No audio binary found in `src/`; contract has `producedAssets: []` and `producedAudioFiles: 0`. `pnpm pack --dry-run --json` exited 0 and included no media binaries. Nothing was published. Status: captured; no future asset license approval implied.

## MF-PF-024 — Combined motion, forced-colors, RTL and keyboard regression

- Browser check combines OS reduced motion and forced colors at 360px, switches to RTL, and checks reduced-motion resolution, visible heading/long text, keyboard focus outline, zero transition duration, and no horizontal overflow. Full browser suite 54/54; unit 12/12, typecheck, 88-route build and structural validators passed. 180 motion slots and human accessibility sign-off remain pending. Status: implemented.

## MF-PF-026 — DataTable runtime and premium scope reconciliation

- Source inspection confirms caller-owned rows, optional in-memory text search, sortable columns, empty state, and optional client-side pagination. Premium scope now explicitly excludes persistence, authorization, server queries and enterprise-grid features. Structural validators passed. Status: captured; no runtime feature claims beyond source.

## MF-PF-027 — User reference image intake and rights boundary

- Four recorded hashes/dimensions transcribed from the canonical contract; repository scan found zero PNG/JPG/JPEG/WebP files. Hashes were not recomputed against unavailable binaries. No import, reuse license, or visual approval is claimed; pixel review awaits source files. Status: captured.

## MF-VF-006 — Bind skin captures to current render inputs

- Each Playwright skin/mode screenshot carries a sidecar with Git source commit, PNG SHA-256, and SHA-256 fingerprint over tracked render inputs. Pair audit rejects missing/malformed sidecars, altered PNG bytes, and source-fingerprint mismatch. Regression verifies source/image mismatch rejection.
- At source/capture commit `2034b75`, unit 13/13, typecheck, build 88 routes, browser 54/54 and `audit:pairs` 105 records + 30/30 current-source captures passed; contract/handoff validators and diff check passed. Pixels remain unreviewed. Status: implemented.

## External/dependency blockers

- `MF-PF-002`: maintainer must record code-license and separate trademark/art distribution decisions; manifest MIT alone is not accepted as approval.
- `MF-PF-020`: named owner must approve/defer canonical 78×30 token source values and migration/versioning. `MF-PF-021` and `MF-PF-022` remain blocked by that dependency.
- `MF-PF-028`: requires `MF-PF-022` and clean-clone CI evidence; no remote push was authorized. No approval was inferred.

## MF-VF-018 — Pin tablet screenshot layout 768x1024

- Tablet-profile implementation is in `b86c39a23559d58bfdc53a64f4854442d823f647`; capture sidecars were subsequently refreshed at `49cfac474c4de0bbb6bf75bc9472ae4a98235788`, `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`, `701d5aea3c1147e844a183da5a5036f84cee7db4`, `c68f93ff648d07d73c679b49a280419830ac536e`, `32281f6e2200602b791b9d9355ab7ba3fc19f845`, and `f0cd752f1bd13c61708173c06aa0a8acd2d61115` after fixture additions.
- Added actual 768×1024 browser rendering for all 15 skins in light and dark mode, with viewport assertion and no-horizontal-overflow check; each tablet PNG has a source fingerprint and image SHA-256 provenance sidecar. The 30 tablet rows are indexed in the [visual evidence ledger](visual-fidelity-evidence-ledger.md#tablet-screenshot-captures-mf-vf-018).
- `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 30/30 desktop and 30/30 tablet captures match their source fingerprint and PNG digest. Contract and M13 handoff validators passed; existing SFX playback-truth and missing-LICENSE warnings remain. Human visual review remains pending.
- Rollback: revert commit `b86c39a23559d58bfdc53a64f4854442d823f647`.
## MF-VF-019 — Pin phone screenshot layout 360x800

- Phone-profile implementation is in `7f78909625c7f8a227338a8e96f987e5f4e9f600`; keyboard focus-bound verification is in `49cfac474c4de0bbb6bf75bc9472ae4a98235788`; latest capture refresh including dashboard, table, form, navigation and open-dialog fixture is `f0cd752f1bd13c61708173c06aa0a8acd2d61115`.
- Added actual 360×800 browser screenshots for all 15 skins in light and dark mode, with viewport assertion and no-horizontal-overflow check; each PNG has a source fingerprint and image SHA-256 sidecar. The 30 phone rows are indexed in the [visual evidence ledger](visual-fidelity-evidence-ledger.md#phone-screenshot-captures-mf-vf-019).
- `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 30/30 each for desktop, tablet and phone captures match their source fingerprint and PNG digest. Contract and M13 handoff validators passed; existing SFX playback-truth and missing-LICENSE warnings remain. Human visual review remains pending.
- Rollback: revert the phone-profile implementation and focus-bound verification commits `7f78909625c7f8a227338a8e96f987e5f4e9f600` and `49cfac474c4de0bbb6bf75bc9472ae4a98235788`.
## MF-VF-020 — Add same-data dashboard specimen

- Implementation commit: `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`.
- Added a fixed Northstar Studio dashboard specimen to the `/lab` workspace with exact fixture heading/date, three KPI labels and values, five activity records, visible textual statuses, and the canonical long-copy probe. Browser assertions verify the invariant content for every one of the 15 skins in both light and dark modes.
- `pnpm test` — 13/13 passed. `pnpm run typecheck` — passed. `pnpm run build` — passed; 88 routes generated. `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 105 pair records plus 30/30 each desktop, tablet, and phone captures with source/image provenance. Contract and M13 handoff validators passed; generic SFX playback-truth and missing-LICENSE warnings remain. Human visual review remains pending.
- Rollback: revert commit `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`.

## MF-VF-021 — Add same-data table specimen

- Implementation commit: `701d5aea3c1147e844a183da5a5036f84cee7db4`.
- Added five fixed Northstar Studio task rows with semantic task, owner, status, due date and estimate columns; local search and stable due-date/task-name sorting preserve deterministic fixture state across 15 skins and two modes.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 54/54 passed; `pnpm run audit:pairs` — 30/30 each desktop, tablet and phone captures. Contract and M13 handoff validators passed; human visual review remains pending. Existing generic SFX playback-truth and missing-LICENSE warnings remain.
- Fixed project table and dashboard activity browser selectors to avoid ambiguity with repeated task rows/text.
- Rollback: revert commit `701d5aea3c1147e844a183da5a5036f84cee7db4`.

## MF-VF-022 — Add same-data form specimen

- Implementation commit: `c68f93ff648d07d73c679b49a280419830ac536e`.
- Added the fixed Workspace profile fields, UTC label, helper text, associated invalid URL error, pending/success feedback, and Cancel reset behavior. Browser assertions cover the exact form state under every skin and light/dark mode; no backend submission occurs.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed with 88 routes; `pnpm run test:browser` — 54/54 passed; screenshot evidence refreshed for 30 desktop, 30 tablet and 30 phone views. Contract and handoff validators passed with the existing generic SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Rollback: revert commit `c68f93ff648d07d73c679b49a280419830ac536e`.

## MF-VF-023 — Add reproducible open dialog specimen

- Implementation commit: `32281f6e2200602b791b9d9355ab7ba3fc19f845`.
- Added `/lab/behavior?fixture=archive-task`, a deterministic T-1045 completed-task dialog with exact title/body and Keep task / Archive task actions. The archive action is preview-only. The test checks initially open state, Escape, trigger-based reopening, focus return, and writes [a modal capture](visual-fidelity-evidence-ledger.md#deterministic-dialog-capture-mf-vf-023) with source/image provenance.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 55/55 passed, including the deterministic dialog regression; `pnpm run audit:pairs` — 30/30 current-source desktop, tablet and phone captures. Contract/handoff validators passed; human visual review remains pending.
- Rollback: revert commit `32281f6e2200602b791b9d9355ab7ba3fc19f845`.

## MF-VF-024 — Add common sidebar/nav specimen

- Implementation commit: `f0cd752f1bd13c61708173c06aa0a8acd2d61115`.
- Added fixed `Overview`, `Projects`, `Tasks`, `Reports`, `Settings` navigation to the shared dashboard fixture. Overview is current by default; selecting another item changes only the local current-state marker. Browser assertions verify information order, selection change to Reports, and restoration to Overview across all skins/modes.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 55/55 passed; `pnpm run audit:pairs` — 30/30 current-source desktop, tablet and phone captures. Contract/handoff validators passed; human visual review remains pending.
- Rollback: revert commit `f0cd752f1bd13c61708173c06aa0a8acd2d61115`.

## MF-VF-025 — Decoration-off fixture toggle

- Implementation commit: `dfd923e675c5b7f4013e678c4b2a977919e01213`.
- Added the “Hide decorative elements” switch. It suppresses decorative skin marks while preserving text, semantic labels, focus, controls, navigation selection, and form validation state. Browser coverage captures each skin in light and dark decoration-off mode; capture ledger lists all 30 files and digests.
- `pnpm test` — 13/13 passed; typecheck passed; production build passed (88 routes); `pnpm run test:browser` — 55/55 passed; `pnpm run audit:pairs` — 105 pair records plus current-source provenance for 30 desktop, 30 tablet, and 30 phone captures; decoration-off sidecar and PNG hash audit — 30/30 passed; contract and M13 handoff validators passed with existing SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Evidence commit records the current 90 baseline capture hashes and 30 decoration-off capture hashes. Rollback: revert `dfd923e675c5b7f4013e678c4b2a977919e01213`.

## MF-VF-026 — Grayscale capture variant

- Implementation commit: `ed7f4958b97c4992dbb0ad61005b935a74684100`.
- The browser capture applies a temporary grayscale filter to the full page at the fixed desktop viewport after asserting the shared dashboard heading, all five fixture tasks and profile field remain present. It removes the filter before standard tablet/phone captures. Thirty skin/mode grayscale PNGs and source/hash records are indexed in the visual evidence ledger; visual inspection of Classic light confirms color is removed while labels, controls and layout remain legible.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 55/55 passed (web server performs production build, 88 routes); `pnpm run audit:pairs` — 105 pair records and 30 current-source captures at each desktop/tablet/phone viewport; grayscale provenance/hash audit — 30/30 passed. Human visual review remains pending.
- Rollback: revert `ed7f4958b97c4992dbb0ad61005b935a74684100`.

## MF-VF-027 — Wait for fonts-ready before captures

- Implementation commit: `e3cfe15da3ec5b82c0ea8eb703a1a4e90be791f2`.
- Added a shared browser helper that awaits `document.fonts.ready` and asserts `document.fonts.status` is `loaded` before decoration-off, standard desktop, grayscale, tablet, and phone captures. The fixed environment-provided CSS font stack remains the documented fallback; no font binary or cross-platform raster identity is implied.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 55/55 passed (web server production build, 88 routes); `pnpm run audit:pairs` — 105 pair records plus current-source baseline captures at desktop/tablet/phone; all 150 skin/mode screenshots matched source, fingerprint, PNG digest, and `fontLoadStatus: loaded`. Contract and M13 handoff validators passed with existing SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Rollback: revert `e3cfe15da3ec5b82c0ea8eb703a1a4e90be791f2`.

## MF-VF-028 — Encode capture identity in output filenames

- Implementation commit: `8755d17e41bd17b88a20b40ca44afae4eed808f6`.
- Added stable filenames encoding skin, mode, viewport, and state. The matrix uniqueness test checks 150 profile names across 15 skins × 2 modes × five capture variants. Pair-audit inventory and A/B record paths now use the explicit desktop/tablet/phone default filenames. Same-profile reruns are reproducible at the same stable output path; different states and viewports have distinct IDs.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 56/56 passed (production build generated 88 routes); `pnpm run audit:pairs` — 105 pair records plus 30 current-source captures each for desktop/tablet/phone; all 150 filenames, sidecar source commits, fingerprints, PNG hashes, and font-ready states verified. Human visual review remains pending.
- Rollback: revert `8755d17e41bd17b88a20b40ca44afae4eed808f6`.

## MF-VF-029 — Capture reduced-motion specimen

- Implementation commit: `15cb218fdd221115bafb9981a869999be015769f`.
- Added a reduced-motion desktop capture for all 15 skins × 2 modes. The test activates the OS preference and verifies `data-motion="reduced"`, zero transition duration, dashboard KPI, selected Overview nav, all five tasks/status labels, and profile content before writing a provenance-bound PNG. It resets to no-preference before regular tablet/phone captures.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 56/56 passed (production build generated 88 routes); `pnpm run audit:pairs` — 105 pair records plus 30 current-source default captures at each desktop/tablet/phone size; 180/180 named captures match source, fingerprint, PNG hash and font-ready metadata; all 30 reduced-motion records confirm `motionPreference: reduce`. Contract and handoff validators passed with existing SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Rollback: revert `15cb218fdd221115bafb9981a869999be015769f`.
