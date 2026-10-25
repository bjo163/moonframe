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

Keep five evidence dimensions distinct. These are interpretation categories, not a requirement to copy five mutable fields into every contract; each contract remains the authority for its domain-specific status vocabulary.

| Dimension | What it answers | Minimum evidence for a positive claim |
|---|---|---|
| `specStatus` | Is the contract or requirement written with a stated scope? | Canonical source, scoped acceptance criteria, and structural validation where applicable |
| `implementationStatus` | Does the product behavior exist in source code? | Source path and identifiable behavior/scope; a written contract alone is not implementation |
| `testStatus` | Did the named automated or manual check actually run? | Command/check, source SHA, environment, result, and run record; spec validation is not a UI test |
| `reviewStatus` | Did the responsible human review the stated artifact and scope? | Reviewer, date, verdict, and linked evidence; a test pass alone is not review |
| `releaseStatus` | Was the reviewed artifact approved and distributed for a stated scope? | Version/tag, compatibility/support scope, and distribution evidence |

No dimension advances another automatically. `proposed` and `specified` describe specification maturity; `implemented` describes source existence; `tested` requires actual run evidence; `reviewed` requires a human record; `released` requires distribution evidence. Domain values such as `pending-values-and-contrast-review`, `not-reviewed`, `not-rendered`, and `no-rendered-ui-no-test-results` retain their source-specific meaning and must not be converted to a generic pass.

Four current contracts illustrate the separation: the token source plan says `source-values-not-created` and all 30 value slots remain pending; the Skin Grammar contract is `specified-not-implemented` while all 105 pair reviews remain `not-reviewed`; the visual baseline matrix is planned with 270 cells `not-rendered`; the QA evidence ledger says `no-rendered-ui-no-test-results` and contains no records. None of these specification statuses claims implementation, test execution, human review, or release.

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

## Motion / Interaction / SFX ownership (2026-10-25)

[Motion Bible](../motion/motion-interaction-sfx-bible.md) owns cross-component visual/sonic feedback **policy**, not component interaction semantics. [Motion Recipes](../../contracts/moonframe-motion-recipes-v0.1.json) own purpose/trigger/reduced/interrupt/no-motion metadata; [Interaction Map](../../contracts/moonframe-motion-interactions-v0.1.json) references [component state/keyboard](../component-api-behavior-bible.md) IDs. [Skin derivative matrix](../../contracts/moonframe-motion-skin-matrix-v0.1.json) cannot override [canonical Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json); [Theme](../../contracts/moonframe-theme-contract-v1.3.json) owns `motionPreference` system/full/reduced and `data-motion`; [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) owns canonical values/names. **Existing [SFX events](../../contracts/moonframe-sfx-contract-v0.1.json) are the only six active contract IDs**; names like `confirm.success` are unapproved compatibility proposals and must not be claimed public. [Asset Brand Bible](../brand/original-asset-brand-bible.md) owns source/provenance/licenses. [ADR-0007](../adr/0007-motion-and-optional-audio-engines.md) remains proposed, no library/runtime chosen. [180 motion QA cells](../../contracts/moonframe-motion-qa-coverage-v0.1.json) and 105 skin pairs remain unrendered/unreviewed; no SFX or CSS generated.

## Accessibility & Visual QA canonical evidence ownership (2026-10-25)

[Focused Accessibility & Visual QA Bible](../qa/accessibility-visual-qa-bible.md) owns **criterion-to-evidence traceability, browser/AT/manual protocol, visual regression review, defects/waivers and release decision procedure**; [central QA](../qa/validation-strategy.md) remains master phase gate. [51-criterion bounded WCAG mapping](../../contracts/moonframe-accessibility-requirements-v0.1.json) is the standards registry, [151 component QA profiles](../../contracts/moonframe-component-qa-profiles-v0.1.json) are *joins* to the original manifest/state/keyboard canon, and [270 visual baseline slots](../../contracts/moonframe-visual-baseline-matrix-v0.1.json) are *planned* screenshots, not new skin IDs or evidence. **Actual pair verdicts/evidence belong exclusively to existing [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), whose 105 pairs are still unreviewed.** [Zero-evidence register](../../contracts/moonframe-accessibility-qa-evidence-v0.1.json) and [conditional schema](../../schemas/moonframe-accessibility-qa-record.schema.json) forbid data-less WCAG/test/waiver claims. [ADR-0008](../adr/0008-accessibility-visual-qa-tooling.md) remains proposed, no axe/Storybook/Playwright runtime installed. Test-tool/visual baseline changes require consumer support, screenshot environment pins, reviewer-date approval, reproducibility and rollback; a local free runner must remain an option. No license/legal/WCAG claims without scoped real evidence.

