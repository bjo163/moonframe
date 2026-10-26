# Moonzine screenshot-based anti-clone review

**Status:** `review-protocol-ready / capture-and-human-review-pending` · **Task:** MF-VF-409 · **Dependency:** MF-VF-096 implemented · **Evidence state:** protocol only; no captures or visual verdict recorded.

## Capture protocol

Use the Skin Lab's fixed Northstar Studio fixture with identical content, component states, browser profile, and asset inputs for Moonzine, Moonpanel, and Moonriot. Capture 1440×960 and 360×800 in light and dark modes, in grayscale, with decoration enabled and disabled. Record source commit, skin, mode, viewport, fixture version/content hash, browser/font provenance, capture date, and SHA-256 for every image. Use only existing approved generic fixture assets; do not substitute unlicensed reference imagery.

Compare the same editorial overview, story list, table, and form states. With decoration enabled, Moonzine should read as an editorial spread through asymmetrical story groupings, generous whitespace, layered paper frames, and optional tape or torn-edge details. Moonpanel should retain its strict rectangular grid and bounded panels; Moonriot should retain its directional protest/editorial composition. Decoration-off grayscale captures must preserve Moonzine's identity through composition, spacing, typography, and surface structure without relying on paper texture or color. Check labels, values, errors, status, focus, and long text for unobstructed visibility at both widths. Paper edges and overlays must not cover hit areas or alter DOM reading order.

## Comparison record

| Review dimension | Moonzine distinction to inspect | Human observation / image IDs |
| --- | --- | --- |
| Editorial composition | Asymmetric story groupings and whitespace; avoid Moonpanel's uniform panel grid | Pending |
| Paper construction | Layered paper frames and optional tape remain secondary to readable content | Pending |
| Grayscale identity | Type hierarchy, spacing, and surface construction remain distinct without hue or texture | Pending |
| Decoration-off structure | Editorial spread remains recognizable with texture and paper accents disabled | Pending |
| Comparator separation | Moonpanel remains grid-based; Moonriot remains directionally disrupted | Pending |
| Semantic surfaces | Table values, form controls, labels, errors, status, and focus remain unobstructed | Pending |
| Responsive reflow | 360px preserves reading order without clipping or horizontal overflow | Pending |

Record reviewer name/date and concrete observations tied to screenshot IDs before making a visual distinction verdict. A screenshot or automated comparison alone cannot supply a human verdict. Until that record is completed, capture and human review remain pending.

## Evidence and rollback

This file defines a review protocol only. It does not claim screenshots, runtime changes, source rights, or visual approval. Rollback: remove this file and restore MF-VF-409 to `planned` in the reference backlog and live index.
