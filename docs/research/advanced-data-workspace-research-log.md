# Advanced Data Workspace — Primary Source Research (2026-10-25)

**Tanggal akses:** 25 Oktober 2026. Ini ringkasan dari laman resmi, bukan pengujian fitur pada Moonframe. Rilis yang tampil di situs dapat berubah; **tidak ada versi terpasang** dalam repo. `latest` bukan peer/version pin. Semua penilaian opsi di bawah adalah hipotesis sebelum spike.

| Pertanyaan | Sumber resmi | Teramati | Implikasi, confidence |
|---|---|---|---|
| Table headless terbaru | [TanStack Table Overview](https://tanstack.com/table/latest/docs/overview) + [Features](https://tanstack.com/table/latest/docs/guide/features) | Official site displays **v9 Latest**; `/docs/introduction` legacy path returned 404 | Headless owns models/state not DOM/a11y. Need v8→v9 API/migration check, **high** |
| Client/server | [TanStack client vs server](https://tanstack.com/table/latest/docs/guide/client-side-vs-server-side) | Both modes and trade-offs documented; `latest` is v9 | Avoid accidental double sort/page, separate backend truth, **high** |
| Virtualization | [TanStack Virtual](https://tanstack.com/virtual/latest/docs/introduction) | Official site shows **v3 Latest**, headless virtualizer | No keyboard/screen-reader semantics provided automatically, **high** |
| shadcn DataTable | [shadcn docs](https://ui.shadcn.com/docs/components/data-table) | Current link redirects to `/docs/components/base/data-table` | Reference pattern rather than engine or promise of official compatibility, **high** |
| Table vs grid | [WAI-ARIA Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/) and [Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) | Table noninteractive structure; grid composite with arrow keyboard navigation. Native HTML table preferred if possible | Prefer semantic `table` until cell keyboard model demonstrably needed, **high** |
| React Aria Table | [React Aria Table](https://react-aria.adobe.com/Table) | Collection/table accessible keyboard selection model, sorting and related features described | Competing pattern for selection-heavy tables, test provider integration, **medium** |
| AG Grid tier | [AG Grid Community vs Enterprise](https://www.ag-grid.com/react-data-grid/community-vs-enterprise/) + [pricing](https://www.ag-grid.com/license-pricing/) | Official homepage displays **v36.2.0**; Community MIT, Enterprise commercial; advanced filter, Excel/PDF export, pivot/grouping gated | Optional paid grid not bundled or redistributed without legal/consumer review, **high** |
| MUI X grid tier | [MUI X Grid](https://mui.com/x/react-data-grid/), [licensing](https://mui.com/x/introduction/licensing/) | Official site displays **Data Grid v9.16.0**, Community MIT, Pro/Premium commercial; row grouping and Excel export Premium | Paid features require separately approved adapter/rights, **high** |
| CSV syntax | [RFC 4180](https://www.rfc-editor.org/rfc/rfc4180) | Informational RFC (not security standard); quote, CRLF, double quotes and MIME guidance | Serializer must handle quotes/delimiters/newlines/Unicode, **high** |
| CSV formula injection | [OWASP CSV Injection](https://community.owasp.org/attacks/CSV_Injection) | Leading spreadsheet formula characters, delimiter/quote insertion and quote/unquote re-save attacks | Treat all untrusted text as formula-risk; application-owned approved mitigation+reopen tests, **high** |
| URLs | [MDN URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) | Percent-encoding/URL query model, length and privacy not magically solved | Versioned allowlist serialization; never secrets/PII in URL; **high** |
| Numbers and timestamps | [MDN Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) | Locale formatting APIs; time zone option for timestamps | Data model holds canonical numeric/date values, display formatting separate; **high** |
| WCAG and keyboard | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) + [APG grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) | WCAG 2.2 W3C Recommendation 2024-12-12 | AA target, manual screen reader, reflow/target sizing, a11y not proven by axe, **high** |
| Browser test | [Playwright](https://playwright.dev/docs/intro), [Storybook](https://storybook.js.org/docs/writing-tests) | Browser/screenshots/stories; no toolchain installed in Moonframe | Candidate fixture tools, pinned browsers/fonts/date/locale needed, **high** |
| Component APIs | [Component API Bible](../component-api-behavior-bible.md), [React](https://react.dev/) / [TypeScript](https://www.typescriptlang.org/docs/) | Source repository has no implementation/peer version | Keep data contract engine-neutral while consumer versions undecided, **high** |

## Weighted evaluation (illustrative hypotheses; NOT measured performance scores)

Weighted dimensions: semantic keyboard/AT feasibility **25**, visual/theming freedom **20**, data state depth **15**, server query adaptability **10**, implementation effort **10**, license/distribution risk **10**, SSR/bundle/perf **5**, future migration/lock-in **5** = 100. 1–5 scores are provisional judgment on **documented architecture**, not objective performance or WCAG passes. Sum weights × score / 5 (max 100). Don't accept provider without live fixture evidence.

| Strategy | A11y 25 | Skin 20 | Depth 15 | Server 10 | Effort 10 | License 10 | Perf 5 | Lock-in 5 | Hypothesis /100 | Confidence |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Native `table` + owned simple sort | 4 | 5 | 2 | 3 | 3 | 5 | 4 | 5 | **73** | medium |
| TanStack Table v9 headless + semantic UI | 4 | 5 | 5 | 5 | 3 | 5 | 4 | 4 | **88** | medium/low |
| React Aria Table/collection | 5 | 4 | 3 | 4 | 3 | 5 | 3 | 3 | **78** | medium/low |
| AG Grid full engine | 4 | 3 | 5 | 5 | 4 | 2 | 4 | 2 | **76** | low |
| MUI X full grid | 4 | 3 | 5 | 5 | 4 | 2 | 4 | 2 | **76** | low |

**Scoring interpretation:** 25% accessibility favors providers with documented navigation but **none has been tested**; skin freedom scores headless higher; full grids gain depth but incur license/skin lock-in; implementation effort estimates low confidence. These are *not a vendor selection*. Once six same-content fixtures and consumer support/versions are known, replace every estimated score with linked measurement and reviewer. Independent keyboard/screen reader failures **disqualify**, regardless of weighted total.

## Recommendation and future spike

Keep **native semantic `Table`** for tier 1, compare **TanStack Table v9 headless** as leading *candidate* for tier 2/3, **React Aria Table** for collection/selection-heavy alternate, and **AG Grid/MUI X** as optional enterprise tier 4 feasibility. Need pinned React peer, date/timezone, 12/500/50k row fixtures, sorting/filter/paging/selection, server cursor/unknown totals, 15-skin styling freedoms, keyboard/RTL/SSR, bundle, license rights. Revisit TanStack v8 sample snippets and migration guide before copying any API. This research does **not** authorize installation or implementation.
