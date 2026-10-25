import React from 'react';
import '@moonwitness/moonframe/styles.css';
import './site.css';
import { ThemeScript } from '@moonwitness/moonframe';

export const metadata = {
  title: 'Moonframe — 15-Skin React & Next.js UI System & Template Showcase',
  description: 'Premium 15-skin React 19 & Next.js 16 component library, 66+ reusable primitives & Level C composite blocks, and 22 production page templates.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript defaultSkin="classic" defaultMode="system" />
      </head>
      <body>{children}</body>
    </html>
  );
}
