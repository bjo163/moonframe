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

### Machine-readable visual review ledger (2026-10-25)

[Asset QA coverage](../../contracts/moonframe-asset-qa-coverage-v0.1.json) references **15 skin IDs × Light/Dark × four context cases = 120 proposed cells**, all `not-rendered`. The four cases are umbrella master brand, edition signature motif, functional icon and decoration-off fallback. None demands fifteen independent logos or production binary files. It intentionally has zero rendered/reviewed/passed screenshots and 0 human reviewer attestations, checked by the existing validator. Global 105 grammar pair comparisons stay in the original [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) and are not a second set of 105 approval records.

---

## 2026-10-26 creative reference artwork safety and proof extension

New [visual source registry](../../contracts/moonframe-creative-reference-contract-v0.1.json) records R01–R04 Moonwitness references as chat-only uploads with actual digest/dimensions. They are **not** ingested/distributable asset files. A local agent must not invent repository `docs/visual/references/source/*.png` binary evidence or treat reference access as public redistribution rights.

Proposed new visual layer source classes: `generic-ink-frame`, `torn-label-backdrop`, `optional-grunge-mask`, `neutral-world-scene`, `illustrative-character-slot`, `poster-artboard`, `semantic-icon`. Each requires individual source provenance, hash after production, sanitizer/security inspection, licensed source rights and a11y analysis. Text in CTA/form/status must remain live and interactive; decorative texture SVG cannot contain scripts, event attrs, remote href, executable data URIs or unsafe XML. SVG optimizer is not a sufficient sanitizer. Do not use copied song lyrics, unlicensed artist likeness or scraped manga panels in shipping samples.

For every image-backed design, test semantic UI with all art removed, actual text contrast above mixed artwork, 360/768/1440 layout crop, focal region preservation, user-selected Light/Dark, reduced motion and forced colors. Store measured bytes/format/render dimensions/LCP/CLS only after tests; don't invent passing numerical thresholds.

### SVG import negative-fixture matrix (MF-VF-288)

Any future SVG import boundary must reject the following inputs before optimization or rendering. These are test cases and expected outcomes, not evidence that a general importer/sanitizer exists today. Keep the valid control as a minimal, namespace-qualified SVG with a bounded `viewBox` and static path geometry.

| Fixture | Minimal hostile construct | Expected result |
|---|---|---|
| `script-element` | `<script>alert(1)</script>` | Reject active content |
| `event-handler` | `<path onload="alert(1)" d="M0 0"/>` | Reject event attributes, regardless of case |
| `foreign-object` | `<foreignObject><div>content</div></foreignObject>` | Reject embedded foreign markup |
| `external-href` | `<image href="https://example.invalid/a.png"/>` | Reject external `href`/`xlink:href` and `src` references |
| `data-resource` | `<image href="data:image/svg+xml,..."/>` | Reject data URLs, including encoded executable payloads |
| `css-url` | `<path style="fill:url(https://example.invalid/a)" d="M0 0"/>` | Reject CSS URL/resource loads in attributes or stylesheets |
| `doctype-entity` | `<!DOCTYPE svg [<!ENTITY x "payload">]>` | Reject DTD and entity declarations before XML expansion |
| `javascript-url` | `<a href="javascript:alert(1)">open</a>` | Reject script URL schemes in any attribute |

The future automated test should assert rejection per fixture and successful parsing of the valid control; it should also verify failure is closed (no preview, optimizer, or output file is produced). Use a real XML parser with external-entity expansion disabled; regex checks alone are not a general XML sanitizer. The existing `scripts/validate-brand-svg.mjs` is deliberately a narrow static brand-candidate checker and does not establish safety for arbitrary imported SVGs. No importer, sanitizer, or executable fixture runner is currently claimed by this matrix.
