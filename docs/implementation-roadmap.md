# Moonframe UI — Implementation Roadmap

**Status:** planning only. No implementation is implied by this task list.  
**Task convention:** each task should become a small GitHub issue with acceptance criteria and an explicit dependency.

## Phase 0 — Repository and upstream audit

- [ ] MF-001 Audit repository files, workspace manager, build/test tools and current app consumers.
- [ ] MF-002 Record React, TypeScript, Tailwind and package-manager versions.
- [ ] MF-003 Audit current shadcn-generated source, primitive providers and custom overrides.
- [ ] MF-004 Pin the Classic baseline (generator/style/version/commit) and document attribution/compatibility boundaries.
- [ ] MF-005 Spike Dialog, Select/Combobox and Dropdown/Menu for current provider vs alternatives; record an ADR before migrating.
- [ ] MF-006 Decide first-release package boundaries, supported browsers and package export strategy.

**Gate:** architecture decisions are recorded; no migration occurs just because a different primitive is trendy.

## Phase 1 — Contracts and token pipeline

- [ ] MF-010 Validate the Theme Contract schema and exactly 15 stable skin IDs.
- [ ] MF-011 Validate the Skin Grammar Contract and generate all 105 pairwise review records.
- [ ] MF-012 Approve token names/types/aliases and semantic token coverage requirements.
- [ ] MF-013 Select a DTCG-compatible source structure or document why another source is safer.
- [ ] MF-014 Build token validation: missing values, invalid type, unresolved aliases, cycles and mode holes fail CI.
- [ ] MF-015 Generate CSS custom properties and TypeScript helper types from canonical source.
- [ ] MF-016 Define CSS/Tailwind integration for static utilities and runtime CSS variables.

**Gate:** contracts are machine-valid; token generation is deterministic and repeatable.

## Phase 2 — Theme engine and Skin Lab shell

- [ ] MF-020 Implement validated skin/mode/density/motion/contrast preference model.
- [ ] MF-021 Implement fallback behavior and safe persistence.
- [ ] MF-022 Handle SSR/hydration and prevent avoidable flash of wrong theme.
- [ ] MF-023 Implement root data attributes and runtime token mapping.
- [ ] MF-024 Build Skin Lab selectors and representative reference screen.
- [ ] MF-025 Add modes for grayscale, decoration-off, viewport and long-content review.
- [ ] MF-026 Test all 30 baseline skin/mode combinations for render completeness.

**Gate:** skin switching changes the approved visual recipe; switching skin does not fork component behavior.

## Phase 3 — Four divergent proof skins

- [ ] MF-030 Specify/reference Classic Light and Dark.
- [ ] MF-031 Specify/reference Moonpunk Light and Dark.
- [ ] MF-032 Specify/reference Moonzine Light and Dark.
- [ ] MF-033 Specify/reference Moonledger Light and Dark.
- [ ] MF-034 Render the same dashboard, form, table, dialog and navigation in these four skins.
- [ ] MF-035 Review all six pairwise combinations among these four prototype skins.
- [ ] MF-036 Adjust shared recipes/tokens if differences are only color or artwork.

**Gate:** Classic, Moonpunk, Moonzine and Moonledger pass non-color grammar review before scaling.

## Phase 4 — Core component contracts and implementation

- [ ] MF-040 Finalize core component manifest and public naming.
- [ ] MF-041 Implement foundations/layout, buttons and links.
- [ ] MF-042 Implement fields, checkbox/radio/switch/select/combobox/date input.
- [ ] MF-043 Implement dialog, alert dialog, popover, tooltip, drawer and toast.
- [ ] MF-044 Implement navigation shell, tabs, breadcrumbs, pagination and command palette.
- [ ] MF-045 Implement cards, badges, avatar, skeleton, empty/error/loading states.
- [ ] MF-046 Implement table/data-table, filter bar, row selection and bulk actions.
- [ ] MF-047 Document props, states, keyboard behavior, examples and skin recipes for each public component.

**Gate:** every exported component has typed API, behavior spec, accessible states and automated tests.

## Phase 5 — Remaining skin grammars

- [ ] MF-050 Implement Moonriot grammar and Light/Dark maps.
- [ ] MF-051 Implement Moonhalftone grammar and Light/Dark maps.
- [ ] MF-052 Implement Moonglitch grammar and Light/Dark maps.
- [ ] MF-053 Implement Moonsmash grammar and Light/Dark maps.
- [ ] MF-054 Implement Moonink grammar and Light/Dark maps.
- [ ] MF-055 Implement Mooncrash grammar and Light/Dark maps.
- [ ] MF-056 Implement Moonpanel grammar and Light/Dark maps.
- [ ] MF-057 Implement Moonscrawl grammar and Light/Dark maps.
- [ ] MF-058 Implement Moonraw grammar and Light/Dark maps.
- [ ] MF-059 Implement Moonchrome grammar and Light/Dark maps.
- [ ] MF-060 Complete all 105 pairwise reviews with evidence and status.

