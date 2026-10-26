'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ThemeProvider, useTheme, skins, Button, Input, Textarea, Label, Select,
  Badge, Card, CardHeader, CardTitle, CardDescription, CardContent,
  Checkbox, Switch, Progress, Avatar, Alert, Skeleton, Separator,
  Dialog, Tabs, Accordion, Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell, TableCaption,
  type SkinId, type Mode, type Density, type Motion, type Contrast,
} from '@moonwitness/moonframe';
import './lab.css';

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  status: string;
  progress: number;
  owner: string;
  date: string;
}

const STORAGE_KEY = 'moonframe-demo-projects-v1';
const seedProjects: ProjectItem[] = [
  { id: 'mf-01', name: 'Orbit design system', category: 'Design systems', status: 'In progress', progress: 72, owner: 'AL', date: '2026-11-12' },
  { id: 'mf-02', name: 'Lunar commerce', category: 'Product design', status: 'In review', progress: 92, owner: 'JK', date: '2026-11-18' },
  { id: 'mf-03', name: 'Mission control', category: 'Development', status: 'In progress', progress: 48, owner: 'SR', date: '2026-11-24' },
  { id: 'mf-04', name: 'After hours studio', category: 'Brand identity', status: 'Completed', progress: 100, owner: 'AL', date: '2026-10-22' },
  { id: 'mf-05', name: 'Zero gravity', category: 'Exploration', status: 'Planned', progress: 12, owner: 'MN', date: '2026-12-02' },
];
const dashboardFixtureTasks = [
  { id: 'T-1042', task: 'Confirm migration checklist', owner: 'Amina Yusuf', status: 'In progress', date: '2026-10-27', estimate: '3 h' },
  { id: 'T-1043', task: 'Review workspace permissions', owner: 'Leo Martin', status: 'Needs review', date: '2026-10-28', estimate: '2 h' },
  { id: 'T-1044', task: 'Publish release notes draft', owner: 'Nia Patel', status: 'Not started', date: '2026-10-30', estimate: '4 h' },
  { id: 'T-1045', task: 'Verify scheduled export', owner: 'Mateo Silva', status: 'Complete', date: '2026-10-24', estimate: '1 h' },
  { id: 'T-1046', task: 'Test recovery procedure', owner: 'Hana Kim', status: 'Blocked', date: '2026-10-31', estimate: '5 h' },
];
const dashboardFixtureMetrics = [
  { label: 'Open tasks', value: '12' },
  { label: 'In progress', value: '4' },
  { label: 'Completed this week', value: '18' },
];
const dashboardFixtureDescription = 'Quarterly migration readiness — confirm access, review the rollback checklist, and notify the operations group before the maintenance window.';
const statusValues = ['Planned', 'In progress', 'In review', 'Completed'];
const palette = ['#c1e65b','#ff635d','#ce976b','#8d8d8d','#48c9a0','#ffaa40','#b6a084','#e5b751','#d8b5ed','#9ab578','#a7a7aa','#a0b5dc','#afa2ff','#c9aa6e','#72b0df'];
const icons: Record<string, string> = {
  grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  layers: 'm12 3 10 5-10 5L2 8z M2 12l10 5 10-5 M2 16l10 5 10-5',
  plus: 'M12 5v14 M5 12h14',
  arrow: 'M7 17 17 7 M7 7h10v10',
  search: 'M21 21l-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
  check: 'm5 12 4 4L19 6',
  code: 'm8 7-5 5 5 5 M16 7l5 5-5 5 M14 3l-4 18',
  sun: 'M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.6 5.6 1.4 1.4 M17 17l1.4 1.4 M5.6 18.4 1.4-1.4 M17 7l1.4-1.4 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  clock: 'M12 8v4l3 2 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
};
function Icon({ name, size = 18 }: { name: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[name] || icons.grid} /></svg>;
}
function loadProjects(): ProjectItem[] {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) return seedProjects;
    const stored = JSON.parse(raw);
    if (Array.isArray(stored) && stored.length <= 500 && stored.every(p => p && typeof p.id === 'string' && typeof p.name === 'string' && typeof p.category === 'string' && typeof p.owner === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(p.date) && Number.isFinite(Date.parse(p.date)) && statusValues.includes(p.status) && Number.isFinite(p.progress) && p.progress >= 0 && p.progress <= 100)) return stored;
  } catch { /* In-memory workspace still works when storage is unavailable. */ }
  return seedProjects;
}

