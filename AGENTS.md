# Moonframe repository agent policy — M13 autonomous execution

This repository's standing agent instructions are defined here. They apply to Codex and other local coding agents. The owner authorized **unattended implementation of ordinary, reversible M13 work**, not fictional approvals, destructive changes, publishing or unsafe security bypasses.

## Canonical sources (read before changing files)

1. [Master TODO](TODO.md) — live index; the historical M0–M12 57/57 entry is an archive.
2. [M13 final reconciliation](docs/audit/m13-final-reconciliation-2026-10-26.md), [machine gates](contracts/moonframe-m13-readiness-gates-v0.1.json), and [plan freeze](docs/governance/M13_PLAN_FREEZE_2026-10-26.md).
3. [Visual tasks 001–292](docs/backlog/visual-fidelity-subatomic-tasks.md), [visual reference tasks 293–460](docs/backlog/reference-mockups-subatomic-tasks.md), and [nonvisual preflight tasks 001–028](docs/backlog/m13-preflight-remediation-tasks.md).
4. [Codex autonomous execution playbook](docs/handoff/CODEX_M13_AUTONOMOUS_MASTER_PROMPT.md).
5. Existing contract/schema/README/QA/brand files: consult **one canonical authority per domain**, never invent a competing source of truth.

## Default authority: automatic safe work, no user questions

- On existing `main`, pick **one dependency-ready pending task** at a time. Implement, test, capture exact evidence, update its checkbox/status, commit and continue. Routine design, code, tests, docs, refactors, safe dependencies and original noninfringing *generic* artwork are approved for unattended execution.
- Small reversible decisions are your responsibility. Resolve ambiguity from the contract, actual code and tests; choose backward-compatible, testable defaults. **Do not pause to ask about normal implementation details**.
- No arbitrary new branches, duplicate issues, unexplained wholesale rewrites, unrelated lockfile churn, secrets in logs or fake verification. Update root TODO and task evidence coherently, preserve 15 skin IDs and public behavioral component contracts.
- Use staged statuses precisely: `planned` → `implemented` → `captured` → `human-reviewed` → `accepted`. Never fabricate the last two. Prior approved files and SHA-labeled artifacts are immutable evidence.
- For blocked tasks requiring external conditions, label `blocked` with exact unmet dependency, create a safe fallback or draft for review, **skip to the next independent task**. Never manufacture owner/license/legal acceptance. At the end, distinguish `all actionable work done` from `all gates approved`.

## Nonnegotiable safety / permission boundaries

- Do not force-push, delete protected refs, rotate/share credentials, change access control or deploy to production, publish to npm, change billing, purchase services, incur new paid APIs, redistribute unlicensed assets or invent brand/copyright ownership without explicit separate authorization.
- The user permits automated commits of ordinary, tested work; network pushes should be handled only by the explicitly configured external local runner after verification and Git credential setup. If network permission is absent, leave clean local checkpoints.
- Keep SFX default silent/off, require actual user gesture/consent before playback, honor reduced stimulation and privacy; do not assert `played:true` without audio initialization evidence.
- Generated SVG/logo/image sources must be original or actually licensed, sanitized, optically reviewed with source/edit lineage and safe alt text. Consumer Moonwitness crown/characters are **not** mandatory generic Moonframe assets.
- Rebuild/resnapshot when needed. A green pipeline does **not** sign human visual fidelity, 105 pair approvals, 78×30 production tokens, audio licensing, or blanket WCAG compliance.

## Minimum verification per task

```sh
node scripts/validate-contracts.mjs
node scripts/verify-m13-handoff.mjs
pnpm test
pnpm run typecheck
pnpm run build
# run pnpm run test:browser when UI, browser behavior, motion, theme, snapshots, SFX or QA is touched
```

Run matching additional checks; record exact command/exit result, commit and paths. Tests may have preexisting failures: distinguish regressions from existing issues; fix blockers if within task scope.

## Continuous loop result contract

At the end of each Codex invocation, print a single machine-readable line:

`M13_RESULT_JSON: {"status":"progress|complete|blocked|fatal","taskId":"MF-VF-###|MF-PF-###|none","commit":"<SHA or null>","summary":"...","next":"<task ID or none>"}`

The local runner interprets `complete` only when no actionable tasks remain; `blocked` is not an owner approval. Preserve progress in Git and task ledgers so a newly started Codex process can resume without repeating work.
