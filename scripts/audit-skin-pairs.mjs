#!/usr/bin/env node
// Deterministic string/selector audit and PNG inventory (NOT human visual review) (MF-SKINLAB-003 & MF-SKIN-004).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import { getSkinCaptureSourceFingerprint, validateSkinCaptureProvenance } from './skin-capture-provenance.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const expectedCapture = {
  viewport: '1440x960',
  locale: 'en-US',
  direction: 'ltr',
  timezoneId: 'UTC',
  frozenTime: '2026-10-25T12:00:00.000Z',
};
const expectedTabletCapture = { ...expectedCapture, viewport: '768x1024' };
const expectedPhoneCapture = { ...expectedCapture, viewport: '360x800' };

export function auditAllSkinPairs() {
  const grammar = JSON.parse(fs.readFileSync(path.join(root, 'contracts/moonframe-skin-grammar-contract-v1.0.json'), 'utf8'));
  const specs = JSON.parse(fs.readFileSync(path.join(root, 'contracts/moonframe-skin-specifications-v1.0.json'), 'utf8'));
  const css = fs.readFileSync(path.join(root, 'src/styles.css'), 'utf8');
  const sourceFingerprint = getSkinCaptureSourceFingerprint();

  const grammarBySkin = new Map(grammar.skins.map(s => [s.id, s]));
  const specBySkin = new Map(specs.skins.map(s => [s.id, s]));

  // Verify 30 rendered appearance screenshots exist
  const missingScreenshots = [];
  const staleScreenshots = [];
  const missingTabletScreenshots = [];
  const staleTabletScreenshots = [];
  const missingPhoneScreenshots = [];
  const stalePhoneScreenshots = [];
  for (const skin of grammar.skins) {
    for (const mode of ['light', 'dark']) {
      const rel = `artifacts/skins/${skin.id}-${mode}-1440x960-default.png`;
      const imagePath = path.join(root, rel);
      const provenancePath = `${imagePath}.provenance.json`;
      if (!fs.existsSync(imagePath)) {
        missingScreenshots.push(rel);
      } else if (!fs.existsSync(provenancePath)) {
        staleScreenshots.push(rel);
      } else {
        try {
          const record = JSON.parse(fs.readFileSync(provenancePath, 'utf8'));
          const imageSha256 = crypto.createHash('sha256').update(fs.readFileSync(imagePath)).digest('hex');
          if (!validateSkinCaptureProvenance(record, sourceFingerprint, imageSha256, expectedCapture)) staleScreenshots.push(rel);
        } catch {
          staleScreenshots.push(rel);
        }
      }
      const tabletRel = `artifacts/skins/${skin.id}-${mode}-768x1024-default.png`;
      const tabletPath = path.join(root, tabletRel);
      const tabletProvenancePath = `${tabletPath}.provenance.json`;
      if (!fs.existsSync(tabletPath) || !fs.existsSync(tabletProvenancePath)) {
        missingTabletScreenshots.push(tabletRel);
      } else {
        try {
          const record = JSON.parse(fs.readFileSync(tabletProvenancePath, 'utf8'));
          const imageSha256 = crypto.createHash('sha256').update(fs.readFileSync(tabletPath)).digest('hex');
          if (!validateSkinCaptureProvenance(record, sourceFingerprint, imageSha256, expectedTabletCapture)) staleTabletScreenshots.push(tabletRel);
        } catch {
          staleTabletScreenshots.push(tabletRel);
        }
      }
      const phoneRel = `artifacts/skins/${skin.id}-${mode}-360x800-default.png`;
      const phonePath = path.join(root, phoneRel);
      const phoneProvenancePath = `${phonePath}.provenance.json`;
      if (!fs.existsSync(phonePath) || !fs.existsSync(phoneProvenancePath)) {
        missingPhoneScreenshots.push(phoneRel);
      } else {
        try {
          const record = JSON.parse(fs.readFileSync(phoneProvenancePath, 'utf8'));
          const imageSha256 = crypto.createHash('sha256').update(fs.readFileSync(phonePath)).digest('hex');
          if (!validateSkinCaptureProvenance(record, sourceFingerprint, imageSha256, expectedPhoneCapture)) stalePhoneScreenshots.push(phoneRel);
        } catch {
          stalePhoneScreenshots.push(phoneRel);
        }
      }
    }
  }

  const pilotSixKeys = new Set([
    'classic::moonledger',
    'classic::moonpunk',
    'classic::moonzine',
    'moonledger::moonpunk',
    'moonledger::moonzine',
    'moonpunk::moonzine',
  ]);

  const results = [];
  for (const pair of grammar.pairwiseReviewMatrix) {
    const a = grammarBySkin.get(pair.a);
    const b = grammarBySkin.get(pair.b);
    const specA = specBySkin.get(pair.a);
    const specB = specBySkin.get(pair.b);

    const dimensions = {
      composition: a.composition !== b.composition ? 2 : 1,
      geometry: a.geometry !== b.geometry ? 2 : 1,
      typography: a.type !== b.type ? 2 : 1,
      surface: a.surface !== b.surface ? 2 : 1,
      dataNavigation: (a.navigation !== b.navigation || a.data !== b.data) ? 2 : 1,
      media: a.media !== b.media ? 2 : 1,
      componentRecipes: JSON.stringify(specA?.componentRecipes) !== JSON.stringify(specB?.componentRecipes) ? 2 : 1,
      motion: a.motion !== b.motion ? 2 : 1,
    };

    const distinctDimensions = Object.values(dimensions).filter(score => score === 2).length;
    const totalScore = Object.values(dimensions).reduce((acc, v) => acc + v, 0);
    const key = [pair.a, pair.b].sort().join('::');
    const hasCssSelectorA = css.includes(`[data-skin="${pair.a}"]`);
    const hasCssSelectorB = css.includes(`[data-skin="${pair.b}"]`);

    results.push({
      index: results.length + 1,
      a: pair.a,
      b: pair.b,
      key,
      isPilotSix: pilotSixKeys.has(key),
      dimensions,
      distinctDimensions,
      totalScore,
      hasCss: hasCssSelectorA && hasCssSelectorB,
      lightScreenshots: [`artifacts/skins/${pair.a}-light-1440x960-default.png`, `artifacts/skins/${pair.b}-light-1440x960-default.png`],
      darkScreenshots: [`artifacts/skins/${pair.a}-dark-1440x960-default.png`, `artifacts/skins/${pair.b}-dark-1440x960-default.png`],
      summaryA: `${a.geometry}; ${a.surface}`,
      summaryB: `${b.geometry}; ${b.surface}`,
      verdict: distinctDimensions >= 5 && hasCssSelectorA && hasCssSelectorB ? 'STRUCTURAL-PASS' : 'STRUCTURAL-FAIL',
    });
  }

  return {
    skinCount: grammar.skins.length,
    pairCount: results.length,
    pilotSixCount: results.filter(r => r.isPilotSix).length,
    structuralPassed: results.every(r => r.verdict === 'STRUCTURAL-PASS'),
    capturesComplete: missingScreenshots.length === 0,
    staleScreenshots,
    missingTabletScreenshots,
    staleTabletScreenshots,
    missingPhoneScreenshots,
    stalePhoneScreenshots,
    sourceFingerprint,
    humanReviewStatus: 'pending-human-visual-review',
    allPassed: results.every(r => r.verdict === 'STRUCTURAL-PASS') && missingScreenshots.length === 0 && staleScreenshots.length === 0 && missingTabletScreenshots.length === 0 && staleTabletScreenshots.length === 0 && missingPhoneScreenshots.length === 0 && stalePhoneScreenshots.length === 0,
    minDistinctDimensions: Math.min(...results.map(r => r.distinctDimensions)),
    missingScreenshots,
    antiOverlapRules: grammar.antiOverlapRules,
    results,
  };
}

