import React from 'react';
import { notFound } from 'next/navigation';
import { PageHeader } from '@moonwitness/moonframe';
import { STARTER_CATALOG, TEMPLATE_CATALOG, getStarterById } from '../../../../lib/catalog';
import { StarterWorkspace } from '../../../../components/site/StarterWorkspace';

export function generateStaticParams() {
  return STARTER_CATALOG.map(s => ({ id: s.id }));
}

export default async function StarterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const starter = getStarterById(id);
  if (!starter) notFound();

  const resolvedTemplates = TEMPLATE_CATALOG.filter(t => starter.pageRefs.includes(t.id));

  return (
    <div>
      <PageHeader
        eyebrow="Level E Multi-Route Application"
        title={starter.title}
        badge={`${starter.pageRefs.length} Connected Routes`}
        description={starter.purpose}
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: 'Starters', href: '/starters' },
          { label: starter.title, current: true },
        ]}
      />

      <StarterWorkspace starter={starter} templates={resolvedTemplates} />
    </div>
  );
}
