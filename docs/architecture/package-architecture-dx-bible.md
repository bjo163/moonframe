# Moonframe UI — Package Architecture & Developer Experience Bible

**Edition:** 2026-10-25. **Authority:** packaging, public exports, consumer setup, distribution topology, docs/playground isolation, tooling/release governance. **Readiness:** `specified-not-implemented`; a private local ESM shell (`package.json`, `src/index.js`) and temporary Node/Vite tarball smoke exist under explicit local-only approval. No published package, CLI, source registry, build outputs, production CSS, UI components, binaries, audio or publishing configuration. [Live audit](../audit/package-architecture-dx-audit.md) · [official research](../research/package-architecture-dx-research-log.md) · [ADR-0009](../adr/0009-package-topology.md) · [ADR-0010](../adr/0010-package-distribution.md).

> Package what consumers need, not everything that might one day exist. A green specification validator proves only contracts. The empty local shell supports only its verified root ESM import; all other examples and commands below are **proposals/acceptance targets, not runnable now**.

## 1. Product decomposition and canonical ownership

| Product surface | Proposed location/distribution | Responsibility and explicit exclusions | Status |
|---|---|---|---|
| Small generic UI runtime and shared behavioral primitives | Candidate **one** runtime package with clearly bounded subpaths; placeholder `@moonframe/ui` | [Component API](../component-api-behavior-bible.md) defines semantics/props/ref, no business authorization/API networking | Proposed only |
| Original token sources/type contracts and generator | Private repo build inputs initially, not another npm package until external consumers prove independence | [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json), [Token Source Plan](../../contracts/moonframe-token-source-plan-v0.1.json) own values, typed aliases and deterministic CSS/TS generation | Not implemented |
| Generated CSS semantic themes and approved skin recipes | Explicit exported CSS subpath(s), *after* production tokens approved | [Theme](../../contracts/moonframe-theme-contract-v1.3.json) owns 15 skins/Light-Dark/System preference; [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) owns visuals/105 pair review; no duplicated values here | Not generated |
| Tailwind v4 integration | Optional static, documented CSS bridge; never require custom app-specific build plugin for basic UI | [Token pipeline](token-pipeline.md)/[ADR-0002](../adr/0002-token-format-and-generator.md)/[ADR-0003](../adr/0003-theme-runtime-and-css-output.md) own syntax/selector/runtime; this document owns *import/override order* | Proposed |
| Premium reusable blocks and page templates | Candidate source-owned registry or optional additive runtime subpath only after consumer proof | [Premium](../premium/premium-scope-bible.md), manifests own **131 concrete blocks, 13 family blueprints, 72 templates and 8 starters**; block copying distinct from runtime install | Deferred |
| Starter/example and Skin Lab/docs playground | Future app(s), **private development tool dependencies only**, not npm runtime transitive deps | [Accessibility & Visual QA](../qa/accessibility-visual-qa-bible.md) owns QA and 30 appearances; deterministic [Skin Lab issue #6](https://github.com/bjo163/moonframe/issues/6) | Not implemented |
| Optional provider adapters (data/chart/calendar/editor/auth) | Separate lazy subpath/optional package only if dependency graph/bundle proves need | [Data](../premium/data-workspace.md), [Auth](../premium/auth-ui-suite.md) own integration interface. App owns fetching, account/session, authorization, ERP/game rules | No adapters installed |
| Icons, image/font/texture packs and SFX | Future rights-cleared *asset* package(s), never auto-bundled into core | [Asset & Brand](../brand/original-asset-brand-bible.md) owns licenses/provenance; [Motion/SFX](../motion/motion-interaction-sfx-bible.md) owns opt-in sound and reduced-motion semantics | Zero production files |
| Installer/CLI/hosted docs | Separate future DX tooling only after repeat install/upgrade friction measured | No global executable, telemetry, hosted registry or dependency on private service for v1 | Deferred |

**Naming convention:** public docs and contracts in **English** for APIs/CLI/import examples, issue/user reports may be Indonesian. Keep stable manifest IDs and historical token/skin names unchanged; do not silently Anglicize public names. All framework-specific examples are tagged `proposed` until tested.

## 2. Package topology recommendation and criteria

[ADR-0009](../adr/0009-package-topology.md) evaluates A one package, B small multi-package workspace, C hybrid package+registry, D monorepo with docs/Skin Lab apps. **Conditional recommendation:** start with one publishable runtime candidate within one repo—*not* actually publishable yet—and leave docs/token source as separate **directories**, not separate versioned npm packages. Why: no consumer version/independent release cadence is known; 15 skins are **visual variants of one behavior system**, not 15 packages. If a docs/Skin Lab consumer and package gain independent build/release boundaries, introduce a small workspace then, not automatically Turbo/Nx. Splitting may be justified later by clean boundary/consumer performance evidence.

**Proposed logical graph (not directory creation today):**
```text
canonical token source + skin contract  --> generator --> distributable CSS + TS types
shared primitives / component APIs     --> one ESM-first UI runtime candidate
optional adapters (data, auth UI...)    --> consumer opted-in separate boundary
premium blocks/templates               --> source-owned registry candidate (deferred)
docs + Skin Lab consumer app            --> imports packed/public entries, not internals
consumer Vite / verified SSR app        --> installs real tarball & CSS, tests 15×2
```
No cycles, no runtime dependency from core UI to docs/registry/Storybook/Playwright or optional chart/editor/auth engine. Every future pack cannot import `src/internal/*` not publicly exported. Components may import internal helpers privately within package build, but consumers may access only documented exports.

## 3. Distribution: npm, source registry and hybrid are DIFFERENT

[ADR-0010](../adr/0010-package-distribution.md) contrasts runtime npm package, source-owned registry, hybrid and **deferred registry until runtime proven**. npm consumers upgrade dependencies through SemVer and public export map; registry consumers **own copied source**, merge changes, and may fork behavior/skin (compatibility risk), while upstream still provides license/source integrity. A copied registry block **must not claim to be the same versioned implementation** as npm runtime. No shadcn official affiliation, branding, ownership or compatibility claim.

**Potential future static registry minimum only:** 1–2 *approved* source-owned example blocks linked to canonical block IDs, generated `registry.json` conforming to current shadcn [registry schema](https://ui.shadcn.com/docs/registry/registry-json) and [item schema](https://ui.shadcn.com/docs/registry/registry-item-json), with explicit file destinations, `registryDependencies`, runtime/peer dependencies, CSS/token prerequisites, source attribution, license, item checksum, semantic version compatibility and dry-run preview; reject path traversal and unknown URLs. **Never auto-overwrite** a consumer-edited file; detect conflicts and offer diff/skip/manual merge with rollback. Test on a disposable app with same source/skin and verify clean re-install; no private registry/auth or custom CLI in v1 unless user evidence changes decision. Official docs [get started](https://ui.shadcn.com/docs/registry/getting-started) also support static generated JSON; live API/server is not required.

## 4. Machine-readable package and export contract

[Proposed package surface manifest](../../contracts/moonframe-package-architecture-v0.1.json) is the canonical package-level proposal, **not a `package.json`**. Name candidate `@moonframe/ui` must remain `proposed-unverified` until npm owner/scope/trademark/license checks; no named `@moonframe/tokens` etc are registered. Contract distinguishes:
- logical packages/modules and ownership/tier/maturity;
- **future public** `.` main runtime, `./styles.css`, `./tokens.css`, `./tailwind.css`, `./theme`, `./components/*` where justified—every item is *proposed*, path `null` (no built file), do not claim imports work; consider limiting number of entrypoints to avoid API commitments. Import examples below are pseudocode.
- export metadata: `types`, ESM `import/default`, **unresolved** CJS `require`, browser/node SSR safe boundaries; explicit type declaration output and source map choice.
- metadata policy: `type=module` candidate; `files` whitelist `dist/**`, LICENSE/README; package `sideEffects` must preserve CSS imports (avoid `sideEffects:false` that drops styles); `react`/`react-dom` versions **unknown external peers**, never bundle duplicate React; optional adapters not accidental peers; `engines`, `license`, `publishConfig`, `version` `null` until decided.
- deep `src/*`, internal token files, artifacts/fixtures, test stories are **private**, rejected by `exports`; `./*.` wildcard export is avoided unless explicit need.
- ESM-first **candidate**, CJS dual output **deferred** until consumer proof; Node [package exports](https://nodejs.org/api/packages.html) must match TypeScript `nodenext`/bundler resolution. TypeScript [declaration publishing](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) requires matching `.d.ts`/types conditions. SSR browser-only code must never access DOM at import time. React major/refs/version peer range owned by [Component API](../component-api-behavior-bible.md) and consumer compatibility decision #1.

**Proposed illustration only; does not compile/run today:**
```tsx
// NOT IMPLEMENTED. @moonframe/ui is an unverified proposed package name.
import { Button } from "@moonframe/ui";
import "@moonframe/ui/styles.css";
function Example() { return <Button type="button">Action</Button>; }
```
Do not paste into production until exports, CSS, types, React peer and app target are proven.

## 5. Token CSS, Tailwind v4 and consumer override boundary

[Token Plan](../../contracts/moonframe-token-source-plan-v0.1.json) currently proposes **30 empty pending** effective skin/mode maps and no generator. **Do not duplicate or invent numeric values**. Package-side acceptance:
1. Generate deterministic, typed, alias-checked CSS/TS from approved source; reject unknown 15-skin IDs, missing light/dark coverage, unresolved CSS vars and stale output.
2. Export a **self-contained base semantic stylesheet** for consumers regardless of Tailwind, with documented `--mf-*` CSS custom properties and `[data-skin]`/`[data-mode]` root resolution owned by Theme. `system` is preference, not third appearance.
3. Export an **optional Tailwind v4 `@theme inline` bridge** where semantic runtime values must become static named utilities. Verify with the supported consumer compiler; don't auto-import `@import "tailwindcss"`/Preflight into a component package and override app reset invisibly. Choose a single reset owner (consumer or explicit opt-in). The theme bridge could require consuming Tailwind compilation; label this separately from plain compiled CSS.
4. Define import order: consumer reset/preflight (if opted) → core semantic CSS → optional Tailwind bridge at compile-time → component/skin styles → documented consumer override layer. CSS layers/cascade/shadow roots need real spike; do not promise universal override precedence without testing.
5. Static utility names in source; [Tailwind class detection](https://tailwindcss.com/docs/detecting-classes-in-source-files) scans text, so package-derived utilities may require explicit `@source` or generated CSS depending on packaging. No `bg-${skin}`, unbounded arbitrary variants, runtime class name builders.
6. SSR/prepaint: caller-provided preference/nonce/CSP strategy, bundled CSS ready before hydration, no flash-of-wrong-skin; Theme owns preference precedence and `data-motion`, contrast, density and `dir`; package docs own setup/diagnostics. No-JS first readable Classic fallback is a proposed non-script baseline; actual implementation must prove it.
7. Font files/art need rights-approved release records, source and fallback; no remote tracking/fonts by default. All skins must pass [QA](../qa/accessibility-visual-qa-bible.md) at supported density/motion/forced-colors.
8. CSS payload/bundle budget is *measured later*, never invented. Validate tree-shaking by actual packed tarball + consumer analyzer and monitor sideEffect metadata so CSS isn't accidentally eliminated.

## 6. Consumer developer journey — planned guides, NOT verified quick start

| Journey | Expected future user outcome and evidence (guide content must match real tested API) |
|---|---|
| Install core | Real scoped package availability/legal license, chosen `npm|pnpm` instructions, pinned version, peer dependency resolution, clean temp project |
| Render Button/Input | Verify exported type declarations, accessibility, CSS loaded; no reliance on hidden internal path |
| Configure Tailwind v4 | Clear optional bridge and app Preflight ownership; static class scan or `@source` if needed; no config-v3 examples |
| Select skin+mode | 15 exact IDs, `light/dark/system` preference with effective `light/dark`, density independent, first paint/hydration test |
| Override token | Supported `--mf-*` semantic variable in app override layer; no manual editing of generated CSS |
| Use premium block | Explicit block dependencies, sample props/fixture and optional source registry **only if later accepted** |
| Add optional data/chart/auth adapter | Imports do not drag unrelated package into core; missing optional peer yields clear install diagnostic, secure business logic consumer-owned |
| SSR | Test real supported framework/Vite or Next consumer; id/preference and CSS consistent from server to client |
| Debug and upgrade | Identify missing CSS, token map mismatch, unknown skin, peer duplicate React, invalid export, stale generator and hydration mismatch; link exact migration/semver |
| Contribute | Read canonical Bible/contracts, choose small issue, one branch **only if repo policy later changes**, run actual verified scripts, collect typed/render/QA evidence before asserting success |

**Documentation deliverables after implementation:** Quick Start; Vite consumer; verified SSR; Tailwind v4 styles; Skin Setup; Customization; Blocks/Registry; Optional Integrations; Exports/Tree-shaking; Troubleshooting; Upgrade; API docs; Contribution; Versioned Changelog; Security/Licensing; Skin Lab 30 appearances and accessible-state examples. Initial printed snippets must say `proposed-not-executable`. [DX journey & diagnostics contract](../../contracts/moonframe-developer-experience-v0.1.json) owns machine-readable steps and failure classifications, not a working site.

### Errors and diagnostics policy

| Error | Future disposition | Safe handling |
|---|---|---|
| Unknown skin/mode/density or missing complete token map | Build-time type error for source/config, runtime dev warning on untrusted persisted preference with documented fallback | One stable code `MF_DX_UNKNOWN_SKIN` or `MF_DX_INVALID_PREFERENCE`; no noisy production logs |
| Missing CSS/Tailwind static source | Consumer smoke build or visual screenshot blocker | Guide required CSS import, `@source` when justified; prevent invisibly unstyled interactive UI |
| React duplicate/unsupported peer or missing optional adapter | Clean install/typecheck build failure, dev diagnostic | Never silently bundle React or install optional package as core transitive |
| Unsupported private/deep import | Node `exports` resolution should reject | Point to documented public subpath, no wildcard fix |
| SSR/hydration mismatch | Browser hydration console+visual/focus gate | Keep semantic state, no forced client-only directive in whole core |
| Stale generated CSS/token values | Generator byte-determinism/build failure | Regenerate from canonical source, no manual patch of dist |
| Registry conflict | Install preview/skip; never overwrite silently | Diff + file hash, consumer owner approves merge or rollback |
| Missing license/rights | Hard publication/release blocker | Owner decision, never infer OSS approval from public GitHub visibility |

## 7. Workspace/build graph and package tooling: phase triggers

**Today:** one spec repository, Node 24.22.1 LTS Actions checker only; **no installed bundler/framework/package manager**. Prefer one package with simple scripts initially, not Turbo/Nx or 8 idle packages. [ADR-0009](../adr/0009-package-topology.md) weighs workspace alternatives:
- no workspace (one package) is simplest; a future docs/Skin Lab app is independent dev-only consumer;
- npm workspaces if simple multi-package and CLI already chosen, pnpm workspaces if verified existing consumer workflows need its linking/filter behavior—[pnpm](https://pnpm.io/workspaces) requires `pnpm-workspace.yaml`;
- Turbo/Nx only when a measured multi-target build graph/remote cache justifies adding orchestrator.
- reject cycles, accidental dev-only dependencies in npm tarball and unpublished workspace aliases; deterministic lockfile and `packageManager`/Node pin chosen by maintainer after consumer matrix. Current CI Node 24.22.1 LTS is a **contract runner**, NOT proven package `engines.node` minimum.

**Future package task order (not runnable today):** `validate contracts → generate approved tokens → build .d.ts + ESM JS → CSS entrypoints → static export integrity → typecheck/lint/unit → component/keyboard/AT → npm pack --dry-run --json → unpack/install packed tarball into clean Vite → verified SSR consumer → tree-shaking/optional dependency isolation → release evidence review`. Source map contents and source-package exposure require review for privacy/licensing.

## 8. Versioning, compatibility, distribution safety and release

**No package release exists.** Independent version planes: (a) JSON `schemaVersion` and `contractVersion`; (b) future token set/generator versions; (c) future package SemVer and docs/API compatibility; (d) optional registry-item content compatibility. A docs-only contract bump is not a public npm release.

Public SemVer breaking changes include export/path removal, renamed TS props/callbacks, changed behavior/DOM semantics, stable CSS variable/slot contract or 15 skin IDs/effective theme behavior; new optional exports may be minor, safe bug fixes patch *after real usage/testing*. If registry source copied, an upstream npm update **does not auto-edit customer source**; include compatibility/install diff, migration and fallback. Changesets v3 is **candidate** if release note automation worth it; not installed. Prefer changelog and owner-approved prerelease `next` before `latest`; no invented version or SLO/support window.

**Supply chain future gate:** owner selects code license + separate art/font/audio/trademark rights, verifies `@moonframe` scope and npm package name/ownership, enables npm 2FA and role restrictions; verify trusted-publisher npm CLI **>=11.5.1** and Node **>=22.14.0**, GitHub-hosted runner, exact repo/workflow binding, narrow `id-token: write` in publish job and smallest `contents` permissions, immutable action revisions after review; no long-lived publish tokens. npm [trusted publishing](https://docs.npmjs.com/trusted-publishers/) uses OIDC, but not active in repo. **Dist-tag management via OIDC has separate permission and CLI minimum >=11.21.0 or >=12.2.0** per npm docs—do not assume a basic publish configuration can promote `latest`.

**Release proposed stages:** issue/PR scoped change → versioned schema/API/migration notes → green static/TS/browser/AT/security/license/consumer gates → deterministic tarball audit `npm pack --dry-run --json`, inspect file whitelist and source map/license; clean independent consumer and CSS/theme 30-mode tests → reviewer approvals → RC signed tag/GitHub Release notes → *separately authorized* npm publication with provenance verification → validate registry metadata, consumer installation → rollback via deprecate/pin/revert, not relying on arbitrary unpublish. [GitHub Actions secure-use](https://docs.github.com/en/actions/reference/security/secure-use) applies minimal scopes/secret hygiene; provenance attestation is traceability, not proof safe code or legal rights. **Zero releases/tarballs/provenance exist now**.

## 9. Docs, Skin Lab and DX measurements

**Candidate docs approach:** prioritize a lightweight docs site *or* Storybook component reference, avoid maintaining redundant live APIs. Storybook v10.6 at source access supports documentation/stories but isn't a replacement for real Vite/SSR consumer. [Skin Lab #6](https://github.com/bjo163/moonframe/issues/6) needs deterministic same content 15×2, density/motion/forced-colors controls, token/state inspections, four divergent proofs before 105 pairs can be human-reviewed; it remains a docs/dev tool, not bundled into runtime. Example source/TS snippets should import **actual version-pinned public exports** after they exist, never import repo internals or copied editorial mocks without disclosure.

DX metric **plans** (all baseline `not-measured`): time-to-first-render in clean app, number of setup/config steps, successful tarball install %, React singleton violations, CSS missing incidence, average time to diagnose unknown-skin/hydration/export failures, changelog-to-consumer-example parity, docs search success and registry overwrite/conflict rate. No analytics/telemetry without user consent and product decision.

## 10. Current vs future CI/release/readiness

| Gate | Present evidence | Future blocking criteria |
|---|---|---|
| S0 specification | Node 24.22.1 LTS `node scripts/validate-contracts.mjs` and `--self-test`, JSON link/reference checks, 15/30/105 and future package contract check | Present only, does NOT validate npm `exports` in Node |
| S1 runtime package (later) | **none** | React+TS types, API naming/refs, CSS generated, dual-mode token resolver, typed exports, no unmet dependency |
| S2 Vite consumer (later) | **none** | Pack/unpack clean Vite, CSS/Tailwind v4 scan, React peer singleton, imports and tree-shaking |
| S3 supported SSR consumer (later) | **none** | Hydration, no DOM import-time, theme first paint/nonce/CSP and correct focus |
| S4 UI/skin tests (later) | **none** | 30 appearances, 105 human skin pairs, [a11y/visual](../qa/accessibility-visual-qa-bible.md) and [component tests](../qa/component-testing-strategy.md) |
| S5 supply-chain release (later) | **none** | Legal scope/license, trusted publishing/OIDC permissions, clean tarball and versioned docs, signing/provenance evidence and rollback |

**Readiness vocabulary:** `proposed` candidate, `specified` contract documented, `implemented` source exists, `tested` actual required commands/consumer evidence, `reviewed` human signoff, `released` published version. All current public package names/paths/ranges remain `proposed-unverified`.

## 11. Security, contribution and unresolved decisions

Forbidden in UI core: secret/API-key storage, auth sessions, ERP/accounting/game rules, subscription/billing computation, network calls on import, credential logging/telemetry, unlicensed artwork, autoplay SFX, dependencies on optional premium engines, package-time scripts fetching unknown third-party binaries. Registry importer must validate destination path and source integrity before disk writes; future installer must not read or exfiltrate private project files. Consumers retain ownership of session/auth/DB/data, routes, configuration, asset licenses and content.

**Open decisions with owner/trigger:** real consumers React/TS/Node/support range (#1), primitive provider (#3), token source/generator (#5), package boundary/public name/export list (#4), registry use case and source license (#4 + legal), SSR/theme first paint (ADR-0003), which full docs tool (docs prototype), trusted publishing rights/npm maintainer account (separate approval), actual release cadence and support policy (first RC). [Atomic package/DX tasks](../backlog/package-architecture-dx-atomic-issues.md) are the prioritized issue-ready follow-up; no code/CLI/registry/npm release is authorized by this document.
