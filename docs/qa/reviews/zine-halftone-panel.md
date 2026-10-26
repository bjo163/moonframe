# Moonzine / Moonhalftone / Moonpanel — structural comparison

Status: candidate distinctions documented from local captures; human review pending. No owner approval or visual parity pass is claimed.

## Evidence

Six same-fixture `/lab` default captures at 1440×960, Chromium 156.0.8078.4, UTC fixture time 2026-10-25 12:00, from render source commit `a2baccb89d904d628187899396b74c26fa8e2c3b` and fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`. Every sidecar records loaded fonts; PNG SHA-256 values below match the files. Captures are local ignored artifacts, not committed image assets.

| Skin | Light capture / SHA-256 | Dark capture / SHA-256 |
|---|---|---|
| Moonzine | [PNG](../../../artifacts/skins/moonzine-light-1440x960-default.png) · `ebbc1ca674ad5ea7773b62222547a55a26399d4da3379b0aeed52685f56f6a7c` | [PNG](../../../artifacts/skins/moonzine-dark-1440x960-default.png) · `3013aa05f2a1753e2c7a255a5dc65388e75cb101a44d9ed73ca12b0445dcea13` |
| Moonhalftone | [PNG](../../../artifacts/skins/moonhalftone-light-1440x960-default.png) · `ee0d14c624ea1362121c66dfbf4de67f6551cc38241b7d7d9f5cd43786007992` | [PNG](../../../artifacts/skins/moonhalftone-dark-1440x960-default.png) · `ff232e9101af346aed5c7ebaa701ce0830d6965210b760a0a90509a315f11950` |
| Moonpanel | [PNG](../../../artifacts/skins/moonpanel-light-1440x960-default.png) · `76cbb0e2e1116f989b266ddf424c60022e3d578b12916af54c344bce72ca6c08` | [PNG](../../../artifacts/skins/moonpanel-dark-1440x960-default.png) · `61e25235ced93384e6e9d95d3003a8bc8703604ef58a6318be38bbd173f7f1ce` |

## Observed composition differences

| Skin | Signals visible in both modes | Source-defined treatment |
|---|---|---|
| Moonzine | Narrow side rail and a restrained magazine spread; the hero reads as a typographic masthead with layered print-like rules and serif table/nav text. | Georgia display, double hero rules, paper-layer shadows, dashed editorial separators, 13rem sidebar. |
| Moonhalftone | Horizontal edition/navigation band above a centered column; screened dot gutters remain visible around stark black-and-white frames, with titles reversed in ink caption bars. | Monochrome surfaces, radial-dot shell background, 7px offset frame shadows, high-contrast caption labels, Impact display. |
| Moonpanel | Persistent left rail and a broad, regular rectangular grid; table columns and card captions are explicitly boxed, without the halftone field or magazine layering. | Blue-gray panel palette, crisp rectangular borders and caption bars, divided table cells, conventional sans display. |

The captured distinctions persist in dark mode; color changes while navigation placement, screened field, serif editorial treatment, and rectangular grid remain. This is a structural comparison of the default fixture, not a claim about every viewport or state. Styling source: `src/styles.css`; catalog descriptions: `src/skins.js`.

## Review disposition

- Direct visual inspection: six light/dark captures.
- Provenance/hash audit: 6/6 PNG hashes match; same source commit/fingerprint, fixture, viewport, browser and loaded-font status.
- Browser suite at the capture source: `pnpm run test:browser` — 61/61 passed (recorded under MF-VF-278); functional and capture evidence only.
- Human reviewer/approval: **pending**. No visual approval is inferred.
- Rollback: revert the MF-VF-280 evidence/count documentation commit.
