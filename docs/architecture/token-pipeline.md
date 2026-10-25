# Moonframe token pipeline — specification versus production source

**Status: design only.** As of 2026-10-25, the 78 entries in [dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) are example semantic **names**, not approved CSS values. The [source plan](../../contracts/moonframe-token-source-plan-v0.1.json) contains 30 intentionally empty Light/Dark coverage slots; do not let any build treat those placeholders as usable themes.

## Layers and authority

1. Reference tokens: raw color, typography, size, radius, motion; may be skin-related but not consumed directly by business components.
2. Global semantic role tokens: background/canvas/surface, text, actions, status, borders/focus, charts, code and overlays. Stable names used by components.
3. Skin-specific *recipes*: geometry, composition, art, interaction visual treatments; stored in [skin specs](../../contracts/moonframe-skin-specifications-v1.0.json), not raw component CSS.
4. Effective mode maps: each skin requires **two fully resolved sets**; `system` is a preference resolved before render.
5. Component exceptions: allowed only where semantically justified and documented.
6. Runtime preference mapping: density, contrast, motion, direction/RTL, viewport should not multiply skin IDs.
7. Asset references: stable IDs into manifest; never embed binary payloads in token JSON.

## Proposed deterministic pipeline, not executed

`validated DTCG subset JSON → alias/role/type/coverage resolver → resolved appearance maps → generated CSS variables + Tailwind v4 bridge + TS types + Skin Lab data`.

In Tailwind v4 [`@theme`](https://tailwindcss.com/docs/theme) establishes utility-generation namespaces, whereas normal runtime custom properties hold resolved per-skin effective mode values. Generation must never mutate approved source files and must be stable under repeated runs; consumers should override documented semantic hooks without patching generated files. No final generator, type set, or resolver/color module compliance is approved. See [DTCG 2025.10 report](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/).

## Gate checklist

- [ ] Approve actual canonical value-source structure and typed schema.
- [ ] Implement invalid fixture tests: missing token, wrong type, missing skin/mode, unresolved alias, alias cycle, shadowed name, role contrast failure.
- [ ] Produce all 30 appearance maps with 78+ required names per mode (if the vocabulary stays unchanged).
- [ ] Contrast-check foreground/background pairs, state variants and overlays with textures, not colors in isolation.
- [ ] Approve every skin's typography fallback and font licensing.
- [ ] Verify repeated generator runs byte-for-byte equal; test CSS import layering and consumer override behavior.
- [ ] Produce SSR/hydration preference resolution and forced-color/reduced-motion fallbacks.

**No completion claim** should be made from the static dictionary-only validator; its scope is shape/counts/source-of-truth alignment, not generation or accessibility conformance.
