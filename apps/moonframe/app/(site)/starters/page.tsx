import React from 'react';
import Link from 'next/link';
import {
  PageHeader,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from '@moonframe/ui';
import { STARTER_CATALOG, TEMPLATE_CATALOG } from '../../../lib/catalog';

export default function StartersIndexPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Level E Multi-Route Applications"
        title="Production Starter Applications"
        badge="8 Starters · 43 Templates"
        description="Pre-composed, multi-page application flows connecting dashboards, auth journeys, governance workflows, and domain flagships. Each starter can be scaffolded directly with the Moonframe CLI."
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: 'Starters', current: true },
        ]}
      />

      <div className="mf-template-grid">
        {STARTER_CATALOG.map(starter => {
          return (
            <Card key={starter.id}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <Badge variant="primary">{starter.level} Starter</Badge>
                  <Badge variant="secondary">{starter.recommendedSkin} · {starter.recommendedMode}</Badge>
                </div>
                <CardTitle style={{ marginTop: '0.6rem' }}>{starter.title}</CardTitle>
                <CardDescription>{starter.purpose}</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--mf-muted)' }}>
                  <strong>{starter.pageRefs.length} Routes:</strong>
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {starter.pageRefs.map(pageId => {
                    const tpl = TEMPLATE_CATALOG.find(t => t.id === pageId);
                    return (
                      <Badge key={pageId} variant="secondary">
                        {tpl ? tpl.title.split(' ')[0] : pageId}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter style={{ justifyContent: 'space-between' }}>
                <Button size="sm" asChild>
                  <Link href={`/starters/${starter.id}`}>Launch Multi-Route App →</Link>
                </Button>
                <code style={{ fontSize: '0.75rem', color: 'var(--mf-muted)' }}>
                  pnpm run cli add {starter.id}
                </code>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