**Gate:** all pairs pass or have an explicitly approved exception with owner/rationale/revisit date.

## Phase 6 — Premium blocks/templates and specialist extensions

- [ ] MF-070 Build shared AppShell, dashboard, CRUD, detail, settings and analytics blocks.
- [ ] MF-071 Add responsive/empty/loading/error states to templates.
- [ ] MF-072 Add Moonledger ERP workbench composition recipes.
- [ ] MF-073 Add Moonquest quest journal, inventory and progression presentation primitives.
- [ ] MF-074 Add optional operations and communication blocks without importing app business logic.
- [ ] MF-075 Verify tree-shaking, optional imports and bundle budgets.

**Gate:** templates are reusable presentation only; application data/business rules remain with consumers.

## Phase 7 — Original asset production and optional sound

- [ ] MF-080 Approve one original asset brief per skin; no recolored generic logos as a substitute for distinct identity.
- [ ] MF-081 Define SVG source/export rules and PNG sizes for each asset class.
- [ ] MF-082 Define logo/mark/icon/texture/illustration manifest and provenance schema.
- [ ] MF-083 Produce and review assets only after the visual grammar is approved.
- [ ] MF-084 Define SFX event taxonomy, consent, volume, mute, throttle and reduced-stimulation behavior.
- [ ] MF-085 Produce optional sound pack only after audio policy approval.
- [ ] MF-086 Validate licenses, provenance, optimized size, fallbacks and accessibility descriptions.

**Gate:** assets have approved provenance/licensing and no required state is communicated exclusively through artwork or sound.

## Phase 8 — Release readiness

- [ ] MF-090 Run typecheck, lint, unit/integration, accessibility, token and schema validation.
- [ ] MF-091 Run visual regression on 30 baseline appearances and representative component states.
- [ ] MF-092 Run viewport/density/reduced-motion/high-contrast risk matrix.
- [ ] MF-093 Test SSR/client, package exports, consumer build and installation path.
- [ ] MF-094 Resolve critical/high defects and record remaining limitations.
- [ ] MF-095 Publish migration guide, changelog and support policy.
- [ ] MF-096 Create release candidate only after gates are signed off.

## Required issue template fields

Every task issue should include: objective, scope/non-goals, dependencies, files/areas likely affected, acceptance criteria, test commands, accessibility checks, docs update, risk, status, and a clear definition of done. Issues should be small enough for a coding agent to execute without making architecture decisions that belong to a maintainer.

## Status vocabulary

- `proposed` — idea not yet accepted.
- `specified` — contract/design written.
- `implemented` — code exists.
- `tested` — required automated checks passed.
- `reviewed` — human design/engineering review completed.
- `released` — published with version and migration/release notes.

Do not collapse these states into one “done” checkbox.

---

## Documentation-baseline addendum (2026-10-25)

The repository baseline audit and new documentation-level contracts are recorded in [audit](audit/repository-baseline-audit.md), [research](research/research-log.md), [ADR](adr/0001-primitive-provider.md), [source plan](../contracts/moonframe-token-source-plan-v0.1.json) and [initial issue backlog](backlog/initial-issues.md). The historical checkboxes above remain intentionally unchanged: evidence of completed audit documents does not mean every part of a broad implementation issue has been satisfied.

**Before implementation:** verify existing GitHub issues and current branch; tackle provider spike, token-format proof, source-owned distribution decision, and same-data four-skin reference fixtures. Do not open a new branch unless repo policy requires it. Never treat the docs-only validator as production token validation. The next workflow is deliberately modest: specification -> local spike -> reviewed decision -> targeted component implementation -> 30 appearance tests -> 105 visual pair reviews -> release.

---

## Premium package planning phases (2026-10-25; non-implementation scope)

Detailed issue-ready work and dependencies: [premium atomic backlog](backlog/premium-catalog-atomic-issues.md). Existing [issues #1–#6](backlog/initial-issues.md) remain the foundation blockers; do not create duplicates automatically.

- **Gate S0, verified scope:** classify 151 components, 13 family + 131 concrete blocks, 72 page templates, 8 starter apps, 16 integration candidates into non-overlapping A–F levels and P0–P3 priorities.
- **Gate S1, auth + data:** specify core sign-in/registration/recovery forms and data table controlled query/state contracts without backend. Narrow prototype slice after provider/consumer decision.
- **Gate S2, premium compositions:** validate page-to-block and starter-to-page foreign keys, safe integration seams, complete state/RTL/mobile requirements.
- **Gate S3, visual QA plan:** 15 skins × 2 modes, 22 representative premium pages/blocks × 30 = 660 planned screenshots, plus 105 actual skin-distinctness pair reviews in a later UI implementation phase.
- **Gate S4, future implementation:** begin with 4 proof skins and two vertical slices only after token/provider ADR, accessibility and license constraints resolved. Avoid dumping all optional integrations into core.

No production code/assets/SFX nor additional GitHub issues were authorized by this planning addendum.
