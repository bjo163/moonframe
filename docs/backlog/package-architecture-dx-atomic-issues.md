# Moonframe Package Architecture & DX — 16 atomic, issue-ready work items

**2026-10-25 · Status:** `proposed` backlog items only, **no new GitHub Issues or branches**. The pre-existing [GitHub #4 / MF-006 Package Boundary, Exports & Distribution ADR](https://github.com/bjo163/moonframe/issues/4) ALREADY owns the main package decision; don't recreate it. Also reuse [#1 consumer constraints](https://github.com/bjo163/moonframe/issues/1), [#3 primitive provider](https://github.com/bjo163/moonframe/issues/3), [#5 token source](https://github.com/bjo163/moonframe/issues/5), [#6 Skin Lab](https://github.com/bjo163/moonframe/issues/6) and MF-075/MF-093/MF-096 roadmap tasks. Current active commands **only** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` in Node 24.22.1 LTS GitHub Actions. npm/React/TypeScript/build/Playwright are **not installed**.

## PKGDX-001 — Approve real consumer and support constraints

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Approve real consumer and support constraints.
- **Prerequisites:** #1 MF-003. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/architecture/package-architecture-dx-bible.md; docs/adr/0009-package-topology.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** List verified Vite/SSR, React/TS/Node/browser support, test fixtures, owner, tradeoffs. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-002 — Resolve candidate npm scope/name and separate license ownership

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Resolve candidate npm scope/name and separate license ownership.
- **Prerequisites:** #4; owner legal/brand. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** contracts/moonframe-package-architecture-v0.1.json; docs/brand/original-asset-brand-bible.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Owner verifies code license, npm account scope/name rights, art/font/SFX separately; no declaration of ownership without evidence. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-003 — Review topology ADR-0009 against consumer proof

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Review topology ADR-0009 against consumer proof.
- **Prerequisites:** PKGDX-001/002; existing #4. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/adr/0009-package-topology.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Reject unnecessary packages, document acceptance/revisit trigger, dependency graph/cycles and migration. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-004 — Review source-registry vs npm ADR-0010

- **Status/priority:** `proposed`, P2; NOT an actual GitHub issue.
- **Goal:** Review source-registry vs npm ADR-0010.
- **Prerequisites:** PKGDX-001/003; #4. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/adr/0010-package-distribution.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Record source-owned demand, merge/overwrite/privacy/upgrade, defer registry unless proof; no schema production. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-005 — Approve minimal runtime export and package metadata contract

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Approve minimal runtime export and package metadata contract.
- **Prerequisites:** PKGDX-001/002/003; #3. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** contracts/moonframe-package-architecture-v0.1.json; schemas/moonframe-package-architecture.schema.json. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Types/import/default/CSS/private paths/peer/sideEffects set against actual React consumer; forbid wildcard leaking private internals. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-006 — Complete token/css handoff and Tailwind-v4 consumer spec

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Complete token/css handoff and Tailwind-v4 consumer spec.
- **Prerequisites:** PKGDX-001/005; #5. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/architecture/token-pipeline.md; contracts/moonframe-token-source-plan-v0.1.json. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** One canonical CSS source, static @theme inline bridge and @source if needed, reset ownership, SSR first paint, no made-up values. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-007 — Select Node, package manager and minimal build after spike

- **Status/priority:** `proposed`, P2; NOT an actual GitHub issue.
- **Goal:** Select Node, package manager and minimal build after spike.
- **Prerequisites:** PKGDX-001/005; #4. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/adr/0009-package-topology.md; docs/architecture/package-architecture-dx-bible.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Pin support matrix from real consumer and builder, compare no-workspace/npm/pnpm and Vite vs alternatives; avoid Turbo by default. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-008 — Prototype typed ESM exports and tarball candidate (future code)

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Prototype typed ESM exports and tarball candidate (future code).
- **Prerequisites:** Explicit separate implementation approval; PKGDX-002/005/006/007. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** future package.json/src/dist/tsconfig/build config. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Only later source/build/pack proof, TS declaration exports, ESM-only peer and CSS import; not authorized in this docs-only task. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-009 — Prove clean Vite and supported SSR tarball installations

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Prove clean Vite and supported SSR tarball installations.
- **Prerequisites:** PKGDX-008; #1. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** future examples/consumer-fixtures. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Use npm pack --dry-run --json and actual packed tarball install, CSS and 15×2 fallback/SSR/React singleton tests. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-010 — Validate tree shaking and optional adapter isolation

- **Status/priority:** `proposed`, P2; NOT an actual GitHub issue.
- **Goal:** Validate tree shaking and optional adapter isolation.
- **Prerequisites:** PKGDX-009; #3. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** future consumer stats & package exports. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** No charts/auth/SFX imported into core Button graph, CSS not lost by sideEffects; measure exact bytes not hypothetical. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-011 — Ship proposed DX guide templates only after tested consumer

- **Status/priority:** `proposed`, P2; NOT an actual GitHub issue.
- **Goal:** Ship proposed DX guide templates only after tested consumer.
- **Prerequisites:** PKGDX-005/006/009. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/architecture/package-architecture-dx-bible.md; contracts/moonframe-developer-experience-v0.1.json. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Quickstart/diagnostics/migration examples match run package, no fake install success. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-012 — Evaluate docs playground vs Storybook and Skin Lab boundary

- **Status/priority:** `proposed`, P2; NOT an actual GitHub issue.
- **Goal:** Evaluate docs playground vs Storybook and Skin Lab boundary.
- **Prerequisites:** PKGDX-009; #6. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/architecture/package-architecture-dx-bible.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Evidence from 4 divergent skins same data in Light/Dark; dev-only deps and a11y test integration not in runtime. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-013 — Design optional source registry tiny spike (future only)

- **Status/priority:** `proposed`, P3; NOT an actual GitHub issue.
- **Goal:** Design optional source registry tiny spike (future only).
- **Prerequisites:** PKGDX-004/009; owner source/asset license. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/adr/0010-package-distribution.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Current registry/item schema verified, 1-2 blocks disposable app, file integrity/conflict/rollback; no custom CLI required. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-014 — Approve semver/changelog and owner review policy

- **Status/priority:** `proposed`, P2; NOT an actual GitHub issue.
- **Goal:** Approve semver/changelog and owner review policy.
- **Prerequisites:** PKGDX-002/005/009. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/architecture/decisions-and-governance.md; docs/architecture/package-architecture-dx-bible.md. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Code and contract versions separated, explicit breaking CSS/API/export migration, changesets measured need and support windows. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-015 — Audit future npm trusted publishing/provenance release path

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Audit future npm trusted publishing/provenance release path.
- **Prerequisites:** PKGDX-002/008/014; separate publish authorization. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** docs/architecture/package-architecture-dx-bible.md; future protected CI. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Trusted publisher approved workflow, npm CLI and Node minima verified, no long-lived tokens, dist-tag separate, attestation and rollback; NEVER publish in this task. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.

## PKGDX-016 — Add static package metadata validator and synthetic negatives

- **Status/priority:** `proposed`, P1; NOT an actual GitHub issue.
- **Goal:** Add static package metadata validator and synthetic negatives.
- **Prerequisites:** PKGDX-003/004/005. Stop if owner/consumer evidence required and unavailable; record open issue rather than guessing.
- **Likely file/package scope:** scripts/validate-contracts.mjs; contracts/fixtures/package-architecture-dx-v0.1.json. Do not touch adjacent Auth/Data/Token/Asset component contracts unless relevant owner approves.
- **Acceptance:** Reject 16 bad package/public name/exports/CSS/OIDC/React/consumer claims, validate 11 journeys +13 diagnostic codes and docs refs with Node 24.22.1 LTS. Record source reference, owner signoff or explicit pending, exact file changes, dependency/consumer/browser/security implications.
- **Non-goals:** no speculative monorepo, 15 packages, unexpected npm publishing, logo/audio/font/texture, actual auth/backend/game/ERP logic; tasks labeled future implementation require **separate explicit authorization**.
- **Validation:** docs/JSON only now: `node scripts/validate-contracts.mjs`, `node scripts/validate-contracts.mjs --self-test` (verified Node 24.22.1 LTS CI). npm pack/build/TypeScript/Vite/SSR commands are **acceptance plans, NOT tested** until package toolchain exists.
- **Accessibility/DX and security review:** imports/types/SSR/theme CSS must preserve 15×2, keyboard/focus and a11y/AT gates from [QA Bible](../qa/accessibility-visual-qa-bible.md); no hidden dependency, license/provenance, or secret; user-owned source never silently overwritten.
- **Risk/compatibility/rollback:** public export or token/skin change demands semver/migration/owner review; document installed consumer impact and restoring last valid package or config.
- **Definition of Done:** precise reviewed deliverables, actual CI output and applicable real tarball/consumer/AT evidence, docs links fixed, status truthful (`specified` is not `tested`), no new branch/publish unless separately approved.


## Dependency order and no duplicate GitHub issue

- **Decision first:** existing #1/#3/#4/#5 → PKGDX-001/002/003/004.
- **Package specification:** PKGDX-005/006/007 + spec-only PKGDX-016.
- **Future implementation ONLY with new authorization:** PKGDX-008 → PKGDX-009/010 → PKGDX-011/012; optional PKGDX-013.
- **Future governance/release:** PKGDX-014/015 after package, license, trusted publisher proof. Published status remains false now.

Read [Package & DX Bible](../architecture/package-architecture-dx-bible.md) and the two [topology ADR](../adr/0009-package-topology.md)/[distribution ADR](../adr/0010-package-distribution.md) before agent work. Never paste proposed snippets into a real project until consumer/export/CSS tests exist.
