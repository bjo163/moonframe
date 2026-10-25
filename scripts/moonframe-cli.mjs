#!/usr/bin/env node
/**
 * Moonframe UI — CLI Scaffolder & Registry Installer
 * Zero runtime dependencies (Node.js built-ins only).
 *
 * Usage:
 *   pnpm run cli list
 *   pnpm run cli info <id>
 *   pnpm run cli add <id> [--target <path>] [--skin <skinId>]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const starterManifestPath = path.join(root, 'contracts/moonframe-starter-manifest-v0.1.json');
const pageManifestPath = path.join(root, 'contracts/moonframe-page-template-manifest-v0.1.json');
const catalogPath = path.join(root, 'apps/moonframe/lib/catalog.ts');

function loadJson(filepath) {
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}

function parseArgs() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  const id = args[1] && !args[1].startsWith('--') ? args[1] : null;

  const flags = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--target' && args[i + 1]) {
      flags.target = args[i + 1];
      i++;
    } else if (args[i] === '--skin' && args[i + 1]) {
      flags.skin = args[i + 1];
      i++;
    }
  }

  return { command, id, flags };
}

function getTemplateCode(templateId) {
  if (fs.existsSync(catalogPath)) {
    const catalogSource = fs.readFileSync(catalogPath, 'utf8');
    const idIndex = catalogSource.indexOf(`id: '${templateId}'`);
    if (idIndex !== -1) {
      const codeStart = catalogSource.indexOf('code: `', idIndex);
      if (codeStart !== -1) {
        const codeEnd = catalogSource.indexOf('`,\n', codeStart);
        if (codeEnd !== -1) {
          return catalogSource.slice(codeStart + 7, codeEnd);
        }
      }
    }
  }

  // Fallback clean template scaffold
  const cleanName = templateId.replace(/^template-/, '').split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  return `'use client';

import React from 'react';
import { PageHeader, Card, CardContent, Button } from '@moonframe/ui';

export default function ${cleanName}Page() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem', padding: '1.5rem' }}>
      <PageHeader
        eyebrow="Moonframe Scaffold"
        title="${cleanName}"
        description="Scaffolded via Moonframe CLI. Modify components and bind your data sources."
        actions={<Button size="sm">Primary Action</Button>}
      />
      <Card>
        <CardContent style={{ padding: '1.5rem' }}>
          <p>Ready to customize with @moonframe/ui components.</p>
        </CardContent>
      </Card>
    </div>
  );
}
`;
}

async function main() {
  const { command, id, flags } = parseArgs();

  const starterData = loadJson(starterManifestPath);
  const pageData = loadJson(pageManifestPath);

  const starters = starterData.starters || [];
  const templates = pageData.templates || [];

  if (command === 'list') {
    console.log('\n🌙 Moonframe UI — CLI Registry Catalog\n');
    console.log(`📦 Level E Starter Applications (${starters.length}):`);
    starters.forEach(s => {
      console.log(`  - ${s.id.padEnd(30)} ${s.purpose} (${s.pageRefs.length} routes)`);
    });

    console.log(`\n📄 Page Templates (${templates.length}):`);
    templates.forEach(t => {
      console.log(`  - ${t.id.padEnd(36)} [${t.category}] ${t.purpose}`);
    });

    console.log('\nTo add a template or starter:');
    console.log('  pnpm run cli add <id> [--target <dir>] [--skin <skinId>]\n');
    return;
  }

  if (command === 'info') {
    if (!id) {
      console.error('Error: specify an id (e.g. pnpm run cli info starter-admin-workspace)');
      process.exit(1);
    }

    const starter = starters.find(s => s.id === id);
    if (starter) {
      console.log(`\n📦 Starter: ${starter.id}`);
      console.log(`   Level: ${starter.level} (${starter.priority})`);
      console.log(`   Purpose: ${starter.purpose}`);
      console.log(`   Connected Routes (${starter.pageRefs.length}):`);
      starter.pageRefs.forEach(p => console.log(`     • ${p}`));
      console.log(`   Integration Seams: ${starter.integrationSeams.join(', ')}`);
      console.log(`\n   Add command: pnpm run cli add ${starter.id}\n`);
      return;
    }

    const template = templates.find(t => t.id === id);
    if (template) {
      console.log(`\n📄 Template: ${template.id}`);
      console.log(`   Category: ${template.category}`);
      console.log(`   Purpose: ${template.purpose}`);
      console.log(`   Priority: ${template.priority} (${template.releaseTier})`);
      console.log(`   Blocks: ${(template.blockRefs || []).join(', ')}`);
      console.log(`\n   Add command: pnpm run cli add ${template.id}\n`);
      return;
    }

    console.error(`Error: item "${id}" not found in starters or templates.`);
    process.exit(1);
  }

  if (command === 'add') {
    if (!id) {
      console.error('Error: specify an item id to add (e.g. pnpm run cli add starter-admin-workspace)');
      process.exit(1);
    }

    const targetDir = path.resolve(process.cwd(), flags.target || 'app');
    const skin = flags.skin || 'classic';

    const starter = starters.find(s => s.id === id);
    if (starter) {
      const starterFolder = path.join(targetDir, starter.id);
      fs.mkdirSync(starterFolder, { recursive: true });

      // Generate Starter layout.tsx
      const layoutContent = `import type { ReactNode } from 'react';
import '@moonframe/ui/styles.css';
import { ThemeProvider, ThemeScript, ToastProvider } from '@moonframe/ui';

export default function ${starter.id.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('')}Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider defaultSkin="${skin}" defaultMode="system" syncDocumentElement>
      <ThemeScript defaultSkin="${skin}" defaultMode="system" />
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  );
}
`;
      fs.writeFileSync(path.join(starterFolder, 'layout.tsx'), layoutContent, 'utf8');

      // Generate each connected page
      for (const pageRef of starter.pageRefs) {
        const routeName = pageRef.replace(/^template-/, '');
        const routeFolder = path.join(starterFolder, routeName);
        fs.mkdirSync(routeFolder, { recursive: true });
        const pageCode = getTemplateCode(pageRef);
        fs.writeFileSync(path.join(routeFolder, 'page.tsx'), pageCode, 'utf8');
      }

      console.log(`\n✔ Successfully scaffolded ${starter.id} with ${starter.pageRefs.length} routes in ${starterFolder}`);
      console.log(`  - Layout: ${path.join(starterFolder, 'layout.tsx')}`);
      starter.pageRefs.forEach(p => console.log(`  - Route: ${path.join(starterFolder, p.replace(/^template-/, ''), 'page.tsx')}`));
      console.log('');
      return;
    }

    const template = templates.find(t => t.id === id);
    if (template) {
      const routeName = template.id.replace(/^template-/, '');
      const templateFolder = path.join(targetDir, routeName);
      fs.mkdirSync(templateFolder, { recursive: true });
      const pageCode = getTemplateCode(template.id);
      const filePath = path.join(templateFolder, 'page.tsx');
      fs.writeFileSync(filePath, pageCode, 'utf8');

      console.log(`\n✔ Successfully scaffolded ${template.id} at ${filePath}\n`);
      return;
    }

    console.error(`Error: item "${id}" not found.`);
    process.exit(1);
  }

  console.log(`
Moonframe UI CLI Scaffolder
Commands:
  pnpm run cli list                                List all available templates & starters
  pnpm run cli info <id>                           Show details of a template or starter
  pnpm run cli add <id> [--target <dir>] [--skin]  Scaffold template or starter into project
`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
