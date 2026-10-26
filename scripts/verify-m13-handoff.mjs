#!/usr/bin/env node
/**
 * M13 cross-contract handoff integrity, no network, no rewriting source.
 * This is STRUCTURAL validation; it never approves assets, accessibility, or screenshots.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const warnings = [];
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const readText = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const check = (test, why) => { if (!test) failures.push(why); };
const unique = (a) => new Set(a).size === a.length;
const equalIds = (a, b) => unique(a) && unique(b) && a.length === b.length && a.every((id) => b.includes(id));

const freeze = read('contracts/moonframe-m13-plan-freeze-v0.1.json');
check(freeze.contractId === 'MF-M13-PLAN-FREEZE-001' &&
  /^[0-9a-f]{40}$/.test(freeze.baselineCommit) &&
  freeze.taskBaseline.total === 488 &&
  freeze.taskBaseline.visual === 460 &&
  freeze.taskBaseline.preflight === 28, 'Missing or inconsistent M13 freeze snapshot');
for (const item of freeze.files || []) {
  check(fs.existsSync(path.join(root, item.path)), 'Freeze anchor file no longer exists: ' + item.path);
  check(/^[0-9a-f]{40}$/.test(item.gitBlobSha1), 'Invalid frozen Git blob ID for '+item.path);
}
check(fs.existsSync(path.join(root, 'docs/governance/M13_PLAN_FREEZE_2026-10-26.md')) &&
  fs.existsSync(path.join(root, 'docs/handoff/CODEX_M13_AUTONOMOUS_MASTER_PROMPT.md')) &&
  fs.existsSync(path.join(root, 'AGENTS.md')), 'Missing frozen handoff/agent instruction file');
const gate = read('contracts/moonframe-m13-readiness-gates-v0.1.json');
const theme = read('contracts/moonframe-theme-contract-v1.3.json');
const grammar = read('contracts/moonframe-skin-grammar-contract-v1.0.json');
const specs = read('contracts/moonframe-skin-specifications-v1.0.json');
const briefs = read('contracts/moonframe-skin-asset-briefs-v0.1.json');
const assets = read('contracts/moonframe-asset-manifest-v0.1.json');
const visual = read('contracts/moonframe-visual-baseline-matrix-v0.1.json');
const assetQA = read('contracts/moonframe-asset-qa-coverage-v0.1.json');
const motionQA = read('contracts/moonframe-motion-qa-coverage-v0.1.json');
const motion = read('contracts/moonframe-motion-recipes-v0.1.json');
const interactions = read('contracts/moonframe-motion-interactions-v0.1.json');
const tokens = read('contracts/moonframe-token-source-plan-v0.1.json');
const components = read('contracts/moonframe-component-manifest-v0.1.json');
const pages = read('contracts/moonframe-page-template-manifest-v0.1.json');
const starters = read('contracts/moonframe-starter-manifest-v0.1.json');
const sfx = read('contracts/moonframe-sfx-contract-v0.1.json');
const reference = read('contracts/moonframe-creative-reference-contract-v0.1.json');
const consumer = read('contracts/moonframe-consumer-brand-overlay-contract-v0.1.json');
const pkg = read('package.json');

const skinIds = theme.skins.map((x) => x.id);
check(skinIds.length === 15 && unique(skinIds), 'Canonical skin set not exactly 15 distinct IDs');
for (const [name, records, field] of [
  ['grammar', grammar.skins, 'id'],
  ['specifications', specs.skins, 'id'],
  ['asset briefs', briefs.briefs, 'skinId'],
  ['asset manifest', assets.plannedPerSkin, 'skinId'],
]) check(equalIds(skinIds, records.map((x) => x[field])), name + ' skin IDs drift');
check(grammar.pairwiseReviewMatrix.length === 105, '105 pair records required');
check(tokens.requiredTokenNames.length === 78 && tokens.coverageSlots.length === 30, '78 token names and 30 baseline slots required');
check(visual.cells.length === 270 && assetQA.coverage.length === 120 && motionQA.cells.length === 180, 'Visual/asset/motion coverage counts drift');
check(motion.recipes.length === 25 && interactions.patterns.length === 18, 'Motion recipe/interaction counts drift');
check(components.components.length === 151, 'Component proposal records must remain 151 until catalog versioning');
check(pages.templates.length === 72 && starters.starters.length === 8, 'Template/starter specification counts drift');
check(tokens.status === 'source-values-not-created', 'Do not claim approved canonical token source from interim CSS');
check(reference.photos.length === 4 && unique(reference.photos.map((x) => x.id)), 'Exactly four identified user reference photos required');
for (const x of reference.photos) {
  check(/^[0-9a-f]{64}$/.test(x.sha256), 'Missing real SHA-256 for reference ' + x.id);
  check(x.referenceStatus === 'source-uploaded-in-chat-not-versioned-in-repository', 'Reference must remain unversioned until original bytes imported: ' + x.id);
}
check(consumer.notNewSkin && consumer.notNewAppearance && consumer.status === 'contract-approved-no-runtime-api' && consumer.apiStatus === 'not-designed-not-exported', 'Brand overlay contract must remain distinct from shipped runtime API');
check(gate.gates.length >= 18 && unique(gate.gates.map((x) => x.id)), 'M13 evidence gates missing/duplicated');
check(gate.decision.localAgent === 'CONDITIONAL-GO' && gate.decision.publicNpmPublish === 'NO-GO', 'Handoff versus public release gates must remain distinct');

const sfxIds = sfx.events.map((x) => x.id);
const source = readText('src/components.js');
const profileBody = source.match(/const SFX_EVENT_PROFILES = \{([\s\S]*?)\};/)?.[1] || '';
const runtimeSfxIds = [...profileBody.matchAll(/^\s*(?:'([^']+)'|([a-z][\w-]*)):\s*\{\s*freq:/gm)].map((x) => x[1] || x[2]);
check(equalIds(sfxIds, runtimeSfxIds) && sfxIds.length === 6, 'SFX runtime six event IDs differ from contract');
const aliases = source.match(/const SFX_ALIASES = \{([\s\S]*?)\};/)?.[1] || '';
const actualAliases = Object.fromEntries([...aliases.matchAll(/'([^']+)':\s*'([^']+)'/g)].map((x) => [x[1], x[2]]));
check(JSON.stringify(Object.entries(actualAliases).sort()) === JSON.stringify(Object.entries(sfx.eventAliases.candidates).sort()), 'SFX alias mapping differs from contract');
check(sfx.defaultEnabled === false && sfx.requiresExplicitConsent === true && sfx.autoplayOnLoad === false && sfx.producedAssets.length === 0, 'SFX consent/default/binary-assets contract drift');
if (source.includes('useState(Boolean(defaultEnabled))')) warnings.push('SFX defaultEnabled can grant synthetic consent: harden before optional audio release');
if (source.includes('return { played: true, eventId: canonicalId }')) warnings.push('SFX play() may claim success without confirmed playback; harden API');
if (!fs.existsSync(path.join(root, 'LICENSE'))) warnings.push('Root package declares MIT but no standalone LICENSE exists; public redistribution requires explicit maintainer/legal confirmation');
if (pkg.private !== false || pkg.name !== '@moonwitness/moonframe') warnings.push('Current package metadata differs from audited 2026-10-26 snapshot; reconcile M13 document separately');
if (pkg.license !== 'MIT') warnings.push('License metadata changed since audit; verify actual distribution rights');

const backlogs = [
  readText('docs/backlog/visual-fidelity-subatomic-tasks.md'),
  readText('docs/backlog/reference-mockups-subatomic-tasks.md'),
];
const taskPattern = /^- \[[ x]\] \*\*(MF-VF-\d{3}) — [^\n]*\*\* · \*\*P[0-3]\*\* · \x60(?:planned|in-progress|implemented|captured|human-reviewed|accepted|blocked|blocked-external-approval|rejected)\x60 · \*\*(?:dependency|dep):\*\* \x60([^\x60]+)\x60/gm;
const taskRows = backlogs.flatMap((body) => [...body.matchAll(taskPattern)]);
const taskIds = taskRows.map((row) => row[1]);
check(taskRows.length === 460 && unique(taskIds), 'Expected 460 unique planned MF-VF tasks from both backlogs');
const deps = Object.fromEntries(taskRows.map((row) => [row[1], [...row[2].matchAll(/MF-VF-\d{3}/g)].map((m) => m[0])]));
for (const [id, next] of Object.entries(deps)) {
  for (const x of next) check(Object.hasOwn(deps, x) && x !== id, 'Task missing/self dependency: ' + id + ' => ' + x);
}
const seen = new Map();
function visit(id) {
  if (seen.get(id) === 'active') { failures.push('Task dependency cycle at ' + id); return; }
  if (seen.get(id) === 'done') return;
  seen.set(id, 'active');
  for (const x of deps[id] || []) if (Object.hasOwn(deps, x)) visit(x);
  seen.set(id, 'done');
}
for (const id of Object.keys(deps)) visit(id);

const preflightSource = readText('docs/backlog/m13-preflight-remediation-tasks.md');
const preflightPattern = /^- \[[ x]\] \*\*(MF-PF-\d{3}) — [^\n]*\*\* · \*\*P[012]\*\* · \x60(?:planned|in-progress|implemented|captured|human-reviewed|accepted|blocked|blocked-external-approval|rejected)\x60 · \*\*deps:\*\* \x60([^\x60]+)\x60/gm;
const preflightRows = [...preflightSource.matchAll(preflightPattern)];
const pfIds = preflightRows.map((x) => x[1]);
check(preflightRows.length === 28 && unique(pfIds), 'Expected 28 unique MF-PF preflight tasks');
const pfEdges = Object.fromEntries(preflightRows.map((r) => [r[1], [...r[2].matchAll(/MF-PF-\d{3}/g)].map((x) => x[0])]));
for (const [id, d] of Object.entries(pfEdges)) for (const x of d) check(Object.hasOwn(pfEdges, x) && x !== id, 'Preflight task dependency missing/self-loop: ' + id + ' -> ' + x);
const pfColors = new Map();
function visitPreflight(id) {
  if (pfColors.get(id) === 1) { failures.push('Preflight DAG cycle at ' + id); return; }
  if (pfColors.get(id) === 2) return;
  pfColors.set(id, 1);
  for (const child of pfEdges[id] || []) if (Object.hasOwn(pfEdges, child)) visitPreflight(child);
  pfColors.set(id, 2);
}
for (const id of pfIds) visitPreflight(id);
const auditSource = readText('scripts/audit-skin-pairs.mjs');
check(!auditSource.includes('OWNER-APPROVED'), 'Automated pair reporter must never manufacture owner approval');
check(auditSource.includes('humanReviewStatus:'), 'Structural audit must distinguish human review');
const unitSource = readText('tests/runtime.test.mjs');
check(!unitSource.includes('assert.equal(audit.missingScreenshots.length, 0)'), 'Unit tests cannot depend on later browser screenshot artifacts');

for (const issue of failures) console.error('FAIL: ' + issue);
for (const warning of warnings) console.warn('RELEASE WARNING: ' + warning);
if (failures.length) process.exit(1);
console.log('PASS: M13 handoff structural integrity: 15 skins, 30 modes, 105 pairs, 78 token names, 6 SFX events, 460 visual tasks plus 28 nonvisual preflight tasks; acyclic.');
console.log('CONDITIONAL-GO: local microtasks may proceed; human visual, artwork, SFX hardening, token values and public release remain gated.');
