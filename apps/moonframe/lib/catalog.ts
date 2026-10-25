import { skins, type SkinId } from '@moonframe/ui/skins';

export interface SkinCatalogEntry {
  id: SkinId;
  name: string;
  description: string;
  territory: 'Subcultural & Graphic' | 'Tactile & Editorial' | 'Industrial & Structural' | 'Domain & Balanced';
  geometry: string;
  typography: string;
  surfaceSignature: string;
  recommendedFor: string[];
  swatches: {
    light: { bg: string; surface: string; accent: string; text: string };
    dark: { bg: string; surface: string; accent: string; text: string };
  };
}

export const SKIN_CATALOG: readonly SkinCatalogEntry[] = [
  {
    id: 'moonpunk',
    name: 'Moonpunk',
    description: 'Acid-lime ink slabs, offset shadows and a command rail.',
    territory: 'Subcultural & Graphic',
    geometry: '0px sharp corners, 3px ink borders, 5px hard offset slab shadows',
    typography: 'Impact / condensed uppercase display headers with tight tracking',
    surfaceSignature: 'High-energy acid-lime accents over raw newsprint/ink slabs',
    recommendedFor: ['Creative tools', 'Developer launches', 'Music & culture platforms'],
    swatches: {
      light: { bg: '#e8eccb', surface: '#f9fbe9', accent: '#c6f135', text: '#202415' },
      dark: { bg: '#171c12', surface: '#252c1d', accent: '#cef443', text: '#f3f7df' },
    },
  },
  {
    id: 'moonriot',
    name: 'Moonriot',
    description: 'Angular editorial panels, signal red and split navigation.',
    territory: 'Subcultural & Graphic',
    geometry: 'Asymmetric cut corners (0 1.3rem 0 0), 5px signal-red start rules',
    typography: 'Italic uppercase condensed headlines with manifesto pacing',
    surfaceSignature: 'Diagonal split hero banners and top horizontal index bar',
    recommendedFor: ['Editorial media', 'Campaign portals', 'Design agencies'],
    swatches: {
      light: { bg: '#f4e9e7', surface: '#fff8f6', accent: '#b51d32', text: '#301c1b' },
      dark: { bg: '#211315', surface: '#301d20', accent: '#ff899b', text: '#ffedef' },
    },
  },
  {
    id: 'moonzine',
    name: 'Moonzine',
    description: 'An independent magazine of paper layers and editorial type.',
    territory: 'Tactile & Editorial',
    geometry: '0px print edges, double rules, stacked paper sheet shadows',
    typography: 'Georgia / Times editorial serifs with dramatic scale contrast',
    surfaceSignature: 'Warm archival paper layers with dashed & dotted column dividers',
    recommendedFor: ['Publishing', 'Long-form essays', 'Research archives'],
    swatches: {
      light: { bg: '#e9dfce', surface: '#fff9ed', accent: '#753d5d', text: '#332923' },
      dark: { bg: '#241e1b', surface: '#332c26', accent: '#eab6d1', text: '#f8efdd' },
    },
  },
  {
    id: 'moonhalftone',
    name: 'Moonhalftone',
    description: 'Monochrome manga pacing, screened gutters and ink captions.',
    territory: 'Subcultural & Graphic',
    geometry: '0px crisp comic frames, 3px ink rules, 4px solid ink drop shadows',
    typography: 'Trebuchet / condensed bold uppercase captions',
    surfaceSignature: 'Radial halftone dot screen patterns across monochrome paper',
    recommendedFor: ['Portfolios', 'Storytelling apps', 'Indie marketplaces'],
    swatches: {
      light: { bg: '#e9e9e9', surface: '#ffffff', accent: '#242424', text: '#1f1f1f' },
      dark: { bg: '#131313', surface: '#222222', accent: '#f0f0f0', text: '#f5f5f5' },
    },
  },
  {
    id: 'moonglitch',
    name: 'Moonglitch',
    description: 'A quiet telemetry console with technical rules and monospace data.',
    territory: 'Industrial & Structural',
    geometry: '2px micro-radius, 1px technical gridlines, inset cyan/mint glow',
    typography: 'Cascadia / Consolas monospace hierarchy with bracketed active states',
    surfaceSignature: 'Scanline telemetry surfaces with tabular numeric precision',
    recommendedFor: ['Observability', 'AI ops', 'Infrastructure & API consoles'],
    swatches: {
      light: { bg: '#e3f0ee', surface: '#f4fbf9', accent: '#0f6859', text: '#16332f' },
      dark: { bg: '#0c1918', surface: '#152826', accent: '#6be8cf', text: '#e5faf6' },
    },
  },
  {
    id: 'moonsmash',
    name: 'Moonsmash',
    description: 'Oversized focal typography and radial graphic impact.',
    territory: 'Subcultural & Graphic',
    geometry: 'Alternating leaf corners (1.5rem .25rem), pill primary CTAs',
    typography: 'Poster-scale Impact display type up to 6rem',
    surfaceSignature: 'Radial sunburst hero gradients and centered pill navigation',
    recommendedFor: ['Product launches', 'Event ticketing', 'Consumer apps'],
    swatches: {
      light: { bg: '#fff0da', surface: '#fffaf0', accent: '#ab3d0c', text: '#3e2414' },
      dark: { bg: '#24180e', surface: '#382519', accent: '#ffb864', text: '#fff2db' },
    },
  },
  {
    id: 'moonink',
    name: 'Moonink',
    description: 'Expressive ink margins around a calm reading column.',
    territory: 'Tactile & Editorial',
    geometry: 'Organic brush-inspired border radii and top-rule cards',
    typography: 'Palatino / Georgia italic serifs with generous line rhythm',
    surfaceSignature: 'Botanical ink greens on calm parchment reading planes',
    recommendedFor: ['Knowledge bases', 'Writing studios', 'Mindful productivity'],
    swatches: {
      light: { bg: '#eae7e1', surface: '#fffdf7', accent: '#355c4b', text: '#27332e' },
      dark: { bg: '#18211e', surface: '#24312b', accent: '#b0d5bd', text: '#f1f5e9' },
    },
  },
  {
    id: 'mooncrash',
    name: 'Mooncrash',
    description: 'Industrial equipment plates, mechanical borders and numbered zones.',
    territory: 'Industrial & Structural',
    geometry: '4px plate corners, double inset borders, numbered rack counters',
    typography: 'Arial Narrow / stencil uppercase labels with wide tracking',
    surfaceSignature: 'Tactile hardware rack plates with amber warning accents',
    recommendedFor: ['Hardware telemetry', 'Manufacturing', 'Audio/synth tools'],
    swatches: {
      light: { bg: '#dfe2df', surface: '#f3f4ec', accent: '#79530b', text: '#293027' },
      dark: { bg: '#1b211b', surface: '#2a3328', accent: '#f1c96a', text: '#f0f3e3' },
    },
  },
  {
    id: 'moonpanel',
    name: 'Moonpanel',
    description: 'A strict comic grid with caption bars and rectangular panels.',
    territory: 'Subcultural & Graphic',
    geometry: '0px framed cells, 3px cobalt borders, attached header caption bars',
    typography: 'Arial Black uppercase panel captions',
    surfaceSignature: 'Tightly guttered multi-panel storyboard layout',
    recommendedFor: ['Kanban boards', 'Creative workflows', 'Visual dashboards'],
    swatches: {
      light: { bg: '#bec8df', surface: '#ffffff', accent: '#344f9d', text: '#26304b' },
      dark: { bg: '#080d17', surface: '#1e2a42', accent: '#a9c4ff', text: '#f2f5ff' },
    },
  },
  {
    id: 'moonscrawl',
    name: 'Moonscrawl',
    description: 'A notebook workspace with ruled margins and sketch contours.',
    territory: 'Tactile & Editorial',
    geometry: 'Hand-drawn irregular radius contours and wavy underlined titles',
    typography: 'Segoe Print / notebook script headers with friendly body copy',
    surfaceSignature: 'Ruled 32px notebook lines and double-rule vertical margin',
    recommendedFor: ['Education', 'Brainstorming', 'Personal notes & wikis'],
    swatches: {
      light: { bg: '#f5efda', surface: '#fffcef', accent: '#3d5796', text: '#333f51' },
      dark: { bg: '#20252d', surface: '#2b333d', accent: '#b4c9ff', text: '#fff8dd' },
    },
  },
  {
    id: 'moonraw',
    name: 'Moonraw',
    description: 'Exposed structure, plain rectangles and content-first restraint.',
    territory: 'Industrial & Structural',
    geometry: '0px zero-ornament wireframes, 1px exposed structural rules',
    typography: 'Courier New monospace headings with underlined navigation links',
    surfaceSignature: 'Pure brutalist structural honesty with zero elevation',
    recommendedFor: ['Documentation', 'Technical specifications', 'Minimalist directories'],
    swatches: {
      light: { bg: '#ffffff', surface: '#ffffff', accent: '#202020', text: '#171717' },
      dark: { bg: '#141414', surface: '#141414', accent: '#eeeeee', text: '#f1f1f1' },
    },
  },
  {
    id: 'moonchrome',
    name: 'Moonchrome',
    description: 'Metallic contours and luminous rims around quiet surfaces.',
    territory: 'Industrial & Structural',
    geometry: '1.25rem–2rem pill capsules with specular top rim highlights',
    typography: 'Light geometric sans headings with wide uppercase table headers',
    surfaceSignature: 'Anodized aluminum gradients and soft ambient depth',
    recommendedFor: ['AI assistants', 'Spatial computing', 'Premium SaaS'],
    swatches: {
      light: { bg: '#e7ebf3', surface: '#f9fbff', accent: '#405785', text: '#273448' },
      dark: { bg: '#111b2b', surface: '#1d2b40', accent: '#b1d3ff', text: '#edf4ff' },
    },
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Balanced rounded controls, soft elevation and familiar navigation.',
    territory: 'Domain & Balanced',
    geometry: '0.65rem balanced border radius, 1px subtle borders, soft shadow',
    typography: 'Inter / system sans-serif with clean 650–750 weights',
    surfaceSignature: 'Neutral modern SaaS baseline suitable for any product vertical',
    recommendedFor: ['General SaaS', 'B2B portals', 'Default product foundation'],
    swatches: {
      light: { bg: '#f5f6fa', surface: '#ffffff', accent: '#354ab5', text: '#202532' },
      dark: { bg: '#12151d', surface: '#1c2130', accent: '#a8b7ff', text: '#f2f4fa' },
    },
  },
  {
    id: 'moonquest',
    name: 'Moonquest',
    description: 'An adventure journal with framed records and inventory navigation.',
    territory: 'Domain & Balanced',
    geometry: '4px double guild frames, arched sidebar top, inset parchment borders',
    typography: 'Palatino small-caps headers and serif chronicle records',
    surfaceSignature: 'Warm guild parchment and gold-brass chronicle accents',
    recommendedFor: ['Gamified learning', 'RPG companion apps', 'Community quests'],
    swatches: {
      light: { bg: '#e8e0ca', surface: '#fff8e5', accent: '#675023', text: '#40331e' },
      dark: { bg: '#211d16', surface: '#332c20', accent: '#e9cb83', text: '#fff4d5' },
    },
  },
  {
    id: 'moonledger',
    name: 'Moonledger',
    description: 'A precise enterprise workbench for dense records and filters.',
    territory: 'Domain & Balanced',
    geometry: '0.2rem tight workbench corners, zebra-striped bordered data tables',
    typography: 'Compact tabular-nums sans-serif optimized for high data density',
    surfaceSignature: 'High-density financial & ERP record grids with zero visual clutter',
    recommendedFor: ['Fintech & billing', 'ERP & inventory', 'Analytics workbenches'],
    swatches: {
      light: { bg: '#edf1f5', surface: '#ffffff', accent: '#185f83', text: '#233445' },
      dark: { bg: '#14202c', surface: '#1d2d3b', accent: '#8cd5f7', text: '#edf6ff' },
    },
  },
];

