# Moonframe UI — premium scope audit, 2026-10-25

**Repository:** https://github.com/bjo163/moonframe | **Branch:** `main` | **Starting commit:** `e468031b54a5ec5a082e0c72f046c38df0270403` | **Method:** GitHub recursive tree, original manifests/docs, 6 existing issues, 0 PR, public official documentation research. Audit is remote; no claim of a clean local working tree.

## Baseline: actual evidence, not plan

- Baseline recursive tree: **23 files**, including 11 JSON contracts, README, Bible, roadmap, research log, audit, ADR, QA, one JSON schema, CI workflow and Node validator; no package manifest, lockfile, React source, app imports, production assets, release, token value source or screenshot suite.
- `contracts/moonframe-component-manifest-v0.1.json` originally had **103 proposed** entries with generic public API placeholders, not typed exports.
- `contracts/moonframe-block-manifest-v0.1.json` originally had **13 high-level blueprints** mixing application shell and page family descriptions, not concrete production blocks.
- `contracts/moonframe-theme-contract-v1.3.json`: 15 unique stable skin IDs and effective light/dark model; `contracts/moonframe-skin-grammar-contract-v1.0.json`: 105 unique `not-reviewed` pairs.
- `contracts/moonframe-token-dictionary-v0.1.json`: semantic vocabulary, **not** the approved value maps. Existing CI checks only structural specification invariants; last baseline run #40170990372 had succeeded.
- Issue search: **6** preexisting scoped design/architecture issues [#1](https://github.com/bjo163/moonframe/issues/1)–[#6](https://github.com/bjo163/moonframe/issues/6), no PR. Do not reproduce those issues.

## Audit findings (baseline severity, before this scope refinement)

| ID | Severity | Source/evidence | Impact / resolution |
|---|---|---|---|
| PS-01 | P1 | 13 generic blueprint rows in `contracts/moonframe-block-manifest-v0.1.json` | Block versus page versus starter cannot be priced, documented or tested; add concrete blocks with explicit level C, preserve existing blueprint kind. |
| PS-02 | P1 | Bible section 8, README and roadmap lack page-level inventory | UI ready-to-use promise untestable; create authoritative level D page catalog and level E starter routes. |
| PS-03 | P1 | No formal auth UI catalog; generic component inventory not a login flow | Incomplete high-priority feature; specify 26 UI blocks and identity provider security boundary without implementing backend. |
| PS-04 | P1 | Existing `Table`, `DataTable` and optional grid items lack a four-tier workspace contract | Could conflate simple table with spreadsheet engine; separate native table, controlled data table, advanced workspace, optional enterprise grid. |
| PS-05 | P2 | No unified optional integration decisions/rights documentation | Unintentional vendor lock-in and license risk; add candidate manifest plus research-derived caveats. |
| PS-06 | P2 | Existing QA document covers 30 skin appearances but not premium blocks/templates | Coverage ambiguity; add 22 reference fixtures × 30 appearances = 660 pending specimens; no false pass. |
| PS-07 | P2 | Original 103 component entries use API placeholder text | Potential premature API claims; add missing component candidates; retain unapproved public props until provider ADR. |
| PS-08 | P2 | No named auth/AI/files/billing/marketing states per deliverable | Inadequate independent implementation tickets; add state matrices, events and boundary per concrete block/page. |
| PS-09 | P2 | Original task backlog focuses on architectural foundations | Product scope not decomposed for small agents; write atomic catalog/spec tasks with dependencies and no mass issue creation. |
| PS-10 | P2 | Existing source ownership map has no Level D/E/F manifest authority | Drift/duplication risk; update authority map and validator for foreign keys. |
| PS-11 | P3 | No tested vendor footprint or performance measurements | License and bundle comparisons must remain provisional; research sources logged, no package installed. |
| PS-12 | P3 | No screenshot/real accessible QA | Do not report WCAG conformance or 105 reviewed skins; keep planned review cells non-passing. |

**Counts:** P0=0, P1=4, P2=6, P3=2. These are **prioritization of baseline specification gaps**, not discovered runtime bugs or a claim every risk was solved.

## Duplication and corrective architecture

1. Historical 13 blocks remain **family blueprints**, explicitly `recordKind=family-blueprint`; 131 new entries are **concrete level C blocks** with `kind=concrete-block`. No IDs are renamed.
2. A sign-in **component** (Input), **block** (sign-in-form), **page** (sign-in-minimal), **starter** (auth-onboarding), and **provider adapter** (better-auth-adapter) are different reusable products. Their IDs must never collide and their behaviors are not interchangeable.
3. Canonical auth composition IDs are in block/page manifests; [Auth UI catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json) contains **references and flow rules**, not duplicate block definitions.
4. Page templates own their **blockRefs** and starters own **pageRefs**. Graph must remain acyclic from E → D → C.
5. All UI elements provide intent callbacks; apps own network, mutation, authorization, policy, payment, persistence, and SSR route guards.

## Status and validation caveat

Any green specification validator only checks syntactic/structural/relationship invariants. User-facing `specified` is not `implemented`, nor `tested` or `reviewed`. All 660 specimen cells and 105 pair records remain pending without browser/visual evidence. Manual testing, screen readers, performance, bundle, security, license compliance and actual app installation remain future tasks.

## Historical ID namespace collision discovered by expanded validator

The first cross-catalog validator run detected **`app-shell`** both as a component ID in the A/B manifest and as an old C-family blueprint ID in the 13-record legacy block family list. This is a real pre-existing naming ambiguity, not a new Level C concrete block collision. To preserve stable historical identifiers, old families now declare qualified IDs `family:<id>`, including `family:app-shell`; the concrete Level C catalog keeps its independent `block-*` IDs. Full A/B → concrete-C → D → E → F uniqueness is enforced. This named exception must be resolved by an ADR before any future breaking rename, rather than silently modifying existing references.
