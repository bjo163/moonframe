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
