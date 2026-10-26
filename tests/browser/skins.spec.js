import { test, expect } from '@playwright/test';
import { skins } from '../../src/skins.js';
import fs from 'node:fs';
import path from 'node:path';
import { writeSkinCaptureProvenance } from '../../scripts/skin-capture-provenance.mjs';

const captureDir = path.resolve('artifacts/skins');
fs.mkdirSync(captureDir, { recursive: true });
const captureVariants = [
  { viewport: '1440x960', state: 'default' },
  { viewport: '1440x960', state: 'decoration-off' },
  { viewport: '1440x960', state: 'grayscale' },
  { viewport: '1440x960', state: 'reduced-motion' },
  { viewport: '768x1024', state: 'default' },
  { viewport: '360x800', state: 'default' },
];

function skinCaptureFilename(skin, mode, viewport, state) {
  return `${skin.id}-${mode}-${viewport}-${state}.png`;
}

test('skin capture filenames uniquely encode skin, mode, viewport, and state', () => {
  const filenames = skins.flatMap(skin => ['light', 'dark'].flatMap(mode => captureVariants.map(({ viewport, state }) => (
    skinCaptureFilename(skin, mode, viewport, state)
  ))));
  expect(new Set(filenames).size).toBe(filenames.length);
  for (const skin of skins) for (const mode of ['light', 'dark']) for (const { viewport, state } of captureVariants) {
    expect(skinCaptureFilename(skin, mode, viewport, state)).toBe(`${skin.id}-${mode}-${viewport}-${state}.png`);
  }
});

async function waitForFontsReady(page) {
  const status = await page.evaluate(async () => {
    await document.fonts.ready;
    return document.fonts.status;
  });
  expect(status, 'document fonts should finish loading before capture').toBe('loaded');
}

