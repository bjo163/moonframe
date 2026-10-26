# Moonframe master mark — small-size review criteria

**Status:** criteria-specified-no-candidate · **Task:** MF-VF-034 · **Updated:** 2026-10-26

This document defines how a future original Moonframe master-mark candidate is evaluated. It does not draw, select, license, approve, or clear a mark. The hierarchy is one Moonframe design-system identity; consumer apps keep their own product marks. Trademark review and distribution rights remain separate gates.

## Candidate A — geometric frame (draft)

Source: `assets/source/brand/mark-a.svg`. This generic first-party concept uses a broken square frame and a centered circle, authored from basic vector geometry without tracing the Moonwitness references or importing third-party artwork. It is a draft candidate only: no selection, distinctiveness claim, trademark clearance, license conclusion, or visual approval is recorded. The reusable static-subset check is `node scripts/validate-brand-svg.mjs assets/source/brand/mark-a.svg`.

## Required source and render set

- Preserve an editable vector source and a static export. The source must have a stable square viewBox, explicit geometry, no external resources, and no active SVG content.
- Render the same silhouette at **16, 24, 32, and 128 CSS px**, at 1× and 2× device scale. Inspect at native size at 100% zoom; do not use enlargement as evidence for the 16 px result.
- Render solid black on white, solid white on black, and a single-color transparent variant. The silhouette must not depend on hue, gradients, texture, stroke color, or surrounding wordmark.
- Keep a minimum **1 CSS px optical inset** from the square canvas edge at 16 px. Balance visible mass optically; document intentional asymmetry instead of silently changing the source bounds.
- At 16 px, every essential positive bar and every open negative-space gap must rasterize to at least **1.5 CSS px** at 1×. No detached detail smaller than a **2 × 2 px** raster area may carry identity.
- The mark must remain one connected silhouette unless disconnected geometry is a deliberate, documented concept and survives the same-size recognition review. Avoid hairlines, tiny counters, overlapping tangencies, and details that merge after rasterization.

## Pass criteria for a candidate

Record each item as pass/fail/not-run with the rendered file hash and reviewer evidence:

1. The same core silhouette is recognizable at 16, 24, 32, and 128 px without substituting or hiding a detail at the smallest size.
2. All essential bars/gaps meet the 1.5 px threshold at 16 px, and the optical inset is at least 1 px on all edges.
3. Black/white positive and reverse exports preserve the same shape, counters, and relative visual weight; no color-only cue is required.
4. Rasterization creates no accidental closures, merged gaps, clipped extents, or ambiguous one-pixel debris at either scale factor.
5. The readable product name is available as adjacent live text wherever the mark is used alone as a symbol; the mark is not the sole accessible name.
6. Source and export pass the repository's static SVG safety, provenance, license, and checksum gates before distribution is considered.

Any failed or unrun criterion means the candidate is not small-size approved. Automated dimension, geometry, and contrast checks are supporting evidence only; a person must inspect the native-size contact sheet and record reviewer/date before a visual-review status can advance. Trademark/name clearance is an independent decision and cannot be satisfied by this checklist.

## Evidence template

For each candidate, attach source and export paths, SHA-256 values, renderer/version, 1×/2× settings, all four sizes and monochrome variants, criterion results, reviewer/date, and a short rationale for any asymmetric optical correction. Preserve rejected candidates and their rationale; do not overwrite or relabel them as approved.
