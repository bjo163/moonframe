'use client';

import React, { useEffect, useState } from 'react';
import {
  Button, Checkbox, Switch, Tabs, Dialog, Accordion, Input, Select,
  Field, RadioGroup, DropdownMenu, Popover, Tooltip, DataTable,
  OTPInput, PasswordField, TagInput, SegmentedControl,
} from '@moonwitness/moonframe';

export default function BehaviorFixturePage() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [menuChoice, setMenuChoice] = useState('none');
  const [otp, setOtp] = useState('');
  const [hasInitialParam, setHasInitialParam] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).has('initial');
  });

  useEffect(() => {
    setHasInitialParam(new URLSearchParams(window.location.search).has('initial'));
  }, []);

  return (
    <main data-skin="classic" data-mode="light" style={{ padding: '1.5rem' }}>
      <h1>Components</h1>
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
