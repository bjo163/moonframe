# Moonframe Implementation Status & Runtime Evidence (2026-10-26)

This document records the verified local runtime, reusable component library (`@moonframe/ui`), deterministic token slice, and `apps/moonframe` Next.js 16 showcase application.

> **Governance note:** Machine contract files in `contracts/*.json` intentionally retain their specification status (`not-implemented` / `specified-not-implemented` / `not-reviewed`) as enforced by [scripts/validate-contracts.mjs](../scripts/validate-contracts.mjs) until formal human 105-pair review and public npm release gates (`M11`–`M12`) are signed off. All runtime implementation progress is tracked here and in [TODO.md](../TODO.md).

## 1. Workspace & Package Architecture (`M1`)

- **Package Manager:** `pnpm@10.33.4` via [pnpm-workspace.yaml](../pnpm-workspace.yaml) and root [package.json](../package.json).
- **Library (`@moonframe/ui` at root):**
  - `.` → [src/index.js](../src/index.js) + [src/index.d.ts](../src/index.d.ts)
  - `./styles.css` → [src/styles.css](../src/styles.css)
  - `./tailwind.css` → [src/tailwind.css](../src/tailwind.css)
  - `./skins` → [src/skins.js](../src/skins.js) + [src/skins.d.ts](../src/skins.d.ts)
  - `./theme` → [src/theme.js](../src/theme.js) + [src/theme.d.ts](../src/theme.d.ts)
- **Official Showcase App (`apps/moonframe`):** Next.js 16.4.2 App Router linked via `"@moonframe/ui": "workspace:*"`. Running `pnpm run dev` at the root launches `apps/moonframe`.

## 2. Deterministic Token Slice & Runtime CSS Bridge (`M2` & `M3`)

- [scripts/generate-tokens.mjs](../scripts/generate-tokens.mjs) (`pnpm run tokens`) verifies:
  - Byte-identical CSS and TypeScript declaration emission from bounded DTCG-subset token trees.
  - Complete coverage of all 15 skins × 2 modes (`30` appearances) in [src/styles.css](../src/styles.css).
  - Complete `@theme inline` variable bridging in [src/tailwind.css](../src/tailwind.css).
- [src/theme.js](../src/theme.js) implements `ThemeProvider` (controlled/uncontrolled + `syncDocumentElement`), `ThemeScript`, `getThemeInitScript`, `useTheme`, `resolveTheme`, `normalizePreferences`, and `getThemeAttributes`.

## 3. Reusable Component, Block & Vector/SFX Library (`M5`, `M6`, `M8`, `M10`)

All **70+ exports** in [src/components.js](../src/components.js) and [src/components.d.ts](../src/components.d.ts) are reusable across any Next.js consumer:

