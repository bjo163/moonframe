# Moonframe Next.js Consumer Example

This is a working example application demonstrating how to consume `@moonframe/ui` inside a **Next.js 16 (App Router)** project with:

- Synchronous pre-paint `<ThemeScript />` to prevent Flash of Wrong Theme (FOUC).
- Scoped `<ThemeProvider syncDocumentElement>` with live theme switching across all 15 skins in Light and Dark appearances.
- Server-side rendering (SSR) and React 19 Server Components.
- Next.js `<Link>` navigation using polymorphic `asChild` on `<NavItem>` and `<Button>`.
- Interactive components including `<DataTable>`, `<StatCard>`, `<Field>`, `<RadioGroup>`, and `<ToastProvider>`.

## Running the Example

From this directory (`examples/nextjs-app`):

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live dashboard.

## Production Build

```bash
npm run build
npm run start
```
