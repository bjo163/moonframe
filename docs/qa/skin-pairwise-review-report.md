# Moonframe UI — 6-Pair Pilot & 105-Pair Skin Grammar Review Report

**Status:** `AUTOMATED CONTRACT CHECK, NOT HUMAN-APPROVED` · **Human reviewer:** `pending`
**Scope:** 6 pilot + 105 contract-string pair checks; no human screenshot signoff generated
**Automated Verifier:** `pnpm run audit:pairs` (`scripts/audit-skin-pairs.mjs`)

**Evidence boundary:** This script compares contract descriptions and CSS selector presence, counts PNG files, and does not inspect screenshot pixels, visual fidelity or named human reviews. Previous signoffs are not current visual approval.

## 1. Executive Summary

- **Canonical Skins Evaluated:** 15 (`moonpunk`, `moonriot`, `moonzine`, `moonhalftone`, `moonglitch`, `moonsmash`, `moonink`, `mooncrash`, `moonpanel`, `moonscrawl`, `moonraw`, `moonchrome`, `classic`, `moonquest`, `moonledger`)
- **Screenshot inventory:** 30/30 paths present; PNG pixels are not visually reviewed by this script
- **Current-source captures:** 30/30 screenshots have SHA-256 sidecars matching source fingerprint c21c03b6d748faa6ae8797a6fb4aa1b9eb7a1b1fed0c986334f0ad545c499db1; stale/missing provenance is not accepted
- **Tablet captures:** 30/30 real 768×1024 captures have current-source SHA-256 sidecars; human visual review is pending
- **Phone captures:** 30/30 real 360×800 captures have current-source SHA-256 sidecars; human visual review is pending
- **Pilot pair metadata:** 6/6 checked structurally; human visual review pending
- **Pair metadata:** 105/105 checked structurally; human visual review pending
- **Minimum Materially Distinct Non-Color Dimensions Across All 105 Pairs:** **8 / 8** (contract minimum: 4/8; neighboring-concept target: 5/8)
- **Grayscale and decoration-off visual comparisons:** NOT verified by this structural script; require browser screenshots and a reviewer.

## 2. First Six Pair Reviews (`MF-SKINLAB-003` — Four-Skin Reference Matrix)

The four reference skins (`classic`, `moonpunk`, `moonzine`, `moonledger`) form $\binom{4}{2} = 6$ foundational pairs:

| Pair | Skin A Grammar | Skin B Grammar | 8-Dim Score | Distinct Dims | Verdict |
|---|---|---|---:|---:|---|
| `moonpunk` vs `moonzine` | thick black outlines; square-to-cut corners; hard offset shadows; ink-dark planes; exposed borders; controlled grain | paper frames; taped/overlapped labels as decoration, not layout control; paper-like light surfaces and photocopy dark surfaces | **16/16** | **8/8** | **STRUCTURAL-PASS** |
| `moonpunk` vs `classic` | thick black outlines; square-to-cut corners; hard offset shadows; ink-dark planes; exposed borders; controlled grain | standard rounded controls; subtle borders and restrained elevation; clean semantic surfaces; minimal decoration | **16/16** | **8/8** | **STRUCTURAL-PASS** |
| `moonpunk` vs `moonledger` | thick black outlines; square-to-cut corners; hard offset shadows; ink-dark planes; exposed borders; controlled grain | precise aligned grids; restrained radius; subtle separators; neutral surfaces and muted chrome; strong data hierarchy | **16/16** | **8/8** | **STRUCTURAL-PASS** |
| `moonzine` vs `classic` | paper frames; taped/overlapped labels as decoration, not layout control; paper-like light surfaces and photocopy dark surfaces | standard rounded controls; subtle borders and restrained elevation; clean semantic surfaces; minimal decoration | **16/16** | **8/8** | **STRUCTURAL-PASS** |
| `moonzine` vs `moonledger` | paper frames; taped/overlapped labels as decoration, not layout control; paper-like light surfaces and photocopy dark surfaces | precise aligned grids; restrained radius; subtle separators; neutral surfaces and muted chrome; strong data hierarchy | **16/16** | **8/8** | **STRUCTURAL-PASS** |
| `classic` vs `moonledger` | standard rounded controls; subtle borders and restrained elevation; clean semantic surfaces; minimal decoration | precise aligned grids; restrained radius; subtle separators; neutral surfaces and muted chrome; strong data hierarchy | **16/16** | **8/8** | **STRUCTURAL-PASS** |

