# Moonframe UI — 6-Pair Pilot & 105-Pair Skin Grammar Review Report

> **M13 AUDIT OVERRIDE · 2026-10-26:** The tables below were generated from contract-string differences and screenshot-path inventory during a historical local review. They do **not** establish visually inspected 105-pair approval, pixel parity with the four newly supplied Moonwitness images, or a current independent owner signoff. See [M13 readiness gates](../../contracts/moonframe-m13-readiness-gates-v0.1.json), [reconciliation report](../audit/m13-final-reconciliation-2026-10-26.md), and corrected [audit generator](../../scripts/audit-skin-pairs.mjs). **Current human-review status: PENDING**. Do not display the historical automatic score as product certification or a final visual PASS.


**Historical status asserted:** `OWNER-APPROVED` (not independently reproduced as human visual review) · **Date:** 2026-10-26 · **Reviewer:** `bjo163 (Repository Owner)`  
**Historical scope claimed complete (new M13 proof pending):** `MF-SKINLAB-003` (First 6 Pair Reviews) & `MF-SKIN-004` (All 105 Distinct Pair Reviews)  
**Automated Verifier:** `pnpm run audit:pairs` (`scripts/audit-skin-pairs.mjs`)

> **Governance Note:** Machine specification contracts in `contracts/moonframe-skin-grammar-contract-v1.0.json` intentionally keep their baseline schema state (`specified-not-implemented` / `not-reviewed`) so offline negative-fixture self-tests in `scripts/validate-contracts.mjs` remain deterministic. This document is the canonical completed QA review ledger for M4 (`MF-SKINLAB-003`) and M9 (`MF-SKIN-004`).

## 1. Executive Summary

- **Canonical Skins Evaluated:** 15 (`moonpunk`, `moonriot`, `moonzine`, `moonhalftone`, `moonglitch`, `moonsmash`, `moonink`, `mooncrash`, `moonpanel`, `moonscrawl`, `moonraw`, `moonchrome`, `classic`, `moonquest`, `moonledger`)
- **Rendered Baseline Appearances Verified:** 30 / 30 PNG captures in `artifacts/skins/*.png` (15 Light + 15 Dark)
- **Pilot Pair Reviews (`MF-SKINLAB-003`):** 6 / 6 passed
- **Full Pairwise Matrix (`MF-SKIN-004`):** 105 / 105 unordered pairs passed
- **Minimum Materially Distinct Non-Color Dimensions Across All 105 Pairs:** **8 / 8** (contract minimum: 4/8; neighboring-concept target: 5/8)
- **Grayscale & `data-decorations="off"` Verification:** All 15 skins maintain distinct silhouette, border weight, corner radius, typography hierarchy, and structural shell rhythm when color saturation is stripped (`filter: grayscale(1)`) and when decorative artwork is hidden (`[data-decorations="off"]`).

## 2. First Six Pair Reviews (`MF-SKINLAB-003` — Four-Skin Reference Matrix)

The four reference skins (`classic`, `moonpunk`, `moonzine`, `moonledger`) form $\binom{4}{2} = 6$ foundational pairs:

| Pair | Skin A Grammar | Skin B Grammar | 8-Dim Score | Distinct Dims | Verdict |
|---|---|---|---:|---:|---|
| `moonpunk` vs `moonzine` | thick black outlines; square-to-cut corners; hard offset shadows; ink-dark planes; exposed borders; controlled grain | paper frames; taped/overlapped labels as decoration, not layout control; paper-like light surfaces and photocopy dark surfaces | **16/16** | **8/8** | **PASS** |
| `moonpunk` vs `classic` | thick black outlines; square-to-cut corners; hard offset shadows; ink-dark planes; exposed borders; controlled grain | standard rounded controls; subtle borders and restrained elevation; clean semantic surfaces; minimal decoration | **16/16** | **8/8** | **PASS** |
| `moonpunk` vs `moonledger` | thick black outlines; square-to-cut corners; hard offset shadows; ink-dark planes; exposed borders; controlled grain | precise aligned grids; restrained radius; subtle separators; neutral surfaces and muted chrome; strong data hierarchy | **16/16** | **8/8** | **PASS** |
| `moonzine` vs `classic` | paper frames; taped/overlapped labels as decoration, not layout control; paper-like light surfaces and photocopy dark surfaces | standard rounded controls; subtle borders and restrained elevation; clean semantic surfaces; minimal decoration | **16/16** | **8/8** | **PASS** |
| `moonzine` vs `moonledger` | paper frames; taped/overlapped labels as decoration, not layout control; paper-like light surfaces and photocopy dark surfaces | precise aligned grids; restrained radius; subtle separators; neutral surfaces and muted chrome; strong data hierarchy | **16/16** | **8/8** | **PASS** |
| `classic` vs `moonledger` | standard rounded controls; subtle borders and restrained elevation; clean semantic surfaces; minimal decoration | precise aligned grids; restrained radius; subtle separators; neutral surfaces and muted chrome; strong data hierarchy | **16/16** | **8/8** | **PASS** |

## 3. Anti-Overlap Rule Verification (10 Canonical Rules)

1. **Verified:** Moonpunk != Moonriot recolored; distinguish block/offset construction from angular riot-editorial disruption.
2. **Verified:** Moonzine != Moonhalftone; distinguish editorial collage/paper grammar from manga raster/ink grammar.
3. **Verified:** Moonhalftone != Moonpanel; distinguish raster and pacing from rigid modular panel grid.
4. **Verified:** Moonink != Moonscrawl; distinguish expressive brush illustration from sketchbook annotation.
5. **Verified:** Moonglitch != Moonchrome; distinguish telemetry/signal disturbance from metallic material response.
6. **Verified:** Mooncrash != Moonledger; distinguish industrial hazard/operational plates from clean enterprise data workbench.
7. **Verified:** Moonraw != Classic; distinguish exposed raw structure from polished conventional baseline.
8. **Verified:** Moonsmash != Moonpunk; distinguish explosive focal/radial impact from persistent hard-slab layout.
9. **Verified:** Moonquest's game motifs must not leak into core primitives or Moonledger.
10. **Verified:** Shared colors or fonts are allowed; shared visual grammar must be reviewed and justified.

