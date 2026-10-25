# Moonframe UI — Token Architecture & Theme Pipeline

**Status:** authoritative **design specification** (not generator or engine implementation), updated 2026-10-25. The [Master Bible](../moonframe-ui-design-system-bible-v1.3.md) owns product principles; this file explains token processing. [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) owns skin IDs, runtime preferences and fallbacks; [Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) owns 78 existing token names/types under review; [source plan](../../contracts/moonframe-token-source-plan-v0.1.json) owns future value layout, overlays and output shape. Never duplicate token values in README/skin grammar.

## 1. Token versus visual recipe versus preference

**Token:** a named, typed, indivisible design value or alias, with stable semantics. Examples `color.text.primary` and `size.control.md`. References are a separate layer from public semantic roles. **Visual recipe:** non-scalar layout and composition directions, e.g. Moonzine's editorial collage, Moonpanel's panel topology, Moonriot's diagonal shell, Moonchrome's material construction. It belongs to [skin specifications](../../contracts/moonframe-skin-specifications-v1.0.json), not an arbitrary token-value dictionary. **Preference:** user/app choice (Light/Dark/System, density, motion, contrast, direction), not a new token or skin.

| Layer | Authored owner / role | Example | Output behavior |
|---|---|---|---|
| A Reference | future DTCG source reference groups | palette colors, spacing scales, durations, font family reference | no direct component hard-coding |
| B Semantic | dictionary IDs + future semantic source values | `color.surface.canvas`, `color.focus.ring`, `type.family.body` | stable component names |
| C Skin recipes | skin specifications | `composition=multi-panel`, manga ink, material budget | component/layout recipes, not all CSS vars |
| D Appearance | source plan overlay + aliases | each `skin/light`, `skin/dark` effective map | fully resolved 30 appearance maps |
| E Independent preferences | theme contract | density, motion, contrast, dir, viewport | specific scoped overlays/media rules |
| F Component exceptions | documented optional exception owner | unique justified control focus offset | exception must not override accessibility |
| G Generated outputs | future generator only | CSS, Tailwind, TS references, coverage report | readonly, deterministic, never canonical |

**Taxonomy detail:** the old dictionary field `requiredSemanticTokenExamples` is **historically mixed**, including `space.4`, `layer.toast` and density values. Treat the 78 IDs as proposed required *names*, not all semantic color roles. Six preexisting camelCase IDs contradict stableLowerCase; preserve them as grandfathered with a deprecation/alias/migration ADR before renaming. See `tokenTypeProposals`, `tokenLayerProposals`, and `namingPolicy` in dictionary.

## 2. Future canonical sources; no 30 unrelated theme files

Current repository has **zero** approved token value files. Future source path is documented in [source plan](../../contracts/moonframe-token-source-plan-v0.1.json) and is NOT present now. A bounded DTCG-inspired source must author **reference/common**, **semantic common**, **semantic mode variants**, optional **skin common**, optional **skin-mode sparse overrides**. The generator merges in this order:

`reference definitions → semantic/common → semantic/{resolvedMode} → skins/{skinId}/common → skins/{skinId}/{resolvedMode} → resolve aliases → verify types and required IDs`.

This is **Moonframe's overlay algorithm**, not a property of DTCG itself. A nonexistent optional skin override is empty, but a missing final role is a release blocker. Changing token `$type` across overlays is forbidden; overriding a role must record lineage and justification. Inheritance avoids separately maintaining 30 independent full maps while ensuring exactly 30 **fully materialized generated outputs**. Future colors/shadows/type values require human specimens and contrast review; never infer values from aspirational skin names.

## 3. Proposed source format and naming

[ADR-0002](../adr/0002-token-format-and-generator.md) recommends a **bounded DTCG 2025.10 subset** pending MF-013 fixture. Candidate token fields `$value`, `$type`, `$description`, optional `$deprecated`, optional `$extensions.moonframe`. New keys use lowercase dotted kebab path segments; old camelCase IDs remain stable. Whole-token `{path.to.token}` aliases only initially. Detect missing target, type mismatch, cycles, duplicate same-tier IDs, unknown characters, unsupported composites and untrusted arbitrary CSS; don't claim full DTCG Color/Resolver support. CSS color type in current 2025.10 is a structured object (not blindly a raw `#hex` value); sRGB object proposed first, optional OKLCH after tested conversion/gamut fallbacks. Dimensions use explicit typed unit (proposed px/rem), timings milliseconds; no unsafe CSS expression strings.

