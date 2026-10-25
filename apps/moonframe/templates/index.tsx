'use client';

import React, { useState } from 'react';
import {
  AppShell,
  Sidebar,
  Main,
  Header,
  Hero,
  Nav,
  NavItem,
  Grid,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  RadioGroup,
  Progress,
  Avatar,
  AvatarGroup,
  Separator,
  Alert,
  Callout,
  Tabs,
  Accordion,
  Dialog,
  Drawer,
  DataTable,
  EmptyState,
  Kbd,
  CodeBlock,
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
  DescriptionList,
  PageHeader,
  MetricGrid,
  AuthCard,
  PricingCard,
  SettingsSection,
  ActivityFeed,
  SkinSelector,
  ModeSelector,
} from '@moonframe/ui';

export function TemplateRenderer({ id }: { id: string }) {
  const [notice, setNotice] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState('annual');
  const [timeRange, setTimeRange] = useState('7d');
  const [temperature, setTemperature] = useState(35);

  switch (id) {
    case 'template-dashboard-overview':
      return (
        <AppShell>
          <Sidebar>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <strong>ORBIT CONTROL</strong>
              <Badge variant="primary">PRO</Badge>
            </div>
            <Nav aria-label="Dashboard navigation">
              <NavItem active href="#overview">Overview</NavItem>
              <NavItem href="#deployments">Deployments</NavItem>
              <NavItem href="#analytics">Analytics</NavItem>
              <NavItem href="#settings">Settings</NavItem>
            </Nav>
          </Sidebar>
          <Main>
            <PageHeader
              eyebrow="Mission Control"
              title="Executive Overview"
              badge="Live"
              description="Real-time operational telemetry, revenue velocity, and deployment status across all workspaces."
              breadcrumbs={[
                { label: 'Workspace', href: '#workspace' },
                { label: 'Executive Overview', current: true },
              ]}
              actions={
                <>
                  <Button variant="secondary" size="sm" onClick={() => setNotice('Report exported to CSV.')}>Export CSV</Button>
                  <Button size="sm" onClick={() => setNotice('Release pipeline triggered.')}>Deploy Release</Button>
                </>
              }
            />
            {notice && <Callout title="Action triggered" variant="primary" dismissible onDismiss={() => setNotice(null)}>{notice}</Callout>}
            <MetricGrid
              columns={4}
              items={[
                { label: 'Monthly Revenue', value: '$128,400', delta: '+18.4%', detail: 'vs. $108,400 last month', trend: [64, 78, 92, 110, 128] },
                { label: 'Active Subscribers', value: '4,892', delta: '+6.2%', detail: '94.2% net retention', trend: [410, 430, 455, 470, 489] },
                { label: 'Deploy Frequency', value: '42 / wk', delta: '+11%', detail: 'Zero failed rollbacks', trend: [24, 29, 35, 38, 42] },
                { label: 'SLA Uptime', value: '99.98%', delta: 'Healthy', detail: '14 edge regions', trend: [99, 100, 100, 100, 100] },
              ]}
            />
            <Grid columns={2} style={{ marginTop: '1.25rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Deployment Throughput</CardTitle>
                  <CardDescription>Production builds verified across Next.js 16 clusters</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    label="Weekly deployments"
                    data={[
                      { label: 'Mon', value: 18 },
                      { label: 'Tue', value: 24 },
                      { label: 'Wed', value: 21 },
                      { label: 'Thu', value: 32 },
                      { label: 'Fri', value: 29 },
                      { label: 'Sat', value: 12 },
                    ]}
                  />
                </CardContent>
              </Card>
              <ActivityFeed
                title="Live Audit Feed"
                description="Recent automated and operator events"
                items={[
                  { title: 'Edge cache purged globally', time: '2m ago', badge: 'CDN', description: 'Triggered by release v2.4.19' },
                  { title: 'Skin token contract verified', time: '18m ago', badge: 'CI', description: 'All 15 skins × 2 modes passed contrast checks' },
                  { title: 'SSO SAML certificate rotated', time: '1h ago', badge: 'Security', description: 'Updated by Alex Lane' },
                ]}
              />
            </Grid>
            <Card style={{ marginTop: '1.25rem' }}>
              <CardHeader>
                <CardTitle>Active Production Services</CardTitle>
                <CardDescription>Search and sort live clusters</CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable
                  searchable
                  searchPlaceholder="Filter services…"
                  columns={[
                    { key: 'service', header: 'Service', sortable: true },
                    { key: 'region', header: 'Region', sortable: true },
                    { key: 'latency', header: 'p95 Latency', sortable: true },
                    { key: 'status', header: 'Status' },
                  ]}
                  data={[
                    { id: '1', service: 'Auth Gateway', region: 'sin1 (Singapore)', latency: '11ms', status: 'Healthy' },
                    { id: '2', service: 'Billing Ledger', region: 'iad1 (US East)', latency: '19ms', status: 'Healthy' },
                    { id: '3', service: 'Realtime Sync', region: 'fra1 (Frankfurt)', latency: '14ms', status: 'Healthy' },
                  ]}
                />
              </CardContent>
            </Card>
          </Main>
        </AppShell>
      );

    case 'template-analytics-workspace':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Observability & Telemetry"
            title="Edge Telemetry & Throughput"
            badge={`Window: ${timeRange}`}
            description="Sub-second request metrics, cache hit ratios, and regional compute distribution."
            actions={
              <SegmentedControl
                label="Time range"
                value={timeRange}
                onValueChange={setTimeRange}
                items={[
                  { value: '24h', label: '24h' },
                  { value: '7d', label: '7d' },
                  { value: '30d', label: '30d' },
                ]}
              />
            }
          />
          <MetricGrid
            columns={3}
            items={[
              { label: 'Edge Requests', value: timeRange === '24h' ? '6.8M' : timeRange === '7d' ? '48.2M' : '194.6M', delta: '+22.4%', trend: [22, 29, 34, 41, 48] },
              { label: 'Cache Hit Ratio', value: '96.4%', delta: '+1.8%', trend: [91, 93, 94, 95, 96] },
              { label: 'p99 Compute Duration', value: '18.4ms', delta: '-4.1ms', trend: [28, 25, 22, 20, 18] },
            ]}
          />
          <Grid columns={2}>
            <Card>
              <CardHeader>
                <CardTitle>Requests by Region (Millions)</CardTitle>
                <CardDescription>Traffic distribution across primary PoPs</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  label="Requests by region"
                  data={[
                    { label: 'APAC', value: 19 },
                    { label: 'US-East', value: 24 },
                    { label: 'EU-Central', value: 16 },
                    { label: 'US-West', value: 14 },
                    { label: 'SA-East', value: 7 },
                  ]}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quota & Error Budget</CardTitle>
                <CardDescription>99.95% monthly SLO target</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '1rem' }}>
                <Progress value={92} label="Remaining 30-day error budget (92%)" />
                <Progress value={64} label="Edge KV storage utilization (64%)" />
                <DescriptionList
                  items={[
                    { term: 'Peak RPS', details: '18,420 req/s' },
                    { term: 'TLS Handshake p50', details: '4.2ms' },
                    { term: 'WAF Blocked Threats', details: '14,890' },
                    { term: 'Active PoPs', details: '38 / 38 online' },
                  ]}
                />
              </CardContent>
            </Card>
          </Grid>
        </div>
      );

    case 'template-data-workspace':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Data Engine"
            title="Customer Contracts & Ledgers"
            badge="6 Records"
            description="Filter, sort, and inspect high-density enterprise customer agreements."
            actions={
              <Drawer
                title="Contract Inspector · CTR-901"
                description="Full metadata and compliance status"
                trigger={<Button variant="secondary" size="sm">Inspect Selected</Button>}
              >
                <DescriptionList
                  columns={1}
                  items={[
                    { term: 'Account Name', details: 'Aether Robotics Corp' },
                    { term: 'Annual Recurring Revenue', details: '$48,000.00 USD' },
                    { term: 'Renewal Date', details: '2027-03-15' },
                    { term: 'Data Residency', details: 'ap-southeast-1 (Singapore)' },
                  ]}
                />
              </Drawer>
            }
          />
          <Card>
            <CardContent>
              <DataTable
                searchable
                pageSize={4}
                searchPlaceholder="Search by account, ID, or owner…"
                columns={[
                  { key: 'id', header: 'Contract ID', sortable: true },
                  { key: 'account', header: 'Account', sortable: true },
                  { key: 'tier', header: 'Plan Tier', sortable: true },
                  { key: 'arr', header: 'ARR', sortable: true },
                  { key: 'owner', header: 'Owner' },
                  {
                    key: 'status',
                    header: 'Status',
                    render: row => <Badge variant={row.status === 'Active' ? 'primary' : 'secondary'}>{String(row.status)}</Badge>,
                  },
                ]}
                data={[
                  { id: 'CTR-901', account: 'Aether Robotics', tier: 'Enterprise', arr: '$48,000', owner: 'Alex Lane', status: 'Active' },
                  { id: 'CTR-902', account: 'Kinetix BioLabs', tier: 'Studio', arr: '$19,500', owner: 'Jamie Kim', status: 'Active' },
                  { id: 'CTR-903', account: 'Vanguard Media', tier: 'Enterprise', arr: '$64,200', owner: 'Sam Rivera', status: 'Active' },
                  { id: 'CTR-904', account: 'Helios Energy', tier: 'Studio', arr: '$14,800', owner: 'Mina Noor', status: 'Pending Renewal' },
                  { id: 'CTR-905', account: 'Novastra Cloud', tier: 'Enterprise', arr: '$92,000', owner: 'Alex Lane', status: 'Active' },
                  { id: 'CTR-906', account: 'Zenyth Studio', tier: 'Starter', arr: '$4,800', owner: 'Jamie Kim', status: 'Active' },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      );

    case 'template-users-directory':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Identity & Access"
            title="Organization Members & RBAC"
            description="Manage workspace roles, hardware 2FA enforcement, and team access scopes."
            actions={
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <AvatarGroup
                  max={4}
                  items={[
                    { fallback: 'AL', alt: 'Alex Lane' },
                    { fallback: 'JK', alt: 'Jamie Kim' },
                    { fallback: 'SR', alt: 'Sam Rivera' },
                    { fallback: 'MN', alt: 'Mina Noor' },
                    { fallback: 'TY', alt: 'Taro Yamada' },
                  ]}
                />
                <Dialog
                  title="Invite Team Member"
                  description="Send an encrypted workspace invitation."
                  trigger={<Button size="sm">Invite Member</Button>}
                >
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <Field label="Work Email" required>
                      <Input type="email" placeholder="teammate@company.com" />
                    </Field>
                    <Field label="Role Scope">
                      <Select defaultValue="editor">
                        <option value="admin">Workspace Admin</option>
                        <option value="editor">Developer / Editor</option>
                        <option value="viewer">Read-Only Auditor</option>
                      </Select>
                    </Field>
                    <Field label="Team Tags">
                      <TagInput defaultValue={['frontend', 'design-system']} />
                    </Field>
                  </div>
                </Dialog>
              </div>
            }
          />
          <Card>
            <CardContent>
              <DataTable
                searchable
                searchPlaceholder="Search members by name, email, or role…"
                columns={[
                  { key: 'name', header: 'Member', sortable: true },
                  { key: 'email', header: 'Email', sortable: true },
                  { key: 'role', header: 'Role', sortable: true },
                  { key: 'mfa', header: '2FA Security' },
                ]}
                data={[
                  { id: '1', name: 'Alex Lane', email: 'alex@moonframe.dev', role: 'Owner', mfa: 'Hardware Key (WebAuthn)' },
                  { id: '2', name: 'Jamie Kim', email: 'jamie@moonframe.dev', role: 'Staff Designer', mfa: 'Authenticator App' },
                  { id: '3', name: 'Sam Rivera', email: 'sam@moonframe.dev', role: 'Principal Engineer', mfa: 'Hardware Key (WebAuthn)' },
                  { id: '4', name: 'Mina Noor', email: 'mina@moonframe.dev', role: 'Security Auditor', mfa: 'Authenticator App' },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      );

    case 'template-sign-in-split':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '2rem', padding: '2rem', alignItems: 'center' }}>
          <Hero>
            <Badge variant="primary">15 Visual Worlds</Badge>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', margin: '0.75rem 0' }}>
              Same semantics. Unmistakable identity.
            </h1>
            <p style={{ color: 'var(--mf-muted)' }}>
              Sign in to manage your Moonframe design tokens, preview templates across 30 appearances, and ship to Next.js.
            </p>
          </Hero>
          <AuthCard
            eyebrow="Workspace Access"
            title="Sign in to Moonframe"
            description="Enter your credentials or continue with your enterprise identity provider."
            status={notice}
            socialActions={
              <>
                <Button variant="secondary" onClick={() => setNotice('Redirecting to GitHub OAuth…')}>Continue with GitHub</Button>
                <Button variant="secondary" onClick={() => setNotice('Redirecting to Google Workspace SSO…')}>Continue with SSO</Button>
              </>
            }
            footer={<span>New to Moonframe? Create a workspace account.</span>}
          >
            <Field label="Work email" required>
              <Input type="email" defaultValue="alex@moonframe.dev" />
            </Field>
            <Field label="Password" required>
              <PasswordField defaultValue="Moonframe#2026" />
            </Field>
            <Checkbox label="Keep this session active for 30 days" defaultChecked />
            <Button onClick={() => setNotice('Authenticated successfully.')}>Sign In to Workspace</Button>
          </AuthCard>
        </div>
      );

    case 'template-sign-up':
      return (
        <div style={{ padding: '2rem', maxWidth: '38rem', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
          <Stepper
            currentStep={1}
            steps={[
              { title: 'Identity', description: 'Work email & profile' },
              { title: 'Security', description: 'Strong credentials' },
              { title: 'Default Skin', description: 'Pick your aesthetic' },
            ]}
          />
          <AuthCard
            eyebrow="Step 2 of 3"
            title="Create your Moonframe Studio"
            description="Configure your founder credentials and default workspace tier."
            status={notice}
          >
            <Field label="Full name" required>
              <Input defaultValue="Alex Lane" />
            </Field>
            <Field label="Organization slug" description="Used for your workspace URL" required>
              <Input defaultValue="orbit-studio" />
            </Field>
            <Field label="Password" required>
              <PasswordField defaultValue="Moonframe#2026!" showStrength />
            </Field>
            <RadioGroup
              label="Workspace Architecture"
              defaultValue="nextjs"
              items={[
                { value: 'nextjs', label: 'Next.js 16 App Router (Recommended)', description: 'Includes ThemeScript SSR & Tailwind v4 bridge' },
                { value: 'react', label: 'Custom React 19 SPA / SSR', description: 'Standard ESM & CSS bundle' },
              ]}
            />
            <Button onClick={() => setNotice('Workspace provisioned! Welcome to Moonframe.')}>Provision Workspace</Button>
          </AuthCard>
        </div>
      );

    case 'template-forgot-password':
      return (
        <div style={{ padding: '2.5rem 1.5rem' }}>
          <AuthCard
            eyebrow="Account Recovery"
            title="Reset your password"
            description="Enter the email associated with your Moonframe organization and we will dispatch a signed recovery link."
            status={notice}
            footer={<span>Remembered your password? Return to Sign In.</span>}
          >
            <Callout title="Cryptographic expiration">
              Recovery links are valid for 15 minutes and invalidate previous tokens immediately.
            </Callout>
            <Field label="Verified work email" required>
              <Input type="email" defaultValue="alex@moonframe.dev" />
            </Field>
            <Button onClick={() => setNotice('Recovery link dispatched to alex@moonframe.dev.')}>
              Send Recovery Link
            </Button>
          </AuthCard>
        </div>
      );

    case 'template-mfa-verify':
      return (
        <div style={{ padding: '2.5rem 1.5rem' }}>
          <AuthCard
            eyebrow="Multi-Factor Verification"
            title="Enter 6-Digit Security Code"
            description="Open your authenticator app or tap your hardware key to verify this session."
            status={notice}
            footer={<span>Lost access to your authenticator? Use a recovery code.</span>}
          >
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
              <OTPInput
                length={6}
                defaultValue="482910"
                onComplete={code => setNotice(`Code ${code} verified.`)}
              />
            </div>
            <Checkbox label="Trust this browser for 14 days" defaultChecked />
            <Button onClick={() => setNotice('MFA challenge passed.')}>Verify & Enter Studio</Button>
          </AuthCard>
        </div>
      );

    case 'template-profile-preferences':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Account Settings"
            title="Profile & Notification Preferences"
            description="Manage your public contributor identity, avatar asset, and alert channels."
          />
          {notice && <Callout title="Preferences updated" variant="primary" dismissible onDismiss={() => setNotice(null)}>{notice}</Callout>}
          <SettingsSection
            title="Public Identity"
            description="Displayed on template commits, review worksheets, and audit logs."
            footer="Changes sync across all workspace skins."
            action={<Button size="sm" onClick={() => setNotice('Profile identity saved.')}>Save Profile</Button>}
          >
            <Field label="Display Name" required>
              <Input defaultValue="Alex Lane" />
            </Field>
            <Field label="Bio & Role">
              <Textarea defaultValue="Principal Design Systems Architect working on 15-skin multi-grammar interfaces." rows={3} />
            </Field>
            <Field label="Expertise Tags">
              <TagInput defaultValue={['design-systems', 'nextjs-16', 'wcag-aa', 'tokens']} />
            </Field>
          </SettingsSection>
          <SettingsSection
            title="Avatar & Brand Asset"
            description="Upload an SVG or PNG emblem (max 2 MB)."
            action={<Button variant="secondary" size="sm">Reset Avatar</Button>}
          >
            <FileDropzone
              accept="image/*"
              title="Drop avatar image here or click to browse"
              description="SVG, PNG, or WebP · Square aspect ratio recommended"
            />
          </SettingsSection>
          <SettingsSection
            title="Notification Channels"
            description="Control how Moonframe alerts you about builds and security events."
            action={<Button size="sm" onClick={() => setNotice('Notification rules saved.')}>Update Alerts</Button>}
          >
            <Switch label="Email me when a production build fails" defaultChecked />
            <Switch label="Weekly digest of skin contrast & QA metrics" defaultChecked />
            <Checkbox label="Subscribe to security advisory bulletins" defaultChecked />
          </SettingsSection>
        </div>
      );

    case 'template-appearance-preferences':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Design System Personalization"
            title="Appearance & Accessibility Studio"
            badge="15 Skins · 30 Modes"
            description="Customize your workspace skin, color mode, layout density, and motion preferences in real time."
          />
          <SettingsSection
            title="Active Skin & Mode"
            description="Switch between all 15 canonical Moonframe skins and Light/Dark/System mode."
            footer="Stored in localStorage under moonframe-theme-v1."
          >
            <Field label="Visual Skin Grammar">
              <SkinSelector label="Visual Skin Grammar" />
            </Field>
            <Field label="Color Appearance">
              <ModeSelector variant="segmented" label="Color Appearance" />
            </Field>
          </SettingsSection>
          <SettingsSection
            title="Ergonomics & Accessibility"
            description="Independent axes for layout spacing, reduced motion, and high contrast."
          >
            <RadioGroup
              label="Layout Density"
              defaultValue="comfortable"
              items={[
                { value: 'compact', label: 'Compact', description: 'High-density tables and tighter control heights' },
                { value: 'comfortable', label: 'Comfortable (Default)', description: 'Balanced spacing for daily product work' },
                { value: 'spacious', label: 'Spacious', description: 'Generous editorial margins and larger targets' },
              ]}
            />
            <Slider label="Preview UI Scale (%)" min={85} max={125} step={5} defaultValue={100} showValue />
          </SettingsSection>
        </div>
      );

    case 'template-api-key-settings':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Developer Platform"
            title="API Keys & Webhook Signing"
            description="Manage scoped bearer tokens and inspect recent authentication events."
            actions={
              <Dialog
                title="Generate Scoped API Token"
                description="Tokens are displayed only once upon creation."
                trigger={<Button size="sm">Create API Key</Button>}
              >
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <Field label="Token Name" required>
                    <Input defaultValue="CI Contract Validator" />
                  </Field>
                  <Field label="Expiration">
                    <Select defaultValue="90d">
                      <option value="30d">30 days</option>
                      <option value="90d">90 days</option>
                      <option value="365d">1 year</option>
                    </Select>
                  </Field>
                </div>
              </Dialog>
            }
          />
          <Callout title="Zero-downtime key rotation" variant="primary">
            Roll keys with a 24-hour grace window so active Next.js deployments never drop requests.
          </Callout>
          <Card>
            <CardHeader>
              <CardTitle>Quick Verification Snippet</CardTitle>
              <CardDescription>Test your bearer token from the terminal</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`curl -X GET "https://api.moonframe.dev/v1/catalog/skins" \\\n  -H "Authorization: Bearer mf_live_98a7bc41e092f"`}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active API Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={[
                  { key: 'name', header: 'Key Name', sortable: true },
                  { key: 'prefix', header: 'Token Prefix' },
                  { key: 'scope', header: 'Scope' },
                  { key: 'lastUsed', header: 'Last Used', sortable: true },
                ]}
                data={[
                  { id: '1', name: 'Production Next.js App', prefix: 'mf_live_98a7…', scope: 'read:catalog', lastUsed: '2 minutes ago' },
                  { id: '2', name: 'GitHub Actions CI', prefix: 'mf_ci_441b…', scope: 'validate:contracts', lastUsed: '1 hour ago' },
                  { id: '3', name: 'Staging Preview', prefix: 'mf_test_19c0…', scope: 'read:catalog', lastUsed: 'Yesterday' },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      );

    case 'template-plans-and-pricing':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.75rem' }}>
          <PageHeader
            eyebrow="Licensing & Tiers"
            title="Plans Built for Every Engineering Team"
            badge={billingPeriod === 'annual' ? 'Save 20% Annually' : 'Monthly Billing'}
            description="Adopt @moonframe/ui across personal prototypes, studio products, or multi-team enterprises."
            actions={
              <SegmentedControl
                label="Billing cycle"
                value={billingPeriod}
                onValueChange={setBillingPeriod}
                items={[
                  { value: 'monthly', label: 'Monthly' },
                  { value: 'annual', label: 'Annual (-20%)' },
                ]}
              />
            }
          />
          {notice && <Callout title="Plan selection" variant="primary" dismissible onDismiss={() => setNotice(null)}>{notice}</Callout>}
          <Grid columns={3}>
            <PricingCard
              name="Starter"
              price="$0"
              period="/forever"
              description="For solo builders and open experiments."
              features={[
                'All 15 canonical skins (Light & Dark)',
                'Core accessible primitives',
                'Next.js 16 App Router support',
                'Community GitHub discussions',
              ]}
              ctaLabel="Start Free"
              onSelect={() => setNotice('Starter plan selected.')}
            />
            <PricingCard
              name="Studio"
              price={billingPeriod === 'annual' ? '$39' : '$49'}
              period="/month"
              badge="Most Popular"
              featured
              description="For product teams shipping distinctive web apps."
              features={[
                'Everything in Starter',
                '66+ reusable components & Level C blocks',
                '22 full-page production templates',
                'Tailwind v4 semantic token bridge',
                'Priority issue triage',
              ]}
              ctaLabel="Upgrade to Studio"
              onSelect={() => setNotice('Studio plan selected.')}
            />
            <PricingCard
              name="Enterprise"
              price={billingPeriod === 'annual' ? '$159' : '$199'}
              period="/month"
              badge="Custom SLA"
              description="For organizations requiring custom skin governance."
              features={[
                'Everything in Studio',
                'Custom DTCG token pipeline integration',
                'Dedicated 105-pair visual QA sign-off',
                'Unlimited workspaces & seats',
              ]}
              ctaLabel="Contact Architecture Team"
              onSelect={() => setNotice('Enterprise inquiry opened.')}
            />
          </Grid>
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion
                items={[
                  { value: 'q1', title: 'Can I switch skins at runtime without reloading Next.js?', content: <p>Yes. ThemeProvider updates data-skin and data-mode attributes instantaneously while ThemeScript prevents initial SSR flash.</p> },
                  { value: 'q2', title: 'Does @moonframe/ui require external icon or font CDNs?', content: <p>No. Moonframe is 100% self-contained with zero external network requests.</p> },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      );

    case 'template-billing-overview':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Finance & Quotas"
            title="Billing & Resource Utilization"
            badge="Studio Annual"
            description="Monitor seat allocations, bandwidth consumption, and historical tax invoices."
          />
          <MetricGrid
            columns={3}
            items={[
              { label: 'Current Cycle Spend', value: '$468.00', delta: 'Paid', detail: 'Renews Nov 1, 2026' },
              { label: 'Active Team Seats', value: '12 / 20', delta: '8 available', detail: 'Studio tier inclusion' },
              { label: 'Artifact Storage', value: '42.8 GB', delta: '43% of quota', detail: '100 GB included' },
            ]}
          />
          <Grid columns={2}>
            <Card>
              <CardHeader>
                <CardTitle>Resource Quotas</CardTitle>
                <CardDescription>Real-time consumption for current billing period</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '1rem' }}>
                <Progress value={60} label="Team seats (12 of 20)" />
                <Progress value={43} label="Artifact storage (42.8 of 100 GB)" />
                <Progress value={28} label="CI visual snapshot minutes (280 of 1,000)" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Profile</CardTitle>
                <CardDescription>Verified billing entity</CardDescription>
              </CardHeader>
              <CardContent>
                <DescriptionList
                  items={[
                    { term: 'Entity Name', details: 'Orbit Studio Pte. Ltd.' },
                    { term: 'Payment Method', details: 'Visa ending in •••• 4242' },
                    { term: 'Billing Contact', details: 'finance@moonframe.dev' },
                    { term: 'Tax ID', details: 'SG-202699182K' },
                  ]}
                />
              </CardContent>
            </Card>
          </Grid>
          <Card>
            <CardHeader>
              <CardTitle>Invoice History</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={[
                  { key: 'invoice', header: 'Invoice #', sortable: true },
                  { key: 'date', header: 'Issued Date', sortable: true },
                  { key: 'amount', header: 'Amount', sortable: true },
                  { key: 'status', header: 'Status' },
                ]}
                data={[
                  { id: '1', invoice: 'INV-2026-10', date: '2026-10-01', amount: '$468.00', status: 'Paid' },
                  { id: '2', invoice: 'INV-2025-10', date: '2025-10-01', amount: '$468.00', status: 'Paid' },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      );

    case 'template-kanban-workspace':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Agile Delivery"
            title="Sprint 14 Kanban Board"
            badge="Moonpanel Ready"
            description="Track component milestones, token proofs, and Next.js showcase deliverables."
            actions={
              <AvatarGroup
                max={4}
                items={[{ fallback: 'AL' }, { fallback: 'JK' }, { fallback: 'SR' }, { fallback: 'MN' }]}
              />
            }
          />
          <Grid columns={3}>
            {[
              {
                col: 'Queued',
                badge: '2 items',
                cards: [
                  { code: 'MF-301', title: 'Audit RTL keyboard focus in nested menus', tag: 'A11y', progress: 20 },
                  { code: 'MF-304', title: 'Add CSV export adapter to DataWorkspace', tag: 'Data', progress: 0 },
                ],
              },
              {
                col: 'In Progress',
                badge: '2 items',
                cards: [
                  { code: 'MF-288', title: 'Build 22 Next.js App Router showcase templates', tag: 'Templates', progress: 85 },
                  { code: 'MF-291', title: 'Verify 15 skins × 2 modes contrast >= 4.5:1', tag: 'Skins', progress: 90 },
                ],
              },
              {
                col: 'Completed',
                badge: '3 items',
                cards: [
                  { code: 'MF-210', title: 'Configure pnpm workspace & workspace:* link', tag: 'DX', progress: 100 },
                  { code: 'MF-225', title: 'Export 66+ typed components from @moonframe/ui', tag: 'Core', progress: 100 },
                  { code: 'MF-240', title: 'Implement zero-FOUC ThemeScript for Next.js', tag: 'SSR', progress: 100 },
                ],
              },
            ].map(column => (
              <Card key={column.col}>
                <CardHeader>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CardTitle>{column.col}</CardTitle>
                    <Badge>{column.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent style={{ display: 'grid', gap: '0.85rem' }}>
                  {column.cards.map(item => (
                    <Card key={item.code}>
                      <CardContent style={{ display: 'grid', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Kbd>{item.code}</Kbd>
                          <Badge variant="primary">{item.tag}</Badge>
                        </div>
                        <strong>{item.title}</strong>
                        <Progress value={item.progress} label={`${item.code} progress`} />
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
      );

    case 'template-messages-workspace':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Team Collaboration"
            title="Design Review & Triage Inbox"
            badge="3 Active Threads"
            description="Coordinate design system reviews, skin grammar notes, and release approvals."
          />
          <Grid columns={2}>
            <Card>
              <CardHeader>
                <CardTitle>Active Threads</CardTitle>
                <CardDescription>Filter by skin or milestone</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '0.75rem' }}>
                <SearchInput placeholder="Search threads…" shortcut="⌘F" />
                {[
                  { title: 'Moonpunk & Moonriot offset shadow review', author: 'Jamie Kim', status: 'Approved', time: '10m ago' },
                  { title: 'Next.js 16 Turbopack workspace build check', author: 'Sam Rivera', status: 'Verified', time: '42m ago' },
                  { title: 'Moonledger tabular density adjustments', author: 'Alex Lane', status: 'In Review', time: '2h ago' },
                ].map(thread => (
                  <Card key={thread.title}>
                    <CardContent style={{ display: 'grid', gap: '0.35rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong>{thread.title}</strong>
                        <Badge variant="primary">{thread.status}</Badge>
                      </div>
                      <small style={{ color: 'var(--mf-muted)' }}>{thread.author} · {thread.time}</small>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Thread Conversation</CardTitle>
                <CardDescription>Moonpunk & Moonriot offset shadow review</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '1rem' }}>
                <Timeline
                  items={[
                    { title: 'Jamie Kim opened review', time: '10:14 AM', badge: 'Design', description: 'Verified 5px solid ink slab shadows in Light and Dark mode.' },
                    { title: 'Sam Rivera attached Playwright proof', time: '10:22 AM', badge: 'QA', description: 'Contrast ratios exceed 7.2:1 across all surface pairs.' },
                  ]}
                />
                <Field label="Post Review Note">
                  <Textarea placeholder="Add your sign-off comment…" rows={3} />
                </Field>
                <Button onClick={() => setNotice('Comment posted to thread.')}>Post Reply</Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      );

    case 'template-ai-chat':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="AI Synthesis Studio"
            title="Moonframe UI Copilot"
            badge="Moonchrome Engine"
            description="Generate skin-aware Next.js layouts and inspect clean @moonframe/ui code."
          />
          <Grid columns={2}>
            <Card>
              <CardHeader>
                <CardTitle>Prompt & Model Parameters</CardTitle>
                <CardDescription>Configure synthesis constraints</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '1rem' }}>
                <Field label="Target Skin Grammar">
                  <SkinSelector />
                </Field>
                <Slider
                  label="Creativity / Temperature"
                  min={0}
                  max={100}
                  value={temperature}
                  onValueChange={setTemperature}
                  showValue
                  formatValue={v => `${(v / 100).toFixed(2)}`}
                />
                <Field label="Prompt Specification">
                  <Textarea
                    rows={4}
                    defaultValue="Create a revenue reconciliation screen using PageHeader, MetricGrid, and a searchable DataTable."
                  />
                </Field>
                <Button onClick={() => setNotice('Synthesized component tree updated.')}>Synthesize Layout</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Generated Next.js App Router Code</CardTitle>
                <CardDescription>Zero external runtime dependencies · 100% typed</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '1rem' }}>
                <CodeBlock
                  language="tsx"
                  code={`import { PageHeader, MetricGrid, DataTable } from '@moonframe/ui';\n\nexport default function SynthesizedScreen() {\n  return (\n    <main>\n      <PageHeader eyebrow="AI Generated" title="Revenue Console" />\n      <MetricGrid items={[{ label: 'MRR', value: '$84,000', delta: '+14%' }]} />\n    </main>\n  );\n}`}
                />
                <Timeline
                  items={[
                    { title: 'Validated imports against @moonframe/ui', time: '12ms', badge: 'PASS' },
                    { title: 'Verified WCAG AA contrast tokens', time: '8ms', badge: 'PASS' },
                  ]}
                />
              </CardContent>
            </Card>
          </Grid>
        </div>
      );

    case 'template-moonledger-invoices':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Moonledger Domain Workbench"
            title="General Ledger & Accounts Receivable"
            badge="FY2026 Q4"
            description="High-density financial reconciliation workbench tailored for the Moonledger visual grammar."
            actions={<Button size="sm">Run Batch Settlement</Button>}
          />
          <MetricGrid
            columns={4}
            items={[
              { label: 'Accounts Receivable', value: '$284,910.00', delta: '+4.2%', detail: '18 open invoices' },
              { label: 'Settled (30d)', value: '$912,400.00', delta: '100% matched', detail: 'Zero discrepancies' },
              { label: 'Overdue > 30d', value: '$4,200.00', delta: '2 accounts', deltaTone: 'danger', detail: 'Automated dunning active' },
              { label: 'Net Working Capital', value: '$1,420,800.00', delta: 'Audited', detail: 'Real-time treasury sync' },
            ]}
          />
          <Card>
            <CardHeader>
              <CardTitle>Invoice Ledger Register</CardTitle>
              <CardDescription>Tabular numeric alignment with instant search and column sorting</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                searchable
                searchPlaceholder="Filter ledger by voucher, client, or amount…"
                columns={[
                  { key: 'voucher', header: 'Voucher #', sortable: true },
                  { key: 'client', header: 'Counterparty', sortable: true },
                  { key: 'net', header: 'Net Amount', sortable: true },
                  { key: 'tax', header: 'Tax (VAT)', sortable: true },
                  { key: 'gross', header: 'Gross Total', sortable: true },
                  { key: 'status', header: 'Settlement' },
                ]}
                data={[
                  { id: '1', voucher: 'VCH-2026-881', client: 'Aether Robotics', net: '$40,000.00', tax: '$3,600.00', gross: '$43,600.00', status: 'Cleared' },
                  { id: '2', voucher: 'VCH-2026-882', client: 'Kinetix BioLabs', net: '$18,000.00', tax: '$1,620.00', gross: '$19,620.00', status: 'Cleared' },
                  { id: '3', voucher: 'VCH-2026-883', client: 'Helios Energy', net: '$4,200.00', tax: '$378.00', gross: '$4,578.00', status: 'Overdue' },
                  { id: '4', voucher: 'VCH-2026-884', client: 'Novastra Cloud', net: '$85,000.00', tax: '$7,650.00', gross: '$92,650.00', status: 'Scheduled' },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      );

    case 'template-moonquest-home':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="Moonquest Guild Chronicle"
            title="Expedition to the Astral Citadel"
            badge="Guild Rank IV"
            description="Journal columns, inset parchment frames, and inventory records designed for the Moonquest skin."
          />
          <Stepper
            currentStep={2}
            steps={[
              { title: 'Outpost Recon', description: 'Waypoints charted' },
              { title: 'Runic Seal', description: '3 of 3 deciphered' },
              { title: 'Citadel Sanctum', description: 'Active expedition' },
              { title: 'Archival Vault', description: 'Locked' },
            ]}
          />
          <Grid columns={2}>
            <Card>
              <CardHeader>
                <CardTitle>Party Roster & Vitality</CardTitle>
                <CardDescription>Active companions in the current expedition</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'grid', gap: '0.85rem' }}>
                <Progress value={92} label="Vanguard Aegis · Stamina (92%)" />
                <Progress value={78} label="Lyra the Chronicler · Arcane Focus (78%)" />
                <Progress value={100} label="Thorne Ironwright · Forge Integrity (100%)" />
              </CardContent>
            </Card>
            <ActivityFeed
              title="Chronicle Log"
              description="Inscribed field discoveries"
              items={[
                { title: 'Discovered Sunstone Reliquary', time: 'Cycle 14', badge: 'Relic', description: 'Added to guild vault with +15 luminance.' },
                { title: 'Completed Northern Watch Contract', time: 'Cycle 12', badge: 'Quest', description: 'Rewarded 480 guild sovereigns.' },
              ]}
            />
          </Grid>
        </div>
      );

    case 'template-public-landing':
      return (
        <div style={{ padding: '1.5rem', display: 'grid', gap: '2rem' }}>
          <Hero>
            <Badge variant="primary">Moonframe UI v0.1 · Next.js 16 Ready</Badge>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', lineHeight: 1.05, margin: '0.75rem 0' }}>
              One Component Architecture.<br />Fifteen Unmistakable Worlds.
            </h1>
            <p style={{ maxWidth: '58ch', color: 'var(--mf-muted)', fontSize: '1.05rem' }}>
              Stop shipping generic clones. Moonframe gives your Next.js application 66+ accessible components and 22 ready-made templates that transform across 15 radical visual grammars.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              <Button size="lg">Install with pnpm</Button>
              <Button variant="secondary" size="lg">Explore 15 Skins</Button>
            </div>
          </Hero>
          <MetricGrid
            columns={4}
            items={[
              { label: 'Canonical Skins', value: '15', delta: '30 Modes', detail: 'Light & Dark for every skin' },
              { label: 'Reusable Exports', value: '66+', delta: 'Typed', detail: 'Primitives + Level C Blocks' },
              { label: 'Contrast Floor', value: '4.5:1', delta: 'WCAG AA', detail: 'Playwright verified' },
              { label: 'Runtime Deps', value: '0', delta: 'Pure React', detail: 'No external font/icon requests' },
            ]}
          />
        </div>
      );

    case 'template-documentation-landing':
      return (
        <AppShell>
          <Sidebar>
            <strong>MOONFRAME DOCS</strong>
            <Nav aria-label="Documentation sections" style={{ marginTop: '1rem' }}>
              <NavItem active href="#quickstart">Quickstart (pnpm)</NavItem>
              <NavItem href="#nextjs">Next.js 16 App Router</NavItem>
              <NavItem href="#tailwind">Tailwind v4 Bridge</NavItem>
              <NavItem href="#skins">15 Skin Grammars</NavItem>
            </Nav>
          </Sidebar>
          <Main>
            <PageHeader
              eyebrow="Developer Guide"
              title="Getting Started with @moonframe/ui"
              badge="Node 24.22.1 LTS"
              description="Install via pnpm, configure zero-FOUC server rendering in Next.js, and compose with 66+ typed components."
            />
            <Callout title="Zero External Network Calls" variant="primary">
              Moonframe ships complete CSS recipes and semantic components without external font or icon CDNs.
            </Callout>
            <Card style={{ marginTop: '1.25rem' }}>
              <CardHeader>
                <CardTitle>1. Install & Run with pnpm</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock language="bash" code={`pnpm install\npnpm run dev`} />
              </CardContent>
            </Card>
            <Card style={{ marginTop: '1.25rem' }}>
              <CardHeader>
                <CardTitle>2. Configure Next.js Root Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="tsx"
                  code={`import '@moonframe/ui/styles.css';\nimport { ThemeProvider, ThemeScript } from '@moonframe/ui';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="en" suppressHydrationWarning>\n      <head><ThemeScript defaultSkin="classic" defaultMode="system" /></head>\n      <body><ThemeProvider syncDocumentElement>{children}</ThemeProvider></body>\n    </html>\n  );\n}`}
                />
              </CardContent>
            </Card>
          </Main>
        </AppShell>
      );

    case 'template-not-found':
      return (
        <div style={{ padding: '3rem 1.5rem', maxWidth: '42rem', margin: '0 auto' }}>
          <EmptyState
            icon={<Badge variant="danger">ERROR 404</Badge>}
            title="Coordinates Outside Known Orbit"
            description="The page or template you requested could not be located in this workspace."
            action={
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button asChild><a href="/">Return to Showcase Home</a></Button>
                <Button variant="secondary" asChild><a href="/templates">Browse 22 Templates</a></Button>
              </div>
            }
          />
        </div>
      );

    case 'template-maintenance':
    default:
      return (
        <div style={{ padding: '2rem 1.5rem', maxWidth: '48rem', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
          <PageHeader
            eyebrow="System Operations"
            title="Scheduled Rack & Telemetry Upgrade"
            badge="74% Complete"
            description="We are applying zero-data-loss schema migrations across primary clusters."
          />
          <Callout title="Estimated completion: 12 minutes" variant="primary">
            Read-only previews remain online while write operations are queued safely.
          </Callout>
          <Card>
            <CardHeader>
              <CardTitle>Migration Progress</CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'grid', gap: '1rem' }}>
              <Progress value={74} label="Cluster migration progress (74%)" />
              <Timeline
                items={[
                  { title: 'Pre-flight snapshot checksums verified', time: '04:00 UTC', badge: 'Done' },
                  { title: 'APAC & EU edge nodes upgraded', time: '04:18 UTC', badge: 'Done' },
                  { title: 'US-East primary ledger resync', time: 'In progress', badge: 'Active' },
                ]}
              />
            </CardContent>
          </Card>
        </div>
      );
  }
}
