# ADR-0010 — npm runtime vs source registry / hybrid

**Date:** 2026-10-25. **Status:** PROPOSED (open pending consumer proof and owner review). A private local ESM package skeleton and temporary tarball consumer smoke now exist by user approval; no public npm package, registry.json, CLI or hosted registry was built. [Official registry docs](https://ui.shadcn.com/docs/registry/getting-started), [npm package exports](https://nodejs.org/api/packages.html) and [package Bible](../architecture/package-architecture-dx-bible.md).

## Different ownership contracts

- **npm runtime:** compiled module imported from a versioned dependency; upstream controls updates and package SemVer, consumers must keep compatible peers.
- **Source registry:** source files are installed/copied **into consumer repo**; users own edits and upgrade merges, so semantic parity/patching cannot be guaranteed by upstream npm updates.
- **Hybrid:** runtime primitives/tokens as dependency, copied blocks/templates as source, with explicit version compatibility/semantic and license contract.
- **Deferred registry:** stable runtime first, registry introduced only when source-ownership/blocks justify it.

| Distribution candidate | Positive | Negative | Status / release order |
|---|---|---|---|
| npm only | Smallest support surface, source changes via version update, single changelog | Premium blocks harder to customize deeply; consumer dependent on package versions | Phase-1 baseline **candidate** |
| Registry only | Copy-edit freedom, source-owned user code | Version/upgrade drift, missing common runtime consistency, complex per-file license/install security | Not recommended for core primitives |
| npm core + registry blocks/templates | Stable shared behavior + editable premium composition; fits Moonframe catalog | Must maintain two incompatible upgrade models, registry dependency/merge/audit | **Future option**, only when consumer demand proven |
| **Defer registry until npm runtime proof** | No CLI/server/workspace overhead before real need; preserves future hybrid | Slower first custom-copy experience | **Recommended staging** |

**No invented market demand/cost scores.** Decide after owner validates at least two consumer use cases: ordinary dependency upgrade vs source-owned premium block. Verify actual import/override behavior, install conflicts and licensing. No shadcn affiliation, and no promise Moonframe is compatible with every upstream registry client.

## Minimum future registry proof, not implementation

Current [shadcn schema](https://ui.shadcn.com/docs/registry/registry-json) describes root `registry.json` and optional `include`; [item schema](https://ui.shadcn.com/docs/registry/registry-item-json) requires valid `type`, `files`, optional dependencies and file paths. Evaluate current schema **at implementation time**; don't handroll an incompatible registry variant. Candidate **1–2** domain-agnostic blocks only, using approved [Block Manifest](../../contracts/moonframe-block-manifest-v0.1.json) IDs; explicit `file.path`, `target` validated and allowlisted, `registryDependencies`, external npm deps/peers, CSS/token/skin requirements, license notice and version. Reject `../` traversal, arbitrary network/dynamic install scripts, silent consumer overwrite, package lockfile mutation without consent. Dry-run inspect/confirm, skip conflicts, backup/rollback and owned diff/migration note. Generated JSON must be deterministic and revalidated in disposable clean consumer app before advertising CLI commands. Static hosting preferred to bespoke server; private/paid registry/auth unsupported in v1.

**Acceptance to move ADR to ACCEPTED:** source rights/legal owner, package consumer/SDK version verified, actual registry schema validation, clean install + upgrade-with-local-modification tests, evidence on UX/cost/bundle and controlled publication with support/rollback. No registry installation or security testing performed in this scope.
