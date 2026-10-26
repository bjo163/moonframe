import { test, expect } from '@playwright/test';
import { skins } from '../../src/skins.js';
import fs from 'node:fs';
import path from 'node:path';
import { writeSkinCaptureProvenance } from '../../scripts/skin-capture-provenance.mjs';

const captureDir = path.resolve('artifacts/skins');
fs.mkdirSync(captureDir, { recursive: true });

for (const skin of skins) for (const mode of ['light', 'dark']) {
  test(`${skin.id} ${mode}: rendered, contrast, responsive and RTL`, async ({ page, browser }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.clock.setFixedTime(new Date('2026-10-25T12:00:00.000Z'));
    await page.goto('/lab');
    await page.getByRole('button', { name: skin.name, exact: false }).filter({ has: page.locator('.demo-swatch') }).click();
    await page.getByLabel('Appearance', { exact: true }).selectOption(mode);
    await page.evaluate(() => document.fonts.ready.then(() => true));
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
    const screenshotPath = path.join(captureDir, `${skin.id}-${mode}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true, animations: 'disabled' });
    const capture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe)',
      fontStack: getComputedStyle(document.querySelector('.mf-root')).fontFamily,
      fontLoadStatus: document.fonts.status,
      userAgent: navigator.userAgent,
    }));
    writeSkinCaptureProvenance(screenshotPath, {
      ...capture,
      browserName: browser.browserType().name(),
      browserVersion: browser.version(),
    });
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect.poll(() => page.evaluate(() => `${window.innerWidth}x${window.innerHeight}`)).toBe('768x1024');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), 'No horizontal page overflow at 768px').toBe(true);
    const tabletScreenshotPath = path.join(captureDir, `${skin.id}-${mode}-tablet.png`);
    await page.screenshot({ path: tabletScreenshotPath, fullPage: true, animations: 'disabled' });
    const tabletCapture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe)',
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
    const phoneScreenshotPath = path.join(captureDir, `${skin.id}-${mode}-phone.png`);
    await page.screenshot({ path: phoneScreenshotPath, fullPage: true, animations: 'disabled' });
    const phoneCapture = await page.evaluate(() => ({
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      locale: navigator.language,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      timezoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      frozenTime: new Date().toISOString(),
      fixture: '/lab default PropsPlayground (Button / primary / md / Explore Moonframe)',
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
