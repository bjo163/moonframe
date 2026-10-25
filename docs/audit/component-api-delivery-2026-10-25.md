# Moonframe UI — Component API & Behavior delivery report

**Tanggal:** 2026-10-25 (Asia/Jakarta). **Repository:** https://github.com/bjo163/moonframe · **Branch:** `main`. **Starting HEAD:** [`ed1ebc17bf3f218a30039341126e1082ffbfee26`](https://github.com/bjo163/moonframe/commit/ed1ebc17bf3f218a30039341126e1082ffbfee26). **Last content commit before this report:** [`323da00bb2bf21c16732a420eb254d28d3dcfe5d`](https://github.com/bjo163/moonframe/commit/323da00bb2bf21c16732a420eb254d28d3dcfe5d). **Work scope:** contracts, research, documentation, small Node static validation; **no UI component implementation**.

## Verified baseline and findings

At start: `main` public/writable and not protected; 46 tracked files, 151 planned component entries, 6 existing issues, 0 PRs, CI static contract status success, no component TSX/test/story/runtime package, no `package.json`/lockfile/production exports. [Audit](component-api-behavior-audit.md) found initial P0 **0**, P1 **5**, P2 **6**, P3 **3** specification gaps. Main issues: generic `proposedAPI` placeholder applied to all components, generic keyboard/state placeholders, no public controlled/event/ref policies, provider choice pending and historical tier/level ambiguity. These are not shipped software bugs.

Historical legacy `app-shell` component and `family:app-shell` remain separate. Original 15 skin IDs, 30 Light/Dark intended appearances, 105 `not-reviewed` skin pair evaluations, token dictionary and all premium/auth/data contracts unchanged in meaning.

## Delivered artifacts, roles and evidence

| Change | Path / link | Purpose |
|---|---|---|
| New | [Live API audit](component-api-behavior-audit.md) | Actual baseline, severity and ownership |
| New | [Research](../research/component-api-research-log.md) | 2026-10-25 official source log and decisions |
| New | [Component API & Behavior Bible](../component-api-behavior-bible.md) | Canonical props/controlled/events/slots/ref/native/form/SSR/semver policy |
| New | [151 per-ID API records](../../contracts/moonframe-component-api-contract-v0.1.json) | Pattern/owner/ref/prop proposals, test and open decision per component; **44** explicitly specialized component policies |
| New | [State applicability](../../contracts/moonframe-component-state-matrix-v0.1.json) | **24** dimensions × **151** components; `applicable/not-applicable/deferred` vocabulary |
| New | [Keyboard patterns](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) | **37** pattern specifications × **151** component mappings |
| New | [API Schema](../../schemas/moonframe-component-behavior.schema.json), [State Schema](../../schemas/moonframe-component-matrix.schema.json) | Draft 2020-12 structural declarations |
| New | [Component QA](../qa/component-testing-strategy.md) | Required evidence for future testing and release |
| New | [12 atomic tasks](../backlog/component-api-atomic-issues.md) | Small dependency-ordered issue-ready backlog, no GitHub issues created |
| Updated | [Canonical manifest](../../contracts/moonframe-component-manifest-v0.1.json) | Old generic props marked as historical placeholder; links to behavior authority |
| Updated | [Existing validator](../../scripts/validate-contracts.mjs) | Cross-check all 151 API/state/keyboard references, negative fixtures |
| Updated | [Master Bible](../moonframe-ui-design-system-bible-v1.3.md), [Provider ADR](../adr/0001-primitive-provider.md), [Roadmap](../implementation-roadmap.md), [Governance](../architecture/decisions-and-governance.md), [QA](../qa/validation-strategy.md), [README](../../README.md) | Source-of-truth navigation and no duplicate provider ADR |

## Commit trail

