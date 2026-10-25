import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  PageHeader,
  Button,
} from '@moonwitness/moonframe';
import { TEMPLATE_CATALOG, getTemplateById } from '../../../../lib/catalog';
import { PreviewFrame } from '../../../../components/site/PreviewFrame';

export function generateStaticParams() {
  return TEMPLATE_CATALOG.map(t => ({ id: t.id }));
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const template = getTemplateById(id);
  if (!template) notFound();

  return (
    <div>
      <PageHeader
        eyebrow={`${template.category} Template · ${template.id}`}
        title={template.title}
        badge={`Recommended: ${template.recommendedSkin}`}
        description={template.summary}
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: 'Templates', href: '/templates' },
          { label: template.title, current: true },
        ]}
        actions={
          <>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/templates">← All Templates</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={`/skins/${template.recommendedSkin}`}>
                Inspect {template.recommendedSkin} Skin →
              </Link>
            </Button>
          </>
        }
      />

      <PreviewFrame template={template} />
    </div>
  );
}
