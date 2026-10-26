# Moonquest — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-228 · **Scope:** quest-book visual direction only; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Moonquest presents a workspace as a well-kept field journal for tracking a journey. Give the page a centered reading column with a clear chapter heading, a compact contents rail, and grouped entries that read like dated notes or inventory records. Use restrained book-like framing, ruled dividers, generous line spacing, and small-caps or classical serif display headings. Keep data rows orderly and compact so the journal metaphor does not make status, dates, or actions hard to scan. Navigation should behave like a table of contents, with a strong current-section marker that remains visible without color.

This is a structural recipe, not a palette prescription. The existing Moonquest parchment and double-rule treatment may inform surfaces, but distinguish the skin through its reading column, chapter hierarchy, and journal entry rhythm. Essential labels and illustrations remain live or accessible content; do not bake wording into artwork or introduce consumer story characters, borrowed symbols, or unlicensed fonts.

## Distinction from neighboring skins

- **Moonzine:** Moonquest uses a sequential journal column and consistent entry rhythm. Moonzine uses a broad, asymmetric magazine spread with overlapping editorial groups. Do not make Moonquest a collage of story cards.
- **Moonledger:** Moonquest organizes information as dated chapters and field notes. Moonledger is a transactional record surface built around aligned ledger rows and numeric scanning. Keep quest progress narrative in hierarchy and grouping, not decorative data-table geometry.

## Implementation and review constraints

Keep DOM order, component APIs, keyboard behavior, form meaning, and ARIA contracts shared across all skins. Preserve visible focus and readable control hit areas; do not let ornamental rules cross text or controls. Any pattern or illustration stays optional and outside essential content, with an art-off fallback and reduced-motion behavior. Follow the canonical skin grammar and specification; this brief does not approve token values, font licenses, consumer branding, or asset rights.

Before claiming visual distinction, compare identical content in light and dark modes, grayscale, decoration-off, and responsive viewports. Human pair review remains pending until a reviewer inspects rendered evidence.
