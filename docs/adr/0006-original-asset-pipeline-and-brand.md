# ADR-0006 — Original asset brand hierarchy, provenance pipeline and storage

**Date:** 2026-10-25 · **Status:** `proposed-owner-approval-required`. No binaries, dependencies, production tooling, font or logo rights approved.

## Problem / live evidence

Existing [asset manifest](../../contracts/moonframe-asset-manifest-v0.1.json) has 15 empty per-skin records and 10 generic categories (including three logo variants each) but **zero production files**, source exports, font license evidence or hashes. [Theme](../../contracts/moonframe-theme-contract-v1.3.json) owns the 15/30 mode set; [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) has 105 `not-reviewed` pairwise records. Repo has no LICENSE, package.json, `.gitattributes` or art pipeline. [Research](../research/original-asset-brand-research-log.md) shows SVG 2 Candidate Recommendation Oct 6 2026, SVGO v4.1.0 maintainer security hardening and Google Fonts/OFL/CC/SPDX license distinctions.

## Proposal

1. **Endorsed edition system:** one Moonframe umbrella brand and stable future mark/wordmark family; 15 named visual editions with unique motif/shape/texture packages. A separate logo per skin **optional after reviewed need**, not mandatory.
2. **Asset records stay outside DTCG JSON:** DTCG token source can point at approved semantic IDs only; no binary, font file or license metadata in token value.
3. **Manifest plus conditional schema:** authoritative accepted asset registry is [existing manifest](../../contracts/moonframe-asset-manifest-v0.1.json); [record schema](../../schemas/moonframe-asset-record.schema.json) and [15 derivative briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json). All planned files remain absent/empty.
4. **Master → sanitized/optimized deterministic exports → accepted release:** reviewed source, rights, author, versioned tool config, SHA-256, file evidence, packaging/export graph; force failure on unknown license/path/forbidden SVG or source-output mismatch. No actual sanitizer/generator installed.
5. **Storage:** keep text metadata in ordinary Git now; Git LFS or external CDN/DAM only after size/churn/license/privacy/browser/CI evaluation. Generated binaries not installed in repo on this pass.
6. **Proposed sound:** existing SFX Contract owns off-by-default consent and events; no SFX produced or included in base bundle.

## Alternatives

| Option | Benefits | Tradeoffs | Decision |
|---|---|---|---|
| 15 autonomous brands/logos | Max decorative freedom | Branding conflict, legal/trademark/review cost, may obscure host app | No, except individually justified future request |
| One recolored mark only | Cheap | Violates 15 unique skin grammar | No |
| Shared endorsed mark + distinct per-skin devices | Family coherence + visual differentiation | Requires consistent naming/review and optional badge criteria | **Proposed recommendation** |
| Check large masters into Git immediately | Simple source colocated | Binary churn without evidence; costly clone | Defer until actual samples |
| Adopt Git LFS or external DAM now | Scales large art | Adds cost/ops with zero binary proof | Defer |
| SVGO only sanitization | Single tool | XML/SVG may carry active content; optimize != trust | Reject; independent import security required |

## Decision trigger / bounded future test

Owner approves umbrella mark/trademark, license partition (code, fonts, logos, textures, icons, sound), font/OS/browser targets; designer delivers **one nonproduction sample each** for Classic/Moonpunk/Moonzine/Moonledger (requires separate production authorization), demonstrate source/master+metadata → candidate SVGO pinned opt → safe subset/content policy validation → screenshot/grayscale/decoration-off/forced-colors → checksum/layout/font fallback → legal provenance signoff. Measure actual file bytes, CI times and package cost before choosing storage. Do not backfill fake proof into JSON.

**Open:** main Moonframe mark, skin-badge need, LICENSE SPDX selection, fonts, app/PWA size targets, commercial licensing, exact CLI/tool pin, cross-platform SFX format/budget, CDN/LFS; all remain proposed.