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

## 3. Reusable Component & Level C Composite Block Library (`M5`, `M6`, `M8`)

All **66+ exports** in [src/components.js](../src/components.js) and [src/components.d.ts](../src/components.d.ts) are reusable across any Next.js consumer:

- **Foundation & Layout:** `Slot` (`asChild`), `AppShell`, `Sidebar`, `Main`, `Header`, `Nav`, `NavItem`, `Hero`, `Grid`, `Separator`, `Skeleton`, `Kbd`, `CodeBlock`
- **Actions & Theme:** `Button`, `SkinSelector`, `ModeSelector`
- **Forms & Rich Inputs:** `Field`, `FieldDescription`, `FieldError`, `Label`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `RadioGroup`, `OTPInput`, `PasswordField`, `SearchInput`, `Slider`, `TagInput`, `SegmentedControl`, `FileDropzone`
- **Navigation:** `Tabs`, `Breadcrumb`, `BreadcrumbItem`, `BreadcrumbLink`, `Pagination`, `Stepper`
- **Overlays & Command:** `Dialog`, `Drawer`, `Popover`, `DropdownMenu`, `Tooltip`, `CommandPalette`
- **Feedback & Status:** `Alert`, `Callout`, `Banner`, `ToastProvider`, `useToast`, `Progress`, `Badge`, `EmptyState`
- **Data & Visualization:** `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `StatCard`, `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`, `DataTable`, `BarChart`, `Sparkline`, `Timeline`, `Avatar`, `AvatarGroup`, `DescriptionList`, `DescriptionTerm`, `DescriptionDetails`, `Accordion`
- **Level C Reusable Composite Blocks:** `PageHeader`, `MetricGrid`, `AuthCard`, `PricingCard`, `SettingsSection`, `ActivityFeed`

## 4. Wave-A Production Page Templates (`M7` — 22 Templates)

Implemented in [apps/moonframe/templates/index.tsx](../apps/moonframe/templates/index.tsx) and cataloged in [apps/moonframe/lib/catalog.ts](../apps/moonframe/lib/catalog.ts):

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
