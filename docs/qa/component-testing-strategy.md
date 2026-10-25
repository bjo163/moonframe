# Component API — testing strategy and evidence gates

**2026-10-25. Status: planned, no UI code/test toolchain installed.** Authoritative for *component-specific* QA, cross-reference [general QA](validation-strategy.md) and [state matrix](../../contracts/moonframe-component-state-matrix-v0.1.json), [keyboard matrix](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json).

## Evidence package per component
Each future implemented exported component requires: TS props + exports, canonical spec link, semantic element role/name/value, controlled/uncontrolled tests if supported, event parity, keyboard/focus, states relevant to matrix, form submit/reset where applicable, SSR IDs/portals, a11y/RTL/forced-colors/zoom/reduced-motion sample, at least one useful Storybook doc example, known limitations and migration risk. A generic green render test **does not** satisfy Dialog/Combobox/Select/TreeView keyboard behavior.

## Test layers and candidate tools (not installed)

| Layer | Candidate / official docs | Coverage | False confidence to avoid |
|---|---|---|---|
| Contract/JSON | Existing `node scripts/validate-contracts.mjs --self-test` | Per-ID foreign keys, patterns, state enums, no invented statuses | Does not render or execute TS declarations |
| Unit/type | [Vitest](https://vitest.dev/guide/) + TS type fixtures | default props, controlled union, no bad exports | DOM mocks ≠ real browser |
| Interaction | [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) + [user-event](https://testing-library.com/docs/user-event/intro/) | native state/handler count, disabled, forms, slot semantics | synthesized interaction misses actual AT/browser cases |
| Component showcase | [Storybook interaction tests](https://storybook.js.org/docs/writing-tests/interaction-testing) | canonical variants, state demos, play tests, docs | Story ≠ screen reader certification |
| Automated a11y | [Storybook a11y](https://storybook.js.org/docs/writing-tests/accessibility-testing), [axe-core](https://github.com/dequelabs/axe-core) | catches detectable violations | cannot prove all WCAG criteria |
| Browser/e2e | [Playwright](https://playwright.dev/docs/intro), [screenshots](https://playwright.dev/docs/test-snapshots) | portals, SSR/hydration, keyboard and focus, responsive | snapshots depend on pinned fonts/OS/version |
| Manual | keyboard, VoiceOver/Safari, NVDA/Firefox/Chrome or equivalent supported combinations | announcement quality, focus traversal, composite interaction, non-visual operations | cannot be skipped for high-risk widget |

## Risk-based matrix

- **Universal smoke:** Classic, Moonpunk, Moonzine, Moonledger × Light/Dark (8), plus rest across all **30** baseline appearances for targeted states/surfaces; no `system` screenshot as appearance #31.
- **High risk** Dialog/AlertDialog/Drawer, Popover/Tooltip, menu/submenu, Tabs, Select/Combobox/MultiSelect, TreeView, Date/Calendar, OTP, DataTable, upload, virtual scrolling: keyboard-only, mouse/touch, RTL, escape/focus restore, layering, disabled/required/invalid, reduced motion and forced colors.
- **Form semantic** `<label>` programmatic relation, aria-describedby, native Enter submit, `type=button`, reset, clipboard, multi-widget serialization and validation messages.
- **Responsive:** long labels, 200%/400% browser zoom, mobile alternate layout preserving actions, no pointer trap or semantic reorder, compact density with WCAG 2.2 touch targets.
- **Deferred:** 105 visual skin uniqueness pairs; not blocked by a single button snapshot, require real human grayscale/decoration-off evidence.

## Blocking versus warning

**Release blockers:** missing public types/exports or native names; keyboard trap; broken Dialog focus/inertness/restoration; invalid ARIA roles/states; lost label or error association; misfiring callback on keyboard; form unexpectedly submits; controlled value desynchronizes; screen-reader inaccessible core operation; unauthorized hidden network side effect; severe reduced-motion/forced-colors break; broken SSR/hydration contract on supported targets; incorrect license/redistribution; screenshot/AT review evidence fabricated.

**Warnings:** noncritical visual drift, oversized optional bundle, decorative differences, unused optional variant, refactor suggestions. An unreviewed 105-skin-pair matrix blocks the **premium skin distinctness promise**, not every docs-only contract commit.

## Evidence ledger shape for future implementations

`{ componentId, commitSHA, packageVersion, sourcePath, typeCheckLog, unitLog, interactionLog, browserLog, axeLog, manualATReviewer, manualATDate, accessibilityRisks, screenCaptureRefs, skinModesChecked, openIssues, releaseDecision }`. A status `tested` needs linked test results and `reviewed` needs named human evaluation, not a checkmark in JSON.

### Current validated scope

Existing CI runs Node static contract checks and intentional mutation-negative fixtures. **No React/TS test runner, browser test, axe scan, Storybook, compile, screenshot or manual AT evaluation has occurred** in this repo at this date.

## Cross-cutting Accessibility & Visual QA evidence (2026-10-25)

The [151 component QA profiles](../../contracts/moonframe-component-qa-profiles-v0.1.json) join the component manifest, per-component [states](../../contracts/moonframe-component-state-matrix-v0.1.json), [keyboard patterns](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) and bounded [WCAG 2.2 requirements](../../contracts/moonframe-accessibility-requirements-v0.1.json); **no profiles have implementation/test evidence**. The focused [Accessibility & Visual QA Bible](accessibility-visual-qa-bible.md) owns manual/automated evidence and release waivers, with [270 not-rendered same-content appearance specimens](../../contracts/moonframe-visual-baseline-matrix-v0.1.json); [ADR-0008](../adr/0008-accessibility-visual-qa-tooling.md) is proposed. Do not duplicate component props/API/keyboard semantics or assume component tests are run because Node validates metadata.

## Future package consumer proof (2026-10-25)

Component testing cannot declare public exports or React peer compatibility until [Package Architecture & DX Bible](../architecture/package-architecture-dx-bible.md) and [ADR-0009](../adr/0009-package-topology.md) are reviewed after consumer #1/provider #3/packaging #4. The [package proposal](../../contracts/moonframe-package-architecture-v0.1.json) contains **six theoretical imports with `outputPath=null`**, not a shipped runtime. Future evidence must compile public TS declarations, ESM import, styles sideEffects, and install a real `npm pack` tarball in independent Vite + supported SSR apps; run existing keyboard/AT/15×Light-Dark/105 skin QA as separate gates. Current Node 24.22.1 LTS contract tests have **zero consumer import, tree-shake, typecheck, browser, screenshot or npm publication evidence**.
