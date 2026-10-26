#!/usr/bin/env node
// Strict static SVG subset check for original first-party brand candidates.
import fs from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/validate-brand-svg.mjs <svg-file>');
  process.exit(2);
}

const source = fs.readFileSync(file, 'utf8');
const fail = (message) => {
  console.error('FAIL: ' + message);
  process.exitCode = 1;
};
if (/<!DOCTYPE|<!ENTITY|<script\b|<foreignObject\b|<image\b|<use\b|<style\b|\bon[a-z]+\s*=|(?:href|src)\s*=|url\s*\(|javascript:|data:/i.test(source))
  fail('SVG contains a forbidden active, external, or embedded resource construct');
if (!/^\s*<svg\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s+viewBox="0 0 32 32"\s+role="img"\s+aria-label="[^"]+">[\s\S]*<\/svg>\s*$/.test(source))
  fail('SVG root must use the expected namespace, bounded square viewBox, and accessible label');
const tags = [...source.matchAll(/<\/?([A-Za-z][\w:-]*)\b([^>]*)>/g)];
if (tags.length < 3 || tags.some(([, tag]) => !['svg', 'path', 'circle'].includes(tag)))
  fail('SVG may contain only svg, path, and circle elements');
const attributes = [...source.matchAll(/\s([A-Za-z_:][\w:.-]*)\s*=/g)].map(([, name]) => name);
if (attributes.some((name) => !['xmlns', 'viewBox', 'role', 'aria-label', 'fill', 'd', 'cx', 'cy', 'r'].includes(name)))
  fail('SVG uses an attribute outside the static candidate allowlist');
if (!source.includes('<path ') || !source.includes('<circle '))
  fail('Candidate A must contain its geometric frame and center detail');
if (!process.exitCode) console.log('PASS: safe static SVG candidate structure (' + file + ')');