export type ComponentCategory =
  | 'Foundation & Layout'
  | 'Actions & Theme'
  | 'Forms & Inputs'
  | 'Navigation'
  | 'Overlays & Dialogs'
  | 'Feedback & Status'
  | 'Data & Visualization'
  | 'Level C Composite Blocks';

export interface ComponentCatalogEntry {
  slug: string;
  name: string;
  exports: string[];
  category: ComponentCategory;
  summary: string;
  a11y: string;
  code: string;
}

export const COMPONENT_CATALOG: readonly ComponentCatalogEntry[] = [
  {
    slug: 'button',
    name: 'Button & Slot (asChild)',
    exports: ['Button', 'Slot'],
    category: 'Actions & Theme',
    summary: 'Primary, secondary, outline, ghost, and danger action triggers with loading states and polymorphic Next.js Link (asChild) composition.',
    a11y: 'Native <button> semantics by default; merges props onto child anchor when asChild={true}; sets aria-busy when loading.',
    code: `import Link from 'next/link';
import { Button } from '@moonframe/ui';

export function Actions() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Deploy Release</Button>
      <Button variant="secondary" asChild>
        <Link href="/templates">Browse Templates</Link>
      </Button>
      <Button variant="ghost" size="sm">Cancel</Button>
      <Button variant="danger">Revoke Key</Button>
    </div>
  );
}`,
  },
  {
    slug: 'theme-controls',
    name: 'SkinSelector & ModeSelector',
    exports: ['SkinSelector', 'ModeSelector', 'ThemeProvider', 'ThemeScript', 'useTheme'],
    category: 'Actions & Theme',
    summary: 'Drop-in controls for switching across all 15 skins and Light/Dark/System appearances with zero-FOUC Next.js SSR support.',
    a11y: 'Supports native <select> or accessible button group with aria-pressed state.',
    code: `import { SkinSelector, ModeSelector } from '@moonframe/ui';

export function ThemeToolbar() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <SkinSelector label="Choose skin" />
      <ModeSelector variant="segmented" label="Appearance" />
    </div>
  );
}`,
  },
  {
    slug: 'app-shell',
    name: 'AppShell, Sidebar, Main, Header & Grid',
    exports: ['AppShell', 'Sidebar', 'Main', 'Header', 'Hero', 'Grid', 'Separator', 'Kbd', 'CodeBlock'],
    category: 'Foundation & Layout',
    summary: 'Skin-aware structural layout primitives that automatically adapt from command rails (Moonpunk) to top editorial bars (Moonriot) or dense workbenches (Moonledger).',
    a11y: 'Uses semantic <aside>, <main>, <header>, and <section> landmarks.',
    code: `import { AppShell, Sidebar, Main, Header, Grid, Card } from '@moonframe/ui';

export function WorkspaceShell() {
  return (
    <AppShell>
      <Sidebar>Navigation</Sidebar>
      <Main>
        <Header>Top Bar</Header>
        <Grid columns={3}>
          <Card>Panel A</Card>
          <Card>Panel B</Card>
          <Card>Panel C</Card>
        </Grid>
      </Main>
    </AppShell>
  );
}`,
  },
  {
    slug: 'field-and-inputs',
    name: 'Field, Input, Textarea & Select',
    exports: ['Field', 'FieldDescription', 'FieldError', 'Label', 'Input', 'Textarea', 'Select'],
    category: 'Forms & Inputs',
    summary: 'Accessible form field wrapper that automatically wires htmlFor, aria-describedby, and aria-invalid to child inputs.',
    a11y: 'Automatic ID association and role="alert" on validation error messages.',
    code: `import { Field, Input, Select } from '@moonframe/ui';

export function ProjectForm() {
  return (
    <Field
      label="Workspace slug"
      description="Used in your public URL."
      error="Slug is already taken."
      required
    >
      <Input defaultValue="moonframe-studio" />
    </Field>
  );
}`,
  },
  {
    slug: 'auth-and-rich-inputs',
    name: 'OTPInput, PasswordField, SearchInput, TagInput & Slider',
    exports: ['OTPInput', 'PasswordField', 'SearchInput', 'TagInput', 'Slider', 'SegmentedControl', 'FileDropzone'],
    category: 'Forms & Inputs',
    summary: 'Specialized ready-to-use inputs for MFA verification, password strength, keyboard-navigable tag chips, range sliders, segmented switches, and file dropzones.',
    a11y: 'OTPInput supports multi-digit paste, arrow keys, and autocomplete="one-time-code". PasswordField announces strength changes via aria-live.',
    code: `import { OTPInput, PasswordField, SearchInput, TagInput, Slider } from '@moonframe/ui';

export function SecurityInputs() {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <SearchInput placeholder="Search resources…" shortcut="⌘K" />
      <PasswordField defaultValue="Moonframe#2026" showStrength />
      <OTPInput length={6} defaultValue="482910" />
      <TagInput defaultValue={['nextjs', 'react-19', 'pnpm']} />
      <Slider label="Concurrency limit" defaultValue={64} showValue />
    </div>
  );
}`,
  },
  {
    slug: 'selection-controls',
    name: 'Checkbox, Switch & RadioGroup',
    exports: ['Checkbox', 'Switch', 'RadioGroup'],
    category: 'Forms & Inputs',
    summary: 'Controlled and uncontrolled boolean and single-choice selection controls with optional descriptions.',
    a11y: 'Preserves native <input type="checkbox">, role="switch", and role="radiogroup" keyboard behavior.',
    code: `import { Checkbox, Switch, RadioGroup } from '@moonframe/ui';

export function Preferences() {
  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <Checkbox label="Enable audit logging" defaultChecked />
      <Switch label="Automatic dark mode sync" defaultChecked />
      <RadioGroup
        label="Deployment region"
        defaultValue="sin1"
        items={[
          { value: 'sin1', label: 'Singapore (sin1)', description: 'Low latency APAC' },
          { value: 'iad1', label: 'Washington D.C. (iad1)', description: 'US East primary' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    slug: 'navigation-primitives',
    name: 'Tabs, Breadcrumb, Pagination, Stepper & Nav',
    exports: ['Tabs', 'Breadcrumb', 'BreadcrumbItem', 'BreadcrumbLink', 'Pagination', 'Stepper', 'Nav', 'NavItem'],
    category: 'Navigation',
    summary: 'Roving-focus tabs (with RTL arrow support), hierarchical breadcrumbs, page switchers, and multi-step onboarding indicators.',
    a11y: 'Full WAI-ARIA tablist/tabpanel associations, aria-current="page", and aria-current="step".',
    code: `import { Tabs, Stepper, Pagination } from '@moonframe/ui';

export function NavigationDemo() {
  return (
    <div style={{ display: 'grid', gap: '1.25rem' }}>
      <Stepper
        currentStep={1}
        steps={[
          { title: 'Select Skin', description: '15 visual grammars' },
          { title: 'Configure Tokens', description: 'Light & Dark modes' },
          { title: 'Ship Next.js App', description: 'Production ready' },
        ]}
      />
      <Tabs
        items={[
          { value: 'overview', label: 'Overview', content: 'Workspace overview content.' },
          { value: 'metrics', label: 'Metrics', content: 'Realtime telemetry.' },
        ]}
      />
      <Pagination page={2} totalPages={5} />
    </div>
  );
}`,
  },
  {
    slug: 'overlays-and-command',
    name: 'Dialog, Drawer, CommandPalette, DropdownMenu, Popover & Tooltip',
    exports: ['Dialog', 'Drawer', 'CommandPalette', 'DropdownMenu', 'Popover', 'Tooltip'],
    category: 'Overlays & Dialogs',
    summary: 'Top-layer modals, slide-over drawers, Cmd+K command launcher, keyboard-roving action menus, popovers, and tooltips.',
    a11y: 'Native HTML <dialog> focus trapping, Escape dismissal, and opener focus restoration.',
    code: `import { Dialog, CommandPalette, DropdownMenu, Button } from '@moonframe/ui';

export function OverlayExamples() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Dialog title="Create API Key" description="Keys inherit workspace permissions." trigger={<Button>New Key</Button>}>
        <p>Modal content with focus trap.</p>
      </Dialog>
      <CommandPalette
        trigger={<Button variant="secondary">Command Palette (⌘K)</Button>}
        items={[
          { id: '1', label: 'Switch to Moonpunk', group: 'Skins', shortcut: 'S 1' },
          { id: '2', label: 'Open Data Workspace', group: 'Templates', shortcut: 'G D' },
        ]}
      />
      <DropdownMenu
        trigger={<Button variant="secondary">More Actions ▾</Button>}
        items={[
          { value: 'duplicate', label: 'Duplicate' },
          { value: 'delete', label: 'Delete', variant: 'danger' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    slug: 'feedback-and-status',
    name: 'Alert, Callout, Banner, Toast, Progress, Badge, Skeleton & EmptyState',
    exports: ['Alert', 'Callout', 'Banner', 'ToastProvider', 'useToast', 'Progress', 'Badge', 'Skeleton', 'EmptyState'],
    category: 'Feedback & Status',
    summary: 'Contextual banners, live toast notifications, determinate progress bars, status badges, loading skeletons, and zero-data states.',
    a11y: 'Polite aria-live regions for toasts, role="progressbar" with value bounds, and dismissible callout controls.',
    code: `import { Callout, Progress, Badge, EmptyState, Button } from '@moonframe/ui';

export function FeedbackExamples() {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Callout title="Scheduled Maintenance" variant="primary" dismissible>
        Cluster upgrades complete with zero downtime.
      </Callout>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Badge variant="primary">Healthy</Badge>
        <Badge variant="secondary">v0.1.0</Badge>
        <Badge variant="danger">Degraded</Badge>
      </div>
      <Progress value={78} label="Storage quota" />
      <EmptyState
        title="No active webhooks"
        description="Add an endpoint to receive real-time events."
        action={<Button size="sm">Add Endpoint</Button>}
      />
    </div>
  );
}`,
  },
  {
    slug: 'data-and-charts',
    name: 'DataTable, Table, BarChart, Sparkline, Timeline, AvatarGroup & DescriptionList',
    exports: ['DataTable', 'Table', 'TableHeader', 'TableBody', 'TableRow', 'TableHead', 'TableCell', 'TableCaption', 'BarChart', 'Sparkline', 'Timeline', 'Avatar', 'AvatarGroup', 'DescriptionList', 'DescriptionTerm', 'DescriptionDetails', 'Accordion', 'Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter', 'StatCard'],
    category: 'Data & Visualization',
    summary: 'Sortable/filterable/paginated DataTable, pure-SVG token-themed BarChart and Sparkline, activity Timelines, stacked AvatarGroups, and semantic DescriptionLists.',
    a11y: 'aria-sort on sortable table headers, role="img" + <title> on SVG charts, and semantic <dl>/<ol> markup.',
    code: `import { DataTable, BarChart, Timeline, AvatarGroup } from '@moonframe/ui';

export function DataShowcase() {
  return (
    <div style={{ display: 'grid', gap: '1.25rem' }}>
      <BarChart
        label="Weekly requests"
        data={[
          { label: 'Mon', value: 120 },
          { label: 'Tue', value: 185 },
          { label: 'Wed', value: 160 },
          { label: 'Thu', value: 240 },
          { label: 'Fri', value: 295 },
        ]}
      />
      <DataTable
        searchable
        columns={[
          { key: 'service', header: 'Service', sortable: true },
          { key: 'latency', header: 'p95 Latency', sortable: true },
        ]}
        data={[
          { id: '1', service: 'Edge Gateway', latency: '14ms' },
          { id: '2', service: 'Auth Worker', latency: '22ms' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    slug: 'composite-blocks',
    name: 'Level C Blocks: PageHeader, MetricGrid, AuthCard, PricingCard, SettingsSection & ActivityFeed',
    exports: ['PageHeader', 'MetricGrid', 'AuthCard', 'PricingCard', 'SettingsSection', 'ActivityFeed'],
    category: 'Level C Composite Blocks',
    summary: 'High-level reusable page building blocks exported directly from @moonframe/ui so Next.js consumers can assemble complete SaaS pages in minutes.',
    a11y: 'Composes accessible Moonframe primitives with responsive grid breakpoints and zero backend coupling.',
    code: `import { PageHeader, MetricGrid, PricingCard, SettingsSection, Button, Input } from '@moonframe/ui';

export function CompositeBlocksDemo() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader
        eyebrow="Control Plane"
        title="Production Overview"
        badge="15 Skins"
        description="Built with reusable Level C blocks from @moonframe/ui."
        actions={<Button>Create Deployment</Button>}
      />
      <MetricGrid
        columns={3}
        items={[
          { label: 'Requests / sec', value: '18,420', delta: '+12%', trend: [10, 14, 13, 17, 18] },
          { label: 'Error rate', value: '0.02%', delta: '-0.01%', trend: [5, 4, 3, 2, 2] },
          { label: 'Active regions', value: '14', delta: 'Global', trend: [8, 10, 12, 14, 14] },
        ]}
      />
    </div>
  );
}`,
  },
];

export type TemplateCategory =
  | 'Auth'
  | 'Dashboard'
  | 'Data'
  | 'Settings'
  | 'Billing'
  | 'Workspace'
  | 'Domain'
  | 'Public'
  | 'System';

export interface TemplateCatalogEntry {
  id: string;
  title: string;
  category: TemplateCategory;
  summary: string;
  recommendedSkin: SkinId;
  recommendedMode: 'light' | 'dark';
  componentsUsed: string[];
  code: string;
}

export const TEMPLATE_CATALOG: readonly TemplateCatalogEntry[] = [
  {
    id: 'template-dashboard-overview',
    title: 'Executive Dashboard Overview',
    category: 'Dashboard',
    summary: 'Full application shell with KPI MetricGrid, sparklines, deployment BarChart, searchable DataTable, and live ActivityFeed.',
    recommendedSkin: 'classic',
    recommendedMode: 'dark',
    componentsUsed: ['AppShell', 'Sidebar', 'PageHeader', 'MetricGrid', 'BarChart', 'DataTable', 'ActivityFeed'],
    code: `import { AppShell, Sidebar, Main, PageHeader, MetricGrid, BarChart, DataTable, ActivityFeed, Button } from '@moonframe/ui';

export default function DashboardOverview() {
  return (
    <AppShell>
      <Sidebar>/* Navigation */</Sidebar>
      <Main>
        <PageHeader
          eyebrow="Mission Control"
          title="Executive Overview"
          badge="Live"
          description="Real-time operational telemetry across all active workspaces."
          actions={<Button>New Release</Button>}
        />
        <MetricGrid
          columns={4}
          items={[
            { label: 'Monthly Revenue', value: '$128,400', delta: '+18.4%', trend: [64, 78, 92, 110, 128] },
            { label: 'Active Subscribers', value: '4,892', delta: '+6.2%', trend: [410, 430, 455, 470, 489] },
            { label: 'Deploy Frequency', value: '42 / wk', delta: '+11%', trend: [24, 29, 35, 38, 42] },
            { label: 'SLA Uptime', value: '99.98%', delta: 'Healthy', trend: [99, 100, 100, 100, 100] },
          ]}
        />
      </Main>
    </AppShell>
  );
}`,
  },
  {
    id: 'template-analytics-workspace',
    title: 'Telemetry & Analytics Workspace',
    category: 'Dashboard',
    summary: 'High-contrast telemetry console featuring segmented time ranges, throughput BarChart, latency percentiles, and regional breakdown.',
    recommendedSkin: 'moonglitch',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'SegmentedControl', 'MetricGrid', 'BarChart', 'DataTable', 'Callout'],
    code: `import { PageHeader, SegmentedControl, MetricGrid, BarChart, Card, CardHeader, CardTitle, CardContent } from '@moonframe/ui';

export default function AnalyticsWorkspace() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader
        eyebrow="Observability"
        title="Edge Telemetry & Throughput"
        actions={<SegmentedControl items={[{ value: '24h', label: '24h' }, { value: '7d', label: '7d' }, { value: '30d', label: '30d' }]} defaultValue="7d" />}
      />
      <MetricGrid
        columns={3}
        items={[
          { label: 'Edge Requests', value: '48.2M', delta: '+22%', trend: [22, 29, 34, 41, 48] },
          { label: 'Cache Hit Ratio', value: '96.4%', delta: '+1.8%', trend: [91, 93, 94, 95, 96] },
          { label: 'p99 Compute', value: '18.4ms', delta: '-4.1ms', trend: [28, 25, 22, 20, 18] },
        ]}
      />
    </div>
  );
}`,
  },
  {
    id: 'template-data-workspace',
    title: 'Enterprise Records & Data Workspace',
    category: 'Data',
    summary: 'Dense filterable record inspector with search, status filters, sortable DataTable, bulk actions, and detail drawer.',
    recommendedSkin: 'moonledger',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'SearchInput', 'Select', 'DataTable', 'Badge', 'Drawer', 'DescriptionList'],
    code: `import { PageHeader, DataTable, Badge, Button } from '@moonframe/ui';

export default function DataWorkspace() {
  return (
    <div>
      <PageHeader
        eyebrow="Data Engine"
        title="Customer Contracts & Ledgers"
        actions={<Button>Export CSV</Button>}
      />
      <DataTable
        searchable
        pageSize={5}
        columns={[
          { key: 'id', header: 'Record ID', sortable: true },
          { key: 'account', header: 'Account', sortable: true },
          { key: 'arr', header: 'ARR', sortable: true },
          { key: 'status', header: 'Status' },
        ]}
        data={[
          { id: 'CTR-901', account: 'Aether Corp', arr: '$48,000', status: 'Active' },
          { id: 'CTR-902', account: 'Kinetix Labs', arr: '$19,500', status: 'Pending' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    id: 'template-users-directory',
    title: 'Team & RBAC Users Directory',
    category: 'Data',
    summary: 'Organization member directory with AvatarGroup summary, role filter, tag management, and invite modal.',
    recommendedSkin: 'classic',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'AvatarGroup', 'DataTable', 'Dialog', 'Field', 'Input', 'TagInput'],
    code: `import { PageHeader, AvatarGroup, DataTable, Button } from '@moonframe/ui';

export default function UsersDirectory() {
  return (
    <div>
      <PageHeader
        eyebrow="Access Control"
        title="Organization Directory"
        actions={<AvatarGroup max={4} items={[{ fallback: 'AL' }, { fallback: 'JK' }, { fallback: 'SR' }, { fallback: 'MN' }, { fallback: 'TY' }]} />}
      />
      <DataTable
        searchable
        columns={[
          { key: 'name', header: 'Member', sortable: true },
          { key: 'role', header: 'Role', sortable: true },
          { key: 'mfa', header: '2FA Status' },
        ]}
        data={[
          { id: '1', name: 'Alex Lane', role: 'Owner', mfa: 'Enforced' },
          { id: '2', name: 'Jamie Kim', role: 'Staff Engineer', mfa: 'Enforced' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    id: 'template-sign-in-split',
    title: 'Split-Screen Sign In',
    category: 'Auth',
    summary: 'Two-column authentication screen pairing an editorial brand showcase panel with a reusable AuthCard, PasswordField, and SSO actions.',
    recommendedSkin: 'moonpunk',
    recommendedMode: 'dark',
    componentsUsed: ['AuthCard', 'Field', 'Input', 'PasswordField', 'Checkbox', 'Button'],
    code: `import { AuthCard, Field, Input, PasswordField, Checkbox, Button } from '@moonframe/ui';

export default function SignInSplit() {
  return (
    <AuthCard
      eyebrow="Welcome back"
      title="Sign in to Moonframe"
      description="Enter your workspace credentials to continue."
      socialActions={<><Button variant="secondary">GitHub</Button><Button variant="secondary">Google</Button></>}
    >
      <Field label="Work email" required>
        <Input type="email" defaultValue="alex@moonframe.dev" />
      </Field>
      <Field label="Password" required>
        <PasswordField defaultValue="Moonframe#2026" />
      </Field>
      <Checkbox label="Keep me signed in for 30 days" defaultChecked />
      <Button type="submit">Sign In</Button>
    </AuthCard>
  );
}`,
  },
  {
    id: 'template-sign-up',
    title: 'Workspace Registration & Onboarding',
    category: 'Auth',
    summary: 'Multi-step account creation with Stepper progress, PasswordField strength meter, and workspace role selection.',
    recommendedSkin: 'moonsmash',
    recommendedMode: 'light',
    componentsUsed: ['Stepper', 'AuthCard', 'Field', 'Input', 'PasswordField', 'RadioGroup', 'Button'],
    code: `import { Stepper, AuthCard, Field, Input, PasswordField, Button } from '@moonframe/ui';

export default function SignUpTemplate() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '34rem', margin: '0 auto' }}>
      <Stepper currentStep={1} steps={[{ title: 'Identity' }, { title: 'Security' }, { title: 'Skin' }]} />
      <AuthCard title="Create your studio account" description="Start building with 15 skins.">
        <Field label="Full name" required><Input defaultValue="Alex Lane" /></Field>
        <Field label="Password" required><PasswordField showStrength defaultValue="OrbitStudio#99" /></Field>
        <Button>Create Account</Button>
      </AuthCard>
    </div>
  );
}`,
  },
  {
    id: 'template-forgot-password',
    title: 'Password Recovery Flow',
    category: 'Auth',
    summary: 'Clean recovery request and confirmation state with security callout and return-to-login links.',
    recommendedSkin: 'moonink',
    recommendedMode: 'light',
    componentsUsed: ['AuthCard', 'Field', 'Input', 'Callout', 'Button'],
    code: `import { AuthCard, Field, Input, Callout, Button } from '@moonframe/ui';

export default function ForgotPasswordTemplate() {
  return (
    <AuthCard
      eyebrow="Account Recovery"
      title="Reset your password"
      description="We will send a one-time recovery link to your verified work email."
    >
      <Callout title="Security notice">Recovery links expire after 15 minutes.</Callout>
      <Field label="Verified email" required>
        <Input type="email" defaultValue="alex@moonframe.dev" />
      </Field>
      <Button>Send Recovery Link</Button>
    </AuthCard>
  );
}`,
  },
  {
    id: 'template-mfa-verify',
    title: 'Two-Factor OTP Verification',
    category: 'Auth',
    summary: 'Dedicated 6-digit OTPInput verification screen with paste support, backup code toggle, and device trust.',
    recommendedSkin: 'moonchrome',
    recommendedMode: 'dark',
    componentsUsed: ['AuthCard', 'OTPInput', 'Checkbox', 'Button', 'Badge'],
    code: `import { AuthCard, OTPInput, Checkbox, Button } from '@moonframe/ui';

export default function MfaVerifyTemplate() {
  return (
    <AuthCard
      eyebrow="Step 2 of 2"
      title="Two-Factor Authentication"
      description="Enter the 6-digit code from your authenticator app."
    >
      <OTPInput length={6} defaultValue="482910" />
      <Checkbox label="Trust this browser for 14 days" defaultChecked />
      <Button>Verify & Continue</Button>
    </AuthCard>
  );
}`,
  },
  {
    id: 'template-profile-preferences',
    title: 'Profile & Account Preferences',
    category: 'Settings',
    summary: 'Two-column SettingsSection layout with Avatar upload FileDropzone, profile fields, TagInput skills, and notification switches.',
    recommendedSkin: 'classic',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'SettingsSection', 'FileDropzone', 'Field', 'Input', 'Textarea', 'TagInput', 'Switch'],
    code: `import { PageHeader, SettingsSection, Field, Input, TagInput, Switch, Button } from '@moonframe/ui';

export default function ProfilePreferences() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Account" title="Profile & Notifications" />
      <SettingsSection
        title="Public Identity"
        description="Displayed on commits, audit logs, and shared templates."
        action={<Button size="sm">Save Profile</Button>}
      >
        <Field label="Display Name"><Input defaultValue="Alex Lane" /></Field>
        <Field label="Skills & Tags"><TagInput defaultValue={['design-systems', 'nextjs', 'accessibility']} /></Field>
      </SettingsSection>
    </div>
  );
}`,
  },
  {
    id: 'template-appearance-preferences',
    title: 'Skin & Accessibility Appearance Studio',
    category: 'Settings',
    summary: 'Live theme configurator allowing users to test and persist all 15 skins, Light/Dark/System mode, density, motion, and high contrast.',
    recommendedSkin: 'moonzine',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'SettingsSection', 'SkinSelector', 'ModeSelector', 'RadioGroup', 'Slider'],
    code: `import { PageHeader, SettingsSection, SkinSelector, ModeSelector, RadioGroup } from '@moonframe/ui';

