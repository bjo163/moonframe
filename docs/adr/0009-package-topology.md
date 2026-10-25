# ADR-0009 — Package topology and workspace thresholds

**Date:** 2026-10-25. **Status:** PROPOSED (decision open pending [GitHub #4](https://github.com/bjo163/moonframe/issues/4), [#1](https://github.com/bjo163/moonframe/issues/1), [#3](https://github.com/bjo163/moonframe/issues/3), [#5](https://github.com/bjo163/moonframe/issues/5)). A minimal private local skeleton now exists by user approval; this ADR is not accepted and the skeleton does not establish public package support. See [audited evidence](../audit/package-architecture-dx-audit.md), [research](../research/package-architecture-dx-research-log.md).

## Context

Before the local approval, the public repo had no package manifest or source. The current checkpoint has a root `package.json` and `src/index.js`: `@moonframe/ui@0.0.0-private`, `private: true`, ESM, one provisional root export, no dependencies, and no UI behavior. A temporary tarball consumer import passed; no lockfile, CSS, declarations, React components, license, public version or release exists. Governance still proposes a single source-controlled package first. 15 skins are 15 design grammars of **one behavioral API**, not independent package lifecycles. Public name, tooling, consumer React/Node/TypeScript support, and package approval remain unverified.

## Four topology alternatives, not falsely scored as benchmarks

| Option | Pros | Costs/risks | When justified |
|---|---|---|---|
| **A: One package + private token/doc directories** | Fewest release points, simple public export/peer graph, easiest small agent tasks and first tarball | CSS/assets/optional deps must be carefully isolated with subpath exports; docs app not in package tarball | **Proposed phase-1 default**, after actual code approval |
| **B: Small workspace of UI + tokens/theme** | Independent CSS/token versioning, easier consumers using CSS without React | Version compatibility matrix, cycles and release coordination, duplicate exports, more tool config | Real separate token consumers/cadence independently proven |
| **C: One runtime + source-owned registry** | npm stable behavior and source-controlled premium blocks | Two upgrade channels, license/source conflict/overwrite and registry integrity burdens | Two real source-owned premium consumer requests and clean install tests |
| **D: Monorepo with docs/Skin Lab apps and multiple packages** | Local integration, shared fixtures, docs and package edit loop | Slower CI/build graph, workspaces hide tarball omissions, maintenance/rollbacks | Multi-package and >one real docs/example app with measured build dependency needs |

**Decision weights for later measured comparison**: consumer install simplicity 20%, dependency/optional isolation 15%, public CSS/TS compatibility 15%, release/cycle cost 15%, docs/Skin Lab DX 10%, maintenance for one maintainer/AI agents 15%, future migration 5%, security/provenance/legal 5%. **No numeric option scores**: all lack consumer/bundle measurements. Score with recorded build/pack/consumer/AT results; any failing a11y/legal/security release gate is disqualified rather than scored high.

## Conditional direction, triggers and consequences

**Proposal:** one runtime package first, using `@moonframe/ui` only as an **unverified private local name** so far. The current root export is provisional and intentionally exposes no production API. Public ESM exports, CSS, types and optional-adapter boundaries still require review. Token source/generator can remain build-private while CSS/TS output is part of a future core tarball; no 15 duplicate skin packages, no automatic token subpackage. Source registry after runtime public API and licensing are stable ([ADR-0010](0010-package-distribution.md)).

**Open triggers:** direct non-React token consumer, confirmed independent version/release cadence, app docs requiring workspace, circular dependency evidence, actual compiler/SSR incompatibility, bundle/tarball measurements, two clean consumer fixtures, approved npm scope/license. If split later, introduce `pnpm-workspace.yaml` **only if pnpm is chosen**, otherwise npm workspaces possible. Turbo/Nx require measured graph/rebuild issue. Record migration (old import→new subpath, generated CSS), SemVer effects and rollback.

**Proof fixture before ACCEPTED:** package can build typed ESM, side-effect-preserved CSS, `npm pack --dry-run --json` filelist, tarball install in clean Vite and supported SSR, one React peer, no optional adapters loaded in basic Button, 15×2 complete CSS maps, no broken deep imports. The current empty ESM shell passes Node self-import, temporary clean Node tarball import/deep-path rejection, and a Vite 8.3.3 production build of the empty root import. CSS, TypeScript, React/SSR, peer, component and theme evidence remain **not-run**. No Node consumer support range or React peer range is approved.
