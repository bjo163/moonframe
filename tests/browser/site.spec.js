import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const siteCaptureDir = path.resolve('artifacts/site');
fs.mkdirSync(siteCaptureDir, { recursive: true });

test('R02 editorial composition remains stable at desktop, tablet, and phone widths', async ({ page }) => {
  await page.goto('/lab/r02-fixture');

  for (const [width, name] of [[1440, 'desktop'], [768, 'tablet'], [360, 'mobile']]) {
    await page.setViewportSize({ width, height: 1000 });
    await expect(page.getByRole('heading', { name: 'A city after the rain' })).toBeVisible();
    await page.screenshot({ path: path.join(siteCaptureDir, `r02-${name}.png`), fullPage: true, animations: 'disabled' });
  }
});

test('R02 editorial title and navigation retain readable contrast and visible focus', async ({ page }) => {
  await page.goto('/lab/r02-fixture');
  const title = page.getByRole('heading', { level: 1, name: 'A city after the rain' });
  const link = page.getByRole('link', { name: 'Latest' });
  const contrast = (foreground, background) => {
    const luminance = color => {
      const values = color.match(/[\d.]+/g);
      if (!values || values.length < 3) throw new Error(`Unable to parse computed color: ${color}`);
      const normalized = color.startsWith('color(srgb');
      const linear = value => {
        const normalizedValue = normalized ? value : value / 255;
        return normalizedValue <= 0.04045 ? normalizedValue / 12.92 : ((normalizedValue + 0.055) / 1.055) ** 2.4;
      };
      const [r, g, b] = values.slice(0, 3).map(Number);
      return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
    };
    const [a, b] = [luminance(foreground), luminance(background)].sort((x, y) => y - x);
    return (a + 0.05) / (b + 0.05);
  };
  const assertReadable = async locator => {
    const colors = await locator.evaluate(element => {
      const style = getComputedStyle(element);
      let background = style.backgroundColor;
      for (let ancestor = element; ancestor && (!background || background === 'rgba(0, 0, 0, 0)' || background === 'transparent'); ancestor = ancestor.parentElement) {
        const candidate = getComputedStyle(ancestor).backgroundColor;
        if (candidate !== 'rgba(0, 0, 0, 0)' && candidate !== 'transparent') background = candidate;
      }
      return { foreground: style.color, background };
    });
    expect(contrast(colors.foreground, colors.background), `${locator.toString()} ${JSON.stringify(colors)}`).toBeGreaterThanOrEqual(4.5);
  };

  await assertReadable(title);
  await assertReadable(link);
  await link.hover();
  await assertReadable(link);
  await page.keyboard.press('Tab');
  await expect(link).toBeFocused();
  await assertReadable(link);
  await expect(link).toHaveCSS('outline-style', 'solid');
});

