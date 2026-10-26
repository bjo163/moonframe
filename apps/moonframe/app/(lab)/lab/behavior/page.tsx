'use client';

import React, { useEffect, useState } from 'react';
import {
  Button, Checkbox, Switch, Tabs, Dialog, Accordion, Input, Select,
  Field, RadioGroup, DropdownMenu, Popover, Tooltip, DataTable,
  OTPInput, PasswordField, TagInput, SegmentedControl,
} from '@moonwitness/moonframe';

export default function BehaviorFixturePage() {
  const [open, setOpen] = useState(false);
  const [archiveFixture, setArchiveFixture] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveComplete, setArchiveComplete] = useState(false);
  const [authFixture, setAuthFixture] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [articleFixture, setArticleFixture] = useState(false);
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
    const shouldOpenArchiveFixture = query.get('fixture') === 'archive-task';
    setArchiveFixture(shouldOpenArchiveFixture);
    setArchiveOpen(shouldOpenArchiveFixture);
  }, []);

  function submitAuthPreview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setAuthMessage(`Preview sign-in accepted for ${String(formData.get('email'))}. No account or session was created.`);
  }

  return (
    <main data-skin="classic" data-mode="light" style={{ padding: '1.5rem' }}>
      {!authFixture && !articleFixture && <h1>Components</h1>}
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
