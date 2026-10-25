# Moonframe — validation, accessibility and release gates

**Status:** test blueprint, 2026-10-25; no UI implementation/tests exist yet. Contract-only static validator is a narrower gate.

## Coverage without a wasteful Cartesian explosion

1. **30 baseline appearances:** canonical 15 skins × effective `light`/`dark`. `system` resolves; never screenshot it as a 31st identity.
2. **Reference fixture parity:** dashboard, data table (same rows), long form, dialog and navigation; pin viewport, fonts, content, timezone, network/data seeds and clock.
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
