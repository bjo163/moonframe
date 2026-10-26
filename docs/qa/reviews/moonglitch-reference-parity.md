# Moonglitch screenshot-based anti-clone review

**Status:** `review-protocol-ready / capture-and-human-review-pending` · **Task:** MF-VF-411 · **Dependency:** MF-VF-120 implemented · **Evidence state:** protocol only; no screenshots or visual verdict recorded.

## Capture protocol

Use the Skin Lab's fixed Northstar Studio fixture, identical content and component states, and the same browser/font setup for Moonglitch and its two nearest concept comparators, Moonchrome and Moonpunk. Capture at 1440×960 and 360×800 in grayscale, with decoration on and off. Record source commit, skin, mode, viewport, fixture version/content hash, browser/font provenance, capture date, and SHA-256 for every image. Keep missing source references explicit; do not substitute unlicensed imagery.

Review the same overview, data-table, and form states across all three skins. With decoration on, Moonglitch should read through telemetry bands, signal rules, compact diagnostic labels, and log-centered grouping. It should avoid Moonchrome's reflective polished material and Moonpunk's broad framed workspace and expressive offset slabs. With decoration off and in grayscale, check that geometry, spacing, typography, and hierarchy still distinguish the skins without relying on accent color or texture. Controls and dense text must remain unobstructed.

## Comparison record

For each viewport and decoration state, use same-data screenshots and record observations:

| Review dimension | Moonglitch distinction to inspect | Human observation / image IDs |
| --- | --- | --- |
| Composition | Diagnostic rail, telemetry header, and log-centered work area; distinct from Moonchrome and Moonpunk | Pending |
| Grayscale identity | Signal grouping and technical rules remain legible without hue | Pending |
| Decoration-off structure | Data hierarchy and diagnostic composition remain clear without optional art | Pending |
| Semantic surfaces | Table values, labels, errors, status, controls, and focus remain unobstructed | Pending |
| Responsive reflow | At 360px, content retains reading order without clipping or horizontal overflow | Pending |

Record reviewer identity, date, and concrete observations tied to screenshot IDs before assigning a visual disposition. A screenshot or automated comparison alone cannot supply human review. Until those records exist, capture and human review remain pending.

## Evidence and rollback

No screenshots were captured for this task in this invocation. This protocol adds no runtime behavior, brand mark, font, or source imagery. Rollback: remove this file and restore MF-VF-411 to `planned` in the reference backlog and live index.
