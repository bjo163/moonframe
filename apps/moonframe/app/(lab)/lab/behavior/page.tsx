'use client';

import React, { useEffect, useState } from 'react';
import {
  Button, Checkbox, Switch, Tabs, Dialog, Accordion, Input, Select,
  Field, RadioGroup, DropdownMenu, Popover, Tooltip, DataTable,
  OTPInput, PasswordField, TagInput, SegmentedControl,
} from '@moonwitness/moonframe';

const erpServices = [
  { service: 'Payments API', environment: 'Production', status: 'Healthy', region: 'sin1', requests: '12.4k', latency: '42 ms', cost: '$840' },
  { service: 'Auth Service', environment: 'Production', status: 'Healthy', region: 'iad1', requests: '8.2k', latency: '39 ms', cost: '$610' },
  { service: 'Events Worker', environment: 'Production', status: 'Degraded', region: 'sfo1', requests: '22.1k', latency: '116 ms', cost: '$490' },
  { service: 'Customer Sync', environment: 'Staging', status: 'Healthy', region: 'fra1', requests: '3.6k', latency: '57 ms', cost: '$320' },
  { service: 'Search Index', environment: 'Production', status: 'Attention', region: 'syd1', requests: '18.8k', latency: '203 ms', cost: '$390' },
  { service: 'Audit Export', environment: 'Staging', status: 'Healthy', region: 'sin1', requests: '1.2k', latency: '64 ms', cost: '$190' },
];