for (const skin of skins) for (const mode of ['light', 'dark']) {
  test(`${skin.id} ${mode}: rendered, contrast, responsive and RTL`, async ({ page, browser }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));
    await page.goto('/lab');
    await page.getByRole('button', { name: skin.name, exact: false }).filter({ has: page.locator('.demo-swatch') }).click();
    await page.getByLabel('Appearance', { exact: true }).selectOption(mode);
    await waitForFontsReady(page);
    const dashboardFixture = page.locator('[data-fixture="dashboard-overview"]');
    await expect(dashboardFixture.getByRole('heading', { level: 2, name: 'Overview' })).toBeVisible();
    await expect(dashboardFixture.getByText('Northstar Studio', { exact: true })).toBeVisible();
    await expect(dashboardFixture.getByText('Sunday, October 25, 2026', { exact: true })).toBeVisible();
    const fixtureNavigation = dashboardFixture.getByRole('navigation', { name: 'Workspace sections' });
    const fixtureNavItems = fixtureNavigation.getByRole('button');
    await expect(fixtureNavItems).toHaveText(['Overview', 'Projects', 'Tasks', 'Reports', 'Settings']);
    await expect(fixtureNavItems.nth(0)).toHaveAttribute('aria-current', 'page');
    await fixtureNavigation.getByRole('button', { name: 'Reports', exact: true }).click();
    await expect(fixtureNavigation.getByRole('button', { name: 'Reports', exact: true })).toHaveAttribute('aria-current', 'page');
    await expect(fixtureNavItems.nth(0)).not.toHaveAttribute('aria-current', 'page');
    await fixtureNavigation.getByRole('button', { name: 'Overview', exact: true }).click();
    await expect(fixtureNavItems.nth(0)).toHaveAttribute('aria-current', 'page');
    for (const [label, value] of [['Open tasks', '12'], ['In progress', '4'], ['Completed this week', '18']]) {
      await expect(dashboardFixture.locator('.fixture-dashboard-metric').filter({ hasText: label })).toContainText(value);
    }
    await expect(dashboardFixture.getByRole('heading', { level: 3, name: 'Recent project activity' })).toBeVisible();
    const activityList = dashboardFixture.locator('.fixture-dashboard-activity');
    for (const task of ['Confirm migration checklist', 'Review workspace permissions', 'Publish release notes draft', 'Verify scheduled export', 'Test recovery procedure']) {
      await expect(activityList.getByText(task, { exact: true })).toBeVisible();
    }
    await expect(dashboardFixture.locator('.fixture-dashboard-note').getByText('Quarterly migration readiness — confirm access, review the rollback checklist, and notify the operations group before the maintenance window.', { exact: true })).toBeVisible();
    const fixtureTaskTable = dashboardFixture.getByRole('table', { name: 'Project tasks' });
    const fixtureTaskNames = fixtureTaskTable.locator('.fixture-task-name');
    await expect(fixtureTaskTable.getByRole('columnheader')).toHaveText(['Task', 'Owner', 'Status', 'Due date', 'Estimate']);
    await expect(fixtureTaskNames).toHaveText([
      'Verify scheduled export',
      'Confirm migration checklist',
      'Review workspace permissions',
      'Publish release notes draft',
      'Test recovery procedure',
    ]);
    for (const [id, owner, status, date, estimate] of [
      ['T-1042', 'Amina Yusuf', 'In progress', '2026-10-27', '3 h'],
      ['T-1043', 'Leo Martin', 'Needs review', '2026-10-28', '2 h'],
      ['T-1044', 'Nia Patel', 'Not started', '2026-10-30', '4 h'],
      ['T-1045', 'Mateo Silva', 'Complete', '2026-10-24', '1 h'],
      ['T-1046', 'Hana Kim', 'Blocked', '2026-10-31', '5 h'],
    ]) {
      const rowText = await fixtureTaskTable.getByRole('row').filter({ hasText: id }).innerText();
      for (const value of [id, owner, status, date, estimate]) expect(rowText).toContain(value);
    }
    await dashboardFixture.getByLabel('Sort project tasks', { exact: true }).selectOption('task');
    await expect(fixtureTaskNames).toHaveText([
      'Confirm migration checklist',
      'Publish release notes draft',
      'Review workspace permissions',
      'Test recovery procedure',
      'Verify scheduled export',
    ]);
    await dashboardFixture.getByLabel('Search project tasks', { exact: true }).fill('Hana Kim');
    await expect(fixtureTaskNames).toHaveText(['Test recovery procedure']);
    await expect(dashboardFixture.getByText('1 of 5 tasks', { exact: true })).toBeVisible();
    await dashboardFixture.getByLabel('Search project tasks', { exact: true }).fill('');
    await dashboardFixture.getByLabel('Sort project tasks', { exact: true }).selectOption('due-date');
    await expect(fixtureTaskNames).toHaveText([
      'Verify scheduled export',
      'Confirm migration checklist',
      'Review workspace permissions',
      'Publish release notes draft',
      'Test recovery procedure',
    ]);
    const profileFixture = dashboardFixture.getByRole('region', { name: 'Workspace profile' });
    await expect(profileFixture.getByLabel('Workspace name', { exact: true })).toHaveValue('Northstar Studio');
    const profileUrl = profileFixture.getByLabel('Workspace URL', { exact: true });
    await expect(profileUrl).toHaveValue('https://northstar.example/workspace');
    await expect(profileUrl).toHaveAttribute('required', '');
    await expect(profileFixture.getByText('Use the address your team recognizes.', { exact: true })).toBeVisible();
    await expect(profileFixture.getByLabel('Description', { exact: true })).toHaveValue('Quarterly migration readiness — confirm access, review the rollback checklist, and notify the operations group before the maintenance window.');
    await expect(profileFixture.getByLabel('Default report time', { exact: true })).toHaveValue('09:30');
    await expect(profileFixture.getByText('UTC', { exact: true }).last()).toBeVisible();
    await expect(profileFixture.getByRole('checkbox', { name: 'Email me about task changes' })).toBeChecked();
    await expect(profileFixture.getByRole('button', { name: 'Cancel', exact: true })).toBeVisible();
    const saveProfileButton = profileFixture.getByRole('button', { name: 'Save changes', exact: true });
    await expect(saveProfileButton).toBeVisible();
    await profileUrl.fill('not a valid workspace URL');
    await saveProfileButton.click();
    await expect(profileUrl).toHaveAttribute('aria-invalid', 'true');
    await expect(profileUrl).toHaveAttribute('aria-describedby', 'fixture-workspace-url-error');
    await expect(profileFixture.getByText('Enter a valid workspace URL.', { exact: true })).toBeVisible();
    await profileUrl.fill('https://northstar.example/workspace');
    await saveProfileButton.click();
    await expect(profileFixture.locator('.fixture-profile-status')).toHaveText('Saving…');
    await expect(profileFixture.locator('.fixture-profile-status')).toHaveText('Workspace profile saved.');
    await profileFixture.getByRole('button', { name: 'Cancel', exact: true }).click();
    await expect(profileUrl).toHaveValue('https://northstar.example/workspace');
    const decorationToggle = page.getByRole('switch', { name: 'Hide decorative elements', exact: true });
    const shell = page.locator('.mf-shell');
    const decorativeSwatches = page.locator('.demo-swatch');
    const decorativeProjectSymbols = page.locator('.demo-project-symbol');
    const decorativeBrandMarks = page.locator('.demo-mark, .demo-workspace-icon, .mf-nav-item svg, .demo-skin-option svg');
    await expect(decorationToggle).not.toBeChecked();
    await expect(decorativeSwatches.first()).toBeVisible();
    await expect(decorativeProjectSymbols.first()).toBeVisible();
    await decorationToggle.check();
    await expect(shell).toHaveAttribute('data-decoration-off', 'true');
    await expect(decorativeSwatches.first()).toHaveCSS('display', 'none');
    await expect(decorativeProjectSymbols.first()).toHaveCSS('display', 'none');
    await expect(decorativeBrandMarks.first()).toHaveCSS('display', 'none');
    await expect(page.getByRole('button', { name: 'Overview', exact: false }).first()).toBeVisible();
    await expect(page.locator('.demo-skin-option[data-active="true"]')).toHaveAttribute('aria-pressed', 'true');
    await expect(fixtureNavItems.nth(0)).toHaveAttribute('aria-current', 'page');
    await expect(fixtureTaskNames).toHaveCount(5);
    await expect(fixtureTaskTable.getByText('Blocked', { exact: true })).toBeVisible();
    await expect(profileFixture.getByLabel('Workspace name', { exact: true })).toHaveValue('Northstar Studio');
    await expect(profileFixture.getByText('Use the address your team recognizes.', { exact: true })).toBeVisible();
    await decorationToggle.focus();
    await expect(decorationToggle).toBeFocused();
    await profileUrl.fill('not a valid workspace URL');
    await profileFixture.getByRole('button', { name: 'Save changes', exact: true }).click();
    await expect(profileFixture.getByText('Enter a valid workspace URL.', { exact: true })).toBeVisible();
    await expect(profileUrl).toHaveAttribute('aria-describedby', 'fixture-workspace-url-error');
    await profileUrl.fill('https://northstar.example/workspace');
    await expect(profileFixture.getByText('Use the address your team recognizes.', { exact: true })).toBeVisible();
    await profileFixture.getByRole('button', { name: 'Cancel', exact: true }).click();
    const decorationOffScreenshotPath = path.join(captureDir, skinCaptureFilename(skin, mode, '1440x960', 'decoration-off'));
    await waitForFontsReady(page);
    await page.screenshot({ path: decorationOffScreenshotPath, fullPage: true, animations: 'disabled' });
    const decorationOffCapture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe) + fixed Northstar Studio dashboard, task table and profile form; decoration-off state',
      fontStack: getComputedStyle(document.querySelector('.mf-root')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(decorationOffScreenshotPath, { ...decorationOffCapture, browserName: browser.browserType().name(), browserVersion: browser.version() });
    await decorationToggle.uncheck();
    await expect(shell).not.toHaveAttribute('data-decoration-off', 'true');
    await expect(decorativeSwatches.first()).toBeVisible();
    await expect(decorativeProjectSymbols.first()).toBeVisible();
    const root = page.locator('.mf-root');
    await expect(root).toHaveAttribute('data-skin', skin.id);
    await expect(root).toHaveAttribute('data-mode', mode);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const contrast = await root.evaluate(node => {
      const style = getComputedStyle(node);
      const rgb = token => {
        const probe = document.createElement('span');
        probe.style.color = style.getPropertyValue(token);
        node.append(probe);
        const channels = getComputedStyle(probe).color.match(/[\d.]+/g).slice(0, 3).map(Number);
        probe.remove();
        const linear = channels.map(v => {
          v /= 255;
          return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
      };
      const ratio = (a, b) => {
        const x = rgb(a);
        const y = rgb(b);
        return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
      };
      return {
        text: ratio('--mf-text', '--mf-bg'),
        surface: ratio('--mf-text', '--mf-surface'),
        muted: ratio('--mf-muted', '--mf-surface'),
        raised: ratio('--mf-muted', '--mf-surface-raised'),
        action: ratio('--mf-accent-text', '--mf-accent'),
      };
    });
    for (const [role, ratio] of Object.entries(contrast)) {
      expect(ratio, `${skin.id}/${mode} ${role} contrast`).toBeGreaterThanOrEqual(4.5);
    }
    const screenshotPath = path.join(captureDir, skinCaptureFilename(skin, mode, '1440x960', 'default'));
    await waitForFontsReady(page);
    await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
    const capture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe) + fixed Northstar Studio dashboard, workspace nav, task table and profile form; decorations on',
      fontStack: getComputedStyle(document.querySelector('.mf-root')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(screenshotPath, {
      ...capture,
      browserName: browser.browserType().name(),
      browserVersion: browser.version(),
    });
    const grayscaleStyle = await page.addStyleTag({ content: 'html { filter: grayscale(1) !important; }' });
    await expect(page.locator('html')).toHaveCSS('filter', 'grayscale(1)');
    await expect(dashboardFixture.getByRole('heading', { level: 2, name: 'Overview' })).toBeVisible();
    await expect(fixtureTaskNames).toHaveCount(5);
    await expect(profileFixture.getByLabel('Workspace name', { exact: true })).toHaveValue('Northstar Studio');
    expect(await page.evaluate(() => `${window.innerWidth}x${window.innerHeight}`)).toBe('1440x960');
    const grayscaleScreenshotPath = path.join(captureDir, skinCaptureFilename(skin, mode, '1440x960', 'grayscale'));
    await waitForFontsReady(page);
    await page.screenshot({ path: grayscaleScreenshotPath, fullPage: true, animations: 'disabled' });
    const grayscaleCapture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe) + fixed Northstar Studio dashboard, workspace nav, task table and profile form; grayscale filter applied to full page',
      fontStack: getComputedStyle(document.querySelector('.mf-root')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(grayscaleScreenshotPath, {
      ...grayscaleCapture,
      browserName: browser.browserType().name(),
      browserVersion: browser.version(),
    });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect(root).toHaveAttribute('data-motion', 'reduced');
    await expect(dashboardFixture.getByRole('heading', { level: 2, name: 'Overview' })).toBeVisible();
    await expect(dashboardFixture.locator('.fixture-dashboard-metric').filter({ hasText: 'Open tasks' })).toContainText('12');
    await expect(fixtureNavItems.nth(0)).toHaveAttribute('aria-current', 'page');
    await expect(fixtureTaskNames).toHaveCount(5);
    await expect(fixtureTaskTable.getByText('Blocked', { exact: true })).toBeVisible();
    await expect(profileFixture.getByLabel('Workspace name', { exact: true })).toHaveValue('Northstar Studio');
    const reducedMotionButton = page.locator('.mf-button').first();
    const reducedTransitionDurations = await reducedMotionButton.evaluate(node => getComputedStyle(node).transitionDuration.split(',').map(duration => Number.parseFloat(duration)));
    expect(reducedTransitionDurations.every(duration => duration === 0), 'reduced motion removes animated transition time').toBe(true);
    const reducedMotionScreenshotPath = path.join(captureDir, skinCaptureFilename(skin, mode, '1440x960', 'reduced-motion'));
    await waitForFontsReady(page);
    await page.screenshot({ path: reducedMotionScreenshotPath, fullPage: true, animations: 'disabled' });
    const reducedMotionCapture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe) + fixed Northstar Studio dashboard, workspace nav, task table and profile form; reduced-motion preference active',
      state: 'reduced-motion',
      motionPreference: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduce' : 'no-preference',
      fontStack: getComputedStyle(document.querySelector('.mf-root')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(reducedMotionScreenshotPath, {
      ...reducedMotionCapture,
      browserName: browser.browserType().name(),
      browserVersion: browser.version(),
    });
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await expect(root).toHaveAttribute('data-motion', 'full');
    await grayscaleStyle.evaluate(style => style.remove());
    await expect(page.locator('html')).not.toHaveCSS('filter', 'grayscale(1)');
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect.poll(() => page.evaluate(() => `${window.innerWidth}x${window.innerHeight}`)).toBe('768x1024');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'No horizontal page overflow at 768px').toBe(true);
    const tabletScreenshotPath = path.join(captureDir, skinCaptureFilename(skin, mode, '768x1024', 'default'));
    await waitForFontsReady(page);
    await page.screenshot({ path: tabletScreenshotPath, fullPage: true, animations: 'disabled' });
    const tabletCapture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe) + fixed Northstar Studio dashboard, workspace nav, task table and profile form; decorations on',
      fontStack: getComputedStyle(document.querySelector('.mf-root')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(tabletScreenshotPath, {
      ...tabletCapture,
      browserName: browser.browserType().name(),
      browserVersion: browser.version(),
    });
    await page.setViewportSize({ width: 360, height: 800 });
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'No horizontal page overflow at 360px').toBe(true);
    await expect.poll(() => page.evaluate(() => `${window.innerWidth}x${window.innerHeight}`)).toBe('360x800');
    const phoneScreenshotPath = path.join(captureDir, skinCaptureFilename(skin, mode, '360x800', 'default'));
    await waitForFontsReady(page);
    await page.screenshot({ path: phoneScreenshotPath, fullPage: true, animations: 'disabled' });
    const phoneCapture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe) + fixed Northstar Studio dashboard, workspace nav, task table and profile form; decorations on',
      fontStack: getComputedStyle(document.querySelector('.mf-root')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(phoneScreenshotPath, {
      ...phoneCapture,
      browserName: browser.browserType().name(),
      browserVersion: browser.version(),
    });
    const appearanceControl = page.getByLabel('Appearance', { exact: true });
    await appearanceControl.focus();
    await expect(appearanceControl).toBeFocused();
    const focusBounds = await appearanceControl.boundingBox();
    expect(focusBounds, 'Appearance control remains within the phone viewport').not.toBeNull();
    expect(focusBounds.x).toBeGreaterThanOrEqual(0);
    expect(focusBounds.x + focusBounds.width).toBeLessThanOrEqual(361);
    await page.getByLabel('Direction', { exact: true }).selectOption('rtl');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'No RTL page overflow').toBe(true);
    expect(errors).toEqual([]);
  });
}

