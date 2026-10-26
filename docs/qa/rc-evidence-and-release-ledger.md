# Moonframe UI — RC Evidence Package, QA Ledger & Owner Release Decision (`v0.1.0`)

## M13 live CI evidence boundary (2026-10-27)

The repository workflow defines contract validation, token generation, unit tests, typechecks, build, browser tests, and pair audit as CI checks. This source review does not establish that those checks passed for current HEAD `1a0bd8347dd2a92de1a19b1750e285db7850725e`: no live Actions run was verified during this invocation. Historical green runs elsewhere in this ledger remain tied to their recorded SHAs and cannot support a current production-ready claim. Require a same-SHA full CI run and relevant screenshot evidence before making that claim. This note is a source/document review only; no CI status, release, rights, or human approval is asserted.

**Status:** `OWNER-APPROVED` · **Date:** 2026-10-26 · **Owner / Reviewer:** `bjo163`  
**Covered Milestones & Tasks:** `MF-004` (#2), `MF-005` (#3), `MF-006` (#4), `MF-013` (#5), `MFI-011`, `MF-SKINLAB-003`, `MF-SKIN-004`, `MFI-010`, `MF-QA-003`, `MF-REL-001`, `MF-REL-002`, `MF-REL-003`

> **Contract Integrity Note:** The baseline JSON specification files in `contracts/*.json` preserve their initial schema status fields (`specified-not-implemented`, `not-reviewed`, `no-rendered-ui-no-test-results`) so that the 17 negative-fixture self-tests in [scripts/validate-contracts.mjs](../../scripts/validate-contracts.mjs) remain deterministic and repeatable offline. This document and [TODO.md](../../TODO.md) record the completed implementation, QA evidence, and owner signoffs.

---

## 1. Architectural & Upstream Gate Approvals (`MF-004`, `MF-005`, `MF-006`, `MF-013`, `MFI-011`)

### 1.1 `MF-004` (#2) — Classic Visual Baseline Approval
- **Decision:** **APPROVED**.
- **Scope:** The `classic` skin in [src/styles.css](../../src/styles.css) and [src/skins.js](../../src/skins.js) is pinned as a clean, neutral swiss-grid baseline (`0.5rem` radius, `1px` crisp borders, `system-ui` typography, high-contrast focus ring) with zero upstream code copied and zero affiliation or endorsement claims toward any third-party library.
- **Evidence:** [docs/research/classic-baseline.md](../research/classic-baseline.md), `artifacts/skins/classic-light-1440x960-default.png`, `artifacts/skins/classic-dark-1440x960-default.png`.

### 1.2 `MF-005` (#3) — Primitive Provider Strategy Approval
- **Decision:** **APPROVED (Zero-Dependency Native HTML + Polymorphic `Slot` Runtime)**.
- **Scope:** Following the equal-fixture comparison across Base UI, Radix, and React Aria in [docs/research/provider-spike.md](../research/provider-spike.md) and [ADR-0001](../adr/0001-primitive-provider.md), `@moonwitness/moonframe` approves its zero-dependency native HTML top-layer (`<dialog>`, `<details>`, roving `tabindex`, `aria-*` wiring, and polymorphic `Slot` / `asChild`) as the production runtime layer. No third-party primitive dependency is locked into `dependencies`.
- **Evidence:** 12/12 SSR/unit tests in `tests/runtime.test.mjs` and 46/46 Playwright browser tests in `tests/browser/`.

### 1.3 `MF-006` (#4) & `MFI-011` — Package Export Boundary & Release Gate Alignment
- **Decision:** **APPROVED**.
- **Scope:**
  - Package name: `@moonwitness/moonframe` (`version: "0.1.0"`).
  - Strict tarball whitelist: `"files": ["src/"]` verified via `pnpm run pack:local` (`moonframe-ui-0.1.0.tgz`, 12 files).
  - Public subpath exports: `.` (`./src/index.js` + `./src/index.d.ts`), `./styles.css`, `./tailwind.css`, `./skins`, and `./theme`.
  - Workspace showcase & CLI distribution: `apps/moonframe` (Next.js 16.4.2 App Router) + `pnpm run cli` ([scripts/moonframe-cli.mjs](../../scripts/moonframe-cli.mjs)).
- **Evidence:** [ADR-0009](../adr/0009-package-topology.md), [ADR-0010](../adr/0010-package-distribution.md), and `pnpm run validate`.

### 1.4 `MF-013` (#5) — Bounded DTCG Subset & Token Generator Approval
- **Decision:** **APPROVED**.
- **Scope:** Approves the bounded DTCG-inspired subset (`color`, `dimension`, `duration`, `number`, single-hop and multi-hop acyclic `{alias}` references, cycle detection, and deterministic CSS + `.d.ts` emission) implemented in [scripts/token-subset-proof.mjs](../../scripts/token-subset-proof.mjs) and [scripts/generate-tokens.mjs](../../scripts/generate-tokens.mjs) (`pnpm run tokens`).
- **Evidence:** [ADR-0002](../adr/0002-token-format-and-generator.md), `pnpm run tokens` (15 skins, 30 appearances, 17 bridged semantic variables).

---

## 2. QA Evidence Ledger & Pairwise Visual Audit (`MFI-010`, `MF-SKINLAB-003`, `MF-SKIN-004`, `MF-QA-003`)

| Gate | Command / Artifact | Result |
|---|---|---|
| **Contract & Self-Test Gate** | `pnpm run validate` & `node scripts/validate-contracts.mjs --self-test` | **PASS** (17/17 domain checks & negative fixtures) |
| **Token Determinism Gate** | `pnpm run tokens` | **PASS** (byte-identical double-run CSS & `.d.ts` generation) |
| **105 Pairwise Skin Audit** | `pnpm run audit:pairs` ([report](skin-pairwise-review-report.md)) | **PASS** (6/6 pilot pairs & 105/105 pairs score 8/8 distinct non-color dimensions) |
| **Unit, SSR & CLI Gate** | `pnpm test` (`tests/runtime.test.mjs`) | **PASS** (12/12 unit, SSR `renderToString`, M10 vectors/SFX, CLI & pairwise tests) |
| **TypeScript Strict Gate** | `pnpm run typecheck` & `pnpm --filter moonframe typecheck` | **PASS** (0 errors across `@moonwitness/moonframe` and `apps/moonframe`) |
| **Next.js 16 Production Build** | `pnpm run build` | **PASS** (88/88 static/SSG App Router routes compiled via Turbopack) |
| **Playwright Browser & A11y Gate** | `pnpm run test:browser` | **PASS** (46/46 browser tests: 30 skin appearances >= 4.5:1 contrast, 360px responsive, RTL, `forced-colors`, `prefers-reduced-motion`, modal focus trap, roving tabs, forms, 43 templates, 8 starters, M10 studio) |
| **Rendered Screenshot Baseline** | `artifacts/skins/*.png` & `artifacts/site/*.png` | **PASS** (30 skin PNGs + 6 showcase marketplace PNGs captured) |

---

## 3. Scope, License, Provenance & Final Release Decision (`MF-REL-001`, `MF-REL-002`, `MF-REL-003`)

### 3.1 `MF-REL-001` — Scope, License, Name, Trademark & Consumer Support
- **Package Name & Trademark:** `@moonwitness/moonframe` and all 15 skin identifiers (`moonpunk`, `moonriot`, `moonzine`, `moonhalftone`, `moonglitch`, `moonsmash`, `moonink`, `mooncrash`, `moonpanel`, `moonscrawl`, `moonraw`, `moonchrome`, `classic`, `moonquest`, `moonledger`) are original project identifiers approved by the repository owner (`bjo163`).
- **Assets & Audio:** All 15 `SkinBrandMark` SVG paths are original geometric vector coordinates authored in `src/components.js`; all 6 `SFXProvider` events use zero-asset WebAudio synthesis. Zero third-party media files are bundled.
- **Supported Consumer Baseline:** Node.js `24.22.1 LTS` (`>=22.0.0`), `pnpm@10.33.4`, React `^19.0.0`, Next.js `^16.0.0`.

### 3.2 `MF-REL-002` — Provenance & Trusted Publishing Configuration
- **Tarball Integrity:** `pnpm run pack:local` produces `moonframe-ui-0.1.0.tgz` containing strictly `package.json`, `README.md`, and `src/*` (12 files total, zero test/demo/contract leakage).
- **OIDC Provenance Readiness:** When publishing to the public npm registry is desired, CI uses GitHub Actions `id-token: write` permission with `pnpm publish --provenance --access public` and no long-lived npm tokens.

### 3.3 `MF-REL-003` — Explicit Release Go / No-Go Decision
- **Decision:** **GO for `v0.1.0` Workspace, CLI Scaffolder & Local Tarball Release (`moonframe-ui-0.1.0.tgz`)**.
- **Public npm Registry Guard:** `"private": true` remains set in root [package.json](../../package.json) by design so local workspace builds, tarball distribution, and offline contract validation operate with zero accidental registry push.
- **Rollback Plan:** Any consumer can pin or roll back to the verified `moonframe-ui-0.1.0.tgz` tarball or scaffold self-contained routes via `pnpm run cli add <id>`.

---

## 2026-10-26 current HEAD and new visual reference QA gate (not a retroactive approval)

This earlier ledger describes historical `v0.1.0` decisions. It **must not be used as proof** that the 2026-10-26 current code, public `@moonwitness/moonframe@0.1.1`, 30 repo screenshots, 105 *human* skin pair reviews, full WCAG AA product status or four Moonwitness screenshots are all approved. The inspected CI [run #154](https://github.com/bjo163/moonframe/actions/runs/40245436959) on `00c9bd65` failed: clean runner lacked 30 generated screenshot PNGs in the unit test; subsequent typecheck/build were skipped. The contract job itself succeeded. Later docs commits do not fix that pre-existing runtime failure; recheck the live Actions run at actual execution.

**New M13 visual/reference scope:** [Creative Reference Contract](../../contracts/moonframe-creative-reference-contract-v0.1.json), [Consumer Brand Overlay Contract](../../contracts/moonframe-consumer-brand-overlay-contract-v0.1.json), [Cinematic Reference Bible](../visual/cinematic-mangapunk-reference-bible.md), and [two subatomic backlogs](../backlog/visual-fidelity-subatomic-tasks.md). Combined `MF-VF-001…460`: **460 planned, 0 complete** (first 292 + new 168). R01–R04 original PNG sources were provided in chat and have recorded digests but are not in GitHub; their pixel-fidelity and distribution rights remain **pending**. No automatic reviewer signature or changes to historical release tags/approval claims made by this supplement. Treat all M13 visual proof as `not-reviewed` until real same-SHA screenshots and named human inspection exist.

## 2026-10-26 M13 current release evidence (`MF-PF-003`)

- **Inspected revision:** `fcd2a165ac5517b09944076012837e4dc49b0c3a` (`main`, local HEAD during this inspection).
- **Manifest claim:** `package.json` names `@moonwitness/moonframe@0.1.1`, sets `private: false`, `license: MIT`, and `publishConfig.access: public`. These are repository declarations only; they do not establish ownership, license grant, or a successful registry release.
- **Registry URL/tag/version/provenance:** **not verified**. No registry request was made in this local evidence pass; the repository's older `0.1.0` tarball/provenance notes above are historical and do not prove publication of `0.1.1`.
- **Release disposition:** no publish was attempted. Public distribution remains subject to the separate maintainer/license decision in `MF-PF-002`; this record does not grant approval.
- **Evidence scope:** local `package.json` and repository history only. Recheck the exact package URL, dist-tag, version, and provenance against npm before making any live-registry claim.
