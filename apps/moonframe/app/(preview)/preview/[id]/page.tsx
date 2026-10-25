'use client';

import React, { use } from 'react';
import { useSearchParams } from 'next/navigation';
import { ThemeProvider, ToastProvider, skins, type SkinId, type Mode } from '@moonwitness/moonframe';
import { getTemplateById } from '../../../../lib/catalog';
import { TemplateRenderer } from '../../../../templates';

function PreviewInner({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const tpl = getTemplateById(id);
  const qSkin = searchParams.get('skin') as SkinId | null;
  const qMode = searchParams.get('mode') as Mode | null;

  const activeSkin: SkinId = qSkin && skins.some(s => s.id === qSkin)
    ? qSkin
    : (tpl?.recommendedSkin ?? 'classic');
  const activeMode: Mode = qMode && ['light', 'dark', 'system'].includes(qMode)
    ? qMode
    : (tpl?.recommendedMode ?? 'light');

  return (
    <ThemeProvider defaultSkin={activeSkin} defaultMode={activeMode} storageKey={null}>
      <ToastProvider>
        <TemplateRenderer id={id} />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default function PreviewTemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <React.Suspense fallback={<div style={{ padding: '2rem' }}>Loading preview…</div>}>
      <PreviewInner id={id} />
    </React.Suspense>
  );
}
