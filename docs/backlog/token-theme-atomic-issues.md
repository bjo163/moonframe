# Moonframe Token Architecture — atomic task backlog

**Issue-ready tasks only**, written 2026-10-25. **No new GitHub issues created**: existing [#5 / MF-013](https://github.com/bjo163/moonframe/issues/5) already covers token-format proof; [#1](https://github.com/bjo163/moonframe/issues/1) covers consumer/SSR evidence; [#6](https://github.com/bjo163/moonframe/issues/6) covers fixture spec. Create specific additional issues later only after de-duplication. All tasks preserve `main` policy and involve **no UI production code in this spec phase**.

| Order | ID | Deliverable / scope | Prerequisite | Acceptance and DoD |
|---|---|---|---|---|
| 1 | MF-TOK-001 | Approve dictionary name/type proposals and grandfathered legacy IDs, `contracts/moonframe-token-dictionary-v0.1.json` | audit | Owner signs 78 IDs/types + migration of six camelCase IDs; no silent rename; run structural validator |
| 2 | MF-TOK-002 | DTCG 2025.10 subset spike: color/dimension/alias fixtures, candidate Style Dictionary vs small resolver; ADR-0002 | existing #5 | Pin tool version, demonstrate valid/invalid type, alias cycle, false reference, deterministic output; if not proven leave status proposed |
| 3 | MF-TOK-003 | Define role/surface contrast pair matrix and manual-review policy | MF-TOK-001 | AA-relevant thresholds by text/large/nontext, alpha composite/gradients flagged, no fake WCAG compliance |
| 4 | MF-TOK-004 | Review Light/Dark/System precedence/root attrs/persistence and fallback; ADR-0003 + theme contract | existing #1 consumer matrix | Deterministic table for controlled/saved/default/system, broken storage, CSS failure, media update; unresolved SSR host clearly open |
| 5 | MF-TOK-005 | Validate sparse source merging and 30 coverage slots using fixture-only references | MF-TOK-002 | Explicit reference→semantic→mode→skin overrides, no type clashes, all 78 IDs per resolved mode; no production values invented |
| 6 | MF-TOK-006 | Specify CSS/Tailwind v4 output/consumer override contract | MF-TOK-002, MF-TOK-004 | Test compiled `@theme inline` and `[data-mode]` fixture once toolchain exists; static utility list, documented reset/import order |
| 7 | MF-TOK-007 | Define generated TS/reference/coverage output manifest | MF-TOK-005 | Generated paths, stable source hash, check/write modes, source lineage and version fields; no production files in spec phase |
| 8 | MF-TOK-008 | Design browser/SSR/no-JS/system-change fixture plan | existing #1, MF-TOK-004 | First-paint, OS flip, forced-colors, CSP, storage unavailable; choose backend adapter only from observed consumer |
| 9 | MF-TOK-009 | Approve Classic/Moonpunk token specimen, then Moonzine/Moonledger | MF-TOK-003, existing #6 | Contrast/typography/geometry, grayscale, decoration disabled, Light/Dark human approval; no claims before real specimens |
| 10 | MF-TOK-010 | Add production resolver and generator tests later after approved values; gate release | MF-TOK-005 through 009 | Byte-identical outputs, 30 complete maps, 105 separate visual reviews, consumer install, no fabricated statuses |

**Common task template:** goal, explicit non-goals, exact files, dependency issue links, acceptance, `node scripts/validate-contracts.mjs --self-test` and any future fixture commands after dependencies exist, migration/rollback, evidence URL, state (`proposed|specified|tested|reviewed`) and who signs off. Do not branch by reflex or rewrite user commits. No large dependency/toolchain installed at this stage.
