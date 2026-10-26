# Moonink screenshot-based anti-clone review protocol

**Task:** MF-VF-413 · **Status:** protocol implemented; visual review pending.

This protocol checks that Moonink's quiet brush-ink composition remains distinct through layout and negative space, rather than relying on color or a handwritten notebook treatment. It defines review conditions only; it does not claim that screenshots were captured or reviewed.

## Capture fixture

- Use the same page, content, data, viewport, browser, and theme mode for Moonink and its nearest structural comparator, Moonscrawl.
- Capture desktop at 1440×960 and mobile at 360×800. Keep browser zoom at 100%, device scale factor at 1, and record browser/version, OS, route, skin, mode, viewport, and capture date.
- For each viewport, capture a normal color image and a grayscale version. Capture each with decoration enabled and disabled, for eight states per skin.
- Keep interaction state fixed: no open menus or dialogs, same selected navigation item, same form values, and same scroll position. Record any fixture limitation rather than changing content between skins.
- Store the PNGs in the established visual evidence location. Record each relative path and SHA-256 in the visual fidelity evidence ledger; do not treat a file path or hash as a review verdict.

## Human comparison record

For every comparison, record reviewer, date, exact artifact paths and hashes, and observations for:

1. **Composition:** Moonink should retain calm margins, open space, and a few irregular ink marks near noninteractive edges. Moonscrawl may use rougher, more fragmented framing; Moonink should not become a dense notebook or lined-paper layout.
2. **Structure without color:** In grayscale, distinguish the skins through spacing, geometry, and type hierarchy. Accent color alone is not a distinction.
3. **Decoration-off behavior:** Removing ink must leave the same readable content, DOM order, controls, focus visibility, and actions. Record any ink that obscures text, hit targets, or focus.
4. **Responsive behavior:** At 360×800, preserve the reading order and usable control spacing; note clipping, overflow, or changed emphasis relative to desktop.

Finish with a plain-language disposition (`distinct`, `overlap found`, or `inconclusive`) and actionable deltas. Keep the state `pending` until a human reviewer records the comparison; never infer approval from automated checks or capture completion.

## Evidence limits

This protocol is based on the Moonink direction brief and the existing visual evidence ledger. No screenshots were captured for this task. It grants no asset rights and makes no human review, visual fidelity, accessibility, or acceptance claim.
