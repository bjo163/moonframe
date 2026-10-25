'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Hero,
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  MetricGrid,
  SegmentedControl,
  CodeBlock,
  useTheme,
} from '@moonframe/ui';
import { SKIN_CATALOG, TEMPLATE_CATALOG, COMPONENT_CATALOG } from '../../lib/catalog';
import { SkinCard } from '../../components/site/SkinCard';

export default function ShowcaseHomePage() {
  const theme = useTheme();
  const [wallMode, setWallMode] = useState<'light' | 'dark'>('dark');

  const featuredTemplates = TEMPLATE_CATALOG.slice(0, 6);

  return (
    <div>
      <section className="mf-site-section">
        <Hero>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Badge variant="primary">Moonframe UI v0.1</Badge>
            <Badge variant="secondary">Next.js 16 App Router</Badge>
            <Badge variant="secondary">pnpm Workspace</Badge>
            <Badge variant="secondary">Active Skin: {theme.skin}</Badge>
          </div>
          <h1 style={{ fontSize: 'clamp(2.35rem, 5vw, 4.35rem)', lineHeight: 1.03, margin: '0 0 1rem', maxWidth: '18ch' }}>
            One React Library. Fifteen Radical Worlds.
          </h1>
          <p style={{ fontSize: '1.08rem', color: 'var(--mf-muted)', maxWidth: '64ch', margin: '0 0 1.5rem' }}>
            Build production Next.js applications with 66+ accessible components, reusable Level C composite blocks, and 22 ready-to-ship page templates — each engineered to transform across 15 distinct non-color visual grammars.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Button size="lg" asChild>
              <Link href="/templates">Explore 22 Templates →</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/components">Browse 66+ Components</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/lab">Open Interactive Skin Lab</Link>
            </Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--mf-muted)', marginRight: '0.35rem' }}>
              LIVE SITE SKIN:
            </span>
            {SKIN_CATALOG.map(s => (
              <Button
                key={s.id}
                size="sm"
                variant={theme.skin === s.id ? 'primary' : 'secondary'}
                onClick={() => theme.setSkin(s.id)}
              >
                {s.name}
              </Button>
            ))}
          </div>
        </Hero>
      </section>

      <section className="mf-site-section" aria-label="Platform capabilities">
        <MetricGrid
          columns={4}
          items={[
            { label: 'Canonical Skins', value: '15', delta: '30 Modes', detail: 'Light & Dark recipes per skin', trend: [3, 6, 9, 12, 15] },
            { label: 'Reusable Exports', value: '66+', delta: '100% Typed', detail: 'Primitives + Level C Blocks', trend: [20, 35, 46, 58, 66] },
            { label: 'Page Templates', value: '22', delta: '9 Verticals', detail: 'Live preview + copyable TSX', trend: [4, 8, 14, 18, 22] },
            { label: 'Contrast Floor', value: '4.5:1', delta: 'WCAG AA', detail: 'Verified across all 30 modes', trend: [4.5, 5.2, 6.1, 7.0, 7.4] },
          ]}
        />
      </section>

      <section className="mf-site-section" aria-labelledby="featured-templates-heading">
        <div className="mf-site-section-head">
          <div>
            <Badge variant="primary">PREMIUM TEMPLATE MARKETPLACE</Badge>
            <h2 id="featured-templates-heading">Production-Ready Next.js Page Templates</h2>
            <p>
              Every template is built exclusively from public <code>@moonframe/ui</code> exports. Inspect responsive Desktop, Tablet, and Mobile viewports or copy the complete source code.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/templates">View All {TEMPLATE_CATALOG.length} Templates →</Link>
          </Button>
        </div>

        <div className="mf-template-grid">
          {featuredTemplates.map(tpl => (
            <Card key={tpl.id}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <Badge variant="primary">{tpl.category}</Badge>
                  <Badge variant="secondary">Skin: {tpl.recommendedSkin}</Badge>
                </div>
                <CardTitle style={{ marginTop: '0.6rem' }}>{tpl.title}</CardTitle>
                <CardDescription>{tpl.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {tpl.componentsUsed.slice(0, 5).map(comp => (
                    <Badge key={comp} variant="secondary">{comp}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter style={{ justifyContent: 'space-between' }}>
                <Button size="sm" asChild>
                  <Link href={`/templates/${tpl.id}`}>Live Preview &amp; Code</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/preview/${tpl.id}?skin=${tpl.recommendedSkin}&mode=${tpl.recommendedMode}`}>
                    Fullscreen ↗
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mf-site-section" aria-labelledby="skin-wall-heading">
        <div className="mf-site-section-head">
          <div>
            <Badge variant="primary">15 ARCHITECTURAL GRAMMARS</Badge>
            <h2 id="skin-wall-heading">Live 15-Skin Wall (No Screenshots — Real Scoped Runtime)</h2>
            <p>
              Each card below runs its own isolated <code>&lt;ThemeProvider&gt;</code> instance, rendering live typography, border geometry, and shadows side by side.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <SegmentedControl
              label="Wall appearance mode"
              size="sm"
              value={wallMode}
              onValueChange={v => setWallMode(v as 'light' | 'dark')}
              items={[
                { value: 'light', label: 'Light Wall' },
                { value: 'dark', label: 'Dark Wall' },
              ]}
            />
            <Button variant="secondary" size="sm" asChild>
              <Link href="/skins">Full 30-Appearance Matrix →</Link>
            </Button>
          </div>
        </div>

        <div className="mf-skin-wall-grid">
          {SKIN_CATALOG.map(skin => (
            <SkinCard key={`${skin.id}-${wallMode}`} skin={skin} mode={wallMode} />
          ))}
        </div>
      </section>

      <section className="mf-site-section" aria-labelledby="components-teaser-heading">
        <div className="mf-site-section-head">
          <div>
            <Badge variant="primary">REUSABLE LIBRARY</Badge>
            <h2 id="components-teaser-heading">66+ Ready-to-Use Components &amp; Level C Blocks</h2>
            <p>
              From low-level accessible primitives (<code>Slot</code>, <code>Dialog</code>, <code>Tabs</code>, <code>OTPInput</code>) to complete composite blocks (<code>PageHeader</code>, <code>MetricGrid</code>, <code>AuthCard</code>, <code>PricingCard</code>, <code>DataTable</code>).
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/components">Explore All {COMPONENT_CATALOG.length} Suites →</Link>
          </Button>
        </div>

        <div className="mf-component-grid">
          {COMPONENT_CATALOG.slice(0, 6).map(comp => (
            <Card key={comp.slug}>
              <CardHeader>
                <Badge variant="secondary">{comp.category}</Badge>
                <CardTitle style={{ marginTop: '0.5rem' }}>{comp.name}</CardTitle>
                <CardDescription>{comp.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {comp.exports.slice(0, 6).map(exp => (
                    <Badge key={exp} variant="primary">{exp}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm" asChild>
                  <Link href={`/components/${comp.slug}`}>Interactive Demo &amp; Props →</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mf-site-section" aria-labelledby="quickstart-heading">
        <Card>
          <CardHeader>
            <Badge variant="primary">PNPM WORKSPACE &amp; NEXT.JS 16</Badge>
            <CardTitle id="quickstart-heading" style={{ marginTop: '0.5rem' }}>
              Start Developing in Seconds with pnpm
            </CardTitle>
            <CardDescription>
              Running <code>pnpm run dev</code> at the repository root launches this Next.js 16 showcase app with live workspace linking to <code>@moonframe/ui</code>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              language="bash"
              code={`# 1. Install workspace dependencies with pnpm\npnpm install\n\n# 2. Launch the Moonframe Next.js 16 showcase app\npnpm run dev\n\n# 3. Or pack @moonframe/ui as a portable tarball for external Next.js apps\npnpm run pack:local`}
            />
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/docs">Read Full Next.js Integration Guide →</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
