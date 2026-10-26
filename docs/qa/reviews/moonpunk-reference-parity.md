# Moonpunk screenshot-based anti-clone review

**Status:** `review-protocol-ready / capture-and-human-review-pending` · **Task:** MF-VF-407 · **Dependency:** MF-VF-072 implemented · **Evidence state:** protocol only; no captures or visual verdict recorded.

## Capture protocol

Use the Skin Lab's fixed Northstar Studio fixture with identical content, component states, browser profile, and asset inputs for Moonpunk, Moonriot, and Moonsmash. Capture 1440×960 and 360×800 at each skin's light and dark mode, in grayscale, with decoration enabled and disabled. Record source commit, skin, mode, viewport, fixture version/content hash, browser/font provenance, capture date, and SHA-256 for each image. Use only existing approved generic fixture assets; missing reference PNGs are not a reason to substitute unlicensed imagery.

Compare the same overview, table, and form states. With decoration enabled, Moonpunk should read through framed block-built zones, a persistent utility rail, thick ink borders, and hard offset shadows. Moonriot should retain directional editorial disruption; Moonsmash should retain a concentrated radial impact composition. With decoration disabled and in grayscale, Moonpunk must remain recognizable through geometry, spacing, type hierarchy, and surface construction rather than its acid-lime accent or artwork. Check focus, labels, errors, statuses, and long text for unobstructed visibility at both widths.

## Comparison record

| Review dimension | Moonpunk distinction to inspect | Human observation / image IDs |
| --- | --- | --- |
| Block composition | Framed zones and persistent utility rail; avoid Moonriot's directional editorial flow | Pending |
| Grayscale identity | Hard offsets, ink borders, and hierarchy remain distinct without hue | Pending |
| Decoration-off structure | Geometry and surface construction still identify Moonpunk without artwork or texture | Pending |
| Comparator separation | Moonriot remains editorially directional; Moonsmash remains focal and radial | Pending |
| Semantic surfaces | Table values, form controls, labels, errors, status, and focus remain unobstructed | Pending |
| Responsive reflow | 360px preserves reading order without clipping or horizontal overflow | Pending |

Record reviewer name/date and concrete observations tied to screenshot IDs before making a visual distinction verdict. A screenshot or automated comparison alone cannot supply a human verdict. Until the record is completed, capture and human review remain pending.

## Evidence and rollback

This file is a review protocol only. No screenshots, runtime changes, asset rights, or visual verdict are claimed. Rollback: remove this file and restore MF-VF-407 to `planned` in the reference backlog and live index.