## 3. Anti-Overlap Rule Verification (10 Canonical Rules)

1. **Review rule:** Moonpunk != Moonriot recolored; distinguish block/offset construction from angular riot-editorial disruption.
2. **Review rule:** Moonzine != Moonhalftone; distinguish editorial collage/paper grammar from manga raster/ink grammar.
3. **Review rule:** Moonhalftone != Moonpanel; distinguish raster and pacing from rigid modular panel grid.
4. **Review rule:** Moonink != Moonscrawl; distinguish expressive brush illustration from sketchbook annotation.
5. **Review rule:** Moonglitch != Moonchrome; distinguish telemetry/signal disturbance from metallic material response.
6. **Review rule:** Mooncrash != Moonledger; distinguish industrial hazard/operational plates from clean enterprise data workbench.
7. **Review rule:** Moonraw != Classic; distinguish exposed raw structure from polished conventional baseline.
8. **Review rule:** Moonsmash != Moonpunk; distinguish explosive focal/radial impact from persistent hard-slab layout.
9. **Review rule:** Moonquest's game motifs must not leak into core primitives or Moonledger.
10. **Review rule:** Shared colors or fonts are allowed; shared visual grammar must be reviewed and justified.

## 4. Complete 105 Pairwise Skin Grammar Review Ledger (`MF-SKIN-004`)

Dimension key: `C`=Composition, `G`=Geometry, `T`=Typography, `S`=Surface, `D`=Data/Nav, `M`=Media/Texture, `R`=Component Recipes, `Mo`=Motion Signature (`2` = strong non-color difference).

