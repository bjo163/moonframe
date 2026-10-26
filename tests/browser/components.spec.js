import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { skins } from '../../src/skins.js';
import { writeSkinCaptureProvenance } from '../../scripts/skin-capture-provenance.mjs';

const captureDir = path.resolve('artifacts/skins');
fs.mkdirSync(captureDir, { recursive: true });

test.beforeEach(async ({ page }) => {
  await page.goto('/lab/behavior');
});

test('functional search and warning semantics remain stable across all skins', async ({ page }) => {
  for (const skin of skins) {
    await page.goto('/lab');
    await page.getByRole('button', { name: skin.name, exact: false }).filter({ has: page.locator('.demo-swatch') }).click();
    await expect(page.locator('.mf-root')).toHaveAttribute('data-skin', skin.id);
    await page.goto('/lab/behavior?fixture=states');

    const warningState = page.getByRole('button', { name: 'Error', exact: true });
    await warningState.click();
    const warning = page.locator('[data-fixture="states-preview"] [role="alert"]');
    await expect(warning).toBeVisible();
    await expect(warning).toContainText('Projects could not load');
    await expect(warning.getByRole('button', { name: 'Try again', exact: true })).toBeVisible();
  }
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

test('fixed T-1045 archive dialog fixture opens deterministically and captures stable modal state', async ({ page, browser }) => {
  await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));
  await page.goto('/lab/behavior?fixture=archive-task');
  const fixture = page.locator('[data-fixture="archive-task-dialog"]');
  const trigger = fixture.getByRole('button', { name: 'Archive task T-1045', exact: true });
  const dialog = page.getByRole('dialog', { name: 'Archive completed task?' });
  await expect(fixture).toContainText('T-1045 · Verify scheduled export · Mateo Silva · Complete');
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute('aria-describedby');
  await expect(dialog).toContainText('“Verify scheduled export” is complete. You can find archived tasks in the project history.');
  await expect(dialog.getByRole('button', { name: 'Keep task', exact: true })).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Archive task', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await trigger.click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Keep task', exact: true })).toBeVisible();
  await page.evaluate(() => document.fonts.ready.then(() => true));
  const screenshotPath = path.join(captureDir, 'archive-task-dialog.png');
  await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
  const capture = await page.evaluate(() => ({
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    locale: navigator.language,
    direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
    timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
    frozenTime: new Date().toISOString(),
    fixture: '/lab/behavior?fixture=archive-task (T-1045 completed-task archive dialog open)',
    fontStack: getComputedStyle(document.querySelector('main')).fontFamily,
    fontLoadStatus: document.fonts.status,
    userAgent: navigator.userAgent,
  }));
  writeSkinCaptureProvenance(screenshotPath, { ...capture, browserName: browser.browserType().name(), browserVersion: browser.version() });
  await dialog.getByRole('button', { name: 'Keep task', exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test('simulated sign-in fixture keeps its form contract consistent across every skin and mode', async ({ page, browser }) => {
  await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));

  for (const skin of skins) for (const mode of ['light', 'dark']) {
    await page.goto('/lab/behavior?fixture=auth');
    const main = page.locator('main').first();
    await main.evaluate((node, selection) => {
      node.dataset.skin = selection.skin;
      node.dataset.mode = selection.mode;
    }, { skin: skin.id, mode });
    const fixture = page.locator('[data-fixture="auth-preview"]');
    await expect(fixture).toBeVisible();
    await expect(fixture.getByRole('heading', { level: 1, name: 'Sign in to your workspace' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Components', exact: true })).toHaveCount(0);
    await expect(fixture).toContainText('Northstar Studio workspace');
    await expect(fixture).toContainText('Local preview only. Credentials are not sent or saved; no account or session is created.');

    const form = fixture.getByRole('form', { name: 'Sign in to Northstar Studio' });
    const email = form.getByLabel('Email address');
    const password = form.getByLabel('Password');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('autocomplete', 'email');
    await expect(email).toHaveAttribute('required', '');
    await expect(password).toHaveAttribute('type', 'password');
    await expect(password).toHaveAttribute('autocomplete', 'current-password');
    await expect(password).toHaveAttribute('required', '');
    await expect(form.getByRole('checkbox', { name: 'Remember this device' })).not.toBeChecked();
    await expect(form.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();
    expect(await form.evaluate(node => node.checkValidity())).toBe(false);

    const fontStatus = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.status;
    });
    expect(fontStatus).toBe('loaded');
    const screenshotPath = path.join(captureDir, `${skin.id}-${mode}-1440x960-auth.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
    const capture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: `/lab/behavior?fixture=auth (${document.querySelector('[data-fixture="auth-preview"]')?.textContent?.trim()}; ${document.querySelector('main')?.getAttribute('data-skin')} ${document.querySelector('main')?.getAttribute('data-mode')}; empty sign-in form)`,
      state: 'auth-preview-ready',
      fontStack: getComputedStyle(document.querySelector('main')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(screenshotPath, { ...capture, browserName: browser.browserType().name(), browserVersion: browser.version() });

    await email.fill('not-an-email');
    await password.fill('preview-only-password');
    expect(await form.evaluate(node => node.checkValidity())).toBe(false);
    await email.fill('alex@northstar.example');
    expect(await form.evaluate(node => node.checkValidity())).toBe(true);
    const routeBeforeSubmit = page.url();
    await form.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(fixture.getByRole('status')).toHaveText('Preview sign-in accepted for alex@northstar.example. No account or session was created.');
    expect(page.url()).toBe(routeBeforeSubmit);
  }
});

test('R04 sign-in form keeps keyboard focus, Escape behavior, and native validation feedback', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/lab/behavior?fixture=auth');
  const region = page.getByRole('region', { name: 'Sign in to your workspace' });
  const form = region.getByRole('form', { name: 'Sign in to Northstar Studio' });
  const email = form.getByLabel('Email address');
  const password = form.getByLabel('Password');
  const remember = form.getByRole('checkbox', { name: 'Remember this device' });
  const submit = form.getByRole('button', { name: 'Sign in', exact: true });
  const status = region.getByRole('status');

  await page.keyboard.press('Tab');
  await expect(email).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(password).toBeFocused();
  await expect(password).toHaveCSS('outline-style', 'solid');
  await email.fill('preview@example.test');
  await password.fill('preview-secret');
  await page.keyboard.press('Escape');
  await expect(password).toBeFocused();
  await expect(password).toHaveValue('preview-secret');
  await expect(status).toHaveText('');
  await page.keyboard.press('Tab');
  await expect(remember).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(submit).toBeFocused();

  await email.fill('');
  await submit.click();
  await expect(email).toBeFocused();
  expect(await email.evaluate(node => node.checkValidity())).toBe(false);
  expect(await email.evaluate(node => node.validationMessage)).not.toBe('');
});

test('R04 sign-in fields and submit control stay legible with grayscale treatment', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/lab/behavior?fixture=auth');
  const region = page.getByRole('region', { name: 'Sign in to your workspace' });
  const form = region.getByRole('form', { name: 'Sign in to Northstar Studio' });
  const fields = [form.getByLabel('Email address'), form.getByLabel('Password')];
  const submit = form.getByRole('button', { name: 'Sign in', exact: true });

  await region.evaluate(node => {
    node.style.backgroundColor = '#12151d';
    node.style.backgroundImage = 'linear-gradient(135deg, #00e5ff, #ff00a8)';
  });
  expect(await region.evaluate(node => getComputedStyle(node).backgroundImage)).toContain('linear-gradient');

  for (const field of fields) await expect(field).toBeVisible();
  await expect(fields[0]).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(fields[0]).toHaveCSS('color', 'rgb(32, 37, 50)');
  await expect(fields[0]).toHaveCSS('border-top-style', 'solid');
  await expect(fields[1]).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(fields[1]).toHaveCSS('color', 'rgb(32, 37, 50)');
  await expect(submit).toBeVisible();
  await expect(submit).toHaveCSS('background-color', 'rgb(53, 74, 181)');
  await expect(submit).toHaveCSS('color', 'rgb(255, 255, 255)');

  await page.addStyleTag({ content: 'html { filter: grayscale(1) !important; }' });
  await expect(region).toBeVisible();
  for (const field of fields) {
    await expect(field).toBeVisible();
    await expect(field).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  }
  await expect(submit).toBeVisible();
  await fields[0].focus();
  await expect(fields[0]).toHaveCSS('outline-style', 'solid');
});

test('editorial article copy, typography hooks, and image context stay fixed across every skin and mode', async ({ page, browser }) => {
  await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));

  for (const skin of skins) for (const mode of ['light', 'dark']) {
    await page.goto('/lab/behavior?fixture=article');
    const main = page.locator('main').first();
    await main.evaluate((node, selection) => {
      node.dataset.skin = selection.skin;
      node.dataset.mode = selection.mode;
    }, { skin: skin.id, mode });
    const article = page.locator('[data-fixture="article-preview"]');
    await expect(article).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Components', exact: true })).toHaveCount(0);
    await expect(article.getByRole('heading', { level: 1, name: 'Make room for the work that matters' })).toBeVisible();
    await expect(article.getByText('Field notes · Planning', { exact: true })).toBeVisible();
    await expect(article.getByText('A gentler planning rhythm can make ambitious work easier to begin, easier to share, and easier to finish.', { exact: true })).toBeVisible();
    await expect(article.getByText('By Maya Chen · October 25, 2026 · 8 min read', { exact: true })).toBeVisible();
    await expect(article.locator('time')).toHaveAttribute('datetime', '2026-10-25');
    await expect(article.getByRole('img', { name: 'Abstract illustration of a glowing moon above a quiet horizon, with an orbiting path and small stars' })).toBeVisible();
    await expect(article.locator('figcaption')).toHaveText('A clear horizon makes the next step easier to see.');
    await expect(article.getByRole('heading', { level: 2 })).toHaveText(['Start with the next honest step', 'Leave space for the unexpected']);
    await expect(article.getByRole('blockquote')).toHaveText('“A good plan creates room to pay attention.”');
    const fontFamily = await article.evaluate(node => getComputedStyle(node).fontFamily);
    expect(fontFamily).not.toBe('');

    const fontStatus = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.status;
    });
    expect(fontStatus).toBe('loaded');
    const screenshotPath = path.join(captureDir, `${skin.id}-${mode}-1440x960-article.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
    const capture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: `/lab/behavior?fixture=article (${document.querySelector('[data-fixture="article-preview"]')?.textContent?.trim()}; ${document.querySelector('main')?.getAttribute('data-skin')} ${document.querySelector('main')?.getAttribute('data-mode')}; article-default)`,
      state: 'article-default',
      fontStack: getComputedStyle(document.querySelector('[data-fixture="article-preview"]')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(screenshotPath, { ...capture, browserName: browser.browserType().name(), browserVersion: browser.version() });
  }
});

test('compact enterprise rows, summary, and filters remain consistent across every skin and mode', async ({ page, browser }) => {
  test.setTimeout(120_000);
  await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));

  for (const skin of skins) for (const mode of ['light', 'dark']) {
    await page.goto('/lab/behavior?fixture=enterprise');
    const main = page.locator('main').first();
    await main.evaluate((node, selection) => {
      node.dataset.skin = selection.skin;
      node.dataset.mode = selection.mode;
    }, { skin: skin.id, mode });
    const fixture = page.locator('[data-fixture="enterprise-preview"]');
    await expect(fixture).toBeVisible();
    await expect(fixture.getByRole('heading', { level: 1, name: 'Service operations' })).toBeVisible();
    await expect(fixture).toContainText('OPERATIONS · DEMO DATA · 12:00 UTC');
    await expect(fixture.locator('dl[aria-label="Service summary"] > div')).toHaveText([
      'Services6', 'Healthy4', 'Needs attention2', 'Monthly spend$2,840',
    ]);
    const table = fixture.getByRole('table', { name: 'Service inventory' });
    await expect(table.getByRole('columnheader')).toHaveText([
      'Service', 'Environment', 'Status', 'Region', 'Requests / 24h', 'p95 latency', 'Monthly cost',
    ]);
    const rows = table.locator('tbody tr');
    await expect(rows).toHaveCount(6);
    for (const values of [
      ['Payments API', 'Production', 'Healthy', 'sin1', '12.4k', '42 ms', '$840'],
      ['Auth Service', 'Production', 'Healthy', 'iad1', '8.2k', '39 ms', '$610'],
      ['Events Worker', 'Production', 'Degraded', 'sfo1', '22.1k', '116 ms', '$490'],
      ['Customer Sync', 'Staging', 'Healthy', 'fra1', '3.6k', '57 ms', '$320'],
      ['Search Index', 'Production', 'Attention', 'syd1', '18.8k', '203 ms', '$390'],
      ['Audit Export', 'Staging', 'Healthy', 'sin1', '1.2k', '64 ms', '$190'],
    ]) {
      const row = rows.filter({ hasText: values[0] });
      for (const value of values) await expect(row).toContainText(value);
    }
    await expect(fixture.getByText('6 of 6 services', { exact: true })).toBeVisible();

    const fontStatus = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.status;
    });
    expect(fontStatus).toBe('loaded');
    const screenshotPath = path.join(captureDir, `${skin.id}-${mode}-1440x960-enterprise.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
    const capture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: `/lab/behavior?fixture=enterprise (${document.querySelector('[data-fixture="enterprise-preview"]')?.textContent?.trim()}; ${document.querySelector('main')?.getAttribute('data-skin')} ${document.querySelector('main')?.getAttribute('data-mode')}; all regions/statuses)`,
      state: 'enterprise-default',
      fontStack: getComputedStyle(document.querySelector('[data-fixture="enterprise-preview"]')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(screenshotPath, { ...capture, browserName: browser.browserType().name(), browserVersion: browser.version() });

    const statusFilter = fixture.getByLabel('Filter by status');
    await statusFilter.selectOption('Degraded');
    await expect(rows).toHaveCount(1);
    await expect(rows.first()).toContainText('Events Worker');
    await expect(fixture.getByText('1 of 6 services', { exact: true })).toBeVisible();
    await statusFilter.selectOption('all');
    await fixture.getByLabel('Filter by region').selectOption('sin1');
    await expect(rows).toHaveCount(2);
    await expect(rows.nth(0)).toContainText('Payments API');
    await expect(rows.nth(1)).toContainText('Audit Export');
    await fixture.getByLabel('Filter by region').selectOption('all');
    await fixture.getByLabel('Search services').fill('Search Index');
    await expect(rows).toHaveCount(1);
    await expect(rows.first()).toContainText('Search Index');
    await expect(fixture.getByText('1 of 6 services', { exact: true })).toBeVisible();
  }
});

test('loading, empty, error, and denied request states keep their messages and actions consistent across every skin and mode', async ({ page, browser }) => {
  test.setTimeout(120_000);
  await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));

  for (const skin of skins) for (const mode of ['light', 'dark']) {
    await page.goto('/lab/behavior?fixture=states');
    const main = page.locator('main').first();
    await main.evaluate((node, selection) => {
      node.dataset.skin = selection.skin;
      node.dataset.mode = selection.mode;
    }, { skin: skin.id, mode });
    const fixture = page.locator('[data-fixture="states-preview"]');
    await expect(fixture).toBeVisible();
    await expect(fixture.getByRole('heading', { level: 1, name: 'Request state previews' })).toBeVisible();
    const panel = fixture.locator('[data-state]');
    const stateChoice = fixture.getByRole('group', { name: 'Choose request state' });

    const fontStatus = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.status;
    });
    expect(fontStatus).toBe('loaded');

    async function capture(state) {
      const screenshotPath = path.join(captureDir, `${skin.id}-${mode}-1440x960-state-${state}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
      const captureDetails = await page.evaluate(currentState => ({
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        locale: navigator.language,
        direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
        timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
        frozenTime: new Date().toISOString(),
        fixture: `/lab/behavior?fixture=states (${document.querySelector('[data-fixture="states-preview"]')?.textContent?.trim()}; ${document.querySelector('main')?.getAttribute('data-skin')} ${document.querySelector('main')?.getAttribute('data-mode')}; ${currentState} state)`,
        state: `request-${currentState}`,
        fontStack: getComputedStyle(document.querySelector('[data-fixture="states-preview"]')).fontFamily,
        fontLoadStatus: document.fonts.status,
        userAgent: navigator.userAgent,
      }), state);
      writeSkinCaptureProvenance(screenshotPath, { ...captureDetails, browserName: browser.browserType().name(), browserVersion: browser.version() });
    }

    await stateChoice.getByRole('button', { name: 'Loading', exact: true }).click();
    await expect(panel).toHaveAttribute('data-state', 'loading');
    await expect(panel).toHaveAttribute('aria-busy', 'true');
    await expect(panel.getByRole('status')).toContainText('Fetching the latest workspace projects…');
    await expect(panel.getByRole('button', { name: 'Cancel request', exact: true })).toBeVisible();
    await capture('loading');
    await panel.getByRole('button', { name: 'Cancel request', exact: true }).click();
    await expect(panel).toHaveAttribute('data-state', 'empty');

    await stateChoice.getByRole('button', { name: 'Empty', exact: true }).click();
    await expect(panel).toHaveAttribute('data-state', 'empty');
    await expect(panel.getByRole('heading', { name: 'No projects yet' })).toBeVisible();
    await expect(panel.getByRole('button', { name: 'Create project', exact: true })).toBeVisible();
    await capture('empty');
    await panel.getByRole('button', { name: 'Create project', exact: true }).click();
    await expect(panel.getByRole('status')).toHaveText('Create project preview opened; no project was created.');

    await stateChoice.getByRole('button', { name: 'Error', exact: true }).click();
    await expect(panel).toHaveAttribute('data-state', 'error');
    await expect(panel.getByRole('alert')).toContainText('Projects could not load');
    await expect(panel.getByRole('button', { name: 'Try again', exact: true })).toBeVisible();
    await capture('error');
    await panel.getByRole('button', { name: 'Try again', exact: true }).click();
    await expect(panel).toHaveAttribute('data-state', 'loading');

    await stateChoice.getByRole('button', { name: 'Denied', exact: true }).click();
    await expect(panel).toHaveAttribute('data-state', 'denied');
    await expect(panel.getByRole('alert')).toContainText('You do not have access to these projects');
    await expect(panel.getByRole('button', { name: 'Request access', exact: true })).toBeVisible();
    await capture('denied');
    await panel.getByRole('button', { name: 'Request access', exact: true }).click();
    await expect(panel.getByRole('status')).toHaveText('Access request prepared locally; nothing was sent.');
  }
});

