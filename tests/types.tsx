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
  skins,
  type SkinId,
} from '@moonframe/ui';
import { resolveTheme, type ThemePreferences } from '@moonframe/ui/theme';
import { skinIds } from '@moonframe/ui/skins';
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
            <Kbd>⌘K</Kbd>
            <CodeBlock language="tsx" code="const x = 1;" />
          </Main>
        </AppShell>
      </ToastProvider>
    </ThemeProvider>
  );
}
void Example;
