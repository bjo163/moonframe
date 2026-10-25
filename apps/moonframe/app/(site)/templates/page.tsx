'use client';

import React, { useState } from 'react';
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
  SearchInput,
} from '@moonframe/ui';
import { TEMPLATE_CATALOG, type TemplateCategory } from '../../../lib/catalog';

const categories: ('All' | TemplateCategory)[] = [
  'All',
  'Dashboard',
  'Data',
  'Auth',
  'Settings',
  'Billing',
  'Workspace',
  'Domain',
  'Public',
  'System',
];

export default function TemplatesMarketplacePage() {
  const [category, setCategory] = useState<'All' | TemplateCategory>('All');
  const [search, setSearch] = useState('');

  const filtered = TEMPLATE_CATALOG.filter(tpl => {
    const matchCategory = category === 'All' || tpl.category === category;
    const q = search.trim().toLowerCase();
    const matchQuery = !q ||
      tpl.title.toLowerCase().includes(q) ||
      tpl.id.toLowerCase().includes(q) ||
      tpl.summary.toLowerCase().includes(q) ||
      tpl.recommendedSkin.toLowerCase().includes(q);
    return matchCategory && matchQuery;
  });

  return (
    <div>
      <PageHeader
        eyebrow="Premium Template Marketplace"
        title="22 Production-Ready Next.js Page Templates"
        badge="Wave A · 22 Templates"
        description="Every template is built exclusively from public @moonframe/ui components and Level C composite blocks. Open any template to test responsive viewports, switch across all 15 skins, or copy the TSX code."
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: 'Templates', current: true },
        ]}
        actions={
          <div style={{ minWidth: '16rem' }}>
            <SearchInput
              placeholder="Search templates or skins…"
              value={search}
              onValueChange={setSearch}
              shortcut="⌘F"
            />
          </div>
        }
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
        {categories.map(cat => (
          <Button
            key={cat}
            size="sm"
            variant={category === cat ? 'primary' : 'secondary'}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
        <Badge variant="secondary" style={{ marginLeft: 'auto' }}>
          {filtered.length} templates
        </Badge>
      </div>

      <div className="mf-template-grid">
        {filtered.map(tpl => (
          <Card key={tpl.id}>
            <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                <Badge variant="primary">{tpl.category}</Badge>
                <Badge variant="secondary">{tpl.recommendedSkin} · {tpl.recommendedMode}</Badge>
              </div>
              <CardTitle style={{ marginTop: '0.6rem' }}>{tpl.title}</CardTitle>
              <CardDescription>{tpl.summary}</CardDescription>
            </CardHeader>
            <CardContent style={{ display: 'grid', gap: '0.6rem' }}>
              <code style={{ fontSize: '0.75rem', color: 'var(--mf-muted)' }}>{tpl.id}</code>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {tpl.componentsUsed.map(comp => (
                  <Badge key={comp} variant="secondary">{comp}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter style={{ justifyContent: 'space-between' }}>
              <Button size="sm" asChild>
                <Link href={`/templates/${tpl.id}`}>Preview &amp; Code →</Link>
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
    </div>
  );
}
