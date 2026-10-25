# Moonframe UI — premium scope delivery report

**Date:** 2026-10-25 (Asia/Jakarta)  
**Repository / branch:** https://github.com/bjo163/moonframe / `main` (no new branch)  
**Baseline commit audited:** [`e468031b54a5`](https://github.com/bjo163/moonframe/commit/e468031b54a5ec5a082e0c72f046c38df0270403)  
**Catalog+validator verified state before report commit:** [`0a8a649`](https://github.com/bjo163/moonframe/commit/0a8a64909ebebddcf4f16af15fa4a0cbc5003009)

## Completed in this session (specifications, not UI implementation)

- [`9b73226`](https://github.com/bjo163/moonframe/commit/9b732268394116018611bdcf3d53925cf9b3476d): component manifest expanded from 103 to **151** records; preserve 13 old block blueprints and specify **131** new concrete task-scoped blocks; **26** blocks explicitly marked Authentication UI; dedicated auth flow reference contract.
- [`503afd9`](https://github.com/bjo163/moonframe/commit/503afd916e1f44d987ec2358acd9f2b9af7838c7): **72** complete page-template records, **8** starter application compositions, **16** optional integration candidates, 4-tier Data Workspace contract; **22 reference fixtures × 30 appearances = 660** planned visual cells.
- [`5f9ab54`](https://github.com/bjo163/moonframe/commit/5f9ab545476c133051c8a30075ff1950aebdd2ce): 6-level Premium Scope Bible, detailed Authentication UI + Data Workspace guidance, primary-source competitive analysis, P0/P1/P2/P3 scope audit, 10 dependency-ordered atomic issue-ready tasks, README/Bible/QA/governance/research updates.
- [`9d5fb50`](https://github.com/bjo163/moonframe/commit/9d5fb50f5251e8d5b7a6ed8891c6c75d08984096): specification validator extended to Level C/D/E foreign keys, statuses, auth boundaries, skins and coverage; new JSON Schema specimen.
- [`0a8a649`](https://github.com/bjo163/moonframe/commit/0a8a64909ebebddcf4f16af15fa4a0cbc5003009): auditor caught preexisting `app-shell` as both component and family blueprint ID; maintain historical IDs with qualified `family:app-shell`, forbid duplicate new public IDs and document migration policy.

Current repository: **36 tracked files before this delivery report**; prior baseline had 23. No Pull Requests; **6 existing GitHub issues** ([#1–#6](https://github.com/bjo163/moonframe/issues)), none new created in this refinement. [New task backlog](../backlog/premium-catalog-atomic-issues.md) is markdown only, explicitly not new GitHub issues.

## Audit counts and key findings

[Premium scope audit](premium-scope-audit-2026-10-25.md): P0=0, P1=4, P2=6, P3=2 baseline gaps. Critical limitations include component/block/page/starter overlap, missing auth flow map, weak data table vs enterprise grid boundary, no optional integration/rights inventory, incomplete premium view coverage, and lack of detailed ownership. Expanded validator uncovered the **legacy `app-shell` namespace collision**; it is documented without silently renaming old IDs.

## Sources and research decisions

See [competitive source matrix](../research/premium-competitive-analysis.md) and [research log](../research/research-log.md). Primary sources include [shadcn components](https://ui.shadcn.com/docs/components) and [blocks](https://ui.shadcn.com/blocks), [TanStack Table](https://tanstack.com/table/latest/docs/overview), [TanStack Virtual](https://tanstack.com/virtual/latest/docs/introduction), [React Hook Form](https://react-hook-form.com/docs/useform), [Zod](https://zod.dev/basics), [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview), [Better Auth](https://better-auth.com/docs/introduction), [Auth.js](https://authjs.dev/getting-started), [Clerk](https://clerk.com/components/sign-in), [Storybook](https://storybook.js.org/docs/writing-tests), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [APG](https://www.w3.org/WAI/ARIA/apg/).

**Decisions:** components remain shared behavioral system with skin-specific visual recipes; auth provides UI intent only; 4-tier data workspace avoids pretending Table=enterprise grid; vendors are optional and not selected. FullCalendar Standard MIT vs Premium restrictions, MUI X Community MIT vs paid Pro/Premium, and Tiptap OSS core vs paid extensions require version-specific rights review. No source/asset copying performed.

## Actual validator and GitHub CI evidence

- The new validator initially failed because the old `app-shell` blueprint ID collided with component `app-shell`. The correction documents both scopes and enforces uniqueness among actual A/B, concrete C, D, E and F public items, while qualifying legacy family IDs. Earlier incremental commits also triggered temporarily red CI because they predated complete validator/catalog reconciliation.
- [GitHub Actions run #40172455681](https://github.com/bjo163/moonframe/actions/runs/40172455681) **completed success** on `0a8a649`: `node scripts/validate-contracts.mjs` PASS, `node scripts/validate-contracts.mjs --self-test` PASS.
- Negative fixtures covered duplicate/missing skin pairs, false visual pair pass, skin ID drift, missing C block ref, missing D page ref, duplicate C/D/E/F item IDs, and missing premium specimen coverage.
- Confirmed: all **660/660** reference cells `not-rendered`, all **105/105** skin comparisons `not-reviewed`. Original **15 skin IDs × 2 effective modes** stay unchanged. No generated CSS/token values or UI screenshot test exists.

**Not tested:** compiled React components, npm package install, API typing, bundle measurement, SSR/hydration, keyboard interactions, screen readers, visual uniqueness, real WCAG conformance, actual security/provider integration, licensing clearance, consumer smoke tests or production release.

## Open decisions / risks

- Provider (Base UI vs Radix vs React Aria): existing [#3](https://github.com/bjo163/moonframe/issues/3); target consumer [#1](https://github.com/bjo163/moonframe/issues/1).
- DTCG subset/token generator: existing [#5](https://github.com/bjo163/moonframe/issues/5). No final semantic values for 30 appearances.
- Package/public exports and license rights: existing [#4](https://github.com/bjo163/moonframe/issues/4).
- Skin Lab deterministic fixtures: existing [#6](https://github.com/bjo163/moonframe/issues/6). No rendered proof yet.
- Component prop types in older 103 entries remain provisional; maintainers must evaluate public API ergonomics with the selected primitive provider.
- Calendar, rich-text, virtual grid, paid third-party services and auth provider integrations remain optional/adapters; no dependency was installed or approved.

## Ten recommended next tasks, dependency order

1. MF-PREM-001 — Review 6-level taxonomy and cross-catalog ownership.
2. MF-PREM-002 — Define typed intent/state contract for core authentication blocks.
3. MF-PREM-003 — Validate four auth layout variants with accessibility/error states.
4. MF-PREM-004 — Refine simple vs controlled data table query/selection contracts.
5. MF-PREM-005 — Refine filter/saved views/bulk/export presentation intent.
6. MF-PREM-006 — Approve 72 page-to-block composition contracts.
7. MF-PREM-007 — Approve 8 starter app-to-page route bundles.
8. MF-PREM-008 — Verify adapter license and bundle trade-offs using real consumer matrix.
9. MF-PREM-009 — Specify Skin Lab/660 reference specimens and a11y risk checks.
10. MF-PREM-010 — Maintain validator schema fixtures, missing ref and status anti-regression.

**Boundary confirmation:** No React UI components, auth backend/session logic, grid engines, logos, vector/SVG, PNG exports, icon packs, illustrations, fonts, audio/SFX, or production token values were produced in this session. Scope was audit, official research, catalog specifications, documents, validator and GitHub commits only.
