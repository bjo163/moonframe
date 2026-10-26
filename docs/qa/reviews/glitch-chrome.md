# Moonglitch / Moonchrome — structural comparison

Status: candidate distinctions documented from local captures; human visual review pending. No owner approval or visual parity pass is claimed.

## Evidence

Four screenshots show the same `/lab` default fixture and fixed Northstar Studio dashboard at 1440×960, captured in Chromium 156.0.8078.4 at 2026-10-25 12:00 UTC. Source commit `a2baccb89d904d628187899396b74c26fa8e2c3b`; render fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`. Sidecars report loaded fonts and matching PNG hashes. PNGs are local ignored captures, not committed assets.

| Skin | Light capture / SHA-256 | Dark capture / SHA-256 |
|---|---|---|
| Moonglitch | [PNG](../../../artifacts/skins/moonglitch-light-1440x960-default.png) · `b53a6c6515ec00ceb5fa1065a8747f9dc7bef7a18e215a38734cbee57adf6c73` | [PNG](../../../artifacts/skins/moonglitch-dark-1440x960-default.png) · `fe277a908f4fa0761ff89e34b19190d13a1b2bc9aa6f66c88ccd74789ebb4034` |
| Moonchrome | [PNG](../../../artifacts/skins/moonchrome-light-1440x960-default.png) · `0817b93ba3ee3deda3c331d40f1fe9349f4dae7d7d04cada7df099774e4ab57b` | [PNG](../../../artifacts/skins/moonchrome-dark-1440x960-default.png) · `ff588d463b51a1589461bdc9641c07a58e9b81452efb4874269940ab39d1a8ca` |

## Observed composition differences

| Skin | Signals visible in both modes | Source-defined treatment |
|---|---|---|
| Moonglitch | Instrument-panel layout with dense aligned records, small technical labels, crisp rules and monospaced text throughout. Surfaces are mostly flat and square. | Cascadia Code/monospace as body and display, 2px corners, no shadow, dashed data separators and technical table rules. |
| Moonchrome | Softly framed and centered workspace with pill-like controls, rounded cards and broad quiet surfaces; the hero and cards receive curved metallic contours and gentle elevation. | Large-radius contours, thin blue metal borders, soft shadows and rounded controls surrounding conventional sans text. |

The terminal-like density and monospaced rhythm contrast with Moonchrome's rounded, softly elevated metal framing in both appearance modes. Mode changes recolor the surfaces but retain these structures. This comparison covers the captured default fixture only. Source: `src/styles.css`; catalog labels: `src/skins.js`.

## Review disposition

- Direct inspection: four light/dark captures.
- Provenance/hash audit: 4/4 hashes match; shared source, fingerprint, fixture, viewport and browser; loaded fonts.
- Browser suite at source: `pnpm run test:browser` — 61/61 passed (recorded under MF-VF-278), functional/capture evidence only.
- Human reviewer/approval: **pending**.
- Rollback: revert the MF-VF-282 evidence/count documentation commit.
