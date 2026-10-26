# Moonink — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-144 · **Scope:** reusable skin direction; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Moonink uses expressive brush-ink marks as a controlled accent around a calm, open composition. Keep page structure legible through generous margins, clear alignment, and a deliberate hierarchy from heading to supporting copy and actions. Reserve brush forms for a few noninteractive edges or section transitions; keep text and controls on stable, quiet surfaces. Prefer irregular ink silhouettes and tapered strokes over uniform panels, repeated cards, or dense decorative texture. All essential copy remains live DOM text, and no new token values or font assets are implied.

## Distinction from Moonscrawl

Moonink places occasional expressive marks around spacious content, with typography and navigation following a calm editorial hierarchy. Moonscrawl uses rough, distressed surfaces as a broader frame and stronger, more fragmented display treatment. Moonink should remain composed when all artwork is removed; Moonscrawl's texture is more integral to its visual rhythm. Do not copy either skin's accent palette as the distinction: geometry, spacing, and type hierarchy must carry it.

## Shared behavior and fallback

Preserve the common component APIs, DOM order, keyboard and form behavior, and ARIA meanings. Keep status colors and focus indicators clear in color and grayscale. Decorative ink must not cover content, focus, or hit targets, and must disappear cleanly in decoration-off and forced-colors contexts. Reduced motion uses static composition; narrow layouts keep the same reading order and sufficient control spacing. Compare identical content at wide and phone widths before claiming visual distinction. Human review, production tokens, asset rights, and acceptance remain pending.
