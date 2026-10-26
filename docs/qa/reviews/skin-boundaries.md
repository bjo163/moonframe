# Skin boundary and shared-fallback review protocol

**Status:** protocol implemented; visual review pending. This record defines checks for whether the Northstar `/lab` specimen remains usable across all canonical skins without treating one skin's artwork as a universal default.

## Coverage

The canonical skin catalog contains 15 IDs. Exercise each ID in Light and Dark mode (30 appearance cases) using the same fixture data, route, viewport, browser profile, and capture state. Record the source commit and each capture's provenance and SHA-256 in the visual evidence ledger. A Moonpunk capture is one skin-specific example; it cannot stand in for the other 14 skins or establish their composition.

## Shared behavior and optional artwork

For every appearance, verify live headings, navigation, tables, forms, status text, focus, and controls remain available with decorative artwork disabled or unavailable. Treat meaningful artwork separately: its accessible alternative must remain present when the image is hidden. Check that optional decoration does not replace content or imply a shared brand mark across skins. Compare structure, geometry, typography, and material as well as color; a shared accent or screenshot alone does not prove skin distinction.

## Evidence and disposition

Record each tested skin/mode, fixture and viewport, artwork state, source revision, capture digest, and observed failures. Keep visual and accessibility reviewer, date, and disposition pending until a person performs the review. This protocol and automated assertions do not establish pixel parity, rights clearance, WCAG conformance, or human approval.
