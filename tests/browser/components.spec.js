import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/lab/behavior');
});

test('native modal traps focus, closes on Escape, and restores opener focus', async ({ page }) => {
  const opener = page.getByRole('button', { name: 'Open dialog', exact: true });
  await opener.click();
  const dialog = page.getByRole('dialog', { name: 'Create workspace' });
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute('aria-describedby');
  await dialog.getByRole('button', { name: 'Save', exact: true }).focus();
  await page.keyboard.press('Tab');
  await expect(dialog.getByRole('button', { name: 'Close dialog' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
});

test('controlled dialog can close through parent state and native Escape', async ({ page }) => {
  const opener = page.getByRole('button', { name: 'Open controlled' });
  const dialog = page.getByRole('dialog', { name: 'Controlled dialog' });
  await opener.click();
  await dialog.getByRole('button', { name: 'Done' }).click();
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  await opener.click();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
});

test('default-open modal survives StrictMode effect cleanup and reinitialization', async ({ page }) => {
  await page.goto('/lab/behavior?initial=1');
  const dialog = page.getByRole('dialog', { name: 'Initially open' });
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Tab');
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
});

test('tabs use roving focus, skip disabled items, and honor RTL arrows', async ({ page }) => {
  const tabs = page.getByRole('tablist', { name: 'Workspace sections' });
  await tabs.getByRole('tab', { name: 'Overview' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(tabs.getByRole('tab', { name: 'Activity' })).toBeFocused();
  await expect(page.getByRole('tabpanel', { name: 'Activity' })).toBeVisible();
  await page.keyboard.press('End');
  await expect(tabs.getByRole('tab', { name: 'Settings' })).toBeFocused();
  await page.keyboard.press('Home');
  await expect(tabs.getByRole('tab', { name: 'Overview' })).toBeFocused();
  const rtl = page.getByRole('tablist', { name: 'RTL sections' });
  await rtl.getByRole('tab', { name: 'RTL first' }).focus();
  await page.keyboard.press('ArrowLeft');
  await expect(rtl.getByRole('tab', { name: 'RTL second' })).toBeFocused();
});

test('single accordion retains newly opened disclosure while closing the previous one', async ({ page }) => {
  await page.getByText('First disclosure', { exact: true }).click();
  await expect(page.getByText('First disclosure content', { exact: true })).toBeVisible();
  await page.getByText('Second disclosure', { exact: true }).click();
  await expect(page.getByText('Second disclosure content', { exact: true })).toBeVisible();
  await expect(page.getByText('First disclosure content', { exact: true })).not.toBeVisible();
  await page.getByText('Second disclosure', { exact: true }).click();
  await expect(page.getByText('Second disclosure content', { exact: true })).not.toBeVisible();
});

test('form controls keep native selection, keyboard and disabled behavior', async ({ page }) => {
  const checkbox = page.getByRole('checkbox', { name: 'Email updates' });
  await checkbox.focus();
  await page.keyboard.press('Space');
  await expect(checkbox).toBeChecked();
  const toggle = page.getByRole('switch', { name: 'Notifications' });
  await toggle.check();
  await expect(toggle).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'Disabled checkbox' })).toBeDisabled();
  await expect(page.getByRole('switch', { name: 'Disabled switch' })).toBeDisabled();
  for (const [role, name] of [['checkbox', 'Controlled checkbox'], ['switch', 'Controlled switch']]) {
    const control = page.getByRole(role, { name });
    await control.check();
    await expect(control).toBeChecked();
    await control.uncheck();
    await expect(control).not.toBeChecked();
  }
  const select = page.getByRole('combobox', { name: 'Country' });
  await select.selectOption('my');
  await expect(select).toHaveValue('my');
});

test('Next.js asChild link, Field, DropdownMenu, Popover, Tooltip, DataTable, OTPInput and PasswordField work interactively', async ({ page }) => {
  const link = page.getByRole('link', { name: 'Next Route Link' });
  await expect(link).toHaveClass(/mf-button/);
  await expect(link).toHaveAttribute('href', '#next-route');

  const slugInput = page.getByLabel(/Project slug/);
  await expect(slugInput).toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('.mf-field-error')).toContainText('Slug already in use');

  await page.getByRole('button', { name: 'Open menu' }).click();
  const menu = page.getByRole('menu', { name: 'Project actions' });
  await expect(menu).toBeVisible();
  await menu.getByRole('menuitem', { name: 'Duplicate project' }).click();
  await expect(menu).not.toBeVisible();
  await expect(page.getByLabel('Menu selection')).toHaveText('duplicate');

  await page.getByRole('button', { name: 'Open popover' }).click();
  await expect(page.getByText('Popover body copy')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByText('Popover body copy')).not.toBeVisible();

  await page.getByRole('button', { name: 'Shortcut trigger' }).focus();
  await expect(page.getByRole('tooltip')).toContainText('Keyboard shortcut Ctrl+K');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('tooltip')).not.toBeVisible();

  await page.getByRole('button', { name: 'Service' }).click();
  await expect(page.locator('.mf-data-table tbody tr').first()).toContainText('Alpha Web');
  await page.getByPlaceholder('Filter deployments').fill('Zulu');
  await expect(page.locator('.mf-data-table tbody tr')).toHaveCount(1);
  await expect(page.locator('.mf-data-table tbody tr').first()).toContainText('Zulu API');

  const otpFirst = page.getByLabel('MFA code digit 1 of 6');
  await otpFirst.fill('9');
  await expect(otpFirst).toHaveValue('9');

  const pwInput = page.getByLabel('Account password');
  await expect(pwInput).toHaveAttribute('type', 'password');
  await page.getByRole('button', { name: 'Show password' }).click();
  await expect(pwInput).toHaveAttribute('type', 'text');
});

