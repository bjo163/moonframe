# Data Workspace Suite — table is not grid

**Canonical behavior:** [Data Workspace Contract](../../contracts/moonframe-data-workspace-contract-v0.1.json). **Concrete sections:** [Block manifest](../../contracts/moonframe-block-manifest-v0.1.json), **Pages:** [Page templates](../../contracts/moonframe-page-template-manifest-v0.1.json). No table engine installed.

## Four explicit tiers

| Tier | Scope | Owned by Moonframe | Not owned |
|---|---|---|---|
| 1 Simple Table (P1) | semantic caption/head/body/footer and cell formatting | markup, focus for interactive cells and responsive layout | sort/query engine |
| 2 Data Table (P1) | controlled sorting/pagination/selection, empty/error | UI state mapping, aria-sort, selection affordances | data fetching, server sort authorization |
| 3 Advanced Data Workspace (P2) | search/chips/filter builder/saved views/column chooser/bulk/detail/export affordance | presentations, local controlled query model, interaction intent | persistence, remote aggregates, file generation |
| 4 Enterprise Data Grid (P3) | optional virtualization/editing/pinning/aggregation/pivot | adapter contracts and fallback UI **if approved later** | ready-made spreadsheet engine or licensed premium redistribution |

[Official TanStack Table](https://tanstack.com/table/latest/docs/overview) is **headless**. It is a credible future state engine for tiers 2–3, not a finished data grid. [TanStack Virtual](https://tanstack.com/virtual/latest/docs/introduction) is also headless and optional for huge collections. [MUI X](https://mui.com/x/introduction/licensing/) differentiates free Community from commercial Pro/Premium features; proprietary capabilities must not silently enter Moonframe's core.

## Controlled state and query compatibility

Proposed query-state shape:
`{ pagination: {pageIndex,pageSize,totalCount?,cursor?}, sorting: [{id,desc}], filters: AST, globalSearch, columnVisibility, selection: stable IDs, groupBy?, savedViewId? }`. Sorting and filtering cannot silently shift selected records; their IDs must remain stable. When backend pagination uses cursors, do not invent a total page count. Selection across pages must be explicitly scoped (current page vs whole result set) and confirmed before bulk destructive operations.

`onQueryChange` emits serializable intent and never assumes backend success; `onExportIntent` requests an export from the app; `onSaveViewIntent` requests persistence. Provider state `loading/refreshing/stale/offline/error/ready/forbidden` is supplied or adapted deliberately, not guessed from local UI. Table adapters must not issue implicit network requests.

## Test fixture priorities

12 normal rows, 500 rows, optional 50k rows for virtualization spike, long names/RTL/locales, missing cells, expensive columns, focus and selection persistence after paging, sorting/filtering, row action, column chooser, all selected across pages, stale results/error retry, unauthorized action, empty/no-results, sticky header at browser zoom and keyboard alternatives on mobile.

Every chart and data grid must expose meaningful accessible alternatives: value summaries, data tables, labels not based solely on color and screen reader/keyboard support. ERP tables must remain accessible at compact density. No claimed performance measurement until a consumer fixture runs.
