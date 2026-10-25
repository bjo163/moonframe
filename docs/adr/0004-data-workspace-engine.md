# ADR-0004 — Advanced Data Workspace engine & semantic-table boundary

**Date:** 2026-10-25. **Status:** `proposed / NOT approved`. Next ADR after existing 0001/0002/0003; no package/source changes.

## Context
Moonframe has docs-only 151 components/21 data components, 19 data blocks and 6 data page templates, no React code. Existing [Data Workspace](../premium/data-workspace.md) separates semantic Table, DataTable, Data Workspace and enterprise grid. [Official research](../research/advanced-data-workspace-research-log.md) now shows TanStack **v9 latest**, Virtual **v3**, MUI X **v9.16.0** and AG Grid **v36.2.0** on inspected sites. These are **not installed**.

## Recommendation for future design
- Core semantic Table: **native HTML table**, readable caption, `th scope`, keyboard only when cells contain actual controls; don't apply role=grid.
- Headless controlled DataTable: **TanStack Table as candidate**, not approved; Moonframe owns accessible DOM and interaction semantics, stable query/selection model, visual skins.
- React Aria Table: evaluate separately for selection+keyboard collection model; composition lock-in and styling customization measured.
- Enterprise grid: optional integration/proprietary module via explicitly licensed AG Grid/MUI X where business case warrants advanced editing, pivot, virtualization, grouping.
- Table virtualization: headless TanStack Virtual optional; require screen-reader fallback, focus restoration, dynamic row measurement, SSR and browser benchmark.
- Component API [authority](../component-api-behavior-bible.md), theme and premium block ownership unchanged.

## Exact acceptance for decision
Pin consumer React, TypeScript, SSR and browser/locale matrix; build *future* nonproduction fixtures for 12/500/50000 synthetic rows with equal columns. Prove sort/filter/pagination and selection across pages, stable server cursor and race cancellation, APG/AT navigation, keyboard row action, no hidden query execution, 30 appearance styling feasibility (initial four × Light/Dark), mobile detail view, RTL, light/dark/forced colors, bundle bytes, install smoke and license/redistribution counsel check. Record actual evidence and decision owner. Any blocking keyboard/AT issue disqualifies a strategy; scores in research remain hypotheses.

**Not decided:** TanStack v9 vs v8 compatibility, React Aria API fit, provider and license integration, actual row-count virtualization threshold, first-paint performance, paid license acceptance. Source-owned and npm package distribution policies still pending issues #1/#4. This ADR is not a benchmark or greenlight to install dependencies.
