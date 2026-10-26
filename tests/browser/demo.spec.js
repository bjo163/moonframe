import { test, expect } from '@playwright/test';

test('workspace creates projects, updates progress, searches, filters, sorts, and persists', async ({ page }) => {
  await page.goto('/lab');
  const projectRows = page.locator('.demo-table-scroll tbody tr');
  await page.getByRole('button', { name: 'Create project', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Give your idea a home.' });
  await dialog.getByLabel('Project name').fill('Astra launch');
  await dialog.getByLabel('Category').selectOption('Development');
  await dialog.getByLabel('Due date').fill('2026-12-10');
  await dialog.getByRole('button', { name: 'Create project', exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.getByText('Astra launch', { exact: true })).toBeVisible();
  await page.getByLabel('Status for Astra launch', { exact: true }).selectOption('Completed');
  await expect(page.getByRole('progressbar', { name: 'Astra launch progress', exact: true })).toHaveAttribute('aria-valuenow', '100');
  await page.getByLabel('Sort projects', { exact: true }).selectOption('name');
  await expect(projectRows.first()).toContainText('After hours studio');
  await page.getByLabel('Search projects', { exact: true }).fill('astra');
  await expect(projectRows).toHaveCount(1);
  await expect(projectRows).toContainText('Astra launch');
  await page.getByLabel('Filter projects by status', { exact: true }).selectOption('Planned');
  await expect(page.getByText('No projects found', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Clear filters' }).click();
  await expect(projectRows).toHaveCount(6);
  await page.reload();
  await expect(page.getByText('Astra launch', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Status for Astra launch', { exact: true })).toHaveValue('Completed');
});

test('appearance controls change attributes and preserve requested system mode', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
  await page.goto('/lab');
  const root = page.locator('.mf-root');
  await page.getByRole('button', { name: /Moonquest/ }).click();
  await expect(root).toHaveAttribute('data-skin', 'moonquest');
  await page.getByLabel('Appearance', { exact: true }).selectOption('light');
  await expect(root).toHaveAttribute('data-mode', 'light');
  await page.getByLabel('Appearance', { exact: true }).selectOption('system');
  await expect(root).toHaveAttribute('data-mode', 'dark');
  await page.getByLabel('Density', { exact: true }).selectOption('compact');
  await expect(root).toHaveAttribute('data-density', 'compact');
  await page.getByLabel('Motion', { exact: true }).selectOption('system');
  await expect(root).toHaveAttribute('data-motion', 'reduced');
  await page.getByLabel('Contrast', { exact: true }).selectOption('high');
  await expect(root).toHaveAttribute('data-contrast', 'high');
  await page.getByLabel('Direction', { exact: true }).selectOption('rtl');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await page.reload();
  await expect(root).toHaveAttribute('data-skin', 'moonquest');
  await expect(page.getByLabel('Appearance', { exact: true })).toHaveValue('system');
  await expect(root).toHaveAttribute('data-density', 'compact');
  await expect(root).toHaveAttribute('data-contrast', 'high');
  await page.emulateMedia({ colorScheme: 'light', reducedMotion: 'no-preference' });
  await expect(root).toHaveAttribute('data-mode', 'light');
  await expect(root).toHaveAttribute('data-motion', 'full');
});

test('component gallery has working tabs, disclosure, preferences, dialog and feedback', async ({ page }) => {
  await page.goto('/lab');
  await page.getByRole('button', { name: 'Components UI', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Everything, in your style.' })).toBeVisible();
  await page.getByRole('tab', { name: 'Details', exact: true }).click();
  await expect(page.getByRole('tabpanel', { name: 'Details', exact: true })).toContainText('Fifteen identities');
  await page.getByText('How do I use it in my app?', { exact: true }).click();
  await expect(page.getByText(/Import the components and stylesheet from the package/)).toBeVisible();
  await page.getByRole('checkbox', { name: 'I agree to the workspace guidelines' }).check();
  await page.getByRole('switch', { name: 'Send me project notifications' }).uncheck();
  await page.getByRole('button', { name: 'Save preferences', exact: true }).click();
  await expect(page.locator('.demo-toast')).toContainText('Preferences saved');
  await page.getByRole('button', { name: 'Open dialog', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.getByRole('button', { name: 'Show notification', exact: true }).click();
  await expect(page.locator('.demo-toast')).toContainText('A small update');
});

test('malformed saved workspace cannot crash the demo and query previews override persistence', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('moonframe-demo-projects-v1', JSON.stringify([{ id: 'bad', name: 'Bad', category: 'x', owner: 'x', date: '2026-99-99', status: 'Planned', progress: 0 }]));
    localStorage.setItem('moonframe-demo-theme-v1', JSON.stringify({ skin: 'moonquest', mode: 'dark' }));
  });
  await page.goto('/lab?skin=moonpunk&mode=light');
  await expect(page.getByText('Orbit design system', { exact: true })).toBeVisible();
  await expect(page.locator('.mf-root')).toHaveAttribute('data-skin', 'moonpunk');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode', 'light');
});
