# Moonsmash — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-132 · **Scope:** expressive campaign skin direction only; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Moonsmash is a high-impact campaign and poster composition built around a single focal message. Use oversized live display headings, a clear supporting-copy tier, and a compact set of action or metadata blocks. Compose with deliberate diagonal energy, interrupted frames, and irregular bursts of negative space; keep the primary reading path obvious from headline through supporting content to action. Treat illustrations, halftone fields, and impact marks as optional decorative layers behind or beside the live content, never as substitutes for it.

Give the focal title and main action stable layout space so long copy can wrap without collision. Use angular framing and a limited number of high-contrast emphasis areas, while preserving semantic status colors and visible focus. The design should remain legible without images, texture, or motion and should reflow to a single-column reading order on narrow screens. Do not define new token values or bundle unlicensed fonts, photography, lyrics, performers, or reference-derived artwork.

## Distinction from neighboring skins

- **Moonpunk:** Moonsmash concentrates attention into a campaign focal point with diagonal, poster-like pacing. Moonpunk prioritizes persistent operational navigation, utility slabs, and dense workspace scanning.
- **Moonzine:** Moonsmash uses a singular headline and action hierarchy with energetic framing. Moonzine distributes attention across an editorial spread with paper layers and varied story groupings.
- **Moonhalftone:** Moonsmash may use impact fields as secondary emphasis. Moonhalftone relies on monochrome ink, screentone, and sequential panel pacing as its main visual grammar.

## Implementation and review constraints

Keep shared component APIs, DOM semantics, keyboard behavior, form meaning, and ARIA contracts unchanged. All essential copy remains selectable live text. Decorative layers must not obscure text, controls, focus indicators, or hit targets; provide an art-off fallback and honor reduced motion with static composition. Validate grayscale and responsive reflow before claiming structural distinction. Follow the canonical skin grammar and specifications. This brief does not approve production tokens, typography assets, consumer branding, source rights, or visual acceptance.

Compare identical content in light and dark modes, grayscale, decoration-off, and responsive viewports. Human pair review remains pending until a reviewer inspects rendered evidence.
