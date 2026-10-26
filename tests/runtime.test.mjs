import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
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
  OTPInput,
  PasswordField,
  SearchInput,
  Slider,
  TagInput,
  SegmentedControl,
  FileDropzone,
  BarChart,
  Sparkline,
  Stepper,
  Timeline,
  AvatarGroup,
  DescriptionList,
  Callout,
  Banner,
  CommandPalette,
  PageHeader,
  MetricGrid,
  AuthCard,
  PricingCard,
  SettingsSection,
  ActivityFeed,
  SkinBrandMark,
  SkinArtwork,
  SFXProvider,
  useSFX,
} from '../src/index.js';
import * as themeSubpath from '../src/theme.js';
import * as skinsSubpath from '../src/skins.js';
import { generateDeterministicTokenArtifacts, verifyRuntimeCssCoverage } from '../scripts/generate-tokens.mjs';
import { auditAllSkinPairs } from '../scripts/audit-skin-pairs.mjs';
import { validateSkinCaptureProvenance } from '../scripts/skin-capture-provenance.mjs';

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
            createElement(CodeBlock, { language: 'tsx', code: 'import { Button } from "@moonwitness/moonframe";' })
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

test('all extended components and Level C reusable composite blocks server-render cleanly', () => {
  const html = renderToString(
    createElement(
      ThemeProvider,
      { defaultSkin: 'moonpunk', defaultMode: 'dark' },
      createElement(PageHeader, {
        eyebrow: 'Workspace',
        title: 'Control Center',
        description: 'Reusable composite blocks',
        badge: 'Live',
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Control Center', current: true }],
      }),
      createElement(MetricGrid, {
        items: [
          { label: 'MRR', value: '$48,200', delta: '+14.2%', trend: [12, 19, 25, 31, 48] },
        ],
      }),
      createElement(OTPInput, { length: 6, defaultValue: '482910' }),
      createElement(PasswordField, { defaultValue: 'Sup3rS3cret!', showStrength: true, 'aria-label': 'Password' }),
      createElement(SearchInput, { defaultValue: 'moonframe', shortcut: '⌘K' }),
      createElement(Slider, { label: 'Volume', defaultValue: 75, showValue: true }),
      createElement(TagInput, { defaultValue: ['nextjs', 'react19'] }),
      createElement(SegmentedControl, {
        items: [{ value: 'monthly', label: 'Monthly' }, { value: 'annual', label: 'Annual' }],
        defaultValue: 'annual',
      }),
      createElement(FileDropzone, { title: 'Upload SVG asset' }),
      createElement(BarChart, {
        label: 'Deployments per day',
        data: [{ label: 'Mon', value: 14 }, { label: 'Tue', value: 22 }],
      }),
      createElement(Sparkline, { data: [4, 8, 6, 15, 19] }),
      createElement(Stepper, {
        currentStep: 1,
        steps: [{ title: 'Account' }, { title: 'Workspace' }, { title: 'Launch' }],
      }),
      createElement(Timeline, {
        items: [{ title: 'Deployed v0.1.0', time: '2m ago', badge: 'Success' }],
      }),
      createElement(AvatarGroup, {
        max: 2,
        items: [{ fallback: 'AL' }, { fallback: 'BK' }, { fallback: 'CM' }],
      }),
      createElement(DescriptionList, {
        items: [{ term: 'Skin', details: 'Moonpunk' }],
      }),
      createElement(Callout, { title: 'System ready', variant: 'primary' }, 'All 15 skins loaded'),
      createElement(Banner, { title: 'Banner alias' }, 'Reusable banner'),
      createElement(CommandPalette, {
        items: [{ id: 'skins', label: 'Browse 15 Skins', group: 'Navigation', shortcut: 'G S' }],
      }),
      createElement(AuthCard, {
        eyebrow: 'Security',
        title: 'Sign in to Moonframe',
        description: 'Enter your credentials',
      }, createElement(Input, { 'aria-label': 'Email' })),
      createElement(PricingCard, {
        name: 'Studio',
        price: '$49',
        badge: 'Popular',
        featured: true,
        features: ['All 15 skins', '22 page templates', 'Next.js 16 App Router'],
      }),
      createElement(SettingsSection, {
        title: 'Appearance',
        description: 'Configure default skin and mode',
      }, createElement(SkinSelector, null)),
      createElement(ActivityFeed, {
        items: [{ title: 'Key rotated', time: 'Just now' }],
      })
    )
  );
  assert.ok(html.includes('Control Center'));
  assert.ok(html.includes('$48,200'));
  assert.match(html, /autocomplete="one-time-code"/i);
  assert.ok(html.includes('Sign in to Moonframe'));
  assert.ok(html.includes('All 15 skins'));
  assert.ok(html.includes('+1'));
});

