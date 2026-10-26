# Classic screenshot-based anti-clone review

**Task:** MF-VF-419 · **Dependency:** MF-VF-216 implemented · **Status:** protocol implemented; capture and human review pending.

This protocol checks that Classic remains a clean, practical neutral baseline through structure and hierarchy, without forced brand colors or scene artwork. Compare it with Moonraw's exposed, sparse composition and Moonquest's journal-like reading structure. The protocol does not claim that new screenshots were captured or reviewed.

## Capture fixture

- Use the same route, content, data, component states, browser profile, and asset inputs for Classic, Moonraw, and Moonquest. Capture desktop at 1440×960 and mobile at 360×800, at 100% zoom and device scale factor 1.
- Capture Light and Dark modes, each in color and grayscale, with optional decoration enabled and disabled. Keep selected navigation, form values, scroll position, and open menus/dialogs identical.
- Record source commit, route, skin, mode, viewport, fixture/content version, browser and OS, font provenance, capture date, and a SHA-256 for every PNG. Link artifacts in the visual fidelity evidence ledger. Paths or hashes alone are not review verdicts.
- Use the existing generic fixture assets only. Do not add a brand mark, consumer identity, or unapproved scene art to establish the Classic direction.

## Human comparison record

For each viewport and mode, record reviewer, date, artifact IDs and hashes, observations, and a plain-language disposition (`distinct`, `overlap found`, or `inconclusive`). Address:

| Dimension | Classic baseline to inspect | Human observation / artifact IDs |
| --- | --- | --- |
| Practical structure | Familiar, orderly regions and restrained framing; hierarchy remains clear without decorative scenes | Pending |
| Neutral hierarchy | Spacing, typography, alignment, and borders communicate hierarchy without relying on brand accent color | Pending |
| Comparator distinction | Moonraw stays open and sparse; Moonquest retains chapter/journal grouping. Note any convergence in geometry or navigation | Pending |
| Grayscale and decoration-off | The baseline remains legible and recognizable when hue and optional decoration are removed | Pending |
| Responsive reflow | At 360×800, preserve reading order, usable controls, and visible focus without clipping or horizontal overflow | Pending |
| Semantic surfaces | Labels, values, errors, statuses, actions, and focus remain unobstructed and retain their shared meanings | Pending |

Repeat the comparison in both appearance modes. Record contrast or status concerns for follow-up; this protocol is not an accessibility certification. Keep the disposition pending until a human inspects the rendered evidence. Automated checks and captures do not imply approval.

## Evidence limits and rollback

This is a review protocol only. It does not claim screenshots, visual fidelity, asset rights, human review, or acceptance. Rollback: remove this file and restore MF-VF-419 to `planned` in the reference backlog and TODO index.
