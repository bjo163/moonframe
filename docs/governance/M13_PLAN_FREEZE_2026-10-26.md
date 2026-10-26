# Moonframe M13 — FINAL PLAN FREEZE / EXECUTION AUTHORIZATION

**Frozen:** 2026-10-26 · **Repository:** `bjo163/moonframe` · **Only working branch:** `main` · **Mode:** freeze the *goal/contracts/invariants*, execute the backlog autonomously.  
**Immutable snapshot:** [commit `723964322f9176bebf117b588e7976aff4030650`](https://github.com/bjo163/moonframe/tree/723964322f9176bebf117b588e7976aff4030650).  
**Machine freeze record:** [`MF-M13-PLAN-FREEZE-001`](../../contracts/moonframe-m13-plan-freeze-v0.1.json) (Git blob hashes for baseline plan/ledger files). A Git commit hash is immutable even as `main` advances; **no separate signed/tagged Git release or branch protection was created**.

## 1 — WHAT IS FROZEN

1. **Product mission:** Moonframe is a reusable React UI, theming, templates and visual-composition toolkit. Moonwitness is an independent consumer brand/example and must not leak its trademarks, story IP or private data into generic library defaults.
2. **15 canonical skins × Light/Dark = 30 appearances**. Same component behavior/keyboard/form/accessibility semantics across skins; noncolor structural art grammar must be materially distinct. The 105 unordered pairs are **human review opportunities**, not automatically approved.
3. **Four Moonwitness creative references:** R01 Mission Control = Moonpunk + Moonpanel/Moonglitch support; R02 editorial landing = Moonpunk + Moonzine; R03 poster = Moonsmash; R04 sign-in = Moonpunk clean-form cinematic. Source PNG hashes and sizes in [Creative Reference Contract](../../contracts/moonframe-creative-reference-contract-v0.1.json). The originals are **not GitHub repository binaries**; an owner-supplied local ZIP can be used for visual comparison only if present and verified, with rights handled independently.
4. **Token/source distinction:** 78 proposed identifiers and 30 planned source slots ≠ 17 existing runtime CSS bridge vars. Full values and consumer-branded theme API require versioned approval and actual tests.
5. **SFX/motion consent and behavior:** six canonical events and aliases; audio silent by default, requires trusted user action, lifecycle/consent hardening before sound feature release; 180 motion QA records are not human approvals.
6. **Scope:** `MF-VF-001…460` (visual/asset/layout/QA) plus `MF-PF-001…028` (SFX/token/motion/package/security), **488 task IDs, 14 evidence-backed implemented and 474 pending** at freeze. No GitHub Issues were mass-created; no task was accepted by owner without review.
7. **Handoff:** [Codex master prompt](../handoff/CODEX_M13_AUTONOMOUS_MASTER_PROMPT.md), repository-wide [AGENTS.md](../../AGENTS.md), [M13 cross-domain audit](../audit/m13-final-reconciliation-2026-10-26.md), and [18 readiness gates](../../contracts/moonframe-m13-readiness-gates-v0.1.json).
8. **Release truth:** technical CI passed before freeze at [run 40254216605](https://github.com/bjo163/moonframe/actions/runs/40254216605) for commit `45dee0406ff74c7cd9f7e8f4856dd7821ffeddfd`. Freeze/documentation commits must be checked independently. No blanket WCAG/visual approval, public npm registry publication, license clearance or original-asset distribution approval is implied.

## 2 — HOW FREEZE AND AUTONOMOUS IMPLEMENTATION COEXIST

- **Do not change scope casually.** Existing 488 IDs are authoritative; do not generate new branches/issues/second master TODOs or rewrite historical M0–M12 claims.
- **Do change working code and task statuses.** Frozen versioned files are reference anchors; implementation, tests, assets, CSS, docs and live TODO evidence may evolve. A completed task updates its live checklist and root count, never the historical frozen blob.
- **Change contracts carefully.** If implementation discovers a real contradiction, do not fake a passing test or silently rewrite canonical meaning. Record an amendment in `docs/governance/m13-amendments/` including affected files, compatibility evidence, migration and version bump if public API semantics change. Resolve ordinary backward-compatible choices automatically; external legal/license/brand acceptance remains blocked.
- **No frequent user check-ins needed.** Execute reversible ordinary tasks without questions. A genuinely nondelegable external approval does not stop the queue: produce safe draft/evidence, mark that task `blocked-external-approval`, continue independent items.
- **Never auto-certify:** original PNG redistribution rights, logo trademark, copyright, human artist review, SFX consent legality, complete WCAG conformance, production deployment or npm publication. Do not skip those gates simply to report “488/488”.
- **Git safety:** work on `main`, normal small commits, no `git push --force`, no destructive resets; external autopilot runner may push fast-forward after tests and configured credentials. CI must remain green on latest landed commit.
- **Stop criterion:** every realistically actionable micro-task has verifiable evidence; truly external-dependent tasks have accurate blocker and artifact. Report done vs blocked separately instead of infinite retry, token burn or owner impersonation.

## 3 — MACHINE CHECKS / SUCCESSFUL ARTIFACTS

```sh
node scripts/validate-contracts.mjs
node scripts/verify-m13-handoff.mjs
pnpm test
pnpm run typecheck
pnpm run build
pnpm run test:browser    # when UI/theme/assets/browser behavior touched
```

**Local Codex:** One command from the repository root: `node scripts/run-m13-autopilot.mjs --until-done --push` after installing/authenticating Codex CLI and GitHub credentials. The runner is **not** a remote background service; it only works while the user's own computer/session is running. `--push` must be deliberately supplied for automatic fast-forward pushes, and some tasks may remain external-approval blocked.

## 4 — THE FROZEN DECISION

**GO:** automated local development and ordinary tested commits, continuing across short Codex sessions.  
**NO-GO (without separate actual authority):** production deployment, public npm publish, risky access/credential changes, unlicensed art/audio redistribution, owner/legal/manual approval fabrication.  
**Final philosophy:** stop revisiting grand plans. Implement, verify, checkpoint, and continue. Keep the plan immutable as a reference and the actual work freely progressing within the defined safe boundaries.
