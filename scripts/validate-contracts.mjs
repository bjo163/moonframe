#!/usr/bin/env node
// Spec-only Moonframe contract validator. Node built-ins, no npm install.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const fail = (condition, message) => { if (!condition) errors.push(message); };
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const uniq = (a) => new Set(a).size === a.length;
const sameSet = (a, b) => uniq(a) && uniq(b) && a.length === b.length && a.every(v => b.includes(v));
const isString = s => typeof s === 'string' && s.trim().length > 0;
const pairKey = (a,b) => [a,b].sort().join('::');
const theme = read('contracts/moonframe-theme-contract-v1.3.json');
const grammar = read('contracts/moonframe-skin-grammar-contract-v1.0.json');
const detail = read('contracts/moonframe-skin-specifications-v1.0.json');
const dict = read('contracts/moonframe-token-dictionary-v0.1.json');
const source = read('contracts/moonframe-token-source-plan-v0.1.json');
const components = read('contracts/moonframe-component-manifest-v0.1.json');
const blocks = read('contracts/moonframe-block-manifest-v0.1.json');
const assets = read('contracts/moonframe-asset-manifest-v0.1.json');
const sfx = read('contracts/moonframe-sfx-contract-v0.1.json');
const ids = theme.skins.map(s=>s.id);
function validatePairMatrix(pairs, skinIds) {
  const failures = [];
  const keys = pairs.map(p => pairKey(p.a,p.b));
  if (new Set(keys).size !== pairs.length) failures.push('Duplicate unordered skin pair');
  if (pairs.length !== skinIds.length * (skinIds.length-1)/2) failures.push('Pair count is wrong');
  for (let i=0;i<skinIds.length;i++) for (let j=i+1;j<skinIds.length;j++)
    if (!keys.includes(pairKey(skinIds[i],skinIds[j]))) failures.push('Missing pair: ' + skinIds[i] + '/' + skinIds[j]);
  for (const p of pairs) {
    if (!skinIds.includes(p.a) || !skinIds.includes(p.b) || p.a===p.b) failures.push('Invalid pair');
    if (!grammar.validStatuses.includes(p.status)) failures.push('Invalid pair status: '+p.status);
    if (!Array.isArray(p.reviewDimensions) || !Array.isArray(p.evidence)) failures.push('Invalid pair evidence structure');
    if (!('reviewer' in p) || !('reviewedAt' in p) || !isString(p.nextAction)) failures.push('Missing review tracking fields');
    if (['pass','exception-approved'].includes(p.status) &&
        (!isString(p.reviewer) || !isString(p.reviewedAt) || p.evidence.length===0 ||
         !Array.isArray(p.grayscaleEvidence) || !p.grayscaleEvidence.length ||
         !Array.isArray(p.decorationOffEvidence) || !p.decorationOffEvidence.length ||
         p.reviewDimensions.length<8)) failures.push('Approved pair without screenshot/reviewer/eight-dimension evidence: '+p.a+'/'+p.b);
  }
  return failures;
}
fail(ids.length === 15 && uniq(ids) && ids.every(isString), 'Theme must own 15 unique nonempty IDs');
fail(theme.counts.skinCount===15 && theme.counts.baselineAppearances===30 && theme.counts.pairwiseSkinComparisons===105, 'Theme declared counts drifted');
fail(theme.appearanceModes.includes('light') && theme.appearanceModes.includes('dark') && theme.appearanceModes.includes('system'), 'Appearance preference modes missing');
fail(sameSet(theme.preferenceResolution?.effectiveAppearance || [], ['light','dark']) && theme.tokens?.canonicalSource===null, 'Effective mode/canonical-value-source distinction missing');
fail(sameSet(ids,theme.independentAxes.skin), 'Theme axis IDs mismatch');
fail(sameSet(ids,grammar.skins.map(s=>s.id)), 'Grammar skin IDs mismatch');
fail(sameSet(ids,detail.skins.map(s=>s.id)), 'Detail skin IDs mismatch');
fail(sameSet(ids,dict.requiredCoverage.skins), 'Token dictionary skin IDs mismatch');
fail(grammar.count===15 && grammar.dimensions.length===8 && grammar.pairwiseReviewMatrix.length===105,'Grammar incomplete');
for (const e of validatePairMatrix(grammar.pairwiseReviewMatrix,ids)) errors.push(e);
for (const s of detail.skins) {
  for (const k of detail.requiredFields) fail(k in s, s.id+' missing skin spec field '+k);
  for (const k of ['button','input','select','card','dialog','table','notification'])
    fail(isString(s.componentRecipes?.[k]), s.id+' missing visual recipe '+k);
  fail(s.appearance?.light?.tokenMap && s.appearance?.dark?.tokenMap, s.id+' missing appearance coverage declaration');
  fail(Array.isArray(s.accessibilityRisks) && s.accessibilityRisks.length>0, s.id+' missing accessibility risks');
}
const tokenNames=dict.requiredSemanticTokenExamples;
fail(tokenNames.length===source.expectedRequiredTokenNameCount && sameSet(tokenNames,source.requiredTokenNames),'Required token vocabulary diverged');
const slots=source.coverageSlots;
fail(slots.length===30 && uniq(slots.map(s=>s.skinId+'::'+s.mode)), 'Expected 30 distinct appearance coverage slots');
for (const id of ids) for (const mode of ['light','dark'])
  fail(slots.some(x=>x.skinId===id && x.mode===mode), 'Missing token coverage slot '+id+'/'+mode);
