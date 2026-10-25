# ADR-0009 — Package topology and workspace thresholds

**Date:** 2026-10-25. **Status:** PROPOSED (decision open pending [GitHub #4](https://github.com/bjo163/moonframe/issues/4), [#1](https://github.com/bjo163/moonframe/issues/1), [#3](https://github.com/bjo163/moonframe/issues/3), [#5](https://github.com/bjo163/moonframe/issues/5)). **Not a package/workspace implementation.** See [audited evidence](../audit/package-architecture-dx-audit.md), [research](../research/package-architecture-dx-research-log.md).

## Context

Public repo has **no package.json, src, CSS output, consumer build, lockfile, license, version or release**. Governance already suggests a single source-controlled workspace. 15 skins are 15 design grammars of **one behavioral API**, not independent package lifecycles. Tooling/package names and React/Node/TS consumer requirements unverified; don't claim cost/performance measured.

## Four topology alternatives, not falsely scored as benchmarks

| Option | Pros | Costs/risks | When justified |
|---|---|---|---|
| **A: One package + private token/doc directories** | Fewest release points, simple public export/peer graph, easiest small agent tasks and first tarball | CSS/assets/optional deps must be carefully isolated with subpath exports; docs app not in package tarball | **Proposed phase-1 default**, after actual code approval |
| **B: Small workspace of UI + tokens/theme** | Independent CSS/token versioning, easier consumers using CSS without React | Version compatibility matrix, cycles and release coordination, duplicate exports, more tool config | Real separate token consumers/cadence independently proven |
| **C: One runtime + source-owned registry** | npm stable behavior and source-controlled premium blocks | Two upgrade channels, license/source conflict/overwrite and registry integrity burdens | Two real source-owned premium consumer requests and clean install tests |
| **D: Monorepo with docs/Skin Lab apps and multiple packages** | Local integration, shared fixtures, docs and package edit loop | Slower CI/build graph, workspaces hide tarball omissions, maintenance/rollbacks | Multi-package and >one real docs/example app with measured build dependency needs |

**Decision weights for later measured comparison**: consumer install simplicity 20%, dependency/optional isolation 15%, public CSS/TS compatibility 15%, release/cycle cost 15%, docs/Skin Lab DX 10%, maintenance for one maintainer/AI agents 15%, future migration 5%, security/provenance/legal 5%. **No numeric option scores**: all lack consumer/bundle measurements. Score with recorded build/pack/consumer/AT results; any failing a11y/legal/security release gate is disqualified rather than scored high.

## Conditional direction, triggers and consequences

**Proposal:** one runtime package first, as `@moonframe/ui` **unverified working name** with strict ESM-first exports and explicit CSS, optional adapters independent. Token source/generator can remain build-private while CSS/TS output is part of core tarball; no 15 duplicate skin packages, no automatic token subpackage. Source registry after runtime public API and licensing are stable ([ADR-0010](0010-package-distribution.md)).

**Open triggers:** direct non-React token consumer, confirmed independent version/release cadence, app docs requiring workspace, circular dependency evidence, actual compiler/SSR incompatibility, bundle/tarball measurements, two clean consumer fixtures, approved npm scope/license. If split later, introduce `pnpm-workspace.yaml` **only if pnpm is chosen**, otherwise npm workspaces possible. Turbo/Nx require measured graph/rebuild issue. Record migration (old import→new subpath, generated CSS), SemVer effects and rollback.

**Proof fixture before ACCEPTED:** first future package can build typed ESM, side-effect-preserved CSS, `npm pack --dry-run --json` filelist, tarball install in clean Vite and supported SSR, one React peer, no optional adapters loaded in basic Button, 15×2 complete CSS maps, no broken deep imports. All currently **not-run**; no ability to select Node/npm/React peer exact range now.
