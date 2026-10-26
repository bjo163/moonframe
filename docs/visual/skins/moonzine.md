# Moonzine — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-096 · **Scope:** editorial skin direction only; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Moonzine is an underground editorial workspace arranged like a magazine spread. Build its silhouette from asymmetrical story groupings, generous whitespace, paper-like surfaces, and overlapping cut-paper frames placed around the content. Use taped or torn-edge labels as optional decoration; keep layout, hit areas, focus indicators, and reading order in stable CSS and semantic HTML. A restrained editorial serif or expressive display role can mark headlines, paired with neutral readable body text and tabular figures for data. Navigation should read like a contents index with clear section labels. Cards may layer visually while preserving a predictable DOM order; tables, forms, and dialogs retain clear alignment, complete labels, and uncluttered readable surfaces.

Use light paper and dark photocopy-inspired surfaces as material cues, but do not define new token values or rely on color to establish the skin. The asymmetrical composition, paper geometry, whitespace, type hierarchy, and editorial navigation should remain distinct in grayscale. Texture belongs only to optional decorative margins and must leave text and controls clear. All essential wording stays live, selectable text; no unlicensed font or reference-derived art is assumed.

## Distinction from neighboring skins

- **Moonpanel:** Moonzine groups stories with editorial asymmetry and paper overlap. Moonpanel uses a strict rectangular grid, consistent gutters, and explicitly bounded panels. Do not turn Moonzine into a comic-dashboard grid.
- **Moonhalftone:** Moonzine uses layered paper and varied editorial whitespace. Moonhalftone uses monochrome ink, screentone fields, and sequential panel pacing. Do not reduce Moonzine to dot texture or manga panel rhythm.
- **Moonpunk:** Moonzine distributes attention across a magazine-like page. Moonpunk uses assertive utility slabs, thick framing, and a persistent operational rail. Do not substitute a command dashboard or hard-slab shell for the editorial spread.

## Implementation and review constraints

Keep shared component APIs, DOM semantics, keyboard behavior, form meaning, and ARIA contracts unchanged. Overlap decorative paper only outside interactive hit areas and readable text; preserve visible focus independently from rough edges. Provide a decoration-off fallback with the same content and usable structure, honor reduced motion with static layering, and support responsive reflow without fixed screenshot layouts. Follow the canonical skin grammar and specifications for implementation. This brief does not approve production tokens, typography assets, consumer branding, source rights, or visual acceptance.

Before claiming visual distinction, compare identical content in light and dark modes, grayscale, decoration-off, and responsive viewports. Human pair review remains pending until a reviewer inspects rendered evidence.