test('system mode follows OS, manual choice persists, unavailable storage is safe', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
  await page.goto('/lab');
  await page.getByLabel('Appearance', { exact: true }).selectOption('system');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode', 'dark');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-motion', 'reduced');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode', 'light');
  await page.getByLabel('Appearance', { exact: true }).selectOption('dark');
  await page.reload();
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode', 'dark');
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new Error('Storage unavailable');
      },
    });
  });
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.getByLabel('Appearance', { exact: true }).selectOption('light');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode', 'light');
});

test('forced colors retains controls and theme contrast is independently selectable', async ({ page }) => {
  await page.emulateMedia({ forcedColors: 'active' });
  await page.goto('/lab');
  await page.getByLabel('Contrast', { exact: true }).selectOption('high');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-contrast', 'high');
  await expect(page.getByLabel('Appearance', { exact: true })).toBeVisible();
  await page.getByLabel('Density', { exact: true }).selectOption('compact');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-density', 'compact');
});

test('reduced motion, forced colors, keyboard focus, RTL and long text stay usable together', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce', forcedColors: 'active' });
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/lab');
  await page.getByLabel('Direction', { exact: true }).selectOption('rtl');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-motion', 'reduced');
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toBeVisible();
  const button = page.locator('.mf-button').first();
  await button.focus();
  await expect(button).toBeFocused();
  const focusAndMotion = await button.evaluate((node) => ({
    outlineWidth: getComputedStyle(node).outlineWidth,
    transitionDuration: getComputedStyle(node).transitionDuration,
  }));
  expect(parseFloat(focusAndMotion.outlineWidth)).toBeGreaterThanOrEqual(2);
  expect(focusAndMotion.transitionDuration.split(',').every((duration) => parseFloat(duration) === 0)).toBe(true);
  const description = page.locator('.mf-card-description').first();
  await expect(description).toBeVisible();
  const textFits = await description.evaluate((node) => node.scrollWidth <= node.clientWidth);
  expect(textFits, 'long card description remains readable without horizontal clipping').toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
});
