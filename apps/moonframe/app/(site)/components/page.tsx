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
import { COMPONENT_CATALOG, type ComponentCategory } from '../../../lib/catalog';

const categories: ('All' | ComponentCategory)[] = [
  'All',
  'Foundation & Layout',
  'Actions & Theme',
  'Forms & Inputs',
  'Navigation',
  'Overlays & Dialogs',
  'Feedback & Status',
  'Data & Visualization',
  'Level C Composite Blocks',
];

export default function ComponentsIndexPage() {
  const [category, setCategory] = useState<'All' | ComponentCategory>('All');
  const [search, setSearch] = useState('');

  const filtered = COMPONENT_CATALOG.filter(item => {
    const matchCategory = category === 'All' || item.category === category;
    const q = search.trim().toLowerCase();
    const matchQuery = !q ||
      item.name.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.exports.some(e => e.toLowerCase().includes(q));
    return matchCategory && matchQuery;
  });

  const totalExports = COMPONENT_CATALOG.reduce((sum, item) => sum + item.exports.length, 0);

  return (
    <div>
      <PageHeader
        eyebrow="Reusable @moonframe/ui Library"
        title="Components & Level C Composite Blocks"
        badge={`${totalExports}+ Exports`}
        description="Every primitive, form control, chart, overlay, and composite block below is exported directly from @moonframe/ui with full TypeScript definitions and SSR safety."
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: 'Components', current: true },
        ]}
        actions={
          <div style={{ minWidth: '16rem' }}>
            <SearchInput
              placeholder="Filter components or exports…"
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
      </div>

      <div className="mf-component-grid">
        {filtered.map(comp => (
          <Card key={comp.slug}>
            <CardHeader>
              <Badge variant="secondary">{comp.category}</Badge>
              <CardTitle style={{ marginTop: '0.5rem' }}>{comp.name}</CardTitle>
              <CardDescription>{comp.summary}</CardDescription>
            </CardHeader>
            <CardContent style={{ display: 'grid', gap: '0.75rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {comp.exports.map(exp => (
                  <Badge key={exp} variant="primary">{exp}</Badge>
                ))}
              </div>
              <small style={{ color: 'var(--mf-muted)' }}>
                <strong>A11y:</strong> {comp.a11y}
              </small>
            </CardContent>
            <CardFooter>
              <Button size="sm" asChild>
                <Link href={`/components/${comp.slug}`}>Live Demo &amp; Code →</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