export default function AppearancePreferences() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Personalization" title="Appearance & Accessibility" />
      <SettingsSection title="Visual Skin" description="Choose from 15 distinct architectural grammars.">
        <SkinSelector />
        <ModeSelector variant="segmented" />
      </SettingsSection>
    </div>
  );
}`,
  },
  {
    id: 'template-api-key-settings',
    title: 'API Keys & Webhook Security',
    category: 'Settings',
    summary: 'Developer credentials manager with scoped API tokens, CodeBlock curl snippet, revocation confirmation dialog, and audit timeline.',
    recommendedSkin: 'moonglitch',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'Callout', 'DataTable', 'CodeBlock', 'Dialog', 'Timeline'],
    code: `import { PageHeader, DataTable, CodeBlock, Button } from '@moonframe/ui';

export default function ApiKeySettings() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Developers" title="API Keys & Webhooks" actions={<Button>Generate Token</Button>} />
      <CodeBlock language="bash" code='curl -H "Authorization: Bearer mf_live_98a7bc..." https://api.moonframe.dev/v1/skins' />
    </div>
  );
}`,
  },
  {
    id: 'template-plans-and-pricing',
    title: 'Plans & Pricing Marketplace',
    category: 'Billing',
    summary: 'Three-tier PricingCard comparison with monthly/annual SegmentedControl, feature matrix Table, and FAQ Accordion.',
    recommendedSkin: 'moonriot',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'SegmentedControl', 'Grid', 'PricingCard', 'Accordion'],
    code: `import { Grid, PricingCard } from '@moonframe/ui';

