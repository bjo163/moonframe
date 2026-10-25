import { skins, type SkinId } from '@moonwitness/moonframe/skins';

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
import { Button } from '@moonwitness/moonframe';

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
    code: `import { SkinSelector, ModeSelector } from '@moonwitness/moonframe';

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
    code: `import { AppShell, Sidebar, Main, Header, Grid, Card } from '@moonwitness/moonframe';

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
    code: `import { Field, Input, Select } from '@moonwitness/moonframe';

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
    code: `import { OTPInput, PasswordField, SearchInput, TagInput, Slider } from '@moonwitness/moonframe';

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
    code: `import { Checkbox, Switch, RadioGroup } from '@moonwitness/moonframe';

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
    code: `import { Tabs, Stepper, Pagination } from '@moonwitness/moonframe';

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
    code: `import { Dialog, CommandPalette, DropdownMenu, Button } from '@moonwitness/moonframe';

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
    code: `import { Callout, Progress, Badge, EmptyState, Button } from '@moonwitness/moonframe';

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
    code: `import { DataTable, BarChart, Timeline, AvatarGroup } from '@moonwitness/moonframe';

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
    summary: 'High-level reusable page building blocks exported directly from @moonwitness/moonframe so Next.js consumers can assemble complete SaaS pages in minutes.',
    a11y: 'Composes accessible Moonframe primitives with responsive grid breakpoints and zero backend coupling.',
    code: `import { PageHeader, MetricGrid, PricingCard, SettingsSection, Button, Input } from '@moonwitness/moonframe';

export function CompositeBlocksDemo() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader
        eyebrow="Control Plane"
        title="Production Overview"
        badge="15 Skins"
        description="Built with reusable Level C blocks from @moonwitness/moonframe."
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
  {
    slug: 'brand-and-sfx',
    name: 'Brand Marks, Skin Artwork & Opt-In SFX',
    exports: ['SkinBrandMark', 'SkinArtwork', 'SFXProvider', 'useSFX'],
    category: 'Actions & Theme',
    summary: 'Original 15-skin vector marks, adaptive artwork containers honoring data-decorations="off", and an opt-in WebAudio synthesizer runtime with 6 canonical event signatures.',
    a11y: 'Vector marks include accessible SVG titles or decorative hiding; SFX is muted by default with explicit consent and reduced-motion suppression.',
    code: `import { SkinBrandMark, SkinArtwork, SFXProvider, useSFX, Button } from '@moonwitness/moonframe';

export function BrandAndSfxDemo() {
  const sfx = useSFX();
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <SkinBrandMark skin="moonpunk" size={36} />
        <SkinBrandMark skin="moonledger" size={36} />
        <SkinBrandMark skin="moonquest" size={36} />
      </div>
      <Button onClick={() => sfx.play('success')}>Test Play SFX</Button>
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
    code: `import { AppShell, Sidebar, Main, PageHeader, MetricGrid, BarChart, DataTable, ActivityFeed, Button } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, SegmentedControl, MetricGrid, BarChart, Card, CardHeader, CardTitle, CardContent } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, DataTable, Badge, Button } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, AvatarGroup, DataTable, Button } from '@moonwitness/moonframe';

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
    code: `import { AuthCard, Field, Input, PasswordField, Checkbox, Button } from '@moonwitness/moonframe';

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
    code: `import { Stepper, AuthCard, Field, Input, PasswordField, Button } from '@moonwitness/moonframe';

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
    code: `import { AuthCard, Field, Input, Callout, Button } from '@moonwitness/moonframe';

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
    code: `import { AuthCard, OTPInput, Checkbox, Button } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, SettingsSection, Field, Input, TagInput, Switch, Button } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, SettingsSection, SkinSelector, ModeSelector, RadioGroup } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, DataTable, CodeBlock, Button } from '@moonwitness/moonframe';

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
    code: `import { Grid, PricingCard } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, Progress, DescriptionList, DataTable, Card, CardHeader, CardTitle, CardContent } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, Grid, Card, CardHeader, CardTitle, CardContent, Badge } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, Card, CardContent, Timeline, Textarea, Button } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, Slider, CodeBlock, Textarea, Button } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, MetricGrid, DataTable } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, Stepper, MetricGrid, Progress } from '@moonwitness/moonframe';

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
    code: `import { Hero, MetricGrid, Grid, PricingCard, Button, Badge } from '@moonwitness/moonframe';

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
    code: `import { AppShell, Sidebar, Main, PageHeader, Callout, CodeBlock } from '@moonwitness/moonframe';

export default function DocumentationLanding() {
  return (
    <AppShell>
      <Sidebar>Docs Index</Sidebar>
      <Main>
        <PageHeader eyebrow="Documentation" title="Getting Started with @moonwitness/moonframe" />
        <Callout title="Node.js 24.22.1 LTS">Zero external runtime dependencies; full Next.js 16 SSR support.</Callout>
        <CodeBlock language="bash" code="pnpm add @moonwitness/moonframe" />
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
    code: `import { EmptyState, Button, Badge } from '@moonwitness/moonframe';

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
    code: `import { PageHeader, Callout, Progress, Timeline } from '@moonwitness/moonframe';

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
  /* Wave B: 21 Additional Production Templates (43 Total) */
  {
    id: 'template-sign-in-minimal',
    title: 'Minimalist Single-Column Login',
    category: 'Auth',
    summary: 'Focused, distraction-free sign-in form with email/password validation, passkey quick-login, and accessible error summary.',
    recommendedSkin: 'classic',
    recommendedMode: 'light',
    componentsUsed: ['AuthCard', 'Field', 'Input', 'PasswordField', 'Checkbox', 'Button', 'Callout'],
    code: `import { AuthCard, Field, Input, PasswordField, Checkbox, Button } from '@moonwitness/moonframe';

