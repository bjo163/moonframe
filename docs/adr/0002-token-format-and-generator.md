# ADR-0002 — Bounded DTCG token source; generator candidate decision

**Date:** 2026-10-25. **Status:** `proposed` / **pending MF-013 tool fixture**. This is an architectural recommendation, **not** a selected installed generator or a claim of fully DTCG-2025.10-conformant output.

## Context and evidence

The repository has 78 example semantic IDs but no approved token values. DTCG 2025.10 is a Final **Community Group** report (not a W3C Recommendation): [Format](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/), [Color](https://www.w3.org/community/reports/design-tokens/CG-FINAL-color-20251028/), [Resolver](https://www.w3.org/community/reports/design-tokens/CG-FINAL-resolver-20251028/). [Style Dictionary](https://styledictionary.com/info/dtcg/) confirms v5 does **not** fully support 2025.10 yet.

## Proposed decision and bounded subset

1. Adopt a **DTCG-2025.10-inspired bounded source JSON** for *future* authored primitives and roles with `$type`, `$value`, `$description`, `$deprecated` (optional), `$extensions.moonframe` metadata (optional) and entire-token `{path.to.token}` aliases. Proposed initial types: `color` (object `{colorSpace:'srgb',components:[r,g,b],alpha?}`), `dimension` (`{value,unit:'px'|'rem'}`), `duration` (`{value,unit:'ms'}`), `number`, `fontFamily`, `fontWeight`, `cubicBezier`. Exact supported type set is **pending generator proof**. Reject unsupported constructs at the Moonframe subset boundary rather than silently transform them.
2. Do **not** initially require `$extends`, property-level `$ref`, resolver module theme modifiers, arbitrary gradients, custom CSS code strings or OKLCH source values. These exist upstream but generator support and output quality are not proved. Do not invent extra `$*` keys not sanctioned by format; Moonframe metadata inside `$extensions.moonframe`.
3. Keep **only one manually-edited future source tree**, as specified by [source plan](../../contracts/moonframe-token-source-plan-v0.1.json), with shared reference/role defaults and sparse per-skin/per-mode patches. Overlays are a **Moonframe pipeline feature**, not a claim that the DTCG specification defines Moonframe inheritance. Validate the completely merged 30 maps before generation.
4. Publish build outputs (resolved maps, CSS custom props, Tailwind bridge, TS token IDs and Skin Lab data) strictly as generated artifacts, never sources of truth. No generation or production files in this phase.

## Alternatives considered

- **Full DTCG 2025.10/Resolver/Color support now:** broader interoperability but unverified tool support and unnecessary complexity; defer.
- **Style Dictionary v5 as mandatory now:** supports output customization but known 2025.10 gaps; fixture comparison first.
- **Custom tiny generator:** initially more transparent for limited outputs but must own maintenance and spec interpretation; viable fixture alternative.
- **30 unrelated CSS files manually edited:** rejected due to duplication/drift and impossible cross-map completeness.

## Trade-offs, confidence, revisit conditions

Confidence: **high** on bounded-source value, **medium/low** on exact type support, CSS format and tool choice until the MF-013 fixture. Revisit if DTCG Color/Resolver becomes fully supported in a pinned tool, if browser compatibility needs broader output fallback, if a chosen Moon app requires SSR splitting, or if complex tokens become valuable.

**Approval gate:** demonstrate valid/invalid alias/type/color/dimension fixtures, deterministic identical outputs, CSS + TS producer, source-map/lineage report, non-duplicate token references, all 30 role coverage checks and no false compliance statement; record processor versions/command/consumer evidence. Leave status `proposed` until reviewed.
