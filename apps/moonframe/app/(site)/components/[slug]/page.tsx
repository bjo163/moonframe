import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  PageHeader,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Badge,
  Grid,
  CodeBlock,
  Callout,
  Field,
  Input,
  Select,
  Checkbox,
  Switch,
  RadioGroup,
  OTPInput,
  PasswordField,
  SearchInput,
  TagInput,
  Slider,
  SegmentedControl,
  FileDropzone,
  Tabs,
  Stepper,
  Pagination,
  Dialog,
  DropdownMenu,
  Popover,
  Tooltip,
  Progress,
  EmptyState,
  BarChart,
  Sparkline,
  Timeline,
  AvatarGroup,
  DescriptionList,
  DataTable,
  MetricGrid,
  PricingCard,
  SettingsSection,
  SkinSelector,
  ModeSelector,
} from '@moonframe/ui';
import { COMPONENT_CATALOG, getComponentBySlug } from '../../../../lib/catalog';

export function generateStaticParams() {
  return COMPONENT_CATALOG.map(c => ({ slug: c.slug }));
}

function LiveComponentSpecimen({ slug }: { slug: string }) {
  switch (slug) {
    case 'button':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button asChild variant="secondary">
            <Link href="/templates">Next.js Link (asChild)</Link>
          </Button>
        </div>
      );
    case 'theme-controls':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <SkinSelector label="Choose Skin" />
          <ModeSelector variant="segmented" label="Choose Appearance" />
        </div>
      );
    case 'field-and-inputs':
      return (
        <div style={{ display: 'grid', gap: '1rem', maxWidth: '28rem' }}>
          <Field label="Workspace Name" description="Visible to all members" required>
            <Input defaultValue="Orbit Design Studio" />
          </Field>
          <Field label="Slug" error="Slug is already reserved" required>
            <Input defaultValue="admin" />
          </Field>
          <Field label="Region">
            <Select defaultValue="sin1">
              <option value="sin1">Singapore (sin1)</option>
              <option value="iad1">US East (iad1)</option>
            </Select>
          </Field>
        </div>
      );
    case 'auth-and-rich-inputs':
      return (
        <div style={{ display: 'grid', gap: '1.25rem', maxWidth: '30rem' }}>
          <SearchInput placeholder="Search workspace…" shortcut="⌘K" />
          <PasswordField defaultValue="Moonframe#2026" showStrength />
          <OTPInput length={6} defaultValue="482910" />
          <TagInput defaultValue={['nextjs', 'react19', 'pnpm']} />
          <Slider label="Concurrency Quota" defaultValue={72} showValue />
          <SegmentedControl
            defaultValue="annual"
            items={[{ value: 'monthly', label: 'Monthly' }, { value: 'annual', label: 'Annual (-20%)' }]}
          />
          <FileDropzone title="Drop SVG or PNG assets here" />
        </div>
      );
    case 'selection-controls':
      return (
        <div style={{ display: 'grid', gap: '1rem' }}>
          <Checkbox label="Enforce WebAuthn hardware keys" defaultChecked />
          <Switch label="Real-time telemetry streaming" defaultChecked />
          <RadioGroup
            label="Support SLA"
            defaultValue="pro"
            items={[
              { value: 'starter', label: 'Standard (24h response)' },
              { value: 'pro', label: 'Priority (1h response)', description: 'Included in Studio & Enterprise' },
            ]}
          />
        </div>
      );
    case 'navigation-primitives':
      return (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <Stepper
            currentStep={1}
            steps={[
              { title: 'Select Skin', description: '15 visual grammars' },
              { title: 'Configure Tokens', description: 'Light & Dark modes' },
              { title: 'Deploy Next.js', description: 'Zero FOUC SSR' },
            ]}
          />
          <Tabs
            items={[
              { value: 'overview', label: 'Overview', content: <p>Roving tabindex keyboard navigation works identically across all 15 skins.</p> },
              { value: 'tokens', label: 'Tokens', content: <p>Semantic CSS variables adapt automatically to Light and Dark modes.</p> },
            ]}
          />
          <Pagination page={2} totalPages={5} />
        </div>
      );
    case 'overlays-and-command':
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Dialog title="Create Production Token" description="Scoped tokens can be revoked at any time." trigger={<Button>Open Modal Dialog</Button>}>
            <Field label="Token label"><Input defaultValue="CI Runner" /></Field>
          </Dialog>
          <Popover title="Token Provenance" trigger={<Button variant="secondary">Open Popover</Button>}>
            <p style={{ margin: 0 }}>Backed by deterministic DTCG subset verification.</p>
          </Popover>
          <DropdownMenu
            trigger={<Button variant="secondary">Action Menu ▾</Button>}
            items={[
              { value: 'copy', label: 'Copy Configuration' },
              { value: 'revoke', label: 'Revoke Access', variant: 'danger' },
            ]}
          />
          <Tooltip content="Press Escape to dismiss">
            <Button variant="ghost">Hover or Focus Tooltip</Button>
          </Tooltip>
        </div>
      );
    case 'feedback-and-status':
      return (
        <div style={{ display: 'grid', gap: '1rem' }}>
          <Callout title="All 15 Skins Operational" variant="primary" dismissible>
            Every skin recipe meets the 4.5:1 WCAG AA contrast threshold in both Light and Dark modes.
          </Callout>
          <Progress value={84} label="Build cache hit rate (84%)" />
          <EmptyState
            title="No custom webhooks configured"
            description="Add an HTTPS endpoint to receive deployment events."
            action={<Button size="sm">Add Webhook</Button>}
          />
        </div>
      );
    case 'data-and-charts':
      return (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <AvatarGroup max={4} items={[{ fallback: 'AL' }, { fallback: 'JK' }, { fallback: 'SR' }, { fallback: 'MN' }, { fallback: 'TY' }]} />
            <Sparkline data={[14, 22, 19, 31, 28, 42]} />
          </div>
          <BarChart
            label="Requests per day"
            data={[
              { label: 'Mon', value: 140 },
              { label: 'Tue', value: 210 },
              { label: 'Wed', value: 185 },
              { label: 'Thu', value: 290 },
              { label: 'Fri', value: 310 },
            ]}
          />
          <DataTable
            searchable
            columns={[
              { key: 'name', header: 'Module', sortable: true },
              { key: 'exports', header: 'Exports', sortable: true },
              { key: 'status', header: 'Status' },
            ]}
            data={[
              { id: '1', name: '@moonframe/ui', exports: '66+ components', status: 'Verified' },
              { id: '2', name: '@moonframe/ui/theme', exports: '7 hooks & SSR helpers', status: 'Verified' },
              { id: '3', name: '@moonframe/ui/skins', exports: '15 canonical skins', status: 'Verified' },
            ]}
          />
        </div>
      );
    case 'composite-blocks':
    default:
      return (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <MetricGrid
            columns={3}
            items={[
              { label: 'Active Skins', value: '15', delta: '30 Modes', trend: [5, 8, 11, 13, 15] },
              { label: 'Templates', value: '22', delta: 'App Router', trend: [4, 9, 14, 18, 22] },
              { label: 'Bundle Overhead', value: '0 Deps', delta: 'Pure React', trend: [1, 1, 1, 1, 1] },
            ]}
          />
          <SettingsSection
            title="Workspace Settings Block"
            description="Reusable two-column SettingsSection exported directly from @moonframe/ui."
            action={<Button size="sm">Save Changes</Button>}
          >
            <Field label="Organization Name"><Input defaultValue="Moonframe Studio" /></Field>
          </SettingsSection>
        </div>
      );
  }
}