test('deterministic token generator and runtime CSS variable bridge pass verification', () => {
  const tree = {
    reference: {
      color: {
        brand: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.2, 0.3, 0.7] } },
      },
    },
    modes: {
      light: { accent: { $type: 'color', $value: '{color.brand}' } },
      dark: { accent: { $type: 'color', $value: '{color.brand}' } },
    },
  };
  const first = generateDeterministicTokenArtifacts(tree);
  const second = generateDeterministicTokenArtifacts(tree);
  assert.equal(first.css, second.css);
  assert.equal(first.dts, second.dts);
  assert.ok(first.css.includes('--mf-accent: rgb(51 77 179);'));
  const coverage = verifyRuntimeCssCoverage();
  assert.equal(coverage.skinCount, 15);
  assert.equal(coverage.appearanceCount, 30);
});

test('M10 SkinBrandMark, SkinArtwork, and SFXProvider server-render cleanly and enforce opt-in consent', () => {
  for (const id of skinIds) {
    const markHtml = renderToString(createElement(SkinBrandMark, { skin: id, size: 32, decorative: false, label: `${id} mark` }));
    assert.ok(markHtml.includes(`data-skin-mark="${id}"`), `${id} brand mark renders`);
    assert.ok(markHtml.includes('viewBox="0 0 32 32"'), 'has viewBox');
  }

  const artworkHtml = renderToString(createElement(SkinArtwork, {
    skin: 'moonpunk',
    title: 'Moonpunk Canvas',
    caption: 'Cybernetic neon geometry',
  }));
  assert.ok(artworkHtml.includes('data-skin-artwork="moonpunk"'));
  assert.ok(artworkHtml.includes('Moonpunk Canvas'));
  assert.ok(artworkHtml.includes('Cybernetic neon geometry'));

  const sfxHtml = renderToString(createElement(SFXProvider, {
    defaultEnabled: true,
    defaultMuted: true,
  }, createElement(SFXConsentProbe)));
  assert.ok(sfxHtml.includes('data-consent="false"'), 'defaultEnabled does not grant consent');
});

function SFXConsentProbe() {
  const sfx = useSFX();
  return createElement('div', { 'data-consent': String(sfx.consentGranted) }, 'SFX ready');
}

test('Moonframe CLI lists catalog and scaffolds templates and multi-route starters', () => {
  const cliScript = path.resolve('scripts/moonframe-cli.mjs');
  const listOutput = execFileSync(process.execPath, [cliScript, 'list'], { encoding: 'utf8' });
  assert.ok(listOutput.includes('starter-admin-workspace'));
  assert.ok(listOutput.includes('template-sign-in-minimal'));
  assert.ok(listOutput.includes('Level E Starter Applications (8)'));

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mf-cli-test-'));
  try {
    const addOutput = execFileSync(process.execPath, [
      cliScript,
      'add',
      'starter-admin-workspace',
      '--target',
      tempDir,
      '--skin',
      'moonledger',
    ], { encoding: 'utf8' });
    assert.ok(addOutput.includes('Successfully scaffolded starter-admin-workspace'));

    const starterDir = path.join(tempDir, 'starter-admin-workspace');
    assert.ok(fs.existsSync(path.join(starterDir, 'layout.tsx')), 'layout.tsx exists');
    assert.ok(fs.existsSync(path.join(starterDir, 'dashboard-overview', 'page.tsx')), 'dashboard page exists');
    assert.ok(fs.existsSync(path.join(starterDir, 'resource-detail', 'page.tsx')), 'resource detail page exists');
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});

test('105 skin pair records and 6-pair pilot pass structural contract checks (no browser screenshots required)', () => {
  const audit = auditAllSkinPairs();
  assert.equal(audit.skinCount, 15);
  assert.equal(audit.pairCount, 105);
  assert.equal(audit.pilotSixCount, 6);
  assert.equal(audit.structuralPassed, true);
  assert.equal(audit.humanReviewStatus, 'pending-human-visual-review');
  assert.ok(audit.minDistinctDimensions >= 5, 'at least 5 of 8 contract-string dimensions must differ');
  // PNG evidence is checked after Playwright. Unit tests must pass in a fresh source checkout.
});

test('skin screenshot provenance rejects mismatched source or PNG digests', () => {
  const valid = {
    sourceCommit: 'a'.repeat(40),
    sourceFingerprint: 'b'.repeat(64),
    imageSha256: 'c'.repeat(64),
  };
  assert.equal(validateSkinCaptureProvenance(valid, 'b'.repeat(64), 'c'.repeat(64)), true);
  assert.equal(validateSkinCaptureProvenance(valid, 'd'.repeat(64), 'c'.repeat(64)), false);
  assert.equal(validateSkinCaptureProvenance(valid, 'b'.repeat(64), 'e'.repeat(64)), false);
  assert.equal(validateSkinCaptureProvenance({ ...valid, sourceCommit: 'invalid' }, 'b'.repeat(64), 'c'.repeat(64)), false);
});
