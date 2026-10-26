# Moonpunk / Moonriot / Moonsmash — structural comparison

Status: **candidate distinctions documented from local captures; human review pending**. This comparison does not record owner approval or a visual parity pass.

## Evidence

All six PNGs show the same `/lab` default PropsPlayground and fixed Northstar Studio dashboard at 1440×960, captured in Chromium 156.0.8078.4 from render source commit `a2baccb89d904d628187899396b74c26fa8e2c3b` (fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`). UTC fixture time is 2026-10-25 12:00; fonts report `loaded`; each image's SHA-256 matches its provenance sidecar. Captures are local ignored artifacts and are not committed PNG assets.

| Skin | Light capture | SHA-256 | Dark capture | SHA-256 |
|---|---|---|---|---|
| Moonpunk | [light PNG](../../../artifacts/skins/moonpunk-light-1440x960-default.png) | `38addd1b1df315a65d53a654403a185ceea6ad29c2d0e473861d2ed30fb498b1` | [dark PNG](../../../artifacts/skins/moonpunk-dark-1440x960-default.png) | `7f634577b669086e7a205b1d69794c70685267d8eeb83633159a494cde4a57b4` |
| Moonriot | [light PNG](../../../artifacts/skins/moonriot-light-1440x960-default.png) | `eb4e0c80b9c0e0e61830173c16d9e8d1285807b970cd42d17098aa7194638dde` | [dark PNG](../../../artifacts/skins/moonriot-dark-1440x960-default.png) | `a23ab76eb83283cbfdb74efa5550fbf522981413a56c8ae4b01923c23ca1106f` |
| Moonsmash | [light PNG](../../../artifacts/skins/moonsmash-light-1440x960-default.png) | `54ef22ac454667e3993089eb0962f66bffc952b8af49d4d21eb220a472f62305` | [dark PNG](../../../artifacts/skins/moonsmash-dark-1440x960-default.png) | `949c353b3a131d1bf1202980213a8640541a4b015be46991ddf25d6669bcb0df` |

## Observed composition differences

| Skin | Structural signals visible in both modes | Source-defined treatment |
|---|---|---|
| Moonpunk | Narrow, persistent left command rail; main workspace begins beside it. Heavy rectangular borders and visible offset slab shadows frame the hero and cards. | 12rem sidebar grid, 3px hero/card borders, hard 5px shadow, offset selected nav item, uppercase controls; `Impact` display face. |
| Moonriot | Navigation and edition picker span a top band; content uses the full width below. Hero title is italic/editorial, panels carry asymmetric cuts and red leading rules. | Single-column shell, horizontal wrapping nav, 5px bottom accent on sidebar, asymmetric `0 1.3rem 0 0` radius, no shadow, diagonal hero field, italic uppercase heading. |
| Moonsmash | Navigation is horizontal above a centered content column. The oversized two-line hero headline dominates; rounded stat cards and a radial hero field establish a focal plane. | Single-column shell, centered 90rem main region, 3–6rem hero padding, radial gradient, 3rem stats, alternating large corner radius and rounded nav/buttons. |

These differences remain visible in dark mode; changing appearance recolors surfaces and accents without changing the rail-versus-top-navigation layouts, panel geometry, or headline scale. They are non-color composition distinctions in the captured default fixture. The CSS source is `src/styles.css` and catalog labels are in `src/skins.js`.

## Review disposition

- Structural comparison: recorded from direct inspection of the six light/dark captures.
- Screenshot provenance/hash audit: 6/6 verified; same source commit/fingerprint, fixture, viewport, browser, and loaded-font status.
- Human reviewer and final approval: **pending**. This document does not claim human approval; a human reviewer must accept/reject the distinctions to close that part of the acceptance criterion.
- Browser suite at capture source: `pnpm run test:browser` — 61/61 passed (full suite, recorded for MF-VF-278 at the same source commit). This is functional/capture evidence, not a visual approval.
- Rollback: revert the MF-VF-279 evidence/count documentation commit.
