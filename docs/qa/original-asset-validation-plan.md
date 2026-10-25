# Original Asset & Brand — QA and release gates

**2026-10-25; specification-only.** No real vectors, fonts, raster, audio or production files. Authority: [Original Asset Bible](../brand/original-asset-brand-bible.md), [asset manifest](../../contracts/moonframe-asset-manifest-v0.1.json), [15 briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json), [metadata schema](../../schemas/moonframe-asset-record.schema.json), [10 invalid fixtures](../../contracts/fixtures/original-asset-v0.1.json).

## Release evidence matrix

| Gate | Automated/future test | Required human evidence | Current |
|---|---|---|---|
| Stable IDs and coverage | Unique IDs; 15 skin references; 30 effective modes; no duplicate asset paths | Consumer API and fallback review | Proposed |
| Provenance & rights | Creator/source/real checksum/license fields; reject missing evidence | Human license/IP/trademark review; notices and modification rights | No assets / no license |
| SVG input and output | Safe XML parser/sanitizer, disallow scripts, external refs, foreignObject, dangerous data URLs, DTD/entities, ID collision; pinned SVGO optimizer | Visual compare and CSP/host context audit | No SVG |
| Raster | Image dimensions/alpha/profile, deterministic exports/size | Compression artifacts, retina and responsive fallback | No raster |
| Fonts | Real license text, OFL RFN, exact upstream version and script/weight metadata | Indonesian/RTL language sample, font-display and layout shift | No font |
| Icon system | Logical semantic icon ID, accessible name on icon-only button | Action meaning identical all skins, contrast and 200/400% zoom | None |
| Textures/illustrations | Correct decorative alt/aria, no essential text encoded only by art | Background and focus legibility, forced colors, grayscale/decoration-off, reduced effects | Briefs only |
| SFX | Off by default, explicit consent, mute/volume, gesture/reduced stimulation, duration/codec/hash once available | Audio loudness/fail-silent and visual equivalent | 0 audio |
| Storage/publish | Real source+export paths, SHA-256 and reproducible generator, accepted status | Reviewer/time, release manifest license and regression | No published files |

## Skin comparison: human review required

Four future proof skins: Classic, Moonpunk, Moonzine and Moonledger in Light/Dark (8 pilot cases). Then 15 skins × 2 modes = 30 appearances; global [105 pairwise skin reviews](../../contracts/moonframe-skin-grammar-contract-v1.0.json) are separate and all not-reviewed. Capture same content, fonts, time, viewport, motion and density, forced colors, grayscale/decoration-off. Compare nearest pairs punk/riot/smash, zine/halftone/panel, ink/scrawl, glitch/chrome, crash/ledger, raw/classic. Reviewer scores eight dimensions as pass/fail/needs-review: silhouette recognition, geometry distinction, texture/material, typography, composition, monochrome, focus/accessibility and provenance/trademark concern. **Never infer legal originality from an automated score.**

## Metadata fixtures and CI

The scoped validator must parse strict JSON, verify 15 unique briefs match Theme and Skin Specification IDs, keep asset arrays and SFX audio outputs empty, check approval stages/rights status, validate a sample planned record, reject fake published/approved/forbidden path/licensing/metadata and detect drift with negative fixtures. Actual file-existence and SHA checks should start **only after real source files exist**. Generic Draft 2020-12 full schema engine is not part of current Node validator; do not claim it ran.

**Release blockers:** missing repo/art license owner decision; prohibited upstream media; unknown copyright/trademark; SVG active content; stale generated export; absent checksum/source; no accessible fallback; unreadable focus/text at zoom or forced colors; unlicensed font RFN/relicense; automatically playing sound; false published/rights-cleared flag. Passing spec CI is not asset production, design review or legal clearance.

Current verified commands in workflow: node scripts/validate-contracts.mjs and node scripts/validate-contracts.mjs --self-test. No image rendering, font/audio test or screen reader test at this time.