A fixture example for **format illustration only** (values below are NOT Moonframe production values):

```json
{
  "color": {
    "example": {
      "$type": "color",
      "$description": "Fixture only",
      "$value": { "colorSpace": "srgb", "components": [0.25, 0.50, 0.75] }
    },
    "alias": {
      "$type": "color",
      "$value": "{color.example}"
    }
  }
}
```

## 4. Validation stages and contract-level guarantees

| Stage | Input / check | Fatal failure | Warning / manual |
|---|---|---|---|
| Parse/structural | valid JSON, allowed metadata, token shape/schema | invalid JSON, ID, field or unsupported type | deprecated field |
| Merge/namespace | explicit overlays and precedence | duplicate same-tier ID, incompatible type override, unknown skin/mode | unused override |
| Alias resolution | whole-token references, circular graph detection | missing target, alias cycle, incompatible typed result | deeply chained alias debt |
| Value checks | color components, units, opacity, finite numbers, time and font metadata | NaN, unsupported unit/CSS injection, unlicensed production font | gamut conversion uncertainty |
| Coverage | 78 current required IDs × 30 resolved appearances | any required missing/unresolved; illegal shadow/focus override | unused asset reference |
| Contrast | pair foreground with actual surface/state | measurable role/surface ratio below relevant release threshold | translucent gradient, texture/complex composite manual |
| Outputs | repeat runs byte-identical CSS/types/JSON + source hashes | build drift, bad CSS/import/sourcemap lineage | optional CSS bytes budget |
| Manual release | screenshots, keyboard, screen reader, language, forced-colors | failures against agreed release gate | approved tracked exception |

**Important distinction:** existing no-dependency validator covers static **planning contracts**, NOT the future value or contrast stages. A JSON Schema file alone never proves it has been executed or validates alias cycles.

## 5. Semantics and accessibility pairs

Suggested pairing matrix to be filled for 30 actual skins/modes:

| Role | Surface context | Primary gate |
|---|---|---|
| `color.text.primary/secondary/muted` | canvas, default and raised, including hover/selected | WCAG 1.4.3: normal 4.5:1, large 3:1 where applicable |
| `color.action.primary.foreground` | primary action fill default/hover/active/disabled | readable enabled labels; don't use color alone |
| `color.focus.ring` | every interactive backdrop/composite | focus visible AA; measurable non-text focus affordance 3:1 where applicable |
| `color.border.*` & field/error state | adjacent meaningful surface | WCAG 1.4.11, 3:1 **where required for perceiving component/state** |
| `color.status.*` & chart series | background/pattern + legend/text | status textual/icon distinctions, chart and non-text contrast where applicable |
| Scrim, popover, toast | composited destination surface | check actual alpha blending; manual for photos/gradients/translucency |

