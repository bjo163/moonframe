# Using Moonframe

The local runtime implements all 15 skin IDs in light and dark, **66+ shared React components and Level C composite blocks**, Next.js SSR/App Router theme helpers, an optional Tailwind CSS v4 bridge, and the **`moonframe` Next.js 16 Showcase & Template Marketplace** (`apps/moonframe`) with **22 Wave-A page templates**. Use Node.js 24.22.1 LTS from `.nvmrc` for repository scripts; consumer apps support Node `>=22.0.0` and React `^19.0.0`.

## Run the `moonframe` Showcase & Template Marketplace

```sh
pnpm install
pnpm run dev
```

Open `http://localhost:3000`. Running `pnpm run dev` at the repository root starts the `apps/moonframe` Next.js 16 application via pnpm workspaces (`"@moonframe/ui": "workspace:*"`):
- **`/`** — Landing page, live 15-skin interactive wall, featured templates, and quickstart
- **`/skins` & `/skins/[id]`** — 15-skin gallery and deep-dive non-color visual grammar specs
- **`/components` & `/components/[slug]`** — Interactive playground for all 66+ components & composite blocks
- **`/templates` & `/templates/[id]`** — 22 Wave-A production page templates with responsive live preview (`Desktop` / `Tablet` / `Mobile`), Fullscreen mode (`/preview/[id]`), and copyable TSX source code
- **`/lab` & `/lab/behavior`** — Deterministic 15-skin comparison lab and keyboard/ARIA behavior test harness
- **`/docs`** — Complete Next.js App Router, SSR anti-FOUC `ThemeScript`, Tailwind v4 bridge, and API guide

`pnpm run build` compiles the production Next.js 16 showcase (`apps/moonframe/.next`); `pnpm run start` serves the production build locally.

## Install in a Next.js or React app

Inside this monorepo, workspace apps consume `"@moonframe/ui": "workspace:*"`. For an external Next.js (15/16) or React 19 project, run `pnpm run pack:local` (or `pnpm pack`) at the repository root and install the resulting local tarball:

```sh
pnpm add /path/to/moonframe-ui-0.1.0.tgz
```

### Next.js App Router (`app/layout.tsx`)

Use `ThemeScript` + `ThemeProvider` (with `syncDocumentElement`) in your root layout so persisted user preferences (`moonframe:theme`) and OS dark/reduced-motion media queries resolve synchronously before first paint without Flash of Wrong Theme (FOUC):

```tsx
// app/layout.tsx
import type { ReactNode } from 'react';
import { ThemeProvider, ThemeScript, ToastProvider } from '@moonframe/ui';
import '@moonframe/ui/styles.css';
// Optional if your Next.js app uses Tailwind CSS v4:
// import '@moonframe/ui/tailwind.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript defaultSkin="classic" defaultMode="system" />
      </head>
      <body>
        <ThemeProvider defaultSkin="classic" defaultMode="system" syncDocumentElement>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Using Next.js `<Link>` with `asChild`

Interactive components (`Button`, `NavItem`, `Badge`, `BreadcrumbLink`) support `asChild` (`Slot`) so you can wrap `next/link` without creating invalid nested `<button><a>` markup:

```tsx
'use client';

import Link from 'next/link';
import {
  AppShell,
  Sidebar,
  Main,
  Header,
  Nav,
  NavItem,
  SkinSelector,
  ModeSelector,
  Button,
  DataTable,
} from '@moonframe/ui';

