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
