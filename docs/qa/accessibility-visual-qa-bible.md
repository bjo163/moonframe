# Moonframe UI — Accessibility & Visual QA Bible

**Edition:** 2026-10-25. **Status:** `specified-not-implemented`. **Scope:** assurance architecture and evidence for future React UI. Not a WCAG certification, a test report about a rendered app, or a substitute for legal/accessibility review. [Live repository audit](../audit/accessibility-visual-qa-baseline.md) · [Official research log](../research/accessibility-visual-qa-research-log.md) · [Test-tool ADR-0008](../adr/0008-accessibility-visual-qa-tooling.md).

> One behavioral system; 15 distinct visual grammars; 30 baseline Light/Dark appearances. No UI behavior, state, focus, status, or essential action relies on color, motion, sound or decoration alone.

## 1. Canonical ownership and classification

| Concept | Authority and responsibility |
|---|---|
| Standards applicability, test procedures, evidence, exception/defect lifecycle and release signoff | **This focused Bible**; machine-readable [WCAG requirements map](../../contracts/moonframe-accessibility-requirements-v0.1.json), [QA component profiles](../../contracts/moonframe-component-qa-profiles-v0.1.json), [visual baseline plan](../../contracts/moonframe-visual-baseline-matrix-v0.1.json), [evidence fixtures](../../contracts/fixtures/accessibility-visual-qa-v0.1.json) |
| Master quality gates and overall product release roadmap | [Existing central QA](validation-strategy.md), [governance](../architecture/decisions-and-governance.md), [roadmap](../implementation-roadmap.md); this Bible details HOW requirements are verified |
| Identity and 105 pairwise verdicts | [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json); **never** create a second authoritative pair list |
| Exact 15 skin IDs / 30 effective Light-Dark, system, density, motion and contrast | [Theme](../../contracts/moonframe-theme-contract-v1.3.json), [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json), [Token Source Plan](../../contracts/moonframe-token-source-plan-v0.1.json); no duplicate token values |
| Native semantics, component props, focus/keyboard/state and 151 component IDs | [Component API Bible](../component-api-behavior-bible.md), [state matrix](../../contracts/moonframe-component-state-matrix-v0.1.json), [37 keyboard patterns](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json); QA profiles JOIN these IDs |
| Block/page behavior and catalog | [Premium](../premium/premium-scope-bible.md), [131 concrete +13 family blocks](../../contracts/moonframe-block-manifest-v0.1.json), [72 templates](../../contracts/moonframe-page-template-manifest-v0.1.json), [auth](../premium/auth-ui-suite.md), [data](../premium/data-workspace.md). QA references, not clones |
| Motion-specific and media-specific policy | [Motion/SFX Bible](../motion/motion-interaction-sfx-bible.md), [Asset & Brand Bible](../brand/original-asset-brand-bible.md), [auth/security QA](auth-security-ui-validation-plan.md), [data QA](data-workspace-validation-plan.md). Cross-cutting acceptance here; detailed product semantics stay there |

**Repo baseline:** spec only; no React/TSX output, live theme/token CSS, actual UI screenshots, Storybook, Playwright, axe, browser tests, screen-reader audits or licensed media. Current Node22 GitHub Actions validates JSON/links/references and invalid fixtures; **not real accessibility/visual test execution**. `specified`≠`implemented`≠`tested`≠`reviewed`≠`released`.

## 2. Normative target, applicability and evidence status

**Proposed product target: WCAG 2.2 Level AA** for shipped, scope-defined React UI and its supported consumer integrations. A library alone cannot automatically certify a consuming site: accessible content, author markup, configuration, authentication provider, chosen contrast backgrounds, data, third-party widgets, focus order and app workflow all matter. No conformance claim is authorized without scope, version, tested supported browsers, documented exceptions and human evaluation.

