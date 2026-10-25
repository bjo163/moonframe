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
  Progress,
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
  const isCurrent = globalTheme.skin === skin.id;

  return (
    <div className="mf-skin-showcase-item">
      <ThemeProvider defaultSkin={skin.id} defaultMode={mode} storageKey={null}>
        <Card className="mf-skin-preview-card">
          <CardHeader>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
              <Badge variant="primary">{skin.territory}</Badge>
              <span style={{ fontSize: '0.75rem', color: 'var(--mf-muted)', fontFamily: 'ui-monospace, monospace' }}>
                {skin.id} · {mode}
              </span>
            </div>
            <CardTitle style={{ marginTop: '0.5rem' }}>{skin.name}</CardTitle>
            <CardDescription>{skin.description}</CardDescription>
          </CardHeader>
          <CardContent style={{ display: 'grid', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button size="sm">Primary</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Badge>Token Surface</Badge>
            </div>
            <Progress value={76} label={`${skin.name} sample metric`} />
            <div style={{ fontSize: '0.78rem', color: 'var(--mf-muted)' }}>
              <strong>Geometry:</strong> {skin.geometry}
            </div>
          </CardContent>
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
