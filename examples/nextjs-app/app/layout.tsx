import type { ReactNode } from 'react';
import { ThemeProvider, ThemeScript, ToastProvider } from '@moonframe/ui';
import '@moonframe/ui/styles.css';

export const metadata = {
  title: 'Moonframe Next.js Consumer Example',
  description: 'Verified Next.js App Router application powered by @moonframe/ui with 15 skins and SSR.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript defaultSkin="classic" defaultMode="system" />
      </head>
      <body>
        <ThemeProvider defaultSkin="classic" defaultMode="system" syncDocumentElement>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
