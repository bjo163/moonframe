# Mooncrash screenshot-based anti-clone review

This protocol checks that Mooncrash reads as an equipment service console through its rack navigation, inspection zones, and plate-like work areas, rather than as Moonledger with an industrial accent. It defines a future review and does not report captures or a visual verdict.

## Capture setup

- Use one deterministic fixture with identical content, data, component states, fonts, browser, and theme mode for Mooncrash and Moonledger. Record the source commit and capture metadata.
- Capture desktop at 1440×960 and mobile at 360×800, at 100% zoom and device scale factor 1. Keep route, scroll position, selected navigation item, and form values fixed across skins.
- At both viewports, capture color and grayscale states with optional decoration enabled and disabled. Record each image path and SHA-256 in the visual fidelity evidence ledger; a path or digest is not a review verdict.
- Preserve semantic warnings and status text in the fixture. Do not use hazard stripes or color as the only way to convey state.

## Human comparison criteria

Compare Mooncrash and Moonledger using the same content and states. Record concrete observations for each capture:

1. **Operational composition:** Mooncrash should group controls and content into equipment zones and inspection stages, with rack-like navigation and plate boundaries. Moonledger should read as aligned records, stable columns, filters, and numeric comparison.
2. **Structure without color:** In grayscale, note whether geometry, spacing, and type hierarchy still distinguish the equipment console from the accounting workbench.
3. **Decoration-off behavior:** Removing optional artwork must preserve content, DOM and reading order, labels, controls, focus visibility, and status meaning. Record any decoration that competes with text or controls.
4. **Responsive behavior:** At 360×800, work zones should stack in reading order and navigation remain usable without horizontal page overflow. Note clipping, overflow, or lost hierarchy.
5. **Shared behavior:** Verify matched controls retain equivalent labels, keyboard interaction, focus treatment, and accessible state meanings in both skins.

| Viewport | Grayscale | Decoration | Capture path / SHA-256 | Moonledger comparison | Reviewer / date |
|---|---|---|---|---|---|
| 1440×960 | color | on | pending | pending | pending |
| 1440×960 | color | off | pending | pending | pending |
| 1440×960 | grayscale | on | pending | pending | pending |
| 1440×960 | grayscale | off | pending | pending | pending |
| 360×800 | color | on | pending | pending | pending |
| 360×800 | color | off | pending | pending | pending |
| 360×800 | grayscale | on | pending | pending | pending |
| 360×800 | grayscale | off | pending | pending | pending |

## Completion boundary

After captures exist, a human reviewer should record exact artifact paths and hashes, observations, and a plain-language disposition (`distinct`, `overlap found`, or `inconclusive`) with actionable changes. Keep review pending until then. This protocol grants no artwork rights and makes no claim of capture, parity, accessibility conformance, human review, or acceptance.