export default function PlansAndPricing() {
  return (
    <Grid columns={3}>
      <PricingCard name="Starter" price="$0" features={['3 skins', 'Core primitives', 'Community support']} />
      <PricingCard name="Studio" price="$49" badge="Most Popular" featured features={['All 15 skins', '22 page templates', 'Next.js 16 SSR kit']} />
      <PricingCard name="Enterprise" price="$199" features={['Custom skin grammar', 'Dedicated SLA', 'Unlimited seats']} />
    </Grid>
  );
}`,
  },
  {
    id: 'template-billing-overview',
    title: 'Billing, Usage & Invoices',
    category: 'Billing',
    summary: 'Subscription usage gauges, payment method DescriptionList, spend BarChart, and downloadable invoice DataTable.',
    recommendedSkin: 'moonledger',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'MetricGrid', 'Progress', 'DescriptionList', 'DataTable'],
    code: `import { PageHeader, Progress, DescriptionList, DataTable, Card, CardHeader, CardTitle, CardContent } from '@moonframe/ui';

export default function BillingOverview() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Finance" title="Subscription & Usage" badge="Studio Plan" />
      <Card>
        <CardHeader><CardTitle>Seat & Bandwidth Quota</CardTitle></CardHeader>
        <CardContent>
          <Progress value={68} label="Monthly bandwidth (680 GB / 1 TB)" />
        </CardContent>
      </Card>
    </div>
  );
}`,
  },
  {
    id: 'template-kanban-workspace',
    title: 'Sprint Kanban & Delivery Board',
    category: 'Workspace',
    summary: 'Multi-column delivery board with filterable task cards, priority badges, AvatarGroup assignees, and quick-create modal.',
    recommendedSkin: 'moonpanel',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'SearchInput', 'Grid', 'Card', 'Badge', 'AvatarGroup', 'Progress'],
    code: `import { PageHeader, Grid, Card, CardHeader, CardTitle, CardContent, Badge } from '@moonframe/ui';

