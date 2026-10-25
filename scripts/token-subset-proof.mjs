import assert from 'node:assert/strict';

// Fixture-only proof for the proposed Moonframe DTCG-inspired subset.
// This is intentionally not a full DTCG parser or a production generator.
const PROOF_VERSION = '0.1.0';
const fixture = {
  reference: {
    color: {
      blue: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.2, 0.4, 0.6] } },
    },
  },
  modes: {
    light: {
      color: {
        surface: { canvas: { $type: 'color', $value: '{color.blue}' } },
      },
    },
    dark: {
      color: {
        surface: { canvas: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.05, 0.1, 0.15] } } },
      },
    },
  },
  required: ['color.surface.canvas'],
};

function fail(message) {
  throw new Error(message);
}

function getPath(tree, path) {
  return path.split('.').reduce((value, segment) => value?.[segment], tree);
}

function validateExtensions(extensions, path) {
  if (!extensions || typeof extensions !== 'object' || Array.isArray(extensions) ||
      Object.keys(extensions).some((key) => key !== 'moonframe')) {
    fail(`only object-valued $extensions.moonframe is supported at ${path}`);
  }
}

function validateDescriptionAndDeprecated(node, path) {
  if (node.$description !== undefined && typeof node.$description !== 'string') fail(`$description must be a string at ${path}`);
  if (node.$deprecated !== undefined && typeof node.$deprecated !== 'boolean' && typeof node.$deprecated !== 'string') {
    fail(`$deprecated must be a boolean or string at ${path}`);
  }
  if (node.$extensions !== undefined) validateExtensions(node.$extensions, path);
}

function validateTokenShape(token, path) {
  const allowed = new Set(['$type', '$value', '$description', '$deprecated', '$extensions']);
  for (const key of Object.keys(token)) {
    if (!allowed.has(key)) fail(`unsupported token property at ${path}: ${key}`);
  }
  validateDescriptionAndDeprecated(token, path);
}

function flattenTokens(tree, prefix = '', result = new Map()) {
  if (!tree || typeof tree !== 'object' || Array.isArray(tree)) fail(`expected token group at ${prefix || '<root>'}`);
  if (Object.hasOwn(tree, '$type')) fail(`group-level $type inheritance is unsupported at ${prefix || '<root>'}`);
  validateDescriptionAndDeprecated(tree, prefix || '<root>');
  for (const key of Object.keys(tree)) {
    if (key.startsWith('$') && !['$description', '$deprecated', '$extensions'].includes(key)) {
      fail(`unsupported group property at ${prefix || '<root>'}: ${key}`);
    }
    if (!key.startsWith('$') && /[.{}]/.test(key)) fail(`invalid token/group name at ${prefix || '<root>'}: ${key}`);
  }
  for (const key of Object.keys(tree).sort()) {
    if (key.startsWith('$')) continue;
    const value = tree[key];
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value) && Object.hasOwn(value, '$value')) {
      validateTokenShape(value, path);
      result.set(path, value);
    }
    else if (value && typeof value === 'object' && !Array.isArray(value)) flattenTokens(value, path, result);
    else fail(`expected token or group at ${path}`);
  }
  return result;
}

function validateColor(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(`${label}: expected sRGB color object`);
  for (const key of Object.keys(value)) {
    if (!['colorSpace', 'components', 'alpha'].includes(key)) fail(`${label}: unsupported color field ${key}`);
  }
  if (value.colorSpace !== 'srgb') fail(`${label}: expected sRGB color object`);
  if (!Array.isArray(value.components) || value.components.length !== 3 || value.components.some((part) => !Number.isFinite(part) || part < 0 || part > 1)) {
    fail(`${label}: expected three sRGB components in [0, 1]`);
  }
  if (value.alpha !== undefined && (!Number.isFinite(value.alpha) || value.alpha < 0 || value.alpha > 1)) fail(`${label}: alpha must be in [0, 1]`);
}

function resolveToken(token, tokenMap, stack = []) {
  if (!token || typeof token !== 'object' || typeof token.$type !== 'string' || !Object.hasOwn(token, '$value')) fail('token must have $type and $value');
  if (stack.includes(token)) fail('alias cycle detected');
  const value = token.$value;
  if (typeof value === 'string' && /^\{[^{}]+\}$/.test(value)) {
    const targetPath = value.slice(1, -1);
    const target = tokenMap.get(targetPath);
    if (!target) fail(`unresolved alias: ${targetPath}`);
    if (target.$type !== token.$type) fail(`alias type mismatch: ${targetPath}`);
    return resolveToken(target, tokenMap, [...stack, token]);
  }
  if (typeof value === 'string' && (value.includes('{') || value.includes('}'))) fail('unsupported alias syntax');
  switch (token.$type) {
    case 'color': validateColor(value, 'color'); break;
    case 'dimension':
      if (!value || typeof value !== 'object' || Array.isArray(value) || Object.keys(value).some((key) => !['value', 'unit'].includes(key))) {
        fail('dimension supports only value and unit fields');
      }
      if (!value || !Number.isFinite(value.value) || !['px', 'rem'].includes(value.unit)) fail('dimension requires finite numeric value and px/rem unit');
      break;
    case 'duration':
      if (!value || typeof value !== 'object' || Array.isArray(value) || Object.keys(value).some((key) => !['value', 'unit'].includes(key))) {
        fail('duration supports only value and unit fields');
      }
      if (!value || !Number.isFinite(value.value) || value.value < 0 || value.unit !== 'ms') fail('duration requires finite non-negative value in ms');
      break;
    case 'number': if (typeof value !== 'number' || !Number.isFinite(value)) fail('number requires a finite numeric value'); break;
    default: fail(`unsupported type: ${token.$type}`);
  }
  return value;
}

