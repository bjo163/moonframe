# MF-VF-447 — Moonpunk accent and appearance audit

**Status:** source audit captured; rendered contrast and visual review pending.
**Scope:** `src/styles.css`, `src/skins.js`, `contracts/moonframe-theme-contract-v1.3.json`.
**Dependency:** MF-VF-293 captured (R01 reference metadata); this audit uses canonical source definitions only.

## Findings

- Moonpunk's canonical territory is “acid-lime manga punk / neo-brutalist impact”; the skin entry describes acid-lime ink slabs, offset shadows and a command rail.
- The shared stylesheet currently defines one light baseline accent (`--mf-accent: #354ab5`) and one dark override (`--mf-accent: #a8b7ff`). These are global bridge values, not Moonpunk-scoped source tokens. The inspected stylesheet contains no Moonpunk selector or acid-lime accent override.
- The theme contract requires separate light and dark semantic color maps with contrast testing, but records Moonpunk as `specified-not-implemented` and `reviewedPairwise: false`.
- Therefore the current runtime does not demonstrate the canonical acid-lime appearance or per-mode Moonpunk semantic values. This is a source-level gap, not a rendered contrast result; no colors are proposed or changed here.
- The consumer-brand overlay contract explicitly says its API is not designed/exported and its palette is not approved. This audit does not infer values for such an overlay or change the Moonpunk baseline.

## Evidence boundary

Source inspection only; no browser rendering, contrast calculation, screenshot, human review, rights review, or acceptance was performed. Host runner should run its normal checks. Follow-up work may define an implementation only within the existing frozen theme and brand contracts; any public API or canonical value approval remains a separate gate.