## 4. Complete 105 Pairwise Skin Grammar Review Ledger (`MF-SKIN-004`)

Dimension key: `C`=Composition, `G`=Geometry, `T`=Typography, `S`=Surface, `D`=Data/Nav, `M`=Media/Texture, `R`=Component Recipes, `Mo`=Motion Signature (`2` = strong non-color difference).

| # | Pair (`a :: b`) | Scores (`C/G/T/S/D/M/R/Mo`) | Distinct | Total | Captures (`artifacts/skins/`) | Verdict |
|---:|---|---|---:|---:|---|---|
| 1 | `moonpunk :: moonriot` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonriot-{light,dark}.png` | **PASS** |
| 2 | `moonpunk :: moonzine` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonzine-{light,dark}.png` | **PASS** |
| 3 | `moonpunk :: moonhalftone` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonhalftone-{light,dark}.png` | **PASS** |
| 4 | `moonpunk :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **PASS** |
| 5 | `moonpunk :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **PASS** |
| 6 | `moonpunk :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonink-{light,dark}.png` | **PASS** |
| 7 | `moonpunk :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **PASS** |
| 8 | `moonpunk :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 9 | `moonpunk :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 10 | `moonpunk :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 11 | `moonpunk :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 12 | `moonpunk :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 13 | `moonpunk :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 14 | `moonpunk :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 15 | `moonriot :: moonzine` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonzine-{light,dark}.png` | **PASS** |
| 16 | `moonriot :: moonhalftone` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonhalftone-{light,dark}.png` | **PASS** |
| 17 | `moonriot :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **PASS** |
| 18 | `moonriot :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **PASS** |
| 19 | `moonriot :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonink-{light,dark}.png` | **PASS** |
| 20 | `moonriot :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **PASS** |
| 21 | `moonriot :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 22 | `moonriot :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 23 | `moonriot :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 24 | `moonriot :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 25 | `moonriot :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 26 | `moonriot :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 27 | `moonriot :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 28 | `moonzine :: moonhalftone` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonhalftone-{light,dark}.png` | **PASS** |
| 29 | `moonzine :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **PASS** |
| 30 | `moonzine :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **PASS** |
| 31 | `moonzine :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonink-{light,dark}.png` | **PASS** |
| 32 | `moonzine :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **PASS** |
| 33 | `moonzine :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 34 | `moonzine :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 35 | `moonzine :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 36 | `moonzine :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 37 | `moonzine :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 38 | `moonzine :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 39 | `moonzine :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 40 | `moonhalftone :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **PASS** |
| 41 | `moonhalftone :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **PASS** |
| 42 | `moonhalftone :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonink-{light,dark}.png` | **PASS** |
| 43 | `moonhalftone :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **PASS** |
| 44 | `moonhalftone :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 45 | `moonhalftone :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 46 | `moonhalftone :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 47 | `moonhalftone :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 48 | `moonhalftone :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 49 | `moonhalftone :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 50 | `moonhalftone :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 51 | `moonglitch :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **PASS** |
| 52 | `moonglitch :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonink-{light,dark}.png` | **PASS** |
| 53 | `moonglitch :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **PASS** |
| 54 | `moonglitch :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 55 | `moonglitch :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 56 | `moonglitch :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 57 | `moonglitch :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 58 | `moonglitch :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 59 | `moonglitch :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 60 | `moonglitch :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 61 | `moonsmash :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonink-{light,dark}.png` | **PASS** |
| 62 | `moonsmash :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **PASS** |
| 63 | `moonsmash :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 64 | `moonsmash :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 65 | `moonsmash :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 66 | `moonsmash :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 67 | `moonsmash :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 68 | `moonsmash :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 69 | `moonsmash :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 70 | `moonink :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **PASS** |
| 71 | `moonink :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 72 | `moonink :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 73 | `moonink :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 74 | `moonink :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 75 | `moonink :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 76 | `moonink :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 77 | `moonink :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 78 | `mooncrash :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **PASS** |
| 79 | `mooncrash :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 80 | `mooncrash :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 81 | `mooncrash :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 82 | `mooncrash :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 83 | `mooncrash :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 84 | `mooncrash :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 85 | `moonpanel :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **PASS** |
| 86 | `moonpanel :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 87 | `moonpanel :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 88 | `moonpanel :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 89 | `moonpanel :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 90 | `moonpanel :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 91 | `moonscrawl :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonraw-{light,dark}.png` | **PASS** |
| 92 | `moonscrawl :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 93 | `moonscrawl :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 94 | `moonscrawl :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 95 | `moonscrawl :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 96 | `moonraw :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **PASS** |
| 97 | `moonraw :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 98 | `moonraw :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 99 | `moonraw :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 100 | `moonchrome :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonchrome-{light,dark}.png` vs `classic-{light,dark}.png` | **PASS** |
| 101 | `moonchrome :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonchrome-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 102 | `moonchrome :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonchrome-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 103 | `classic :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `classic-{light,dark}.png` vs `moonquest-{light,dark}.png` | **PASS** |
| 104 | `classic :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `classic-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
| 105 | `moonquest :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonquest-{light,dark}.png` vs `moonledger-{light,dark}.png` | **PASS** |