export default function KanbanWorkspace() {
  return (
    <div>
      <PageHeader eyebrow="Delivery" title="Release Sprint Board" badge="Sprint 14" />
      <Grid columns={3}>
        <Card><CardHeader><CardTitle>Backlog</CardTitle></CardHeader><CardContent><Badge>3 tasks</Badge></CardContent></Card>
        <Card><CardHeader><CardTitle>In Progress</CardTitle></CardHeader><CardContent><Badge variant="primary">4 tasks</Badge></CardContent></Card>
        <Card><CardHeader><CardTitle>Shipped</CardTitle></CardHeader><CardContent><Badge variant="secondary">8 tasks</Badge></CardContent></Card>
      </Grid>
    </div>
  );
}`,
  },
  {
    id: 'template-messages-workspace',
    title: 'Team Inbox & Triage Workspace',
    category: 'Workspace',
    summary: 'Split-pane communication hub with thread list, tag badges, message timeline, and reply composer.',
    recommendedSkin: 'moonscrawl',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'SearchInput', 'Card', 'Timeline', 'Textarea', 'Button', 'Badge'],
    code: `import { PageHeader, Card, CardContent, Timeline, Textarea, Button } from '@moonframe/ui';

export default function MessagesWorkspace() {
  return (
    <div>
      <PageHeader eyebrow="Collaboration" title="Design Review Inbox" badge="4 Unread" />
      <Card>
        <CardContent>
          <Timeline items={[{ title: 'Alex Lane', time: '10:24 AM', description: 'Updated Moonpunk contrast tokens.' }]} />
          <Textarea placeholder="Write a reply…" />
          <Button>Send Reply</Button>
        </CardContent>
      </Card>
    </div>
  );
}`,
  },
  {
    id: 'template-ai-chat',
    title: 'AI Copilot & Prompt Studio',
    category: 'Workspace',
    summary: 'Prompt engineering workspace with model selector, temperature Slider, code output preview, and token counter.',
    recommendedSkin: 'moonchrome',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'Select', 'Slider', 'Card', 'CodeBlock', 'Textarea', 'Button'],
    code: `import { PageHeader, Slider, CodeBlock, Textarea, Button } from '@moonframe/ui';

