# Moonraw — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-192 · **Scope:** reusable skin direction only; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Moonraw expresses raw minimalist brutalism through exposed structure and deliberate restraint. Use a sparse, left-aligned composition with a strong baseline grid, generous unfilled space, and a small number of hard-edged content regions. Let alignment, scale, and direct typographic hierarchy do the work: a plain, assertive display face for headings, neutral readable body text, and tabular figures for dense values. Navigation should remain compact and text-forward, with the current location marked by a clear rule or structural offset. Avoid distressed textures, ornamental illustration, and repeated card chrome; the identity should remain recognizable when all decoration is removed.

This is a structural recipe, not a palette prescription. Use existing Moonraw skin specifications and canonical tokens as implementation authority; do not introduce token values, font files, or new public APIs here. Keep all essential labels and content in live DOM text. No consumer branding, borrowed symbols, or unlicensed assets are implied.

## Distinction from Classic

- **Moonraw:** exposed grid, sparse page, direct alignment, and minimal surface treatment. Content groups are separated by whitespace and decisive rules rather than containers.
- **Classic:** familiar framed modules and conventional balanced spacing. Do not let Moonraw accumulate Classic's rounded, repeated card hierarchy; preserve a more open silhouette and fewer, stronger divisions.

Color alone does not establish the distinction. Geometry, type scale, navigation placement, and data grouping should remain legible as differences in grayscale and in both appearance modes.

## Shared behavior and review constraints

Preserve the shared component APIs, DOM order, keyboard and form behavior, and ARIA meanings across skins. Keep visible focus and status meaning independent of accent color. Rules and offsets must not cross text, controls, focus indicators, or hit targets. Decorative layers remain optional, with an art-off fallback; reduced-motion and forced-colors contexts must retain the same content and actions. At narrow widths, preserve reading order and prevent horizontal overflow.

Before claiming visual distinction, compare identical fixture content against Classic in light and dark modes, grayscale, decoration-off, and responsive viewports. Human review remains pending until a reviewer inspects rendered evidence.
