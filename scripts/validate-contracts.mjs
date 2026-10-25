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
