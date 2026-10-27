'use client';

import React from 'react';
import Link from 'next/link';
import {
  ThemeProvider,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
  useTheme,
} from '@moonwitness/moonframe';
import type { SkinCatalogEntry } from '../../lib/catalog';

export function SkinCard({
  skin,
  mode = 'dark',
  showActions = true,
}: {
  skin: SkinCatalogEntry;
  mode?: 'light' | 'dark';
  showActions?: boolean;
}) {
  const globalTheme = useTheme();
  const [previewMode, setPreviewMode] = React.useState<'light' | 'dark'>(mode);
  const isCurrent = globalTheme.skin === skin.id;

  return (
    <div className="mf-skin-showcase-item">
      <ThemeProvider key={`${skin.id}-${previewMode}`} defaultSkin={skin.id} defaultMode={previewMode} storageKey={null}>
        <Card className="mf-skin-preview-card">
          <CardHeader>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
              <Badge variant="primary">{skin.territory}</Badge>
              <span style={{ fontSize: '0.75rem', color: 'var(--mf-muted)', fontFamily: 'ui-monospace, monospace' }}>
                {skin.id} · {previewMode}
              </span>
            </div>
            <CardTitle style={{ marginTop: '0.5rem' }}>{skin.name}</CardTitle>
            <CardDescription>{skin.description}</CardDescription>
          </CardHeader>
          <CardContent style={{ display: 'grid', gap: '0.75rem' }}>
            <section aria-label={`${skin.name} dashboard sample`} style={{ display: 'grid', gap: '0.55rem', border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)', padding: '0.75rem', background: 'var(--mf-surface)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                <strong style={{ fontSize: '0.8rem' }}>Workspace overview</strong>
                <Badge variant="secondary">Live preview</Badge>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.45rem' }}>
                <div style={{ border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)', padding: '0.5rem' }}>
                  <div style={{ color: 'var(--mf-muted)', fontSize: '0.68rem' }}>Open tasks</div>
                  <strong style={{ fontSize: '1rem' }}>12</strong>
                </div>
                <div style={{ border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)', padding: '0.5rem' }}>
                  <div style={{ color: 'var(--mf-muted)', fontSize: '0.68rem' }}>Completed</div>
                  <strong style={{ fontSize: '1rem' }}>76%</strong>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.72rem' }}>
                <span>Quarterly planning</span>
                <Badge variant="success">On track</Badge>
              </div>
            </section>
            <div style={{ fontSize: '0.78rem', color: 'var(--mf-muted)' }}>
              <strong>Geometry:</strong> {skin.geometry}
            </div>
          </CardContent>
          <CardFooter style={{ justifyContent: 'flex-start', gap: '0.5rem', paddingTop: 0 }}>
            <span id={`skin-preview-mode-${skin.id}`} style={{ fontSize: '0.75rem', color: 'var(--mf-muted)' }}>Preview mode</span>
            <Button size="sm" variant={previewMode === 'light' ? 'primary' : 'secondary'} aria-pressed={previewMode === 'light'} aria-labelledby={`skin-preview-mode-${skin.id}`} onClick={() => setPreviewMode('light')}>Light</Button>
            <Button size="sm" variant={previewMode === 'dark' ? 'primary' : 'secondary'} aria-pressed={previewMode === 'dark'} aria-labelledby={`skin-preview-mode-${skin.id}`} onClick={() => setPreviewMode('dark')}>Dark</Button>
          </CardFooter>
          {showActions && (
            <CardFooter style={{ justifyContent: 'space-between' }}>
              <Button
                variant={isCurrent ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => globalTheme.setSkin(skin.id)}
              >
                {isCurrent ? 'Active on Site' : `Apply ${skin.name}`}
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/skins/${skin.id}`}>Inspect Spec →</Link>
              </Button>
            </CardFooter>
          )}
        </Card>
      </ThemeProvider>
    </div>
  );
}