test('all four reference screens preserve content with optional artwork hidden', async ({ page }) => {
  await page.goto('/lab/reference-art-off');
  const screenNames = ['Mission dashboard', 'Editorial landing', 'Campaign poster', 'Sign in'];
  for (const name of screenNames) {
    await expect(page.getByRole('heading', { name })).toBeVisible();
  }
  await expect(page.locator('[data-reference-art]')).toHaveCount(4);
  await expect(page.getByRole('heading', { name: 'A city after the rain' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Signals After Sundown' })).toBeVisible();
  await expect(page.getByLabel('Email address')).toBeVisible();

  await page.getByRole('checkbox', { name: 'Hide reference artwork' }).check();
  await expect(page.locator('[data-reference-art]')).toHaveCount(0);
  await expect(page.locator('[data-reference-art-fallback="r03"]')).toBeAttached();
  for (const name of screenNames) {
    await expect(page.getByRole('heading', { name })).toBeVisible();
  }
  await expect(page.getByRole('heading', { name: 'A city after the rain' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Signals After Sundown' })).toBeVisible();
  await expect(page.getByLabel('Email address')).toBeVisible();
  await expect(page.getByRole('link', { name: 'VIEW EVENT DETAILS' })).toBeVisible();
});

test('all four reference screen compositions remain present in grayscale', async ({ page }) => {
  await page.goto('/lab/reference-art-off');
  await page.emulateMedia({ colorScheme: 'light' });
  await page.addStyleTag({ content: 'html { filter: grayscale(1) !important; }' });

  for (const name of ['Mission dashboard', 'Editorial landing', 'Campaign poster', 'Sign in']) {
    const screen = page.locator('main > section').filter({ has: page.getByRole('heading', { name, exact: true }) });
    await expect(screen).toBeVisible();
    await expect(screen.getByRole('heading', { name, exact: true })).toBeVisible();
  }
  await expect(page.getByRole('heading', { name: 'A city after the rain' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Signals After Sundown' })).toBeVisible();
  await expect(page.getByLabel('Email address')).toBeVisible();
  await expect(page.locator('[data-reference-art]')).toHaveCount(4);
  await page.screenshot({ path: path.join(siteCaptureDir, 'reference-screens-grayscale.png'), fullPage: true, animations: 'disabled' });

  const grayscaleActive = await page.evaluate(() => getComputedStyle(document.documentElement).filter.includes('grayscale(1)'));
  expect(grayscaleActive).toBe(true);
});

test('R01 operational dashboard remains readable with 200% text zoom', async ({ page }) => {
  await page.goto('/lab/reference-art-off');
  await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });

  const dashboard = page.locator('main > section').filter({ has: page.getByRole('heading', { name: 'Mission dashboard', exact: true }) });
  await expect(dashboard).toBeVisible();
  await expect(dashboard.getByRole('heading', { name: 'Mission dashboard', exact: true })).toBeVisible();
  await expect(dashboard.getByRole('heading', { name: 'Northstar Studio operations' })).toBeVisible();
  await expect(dashboard.getByText('Active signals', { exact: true })).toBeVisible();
  await expect(dashboard.getByText('Queued actions', { exact: true })).toBeVisible();

  const bounds = await dashboard.evaluate(element => {
    const rect = element.getBoundingClientRect();
    return { left: rect.left, right: rect.right, viewport: document.documentElement.clientWidth, scrollWidth: element.scrollWidth, clientWidth: element.clientWidth };
  });
  expect(bounds.left).toBeGreaterThanOrEqual(0);
  expect(bounds.right).toBeLessThanOrEqual(bounds.viewport);
  expect(bounds.scrollWidth).toBeLessThanOrEqual(bounds.clientWidth + 1);
  await page.screenshot({ path: path.join(siteCaptureDir, 'r01-dashboard-200-percent.png'), fullPage: true, animations: 'disabled' });
});

test('R02 editorial landing reflows at 400% text zoom with navigation and story link usable', async ({ page }) => {
  await page.goto('/lab/reference-art-off');
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.addStyleTag({ content: 'html { font-size: 400% !important; }' });

  const editorial = page.locator('main > section').filter({ has: page.getByRole('heading', { name: 'Editorial landing', exact: true }) });
  const title = editorial.getByRole('heading', { name: 'A city after the rain' });
  const navigation = editorial.getByRole('navigation');
  const latest = navigation.getByRole('link', { name: 'Latest' });
  const storyLink = editorial.getByRole('link', { name: 'The night market returns' });

  await expect(title).toBeVisible();
  await expect(latest).toBeVisible();
  await expect(storyLink).toBeVisible();
  await latest.focus();
  await expect(latest).toBeFocused();
  await storyLink.focus();
  await expect(storyLink).toBeFocused();

  const bounds = await editorial.evaluate(element => ({
    right: element.getBoundingClientRect().right,
    viewport: document.documentElement.clientWidth,
    scrollWidth: element.scrollWidth,
    clientWidth: element.clientWidth,
  }));
  expect(bounds.right).toBeLessThanOrEqual(bounds.viewport);
  expect(bounds.scrollWidth).toBeLessThanOrEqual(bounds.clientWidth + 1);
  await page.screenshot({ path: path.join(siteCaptureDir, 'r02-landing-400-percent.png'), fullPage: true, animations: 'disabled' });
});

test('Moonframe showcase landing, skin wall, global skin selector, and command launcher work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto('/');
  await expect(page.getByRole('heading', { name: /One React Library\. Fifteen Radical Worlds\./i })).toBeVisible();

  await page.getByLabel('Global skin').selectOption('moonpunk');
  await expect(page.locator('html')).toHaveAttribute('data-skin', 'moonpunk');
  await page.getByLabel('Global appearance').selectOption('dark');
  await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');

  await page.screenshot({ path: path.join(siteCaptureDir, 'landing-moonpunk-dark.png'), fullPage: false, animations: 'disabled' });

  await page.getByRole('button', { name: 'Open command launcher' }).click();
  const dialog = page.getByRole('dialog', { name: 'Moonframe Quick Launcher' });
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();

  expect(errors).toEqual([]);
});

test('Skins gallery, skin detail, components catalog, templates marketplace, and preview frame work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto('/skins');
  await expect(page.getByRole('heading', { name: 'Skin Architecture Gallery' })).toBeVisible();
  await page.screenshot({ path: path.join(siteCaptureDir, 'skins-gallery.png'), fullPage: false, animations: 'disabled' });

  await page.goto('/skins/moonledger');
  await expect(page.getByRole('heading', { name: 'Moonledger Skin Specification' })).toBeVisible();

  await page.goto('/components');
  await expect(page.getByRole('heading', { name: 'Components & Level C Composite Blocks' })).toBeVisible();
  await page.screenshot({ path: path.join(siteCaptureDir, 'components-catalog.png'), fullPage: false, animations: 'disabled' });

  await page.goto('/components/auth-and-rich-inputs');
  await expect(page.getByRole('heading', { name: /OTPInput, PasswordField/i })).toBeVisible();

  await page.goto('/starters');
  await expect(page.getByRole('heading', { name: 'Production Starter Applications' })).toBeVisible();
  await page.screenshot({ path: path.join(siteCaptureDir, 'starters-marketplace.png'), fullPage: false, animations: 'disabled' });

  await page.goto('/starters/starter-admin-workspace');
  await expect(page.getByRole('heading', { name: /Admin Workspace Starter/i })).toBeVisible();
  await expect(page.locator('.mf-preview-iframe')).toBeVisible();

  await page.goto('/templates');
  await expect(page.getByRole('heading', { name: '43 Production-Ready Next.js Page Templates' })).toBeVisible();
  await page.screenshot({ path: path.join(siteCaptureDir, 'templates-marketplace.png'), fullPage: false, animations: 'disabled' });

  await page.goto('/templates/template-dashboard-overview');
  await expect(page.getByRole('heading', { name: 'Executive Dashboard Overview' })).toBeVisible();
  await page.getByRole('button', { name: 'Tablet (768px)' }).click();
  await expect(page.locator('.mf-preview-iframe')).toHaveCSS('width', '768px');
  await page.getByRole('button', { name: 'Source Code' }).click();
  await expect(page.locator('.mf-code-block')).toContainText('MetricGrid');
  await page.screenshot({ path: path.join(siteCaptureDir, 'template-detail.png'), fullPage: false, animations: 'disabled' });

  await page.goto('/templates/template-moonledger-home');
  await expect(page.getByRole('heading', { name: /Moonledger ERP Command Center/i })).toBeVisible();

  await page.goto('/preview/template-moonledger-invoices?skin=moonledger&mode=light');
  await expect(page.getByRole('heading', { name: 'General Ledger & Accounts Receivable' })).toBeVisible();

  await page.goto('/docs');
  await expect(page.getByRole('heading', { name: 'Next.js 16 & pnpm Integration Guide' })).toBeVisible();
  await expect(page.getByText('Moonframe Interactive Studio & Playground')).toBeVisible();

  expect(errors).toEqual([]);
});

test('R01 mission dashboard baseline captures wide, tablet, and mobile layouts', async ({ page }) => {
  const layouts = [
    { name: 'wide', width: 1440, height: 960 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 360, height: 800 },
  ];

  for (const layout of layouts) {
    await page.setViewportSize({ width: layout.width, height: layout.height });
    await page.goto('/lab?skin=moonpunk&mode=dark');
    await expect(page.locator('[data-fixture="dashboard-overview"]')).toBeVisible();
    await page.screenshot({
      path: path.join(siteCaptureDir, `r01-mission-dashboard-${layout.name}.png`),
      fullPage: true,
      animations: 'disabled',
    });
  }
});
