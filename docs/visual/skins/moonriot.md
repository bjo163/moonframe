# Moonriot — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-084 · **Scope:** visual direction only; no production token, logo, or asset approval.

## Direction

Moonriot is an angular editorial skin whose motion comes from direction and interruption. Use a broad top navigation band, then let the content occupy the full width beneath it. Build hierarchy with diagonal fields, clipped or asymmetric panel edges, and a strong leading rule; keep the overall shell comparatively open instead of enclosing every region in Moonpunk-style slabs. An italic or sharply condensed display role can carry the editorial voice, paired with neutral, highly readable body text and tabular figures where data needs scanning. Active navigation remains clear through shape and position as well as color.

This is a structural recipe, not a palette prescription: keep the geometry, top-band navigation, directional cuts, and type hierarchy legible in grayscale and in both modes. Do not add consumer branding, borrowed reference artwork, or unlicensed fonts. Charts retain text summaries or tables, and semantic status remains independent of accent color.

## Distinction from neighboring skins

- **Moonpunk:** Moonriot uses a full-width top band and directional editorial cuts; Moonpunk uses a persistent side rail, framed zones, and hard offset slabs. Do not reduce Moonriot to Moonpunk with a changed accent.
- **Moonsmash:** Moonriot's energy follows a directional editorial reading path across an open page; Moonsmash centers a poster-like focal burst. Keep Moonriot's content hierarchy calm enough to scan rather than radiating every region from one focal point.

## Implementation and review constraints

Keep DOM order, component APIs, keyboard behavior, form meaning, and ARIA contracts shared across all skins. Preserve visible focus against clipped and asymmetric decoration; ensure clipping never obscures text or controls. Artwork and texture stay optional and outside essential content, with a useful decoration-off fallback and reduced-motion behavior. Use the canonical skin grammar and specification for implementation; this brief does not approve token values, font licenses, consumer branding, or asset rights.

Before claiming visual distinction, compare identical content in light and dark modes, grayscale, and decoration-off at fixed viewports. Pair status remains `not-reviewed` until a human inspects rendered evidence.
