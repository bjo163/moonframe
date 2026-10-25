# Moonframe UI — Premium Scope Bible

**Edition:** 2026-10-25 / v0.1 specification extension. **Authoritative per-item content lives in JSON manifests; this document defines product boundaries, positioning, staging and decision rules.** Not a claim that any UI ships.

## 1. Product promise

Moonframe is a source-owned-friendly, skin-aware React design-system proposal supplying **ready-to-implement** UI building blocks, premium compositions, full page layouts, and optional starter scaffolds. The planned commercial-quality promise is verifiable APIs, 15 structurally distinct visual grammars, Light/Dark (30 appearances), documented states and accessibility, developer-friendly imports, and credible fallback behavior. No components, assets or sound are currently produced.

## 2. Six non-overlapping levels and canonical ownership

| Level | Deliverable | Definition | Canonical source / examples |
|---|---|---|---|
| A | Foundations/primitives | Semantic tokens + the smallest interaction/render unit | [Component manifest](../../contracts/moonframe-component-manifest-v0.1.json): Button, Field, Container |
| B | Composite components | Encapsulated interaction pattern; no page-level domain | Same component manifest: Combobox, Dialog, DataTable, FilterBuilder |
| C | Premium blocks | Coherent bounded task/section assembled from components | [Block manifest](../../contracts/moonframe-block-manifest-v0.1.json): block-sign-in-form, block-kpi-grid |
| D | Page templates | Complete responsive page states and composition; route provided by app | [Page manifest](../../contracts/moonframe-page-template-manifest-v0.1.json): template-sign-in-split, template-data-workspace |
| E | Starter application templates | Multi-route navigation shell, fake fixtures and integration seams | [Starter manifest](../../contracts/moonframe-starter-manifest-v0.1.json): starter-admin-workspace |
| F | Optional modules/integrations | Provider/engine bridges with isolated peer deps and licensing | [Integration manifest](../../contracts/moonframe-integration-manifest-v0.1.json) |

**No hidden layer:** a page login does not create a secure identity system; a DataTable does not become a spreadsheet engine; a billing panel does not collect money; a Moonledger screen cannot enforce accounting policy.

## 3. Coverage overview and priority

Current proposed catalog: **151** component entries (103 prior + 48 added), **131** new concrete blocks plus **13** preserved family blueprints, **72** page templates, **8** starter application compositions and **16** optional integration candidates. These are *specification records*, not implementation metrics. Detailed category counts/status are canonical in manifests and verified by the static validator.

- **P0 foundation blockers**: real consumer environment inventory, stable skin IDs/mode, token pipeline proof, primitive provider ADR, contract validator, a11y/release criteria.
- **P1 core-v1 target**: focus/keyboard-compatible basics, forms, simple and controlled data tables, search/sort/pagination, auth sign-in/sign-up/recovery UI, universal states, dashboard shell and a small set of page templates.
- **P2 premium-v1.x target**: MFA/passkey/SSO presentation, advanced filters/saved views, analytics, billing display, team/settings, file/admin/communication/AI blocks, marketing layouts and starter shells; **not all promised for first release**.
- **P3 optional/future**: enterprise pivot/grid editing/virtualization, specialized calendars/editor, Moonquest, some Moonledger screens, queue/webhook and rich AI artifacts, vendor-specific adapters. Require actual consumer value and licensing decisions.
- **Out-of-scope**: credential/session/authorization engines; data persistence; payment or accounting/ERP rule engines; AI model/tool execution; messaging backend; file storage; infrastructure control; games/reward engine.

## 4. What makes something premium

1. States and feedback: idle/invalid/loading/ready/empty/no-results/error/offline/permission-denied with appropriate focus and recovery.
2. Form UX: visible label, field-level and form-level errors, safe pending/submit patterns, keyboard and assistive technology.
3. Data UX: keyboard sort/selection, URL/controlled query options, stable row keys, optimistic/stale state only under app control.
4. 15 visual identities: different composition, geometry, type, navigation/surfaces/data arrangement, not merely color. Same content in reference fixture.
5. Fully responsive: distinct desktop/mobile presentations without changing task, semantics or data authoritativeness.
6. Context-neutral API: no hard-coded user roles, API routes, gateways or paid provider keys.
7. Documentation + QA: sample safe data, code story (future), option/props, bounds, errors, keyboard contract and migration notes.
8. Honest legal/license footprint and testable installation/export surfaces.

## 5. Domain suite composition

- **Authentication:** [Auth UI flow contract](../../contracts/moonframe-auth-ui-catalog-v0.1.json), [Auth guidance](auth-ui-suite.md). Callback and event intent, no security engine.
- **Data workspace:** [4-tier data contract](../../contracts/moonframe-data-workspace-contract-v0.1.json), [data guidance](data-workspace.md). Table semantics before advanced grid.
- **Pages/starters:** [72 page specs](../../contracts/moonframe-page-template-manifest-v0.1.json), [8 starters](../../contracts/moonframe-starter-manifest-v0.1.json). D/E are distinct routes and shell compositions, not renamed C blocks.
- **Specialized modules:** theme-neutral adapters for optional vendors: [integration inventory](../../contracts/moonframe-integration-manifest-v0.1.json), [competitive research](../research/premium-competitive-analysis.md).

## 6. Proof strategy, source of truth and release gates

The 15 × 2 base skin/mode grid is **30 baseline appearances**. The [premium reference coverage](../../contracts/moonframe-premium-coverage-v0.1.json) selects 22 representative blocks/pages × 30 = **660 planned cells**, all `not-rendered`. This is a risk-oriented reference subset, not an exhaustive rendering audit for all 131 blocks/72 pages. Exact application to all items is planned until visual evidence establishes exceptions. The 105 pairwise skin reviews remain `not-reviewed` ([grammar contract](../../contracts/moonframe-skin-grammar-contract-v1.0.json)).

Acceptance for any **future release** additionally requires resolved/contrast-reviewed token values, typing/build, consumer integration, regression screenshots and manual screen reader/keyboard review. [QA strategy](../qa/validation-strategy.md) is not a certificate of compliance.

## 7. Conflicts and open architecture decisions

A single package at first is preferable to a speculative monorepo until consumer use and distribution requirements justify split packages. `@moonframe/ui` remains a working placeholder, not verified for npm rights. Provider comparison, design token resolver/toolchain, table engine/version, optional auth adapters, licensing and font/artwork rights remain separate decisions. Never install a vendor for its popularity alone or attribute Moonframe to shadcn.

### Authentication product boundary refinement — 2026-10-25

The **existing** [Auth UI Bible](auth-ui-suite.md) now owns security-flow integration/trust/normalized statuses. The existing [auth catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json), [block](../../contracts/moonframe-block-manifest-v0.1.json) and [page](../../contracts/moonframe-page-template-manifest-v0.1.json) manifests still own their separate 26/17 IDs. [Flow maps](../../contracts/moonframe-auth-flow-contract-v0.1.json) and [provider matrix](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) are referenced contracts, not new blocks or runtime SDKs. UI never authenticates, enforces policy, manages sessions, implements OAuth/OIDC/WebAuthn or stores user credentials.