export default function BehaviorFixturePage() {
  const [open, setOpen] = useState(false);
  const [archiveFixture, setArchiveFixture] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveComplete, setArchiveComplete] = useState(false);
  const [authFixture, setAuthFixture] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [articleFixture, setArticleFixture] = useState(false);
  const [erpFixture, setErpFixture] = useState(false);
  const [erpStatusFilter, setErpStatusFilter] = useState('all');
  const [erpRegionFilter, setErpRegionFilter] = useState('all');
  const [erpSearch, setErpSearch] = useState('');
  const [statesFixture, setStatesFixture] = useState(false);
  const [previewState, setPreviewState] = useState<'loading' | 'empty' | 'error' | 'denied'>('loading');
  const [previewNotice, setPreviewNotice] = useState('');
  const [checked, setChecked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [menuChoice, setMenuChoice] = useState('none');
  const [otp, setOtp] = useState('');
  const [hasInitialParam, setHasInitialParam] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).has('initial');
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setHasInitialParam(query.has('initial'));
    setAuthFixture(query.get('fixture') === 'auth');
    setArticleFixture(query.get('fixture') === 'article');
    setErpFixture(query.get('fixture') === 'enterprise');
    setStatesFixture(query.get('fixture') === 'states');
    const shouldOpenArchiveFixture = query.get('fixture') === 'archive-task';
    setArchiveFixture(shouldOpenArchiveFixture);
    setArchiveOpen(shouldOpenArchiveFixture);
  }, []);

  const filteredErpServices = erpServices.filter(row => {
    const matchesStatus = erpStatusFilter === 'all' || row.status === erpStatusFilter;
    const matchesRegion = erpRegionFilter === 'all' || row.region === erpRegionFilter;
    const query = erpSearch.trim().toLowerCase();
    const matchesSearch = !query || `${row.service} ${row.region}`.toLowerCase().includes(query);
    return matchesStatus && matchesRegion && matchesSearch;
  });

  function submitAuthPreview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setAuthMessage(`Preview sign-in accepted for ${String(formData.get('email'))}. No account or session was created.`);
  }

  return (
    <main data-skin="classic" data-mode="light" style={{ padding: '1.5rem' }}>
      {!authFixture && !articleFixture && !erpFixture && !statesFixture && <h1>Components</h1>}
      {authFixture && <section data-fixture="auth-preview" aria-labelledby="auth-preview-title" style={{ maxWidth: 440, margin: '2rem auto', padding: '2rem', border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)', background: 'var(--mf-surface)' }}>
        <header style={{ marginBlockEnd: '1.5rem' }}>
          <p style={{ color: 'var(--mf-muted)', fontSize: '.875rem' }}>Northstar Studio workspace</p>
          <h1 id="auth-preview-title">Sign in to your workspace</h1>
          <p>Enter your details to preview the sign-in flow.</p>
        </header>
        <form aria-label="Sign in to Northstar Studio" onSubmit={submitAuthPreview} style={{ display: 'grid', gap: '1rem' }}>
          <Field label="Email address" required>
            <Input name="email" type="email" autoComplete="email" required />
          </Field>
          <Field label="Password" required>
            <Input name="password" type="password" autoComplete="current-password" required />
          </Field>
          <Checkbox name="remember" label="Remember this device" />
          <Button type="submit">Sign in</Button>
        </form>
        <p style={{ color: 'var(--mf-muted)', fontSize: '.875rem', marginBlock: '1rem' }}>Local preview only. Credentials are not sent or saved; no account or session is created.</p>
        <p role="status" aria-live="polite">{authMessage}</p>
      </section>}
      {articleFixture && <article data-fixture="article-preview" aria-labelledby="article-preview-title" style={{ maxWidth: 760, margin: '2rem auto', color: 'var(--mf-text)' }}>
        <header style={{ maxWidth: 640, margin: '0 auto 2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--mf-accent)', fontSize: '.8rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>Field notes · Planning</p>
          <h1 id="article-preview-title">Make room for the work that matters</h1>
          <p style={{ color: 'var(--mf-muted)', fontSize: '1.1rem' }}>A gentler planning rhythm can make ambitious work easier to begin, easier to share, and easier to finish.</p>
          <p>By Maya Chen · <time dateTime="2026-10-25">October 25, 2026</time> · 8 min read</p>
        </header>
        <figure style={{ margin: 0 }}>
          <div role="img" aria-label="Abstract illustration of a glowing moon above a quiet horizon, with an orbiting path and small stars" style={{ minHeight: 320, borderRadius: 'var(--mf-radius)', border: '1px solid var(--mf-border)', background: 'radial-gradient(circle at 72% 30%, var(--mf-accent) 0 7%, transparent 7.5%), radial-gradient(circle at 18% 22%, var(--mf-text) 0 1px, transparent 2px), radial-gradient(circle at 38% 15%, var(--mf-text) 0 1px, transparent 2px), radial-gradient(circle at 86% 58%, var(--mf-text) 0 1px, transparent 2px), linear-gradient(160deg, transparent 0 58%, color-mix(in srgb, var(--mf-accent) 25%, var(--mf-surface)) 58.2% 59%, transparent 59.2%), linear-gradient(180deg, var(--mf-surface-raised), var(--mf-surface))' }} />
          <figcaption style={{ color: 'var(--mf-muted)', fontSize: '.875rem', marginBlockStart: '.75rem' }}>A clear horizon makes the next step easier to see.</figcaption>
        </figure>
        <div style={{ maxWidth: 640, margin: '2rem auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
          <p>Good plans do not need to predict every turn. They need to help a team see what matters now, why it matters, and where to begin together.</p>
          <h2>Start with the next honest step</h2>
          <p>When a goal feels too large to hold, make the next action small enough to name. A clear first step gives the rest of the work somewhere to land without pretending the whole path is already known.</p>
          <p>Write down the decision, the person who can move it forward, and the moment you will check in again. That small record turns a hopeful conversation into a useful shared reference.</p>
          <blockquote style={{ marginInline: 0, paddingInlineStart: '1.25rem', borderInlineStart: '3px solid var(--mf-accent)', fontSize: '1.25rem' }}>“A good plan creates room to pay attention.”</blockquote>
          <h2>Leave space for the unexpected</h2>
          <p>Keep a little capacity unassigned. Questions, discoveries, and ordinary life will arrive; a plan with breathing room can respond without turning every change into a failure.</p>
          <p>Return to the work, notice what changed, and choose the next honest step. Progress becomes easier to share when the plan makes space for both direction and discovery.</p>
        </div>
      </article>}
      {erpFixture && <section data-fixture="enterprise-preview" aria-labelledby="enterprise-preview-title" style={{ maxWidth: 1200, margin: '2rem auto', color: 'var(--mf-text)' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '1rem', marginBlockEnd: '1.25rem' }}>
          <div><p style={{ color: 'var(--mf-muted)', fontSize: '.8rem' }}>OPERATIONS · DEMO DATA · 12:00 UTC</p><h1 id="enterprise-preview-title">Service operations</h1><p style={{ color: 'var(--mf-muted)' }}>Production and staging service health, traffic, and monthly cost.</p></div>
          <Button variant="secondary">Export report</Button>
        </header>
        <dl aria-label="Service summary" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '.75rem', marginBlock: '1.25rem' }}>
          {[['Services', '6'], ['Healthy', '4'], ['Needs attention', '2'], ['Monthly spend', '$2,840']].map(([label, value]) => <div key={label} style={{ border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)', background: 'var(--mf-surface)', padding: '.75rem 1rem' }}><dt style={{ color: 'var(--mf-muted)', fontSize: '.8rem' }}>{label}</dt><dd style={{ margin: '.25rem 0 0', fontSize: '1.25rem', fontWeight: 700 }}>{value}</dd></div>)}
        </dl>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: '.75rem', marginBlock: '1rem' }}>
          <label style={{ display: 'grid', gap: '.25rem', fontSize: '.8rem' }}>Search services<Input aria-label="Search services" placeholder="Service or region" value={erpSearch} onChange={event => setErpSearch(event.target.value)} /></label>
          <label style={{ display: 'grid', gap: '.25rem', fontSize: '.8rem' }}>Status<Select aria-label="Filter by status" value={erpStatusFilter} onChange={event => setErpStatusFilter(event.target.value)}><option value="all">All statuses</option><option value="Healthy">Healthy</option><option value="Degraded">Degraded</option><option value="Attention">Attention</option></Select></label>
          <label style={{ display: 'grid', gap: '.25rem', fontSize: '.8rem' }}>Region<Select aria-label="Filter by region" value={erpRegionFilter} onChange={event => setErpRegionFilter(event.target.value)}><option value="all">All regions</option><option value="sin1">sin1</option><option value="iad1">iad1</option><option value="sfo1">sfo1</option><option value="fra1">fra1</option><option value="syd1">syd1</option></Select></label>
          <p aria-live="polite" style={{ marginInlineStart: 'auto', color: 'var(--mf-muted)', fontSize: '.875rem' }}>{filteredErpServices.length} of 6 services</p>
        </div>
        <div style={{ overflowX: 'auto', border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)' }}>
          <table aria-label="Service inventory" style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--mf-surface)', fontSize: '.8rem', lineHeight: 1.35 }}>
            <caption style={{ padding: '.65rem .8rem', textAlign: 'start', fontWeight: 700 }}>Service inventory · refreshed 12:00 UTC</caption>
            <thead><tr>{['Service', 'Environment', 'Status', 'Region', 'Requests / 24h', 'p95 latency', 'Monthly cost'].map(label => <th key={label} scope="col" style={{ padding: '.55rem .7rem', textAlign: 'start', whiteSpace: 'nowrap', borderBlock: '1px solid var(--mf-border)', color: 'var(--mf-muted)' }}>{label}</th>)}</tr></thead>
            <tbody>{filteredErpServices.map(row => <tr key={row.service}>{[row.service, row.environment, row.status, row.region, row.requests, row.latency, row.cost].map((value, index) => <td key={index} style={{ padding: '.55rem .7rem', whiteSpace: 'nowrap', borderBlockEnd: '1px solid var(--mf-border)' }}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>}
      {statesFixture && <section data-fixture="states-preview" aria-labelledby="states-preview-title" style={{ maxWidth: 760, margin: '2rem auto', color: 'var(--mf-text)' }}>
        <header style={{ marginBlockEnd: '1.5rem' }}><p style={{ color: 'var(--mf-muted)', fontSize: '.8rem' }}>WORKSPACE · LOCAL PREVIEW</p><h1 id="states-preview-title">Request state previews</h1><p>Choose a fixed state to inspect the message and its available action.</p></header>
        <div role="group" aria-label="Choose request state" style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBlockEnd: '1rem' }}>
          {(['loading', 'empty', 'error', 'denied'] as const).map(state => <Button key={state} variant={previewState === state ? 'primary' : 'secondary'} aria-pressed={previewState === state} onClick={() => { setPreviewState(state); setPreviewNotice(''); }}>{state[0].toUpperCase() + state.slice(1)}</Button>)}
        </div>
        <section data-state={previewState} aria-live="polite" aria-busy={previewState === 'loading'} style={{ minHeight: 220, padding: '1.5rem', border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)', background: 'var(--mf-surface)' }}>
          {previewState === 'loading' && <div><h2>Loading projects</h2><p role="status">Fetching the latest workspace projects…</p><div aria-hidden="true" style={{ height: 12, marginBlock: '.75rem', borderRadius: 'var(--mf-radius)', background: 'var(--mf-surface-raised)' }} /><div aria-hidden="true" style={{ height: 12, width: '72%', borderRadius: 'var(--mf-radius)', background: 'var(--mf-surface-raised)' }} /><Button variant="secondary" onClick={() => { setPreviewNotice(''); setPreviewState('empty'); }}>Cancel request</Button></div>}
          {previewState === 'empty' && <div><h2>No projects yet</h2><p>Create a project to give your next idea a home.</p><Button onClick={() => setPreviewNotice('Create project preview opened; no project was created.')}>Create project</Button></div>}
          {previewState === 'error' && <div role="alert"><h2>Projects could not load</h2><p>The workspace service did not respond. Your work has not changed.</p><Button onClick={() => { setPreviewNotice(''); setPreviewState('loading'); }}>Try again</Button></div>}
          {previewState === 'denied' && <div role="alert"><h2>You do not have access to these projects</h2><p>Ask a workspace administrator to review your permissions.</p><Button onClick={() => setPreviewNotice('Access request prepared locally; nothing was sent.')}>Request access</Button></div>}
          {previewNotice && <p role="status" aria-live="polite">{previewNotice}</p>}
        </section>
      </section>}
      {archiveFixture && <section data-fixture="archive-task-dialog" aria-labelledby="archive-task-fixture-title">
        <h2 id="archive-task-fixture-title">Project tasks</h2>
        <p>T-1045 · Verify scheduled export · Mateo Silva · Complete</p>
        <Dialog
          title="Archive completed task?"
          description={'“Verify scheduled export” is complete. You can find archived tasks in the project history.'}
          open={archiveOpen}
          onOpenChange={setArchiveOpen}
          trigger={<Button variant="danger">Archive task T-1045</Button>}
        >
          <div className="mf-dialog-actions">
            <Button variant="secondary" onClick={() => setArchiveOpen(false)}>Keep task</Button>
            <Button variant="danger" onClick={() => { setArchiveComplete(true); setArchiveOpen(false); }}>Archive task</Button>
          </div>
        </Dialog>
        {archiveComplete && <p role="status">Task archived in this preview.</p>}
      </section>}
      {hasInitialParam && (
        <Dialog title="Initially open" defaultOpen>
          Initial modal content
        </Dialog>
      )}
      <Dialog
        title="Create workspace"
        description="Enter a workspace name"
        trigger={<Button>Open dialog</Button>}
      >
        <Input aria-label="Workspace name" />
        <Button>Save</Button>
      </Dialog>
      <Button onClick={() => setOpen(true)}>Open controlled</Button>
      <Dialog title="Controlled dialog" open={open} onOpenChange={setOpen}>
        <Button onClick={() => setOpen(false)}>Done</Button>
      </Dialog>
      <Tabs
        label="Workspace sections"
        items={[
          { value: 'overview', label: 'Overview', content: 'Overview content' },
          { value: 'disabled', label: 'Disabled', content: 'Disabled content', disabled: true },
          { value: 'activity', label: 'Activity', content: 'Activity content' },
          { value: 'settings', label: 'Settings', content: 'Settings content' },
        ]}
      />
      <div dir="rtl">
        <Tabs
          label="RTL sections"
          items={[
            { value: 'first', label: 'RTL first', content: 'First RTL content' },
            { value: 'second', label: 'RTL second', content: 'Second RTL content' },
          ]}
        />
      </div>
      <Accordion
        items={[
          { value: 'first', title: 'First disclosure', content: 'First disclosure content' },
          { value: 'second', title: 'Second disclosure', content: 'Second disclosure content' },
        ]}
      />
      <Checkbox label="Email updates" />
      <Switch label="Notifications" />
      <Checkbox label="Disabled checkbox" disabled />
      <Checkbox
        label="Controlled checkbox"
        checked={checked}
        onChange={event => setChecked(event.currentTarget.checked)}
      />
      <Switch
        label="Controlled switch"
        checked={enabled}
        onChange={event => setEnabled(event.currentTarget.checked)}
      />
      <Switch label="Disabled switch" disabled />
      <Select aria-label="Country" defaultValue="id">
        <option value="id">Indonesia</option>
        <option value="my">Malaysia</option>
      </Select>
      <Button asChild variant="secondary">
        <a href="#next-route">Next Route Link</a>
      </Button>
      <Field label="Project slug" description="Lowercase identifier" error="Slug already in use" required>
        <Input defaultValue="moonframe" />
      </Field>
      <RadioGroup
        label="Deployment tier"
        defaultValue="hobby"
        items={[
          { value: 'hobby', label: 'Hobby' },
          { value: 'enterprise', label: 'Enterprise' },
        ]}
      />
      <DropdownMenu
        label="Project actions"
        trigger={<Button>Open menu</Button>}
        items={[
          { value: 'duplicate', label: 'Duplicate project', onSelect: v => setMenuChoice(v ?? 'none') },
          { value: 'archive', label: 'Archive project', onSelect: v => setMenuChoice(v ?? 'none') },
        ]}
      />
      <output aria-label="Menu selection">{menuChoice}</output>
      <Popover title="Quick help" trigger={<Button>Open popover</Button>}>
        <p>Popover body copy</p>
      </Popover>
      <Tooltip content="Keyboard shortcut Ctrl+K">
        <Button>Shortcut trigger</Button>
      </Tooltip>
      <DataTable
        caption="Deployments table"
        searchable
        searchPlaceholder="Filter deployments"
        columns={[
          { key: 'service', header: 'Service', sortable: true },
          { key: 'region', header: 'Region' },
        ]}
        data={[
          { id: '1', service: 'Zulu API', region: 'sin1' },
          { id: '2', service: 'Alpha Web', region: 'iad1' },
        ]}
      />
      <OTPInput length={6} label="MFA code" value={otp} onValueChange={setOtp} />
      <PasswordField aria-label="Account password" defaultValue="Moonframe#2026" showStrength />
      <TagInput label="Project tags" defaultValue={['nextjs', 'pnpm']} />
      <SegmentedControl
        label="Billing cycle"
        defaultValue="annual"
        items={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'annual', label: 'Annual' },
        ]}
      />
    </main>
  );
}
