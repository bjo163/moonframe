# Moonledger — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-240 · **Scope:** enterprise data-workbench direction only; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Moonledger presents operational records as a quiet, compact enterprise workbench. Use persistent workspace navigation with breadcrumbs and contextual actions, then organize dense work into a persistent filter area and table/detail split panes. Precise aligned grids, stable column geometry, subtle separators, and restrained radii establish the composition. Keep neutral surfaces and muted chrome subordinate to a clear hierarchy for data, status, and actions.

Use a highly legible enterprise sans hierarchy and tabular numerals for comparable values, with platform/system fallback until any font license is verified. Tables, filters, saved views, and audit timelines carry the interface; decorative art is excluded by default. Compact density must preserve readable text, tested target sizes, visible focus, and explicit field validation. This brief describes structure and hierarchy, not new token values or a fixed color palette.

## Distinction from neighboring skins

- **Mooncrash:** Moonledger organizes records around stable columns, numeric comparison, and audit history. Mooncrash organizes work around equipment, inspection stages, and operational status on plate-like zones. Do not use hazard markings as ordinary ledger decoration.
- **Moonquest:** Moonledger is a transactional data workbench with filters and persistent record panes. Moonquest uses dated journal entries and sequential chapter hierarchy. Do not apply game, relic, or quest-progress treatments to enterprise data.
- **Classic:** Moonledger's identity comes from compact split-pane geometry, persistent filtering, and aligned data. Keep it distinct from a broadly polished neutral layout; do not rely on accent color alone.

## Shared behavior and review constraints

Keep public component APIs, DOM and reading order, keyboard behavior, form semantics, and ARIA meanings identical across skins. Compact layouts must not shrink controls below tested target requirements. Preserve clear focus, associated validation messages, and text or tabular alternatives for data visualizations. At narrow widths, reflow panes by content priority without hiding required actions or causing page-level horizontal overflow. Reduced-motion, grayscale, decoration-off, and forced-colors states retain the same information and status meaning.

Compare identical fixture data in light and dark modes, grayscale, decoration-off, and responsive viewports before claiming visual distinction. Human pair review, font and asset rights, production token values, and acceptance remain pending.
