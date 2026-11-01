# Consumer UI seam: Glossary / Terms Index

This example describes an application boundary for an alphabetical or searchable glossary of terms. Moonframe supplies reusable list, search, card, and link primitives; the consuming application owns the vocabulary, its definitions, and every domain claim.

## Responsibility split

| Concern | Owner |
| --- | --- |
| Alphabetical index layout, term list, search filtering, and link semantics | Moonframe primitives and the consumer's composition |
| Term strings, definitions, cross-references, and editorial authority | Consumer data layer and editorial process |
| What each term means in the consumer's domain, and whether it is canonical | Consumer domain and editorial process |
| Auth, persistence, revision history, and backend vocabulary source | Consumer services, when needed |

The library does not provide a vocabulary, a canonical dictionary, or domain terminology. A list of terms rendered by the consumer is still ordinary text; the library supplies the presentation, not the knowledge.

## Suggested composition

1. Render a page heading and short description as ordinary HTML text. State that the index is consumer-maintained.
2. Compose a search field from a labeled input. Keep filter state and query behavior in the consumer; the library only filters on the strings the consumer supplies.
3. Present matching terms in a card or list with the term heading, its definition, and any cross-references supplied by the consumer.
4. Render an alphabetical index rail as a set of anchor links. Keep the rail consumer-owned so it reflects the actual vocabulary present.
5. Provide explicit empty, loading, and error states from the consumer's data lifecycle — including "no terms match" when the search yields nothing.

Use the Moonframe `PageHeader`, `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `Input`, `Button`, and link primitives where they fit. These are building blocks, not a bundled dictionary product.

## Data and accessibility boundary

Pass terms and definitions into the composition as consumer-owned data. Keep definition text in the DOM rather than baking it into artwork or non-text graphics. Give the search field an accessible label, preserve heading order, maintain a visible keyboard focus indicator, and announce asynchronous result changes when appropriate. Do not encode editorial authority, term canonical status, or definition accuracy in generic status colors or library defaults.

No vocabulary, term list, or definition content is included in Moonframe's generic defaults by this example. It is an integration sketch and makes no claim that a glossary backend or terms product ships with the library.