export default function SignInMinimal() {
  return (
    <div style={{ maxWidth: '26rem', margin: '3rem auto' }}>
      <AuthCard eyebrow="Welcome Back" title="Sign In" description="Enter your credentials to continue.">
        <Field label="Email" required><Input type="email" defaultValue="alex@moonframe.dev" /></Field>
        <Field label="Password" required><PasswordField defaultValue="Secret#2026" /></Field>
        <Checkbox label="Remember this device" defaultChecked />
        <Button>Sign In</Button>
      </AuthCard>
    </div>
  );
}`,
  },
  {
    id: 'template-verify-email',
    title: 'Email OTP Verification & Cooldown',
    category: 'Auth',
    summary: 'Dedicated 6-digit OTP code input with resend cooldown timer, security callout, and change email address modal.',
    recommendedSkin: 'moonink',
    recommendedMode: 'light',
    componentsUsed: ['AuthCard', 'OTPInput', 'Callout', 'Button', 'Badge'],
    code: `import { AuthCard, OTPInput, Callout, Button } from '@moonwitness/moonframe';

export default function VerifyEmailTemplate() {
  return (
    <AuthCard eyebrow="Verification" title="Check your inbox" description="We sent a 6-digit verification code to alex@moonframe.dev.">
      <OTPInput length={6} defaultValue="739104" />
      <Callout title="Security tip">The code expires in 10 minutes.</Callout>
      <Button>Confirm Verification</Button>
    </AuthCard>
  );
}`,
  },
  {
    id: 'template-auth-onboarding',
    title: 'Workspace Onboarding Wizard',
    category: 'Auth',
    summary: 'Multi-step guided setup with Stepper progress, workspace slug generator, role selection RadioGroup, and skin initialization.',
    recommendedSkin: 'moonpunk',
    recommendedMode: 'dark',
    componentsUsed: ['Stepper', 'AuthCard', 'Field', 'Input', 'RadioGroup', 'SkinSelector', 'Button'],
    code: `import { Stepper, AuthCard, Field, Input, RadioGroup, SkinSelector, Button } from '@moonwitness/moonframe';

export default function AuthOnboardingTemplate() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '36rem', margin: '0 auto' }}>
      <Stepper currentStep={2} steps={[{ title: 'Profile' }, { title: 'Workspace' }, { title: 'Theme' }]} />
      <AuthCard title="Setup your workspace" description="Configure team parameters and initial skin.">
        <Field label="Workspace Name"><Input defaultValue="Aether Labs" /></Field>
        <RadioGroup label="Workspace Role" defaultValue="lead" items={[{ value: 'lead', label: 'Team Lead' }, { value: 'member', label: 'Contributor' }]} />
        <Field label="Default Skin"><SkinSelector /></Field>
        <Button>Complete Setup</Button>
      </AuthCard>
    </div>
  );
}`,
  },
  {
    id: 'template-account-locked',
    title: 'Security Lockout & Recovery Screen',
    category: 'Auth',
    summary: 'Incident security lock status with reference hash, biometric verification recovery options, and direct support request.',
    recommendedSkin: 'mooncrash',
    recommendedMode: 'dark',
    componentsUsed: ['Card', 'EmptyState', 'Callout', 'Button', 'Badge', 'CodeBlock'],
    code: `import { EmptyState, Callout, Button, Badge } from '@moonwitness/moonframe';

