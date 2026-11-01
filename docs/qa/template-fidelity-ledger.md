# Template Fidelity Ledger (MF-VF-265)

**Date:** 2026-11-01 · **Source:** `apps/moonframe/templates/index.tsx` · **Status:** in_progress · **Dependency:** `MF-VF-031` · **GitHub issue:** not-created

This ledger tracks individual review records for all 43 production-ready Next.js page templates. Each template is evaluated for visual fidelity, component usage, and integration seams.

## Review Template

| Template ID | Title | Category | Recommended Skin/Mode | Components Used | Status | Reviewer | Exception | Evidence |
|---|---|---|---|---|---|---|---|---|
| `template-dashboard-overview` | Executive Dashboard Overview | Dashboard | classic / dark | AppShell, Sidebar, PageHeader, MetricGrid, BarChart, DataTable, ActivityFeed, Button | `planned` | — | — | — |
| `template-analytics-workspace` | Telemetry & Analytics Workspace | Dashboard | moonglitch / dark | PageHeader, SegmentedControl, MetricGrid, BarChart, Card, Callout | `planned` | — | — | — |
| `template-data-workspace` | Enterprise Records & Data Workspace | Data | moonledger / light | PageHeader, DataTable, Badge, Button | `planned` | — | — | — |
| `template-users-directory` | Organization Members & RBAC | Auth | moonrust / light | PageHeader, AvatarGroup, Dialog, Input, Select, TagInput, Checkbox | `planned` | — | — | — |
| `template-sign-in-split` | Workspace Access Split Layout | Auth | moonraw / light | Hero, AuthCard, Button, Field, Input, PasswordField, Checkbox | `planned` | — | — | — |
| `template-sign-up` | Create Workspace (3-step) | Auth | moon / light | Stepper, AuthCard, Field, Input, PasswordField, RadioGroup, Button | `planned` | — | — | — |
| `template-forgot-password` | Reset Password | Auth | moonglitch / dark | AuthCard, Callout, Field, Input, Button | `planned` | — | — | — |
| `template-mfa-verify` | MFA Verification | Auth | moonritual / light | AuthCard, OTPInput, Checkbox, Button | `planned` | — | — | — |
| `template-profile-preferences` | Profile & Notification Preferences | Settings | moonice / light | PageHeader, SettingsSection, Field, Input, Textarea, TagInput, FileDropzone, Switch, Checkbox | `planned` | — | — | — |
| `template-appearance-preferences` | Appearance & Accessibility Studio | Settings | moonsmash / light | PageHeader, SettingsSection, Field, SkinSelector, ModeSelector, RadioGroup, Slider | `planned` | — | — | — |
| `template-api-key-settings` | API Keys & Webhook Signing | Settings | moonhalftone / light | PageHeader, SettingsSection, Callout, Card, CodeBlock, DataTable | `planned` | — | — | — |
| `template-plans-and-pricing` | Plans Built for Every Team | Billing | moonscrawl / light | PageHeader, SegmentedControl, PricingCard, Grid, Accordion, Card, Callout | `planned` | — | — | — |
| `template-billing-overview` | Billing & Resource Utilization | Billing | moonpunk / dark | PageHeader, MetricGrid, Grid, Card, Progress, DescriptionList, DataTable | `planned` | — | — | — |
| `template-kanban-workspace` | Sprint 14 Kanban Board | Workspace | moonpanel / light | PageHeader, Grid, Card, AvatarGroup, SegmentedControl, Progress | `planned` | — | — | — |
| `template-messages-workspace` | Design Review & Triage Inbox | Workspace | moonchrome / light | PageHeader, Grid, Card, SearchInput, Timeline, Field, Textarea, Button | `planned` | — | — | — |
| `template-ai-chat` | Moonframe UI Copilot | Domain | moonglitch / dark | PageHeader, Grid, Card, Field, SkinSelector, Slider, Textarea, Button, CodeBlock, Timeline | `planned` | — | — | — |
| `template-moonledger-invoices` | General Ledger & Accounts Receivable | Domain | moonledger / light | PageHeader, MetricGrid, Card, DataTable, Progress | `planned` | — | — | — |
| `template-moonquest-home` | Expedition to the Astral Citadel | Domain | moonquest / light | PageHeader, Stepper, Grid, Card, Progress, ActivityFeed | `planned` | — | — | — |
| `template-public-landing` | Public Landing Page | Public | moonraw / light | Hero, Badge, Button, MetricGrid | `planned` | — | — | — |
| `template-documentation-landing` | Documentation Landing | Public | moonrust / light | AppShell, Sidebar, PageHeader, Callout, Card, CodeBlock | `planned` | — | — | — |
| `template-not-found` | 404 Error Page | System | moonice / dark | EmptyState, Button | `planned` | — | — | — |
| `template-maintenance` | Scheduled Maintenance | System | moonhalftone / dark | PageHeader, Callout, Card, Progress, Timeline | `planned` | — | — | — |
| `template-sign-in-minimal` | Direct Authentication | Auth | moonriot / dark | AuthCard, Field, Input, PasswordField, Checkbox, Button | `planned` | — | — | — |
| `template-verify-email` | Two-Step Verification | Auth | moonzheng / light | AuthCard, OTPInput, Callout, Button | `planned` | — | — | — |
| `template-auth-onboarding` | Team Workspace Setup | Auth | moon / light | Stepper, AuthCard, Field, Input, RadioGroup, SkinSelector, Button | `planned` | — | — | — |
| `template-account-locked` | Workspace Access Locked | System | moonraw / dark | EmptyState, Callout, Button | `planned` | — | — | — |
| `template-records-table` | Master Configuration Records | Data | moonsmash / light | PageHeader, Card, DataTable, SegmentedControl | `planned` | — | — | — |
| `template-resource-detail` | Cluster Partition Inspector | Domain | moonhalftone / light | PageHeader, DescriptionList, Tabs, Callout, Grid, Card | `planned` | — | — | — |
| `template-data-audit` | Immutable Compliance Audit Ledger | Security | moonglitch / dark | PageHeader, Grid, Card, DataTable, CodeBlock, Callout | `planned` | — | — | — |
| `template-executive-dashboard` | Executive Strategy & Telemetry | Dashboard | classic / dark | PageHeader, MetricGrid, Grid, Card, BarChart, Progress | `planned` | — | — | — |
| `template-operations-console` | Global Infrastructure Command Console | Domain | moonpanels / light | PageHeader, MetricGrid, Card, Switch, DataTable | `planned` | — | — | — |
| `template-webhook-inspector` | Webhook Event Dispatcher & Inspector | Domain | moonchrome / light | PageHeader, Grid, Card, DataTable, CodeBlock, Button | `planned` | — | — | — |
| `template-queue-monitor` | Background Worker Queue Telemetry | Domain | moonscrawl / dark | PageHeader, MetricGrid, Card, DataTable | `planned` | — | — | — |
| `template-moonledger-home` | Corporate Treasury & Ledger Summary | Domain | moonledger / light | PageHeader, MetricGrid, Grid, Card, DataTable, ActivityFeed | `planned` | — | — | — |
| `template-moonledger-inventory` | Supply Chain & Inventory | Domain | moonledger / light | PageHeader, Card, DataTable | `planned` | — | — | — |
| `template-organization-preferences` | Organization & Fiscal Preferences | Settings | moonhalftone / light | PageHeader, SettingsSection, Field, Select, Switch | `planned` | — | — | — |
| `template-moonquest-inventory` | Adventurer Reliquary & Armory | Domain | moonquest / light | PageHeader, Grid, Card, Progress | `planned` | — | — | — |
| `template-public-pricing` | Simple, Transparent Plans | Public | moonraw / light | PageHeader, Grid, PricingCard, Card, Accordion | `planned` | — | — | — |
| `template-public-contact` | Enterprise Engagement | Public | moonrust / light | PageHeader, Card, Field, Input, Select, Textarea, Button | `planned` | — | — | — |
| `template-legal-content` | Terms of Service & Licensing Policy | System | moonhalftone / dark | AppShell, Sidebar, PageHeader, Callout, Card | `planned` | — | — | — |
| `template-error-page` | 500 Internal Server Error | System | moonsmash / dark | EmptyState, Button | `planned` | — | — | — |
| `template-access-denied` | 403 Forbidden | System | moonglitch / dark | EmptyState, Callout, Button | `planned` | — | — | — |
| `template-offline-page` | Network Connection Unavailable | System | moonhalftone / dark | EmptyState, Progress, Button | `planned` | — | — | — |

---

### Verification

**Acceptance:** One row per template with status, reviewer name, and any exceptions. Status values: `planned` → `in_progress` → `reviewed` → `accepted` → `rejected`.

**Verify:** One scoped artifact, provenance/visual/accessibility test as appropriate. Report exact SHA, actual test command/outcome, reviewer state and rollback; do not claim PASS until observed.

**Rollback:** remove the ledger and restore this row to planned; remove matching TODO and ledger evidence.

---

**Evidence (2026-11-01):** Ledger created with all 43 templates pre-populated with `planned` status. Awaiting human visual review for each template across recommended skin/mode combinations.

**File scope:** `docs/qa/template-fidelity-ledger.md`. **Acceptance:** Reference, image, rights, reviewer, exceptions, explicit pending state.

**Verify:** Render screenshots at desktop/mobile, check aria/performance and record actual evidence. Report exact SHA, actual test command/outcome, reviewer state and rollback; do not claim PASS until observed.