# Moonframe — Motion / Interaction / SFX Audit

**Date:** 2026-10-25 WIB. **Repository:** https://github.com/bjo163/moonframe · **audited main SHA:** [`2b6c707e6564a0a9f04be8227d80497a04011c27`](https://github.com/bjo163/moonframe/commit/2b6c707e6564a0a9f04be8227d80497a04011c27). Public, push-authorized, not branch-protected at inspection. GitHub recursive tree nontruncated **90 tracked files**, 6 existing issues, zero PR, [baseline CI](https://github.com/bjo163/moonframe/actions/runs/40181619102) successful for **docs/static contract checks only**. No local checkout inspected, so local working-tree cleanliness is unknown.

## What exists today vs what does not

| Source / exact section or path | Current state | Ownership |
|---|---|---|
| [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) `independentAxes.motion`, `preferenceResolution` | **Specified-not-implemented**: `motionPreference=system|full|reduced`; resolved `full|reduced` and root `data-motion`; system follows `prefers-reduced-motion`, persistence/SSR framework undecided | Runtime resolved preferences; not animation implementation |
| [Token dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) `families.motion`, `requiredSemanticTokenExamples` | **Partially specified**: 5 existing proposed motion IDs (`motion.duration.fast|normal|slow`, `motion.easing.standard`, `motion.distance.small`); no approved values, exported CSS/TS or engine | Canonical token IDs/value typing |
| [Token source plan](../../contracts/moonframe-token-source-plan-v0.1.json), [token pipeline](../architecture/token-pipeline.md) | **Specified-not-implemented**: value plan no actual sources/resolver/generator | DTCG subset, alias/coverage and generated outputs |
| [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) `skins[].motion`, [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json) `skins[].motion.signature/reducedMotion` | **Partially specified**: 15 unique *written* motion directions, Moonpunk text mentions 100–180ms but **not an approved token or benchmark**; 105 pairs `not-reviewed` | Visual grammar and anti-overlap; NOT interactivity semantics |
| [Component API Bible](../component-api-behavior-bible.md), [151 state records](../../contracts/moonframe-component-state-matrix-v0.1.json), [keyboard patterns](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) | **Specified-not-implemented**: per-component states/keyboard and focus rules already owned here; no motion orchestration/interrupt matrix | Component behavior, focus, callbacks and keyboard |
| [Existing SFX Contract](../../contracts/moonframe-sfx-contract-v0.1.json) `events[]`, `userPreferences`, `neverSound` | **Specified-not-implemented**: exactly **6** semantic event IDs `success,warning,error,notification,confirmation,quest-reward`; off/mute by default, explicit consent, cooldown 1000ms and dedupe 2000ms as **unvalidated historical numeric plan**, no audio. Do not casually rename events. | Single canonical SFX event taxonomy and opt-in |
| [Original Asset & Brand Bible](../brand/original-asset-brand-bible.md), [Asset Manifest](../../contracts/moonframe-asset-manifest-v0.1.json) | **Specified-not-implemented**: audio provenance/rights and optional format plan, no real assets, no license clearance | Source masters/audio files and rights |
| [Premium blocks](../../contracts/moonframe-block-manifest-v0.1.json), [Data Workspace](../premium/data-workspace.md), [Auth UI](../premium/auth-ui-suite.md) | **Specified-not-implemented**: component/blocks use shared behavior; data/security flows must not be interrupted for theatrics | Content/business domain outside motion |
| [Master Design System Bible](../moonframe-ui-design-system-bible-v1.3.md) §3, §4, §6, §9–14; [README](../../README.md), [roadmap](../implementation-roadmap.md), [QA](../qa/validation-strategy.md) | **Verified-existing docs**; general optional/reduced motion and SFX laws already stated, no dedicated cross-component recipe catalog | High-level navigation, not duplicate detailed rules |
| [Node validator](../../scripts/validate-contracts.mjs), [GitHub Actions](../../.github/workflows/contract-validation.yml) | **Implemented-and-tested static validation only**; verifies 15/30/105, SFX off/no files, but no motion recipe/sound mappings/interruptions | Docs/contract validation |
| Other actual files | **Missing**: React/TSX/CSS animation source, `package.json`, animation/audio dependencies, production token values, audio/image/font files, motion tester, screenshots, browser/AT evidence or npm release. | Future implementation |

