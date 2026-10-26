# Moonhalftone screenshot-based anti-clone review

**Status:** `review-protocol-ready / human-review-pending` · **Task:** MF-VF-410 · **Dependency:** MF-VF-108 implemented · **Evidence state:** protocol only; no captures or visual verdict recorded.

## Capture protocol

Use the Skin Lab's fixed Northstar Studio fixture, content, component states, and browser profile for Moonhalftone and its two nearest concept comparators, Moonzine and Moonpanel. Capture each at 1440×960 and 360×800 in grayscale, with decoration enabled and disabled. Record the source commit, skin, mode, viewport, fixture version/content hash, browser/font provenance, capture date, and SHA-256 for every image. Use the same local approved generic assets where a fixture requires an asset; do not use missing reference PNGs as a reason to substitute unlicensed imagery.

Review the same overview, table, and form states across all three skins. With decoration enabled, inspect monochrome screentone fields and varied page pacing. Moonhalftone should read as manga print through tone density, panel-like sequencing, and ink framing; it should not become Moonzine's layered-paper collage or Moonpanel's rigid comic-panel grid. With decoration disabled and in grayscale, verify the composition remains distinct through spacing, borders, and hierarchy rather than color or texture alone. Keep controls, text, focus, and status surfaces clear in both states.

## Comparison record

For each viewport and decoration state, compare the same-data screenshots and record observations for:

| Review dimension | Moonhalftone distinction to inspect | Human observation / image IDs |
| --- | --- | --- |
| Composition | Tonal fields and varied pacing; avoid Moonpanel's rigid grid and Moonzine's paper spread | Pending |
| Grayscale identity | Distinction remains legible without hue through value, dot density, and ink framing | Pending |
| Decoration-off structure | Content hierarchy and skin identity remain understandable without screentone assets | Pending |
| Semantic surfaces | Table values, form controls, labels, errors, status, and focus remain unobstructed | Pending |
| Responsive reflow | At 360px, layout follows the same reading order without clipping or horizontal overflow | Pending |

Record reviewer name/date and concrete observations tied to screenshot IDs before making any visual distinction verdict. A screenshot or automated comparison alone cannot supply a human verdict. Until the record is completed, screenshot capture and human review remain pending.

## Evidence and rollback

No screenshots were captured for this task in this invocation. This protocol adds no runtime behavior, brand mark, font, or source imagery. Rollback: remove this file and restore MF-VF-410 to `planned` in the reference backlog and live index.
