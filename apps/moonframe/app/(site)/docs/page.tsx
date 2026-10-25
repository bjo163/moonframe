import React from 'react';
import Link from 'next/link';
import {
  PageHeader,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Badge,
  Grid,
  Callout,
  CodeBlock,
  DescriptionList,
} from '@moonframe/ui';
import { InteractivePlayground } from '../../../components/site/InteractivePlayground';

export default function DocsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Developer Documentation"
        title="Next.js 16 & pnpm Integration Guide"
        badge="Node.js 24.22.1 LTS"
        description="Everything you need to run the Moonframe workspace with pnpm, integrate @moonframe/ui into Next.js App Router, scaffold multi-route starters with the CLI, and compose pages with 15 skins and 70+ reusable exports."
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: 'Documentation', current: true },
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button size="sm" variant="secondary" asChild>
              <Link href="/starters">Browse 8 Starters →</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/components">Browse Component API →</Link>
            </Button>
          </div>
        }
      />

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <Callout title="Official Package Manager: pnpm" variant="primary">
          Moonframe uses <strong>pnpm workspaces</strong> (<code>pnpm-workspace.yaml</code>). Running <code>pnpm run dev</code> at the root launches the Next.js 16 showcase application at <code>apps/moonframe</code> with live symlinked updates from <code>@moonframe/ui</code>.
        </Callout>

        <Grid columns={2}>
          <Card>
            <CardHeader>
              <Badge variant="primary">1. Workspace Development</Badge>
              <CardTitle style={{ marginTop: '0.5rem' }}>Run Moonframe Locally with pnpm</CardTitle>
              <CardDescription>All root scripts use pnpm and delegate to apps/moonframe</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`# Install workspace dependencies\npnpm install\n\n# Start the Next.js 16 Moonframe showcase app\npnpm run dev\n\n# Run contract validation, unit tests, typecheck & build\npnpm run check\n\n# Run Playwright browser suite across all 15 skins\npnpm run test:browser`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="primary">2. External Next.js Consumer</Badge>
              <CardTitle style={{ marginTop: '0.5rem' }}>Install in Another Next.js Project</CardTitle>
              <CardDescription>Pack @moonframe/ui as a clean tarball containing only src/</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`# Generate moonframe-ui-0.1.0.tgz in the repo root\npnpm run pack:local\n\n# In your target Next.js project:\npnpm add /path/to/moonframe-ui-0.1.0.tgz`}
              />
            </CardContent>
          </Card>
        </Grid>

        <Card>
          <CardHeader>
            <Badge variant="primary">3. Zero-FOUC Next.js App Router Setup</Badge>
            <CardTitle style={{ marginTop: '0.5rem' }}>Root Layout with ThemeScript &amp; ThemeProvider</CardTitle>
            <CardDescription>
              Place <code>&lt;ThemeScript /&gt;</code> in <code>&lt;head&gt;</code> and enable <code>syncDocumentElement</code> on <code>&lt;ThemeProvider&gt;</code> so <code>&lt;html&gt;</code> receives <code>data-skin</code> and <code>data-mode</code> before first paint.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              language="tsx"
              code={`// app/layout.tsx\nimport '@moonframe/ui/styles.css';\nimport { ThemeProvider, ThemeScript, ToastProvider } from '@moonframe/ui';\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en" suppressHydrationWarning>\n      <head>\n        <ThemeScript defaultSkin="classic" defaultMode="system" />\n      </head>\n      <body>\n        <ThemeProvider defaultSkin="classic" defaultMode="system" syncDocumentElement>\n          <ToastProvider>{children}</ToastProvider>\n        </ThemeProvider>\n      </body>\n    </html>\n  );\n}`}
            />
          </CardContent>
        </Card>

        <Grid columns={2}>
          <Card>
            <CardHeader>
              <Badge variant="secondary">4. Next.js Link Composition</Badge>
              <CardTitle style={{ marginTop: '0.5rem' }}>Polymorphic Slot (asChild)</CardTitle>
              <CardDescription>Render Button, Badge, NavItem, or BreadcrumbLink as a Next.js Link without nested anchors</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import Link from 'next/link';\nimport { Button, NavItem } from '@moonframe/ui';\n\nexport function HeaderActions() {\n  return (\n    <>\n      <Button asChild variant="primary">\n        <Link href="/templates">Explore Templates</Link>\n      </Button>\n      <NavItem asChild active>\n        <Link href="/skins">15 Skins</Link>\n      </NavItem>\n    </>\n  );\n}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="secondary">5. Tailwind CSS v4 Bridge</Badge>
              <CardTitle style={{ marginTop: '0.5rem' }}>Optional @moonframe/ui/tailwind.css</CardTitle>
              <CardDescription>Maps --mf-* runtime tokens into Tailwind v4 @theme inline utilities</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="css"
                code={`@import "tailwindcss";\n@import "@moonframe/ui/styles.css";\n@import "@moonframe/ui/tailwind.css";\n\n/* Utilities like bg-mf-surface, text-mf-text, border-mf-border,\n * and dark:* variants now follow [data-skin] and [data-mode="dark"]! */`}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid columns={2}>
          <Card>
            <CardHeader>
              <Badge variant="secondary">6. Moonframe CLI Scaffolder</Badge>
              <CardTitle style={{ marginTop: '0.5rem' }}>Zero-Dependency Code Generation</CardTitle>
              <CardDescription>Scaffold 43 individual page templates or 8 multi-route starter apps</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`# List all 15 skins, 43 templates, and 8 starters\npnpm run cli list\n\n# Inspect starter composition & connected routes\npnpm run cli info starter-admin-workspace\n\n# Scaffold starter layout & routes into your Next.js app\npnpm run cli add starter-admin-workspace --skin moonledger`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="secondary">7. M10 Vectors &amp; Opt-In WebAudio SFX</Badge>
              <CardTitle style={{ marginTop: '0.5rem' }}>Deterministic Vectors &amp; Synth Audio</CardTitle>
              <CardDescription>15 geometric brand marks and zero-dependency synthesizer</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`import { SkinBrandMark, SkinArtwork, SFXProvider, useSFX } from '@moonframe/ui';\n\n// Brand mark adapting to active skin & currentColor\n<SkinBrandMark size={32} />\n\n// Opt-in audio event trigger (muted by default)\nconst { play, grantConsent } = useSFX();\nplay('quest-reward'); // 1000ms rate limit, 2000ms dedupe`}
              />
            </CardContent>
          </Card>
        </Grid>

        <InteractivePlayground />

        <Card>
          <CardHeader>
            <CardTitle>Exported Subpaths &amp; Package Architecture</CardTitle>
            <CardDescription>Verified by scripts/validate-contracts.mjs</CardDescription>
          </CardHeader>
          <CardContent>
            <DescriptionList
              columns={2}
              items={[
                { term: '@moonframe/ui', details: '70+ components, Level C blocks, SkinBrandMark, SkinArtwork, SFXProvider, useSFX, theme, skins' },
                { term: '@moonframe/ui/styles.css', details: 'Complete CSS recipes for all 15 skins × Light/Dark + components + vector styling' },
                { term: '@moonframe/ui/tailwind.css', details: 'Optional Tailwind v4 @theme inline + @custom-variant dark bridge' },
                { term: '@moonframe/ui/theme', details: 'ThemeProvider, ThemeScript, useTheme, resolveTheme, normalizePreferences' },
                { term: '@moonframe/ui/skins', details: 'Canonical 15 skins array and skinIds list' },
                { term: 'pnpm run cli', details: 'Zero-dependency code scaffolder for 43 templates and 8 Level E starter applications' },
                { term: 'pnpm run tokens', details: 'Deterministic DTCG token subset generator & CSS bridge verifier' },
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
