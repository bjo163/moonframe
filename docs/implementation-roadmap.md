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

---

## Token & Theme Engine specification refinement (2026-10-25)

The [token theme audit](audit/token-theme-engine-audit.md), [research](research/token-theme-engine-research.md), [authoritative token pipeline](architecture/token-pipeline.md), [ADR-0002](adr/0002-token-format-and-generator.md), [ADR-0003](adr/0003-theme-runtime-and-css-output.md), [QA](qa/token-theme-validation-plan.md), and [10 issue-ready tasks](backlog/token-theme-atomic-issues.md) refine early MF-010 through MF-026 planning without marking implementation work complete.

Proposed phase gate: **S0** names/types/spec validation → **S1** bounded DTCG proof and current consumer matrix (#1/#5) → **S2** token overlay/contrast/runtime contract signoff → **S3** four divergent skin specimens and SSR first-paint proof (#6) → **S4** future production resolver/theme runtime/generator and 30-complete-map enforcement → **S5** 105 visual pair/consumer QA. Do not create a parallel task truth; existing #5 remains the token format issue.

---

## Component API & Behavior contract track (2026-10-25)

[Live component audit](audit/component-api-behavior-audit.md) and [primary research](research/component-api-research-log.md) precede the new [canonical API Bible](component-api-behavior-bible.md). [Machine-readable API](../contracts/moonframe-component-api-contract-v0.1.json), [24-state applicability matrix](../contracts/moonframe-component-state-matrix-v0.1.json), [37-pattern keyboard matrix](../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) and [QA strategy](qa/component-testing-strategy.md) provide the **specified-provisional** handoff for later engineering. [12 task-ready issues](backlog/component-api-atomic-issues.md) are *backlog only*, not GitHub issues.

Phases: provider/consumer/distribution evidence (#1/#3/#4) → naming/form/ref/event signatures → prioritize P1 Button/Input/Field/Tabs/Dialog/Combobox/Table/DataTable → identical high-risk keyboard fixtures in 4 skins × 2 modes → 30 appearance/a11y samples and separate 105 visual skin reviews → consumer build and versioned release. Do not mark any original implementation checkbox complete from a static validator result.

---

## Advanced Data Workspace refinement (2026-10-25)

Specialist [Data Workspace Bible](premium/data-workspace.md), [audit](audit/advanced-data-workspace-audit.md), [research](research/advanced-data-workspace-research-log.md), [ADR-0004](adr/0004-data-workspace-engine.md), [structured contract](../contracts/moonframe-data-workspace-contract-v0.1.json) and [14 atomic tasks](backlog/advanced-data-workspace-issues.md) define this docs-only track. Existing MF-PREM-004/005 plus GitHub #1/#3/#4/#5/#6 remain prerequisites: don't create duplicate issues.

Recommended order: consumer/provider/distribution research → stable row identity/column schema → query + offset/cursor + filter AST → selection/bulk → saved view/URL/export security → responsive/native semantics and 15 workspace skin recipes → semantic fixtures/CI → *future approved* Table/DataTable implementation slice → optional grid/virtualization/pivot after business case/license/AT proof. **180 data appearance specimens planned, zero rendered; 105 visual pairs unreviewed.** No UI assets or backend built by this refinement.

---

## Auth & Security UI integration planning (2026-10-25)

[Live audit](audit/auth-security-ui-audit.md) → [official standards research](research/auth-security-ui-research-log.md) → [expanded existing Auth Bible](premium/auth-ui-suite.md) → [62-flow contract](../contracts/moonframe-auth-flow-contract-v0.1.json) → [provider matrix](../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) + [threat model](../contracts/moonframe-auth-threat-model-v0.1.json) → [schema/negative fixtures](../contracts/fixtures/auth-security-v0.1.json) → [QA](qa/auth-security-ui-validation-plan.md) / [14 tasks](backlog/auth-security-ui-issues.md). Existing #1 consumer stack, #4 distribution, MF-PREM-002/003/008 remain dependencies and are **not** duplicate issues.

Future sequence: approve consumer session/SSR/BFF and provider requirements → review flow state/errors and safe event fields → real provider version/plan/licensing spike → align sign-in/recovery/privacy/anti-enumeration → passkeys/MFA/SSO/organizations/tenant and session management → representative 4-skin × 2-mode smoke → all 240 planned auth screen appearances/AT manual review → **only after separate authorization** code UI and real provider integration. Latest docs-only status: no provider installed, 0 screenshots, 0 auth runtime tests, not released.

---

## Original Asset & Brand policy refinement (2026-10-25)

[Live audit](audit/original-asset-brand-audit.md) → [primary standards research](research/original-asset-brand-research-log.md) → [canonical Asset Bible](brand/original-asset-brand-bible.md) → [15 per-skin written briefs](../contracts/moonframe-skin-asset-briefs-v0.1.json) + [enhanced existing manifest](../contracts/moonframe-asset-manifest-v0.1.json) → [proposed record schema/fixtures](../schemas/moonframe-asset-record.schema.json) → [ADR-0006](adr/0006-original-asset-pipeline-and-brand.md) → [QA](qa/original-asset-validation-plan.md) + [15 atomic issue-ready tasks](backlog/original-asset-atomic-issues.md). Historical MF-080–086 remain future *production* issue seeds and are not completed by specification. Existing #4/#5/#6 should not be duplicated.

**Now:** 15 planned, unreviewed art briefs; 15 empty per-skin manifest entries, 0 production files, 0 SFX, 105 unreviewed grammar pairs. **Next approval gates:** public package code license separately from trademark/art/audio/font licenses; owner approval of endorsed brand editions; secure SVG/tooling proof and reproducible source/export; 4-skin pilot **only with separate production authorization**; 15/30 and 105 pair review with human evidence; no false originality/production claims. Do not adopt Git LFS or cloud DAM until measured binary samples.

---

## Motion, Interaction & SFX scoped documentation refinement (2026-10-25)

Audit [current motion status](audit/motion-interaction-sfx-audit.md) → [verified WCAG/browser research](research/motion-interaction-sfx-research-log.md) → [focused Bible](motion/motion-interaction-sfx-bible.md) → [25 interruptible recipes](../contracts/moonframe-motion-recipes-v0.1.json) + [18 interaction mappings](../contracts/moonframe-motion-interactions-v0.1.json) → [15 art directions](../contracts/moonframe-motion-skin-matrix-v0.1.json) + [extended original six SFX IDs](../contracts/moonframe-sfx-contract-v0.1.json) → [ADR-0007](adr/0007-motion-and-optional-audio-engines.md) → [schema and 12 negative fixtures](../contracts/fixtures/motion-interaction-sfx-v0.1.json) → [180 pending QA cells](../contracts/moonframe-motion-qa-coverage-v0.1.json) and [14 atomic tasks](backlog/motion-interaction-sfx-atomic-issues.md).

Existing MF-020, MF-084 (SFX policy), MF-085 (future audio production), MF-092 (a11y/motion matrix), GitHub #1/#3/#4/#5/#6 and asset backlog already own overlapping prerequisites. **Do not mark these tasks complete** merely because specifications are linked. Future order: runtime consumer/engine evidence → scalar token review → recipe/interaction validation → OS reduced, SSR and focus spike → approval of skin motion signatures → opt-in SFX review and licensing → AT/performance/visual proof → only with separate authorization production UI or sound. No package or audio files installed/created today.

---

## Accessibility & Visual QA research-to-release gates (2026-10-25)

**Completed as specification, NOT UI QA:** [audited baseline](audit/accessibility-visual-qa-baseline.md), [W3C/ACT/axe/browser research](research/accessibility-visual-qa-research-log.md), [QA Bible](qa/accessibility-visual-qa-bible.md), [51 criteria map](../contracts/moonframe-accessibility-requirements-v0.1.json), [151 component QA profiles](../contracts/moonframe-component-qa-profiles-v0.1.json), [9 × 30 = 270 pending visual cells](../contracts/moonframe-visual-baseline-matrix-v0.1.json), [empty evidence/waiver register](../contracts/moonframe-accessibility-qa-evidence-v0.1.json) and [proposed ADR](adr/0008-accessibility-visual-qa-tooling.md). [16 atomic future work seeds](backlog/accessibility-visual-qa-atomic-issues.md) deduped against #1/#3/#4/#5/#6, MF-024/MF-090/MF-092. **No new GitHub issue created.**

**Proposed sequence:** consumer browser/AT/SSR target #1 → criterion applicability + manual-review signoff → stable QA schema/evidence/waiver rules and 151 risk profiles → #6 deterministic nine scenes/same data → benchmark local Playwright/axe optional Storybook on actual renderer (after separate implementation approval) → four divergent Classic/Punk/Zine/Ledger in Light/Dark → forced colors, 320px reflow, compact density and 24px-or-valid-exception pointer targets → broader 30-appearance render & reviewer-approved baseline → 105 original Skin Grammar pairs reviewed **in its own canonical matrix** → consumer accessibility/release scoped decision. Numeric screenshot diff tolerances and tool versions remain unapproved until tested.

---

## Package Architecture & DX implementation boundary (2026-10-25)

**Done in specification only:** [live package audit](audit/package-architecture-dx-audit.md) (starting 115 files, P0=0/P1=5/P2=6/P3=3), [primary-source research](research/package-architecture-dx-research-log.md), [canonical Package/DX Bible](architecture/package-architecture-dx-bible.md), [topology ADR-0009](adr/0009-package-topology.md), [distribution ADR-0010](adr/0010-package-distribution.md), [six *proposed* exports in a non-publishable package contract](../contracts/moonframe-package-architecture-v0.1.json), [11 proposed consumer journeys and 13 diagnostics](../contracts/moonframe-developer-experience-v0.1.json), [draft schema](../schemas/moonframe-package-architecture.schema.json) and [16 synthetic bad fixtures](../contracts/fixtures/package-architecture-dx-v0.1.json). [16 atomic dependency-aware tasks](backlog/package-architecture-dx-atomic-issues.md) refine existing [GitHub #4 MF-006](https://github.com/bjo163/moonframe/issues/4), plus #1/#3/#5/#6; **no extra GitHub issues/branches**. Existing MF-075, MF-093, MF-096 are future consumer/pack/release acceptance, **not checked off**.

**Next implementation prerequisites:** approve real Vite/SSR/React/TS/Node consumers and browser support #1 → code/art/npm-scope owner/licensing decision → ADR-0009 package topology and ADR-0010 registry deferment #4 → provider and token source #3/#5 → approve public exports/ESM declarations/CSS/Tailwind v4/SSR first paint → choose build/manager by bounded clean consumer spike → only with separate authorization implement package → `npm pack --dry-run --json` and clean packed tarball Vite/SSR install, peer/dependency/sourcemap CSS checks, accessibility/30 appearance/105 pair review → secure signed prerelease/GitHub Actions trusted publish owner decision. **No actual tarball, npm release or provenance was produced in this research task.**