| # | Pair (`a :: b`) | Scores (`C/G/T/S/D/M/R/Mo`) | Distinct | Total | Captures (`artifacts/skins/`) | Verdict |
|---:|---|---|---:|---:|---|---|
| 1 | `moonpunk :: moonriot` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonriot-{light,dark}.png` | **STRUCTURAL-PASS** |
| 2 | `moonpunk :: moonzine` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonzine-{light,dark}.png` | **STRUCTURAL-PASS** |
| 3 | `moonpunk :: moonhalftone` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonhalftone-{light,dark}.png` | **STRUCTURAL-PASS** |
| 4 | `moonpunk :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **STRUCTURAL-PASS** |
| 5 | `moonpunk :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 6 | `moonpunk :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonink-{light,dark}.png` | **STRUCTURAL-PASS** |
| 7 | `moonpunk :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 8 | `moonpunk :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 9 | `moonpunk :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 10 | `moonpunk :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 11 | `moonpunk :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 12 | `moonpunk :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 13 | `moonpunk :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 14 | `moonpunk :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpunk-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 15 | `moonriot :: moonzine` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonzine-{light,dark}.png` | **STRUCTURAL-PASS** |
| 16 | `moonriot :: moonhalftone` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonhalftone-{light,dark}.png` | **STRUCTURAL-PASS** |
| 17 | `moonriot :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **STRUCTURAL-PASS** |
| 18 | `moonriot :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 19 | `moonriot :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonink-{light,dark}.png` | **STRUCTURAL-PASS** |
| 20 | `moonriot :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 21 | `moonriot :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 22 | `moonriot :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 23 | `moonriot :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 24 | `moonriot :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 25 | `moonriot :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 26 | `moonriot :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 27 | `moonriot :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonriot-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 28 | `moonzine :: moonhalftone` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonhalftone-{light,dark}.png` | **STRUCTURAL-PASS** |
| 29 | `moonzine :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **STRUCTURAL-PASS** |
| 30 | `moonzine :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 31 | `moonzine :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonink-{light,dark}.png` | **STRUCTURAL-PASS** |
| 32 | `moonzine :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 33 | `moonzine :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 34 | `moonzine :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 35 | `moonzine :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 36 | `moonzine :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 37 | `moonzine :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 38 | `moonzine :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 39 | `moonzine :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonzine-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 40 | `moonhalftone :: moonglitch` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonglitch-{light,dark}.png` | **STRUCTURAL-PASS** |
| 41 | `moonhalftone :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 42 | `moonhalftone :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonink-{light,dark}.png` | **STRUCTURAL-PASS** |
| 43 | `moonhalftone :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 44 | `moonhalftone :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 45 | `moonhalftone :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 46 | `moonhalftone :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 47 | `moonhalftone :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 48 | `moonhalftone :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 49 | `moonhalftone :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 50 | `moonhalftone :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonhalftone-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 51 | `moonglitch :: moonsmash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonsmash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 52 | `moonglitch :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonink-{light,dark}.png` | **STRUCTURAL-PASS** |
| 53 | `moonglitch :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 54 | `moonglitch :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 55 | `moonglitch :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 56 | `moonglitch :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 57 | `moonglitch :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 58 | `moonglitch :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 59 | `moonglitch :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 60 | `moonglitch :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonglitch-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 61 | `moonsmash :: moonink` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonink-{light,dark}.png` | **STRUCTURAL-PASS** |
| 62 | `moonsmash :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 63 | `moonsmash :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 64 | `moonsmash :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 65 | `moonsmash :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 66 | `moonsmash :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 67 | `moonsmash :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 68 | `moonsmash :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 69 | `moonsmash :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonsmash-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 70 | `moonink :: mooncrash` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `mooncrash-{light,dark}.png` | **STRUCTURAL-PASS** |
| 71 | `moonink :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 72 | `moonink :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 73 | `moonink :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 74 | `moonink :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 75 | `moonink :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 76 | `moonink :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 77 | `moonink :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonink-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 78 | `mooncrash :: moonpanel` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonpanel-{light,dark}.png` | **STRUCTURAL-PASS** |
| 79 | `mooncrash :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 80 | `mooncrash :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 81 | `mooncrash :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 82 | `mooncrash :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 83 | `mooncrash :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 84 | `mooncrash :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `mooncrash-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 85 | `moonpanel :: moonscrawl` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonscrawl-{light,dark}.png` | **STRUCTURAL-PASS** |
| 86 | `moonpanel :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 87 | `moonpanel :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 88 | `moonpanel :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 89 | `moonpanel :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 90 | `moonpanel :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonpanel-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 91 | `moonscrawl :: moonraw` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonraw-{light,dark}.png` | **STRUCTURAL-PASS** |
| 92 | `moonscrawl :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 93 | `moonscrawl :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 94 | `moonscrawl :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 95 | `moonscrawl :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonscrawl-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 96 | `moonraw :: moonchrome` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `moonchrome-{light,dark}.png` | **STRUCTURAL-PASS** |
| 97 | `moonraw :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 98 | `moonraw :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 99 | `moonraw :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonraw-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 100 | `moonchrome :: classic` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonchrome-{light,dark}.png` vs `classic-{light,dark}.png` | **STRUCTURAL-PASS** |
| 101 | `moonchrome :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonchrome-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 102 | `moonchrome :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonchrome-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 103 | `classic :: moonquest` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `classic-{light,dark}.png` vs `moonquest-{light,dark}.png` | **STRUCTURAL-PASS** |
| 104 | `classic :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `classic-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
| 105 | `moonquest :: moonledger` | `2/2/2/2/2/2/2/2` | 8/8 | 16/16 | `moonquest-{light,dark}.png` vs `moonledger-{light,dark}.png` | **STRUCTURAL-PASS** |
