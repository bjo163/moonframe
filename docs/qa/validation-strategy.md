# Moonframe — validation, accessibility and release gates

**Status:** test blueprint, 2026-10-25; no UI implementation/tests exist yet. Contract-only static validator is a narrower gate.

## Markdown link validation limits

The spec validator checks relative inline Markdown links in `README.md`, `TODO.md`, and `docs/**/*.md`. It resolves local paths (including nested paths and percent-encoded names), strips query strings for file lookup, and validates fragments against GitHub-style Markdown heading slugs, including duplicate-heading suffixes. Fragment-only links resolve within the current document. External schemes and protocol-relative URLs are deliberately not fetched; this check does not claim network reachability.

Reference-style links (`[label][ref]`), raw HTML links/IDs, anchors in non-Markdown files, and nested-parenthesis destinations are outside the supported parser. Heading slug support covers ordinary ATX headings, inline code/links, punctuation removal and duplicate suffixes; full GitHub rendering edge cases are not guaranteed. These limits are static-check boundaries, not claims that external destinations or HTML anchors work.

## Coverage without a wasteful Cartesian explosion

1. **30 baseline appearances:** canonical 15 skins × effective `light`/`dark`. `system` resolves; never screenshot it as a 31st identity.
2. **Reference fixture parity:** dashboard, data table (same rows), long form, dialog and navigation; pin viewport, fonts, content, timezone, network/data seeds and clock. The proposed copy/data and capture controls are specified in the [Skin Lab fixtures document](skin-lab-fixtures.md); it defines requirements only, not rendered evidence.
3. **105 skin pairs:** grayscale and decoration-disabled screenshot evidence for each pairing; compare all eight non-color dimensions; reviewers must fill human decisions. No pair passes on score alone.
4. **State/density:** all public components in meaningful focus-visible, hover, active, selected, disabled, invalid, loading, empty and error states; compact/comfortable/spacious samples.
5. **Risk-based combinations:** mobile/tablet/desktop, keyboard-only, 200%/400% zoom/reflow, long translations/RTL, high-contrast and forced-colors, reduced-motion, image/font failure, SSR/no-JS (if supported), offline fallback.
6. **Integration:** real consumer build, exported types/import paths, tree shaking, CSS reset ordering, hydration/FOUC, dependency constraints and no unintentional network calls.

## Accessibility pass conditions (WCAG 2.2 AA target)

