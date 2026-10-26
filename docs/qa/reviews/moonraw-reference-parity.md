# Moonraw screenshot-based anti-clone review protocol

**Task:** MF-VF-417 · **Status:** protocol implemented; visual review pending.

This protocol checks that Moonraw's exposed grid, sparse composition, and minimal surface treatment remain distinct without color or ornamental art. Compare against Classic's conventional framed modules and Moonledger's dense workbench structure. This document defines review conditions only; it does not claim that screenshots were captured or reviewed.

## Capture fixture

- Use the same page, content, data, viewport, browser, and theme mode for Moonraw, Classic, and Moonledger. Capture desktop at 1440×960 and mobile at 360×800, at 100% zoom and device scale factor 1.
- Record browser/version, OS, route, skin, mode, viewport, and capture date. For each viewport and skin, retain a normal color image and a grayscale version, each with decoration enabled and disabled.
- Keep interaction state fixed: same selected navigation item, form values, scroll position, and open/closed menus or dialogs. Record fixture limitations instead of changing content between skins.
- Store PNGs in the established visual evidence location and record relative paths plus SHA-256 values in the visual fidelity evidence ledger. A path or hash alone is not a review verdict.

## Human comparison record

For each comparison, record reviewer, date, artifact paths and hashes, observations, and a plain-language disposition (`distinct`, `overlap found`, or `inconclusive`). Address:

1. **Composition:** Moonraw should have an open silhouette, sparse aligned regions, and decisive rules. Classic may use familiar framed modules; Moonledger may use dense filters, tables, and split work areas. Record any convergence in grouping or framing.
2. **Grayscale structure:** Check whether alignment, whitespace, geometry, and type hierarchy preserve the distinction without accent color.
3. **Decoration-off state:** Confirm removal of optional decoration leaves content, DOM order, controls, focus visibility, and actions intact. Note rules or offsets that cross text, controls, focus indicators, or hit targets.
4. **Responsive behavior:** At 360×800, confirm reading order and usable control spacing; record clipping, horizontal overflow, and changes in emphasis relative to desktop.
5. **Appearance modes:** Repeat in Light and Dark. Record contrast or status-meaning concerns for follow-up without treating this visual protocol as a contrast or accessibility certification.

Keep the review `pending` until a human inspects the rendered evidence and records the comparison. Automated checks and completed captures do not imply approval.

## Evidence limits

This protocol is based on the Moonraw direction brief and existing review conventions. No screenshots were captured for this task. It grants no asset rights and makes no human review, visual fidelity, accessibility, or acceptance claim.
