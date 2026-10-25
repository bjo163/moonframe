# Moonframe Token Architecture & Theme Engine — delivery report

**Date:** 2026-10-25 Asia/Jakarta. **Repository:** https://github.com/bjo163/moonframe. **Branch:** `main`, not a new branch. **Verified starting HEAD:** [`aeb0056619bd0fb96b48f4f64fe15164250e8f6f`](https://github.com/bjo163/moonframe/commit/aeb0056619bd0fb96b48f4f64fe15164250e8f6f). **Latest content commit before this report:** [`e063b2423259348d598bd903e6f3f0622042db58`](https://github.com/bjo163/moonframe/commit/e063b2423259348d598bd903e6f3f0622042db58).

## Baseline evidence

Audit started with 36 tracked files, 6 existing GitHub issues, 0 PRs, `main` non-protected and writable; no React/CSS runtime, package manifest, production values, generated CSS, SFX, original assets or browser screenshot tests. Existing 78 token IDs represent a **mixed required vocabulary**, not 78 complete approved semantic color values. The 30 Light/Dark token coverage slots have null value source; all 105 skin-pair reviews are `not-reviewed`. A Docs-only CI had passed on baseline SHA, not a production Theme Engine test.

## Severity and outcomes

Initial [token/theme audit](token-theme-engine-audit.md): **P0=0, P1=5, P2=4, P3=3**. Main risks: no canonical production values, incomplete resolver preference precedence, incomplete typed taxonomy, DTCG tooling version mismatch, naming mismatch. Proposed mitigations are specified; they **do not** close actual implementation/visual QA findings. Six camelCase token IDs preexisted despite lowerCase naming; they are grandfathered without renaming. Old `space.N` names also have documented numeric segments.

## Files created and changed

| Action | File | Purpose |
|---|---|---|
| Created | [Audit](token-theme-engine-audit.md) | Remote starting state, P0–P3 evidence and authoritative owner map |
| Created | [Primary research](../research/token-theme-engine-research.md) | DTCG, Tailwind 4.3, Style Dictionary, MDN, WCAG, JSON Schema findings |
| Created | [ADR-0002](../adr/0002-token-format-and-generator.md) | Proposed bounded DTCG format/whole-token aliases; generator selection open |
| Created | [ADR-0003](../adr/0003-theme-runtime-and-css-output.md) | Controlled/saved/system/default precedence; SSR/storage strategy open |
| Updated | [Token pipeline](../architecture/token-pipeline.md) | Token/recipe distinction, 7 layers, sparse merge, output plan, contrast/versions/security |
| Updated | [Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) | 78 type/layer proposals and legacy naming policy, no value invention |
| Updated | [Source plan](../../contracts/moonframe-token-source-plan-v0.1.json) | Future sparse source, overlay order, coverage/report shape, type candidates |
| Updated | [Theme contract](../../contracts/moonframe-theme-contract-v1.3.json) | Runtime requested vs resolved enums, root attributes, fallback, storage/OS rules |
| Created | [Token subset schema](../../schemas/moonframe-token-subset.schema.json) | Draft 2020-12 structural proposal; shadow deferred |
| Created | [Theme preference schema](../../schemas/moonframe-theme-preferences.schema.json) | Draft 2020-12 structural requested/effective snapshot |
| Updated | [Contract validator](../../scripts/validate-contracts.mjs) | Checks cross-file enums/naming/source model and positive/negative token alias fixtures |
| Created | [Token/theme QA plan](../qa/token-theme-validation-plan.md) | Hard/warning/manual/future gates and risk-based tests |
| Created | [Atomic backlog](../backlog/token-theme-atomic-issues.md) | 10 scoped dependency-ordered tasks, no new GitHub issues |
| Updated | [README](../../README.md), [Master Bible](../moonframe-ui-design-system-bible-v1.3.md), [Governance](../architecture/decisions-and-governance.md), [QA](../qa/validation-strategy.md), [Roadmap](../implementation-roadmap.md) | Canonical cross-links, no parallel Bibles, no duplicate mutable IDs |

## Research-backed decisions versus unresolved items

- **Proposed source:** bounded DTCG 2025.10 JSON with `$type`, `$value`, `$description`, `$deprecated`, `$extensions.moonframe`, whole-token curly aliases. [Format Module](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/). It is a **Community Group Report**, not a W3C Recommendation. Official [Style Dictionary DTCG docs](https://styledictionary.com/info/dtcg/) say 2025.10 coverage is incomplete in v5. No tool installed or full-conformance claim.
- **Output boundary:** Tailwind [`@theme inline`](https://tailwindcss.com/docs/theme) supports static utility aliases pointing to runtime scoped CSS variables. `data-mode` stores effective Light/Dark, not preference `system`. Proposed consolidated small CSS with lazy optional decoration awaits measurements.
- **Color/contrast:** structured sRGB DTCG fixture values first, optional OKLCH/gamut after tool proof. WCAG text 4.5:1 normal/3:1 large, non-text 3:1 where applicable, plus high-contrast/forced-colors/manual compositing; no actual ratio checks run. [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- **Runtime model:** controlled props > validated saved preferences > OS resolution for system/unset axes > app default > safe fallback. Do not save effective mode. Persistence and SSR mechanism *open* pending actual consumer stack; no Next.js/Vite assumption.
- **Types:** source plan proposes 8 types; structural schema implements 7 and deliberately excludes `shadow` until composite transformer fixture. No semantic values generated.

## Executed verification (and limits)

[GitHub Actions run #40173701103](https://github.com/bjo163/moonframe/actions/runs/40173701103) **SUCCESS** for `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test`. Checks include stable 15 IDs, 30 pending slots, 105 unreviewed pairs, old premium A–F references, preference schema enum alignment, 78 proposed token types, planned source map, legacy names and fixture-based invalid alias/malformed type/units/colors. [Most recent follow-up run](https://github.com/bjo163/moonframe/actions) checks the stricter naming exception rule and report update.

**Validation limits:** JSON parse and structural consistency are actually tested; schemas are present and parsed but a general Draft 2020-12 schema engine (Ajv/Python jsonschema) is **not installed/executed**. Fixture checker is intentionally a narrow typed-token unit check, **not** a production alias resolver. No generated CSS, style dictionary build, typed exports, CSS compilation, screenshot, SSR, dynamic OS events, token contrast or WCAG testing performed. No component/ThemeProvider/skin lab/source tokens were produced.

## GitHub issues and next five tasks

Existing [#1 MF-003](https://github.com/bjo163/moonframe/issues/1) consumer environment, [#5 MF-013](https://github.com/bjo163/moonframe/issues/5) token format, and [#6 MF-024](https://github.com/bjo163/moonframe/issues/6) fixture evidence were **not duplicated**. **New GitHub issues created: 0**. Ten new tasks are [issue-ready backlog only](../backlog/token-theme-atomic-issues.md).

1. MF-TOK-001 — Review 78 vocabulary type/layer proposals and legacy ID migration policy.
2. MF-TOK-002 / existing #5 — DTCG/Style Dictionary bounded subset processor proof with pinned versions.
3. MF-TOK-003 — Approve 30-appearance role/surface contrast evaluation contract.
4. MF-TOK-004 / existing #1 — Test application consumer/SSR/storage and agree on preference precedence.
5. MF-TOK-005 — Fixture-only sparse overlay merge/alias coverage proof and generated report shape.

**Explicit non-deliverables:** no production token value source or 30 generated themes, no ThemeProvider, no React component code, no package install or published package, no production assets (SVG/PNG/logos/icons/fonts), no SFX/audio, no rendered Skin Lab and no 105 approved skin comparison results.