test('brand-and-sfx component detail page renders 15 vector marks and interactive SFX studio', async ({ page }) => {
  await page.goto('/components/brand-and-sfx');
  await expect(page.getByRole('heading', { name: 'Brand Marks, Skin Artwork & Opt-In SFX' })).toBeVisible();
  await expect(page.getByText('Moonframe Interactive Studio & Playground')).toBeVisible();
  await page.getByRole('tab', { name: '2. 15-Skin Vector Marks (M10)' }).click();
  await expect(page.locator('[data-skin-mark]').first()).toBeVisible();
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  await expect(page.getByText('Consent: Not Granted')).toBeVisible();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).evaluate((button) => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  await expect(page.getByText('Consent: Not Granted')).toBeVisible();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await expect(page.getByText('Consent: Granted')).toBeVisible();
});

test('SFX reports unsupported Web Audio without claiming playback', async ({ page }) => {
  await page.addInitScript(() => { window.AudioContext = undefined; window.webkitAudioContext = undefined; });
  await page.goto('/components/brand-and-sfx');
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await page.getByRole('button', { name: '🔔 success' }).click();
  await expect(page.getByText(/Silenced event: "success" \(reason: unsupported\)/)).toBeVisible();
});

test('SFX reuses its AudioContext and closes it on provider unmount', async ({ page }) => {
  await page.addInitScript(() => {
    window.__audioContexts = [];
    class FakeAudioContext {
      constructor() { this.state = 'running'; this.currentTime = 0; this.destination = {}; window.__audioContexts.push(this); }
      createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
      createOscillator() {
        const oscillator = { stopCalls: 0, frequency: { setValueAtTime() {} }, connect() {}, start() {}, stop() { this.stopCalls += 1; }, addEventListener() {}, disconnect() {} };
        (window.__oscillators ||= []).push(oscillator);
        return oscillator;
      }
      close() { this.state = 'closed'; return Promise.resolve(); }
    }
    window.AudioContext = FakeAudioContext;
  });
  await page.goto('/components/brand-and-sfx');
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await page.getByRole('button', { name: '🔔 success' }).click();
  const scheduledStops = await page.evaluate(() => window.__oscillators.reduce((sum, oscillator) => sum + oscillator.stopCalls, 0));
  expect(scheduledStops).toBeGreaterThan(0);
  await page.getByRole('button', { name: /Mute \/ Revoke Consent/i }).click();
  await expect(page.getByText('Consent: Not Granted')).toBeVisible();
  const stoppedOnRevoke = await page.evaluate(() => window.__oscillators.reduce((sum, oscillator) => sum + oscillator.stopCalls, 0));
  expect(stoppedOnRevoke).toBeGreaterThan(scheduledStops);
  await page.getByRole('button', { name: '🔔 success' }).click();
  await expect(page.getByText(/Silenced event: "success" \(reason: muted-or-no-consent\)/)).toBeVisible();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await page.waitForTimeout(1050);
  await page.getByRole('button', { name: '⚠️ warning' }).click();
  expect(await page.evaluate(() => window.__audioContexts.length)).toBe(1);
  await page.locator('a[href="/"]').first().click();
  await expect.poll(() => page.evaluate(() => window.__audioContexts[0]?.state)).toBe('closed');
});