test('archive dialog content, Escape focus return, and open-overlay captures stay consistent across every skin and mode', async ({ page, browser }) => {
  test.setTimeout(120_000);
  await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));

  for (const skin of skins) for (const mode of ['light', 'dark']) {
    await page.goto('/lab/behavior?fixture=archive-task');
    const fixture = page.locator('[data-fixture="archive-task-dialog"]');
    const main = page.locator('main').first();
    await main.evaluate((node, selection) => {
      node.dataset.skin = selection.skin;
      node.dataset.mode = selection.mode;
    }, { skin: skin.id, mode });
    await expect(main).toHaveAttribute('data-skin', skin.id);
    await expect(main).toHaveAttribute('data-mode', mode);
    const surfaceToken = await main.evaluate(node => getComputedStyle(node).getPropertyValue('--mf-surface').trim());
    expect(surfaceToken).not.toBe('');

    const trigger = fixture.getByRole('button', { name: 'Archive task T-1045', exact: true });
    const dialog = page.getByRole('dialog', { name: 'Archive completed task?' });
    await expect(fixture).toContainText('T-1045 · Verify scheduled export · Mateo Silva · Complete');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-describedby');
    await expect(dialog).toContainText('“Verify scheduled export” is complete. You can find archived tasks in the project history.');
    await expect(dialog.getByRole('button', { name: 'Keep task', exact: true })).toBeVisible();
    await expect(dialog.getByRole('button', { name: 'Archive task', exact: true })).toBeVisible();
    await expect(dialog).toContainText('Archive completed task?');

    // The query fixture starts open. Close it once, then exercise the user-triggered
    // open path so the native dialog records the correct opener for focus restoration.
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await trigger.click();
    await expect(dialog).toBeVisible();

    const fontStatus = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.status;
    });
    expect(fontStatus).toBe('loaded');
    const screenshotPath = path.join(captureDir, `${skin.id}-${mode}-1440x960-archive-dialog.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
    const capture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: `/lab/behavior?fixture=archive-task (${document.querySelector('[data-fixture="archive-task-dialog"]')?.textContent?.trim()}; ${document.querySelector('main')?.getAttribute('data-skin')} ${document.querySelector('main')?.getAttribute('data-mode')}; open archive dialog)`,
      state: 'archive-dialog-open',
      fontStack: getComputedStyle(document.querySelector('main')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(screenshotPath, { ...capture, browserName: browser.browserType().name(), browserVersion: browser.version() });

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await trigger.click();
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Keep task', exact: true }).click();
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();

    const popoverTrigger = page.getByRole('button', { name: 'Open popover', exact: true });
    const popoverCopy = page.getByText('Popover body copy', { exact: true });
    await popoverTrigger.click();
    await expect(popoverCopy).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(popoverCopy).not.toBeVisible();
    await expect(popoverTrigger).toBeFocused();
  }
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

test('SFX enforces global 1000ms rate limit and per-event 2000ms deduplication', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-10-26T00:00:00.000Z') });
  await page.addInitScript(() => {
    class FakeAudioContext {
      constructor() { this.state = 'running'; this.currentTime = 0; this.destination = {}; }
      createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
      createOscillator() { return { frequency: { setValueAtTime() {} }, connect() {}, start() {}, stop() {}, addEventListener() {}, disconnect() {} }; }
    }
    window.AudioContext = FakeAudioContext;
  });
  await page.goto('/components/brand-and-sfx');
  await page.getByRole('tab', { name: '3. Opt-In WebAudio SFX Studio (M10)' }).click();
  await page.getByRole('button', { name: /Grant Consent & Unmute/i }).click();
  await page.getByRole('button', { name: '🔔 success' }).click();
  await expect(page.getByText(/Played event: "success"/)).toBeVisible();

  await page.getByRole('button', { name: '⚠️ warning' }).click();
  await expect(page.getByText(/Silenced event: "warning" \(reason: rate-limited\)/)).toBeVisible();

  await page.clock.fastForward(1001);
  await page.getByRole('button', { name: '🔔 success' }).click();
  await expect(page.getByText(/Silenced event: "success" \(reason: deduplicated\)/)).toBeVisible();

  await page.clock.fastForward(1000);
  await page.getByRole('button', { name: '🔔 success' }).click();
  await expect(page.getByText(/Played event: "success"/).first()).toBeVisible();
});
