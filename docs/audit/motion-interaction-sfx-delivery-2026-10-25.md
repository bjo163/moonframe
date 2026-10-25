# Moonframe Motion, Interaction & SFX — delivery & verification

**Date:** 2026-10-25 WIB. **Repo:** https://github.com/bjo163/moonframe, **branch:** `main`, no newly created branches or PRs. **Audited SHA:** [`2b6c707e6564a0a9f04be8227d80497a04011c27`](https://github.com/bjo163/moonframe/commit/2b6c707e6564a0a9f04be8227d80497a04011c27). **Latest pre-report content SHA:** [`ca444ee2a721a26c76cca5c85fcfe6f06bbb8c95`](https://github.com/bjo163/moonframe/commit/ca444ee2a721a26c76cca5c85fcfe6f06bbb8c95). Docs/contracts/static validation **only**, not a production implementation.

## Baseline inventory, severities

Initial complete GitHub tree **90 tracked files**, public default `main`, writable/unprotected when read; **6** existing issues, **0** PRs, CI static-spec passed. No `package.json`, TSX components, React motion source, CSS or animation runtime, audio/media binaries, library installs, export builds, live browser/screen-reader fixtures or published package. No local checkout was inspected, so don't claim local working tree clean. Canonical Theme had system/full/reduced preference; Token Dictionary 5 historic motion names (no values); Skin Grammar 15 motion art directions but 105 pairwise reviews still `not-reviewed`; original SFX six event IDs and opt-in/off-by-default but no binaries. Existing Component State and Keyboard specs cover 151 proposed components; did not duplicate their per-component semantics.

[Audit](motion-interaction-sfx-audit.md) lists **14 planning gaps: P0=0, P1=5, P2=6, P3=3**. Most important: no interruption/reduced-motion per-recipe rules, missing sound visual/AT equivalents, unclear overlay exit/focus, unreviewed token durations and no engine comparison. These are not verified production bugs.

## Primary evidence and corrected standards interpretation