test('SFX stops on backgrounding and does not catch up when visibility returns', async ({ page }) => {
  await page.addInitScript(() => {
    window.__oscillators = [];
    class FakeAudioContext {
      constructor() { this.state = 'running'; this.currentTime = 0; this.destination = {}; }
      createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
      createOscillator() {
        const oscillator = { stopCalls: 0, frequency: { setValueAtTime() {} }, connect() {}, start() {}, stop() { this.stopCalls += 1; }, addEventListener() {}, disconnect() {} };
        window.__oscillators.push(oscillator);
        return oscillator;
      }
    }
    window.AudioContext = FakeAudioContext;
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'visible' });
  });
  await page.goto('/components/brand-and-sfx');
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await page.getByRole('button', { name: '🔔 success' }).click();
  const stopsBeforeBackground = await page.evaluate(() => window.__oscillators.reduce((sum, oscillator) => sum + oscillator.stopCalls, 0));
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  const stopsAfterBackground = await page.evaluate(() => window.__oscillators.reduce((sum, oscillator) => sum + oscillator.stopCalls, 0));
  expect(stopsAfterBackground).toBeGreaterThan(stopsBeforeBackground);
  await page.getByRole('button', { name: '🔔 success' }).click();
  await expect(page.getByText(/Silenced event: "success" \(reason: background-tab\)/)).toBeVisible();
  const countWhileHidden = await page.evaluate(() => window.__oscillators.length);
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'visible' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await page.waitForTimeout(100);
  expect(await page.evaluate(() => window.__oscillators.length)).toBe(countWhileHidden);
});

test('SFX stops when reduced motion becomes active while visual status remains available', async ({ page }) => {
  await page.addInitScript(() => {
    window.__oscillators = [];
    class FakeAudioContext {
      constructor() { this.state = 'running'; this.currentTime = 0; this.destination = {}; }
      createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
      createOscillator() {
        const oscillator = { stopCalls: 0, frequency: { setValueAtTime() {} }, connect() {}, start() {}, stop() { this.stopCalls += 1; }, addEventListener() {}, disconnect() {} };
        window.__oscillators.push(oscillator);
        return oscillator;
      }
    }
    window.AudioContext = FakeAudioContext;
  });
  await page.goto('/components/brand-and-sfx');
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await page.getByRole('button', { name: '🔔 success' }).click();
  const stopsBeforePreference = await page.evaluate(() => window.__oscillators.reduce((sum, oscillator) => sum + oscillator.stopCalls, 0));
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-motion', 'reduced');
  });
  // A subsequent semantic event is silent, while the studio's visible status remains usable.
  await page.waitForTimeout(1050);
  await page.getByRole('button', { name: '✅ confirmation' }).click();
  await expect(page.getByText(/Silenced event: "confirmation" \(reason: reduced-motion\)/)).toBeVisible();
  const stopsAfterPreference = await page.evaluate(() => window.__oscillators.reduce((sum, oscillator) => sum + oscillator.stopCalls, 0));
  expect(stopsAfterPreference).toBeGreaterThan(stopsBeforePreference);
  await expect(page.getByText('Consent: Granted')).toBeVisible();
});

test('SFX stays silent in sensitive authentication, finance, and destructive contexts', async ({ page }) => {
  await page.goto('/components/brand-and-sfx');
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  for (const context of ['authentication', 'finance', 'destructive']) {
    await page.evaluate((value) => document.documentElement.setAttribute('data-sfx-context', value), context);
    await page.getByRole('button', { name: '🔔 success' }).click();
    await expect(page.getByText(/Silenced event: "success" \(reason: sensitive-context\)/).first()).toBeVisible();
  }
  await expect(page.getByText('Consent: Granted')).toBeVisible();
});

test('SFX reports browser playback denial and focus alone never starts audio', async ({ page }) => {
  await page.addInitScript(() => {
    window.__audioContextCount = 0;
    class SuspendedAudioContext {
      constructor() { window.__audioContextCount += 1; this.state = 'suspended'; }
    }
    window.AudioContext = SuspendedAudioContext;
  });
  await page.goto('/components/brand-and-sfx');
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  const cue = page.getByRole('button', { name: '🔔 success' });
  await cue.focus();
  expect(await page.evaluate(() => window.__audioContextCount)).toBe(0);
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await cue.click();
  await expect(page.getByText(/Silenced event: "success" \(reason: blocked\)/)).toBeVisible();
  expect(await page.evaluate(() => window.__audioContextCount)).toBe(1);
  await page.getByRole('button', { name: /Mute \/ Revoke Consent/i }).click();
  await cue.click();
  await expect(page.getByText(/Silenced event: "success" \(reason: muted-or-no-consent\)/)).toBeVisible();
  expect(await page.evaluate(() => window.__audioContextCount)).toBe(1);
});