export default function AccountLockedTemplate() {
  return (
    <EmptyState
      icon={<Badge variant="danger">SECURITY LOCKOUT</Badge>}
      title="Access Temporarily Suspended"
      description="Too many invalid authentication attempts were detected from an unrecognized IP address."
      action={<Button>Verify with Hardware Key</Button>}
    />
  );
}`,
  },
  {
    id: 'template-records-table',
    title: 'Master Records Table & Batch Operations',
    category: 'Data',
    summary: 'High-volume administrative records table with multi-column sorting, row selection checkmarks, bulk export, and saved filters.',
    recommendedSkin: 'moonraw',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'DataTable', 'SegmentedControl', 'SearchInput', 'Button', 'Badge'],
    code: `import { PageHeader, DataTable, Button, Badge } from '@moonwitness/moonframe';

export default function RecordsTableTemplate() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Data Engine" title="Master Records Index" actions={<Button size="sm">Export CSV</Button>} />
      <DataTable
        searchable
        columns={[
          { key: 'code', header: 'Record ID', sortable: true },
          { key: 'title', header: 'Entity Name', sortable: true },
          { key: 'tier', header: 'Tier' },
          { key: 'status', header: 'Integrity' },
        ]}
        data={[
          { id: '1', code: 'REC-001', title: 'Telemetry Node Alpha', tier: 'P0', status: 'Active' },
          { id: '2', code: 'REC-002', title: 'Storage Partition Gamma', tier: 'P1', status: 'Verified' },
        ]}
      />
    </div>
  );
}`,
  },
  {
    id: 'template-resource-detail',
    title: 'Entity & Resource Inspector',
    category: 'Data',
    summary: 'Two-column entity detail workbench with DescriptionList metadata, tabbed audit telemetry, and resource mutation actions.',
    recommendedSkin: 'moonpanel',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'DescriptionList', 'Tabs', 'Card', 'Badge', 'Button', 'ActivityFeed'],
    code: `import { PageHeader, DescriptionList, Tabs, Button } from '@moonwitness/moonframe';

export default function ResourceDetailTemplate() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Entity Inspector" title="Resource: Cluster-US-East-4" actions={<Button size="sm">Revoke Key</Button>} />
      <DescriptionList
        columns={3}
        items={[
          { term: 'Provider', details: 'GCP us-central1' },
          { term: 'Uptime', details: '99.99%' },
          { term: 'Workloads', details: '48 pods active' },
        ]}
      />
      <Tabs items={[{ value: 'overview', label: 'Overview', content: 'Cluster operational telemetry.' }]} />
    </div>
  );
}`,
  },
  {
    id: 'template-data-audit',
    title: 'Compliance Audit Trail & Payload Inspector',
    category: 'Data',
    summary: 'Append-only tamper-evident compliance audit trail with diff payload CodeBlocks, actor filters, and security seals.',
    recommendedSkin: 'moonglitch',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'DataTable', 'CodeBlock', 'Callout', 'Badge', 'SearchInput'],
    code: `import { PageHeader, DataTable, CodeBlock } from '@moonwitness/moonframe';

export default function DataAuditTemplate() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Governance" title="Compliance Audit Ledger" />
      <DataTable
        searchable
        columns={[
          { key: 'seq', header: 'Seq #', sortable: true },
          { key: 'actor', header: 'Actor' },
          { key: 'action', header: 'Mutation' },
          { key: 'timestamp', header: 'Timestamp' },
        ]}
        data={[{ id: '1', seq: 'AUD-8812', actor: 'ci-runner', action: 'DEPLOY_SECRET', timestamp: '2026-10-26 04:12 UTC' }]}
      />
    </div>
  );
}`,
  },
  {
    id: 'template-executive-dashboard',
    title: 'Executive KPI Deck & Unit Economics',
    category: 'Dashboard',
    summary: 'Executive leadership briefing screen with quarter-over-quarter BarCharts, ARR MetricGrid, and operating margin breakdown.',
    recommendedSkin: 'moonchrome',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'MetricGrid', 'BarChart', 'Sparkline', 'Card', 'Badge', 'DataTable'],
    code: `import { PageHeader, MetricGrid, BarChart } from '@moonwitness/moonframe';