- **Foundation & Layout:** `Slot` (`asChild`), `AppShell`, `Sidebar`, `Main`, `Header`, `Nav`, `NavItem`, `Hero`, `Grid`, `Separator`, `Skeleton`, `Kbd`, `CodeBlock`
- **Actions & Theme:** `Button`, `SkinSelector`, `ModeSelector`, `SkinBrandMark`, `SkinArtwork`, `SFXProvider`, `useSFX`
- **Forms & Rich Inputs:** `Field`, `FieldDescription`, `FieldError`, `Label`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `RadioGroup`, `OTPInput`, `PasswordField`, `SearchInput`, `Slider`, `TagInput`, `SegmentedControl`, `FileDropzone`
- **Navigation:** `Tabs`, `Breadcrumb`, `BreadcrumbItem`, `BreadcrumbLink`, `Pagination`, `Stepper`
- **Overlays & Command:** `Dialog`, `Drawer`, `Popover`, `DropdownMenu`, `Tooltip`, `CommandPalette`
- **Feedback & Status:** `Alert`, `Callout`, `Banner`, `ToastProvider`, `useToast`, `Progress`, `Badge`, `EmptyState`
- **Data & Visualization:** `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `StatCard`, `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`, `DataTable`, `BarChart`, `Sparkline`, `Timeline`, `Avatar`, `AvatarGroup`, `DescriptionList`, `DescriptionTerm`, `DescriptionDetails`, `Accordion`
- **Level C Reusable Composite Blocks:** `PageHeader`, `MetricGrid`, `AuthCard`, `PricingCard`, `SettingsSection`, `ActivityFeed`
- **M10 Vector Marks & SFX Runtime:** 15 distinct geometric vector brand marks (`SkinBrandMark`), adaptive artwork figure (`SkinArtwork` honoring `data-decorations="off"` per `MF-BRAND-BRIEFS-001`), and opt-in WebAudio synthesizer runtime (`SFXProvider`, `useSFX` honoring `MF-SFX-001` rate limiting and reduced-motion suppression).

## 4. 43 Production-Ready Page Templates (Wave-A & Wave-B)

Implemented in [apps/moonframe/templates/index.tsx](../apps/moonframe/templates/index.tsx) and cataloged in [apps/moonframe/lib/catalog.ts](../apps/moonframe/lib/catalog.ts):

### Wave-A Templates (22):
1. `template-dashboard-overview` — Executive Dashboard Overview
2. `template-analytics-workspace` — Telemetry & Analytics Workspace
3. `template-data-workspace` — Enterprise Records & Data Workspace
4. `template-users-directory` — Team & RBAC Users Directory
5. `template-sign-in-split` — Split-Screen Sign In
6. `template-sign-up` — Workspace Registration & Onboarding
7. `template-forgot-password` — Password Recovery Flow
8. `template-mfa-verify` — Two-Factor OTP Verification
9. `template-profile-preferences` — Profile & Account Preferences
10. `template-appearance-preferences` — Skin & Accessibility Appearance Studio
11. `template-api-key-settings` — API Keys & Webhook Security
12. `template-plans-and-pricing` — Plans & Pricing Marketplace
13. `template-billing-overview` — Billing, Usage & Invoices
14. `template-kanban-workspace` — Sprint Kanban & Delivery Board
15. `template-messages-workspace` — Team Inbox & Triage Workspace
16. `template-ai-chat` — AI Copilot & Prompt Studio
17. `template-moonledger-invoices` — Moonledger Financial Reconciliation
18. `template-moonquest-home` — Moonquest Guild Chronicle & Inventory
19. `template-public-landing` — SaaS Product Launch Landing Page
20. `template-documentation-landing` — Technical Documentation Portal
21. `template-not-found` — 404 Not Found System Screen
22. `template-maintenance` — Scheduled Maintenance & Status Page

### Wave-B Templates (21):
23. `template-sign-in-minimal` — Minimalist Authentication Entry
24. `template-verify-email` — Email Verification with Resend Timer
25. `template-auth-onboarding` — Multi-Step Workspace Setup Wizard
26. `template-account-locked` — Security Incident Recovery Flow
27. `template-records-table` — High-Volume Records Explorer
28. `template-resource-detail` — Entity Inspector with Audit History
29. `template-data-audit` — Immutable Audit Logs with JSON Diff
30. `template-executive-dashboard` — Quarterly Executive Deck & KPIs
31. `template-operations-console` — Infrastructure & Incident Console
32. `template-webhook-inspector` — Webhook Delivery Logs & Payload Inspector
33. `template-queue-monitor` — Background Queue Health & Dead-Letter Workbench
34. `template-moonledger-home` — ERP General Ledger & Purchase Order Approvals
35. `template-moonledger-inventory` — Multi-Warehouse SKU Stock Management
36. `template-organization-preferences` — Enterprise Organization & SSO Preferences
37. `template-moonquest-inventory` — RPG Relic Vault & Equipment Workbench
38. `template-public-pricing` — Public Pricing Tiers & Feature Matrix
39. `template-public-contact` — Enterprise Contact, Demo & SLA Form
40. `template-legal-content` — Terms of Service & Privacy Policy Copy
41. `template-error-page` — 500 Uncaught Exception Recovery Screen
42. `template-access-denied` — 403 Forbidden & Access Request Flow
43. `template-offline-page` — Offline Network Interruption Screen

## 5. 8 Level E Multi-Route Starter Applications

Fulfills 100% of starter application compositions defined in [moonframe-starter-manifest-v0.1.json](../contracts/moonframe-starter-manifest-v0.1.json) (`MF-STARTERS-001`):

1. **`starter-admin-workspace`** (5 routes, recommended skin: `classic`): Executive overview, users directory, resource detail, profile preferences, and error recovery.
2. **`starter-auth-onboarding`** (6 routes, recommended skin: `moonpunk`): Minimal login, registration, recovery, email OTP verification, team wizard, and account lockout.
3. **`starter-data-admin`** (5 routes, recommended skin: `moonpanel`): Master records table, advanced filter workspace, resource inspector, audit log, and 403 access denied.
4. **`starter-analytics-portal`** (4 routes, recommended skin: `moonglitch`): Range analytics, executive KPI deck, dashboard overview, and error fallback.
5. **`starter-operations-console`** (4 routes, recommended skin: `mooncrash`): Ops health, webhook delivery inspector, background queue monitor, and offline page.
6. **`starter-moonledger-erp`** (4 routes, recommended skin: `moonledger`): ERP overview, accounts reconciliation, warehouse inventory, and organization preferences.
7. **`starter-moonquest-adventure`** (3 routes, recommended skin: `moonquest`): Adventure chronicle, relic vault/inventory, and adventurer preferences.
8. **`starter-content-marketing`** (5 routes, recommended skin: `moonzine`): Landing page, pricing comparison, contact sales, documentation, and legal terms.

## 6. Moonframe CLI Scaffolder (`scripts/moonframe-cli.mjs`)

Zero-dependency Node.js ESM tool runnable via `pnpm run cli`:
- `pnpm run cli list` — Lists 15 skins, 43 templates, and 8 starters with route counts.
- `pnpm run cli info <id>` — Displays detailed metadata, connected page refs, and integration seams.
- `pnpm run cli add <template-id>` — Scaffolds single Next.js page component.
- `pnpm run cli add <starter-id>` — Scaffolds multi-route starter directory with `layout.tsx` (ThemeProvider/ThemeScript) and sub-route `page.tsx` files.
