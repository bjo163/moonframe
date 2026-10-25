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

---

## 2026-10-25 Advanced Data Workspace specification — normative extension

**Status: specified/proposed only. No UI code.** The pre-existing four-tier definition at top remains canonical. [Data Workspace Contract](../../contracts/moonframe-data-workspace-contract-v0.1.json) is the sole owner of versioned model field names, query/state, capability IDs, server adapter, saved views and export policy. [Component API Bible](../component-api-behavior-bible.md) owns common React conventions, refs, event/keyboard behavior; [block manifest](../../contracts/moonframe-block-manifest-v0.1.json) and [page manifest](../../contracts/moonframe-page-template-manifest-v0.1.json) own C/D IDs. [ADR-0004](../adr/0004-data-workspace-engine.md) and [dated research](../research/advanced-data-workspace-research-log.md) own engine comparison. No duplication of global token names or skin grammars.

### 1. Distinct product levels

- **A — Semantic Table (P1):** HTML `<table>` with caption/thead/tbody/tfoot, headers/scope, formatting, overflow, optional actual controls. Pure display does **not** use `role=grid`.
- **B — DataTable (P1):** generic row/column model, stable row IDs and controlled sort/page/select, accessible sort header/checkboxes; no server fetch or guarantee of spreadsheet-style cell focus. Future headless candidate TanStack Table v9; not installed.
- **C — Data Workspace (P2, with P1 narrow slice):** composition of DataTable, search, filters/chips, column chooser, selection summary, bulk intents, saved-view selector, record drawer and async state. Existing Level C data blocks are the only catalog definitions.
- **D — Enterprise Data Grid (P3 optional):** cell-focus keyboard model, resizing/pinning, editing, virtualization, grouping, pivoting and other optional advanced features with separate engine/licensing approval.
- **E — Domain presets (P2):** *synthetic*, permission-neutral user/invoice/inventory/audit/log display columns and formatters; no accounting, SQL, API or domain rule enforcement.
- **F — Page templates:** compose existing data blocks/pages for records table, data-workspace, audit, responsive list, filter builder, optional grid lab; no new duplicate page manifest.

**Data Workspace A–F are product-layer terms**, not identical to Premium Catalog package Level A/B/C/D/E/F; explicit `level`/tier are controlled by each canonical manifest.

### 2. Column + row identity contract

A column must have a **unique stable `id`** independent of translated header, kind `accessor|display`, value type, header label, visibility/sort/filter/export abilities, width limits, alignment/format metadata and accessible naming. Accessor/renderer JavaScript closures are app-owned and **not** serialized into URL/saved view JSON; display columns are not inherently sortable/exportable. Column IDs and server filter/sort keys must be allowlisted. After columns change, saved-view migrations either map reviewed IDs or prune unknown IDs with warning and at least one identifying column left visible. Masking a column in UI is not authorization.

Each row needs a stable app/server ID. Index-based IDs shift under sort/page/filter and are banned for selectable rows. Duplicate IDs are fatal for selection; absent IDs trigger a read-only fallback and visible configuration warning (not fabricated selection). Nested/group rows use a disjoint namespace. The app revalidates changed/delete IDs and owns record revisions/optimistic-conflict handling.

### 3. Query state and event contract

The versioned [query model](../../contracts/moonframe-data-workspace-contract-v0.1.json) makes these separate: globalSearch, sorting, filterAST, pagination, column preferences, selection, savedViewId, density, async response state. Native component value changes follow [Component API convention](../component-api-behavior-bible.md): intent changes go *once* to app; externally controlled props do not echo callbacks. For native controls, native `onChange(event)` is preserved where appropriate. Unknown/invalid/stale query state must recover safely without silently broadening server permission scopes.

**Client mode** processes a complete authorized client dataset; **server mode** renders only server-produced rows, not a second client filter/sort/page. Offset pagination supports known or unknown totals (if unknown, no fake last page); cursor pagination has opaque cursor and no numeric page semantics. Changing filters/search normally resets offset page or cursor; sorting does not discard stable selected IDs without declared policy. Server adapter carries `requestId` + queryFingerprint and optional abort; late responses are ignored, stale data visibly labeled, initial loading differs from refresh. The app owns data fetching, cache, permission and query-to-SQL translation.

### 4. Filter AST + localization

Filter AST is a **versioned JSON expression tree** with `group(and/or)` and allowlisted `predicate(fieldId,operator,value)`. An unsupported field/operator/type or an over-budget nesting depth must be **rejected**, not converted to arbitrary SQL. Null is different from empty string and zero. Date-only ISO `YYYY-MM-DD` is not a timestamp; timestamps are normalized to UTC with app-chosen timezone boundaries/DST. Values are stored canonically (numbers, booleans, ISO formats), rendered using `Intl.NumberFormat`/`Intl.DateTimeFormat`, and **never reparsed from localized display text**. RTL/bidi cells use `bdi`/direction isolation where needed.

Search state could be debounced by the consuming app but no hidden delayed network actions exist inside Moonframe. Invalid filter state is announced, focus moves to corrective control when appropriate. URL serialization uses approved safe subset, canonical param ordering/length limits, versioning and parse recovery. No credentials, sensitive personal filter values, auth tokens or selection snapshot in URLs or shared presets.

### 5. Selection semantics and safe bulk actions

The UI **must distinguish** `current-page`, `loaded`, `cross-page explicit IDs` and **all query matches**, including exclusion list and server-issued snapshot. The last variant needs explicit confirmation, revision/snapshot, expiration and fresh server authorization. Total selected/count wording states exactly which set is counted and whether total is known. Checkbox in table header must announce its scope; indeterminate is programmatic. Filter changes invalidate query-all selection; page/sort may preserve explicitly selected stable IDs by agreed app policy. Disabled action or hidden column does not deny server permission.