**Standards priority:** [WCAG 2.2](https://www.w3.org/TR/WCAG22/) W3C Recommendation **2024-12-12** is normative. WAI [Understanding](https://www.w3.org/WAI/WCAG22/Understanding/), [APG](https://www.w3.org/WAI/ARIA/apg/) patterns and [ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/) are guidance/partial tests. [ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/) is itself W3C Recommendation **2026-02-05**, but **does not** confer product WCAG conformance.

[Requirements contract](../../contracts/moonframe-accessibility-requirements-v0.1.json) maps SC number, title, level, applicability, scenario, automation/manual/AT split, CI gate, evidence, roles, known limitations and `specified-not-tested` status. It covers a deliberately **bounded set of high-relevance A/AA and advisory AAA criteria**, not every WCAG criterion and not proof of conformance. Additional criteria for media/live products remain consumer scope; owner adds them before a relevant feature ships.

| Criterion | Level | Test obligation / important nuance |
|---|---|---|
| 1.4.3 Contrast Minimum | **AA** | 4.5:1 normal/3:1 large text with normative exceptions; actual computed layered surfaces, not plain token HEX values |
| 1.4.11 Non-text Contrast | **AA** | 3:1 for necessary boundaries/components/graphics; disabled/nonessential exceptions; complex texture requires visual assessment |
| 1.4.10 Reflow | **AA** | Equivalent 320 CSS px wide or 256 high; genuinely 2D data tables/maps may qualify for exceptions, not whole app |
| 2.4.7 Focus Visible | **AA** | Every keyboard-operable function has visible focus with mode-specific textures/overlays |
| 2.4.11 Focus Not Obscured (Minimum) | **AA** | Focused component not completely hidden by author content. Prefer no obscuration as stronger product goal |
| 2.4.13 Focus Appearance | **AAA** | Area/contrast requirement is **NOT** an AA must; consider as product enhancement only |
| 2.5.7 Dragging Movements | **AA** | Function also operable with *single pointer without dragging* unless exception; a keyboard alternative alone doesn't necessarily satisfy |
| 2.5.8 Target Size (Minimum) | **AA** | Normally 24×24 CSS px; WCAG has spacing/equivalent/inline/UA/essential exceptions; 44×44 is AAA enhanced, not universal AA |
| 3.3.8 Accessible Authentication (Minimum) | **AA** | Auth steps with cognitive-function tests need allowed alternative/assistive mechanism/exception, not merely keyboard focus |
| 2.3.3 Animation from Interactions | **AAA** | Reduced motion chosen as stricter Moonframe product policy, never falsely reported as AA criterion |
| 4.1.3 Status Messages | **AA** | Announce true app outcomes appropriately without stealing focus or excessive live-region spam |

All applicability is conditional at the **user-facing content level**; a `not-applicable` result requires specific scope rationale, not blank cells. Review status vocabulary: `not-assessed`, `specified`, `automated-check-passed`, `manual-review-passed`, `assistive-tech-reviewed`, `known-issue`, `waived-with-rationale`, `verified-for-release-scope`. A higher status must link **real commit/build, capture/test environment, reviewer/time, evidence**; "pass" from JSON contracts is not allowed.

### Contrast and contextual semantics

Check actual text/background **pair in state/surface** (normal, hover, error, disabled where relevant, focus, overlays, gradients, blur, paper/grunge/manga halftone, chart legends). Preserve 1.4.3 and 1.4.11 exemptions as documented by W3C; a disabled control still must convey state through semantics rather than color. Force colors should use UA system colors, avoid sole reliance on shadow/glow; test readable pointer hitbox/focus/selection. APCA or perceptual color-space metrics may guide design but must **not replace** normative WCAG 2.x contrast ratios. Token-value review without resolved background, alpha/compositing and real render remains **pending manual**.

## 3. Evidence-based testing pyramid and ownership

| Layer | Owner and purpose | Required evidence / scope |
|---|---|---|
| 0: Static docs/contracts | Docs maintainer | Valid strict JSON, ID references, 15/30/105/151 invariants, false-pass fixture rejection; only layer currently active |
| 1: Token/utility unit | Future token/theme engineer | Alias cycle/coverage/color resolver and side-effect-free functions after implementation |
| 2: Component unit/render | Future React engineer | State/ref/form semantics/native labels/props; run after source/toolchain exists |
| 3: Interaction/keyboard | A11y engineer + component maintainer | Pointer/keyboard/touch parity, ESC, arrows, focus trap/return, resize, cancel, controlled/uncontrolled |
| 4: Automated rendered a11y | A11y automation owner | axe-core/Storybook candidate on **real DOM state**; review `violations`, `incomplete`, false-positive attribution |
| 5: Browser integration | QA engineer | SSR/hydration, portals, modal+sticky header/focus, form submit, network mock, responsive, RTL |
| 6: Visual regression | Design system QA | Pinned environment + same-content screenshot, diff triage vs approved baseline; never auto-approve |
| 7: Manual keyboard and visual | Human QA/accessibility + designer | Zoom/reflow, forced-colors, target exceptions, color-independent status, overlay/scroll and skin distinction |
| 8: Assistive technology | Trained reviewer | NVDA/Windows Chrome+Firefox, VoiceOver/macOS Safari, iOS VoiceOver and Android TalkBack when consumer target supports |
| 9: Consumer integration | App owner + release lead | Page auth/data/ERP/workflow with actual content, third-party integrations, permissions, performance and rollback |

**Responsibility split:** automation can prove specific detectable DOM violations absent in a measured run, not all WCAG. Deque axe-core documentation quotes an **average** automatically discoverable subset (~57%), and returns `incomplete` requiring people; don't convert that figure into Moonframe coverage %. Storybook a11y is a candidate view of stateful stories, **not** an alternative to browser integration or real screen reader users. Product/legal accessibility audit may require additional jurisdiction rules, which need a separate authoritative legal study.

## 4. Component-family coverage by IDs, not duplicate catalogs

[151 component QA profiles](../../contracts/moonframe-component-qa-profiles-v0.1.json) join `componentId` to existing component manifest, state matrix and keyboard matrix, retain `group` and classed risk, required state/criteria refs, automated/manual/AT approaches and evidence=none. These profiles are **coverage proposals**, not exported component behavior, not 151 executed tests. The existing 151 components are categorized foundation(24), actions(25), forms(31), feedback(29), data(21), specialized(12), content(9). Link blocks/pages through their original IDs in the [visual specimen suite](../../contracts/moonframe-visual-baseline-matrix-v0.1.json), not by copying 131+72 full catalogs.

**High risk:** Button/IconButton native role/disabled/tab/duplicate activation, Form/Select/Combobox/OTP input label and live validation, Dialog/AlertDialog/Popover modal focus/inertness/escape, Tabs/Menu/TreeView keyboard APG, Toast status timing, DataTable/Grid sort/selection/reflow, FileDropzone single-pointer + keyboard alternative, Chart static values/colors, Auth passkey/OTP accessibility, ERP compact density and destructive confirmation. Reference existing [keyboard patterns](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) exactly; `role`, `aria-*`, `tabIndex` must never be added without native-semantics proof.

**Block/template bridge:** a specimen references canonical `blockId` or `templateId` when practical and testable. App/auth/ERP/domain-specific logic remains consuming app owned. Failure to load a paid optional provider must not remove the basic accessible UI state.

## 5. Nine representative reference screens and 30 appearances

[Visual Baseline Matrix](../../contracts/moonframe-visual-baseline-matrix-v0.1.json) defines **9 stable same-content specimens × 15 skins × `light|dark` = 270 PLANNED cells**, all `not-rendered`. Each case includes canonical component/block/template reference (where applicable), viewport/locale/density/motion/contrast proposal, deterministic content fixture ID, accessible states to exercise, environment config status, screenshot hash/path **null**, reviewer/evidence **null**. Nine scenes:

1. `shell-nav`: sidebar/topbar, nav rail, focus and mobile semantics.
2. `dashboard-overview`: KPIs, table/chart, live data labels/actions.
3. `forms-validation`: required, invalid, disabled, pending, long labels/error.
4. `overlays-menus`: dialog, popover, menu, Escape, return focus, dim/blur.
5. `data-table`: sorting/filtering/selection, empty/loading/error/virtualization only if real.
6. `long-content`: localized paragraphs, wrap, code, headings, RTL if supported.
7. `empty-error-offline`: error, empty, offline and permission state without decorative dependence.
8. `mobile-dense`: narrow/compact workbench and pointer target 24 CSS px/exception.
9. `premium-auth-settings`: one representative premium template with provider-specific backend **excluded**.

**Baseline coverage** is a smoke suite, not 270 full state×browser×density runs. Every skin Light/Dark receives nine planned references; smoke actual screenshots need real components. Then **risk-based cross-axis** cases for compact/comfortable/spacious density, OS reduced/full motion, normal/high/forced colors, 200%/400% zoom, phone/tablet/desktop, long Indonesian strings, RTL if consumer supports, no images/fonts, error/loading/focus states, chosen AT/browser permutations. A naive 30×3×2×2 = 360 before viewports/state is only an illustration of combinatorial risk; **do not run the full Cartesian product by default**.

### Four-skin prototype proof, then full visual system

First future prototype: **Classic, Moonpunk, Moonzine, Moonledger × Light/Dark**, identical content, at least shell, form, overlay, data specimen. Next higher-risk: Moonquest, Moonglitch, Moonsmash and neighboring style pairs. Only after 30 baseline smoke screenshots and manual review can a skin receive `baseline-captured`, `automated-pass`, `manual-approved` labels per actual evidence.

### 105 pairs — no competing matrix

[Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) contains **105 unordered pairs** and eight dimensions: composition, geometry, typography, surface, data/navigation, media, component recipes, motion. This QA Bible owns **evaluation protocol** only; per-pair evidence, reviewer and verdict live **exclusively in the existing Skin Grammar**. For each pair require equivalent-content full-color, grayscale, decoration-off screens, eight dimension observations, blind/simultaneous review with named reviewer/date, evidence links and next action. Four+ materially different dimensions (five for close neighbors) is **an editorial heuristic**, never an automated proof of originality or trademark noninfringement. Pairs without actual comparable render remain `not-reviewed`. Compare punk/riot/smash; zine/halftone/panel; ink/scrawl; glitch/chrome; crash/ledger; raw/classic; quest vs generic shells. QA coverage ledger may reference pairs by canonical `a,b` key only, never clone approval decisions.

## 6. Deterministic screenshots, baselines and diff review

Based on [Playwright official screenshots](https://playwright.dev/docs/test-snapshots): matching snapshots depend on identical host OS/build, browser engine/version, headless mode, hardware settings, power state, browser settings and fonts. **No Playwright installed yet**. Future implementation should:

1. Pin exact container image digest, browser/Playwright versions, OS and font hashes; stable locale/timezone, colorScheme, viewport/DPR, reducedMotion, density, deterministic same fixture IDs.
2. Mock/seed dates, timezones, records, images and network; await loaded fonts (`document.fonts.ready` or validated equivalent), images and a stable render anchor, test full URL/SSR after real consumer selection. Disallow remote fonts/content in golden run unless pinned and licensed.
3. For **visual-only capture**, disable CSS animations/transitions/carets/selection blink or freeze effects deterministically *as needed*, **but run a separate real-motion/reduced-motion accessibility suite**. Never mask focus ring, overlays, validation/error text, or unstable critical UI.
4. Capture same viewport/content; store baseline metadata with `commitSHA`, `captureEnvironment`, browser build, fixture hash, mask regions/reason, screenshot SHA, approval reviewer/date, test run URL. No arbitrary numeric pixel threshold claimed until proof.
5. On a diff: identify actual UI change vs antialiasing/font/hardware noise vs flaky async state; triage severity. Never auto-update goldens or increase global diff tolerance to silence accessibility defects. Changes to golden require design+a11y reviewer attestation and traceable diff/rationale. Roll back unexpected baseline updates.
6. Keep a **free/local** baseline option (Playwright or native screenshot tool). Hosted/paid screenshot services are optional after cost/privacy/locking evaluation; avoid leaking auth or customer data.
7. Failure should retain actual/diff/expected outputs for inspection (when runner exists), while controlled evidence artifacts need retention/storage/legal review. No fake paths now.

**Visual approval is not accessibility approval.** A matched screenshot can contain an invisible keyboard trap, invalid name/role/ARIA, wrong reading order or unusable target.

## 7. Browser/AT matrix, responsive and risk-driven coverage

[ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/) supports repeatable test rule documentation, **not** product certification. Choose **proposed** initial manual matrix after consumer audit #1: Windows keyboard-only + NVDA with Firefox/Chrome for high-risk composites; macOS Safari + VoiceOver for modal/combobox; mobile iOS Safari VoiceOver or Android Chrome TalkBack on representative forms/nav/tables, depending on actual clients. Windows forced-colors/high-contrast check in a supporting environment. At least one real pointer/coarse-touch device for 2.5.8 targets; keyboard-only review does **not** satisfy 2.5.7 non-drag pointer alternative. Record OS/browser version, AT version, screen magnifier/zoom and reviewer. **No unconditional support claim** until browser/AT targets and owners are approved.

Required stress:
- Long Bahasa Indonesia labels and mixed numerals, long unbreakable URL/code and data columns; right-to-left when localization support is targeted.
- 200% resize text and 320 CSS px equivalent reflow (400% zoom at 1280px), preserving usable UI; note data table/chart/map exceptions for 2D essentials apply to the *part*, not every region.
- Compact Moonledger / toolbar icon-only controls test 24×24 CSS px size **or documented valid exception**, not simply “compact means 16px”.
- Fixed/sticky headers, mobile nav, toasts/drawers and dialogs: focus does not disappear behind author-created layers; contextual contrast and outline must survive forced colors.
- Motion effects `reduced`/no-motion, no essential status solely SFX; skin decoration-off/grayscale; font/asset failure fallback.
- Dynamic chart data with static accessible table/description and discernible series by shapes/pattern/text.

## 8. Evidence ledger, exceptions, defect classification and CI outcomes

**Evidence fields needed before claiming `tested/reviewed`:** actual source/commit/release/consumer, tested fixture and snapshot content hash, browser/AT and OS versions, viewport/zoom/mode/density/skin/locale, test command + run URL/status, named reviewer/date, scope of automation vs manual, result and source screenshot/DOM trace ID. Empty evidence = `not-assessed`. Proposed [record schema](../../schemas/moonframe-accessibility-qa-record.schema.json) is intended for cross-cutting per-case evidence/exceptions, not production test outputs.

**Waivers/exceptions:** `waived-with-rationale` requires real issue ID, criterion/scope, owner, justification, effect on users, fallback/mitigation, approval authority and expiry/review date, reproducible remaining failure. Waivers **must not** bypass a release-blocking WCAG A/AA problem in claimed conformance scope unless a defensible scoped alternative or revised conformance claim is explicitly approved; “waiver” is risk tracking, **not** legal clearance.

Defect taxonomy: `semantic`, `keyboard`, `focus`, `contrast`, `screen-reader`, `responsive-reflow`, `motion`, `visual-regression`, `skin-distinctness`, `asset-failure`, `harness-flake`, `documentation`, `compatibility`. Severity `blocker|critical|high|medium|low`, reproducibility `deterministic|intermittent|environment-specific`. Attach evidence + exact affected skins/modes/viewport/state. CI false positives must be investigated, never hidden with unbounded masks or a globally lax threshold.

**Active NOW:** `node scripts/validate-contracts.mjs` and `--self-test` in Node22 GitHub Actions can ensure ids/links/statuses, fixed 15/30/105 baseline, no fabricated evidence and cross-doc references. **Proposed later:** contract schema engine, component interaction, DOM axe integration (critical/warning per reviewed baseline), screenshot diff requiring explicit review, manual keyboard/AT as **release checklist gate**. Do not label automated checks as having run in current repo. Proposed warnings for cosmetic screenshot antialiasing and logged flake; fail release on accessible name/keyboard trap, focus-loss/obscuration, invalid semantic status, violating contrast/target/motion criteria, missing manual evidence or false baseline approval.

## 9. Maturity gates and next implementation dependencies

| Gate | Required real evidence | Today |
|---|---|---|
| A — Specification | Audited repo, dated primary sources, authoritative requirements/test profiles, 30-mode/105 review strategy | Docs/contracts *can* be validated, not UI tests |
| B — Foundation | Actual token CSS/resolver, tests, reproducible browser environment, build/SSR, component instances | **Missing** |
| C — Four proof skins | Real Classic/Punk/Zine/Ledger screenshots, state/keyboard/AT/contrast/zoom and reviewer evidence | **Not-run** |
| D — 15 skins/full review | All 30 baseline visual references rendered and 105 canonical pair reviews with human evidence | **Not-run** |
| E — Release | Consumer/browser/AT tests, blocking defects resolved, review/waiver policy, versioned artifacts and rollback | **Not-run** |

**Next work:** [atomic QA backlog](../backlog/accessibility-visual-qa-atomic-issues.md), first resolving consumer environment #1, package #4, primitive #3, token #5 and Skin Lab #6. No components, theme engine, production images/fonts/audio, CI visual runner or proprietary paid service installed by specification work.
