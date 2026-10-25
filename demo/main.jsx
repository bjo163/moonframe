import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ThemeProvider, useTheme, skins, Button, Input, Textarea, Label, Select,
  Badge, Card, CardHeader, CardTitle, CardDescription, CardContent,
  Checkbox, Switch, Progress, Avatar, Alert, Skeleton, Separator,
  Dialog, Tabs, Accordion, Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell, TableCaption,
} from '../src/index.js';
import '../src/styles.css';
import './demo.css';

const STORAGE_KEY = 'moonframe-demo-projects-v1';
const seedProjects = [
  { id: 'mf-01', name: 'Orbit design system', category: 'Design systems', status: 'In progress', progress: 72, owner: 'AL', date: '2026-11-12' },
  { id: 'mf-02', name: 'Lunar commerce', category: 'Product design', status: 'In review', progress: 92, owner: 'JK', date: '2026-11-18' },
  { id: 'mf-03', name: 'Mission control', category: 'Development', status: 'In progress', progress: 48, owner: 'SR', date: '2026-11-24' },
  { id: 'mf-04', name: 'After hours studio', category: 'Brand identity', status: 'Completed', progress: 100, owner: 'AL', date: '2026-10-22' },
  { id: 'mf-05', name: 'Zero gravity', category: 'Exploration', status: 'Planned', progress: 12, owner: 'MN', date: '2026-12-02' },
];
const statusValues = ['Planned', 'In progress', 'In review', 'Completed'];
const palette = ['#c1e65b','#ff635d','#ce976b','#8d8d8d','#48c9a0','#ffaa40','#b6a084','#e5b751','#d8b5ed','#9ab578','#a7a7aa','#a0b5dc','#afa2ff','#c9aa6e','#72b0df'];
const icons = {
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
function Icon({ name, size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[name] || icons.grid} /></svg>;
}
function loadProjects() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(stored) && stored.length <= 500 && stored.every(p => p && typeof p.id === 'string' && typeof p.name === 'string' && typeof p.category === 'string' && typeof p.owner === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(p.date) && Number.isFinite(Date.parse(p.date)) && statusValues.includes(p.status) && Number.isFinite(p.progress) && p.progress >= 0 && p.progress <= 100)) return stored;
  } catch { /* In-memory workspace still works when storage is unavailable. */ }
  return seedProjects;
}

