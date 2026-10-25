# Moonframe — source of truth, architecture and governance

**Status:** policy/specification only; 2026-10-25. No published package exists.

## Canonical ownership map

| Concept | Authoritative source | Derivatives must not redefine |
|---|---|---|
| Product invariants / scope | [Bible](../moonframe-ui-design-system-bible-v1.3.md) | README, templates |
| Canonical skin IDs, requested/effective mode, fallback names | [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) | component docs, Skin Lab |
| Visual pair matrix, primary grammar | [Skin Grammar Contract](../../contracts/moonframe-skin-grammar-contract-v1.0.json) | screenshots/briefs |
| Detailed visual recipes | [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json) | templates and UI |
| Token vocabulary | [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) | CSS / TS generated outputs |
| Final token values | **Not yet created / approved** | CSS generation must fail pending implementation |
| Component and block scopes | [Component Manifest](../../contracts/moonframe-component-manifest-v0.1.json), [Block Manifest](../../contracts/moonframe-block-manifest-v0.1.json) | issues and docs |
| Asset/SFX policy | [Asset](../../contracts/moonframe-asset-manifest-v0.1.json), [SFX](../../contracts/moonframe-sfx-contract-v0.1.json) | production asset folders |
| Implementation scheduling | [Roadmap](../implementation-roadmap.md), [small task backlog](../backlog/initial-issues.md) | issue tracker |
| Research evidence | [Research log](../research/research-log.md) | ADRs |
| QA/test status | [QA strategy](../qa/validation-strategy.md), future test reports | marketing/readme claims |

Avoid mutable data copied between docs. Schema version (format compatibility), contract version (data evolution) and production package version (semver) are **independent**.

## User groups and product boundaries

**Consumers:** Moon app developers, system maintainers, UI designers, and coding agents. Provider adapters, tokens, components, display blocks, templates, skin assets, and optional sound are UI **presentation**. Business workflows (auth, finance, networking, operations, messaging, inventory rules, persistence) stay with consumer apps. `Moonquest` means game-styled presentation, not game engine. `Moonledger` means ERP UI, not accounting.

Terminology: **primitive** supplies underlying keyboard/focus interactions; **component** is stable Moonframe UI API; **block** composes components for a task; **template** composes pages; **skin recipe** describes visual construction; **token** is named design value/role; **asset pack** stores illustrations/patterns/marks; **functional icon** communicates action; **motion pack** optional animation treatment; **SFX** opt-in supplemental audio. `System` is a mode preference, not an appearance identity.

## Packaging proposal (not architecture lock-in)

Start from one source-controlled workspace until consumers and release cadence justify separation. Potential later public exports `@moonframe/ui`, `@moonframe/ui/theme`, `@moonframe/ui/styles.css` are **examples only**; legal availability and publication decision open. A source-owned/registry distribution can be evaluated separately. Avoid 8 empty packages. Do not assume React, bundler, browser support or actual framework versions before implementation. CSS must document reset ownership, import ordering, hydration timing, tree-shaking and sideEffects. Test imports through a fixture consumer before claiming support.

## Lifecycle vocabulary

- `proposed`: idea, no approved contract.
- `specified`: contract written, internally validated, not code.
- `implemented`: source exists, tests not yet complete.
- `tested`: automated + relevant manual evidence linked.
- `reviewed`: accepted by relevant owner.
- `released`: tagged/published with compatibility/support evidence.

Use separate **specStatus**, **implementationStatus**, and **reviewStatus** when ambiguity is likely; `not-reviewed` refers to human evidence review and is not a release state.

## Change control and release

No new branch by default. Before writing, inspect latest main HEAD, policy and active PRs; write non-destructively; use normal fast-forward updates; never force-push/delete/rewrite history. API/token ID/breakpoint/type changes require an ADR, compatibility assessment, migration document and appropriate semver decision. Independent contract versions may change without implying a published npm release. Docs-only gate is JSON/links/consistency checks, not "production-ready". A security advisory and license selection require owner input, not boilerplate claims.

Contribution PR/commit description must provide: why, scope, canonical file(s), impact on 15 IDs/30 appearances/105 pair matrix, state change, acceptance steps, validation logs, accessibility/security/provenance effects, and rollback. AI contributors must not assert screenshots, QA sign-off, licenses, package availability or migrations without supporting evidence.

## 2026-10-25 premium-level authority clarification

Six deliverable levels are **A/B components**, **C concrete blocks**, **D page templates**, **E multi-page starter**, **F optional adapter**; their canonical IDs and item contracts are owned by [component manifest](../../contracts/moonframe-component-manifest-v0.1.json), [block manifest](../../contracts/moonframe-block-manifest-v0.1.json), [page manifest](../../contracts/moonframe-page-template-manifest-v0.1.json), [starter manifest](../../contracts/moonframe-starter-manifest-v0.1.json), [integration manifest](../../contracts/moonframe-integration-manifest-v0.1.json), respectively. Old 13 block blueprints are distinguished by `recordKind=family-blueprint`; they are not concrete ready-to-use items.

[Auth flow map](../../contracts/moonframe-auth-ui-catalog-v0.1.json) references canonical blocks but does not redefine them. [Data contract](../../contracts/moonframe-data-workspace-contract-v0.1.json) owns the query/state API semantics, not the visual block IDs. [Coverage matrix](../../contracts/moonframe-premium-coverage-v0.1.json) owns specimen progress only; no status without evidence. [Premium scope Bible](../premium/premium-scope-bible.md) owns the shared taxonomy/priority principles, not duplicated item records.

### Existing legacy namespace exception

Historically, `app-shell` occurs in both the component catalog and the 13-family block blueprint list. The latter has a qualified identifier `family:app-shell` and must **never** be treated as the Level C concrete block ref. A cross-level rename requires an ADR/migration and a future major schema change; new records must be unique across A/B, concrete C, D, E and F. Existing internal family IDs remain unchanged intentionally.
