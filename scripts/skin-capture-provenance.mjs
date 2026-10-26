import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inputPaths = [
  'src/',
  'apps/moonframe/',
  'contracts/moonframe-skin-grammar-contract-v1.0.json',
  'contracts/moonframe-skin-specifications-v1.0.json',
  'contracts/moonframe-theme-contract-v1.3.json',
  'tests/browser/skins.spec.js',
  'playwright.config.js',
  'package.json',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
];

export function getSkinCaptureSourceFingerprint() {
  const files = execFileSync('git', ['ls-files', '-z', '--', ...inputPaths], { cwd: root })
    .toString('utf8')
    .split('\0')
    .filter(Boolean)
    .sort();
  const hash = crypto.createHash('sha256');
  for (const rel of files) {
    hash.update(rel);
    hash.update('\0');
    hash.update(fs.readFileSync(path.join(root, rel)));
    hash.update('\0');
  }
  return hash.digest('hex');
}

export function validateSkinCaptureProvenance(record, expectedSourceFingerprint, expectedImageSha256) {
  return Boolean(
    record &&
    /^[0-9a-f]{40}$/i.test(record.sourceCommit || '') &&
    record.sourceFingerprint === expectedSourceFingerprint &&
    record.imageSha256 === expectedImageSha256
  );
}

export function writeSkinCaptureProvenance(imagePath) {
  const imageSha256 = crypto.createHash('sha256').update(fs.readFileSync(imagePath)).digest('hex');
  const record = {
    sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    sourceFingerprint: getSkinCaptureSourceFingerprint(),
    imageSha256,
  };
  fs.writeFileSync(`${imagePath}.provenance.json`, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
  return record;
}
