# Moonchrome screenshot-based anti-clone review protocol

**Task:** MF-VF-418 · **Status:** protocol implemented; visual review pending.

This protocol checks that Moonchrome's precision-futurist geometry and measured technical typography remain distinct from Moonpunk's expressive acid-lime editorial energy and Moonhalftone's screened manga-print surfaces. It defines review conditions only; it does not claim that screenshots were captured or reviewed.

## Capture fixture

- Compare the same page, content, data, viewport, browser, and theme mode for Moonchrome, Moonpunk, and Moonhalftone. Capture desktop at 1440×960 and mobile at 360×800, at 100% zoom and device scale factor 1.
- Record browser/version, OS, route, skin, mode, viewport, and capture date. For each viewport and skin, retain a normal color image and grayscale version, each with decoration enabled and disabled.
- Keep interaction state fixed: selected navigation, form values, scroll position, and open/closed menus or dialogs. Record fixture limitations instead of changing content between skins.
- Store PNGs in the established visual evidence location and record relative paths plus SHA-256 values in the visual fidelity evidence ledger. A path or hash alone is not a review verdict.

## Human comparison record

For each comparison, record reviewer, date, artifact paths and hashes, observations, and a plain-language disposition (`distinct`, `overlap found`, or `inconclusive`). Address:

1. **Composition:** Moonchrome should read through precise alignment, restrained technical framing, and deliberate geometry; Moonpunk may use expressive editorial scale, while Moonhalftone may use panel pacing and screened-ink texture. Record convergence in layout or framing.
2. **Grayscale structure:** Check whether geometry, spacing, and type hierarchy preserve the distinction without accent color.
3. **Decoration-off state:** Confirm optional artwork can be removed without changing content, DOM order, controls, focus visibility, or actions. Note any rule or frame crossing text, controls, focus indicators, or hit targets.
4. **Responsive behavior:** At 360×800, confirm reading order and usable control spacing; record clipping, horizontal overflow, and changes in emphasis relative to desktop.
5. **Appearance modes:** Repeat in Light and Dark. Record contrast or status-meaning concerns for follow-up without treating this protocol as a contrast or accessibility certification.

Keep the review `pending` until a human inspects rendered evidence and records the comparison. Automated checks and completed captures do not imply approval.

## Evidence limits

This protocol follows the Moonchrome visual direction and existing review conventions. No screenshots were captured for this task. It grants no asset rights and makes no human review, visual fidelity, accessibility, or acceptance claim.
