import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import {
  normalizePreferences,
  resolveTheme,
  getThemeAttributes,
  getThemeInitScript,
  ThemeScript,
  ThemeProvider,
  skins,
  skinIds,
  Button,
  Card,
  Input,
  NavItem,
  Badge,
  Field,
  RadioGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Pagination,
  DataTable,
  EmptyState,
  SkinSelector,
  ModeSelector,
  AppShell,
  Sidebar,
  Main,
  Header,
  Nav,
  StatCard,
  Kbd,
  CodeBlock,
  ToastProvider,
} from '../src/index.js';
import * as themeSubpath from '../src/theme.js';
import * as skinsSubpath from '../src/skins.js';

test('all canonical skins are available once, with both CSS appearances', () => {
  const contract = JSON.parse(fs.readFileSync(new URL('../contracts/moonframe-theme-contract-v1.3.json', import.meta.url)));
  assert.deepEqual([...skinIds].sort(), [...contract.independentAxes.skin].sort());
  assert.equal(new Set(skinIds).size, 15);
  assert.equal(skins.length, 15);
  const css = fs.readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');
  for (const id of skinIds) assert.ok(css.includes(id), `${id} has CSS`);
  const tailwindCss = fs.readFileSync(new URL('../src/tailwind.css', import.meta.url), 'utf8');
  assert.ok(tailwindCss.includes('@theme inline'), 'Tailwind v4 bridge is present');
});

test('malformed preferences use explicit safe fallbacks', () => {
  for (const value of [null, 9, 'bad', {}, [], { skin: '__proto__', mode: 'pink', density: false }]) {
    assert.deepEqual(normalizePreferences(value), {
      skin: 'classic',
      mode: 'system',
      density: 'comfortable',
      motion: 'system',
      contrast: 'system',
    });
  }
});

test('requested system is preserved independently from effective preferences', () => {
  const result = resolveTheme({ skin: 'moonquest', mode: 'system' }, { dark: true, reducedMotion: true, highContrast: true });
  assert.equal(result.mode, 'system');
  assert.equal(result.resolvedMode, 'dark');
  assert.equal(result.resolvedMotion, 'reduced');
  assert.equal(result.resolvedContrast, 'high');
  assert.equal(getThemeAttributes(result)['data-skin'], 'moonquest');
  assert.equal(resolveTheme({ mode: 'light' }, { dark: true }).resolvedMode, 'light');
});

test('every skin server renders with a stable initial theme and no browser globals', () => {
  for (const skin of skinIds) for (const mode of ['light', 'dark']) {
    const html = renderToString(
      createElement(
        ThemeProvider,
        { defaultSkin: skin, defaultMode: mode },
        createElement(Card, null, createElement(Button, null, 'Save'), createElement(Input, { 'aria-label': 'Name' }))
      )
    );
    assert.ok(html.includes(`data-skin="${skin}"`));
    assert.ok(html.includes(`data-mode="${mode}"`));
    assert.ok(html.includes('Save'));
  }
});

test('Next.js ThemeScript and getThemeInitScript generate valid pre-paint SSR bootstrap', () => {
  const script = getThemeInitScript({ defaultSkin: 'moonpunk', defaultMode: 'dark', storageKey: 'next-theme' });
  assert.ok(script.includes('"skin":"moonpunk"'));
  assert.ok(script.includes('"mode":"dark"'));
  assert.ok(script.includes('next-theme'));
  const html = renderToString(createElement(ThemeScript, { defaultSkin: 'moonledger', defaultMode: 'system', nonce: 'csp-123' }));
  assert.ok(html.includes('<script'));
  assert.ok(html.includes('nonce="csp-123"'));
  assert.ok(html.includes('moonledger'));
});

test('asChild Slot merges classes and attributes onto Next.js Link-like anchor without nested button', () => {
  const html = renderToString(
    createElement(
      ThemeProvider,
      { defaultSkin: 'classic', defaultMode: 'light' },
      createElement(Button, { asChild: true, variant: 'secondary', size: 'lg' }, createElement('a', { href: '/dashboard', className: 'next-link' }, 'Go to dashboard')),
      createElement(NavItem, { asChild: true, active: true }, createElement('a', { href: '/projects' }, 'Projects')),
      createElement(Badge, { asChild: true, variant: 'primary' }, createElement('a', { href: '/tag' }, 'Tag'))
    )
  );
  assert.ok(!html.includes('<button'), 'asChild must not wrap anchor inside a button');
  assert.ok(html.includes('href="/dashboard"'));
  assert.ok(html.includes('class="mf-button next-link"'));
  assert.ok(html.includes('data-variant="secondary"'));
  assert.ok(html.includes('aria-current="page"'));
});

test('Next.js workspace layout, form fields, selectors, and DataTable server-render cleanly', () => {
  const html = renderToString(
    createElement(
      ThemeProvider,
      { defaultSkin: 'moonledger', defaultMode: 'dark' },
      createElement(
         ToastProvider,
        null,
        createElement(
          AppShell,
          null,
          createElement(
            Sidebar,
            null,
            createElement(Nav, null, createElement(NavItem, { href: '/overview', active: true }, 'Overview')),
            createElement(SkinSelector, null),
            createElement(ModeSelector, { variant: 'segmented' })
          ),
          createElement(
            Main,
            null,
            createElement(
              Header,
              null,
              createElement(
                Breadcrumb,
                null,
                createElement(BreadcrumbItem, null, createElement(BreadcrumbLink, { href: '/' }, 'Home')),
                createElement(BreadcrumbItem, null, createElement(BreadcrumbLink, { current: true }, 'Projects'))
              )
            ),
            createElement(StatCard, { label: 'Active', value: '12', detail: 'In progress' }),
            createElement(
              Field,
              { label: 'Workspace slug', description: 'Used in URLs', error: 'Already taken', required: true },
              createElement(Input, { defaultValue: 'orbit' })
            ),
            createElement(RadioGroup, {
              label: 'Plan',
              defaultValue: 'pro',
              items: [
                { value: 'starter', label: 'Starter' },
                { value: 'pro', label: 'Pro', description: 'For teams' },
              ],
            }),
            createElement(DataTable, {
              caption: 'Team projects',
              searchable: true,
              columns: [
                { key: 'name', header: 'Name', sortable: true },
                { key: 'status', header: 'Status' },
              ],
              data: [{ id: '1', name: 'Moonframe Next', status: 'Ready' }],
            }),
            createElement(Pagination, { page: 1, totalPages: 3 }),
            createElement(EmptyState, { title: 'Nothing queued', description: 'Create an item' }),
            createElement(Kbd, null, 'Ctrl+K'),
            createElement(CodeBlock, { language: 'tsx', code: 'import { Button } from "@moonframe/ui";' })
          )
        )
      )
    )
  );
  assert.ok(html.includes('Moonframe Next'));
  assert.ok(html.includes('Already taken'));
  assert.ok(html.includes('aria-invalid="true"'));
  assert.ok(html.includes('Ctrl+K'));
  assert.equal(typeof themeSubpath.ThemeProvider, 'function');
  assert.equal(typeof themeSubpath.ThemeScript, 'function');
  assert.equal(skinsSubpath.skinIds.length, 15);
});