## Package Architecture / Developer Experience canonical governance (2026-10-25)

[Focused Package/DX Bible](package-architecture-dx-bible.md) expands **this document's existing single-workspace suggestion** into bounded distribution, public exports, CSS consumer imports, SSR/React peer/type compatibility, docs/registry and secure release policies, without making a new package. [ADR-0009](../adr/0009-package-topology.md) evaluates one runtime vs workspace/monorepo (decision PROPOSED), [ADR-0010](../adr/0010-package-distribution.md) separates npm runtime from copied registry source (DEFERRED). [Package Contract](../../contracts/moonframe-package-architecture-v0.1.json) proposes six **unbuilt** subpath imports and explicitly marks `@moonframe/ui` **not verified for npm scope ownership**. [DX Journeys/Diagnostics](../../contracts/moonframe-developer-experience-v0.1.json) specify 11 install/customize/troubleshoot/upgrade flows and 13 prospective error codes, **none executable/implemented**; [schema/negative fixtures](../../schemas/moonframe-package-architecture.schema.json) and [fixture source](../../contracts/fixtures/package-architecture-dx-v0.1.json) are static-only. [16 small future tasks](../backlog/package-architecture-dx-atomic-issues.md) reuse [issue #4](https://github.com/bjo163/moonframe/issues/4) plus #1/#3/#5/#6, no new GitHub issues. **No npm publish, code/art license decision, npm Trusted Publisher/OIDC/provenance, registry/CLI, built CSS/TS, real packed consumer proof or packages exist.** Consumer/owner/legal/release approvals cannot be inferred from contract CI.


## Master integration registry / cross-domain ownership (2026-10-25)

**This existing document remains the canonical registry**; the master audit is evidence, the implementation-roadmap is scheduling, the Issue Bible is task staging. Canonical `owner` below means authoritative **document/contract**, not an invented person. Each concern has exactly one canonical policy authority; supporting machine contract records are listed separately. **Last reviewed baseline:** `41b89a4118c6c5775692d9145cf91545868f6a43`; statuses describe specification, never UI completion.