Thresholds are **role/context-sensitive**, not "all pairs 4.5". WCAG 2.4.13 Focus Appearance is **AAA**, while WCAG 2.4.7 is AA. Forced-colors should use system palette affordances, preserve focus/selection and omit distracting decoration; avoid `forced-color-adjust:none` except an evidence-backed narrow case. Contrast ratios are not a WCAG conformance certificate. Refer to [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [QA plan](../qa/token-theme-validation-plan.md).

## 6. Theme runtime resolver specification

[Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) is authoritative for enums, defaults and fallback. Conceptual pseudocode—**not executable ThemeProvider**:

```text
for each preference field:
    raw = controlledProps[field] if explicitly controlled
          else savedPrefs[field] if present
          else OS value where a "system" or OS-source mode is applicable
          else defaultPrefs[field]
          else safeFallback[field]
    validated = validateField(raw) or safeFallback[field]
modePreference = validated user's "light" | "dark" | "system"
resolvedMode = modePreference === "system" ? (OS.dark ? "dark" : "light") : modePreference
resolvedMotion = motionPreference === "system" ? (OS.reduce ? "reduced" : "full") : motionPreference
effective = {skinId, resolvedMode, density, resolvedMotion, contrast, direction}
check CSS map complete(effective.skinId, effective.resolvedMode)
commit root data-skin, data-mode, data-density, data-motion, data-contrast, dir consistently
on OS change: recompute only system-derived axes; never overwrite saved explicit preference
```

One nuance: for preferences set to `system`, the OS resolves an *effective* value; it does **not** sit as an unconditional source overwriting app/user choices. A controlled prop must be distinct from `defaultPreferences`. For skin/density with no meaningful OS source: controlled > saved > app default > fallback. For unavailable storage: in-memory safe state. If CSS map is missing at build: hard error; at runtime: preserve last valid map or packaged complete Classic fallback, never partially mix invalid role values.

**Root and cascade:** `data-skin="moonpunk"`, `data-mode="dark"`, `data-density="comfortable"`, `data-motion="reduced"`, `data-contrast="high"`, `dir="rtl"`. `data-mode` contains resolved `light|dark`, NEVER `system`. `dir` is determined by app locale/explicit user preference, not OS color scheme. CSS order: base semantic → skin/mode value maps → density/motion/contrast preference overlays → UA forced-colors safety; approved component exceptions must preserve a11y. Layout media queries/container queries and RTL logical properties are **not** extra skins.

**SSR/persistence remains OPEN:** repo has no renderer. Compare server-provided cookie preferences versus client storage with CSP-reviewed prepaint script versus no storage. Do not assume Next.js, localStorage or cookie. For no-JS render accessible Classic fallback; use `prefers-color-scheme` CSS where feasible for initial mode. OS changes update only `system` choices; explicit dark stays dark. Cross-tab sync is optional adapter behavior, not mandatory core telemetry.

## 7. CSS and Tailwind v4 output contracts (proposal, NOT generated now)

Candidate **consolidated small semantic CSS** avoids mandatory async skin CSS on switching; heavy media texture assets lazy, only after asset approval. Compare against split per skin/mode in representative consumer with first paint, CSS bytes and caching. Do not hardwire provider or runtime framework. Code below is illustrative wiring, NOT approved production values:

```css
/* Example only — source from approved generator later */
[data-skin="classic"][data-mode="light"] {
  --mf-color-surface-canvas: /* generated resolved color */;
}
@theme inline {
  --color-mf-canvas: var(--mf-color-surface-canvas);
}
@custom-variant dark (&:where([data-mode=dark], [data-mode=dark] *));
```

CSS example placeholder comments are intentionally **not usable CSS declarations**. Generator exports a header with source hashes, sorted static selectors, coverage report, **separate check versus write mode**, TypeScript IDs and Skin Lab effective maps. No dynamic class concatenation like `bg-${skinId}`; Tailwind must see static utility names. User custom overrides go into their own controlled CSS layer/semantic API, never generated output. App CSS reset/preflight ownership and `@theme inline` behavior must be verified with actual Tailwind compilation.

## 8. Type, layering, security, versioning and release

- Token groups: color refs/semantics (including action status and focus), typography with licensed fallback, spacing/sizing/touch targets, geometry/material/elevation, motion, z-order, density, rare component exception IDs and manifest-only artwork. Chart status needs shape/text alternatives.
- Density can vary padding/control dimensions but not accessible target-size rules or screen-reader semantics. Moonledger defaults to compact only, not globally enforced.
- Motion recipe is a skin personality; reduced motion removes/replaces effects without losing status. Moonglitch flashing must be prohibited, not only muted by user preference.
- Z-index roles define ordering: sticky < dropdown < popover < dialog < toast/tooltip (resolve overlapping tooltip behavior in fixture); named stacking roles aren't guarantees across CSS stacking contexts/portals.
- Decorative material opacity/intensity are scalar tokens; SVG/PNG/illustration filenames and provenance live in [asset manifest](../../contracts/moonframe-asset-manifest-v0.1.json). Asset failure omits decoration and keeps layout.
- No injection of arbitrary CSS selectors, `url()`, untrusted token text or SVG. The UI package must not phone home. Browser support/cascade/FOUC need real tests.
- Distinguish dictionary/schema format version, token set value version, theme manifest contract version, per-skin recipe revisions, generator version and package semver. No package has shipped. Renaming type/ID/root attribute or changing semantic meaning is breaking; additive approved roles need compatibility discussion. Existing 78 ID names are preserved.

## 9. Proof/exit criteria

[Audit](../audit/token-theme-engine-audit.md) → [research](../research/token-theme-engine-research.md) → [ADR format](../adr/0002-token-format-and-generator.md) / [ADR runtime](../adr/0003-theme-runtime-and-css-output.md) → [schema + lightweight contract checks](../../schemas/moonframe-token-subset.schema.json) → [QA plan](../qa/token-theme-validation-plan.md) → [atomic backlog](../backlog/token-theme-atomic-issues.md). Critical requirement: a separate future *production* gate must reject all 30 current pending maps until values and screenshots exist.