export function generatePairwiseReportMarkdown(audit) {
  const pilotRows = audit.results.filter(r => r.isPilotSix);
  const lines = [
    '# Moonframe UI — 6-Pair Pilot & 105-Pair Skin Grammar Review Report',
    '',
    '**Status:** `AUTOMATED CONTRACT CHECK, NOT HUMAN-APPROVED` · **Human reviewer:** `pending`',
    '**Scope:** 6 pilot + 105 contract-string pair checks; no human screenshot signoff generated',
    '**Automated Verifier:** `pnpm run audit:pairs` (`scripts/audit-skin-pairs.mjs`)',
    '',
    '**Evidence boundary:** This script compares contract descriptions and CSS selector presence, counts PNG files, and does not inspect screenshot pixels, visual fidelity or named human reviews. Previous signoffs are not current visual approval.',
    '',
    '## 1. Executive Summary',
    '',
    `- **Canonical Skins Evaluated:** ${audit.skinCount} (\`moonpunk\`, \`moonriot\`, \`moonzine\`, \`moonhalftone\`, \`moonglitch\`, \`moonsmash\`, \`moonink\`, \`mooncrash\`, \`moonpanel\`, \`moonscrawl\`, \`moonraw\`, \`moonchrome\`, \`classic\`, \`moonquest\`, \`moonledger\`)`,
    `- **Screenshot inventory:** ${30 - audit.missingScreenshots.length}/30 paths present; PNG pixels are not visually reviewed by this script`,
    `- **Current-source captures:** ${30 - audit.staleScreenshots.length}/30 screenshots have SHA-256 sidecars matching source fingerprint ${audit.sourceFingerprint}; stale/missing provenance is not accepted`,
    `- **Tablet captures:** ${30 - audit.missingTabletScreenshots.length - audit.staleTabletScreenshots.length}/30 real 768×1024 captures have current-source SHA-256 sidecars; human visual review is pending`,
    `- **Phone captures:** ${30 - audit.missingPhoneScreenshots.length - audit.stalePhoneScreenshots.length}/30 real 360×800 captures have current-source SHA-256 sidecars; human visual review is pending`,
    `- **Pilot pair metadata:** ${audit.pilotSixCount}/6 checked structurally; human visual review pending`,
    `- **Pair metadata:** ${audit.pairCount}/105 checked structurally; human visual review pending`,
    `- **Minimum Materially Distinct Non-Color Dimensions Across All 105 Pairs:** **${audit.minDistinctDimensions} / 8** (contract minimum: 4/8; neighboring-concept target: 5/8)`,
    '- **Grayscale and decoration-off visual comparisons:** NOT verified by this structural script; require browser screenshots and a reviewer.',
    '',
    '## 2. First Six Pair Reviews (`MF-SKINLAB-003` — Four-Skin Reference Matrix)',
    '',
    'The four reference skins (`classic`, `moonpunk`, `moonzine`, `moonledger`) form $\\binom{4}{2} = 6$ foundational pairs:',
    '',
    '| Pair | Skin A Grammar | Skin B Grammar | 8-Dim Score | Distinct Dims | Verdict |',
    '|---|---|---|---:|---:|---|',
    ...pilotRows.map(r => `| \`${r.a}\` vs \`${r.b}\` | ${r.summaryA} | ${r.summaryB} | **${r.totalScore}/16** | **${r.distinctDimensions}/8** | **${r.verdict}** |`),
    '',
    '## 3. Anti-Overlap Rule Verification (10 Canonical Rules)',
    '',
    ...audit.antiOverlapRules.map((rule, idx) => `${idx + 1}. **Review rule:** ${rule}`),
    '',
    '## 4. Complete 105 Pairwise Skin Grammar Review Ledger (`MF-SKIN-004`)',
    '',
    'Dimension key: `C`=Composition, `G`=Geometry, `T`=Typography, `S`=Surface, `D`=Data/Nav, `M`=Media/Texture, `R`=Component Recipes, `Mo`=Motion Signature (`2` = strong non-color difference).',
    '',
    '| # | Pair (`a :: b`) | Scores (`C/G/T/S/D/M/R/Mo`) | Distinct | Total | Captures (`artifacts/skins/`) | Verdict |',
    '|---:|---|---|---:|---:|---|---|',
    ...audit.results.map(r => {
      const d = r.dimensions;
      const scoreVec = `${d.composition}/${d.geometry}/${d.typography}/${d.surface}/${d.dataNavigation}/${d.media}/${d.componentRecipes}/${d.motion}`;
      return `| ${r.index} | \`${r.a} :: ${r.b}\` | \`${scoreVec}\` | ${r.distinctDimensions}/8 | ${r.totalScore}/16 | \`${r.a}-{light,dark}.png\` vs \`${r.b}-{light,dark}.png\` | **${r.verdict}** |`;
    }),
    '',
  ];
  return lines.join('\n');
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  const audit = auditAllSkinPairs();
  if (!audit.allPassed) {
    console.error('FAIL: Skin pairwise audit failed', { missing: audit.missingScreenshots, stale: audit.staleScreenshots, missingTablet: audit.missingTabletScreenshots, staleTablet: audit.staleTabletScreenshots, missingPhone: audit.missingPhoneScreenshots, stalePhone: audit.stalePhoneScreenshots });
    process.exit(1);
  }
  const reportPath = path.join(root, 'docs/qa/skin-pairwise-review-report.md');
  fs.writeFileSync(reportPath, generatePairwiseReportMarkdown(audit), 'utf8');
  console.log(`STRUCTURAL + INVENTORY PASS: ${audit.pairCount} pair metadata records, ${audit.minDistinctDimensions}/8 distinct contract-string dimensions minimum, 30 desktop + 30 tablet + 30 phone current-source screenshot captures. Human visual review pending.`);
}