Use WCAG 2.2 AA [normative criteria](https://www.w3.org/TR/WCAG22/) and [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) for applicable patterns; choose the correct threshold by role (text/non-text contrast, target size, focus appearance). Verify text/control/focus against actual composite surfaces (including transparency, texture, state, theme), labels and help/error associations, keyboard order, focus restoration, escape semantics, role/state/value announcements, live updates, screen reader reading order, overflow and touch. Never encode meaning only in hue, sound or decorative icons. Reduced-motion must remove rapid flashes/glitches, not hide function. Moonledger "compact" cannot bypass keyboard or pointer-target criteria.

**Manual requirements:** keyboard and screen-reader review for overlays/select/combobox/menu/table, grayscale/decoration-off review per skin, responsive reflow/zoom review, and high contrast inspection. Automated a11y scans are **supporting tests**, not full certification. See [WCAG](https://www.w3.org/TR/WCAG22/), [ARIA APG](https://www.w3.org/WAI/ARIA/apg/).

## Planned test layers and candidate tooling (not installed)

- Pure contract checks: dependency-free Node built-in JSON parsing/cross-file validation.
- Future token resolver checks: aliases, cycles, types, missing 30-map coverage, WCAG pairing and deterministic output.
- Component unit and interaction tests: shortlist Vitest + Testing Library; select after a runtime baseline.
- Story/reference state catalog: shortlist Storybook ([visual testing docs](https://storybook.js.org/docs/writing-tests/visual-testing)).
- Browser screenshot tests: Playwright local/CI ([snapshots](https://playwright.dev/docs/test-snapshots)); optional hosted Chromatic only after budget/consent, with a free/local baseline alternative.
- Asset/SFX QA after implementation: manifest/source rights, SHA checksum, SVG sanitization/export and opt-in controls.

## Release blockers vs warnings

**Blockers:** invalid JSON/schema/IDs, 15/30/105 inconsistency, missing required tokens in any production appearance, unresolved/cyclic aliases, inaccessible primary interactions, keyboard traps, missing accessible names, harmful flashing, incorrect SSR theme, critical vulnerabilities, missing asset rights, audio without opt-in, broken consumer install/export, or claimed review passes without evidence.

**Warnings / review debts:** cosmetic screenshot drift, unapproved optional decorations, noncritical bundle delta, nonessential editorial visual differences. A failed skin distinctness review blocks claiming the 15-skin premium visual promise even if components render.

## Maturity gates

- **G0 Spec:** cross-contract validation and documentary evidence, no false product claims.
- **G1 Foundation:** token resolution, theme runtime and accessibility smoke fixture.
- **G2 Divergence:** four reference skins proofed in both modes; 6 pair reviews.
- **G3 Scale:** all 15 skins × 2 modes, 105 reviewed pairs, component matrix.
- **G4 Release candidate:** consumer install, semver/migration, licenses/provenance, CI/manual QA signoff.

Do not mark G1–G4 passed in this repo while no product code exists.

## Premium scope QA extension (planned, not tested)

The [premium coverage manifest](../../contracts/moonframe-premium-coverage-v0.1.json) defines **22** representative premium block/page fixtures across **15 skins × 2 resolved modes = 660** explicitly `not-rendered` reference cells. Every other catalog item is planned as applicable to all 30 appearances unless a future reviewed exception exists; 660 is not exhaustive item-level validation. Separate 105 pairwise comparisons remain `not-reviewed`.

Minimum future test scenarios: auth idle/pending/failure/offline/expired/locked/OTP and passkey fallback; data sort/page/filter/bulk selection/server error/stale/permission; page 200–400% zoom, keyboard and screen reader, long/RTL locale; same data across skins and desktop/tablet/mobile; forced-color/reduced-motion/grayscale/decoration disabled; optional dependency failed-to-load fallback; no hidden network requests, credential logs or paid-license code in core. Validate page/block/starter graph statically in CI **without** asserting UI accessibility or rendering proof.

## Token/theme-specific checks (2026-10-25)

See the dedicated [token/theme validation plan](token-theme-validation-plan.md) for proposed DTCG subset structure, whole-token alias invalid fixtures, coverage report shapes, 30 unresolved appearances and runtime/SSR/manual gates. Present static contract CI checks do not prove typed production values or browser rendering. Keep all 105 skin reviews unreviewed until actual evidence exists.

## Component API & Behavior QA extension (2026-10-25)

The [component testing strategy](component-testing-strategy.md) and [API/state/keyboard contracts](../../contracts/moonframe-component-api-contract-v0.1.json) define 151 provisional component contracts, 24 state dimensions and 37 keyboard patterns. New Node checks are structural and negative-fixture based; no browser, TypeScript package, screen reader, accessibility conformance or visual QA exists yet. The theme's 30 appearances and Skin Grammar's 105 separate human pair reviews remain distinct release gates.

## Advanced Data Workspace QA extension (2026-10-25)

[Data Workspace QA](data-workspace-validation-plan.md) covers 31 specified-not-implemented capabilities, 8 domain-neutral presets, query/selection/export fixtures, 180 planned data workspace appearance cells, keyboard/AT and CSV formula-injection threat model. Existing static contract CI is not a browser/SSR/AT/Excel save-reopen test. `not-rendered` and `not-reviewed` states are preserved until actual evidence.

## Auth & Security UI QA extension (2026-10-25)

[Auth QA plan](auth-security-ui-validation-plan.md), [flow states](../../contracts/moonframe-auth-flow-contract-v0.1.json), [6×14 provider research matrix](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) and [20-threat register](../../contracts/moonframe-auth-threat-model-v0.1.json) define future security/UX gates. Node validation with ten synthetic negative UI event fixtures is **not** a working provider/SSO/WebAuthn/session/permission test. [240 auth specimens](../../contracts/moonframe-auth-skin-coverage-v0.1.json) remain `not-rendered`; 105 global skin pair reviews remain `not-reviewed`. No WCAG 2.2 AA or security certification inferred.

## Original Asset & Brand QA extension (2026-10-25)

[Asset QA](original-asset-validation-plan.md) references [manifest](../../contracts/moonframe-asset-manifest-v0.1.json), [15 unimplemented written briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json), [proposed Draft 2020-12 metadata schema](../../schemas/moonframe-asset-record.schema.json) and [10 negative metadata fixtures](../../contracts/fixtures/original-asset-v0.1.json). Node static validation can reject false file/licensing/visual review statuses, but **does not execute** a general JSON Schema engine, inspect actual SVG/font/audio, perform security sanitation, resolve trademark/licensing, check real file SHA-256 or render 30 appearance/105 pair comparisons. SFX defaults remain off/opt-in and produced audio stays empty.

## Motion, Interaction & SFX QA (2026-10-25)

[Detailed future motion/interaction/audio validation plan](motion-interaction-sfx-validation-plan.md), [25 recipe specs](../../contracts/moonframe-motion-recipes-v0.1.json), [18 interaction mappings](../../contracts/moonframe-motion-interactions-v0.1.json), [15 motion signatures](../../contracts/moonframe-motion-skin-matrix-v0.1.json) and [180 planned appearance cases](../../contracts/moonframe-motion-qa-coverage-v0.1.json). [Existing six SFX events](../../contracts/moonframe-sfx-contract-v0.1.json) remain off without consent, with text/AT equivalents. CI only checks JSON, refs, negative fixtures and no false reviews; **no browser, screen reader, audio, animation performance or legal license evidence** exists. WCAG 2.2 2.2.2 is Level A; 2.3.3 is Level AAA; stronger reduced-motion policy is a product requirement, not an AA pass claim.

---

## Accessibility & Visual QA canonical assurance system (2026-10-25)

[Accessibility & Visual QA Bible](accessibility-visual-qa-bible.md) is the focused owner for standards→test→evidence mapping and visual/AT/waiver/release methodology; this central QA strategy remains the concise master release gate. [Official research](../research/accessibility-visual-qa-research-log.md) verifies WCAG 2.2 Recommendation (2024-12-12) and ACT Rules Format 1.1 Recommendation (2026-02-05); W3C ACT rules are partial/informative for product conformance. The [51-criterion map](../../contracts/moonframe-accessibility-requirements-v0.1.json) (27 A, 22 AA, 2 AAA advisory) is **bounded**, not an assertion of product-wide WCAG coverage; [151 component QA profiles](../../contracts/moonframe-component-qa-profiles-v0.1.json) link to existing component IDs, keyboard and state matrices. [Nine reference specimens × 30 appearances = 270 planned cells](../../contracts/moonframe-visual-baseline-matrix-v0.1.json), currently 0 rendered/passed/approved. [QA evidence and waiver ledger](../../contracts/moonframe-accessibility-qa-evidence-v0.1.json) holds **no real records, defects or waivers**; [record schema](../../schemas/moonframe-accessibility-qa-record.schema.json) and [14 invalid fixtures](../../contracts/fixtures/accessibility-visual-qa-v0.1.json) only test metadata gate integrity, not actual accessibility. [ADR-0008](../adr/0008-accessibility-visual-qa-tooling.md) proposed; [16 tasks](../backlog/accessibility-visual-qa-atomic-issues.md) are not GitHub issues. The **existing Skin Grammar's 105 pair records alone** own differentiation verdicts; none reviewed.

**Active CI today:** Node 24.22.1 LTS validates JSON/contracts/references/Markdown and negative fixtures. **No axe-core/Storybook/Playwright/AT/contrast scans or screenshots actually run.** Proposed future CI blockers include critical keyboard/ARIA/focus and accessibility violations after real product/runner exists, plus manual AT/visual release gates; visual baseline diffs demand review and may be noise or product defects. Correct criteria: WCAG 2.2 **2.4.11 Focus Not Obscured (Minimum) AA**, **2.4.13 Focus Appearance AAA**, **2.5.7 Dragging Movements AA**, **2.5.8 Target Size (Minimum) AA with exceptions**, **3.3.8 Accessible Authentication (Minimum) AA**. Product AA is a target, not a certification.

## Package/DX distribution and release QA (2026-10-25)

[Package & DX Bible](../architecture/package-architecture-dx-bible.md) defines future package support and tarball checks, [machine-readable candidate exports](../../contracts/moonframe-package-architecture-v0.1.json) and [11 consumer journeys/13 diagnostics](../../contracts/moonframe-developer-experience-v0.1.json) remain `not-executable-no-package`. [ADR-0009](../adr/0009-package-topology.md) and [ADR-0010](../adr/0010-package-distribution.md) are proposals. Present Node 24.22.1 LTS contract CI can validate candidate IDs/false npm/React/OIDC approvals and 16 negative fixtures, **NOT** compile types/ESM/CSS or prove tree shaking, SSR, consumers, package license, npm scope, secure publish, provenance or installed registry. Future release blockers: broken export/type/CSS, duplicated React, missing approved 30 token mode coverage, wrong first paint, omitted LICENSE/NOTICE, unexpected tarball files, private deep import exposure, source-registry overwrite without user choice, missing manual a11y/skin review, missing trusted publisher approval. [Issue-ready tasks](../backlog/package-architecture-dx-atomic-issues.md), [audit](../audit/package-architecture-dx-audit.md) and [research](../research/package-architecture-dx-research-log.md) explain dependencies.