function DashboardFixture({ decorationsOff, onDecorationsOffChange }: { decorationsOff: boolean; onDecorationsOffChange: (enabled: boolean) => void }) {
  const [taskSearch, setTaskSearch] = useState('');
  const [taskSort, setTaskSort] = useState<'due-date' | 'task'>('due-date');
  const [activeNav, setActiveNav] = useState('Overview');
  const navItems = ['Overview', 'Projects', 'Tasks', 'Reports', 'Settings'];
  const visibleFixtureTasks = useMemo(() => dashboardFixtureTasks
    .filter(item => `${item.id} ${item.task} ${item.owner} ${item.status}`.toLowerCase().includes(taskSearch.trim().toLowerCase()))
    .sort((a, b) => taskSort === 'task' ? a.task.localeCompare(b.task, 'en-US') : a.date.localeCompare(b.date)), [taskSearch, taskSort]);

  return <section className="fixture-dashboard" data-fixture="dashboard-overview" aria-labelledby="fixture-dashboard-title">
    <div className="fixture-dashboard-utility">
      <nav aria-label="Breadcrumb">
        <ol><li><a href="#fixture-dashboard-title">Northstar Studio</a></li><li aria-current="page">Overview</li></ol>
      </nav>
      <div className="fixture-dashboard-utility-actions">
        <Input aria-label="Search project tasks" placeholder="Search project tasks" value={taskSearch} onChange={event => setTaskSearch(event.target.value)} />
        <span className="fixture-dashboard-status" role="status"><span aria-hidden="true" />3 updates</span>
        <Avatar fallback="NS" alt="Northstar Studio profile" />
      </div>
    </div>
    <div className="fixture-dashboard-body">
      <aside className="fixture-dashboard-rail" aria-label="Northstar workspace sidebar">
        <a className="fixture-dashboard-rail-brand" href="#fixture-dashboard-title" aria-label="Northstar Studio home"><span className="fixture-dashboard-rail-brand-mark" aria-hidden="true">N</span><span><span className="fixture-dashboard-rail-brand-name">Northstar</span><small className="fixture-dashboard-rail-brand-edition">MISSION CONTROL</small></span></a>
        <nav aria-label="Workspace sections">
          {navItems.map((item, index) => <button key={item} type="button" aria-current={activeNav === item ? 'page' : undefined} onClick={() => setActiveNav(item)}><span className="fixture-dashboard-rail-glyph" aria-hidden="true">{['⌂', '◇', '≡', '↗', '⚙'][index]}</span>{item}</button>)}
        </nav>
        <span className="fixture-dashboard-rail-scratch" aria-hidden="true" />
      </aside>
      <div className="fixture-dashboard-main">
    <div className="fixture-dashboard-heading">
      <div>
        <div className="demo-eyebrow">SHARED QA FIXTURE</div>
        <h2 id="fixture-dashboard-title">Overview</h2>
        <p>Northstar Studio</p>
        <p className="fixture-dashboard-marginalia" data-decorative="true">Field note 07 · readiness before launch</p>
      </div>
      <div className="fixture-dashboard-heading-actions">
        <time dateTime="2026-10-25">Sunday, October 25, 2026</time>
        <Switch label="Hide decorative elements" checked={decorationsOff} onChange={event => onDecorationsOffChange(event.currentTarget.checked)} />
      </div>
    </div>
    <dl className="fixture-dashboard-metrics" aria-label="Dashboard metrics">
      {dashboardFixtureMetrics.map(metric => <div className="fixture-dashboard-metric" key={metric.label}>
        <dt>{metric.label}</dt>
        <dd>{metric.value}</dd>
      </div>)}
    </dl>
    <div className="fixture-dashboard-content">
      <section aria-labelledby="fixture-activity-title">
        <h3 id="fixture-activity-title">Recent project activity</h3>
        <ul className="fixture-dashboard-activity">
          {dashboardFixtureTasks.map(item => <li key={item.id}>
            <div><strong>{item.task}</strong><span>{item.owner} · {item.id}</span></div>
            <div><Badge>{item.status}</Badge><time dateTime={item.date}>{item.date}</time></div>
          </li>)}
        </ul>
      </section>
      <Card className="fixture-dashboard-note">
        <CardHeader><CardTitle>Quarterly migration readiness</CardTitle><CardDescription>Shared long-copy probe</CardDescription></CardHeader>
        <CardContent><p>{dashboardFixtureDescription}</p></CardContent>
      </Card>
    </div>
    <section className="fixture-dashboard-table-section" aria-labelledby="fixture-tasks-title">
      <div className="fixture-dashboard-table-heading"><h3 id="fixture-tasks-title">Project tasks</h3><span>{visibleFixtureTasks.length} of {dashboardFixtureTasks.length} tasks</span></div>
      <div className="fixture-dashboard-table-toolbar">
        <Select aria-label="Sort project tasks" value={taskSort} onChange={event => setTaskSort(event.target.value as 'due-date' | 'task')}>
          <option value="due-date">Due date</option><option value="task">Task name</option>
        </Select>
      </div>
      <div className="fixture-dashboard-table-scroll">
        <Table>
          <TableCaption>Project tasks</TableCaption>
          <TableHeader><TableRow><TableHead>Task</TableHead><TableHead>Owner</TableHead><TableHead>Status</TableHead><TableHead>Due date</TableHead><TableHead>Estimate</TableHead></TableRow></TableHeader>
          <TableBody>{visibleFixtureTasks.map(item => <TableRow key={item.id}>
            <TableCell><span className="fixture-task-name">{item.task}</span><span className="fixture-task-id">{item.id}</span></TableCell>
            <TableCell>{item.owner}</TableCell><TableCell><Badge>{item.status}</Badge></TableCell>
            <TableCell><time dateTime={item.date}>{item.date}</time></TableCell><TableCell>{item.estimate}</TableCell>
          </TableRow>)}{visibleFixtureTasks.length === 0 && <TableRow><TableCell colSpan={5}>No matching tasks.</TableCell></TableRow>}</TableBody>
        </Table>
      </div>
    </section>
    <DashboardProfileForm />
      </div>
    </div>
  </section>;
}