1. [`3916d94`](https://github.com/bjo163/moonframe/commit/3916d9482aebb9e6fbc91dc56adaf731c9dff9c3) — audit + official research.
2. [`11aa0fc`](https://github.com/bjo163/moonframe/commit/11aa0fcc61fb57180c83f23c950f0026734e3651) — per-component API, state and keyboard manifests.
3. [`8831d6c`](https://github.com/bjo163/moonframe/commit/8831d6c39cb6a9accdd251afdba816a4eacc7d7a) — normative Bible and testing strategy.
4. [`d5cbe29`](https://github.com/bjo163/moonframe/commit/d5cbe296cdb0c00dab711b1f29b8b47247bf8c11) — two proposed structural JSON schemas.
5. [`26d96b9`](https://github.com/bjo163/moonframe/commit/26d96b90139d6938c273ccd19da9c4e367a51b35) — 12 atomic tasks.
6. [`bcbfd2b`](https://github.com/bjo163/moonframe/commit/bcbfd2b123565bd52380d42373a626e56c515091) — validator and schema alignment.
7. [`729f40f`](https://github.com/bjo163/moonframe/commit/729f40f57c10dcdd0d1edf1ea722e7074a2bf72d) — README/ADR/roadmap/governance reconciliation.
8. [`323da00`](https://github.com/bjo163/moonframe/commit/323da00bb2bf21c16732a420eb254d28d3dcfe5d) — 44 specialized proposed policy entries.

Earlier incremental runs had temporarily failed because docs pointed to forthcoming files. After the backlog, validator and links were in place, **GitHub Actions #40175371859** completed **success** on `323da00`, verifying `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test`. [Check successful run](https://github.com/bjo163/moonframe/actions/runs/40175371859). No new branch, PR, issue, force push, component code or artwork.

## What was actually tested

- **PASSED via GitHub Actions:** Node JSON parsing, catalog cross references, 151 unique IDs and mappings, 24 state dimension partition, 37 keyboard patterns/reverse indexes, no invented tested/reviewed status, compatibility with 15 skin IDs in theme, local documentation paths, existing token/premium/skin invariants.
- **PASSED negative fixtures:** remove component ID, unknown keyboard pattern, invalid state value, fake reviewed/tested status, reversed mapping drift; legacy token/premium/skin negative checks remain.
- **NOT run:** general-purpose Draft 2020-12 schema engine evaluation (schemas written/parsed; validator is custom structural JS), TypeScript compilation, React rendering/hydration, Vitest/Testing Library, Storybook interaction, Playwright screenshot, axe, manual keyboard/AT review, bundle/peer/license evaluation, provider integration, CI on a published package.

A green static validator does **not** prove actual typing, accessibility compliance or provider compatibility.

## Primary research and policy implications

Official sources: [React 19.3 (2026-09-09)](https://react.dev/blog/2026/09/09/react-19-3), [React `forwardRef` change](https://react.dev/reference/react/forwardRef), [React controlled native inputs](https://react.dev/reference/react-dom/components/input), [TypeScript narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html), [Base UI composition](https://base-ui.com/react/handbook/composition), [Radix composition](https://www.radix-ui.com/primitives/docs/guides/composition), [React Aria customization](https://react-aria.adobe.com/customization), [WAI APG](https://www.w3.org/WAI/ARIA/apg/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [Testing Library](https://testing-library.com/docs/user-event/intro/), [Storybook](https://storybook.js.org/docs/writing-tests/interaction-testing), [Playwright](https://playwright.dev/docs/test-snapshots). Full provenance in [research log](../research/component-api-research-log.md).

**Specified (provisional):** Button/Link native semantics; Input text event passthrough; stable `value/defaultValue/onValueChange` for non-native selection, `open/defaultOpen/onOpenChange`, keyboard and state family rules, distinct Field/Input/FormMessage ownership; public DOM hooks only if approved; skin invariance. **Still open:** React major/peer ranges, provider choice, exact slots (`render`/`asChild`), ref public typing, CSS class merger, SSR/portal strategy, actual distribution paths, type inference and numerical keyboard behavior in candidate providers.

## GitHub issue status and next five tasks

Existing issues [#1 consumer stack](https://github.com/bjo163/moonframe/issues/1), [#3 provider spike](https://github.com/bjo163/moonframe/issues/3), [#4 distribution](https://github.com/bjo163/moonframe/issues/4), [#6 Skin Lab fixture](https://github.com/bjo163/moonframe/issues/6) remain; six existing issues total, **new issues created: zero**. Backlog has **12 proposed tasks**, not live GitHub issues. Prioritize:

1. MF-API-001 — Approve API naming + native semantics and ownership, after consumer/distribution constraints.
2. MF-API-003 / issue #3 — Provider fixture spike on Dialog/Select/Combobox/Menu/Tabs/Tooltip with pinned versions.
3. MF-API-002 — Review critical component-specific props, refs, events, nullability and defaults.
4. MF-API-004 / 005 — Form anatomy and controlled-state transition tests.
5. MF-API-010 — Strengthen schema enforcement/evidence readiness and retain negative tests.

**Explicit boundary kept:** no React/TSX components, authentication backend/session logic, actual DataGrid, production icon/logo/SVG/PNG/art, font, SFX/audio, or Theme Engine produced; no release/tag or visual/AT conformance claim.
