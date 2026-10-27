# Consumer UI seam: Ontology Explorer

This example sketches how a consuming application could present relationships among its own concepts. Moonframe can supply general layout and interaction primitives; it does not ship an ontology, graph model, graph renderer, or domain interpretation.

## Responsibility split

| Concern | Owner |
| --- | --- |
| Page structure, headings, buttons, filters, panels, and responsive layout | Moonframe primitives composed by the consumer |
| Nodes, relationships, labels, provenance, and graph semantics | Consumer domain model |
| Graph layout algorithm, canvas/SVG renderer, zoom, and pan | Optional consumer-selected integration |
| Permissions, persistence, and data updates | Consumer services |

## Suggested composition

1. Keep a clear page heading, summary, and selected-item details in ordinary DOM content.
2. Use labeled controls for consumer-owned search, relationship filters, and display options.
3. Treat any graph renderer as an optional integration behind a consumer-owned adapter. A list or table view should remain available when that integration is absent or unsuitable.
4. Provide keyboard-accessible selection and an equivalent textual route through nodes and relationships; do not make spatial positioning the only way to understand the data.
5. Show loading, empty, error, and permission states from the consumer's actual data lifecycle.

Moonframe's `Card`, `Button`, `Input`, and semantic list/table primitives may help compose surrounding UI. They do not imply a graph package or a shipped Ontology Explorer.

## Data and accessibility boundary

The consumer owns the truth, provenance, language, and interpretation of every node and edge. Keep labels and selected-item details available to assistive technology, preserve visible focus, and ensure controls work without pointer gestures. Any canvas-only visualization needs a synchronized accessible DOM representation.

This document is an integration seam, not a product claim, ontology specification, or recommendation of a particular graph vendor.