export default async function ComponentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = getComponentBySlug(slug);
  if (!comp) notFound();

  return (
    <div>
      <PageHeader
        eyebrow={comp.category}
        title={comp.name}
        badge={`${comp.exports.length} Exports`}
        description={comp.summary}
        breadcrumbs={[
          { label: 'Showcase', href: '/' },
          { label: 'Components', href: '/components' },
          { label: comp.name, current: true },
        ]}
        actions={
          <Button variant="secondary" size="sm" asChild>
            <Link href="/components">← All Components</Link>
          </Button>
        }
      />

      <Card style={{ marginBottom: '1.5rem' }}>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <CardTitle>Interactive Live Specimen</CardTitle>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {comp.exports.map(exp => (
                <Badge key={exp} variant="primary">{exp}</Badge>
              ))}
            </div>
          </div>
          <CardDescription>
            Change the global skin or mode in the top header to test how these components adapt in real time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LiveComponentSpecimen slug={comp.slug} />
        </CardContent>
      </Card>

      <Grid columns={2}>
        <Card>
          <CardHeader>
            <CardTitle>Next.js Usage Example</CardTitle>
            <CardDescription>Import directly from @moonframe/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock language="tsx" code={comp.code} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility &amp; Contract Guarantees</CardTitle>
            <CardDescription>Keyboard, ARIA, and SSR behavior</CardDescription>
          </CardHeader>
          <CardContent style={{ display: 'grid', gap: '1rem' }}>
            <Callout title="Accessibility Verification" variant="primary">
              {comp.a11y}
            </Callout>
            <DescriptionList
              columns={1}
              items={[
                { term: 'Package Subpath', details: "import { ... } from '@moonframe/ui'" },
                { term: 'TypeScript Declarations', details: 'src/components.d.ts (strictly typed)' },
                { term: 'Next.js 16 SSR', details: 'Hydration-safe with zero browser global leaks' },
              ]}
            />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
