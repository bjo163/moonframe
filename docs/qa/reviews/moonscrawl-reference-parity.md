# Moonscrawl screenshot-based anti-clone review protocol

**Task:** MF-VF-416 · **Status:** protocol implemented; capture and human review pending.

This protocol checks whether Moonscrawl reads as an exploratory sketchbook through composition and working annotations, rather than borrowing Moonink's open brush-ink layout or Moonzine's finished editorial paper collage. It defines review conditions only; no screenshots or visual verdict are claimed.

## Capture fixture

- Compare Moonscrawl, Moonink, and Moonzine using the same page, content, data, browser, viewport, theme mode, zoom (100%), device scale factor (1), selected navigation item, form values, and scroll position. Record any fixture limitation.
- Capture at 1440×960 and 360×800. At each size, capture light and dark modes, color and grayscale, and decoration enabled and disabled. Keep menus and dialogs closed unless the chosen shared fixture requires them; use the same state for every skin.
- Record route, skin, mode, viewport, browser/version, OS, date, and decoration setting. Store PNGs in the established visual evidence location and record relative paths and SHA-256 digests in the visual fidelity evidence ledger. A path or digest is not a review verdict.

## Human comparison record

For each comparison, record reviewer, date, exact artifact paths and hashes, and observations for:

1. **Composition:** Moonscrawl should organize exploratory content into working clusters around a canvas. Moonink should retain calm negative space and occasional edge brush marks; Moonzine should retain a deliberate editorial spread. Note if Moonscrawl collapses into either neighbor's composition.
2. **Scaffolding:** Moonscrawl's restrained ruled construction and margin notes should support a sketchbook hierarchy. Check that marks remain decorative and do not resemble interactive controls, obscure text, or carry status meaning.
3. **Behavior and responsive order:** Confirm labels, DOM/reading order, focus, and actions remain understandable with decoration disabled and at mobile width; margin notes should join the readable sequence without covering controls.
4. **Grayscale and theme modes:** Identify any distinction that disappears when color is removed or when switching light/dark. Record concrete layout, spacing, typography, or annotation evidence rather than a numeric similarity score.

**Disposition:** `pending` until a human records observations and an explicit outcome in the evidence ledger. Do not infer rights clearance, owner approval, or acceptance from automated captures.
