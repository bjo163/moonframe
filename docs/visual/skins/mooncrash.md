# Mooncrash — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-156 · **Scope:** industrial maintenance skin direction; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Mooncrash presents the interface as a serviceable equipment console. Use a mechanical header and equipment-rack navigation to organize stacked work zones. Group related controls on plate-like matte surfaces, with numbered section labels and clear functional boundaries. Reserve hazard striping for actual warnings or emphasis; it must never carry meaning by itself. Use a utilitarian body hierarchy with condensed industrial labels only where a licensed font is available, and retain a legible system fallback. Align measurements and status values for quick scanning without turning the whole page into a raw ERP grid.

Component construction follows the canonical recipes: notched machined buttons, bolted input frames with clean labels and focus, plate-and-fastener cards, inspection-hatch dialogs with accessible titles, and mechanically divided tables. Resource gauges and operational logs need readable text summaries and accessible tabular alternatives. Notification stripes accompany explicit status copy; color and pattern alone do not communicate state. These are structural directions, not new token values or asset approvals.

## Distinction from Moonledger

Mooncrash organizes work around equipment, service zones, inspection stages, and operational status. Its shell uses rack-like navigation and stacked mechanical work areas. Moonledger organizes records for precise accounting and audit, emphasizing aligned ledger rows, stable columns, and numeric comparison. Keep Mooncrash's industrial hierarchy in its shell, plates, and inspection flow; do not reduce the distinction to a different accent color or apply hazard markings to ordinary ledger data.

## Shared behavior and fallback

Preserve shared component APIs, DOM order, keyboard and form behavior, and ARIA meanings. Focus remains clear against matte frames, labels stay associated with fields, and hit areas remain usable. Avoid decorative shaking on errors. Reduced motion removes impactful movement and flashing; decoration-off and forced-colors modes retain all content, controls, and status meaning. At narrow widths, stack work zones in reading order and keep equipment navigation operable without horizontal page overflow. Compare the same fixture in light/dark, grayscale, decoration-off, and responsive views before claiming visual distinction. Human review, font and asset rights, production tokens, and acceptance remain pending.
