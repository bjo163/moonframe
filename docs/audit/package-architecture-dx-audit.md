# Moonframe Package Architecture & DX — actual repository baseline

**Audited:** 2026-10-25 (Asia/Jakarta); **repository:** https://github.com/bjo163/moonframe; **public default branch:** `main`, writable, not branch-protected when inspected; **audited SHA:** [`f50099f4351990a9acc11bd0947d159607b3a7ab`](https://github.com/bjo163/moonframe/commit/f50099f4351990a9acc11bd0947d159607b3a7ab). **Git recursive tree:** 115 tracked blobs, nontruncated; **6 existing issues**, **0 PRs**, recent document-contract commits; **0 GitHub releases** returned by official API. Tag listing endpoint was unsupported by this GitHub connection; **tag count cannot be asserted**. No local checkout inspected, so local working-tree state unknown.

## Exact evidence inventory

| Repository evidence | Observation; status |
|---|---|
| [README](../../README.md) §Current status/Initial implementation strategy/Versioning | Explicitly says documentation only, `@moonframe/ui` a *working name*, no package. **verified-existing** |
| [Master Design System Bible](../moonframe-ui-design-system-bible-v1.3.md) §1, §2, §10, §15 | React + TypeScript + Tailwind v4 **target**, not installed stack; 15 skins/30 mode appearances. **specified-not-implemented** |
| [Governance](../architecture/decisions-and-governance.md) §Packaging proposal | Already recommends **one source-controlled workspace first**, `@moonframe/ui` as illustrative future export; names/registrations undecided. **partially-specified** |
| [Roadmap](../implementation-roadmap.md) Phase 0/1/8 and MF-006/MF-075/MF-093 | Package boundaries, build, tarball/consumer tests and release still unchecked. **specified-not-implemented** |
| [Issue #4 / MF-006](https://github.com/bjo163/moonframe/issues/4), [#1 / MF-003](https://github.com/bjo163/moonframe/issues/1), [#3](https://github.com/bjo163/moonframe/issues/3), [#5](https://github.com/bjo163/moonframe/issues/5), [#6](https://github.com/bjo163/moonframe/issues/6) | Direct package/export/distribution owner (#4), consumer/browser (#1), primitive (#3), token proof (#5), same-content Skin Lab (#6). **verified-existing**; do not create duplicate issues |
| [ADR-0001](../adr/0001-primitive-provider.md), [ADR-0002](../adr/0002-token-format-and-generator.md), [ADR-0003](../adr/0003-theme-runtime-and-css-output.md) | Primitive provider/token format/runtime SSR proposed/unresolved. **partially-specified**; cannot lock npm dependencies |
| [Token Source Plan](../../contracts/moonframe-token-source-plan-v0.1.json), [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json), [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json), [token pipeline](../architecture/token-pipeline.md) | 78 historical token IDs, 30 planned maps, **no approved value outputs**, proposed CSS/TS/Tailwind bridge. **specified-not-implemented** |
| [Component API](../component-api-behavior-bible.md), [Component Manifest](../../contracts/moonframe-component-manifest-v0.1.json), [Premium scope](../premium/premium-scope-bible.md) | 151 proposed components; 131 concrete blocks + 13 family blueprints, 72 page templates, 8 starters. No implementation/exports. **specified-not-implemented** |
| [Data](../premium/data-workspace.md), [Auth](../premium/auth-ui-suite.md), [Motion](../motion/motion-interaction-sfx-bible.md), [Asset](../brand/original-asset-brand-bible.md), [A11y/Visual](../qa/accessibility-visual-qa-bible.md) | Existing canonical topic boundaries and separate optional integration and license decisions. No copied business/security logic permitted. **verified-existing specifications** |
| [.github/workflows/contract-validation.yml](../../.github/workflows/contract-validation.yml), [Node validator](../../scripts/validate-contracts.mjs) | **Implemented-and-tested for specification contracts only**: GitHub ubuntu-latest, Node 22, checkout@v6, setup-node@v7, built-in dependency-free JSON/link/negative checks. No package build/test/publish job. Last [CI at audit HEAD](https://github.com/bjo163/moonframe/actions/runs/40185275896) SUCCESS |
| Entire 115-file tracked tree | **MISSING:** `package.json`, `pnpm-workspace.yaml`, npm/yarn/pnpm/bun lockfiles, TS/Vite/Tailwind build configs, any `src/*.tsx`, CSS package files, built `dist`, `registry.json`, CLI, test runner, Storybook/Skin Lab site, LICENSE/COPYING, CODEOWNERS, CONTRIBUTING.md, SECURITY.md, CHANGELOG.md, release workflows, `.npmignore`, npm scope verification, package tarball and published versions. Git tag endpoint unsupported; no claim tags absent. |
| [.github](../../.github/workflows/contract-validation.yml) | Only spec CI workflow, permissions `contents: read`, no publish OIDC, no actual attestation. |

**Existing source-of-truth map:** token values in Token Dictionary/Source Plan; preference and skin IDs in Theme; visual identity and 105 pairs in Skin Grammar; public component API in Component API; catalog in Premium manifests; auth/data assets/a11y/motion in own Bibles. **This new architecture/DX Bible owns only packaging, distribution, imports/exports, consumer integration, publishing and contribution workflows.** Repository review found no existing detailed package-contract manifest nor specific package/DX Bible to amend; reuse [governance](../architecture/decisions-and-governance.md) and existing ADR folder rather than invent a new parallel architecture directory.

## Findings — evidence-based planning risks, NOT shipped runtime bugs

| ID | Severity | Evidence / impact | Proposed correction and dependency |
|---|---|---|---|
| PKG-01 | **P1** | No package/build/export manifest or actual consumer → imports unusable | Define one bounded *candidate* package map; do not create publishable package; #1/#4 |
| PKG-02 | **P1** | `@moonframe/ui` advertised as working name but npm scope/name/licensing not verified | Mark placeholder; legal/scope approval before metadata, #4/owner |
| PKG-03 | **P1** | Token CSS output empty, CSS ownership/SSR not proven → FOUC/nonfunctional skins | Package-facing CSS contract referencing Token Plan, #5/#1 |
| PKG-04 | **P1** | No peer dependencies / React/TS/Node/browser consumer compatibility decided | Require clean Vite and relevant SSR tarball fixtures before support claims, #1/#3/#4 |
| PKG-05 | **P1** | Repo has no LICENSE; package publish/OIDC/provenance/releases unconfigured | Separate code/art rights decision and secure release policy, owner/#4 |
| PKG-06 | **P2** | No npm vs source registry vs hybrid choice/ownership model | Candidate topology + separate registry ADR and bounded spike, #4 |
| PKG-07 | **P2** | No public/private exports, ESM/CJS/types/CSS `sideEffects` policy | Plan conditional/declaration/exports and forbid private imports |
| PKG-08 | **P2** | No package workflow/tooling pin, tarball validation, cycle audit | Minimal one package before workspaces, future Node/manager selection |
| PKG-09 | **P2** | No documented consumer quickstart/skin setup/debug upgrade journey | Write proposed DX journeys, explicitly **not executable today** |
| PKG-10 | **P2** | No registry provenance/conflict/overwrite/migration or docs/preview dependency boundary | Registry schema investigation, postpone CLI, no privileged auto-overwrite |
| PKG-11 | **P2** | CI validates contracts but no secure release stages or reverse validation of packed files | Package CI/release gate plan, no secret handling now |
| PKG-12 | **P3** | Tailwind v4 class scanning and `@theme inline` not specified from consumer perspective | CSS import/preflight/scan recipe for future tests |
| PKG-13 | **P3** | No docs versioning / measured DX metrics or contribution templates | Proposed quickstart/troubleshooting/upgrade/comparisons, no invented metrics |
| PKG-14 | **P3** | Tags unavailable via permitted API; release data empty, repo no runtime build | Record evidence limitation and pending official tag review |

**Severity counts:** P0=**0**, P1=**5**, P2=**6**, P3=**3** (**14** total). Missing source code is a planned implementation gap, not a runtime production defect. Never mark `implemented-and-tested` for anything except existing spec-only Node CI.

### Existing issue dedupe

- [#4 MF-006](https://github.com/bjo163/moonframe/issues/4) **owns package boundary,exports,distribution ADR**; no new GitHub issue named the same.
- [#1](https://github.com/bjo163/moonframe/issues/1) consumer support; [#3](https://github.com/bjo163/moonframe/issues/3) primitive; [#5](https://github.com/bjo163/moonframe/issues/5) tokens; [#6](https://github.com/bjo163/moonframe/issues/6) Skin Lab; [#2](https://github.com/bjo163/moonframe/issues/2) Classic baseline.
- Roadmap MF-001/MF-002/MF-006/MF-075/MF-093/MF-096 already reference packaging, size, consumer and release. Future atomic tasks refine, not duplicate work. No GitHub issue or branch creation authorized.
