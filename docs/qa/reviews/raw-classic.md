# Moonraw / Classic — structural comparison

Status: candidate distinction documented from local captures; human visual review pending. No approval or visual parity pass is claimed.

## Evidence

Four same-content `/lab` default screenshots, 1440×960, Chromium 156.0.8078.4, UTC fixture time 2026-10-25 12:00. Render source commit `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`; sidecars show loaded fonts and matching hashes. PNGs are local ignored captures, not committed artifacts.

| Skin | Light capture / SHA-256 | Dark capture / SHA-256 |
|---|---|---|
| Moonraw | [PNG](../../../artifacts/skins/moonraw-light-1440x960-default.png) · `7999bfc9966326485ec155413615c0e305e9f107653e2b7b41bc9235475987da` | [PNG](../../../artifacts/skins/moonraw-dark-1440x960-default.png) · `f1923b5da2cfc271d8b09e7b45667140307b960e936eefc8ebfdef02cbe5ca17` |
| Classic | [PNG](../../../artifacts/skins/classic-light-1440x960-default.png) · `581b07281f49b5061867f520b1fe3b17f0a1f16ae47f76b1bf565b04b7b6979a` | [PNG](../../../artifacts/skins/classic-dark-1440x960-default.png) · `c4812192b1664dd5844ca6ed2c14f897f2778dda689b00ffc57f1c29d647503e` |

## Observed composition differences

| Skin | Signals visible in both modes | Source-defined treatment |
|---|---|---|
| Moonraw | Exposed, wide composition with a horizontal nav band, plain rectangles and almost no decorative surface treatment. Monospace type and underlined labels put content first. | Single-column shell, Courier New display, zero radius, no shadows, thin rules, no-gap grid and underlined nav/table headings. |
| Classic | Familiar side navigation, rounded cards and controls, softly elevated hero with a subtle gradient, and a balanced dashboard grid. | Base component geometry and typography, rounded control/card recipes, light elevation and the Classic hero gradient. |

The difference is visible in light and dark: Moonraw preserves a flat, unadorned structure, while Classic keeps rounded controls and soft elevation. This comparison is limited to the same default fixture. Source: `src/styles.css`; catalog: `src/skins.js`.

## Review disposition

- Direct inspection: four light/dark captures.
- Provenance/hash audit: 4/4 hashes match; same source, fingerprint, fixture, viewport and browser; fonts loaded.
- Browser suite at source: `pnpm run test:browser` — 61/61 passed (recorded under MF-VF-278); functional/capture evidence only.
- Human reviewer/approval: **pending**.
- Rollback: revert the MF-VF-284 evidence/count documentation commit.
