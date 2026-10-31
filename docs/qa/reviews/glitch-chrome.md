# Moonglitch / Moonchrome — structural comparison

Status: delegated structural comparison recorded from current captures; human countersign pending. No final human approval, rights clearance, or visual parity pass is claimed.

## Evidence

Ten same-content `/lab` captures at 1440×960 and 360×800, Chromium 156.0.8078.4, UTC fixture time 2026-10-25 12:00. Render source commit `dc89b404e1c48169bf0fd6f6fed114529d7f2b4e`, source fingerprint `266f5a167d639102303dc860786267ad78d173ec9ab303801f727883298c8388`; every sidecar reports matching hashes, loaded fonts, and the frozen fixture state. Committed capture artifacts are tracked under `artifacts/skins/`.

| Skin | Light default / SHA-256 | Dark default / SHA-256 |
|---|---|---|
| Moonglitch | [PNG](../../../artifacts/skins/moonglitch-light-1440x960-default.png) · `5e4e4d440a7a9c9a96446e025aa9977d7af64c93f55f864ccc087b7165c810cb` | [PNG](../../../artifacts/skins/moonglitch-dark-1440x960-default.png) · `1267eb27d2cdd5c3c5bd6a57d89574a46015a8e9656694f48a5f3356a36073f4` |
| Moonchrome | [PNG](../../../artifacts/skins/moonchrome-light-1440x960-default.png) · `aadb8366607842f1d0def2f479accb9d0c12088a0e404af575bdbe6969b8e409` | [PNG](../../../artifacts/skins/moonchrome-dark-1440x960-default.png) · `847b204be3a0c1fd7f0a9f7462508511e2266c20b3cb58d4ac4261b4f894217b` |

| Moonchrome state | Light / SHA-256 | Dark / SHA-256 |
|---|---|---|
| Grayscale | `2f9b8948bfcddcf96257beb1c7b92b3a6d6ab762413eac3f1160967b2b6dca71` | `260987c2685db8483275409197436368fe546ade1551d79ed078fecbd951c5af` |
| Decoration off | `856cbd9804b910ffb4c24d3eb5ba3a8276ef74e8a927ba5a11624992087d6c4d` | `8c028a0fbb542a39ebea3f402edeb74059234183139d3616a969e82a24e29d83` |
| 360×800 default | `f9d1a9af109a8c578b8408ca52e134d1bbe4b5d5aaf509d992739b3ee86cdcc9` | `90672ac49151659b9e606a3baf3d5f4806b54d6297fe185bd60ffa27f86cf6ec` |

## Observed composition differences

| Skin | Signals visible in both modes | Source-defined treatment |
|---|---|---|
| Moonglitch | Instrument-panel layout with dense aligned records, small technical labels, crisp rules and monospaced text throughout. Surfaces are mostly flat and square. | Cascadia Code/monospace as body and display, 2px corners, no shadow, dashed data separators and technical table rules. |
| Moonchrome | Layered metal framing with a rounded pill navigation rail, bordered header, inset plate rings on the hero and cards, and uppercase technical headings. The reading plane stays matte and opaque while reflective cues sit at peripheral rims. | Large-radius contours, thin blue metal borders, soft shadows and rounded controls surrounding conventional sans text. |

The terminal-like density and monospaced rhythm contrast with Moonchrome's rounded, softly elevated metal framing in both appearance modes. Grayscale preserves the structural difference: Moonglitch stays flat and technical, Moonchrome keeps its layered material tiers and rounded contours. Decoration-off removes the icon rims, plate shadows, active nav insets and card padding without removing headings, navigation, form values, or actions. At 360×800 Moonchrome stacks content in reading order; long tables remain horizontally scrollable rather than clipped. Source: `src/styles.css`; catalog: `src/skins.js`.

## Review disposition

- Direct inspection: four default, two grayscale, two decoration-off, and two mobile Moonchrome captures, plus four Moonglitch counterparts.
- Reviewer: Qoder, owner-delegated agent reviewer (2026-10-31). This is not a human reviewer; human countersign remains pending.
- Verdict: **distinct** for composition, grayscale hierarchy, decoration-off behavior, and responsive order.
- Observed limits: static captures do not certify contrast, focus visibility, or hit-target sizing; the 360×800 project table relies on horizontal scrolling; the embedded dashboard fixture keeps its own container styling across skins.
- Automated corroboration: `pnpm run test:browser` 86/86 passed; `pnpm run audit:pairs` exit 0 with 30 desktop + 30 tablet + 30 phone current-source captures.
- Human reviewer/approval: **pending**.
- Rollback: restore the prior evidence block and remove this delegated disposition.