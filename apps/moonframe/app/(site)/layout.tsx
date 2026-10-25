'use client';

import React from 'react';
import { ThemeProvider, ToastProvider } from '@moonwitness/moonframe';
import { SiteShell } from '../../components/site/SiteShell';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultSkin="classic" defaultMode="system" syncDocumentElement>
      <ToastProvider>
        <SiteShell>{children}</SiteShell>
      </ToastProvider>
    </ThemeProvider>
  );
}
