'use client';

import React, { useState } from 'react';
import {
  PageHeader,
  SegmentedControl,
  Badge,
} from '@moonframe/ui';
import { SKIN_CATALOG } from '../../../lib/catalog';
import { SkinCard } from '../../../components/site/SkinCard';

const territories = [
  'All Territories',
  'Subcultural & Graphic',
  'Tactile & Editorial',
  'Industrial & Structural',
  'Domain & Balanced',
] as const;

export default function SkinsCatalogPage() {
  const [territory, setTerritory] = useState<string>('All Territories');
  const [previewMode, setPreviewMode] = useState<'light' | 'dark' | 'both'>('dark');

  const filtered = territory === 'All Territories'
    ? SKIN_CATALOG
    : SKIN_CATALOG.filter(s => s.territory === territory);

  return (
    <div>
      <PageHeader
        eyebrow="15 Canonical Visual Grammars"
        title="Skin Architecture Gallery"
        badge="30 Appearances"
        description="Every Moonframe skin alters layout structure, border geometry, elevation, and typographic hierarchy — never a mere color swap."
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: '15 Skins', current: true },
        ]}
        actions={
          <SegmentedControl
            label="Preview mode"
            size="sm"
            value={previewMode}
            onValueChange={v => setPreviewMode(v as 'light' | 'dark' | 'both')}
            items={[
              { value: 'light', label: 'Light (15)' },
              { value: 'dark', label: 'Dark (15)' },
              { value: 'both', label: 'Both (30)' },
            ]}
          />
        }
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
        {territories.map(t => (
          <button
            key={t}
            type="button"
            onClick={() => setTerritory(t)}
            className="mf-button"
            data-variant={territory === t ? 'primary' : 'secondary'}
            data-size="sm"
          >
            {t}
          </button>
        ))}
        <Badge variant="secondary" style={{ marginLeft: 'auto' }}>
          Showing {previewMode === 'both' ? filtered.length * 2 : filtered.length} live instances
        </Badge>
      </div>

      <div className="mf-skin-wall-grid">
        {filtered.map(skin =>
          previewMode === 'both' ? (
            <React.Fragment key={skin.id}>
              <SkinCard skin={skin} mode="light" />
              <SkinCard skin={skin} mode="dark" />
            </React.Fragment>
          ) : (
            <SkinCard key={`${skin.id}-${previewMode}`} skin={skin} mode={previewMode} />
          )
        )}
      </div>
    </div>
  );
}
