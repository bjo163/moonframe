# ADR-0008 — Accessibility automation, screenshots and human QA tooling

**2026-10-25 — Status:** `proposed-unresolved-consumer-stack`. No package.json, React implementation, CI browser runner or screenshot history exists. Record decision only after [consumer matrix #1](https://github.com/bjo163/moonframe/issues/1), [provider #3](https://github.com/bjo163/moonframe/issues/3), [package #4](https://github.com/bjo163/moonframe/issues/4) and [Skin Lab #6](https://github.com/bjo163/moonframe/issues/6).

## Why tools cannot be selected unconditionally today

Existing Node 24.22.1 LTS GitHub Actions validates 103-file specs (at audited SHA), not JSX/DOM. Tools need compatible framework/build, browser targets, CI runtime/storage, font licensing, deterministic fixture data, release ownership and a supported environment. No screenshot threshold or browser support contract is measurable without a runnable consumer.

## Candidate comparison, primary sources and limits

| Option | What it solves | Doesn't solve | Cost/fit and decision |
|---|---|---|---|
| Existing Node built-in validator | JSON/links/manifest IDs, 15/30/105, synthetically bad fixture detection | DOM, native HTML, AX tree, contrast, focus or real screenshot | **Already active; keep** |
| [axe-core](https://github.com/dequelabs/axe-core) (Deque) | Detectable semantic WCAG A/AA regressions in rendered DOM | Full WCAG, all contrast in textures, keyboard sequence, VoiceOver/NVDA. `incomplete` needs humans | **Proposed** browser integration, open source/local |
| [Storybook a11y](https://storybook.js.org/docs/writing-tests/accessibility-testing), docs showing 10.6 | Documented component variants, axe addon `violations/passes/incomplete`, interactions | Full app flows, SSR/consumer context, actual AT confidence | **Optional**, requires React component and Storybook fit proof |
| [Playwright Test screenshots](https://playwright.dev/docs/test-snapshots) + [browser tests](https://playwright.dev/docs/intro) | Free/local deterministic snapshots, viewport/keyboard simulation, browser integration | Meaningful a11y approval, actual screen reader interpretation, real device parity; screenshot host-dependent | **Candidate default** after one measured 4-skin specimen |
| [W3C ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/) | Common format for repeatable test definitions (W3C Rec 2026-02-05) | Not a product runtime, not a full automated WCAG scanner or legal claim | **Reference for test methodology only**, no dependency |
| Manual keyboard + NVDA/Firefox/Chrome | Focus/reading/announcements/keyboard behavior | Every mobile screen reader, all operating systems | **Required future high-risk reviews** |
| Manual VoiceOver/Safari + mobile VoiceOver/TalkBack | Native AT behavior and gestures on representative devices | Exhaustive combinations | **Conditional** based on target consumer/browser audit |
| Hosted screenshot service / Chromatic | Review UI, parallel diffs and team workflow | Free/local independence, no hidden customer data/cost/plan lock-in | **Not selected**; compare licensing/cost only if needed |

**Specific facts:** [WCAG 2.2](https://www.w3.org/TR/WCAG22/) W3C Recommendation (Dec 12 2024); [ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/) W3C Recommendation (Feb 5 2026); ACT *test rules* remain informative and partial per [W3C guidance](https://www.w3.org/WAI/standards-guidelines/act/rules/about/). Deque reports an average ~57% automatic detection, not product-specific measurement. Playwright says same OS/version/settings/headless/device/power environment necessary for stable snapshots. Storybook docs version 10.6 at research access, not installed/pinned.

## Evidence-based scoring method — intentionally no fake scores

Before selection, compare on: **a11y/AT coverage (30%)**, **cross-browser/SSR fidelity (20%)**, **deterministic images and baselines (20%)**, **CI/maintenance/flake cost (15%)**, **consumer/toolchain fit (10%)**, **license/hosted privacy and cost (5%)**. Only score 1–5 on recorded real prototype result/owner; otherwise mark `not-assessed`, never award assumed vendor points.

### Proposed bounded spike and decision trigger

1. Verify React framework/SSR and browser policies via #1/#3/#4; record Node/pnpm versions and consumer environment.
2. Render **one identical Classic/Punk/Zine/Ledger specimen in both Light/Dark**, with stable licensed fonts, deterministic content, date/locale/DPR/OS/browser container. Capture snapshot twice cold/warm and check actual variance.
3. Instrument keyboard/focus/ARIA in Dialog, Combobox, Menu, Form validation and DataTable; run axe, inspect incomplete cases and manual NVDA/VoiceOver under same fixtures.
4. Compare optional Storybook component stories to a plain Playwright fixture runner—avoid duplicate dependency unless docs/control/reuse justify.
5. Agree exception taxonomy, screenshot review process, snapshot retention/rollback and CI gating after measured churn/bundle/cost. No autoaccept, arbitrary thresholds or blanket masks.
6. Record release/maintenance version pins, compatibility, licensing and migration before approving ADR.

**Default recommendation (conditional):** current Node static contracts now; future Playwright local screenshot/browser runner + axe partial DOM checks + required manual AT; Storybook optional for meaningful component story DX. No vendor purchase or package installation now. Owner acceptance and evidence missing.
