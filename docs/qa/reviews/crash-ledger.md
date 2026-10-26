# Mooncrash / Moonledger — structural comparison

Status: candidate distinctions recorded from local captures; human visual review pending. No approval or visual parity pass is claimed.

## Evidence

Four screenshots share the `/lab` default fixture, fixed Northstar dashboard, 1440×960 viewport, Chromium 156.0.8078.4, frozen UTC time 2026-10-25 12:00, source commit `a2baccb89d904d628187899396b74c26fa8e2c3b`, and fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`. Font status is loaded; hashes match provenance sidecars. Images are local ignored captures, not committed assets.

| Skin | Light capture / SHA-256 | Dark capture / SHA-256 |
|---|---|---|
| Mooncrash | [PNG](../../../artifacts/skins/mooncrash-light-1440x960-default.png) · `ce72500abfca85fb2cf65b6f69b6fc24c72d99e1a7545fc8761c283f76c2d816` | [PNG](../../../artifacts/skins/mooncrash-dark-1440x960-default.png) · `73c566321b54742c8d18362f4f12da661c8ba669d82b358b3947319bd192092e` |
| Moonledger | [PNG](../../../artifacts/skins/moonledger-light-1440x960-default.png) · `5caa3da7051174e2b4eb3d93e2e80e596e0ab6bb20f353de92c502e53d310247` | [PNG](../../../artifacts/skins/moonledger-dark-1440x960-default.png) · `f3ec36136d2de53aaecae3f6a7d477d1ebff98be20a317eb798a9ee3530ff7e5` |

## Observed composition differences

| Skin | Signals visible in both modes | Source-defined treatment |
|---|---|---|
| Mooncrash | Equipment-plate framing: thick top band, double sidebar rail, numbered nav zones, inset borders and hard-separated panels. | 14rem rail, 8px top accent, double border, inset mechanical plate shadow, numbered navigation. |
| Moonledger | Compact workbench with aligned dense records; header bands and alternating rows emphasize scanning data while using restrained flat surfaces. | Compact typography and spacing, aligned table columns, alternating record surfaces and low-elevation chrome. |

Mooncrash reads as a mechanically segmented hazard/equipment plate, while Moonledger keeps the same information in a more compact, aligned office workbench. The hierarchy persists in dark mode; palette changes do not remove numbered plate framing or dense record alignment. This is only the captured default fixture. Source: `src/styles.css`; catalog labels: `src/skins.js`.

## Review disposition

- Direct inspection: four light/dark screenshots.
- Provenance/hash audit: 4/4 hashes match; same source, fingerprint, fixture, viewport and browser; fonts loaded.
- Browser suite at source: `pnpm run test:browser` — 61/61 passed (recorded under MF-VF-278), functional/capture evidence only.
- Human reviewer/approval: **pending**.
- Rollback: revert the MF-VF-283 evidence/count documentation commit.
