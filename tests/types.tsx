import {
  ThemeProvider,
  ThemeScript,
  getThemeInitScript,
  useTheme,
  Button,
  Input,
  Select,
  Dialog,
  Drawer,
  Popover,
  DropdownMenu,
  Tooltip,
  Tabs,
  Field,
  RadioGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Pagination,
  DataTable,
  EmptyState,
  SkinSelector,
  ModeSelector,
  AppShell,
  Sidebar,
  Main,
  Header,
  Nav,
  NavItem,
  StatCard,
  Kbd,
  CodeBlock,
  ToastProvider,
  useToast,
  OTPInput,
  PasswordField,
  SearchInput,
  Slider,
  TagInput,
  SegmentedControl,
  FileDropzone,
  BarChart,
  Sparkline,
  Stepper,
  Timeline,
  AvatarGroup,
  DescriptionList,
  Callout,
  CommandPalette,
  PageHeader,
  MetricGrid,
  AuthCard,
  PricingCard,
  SettingsSection,
  ActivityFeed,
  SkinBrandMark,
  SkinArtwork,
  SFXProvider,
  useSFX,
  skins,
  type SkinId,
} from '@moonwitness/moonframe';
import { resolveTheme, type ThemePreferences } from '@moonwitness/moonframe/theme';
import { skinIds } from '@moonwitness/moonframe/skins';
import { createRef } from 'react';

function Example() {
  const { setSkin, setPreferences, mode } = useTheme();
  const { toast } = useToast();
  const ref = createRef<HTMLButtonElement>();
  const skin: SkinId = skins[0].id;
  const initCode: string = getThemeInitScript({ defaultSkin: skinIds[0], defaultMode: 'system' });
  const prefs: Partial<ThemePreferences> = { skin, mode };
  void resolveTheme(prefs);
  void initCode;

  return (
    <ThemeProvider defaultSkin={skin} syncDocumentElement>
      <ThemeScript defaultSkin={skin} defaultMode="system" />
      <ToastProvider>
        <AppShell>
          <Sidebar>
            <Nav>
              <NavItem asChild active>
                <a href="/dashboard">Dashboard</a>
              </NavItem>
            </Nav>
            <SkinSelector variant="select" />
            <ModeSelector variant="segmented" />
          </Sidebar>
          <Main>
            <Header>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink current>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Header>
            <PageHeader
              eyebrow="Overview"
              title="Moonframe Workspace"
              description="Typed composite blocks"
              badge="v0.1"
            />
            <MetricGrid
              items={[{ label: 'Skins', value: skins.length, delta: '+15', trend: [5, 10, 15] }]}
            />
            <StatCard label="Skins" value={skins.length} detail="Active" />
            <Button ref={ref} onClick={() => { setSkin('moonquest'); setPreferences({ density: 'compact' }); toast({ title: 'Saved' }); }}>
              {mode}
            </Button>
            <Button asChild variant="secondary">
              <a href="/next-page">Next Link</a>
            </Button>
            <Field label="Name" description="Public handle" error="Required" required>
              <Input aria-label="Name" />
            </Field>
            <OTPInput length={6} defaultValue="123456" />
            <PasswordField showStrength defaultValue="StrongP@ss1" />
            <SearchInput shortcut="⌘K" placeholder="Filter…" />
            <Slider label="Opacity" defaultValue={80} showValue />
            <TagInput defaultValue={['ui', 'skins']} />
            <SegmentedControl items={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} />
            <FileDropzone title="Drop files" />
            <BarChart data={[{ label: 'Q1', value: 42 }]} />
            <Sparkline data={[1, 3, 2, 5]} />
            <Stepper currentStep={1} steps={[{ title: 'Step 1' }, { title: 'Step 2' }]} />
            <Timeline items={[{ title: 'Created', time: '1m' }]} />
            <AvatarGroup items={[{ fallback: 'MF' }]} />
            <DescriptionList items={[{ term: 'Engine', details: 'Next.js 16' }]} />
            <Callout title="Note" dismissible>Ready</Callout>
            <CommandPalette items={[{ id: '1', label: 'Switch Skin', shortcut: '⌘K' }]} />
            <AuthCard title="Sign in">
              <Input placeholder="Email" />
            </AuthCard>
            <PricingCard name="Pro" price="$29" features={['15 skins']} featured />
            <SettingsSection title="General">
              <Input placeholder="Workspace name" />
            </SettingsSection>
            <ActivityFeed items={[{ title: 'Updated skin', time: 'Now' }]} />
            <Select aria-label="Country">
              <option>Indonesia</option>
            </Select>
            <RadioGroup
              label="Tier"
              items={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }]}
            />
            <Dialog title="Example" open={false} onOpenChange={() => {}}>
              Content
            </Dialog>
            <Drawer title="Side panel" side="right" open={false} onOpenChange={() => {}}>
              Drawer body
            </Drawer>
            <Popover trigger={<Button>Info</Button>} title="Details">
              Popover text
            </Popover>
            <DropdownMenu
              trigger={<Button>Actions</Button>}
              items={[{ value: 'edit', label: 'Edit', onSelect: () => {} }]}
            />
            <Tooltip content="Shortcut">
              <Button>Hover</Button>
            </Tooltip>
            <Tabs items={[{ value: 'a', label: 'A', content: 'Example' }]} />
            <DataTable
              searchable
              columns={[{ key: 'name', header: 'Name', sortable: true }]}
              data={[{ id: '1', name: 'Alpha' }]}
            />
            <Pagination page={1} totalPages={5} onPageChange={() => {}} />
            <EmptyState title="Empty" description="No items" />
            <SkinBrandMark skin={skin} size={32} />
            <SkinArtwork skin={skin} title="Art" caption="Theme art" />
            <SFXProvider defaultEnabled={false}>
              <Kbd>⌘K</Kbd>
            </SFXProvider>
            <CodeBlock language="tsx" code="const x = 1;" />
          </Main>
        </AppShell>
      </ToastProvider>
    </ThemeProvider>
  );
}
void Example;
