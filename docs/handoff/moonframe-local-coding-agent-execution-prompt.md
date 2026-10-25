# MOONFRAME — LOCAL CODING AGENT EXECUTION PROMPT (M0 ONLY)

> **Copy and paste everything below to the local coding agent.** You are executing a bounded **M0 Repository/Contract Trust** task, not implementing Moonframe UI. **First work item is [MFI-001 / GitHub #7](https://github.com/bjo163/moonframe/issues/7)**. Validate and finish it before selecting [MFI-002 / #8](https://github.com/bjo163/moonframe/issues/8) in a subsequent focused session. Stop at the M0 gate. Do not start M1 package scaffolding or any UI components from this prompt.

## Mission and immutable boundaries

You are a careful local Git/Node/document-validation coding agent for `https://github.com/bjo163/moonframe`. Moonframe UI is **one behavioral component system, 15 genuinely distinct visual grammars and 30 light/dark baseline appearances**. Skin IDs must remain exactly:

`moonpunk`, `moonriot`, `moonzine`, `moonhalftone`, `moonglitch`, `moonsmash`, `moonink`, `mooncrash`, `moonpanel`, `moonscrawl`, `moonraw`, `moonchrome`, `classic`, `moonquest`, `moonledger`.

`system` is a requested color-mode preference resolving to effective `light`/`dark`; it is **not** a 16th skin/31st appearance. There are **105** unordered skin pairs; **all 105 remain `not-reviewed`** absent screenshots/manual reviews. There are **30 pending token-value slots** and **270 not-rendered visual cells**. No final token palette, UI component implementation, npm package, original asset or SFX exists in the audited baseline. **A green contract validator is not visual, a11y, React or release evidence.**

**Verified handoff source snapshot (2026-10-25 Asia/Jakarta):** `main@08c72ad009d613f39955b8f9e0bfb3e5e301000b`, final first audit spec CI [passed](https://github.com/bjo163/moonframe/actions/runs/40188542601). New release-train and root TODO documentation subsequently advanced `main`; observed documentation index commit `182430294d8d75317a2874dd466d0d56e85f0a40`. This prompt's own eventual commit will advance `main` again. **Never hard reset or pin the checkout to the handoff SHA**. Inspect `origin/main` *live* and compare for new work first.

**Known GitHub issue state at audit:** #1 MF-003 consumer environment, #2 MF-004 Classic, #3 MF-005 provider, #4 MF-006 package, #5 MF-013 DTCG, #6 MF-024 Skin Lab fixture, #7 MFI-001 identity validator, #8 MFI-002 canonical-owner validator: **8 OPEN**, 0 PRs. No task/issue has been claimed implemented. Actual GitHub may change: recheck before edits. Do not create duplicates.

## 1. Bootstrap or synchronize the local checkout safely (read-only first)

1. If no local checkout exists in the intended workspace, do `git clone https://github.com/bjo163/moonframe.git` into a **new, unoccupied** folder and enter it. If a checkout already exists, `cd` into it; do not clone a duplicate or overwrite anything.
2. Run/record these diagnostics before any sync:

```bash
pwd
git rev-parse --show-toplevel
git remote -v
git status --short --branch
git log -5 --oneline
git branch -vv
git rev-parse HEAD
node --version
```

3. Verify `origin` points to the expected `bjo163/moonframe` repo and intended branch is `main`. If not, **STOP** and report actual remote/branch. Never silently switch unrelated repos. Verify that the HEAD still has a clean or safely understood working tree.
4. **Protect user-created/uncommitted data**: inspect `git diff`, `git diff --staged`, untracked filenames, and whether another agent is working. Do not use `git reset --hard`, `git clean -fd`, `git push --force`, rebase, blind merge or overwrite. If files relevant to the task are modified/untracked by user, **STOP** and request a non-destructive handoff of that work; do not assume it can be stashed without permission.
5. If clean (or all changes are demonstrably isolated and safeguarded) fetch before synchronizing:

```bash
git fetch origin
git status --short --branch
git log --oneline --decorate --max-count=5 origin/main
git rev-list --left-right --count HEAD...origin/main
```

6. If checked out on clean `main`, origin is correct and no divergence exists, `git pull --ff-only origin main`. If branches diverge, behind/ahead has unreviewed changes, or branch rules forbid direct main, **STOP** instead of forcing a reset or new speculative branch. Re-read the latest tasks/CI/ADRs if HEAD advanced. Record exact SHA before/after.
7. Check which tools exist rather than installing: `node --version`, `npm --version` if installed, `gh --version` if installed. Baseline CI uses **Node 22** and only Node built-ins for existing validator; use a compatible Node version if available. A local Node mismatch is an environment blocker, not permission to rewrite package code.

## 2. Read canonical sources *before editing*

- `README.md` — project scope/current navigation.
- `TODO.md` — ordered execution map and per-task evidence/release gate; **not** a replacement for GitHub live status.
- `docs/audit/master-integration-audit.md` — evidence and INT-F01 ID collision, remaining findings.
- `docs/architecture/decisions-and-governance.md` — canonical owner and lifecycle rules.
- `docs/backlog/master-integration-issue-bible.md` — complete **MFI-001**, **MFI-002** acceptance and dependencies.
- `docs/implementation-roadmap.md` and `docs/backlog/initial-issues.md` — legacy MF-003 collision and six historical tickets.
- `docs/architecture/release-train-and-adoption.md` — M0 release artifact and blocked M1+ publication policy.
- `docs/moonframe-ui-design-system-bible-v1.3.md`, `contracts/moonframe-theme-contract-v1.3.json`, `contracts/moonframe-skin-grammar-contract-v1.0.json` — locked invariants.
- `scripts/validate-contracts.mjs` in full and `.github/workflows/contract-validation.yml` — existing spec validator and negative self-test behavior. Search any existing fixture/helper and inspect how errors are accumulated before altering validation.
- GitHub [#7 MFI-001](https://github.com/bjo163/moonframe/issues/7) body/comments (if `gh` available); [#8](https://github.com/bjo163/moonframe/issues/8); existing #1–#6 search before adding any new issue.

Canonical source of truth: contract owns IDs/mutable machine data; specialist Bible owns behavior; ADR owns architecture choice; issue URL owns real issue status; `TODO.md` is only a top-level planning/index mirror. No new master Bible or duplicate registry.

## 3. Baseline tests (MUST run and capture before changes)

This repository at snapshot has **no verified runtime package.json**. Only run confirmed scripts initially:

```bash
node scripts/validate-contracts.mjs
node scripts/validate-contracts.mjs --self-test
```

Both steps were included in the successful remote workflow, but **run locally now**, record Node version, exact exit code, stdout/stderr and commit SHA. The self-test checks deliberate negative cases; do not disable or weaken it to make CI green. If new remote CI is failing, inspect the actual failed run/step logs, reproduce the failure and correct its true cause before calling M0 healthy. If tests cannot run because Node is unavailable, report `NOT RUN` and stop the task's implementation completion claim.

## 4. Execute ONLY MFI-001 / #7 as the first atomic change

**Problem:** the legacy roadmap originally reused `MF-003` for a shadcn audit while [GitHub #1](https://github.com/bjo163/moonframe/issues/1) already owns **`MF-003 = consumer environments and support constraints`**. README/roadmap wording was editorially reconciled, but the static validator does not prove future task IDs cannot silently drift again.

**Objective:** add deterministic, **offline** task identity consistency checks with a minimal, maintainable data source, respecting the existing GitHub owner of issue status. A verified mapping of six initial issue IDs and MFI-001/#7, MFI-002/#8 may serve as seed, but **do not query GitHub at CI runtime**. Prefer a single declarative mapping or fixture that can be read by existing validator; avoid a second authoritative issue-status tracker or a giant new JSON backlog. Constrain checks to canonical active task definitions and explicitly distinguish historical/superseded references from active declarations, so ordinary prose mentioning MF-003 is not a false positive.

**Expected edit scope (confirm actual files first):**

- `scripts/validate-contracts.mjs` — small, built-in Node validation function/invariants; prefer existing helper patterns and error reporting.
- `docs/backlog/initial-issues.md` / `docs/implementation-roadmap.md` — minimal canonical mapping note/reference if genuinely necessary, not rewrite old archive text silently.
- A small fixture/negative test under the existing `contracts/fixtures/` approach **only if needed**. If current self-test can hold negative cases, extend it rather than creating a redundant test runner.
- Optionally edit `TODO.md` **only** to sync the verified state on completing the issue. Do not edit package, skins, behavior APIs or design assets.

**Concrete acceptance criteria:**

- [ ] The canonical `MF-003` meaning remains exactly GitHub #1 consumer environment. Legacy shadcn audit reference is marked historical/superseded and cannot create a second active task.
- [ ] #1–#8 existing issue stable IDs do not get duplicated/reassigned. A unique ID maps to one canonical outcome and GitHub issue URL, when published.
- [ ] Valid fixture/ledger passes offline with a recorded command.
- [ ] Invalid fixture with **same ID, incompatible task title/outcome** fails with nonzero exit and actionable message naming ID and conflicting sources.
- [ ] Invalid fixture with duplicate GitHub issue number assigned to a second active ID also fails if that mapping is tracked.
- [ ] Test catches an ID drift in roadmap/active backlog when possible; write unsupported file patterns/false-positive exclusions as documented limitations.
- [ ] Both existing `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` pass after changes; deliberate invalid fixture(s) fail. **Do not merely hardcode `assert(false)` in a fake negative fixture.**
- [ ] No changes to 15 skin IDs, token/pair/status data, 151 component IDs or product code; spec-only CI gate stays truthful.
- [ ] One small scoped commit with rationale/evidence; GitHub #7 comment includes actual SHA/test results, no invented success or new duplicate ticket.

**Implementation suggestion, not a forced API:** inspect how current validator scans markdown and references. Keep a fixture-owned normalized list with stable IDs, meaning and exact link. Compare *active declaration zones* in existing `docs/backlog/`, `docs/implementation-roadmap.md` and root `TODO.md`, not arbitrary mentions in user-facing history. Guard exact issue URL/number reuse. Add negative cases to the existing self-test that execute the real parser/checker. Store no mutable `open/closed` state in the fixture; GitHub owns that live state. Keep scope one focused session; if the change affects unrelated validators, split/stop and document the follow-up.

**Required MFI-001 validation:** show tests before/after, expected FAIL for invalid ID/issue fixtures, expected PASS normal check, and a small provenance mapping such as `MF-003 ↔ #1, MFI-001 ↔ #7, MFI-002 ↔ #8`. Recheck Markdown local links for files edited where practical. Compare `git diff --check` and scoped `git diff --stat`, inspect every changed line, ensure no surprise artifact. Risk: false-positive historical mentions, duplicate source of truth, regex too broad. Rollback: revert only the MFI-001 commit with normal `git revert` if authorized; preserve fixtures/evidence and issue context, no history rewrite.

## 5. M0 integration checkpoint and next task (DO NOT auto-implement UI)

After MFI-001 tests and commit are validated, re-fetch/verify `origin/main` and GitHub #7 status. If approval/permission permits, add an issue evidence comment and close **only** when every check and DoD is proven; otherwise leave open with evidence. Then report **STOP** at first-task completion. The following task is [MFI-002/#8](https://github.com/bjo163/moonframe/issues/8): canonical-owner/reference validation, explicitly blocked by MFI-001. Its expected files are `docs/architecture/decisions-and-governance.md`, `scripts/validate-contracts.mjs`; a later focused run handles it, then MFI-003/004, optional MFI-012, and M0 docs checkpoint review.

**M0 release/adoption artifact:** verified source and spec/negative tests + GitHub issue ↔ task mapping + `TODO.md` traceability and a docs-only status report. This is for human/AI reviewers and existing clones—**not** a React/npm release, not a prerelease and not a package consumer import. If test/evidence gate is blocked, M0 decision is `blocked`, with named recovery task/owner decision and no fake version/tag. Do not mint tags from M0 without separate maintainer approval.

**M1+ preview only (do not execute in this run):** #1 environment → #3 provider → #4 distribution and first package/synthetic consumer; independently #5 DTCG → token generator proof; theme runtime → #2 Classic/#6 fixture → four-skin Skin Lab → bounded core component exports → forms/overlays → optional premium/data/skins/assets → RC and stable gates. See `TODO.md` / release strategy for safe lane parallelization. Any missing ADR/rights/license/React support is a blocker, not license to guess.

## 6. Git and CI rules

- Work on **existing `main`** if clean and repository policy permits it; never create speculative branches. Do not force-push, delete/rewrite history or mass-migrate dependencies. If protection/rules changed, stop and request authorized PR workflow rather than bypass.
- Commit only task-scoped changes with meaningful message such as `test(governance): enforce stable issue ID mapping and collision fixtures`.
- **Push only after actual local checks pass**, working-tree scope reviewed, remote `main` checked for concurrent changes, and Git permission/policy permits. Use plain `git push origin main` only on fast-forward. If rejected, **stop** and reconcile without force.
- Re-fetch remote SHA after push. Inspect GitHub Actions on the **new SHA**, not a historic run. Do not claim PASS if run is pending or inaccessible; report URL and state.
- Never publish npm package or GitHub release/tag; never add secrets, real credentials or PII to fixtures/logs/issues. Do not create auth backend, accounting/game logic, production asset, SFX, or UI code.
- No automatic `done` status in TODO just because a commit exists: actual acceptance/test and reviewer requirements must pass. Update M0 checkpoint only when full phase gate accepted.

## 7. Safety stop conditions

**Stop with a concise blocker report** if remote is unexpected; dirty work conflicts; diverged branch; ambiguous or duplicate active issue ownership; substantive ABI/skin/token contract change required; current validator failure cannot be reproduced or fixed safely; a fixture test reveals undocumented behavior; authorization for protected branch/release/issue close is missing; Node/runtime unavailable; or new remote commits alter task assumptions. Do not fabricate test results or paper over failures.

## 8. Required final response after the first run

Report in Bahasa Indonesia with exact evidence:

1. Repository, remote, current branch, initial local HEAD, fetched `origin/main`, final commit SHA and push verification (or no push).
2. Completed **MFI-001 / #7 only**; whether all acceptance checkboxes truly passed, what remains blocked; no claim MFI-002 or UI is done.
3. Modified file paths, rationale, and explicit scope/non-goals adhered to.
4. Exact commands with Node version, exit code and stdout/stderr summaries: baseline spec, negative fixture, post-change tests, `git diff --check`, remote CI URL/status.
5. Evidence references: issue comment URLs, commit, validation fixtures; manual checks and unsupported checks listed as **NOT RUN**.
6. Unexpected findings, security/a11y and compatibility risks, rollback instructions and owner approvals needed.
7. M0 checkpoint status (`docs-only checkpoint` if full gate reviewed, otherwise `blocked/in-progress`), first safe local deliverable, next single task **MFI-002/#8**.

**No work beyond M0 on this prompt. First task MFI-001; subsequent sessions select from verified `TODO.md` + live GitHub Issues only.**
