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
      <h1>Components</h1>
      {authFixture && <section data-fixture="auth-preview" aria-labelledby="auth-preview-title" style={{ maxWidth: 440, margin: '2rem auto', padding: '2rem', border: '1px solid var(--mf-border)', borderRadius: 'var(--mf-radius)', background: 'var(--mf-surface)' }}>
        <header style={{ marginBlockEnd: '1.5rem' }}>
          <p style={{ color: 'var(--mf-muted)', fontSize: '.875rem' }}>Northstar Studio workspace</p>
          <h2 id="auth-preview-title">Sign in to your workspace</h2>
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
