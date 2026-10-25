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

// Stable issue identity is read from the existing integration backlog table;
// GitHub remains the live status owner and CI never queries the network.
function taskIdentityProblems(records) {
  const problems = [];
  const byId = new Map(), byIssue = new Map();
  for (const record of records) {
    const prior = byId.get(record.id);
    if (prior && (prior.outcome !== record.outcome || prior.issue !== record.issue || prior.url !== record.url))
      problems.push(`${record.id}: conflicting task meaning or issue mapping in ${prior.source} and ${record.source}`);
    else if (!prior) byId.set(record.id, record);
    const issueOwner = byIssue.get(record.issue);
    if (issueOwner && issueOwner.id !== record.id)
      problems.push(`#${record.issue}: assigned to ${issueOwner.id} in ${issueOwner.source} and ${record.id} in ${record.source}`);
    else if (!issueOwner) byIssue.set(record.issue, record);
    if (!/^https:\/\/github\.com\/bjo163\/moonframe\/issues\/(\d+)$/.test(record.url) ||
        Number(record.url.match(/\/(\d+)$/)?.[1]) !== record.issue)
      problems.push(`${record.id}: invalid canonical issue URL in ${record.source}`);
  }
  return problems;
}
function markdownTableRecords(content, source, headerPattern, issueColumn=-1) {
  const lines = content.split(/\r?\n/);
  const header = lines.findIndex(line => headerPattern.test(line));
  if (header < 0) return [];
  const records = [];
  for (const line of lines.slice(header + 2)) {
    if (!line.trim().startsWith('|')) break;
    const cells = line.split('|').slice(1, -1).map(cell => cell.trim());
    const id = cells[0]?.match(/\bMFI?-\d{3}\b/)?.[0];
    const issueCell = cells.at(issueColumn) || '';
    const issue = issueCell.match(/\/issues\/(\d+)/) || issueCell.match(/#(\d+)/);
    if (id && issue) records.push({id, issue:Number(issue[1]), url:`https://github.com/bjo163/moonframe/issues/${issue[1]}`,
      outcome:cells[2] || cells[0], source});
  }
  return records;
}
function taskIdentityAudit(contents) {
  const bible = markdownTableRecords(contents.bible, 'master issue Bible', /^\| Stable ID \| Issue \| Intent \| Disposition \|/, 1);
  const integration = markdownTableRecords(contents.bible, 'master issue Bible', /^\| ID \| Priority \| Type \| Area \| Dependencies \| GitHub issue \|/);
  const initial = markdownTableRecords(contents.initial, 'initial-issues.md', /^\| Task \| GitHub issue \| Dependencies \| State \|/, 1);
  const registry = [...bible, ...integration];
  const problems = taskIdentityProblems(registry);
  const expected = new Map(registry.map(record => [record.id, record]));
  for (const record of initial) {
    const canonical = expected.get(record.id);
    if (!canonical || canonical.issue !== record.issue || canonical.url !== record.url)
      problems.push(`${record.id}: issue mapping differs between ${record.source} and master issue Bible`);
  }
  // Roadmap/TODO declarations are limited to task-list lines, checked or unchecked. Historical prose is ignored.
  for (const [source, content] of [['implementation-roadmap.md', contents.roadmap], ['TODO.md', contents.todo]]) {
    for (const line of content.split(/\r?\n/)) {
      const match = line.match(/^\s*- \[[ xX]\] \*\*(MFI?-\d{3})\b.*?\[?#(\d+)\]?\]?\((https:\/\/github\.com\/bjo163\/moonframe\/issues\/(\d+))\)/);
      if (!match) continue;
      const [, id, issueNumber, url, urlNumber] = match;
      const canonical = expected.get(id);
      if (!canonical || canonical.issue !== Number(issueNumber) || canonical.issue !== Number(urlNumber) || canonical.url !== url)
        problems.push(`${id}: active issue reference in ${source} (${issueNumber}/${urlNumber}, ${url}) conflicts with master issue Bible (${canonical?.issue ?? 'unmapped'}, ${canonical?.url ?? 'unmapped'})`);
    }
  }
  return {problems, registry};
}
// This deliberately supports the one canonical Markdown table, local repo paths,
// compact ADR ranges (ADR-0002/3), and issue refs backed by the offline MFI map.
// Prose, arbitrary Markdown patterns, URL reachability, and heading anchors are out of scope.
function ownershipRegistryProblems(rows, issueNumbers, exists, readmeLinked) {
  const problems=[];
  if(rows.length<15) problems.push(`registry has ${rows.length} concerns; expected at least 15`);
  const seen=new Set();
  const localRefs=text=>[...text.matchAll(/(?:^|[\s(`])((?:docs|contracts|schemas)\/[A-Za-z0-9._/-]+)(?=$|[\s),;`])/g)].map(m=>m[1]);
  for(const row of rows){
    if(!row.concern.trim()||!row.owner.trim()){
      problems.push(`${row.concern||'(unnamed concern)'}: canonical policy owner is empty`);continue;
    }
    if(seen.has(row.concern)) problems.push(`${row.concern}: duplicate concern row has more than one registry owner`);
    seen.add(row.concern);
    const ownerRefs=localRefs(row.owner);
    if(row.owner.includes('this document')) ownerRefs.push('docs/architecture/decisions-and-governance.md');
    if(!ownerRefs.length) problems.push(`${row.concern}: canonical owner has no supported local document reference`);
    if(ownerRefs.length!==1) problems.push(`${row.concern}: expected exactly one canonical policy owner, found ${ownerRefs.length}`);
    const refs=[...ownerRefs,...localRefs(row.machine),...localRefs(row.dependencies)];
    for(const ref of new Set(refs)) if(!exists(ref)) problems.push(`${row.concern}: missing local reference ${ref}`);
    const issues=[...row.dependencies.matchAll(/#(\d+)\b/g)].map(m=>Number(m[1]));
    for(const issue of issues) if(!issueNumbers.has(issue)) problems.push(`${row.concern}: unmapped GitHub issue #${issue}`);
    for(const match of row.dependencies.matchAll(/ADR-(\d{4})(?:\/(\d{1,4}))?/g)){
      const numbers=[Number(match[1])];
      if(match[2]) numbers.push(Number(match[2].padStart(4,'0')));
      for(const number of numbers){
        const prefix=`docs/adr/${String(number).padStart(4,'0')}-`;
        if(!exists(prefix+'*')) problems.push(`${row.concern}: missing ADR reference ${prefix}*`);
      }
    }
  }
  if(!readmeLinked) problems.push('README.md: missing link to the canonical ownership registry');
  return problems;
}
function parseOwnershipRegistry(content){
  const lines=content.split(/\r?\n/);
  const heading=lines.findIndex(line=>/^## Master integration registry \/ cross-domain ownership\b/.test(line));
  if(heading<0) return [];
  const header=lines.findIndex((line,index)=>index>heading&&/^\| Concern \| Canonical policy owner \| Canonical machine contract \| Depends on \/ evidence gate \| Current maturity \|$/.test(line));
  if(header<0) return [];
  const rows=[];
  for(const line of lines.slice(header+2)){
    if(!line.trim().startsWith('|')) break;
    const cells=line.split('|').slice(1,-1).map(cell=>cell.trim());
    if(cells.length!==5) { rows.push({concern:cells[0]||'(malformed row)',owner:'',machine:'',dependencies:''});continue; }
    rows.push({concern:cells[0],owner:cells[1],machine:cells[2],dependencies:cells[3]});
  }
  return rows;
}
const identityAudit = taskIdentityAudit({
  bible:fs.readFileSync(path.join(root,'docs/backlog/master-integration-issue-bible.md'),'utf8'),
  initial:fs.readFileSync(path.join(root,'docs/backlog/initial-issues.md'),'utf8'),
  roadmap:fs.readFileSync(path.join(root,'docs/implementation-roadmap.md'),'utf8'),
  todo:fs.readFileSync(path.join(root,'TODO.md'),'utf8')
});
for (const problem of identityAudit.problems) errors.push('Task identity: '+problem);
const governancePath='docs/architecture/decisions-and-governance.md';
const ownershipRows=parseOwnershipRegistry(fs.readFileSync(path.join(root,governancePath),'utf8'));
const readmeHasOwnershipLink=/\[Canonical source-of-truth registry\]\(docs\/architecture\/decisions-and-governance\.md#master-integration-registry--cross-domain-ownership-2026-10-25\)/.test(fs.readFileSync(path.join(root,'README.md'),'utf8'));
const localReferenceExists=ref=>{
  if(ref.endsWith('*')) return fs.readdirSync(path.join(root,'docs/adr')).some(name=>name.startsWith(path.basename(ref,'*')));
  const target=path.resolve(root,ref),relative=path.relative(root,target);
  return relative!== '..'&&!relative.startsWith('..'+path.sep)&&!path.isAbsolute(relative)&&fs.existsSync(target);
};
const ownershipAuditProblems=ownershipRegistryProblems(ownershipRows,new Set(identityAudit.registry.map(x=>x.issue)),localReferenceExists,readmeHasOwnershipLink);
for(const problem of ownershipAuditProblems) errors.push('Ownership registry: '+problem);
if (process.argv.includes('--self-test')) {
  assert.equal(identityAudit.problems.length, 0, 'Canonical task identity sources must agree: '+identityAudit.problems.join('; '));
  assert(identityAudit.registry.some(x=>x.id==='MF-003'&&x.issue===1));
  assert(identityAudit.registry.some(x=>x.id==='MFI-001'&&x.issue===7));
  assert(identityAudit.registry.some(x=>x.id==='MFI-002'&&x.issue===8));
  const sample={id:'MF-003',issue:1,url:'https://github.com/bjo163/moonframe/issues/1',outcome:'consumer environment',source:'valid fixture'};
  assert.equal(taskIdentityProblems([sample]).length,0,'Valid identity fixture should pass');
  const collision=taskIdentityProblems([sample,{...sample,outcome:'shadcn audit',source:'conflicting fixture'}]);
  assert(collision.some(x=>x.includes('MF-003')&&x.includes('valid fixture')&&x.includes('conflicting fixture')),
    'Incompatible outcome fixture should identify ID and both sources');
  const reusedIssue=taskIdentityProblems([sample,{...sample,id:'MF-004',outcome:'Classic baseline',source:'duplicate issue fixture'}]);
  assert(reusedIssue.some(x=>x.includes('#1')&&x.includes('MF-003')&&x.includes('MF-004')),
    'Duplicate GitHub issue fixture should identify issue and both IDs');
  console.log('PASS: task identity mapping (MF-003 ↔ #1; MFI-001 ↔ #7; MFI-002 ↔ #8) and valid/ID-collision/duplicate-issue fixtures');
  assert.equal(ownershipAuditProblems.length,0,'Canonical owner/path registry must pass: '+ownershipAuditProblems.join('; '));
  assert.equal(ownershipRows.length,17,'Current registry has 17 concern rows (the issue minimum is 15)');
  const duplicateConcern=ownershipRegistryProblems([...ownershipRows,{...ownershipRows[0],owner:'docs/architecture/decisions-and-governance.md'}],new Set(identityAudit.registry.map(x=>x.issue)),localReferenceExists,true);
  assert(duplicateConcern.some(x=>x.includes('Product scope/principles')&&x.includes('duplicate concern')));
  const missingRef=ownershipRegistryProblems([{...ownershipRows[0],owner:'docs/does-not-exist.md'}],new Set(identityAudit.registry.map(x=>x.issue)),localReferenceExists,true);
  assert(missingRef.some(x=>x.includes('Product scope/principles')&&x.includes('docs/does-not-exist.md')));
  const multipleOwners=ownershipRegistryProblems([{...ownershipRows[0],owner:'docs/moonframe-ui-design-system-bible-v1.3.md + docs/audit/master-integration-audit.md'}],new Set(identityAudit.registry.map(x=>x.issue)),localReferenceExists,true);
  assert(multipleOwners.some(x=>x.includes('Product scope/principles')&&x.includes('exactly one canonical policy owner')));
  const missingIssue=ownershipRegistryProblems([{...ownershipRows[0],dependencies:'#999'}],new Set(identityAudit.registry.map(x=>x.issue)),localReferenceExists,true);
  assert(missingIssue.some(x=>x.includes('unmapped GitHub issue #999')));
  assert(ownershipRegistryProblems(ownershipRows,new Set(identityAudit.registry.map(x=>x.issue)),localReferenceExists,false).some(x=>x.includes('README.md')));
  const externalRef=ownershipRegistryProblems([{...ownershipRows[0],dependencies:'https://example.invalid/docs/external.md'}],new Set(identityAudit.registry.map(x=>x.issue)),localReferenceExists,true);
  assert(!externalRef.some(x=>x.includes('missing local reference')),'External URLs must not be treated as local files');
  console.log('PASS: ownership registry (17 unique concerns), path/issue/README negative fixtures; external URLs are not fetched');
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
for (const x of b.filter(x=>x.recordKind==='family-blueprint')) {
  fail(sameSet(x.skinApplicability, ids), 'Block skin coverage inconsistent '+x.id);
  fail(x.businessLogic==='forbidden' && Array.isArray(x.states)&&x.states.includes('loading')&&x.states.includes('error'), 'Block state/logic incomplete '+x.id);
}
fail(sameSet(assets.plannedPerSkin.map(x=>x.skinId),ids), 'Asset manifest skin coverage wrong');
fail(assets.plannedPerSkin.every(x=>x.status==='not-produced' && x.assets.length===0), 'Unverified asset production claim');
fail(sfx.defaultEnabled===false && sfx.requiresExplicitConsent===true && sfx.autoplayOnLoad===false && sfx.producedAssets.length===0, 'Unsafe/unverified audio default');

// Premium UI scope: inspect Level A/B → C → D → E graph and optional Level F.
const pages = read('contracts/moonframe-page-template-manifest-v0.1.json');
const starters = read('contracts/moonframe-starter-manifest-v0.1.json');
const integrations = read('contracts/moonframe-integration-manifest-v0.1.json');
const auth = read('contracts/moonframe-auth-ui-catalog-v0.1.json');
const dataWorkspace = read('contracts/moonframe-data-workspace-contract-v0.1.json');
const premiumCoverage = read('contracts/moonframe-premium-coverage-v0.1.json');
const concreteBlocks=b.filter(x=>x.kind==='concrete-block');
const legacyBlocks=b.filter(x=>x.recordKind==='family-blueprint');
const pageItems=pages.templates, starterItems=starters.starters, optionalItems=integrations.candidates;
const priorities=new Set(['P0','P1','P2','P3']);
const atLeast=(arr,n)=>Array.isArray(arr)&&arr.length>=n;
const scopedIdSets=[cmp.map(x=>x.id),concreteBlocks.map(x=>x.id),pageItems.map(x=>x.id),starterItems.map(x=>x.id),optionalItems.map(x=>x.id)];
const allIds=scopedIdSets.flat();
// Historical family blueprints are NOT Level C concrete public item IDs. Their qualified
// namespace is family:<id>; preserve historical app-shell ID without aliasing component app-shell.
const historicalCollisions=legacyBlocks.filter(x=>cmp.some(c=>c.id===x.id)).map(x=>x.id);
fail(sameSet(historicalCollisions,['app-shell']), 'Unexpected component/family collision; migrate deliberately instead of silently renaming');
fail(legacyBlocks.every(x=>x.qualifiedId==='family:'+x.id), 'Legacy family namespace missing');

fail(uniq(allIds),'Duplicate ID across A/B/C/D/E/F');
for(const [index,entries] of scopedIdSets.entries())
  fail(uniq(entries)&&entries.every(isString),'Malformed IDs in level '+index);
fail(cmp.length===components.counts.total,'Component total drift');
fail(legacyBlocks.length===blocks.counts.familyBlueprints &&
  concreteBlocks.length===blocks.counts.concreteBlocks,'Block family/concrete counts drift');
fail(Object.entries(blocks.counts.byCategory).every(([name,n])=>concreteBlocks.filter(x=>x.category===name).length===n),
 'Block per-category counts drift');
function catalogGraphProblems(blockList,pageList,starterList,optionalList,authMap) {
  const e=[];
  const blockIds=new Set(blockList.map(x=>x.id));
  const pageIds=new Set(pageList.map(x=>x.id));
  const used=new Set([...blockList.map(x=>x.id),...pageList.map(x=>x.id),...starterList.map(x=>x.id),...optionalList.map(x=>x.id)]);
  if (used.size!==blockList.length+pageList.length+starterList.length+optionalList.length)
    e.push('Duplicate Level C/D/E/F ID');
  for(const item of blockList){
    if(item.kind!=='concrete-block'||item.level!=='C'||!priorities.has(item.priority)||item.status!=='specified-not-implemented')
      e.push('Invalid concrete block taxonomy/status: '+item.id);
    if(!atLeast(item.stateMatrix,3)||!atLeast(item.acceptance,3)||!atLeast(item.inputs,0)||
       !atLeast(item.visualAcceptance,2)||!isString(item.integrationBoundary)||!isString(item.a11y)||
       !atLeast(item.eventContract?.events,0)||
       !atLeast(item.responsive && Object.values(item.responsive),3))
      e.push('Incomplete concrete block behavioral contract: '+item.id);
    if(!item.skinCoverageSource?.includes('15 skin IDs')&&!item.skinCoverageSource?.includes('15 skin IDs ×'))
      e.push('Skin coverage undefined: '+item.id);
  }
  for(const p of pageList) {
    if(p.level!=='D'||p.status!=='specified-not-implemented'||!priorities.has(p.priority)||!atLeast(p.blockRefs,1)||
       !atLeast(p.states,5)||!atLeast(p.acceptance,3)||!atLeast(Object.values(p.responsive||{}),3))
      e.push('Invalid page record: '+p.id);
    for(const ref of p.blockRefs||[]) if(!blockIds.has(ref)) e.push('Missing C-level blockRef: '+p.id+' -> '+ref);
  }
  for(const s of starterList){
    if(s.level!=='E'||s.status!=='specified-not-implemented'||!atLeast(s.pageRefs,2)||!atLeast(s.integrationSeams,2))
      e.push('Invalid starter record: '+s.id);
    for(const ref of s.pageRefs||[])if(!pageIds.has(ref))e.push('Missing D-level pageRef: '+s.id+' -> '+ref);
  }
  for(const i of optionalList){
    if(i.level!=='F'||i.selectionStatus!=='candidate-not-installed'||!isString(i.primarySource)||
       !isString(i.licenseStatus)||i.versionPin!=='not-installed')
      e.push('Unverified optional integration claimed: '+i.id);
  }
  for(const ref of authMap.authBlocks||[])if(!blockIds.has(ref))e.push('Invalid auth block reference: '+ref);
  for(const [name,refs] of Object.entries(authMap.flowGroups||{}))
    for(const ref of refs)if(!blockIds.has(ref))e.push('Invalid auth '+name+' reference: '+ref);
  return e;
}
for(const msg of catalogGraphProblems(concreteBlocks,pageItems,starterItems,optionalItems,auth))errors.push(msg);
fail(sameSet(auth.skinIds,ids)&&sameSet(auth.supportedModes,['light','dark']),'Auth skin/mode authority drift');
fail(auth.securityBoundary.includes('Consumer/auth provider') &&
  auth.implementationStatus==='not-implemented' &&
  auth.providerIntegrationStatus==='none-installed','Auth security boundary/status claim false');
fail(pages.count===pageItems.length && pageItems.length>20 && starterItems.length>=5 && optionalItems.length>=8,'Premium level D/E/F catalog incomplete');
fail(sameSet(dataWorkspace.tiers.map(x=>x.id),['simple-table','data-table','advanced-workspace','enterprise-grid']), 'Four data workspace tiers missing');
fail(dataWorkspace.tiers.every(x=>priorities.has(x.priority) && atLeast(x.featureScope,3)&&atLeast(x.nonGoals,1)), 'Workspace tier contract incomplete');
fail(sameSet(premiumCoverage.appearanceModes,['light','dark']) &&
  premiumCoverage.systemIsNotThirdMode===true,'Premium appearance semantics drift');
fail(premiumCoverage.evidenceMatrix.expectedCells===premiumCoverage.referenceScreens.length*ids.length*2,
  'Premium expected cell calculation incorrect');
const coverageCells=premiumCoverage.evidenceMatrix.cells;
const expectedCoverage=ids.flatMap(id=>['light','dark'].flatMap(mode=>
  premiumCoverage.referenceScreens.map(itemId=>id+'::'+mode+'::'+itemId)));
fail(coverageCells.length===expectedCoverage.length &&
  sameSet(expectedCoverage,coverageCells.map(x=>x.skinId+'::'+x.mode+'::'+x.itemId)),
  'Premium coverage has missing, duplicate or extraneous cells');
const legalFixtures=new Set([...concreteBlocks.map(x=>x.id),...pageItems.map(x=>x.id)]);
fail(uniq(premiumCoverage.referenceScreens)&&premiumCoverage.referenceScreens.every(x=>legalFixtures.has(x)),
 'Premium fixture includes invalid/nonconcrete items');
const allLegalIds=new Set([...concreteBlocks.map(x=>x.id),...pageItems.map(x=>x.id)]);
fail(sameSet(premiumCoverage.plannedUniversalApplicability.blockIds,concreteBlocks.map(x=>x.id)) &&
  sameSet(premiumCoverage.plannedUniversalApplicability.pageTemplateIds,pageItems.map(x=>x.id)),
  'Universal coverage drift');
for(const x of coverageCells) {
  fail(x.reviewStatus==='not-rendered'&&x.screenshot===null&&x.reviewer===null&&
       x.contrastEvidence===null&&x.grayscaleEvidence===null&&x.decorationOffEvidence===null,
    'Fabricated premium rendered/approved evidence: '+x.skinId+' '+x.mode+' '+x.itemId);
}
if (process.argv.includes('--self-test')) {
  const badPages=structuredClone(pageItems);
  badPages[0].blockRefs=['block-missing-deliberately'];
  assert(catalogGraphProblems(concreteBlocks,badPages,starterItems,optionalItems,auth).some(x=>x.includes('Missing C-level')));
  const badStarters=structuredClone(starterItems);
  badStarters[0].pageRefs=['template-missing-deliberately'];
  assert(catalogGraphProblems(concreteBlocks,pageItems,badStarters,optionalItems,auth).some(x=>x.includes('Missing D-level')));
  const badBlocks=[...concreteBlocks,concreteBlocks[0]];
  assert(catalogGraphProblems(badBlocks,pageItems,starterItems,optionalItems,auth).some(x=>x.includes('Duplicate Level')));
  assert(!sameSet(expectedCoverage,coverageCells.slice(1).map(x=>x.skinId+'::'+x.mode+'::'+x.itemId)));
  console.log('PASS: premium negative fixtures (invalid block/page refs, duplicate IDs, missing coverage)');
}


// Token Architecture & Theme Engine planning checks (not a production resolver).
const tokenSubsetSchema = read('schemas/moonframe-token-subset.schema.json');
const themePrefsSchema = read('schemas/moonframe-theme-preferences.schema.json');
const tpr=theme.preferenceResolution;
const tokenTypeMap=dict.tokenTypeProposals, tokenLayerMap=dict.tokenLayerProposals;
const plannedTypes=new Set(source.subset.allowedTypes);
const schemaSupportedTypes=new Set(tokenSubsetSchema.$defs.token.properties.$type.enum);
fail(tokenSubsetSchema.$schema==='https://json-schema.org/draft/2020-12/schema' &&
     themePrefsSchema.$schema==='https://json-schema.org/draft/2020-12/schema',
     'Token/preference schemas must declare JSON Schema Draft 2020-12');

// Primitive aliases are strings; avoid JSON Schema oneOf between an arbitrary
// string and a reference-pattern string (a reference satisfies both).
for(const type of ['fontFamily','fontWeight']){
 const branch=tokenSubsetSchema.$defs.token.allOf.find(x=>x.if?.properties?.$type?.const===type);
 fail(Array.isArray(branch?.then?.properties?.$value?.anyOf) &&
      !branch?.then?.properties?.$value?.oneOf,
      'Token schema must allow font string aliases without overlapping oneOf branches: '+type);
}

fail(tokenSubsetSchema.$defs?.group && tokenSubsetSchema.$defs?.token &&
     tokenSubsetSchema.$defs?.reference,'Incomplete proposed bounded DTCG schema');
fail(sameSet(themePrefsSchema.properties.requested.properties.skinId.enum,ids) &&
     sameSet(themePrefsSchema.properties.effective.properties.skinId.enum,ids),
     'Theme preferences schema skin IDs out of sync with canonical theme contract');
for(const [field,required] of [
 ['modePreference',['light','dark','system']],
 ['densityPreference',['compact','comfortable','spacious']],
 ['motionPreference',['system','full','reduced']],
 ['contrastPreference',['system','normal','high']],
 ['directionPreference',['app-locale','ltr','rtl']]
]) fail(sameSet(tpr.preferenceFields[field],required) &&
        sameSet(themePrefsSchema.properties.requested.properties[field].enum,required),
        'Theme requested preference enum mismatch: '+field);
for(const [field,required] of [
 ['resolvedMode',['light','dark']],['resolvedMotion',['full','reduced']],
 ['contrast',['normal','high']],['direction',['ltr','rtl']]
]) fail(sameSet(tpr.resolvedFields[field],required) &&
        sameSet(themePrefsSchema.properties.effective.properties[field].enum,required),
        'Theme effective preference enum mismatch: '+field);
fail(theme.rootAttributes.skin==='data-skin' && theme.rootAttributes.mode==='data-mode' &&
     theme.rootAttributes.density==='data-density' && theme.rootAttributes.motion==='data-motion' &&
     theme.rootAttributes.contrast==='data-contrast' && theme.rootAttributes.direction==='dir',
     'Root attributes/theme vocabulary drift');
fail(theme.fallbacks.unknownSkin==='classic' && theme.fallbacks.invalidMode==='system' &&
     theme.fallbacks.invalidDensity==='comfortable' && theme.fallbacks.invalidDirection==='ltr',
     'Required documented preference fallbacks drift');
fail(Array.isArray(tpr.precedence)&&tpr.precedence.length===5 &&
     tpr.precedence[0].includes('controlled') && tpr.precedence[1].includes('saved') &&
     tpr.precedence[2].includes('OS') && tpr.precedence[3].includes('application default'),
     'Theme preference precedence contract incomplete');
fail(tpr.persistence?.neverPersist?.includes('resolvedMode') &&
     tpr.persistence?.persist?.includes('modePreference') &&
     tpr.changeHandling?.some(x=>x.includes('only if requested mode=system')) &&
     tpr.persistence?.default?.startsWith('none'),
     'Stored vs derived/system-mode/runtime policy mismatch');
fail(tokenNames.length===Object.keys(tokenTypeMap).length &&
     sameSet(tokenNames,Object.keys(tokenTypeMap)) &&
     sameSet(tokenNames,Object.keys(tokenLayerMap)),
     'Token type/layer proposals must cover all 78 original token IDs');
fail(plannedTypes.size>=6 && plannedTypes.has('shadow') &&
     !schemaSupportedTypes.has('shadow'),
     'Shadow must remain proposed-but-schema-unsupported pending fixture proof');
fail([...schemaSupportedTypes].every(x=>plannedTypes.has(x)),
     'Schema type includes a type not proposed in source plan');
fail(source.sourceLayout?.overlayOrder?.length===5 &&
     source.sourceLayout.overlayOrder[0]==='reference-only-definition' &&
     source.sourceLayout.overlayOrder[4]==='skins/<skin-id>/<effective-mode>' &&
     source.sourceLayout.expectedResolvedAppearances===30,
     'Sparse source overlay specification missing or drifted');
fail(source.outputStrategy?.checkMode?.includes('no filesystem mutation') &&
     source.coverageReportContract?.perAppearance?.includes('sourceLineage') &&
     source.versioning?.tokenSetVersion==='not-created',
     'Generator/output source lineage or pending version unclear');
const legacyFromInventory=tokenNames.filter(x=>/[A-Z]/.test(x));
fail(sameSet(dict.namingPolicy?.legacyGrandfathered||[],legacyFromInventory) &&
     dict.catalogClarification.includes('Mixed required'),
     'Legacy names require explicit documented grandfathering');
fail(uniq(tokenNames)&&tokenNames.length===78,'Original vocabulary changed without reviewed migration');

const newTokenPattern=new RegExp(dict.namingPolicy.regexForNewIds);
const grandfatheredNames=new Set([
 ...dict.namingPolicy.legacyGrandfathered,
 ...dict.namingPolicy.legacyNumericSegments
]);
for(const name of tokenNames) {
 fail(grandfatheredNames.has(name)||newTokenPattern.test(name),
      'Token ID violates naming policy without migration/grandfathering: '+name);
}
fail(dict.namingPolicy.legacyGrandfathered.every(x=>tokenNames.includes(x)) &&
     dict.namingPolicy.legacyNumericSegments.every(x=>tokenNames.includes(x)),
     'Grandfathered token references do not exist');

fail(dict.canonicalValueSource===null && theme.tokens.canonicalSource===null &&
     source.status==='source-values-not-created',
     'Production token source improperly claimed');

// Tiny fixture checker: validates proposed *whole-token* alias semantics only.
// It does not process token files, apply overlays, generate CSS or implement ThemeProvider.
function validateTokenFixture(map) {
  const issues=[];
  const allowed=new Set(['color','dimension','duration','number','fontFamily','fontWeight','cubicBezier']);
  const isRecord=x=>x && typeof x==='object' && !Array.isArray(x);
  function validateValue(v,type,id) {
    if(type==='color'&&!(isRecord(v)&&v.colorSpace==='srgb'&&Array.isArray(v.components)&&
        v.components.length===3&&v.components.every(x=>typeof x==='number'&&Number.isFinite(x)&&x>=0&&x<=1)&&
        (v.alpha===undefined||(typeof v.alpha==='number'&&v.alpha>=0&&v.alpha<=1)))) issues.push('Bad color '+id);
    if(type==='dimension'&&!(isRecord(v)&&Number.isFinite(v.value)&&['px','rem'].includes(v.unit))) issues.push('Bad dimension '+id);
    if(type==='duration'&&!(isRecord(v)&&Number.isFinite(v.value)&&v.value>=0&&v.unit==='ms')) issues.push('Bad duration '+id);
    if(type==='number'&&!(typeof v==='number'&&Number.isFinite(v))) issues.push('Bad number '+id);
    if(type==='fontFamily'&&!(typeof v==='string'||(Array.isArray(v)&&v.length>0&&v.every(x=>typeof x==='string')))) issues.push('Bad fontFamily '+id);
    if(type==='fontWeight'&&!(Number.isFinite(v)||typeof v==='string')) issues.push('Bad fontWeight '+id);
    if(type==='cubicBezier'&&!(Array.isArray(v)&&v.length===4&&v.every(Number.isFinite))) issues.push('Bad cubicBezier '+id);
  }
  const seen=new Set();
  function visit(id,stack=[]) {
    if(stack.includes(id)){issues.push('Alias cycle '+[...stack,id].join(' -> '));return;}
    if(seen.has(id))return;
    const entry=map[id];
    if(!entry){issues.push('Unknown alias '+id);return;}
    if(!isRecord(entry)||typeof entry.$type!=='string'||!('$value'in entry)){issues.push('Malformed token '+id);return;}
    if(!allowed.has(entry.$type)){issues.push('Unsupported type '+id);return;}
    const v=entry.$value;
    if(typeof v==='string'&&v.startsWith('{')){
      if(!/^\{[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*\}$/.test(v)){issues.push('Malformed alias '+id);return;}
      const target=v.slice(1,-1);
      const destination=map[target];
      if(!destination){issues.push('Unknown alias '+target);return;}
      if(destination.$type!==entry.$type) issues.push('Alias type mismatch '+id+' -> '+target);
      visit(target,[...stack,id]);
    }else validateValue(v,entry.$type,id);
    seen.add(id);
  }
  for(const id of Object.keys(map))visit(id);
  return issues;
}
const example={
  'color.reference':{$type:'color',$value:{colorSpace:'srgb',components:[0.25,0.5,0.75]}},
  'color.semantic':{$type:'color',$value:'{color.reference}'},
  'space.reference':{$type:'dimension',$value:{value:8,unit:'px'}}
};
for(const x of validateTokenFixture(example))errors.push('Valid illustrative token fixture failed: '+x);
if(process.argv.includes('--self-test')) {
  const badUnknown=structuredClone(example);badUnknown['color.semantic'].$value='{color.nonexistent}';
  assert(validateTokenFixture(badUnknown).some(e=>e.includes('Unknown alias')));
  const badCycle=structuredClone(example);badCycle['color.reference'].$value='{color.semantic}';
  assert(validateTokenFixture(badCycle).some(e=>e.includes('Alias cycle')));
  const badType=structuredClone(example);badType['color.semantic'].$value='{space.reference}';
  assert(validateTokenFixture(badType).some(e=>e.includes('Alias type mismatch')));
  const badUnit=structuredClone(example);badUnit['space.reference'].$value={value:8,unit:'vh'};
  assert(validateTokenFixture(badUnit).some(e=>e.includes('Bad dimension')));
  const badColor=structuredClone(example);badColor['color.reference'].$value.components=[0,1.4,0.1];
  assert(validateTokenFixture(badColor).some(e=>e.includes('Bad color')));
  const badUnsupported=structuredClone(example);badUnsupported['color.reference'].$type='gradient';
  assert(validateTokenFixture(badUnsupported).some(e=>e.includes('Unsupported type')));
  console.log('PASS: proposed token fixture negatives (unknown alias, cycle, type, unit, color, unsupported)');
}


// Component API/behavior specs: structural and referential checks ONLY.
// A green result does not compile TS nor test live keyboard/ARIA/React components.
const apiContract = read('contracts/moonframe-component-api-contract-v0.1.json');
const componentStates = read('contracts/moonframe-component-state-matrix-v0.1.json');
const keyboardMatrix = read('contracts/moonframe-keyboard-interaction-matrix-v0.1.json');
const componentApiSchema=read('schemas/moonframe-component-behavior.schema.json');
const componentMatrixSchema=read('schemas/moonframe-component-matrix.schema.json');
const stateIds=componentStates.stateDimensions.map(x=>x.id);
const patternIds=keyboardMatrix.patterns.map(x=>x.id);
const publicIds=cmp.map(c=>c.id);
const byPublic=new Map(cmp.map(x=>[x.id,x]));
const byAPI=new Map(apiContract.components.map(x=>[x.id,x]));
const byKeyboard=new Map(keyboardMatrix.componentMappings.map(x=>[x.componentId,x]));
const byState=new Map(componentStates.components.map(x=>[x.componentId,x]));
function componentCoverageProblems(a,sm,km){
 const e=[],mapApi=new Map(a.components.map(x=>[x.id,x]));
 const stateMap=new Map(sm.components.map(x=>[x.componentId,x]));
 const keyMap=new Map(km.componentMappings.map(x=>[x.componentId,x]));
 const patternsSet=new Set(km.patterns.map(x=>x.id));
 const appStatuses=new Set(sm.applicabilityVocabulary);
 function checkIds(label,actual){
  if(!sameSet(actual,publicIds))e.push(label+' missing/duplicate/unknown component ID');
 }
 checkIds('API',a.components.map(x=>x.id));
 checkIds('state',sm.components.map(x=>x.componentId));
 checkIds('keyboard',km.componentMappings.map(x=>x.componentId));
 if(!uniq(km.patterns.map(x=>x.id)))e.push('duplicate keyboard patterns');
 if(!uniq(sm.stateDimensions.map(x=>x.id))||sm.stateDimensions.length<15)e.push('invalid state dimensions');
 for(const c of a.components) {
  const orig=byPublic.get(c.id);
  if(!orig){e.push('unknown API ID '+c.id);continue;}
  if(c.name!==orig.name||c.category!==orig.group||c.catalogTier!==orig.tier||
    c.catalogLevel!==orig.level||c.priority!==orig.priority)
   e.push('API canonical manifest drift '+c.id);
  if(c.readiness!=='specified-provisional-not-implemented'||c.publicExport?.status!=='unapproved'||
     c.propContract?.status!=='proposed-family-derived')
   e.push('Unverified API claimed as ready '+c.id);
  if(!patternsSet.has(c.keyboardPattern))e.push('unknown keyboard pattern '+c.id);
  if(c.statesMatrixRef!==('moonframe-component-state-matrix-v0.1.json#'+c.id) ||
     c.keyboardMatrixRef!==('moonframe-keyboard-interaction-matrix-v0.1.json#'+c.keyboardPattern))
    e.push('broken machine-readable cross-reference '+c.id);
  if(!Array.isArray(c.accessibilityRequirements)||c.accessibilityRequirements.length<3||
     !Array.isArray(c.testsRequired)||c.testsRequired.length<2||
     !Array.isArray(c.docsRequired)||c.docsRequired.length<2)
     e.push('missing component evidence requirements '+c.id);
  if(c.themeContractRef!=='moonframe-theme-contract-v1.3.json'||
     c.visualRecipeRef!=='moonframe-skin-specifications-v1.0.json')
    e.push('misowned skin/theme authority '+c.id);
  const sr=stateMap.get(c.id),kr=keyMap.get(c.id);
  if(!sr||!kr){e.push('missing state/keyboard row '+c.id);continue;}
  if(sr.keyboardPattern!==c.keyboardPattern||kr.patternId!==c.keyboardPattern)
   e.push('keyboard mismatch for '+c.id);
  const actual=Object.keys(sr.states||{});
  if(!sameSet(actual,sm.stateDimensions.map(x=>x.id)))e.push('state dimensions incomplete '+c.id);
  if(actual.some(s=>!appStatuses.has(sr.states[s])))e.push('state applicability invalid '+c.id);
  if(!sameSet(sr.applicable||[],actual.filter(s=>sr.states[s]==='applicable')) ||
     !sameSet(sr.notApplicable||[],actual.filter(s=>sr.states[s]==='not-applicable')) ||
     !sameSet(sr.deferred||[],actual.filter(s=>sr.states[s]==='deferred')))
    e.push('state partition contradictory '+c.id);
  if(sr.reviewStatus!=='specified-family-derived-not-tested'||kr.status!=='specified-not-tested')
    e.push('invented component state/keyboard review '+c.id);
  if(sr.deferred?.length && !(Array.isArray(sr.deferredReasons)&&sr.deferredReasons.length))
    e.push('deferred states missing reason '+c.id);
  const pat=km.patterns.find(x=>x.id===c.keyboardPattern);
  if(!pat?.componentIds?.includes(c.id))e.push('pattern reverse index incomplete '+c.id);
  if(c.risk==='high'&&kr.manualReview!=='required-before-release')
    e.push('high risk missing manual AT gate '+c.id);
 }
 for(const p of km.patterns){
  const mapped=km.componentMappings.filter(x=>x.patternId===p.id).map(x=>x.componentId);
  if(!sameSet(mapped,p.componentIds))e.push('keyboard reverse index out of sync '+p.id);
  if(p.readiness!=='specified-pattern-not-implemented'||!isString(p.keyboardContract)||!isString(p.primarySource))
    e.push('keyboard pattern unjustified or prematurely validated '+p.id);
 }
 if(a.components.length!==cmp.length||sm.components.length!==cmp.length||km.componentMappings.length!==cmp.length)
  e.push('151-component coverage count drift');
 return e;
}
for(const issue of componentCoverageProblems(apiContract,componentStates,keyboardMatrix))
 errors.push('Component contract: '+issue);
fail(componentApiSchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
     componentMatrixSchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
     componentApiSchema.properties?.keyboardPattern&&componentMatrixSchema.properties?.states,
     'Component API structural schemas missing/malformed');
fail(apiContract.status==='specified-family-derived-not-implemented' &&
     componentStates.status==='planned-no-component-tests' &&
     keyboardMatrix.status==='specified-not-tested',
     'Component documents incorrectly claim UI implementation/test readiness');
if(process.argv.includes('--self-test')){
 assert.equal(componentCoverageProblems(apiContract,componentStates,keyboardMatrix).length,0);
 const badMissing=structuredClone(apiContract);badMissing.components.shift();
 assert(componentCoverageProblems(badMissing,componentStates,keyboardMatrix).some(x=>x.includes('API missing')));
 const badPattern=structuredClone(apiContract);badPattern.components[0].keyboardPattern='magic-nonexistent';
 assert(componentCoverageProblems(badPattern,componentStates,keyboardMatrix).some(x=>x.includes('unknown keyboard pattern')));
 const badState=structuredClone(componentStates);
 badState.components[0].states['resting']='invalid-flag';
 assert(componentCoverageProblems(apiContract,badState,keyboardMatrix).some(x=>x.includes('state applicability invalid')));
 const badFalseReview=structuredClone(componentStates);
 badFalseReview.components[0].reviewStatus='tested';
 assert(componentCoverageProblems(apiContract,badFalseReview,keyboardMatrix).some(x=>x.includes('invented component state')));
 const badReverse=structuredClone(keyboardMatrix);
 badReverse.patterns[0].componentIds=['wrong-component'];
 assert(componentCoverageProblems(apiContract,componentStates,badReverse).some(x=>x.includes('keyboard reverse index')));
 console.log('PASS: component negatives (missing ID, orphan keyboard pattern, invalid state, fake review, reverse index)');
}


// Advanced Data Workspace — documentation contract/fixture checks only.
// These do not run Ajv, compile TypeScript, render React, simulate browser AT,
// sanitize/export CSV files or validate server authorization.
const dataSpec=read('contracts/moonframe-data-workspace-contract-v0.1.json');
const dataCoverage=read('contracts/moonframe-data-skin-coverage-v0.1.json');
const dataPresets=read('contracts/moonframe-data-preset-catalog-v0.1.json');
const dataSchema=read('schemas/moonframe-data-query.schema.json');
const dataFixtures=read('contracts/fixtures/data-workspace-v0.1.json');
const capabilityIds=dataSpec.capabilities.map(x=>x.id);
const actualBlockIds=new Set(blocks.blocks.filter(x=>x.kind==='concrete-block').map(x=>x.id));
const actualPageIds=new Set(pages.templates.map(x=>x.id));
fail(dataSpec.status==='design-contract-not-implemented'&&
     dataSpec.specificationStatus==='specified-provisional-not-implemented'&&
     dataSpec.engineDecision==='proposed-ADR-0004-unapproved',
     'Data architecture falsely approved/implemented');
fail(dataSpec.tiers.length===4 && sameSet(dataSpec.tiers.map(x=>x.id),
     ['simple-table','data-table','advanced-workspace','enterprise-grid']),
     'Existing data tier contract changed unexpectedly');
fail(uniq(capabilityIds)&&capabilityIds.length>=25, 'Data capability catalog duplicated or incomplete');
const priorityValues=new Set(['P0','P1','P2','P3']);
for(const c of dataSpec.capabilities){
 fail(priorityValues.has(c.priority)&&c.status==='specified-not-implemented'&&
      c.actualTestStatus==='not-run'&&c.reviewer===null,
      'Unreviewed Data Workspace capability claimed implemented '+c.id);
 for(const dep of c.dependsOn||[])fail(capabilityIds.includes(dep),'Unknown capability prerequisite: '+c.id+' -> '+dep);
}
function hasCycle(entries){
 const byId=new Map(entries.map(x=>[x.id,x.dependsOn||[]]));
 const visited=new Set(),active=new Set();
 function walk(id){if(active.has(id))return true;if(visited.has(id))return false;
 active.add(id);for(const d of byId.get(id)||[])if(byId.has(d)&&walk(d))return true;
 active.delete(id);visited.add(id);return false;}
 return entries.some(x=>walk(x.id));
}
fail(!hasCycle(dataSpec.capabilities),'Data capability dependency cycle');
fail(dataSpec.selectionContract.variants.includes('query-all-except')&&
     dataSpec.selectionContract.invariants.some(x=>/server|backend/i.test(x))&&
     dataSpec.exportContract.csv.formulaRisk.includes('OWASP')&&
     dataSpec.rowIdentity.forbidden.includes('array-index'),
     'Data selection/export/row identity safeguards removed');
fail(dataSpec.queryState.fields.pagination.includes('kind:') &&
     dataSpec.queryState.queryMode.invariants.some(x=>x.includes('No double')),
     'Cursor and offset query-state boundary lost');
fail(dataSchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
     dataSchema.$defs?.filterAST&&dataSchema.$defs?.selection&&dataSchema.$defs?.pagination,
     'Proposed Data Workspace JSON Schema missing structures');
fail(sameSet(dataCoverage.recipes.map(x=>x.skinId),ids),
     'Data skin-specific recipes must reference all canonical skin IDs');
fail(dataCoverage.recipes.every(r=>r.reviewStatus==='not-rendered-not-reviewed'&&
     isString(r.tableSurfaceAndHeader)&&isString(r.mobileReflow)&&
     isString(r.selectionFocusSortFilterLanguage)&&isString(r.decorationAndAccessibilityRisk)),
     'Incomplete or prematurely approved data skin recipe');
fail(sameSet(dataCoverage.modes,['light','dark'])&&dataCoverage.systemExtraMode===false,
     'Data skin coverage must not treat system as additional mode');
fail(sameSet(dataCoverage.fixtures.map(x=>x.itemId),
     ['template-records-table','template-data-workspace','template-data-filter-builder',
      'template-data-audit','template-responsive-records','template-data-grid-lab']),
     'Data page reference coverage changed or invalid');
fail(dataCoverage.fixtures.every(f=>actualPageIds.has(f.itemId)),
     'Data coverage points at nonexistent page');
const expectedDataCells=ids.flatMap(id=>['light','dark'].flatMap(mode=>
 dataCoverage.fixtures.map(f=>id+'::'+mode+'::'+f.itemId)));
const foundDataCells=dataCoverage.cells.map(x=>x.skinId+'::'+x.mode+'::'+x.itemId);
fail(dataCoverage.expectedCells===expectedDataCells.length&&
     sameSet(expectedDataCells,foundDataCells),'Data coverage missing/duplicate/out-of-scope cells');
fail(dataCoverage.actualScreenshots===0&&dataCoverage.passCount===0&&
     dataCoverage.cells.every(x=>x.reviewStatus==='not-rendered'&&
       x.screenshot===null&&x.reviewer===null&&
       x.keyboardEvidence===null&&x.contrastEvidence===null&&x.manualATEvidence===null),
     'False data visual review evidence');
fail(uniq(dataPresets.presets.map(x=>x.id))&&dataPresets.presets.length>=6,
     'Duplicate/incomplete Data Workspace presets');
for(const x of dataPresets.presets){
 fail(actualPageIds.has(x.pageRef)&&x.blockRefs.every(y=>actualBlockIds.has(y)),
      'Data preset missing canonical block/page ref: '+x.id);
 fail(x.status==='specified-not-implemented'&&x.consumerBoundary.includes('Backend'),
      'Data preset asserts implementation or domain logic: '+x.id);
}
// A strict, deliberately bounded semantic fixture checker. This is NOT generic
// JSON Schema 2020-12 evaluation or a production filter/query engine.
function validateDataFixture(sample,fixtureColumns){
 const e=[];const columns=new Map(fixtureColumns.map(x=>[x.id,x]));
 if(!sample||typeof sample!=='object'||!sample.query||!sample.selection||!sample.exportRequest)
  return ['missing document/query/selection/export'];
 const q=sample.query,sel=sample.selection,ex=sample.exportRequest;
 if(q.version!==1||!['server','client'].includes(q.mode))e.push('bad version or query mode');
 if(!Array.isArray(q.sorting)||q.sorting.some(s=>!columns.has(s.columnId)||
      typeof s.descending!=='boolean'))e.push('invalid sort field/type');
 if(!q.pagination||!['offset','cursor'].includes(q.pagination.kind)||
      !Number.isInteger(q.pagination.pageSize)||q.pagination.pageSize<1||
      (q.pagination.kind==='offset'&&(!Number.isInteger(q.pagination.pageIndex)||
       q.pagination.pageIndex<0||'cursor'in q.pagination))||
      (q.pagination.kind==='cursor'&&'pageIndex'in q.pagination))
      e.push('pagination mode mixing or invalid size');
 let count=0;
 function walk(n,depth){
  count++;if(depth>4||count>30){e.push('filter bounds exceeded');return;}
  if(!n||typeof n!=='object'){e.push('invalid filter node');return;}
  if(n.kind==='group'){if(!['and','or'].includes(n.logic)||!Array.isArray(n.children))
     e.push('invalid group');
   else n.children.forEach(c=>walk(c,depth+1));
  }else if(n.kind==='predicate'){
   const col=columns.get(n.fieldId);
   if(!col)e.push('unknown filter field');
   else if(!col.allowedOperators.includes(n.operator))e.push('invalid type/operator');
   if(['isNull','isNotNull'].includes(n.operator)&&'value'in n)e.push('null operator takes no value');
   if(['between','in','notIn'].includes(n.operator)&&
     (!Array.isArray(n.value)||n.value.length===0||n.value.length>100))
     e.push('range/list missing');
  }else e.push('unknown filter node kind');
 }
 if(q.filters?.version!==1||q.filters?.root?.kind!=='group')
  e.push('bad filter AST envelope');
 else walk(q.filters.root,1);
 if(sel.kind==='explicit-ids'){
  if(!['current-page','loaded','cross-page'].includes(sel.scope)||
      !Array.isArray(sel.ids)||new Set(sel.ids).size!==sel.ids.length)e.push('duplicate/invalid selected ID');
 }else if(sel.kind==='query-all-except'){
  if(!isString(sel.snapshotId)||!isString(sel.queryFingerprint)||
    !Array.isArray(sel.excludedIds)||new Set(sel.excludedIds).size!==sel.excludedIds.length||
    !Number.isFinite(Date.parse(sel.expiresAt))||sel.confirmationRequired!==true)
    e.push('invalid query-all snapshot');
 }else e.push('unknown selection kind');
 if(!['csv','xlsx','pdf'].includes(ex.format)||!
     ['visible-page','loaded','selected-explicit','all-query-matches'].includes(ex.scope))
    e.push('invalid export type/scope');
 if(!Array.isArray(ex.columnIds)||!ex.columnIds.length||
    ex.columnIds.some(x=>!columns.has(x))||!uniq(ex.columnIds))e.push('unknown/duplicate export column');
 if(ex.scope==='all-query-matches'&&(!ex.selection||
    ex.selection.kind!=='query-all-except'))e.push('all-query export needs query selection');
 if(ex.scope==='selected-explicit'&&(!ex.selection||
    ex.selection.kind!=='explicit-ids'))e.push('explicit export needs explicit selection');
 if((ex.selection?.kind==='query-all-except')&&
    (ex.selection.queryFingerprint!==ex.queryFingerprint||
     ex.selection.confirmationRequired!==true))
    e.push('export query selection fingerprint mismatch');
 return e;
}
fail(dataFixtures.valid.length>0&&dataFixtures.invalid.length>=8,
     'Data semantic positive and negative fixtures missing');
for(const v of dataFixtures.valid){
 for(const msg of validateDataFixture(v.sample,dataFixtures.columns))
  errors.push('Valid data fixture '+v.id+' failed: '+msg);
}
if(process.argv.includes('--self-test')){
 for(const v of dataFixtures.invalid){
  const problems=validateDataFixture(v.sample,dataFixtures.columns);
  assert(problems.length>0, 'Invalid data fixture unexpectedly passed: '+v.id);
 }
 assert(hasCycle([...dataSpec.capabilities,{
   id:'intentional-cycle',dependsOn:['intentional-cycle']}]));
 assert(!sameSet(expectedDataCells,foundDataCells.slice(1)));
 console.log('PASS: Data Workspace negative fixtures ('+dataFixtures.invalid.length+
   ' malformed query/filter/selection/export cases, cycle and coverage drift)');
}


// Auth & Security UI specification checks only. NOT authentication or a browser/IdP test.
const authFlows=read('contracts/moonframe-auth-flow-contract-v0.1.json');
const authProviders=read('contracts/moonframe-auth-provider-capability-matrix-v0.1.json');
const authThreats=read('contracts/moonframe-auth-threat-model-v0.1.json');
const authCoverage=read('contracts/moonframe-auth-skin-coverage-v0.1.json');
const authEventSchema=read('schemas/moonframe-auth-safe-event.schema.json');
const authFixtures=read('contracts/fixtures/auth-security-v0.1.json');
const declaredFlowIds=authFlows.flows.map(x=>x.id);
const declaredStates=authFlows.states.map(x=>x.id);
const declaredActions=authFlows.events.map(x=>x.id);
const providerIds=authProviders.providers.map(x=>x.id);
const featureIds=authProviders.features.map(x=>x.id);
const authBlockIds=new Set(concreteBlocks.filter(x=>x.category==='authentication').map(x=>x.id));
const authPageIds=new Set(pageItems.filter(x=>x.category==='authentication').map(x=>x.id));
function authCoverageProblems(flowModel,providers,threatModel,visual){
 const e=[];
 const flowIds=flowModel.flows.map(x=>x.id);
 const statusIds=flowModel.states.map(x=>x.id);
 const actionIds=flowModel.events.map(x=>x.id);
 const knownFlows=new Set(flowIds);
 const knownStates=new Set(statusIds);
 if(!uniq(flowIds)||flowIds.length<50)e.push('missing or duplicate flow IDs');
 if(!uniq(statusIds)||statusIds.length<15)e.push('missing or duplicate auth states');
 if(!uniq(actionIds)||actionIds.length<10)e.push('missing or duplicate auth events');
 if(!sameSet(flowModel.flowGroups.map(x=>x.id),['entry','registration','recovery','mfa-passkey','account','organization','onboarding']))
  e.push('auth flow groups incomplete');
 for(const row of flowModel.flows){
  if(!authBlockIds.has(row.primaryBlockRef)||!authPageIds.has(row.primaryPageRef))e.push('unknown auth block/page ref '+row.id);
  if(!knownStates.has(row.initialState)||row.applicableStates.some(x=>!knownStates.has(x))||
     row.exceptionStates.some(x=>!knownStates.has(x)))e.push('unknown auth state '+row.id);
  if(row.readiness!=='specified-provisional-not-implemented'||
     row.statusEvidence.componentCode!==null||row.statusEvidence.providerIntegration!==null||
     row.statusEvidence.browserTest!==null||row.statusEvidence.manualATReview!==null)
    e.push('false implementation/evidence claim '+row.id);
  if(!isString(row.requiredCapability)||!isString(row.providerTrust)||!row.providerTrust.includes('No success'))
    e.push('missing trusted provider success precondition '+row.id);
 }
 for(const tr of flowModel.transitions){
  if(!knownStates.has(tr.from)||!knownStates.has(tr.to)||!isString(tr.event))
    e.push('transition missing state '+tr.event);
  if(tr.to==='success-confirmed'&&!tr.guard.includes('trusted integration'))
    e.push('false success transition guard');
 }
 if(providers.status!=='research-only-not-installed'||providers.providers.some(x=>x.installed!==false||x.implementation!=='not-implemented'))
  e.push('provider incorrectly marked installed');
 const providersSet=new Set(providers.providers.map(x=>x.id));
 const featureSet=new Set(providers.features.map(x=>x.id));
 if(!uniq([...providersSet])||!uniq([...featureSet])||providers.providers.length!==6||providers.features.length!==14)
  e.push('provider/feature ID drift');
 const cells=providers.cells.map(x=>x.providerId+'::'+x.featureId);
 const expected=providers.providers.flatMap(p=>providers.features.map(f=>p.id+'::'+f.id));
 if(!sameSet(cells,expected))e.push('provider matrix incomplete or duplicate');
 for(const c of providers.cells){
  if(!providers.statusVocabulary.includes(c.status)||!/^https:\/\/[^ ]+/.test(c.sourceUrl)||
     c.moonframeIntegration!=='none'||c.licensePlanVerified!==false)
    e.push('unverified/unsupported provider feature claimed usable '+c.providerId+'/'+c.featureId);
 }
 if(!uniq(threatModel.threats.map(x=>x.id))||threatModel.threats.length<18)
  e.push('threat model missing/duplicate');
 if(threatModel.status!=='threat-model-proposed-not-tested'||
    Object.values(threatModel.securityClaims).some(x=>x!==false))
  e.push('false auth security assurance claim');
 for(const x of threatModel.threats)
  if(!isString(x.owner)||!isString(x.backendControl)||!isString(x.acceptanceTest)||
     x.reviewStatus!=='specified-provisional-not-tested')e.push('threat lacks test/boundary '+x.id);
 if(!sameSet(visual.canonicalSkinIds,ids)||!sameSet(visual.modes,['light','dark'])||
    visual.systemExtraMode!==false||visual.scenes.length!==8)
  e.push('auth appearance/scene canonical drift');
 const expectedCells=ids.flatMap(id=>['light','dark'].flatMap(mode=>visual.scenes.map(s=>id+'::'+mode+'::'+s.id)));
 const actualCells=visual.cells.map(x=>x.skinId+'::'+x.mode+'::'+x.specimenId);
 if(!sameSet(expectedCells,actualCells)||visual.expectedCells!==expectedCells.length)
  e.push('auth appearance cells missing or duplicate');
 if(visual.counts.passed!==0||visual.counts.reviewed!==0||
    visual.cells.some(x=>x.status!=='not-rendered'||x.screenshot!==null||
       x.reviewer!==null||x.manualATReview!==null))
  e.push('false auth appearance review result');
 for(const scene of visual.scenes)if(!authPageIds.has(scene.templateId))
  e.push('auth scene missing template ref '+scene.id);
 return e;
}
for(const issue of authCoverageProblems(authFlows,authProviders,authThreats,authCoverage))
 errors.push('Auth contract: '+issue);
fail(auth.flowModelRef==='moonframe-auth-flow-contract-v0.1.json'&&
     auth.providerCapabilityRef==='moonframe-auth-provider-capability-matrix-v0.1.json'&&
     auth.threatModelRef==='moonframe-auth-threat-model-v0.1.json'&&
     auth.validatedFixtureRef==='fixtures/auth-security-v0.1.json'&&
     auth.providerIntegrationStatus==='none-installed'&&
     auth.implementationStatus==='not-implemented',
     'Auth canonical catalog authority/runtime boundary drift');
fail(authEventSchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
     authEventSchema.properties?.trustedResult&&authEventSchema.properties?.presentationState,
     'Auth safe-event Draft-2020-12 schema source invalid or missing');
function authSafeEventProblems(v) {
 const e=[];
 if(!v||typeof v!=='object')return ['invalid shared event object'];
 const permitted=new Set(['schemaVersion','flowId','actionId','interactionId','presentationState',
   'trustedResult','safeReferenceId','safeErrorCode','retryAfterSeconds','destinationId']);
 const keys=Object.keys(v);
 if(keys.some(k=>!permitted.has(k)))e.push('forbidden sensitive/unknown key');
 if(v.schemaVersion!==1||!declaredFlowIds.includes(v.flowId))e.push('unknown flow/schema version');
 if(!declaredActions.includes(v.actionId))e.push('unknown event action');
 if(!declaredStates.includes(v.presentationState))e.push('unknown state');
 if(!isString(v.interactionId)||v.interactionId.length>100)e.push('invalid correlation ID');
 if(v.presentationState==='success-confirmed'&&v.trustedResult!==true)e.push('untrusted success');
 if(typeof v.trustedResult!=='boolean')e.push('trustedResult invalid');
 if(!(v.safeReferenceId===null||
      (typeof v.safeReferenceId==='string'&&/^[A-Za-z0-9._:-]{0,100}$/.test(v.safeReferenceId))))
   e.push('unsafe reference');
 if('destinationId' in v&&(!/^[a-z][a-z0-9-]*$/.test(v.destinationId)))e.push('unsafe destination');
 if('retryAfterSeconds' in v&&(!Number.isInteger(v.retryAfterSeconds)||v.retryAfterSeconds<0))
   e.push('unsafe retry duration');
 return e;
}
for(const f of authFixtures.valid)
  for(const err of authSafeEventProblems(f.sample))errors.push('Valid auth fixture '+f.id+' failed: '+err);
fail(authFixtures.invalid.length>=10&&authFixtures.valid.length>=2,
     'Missing auth positive/negative fixture coverage');
if(process.argv.includes('--self-test')){
 for(const f of authFixtures.invalid)
  assert(authSafeEventProblems(f.sample).length>0,'Invalid auth fixture passed: '+f.id);
 const badFlow=structuredClone(authFlows);
 badFlow.flows[0].primaryBlockRef='block-missing-auth';
 assert(authCoverageProblems(badFlow,authProviders,authThreats,authCoverage).some(x=>x.includes('block/page')));
 const badProof=structuredClone(authProviders);
 badProof.cells[0].moonframeIntegration='installed';
 assert(authCoverageProblems(authFlows,badProof,authThreats,authCoverage).some(x=>x.includes('provider feature')));
 const badVisual=structuredClone(authCoverage);
 badVisual.cells[0].status='pass';
 assert(authCoverageProblems(authFlows,authProviders,authThreats,badVisual).some(x=>x.includes('appearance review')));
 const badGate=structuredClone(authFlows);
 badGate.transitions.find(x=>x.to==='success-confirmed').guard='click is success';
 assert(authCoverageProblems(badGate,authProviders,authThreats,authCoverage).some(x=>x.includes('false success')));
 console.log('PASS: auth contract negatives ('+authFixtures.invalid.length+' synthetic invalid safe events; missing refs, provider claims, visual evidence, trust gate)');
}


// Original Asset & Brand: metadata and proposed-brief integrity only.
// A green result does NOT license art, sanitize binary SVG, verify checksums,
// check asset file existence, run a generic JSON Schema engine, or prove originality.
const brandBriefs=read('contracts/moonframe-skin-asset-briefs-v0.1.json');
const assetRecordSchema=read('schemas/moonframe-asset-record.schema.json');
const assetFixtures=read('contracts/fixtures/original-asset-v0.1.json');
function brandAndAssetProblems(manifest,briefs){
 const e=[];
 const briefIds=briefs.briefs.map(x=>x.skinId);
 if(!sameSet(briefIds,ids))e.push('brand brief skin IDs missing/duplicate');
 if(briefs.ownerApproved!==false||briefs.status!=='briefs-specified-no-art-produced')
  e.push('brand hierarchy prematurely accepted or art claimed produced');
 if(briefs.brandModel!=='single-umbrella-fifteen-endorsed-editions-proposed')
  e.push('brand hierarchy unresolved unexpectedly');
 for(const b of briefs.briefs){
   if(!ids.includes(b.skinId))e.push('unknown skin in asset brief '+b.skinId);
   if(b.visualSpecRef!=='moonframe-skin-specifications-v1.0.json#'+b.skinId ||
      b.grammarRef!=='moonframe-skin-grammar-contract-v1.0.json#'+b.skinId)
       e.push('broken brief canon ref '+b.skinId);
   if(!isString(b.signatureMotif)||!isString(b.patternAndTexture?.artDirection)||
      !Array.isArray(b.minimumRequired)||b.minimumRequired.length<3||
      !Array.isArray(b.prohibitedOverlap?.nearestSkins)||
      !isString(b.fallback)||!isString(b.typography?.licenses)||
      !Array.isArray(b.accessibilityAndPerformanceRisks)||
      b.accessibilityAndPerformanceRisks.length<2)
       e.push('incomplete individual skin asset brief '+b.skinId);
   if(b.prohibitedOverlap.nearestSkins.some(x=>!ids.includes(x)||x===b.skinId))
       e.push('unknown/invalid anti-overlap neighbor '+b.skinId);
   if(b.status!=='specified-not-implemented'||b.implementationStatus!=='not-produced'||
      b.review.accepted!==false||b.review.reviewer!==null||
      b.review.artifactHash!==null||b.review.sourceFile!==null)
       e.push('fabricated visual/provenance review '+b.skinId);
 }
 if(manifest.brandHierarchy?.status!=='proposed-pending-owner-approval'||
   manifest.categoriesAreCandidatePoolNotRequiredPerSkin!==true||
   manifest.licenseGovernance?.repoCodeLicense!=='not-selected-no-LICENSE-present')
   e.push('brand/license approval claimed without owner decision');
 if(manifest.plannedPerSkin.length!==15||
    !sameSet(manifest.plannedPerSkin.map(x=>x.skinId),ids)||
    manifest.plannedPerSkin.some(x=>x.assets.length!==0||x.status!=='not-produced')||
    manifest.approvedAssets?.length!==0)
   e.push('asset inventory silently claims produced/approved art');
 if(manifest.approvalWorkflow?.approvalsCompleted.length!==0||
    manifest.approvalWorkflow?.evidenceCount!==0)
   e.push('approval evidence fabricated');
 if(manifest.recordSchemaRef!=='../schemas/moonframe-asset-record.schema.json'||
    manifest.designBriefRef!=='moonframe-skin-asset-briefs-v0.1.json')
   e.push('asset schema/brief manifest link drift');
 return e;
}
for(const issue of brandAndAssetProblems(assets,brandBriefs))
 errors.push('Asset/brand: '+issue);
fail(assetRecordSchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
 assetRecordSchema.properties?.source&&assetRecordSchema.properties?.license&&
 assetRecordSchema.properties?.status&&
 Array.isArray(assetRecordSchema.allOf)&&assetRecordSchema.allOf.length>=5,
 'Proposed conditional Draft 2020-12 asset metadata schema invalid/missing');
// Tiny semantic proof for example-only/planned records; not a full schema engine.
function assetRecordIssues(x){
 const e=[];
 if(!x||typeof x!=='object')return ['missing asset record'];
 const needed=['schemaVersion','recordVersion','assetId','assetType','brandScope',
  'skinId','purpose','status','provenanceType','license','source','exports',
  'accessibility','review','owner','fallbackAssetId'];
 for(const k of needed)if(!(k in x))e.push('missing field '+k);
 if(x.schemaVersion!=='0.1.0'||typeof x.assetId!=='string'||
   !/^mf\.(brand|skin|icon|illustration|pattern|preview|font|sound)\.[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(x.assetId))
     e.push('invalid semantic asset ID');
 if(x.skinId!==null&&!ids.includes(x.skinId))e.push('unknown skin ID');
 if(!assetRecordSchema.properties?.assetType?.enum?.includes(x.assetType))e.push('invalid asset type');
 if(!assetRecordSchema.properties?.status?.enum?.includes(x.status))e.push('invalid lifecycle status');
 if(!assetRecordSchema.properties?.accessibility?.properties?.role?.enum?.includes(x.accessibility?.role))
     e.push('invalid accessibility role');
 const planned=['planned','example-only'].includes(x.status);
 if(planned){
  if(x.source!==null||!Array.isArray(x.exports)||x.exports.length!==0)
    e.push('planned record cannot claim source or exports');
  if(x.license?.distributionApproved!==false||
    x.review?.rightsCleared!==false||x.review?.visualAccepted!==false||
    x.review?.approvedBy!==null||x.review?.approvedAt!==null)
    e.push('planned record cannot claim rights or visual review');
 }else{
  if(!x.source||typeof x.source.path!=='string'||
    x.source.path.startsWith('/')||x.source.path.split('/').includes('..')||
    !/^[0-9a-f]{64}$/.test(x.source.sha256||''))
     e.push('nonplanned source missing or unsafe path/hash');
 }
 if(['accepted','published'].includes(x.status)){
  if(x.license?.distributionApproved!==true||!isString(x.license?.licenseId)||
    !isString(x.license?.evidenceUrl)||!isString(x.license?.reviewer)||
    x.review?.rightsCleared!==true||x.review?.visualAccepted!==true||
    !isString(x.review?.approvedBy)||!isString(x.review?.approvedAt)||
    x.review?.securityReviewPassed!==true||x.review?.sourceIntegrityPassed!==true||
    !Array.isArray(x.review?.evidence)||x.review.evidence.length===0||
    !Array.isArray(x.exports)||x.exports.length===0)
      e.push('published without real rights, sources and evidence');
 }
 return e;
}
fail(assetFixtures.status==='synthetic-examples-only'&&assetFixtures.valid.length>0&&
 assetFixtures.invalid.length>=10,'Asset metadata fixtures missing');
for(const v of assetFixtures.valid)
 for(const err of assetRecordIssues(v.sample))errors.push('Valid asset fixture '+v.id+' failed: '+err);
if(process.argv.includes('--self-test')){
 for(const v of assetFixtures.invalid){
  const err=assetRecordIssues(v.sample);
  assert(err.length>0,'Invalid asset record unexpectedly accepted '+v.id);
 }
 const fake=structuredClone(brandBriefs);
 fake.briefs[0].review.accepted=true;
 assert(brandAndAssetProblems(assets,fake).some(x=>x.includes('fabricated visual')));
 const wrong=structuredClone(brandBriefs);
 wrong.briefs.pop();
 assert(brandAndAssetProblems(assets,wrong).some(x=>x.includes('missing/duplicate')));
 const fakeAssets=structuredClone(assets);
 fakeAssets.approvedAssets.push({assetId:'fake'});
 assert(brandAndAssetProblems(fakeAssets,brandBriefs).some(x=>x.includes('claims produced')));
 assert(sfx.producedAssets.length===0&&sfx.defaultEnabled===false&&
  sfx.autoplayOnLoad===false&&sfx.requiresExplicitConsent===true,
  'Audio cannot be generated/auto-enabled by specification task');
 console.log('PASS: brand/asset fixture negatives ('+assetFixtures.invalid.length+
  ' invalid metadata and false review/skin/inventory claims; SFX safe defaults)');
}


const assetQACoverage=read('contracts/moonframe-asset-qa-coverage-v0.1.json');
function assetCoverageIssues(a){
 const e=[];
 if(!sameSet(a.modes,['light','dark'])||a.systemIsThirdAppearance!==false||
    a.skinCount!==15)e.push('asset QA mode/skin drift');
 const ca=a.cases.map(x=>x.id);
 if(!uniq(ca)||ca.length!==4)e.push('asset QA cases changed without review');
 const expected=ids.flatMap(id=>['light','dark'].flatMap(mode=>ca.map(x=>id+'::'+mode+'::'+x)));
 const got=a.coverage.map(x=>x.skinId+'::'+x.mode+'::'+x.caseId);
 if(a.expectedCoverage!==expected.length||!sameSet(expected,got))
   e.push('asset QA missing/duplicate appearance slots');
 if(a.status!=='planned-no-rendered-art'||a.counts.rendered!==0||
    a.counts.passed!==0||a.counts.reviewed!==0||
    a.coverage.some(x=>x.status!=='not-rendered'||x.renderScreenshot!==null||
      x.licenseReview!==null||x.reviewer!==null||x.reviewedAt!==null||
      x.contrastEvidence!==null||x.verdict!==null||x.sourceHash!==null))
    e.push('asset QA false proof or pass without files and review');
 if(a.pairwiseReviewsExpected!==105||a.pairwiseReviewsApproved!==0)
    e.push('asset grammar pair review status fabricated');
 return e;
}
for(const e of assetCoverageIssues(assetQACoverage))errors.push('Asset coverage: '+e);
if(process.argv.includes('--self-test')){
 const missing=structuredClone(assetQACoverage);
 missing.coverage.pop();
 assert(assetCoverageIssues(missing).some(x=>x.includes('missing/duplicate')));
 const falsePass=structuredClone(assetQACoverage);
 falsePass.coverage[0].status='pass';
 assert(assetCoverageIssues(falsePass).some(x=>x.includes('false proof')));
 console.log('PASS: asset QA appearance matrix negative tests (120 pending slots; missing/premature-review rejected)');
}


// Motion, Interaction & SFX: DOCS-ONLY contracts. No runtime animation/audio/browser tests.
const motion=read('contracts/moonframe-motion-recipes-v0.1.json');
const motionInter=read('contracts/moonframe-motion-interactions-v0.1.json');
const motionSkins=read('contracts/moonframe-motion-skin-matrix-v0.1.json');
const motionQA=read('contracts/moonframe-motion-qa-coverage-v0.1.json');
const motionSchema=read('schemas/moonframe-motion-recipe.schema.json');
const motionFixtures=read('contracts/fixtures/motion-interaction-sfx-v0.1.json');
const canonComponentIds=new Set(components.components.map(c=>c.id));
const motionIds=motion.recipes.map(x=>x.id), motionSet=new Set(motionIds);
const canonSfxIds=sfx.events.map(x=>x.id);
const canonicalMotions=Object.keys(dict.tokenTypeProposals).filter(x=>x.startsWith('motion.'));
const motionCandidateIds=(dict.motionUsePolicy?.candidateNamesNotApproved||[]).map(x=>x.id);
function motionRecipeProblems(x){
 const e=[];
 if(!x||typeof x!=='object')return ['missing motion record'];
 if(!/^mot\.[a-z]+(?:-[a-z]+)*$/.test(x.id||''))e.push('invalid recipe id');
 if(!motion.purposes.includes(x.purpose))e.push('unknown purpose');
 if(!Array.isArray(x.componentIds)||!x.componentIds.length||
    !uniq(x.componentIds)||x.componentIds.some(id=>!canonComponentIds.has(id)))
   e.push('unknown/duplicate component reference');
 if(!isString(x.trigger?.semanticFrom)||!isString(x.trigger?.semanticTo)||
    !isString(x.trigger?.authority)||!isString(x.visual?.proposal))
   e.push('missing trigger or visual semantic state');
 if(!Array.isArray(x.tokenRefs)||!x.tokenRefs.length||
    !uniq(x.tokenRefs)||x.tokenRefs.some(id=>!canonicalMotions.includes(id)))
   e.push('unknown approved canonical motion token reference');
 if(!Array.isArray(x.candidateTokenRefs)||
    x.candidateTokenRefs.some(id=>!motionCandidateIds.includes(id)))
   e.push('unknown unapproved candidate motion token');
 if(!motion.reducedStrategyVocabulary.includes(x.reducedMotion?.strategy)||
    !isString(x.reducedMotion?.equivalent))
   e.push('missing/invalid reduced motion');
 if(x.reducedMotion?.strategy==='essential'&&
    x.reducedMotion?.requiresHumanExceptionApproval!==true)
   e.push('unreviewed essential movement');
 if(!isString(x.interruption?.onCancel)||!isString(x.interruption?.onUnmount)||
    !isString(x.interruption?.onPreferenceChange)||
    !isString(x.interruption?.onHiddenTab)||
    x.interruption?.mustNotWaitForAnimation!==true)
   e.push('missing safe interruption/cancellation policy');
 if(x.continuous!==false||x.autoStarts!==false)e.push('unsafe continuous/auto-start animation');
 if(!isString(x.noMotionNoAudio)||!isString(x.focusAndAria))
   e.push('missing no-motion / focus / ARIA equivalent');
 if(x.audio?.candidateEventId!==null&&!canonSfxIds.includes(x.audio?.candidateEventId))
   e.push('unknown SFX event mapped');
 if(x.audio?.neverOnlyFeedback!==true ||
    !['none-by-default','optional-with-explicit-consumer-opt-in'].includes(x.audio?.eligibility))
   e.push('invalid sound optionality');
 if(x.skinRef!=='moonframe-motion-skin-matrix-v0.1.json')e.push('unknown skin matrix');
 if(x.readiness!=='specified-not-implemented'||
    x.evidence?.browser!==null||x.evidence?.manualAT!==null||
    x.evidence?.reviewer!==null||x.evidence?.screenshot!==null)
   e.push('false implemented/tested/visual approval claim');
 if(!Array.isArray(x.testsRequired)||x.testsRequired.length<4 ||
    x.performance?.benchmark!=='not-run')
   e.push('incomplete test or fake benchmark');
 return e;
}
function motionSystemProblems(rec,inter,skins,qa,sound){
 const e=[];
 if(rec.status!=='specified-not-implemented'||rec.recipes.length<20||
    !uniq(rec.recipes.map(x=>x.id)))e.push('motion ID/count/status drift');
 for(const r of rec.recipes)for(const v of motionRecipeProblems(r))
   e.push('recipe '+r.id+': '+v);
 if(!uniq(inter.patterns.map(x=>x.id))||inter.patterns.length<15||
    inter.status!=='specified-not-implemented')
   e.push('interaction pattern IDs/status drift');
 for(const i of inter.patterns){
  if(!Array.isArray(i.recipeRefs)||!i.recipeRefs.length||
     i.recipeRefs.some(id=>!motionSet.has(id)))e.push('unknown interaction recipe '+i.id);
  if(!Array.isArray(i.componentIds)||i.componentIds.some(id=>!canonComponentIds.has(id)))
     e.push('unknown interaction component '+i.id);
  if(i.readiness!=='specified-not-implemented'||i.evidence!==null||
     !isString(i.keyboardFocusAndAria) && !isString(i.semanticsAndKeyboard))
     e.push('false interaction implementation or missing accessibility '+i.id);
 }
 if(!sameSet(skins.skins.map(s=>s.skinId),ids)||skins.status!=='directions-specified-not-rendered'||
    skins.count?.reviewedSkins!==0||skins.count?.effectiveAppearances!==30)
   e.push('motion skin ID/review/appearance drift');
 for(const s of skins.skins){
  if(s.grammarRef!=='moonframe-skin-grammar-contract-v1.0.json#'+s.skinId||
     s.specRef!=='moonframe-skin-specifications-v1.0.json#'+s.skinId||
     s.permittedRecipeRefs.some(x=>!motionSet.has(x))||
     !isString(s.reducedMotionFallback)||!isString(s.prohibitedAnimation)||
     s.review?.verdict!=='not-reviewed'||s.review?.reviewer!==null||
     s.review?.visualEvidence?.length!==0||s.tokenValuesApproved!==false||
     s.globalMuteAlwaysWins!==true||s.implementation!=='not-implemented')
    e.push('invalid/false-reviewed skin motion direction '+s.skinId);
 }
 if(!sameSet(qa.modes,['light','dark'])||qa.systemIsThirdMode!==false||
    qa.skinCount!==15||qa.scenarios.length!==6||
    !uniq(qa.scenarios.map(x=>x.id)))
   e.push('motion QA scenario/mode drift');
 const expected=ids.flatMap(id=>['light','dark'].flatMap(mode=>
    qa.scenarios.map(s=>id+'::'+mode+'::'+s.id)));
 const actual=qa.cells.map(x=>x.skinId+'::'+x.mode+'::'+x.caseId);
 if(!sameSet(expected,actual)||qa.expectedCells!==expected.length)
   e.push('missing/duplicate motion appearance cases');
 if(qa.status!=='planned-no-visual-or-audio-evidence'||
    qa.counts.rendered!==0||qa.counts.passed!==0||qa.counts.reviewed!==0||
    qa.pairwiseExpected!==105||qa.pairwisePassed!==0||
    qa.cells.some(x=>x.status!=='not-rendered'||x.screenshot!==null||
      x.recording!==null||x.manualAT!==null||x.reviewer!==null||
      x.reviewedAt!==null||x.verdict!==null))
    e.push('false motion QA/visual/AT review claim');
 for(const s of qa.scenarios)
   if(!canonComponentIds.has(s.componentId)||!motionSet.has(s.recipeId))
    e.push('unknown motion QA case reference '+s.id);
 if(sound.events.length!==6||
    !sameSet(sound.events.map(x=>x.id),['success','warning','error','notification','confirmation','quest-reward'])||
    !sound.eventIdsStableNoRename||sound.producedAssets.length!==0||
    sound.defaultEnabled!==false||sound.requiresExplicitConsent!==true||
    sound.autoplayOnLoad!==false||sound.userPreferences?.mute!==true)
   e.push('audio semantic event or opt-in default drift');
 for(const x of sound.events){
  if(x.defaultEnabled!==false||x.requiresUserGesture!==true||
     !isString(x.visualEquivalent)||!isString(x.assistiveTechnologyEquivalent)||
     !isString(x.playbackPolicy)||x.status!=='specified-not-implemented'||
     x.proof?.mediaFile!==null||x.proof?.audioTest!==null||
     x.proof?.licenseApproval!==null)
    e.push('unsafe/unproven SFX event '+x.id);
 }
 if(sound.playbackDecision?.unknownEvent!=='silent-no-op'||
    sound.playbackDecision?.browserBlocked!=='silent-no-op'||
    sound.playbackDecision?.missingOrUnsupportedAsset!=='silent-no-op'||
    sound.skinSoundProfiles?.approvedProfiles.length!==0)
   e.push('sound fallback or approved profile fabricated');
 if(dict.motionUsePolicy?.status!=='proposed-no-final-numeric-values'||
    !sameSet(dict.motionUsePolicy.canonicalExistingNames,
     ['motion.duration.fast','motion.duration.normal','motion.duration.slow',
      'motion.easing.standard','motion.distance.small']))
   e.push('historical motion token IDs unexpectedly modified');
 return e;
}
for(const x of motionSystemProblems(motion,motionInter,motionSkins,motionQA,sfx))
 errors.push('Motion/SFX: '+x);
fail(motionSchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
     motionSchema.properties?.reducedMotion&&motionSchema.properties?.interruption&&
     motionSchema.properties?.readiness,'Motion recipe schema missing structural fields');
fail(motionFixtures.valid.length>=1&&motionFixtures.invalid.length>=10,
     'Motion negative fixtures missing');
for(const f of motionFixtures.valid)
 for(const problem of motionRecipeProblems(f.recipe))
  errors.push('Valid motion fixture '+f.id+' failed: '+problem);
if(process.argv.includes('--self-test')){
 for(const f of motionFixtures.invalid)
  assert(motionRecipeProblems(f.recipe).length>0,
   'Invalid motion recipe fixture unexpectedly accepted '+f.id);
 const badRefs=structuredClone(motionInter);
 badRefs.patterns[0].recipeRefs=['mot.not-in-contract'];
 assert(motionSystemProblems(motion,badRefs,motionSkins,motionQA,sfx).some(x=>x.includes('unknown interaction recipe')));
 const wrongSkin=structuredClone(motionSkins);
 wrongSkin.skins[0].review.verdict='pass';
 assert(motionSystemProblems(motion,motionInter,wrongSkin,motionQA,sfx).some(x=>x.includes('false-reviewed')));
 const wrongSound=structuredClone(sfx);
 wrongSound.defaultEnabled=true;
 assert(motionSystemProblems(motion,motionInter,motionSkins,motionQA,wrongSound).some(x=>x.includes('audio semantic')));
 const badQa=structuredClone(motionQA);
 badQa.cells[0].status='pass';
 assert(motionSystemProblems(motion,motionInter,motionSkins,badQa,sfx).some(x=>x.includes('false motion QA')));
 console.log('PASS: motion/interaction/SFX negative fixtures ('+motionFixtures.invalid.length+
  ' invalid recipes, refs, fake skin/visual approvals, autoplay sound); 180 pending cases');
}


// Accessibility/Visual QA SPECIFICATION integrity (no DOM/axe/Playwright/AT actually run).
const a11yReq=read('contracts/moonframe-accessibility-requirements-v0.1.json');
const a11yProfiles=read('contracts/moonframe-component-qa-profiles-v0.1.json');
const a11yVisual=read('contracts/moonframe-visual-baseline-matrix-v0.1.json');
const a11yLedger=read('contracts/moonframe-accessibility-qa-evidence-v0.1.json');
const a11ySchema=read('schemas/moonframe-accessibility-qa-record.schema.json');
const a11yFixtures=read('contracts/fixtures/accessibility-visual-qa-v0.1.json');
const a11yCmpSet=new Set(components.components.map(x=>x.id));
const a11yReqSet=new Set(a11yReq.requirements.map(x=>x.id));
const a11yStates=read('contracts/moonframe-component-state-matrix-v0.1.json');
const a11yKeyboards=read('contracts/moonframe-keyboard-interaction-matrix-v0.1.json');
const a11yPages=read('contracts/moonframe-page-template-manifest-v0.1.json');
const a11yCmpState=new Map(a11yStates.components.map(x=>[x.componentId,x]));
const a11yCmpKey=new Map(a11yKeyboards.componentMappings.map(x=>[x.componentId,x]));
const a11yBlockSet=new Set(blocks.blocks.map(x=>x.id));
const a11yPageSet=new Set(a11yPages.templates.map(x=>x.id));
const a11yVisualCases=new Set(a11yVisual.specimens.map(x=>x.id));
const a11yValidStatus=new Set(a11yLedger.statuses);
function a11yEvidenceProblems(r) {
 const e=[];
 if(!r||typeof r!=='object')return ['missing a11y record'];
 if(!/^avqa\.[a-z][a-z0-9-]+$/.test(r.recordId||''))e.push('invalid QA ID');
 if(!['observation','exception','defect'].includes(r.kind))e.push('invalid QA record kind');
 if(!a11yValidStatus.has(r.status))e.push('invalid QA evidence status');
 if(!a11yReqSet.has(r.criterionRef))e.push('unknown WCAG criterion');
 if(r.scope?.componentId!==null&&!a11yCmpSet.has(r.scope?.componentId))
   e.push('unknown component');
 if(r.scope?.skinId!==null&&!ids.includes(r.scope?.skinId))e.push('unknown skin');
 if(r.scope?.mode!==null&&!['light','dark'].includes(r.scope?.mode))
   e.push('invalid effective appearance');
 if(r.scope?.specimenId!==null&&!a11yVisualCases.has(r.scope?.specimenId))
   e.push('unknown visual specimen');
 const evidence=r.evidence,review=r.review,ex=r.exception;
 if(!evidence||!review||!ex)return [...e,'required evidence/review/exception missing'];
 const planned=['specified','not-assessed'].includes(r.status);
 if(planned&&(evidence.commitSHA!==null||evidence.testRunUrl!==null||
   evidence.capturePath!==null||evidence.baselineHash!==null||
   evidence.manualNotes!==null||evidence.atLog!==null||
   evidence.environment!==null||review.reviewer!==null||
   review.reviewedAt!==null||review.verdict!==null))
   e.push('fabricated evidence in unassessed specification');
 if(r.status==='automated-check-passed'&&
   (!/^[a-f0-9]{40}$/.test(evidence.commitSHA||'')||
    !isString(evidence.testRunUrl)||!evidence.environment))
   e.push('automated pass lacks concrete commit/run/environment');
 if(['manual-review-passed','assistive-tech-reviewed','verified-for-release-scope'].includes(r.status)&&
   (!isString(review.reviewer)||!isString(review.reviewedAt)||
    review.verdict!=='pass'||!isString(evidence.manualNotes)||
    !/^[a-f0-9]{40}$/.test(evidence.commitSHA||'')||!evidence.environment))
   e.push('manual pass lacks verified reviewer/date/context');
 if(r.status==='assistive-tech-reviewed'&&!isString(evidence.atLog))
   e.push('missing real AT report');
 if(r.status==='verified-for-release-scope'&&
   (!isString(evidence.testRunUrl)||!isString(evidence.atLog)||!isString(evidence.capturePath)))
   e.push('release claim lacks combined AT/browser/visual evidence');
 if(r.status==='waived-with-rationale'&&
   (r.kind!=='exception'||!isString(ex.issueUrl)||!isString(ex.owner)||
    !isString(ex.rationale)||!isString(ex.userImpact)||!isString(ex.mitigation)||
    !isString(ex.expiry)||!isString(ex.approvedBy)||!isString(ex.scopeBoundary)))
   e.push('waiver has no owner/impact/expiry/approval');
 return e;
}
function a11ySystemProblems(req,profiles,visual,ledger) {
 const e=[];
 const criteria=req.requirements||[];
 if(req.standard?.levelTarget!=='AA-proposed-not-conformant'||
   req.actFormat?.status!=='W3C-Recommendation-2026-02-05'||
   req.status!=='requirements-specified-not-tested'||req.expectedRequirementCount!==51||
   !uniq(criteria.map(x=>x.id))||criteria.length!==51)
   e.push('WCAG 2.2 target/criteria count/ACT metadata drift');
 const levels={A:0,AA:0,AAA:0};
 for(const x of criteria){
   if(!/^wcag-[0-9]\.[0-9]\.[0-9]+$/.test(x.id||'')||
      x.id!=='wcag-'+x.criterion||
      !['A','AA','AAA'].includes(x.level)||
      x.status!=='specified-not-tested'||!isString(x.procedure)||
      !Array.isArray(x.methods)||!x.methods.length||
      x.review?.testRun!==null||x.review?.reviewer!==null||
      x.review?.manualEvidence!==null||x.review?.atEvidence!==null)
      e.push('malformed or falsely-reviewed WCAG criterion '+x.id);
   if(levels[x.level]!==undefined)levels[x.level]++;
 }
 if(levels.A!==27||levels.AA!==22||levels.AAA!==2||
    req.requirements.find(x=>x.criterion==='2.4.13')?.level!=='AAA'||
    req.requirements.find(x=>x.criterion==='2.4.11')?.level!=='AA'||
    req.requirements.find(x=>x.criterion==='2.5.8')?.level!=='AA'||
    req.requirements.find(x=>x.criterion==='2.5.7')?.level!=='AA'||
    req.requirements.find(x=>x.criterion==='3.3.8')?.level!=='AA')
   e.push('WCAG priority Level A/AA/AAA inaccurate');
 if(profiles.status!=='profiles-specified-no-component-tests'||
    !sameSet(profiles.profiles.map(x=>x.componentId),[...a11yCmpSet])||
    profiles.counts.profiles!==151||profiles.counts.withEvidence!==0)
   e.push('151 component QA profile missing/duplicated/false tested');
 for(const p of profiles.profiles){
   const s=a11yCmpState.get(p.componentId),kb=a11yCmpKey.get(p.componentId);
   if(!s||!kb||p.keyboardPatternId!==kb.patternId||
      !sameSet(p.applicableStateIds,s.applicable)||!p.criteriaRefs.length||
      p.criteriaRefs.some(x=>!a11yReqSet.has(x))||
      p.status!=='specified-not-tested'||
      Object.values(p.evidence||{}).some(x=>x!==null))
      e.push('QA component join/evidence drift '+p.componentId);
 }
 const caseIds=visual.specimens.map(x=>x.id);
 if(!uniq(caseIds)||caseIds.length!==9||
   !sameSet(visual.appearanceModes,['light','dark'])||
   visual.systemIsAdditionalAppearance!==false||
   visual.status!=='planned-no-screenshots-or-approvals')
   e.push('visual suite/mode/status drift');
 const exp=ids.flatMap(id=>['light','dark'].flatMap(mode=>
   caseIds.map(caseId=>id+'::'+mode+'::'+caseId)));
 const actual=visual.cells.map(c=>c.skinId+'::'+c.mode+'::'+c.specimenId);
 if(!sameSet(exp,actual)||visual.count.plannedCells!==270||
   visual.count.baselineCaptured!==0||visual.count.rendered!==0||
   visual.count.manualApproved!==0||visual.count.automatedPass!==0)
   e.push('visual missing/duplicate cells or invented captures');
 for(const x of visual.specimens){
   if(!a11yPageSet.has(x.canonicalTemplateId)||
      (x.canonicalBlockId!==null&&!a11yBlockSet.has(x.canonicalBlockId))||
      x.componentIds.some(id=>!a11yCmpSet.has(id))||
      x.requiredStates.some(id=>!a11yStates.stateDimensions.some(s=>s.id===id))||
      x.status!=='specified-not-rendered')
      e.push('visual specimen missing canonical ref/state '+x.id);
 }
 for(const c of visual.cells){
  if(c.status!=='not-rendered'||c.screenshotPath!==null||
     c.baselineHash!==null||c.diffPath!==null||c.axeEvidence!==null||
     c.keyboardEvidence!==null||c.manualATEvidence!==null||
     c.forcedColorsEvidence!==null||c.reviewedAt!==null||
     c.reviewer!==null||c.approval!==null||c.releaseRef!==null||
     c.captureEnv.os!==null||c.captureEnv.browser!==null||
     c.captureEnv.containerDigest!==null)
     e.push('fabricated visual/AT/screenshot baseline '+c.skinId+'/'+c.mode+'/'+c.specimenId);
 }
 if(ledger.status!=='no-rendered-ui-no-test-results'||
    ledger.records.length!==0||ledger.exceptions.length!==0||ledger.defects.length!==0||
    Object.values(ledger.counts).some(v=>v!==0))
    e.push('evidence ledger falsely claims QA/release or waiver');
 if(!a11ySchema.properties?.review||!a11ySchema.properties?.exception) // scope/JSON-schema structure read globally
   e.push('missing QA conditional schema');
 return e;
}
function evidenceStageProblems(tokenPlan,skinGrammar,visual,ledger){
 const e=[];
 if(tokenPlan.status!=='source-values-not-created'||tokenPlan.coverageSlots.length!==30||
    tokenPlan.coverageSlots.some(x=>x.status!=='pending-values-and-contrast-review'||x.valuesSource!==null))
   e.push('token specification/pending-value state falsely advanced');
 if(skinGrammar.status!=='specified-not-implemented'||skinGrammar.pairwiseReviewMatrix.length!==105||
    skinGrammar.pairwiseReviewMatrix.some(x=>x.status!=='not-reviewed'))
   e.push('skin specification/review state falsely advanced');
 if(visual.status!=='planned-no-screenshots-or-approvals'||visual.count.plannedCells!==270||
    visual.count.rendered!==0||visual.count.manualApproved!==0||visual.cells.some(x=>x.status!=='not-rendered'))
   e.push('visual test/review state falsely advanced');
 if(ledger.status!=='no-rendered-ui-no-test-results'||ledger.records.length||ledger.exceptions.length||
    ledger.defects.length||Object.values(ledger.counts).some(x=>x!==0))
   e.push('QA test/review evidence falsely claimed');
 return e;
}
for(const e of a11ySystemProblems(a11yReq,a11yProfiles,a11yVisual,a11yLedger))
 errors.push('Accessibility/Visual QA: '+e);
const evidenceStageAudit=evidenceStageProblems(source,grammar,a11yVisual,a11yLedger);
for(const e of evidenceStageAudit) errors.push('Evidence stage: '+e);
fail(a11ySchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
    Array.isArray(a11ySchema.allOf)&&a11ySchema.allOf.length>=5&&
    a11ySchema.properties?.evidence&&a11ySchema.properties?.scope,
    'Proposed Draft 2020-12 QA evidence schema incomplete');
fail(a11yFixtures.valid.length>=1&&a11yFixtures.invalid.length>=14,
    'Accessibility negative evidence fixtures missing');
for(const f of a11yFixtures.valid)
 for(const problem of a11yEvidenceProblems(f.record))
   errors.push('Valid a11y fixture '+f.id+': '+problem);
if(process.argv.includes('--self-test')){
 assert.equal(evidenceStageAudit.length,0,'Four representative contracts must retain distinct maturity dimensions');
 const fakeTokenStage=structuredClone(source);fakeTokenStage.coverageSlots[0].valuesSource='claimed-production-value';
 assert(evidenceStageProblems(fakeTokenStage,grammar,a11yVisual,a11yLedger).some(x=>x.includes('token specification')));
 const fakeSkinReview=structuredClone(grammar);fakeSkinReview.pairwiseReviewMatrix[0].status='pass';
 assert(evidenceStageProblems(source,fakeSkinReview,a11yVisual,a11yLedger).some(x=>x.includes('skin specification')));
 const fakeRendered=structuredClone(a11yVisual);fakeRendered.cells[0].status='rendered';
 assert(evidenceStageProblems(source,grammar,fakeRendered,a11yLedger).some(x=>x.includes('visual test')));
 const fakeTestEvidence=structuredClone(a11yLedger);fakeTestEvidence.counts.automatedAxePasses=1;
 assert(evidenceStageProblems(source,grammar,a11yVisual,fakeTestEvidence).some(x=>x.includes('QA test/review')));
 console.log('PASS: evidence-stage crosswalk (token, skin-pair, visual, QA ledger); no inferred implementation/test/review/release pass');
}
if(process.argv.includes('--self-test')){
 for(const f of a11yFixtures.invalid)
   assert(a11yEvidenceProblems(f.record).length>0,
    'Invalid a11y evidence fixture unexpectedly accepted '+f.id);
 const bad=structuredClone(a11yVisual);bad.cells[0].status='manual-approved';
 assert(a11ySystemProblems(a11yReq,a11yProfiles,bad,a11yLedger)
   .some(x=>x.includes('fabricated visual')));
 const incomplete=structuredClone(a11yVisual);incomplete.cells.pop();
 assert(a11ySystemProblems(a11yReq,a11yProfiles,incomplete,a11yLedger)
   .some(x=>x.includes('visual missing/duplicate')));
 const fakeReq=structuredClone(a11yReq);
 fakeReq.requirements.find(x=>x.criterion==='2.4.13').level='AA';
 assert(a11ySystemProblems(fakeReq,a11yProfiles,a11yVisual,a11yLedger)
   .some(x=>x.includes('priority Level')));
 const corrupt=structuredClone(a11yProfiles);
 corrupt.profiles[0].keyboardPatternId='nonexistent';
 assert(a11ySystemProblems(a11yReq,corrupt,a11yVisual,a11yLedger)
   .some(x=>x.includes('QA component join')));
 const fabricated=structuredClone(a11yLedger);fabricated.counts.manualATReviews=1;
 assert(a11ySystemProblems(a11yReq,a11yProfiles,a11yVisual,fabricated)
   .some(x=>x.includes('falsely claims')));
 console.log('PASS: accessibility/visual QA negative fixtures ('+
   a11yFixtures.invalid.length+
   ' invalid evidence+waivers; 51 WCAG, 151 component profiles, 270 unrendered slots)');
}


// Moonframe package/DX SPEC-ONLY metadata. Not npm package, build, tarball, registry, release or consumer tests.
const packageArch=read('contracts/moonframe-package-architecture-v0.1.json');
const packageDX=read('contracts/moonframe-developer-experience-v0.1.json');
const packageSchema=read('schemas/moonframe-package-architecture.schema.json');
const packageFixtures=read('contracts/fixtures/package-architecture-dx-v0.1.json');
const knownPublicExports=['.','./theme','./styles.css','./tokens.css','./tailwind.css','./components/button'];
function packageProblems(p){
 const e=[];
 if(!p||typeof p!=='object')return ['missing package record'];
 if(p.schemaVersion!=='0.1.0'||p.contractId!=='MF-PKG-ARCH-001'||
    p.status!=='specified-candidates-not-implemented')
   e.push('bad package schema version/status');
 if(p.ownerDecisionIssue!=='https://github.com/bjo163/moonframe/issues/4'||
    p.auditedRepository!=='bjo163/moonframe')e.push('orphan package decision');
 if(p.skinAppearance?.expectedSkinCount!==15||
    p.skinAppearance?.expectedResolvedAppearances!==30||
    !sameSet(p.skinAppearance?.modeOptions||[],['light','dark'])||
    p.skinAppearance?.systemIsPreferenceNotThirdMode!==true)
   e.push('skin/mode baseline changed');
 if(!['one-runtime-package-first','small-npm-workspace','hybrid-runtime-plus-source-registry','monorepo-multiple-apps-and-packages'].includes(p.topology?.preferred))
   e.push('unknown topology');
 if(p.topology?.decisionStatus!=='proposed-open'||
    p.topology?.workspaceManager!=='unselected'||p.topology?.buildTool!=='unselected'||
    p.topology?.nodeVersionRange!==null)
   e.push('unreviewed tooling or peer version claimed');
 if(p.distribution?.publicationStatus!=='never-published'||
    p.distribution?.publishedVersions?.length!==0||
    p.distribution?.registryItems?.length!==0||
    p.distribution?.audioPacks!==0||p.distribution?.customCLI!=='not-authorized')
   e.push('false published package/registry/asset');
 if(!Array.isArray(p.packages)||p.packages.length!==1||
    !uniq(p.packages.map(x=>x.id))||p.packages[0]?.id!=='ui-core')
   e.push('spurious package topology/split');
 for(const x of p.packages||[]){
   if(x.nameCandidate!=='@moonframe/ui'||x.nameStatus!=='proposed-unverified'||
      x.packageMetadataStatus!=='no-package-json-no-package-published'||
      x.version!==null||x.license!==null||x.engines!==null||
      x.reactPeerVersion!==null||x.reactDomPeerVersion!==null||
      x.typescriptSupportRange!==null||x.nodeSupportRange!==null||
      x.browserSupportRange!==null||x.packageJsonPath!==null||
      x.publishConfig!==null||x.filesWhitelist!==null)
     e.push('false npm name/version/license/consumer approval');
   if(x.cjsDecision!=='deferred-needs-consumer-proof'||
      !Array.isArray(x.exports)||!sameSet(x.exports.map(z=>z.id),knownPublicExports))
     e.push('unknown/duplicate proposed export IDs');
   for(const v of x.exports||[]){
     if(v.publicStability!=='proposed-unverified'||
        v.outputPath!==null||v.declarationPath!==null||
        !v.candidateConsumerImport.startsWith('@moonframe/ui')||
        !Array.isArray(v.conditions)||
        v.conditions.some(c=>!['types','import','default'].includes(c))||
        (v.id.includes('src/')||v.id.includes('internal')||v.id.includes('../')))
       e.push('false compiled/public or internal export '+v.id);
     if(v.id.endsWith('.css')&&v.cssSideEffect!==true)
       e.push('CSS side-effect dropped '+v.id);
     if(!v.id.endsWith('.css')&&v.cssSideEffect!==false)
       e.push('unknown JS side effects '+v.id);
   }
 }
 if(p.generatedCss?.status!=='not-generated'||
    p.generatedCss?.canonicalInputs!=='moonframe-token-source-plan-v0.1.json')
   e.push('invented generated CSS');
 if(p.consumerProof?.status!=='not-run'||
    p.consumerProof?.skin105PairwiseReviews!==0||
    Object.entries(p.consumerProof||{}).some(([k,v])=>
      !['status','skin105PairwiseReviews'].includes(k)&&v!==false))
   e.push('fabricated consumer install/pack/bundle/AT evidence');
 if(p.release?.status!=='not-configured'||
    p.release?.npmScopeApproved!==false||
    p.release?.codeLicenseApproved!==false||
    p.release?.artRightsApproved!==false||
    p.release?.version!==null||
    p.release?.tagsVerified!==null||
    p.release?.githubReleasesObserved!==0||
    p.release?.trustedPublisherEnabled!==false||
    p.release?.provenanceAttested!==false||
    p.release?.oidcWorkflowConfigured!==false||
    p.release?.distTagsGranted!==false||
    p.release?.packageTarball!==null||
    p.release?.registryInstall!==null)
   e.push('fabricated publish/provenance/OIDC approval');
 return e;
}
function dxProblems(d){
 const e=[];
 if(d.schemaVersion!=='0.1.0'||d.status!=='specified-not-implemented'||
    d.packageAuthority!=='moonframe-package-architecture-v0.1.json')
   e.push('DX source/status bad');
 if(!Array.isArray(d.journeys)||d.journeys.length!==11||
    !uniq(d.journeys.map(x=>x.id))||
    d.journeys.some(x=>x.currentStatus!=='not-executable-no-package'||
      x.testedInConsumer!==false||x.docsPath!==null||
      !isString(x.acceptanceEvidence)))
   e.push('DX journeys falsely implemented');
 if(!Array.isArray(d.diagnostics)||d.diagnostics.length!==13||
    !uniq(d.diagnostics.map(x=>x.code))||
    d.diagnostics.some(x=>!/^MF_DX_[A-Z_]+$/.test(x.code)||
      x.status!=='proposal-not-implemented'||!isString(x.remediation)))
   e.push('DX diagnostics missing/implemented');
 if(!Array.isArray(d.metrics)||d.metrics.length!==6||
    d.metrics.some(x=>x.baseline!==null||x.status!=='not-measured')||
    d.actualExecutableQuickstart!==false||
    d.actualDocumentedPackageVersion!==null)
   e.push('fabricated measured DX');
 return e;
}
for(const problem of packageProblems(packageArch))
 errors.push('Package architecture: '+problem);
for(const problem of dxProblems(packageDX))
 errors.push('Package DX: '+problem);
fail(packageSchema.$schema==='https://json-schema.org/draft/2020-12/schema'&&
     packageSchema.properties?.packages&&packageSchema.properties?.release&&
     Array.isArray(packageSchema.allOf),
     'Proposed package Draft 2020-12 schema lacks essential structure');
fail(packageFixtures.valid.length>=1&&packageFixtures.invalid.length>=16,
     'Package architecture synthetic fixtures missing');
for(const v of packageFixtures.valid)
 for(const problem of packageProblems(v.record))
   errors.push('Valid package fixture '+v.id+': '+problem);
if(process.argv.includes('--self-test')){
 for(const f of packageFixtures.invalid)
   assert(packageProblems(f.record).length>0,
      'Invalid package fixture accidentally accepted '+f.id);
 const badDX=structuredClone(packageDX);badDX.journeys[0].testedInConsumer=true;
 assert(dxProblems(badDX).some(x=>x.includes('falsely implemented')));
 const fakeName=structuredClone(packageArch);fakeName.packages[0].nameStatus='approved';
 assert(packageProblems(fakeName).some(x=>x.includes('false npm name')));
 const fakeCSS=structuredClone(packageArch);
 fakeCSS.packages[0].exports.find(x=>x.id==='./styles.css').cssSideEffect=false;
 assert(packageProblems(fakeCSS).some(x=>x.includes('CSS side-effect')));
 console.log('PASS: package/DX negative fixtures ('+packageFixtures.invalid.length+
 ' bad package/export/license/OIDC/consumer proofs; 11 planned journeys and 13 diagnostics)');
}

function markdownAnchors(content){
 const anchors=new Set(),counts=new Map();let inFence=false,fenceChar='',fenceLength=0;
 for(const line of content.split(/\r?\n/)){
  const fence=line.match(/^\s{0,3}(`{3,}|~{3,})/);
  if(fence){
   if(!inFence){inFence=true;fenceChar=fence[1][0];fenceLength=fence[1].length;}
   else if(fence[1][0]===fenceChar&&fence[1].length>=fenceLength){inFence=false;}
   continue;
  }
  if(inFence) continue;
  const heading=line.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/);
  if(!heading) continue;
  const label=heading[1].replace(/!?\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/`([^`]*)`/g,'$1').replace(/<[^>]*>/g,'');
  const base=label.toLowerCase().replace(/\s+/g,'-').replace(/[^\p{L}\p{N}-]/gu,'');
  const count=counts.get(base)||0;counts.set(base,count+1);anchors.add(count?`${base}-${count}`:base);
 }
 return anchors;
}
function markdownLinkProblems(source,content,resolveLocal,readMarkdown){
 const problems=[];
 let inFence=false,fenceChar='',fenceLength=0;
 const visible=content.split(/\r?\n/).filter(line=>{
  const fence=line.match(/^\s{0,3}(`{3,}|~{3,})/);
  if(fence){if(!inFence){inFence=true;fenceChar=fence[1][0];fenceLength=fence[1].length;}
    else if(fence[1][0]===fenceChar&&fence[1].length>=fenceLength)inFence=false;return false;}
  return !inFence;
 }).join('\n').replace(/`[^`]*`/g,'');
 for(const match of visible.matchAll(/\]\(([^)]*)\)/g)){
  const raw=match[1].trim();
  const href=raw.startsWith('<')?(raw.match(/^<([^>]*)>/)?.[1]||''):raw.split(/\s+/)[0];
  if(!href||/^[a-z][a-z0-9+.-]*:/i.test(href)||href.startsWith('//'))continue;
  const hash=href.indexOf('#');let pathname=hash<0?href:href.slice(0,hash),fragment=hash<0?'':href.slice(hash+1);
  const query=pathname.indexOf('?');if(query>=0)pathname=pathname.slice(0,query);
  try{pathname=decodeURIComponent(pathname);fragment=decodeURIComponent(fragment);}
  catch{problems.push(`${source}: malformed percent-encoding in ${href}`);continue;}
  const target=resolveLocal(source,pathname);
  if(!target){problems.push(`${source}: broken local Markdown link target ${href}`);continue;}
  if(hash>=0&&fragment&&target.toLowerCase().endsWith('.md')){
   const targetContent=readMarkdown(target);
   const anchors=targetContent===null?null:markdownAnchors(targetContent);
   if(anchors&&!anchors.has(fragment))problems.push(`${source}: missing heading anchor #${fragment} in ${target}`);
  }
 }
 return problems;
}

// Local inline Markdown links in README, TODO and docs; remote URLs are deliberately not fetched.
const walk=dir=>fs.readdirSync(path.join(root,dir),{withFileTypes:true}).flatMap(e=>{
 const p=path.join(dir,e.name);return e.isDirectory()?walk(p):[p];
});
const markdownFiles=['README.md','TODO.md',...walk('docs').filter(x=>x.endsWith('.md')),...walk('.github').filter(x=>x.endsWith('.md'))].map(p=>p.split(path.sep).join('/'));
const resolveMarkdownTarget=(source,href)=>{
 const absolute=href.startsWith('/')?path.resolve(root,href.slice(1)):path.resolve(root,path.dirname(source),href||path.basename(source));
 const relative=path.relative(root,absolute);
 if(relative==='..'||relative.startsWith('..'+path.sep)||path.isAbsolute(relative)||!fs.existsSync(absolute))return null;
 return relative.split(path.sep).join('/');
};
const readMarkdown=target=>target.toLowerCase().endsWith('.md')?fs.readFileSync(path.join(root,target),'utf8'):null;
for(const md of markdownFiles){
 const content=fs.readFileSync(path.join(root,md),'utf8');
 for(const problem of markdownLinkProblems(md,content,resolveMarkdownTarget,readMarkdown))errors.push('Markdown link: '+problem);
}
if(process.argv.includes('--self-test')){
 const fixtureFiles=new Map([
  ['docs/parent/page.md','# Same page\n\n[nearby](../shared/target.md?raw=1#valid-heading)\n[duplicate](../shared/target.md#repeat-1)\n[self](#same-page)\n[missing file](../shared/missing.md)\n[missing anchor](../shared/target.md#absent)'],
  ['docs/shared/target.md','# Valid Heading\n\n# Repeat\n\n# Repeat']
 ]);
 const fixtureResolve=(source,href)=>{
  const target=href.startsWith('/')?href.slice(1):path.posix.normalize(path.posix.join(path.posix.dirname(source),href||path.posix.basename(source)));
  return target==='..'||target.startsWith('../')||!fixtureFiles.has(target)?null:target;
 };
 const fixtureProblems=markdownLinkProblems('docs/parent/page.md',fixtureFiles.get('docs/parent/page.md'),fixtureResolve,target=>fixtureFiles.get(target)??null);
 assert.equal(fixtureProblems.length,2,'Valid nested/query/fragment, duplicate-heading and same-file links should pass');
 assert(fixtureProblems.some(x=>x.includes('broken local Markdown link target ../shared/missing.md')));
 assert(fixtureProblems.some(x=>x.includes('missing heading anchor #absent')));
 assert.equal(markdownLinkProblems('README.md','[remote](https://example.invalid/a?x=1#remote)',()=>null,()=>null).length,0);
 assert(markdownLinkProblems('docs/parent/page.md','[escape](../../../../secret.md)',()=>null,()=>null)[0].includes('broken local Markdown link'));
 console.log('PASS: Markdown links (nested paths, query/fragment, duplicate headings); invalid target/anchor, traversal and external-URL fixtures');
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
