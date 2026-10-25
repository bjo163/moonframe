'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Button,
  Badge,
  SkinSelector,
  ModeSelector,
  CommandPalette,
  SkinBrandMark,
  useTheme,
  type SkinId,
} from '@moonwitness/moonframe';
import { SKIN_CATALOG, COMPONENT_CATALOG, TEMPLATE_CATALOG, STARTER_CATALOG } from '../../lib/catalog';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();

  const commandItems = [
    ...SKIN_CATALOG.map(s => ({
      id: `skin-${s.id}`,
      label: `Activate Skin: ${s.name}`,
      group: '15 Skins',
      shortcut: s.id,
      keywords: [s.territory, s.description],
      onSelect: () => theme.setSkin(s.id as SkinId),
    })),
    ...TEMPLATE_CATALOG.map(t => ({
      id: `tpl-${t.id}`,
      label: `Template: ${t.title}`,
      group: `Templates · ${t.category}`,
      shortcut: t.recommendedSkin,
      keywords: [t.id, t.summary],
      onSelect: () => router.push(`/templates/${t.id}`),
    })),
    ...STARTER_CATALOG.map(s => ({
      id: `starter-${s.id}`,
      label: `Starter: ${s.title}`,
      group: 'Level E Starters',
      shortcut: s.recommendedSkin,
      keywords: [s.id, s.purpose],
      onSelect: () => router.push(`/starters/${s.id}`),
    })),
    ...COMPONENT_CATALOG.map(c => ({
      id: `comp-${c.slug}`,
      label: `Component: ${c.name}`,
      group: `Components · ${c.category}`,
      keywords: c.exports,
      onSelect: () => router.push(`/components/${c.slug}`),
    })),
  ];

  const navLinks = [
    { href: '/', label: 'Showcase' },
    { href: '/skins', label: '15 Skins' },
    { href: '/components', label: 'Components' },
    { href: '/templates', label: 'Templates' },
    { href: '/starters', label: 'Starters' },
    { href: '/docs', label: 'Docs' },
    { href: '/lab', label: 'Skin Lab' },
  ];

  return (
    <div className="mf-site-wrapper">
      <header className="mf-site-header">
        <div className="mf-site-header-inner">
          <div className="mf-site-brand-row">
            <Link href="/" className="mf-site-logo">
              <SkinBrandMark size={26} style={{ marginRight: '0.4rem' }} />
              <span className="mf-site-logo-text">
                moonframe
                <small>UI &amp; TEMPLATE SYSTEM</small>
              </span>
            </Link>
            <Badge variant="primary">v0.1 · pnpm</Badge>
          </div>

          <nav className="mf-site-nav" aria-label="Primary site navigation">
            {navLinks.map(item => {
              const isActive = item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="mf-site-nav-link"
                  data-active={isActive ? 'true' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mf-site-controls">
            <CommandPalette
              enableHotkey
              title="Moonframe Quick Launcher"
              placeholder="Jump to any skin, component, or template…"
              items={commandItems}
              trigger={
                <Button variant="secondary" size="sm" aria-label="Open command launcher">
                  Search ⌘K
                </Button>
              }
            />
            <SkinSelector label="Global skin" className="mf-site-skin-select" />
            <ModeSelector label="Global appearance" className="mf-site-mode-select" />
          </div>
        </div>
      </header>

      <main className="mf-site-main" id="site-main">
        {children}
      </main>

      <footer className="mf-site-footer">
        <div className="mf-site-footer-inner">
          <div className="mf-site-footer-brand">
            <strong>moonframe</strong>
            <p>
              One React 19 &amp; Next.js 16 component architecture with 15 unmistakable Light &amp; Dark visual skins, 66+ reusable exports, and 22 production templates.
            </p>
          </div>
          <div className="mf-site-footer-links">
            <Link href="/skins">15 Skins</Link>
            <Link href="/components">66+ Components</Link>
            <Link href="/templates">22 Templates</Link>
            <Link href="/docs">Next.js &amp; pnpm Docs</Link>
            <Link href="/lab">Interactive Skin Lab</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