fail(source.status==='source-values-not-created' && source.coverageSlots.every(s=>s.status==='pending-values-and-contrast-review' && s.valuesSource===null),
  'Do not claim complete production token values in a planning contract');
const cmp=components.components, b=blocks.blocks;
fail(cmp.length>=40 && uniq(cmp.map(c=>c.id)), 'Missing/duplicate component manifest IDs');
fail(Object.values(components.counts.byTier).reduce((a,n)=>a+n,0)===cmp.length, 'Component tier counts wrong');
for (const c of cmp) {
  fail(isString(c.name)&&isString(c.a11y)&&Array.isArray(c.states)&&Array.isArray(c.testRequirements), 'Component contract incomplete: '+c.id);
  fail(c.implementationStatus==='not-implemented', 'A catalog entry cannot claim implementation without code: '+c.id);
}
fail(b.length>=10 && uniq(b.map(x=>x.id)), 'Block IDs wrong');
for (const x of b) {
  fail(sameSet(x.skinApplicability, ids), 'Block skin coverage inconsistent '+x.id);
  fail(x.businessLogic==='forbidden' && Array.isArray(x.states)&&x.states.includes('loading')&&x.states.includes('error'), 'Block state/logic incomplete '+x.id);
}
fail(sameSet(assets.plannedPerSkin.map(x=>x.skinId),ids), 'Asset manifest skin coverage wrong');
fail(assets.plannedPerSkin.every(x=>x.status==='not-produced' && x.assets.length===0), 'Unverified asset production claim');
fail(sfx.defaultEnabled===false && sfx.requiresExplicitConsent===true && sfx.autoplayOnLoad===false && sfx.producedAssets.length===0, 'Unsafe/unverified audio default');
// Local Markdown link existence check. Remote URLs and anchors are intentionally excluded.
const walk=dir=>fs.readdirSync(path.join(root,dir),{withFileTypes:true}).flatMap(e=>{
 const p=path.join(dir,e.name);return e.isDirectory()?walk(p):[p];
});
for (const md of ['README.md',...walk('docs').filter(x=>x.endsWith('.md'))]) {
 const content=fs.readFileSync(path.join(root,md),'utf8');
 for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
   let href=match[1].split(' ')[0].split('#')[0];
   if (!href || href.startsWith('/') || href.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(href)) continue;
   try { href=decodeURIComponent(href); }catch { errors.push('Bad percent-encoding in '+md);continue; }
   fail(fs.existsSync(path.resolve(path.dirname(path.join(root,md)),href)), 'Broken local Markdown link: '+md+' -> '+href);
 }
}
if (process.argv.includes('--self-test')) {
  assert.equal(validatePairMatrix(grammar.pairwiseReviewMatrix,ids).length,0);
  assert(validatePairMatrix([...grammar.pairwiseReviewMatrix,grammar.pairwiseReviewMatrix[0]],ids).length>0);
  assert(validatePairMatrix(grammar.pairwiseReviewMatrix.slice(1),ids).length>0);
  const bad=structuredClone(grammar.pairwiseReviewMatrix);
  bad[0].status='pass';
  assert(validatePairMatrix(bad,ids).some(x=>x.includes('Approved pair without')));
  assert(!sameSet(ids,[...ids.slice(1),'fake-skin']));
  console.log('PASS: negative fixtures (duplicate/missing/premature-pass/skin drift)');
}
if (process.argv.includes('--production')) {
  errors.push('Production gate not available: canonical token values, rendering and QA are intentionally absent.');
}
if (errors.length) {
 for(const e of errors) console.error('FAIL:',e);
 process.exitCode=1;
} else console.log('PASS: specification-only structural checks; 15 skins, 30 pending mode slots, 105 unreviewed pairs, catalogs, policy and docs links. No UI QA implied.');
