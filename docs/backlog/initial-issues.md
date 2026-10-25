# Moonframe — initial atomic issue backlog

**Snapshot:** 2026-10-25, baseline GitHub search found **0** issues/PRs. These are issue-ready small tasks, not evidence of implementation. After creating GitHub Issues, use each issue URL as the authoritative progress source; this file documents accepted scope and dependencies. Avoid creating hundreds of tickets at once.

## Common execution contract (applies to every issue)

Operate in `bjo163/moonframe` on current `main` unless repository protection later requires an approved PR. Before work inspect latest HEAD, relevant contracts, open issues and ADRs; do not create speculative branches. Do not add UI components or assets while a task is specification-only. Output evidence, exact changed paths, commands with results, accessibility/security effect, migration/rollback risks, and remaining open questions. **DoD** = scoped deliverable + validation evidence + updated canonical docs + reviewer/decision when required; do not mark 'released' just because docs pass.

## First-batch tickets

### MF-003 — Inventory actual consumer environment and lock feasibility assumptions
- **Goal:** identify candidate Moon apps, their React/SSR/TS/Tailwind/browser requirements without editing their code.
- **Dependencies:** baseline audit. **Scope:** `docs/research/consumer-matrix.md`, ADR update.
- **Steps:** list candidate apps, sources/commits, installed versions only when verified, gap/conflict matrix, compatibility risks.
- **Acceptance:** no guessed versions; source links per app; unknowns explicitly marked; reviewer can choose an initial fixture consumer.
- **Not in scope:** framework migration or monorepo setup. **Risk/rollback:** docs-only reversible. **DoD:** matrix reviewed and linked by ADR.

### MF-004 — Specify Classic reference implementation boundary
- **Goal:** compare current shadcn styles/CLI/primitive defaults to Moonframe Classic; pin reference options for a future prototype.
- **Dependencies:** MF-003. **Scope:** `docs/research/classic-baseline.md`, Bible/ADR links.
- **Acceptance:** upstream URLs and dates, exact selected style/config options or clearly open, compatibility/attribution rules, no false official affiliation.
- **Not in scope:** generating shadcn components. **DoD:** reviewer decision or explicit deferred recommendation.

### MF-005 — Provider selection evidence spike plan and decision
- **Goal:** compare Base UI, Radix, React Aria with identical Dialog, Select, Combobox and Menu fixtures.
- **Dependencies:** MF-003. **Scope:** `docs/adr/0001-primitive-provider.md`, fixture acceptance document.
- **Acceptance:** pinned versions, focus/keyboard/SSR/RTL/forced-color evidence per fixture, bundle/swap-cost report, weighted matrix updated from proof, reviewer accepts/defer.
- **Not in scope:** migrating Moonframe public APIs. **Risks:** hydration/keyboard regressions; rollback to undecided provider with documented evidence.

### MF-006 — Decide minimum package boundary and consumer export test proposal
- **Goal:** propose source-owned versus package/registry model without creating empty packages.
- **Dependencies:** MF-003 and MF-005 decision. **Scope:** `docs/architecture/distribution-adr.md`.
- **Acceptance:** one supported release target, export/css/reset ownership, peer dependency ranges (if verified), SSR and semver/migration implications, legal/name/license questions open.
- **Not in scope:** publish npm or assume scope availability. **DoD:** ADR with alternatives and reviewer signoff.

### MF-013 — Prove bounded DTCG 2025.10 subset and typed aliases
- **Goal:** produce fixture-only proof of token resolver and decide canonical source format.
- **Dependencies:** current dictionary/source plan. **Scope:** `docs/architecture/token-pipeline.md`, `docs/adr/0002-token-format.md`, future fixture/test paths when approved.
- **Acceptance:** pinned processor versions, valid/invalid alias fixtures, cycle/type/mode checks, demonstrated static-vs-runtime CSS bridge, no claim of 30 approved values.
- **Not in scope:** invent 15 skins' colors. **Risks:** incompatible future toolchain; rollback to documented subset.

### MF-024 — Specify deterministic Skin Lab content fixtures (no UI implementation)
- **Goal:** define same-content dashboard/table/form/dialog/nav fixtures for Classic, Moonpunk, Moonzine and Moonledger.
- **Dependencies:** MF-004 and MF-013 (spec phase sufficient). **Scope:** `docs/qa/skin-lab-fixtures.md`, grammar spec references.
- **Acceptance:** fixture content stable, viewport/font/time/zoom controls, grayscale and decoration-off modes, eight-dimension reviewer form, 6 initial and 105 eventual reviews remain `not-reviewed` pending screenshots.
- **Not in scope:** browser rendering now. **DoD:** reviewer can implement fixtures without inventing content/criteria.

## Later phase issue seeds (create only after prerequisites)

MF-014 token validator/invalid fixtures; MF-020 runtime preference model; MF-021 fallback; MF-022 SSR/hydration; MF-023 root attributes; MF-030 Classic prototype; MF-031 Moonpunk prototype; MF-032 Moonzine prototype; MF-033 Moonledger prototype; MF-035 first 6 visual pair reviews; MF-041 accessible core interactions; MF-060 105 actual reviews; MF-090 production tests; MF-095 changelog/migration. These remain planned, not completed. See [roadmap](../implementation-roadmap.md).

### Required issue review checklist

- [ ] Exact target, prerequisites and non-goals specified.
- [ ] Files and definition of done are small enough for one agent.
- [ ] Repro/test commands and evidence references included.
- [ ] Documentation/source-of-truth links preserved.
- [ ] Accessibility/security/compatibility and rollback considerations addressed.
- [ ] No fake implementation/review/release status.

## Verified GitHub issue links (created 2026-10-25)

| Task | GitHub issue | Dependencies | State |
|---|---|---|---|
| MF-003 | [#1](https://github.com/bjo163/moonframe/issues/1) | baseline audit | open |
| MF-004 | [#2](https://github.com/bjo163/moonframe/issues/2) | #1 | open |
| MF-005 | [#3](https://github.com/bjo163/moonframe/issues/3) | #1 | open |
| MF-006 | [#4](https://github.com/bjo163/moonframe/issues/4) | #1, #3 | open |
| MF-013 | [#5](https://github.com/bjo163/moonframe/issues/5) | token dictionary/source plan | open |
| MF-024 | [#6](https://github.com/bjo163/moonframe/issues/6) | #2, #5 | open |

Live GitHub issue state is authoritative if it changes after this snapshot. Do not create duplicate issues merely because the older task list has unchecked boxes.

## Premium scope follow-up without duplicate GitHub issues

The [10 new atomic premium catalog tasks](premium-catalog-atomic-issues.md) are backlog-only, **not created** as GitHub issues in this planning phase. Existing six GitHub issues remain linked above and take precedence where dependencies overlap.
