# Accessibility & Visual QA — Verified Repository Baseline Audit

**Audited on:** 2026-10-25 WIB · **Repository:** https://github.com/bjo163/moonframe · **default/active branch:** `main` (public, push available, not protected when inspected) · **actual audited HEAD:** [`e80eb268be290ac2977e78fe293257c93a21e6d7`](https://github.com/bjo163/moonframe/commit/e80eb268be290ac2977e78fe293257c93a21e6d7). **GitHub recursive tree:** 103 tracked files, non-truncated; 6 existing GitHub Issues, 0 PRs. GitHub Actions [baseline run](https://github.com/bjo163/moonframe/actions/runs/40183221724) passed **static contract/negative fixture tests only**. No local checkout was available; local working tree cannot be certified clean. Latest inspected commits are document/contract refinements.

## Existing sources and honest status

| Canonical file / evidence | Actual content | Classification |
|---|---|---|
| [Master Design System Bible](../moonframe-ui-design-system-bible-v1.3.md) §3, §11–14 + [README](../../README.md) | WCAG 2.2 AA as target, 15 skins/30 effective modes, 105 required pairwise evaluations and release gates; not actual test evidence | verified-existing policy |
| [Central QA](../qa/validation-strategy.md) | High-level testing strategy and risk-based test axis definitions, future Storybook/Playwright/AT candidates; no machine-readable WCAG criterion/evidence register | partially-specified |
| [Component test strategy](../qa/component-testing-strategy.md) | Per-component test layers, focus/keyboard, Storybook/axe/browser and manual AT proposals | specified-not-implemented |
| [Theme](../../contracts/moonframe-theme-contract-v1.3.json), [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json), [token pipeline](../architecture/token-pipeline.md) | 15 canonical skins, effective Light/Dark/System resolver, density/motion/contrast; **no actual token values, CSS output, ThemeProvider, live contrast measurements** | specified-not-implemented |
| [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) `pairwiseReviewMatrix` | **105 unordered pairs**, all `not-reviewed`, eight grammar dimensions and evidence requirements; not new pass results | specified-not-implemented |
| [Component Manifest](../../contracts/moonframe-component-manifest-v0.1.json) + [state](../../contracts/moonframe-component-state-matrix-v0.1.json) + [keyboard](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) | **151 component IDs**, state applicability, **37 keyboard pattern definitions** and 151 mappings, none implemented or user-tested | specified-not-implemented |
| [Premium Block Manifest](../../contracts/moonframe-block-manifest-v0.1.json) + [Page Template Manifest](../../contracts/moonframe-page-template-manifest-v0.1.json) | **131 concrete block records + 13 family-blueprint records** and **72 page templates**. QA must JOIN these IDs, not clone catalogs | specified-not-implemented |
| [Premium coverage](../../contracts/moonframe-premium-coverage-v0.1.json), [auth](../../contracts/moonframe-auth-skin-coverage-v0.1.json), [data](../../contracts/moonframe-data-skin-coverage-v0.1.json), [motion](../../contracts/moonframe-motion-qa-coverage-v0.1.json), [assets](../../contracts/moonframe-asset-qa-coverage-v0.1.json) | 660 premium reference entries, 240 auth, 180 data, 180 motion, 120 asset *planned* coverage cells, no rendered/AT evidence; overlapping contexts are not additive proof of tested pages | specified-not-implemented |
| [Existing skin-pair schema](../../schemas/skin-pair-review.schema.json) + [Node validator](../../scripts/validate-contracts.mjs) + [CI workflow](../../.github/workflows/contract-validation.yml) | Node 22 static JSON/cross-file refs/negative self-tests; **not** general Draft 2020-12 validation, real screenshots, axe, manual review | implemented-and-tested **static metadata validation only** |
| [Motion/SFX Bible](../motion/motion-interaction-sfx-bible.md), [Asset & Brand Bible](../brand/original-asset-brand-bible.md), [Auth](../premium/auth-ui-suite.md), [Data](../premium/data-workspace.md) | Cross-cutting reduced/forced colors, optional audio/rights, sign-in and table semantics; separate topic owners remain authoritative | specified-not-implemented |
| [Roadmap](../implementation-roadmap.md), [initial issues](../backlog/initial-issues.md), [GitHub Issues #1–6](https://github.com/bjo163/moonframe/issues) | MF-024/#6 Skin Lab deterministic fixture, MF-090, MF-092, #1 consumer targets, #3 primitives, #4 package and #5 token proof are existing dependencies | verified-existing planned tasks |
| Tree inventory | **No** package.json, lockfile, React/TSX sources, live website, Storybook config, Playwright config, browser runner, axe dependency, screenshot PNG/webp, CI screenshot artifact, existing attested AT or actual UI tests | missing |

**Source of truth:** [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) owns *pair records and visual identities*; Component API owns keyboard/state/public semantics; Theme/Token own values and resolution; Premium owns block/template names; **Accessibility & Visual QA Bible** will own standards-to-evidence/test requirements, fixture/capture/governance and release decisions. [Core QA](../qa/validation-strategy.md) remains the top-level gate navigator.

## Findings — documentation/testing infrastructure gaps, not shipped app defects

| Finding | Severity | Evidence / impact | Fix and dependency |
|---|---|---|---|
| AVQA-01 | **P1** | No traceable exact WCAG criterion→surface→test→evidence register | Add bounded W3C level-correct requirements map; WCAG AA target only |
| AVQA-02 | **P1** | No browser/AT manual-review attestations, CI cannot prove conformance | Evidence/status/owner and release blocker model; later real consumer stack #1 |
| AVQA-03 | **P1** | 105 pair records remain unreviewed, no capture/approval protocol for visual distinctness | Use existing Skin Grammar pair IDs; same-content grayscale/decoration-off human review #6 |
| AVQA-04 | **P1** | No stable snapshot environment or baseline approval governance; risk of approving regressions | Deterministic capture plan, no automatic baseline accept; #1/#6 |
| AVQA-05 | **P1** | No screen-level QA bridge covering component/block/template refs or full 30 appearances | Add cross-cutting specimen manifest + 30× suites, component QA profiles by stable IDs |
| AVQA-06 | **P1** | No documented waiver expiry/owner/evidence release policy for a11y critical failures | Introduce waiver/defect schema and fail-closed gate proposals |
| AVQA-07 | **P2** | Existing high-level QA lacks exact WCAG 2.2 2.5.8 exception analysis, 2.4.11 AA vs 2.4.13 AAA, 3.3.8 auth scope | Correct criterion details, conditional applicability, ownership |
| AVQA-08 | **P2** | Lack of risk based dimensions: density, forced-colors, long Indonesian/RTL, 200/400% zoom, loading/error | Add explicit risk profiles without Cartesian explosion |
| AVQA-09 | **P2** | Existing 660/240/180/180/120 planning cells could be confused with actual rendered passes | No-evidence invariants and status controls |
| AVQA-10 | **P2** | No integration decision for Storybook/axe/Playwright and versioned capture container | Proposed ADR + measured decision spike only; avoid npm/tool installs |
| AVQA-11 | **P2** | Contrast complex alpha/texture/grayscale vs raw color tokens lacks evidence schema | Context-aware rendered review and manual assessment; token completion #5 |
| AVQA-12 | **P3** | No documented screenshot flake triage, diff masking policy or baseline migration/rollback | Baseline/incident protocol |
| AVQA-13 | **P3** | Existing defect fields not formalized across browser/AT cases | Stable classification taxonomy and evidence join keys |
| AVQA-14 | **P3** | Incomplete versioned criterion source capture/ACT 1.1 review | Date official normative and tool research, maintain source log |

**Counts at starting SHA:** **P0=0, P1=6, P2=5, P3=3**; **14 scope gaps**. These are *risk priorities for future QA*, not actual WCAG violations in implemented UI.

## Relevant live work and nonduplication

Six existing GitHub issues are [#1 consumer environment](https://github.com/bjo163/moonframe/issues/1), [#2 Classic baseline](https://github.com/bjo163/moonframe/issues/2), [#3 primitive provider](https://github.com/bjo163/moonframe/issues/3), [#4 package boundary](https://github.com/bjo163/moonframe/issues/4), [#5 token proof](https://github.com/bjo163/moonframe/issues/5), [#6 Skin Lab fixtures](https://github.com/bjo163/moonframe/issues/6). Existing roadmap MF-090 and MF-092 already cover QA implementation goals. This audit does **not** create GitHub issues or duplicate their statuses; add small task-ready work in backlog only.

**No actual HTML/ARIA, motion, React, auth/backend, charts, media/brands or audio was implemented. No WCAG conformance, pairwise distinctness, screenshot baseline or user research evidence can be inferred.**
