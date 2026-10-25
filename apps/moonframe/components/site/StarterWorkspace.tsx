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
import type { StarterCatalogEntry, TemplateCatalogEntry } from '../../lib/catalog';

export function StarterWorkspace({
  starter,
  templates,
}: {
  starter: StarterCatalogEntry;
  templates: TemplateCatalogEntry[];
}) {
  const [tab, setTab] = useState<'preview' | 'manifest'>('preview');
  const [activePageId, setActivePageId] = useState<string>(starter.pageRefs[0]);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [skin, setSkin] = useState<SkinId>(starter.recommendedSkin);
  const [mode, setMode] = useState<'light' | 'dark'>(starter.recommendedMode);
  const [copied, setCopied] = useState(false);

  const previewUrl = `/preview/${activePageId}?skin=${skin}&mode=${mode}`;
  const iframeWidth = viewport === 'desktop' ? '100%' : viewport === 'tablet' ? '768px' : '375px';
  const cliCommand = `pnpm run cli add ${starter.id} --skin ${skin}`;

  async function handleCopyCli() {
    try {
      await navigator.clipboard.writeText(cliCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mf-preview-frame-root">
      {/* Route Switcher Tab Bar */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', padding: '0.75rem 1rem', background: 'var(--mf-surface)', borderBottom: '1px solid var(--mf-border)' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, alignSelf: 'center', marginRight: '0.5rem', color: 'var(--mf-muted)' }}>
          ROUTES ({starter.pageRefs.length}):
        </span>
        {starter.pageRefs.map(pageId => {
          const tpl = templates.find(t => t.id === pageId);
          const active = activePageId === pageId;
          return (
            <Button
              key={pageId}
              size="sm"
              variant={active ? 'primary' : 'secondary'}
              onClick={() => setActivePageId(pageId)}
              style={{ fontSize: '0.78rem', height: '1.85rem' }}
            >
              {tpl ? tpl.title.split(' ')[0] : pageId.replace('template-', '')}
            </Button>
          );
        })}
      </div>

      {/* Workspace Toolbar */}
      <div className="mf-preview-toolbar">
        <div className="mf-preview-toolbar-group">
          <SegmentedControl
            label="View mode"
            size="sm"
            value={tab}
            onValueChange={v => setTab(v as 'preview' | 'manifest')}
            items={[
              { value: 'preview', label: 'Multi-Route App' },
              { value: 'manifest', label: 'Starter Manifest & CLI' },
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

          <Button size="sm" variant="secondary" onClick={handleCopyCli}>
            {copied ? 'Copied CLI!' : 'Copy CLI Install'}
          </Button>

          <Button size="sm" variant="secondary" asChild>
            <Link href={previewUrl} target="_blank" rel="noreferrer">
              Fullscreen ↗
            </Link>
          </Button>
        </div>
      </div>

      {/* Stage */}
      {tab === 'preview' ? (
        <div className="mf-preview-stage">
          <iframe
            title={`${starter.title} - ${activePageId}`}
            src={previewUrl}
            className="mf-preview-iframe"
            style={{ width: iframeWidth }}
          />
        </div>
      ) : (
        <div className="mf-preview-code-stage" style={{ display: 'grid', gap: '1.25rem' }}>
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Scaffold Entire Starter Pack</h3>
            <p style={{ margin: '0 0 0.75rem 0', color: 'var(--mf-muted)', fontSize: '0.9rem' }}>
              Run this command in your Next.js project to generate the App Router root layout and all {starter.pageRefs.length} route files with @moonframe/ui components:
            </p>
            <CodeBlock language="bash" code={cliCommand} />
          </div>

          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Integration Seams (Consumer Owned)</h4>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {starter.integrationSeams.map(seam => (
                <Badge key={seam} variant="secondary">{seam}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Composed Routes ({starter.pageRefs.length} Pages)</h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {starter.pageRefs.map(pageId => {
                const tpl = templates.find(t => t.id === pageId);
                return (
                  <div key={pageId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: 'var(--mf-surface)', border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)' }}>
                    <span><strong>{tpl?.title || pageId}</strong> (<code>/{pageId.replace('template-', '')}</code>)</span>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={`/templates/${pageId}`}>View Template Code →</Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
