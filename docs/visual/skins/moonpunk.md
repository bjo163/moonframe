# Moonpunk — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-072 · **Scope:** visual direction only; no production token, logo, or asset approval.

## Direction

Moonpunk uses an asymmetric, block-built composition with framed zones and a strong offset utility rail. Its silhouette comes from thick ink outlines, square or clipped corners, and hard offset shadows. Ink-dark planes, exposed borders, and controlled grain create the surface; decoration stays optional and must not compromise legibility. A condensed, expressive display role pairs with neutral readable body text and monospaced telemetry where useful. Navigation uses clear slab-like active regions, while tables, forms, and dialogs retain stable behavior and accessible focus treatment.

The existing Moonpunk acid-lime default remains its identifying accent. Color supports the direction but does not establish it: the composition, geometry, type hierarchy, surface construction, navigation/data arrangement, and component recipes must still read distinctly in grayscale. No Moonwitness wordmark, crown, character, story text, or reference-derived artwork is part of this skin brief.

## Distinction from neighboring skins

- **Moonriot:** Moonpunk favors persistent block and offset-slab construction. Moonriot uses angular, directional editorial disruption. Do not make Moonpunk a palette-swapped riot layout.
- **Moonsmash:** Moonpunk maintains a repeatable framed shell and utility rail. Moonsmash concentrates energy around an explosive focal point and radial impact. Do not let Moonpunk's whole layout become a poster burst.
- **Moonzine:** Moonpunk's zones are assertive slabs and utility surfaces. Moonzine's identity comes from editorial collage and paper-cut rhythm; do not substitute a collage masthead for Moonpunk's shell grammar.

## Implementation and review constraints

Keep component names, DOM semantics, keyboard behavior, form meaning, and ARIA contracts unchanged across skins. Preserve visible focus independently from rough decorative borders. Keep textures and illustration outside essential content, provide an art-off fallback, and honor reduced motion. Use existing canonical skin grammar and specifications for implementation; this brief does not create or approve token values, fonts, consumer branding, or asset rights.

Before claiming visual distinction, compare the same content in light and dark modes, grayscale, and decoration-off at fixed viewports. Pair status remains `not-reviewed` until a human inspects the rendered evidence.