function colorToCss(color) {
  const channels = color.components.map((part) => Math.round(part * 255));
  return color.alpha === undefined ? `rgb(${channels.join(' ')})` : `rgb(${channels.join(' ')} / ${color.alpha})`;
}

function resolveMode(modeSource) {
  const tokens = flattenTokens(modeSource);
  const references = flattenTokens(fixture.reference);
  const combined = new Map([...references, ...tokens]);
  const result = new Map();
  for (const path of fixture.required) {
    const token = tokens.get(path);
    if (!token) fail(`missing required token: ${path}`);
    result.set(path, resolveToken(token, combined));
  }
  for (const [path, token] of tokens) resolveToken(token, combined);
  return result;
}

function generateCss(modeSources) {
  const modes = Object.keys(modeSources).sort();
  const requiredModes = ['dark', 'light'];
  for (const mode of requiredModes) if (!Object.hasOwn(modeSources, mode)) fail(`missing mode: ${mode}`);
  const resolved = new Map(modes.map((mode) => [mode, resolveMode(modeSources[mode])]));
  const css = [];
  for (const mode of modes) {
    css.push(`[data-mode="${mode}"] {`);
    for (const path of fixture.required) {
      const value = resolved.get(mode).get(path);
      const property = path.replaceAll('.', '-');
      css.push(`  --mf-${property}: ${colorToCss(value)};`);
    }
    css.push('}');
  }
  css.push('@theme inline {');
  css.push('  --color-mf-canvas: var(--mf-color-surface-canvas);');
  css.push('}');
  return `${css.join('\n')}\n`;
}

function expectFailure(label, fn, pattern) {
  assert.throws(fn, pattern, label);
}

const validCss = generateCss(fixture.modes);
assert.match(validCss, /\[data-mode="light"\]/);
assert.match(validCss, /\[data-mode="dark"\]/);
assert.match(validCss, /--color-mf-canvas: var\(--mf-color-surface-canvas\)/);
assert.equal(generateCss(fixture.modes), validCss, 'generation must be byte-deterministic');
const aliasChain = new Map([
  ['reference.color', { $type: 'color', $value: { colorSpace: 'srgb', components: [0.2, 0.4, 0.6] } }],
  ['semantic.color', { $type: 'color', $value: '{reference.color}' }],
  ['role.color', { $type: 'color', $value: '{semantic.color}' }],
]);
assert.deepEqual(resolveToken(aliasChain.get('role.color'), aliasChain), aliasChain.get('reference.color').$value,
  'multi-hop whole-token aliases should resolve to the original typed value');
assert.equal(flattenTokens({
  $description: 'Fixture metadata',
  $deprecated: false,
  $extensions: { moonframe: { source: 'proof' } },
  color: { blue: {
    $type: 'color',
    $value: { colorSpace: 'srgb', components: [0.2, 0.4, 0.6] },
    $description: 'Fixture blue',
    $deprecated: 'Fixture deprecation note',
    $extensions: { moonframe: ['metadata'] },
  } },
}).size, 1, 'documented group/token metadata should pass structural validation');
for (const [type, value] of [
  ['dimension', { value: 1, unit: 'rem' }],
  ['duration', { value: 0, unit: 'ms' }],
  ['number', 0],
]) {
  assert.deepEqual(resolveToken({ $type: type, $value: value }, new Map()), value, `${type} valid fixture should resolve`);
}

expectFailure('missing required semantic name', () => {
  const previous = fixture.required;
  fixture.required = ['color.surface.missing'];
  try { resolveMode(fixture.modes.light); } finally { fixture.required = previous; }
}, /missing required token/);

