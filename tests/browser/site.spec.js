import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const siteCaptureDir = path.resolve('artifacts/site');
fs.mkdirSync(siteCaptureDir, { recursive: true });

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

  await page.goto('/templates');
  await expect(page.getByRole('heading', { name: '22 Production-Ready Next.js Page Templates' })).toBeVisible();
  await page.screenshot({ path: path.join(siteCaptureDir, 'templates-marketplace.png'), fullPage: false, animations: 'disabled' });

  await page.goto('/templates/template-dashboard-overview');
  await expect(page.getByRole('heading', { name: 'Executive Dashboard Overview' })).toBeVisible();
  await page.getByRole('button', { name: 'Tablet (768px)' }).click();
  await expect(page.locator('.mf-preview-iframe')).toHaveCSS('width', '768px');
  await page.getByRole('button', { name: 'Source Code' }).click();
  await expect(page.locator('.mf-code-block')).toContainText('MetricGrid');
  await page.screenshot({ path: path.join(siteCaptureDir, 'template-detail.png'), fullPage: false, animations: 'disabled' });

  await page.goto('/preview/template-moonledger-invoices?skin=moonledger&mode=light');
  await expect(page.getByRole('heading', { name: 'General Ledger & Accounts Receivable' })).toBeVisible();

  await page.goto('/docs');
  await expect(page.getByRole('heading', { name: 'Next.js 16 & pnpm Integration Guide' })).toBeVisible();

  expect(errors).toEqual([]);
});