function App() {
  const theme = useTheme();
  const [page, setPage] = useState('workspace');
  const [projects, setProjects] = useState(loadProjects);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All statuses');
  const [sort, setSort] = useState('date');
  const [dialog, setDialog] = useState(false);
  const [direction, setDirection] = useState('ltr');
  const [notice, setNotice] = useState('');
  const [storageAvailable, setStorageAvailable] = useState(true);
  const noticeTimer = useRef();
  const currentSkin = skins.find(s => s.id === theme.skin) || skins[0];
  const announce = (message) => {
    setNotice(message);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(''), 5000);
  };
  useEffect(() => () => clearTimeout(noticeTimer.current), []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); setStorageAvailable(true); }
    catch { setStorageAvailable(false); }
  }, [projects]);
  useEffect(() => { document.documentElement.dir = direction; }, [direction]);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (skins.some(s => s.id === query.get('skin'))) theme.setSkin(query.get('skin'));
    if (['light', 'dark', 'system'].includes(query.get('mode'))) theme.setMode(query.get('mode'));
  }, []);

  const visibleProjects = useMemo(() => projects
    .filter(p => `${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase()) && (filter === 'All statuses' || p.status === filter))
    .sort((a, b) => sort === 'progress' ? b.progress - a.progress : a[sort].localeCompare(b[sort])), [projects, search, filter, sort]);
  const complete = projects.filter(p => p.status === 'Completed').length;
  const average = projects.length ? Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length) : 0;

  function createProject(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name')).trim();
    if (!name) return;
    const project = { id: crypto.randomUUID(), name, category: String(data.get('category')), owner: 'YOU', status: 'Planned', progress: 0, date: String(data.get('date')) };
    setProjects(old => [...old, project]);
    setDialog(false);
    setSearch(''); setFilter('All statuses');
    announce(`${name} created. Your next chapter starts now.`);
  }
  function updateStatus(id, status) {
    setProjects(old => old.map(p => p.id === id ? { ...p, status, progress: status === 'Completed' ? 100 : status === 'Planned' ? 0 : status === 'In review' ? 90 : 50 } : p));
    announce('Project status updated.');
  }
  async function copySetup() {
    const text = `import { ThemeProvider, Button } from '@moonframe/ui';\nimport '@moonframe/ui/styles.css';\n\n<ThemeProvider defaultSkin="${theme.skin}" defaultMode="${theme.mode}">\n  <Button>Start something great</Button>\n</ThemeProvider>`;
    try { await navigator.clipboard.writeText(text); announce('React example copied to clipboard.'); }
    catch { announce('Clipboard unavailable. Select and copy the example in the Components tab.'); }
  }

  return <div className="mf-shell">
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
        {skins.map((skin, i) => <button key={skin.id} className="demo-skin-option" data-active={theme.skin === skin.id || undefined} aria-pressed={theme.skin === skin.id} onClick={() => theme.setSkin(skin.id)}><span className="demo-swatch" style={{ '--swatch': palette[i] }} aria-hidden="true" /><span>{skin.name}</span>{theme.skin === skin.id ? <Icon name="check" size={14} /> : <span className="demo-skin-index">{String(i + 1).padStart(2, '0')}</span>}</button>)}
      </div>
      <div className="demo-sidebar-footer"><Avatar fallback="AL" alt="Alex Lane" /><span>Alex Lane<small>Make something different.</small></span><span className="demo-online" title="Local demo" /></div>
    </aside>

    <main className="mf-main" id="main-content" tabIndex={-1}>
      <header className="mf-header">
        <div className="demo-breadcrumb">Workspace <span>/</span> <strong>{page === 'workspace' ? 'Overview' : 'Components'}</strong></div>
        <div className="demo-header-actions"><Badge>{currentSkin.name}</Badge><span className="demo-version">v0.1 preview</span><Avatar fallback="AL" alt="Alex Lane" /></div>
      </header>
      <div className="demo-controls" aria-label="Appearance settings">
        <div className="demo-control"><Label htmlFor="appearance">Appearance</Label><Select id="appearance" value={theme.mode} onChange={e => theme.setMode(e.target.value)}><option value="light">Light</option><option value="dark">Dark</option><option value="system">System</option></Select></div>
        <div className="demo-control"><Label htmlFor="density">Density</Label><Select id="density" value={theme.density} onChange={e => theme.setDensity(e.target.value)}><option value="compact">Compact</option><option value="comfortable">Comfortable</option><option value="spacious">Spacious</option></Select></div>
        <div className="demo-control"><Label htmlFor="motion">Motion</Label><Select id="motion" value={theme.motion} onChange={e => theme.setMotion(e.target.value)}><option value="system">System</option><option value="full">Full</option><option value="reduced">Reduced</option></Select></div>
        <div className="demo-control"><Label htmlFor="contrast">Contrast</Label><Select id="contrast" value={theme.contrast} onChange={e => theme.setContrast(e.target.value)}><option value="system">System</option><option value="normal">Normal</option><option value="high">High</option></Select></div>
        <div className="demo-control"><Label htmlFor="direction">Direction</Label><Select id="direction" value={direction} onChange={e => setDirection(e.target.value)}><option value="ltr">LTR</option><option value="rtl">RTL</option></Select></div>
        <Button variant="ghost" size="sm" className="demo-copy" onClick={copySetup}><Icon name="code" size={16} />Copy React setup</Button>
      </div>

      {page === 'workspace' ? <>
        <section className="mf-hero" aria-labelledby="workspace-title">
          <div className="demo-hero-copy"><div className="demo-eyebrow"><span className="demo-dot" /> A SPACE FOR WHAT COMES NEXT</div><h1 id="workspace-title">Good ideas.<br /><span>Great beginnings.</span></h1><p>Your projects, your people, your own kind of progress.<br className="demo-desktop" /> Make room for the work that matters.</p><Button onClick={() => setDialog(true)}><Icon name="plus" />Create project</Button></div>
          <div className="demo-orbit" aria-hidden="true"><span className="demo-orbit-ring ring-one" /><span className="demo-orbit-ring ring-two" /><span className="demo-orbit-ring ring-three" /><span className="demo-orbit-core">m<span>•</span></span><span className="demo-orbit-satellite" /><span className="demo-orbit-label">IDEAS IN ORBIT<br />∞ POSSIBILITIES</span></div>
          <div className="demo-hero-foot"><span>01 / THE WORKSPACE</span><span>{currentSkin.name.toUpperCase()} EDITION <Icon name="arrow" size={14} /></span></div>
        </section>
        <section className="mf-grid demo-metrics" aria-label="Workspace statistics">
          {[['Total projects', projects.length, 'Ideas taking shape', 'grid'], ['In motion', projects.filter(p => ['In progress', 'In review'].includes(p.status)).length, 'A little closer every day', 'arrow'], ['Completed', complete, 'Worth celebrating', 'check'], ['Overall progress', `${average}%`, 'Across your workspace', 'clock']].map(([label, value, detail, icon]) => <Card className="mf-stat" key={label}><div className="demo-stat-top"><span>{label}</span><Icon name={icon} size={16} /></div><strong className="demo-stat-value">{value}</strong><span className="demo-stat-detail">{detail}</span></Card>)}
        </section>
        <section className="demo-projects" aria-labelledby="projects-title">
          <div className="demo-section-heading"><div><div className="demo-eyebrow">FROM IDEA TO OUT THERE</div><h2 id="projects-title">Your projects<span className="demo-heading-count">{projects.length}</span></h2></div><Button variant="secondary" size="sm" onClick={() => setDialog(true)}><Icon name="plus" size={15} />New project</Button></div>
          <Card>
            <div className="demo-table-toolbar"><div className="demo-search"><Icon name="search" size={17} /><Input aria-label="Search projects" placeholder="Find a project…" value={search} onChange={e => setSearch(e.target.value)} /></div><Select aria-label="Filter projects by status" value={filter} onChange={e => setFilter(e.target.value)}><option>All statuses</option>{statusValues.map(s => <option key={s}>{s}</option>)}</Select><Select aria-label="Sort projects" value={sort} onChange={e => setSort(e.target.value)}><option value="date">Due date</option><option value="name">Name A–Z</option><option value="progress">Progress</option></Select></div>
            <div className="demo-table-scroll"><Table><TableCaption className="demo-sr-only">Projects in your workspace. Change a status to update project progress.</TableCaption><TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Status</TableHead><TableHead>Progress</TableHead><TableHead>Owner</TableHead><TableHead>Due date</TableHead></TableRow></TableHeader><TableBody>{visibleProjects.map((p, index) => <TableRow key={p.id}><TableCell><div className="demo-project-name"><span className="demo-project-symbol" aria-hidden="true">{['◈','◒','▦','✳','◇'][index % 5]}</span><span><strong>{p.name}</strong><small>{p.category}</small></span></div></TableCell><TableCell><Select aria-label={`Status for ${p.name}`} value={p.status} className="demo-status-select" onChange={e => updateStatus(p.id, e.target.value)}>{statusValues.map(s => <option key={s}>{s}</option>)}</Select></TableCell><TableCell><div className="demo-project-progress"><Progress value={p.progress} label={`${p.name} progress`} /><span>{p.progress}%</span></div></TableCell><TableCell><Avatar fallback={p.owner} alt={`Owner ${p.owner}`} /></TableCell><TableCell><time dateTime={p.date}>{new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(p.date))}</time></TableCell></TableRow>)}{visibleProjects.length === 0 && <TableRow><TableCell colSpan={5}><div className="demo-empty"><Icon name="search" size={26} /><strong>No projects found</strong><p>Try another search or create something new.</p><Button variant="secondary" onClick={() => { setSearch(''); setFilter('All statuses'); }}>Clear filters</Button></div></TableCell></TableRow>}</TableBody></Table></div>
            <div className="demo-table-footer"><span>Showing {visibleProjects.length} of {projects.length} projects</span><span>{storageAvailable ? 'Saved on this device' : 'Storage unavailable · session only'}</span></div>
          </Card>
        </section>
        <section className="demo-bottom-grid"><Card className="demo-note"><CardHeader><div className="demo-eyebrow">A DIFFERENT POINT OF VIEW</div><CardTitle>One workspace. Fifteen worlds.</CardTitle><CardDescription>Change the skin in the sidebar. Your work stays right where you left it; the entire visual language changes around it.</CardDescription></CardHeader><CardContent><Button variant="ghost" onClick={() => setPage('components')}>Explore the components <Icon name="arrow" size={16} /></Button></CardContent></Card><Card className="demo-note"><CardHeader><div className="demo-eyebrow">CURRENT EDITION</div><CardTitle>{currentSkin.name}</CardTitle><CardDescription>{currentSkin.description}</CardDescription></CardHeader><CardContent><div className="demo-inline"><Badge>{theme.resolvedMode === 'dark' ? 'Dark' : 'Light'} appearance</Badge><Badge>React + CSS</Badge></div></CardContent></Card></section>
      </> : <Gallery announce={announce} theme={theme} onDialog={() => setDialog(true)} />}

      <footer className="demo-footer"><span><strong>moonframe</strong> · Built to feel like you.</span><span>15 skins / 30 appearances / One system</span></footer>
    </main>
    <Dialog open={dialog} onOpenChange={setDialog} title="Give your idea a home." description="Create a project to start your next chapter.">
      <form onSubmit={createProject} className="demo-form"><div><Label htmlFor="project-name">Project name</Label><Input id="project-name" name="name" placeholder="Something worth making" required maxLength={80} autoFocus /></div><div><Label htmlFor="project-category">Category</Label><Select id="project-category" name="category"><option>Design systems</option><option>Product design</option><option>Development</option><option>Brand identity</option><option>Exploration</option></Select></div><div><Label htmlFor="project-date">Due date</Label><Input id="project-date" name="date" type="date" required defaultValue="2026-12-01" /></div><div className="demo-dialog-actions"><Button variant="secondary" onClick={() => setDialog(false)}>Cancel</Button><Button type="submit"><Icon name="plus" size={16} />Create project</Button></div></form>
    </Dialog>
    <div className="demo-toast-region" role="status" aria-live="polite" aria-atomic="true">{notice && <div className="demo-toast"><Icon name="check" size={18} /><span>{notice}</span><button aria-label="Dismiss notification" onClick={() => setNotice('')}>×</button></div>}</div>
  </div>;
}

function Gallery({ announce, theme, onDialog }) {
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
      <Card><CardHeader><CardTitle>Take it with you</CardTitle><CardDescription>A small beginning for your next application.</CardDescription></CardHeader><CardContent><pre className="demo-code"><code>{`import { ThemeProvider, Button }\n  from '@moonframe/ui';\nimport '@moonframe/ui/styles.css';\n\n<ThemeProvider\n  defaultSkin="${theme.skin}"\n  defaultMode="${theme.mode}"\n>\n  <Button>Start something great</Button>\n</ThemeProvider>`}</code></pre></CardContent></Card>
    </div>
  </section>;
}

const previewQuery = new URLSearchParams(window.location.search);
const previewSkin = skins.some(s => s.id === previewQuery.get('skin')) ? previewQuery.get('skin') : 'classic';
const previewMode = ['light', 'dark', 'system'].includes(previewQuery.get('mode')) ? previewQuery.get('mode') : 'system';
const previewStorage = previewQuery.has('skin') || previewQuery.has('mode') ? null : 'moonframe-demo-theme-v1';
createRoot(document.getElementById('root')).render(<ThemeProvider defaultSkin={previewSkin} defaultMode={previewMode} storageKey={previewStorage}><App /></ThemeProvider>);
