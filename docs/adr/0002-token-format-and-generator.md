# ADR-0002 — Bounded DTCG token source; generator candidate decision

**Date:** 2026-10-25. **Status:** `proposed` / **fixture proof passes; maintainer review and exact runtime pin pending**. This is an architectural recommendation, **not** a production generator selection or a claim of DTCG-2025.10 conformance.

## Context and evidence

The repository has 78 example semantic IDs but no approved token values. DTCG 2025.10 is a Final **Community Group** report (not a W3C Recommendation): [Format](https://www.designtokens.org/tr/2025.10/format/), [Color](https://www.designtokens.org/tr/2025.10/color/), [Resolver](https://www.designtokens.org/tr/2025.10/resolver/). The format requires JSON Pointer reference support from conforming tools; this proposal intentionally excludes that feature, so it is a **Moonframe-specific DTCG-inspired subset** and must not be called DTCG-conformant. [Style Dictionary](https://styledictionary.com/info/dtcg/) reports that 2025.10 is not fully supported in v5.

## Proposed decision and bounded subset

1. Adopt a **DTCG-2025.10-inspired bounded source JSON** for *future* authored primitives and roles with `$type`, `$value`, `$description`, optional `$deprecated`, optional `$extensions.moonframe`, and whole-token `{path.to.token}` aliases. The fixture proof currently supports `color` (sRGB object with 3 components and optional alpha), `dimension` (`px|rem`), `duration` (non-negative `ms`), and finite `number`. `fontFamily`, `fontWeight`, `cubicBezier`, and `shadow` remain unsupported pending fixtures. Tokens require an explicit `$type`; group-level type inheritance is not implemented. Reject unsupported constructs rather than silently transform them.
2. Do **not** accept `$extends`, JSON Pointer `$ref`, resolver module modifiers, arbitrary gradients, custom CSS code strings or OKLCH source values in the subset. JSON Pointer and some of these features are part of upstream 2025.10; excluding them makes this a subset, not a conforming implementation. Do not invent extra `$*` keys; Moonframe metadata belongs inside `$extensions.moonframe`.
3. Keep **only one manually-edited future source tree**, as specified by [source plan](../../contracts/moonframe-token-source-plan-v0.1.json), with shared reference/role defaults and sparse per-skin/per-mode patches. Overlays are a **Moonframe pipeline feature**, not a claim that the DTCG specification defines Moonframe inheritance. Validate the completely merged 30 maps before generation.
4. Publish build outputs (resolved maps, CSS custom props, Tailwind bridge, TS token IDs and Skin Lab data) strictly as generated artifacts, never sources of truth. No generation or production files in this phase.

## Alternatives considered

- **Full DTCG 2025.10/Resolver/Color support now:** broader interoperability but unverified tool support and unnecessary complexity; defer.
- **Style Dictionary v5 as mandatory now:** supports output customization but known 2025.10 gaps; fixture comparison first.
- **Custom tiny generator:** initially more transparent for limited outputs but must own parsing, alias/type/color handling, and future compatibility; the fixture resolver demonstrates only the bounded subset, not a production implementation.
- **30 unrelated CSS files manually edited:** rejected due to duplication/drift and impossible cross-map completeness.

## Trade-offs, confidence, revisit conditions

The [fixture proof v0.1.0](../../scripts/token-subset-proof.mjs) has no third-party package dependency and is run with Node **22.23.4** via `actions/setup-node`; the exact Node release was published 2026-10-21 ([official release](https://nodejs.org/en/blog/release/v22.23.4)). The proof exercises four types, whole-token aliases, cycle/missing/type failures, required role and mode coverage, byte-deterministic CSS, a runtime `[data-mode]` property bridge, and a static Tailwind v4 `@theme inline` alias. Tailwind was not installed or compiled. This fixture lock establishes reproducible proof compatibility only, not production consumer support. Style Dictionary is not selected because its own documentation reports incomplete 2025.10 support.

Confidence: **high** that the bounded fixture algorithm is implementable; **medium/low** on long-term type support, production output and tool choice. Revisit if a pinned tool fully supports the needed format subset, if browser compatibility needs broader output fallback, if a chosen Moon app requires SSR splitting, or if complex tokens become valuable.

**Approval gate:** owner/reviewer accepts the nonconformant DTCG-inspired boundary and runtime pin; extend fixture for the exact production token dictionary and overlay coverage; demonstrate CSS + TS producer, source lineage, non-duplicate references, all 30 role coverage checks, Tailwind compilation and consumer smoke. Preserve negative fixtures and keep 30 production maps pending until values and contrast are reviewed. Leave status `proposed` until reviewed.