[Dated research](../research/motion-interaction-sfx-research-log.md) reviews [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [APG](https://www.w3.org/WAI/ARIA/apg/), [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/), [MDN reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), [MDN WAAPI](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API), [View Transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API), [Motion for React](https://motion.dev/docs/react-animation), [MDN Autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay), [Chrome Autoplay](https://developer.chrome.com/blog/autoplay). Checked 2026-10-25; WAI-ARIA 1.2 Recommendation 2023-06-06; WCAG 2.2 W3C Recommendation; versions of uninstalled animation vendors not pinned.

Exact WCAG distinctions: **2.2.2 Pause Stop Hide Level A** (moving parallel >5s, automatic updating has no >5s allowance); **2.3.1 Three Flashes or Below Threshold Level A**; **2.3.2 Three Flashes Level AAA**; **2.3.3 Animation from Interactions Level AAA**. Moonframe's no-animation-required product policy is deliberately stronger than AA where appropriate; no standards conformity claim.

## Added/updated authoritative artifacts

| Path | Scope/evidence |
|---|---|
| [Audit](motion-interaction-sfx-audit.md) | Actual audited HEAD and source ownership/P0–P3 |
| [Official research](../research/motion-interaction-sfx-research-log.md) | Normative W3C vs browser vs Motion vendor claims |
| [Motion Bible](../motion/motion-interaction-sfx-bible.md) | Purpose-first, native semantics, reduced/interrupt/focus/SSR/no-audio and visual silence fallback |
| [25 motion recipes](../../contracts/moonframe-motion-recipes-v0.1.json) | Names, triggers, tokenRefs, reduced strategies, interrupt/unmount/prefs, a11y/perf/noSound, unimplemented |
| [18 cross-component patterns](../../contracts/moonframe-motion-interactions-v0.1.json) | Canonical component references, modality/focus and safe cosmetic constraints |
| [15 skin signatures](../../contracts/moonframe-motion-skin-matrix-v0.1.json) | Distinct expressive accents vs disallowed motion and static alternatives; no new skin/token |
| [Existing SFX contract extended](../../contracts/moonframe-sfx-contract-v0.1.json) | Preserved `success, warning, error, notification, confirmation, quest-reward` and off/consent defaults; visual/AT equivalents, no-op browser failures, explicit mute/privacy/skin profile gates |
| [Existing Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) + [Token Source Plan](../../contracts/moonframe-token-source-plan-v0.1.json) | Five stable motion names unchanged; candidate names flagged unapproved; no values/generator implementation |
| [Recipe Schema](../../schemas/moonframe-motion-recipe.schema.json) + [Fixtures](../../contracts/fixtures/motion-interaction-sfx-v0.1.json) | Proposed Draft 2020-12 structure, one synthetic good recipe and **12 invalid** variants |
| [180 appearance QA cells](../../contracts/moonframe-motion-qa-coverage-v0.1.json) | Six representative cases × 15 canonical skins × Light/Dark; **180 not-rendered, 0 reviewed**, global 105 pair reviews separate |
| [ADR-0007](../adr/0007-motion-and-optional-audio-engines.md) | CSS default candidate vs WAAPI/View Transition/Motion for React; no scores without measurements; audio absent from core |
| [QA](../qa/motion-interaction-sfx-validation-plan.md), [14 small issue seeds](../backlog/motion-interaction-sfx-atomic-issues.md) | Standard-level correction, interrupt/AT/browser/visual/performance/audio/release gates and dependencies |
| [README](../../README.md), [Master Bible](../moonframe-ui-design-system-bible-v1.3.md), [Component API](../component-api-behavior-bible.md), [Asset Brand](../brand/original-asset-brand-bible.md), [roadmap](../implementation-roadmap.md), [governance](../architecture/decisions-and-governance.md), [central QA](../qa/validation-strategy.md), [Node validator](../../scripts/validate-contracts.mjs) | Navigation and canonical ownership without duplicate behaviors, logos, art, music or SFX event IDs |

## Real executed validations versus not-run

**GitHub Actions [run 40183078924](https://github.com/bjo163/moonframe/actions/runs/40183078924) succeeded on `ca444ee2a721a26c76cca5c85fcfe6f06bbb8c95`**, executing:
- `node scripts/validate-contracts.mjs`: **PASS**, structural contract references and Markdown links, 25 unique recipes & existing component/token refs, 18 interaction patterns, 15 derivative skin signatures, 180 unique not-rendered review cells, six unchanged SFX event IDs/off/no audio, no false reviewed status; all existing token/auth/data/premium/asset checks still pass.
- `node scripts/validate-contracts.mjs --self-test`: **PASS**, 12 synthetic rejected bad recipes (missing/invalid reduced, interrupt, unauthorized continuous, token/component/SFX refs, fake tested, missing no-motion/focus) + deliberate corrupt interaction ref, skin review, audio opt-in and QA status.
- An intermediate negative test used `mot.invalid` as presumed missing ID, but that was a legitimate error-state recipe; the fixture was corrected to a genuinely unknown ID, and CI reran successfully. Another intermediate CI failed while new doc links referred to files added in subsequent commits; the final content run above was green.

**Not run / no claim:** Independent generic JSON Schema Draft 2020-12 validation engine (only structural schema checks + custom bounded Node semantics); React/TS build; CSS/WAAPI/Motion engine runtime; view transition; first-paint SSR/hydration; keyboard and NVDA/VoiceOver/axe; actual 15×2 screenshots/105 pair evaluations; real device/cpu/fps/bundle/profile; audio generation, codec, volume, autoplay browser simulation; SFX/license/provenance inspection. CI proves **only specification consistency**, not WCAG/accessibility or implementation quality.

## Issues, open decisions and dependency roadmap

Six GitHub Issues preserved, **zero created**, zero PR. Existing prerequisites [#1 consumer targets](https://github.com/bjo163/moonframe/issues/1), [#3 primitive provider](https://github.com/bjo163/moonframe/issues/3), [#4 packaging](https://github.com/bjo163/moonframe/issues/4), [#5 tokens](https://github.com/bjo163/moonframe/issues/5), [#6 Skin Lab](https://github.com/bjo163/moonframe/issues/6), plus MF-020/MF-084/085/MF-092. [14 issue-ready atomic tasks](../backlog/motion-interaction-sfx-atomic-issues.md).

**Next five:** **MOT-001** consumer/SSR/engine boundaries → **MOT-002** motion token name/value review → **MOT-003** 25 recipe review → **MOT-004** 18 interaction pattern review → **MOT-005** OS/runtime reduced preference + interruption proof, then **MOT-006** 15 signatures, **MOT-007** SFX review and ADR engine measured spike.

Unresolved: consumer browsers and React version, exact token numeric values, engine choice/performance, SFX format/rights/actual sound file, silent UI semantics for real widgets, user motion override policy, license compatibility and target browser behavior. No license/brand/AT approval invented.

**Out-of-scope respected:** zero production React/CSS motion utilities, OAuth/backend/game rules, logo/art/media/font, generated SFX/music/audio, package installation, live autoplay, released UI or actual reviewed skin screenshots.
