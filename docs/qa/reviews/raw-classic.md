# Moonraw / Classic — structural comparison

Status: delegated structural comparison recorded from current captures; human countersign pending. No final human approval, rights clearance, or visual parity pass is claimed.

## Evidence

Ten same-content `/lab` captures at 1440×960 and 360×800, Chromium 156.0.8078.4, UTC fixture time 2026-10-25 12:00. Render source commit `f4d8fca4e34fc80689a62b7f2d17f79b0582a5b9`, source fingerprint `a77ff3a0a6faacd5a492e28acafd9421e2382b03c1b0bb2170be236056a493be`; every sidecar reports matching hashes, loaded fonts, and the frozen fixture state. Committed capture artifacts are tracked under `artifacts/skins/`.

| Skin | Light default / SHA-256 | Dark default / SHA-256 |
|---|---|---|
| Moonraw | [PNG](../../../artifacts/skins/moonraw-light-1440x960-default.png) · `46fda26213e232b63046b3dbafb1b3609fdd5265bc15580c572b1e33116d3e53` | [PNG](../../../artifacts/skins/moonraw-dark-1440x960-default.png) · `6b6d5a8a867b25a8c2e946d9d56e10b0b7a4c2e94a9f16a19a952b6dacaa7034` |
| Classic | [PNG](../../../artifacts/skins/classic-light-1440x960-default.png) · `c7f52b7eae10aaca7cfb77ac2d4383d1496b264e2cad948472c49753ac2a5f11` | [PNG](../../../artifacts/skins/classic-dark-1440x960-default.png) · `8e94a6c58968e1b2bd208b2bc13ba07d1cd530107bc51e5408c21d2709c8310d` |

| Moonraw state | Light / SHA-256 | Dark / SHA-256 |
|---|---|---|
| Grayscale | `ca97a81f3fd1e36f408c36226cf4f3cb560e90889515f0a7288ca4acee299a33` | `fe93d3f895771dcd37c1da2532dc6b6bcd787e10aa206650c20d8b5da9217447` |
| Decoration off | `914412fd32aaf88be6e5d983593df4ef76d5267055e454ea93523e40dd33a93e` | `f5c5611673b914f1fd40f88c95cdb771edeb7dcfdcd7e78b13de8e34a194963a` |
| 360×800 default | `623630e10925d04263165a5d2635e35136a7da8db7692932257620e3addcb6aa` | `180b43422352f0f0097cb596a1a7ba2796b65d0aab458abb0deeaceb2303594d` |

## Observed composition differences

| Skin | Signals visible in both modes | Source-defined treatment |
|---|---|---|
| Moonraw | Exposed, wide composition with a horizontal nav band, plain rectangles and almost no decorative surface treatment. Monospace type and underlined labels put content first. Icon cells use square double rules. | Single-column shell, Courier New display, zero radius, no shadows, thin and heavy rules, no-gap grid, underlined nav/table headings, squared controls and hard dialog offsets. |
| Classic | Familiar side navigation, rounded cards and controls, softly elevated hero with a subtle gradient, and a balanced dashboard grid. | Base component geometry and typography, rounded control/card recipes, light elevation and the Classic hero gradient. |

The difference is visible in light and dark and survives grayscale: Moonraw reads as a flat ruled structure with a top navigation band, while Classic keeps a left rail, rounded containers, and soft elevation. Decoration-off removes the demo swatches, project symbols, and Moonraw icon-cell rules without removing headings, navigation, form values, or actions. At 360×800 Moonraw stacks content in reading order; long tables remain horizontally scrollable rather than clipped. Source: `src/styles.css`; catalog: `src/skins.js`.

## Review disposition

- Direct inspection: four default, two grayscale, two decoration-off, and two mobile Moonraw captures, plus four Classic counterparts.
- Reviewer: Qoder, owner-delegated agent reviewer (2026-10-31). This is not a human reviewer; human countersign remains pending.
- Verdict: **distinct** for composition, grayscale hierarchy, decoration-off behavior, and responsive order.
- Observed limits: static captures do not certify contrast, focus visibility, or hit-target sizing; the 360×800 project table relies on horizontal scrolling; the embedded dashboard fixture keeps its own container styling across skins.
- Automated corroboration: `pnpm run test:browser` 85/85 passed; `pnpm run audit:pairs` exit 0 with 30 desktop + 30 tablet + 30 phone current-source captures.
- Human reviewer/approval: **pending**.
- Rollback: restore the prior evidence block and remove this delegated disposition.
