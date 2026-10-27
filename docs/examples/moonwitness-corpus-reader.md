# Consumer UI seam: Corpus Reader

This example describes an application boundary for a corpus reading interface. Moonframe supplies reusable presentation primitives; the consuming application owns the corpus, its interpretation, and every domain-specific claim.

## Responsibility split

| Concern | Owner |
| --- | --- |
| Page layout, responsive spacing, cards, tabs, form controls, and table semantics | Moonframe primitives and the consumer's composition |
| Corpus records, source metadata, search, filters, and pagination state | Consumer data layer |
| Translations, editorial decisions, theological interpretation, and citations | Consumer domain and editorial process |
| Authentication, permissions, persistence, and synchronization | Consumer services, when needed |

The library does not provide corpus content, theological truth, search indexing, a reader backend, or authorization.

## Suggested composition

1. Render a page heading and a short description as ordinary HTML text.
2. Compose a filter form from labeled inputs and buttons. Keep filter state and query behavior in the consumer.
3. Present the selected passage in a card with readable text, source metadata, and citations supplied by the consumer.
4. Use tabs only for genuine alternate views such as reading and notes; preserve keyboard behavior and expose the selected state through the primitive's API.
5. Render result lists with semantic headings and links. Use a table only when users need to compare tabular fields.
6. Provide explicit empty, loading, and error states from the consumer's data lifecycle.

Use the Moonframe `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `Input`, `Button`, `Tabs`, and table primitives where they fit. These are building blocks, not a bundled Corpus Reader product.

## Data and accessibility boundary

Pass content into the composition as consumer-owned data. Keep meaningful reading text in the DOM rather than baking it into artwork. Give form controls visible labels, preserve heading order, maintain a visible keyboard focus indicator, and announce asynchronous result changes when appropriate. Do not encode doctrinal or other domain meaning in generic status colors or library defaults.

No consumer branding, corpus data, or theology is included in Moonframe's generic defaults by this example. It is an integration sketch and makes no claim that a corpus backend or complete reader template ships with the library.
