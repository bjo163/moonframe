'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Button,
  Badge,
  Select,
  SegmentedControl,
  CodeBlock,
  skins,
  type SkinId,
} from '@moonframe/ui';
import type { TemplateCatalogEntry } from '../../lib/catalog';

export function PreviewFrame({ template }: { template: TemplateCatalogEntry }) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [skin, setSkin] = useState<SkinId>(template.recommendedSkin);
  const [mode, setMode] = useState<'light' | 'dark'>(template.recommendedMode);
  const [copied, setCopied] = useState(false);

  const previewUrl = `/preview/${template.id}?skin=${skin}&mode=${mode}`;
  const iframeWidth = viewport === 'desktop' ? '100%' : viewport === 'tablet' ? '768px' : '375px';

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(template.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mf-preview-frame-root">
      <div className="mf-preview-toolbar">
        <div className="mf-preview-toolbar-group">
          <SegmentedControl
            label="View mode"
            size="sm"
            value={tab}
            onValueChange={v => setTab(v as 'preview' | 'code')}
            items={[
              { value: 'preview', label: 'Live Preview' },
              { value: 'code', label: 'Source Code' },
            ]}
          />
          {tab === 'preview' && (
            <SegmentedControl
              label="Viewport size"
              size="sm"
              value={viewport}
              onValueChange={v => setViewport(v as 'desktop' | 'tablet' | 'mobile')}
              items={[
                { value: 'desktop', label: 'Desktop' },
                { value: 'tablet', label: 'Tablet (768px)' },
                { value: 'mobile', label: 'Mobile (375px)' },
              ]}
            />
          )}
        </div>

        <div className="mf-preview-toolbar-group">
          <Select
            aria-label="Preview skin"
            value={skin}
            onChange={e => setSkin(e.currentTarget.value as SkinId)}
            style={{ width: 'auto', minHeight: '2.1rem', padding: '0.25rem 1.75rem 0.25rem 0.6rem', fontSize: '0.85rem' }}
          >
            {skins.map(s => (
              <option key={s.id} value={s.id}>Skin: {s.name}</option>
            ))}
          </Select>

          <SegmentedControl
            label="Preview appearance"
            size="sm"
            value={mode}
            onValueChange={v => setMode(v as 'light' | 'dark')}
            items={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
            ]}
          />

          {tab === 'code' ? (
            <Button size="sm" variant="secondary" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy Code'}
            </Button>
          ) : (
            <Button size="sm" variant="secondary" asChild>
              <Link href={previewUrl} target="_blank" rel="noreferrer">
                Fullscreen ↗
              </Link>
            </Button>
          )}
        </div>
      </div>

      {tab === 'preview' ? (
        <div className="mf-preview-stage">
          <iframe
            title={`${template.title} live preview`}
            src={previewUrl}
            className="mf-preview-iframe"
            style={{ width: iframeWidth }}
          />
        </div>
      ) : (
        <div className="mf-preview-code-stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {template.componentsUsed.map(comp => (
                <Badge key={comp} variant="secondary">{comp}</Badge>
              ))}
            </div>
            <Badge variant="primary">apps/moonframe/templates/{template.id}.tsx</Badge>
          </div>
          <CodeBlock language="tsx" code={template.code} />
        </div>
      )}
    </div>
  );
}
