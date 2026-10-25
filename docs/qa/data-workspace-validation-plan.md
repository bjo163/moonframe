# Advanced Data Workspace — QA & Accessibility Validation Plan

**2026-10-25, planned only; no browser/toolchain/data-grid implementation.** Canonical states/selection/export remain [in the data contract](../../contracts/moonframe-data-workspace-contract-v0.1.json); global behavior in [Component API Bible](../component-api-behavior-bible.md). [Coverage matrix](../../contracts/moonframe-data-skin-coverage-v0.1.json): **6 same-data page targets × 15 skins × light/dark = 180 planned, 0 rendered**. Global 105 skin pair review still pending. No claims of WCAG conformance.

## Test contracts by tier

| Stage | Cases | Must prove / severity |
|---|---|---|
| Structural validator | schema/docs refs, status vocabulary, 15 skins, ID uniqueness, AST/selection/export valid+invalid fixtures | reject malformed IDs, bad AST nesting/operators, invalid cursor/offset pair, duplicate row/column IDs, query-all without snapshot, unsafe scope/version; **does not prove runtime safety** |
| Semantic Table | caption/thead/tbody, `th scope`, long strings, empty/error | native table no ARIA grid, header association and keyboard only for actual control |
| DataTable P1 | client/server sort, offset/cursor/unknown total, keyboard row checkbox, stable ID | sorting button + aria-sort, no duplicate callbacks, no index row key, 404/permission errors |
| Workspace P2 | nested filters, saved view migration/conflict, multi-page selected IDs, all-query snapshot | no broadening query on invalid AST, no implied authorization, explicit selection count and expiry |
| Export | CSV quote/comma/CRLF/Unicode, formula-like cells `= + - @`, tab/newline, Excel save+reopen; large job | app-owned mitigation and spreadsheet-specific test, no hidden backend authorization or successful export claim |
| Enterprise P3 | 50k/100k synthetic rows, variable row height, focus across virtualization, edit/pivot/pin/group | perf & bundle measured on pinned target hardware, AT alternative, license approved before selection |
| Responsive + A11y | widths 320–1920, zoom 200/400%, pointer, keyboard-only, NVDA/VoiceOver smoke, RTL, forced-colors, reduced motion | no focus trap, no data/action disappears without accessible alternate, selected/invalid states non-color only |
| Skin parity | Classic, Moonpunk, Moonzine, Moonledger × light/dark first; remaining all 30 | identical semantics and data, distinctive geometry/read order, screenshots/contrast human-review evidence |

## Deterministic fixtures

- 0 rows; 1 row; **12** normal rows; **500** real-ish synthetic rows; **50,000** synthetic rows optional performance and virtualizer spike (no benchmark yet).
- Mixed date-only vs timestamp and timezone, null/zero/empty, long IDs, RTL text, currency values, duplicate label but unique stable ID, intentionally **duplicate IDs** as failure fixture, renamed columns.
- Offset page change, cursor pagination without total, empty last page after deletion, late slow query response arriving after new request, stale version, offline state, permission revoked, bulk selection across pages.
- CSV formula-like cell, embedded comma, double quote, tabs, CRLF, newline, leading whitespace, Unicode, Excel reopen after save, huge export job expired/failed.
- Identical dataset/column order/locale/clock/fonts/timezone/browser/window dimensions across skin screenshots; same focus target and selected IDs.

## WCAG and APG checklist

Semantic HTML table (APG Table), aria-sort on header with native sort button, row-checkbox name and indeterminate state; no `role=grid` without APG cell navigation. Screen-reader announcements for filter active count, page transitions, selection current page vs query-all, job state. Keyboard focus restores on filter drawer/detail dialogs. Touch target SC 2.5.8 (exceptions apply), reflow/zoom SC 1.4.10, focus visible SC 2.4.7, nontext contrast SC 1.4.11 where applicable, meaningful info not conveyed by color alone. Forced-colors and OS reduced motion independent of skin. Test selection with pointer/keyboard/touch and screen-reader combos; axe catches only a subset.

## Release blockers (future)

Broken native associations/focus; missing UI actions on mobile; accidental unauthorized export implication; selection scope mismatch; query-all acting on wrong fingerprint/expired snapshot; malformed filter broadening query; stale request superseding new one; formula injection control missing without documented exception/test; inaccessible virtual row; broken SSR/RTL/forced-colors, invalid license/redistribution. Don't claim implemented/tested/reviewed without linked source+logs+manual evidence.

**Tooling:** Existing Node structural validator only. Later candidate Vitest/Testing Library, Storybook, Playwright and axe; manual NVDA/VoiceOver tests. No packages installed or browsers executed during specification.