export default function WorkspacePage() {
  return (
    <AppShell>
      <Sidebar>
        <Nav aria-label="Workspace">
          <NavItem asChild active>
            <Link href="/dashboard">Overview</Link>
          </NavItem>
          <NavItem asChild>
            <Link href="/projects">Projects</Link>
          </NavItem>
        </Nav>
        <SkinSelector label="Theme skin" />
        <ModeSelector variant="segmented" />
      </Sidebar>
      <Main>
        <Header>
          <h1>Dashboard</h1>
          <Button asChild variant="secondary">
            <Link href="/projects/new">New project</Link>
          </Button>
        </Header>
        <DataTable
          searchable
          caption="Active projects"
          columns={[
            { key: 'name', header: 'Project', sortable: true },
            { key: 'status', header: 'Status' },
          ]}
          data={[
            { id: '1', name: 'Orbit UI', status: 'In progress' },
            { id: '2', name: 'Lunar API', status: 'Completed' },
          ]}
        />
      </Main>
    </AppShell>
  );
}
```

### Subpath exports

- `@moonframe/ui` — Full component library, layout primitives, `Slot`, `DataTable`, and theme runtime
- `@moonframe/ui/theme` — `ThemeProvider`, `ThemeScript`, `getThemeInitScript`, `useTheme`, `resolveTheme`, `normalizePreferences`, `getThemeAttributes`
- `@moonframe/ui/skins` — Pure `skins` catalog and `skinIds` array (safe in Server Components, Edge middleware, and Node scripts)
- `@moonframe/ui/styles.css` — Self-contained stylesheet for all 15 skins in Light and Dark
- `@moonframe/ui/tailwind.css` — Optional Tailwind CSS v4 `@theme inline` bridge mapping `--color-mf-*`, `--radius-mf`, `--shadow-mf`, and `--font-mf` to Moonframe's live CSS variables

## Components and styling (66+ Exports)

Available exports include:
- **Theme & Polymorphism:** `ThemeProvider`, `ThemeScript`, `getThemeInitScript`, `useTheme`, `SkinSelector`, `ModeSelector`, `Slot`
- **Layout & Shell:** `AppShell`, `Sidebar`, `Main`, `Header`, `Nav`, `NavItem`, `Hero`, `Grid`, `StatCard`
- **Actions & Form Inputs:** `Button`, `Input`, `Textarea`, `Label`, `Select`, `Checkbox`, `Switch`, `RadioGroup`, `Field`, `FieldDescription`, `FieldError`, `OTPInput`, `PasswordField`, `SearchInput`, `Slider`, `TagInput`, `SegmentedControl`, `FileDropzone`
- **Display, Charts & Data:** `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `Badge`, `Avatar`, `AvatarGroup`, `Progress`, `Separator`, `Skeleton`, `EmptyState`, `Kbd`, `CodeBlock`, `DescriptionList`, `DescriptionTerm`, `DescriptionDetails`, `Stepper`, `Timeline`, `BarChart`, `Sparkline`, `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`, `DataTable`
- **Navigation, Overlays & Feedback:** `Tabs`, `Accordion`, `Dialog`, `Drawer`, `Popover`, `DropdownMenu`, `Tooltip`, `CommandPalette`, `Breadcrumb`, `BreadcrumbItem`, `BreadcrumbLink`, `Pagination`, `Alert`, `Callout`, `Banner`, `ToastProvider`, `useToast`
- **Level C Reusable Composite Blocks:** `PageHeader`, `MetricGrid`, `AuthCard`, `PricingCard`, `SettingsSection`, `ActivityFeed`

See the [Implementation Status & Evidence Report](implementation-status.md) for the full 66+ component inventory, 22 Wave-A page templates, and milestone verification summary.

Dialog and Drawer use the browser's native modal top layer, keyboard containment and Escape handling. Tabs use arrow keys, Home/End and a single tab stop. Accordion uses native disclosures. `Field` automatically wires `id`, `aria-describedby`, and `aria-invalid` onto its child control.

Skin-aware layout classes include `mf-shell`, `mf-sidebar`, `mf-main`, `mf-header`, `mf-nav`, `mf-nav-item`, `mf-grid`, `mf-stat`, and `mf-hero`. For custom components consume CSS properties such as `--mf-bg`, `--mf-surface`, `--mf-text`, `--mf-muted`, `--mf-accent`, `--mf-accent-text`, `--mf-border`, `--mf-radius` and `--mf-shadow`. Shared components retain their semantics when the skin changes.

## Delivery boundary

This package is private and usable through a local tarball; it has not been published to npm. Native HTML controls supply the behavior layer. The broader provider comparison remains research for advanced widgets, and no third-party primitive provider is locked in by these exports. Fonts use local system stacks; CSS decorations require no downloaded image or font assets.

The earlier design contracts remain a record of the broader planned catalog, including premium templates, advanced data adapters, media packs and 105 formal human pair reviews. Those review and future-feature records are not automatically completed by this runtime. Automated runtime/browser checks and screenshots establish the coverage described in the delivery report, not blanket accessibility certification.
