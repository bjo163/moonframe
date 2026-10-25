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

## Token/theme source-of-truth refinement (2026-10-25)

The canonical [token dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) owns 78 historical IDs and proposed type/layer mapping. [Token source plan](../../contracts/moonframe-token-source-plan-v0.1.json) owns the **future** value-tree layout, explicit sparse overlay order and generated output contract; it contains **zero** production values. [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) is the **only** owner of preference enums, resolution precedence, OS fallback and root attributes. [Skin recipe spec](../../contracts/moonframe-skin-specifications-v1.0.json) remains the only visual-composition authority. [Token architecture](token-pipeline.md) explains these contracts; [ADRs 0002](../adr/0002-token-format-and-generator.md) and [0003](../adr/0003-theme-runtime-and-css-output.md) are proposed, not approved generator/provider choices.

`schemaVersion`/JSON Schema draft, dictionary contract version, token set values version (missing), theme contract version, generator version (unknown), skin recipe review version and package semver (unpublished) are separate. Removing/renaming an existing token/root ID, changing token type or semantics or breaking resolver fallback/API requires compatibility review and migration. No new `-v0.2`/theme `-v1.4` copy was created while original files remain canonical. A green *spec* CI result must never be used as token production release proof.

## Component behavior authority (2026-10-25)

The [component manifest](../../contracts/moonframe-component-manifest-v0.1.json) owns the **151 IDs**/catalog tiers; [Component Behavior Bible](../component-api-behavior-bible.md) is **the only** owner of global props, refs, events, HTML semantics, controlled state, composition/public-hook policy. [Per-ID behavior proposals](../../contracts/moonframe-component-api-contract-v0.1.json), [state matrix](../../contracts/moonframe-component-state-matrix-v0.1.json), [keyboard matrix](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) own machine-readable references, not generated TS/implementation. Catalog's historical `proposedAPI` placeholders remain legacy metadata and do not override new behavior authority; `premium-block` on a component is not automatically a Level C block. [Existing primitive ADR](../adr/0001-primitive-provider.md) remains open and is not replaced. The [component QA plan](../qa/component-testing-strategy.md) records evidence gates; no actual component tests have run.

## Advanced Data Workspace canonical authority (2026-10-25)

Do **not** create another Data Workspace Bible. [Existing Data Workspace](../premium/data-workspace.md) is specialist narrative authority, [Data Workspace Contract](../../contracts/moonframe-data-workspace-contract-v0.1.json) owns serializable data/query/selection/export and 31 capability records. [Data presets](../../contracts/moonframe-data-preset-catalog-v0.1.json) hold only domain-neutral references; Level C/D IDs remain in [block](../../contracts/moonframe-block-manifest-v0.1.json)/[page](../../contracts/moonframe-page-template-manifest-v0.1.json) manifests. [Data skin coverage](../../contracts/moonframe-data-skin-coverage-v0.1.json) owns 15 derived workspace composition recipes and 180 `not-rendered` cases, not skin IDs or token values. [Data query schema](../../schemas/moonframe-data-query.schema.json) is proposed structural JSON Schema; existing Node semantic fixtures are not a full Draft-2020-12 implementation. [ADR-0004](../adr/0004-data-workspace-engine.md) remains open, licensing/consumer support unresolved. Backend/permissions/export job stays consumer-owned.

## Auth & Security UI canonical ownership (2026-10-25)

[Existing Auth Bible](../premium/auth-ui-suite.md) owns flow semantics, privacy, trust boundaries and integration expectations; [existing auth catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json) continues owning 26 block references and four layouts; [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json) is its focused machine-readable state and page/block mapping extension. [Provider matrix](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) owns **research evidence**, not provider setup, pricing confirmation or verified Moonframe runtime support. [Threat model](../../contracts/moonframe-auth-threat-model-v0.1.json) owns attacker/boundary/control/test plans, not proof mitigation deployed. [ADR-0005](../adr/0005-auth-provider-neutral-ui-integration.md) **proposed**. Shared Form/Input/OTP/Dialog refs/events/keyboard remain in [Component API Bible](../component-api-behavior-bible.md); member table/query remains in [Data Workspace](../premium/data-workspace.md); generic block/template inventories remain separate. Theme/token/skin IDs are not forked; auth [240 planned appearance cells](../../contracts/moonframe-auth-skin-coverage-v0.1.json) have 0 screenshots/AT evidence. **No auth engine, backend policy, identity service, secret storage or runtime release in UI core.**

## Original asset + brand canonical authority (2026-10-25)

[Original Asset & Brand Bible](../brand/original-asset-brand-bible.md) is the exclusive brand hierarchy/art/rights narrative; [existing Asset Manifest](../../contracts/moonframe-asset-manifest-v0.1.json) is the authoritative production metadata inventory, currently 15 `not-produced` skin candidate groups, **zero** assets and **no** approved rights. [Written asset briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json) derive visual devices **by reference** from [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json); no visual review/105 pair approvals. [Conditional record schema](../../schemas/moonframe-asset-record.schema.json) and [fixture tests](../../contracts/fixtures/original-asset-v0.1.json) are documentation-level. [ADR-0006](../adr/0006-original-asset-pipeline-and-brand.md) proposed: one umbrella Moonframe mark, fifteen visual editions without mandatory standalone skin logos, source→exports gate and Git vs LFS decision only after real assets. [SFX](../../contracts/moonframe-sfx-contract-v0.1.json) alone owns event IDs/opt-in and still has zero audio files; no external fonts or icon sets accepted. **No repository LICENSE currently**, so brand/code/font/media redistributable rights remain owner-approved decisions. A public repo is not a production media license. No release/rights claims from passing Node validation.

[Asset QA coverage ledger](../../contracts/moonframe-asset-qa-coverage-v0.1.json): 120 proposed Light/Dark/context cells, zero screenshots/passes; original pairwise 105 skin reviews still in Skin Grammar. It is derivative coverage, not a source of brand marks, skin IDs or token values.