Example intents in pseudocode (not executable API):
```text
{kind:'explicit-ids',scope:'current-page',ids:['r1','r2']}
{kind:'explicit-ids',scope:'cross-page',ids:['r1','r56']}
{kind:'query-all-except',snapshotId:'server-issued',queryFingerprint:'q42',excludedIds:['r5'],expiresAt:'...',confirmationRequired:true}
```
A bulk action receives the frozen summary and calls an app callback. Only the server determines real permission, final target count, mutation, idempotency and audit trail. A client-side `selectAll: true` flag is forbidden because its meaning is ambiguous.

### 6. Saved views / columns / responsive

Saved views carry `schemaVersion`, `columnSchemaVersion`, stable owner/visibility, revision/ETag, query and column preferences. Personal/team/shared access is a backend policy; `onSaveViewIntent` never claims data persisted. On ETag conflict provide reload/duplicate/compare; never silently overwrite. Unknown column/filter IDs on migration prompt and prune. Store only non-sensitive local preferences after consumer consent.

Column chooser/reorder/resize need keyboard alternatives to pointer drag; avoid hiding every meaningful identifying field. Pinning and multi-column sticky overlays are P3 until focus, zoom and scroll testing passes. On narrow screens use **labeled record cards/list + detail view**, preserving every required field and action; a horizontally scrollable table remains an option, not the only solution. Mobile filter drawer must restore focus on close. Moonledger can *suggest* compact density, but the user/app instance may choose another density under the authoritative Theme Contract.

### 7. Export, import and file security

**Export UI ≠ export engine.** Intent scopes are `visible-page`, `loaded`, `selected-explicit`, `all-query-matches`. UI shows exactly which columns/rows, quantity (if known), locale/timezone, formatting and filename intent; app/server independently reauthorizes rows, fields and downloads. Huge/all-server-result export requires app-owned asynchronous job states `authorization-pending → queued → running → ready/failed/cancelled/expired` with safe error and retry/expiry. No browser-side assumption that records not loaded can be exported.

CSV **RFC 4180** escaping of delimiter, `"`, CRLF and Unicode does not solve **OWASP formula injection**. Untrusted cells may begin `= + - @`, tab, CR/LF, or inject a new cell via delimiter/quote; some spreadsheet apps undo naive escaping after save/reopen. Any future serializer must define target-app-specific neutralization, run formula-payload fixtures including save/reopen, and prefer explicitly typed text cells in XLSX when applicable; none is implemented now. Import (P3) covers preview, row errors, file limits, duplicate policy, cancel and background-job feedback only—never file scanning, authorization or DB updates.

### 8. Native table vs ARIA grid, high risk keyboard cases

[WAI APG Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/) encourages native table for noninteractive tabular presentation. Sort header gets a **real button**, `aria-sort` on the appropriate column header and a concise update announcement, not a click on `<th>`. Row selection uses labeled checkboxes in cells; keyboard Tab reaches controls, **not every cell**. ARIA `role=grid` is justified only when implementing the composite arrow/home/end focus model, cell editing and selection semantics described in [APG Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/). Wrong role without actual keyboard behavior is a blocker.

Virtualization needs an explicit keyboard escape/focus policy, honest total/position, dynamic heights, scroll restoration and screen reader testing across browsers/AT, ideally a nonvirtual accessible alternate. Sort/page/filter changes must announce counts and preserve focus appropriately; ColumnChooser/FilterBuilder/dialog use shared overlay focus return. Sticky columns cannot obscure focus, controls or virtualized reading order. Controls must remain perceivable under forced-colors, zoom 200–400%, RTL and reduced motion with no color-only state.

### 9. Five domain-neutral specimen profiles (fictional data only)

- **Admin users:** name/status/role (display only), searched/sorted list, row detail, permissions forbidden; backend owns role enforcement.
- **Invoices:** ID/date/amount/currency/payment status display, exact locale formatting, unknown totals; Moonledger does not calculate taxes.
- **Inventory:** SKU/location/quantity, filters, selection scope, long fields, no stock movement engine.
- **Audit/webhook:** timestamp/actor/action/status/trace ID and safe detail drawer; no event replay execution.
- **Project/tasks:** assignee/due/status, grouping (P3), no workflow transition engine.

Use existing [component IDs](../../contracts/moonframe-component-manifest-v0.1.json), [block IDs](../../contracts/moonframe-block-manifest-v0.1.json) and [page IDs](../../contracts/moonframe-page-template-manifest-v0.1.json); [preset map](../../contracts/moonframe-data-preset-catalog-v0.1.json) references those instead of creating clones.

### 10. Test/review/release boundary

[Dedicated data QA](../qa/data-workspace-validation-plan.md), [skin recipe coverage matrix](../../contracts/moonframe-data-skin-coverage-v0.1.json), [engine ADR](../adr/0004-data-workspace-engine.md) and [atomic backlog](../backlog/advanced-data-workspace-issues.md). Specify deterministic 12/500/50000-row synthetic fixtures, sort/filter/server cursor/race/select/all query/export CSV security, same data across 30 appearances and separate 105 skin pair human reviews. Actual UI implementation, package benchmarking and accessibility review have **not run**.

**Out-of-scope by contract:** authentication, server authorization, SQL/ORM, accounting/game rules, persistence of views, bulk/export/background job backend, chat/model execution, private network calls and production asset/SFX generation.
