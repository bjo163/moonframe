# Moonink / Moonscrawl — structural comparison

Status: candidate distinctions recorded from local captures; human visual review pending. No owner approval or visual parity pass is claimed.

## Evidence

Four `/lab` default captures show the same fixed Northstar dashboard at 1440×960, Chromium 156.0.8078.4, frozen UTC time 2026-10-25 12:00, render source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`. All sidecars report loaded fonts and matching PNG SHA-256. These are local ignored captures, not committed assets.

| Skin | Light capture / SHA-256 | Dark capture / SHA-256 |
|---|---|---|
| Moonink | [PNG](../../../artifacts/skins/moonink-light-1440x960-default.png) · `555467bc6fb353f8d9203f7633deed3df4be35b7b166686dcadaf0f5f6e68063` | [PNG](../../../artifacts/skins/moonink-dark-1440x960-default.png) · `ccf23947d589bb379388757b5ddda06596ccda7fdd7e8d8c24b2c9e977118db9` |
| Moonscrawl | [PNG](../../../artifacts/skins/moonscrawl-light-1440x960-default.png) · `93bd51792c277207ba0c6e0f268d31b9958e7fceb9509c0d9a5e53474e7f0584` | [PNG](../../../artifacts/skins/moonscrawl-dark-1440x960-default.png) · `5d803280834c0a36f9383df24e9a6821c7ac88ab8a27b758941349258d39d36f` |

## Observed composition differences

| Skin | Signals visible in light and dark | Source-defined treatment |
|---|---|---|
| Moonink | Sidebar is a restrained reading rail; the hero is open and unboxed, with a sweeping organic lower edge and serif italic heading. Cards read as ruled text sections rather than floating tiles. | Georgia display, borderless shell/sidebar, asymmetric curved hero and button corners, 7px bottom accent, top-ruled cards. |
| Moonscrawl | Notebook-like rules continue across the page; hero and records sit in bordered sheets, with handwritten-style italic labels, slightly irregular outlines and dotted separators. | Ruled shell background, blue-pencil accent, irregular borders/contours, notebook-style display lettering and dotted row rules. |

Moonink keeps whitespace and a calm reading column; Moonscrawl layers the workspace over a ruled notebook field. The distinction remains in dark mode, where the surface palette changes while the open curved hero versus ruled page and outlined sheets remain. This is limited to the captured default fixture. Source: `src/styles.css`; skin catalog: `src/skins.js`.

## Review disposition

- Direct inspection: four light/dark screenshots.
- Provenance/hash audit: 4/4 hashes match; same source commit/fingerprint, fixture, viewport and browser; fonts loaded.
- Browser suite at capture source: `pnpm run test:browser` — 61/61 passed (recorded under MF-VF-278); not a human visual verdict.
- Human reviewer/approval: **pending**.
- Rollback: revert the MF-VF-281 evidence/count documentation commit.