export default function ExecutiveDashboard() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Executive Briefing" title="Quarterly Operations & ARR" />
      <MetricGrid columns={4} items={[{ label: 'ARR', value: '$4.8M', delta: '+22%' }]} />
      <BarChart label="Monthly Run Rate" data={[{ label: 'Q1', value: 80 }, { label: 'Q2', value: 110 }]} />
    </div>
  );
}`,
  },
  {
    id: 'template-operations-console',
    title: 'Infrastructure Operations Console',
    category: 'Workspace',
    summary: 'Real-time infrastructure operations console with multi-region cluster health, incident responder switches, and telemetry status.',
    recommendedSkin: 'mooncrash',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'MetricGrid', 'DataTable', 'Callout', 'Badge', 'Switch', 'Button'],
    code: `import { PageHeader, MetricGrid, DataTable, Switch } from '@moonwitness/moonframe';

export default function OperationsConsole() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Site Reliability" title="Global Infrastructure Command" />
      <MetricGrid columns={3} items={[{ label: 'Clusters', value: '38 Active' }]} />
      <Switch label="Automated failover routing" defaultChecked />
    </div>
  );
}`,
  },
  {
    id: 'template-webhook-inspector',
    title: 'Webhook Dispatch Inspector & Replay',
    category: 'Workspace',
    summary: 'Developer webhook payload inspector with HTTP status indicators, JSON request/response CodeBlocks, and manual event replay.',
    recommendedSkin: 'moonglitch',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'DataTable', 'CodeBlock', 'Callout', 'Badge', 'Button'],
    code: `import { PageHeader, DataTable, CodeBlock, Button } from '@moonwitness/moonframe';

export default function WebhookInspector() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Developer Tools" title="Webhook Event Dispatcher" actions={<Button size="sm">Send Test Ping</Button>} />
      <CodeBlock language="json" code='{"event": "invoice.settled", "id": "evt_991"}' />
    </div>
  );
}`,
  },
  {
    id: 'template-queue-monitor',
    title: 'Worker Queue & Dead-Letter Monitor',
    category: 'Workspace',
    summary: 'Background job throughput telemetry, failure rate sparklines, dead-letter queue inspection, and batch retry triggers.',
    recommendedSkin: 'moonraw',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'MetricGrid', 'DataTable', 'Progress', 'Button', 'Badge'],
    code: `import { PageHeader, MetricGrid, DataTable, Button } from '@moonwitness/moonframe';

export default function QueueMonitor() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Task Processing" title="Worker Queue Monitor" actions={<Button size="sm">Retry Failed (12)</Button>} />
      <MetricGrid columns={3} items={[{ label: 'Queue Depth', value: '412 jobs' }]} />
    </div>
  );
}`,
  },
  {
    id: 'template-moonledger-home',
    title: 'Moonledger ERP Command Center',
    category: 'Domain',
    summary: 'Financial executive command center with live cash-flow telemetry, general ledger reconciliation status, and pending approvals.',
    recommendedSkin: 'moonledger',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'MetricGrid', 'DataTable', 'ActivityFeed', 'Button', 'Badge'],
    code: `import { PageHeader, MetricGrid, DataTable, Button } from '@moonwitness/moonframe';

export default function MoonledgerHome() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="ERP Command" title="Treasury & General Ledger" actions={<Button size="sm">Reconcile All</Button>} />
      <MetricGrid columns={4} items={[{ label: 'Net Cash Flow', value: '$1,920,400.00', delta: '+14.2%' }]} />
    </div>
  );
}`,
  },
  {
    id: 'template-moonledger-inventory',
    title: 'Moonledger Multi-Warehouse Inventory',
    category: 'Domain',
    summary: 'Multi-location inventory tracking with SKU search, minimum stock reorder thresholds, inventory valuation, and supplier links.',
    recommendedSkin: 'moonledger',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'DataTable', 'Badge', 'Button', 'Callout', 'SearchInput'],
    code: `import { PageHeader, DataTable, Button } from '@moonwitness/moonframe';

