#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { skinIds as SKIN_IDS } from '../src/skins.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const REQUIRED_RUNTIME_CSS_VARS = Object.freeze([
  '--mf-bg',
  '--mf-surface',
  '--mf-surface-raised',
  '--mf-text',
  '--mf-muted',
  '--mf-border',
  '--mf-accent',
  '--mf-accent-text',
  '--mf-danger',
  '--mf-radius',
  '--mf-shadow',
  '--mf-font',
  '--mf-display',
  '--mf-space',
  '--mf-gap',
  '--mf-control-height',
  '--mf-duration',
]);

export function formatTokenValue(type, value) {
  switch (type) {
    case 'color': {
      const channels = value.components.map((c) => Math.round(c * 255));
      return value.alpha === undefined
        ? `rgb(${channels.join(' ')})`
        : `rgb(${channels.join(' ')} / ${value.alpha})`;
    }
    case 'dimension':
    case 'duration':
      return `${value.value}${value.unit}`;
    case 'number':
      return String(value);
    default:
      throw new Error(`Unsupported token type: ${type}`);
  }
}

export function generateDeterministicTokenArtifacts(sourceTree) {
  const modes = ['light', 'dark'];
  for (const mode of modes) {
    if (!sourceTree?.modes?.[mode]) {
      throw new Error(`Missing required mode "${mode}" in token source`);
    }
  }

  const flatten = (node, prefix = '', out = new Map()) => {
    for (const key of Object.keys(node).sort()) {
      if (key.startsWith('$')) continue;
      const child = node[key];
      const nextPath = prefix ? `${prefix}.${key}` : key;
      if (child && typeof child === 'object' && !Array.isArray(child) && Object.hasOwn(child, '$value')) {
        out.set(nextPath, child);
      } else if (child && typeof child === 'object' && !Array.isArray(child)) {
        flatten(child, nextPath, out);
      }
    }
    return out;
  };

  const refs = flatten(sourceTree.reference || {});
  const cssLines = ['/* Deterministic Moonframe token slice (auto-generated) */'];
  const tokenKeys = new Set();

  for (const mode of modes) {
    const modeTokens = flatten(sourceTree.modes[mode]);
    const combined = new Map([...refs, ...modeTokens]);
    const resolve = (token, stack = []) => {
      if (stack.includes(token)) throw new Error('Token alias cycle detected');
      if (typeof token.$value === 'string' && /^\{[^{}]+\}$/.test(token.$value)) {
        const targetKey = token.$value.slice(1, -1);
        const target = combined.get(targetKey);
        if (!target) throw new Error(`Unresolved token alias: ${targetKey}`);
        if (target.$type !== token.$type) throw new Error(`Token alias type mismatch: ${targetKey}`);
        return resolve(target, [...stack, token]);
      }
      return formatTokenValue(token.$type, token.$value);
    };

    cssLines.push(`[data-mode="${mode}"] {`);
    for (const [tokenPath, token] of modeTokens) {
      const cssVar = `--mf-${tokenPath.replaceAll('.', '-')}`;
      tokenKeys.add(cssVar);
      cssLines.push(`  ${cssVar}: ${resolve(token)};`);
    }
    cssLines.push('}');
  }

  const sortedVars = [...tokenKeys].sort();
  const dtsLines = [
    '// Deterministic Moonframe token declarations (auto-generated)',
    'export type MoonframeCssVarName =',
    ...sortedVars.map((v, i) => `  | '${v}'${i === sortedVars.length - 1 ? ';' : ''}`),
    'export declare const MOONFRAME_CSS_VARS: readonly MoonframeCssVarName[];',
    '',
  ];

  return {
    css: `${cssLines.join('\n')}\n`,
    dts: dtsLines.join('\n'),
    variables: sortedVars,
  };
}

export function verifyRuntimeCssCoverage() {
  const stylesCss = fs.readFileSync(path.join(root, 'src/styles.css'), 'utf8');
  const tailwindCss = fs.readFileSync(path.join(root, 'src/tailwind.css'), 'utf8');

  for (const cssVar of REQUIRED_RUNTIME_CSS_VARS) {
    assert(stylesCss.includes(`${cssVar}:`), `src/styles.css is missing declaration for ${cssVar}`);
    assert(tailwindCss.includes(`var(${cssVar})`), `src/tailwind.css is missing @theme bridge for ${cssVar}`);
  }

  for (const skinId of SKIN_IDS) {
    assert(
      stylesCss.includes(`[data-skin="${skinId}"]`),
      `src/styles.css is missing recipe for skin "${skinId}"`,
    );
    if (skinId !== 'classic') {
      assert(
        stylesCss.includes(`[data-skin="${skinId}"][data-mode="dark"]`),
        `src/styles.css is missing dark recipe for skin "${skinId}"`,
      );
    }
  }

  return {
    skinCount: SKIN_IDS.length,
    appearanceCount: SKIN_IDS.length * 2,
    variableCount: REQUIRED_RUNTIME_CSS_VARS.length,
  };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const sampleTree = {
    reference: {
      color: {
        ink: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.06, 0.09, 0.16] } },
        paper: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.98, 0.98, 0.99] } },
      },
      radius: {
        md: { $type: 'dimension', $value: { value: 8, unit: 'px' } },
      },
    },
    modes: {
      light: {
        bg: { $type: 'color', $value: '{color.paper}' },
        text: { $type: 'color', $value: '{color.ink}' },
        radius: { $type: 'dimension', $value: '{radius.md}' },
      },
      dark: {
        bg: { $type: 'color', $value: '{color.ink}' },
        text: { $type: 'color', $value: '{color.paper}' },
        radius: { $type: 'dimension', $value: '{radius.md}' },
      },
    },
  };

  const runA = generateDeterministicTokenArtifacts(sampleTree);
  const runB = generateDeterministicTokenArtifacts(sampleTree);
  assert.equal(runA.css, runB.css, 'CSS emission must be byte-identical across runs');
  assert.equal(runA.dts, runB.dts, 'TypeScript declaration emission must be byte-identical across runs');
  const coverage = verifyRuntimeCssCoverage();
  console.log(
    `PASS: deterministic token generator & runtime CSS bridge verified (${coverage.skinCount} skins, ${coverage.appearanceCount} appearances, ${coverage.variableCount} bridged semantic variables).`,
  );
}
