# Moonhalftone visual direction

**Status:** implementation direction derived from the canonical skin contracts; not rendered or approved.
**Depends on:** `MF-VF-015` (reference inventory, implemented).

## Signature direction

Build Moonhalftone as a monochrome manga print surface. Use controlled screentone fields, sparse ink contours, and sequential image rhythm to give the interface a printed-page quality. Keep the underlying application hierarchy clear and stable: real headings, navigation, data, and controls remain live DOM content. Screentone is an optional material treatment around content, never a substitute for borders, focus indicators, labels, or status text.

Use grayscale value and dot density to create depth. Accent colors may follow the existing semantic theme tokens, but they must not define this skin's identity. At decoration-off and grayscale settings, the composition should still read as manga print through its tone fields, pacing, and restrained ink framing.

## Distinction from neighboring skins

- **Moonpanel:** Moonhalftone uses tonal fields and varied page pacing; it must not become a rigid comic-panel grid.
- **Moonzine:** Moonhalftone uses monochrome screentone and ink; it must not become torn-paper editorial collage.
- **Moonpunk:** Moonhalftone avoids persistent hard-offset slabs and explosive impact marks as its primary layout grammar.

## Placement and behavior

Reserve dots, hatching, and ink texture for shell margins, noninteractive hero backdrops, or optional previews. Keep form surfaces, dense table values, status messages, and text over imagery on clean, tested surfaces. Texture must not cross focus outlines or reduce text contrast. Provide a plain semantic fallback when decoration is disabled, assets fail, or reduced motion is requested; no essential information may depend on animation or texture.

Any raster screentone should be justified against a CSS or vector alternative, lazy-loaded when appropriate, and reviewed for size and contrast. Any SVG must use the repository's safe static subset. Do not embed reference imagery, consumer-specific characters, lyrics, or unlicensed type assets.

## Evidence still required

This brief is a written direction only. Motif/pattern/illustration production, component recipes, art-off behavior, responsive Light/Dark captures, grayscale and forced-colors checks, performance review, and human comparison remain separate tasks. No visual approval, rights clearance, or production token decision is implied.