export default function AiChatTemplate() {
  return (
    <div style={{ display: 'grid', gap: '1.25rem' }}>
      <PageHeader eyebrow="AI Studio" title="Component Synthesis Copilot" badge="Moonchrome" />
      <Slider label="Creativity (Temperature)" min={0} max={100} defaultValue={35} showValue />
      <CodeBlock language="tsx" code="<ThemeProvider defaultSkin='moonchrome'><App /></ThemeProvider>" />
      <Textarea placeholder="Describe the Next.js screen you want to generate…" />
      <Button>Generate Screen</Button>
    </div>
  );
}`,
  },
  {
    id: 'template-moonledger-invoices',
    title: 'Moonledger Financial Reconciliation',
    category: 'Domain',
    summary: 'Domain-specific high-density accounting workbench tailored for the Moonledger skin with ledger balance sheet and audit trail.',
    recommendedSkin: 'moonledger',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'MetricGrid', 'DataTable', 'DescriptionList', 'Badge'],
    code: `import { PageHeader, MetricGrid, DataTable } from '@moonframe/ui';

export default function MoonledgerInvoices() {
  return (
    <div>
      <PageHeader eyebrow="Moonledger Domain" title="General Ledger & Invoices" badge="Q4 Close" />
      <MetricGrid
        columns={4}
        items={[
          { label: 'Accounts Receivable', value: '$284,910.00', delta: '+4.2%' },
          { label: 'Settled (30d)', value: '$912,400.00', delta: '100% reconciled' },
          { label: 'Overdue > 30d', value: '$4,200.00', delta: '2 invoices', deltaTone: 'danger' },
          { label: 'Net Working Capital', value: '$1,420,800.00', delta: 'Audited' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    id: 'template-moonquest-home',
    title: 'Moonquest Guild Chronicle & Inventory',
    category: 'Domain',
    summary: 'Adventure journal workspace showcasing the Moonquest skin with quest progression Stepper, party AvatarGroup, and artifact table.',
    recommendedSkin: 'moonquest',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'Stepper', 'MetricGrid', 'Card', 'Progress', 'Timeline'],
    code: `import { PageHeader, Stepper, MetricGrid, Progress } from '@moonframe/ui';

export default function MoonquestHome() {
  return (
    <div>
      <PageHeader eyebrow="Guild Chronicle" title="Expedition to the Astral Citadel" badge="Rank IV" />
      <Stepper
        currentStep={2}
        steps={[
          { title: 'Outpost Recon', description: 'Completed at dawn' },
          { title: 'Runic Seal', description: '3 of 3 deciphered' },
          { title: 'Citadel Sanctum', description: 'Active quest' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    id: 'template-public-landing',
    title: 'SaaS Product Launch Landing Page',
    category: 'Public',
    summary: 'High-converting marketing landing page with Hero section, social proof metrics, feature grid, and embedded pricing.',
    recommendedSkin: 'moonpunk',
    recommendedMode: 'light',
    componentsUsed: ['Hero', 'MetricGrid', 'Grid', 'Card', 'PricingCard', 'Button', 'Badge'],
    code: `import { Hero, MetricGrid, Grid, PricingCard, Button, Badge } from '@moonframe/ui';

export default function PublicLanding() {
  return (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <Hero>
        <Badge variant="primary">Moonframe v0.1</Badge>
        <h1>One React Library. Fifteen Unmistakable Worlds.</h1>
        <p>Ship Next.js applications that refuse to look like generic templates.</p>
        <Button size="lg">Start Building</Button>
      </Hero>
    </div>
  );
}`,
  },
  {
    id: 'template-documentation-landing',
    title: 'Technical Documentation Portal',
    category: 'Public',
    summary: 'Structured developer documentation hub with sidebar navigation, SearchInput, Callout notes, CodeBlock examples, and FAQ.',
    recommendedSkin: 'moonraw',
    recommendedMode: 'light',
    componentsUsed: ['AppShell', 'Sidebar', 'Main', 'PageHeader', 'SearchInput', 'Callout', 'CodeBlock', 'DescriptionList'],
    code: `import { AppShell, Sidebar, Main, PageHeader, Callout, CodeBlock } from '@moonframe/ui';

export default function DocumentationLanding() {
  return (
    <AppShell>
      <Sidebar>Docs Index</Sidebar>
      <Main>
        <PageHeader eyebrow="Documentation" title="Getting Started with @moonframe/ui" />
        <Callout title="Node.js 24.22.1 LTS">Zero external runtime dependencies; full Next.js 16 SSR support.</Callout>
        <CodeBlock language="bash" code="pnpm add @moonframe/ui" />
      </Main>
    </AppShell>
  );
}`,
  },
  {
    id: 'template-not-found',
    title: '404 Not Found System Screen',
    category: 'System',
    summary: 'Branded 404 recovery page with EmptyState, quick navigation links, and CommandPalette search trigger.',
    recommendedSkin: 'moonhalftone',
    recommendedMode: 'light',
    componentsUsed: ['Card', 'EmptyState', 'Button', 'Badge', 'Kbd'],
    code: `import { EmptyState, Button, Badge } from '@moonframe/ui';

export default function NotFoundTemplate() {
  return (
    <EmptyState
      icon={<Badge variant="danger">404</Badge>}
      title="Coordinates outside known orbit"
      description="The requested route does not exist or has moved to another workspace."
      action={<Button asChild><a href="/">Return Home</a></Button>}
    />
  );
}`,
  },
  {
    id: 'template-maintenance',
    title: 'Scheduled Maintenance & Status Page',
    category: 'System',
    summary: 'System status and maintenance window screen with live progress bar, subsystem health table, and incident timeline.',
    recommendedSkin: 'mooncrash',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'Callout', 'Progress', 'DataTable', 'Timeline', 'Badge'],
    code: `import { PageHeader, Callout, Progress, Timeline } from '@moonframe/ui';

export default function MaintenanceTemplate() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="System Status" title="Scheduled Core Upgrade" badge="In Progress" />
      <Callout title="Estimated completion: 18 minutes">All state is preserved safely during rack migration.</Callout>
      <Progress value={74} label="Migration progress (74%)" />
      <Timeline items={[{ title: 'Database snapshots verified', time: '04:10 UTC', badge: 'Done' }]} />
    </div>
  );
}`,
  },
];

export function getSkinById(id: string): SkinCatalogEntry | undefined {
  return SKIN_CATALOG.find(s => s.id === id);
}

export function getComponentBySlug(slug: string): ComponentCatalogEntry | undefined {
  return COMPONENT_CATALOG.find(c => c.slug === slug);
}

export function getTemplateById(id: string): TemplateCatalogEntry | undefined {
  return TEMPLATE_CATALOG.find(t => t.id === id);
}

export { skins };
