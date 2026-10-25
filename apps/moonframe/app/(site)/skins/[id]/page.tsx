import React from 'react';
import { notFound } from 'next/navigation';
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
  DescriptionList,
  CodeBlock,
} from '@moonwitness/moonframe';
import { SKIN_CATALOG, TEMPLATE_CATALOG, getSkinById } from '../../../../lib/catalog';
import { SkinCard } from '../../../../components/site/SkinCard';

export function generateStaticParams() {
  return SKIN_CATALOG.map(skin => ({ id: skin.id }));
}

export default async function SkinDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const skin = getSkinById(id);
  if (!skin) notFound();

  const matchingTemplates = TEMPLATE_CATALOG.filter(t => t.recommendedSkin === skin.id);

  return (
    <div>
      <PageHeader
        eyebrow={skin.territory}
        title={`${skin.name} Skin Specification`}
        badge={skin.id}
        description={skin.description}
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: '15 Skins', href: '/skins' },
          { label: skin.name, current: true },
        ]}
        actions={
          <>
            <Button variant="secondary" size="sm" asChild>
              <Link href={`/lab?skin=${skin.id}&mode=dark`}>Open in Skin Lab →</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/templates">Try in Templates</Link>
            </Button>
          </>
        }
      />

      <Grid columns={2}>
        <SkinCard skin={skin} mode="light" />
        <SkinCard skin={skin} mode="dark" />
      </Grid>

      <Grid columns={2} style={{ marginTop: '1.5rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>Architectural Grammar</CardTitle>
            <CardDescription>Non-color structural rules defined in src/styles.css</CardDescription>
          </CardHeader>
          <CardContent>
            <DescriptionList
              columns={1}
              items={[
                { term: 'Canonical ID', details: skin.id },
                { term: 'Design Territory', details: skin.territory },
                { term: 'Border & Geometry', details: skin.geometry },
                { term: 'Typographic Voice', details: skin.typography },
                { term: 'Surface Signature', details: skin.surfaceSignature },
                { term: 'Recommended Verticals', details: skin.recommendedFor.join(' · ') },
              ]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next.js Activation Snippet</CardTitle>
            <CardDescription>Set {skin.name} as default in your App Router layout</CardDescription>
          </CardHeader>
          <CardContent style={{ display: 'grid', gap: '1rem' }}>
            <CodeBlock
              language="tsx"
              code={`import '@moonwitness/moonframe/styles.css';\nimport { ThemeProvider, ThemeScript } from '@moonwitness/moonframe';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="en" suppressHydrationWarning>\n      <head>\n        <ThemeScript defaultSkin="${skin.id}" defaultMode="dark" />\n      </head>\n      <body>\n        <ThemeProvider defaultSkin="${skin.id}" defaultMode="dark" syncDocumentElement>\n          {children}\n        </ThemeProvider>\n      </body>\n    </html>\n  );\n}`}
            />
            {matchingTemplates.length > 0 && (
              <div>
                <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  Templates featuring {skin.name}:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {matchingTemplates.map(t => (
                    <Button key={t.id} variant="secondary" size="sm" asChild>
                      <Link href={`/templates/${t.id}`}>{t.title} →</Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
