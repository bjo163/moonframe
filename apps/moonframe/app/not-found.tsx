import React from 'react';
import { ThemeProvider } from '@moonframe/ui';
import { TemplateRenderer } from '../templates';

export default function NotFound() {
  return (
    <ThemeProvider defaultSkin="moonhalftone" defaultMode="light" syncDocumentElement>
      <TemplateRenderer id="template-not-found" />
    </ThemeProvider>
  );
}