expectFailure('invalid value/type', () => resolveToken({ $type: 'color', $value: '#336699' }, new Map()), /sRGB color object/);
expectFailure('unsupported sRGB color value field', () => resolveToken({
  $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3], hex: '#19334d' },
}, new Map()), /unsupported color field hex/);
expectFailure('unsupported dimension value field', () => resolveToken({
  $type: 'dimension', $value: { value: 1, unit: 'rem', fallback: '1rem' },
}, new Map()), /dimension supports only value and unit fields/);
expectFailure('unsupported duration value field', () => resolveToken({
  $type: 'duration', $value: { value: 1, unit: 'ms', css: '1ms' },
}, new Map()), /duration supports only value and unit fields/);
expectFailure('invalid type', () => resolveToken({ $type: 'paint', $value: 'blue' }, new Map()), /unsupported type/);
expectFailure('missing token type', () => resolveToken({ $value: 1 }, new Map()), /token must have \$type and \$value/);
expectFailure('missing token value', () => resolveToken({ $type: 'number' }, new Map()), /token must have \$type and \$value/);
expectFailure('unsupported group-level type inheritance', () => flattenTokens({
  $type: 'color', blue: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3] } },
}), /group-level \$type inheritance is unsupported/);
expectFailure('unsupported group extension', () => flattenTokens({
  $extends: 'other.tokens', color: { blue: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3] } } },
}), /unsupported group property.*\$extends/);
expectFailure('unsupported token reference property', () => flattenTokens({ color: {
  blue: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3] }, $ref: '#/tokens/blue' },
} }), /unsupported token property.*\$ref/);
expectFailure('malformed token group child', () => flattenTokens({ color: { blue: null } }), /expected token or group/);
expectFailure('invalid dotted token name', () => flattenTokens({ 'color.blue': {
  $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3] },
} }), /invalid token\/group name/);
expectFailure('invalid group description metadata', () => flattenTokens({ $description: 1, color: {} }), /\$description must be a string/);
expectFailure('invalid token deprecation metadata', () => flattenTokens({ color: {
  blue: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3] }, $deprecated: 1 },
} }), /\$deprecated must be a boolean or string/);
expectFailure('unsupported third-party extension metadata', () => flattenTokens({ color: {
  blue: { $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3] }, $extensions: { 'org.other': { note: true } } },
} }), /only object-valued \$extensions\.moonframe is supported/);
expectFailure('non-finite color channel', () => resolveToken({ $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, Number.NaN, 0.3] } }, new Map()), /three sRGB components/);
expectFailure('non-finite color alpha', () => resolveToken({ $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3], alpha: Number.POSITIVE_INFINITY } }, new Map()), /alpha must be/);
expectFailure('non-finite dimension', () => resolveToken({ $type: 'dimension', $value: { value: Number.NaN, unit: 'rem' } }, new Map()), /finite numeric value/);
expectFailure('non-finite duration', () => resolveToken({ $type: 'duration', $value: { value: Number.POSITIVE_INFINITY, unit: 'ms' } }, new Map()), /finite non-negative value/);
for (const type of ['fontFamily', 'fontWeight', 'cubicBezier', 'shadow']) {
  expectFailure(`explicitly unsupported type ${type}`, () => resolveToken({ $type: type, $value: [] }, new Map()), new RegExp(`unsupported type: ${type}`));
}

const cycle = new Map([
  ['a', { $type: 'color', $value: '{b}' }],
  ['b', { $type: 'color', $value: '{a}' }],
]);
expectFailure('alias cycle', () => resolveToken(cycle.get('a'), cycle), /alias cycle/);
const selfCycle = new Map([['self', { $type: 'color', $value: '{self}' }]]);
expectFailure('self alias cycle', () => resolveToken(selfCycle.get('self'), selfCycle), /alias cycle/);
const longCycle = new Map([
  ['a', { $type: 'color', $value: '{b}' }],
  ['b', { $type: 'color', $value: '{c}' }],
  ['c', { $type: 'color', $value: '{a}' }],
]);
expectFailure('three-token alias cycle', () => resolveToken(longCycle.get('a'), longCycle), /alias cycle/);
expectFailure('alias type mismatch', () => resolveToken({ $type: 'dimension', $value: '{color.blue}' }, new Map([
  ['color.blue', { $type: 'color', $value: { colorSpace: 'srgb', components: [0.1, 0.2, 0.3] } }],
])), /alias type mismatch/);
expectFailure('malformed alias syntax', () => resolveToken({ $type: 'color', $value: '{color.blue' }, new Map()), /unsupported alias syntax/);

expectFailure('unresolved reference', () => resolveToken({ $type: 'color', $value: '{missing.token}' }, new Map()), /unresolved alias/);
expectFailure('missing mode', () => generateCss({ light: fixture.modes.light }), /missing mode: dark/);

if (process.argv.includes('--emit-css')) {
  process.stdout.write(validCss);
} else {
  process.stdout.write(`PASS: bounded token subset proof v${PROOF_VERSION}; Node ${process.version}; deterministic CSS, strict supported-subset shape, finite typed values, alias-chain resolution, ${fixture.required.length} semantic role, 2 modes, and negative type/alias/coverage cases.\n`);
}