| Concern | Canonical policy owner | Canonical machine contract | Depends on / evidence gate | Current maturity |
|---|---|---|---|---|
| Product scope/principles | `docs/moonframe-ui-design-system-bible-v1.3.md` | `contracts/moonframe-theme-contract-v1.3.json` (IDs only) | Maintainer approval; no runtime | specified |
| Repository audit | `docs/audit/master-integration-audit.md` | none | GitHub baseline SHA | verified-snapshot |
| Skin IDs / requested vs effective mode | `docs/architecture/decisions-and-governance.md` | `contracts/moonframe-theme-contract-v1.3.json` (canonical IDs and resolution) | 15 unique / 2 baseline modes | validated-structure |
| Skin grammar / 105 pair reviews | `docs/moonframe-ui-design-system-bible-v1.3.md` | `contracts/moonframe-skin-grammar-contract-v1.0.json` (pair review evidence) | visual evidence, human review | 105 not-reviewed |
| Detailed visual recipe | `docs/moonframe-ui-design-system-bible-v1.3.md` (law) | `contracts/moonframe-skin-specifications-v1.0.json` | pair-review condition | specified |
| Token taxonomy / future values | `docs/architecture/token-pipeline.md` | `contracts/moonframe-token-dictionary-v0.1.json`, `contracts/moonframe-token-source-plan-v0.1.json` | #5 + ADR-0002/3; final values pending | 30 pending |
| Component API/behavior | `docs/component-api-behavior-bible.md` | `contracts/moonframe-component-api-contract-v0.1.json` | #3 primitive selection / manual APG | specified |
| Component inventory | `docs/premium/premium-scope-bible.md` (level distinction) | `contracts/moonframe-component-manifest-v0.1.json` | ID cross-check | 151 IDs mapped |
| Blocks/templates/starters | `docs/premium/premium-scope-bible.md` | `contracts/moonframe-block-manifest-v0.1.json`, `contracts/moonframe-page-template-manifest-v0.1.json`, `contracts/moonframe-starter-manifest-v0.1.json` | component API | specified |
| Auth/security UI | `docs/premium/auth-ui-suite.md` | `contracts/moonframe-auth-flow-contract-v0.1.json` | UI only; consumer auth backend | specified |
| Data workspace | `docs/premium/data-workspace.md` | `contracts/moonframe-data-workspace-contract-v0.1.json` | consumer query security/data engine | specified |
| Original asset/brand | `docs/brand/original-asset-brand-bible.md` | `contracts/moonframe-asset-manifest-v0.1.json` | rights/provenance approval | planned-no-assets |
| Motion/interactions/SFX | `docs/motion/motion-interaction-sfx-bible.md` | `contracts/moonframe-motion-interactions-v0.1.json`, `contracts/moonframe-sfx-contract-v0.1.json` | reduced motion; SFX opt-in | specified-no-audio |
| Accessibility / visual QA | `docs/qa/accessibility-visual-qa-bible.md` | `contracts/moonframe-visual-baseline-matrix-v0.1.json`, `contracts/moonframe-accessibility-qa-evidence-v0.1.json` | actual screenshots/AT/reviewer | 270 not-rendered |
| Package architecture/DX | `docs/architecture/package-architecture-dx-bible.md` | `contracts/moonframe-package-architecture-v0.1.json` | #1/#4; ADR-0009/10 | proposed-no-package |
| Research & ADR | `docs/research/research-log.md` (cross-domain index) | ADR files in `docs/adr/`; domain-specific research logs | official sources; version pins | researched, decisions pending |
| Roadmap / tasks / GitHub status | `docs/implementation-roadmap.md` (phases) | `docs/backlog/master-integration-issue-bible.md` (staging only) | issue dedupe and task evidence | proposed/open separated; GitHub owns live published issue state |

Each row names exactly one **document policy owner**. The machine-contract column may list multiple data authorities; external GitHub Issues own their live state, and specialist research logs provide evidence. Those roles do not create additional document policy owners.

**Term boundaries:** Skin = non-color visual grammar; appearance = skin + effective light/dark; `system` = requested preference; density/contrast/motion/direction = orthogonal axes. Token = typed value/alias, recipe = design composition, component = stable behavior/API, block = composition, template = page, starter = app shell composition, adapter = optional integration, asset = provenance-tracked graphic, SFX = off-by-default supplementary audio. Auth backend, game engine, accounting rules, query execution and tenant permissions belong to consuming applications.

**Resolution precedence:** (1) verified runtime/source evidence for what *exists*; (2) explicit approved ADR for architecture choices; (3) canonical contract for enumerated IDs/data; (4) policy Bible for behavioral/design law; (5) derivative backlog/addendum for proposals. When sources disagree, keep a finding in `docs/audit/master-integration-audit.md`, do not silently relabel maturity. Contract/schema/package versions advance independently.

**Transition evidence:** `proposed` needs hypothesis; `specified` needs canonical contract and acceptance; `validated-structure` needs machine-check output; `implemented` needs code; `tested` needs run logs, relevant human checks; `reviewed` needs reviewer and referenced evidence; `released` needs distributable/tag and gates. `not-reviewed` and `not-rendered` are independent QA fields, never implicit `pass`. No UI production claims from CI spec validator alone.
