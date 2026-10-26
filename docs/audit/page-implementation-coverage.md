# Page implementation coverage (MF-PF-005)

Inventory checked against page manifest contract v0.1.0 and source at current HEAD `ae6395d420c455246aadfb0d0753de631e9f28d5`. The manifest contains 72 D-level records; the showcase catalog contains 43; renderer cases contain 43. Set comparison found 0 catalog IDs without renderer cases and 0 catalog IDs absent from the manifest.

Route evidence: `/templates/[id]` is implemented in `apps/moonframe/app/(site)/templates/[id]/page.tsx`; `/preview/[id]` is implemented in `apps/moonframe/app/(preview)/preview/[id]/page.tsx`. Catalog records use these route patterns through the showcase pages; manifest `routePattern` is `consumer-owned`, so it is not an implementation route declaration.

All 43 catalog records below are marked `implemented` as showcase catalog + renderer entries. The remaining 29 manifest records are marked `pending` because they have no catalog entry/renderer case. Preview is available through both individual routes; per-record screenshot and human visual review evidence is absent, so review state is `not-reviewed` for every row.

| D-level manifest ID | Manifest status | Implementation status | Route | Source | Preview | Review state |
|---|---|---|---|---|---|---|
| `template-sign-in-minimal` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-sign-in-split` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-sign-in-branded` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-sign-in-enterprise` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-sign-up` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-magic-link` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-forgot-password` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-reset-password` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-verify-email` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-mfa-verify` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-passkey-signin` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-sso-callback` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-invite-accept` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-account-locked` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-auth-onboarding` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-security-center` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-team-membership` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-dashboard-overview` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-analytics-workspace` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-service-dashboard` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-executive-dashboard` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-records-table` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-data-workspace` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-data-filter-builder` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-data-audit` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-responsive-records` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-data-grid-lab` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-users-directory` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-team-admin` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-api-key-settings` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-integrations-panel` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-resource-detail` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-resource-create` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-resource-edit` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-resource-delete` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-billing-overview` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-plans-and-pricing` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-payment-outcome` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-profile-preferences` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-appearance-preferences` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-organization-preferences` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-project-hub` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-kanban-workspace` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-project-schedule` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-calendar-month` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-calendar-event-editor` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-messages-workspace` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-thread-view` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-ai-chat` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-ai-agent-activity` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-ai-sources` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-file-manager` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-content-editor` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
| `template-operations-console` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-webhook-inspector` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-queue-monitor` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-moonledger-home` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-moonledger-invoices` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-moonledger-inventory` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-moonquest-home` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-moonquest-inventory` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-public-landing` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-public-pricing` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-public-contact` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-documentation-landing` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-legal-content` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-not-found` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-error-page` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-offline-page` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-access-denied` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-maintenance` | `specified-not-implemented` | implemented | `/templates/[id]`; `/preview/[id]` | `apps/moonframe/lib/catalog.ts`; `apps/moonframe/templates/index.tsx` | available by ID | not-reviewed |
| `template-first-run-empty` | `specified-not-implemented` | pending | — | — | not available | not-reviewed |
