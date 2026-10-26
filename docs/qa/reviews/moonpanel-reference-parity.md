# Moonpanel screenshot-based anti-clone review

**Status:** `review-protocol-ready / capture-and-human-review-pending` · **Task:** MF-VF-415 · **Dependency:** MF-VF-168 implemented · **Evidence state:** protocol only; no captures or visual verdict recorded.

## Capture protocol

Use the Skin Lab's fixed Northstar Studio fixture with identical content, component states, browser profile, and asset inputs for Moonpanel and its nearest concept comparators, Moonhalftone and Moonzine. Capture 1440×960 and 360×800 in light and dark modes, in grayscale, with decoration enabled and disabled. Record source commit, skin, mode, viewport, fixture version/content hash, browser/font provenance, capture date, and SHA-256 for every image. Use only existing approved generic fixture assets; do not substitute unlicensed reference imagery.

Compare the same overview, table, and form states. With decoration enabled, Moonpanel should read through its strict rectangular grid, deliberate panel spans, consistent gutters, and bounded content regions. Moonhalftone should retain tonal fields and varied pacing; Moonzine should retain asymmetrical editorial groupings, whitespace, and layered-paper construction. In grayscale and with decoration disabled, verify that Moonpanel remains distinct through grid geometry, spacing, borders, and hierarchy rather than hue or texture. Check labels, values, errors, status, focus, and long text for unobstructed visibility at both widths. At 360px, panels should serialize in semantic reading order without clipped content, horizontal overflow, or changed keyboard order.

## Comparison record

| Review dimension | Moonpanel distinction to inspect | Human observation / image IDs |
| --- | --- | --- |
| Grid composition | Rectangular bounded panels with consistent gutters and intentional spans; avoid Moonhalftone's varied tonal pacing | Pending |
| Comparator separation | Moonhalftone remains screentone-led; Moonzine remains an asymmetric editorial spread | Pending |
| Grayscale identity | Grid geometry, spacing, borders, and hierarchy remain legible without hue | Pending |
| Decoration-off structure | Panel boundaries and reading hierarchy remain recognizable without decorative assets | Pending |
| Semantic surfaces | Table values, controls, labels, errors, status, and focus remain unobstructed | Pending |
| Responsive reflow | 360px preserves DOM and keyboard order without clipping or horizontal overflow | Pending |

Record reviewer name/date and concrete observations tied to screenshot IDs before making any visual distinction verdict. A screenshot or automated comparison alone cannot supply a human verdict. Until the record is completed, capture and human review remain pending.

## Evidence and rollback

This file defines a review protocol only. It does not claim screenshots, runtime changes, source rights, or visual approval. Rollback: remove this file and restore MF-VF-415 to `planned` in the reference backlog and live index.
