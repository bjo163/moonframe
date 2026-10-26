# Moonglitch — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-120 · **Scope:** visual direction only; no token, logo, or asset approval.

## Direction

Moonglitch is a compact telemetry and diagnostics interface. Compose the shell from a narrow diagnostic rail, a telemetry header, and a log-centered work area with segmented console bands. Use thin technical rules, signal bars, and occasional controlled displacement to distinguish zones. Keep surfaces opaque and quiet beneath dense data. Monospaced labels and tabular metrics support scanning; a readable system sans-serif remains the body-text fallback. Treat density as compact by default, while allowing long labels and narrow screens to wrap without clipping.

Give navigation a command-oriented structure with explicit selected and system-state indicators. Buttons may use an instrument-key shape and fixed-state indicator; cards may group content with status bars; dialogs should read as calm system alerts. These are styling metaphors only: live labels, status text, focus rings, and component behavior continue to carry meaning. The interface must remain legible without scanlines, motion, color, or decorative signals.

## Distinction from neighboring skins

- **Moonchrome:** Moonglitch uses matte diagnostic bands, signal rules, and log organization. It must not use Moonchrome's reflective, polished material or metallic highlights as its primary identity.
- **Moonpunk:** Moonglitch uses a narrow rail and data-dense console zones, not Moonpunk's broad framed workspace, expressive display hierarchy, or hard offset slabs.
- **Moonhalftone:** Moonglitch relies on technical rules and telemetry grouping, not monochrome screentone fields or manga-print pacing.

Make these distinctions visible in geometry, navigation, typography, and data presentation even in grayscale and when decorative texture is disabled. Accent color can reinforce a state but cannot be the only selected, warning, or system-state cue.

## Implementation and review constraints

Keep the existing shared DOM order, component APIs, keyboard behavior, form semantics, and ARIA meanings. Preserve visible focus around rails, clipped regions, and displaced decoration. Motion must not interrupt reading or communicate essential state; honor reduced motion and provide a static equivalent. Decoration stays outside interactive hit areas and dense text, and disabling it must leave the same content, controls, grouping, and useful borders.

Use the canonical skin specification and grammar for implementation. Do not add consumer branding, unlicensed fonts, or copied reference imagery. This brief does not approve token values, asset rights, or any new runtime API.

Before claiming visual distinction, compare the same fixture in light and dark modes, grayscale, decoration-off, and responsive widths. Pair status remains `not-reviewed` until a human inspects rendered evidence.
