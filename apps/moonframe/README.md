# Moonframe Next.js 16 Showcase & Template Marketplace (`apps/moonframe`)

This is the official **Moonframe** Next.js 16 (App Router + Turbopack) application in the `pnpm` workspace. It consumes `@moonframe/ui` via `"workspace:*"` and serves as both the live development workbench (`pnpm run dev` at the repository root) and the interactive template marketplace.

## Routes

- `/` — Premium Landing Page with live 15-Skin Wall, featured templates, component highlights, and quickstart
- `/skins` & `/skins/[id]` — Interactive 15-Skin × Light/Dark Architecture Gallery (30 live appearances)
- `/components` & `/components/[slug]` — Categorized catalog and live playground for all 66+ reusable `@moonframe/ui` exports and Level C composite blocks
- `/templates` & `/templates/[id]` — 22 Wave-A production page templates with responsive Desktop / Tablet / Mobile `PreviewFrame` and copyable TSX source code
- `/preview/[id]?skin=<id>&mode=<light|dark>` — Fullscreen chrome-free template renderer
- `/docs` — Developer guide for `pnpm`, Next.js 16 App Router, `ThemeScript` SSR, `asChild` (`next/link`), and Tailwind v4
- `/lab` & `/lab/behavior` — Interactive Skin Lab workspace and behavioral/accessibility test fixture

## Commands (from repository root)

```sh
pnpm install
pnpm run dev
pnpm run build
pnpm run start
pnpm run test:browser
```