**Issue/PR dedupe:** existing [#1 consumer environments](https://github.com/bjo163/moonframe/issues/1), [#3 primitive provider](https://github.com/bjo163/moonframe/issues/3), [#4 package/distribution](https://github.com/bjo163/moonframe/issues/4), [#5 token proof](https://github.com/bjo163/moonframe/issues/5), [#6 Skin Lab fixtures](https://github.com/bjo163/moonframe/issues/6). Roadmap also has MF-020, MF-084 (SFX policy), MF-085 (SFX future production) and MF-092 (motion/high-contrast risk matrix). No new GitHub issues should be created during this docs refinement.

## Findings — gaps in specification, not bugs exploited in a shipped library

| ID | Priority | Evidence / impact | Recommendation |
|---|---|---|---|
| MOT-01 | P1 | No canonical state-independent motion recipe/interrupt/exit schema; animation could delay semantic completion | Cross-component recipe contract requiring intent, trigger, final state, cancellation, reduced strategy |
| MOT-02 | P1 | Preference model exists but reduced motion changing mid-animation / SSR first paint not specified per recipe | Define precedence and static final-state policy, no false app override of forbidden effects |
| MOT-03 | P1 | SFX contract has six events but no explicit non-audio equivalent per event, authorization or environment gate | Extend **existing** SFX contract, preserve six IDs/opt-in/mute; no new audio catalog |
| MOT-04 | P1 | No explicit safe focus/ARIA/lifecycle policy during overlay exit, route interruption or tab suspension | Define DOM accessibility isolation and cleanup, independent of animation completion |
| MOT-05 | P1 | No privacy/security/finance sound exclusion or engine boundary research | Sensitive flow exclusion, optional lazy module, browser autoplay and consent |
| MOT-06 | P2 | Motion tokens exist but numeric status, typed recipe/timing references and mode overlays unclear | Add *proposal metadata* to current token dictionary/source plan without inventing values |
| MOT-07 | P2 | 15 grammar signatures have art direction but no separate actionable per-skin allowed/prohibited/fallback/sound profiles | Derivative 15-skin motion direction matrix (refer to visual authority) |
| MOT-08 | P2 | Component behavior patterns exist yet no cross-component motion eligibility/test intent mapping | New small cross-cutting interaction inventory with refs, NOT a second component API |
| MOT-09 | P2 | No engine ADR: CSS vs WAAPI vs View Transition vs Motion dependency and audio native/Howler | Compare capabilities and candidate tech, don't install |
| MOT-10 | P2 | Continuous loops, animation frequency, background-tab and low-power policy lack explicit acceptance | Define pause/stop/hide, Page Visibility and fail-safe |
| MOT-11 | P2 | No motion/SFX-specific 30 appearance risk-based QA coverage | Add specimen QA matrix with all statuses `not-rendered` |
| MOT-12 | P3 | SFX existing 1000/2000ms defaults unbenchmarked and event naming not hierarchical | Record historical provisional values, preserve IDs, propose optional future aliases pending semver |
| MOT-13 | P3 | No tested device/browser/perf targets, bundle/engine footprint or battery benchmark | Require consumer/SSR support spike, then measured proof |
| MOT-14 | P3 | No motion-specific migration/release plan for token/recipe semantic changes | Define schemaVersion vs contractVersion, review and deprecation gates |

**Baseline:** P0=**0**; P1=**5**; P2=**6**; P3=**3**. All concerns are *specification risks*; there is no React runtime to diagnose.

## Single-source boundaries after refinement

- Theme/runtime preference → [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json); motion token IDs/types → [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json); never duplicate token values here.
- All native semantic states, keyboard, focus/ARIA by component → [Component API Bible](../component-api-behavior-bible.md); shared motion *recipes and intent eligibility* → dedicated [Motion/Interaction Bible](../motion/motion-interaction-sfx-bible.md) and two small manifests.
- Skin visual grammar → existing Skin Grammar/Specifications; motion **derivative policy/overrides** → [15-skin motion briefs](../../contracts/moonframe-motion-skin-matrix-v0.1.json).
- SFX **six official event IDs/defaults** → [existing SFX contract](../../contracts/moonframe-sfx-contract-v0.1.json) in-place; original sound files/provenance → [Asset Bible](../brand/original-asset-brand-bible.md).
- QA tools/release → central [QA strategy](../qa/validation-strategy.md) and dedicated [motion QA](../qa/motion-interaction-sfx-validation-plan.md), without claiming live browsers.