export default function MoonledgerInventory() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Supply Chain" title="SKU & Warehouse Inventory" actions={<Button size="sm">New Stock Entry</Button>} />
      <DataTable searchable columns={[{ key: 'sku', header: 'SKU' }, { key: 'qty', header: 'Quantity' }]} data={[{ id: '1', sku: 'SKU-099', qty: '480' }]} />
    </div>
  );
}`,
  },
  {
    id: 'template-organization-preferences',
    title: 'Enterprise Organization & RBAC Settings',
    category: 'Settings',
    summary: 'Enterprise workspace configuration with fiscal calendar, currency, multi-jurisdiction VAT, SSO SAML bindings, and audit retention.',
    recommendedSkin: 'moonledger',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'SettingsSection', 'Field', 'Input', 'Select', 'Switch', 'Button'],
    code: `import { PageHeader, SettingsSection, Field, Input, Select, Switch, Button } from '@moonwitness/moonframe';

export default function OrganizationPreferences() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Enterprise" title="Organization & Fiscal Governance" />
      <SettingsSection title="Legal Entity" description="Operating currency and registration.">
        <Field label="Legal Name"><Input defaultValue="Moonframe Technologies Ltd." /></Field>
      </SettingsSection>
    </div>
  );
}`,
  },
  {
    id: 'template-moonquest-inventory',
    title: 'Moonquest Equipment Vault & Relics',
    category: 'Domain',
    summary: 'RPG character inventory vault with equipment gear slots, rarity badges, stat progress bars, and crafting materials.',
    recommendedSkin: 'moonquest',
    recommendedMode: 'dark',
    componentsUsed: ['PageHeader', 'Card', 'Badge', 'Progress', 'Grid', 'Button', 'SkinBrandMark'],
    code: `import { PageHeader, Card, Badge, Progress, Button, SkinBrandMark } from '@moonwitness/moonframe';

export default function MoonquestInventory() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <PageHeader eyebrow="Guild Reliquary" title="Adventurer Vault & Equipment" actions={<Button size="sm">Craft Artifact</Button>} />
      <Card><Progress value={88} label="Solar Aegis Attunement (88%)" /></Card>
    </div>
  );
}`,
  },
  {
    id: 'template-public-pricing',
    title: 'Public Pricing & Plan Comparison',
    category: 'Public',
    summary: 'Three-tier pricing table with PricingCard components, feature comparison checklist, billing frequency toggle, and FAQ accordion.',
    recommendedSkin: 'moonsmash',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'PricingCard', 'SegmentedControl', 'Accordion', 'Badge', 'Grid'],
    code: `import { PageHeader, PricingCard, Accordion, Grid } from '@moonwitness/moonframe';

export default function PublicPricing() {
  return (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <PageHeader eyebrow="Transparent Pricing" title="Choose Your Moonframe Tier" />
      <Grid columns={3}>
        <PricingCard name="Starter" price="$29" features={['5 skins', 'Next.js 16']} />
        <PricingCard name="Pro" price="$99" featured features={['All 15 skins', '22 Templates']} />
        <PricingCard name="Studio" price="$299" features={['Full source', '8 Starters']} />
      </Grid>
    </div>
  );
}`,
  },
  {
    id: 'template-public-contact',
    title: 'Enterprise Contact & Demo Booking',
    category: 'Public',
    summary: 'High-touch enterprise inquiry page with calendar scheduling, requirement tags, SLA details, and regional sales offices.',
    recommendedSkin: 'moonriot',
    recommendedMode: 'light',
    componentsUsed: ['PageHeader', 'Field', 'Input', 'Textarea', 'TagInput', 'Button', 'Card'],
    code: `import { PageHeader, Field, Input, Textarea, Button } from '@moonwitness/moonframe';

export default function PublicContact() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '38rem', margin: '0 auto' }}>
      <PageHeader eyebrow="Get in Touch" title="Book an Architecture Review" />
      <Field label="Work Email"><Input type="email" defaultValue="cto@enterprise.com" /></Field>
      <Field label="Project Scope"><Textarea rows={4} defaultValue="Evaluating Moonframe across 4 Next.js applications." /></Field>
      <Button>Schedule Review Call</Button>
    </div>
  );
}`,
  },
  {
    id: 'template-legal-content',
    title: 'Editorial Terms of Service & Privacy',
    category: 'Public',
    summary: 'Long-form editorial legal agreement layout with floating section index, revision timeline, and printable formatting.',
    recommendedSkin: 'moonzine',
    recommendedMode: 'light',
    componentsUsed: ['AppShell', 'Sidebar', 'Main', 'PageHeader', 'Timeline', 'Callout', 'Badge'],
    code: `import { AppShell, Sidebar, Main, PageHeader, Timeline } from '@moonwitness/moonframe';