function DashboardProfileForm() {
  const [workspaceName, setWorkspaceName] = useState('Northstar Studio');
  const [workspaceUrl, setWorkspaceUrl] = useState('https://northstar.example/workspace');
  const [description, setDescription] = useState(dashboardFixtureDescription);
  const [reportTime, setReportTime] = useState('09:30');
  const [notifications, setNotifications] = useState(true);
  const [urlError, setUrlError] = useState(false);
  const [saveState, setSaveState] = useState<'idle' | 'pending' | 'success'>('idle');

  function saveProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let valid = false;
    try {
      const parsed = new URL(workspaceUrl);
      valid = parsed.protocol === 'https:' && Boolean(parsed.hostname.includes('.'));
    } catch { /* Invalid URL is announced beside the field. */ }
    if (!valid) {
      setUrlError(true);
      setSaveState('idle');
      return;
    }
    setUrlError(false);
    setSaveState('pending');
    window.setTimeout(() => setSaveState('success'), 180);
  }

  function cancelChanges() {
    setWorkspaceName('Northstar Studio');
    setWorkspaceUrl('https://northstar.example/workspace');
    setDescription(dashboardFixtureDescription);
    setReportTime('09:30');
    setNotifications(true);
    setUrlError(false);
    setSaveState('idle');
  }

  return <section className="fixture-profile" aria-labelledby="fixture-profile-title">
    <div className="fixture-profile-heading">
      <div><div className="demo-eyebrow">SHARED FORM FIXTURE</div><h3 id="fixture-profile-title">Workspace profile</h3></div>
      <span>Default report timezone: UTC</span>
    </div>
    <form className="fixture-profile-form" noValidate onSubmit={saveProfile}>
      <div className="fixture-profile-grid">
        <div className="fixture-profile-field">
          <Label htmlFor="fixture-workspace-name">Workspace name</Label>
          <Input id="fixture-workspace-name" name="workspaceName" required value={workspaceName} onChange={event => { setWorkspaceName(event.target.value); setSaveState('idle'); }} />
        </div>
        <div className="fixture-profile-field">
          <Label htmlFor="fixture-workspace-url">Workspace URL</Label>
          <Input id="fixture-workspace-url" name="workspaceUrl" type="url" inputMode="url" required value={workspaceUrl} aria-invalid={urlError || undefined} aria-describedby={urlError ? 'fixture-workspace-url-error' : 'fixture-workspace-url-help'} onChange={event => { setWorkspaceUrl(event.target.value); setUrlError(false); setSaveState('idle'); }} />
          {urlError ? <p className="fixture-profile-error" id="fixture-workspace-url-error">Enter a valid workspace URL.</p> : <p className="fixture-profile-help" id="fixture-workspace-url-help">Use the address your team recognizes.</p>}
        </div>
        <div className="fixture-profile-field fixture-profile-description">
          <Label htmlFor="fixture-workspace-description">Description</Label>
          <Textarea id="fixture-workspace-description" name="description" value={description} onChange={event => setDescription(event.target.value)} />
        </div>
        <div className="fixture-profile-field">
          <Label htmlFor="fixture-report-time">Default report time</Label>
          <div className="fixture-profile-time"><Input id="fixture-report-time" name="reportTime" type="time" value={reportTime} onChange={event => setReportTime(event.target.value)} /><span>UTC</span></div>
        </div>
        <div className="fixture-profile-field fixture-profile-notifications">
          <Checkbox label="Email me about task changes" checked={notifications} onChange={event => setNotifications(event.target.checked)} />
        </div>
      </div>
      <div className="fixture-profile-actions">
        <div aria-live="polite" className="fixture-profile-status">{saveState === 'pending' ? 'Saving…' : saveState === 'success' ? 'Workspace profile saved.' : ''}</div>
        <div><Button type="button" variant="secondary" onClick={cancelChanges}>Cancel</Button><Button type="submit" disabled={saveState === 'pending'}>{saveState === 'pending' ? 'Saving…' : 'Save changes'}</Button></div>
      </div>
    </form>
  </section>;
}

