# Moonframe UI — refinement delivery report (2026-10-25)

**Repository:** https://github.com/bjo163/moonframe  
**Branch:** `main` (no new branch)  
**Audited baseline SHA:** `f3639659a1d33485aee95b74f14943643c19f051`  
**Scope delivered:** documentation, source-of-truth reconciliation, machine-readable **planned** catalogs, local contract validator, GitHub CI. **No product implementation.**

## What was actually found

At baseline the whole tracked tree consisted of six files, no hidden workflows/manifests, no GitHub issues/PRs, only `main`. The 15 skin IDs and 105 unique unreviewed pair records were internally consistent. Dictionary contained 78 example semantic token names but zero approved final appearance values. No React/Tailwind installation, components, Skin Lab, vector/bitmap assets, or sound files existed.

**Starting audit severity:** P0=0, P1=5, P2=6, P3=2, across 13 recorded findings. This is initial triage, **not** a count of unresolved production defects. See [finding evidence](repository-baseline-audit.md).

## Committed changes (verified GitHub commits)

1. [`8187a3d`](https://github.com/bjo163/moonframe/commit/8187a3d1fb9ab2e971f65addcf9b694cfa78927b): baseline audit, primary-source research log, primitive-provider ADR, governance and QA strategy.
2. [`9e20941`](https://github.com/bjo163/moonframe/commit/9e20941d56faf8c068b04d43754c318defccc76d): detailed 15-skin recipe specifications, 103 proposed components, 13 blocks/templates, token-source/coverage plan, original-asset and optional SFX manifest contracts, token pipeline.
3. [`b244089`](https://github.com/bjo163/moonframe/commit/b244089a1279566286cf478ed6ccd9576b2a521f): original README/Bible/roadmap/theme/grammar/dictionary reconciled; review metadata, initial backlog, JSON Schema specimen, validator and GitHub Actions CI.
4. [`7aa642f`](https://github.com/bjo163/moonframe/commit/7aa642f13f626c857b37c82304566057d4d097ec): correct validator mode enum check after observing first CI failure.

**Key changed or added canonical files:** `README.md`, `docs/moonframe-ui-design-system-bible-v1.3.md`, `docs/implementation-roadmap.md`, `docs/audit/*`, `docs/research/*`, `docs/adr/*`, `docs/architecture/*`, `docs/qa/*`, `docs/backlog/*`, `contracts/*.json`, `schemas/skin-pair-review.schema.json`, `scripts/validate-contracts.mjs`, `.github/workflows/contract-validation.yml`. These are **specifications and infrastructure for checking those specifications**.

## Verified static validation

[GitHub Actions run #40170804798](https://github.com/bjo163/moonframe/actions/runs/40170804798) completed **success** on `7aa642f`:

- `node scripts/validate-contracts.mjs` -> PASS for identity/counts, relationships, review states, required component/block fields, assets/SFX defaults and local Markdown links.
- `node scripts/validate-contracts.mjs --self-test` -> PASS for negative cases: duplicate/missing skin pairs, approval without evidence, skin ID drift.
- First CI run [#40170749006](https://github.com/bjo163/moonframe/actions/runs/40170749006) **failed** due to an incorrectly coded validator expectation on a prose field. Corrected and proved green. No concealment of failure.

These checks do **not** prove visual distinction, token values, TypeScript compilation, accessibility, browser compatibility, software publication, or production readiness.

## Research-backed versus open decisions

**Verified direction:** Tailwind CSS v4 theme/runtime distinction ([docs](https://tailwindcss.com/docs/theme)); DTCG 2025.10 published CG reports ([format](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/)); WCAG 2.2 AA/APG test target ([WCAG](https://www.w3.org/TR/WCAG22/), [APG](https://www.w3.org/WAI/ARIA/apg/)); browser user gesture/audio safety ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices)). Full source list in [research log](../research/research-log.md).

**Not decided:** Base UI vs Radix vs React Aria; source-owned registry vs package; exact React/TS/Tailwind target; canonical DTCG subset/generator; production fonts/tokens/assets; npm name and release/license legal rights; browser/SSR support; actual visual distinctness and 105 human reviews.

## GitHub issues actually created

- [#1 / MF-003 — Consumer environment inventory](https://github.com/bjo163/moonframe/issues/1)
- [#2 / MF-004 — Classic baseline](https://github.com/bjo163/moonframe/issues/2)
- [#3 / MF-005 — Primitive provider evaluation](https://github.com/bjo163/moonframe/issues/3)
- [#4 / MF-006 — Package/distribution ADR](https://github.com/bjo163/moonframe/issues/4)
- [#5 / MF-013 — DTCG subset fixture proof](https://github.com/bjo163/moonframe/issues/5)
- [#6 / MF-024 — Skin Lab deterministic fixture specification](https://github.com/bjo163/moonframe/issues/6)

No issue/PR existed at initial snapshot; six were created through GitHub with detailed scope, dependencies, acceptance and DoD. No new branch was created.

## Next recommended order

1. **#1** Verify actual consuming apps/framework environments; don't pretend repo already contains them.
2. **#3 + #5** Evaluate primitive choice and DTCG source format in time-boxed, small evidence-backed spikes.
3. **#2** Set Classic baseline with correct upstream/source-owned boundaries.
4. **#4** Approve distribution/public APIs only after provider/consumer evidence.
5. **#6** Fix deterministic same-content fixtures before any claims about the first 4 skins or 105 reviews.

## Explicitly NOT delivered

No finished React UI components, no compiled package, no production token value sets, no preview/rendered screens, no logos/SVG/PNG/icon packs, no fonts, no audio/SFX, no full accessibility evaluation, no npm publication, no 105 reviewed pair passes. The source-controlled objective is a better-grounded **specification and roadmap**.