export default function LegalContent() {
  return (
    <AppShell>
      <Sidebar>Legal Articles</Sidebar>
      <Main>
        <PageHeader eyebrow="Legal Framework" title="Terms of Service & Licensing" />
        <Timeline items={[{ title: 'Version 1.0 released', time: 'October 2026', badge: 'Active' }]} />
      </Main>
    </AppShell>
  );
}`,
  },
  {
    id: 'template-error-page',
    title: '500 Runtime Exception Recovery',
    category: 'System',
    summary: 'Branded 500 server error screen with unique trace diagnostic code, status callout, and instant retry or report triggers.',
    recommendedSkin: 'moonriot',
    recommendedMode: 'dark',
    componentsUsed: ['Card', 'EmptyState', 'Callout', 'Button', 'Badge', 'CodeBlock'],
    code: `import { EmptyState, Callout, Button, Badge } from '@moonwitness/moonframe';

export default function ErrorPageTemplate() {
  return (
    <EmptyState
      icon={<Badge variant="danger">500 SERVER ERROR</Badge>}
      title="Unexpected Runtime Exception"
      description="An unhandled exception occurred in the server-side rendering pipeline."
      action={<Button onClick={() => window.location.reload()}>Retry Operation</Button>}
    />
  );
}`,
  },
  {
    id: 'template-access-denied',
    title: '403 Permission Denied & Role Request',
    category: 'System',
    summary: '403 Forbidden access barrier explaining missing RBAC privileges with a one-click role elevation request form.',
    recommendedSkin: 'mooncrash',
    recommendedMode: 'light',
    componentsUsed: ['EmptyState', 'Callout', 'Button', 'Badge', 'Field', 'Textarea'],
    code: `import { EmptyState, Callout, Button, Badge } from '@moonwitness/moonframe';

export default function AccessDeniedTemplate() {
  return (
    <EmptyState
      icon={<Badge variant="warning">403 FORBIDDEN</Badge>}
      title="Elevated Privileges Required"
      description="Your account role does not have authorization to view this resource."
      action={<Button>Request Role Elevation</Button>}
    />
  );
}`,
  },
  {
    id: 'template-offline-page',
    title: 'Offline / Disconnected Resilience State',
    category: 'System',
    summary: 'Network disconnection state screen with local cached draft status, offline mode indicator, and automatic reconnect polling.',
    recommendedSkin: 'moonscrawl',
    recommendedMode: 'light',
    componentsUsed: ['EmptyState', 'Callout', 'Button', 'Badge', 'Progress'],
    code: `import { EmptyState, Callout, Button, Badge } from '@moonwitness/moonframe';

