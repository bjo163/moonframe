# Consumer UI seam: Prophetic Table

This example describes an application boundary for a table that surfaces "prophetic" or foresight-style rows — for example, scenario forecasts, risk projections, or predicted outcomes. Moonframe supplies reusable table, sort, and search primitives; the consuming application owns the predictions, their confidence intervals, and every domain claim.

## Responsibility split

| Concern | Owner |
| --- | --- |
| Table layout, column definitions, sorting, pagination, and row semantics | Moonframe `DataTable` primitives and the consumer's composition |
| Predicted values, confidence intervals, scenario labels, and model provenance | Consumer data layer and forecasting pipeline |
| Interpretation of what a projection means, its accuracy, or its authority | Consumer editorial and domain process |
| Auth, persistence, refresh cadence, and backend data source | Consumer services, when needed |

The library does not provide forecasting models, prediction data, or domain truth. A `DataTable` column that renders a projected number is still a generic numeric cell; the consumer supplies the value and its semantics.

## Suggested composition

1. Render a page heading and short description as ordinary HTML text. Keep the forecast's purpose and refresh cadence visible.
2. Define columns with explicit `header` labels. Place non-sortable prediction metadata (confidence, scenario id, generated-at) in columns that do not invite arbitrary sorting.
3. Use the `render` callback for the projection value to show the number plus a small consumer-owned confidence indicator. Do not bake model state into library defaults.
4. Keep search behavior consumer-controlled; the library only filters on the strings the consumer supplies.
5. Provide explicit empty, loading, and error states from the consumer's data lifecycle — including the case where the forecast has not been computed yet.

Use the Moonframe `PageHeader`, `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `DataTable`, and `Callout` primitives where they fit. These are building blocks, not a bundled prediction product.

## Data and accessibility boundary

Pass prediction rows into the composition as consumer-owned data. Keep forecast text in the DOM rather than encoding it in non-text artwork. Give every column a visible header, preserve tab order across sortable and non-sortable columns, maintain a visible keyboard focus indicator, and announce asynchronous refreshes when appropriate. Do not encode prophetic authority, model confidence tier, or forecast accuracy in generic status colors or library defaults.

No prediction model, scenario data, or forecast claim is included in Moonframe's generic defaults by this example. It is an integration sketch and makes no claim that a forecasting backend or prediction template ships with the library.