function LabWorkspace() {
  const theme = useTheme();
  const [decorationsOff, setDecorationsOff] = useState(false);
  const [page, setPage] = useState<'workspace' | 'components'>('workspace');
  const [projects, setProjects] = useState<ProjectItem[]>(seedProjects);
  const [hydrated, setHydrated] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All statuses');
  const [sort, setSort] = useState<'date' | 'name' | 'progress'>('date');
  const [dialog, setDialog] = useState(false);
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');
  const [notice, setNotice] = useState('');
  const [storageAvailable, setStorageAvailable] = useState(true);
  const noticeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSkin = skins.find(s => s.id === theme.skin) || skins[0];

  const announce = (message: string) => {
    setNotice(message);
    if (noticeTimer.current) clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(''), 5000);
  };

  useEffect(() => {
    setProjects(loadProjects());
    setHydrated(true);
    return () => { if (noticeTimer.current) clearTimeout(noticeTimer.current); };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); setStorageAvailable(true); }
    catch { setStorageAvailable(false); }
  }, [projects, hydrated]);

  useEffect(() => { document.documentElement.dir = direction; }, [direction]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const qSkin = query.get('skin') as SkinId | null;
    const qMode = query.get('mode') as Mode | null;
    if (qSkin && skins.some(s => s.id === qSkin)) theme.setSkin(qSkin);
    if (qMode && ['light', 'dark', 'system'].includes(qMode)) theme.setMode(qMode);
  }, []);

  const visibleProjects = useMemo(() => projects
    .filter(p => `${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase()) && (filter === 'All statuses' || p.status === filter))
    .sort((a, b) => sort === 'progress' ? b.progress - a.progress : a[sort].localeCompare(b[sort])), [projects, search, filter, sort]);
  const complete = projects.filter(p => p.status === 'Completed').length;
  const average = projects.length ? Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length) : 0;

  function createProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name')).trim();
    if (!name) return;
    const project: ProjectItem = { id: crypto.randomUUID(), name, category: String(data.get('category')), owner: 'YOU', status: 'Planned', progress: 0, date: String(data.get('date')) };
    setProjects(old => [...old, project]);
    setDialog(false);
    setSearch(''); setFilter('All statuses');
    announce(`${name} created. Your next chapter starts now.`);
  }
  function updateStatus(id: string, status: string) {
    setProjects(old => old.map(p => p.id === id ? { ...p, status, progress: status === 'Completed' ? 100 : status === 'Planned' ? 0 : status === 'In review' ? 90 : 50 } : p));
    announce('Project status updated.');
  }
  async function copySetup() {
    const text = `import { ThemeProvider, Button } from '@moonwitness/moonframe';\nimport '@moonwitness/moonframe/styles.css';\n\n<ThemeProvider defaultSkin="${theme.skin}" defaultMode="${theme.mode}">\n  <Button>Start something great</Button>\n</ThemeProvider>`;
    try { await navigator.clipboard.writeText(text); announce('React example copied to clipboard.'); }
    catch { announce('Clipboard unavailable. Select and copy the example in the Components tab.'); }
  }

  return <div className="mf-shell" data-decoration-off={decorationsOff ? 'true' : undefined}>
    <a href="#main-content" className="demo-skip">Skip to content</a>
    <aside className="mf-sidebar" aria-label="Workspace and skin navigation">
      <a href="#main-content" className="demo-brand" aria-label="Moonframe home" onClick={() => setPage('workspace')}><span className="demo-mark" aria-hidden="true">m<span>•</span></span><span>moonframe<small>THE SHAPE OF YOUR IDEAS</small></span></a>
      <div className="demo-workspace-label"><span className="demo-workspace-icon">O</span><span>Orbit Studio<small>Personal workspace</small></span><Badge>PRO</Badge></div>
      <nav className="mf-nav" aria-label="Main navigation">
        <button className="mf-nav-item" aria-current={page === 'workspace' ? 'page' : undefined} onClick={() => setPage('workspace')}><Icon name="grid" />Overview <span className="demo-nav-count">{projects.length}</span></button>
        <button className="mf-nav-item" aria-current={page === 'components' ? 'page' : undefined} onClick={() => setPage('components')}><Icon name="layers" />Components <span className="demo-nav-count">UI</span></button>
      </nav>
      <div className="demo-skin-heading"><span>CHOOSE YOUR WORLD</span><span>15</span></div>
      <div className="demo-skin-list" role="group" aria-label="Choose skin">
        {skins.map((skin, i) => <button key={skin.id} className="demo-skin-option" data-active={theme.skin === skin.id || undefined} aria-pressed={theme.skin === skin.id} onClick={() => theme.setSkin(skin.id)}><span className="demo-swatch" style={{ '--swatch': palette[i] } as React.CSSProperties} aria-hidden="true" /><span>{skin.name}</span>{theme.skin === skin.id ? <Icon name="check" size={14} /> : <span className="demo-skin-index">{String(i + 1).padStart(2, '0')}</span>}</button>)}
      </div>
      <div className="demo-sidebar-footer"><Avatar fallback="AL" alt="Alex Lane" /><span>Alex Lane<small>Make something different.</small></span><span className="demo-online" title="Local demo" /></div>
    </aside>

    <main className="mf-main" id="main-content" tabIndex={-1}>
      <header className="mf-header">
        <div className="demo-breadcrumb">Workspace <span>/</span> <strong>{page === 'workspace' ? 'Overview' : 'Components'}</strong></div>
        <div className="demo-header-actions"><Badge>{currentSkin.name}</Badge><span className="demo-version">v0.1 preview</span><Avatar fallback="AL" alt="Alex Lane" /></div>
      </header>
      <div className="demo-controls" aria-label="Appearance settings">
        <div className="demo-control"><Label htmlFor="appearance">Appearance</Label><Select id="appearance" value={theme.mode} onChange={e => theme.setMode(e.target.value as Mode)}><option value="light">Light</option><option value="dark">Dark</option><option value="system">System</option></Select></div>
        <div className="demo-control"><Label htmlFor="density">Density</Label><Select id="density" value={theme.density} onChange={e => theme.setDensity(e.target.value as Density)}><option value="compact">Compact</option><option value="comfortable">Comfortable</option><option value="spacious">Spacious</option></Select></div>
        <div className="demo-control"><Label htmlFor="motion">Motion</Label><Select id="motion" value={theme.motion} onChange={e => theme.setMotion(e.target.value as Motion)}><option value="system">System</option><option value="full">Full</option><option value="reduced">Reduced</option></Select></div>
        <div className="demo-control"><Label htmlFor="contrast">Contrast</Label><Select id="contrast" value={theme.contrast} onChange={e => theme.setContrast(e.target.value as Contrast)}><option value="system">System</option><option value="normal">Normal</option><option value="high">High</option></Select></div>
        <div className="demo-control"><Label htmlFor="direction">Direction</Label><Select id="direction" value={direction} onChange={e => setDirection(e.target.value as 'ltr' | 'rtl')}><option value="ltr">LTR</option><option value="rtl">RTL</option></Select></div>
        <Button variant="ghost" size="sm" className="demo-copy" onClick={copySetup}><Icon name="code" size={16} />Copy React setup</Button>
      </div>

      {page === 'workspace' ? <>
        <section className="mf-hero" aria-labelledby="workspace-title">
          <div className="demo-hero-copy"><div className="demo-eyebrow"><span className="demo-dot" /> A SPACE FOR WHAT COMES NEXT</div><h1 id="workspace-title">Good ideas.<br /><span>Great beginnings.</span></h1><p>Your projects, your people, your own kind of progress.<br className="demo-desktop" /> Make room for the work that matters.</p><Button onClick={() => setDialog(true)}><Icon name="plus" />Create project</Button></div>
          <div className="demo-orbit" aria-hidden="true"><span className="demo-orbit-ring ring-one" /><span className="demo-orbit-ring ring-two" /><span className="demo-orbit-ring ring-three" /><span className="demo-orbit-core">m<span>•</span></span><span className="demo-orbit-satellite" /><span className="demo-orbit-label">IDEAS IN ORBIT<br />∞ POSSIBILITIES</span></div>
          <div className="demo-hero-foot"><span>01 / THE WORKSPACE</span><span>{currentSkin.name.toUpperCase()} EDITION <Icon name="arrow" size={14} /></span></div>
        </section>
        <section className="mf-grid demo-metrics" aria-label="Workspace statistics">
          {([
            ['Total projects', projects.length, 'Ideas taking shape', 'grid'],
            ['In motion', projects.filter(p => ['In progress', 'In review'].includes(p.status)).length, 'A little closer every day', 'arrow'],
            ['Completed', complete, 'Worth celebrating', 'check'],
            ['Overall progress', `${average}%`, 'Across your workspace', 'clock'],
          ] as const).map(([label, value, detail, icon]) => <Card className="mf-stat" key={label}><div className="demo-stat-top"><span>{label}</span><Icon name={icon} size={16} /></div><strong className="demo-stat-value">{value}</strong><span className="demo-stat-detail">{detail}</span></Card>)}
        </section>
        <section className="demo-projects" aria-labelledby="projects-title">
          <div className="demo-section-heading"><div><div className="demo-eyebrow">FROM IDEA TO OUT THERE</div><h2 id="projects-title">Your projects<span className="demo-heading-count">{projects.length}</span></h2></div><Button variant="secondary" size="sm" onClick={() => setDialog(true)}><Icon name="plus" size={15} />New project</Button></div>
          <Card>
            <div className="demo-table-toolbar"><div className="demo-search"><Icon name="search" size={17} /><Input aria-label="Search projects" placeholder="Find a project…" value={search} onChange={e => setSearch(e.target.value)} /></div><Select aria-label="Filter projects by status" value={filter} onChange={e => setFilter(e.target.value)}><option>All statuses</option>{statusValues.map(s => <option key={s}>{s}</option>)}</Select><Select aria-label="Sort projects" value={sort} onChange={e => setSort(e.target.value as 'date' | 'name' | 'progress')}><option value="date">Due date</option><option value="name">Name A–Z</option><option value="progress">Progress</option></Select></div>
            <div className="demo-table-scroll"><Table><TableCaption className="demo-sr-only">Projects in your workspace. Change a status to update project progress.</TableCaption><TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Status</TableHead><TableHead>Progress</TableHead><TableHead>Owner</TableHead><TableHead>Due date</TableHead></TableRow></TableHeader><TableBody>{visibleProjects.map((p, index) => <TableRow key={p.id}><TableCell><div className="demo-project-name"><span className="demo-project-symbol" aria-hidden="true">{['◈','◒','▦','✳','◇'][index % 5]}</span><span><strong>{p.name}</strong><small>{p.category}</small></span></div></TableCell><TableCell><Select aria-label={`Status for ${p.name}`} value={p.status} className="demo-status-select" onChange={e => updateStatus(p.id, e.target.value)}>{statusValues.map(s => <option key={s}>{s}</option>)}</Select></TableCell><TableCell><div className="demo-project-progress"><Progress value={p.progress} label={`${p.name} progress`} /><span>{p.progress}%</span></div></TableCell><TableCell><Avatar fallback={p.owner} alt={`Owner ${p.owner}`} /></TableCell><TableCell><time dateTime={p.date}>{new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(p.date))}</time></TableCell></TableRow>)}{visibleProjects.length === 0 && <TableRow><TableCell colSpan={5}><div className="demo-empty"><Icon name="search" size={26} /><strong>No projects found</strong><p>Try another search or create something new.</p><Button variant="secondary" onClick={() => { setSearch(''); setFilter('All statuses'); }}>Clear filters</Button></div></TableCell></TableRow>}</TableBody></Table></div>
            <div className="demo-table-footer"><span>Showing {visibleProjects.length} of {projects.length} projects</span><span>{storageAvailable ? 'Saved on this device' : 'Storage unavailable · session only'}</span></div>
          </Card>
        </section>
        <section className="demo-bottom-grid"><Card className="demo-note"><CardHeader><div className="demo-eyebrow">A DIFFERENT POINT OF VIEW</div><CardTitle>One workspace. Fifteen worlds.</CardTitle><CardDescription>Change the skin in the sidebar. Your work stays right where you left it; the entire visual language changes around it.</CardDescription></CardHeader><CardContent><Button variant="ghost" onClick={() => setPage('components')}>Explore the components <Icon name="arrow" size={16} /></Button></CardContent></Card><Card className="demo-note"><CardHeader><div className="demo-eyebrow">CURRENT EDITION</div><CardTitle>{currentSkin.name}</CardTitle><CardDescription>{currentSkin.description}</CardDescription></CardHeader><CardContent><div className="demo-inline"><Badge>{theme.resolvedMode === 'dark' ? 'Dark' : 'Light'} appearance</Badge><Badge>React + CSS</Badge></div></CardContent></Card></section>
        <DashboardFixture decorationsOff={decorationsOff} onDecorationsOffChange={setDecorationsOff} />
      </> : <Gallery announce={announce} theme={theme} onDialog={() => setDialog(true)} />}

      <footer className="demo-footer"><span><strong>moonframe</strong> · Built to feel like you.</span><span>15 skins / 30 appearances / One system</span></footer>
    </main>
    <Dialog open={dialog} onOpenChange={setDialog} title="Give your idea a home." description="Create a project to start your next chapter.">
      <form onSubmit={createProject} className="demo-form"><div><Label htmlFor="project-name">Project name</Label><Input id="project-name" name="name" placeholder="Something worth making" required maxLength={80} autoFocus /></div><div><Label htmlFor="project-category">Category</Label><Select id="project-category" name="category"><option>Design systems</option><option>Product design</option><option>Development</option><option>Brand identity</option><option>Exploration</option></Select></div><div><Label htmlFor="project-date">Due date</Label><Input id="project-date" name="date" type="date" required defaultValue="2026-12-01" /></div><div className="demo-dialog-actions"><Button variant="secondary" onClick={() => setDialog(false)}>Cancel</Button><Button type="submit"><Icon name="plus" size={16} />Create project</Button></div></form>
    </Dialog>
    <div className="demo-toast-region" role="status" aria-live="polite" aria-atomic="true">{notice && <div className="demo-toast"><Icon name="check" size={18} /><span>{notice}</span><button aria-label="Dismiss notification" onClick={() => setNotice('')}>×</button></div>}</div>
  </div>;
}

function Gallery({ announce, theme, onDialog }: { announce: (m: string) => void; theme: ReturnType<typeof useTheme>; onDialog: () => void }) {
  const [notifications, setNotifications] = useState(true);
  const [terms, setTerms] = useState(false);
  const [volume, setVolume] = useState(65);
  return <section className="demo-gallery" aria-labelledby="gallery-title"><div className="demo-section-heading"><div><div className="demo-eyebrow">THE BUILDING BLOCKS</div><h1 id="gallery-title">Everything, in your style.</h1><p>Shared behavior. A completely different feeling.</p></div><Badge>{theme.skin}</Badge></div>
    <div className="demo-gallery-grid">
      <Card><CardHeader><CardTitle>Make a move</CardTitle><CardDescription>Buttons and actions for every intention.</CardDescription></CardHeader><CardContent className="demo-stack"><div className="demo-inline"><Button onClick={() => announce('Primary action clicked.')}>Primary action <Icon name="arrow" size={16} /></Button><Button variant="secondary" onClick={() => announce('Secondary action clicked.')}>Secondary</Button><Button variant="ghost" onClick={() => announce('Ghost action clicked.')}>Ghost</Button><Button variant="danger" onClick={() => announce('Danger action preview — nothing deleted.')}>Danger</Button><Button disabled>Disabled</Button></div><Separator /><div className="demo-inline"><Button size="sm" onClick={() => announce('Small button clicked.')}>Small</Button><Button size="md" onClick={() => announce('Medium button clicked.')}>Medium</Button><Button size="lg" onClick={() => announce('Large button clicked.')}>Large</Button></div></CardContent></Card>
      <Card><CardHeader><CardTitle>A little context</CardTitle><CardDescription>Status, people, and a sense of progress.</CardDescription></CardHeader><CardContent className="demo-stack"><div className="demo-inline"><Badge>In progress</Badge><Badge variant="secondary">Design</Badge><Badge variant="danger">Needs attention</Badge></div><div className="demo-inline"><Avatar fallback="AL" alt="Alex Lane" /><Avatar fallback="JK" alt="Jamie Kim" /><Avatar fallback="SR" alt="Sam Rivera" /><span className="demo-muted">Good things happen together.</span></div><Label htmlFor="gallery-progress">Progress · {volume}%</Label><input id="gallery-progress" aria-label="Adjust progress" type="range" min="0" max="100" value={volume} onChange={e => setVolume(Number(e.target.value))} /><Progress value={volume} label="Example progress" /></CardContent></Card>
      <Card><CardHeader><CardTitle>The finer details</CardTitle><CardDescription>Form controls that feel at home.</CardDescription></CardHeader><CardContent><form className="demo-form" onSubmit={e => { e.preventDefault(); announce('Preferences saved for this demo session.'); }}><div><Label htmlFor="gallery-name">Display name</Label><Input id="gallery-name" placeholder="Your name" defaultValue="Alex Lane" required /></div><div><Label htmlFor="gallery-bio">A few words about you</Label><Textarea id="gallery-bio" placeholder="Making things with care…" rows={3} /></div><Checkbox label="I agree to the workspace guidelines" checked={terms} onChange={e => setTerms(e.target.checked)} /><Switch label="Send me project notifications" checked={notifications} onChange={e => setNotifications(e.target.checked)} /><Button type="submit">Save preferences</Button></form></CardContent></Card>
      <Card><CardHeader><CardTitle>Space for the story</CardTitle><CardDescription>Organize information without losing your place.</CardDescription></CardHeader><CardContent className="demo-stack"><Tabs defaultValue="overview" items={[{ value: 'overview', label: 'Overview', content: <p>This is your overview. Use arrow keys to move between tabs; the same interaction works in every skin.</p> }, { value: 'details', label: 'Details', content: <p>Fifteen identities share one set of semantic controls, consistent focus behavior, and a portable CSS foundation.</p> }, { value: 'activity', label: 'Activity', content: <p>Your workspace is ready. Create a project from the overview to begin.</p> }]} /><Accordion items={[{ value: 'skins', title: 'What changes with a skin?', content: <p>Typography, geometry, surfaces, navigation, layout rhythm, and component styling. Your data and interactions stay consistent.</p> }, { value: 'install', title: 'How do I use it in my app?', content: <p>Import the components and stylesheet from the package, then wrap your application in ThemeProvider. The example below is ready to copy.</p> }]} /></CardContent></Card>
      <Card><CardHeader><CardTitle>Keep everyone in the loop</CardTitle><CardDescription>Feedback, loading, and focused interactions.</CardDescription></CardHeader><CardContent className="demo-stack"><Alert title="All set for something great">Your workspace is ready. Pick a skin and make it yours.</Alert><div className="demo-inline"><Button variant="secondary" onClick={onDialog}>Open dialog</Button><Button variant="ghost" onClick={() => announce('A small update, right when you need it.')}>Show notification</Button></div><div aria-label="Loading preview" className="demo-stack"><Skeleton style={{ width: '60%', height: 14 }} /><Skeleton style={{ width: '90%', height: 14 }} /><Skeleton style={{ width: '75%', height: 14 }} /></div></CardContent></Card>
      <Card><CardHeader><CardTitle>Take it with you</CardTitle><CardDescription>A small beginning for your next application.</CardDescription></CardHeader><CardContent><pre className="demo-code"><code>{`import { ThemeProvider, Button }\n  from '@moonwitness/moonframe';\nimport '@moonwitness/moonframe/styles.css';\n\n<ThemeProvider\n  defaultSkin="${theme.skin}"\n  defaultMode="${theme.mode}"\n>\n  <Button>Start something great</Button>\n</ThemeProvider>`}</code></pre></CardContent></Card>
    </div>
  </section>;
}

export default function LabPage() {
  const query = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const qSkin = query?.get('skin') as SkinId | null;
  const qMode = query?.get('mode') as Mode | null;
  const previewSkin: SkinId = qSkin && skins.some(s => s.id === qSkin) ? qSkin : 'classic';
  const previewMode: Mode = qMode && ['light', 'dark', 'system'].includes(qMode) ? qMode : 'system';
  const previewStorage = query && (query.has('skin') || query.has('mode')) ? null : 'moonframe-demo-theme-v1';

  return (
    <ThemeProvider defaultSkin={previewSkin} defaultMode={previewMode} storageKey={previewStorage}>
      <LabWorkspace />
    </ThemeProvider>
  );
}