export default function OfflinePageTemplate() {
  return (
    <EmptyState
      icon={<Badge variant="secondary">OFFLINE</Badge>}
      title="Connection Interrupted"
      description="Your network connection was lost. Local edits are cached safely."
      action={<Button>Reconnect Now</Button>}
    />
  );
}`,
  },
];

/* Level E Starter Applications */

export interface StarterCatalogEntry {
  id: string;
  title: string;
  level: 'E';
  purpose: string;
  priority: 'P2' | 'P3';
  recommendedSkin: SkinId;
  recommendedMode: 'light' | 'dark';
  pageRefs: string[];
  integrationSeams: string[];
}

export const STARTER_CATALOG: readonly StarterCatalogEntry[] = [
  {
    id: 'starter-admin-workspace',
    title: 'Admin Workspace Starter',
    level: 'E',
    purpose: 'Multi-page UI route composition for administrative management, user directories, resource inspectors, and preferences.',
    priority: 'P2',
    recommendedSkin: 'classic',
    recommendedMode: 'dark',
    pageRefs: [
      'template-dashboard-overview',
      'template-users-directory',
      'template-resource-detail',
      'template-profile-preferences',
      'template-error-page',
    ],
    integrationSeams: ['auth/session', 'data loader/mutation', 'navigation/routing', 'persistent settings'],
  },
  {
    id: 'starter-auth-onboarding',
    title: 'Auth & Onboarding Starter',
    level: 'E',
    purpose: 'Complete authentication journey spanning sign-in, account creation, password recovery, OTP email verification, and workspace setup.',
    priority: 'P2',
    recommendedSkin: 'moonpunk',
    recommendedMode: 'light',
    pageRefs: [
      'template-sign-in-minimal',
      'template-sign-up',
      'template-forgot-password',
      'template-verify-email',
      'template-auth-onboarding',
      'template-account-locked',
    ],
    integrationSeams: ['auth/session', 'credential validation', 'email delivery', 'workspace provisioning'],
  },
  {
    id: 'starter-data-admin',
    title: 'Data & Governance Admin Starter',
    level: 'E',
    purpose: 'Enterprise records administration, multi-filter data workspaces, resource details, compliance audit trails, and access rejection.',
    priority: 'P2',
    recommendedSkin: 'moonpanel',
    recommendedMode: 'light',
    pageRefs: [
      'template-records-table',
      'template-data-workspace',
      'template-resource-detail',
      'template-data-audit',
      'template-access-denied',
    ],
    integrationSeams: ['query AST/pagination', 'bulk mutation', 'audit log writer', 'RBAC evaluation'],
  },
  {
    id: 'starter-analytics-portal',
    title: 'Analytics & Telemetry Portal Starter',
    level: 'E',
    purpose: 'Real-time telemetry streaming, quarterly executive KPI dashboards, regional breakdown workspaces, and fault resilience.',
    priority: 'P2',
    recommendedSkin: 'moonglitch',
    recommendedMode: 'dark',
    pageRefs: [
      'template-analytics-workspace',
      'template-executive-dashboard',
      'template-dashboard-overview',
      'template-error-page',
    ],
    integrationSeams: ['telemetry stream', 'time range aggregation', 'export service', 'alerting hook'],
  },
  {
    id: 'starter-operations-console',
    title: 'Operations Console Starter',
    level: 'E',
    purpose: 'Infrastructure observability, real-time worker queue monitoring, webhook dispatch inspection, and offline disconnected states.',
    priority: 'P3',
    recommendedSkin: 'mooncrash',
    recommendedMode: 'dark',
    pageRefs: [
      'template-operations-console',
      'template-webhook-inspector',
      'template-queue-monitor',
      'template-offline-page',
    ],
    integrationSeams: ['cluster health probe', 'webhook replay engine', 'queue controller', 'offline sync cache'],
  },
  {
    id: 'starter-moonledger-erp',
    title: 'Moonledger ERP Starter',
    level: 'E',
    purpose: 'General ledger command center, invoice settlement register, multi-warehouse inventory tracking, and fiscal settings.',
    priority: 'P3',
    recommendedSkin: 'moonledger',
    recommendedMode: 'light',
    pageRefs: [
      'template-moonledger-home',
      'template-moonledger-invoices',
      'template-moonledger-inventory',
      'template-organization-preferences',
    ],
    integrationSeams: ['treasury sync', 'accounting engine', 'SKU inventory db', 'tax/organization config'],
  },
  {
    id: 'starter-moonquest-adventure',
    title: 'Moonquest RPG Adventure Starter',
    level: 'E',
    purpose: 'Guild chronicle expedition journal, character equipment & relic vault, and adventurer guild profile preferences.',
    priority: 'P3',
    recommendedSkin: 'moonquest',
    recommendedMode: 'dark',
    pageRefs: [
      'template-moonquest-home',
      'template-moonquest-inventory',
      'template-profile-preferences',
    ],
    integrationSeams: ['character state save', 'item inventory catalog', 'expedition progression event', 'audio SFX hook'],
  },
  {
    id: 'starter-content-marketing',
    title: 'Content & Marketing Platform Starter',
    level: 'E',
    purpose: 'High-converting SaaS public landing page, pricing comparison matrix, enterprise contact form, developer documentation, and legal terms.',
    priority: 'P2',
    recommendedSkin: 'moonzine',
    recommendedMode: 'light',
    pageRefs: [
      'template-public-landing',
      'template-public-pricing',
      'template-public-contact',
      'template-documentation-landing',
      'template-legal-content',
    ],
    integrationSeams: ['lead capture API', 'checkout redirect', 'docs search index', 'cookie consent'],
  },
];

export function getStarterById(id: string): StarterCatalogEntry | undefined {
  return STARTER_CATALOG.find(s => s.id === id);
}

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

