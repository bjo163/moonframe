# Moonframe UI — Original Asset & Brand Bible

**Edition:** 2026-10-25 · **Status:** `specified-not-implemented`. **Authority:** brand hierarchy, original identity policy, per-asset provenance/licensing, vector/raster/font/optional sound production and acceptance lifecycle. NOT a production brand, license clearance or shipped logo. [Audit](../audit/original-asset-brand-audit.md) · [Dated research](../research/original-asset-brand-research-log.md) · [Asset manifest](../../contracts/moonframe-asset-manifest-v0.1.json) · [15 asset briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json) · [ADR-0006](../adr/0006-original-asset-pipeline-and-brand.md).

## 1. Canonical boundaries / do not duplicate other Bibles

| Responsibility | One canonical owner |
|---|---|
| Master brand/asset names/creative and licensing authority | **This Bible**; accepted/real assets & provenance metadata in [Asset Manifest](../../contracts/moonframe-asset-manifest-v0.1.json) |
| Per-skin *visual grammar and anti-overlap* | [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json); the [asset briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json) are derivative creative briefs only |
| Skin IDs, 15 × light/dark, density/motion preference | [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) |
| Token names/semantic color/typography values and renderer resolution | [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) and [token pipeline](../architecture/token-pipeline.md); asset IDs **not** binary design tokens |
| Functional Icon / BrandMark component refs, semantics and behavior | [Component API Bible](../component-api-behavior-bible.md) |
| Block/media/logo slots, responsive page composition | [Premium Scope](../premium/premium-scope-bible.md), original block/page manifests |
| Optional sound consent/events/defaults | [Existing SFX Contract](../../contracts/moonframe-sfx-contract-v0.1.json); asset provenance and mastering handoff here, no duplicate event list |
| Asset file/format/provenance schema and operational review | [Asset Manifest](../../contracts/moonframe-asset-manifest-v0.1.json), [JSON Schema](../../schemas/moonframe-asset-record.schema.json), [format and QA policy](../qa/original-asset-validation-plan.md) |

The word “original” describes intended source ownership and art direction; **does not automatically certify copyright originality/trademark clearance**. Neither “AI-generated”, “downloadable”, “public repo” nor “found via search” is enough to accept a file for redistribution.

## 2. Hierarchy and brand-model decision

**Recommended, NOT yet owner-approved:** **Moonframe** is the one umbrella **design-system brand**; 15 skins are **endorsed visual editions** within that family. Each app remains its own product brand; Moonframe is the upstream design language, not the identity provider/business operator. Typical conceptual label: “Moonframe / Moonzine edition” or “Powered by Moonframe UI” only if consumer explicitly requests it. Do not falsely imply a skin is a separate legal company, a game, a financial certification, an official shadcn product, or someone else's trademark.

Stable across editions: master brand name and a future approved core mark, exported functional semantic icon meanings, neutral accessible layout/interaction semantics, typography roles, badge/hierarchy and reference paths. Variable: skin descriptor label treatment, signature texture/motif geometry, illustration framing, palette use through token refs, composition and approved decorative motion.

**Brand assets and marks:** only **one canonical master Moonframe wordmark/mark** candidate in core. Each skin must have its own **signature device/motif system and preview**, not automatically a standalone brand logo. Optional skin badge/monogram allowed after need+distinctiveness+trademark+minimum-size proof; an adapted mark must preserve recognition and visual access. A skin may legitimately need *zero* additional branding marks, e.g. Moonraw/Classic/Moonledger, when identity lies in composition and data surface. Do not portray 15 recolors as 15 distinct original systems. Brand lockups, legal clearance, names, label language, monochrome/reversed variants and clearspace specifications are **owner-approval pending**, not final numerical values.

### Naming and stable ID strategy

Logical public ID: `mf.brand.master-mark`, `mf.skin.moonzine.signature-texture`, `mf.icon.action.search`, `mf.illustration.empty-state`, `mf.font.reading`, `mf.sound.optional.success`. These are **proposals** pending namespace/API approval. IDs are stable semantic logical handles, never filenames; versions/exports may change without silent API ID renames. A component should request `BrandMark(assetId)` or `Icon(name)` semantically rather than import `moonpunk-green-v7.svg`. Source root, output package subpaths and resolver API remain undecided (existing package/distribution [Issue #4](https://github.com/bjo163/moonframe/issues/4)). Separate logo/trademark approval from package source-code license.

## 3. Asset categories and minimum viable portfolio

| Category | Role | Proposed source and outputs | Minimum for pilot vs optional |
|---|---|---|---|
| Master Moonframe mark + wordmark | Recognition, lockup and attribution | Editable vector master → reviewed SVG/PNG/favicon derivatives | **One brand family**, pending logo approval. Not multiplied by 15 |
| Skin signature visual device | Make each art-direction territory distinct | Native vector/CSS geometry/pattern source → SVG or optimized raster as required | **One unique motif/shape/texture recipe per skin** (can be CSS-only when appropriate) |
| Functional icons | Action/status semantics consistent across skins | Reviewed icon source → named paths and semantic API (not icon font by default) | Essential core set only after component Icon API and license review; no custom set per skin required |
| Decorative patterns/textures | Optional identity with precise placement and effects | Source vector/raster → responsive safe exports, no baked essential text | As necessary by brief; Classic, Moonraw, Moonledger may ship without decorative files |
| Illustration/empty-state artwork | Contextual supportive media | Editable master → SVG/WebP/PNG/AVIF selectively | Optional; meaningful status must have text |
| Preview/demo media | Product catalog/visual QA | Explicitly synthetic source → compressed previews | For future Skin Lab evidence only, no false approved production asset |
| Favicons and app icons | Brand at browser/platform surface | Core master source → target-specific reviewed outputs | Only after browser/PWA target and size/contrast testing; no arbitrary complete export matrix |
| Font families | Body/display/icon? use *text fonts only* | Individually rights-cleared original font master → WOFF2 subsets if permitted | Font fallback first; **no font files until license and script coverage clearance** |
| Optional SFX | Supplementary nonessential feedback | Editable sound source → reviewed compressed delivery format | **Zero default**; only opt-in approved future pack, never on page-load |

Each category must record intended consumer, source/edit owner, asset ID, canonical source vs derivative, license/provenance, mode/contrast accessibility, fallback, size/perf tests, QA evidence and release gate. No accepted file means all records remain planned, no invented paths/checksums.

## 4. Per-skin identity anti-overlap and minimum package

The [machine-readable brief matrix](../../contracts/moonframe-skin-asset-briefs-v0.1.json) holds **15 full plans**, each with own signature language, mark recommendation, icon policy, minimum/optional asset set, texture and anti-overlap, accessible reduced-decoration, Light/Dark strategy, source/output plan and approval notes. Grammar authority remains in the linked existing `moonframe-skin-specifications-v1.0.json`.

A *minimum viable skin asset brief*, not a demand for binary creation: identity descriptor + distinctive motif/shape rule + markup/reference for future preview + source/rights plan + decoration-off fallback + accessibility risk checklist. **Approved production portfolio** will be decided *after* four divergent pilot specimens: Classic/Moonpunk/Moonzine/Moonledger in Light/Dark. Pairwise 105 skin grammar reviews must have real screenshots, grayscale and decoration-off and eight-dimension human evidence; a score alone cannot prove legal originality. Compare adjacent families explicitly: Moonpunk/Moonriot/Moonsmash, Moonzine/Moonhalftone/Moonpanel, Moonink/Moonscrawl, Moonglitch/Moonchrome, Mooncrash/Moonledger, Moonraw/Classic.

## 5. Provenance, licenses, original/IP review

**Rights chain:** approved creative brief → artist/creator + creation date + original source master path → tool/edit lineage and source URLs if external → asset checksum + derivative/checksum → provenance declaration → specific license identifier/evidence/attribution → rights/redistribution/trademark review → a11y/perf/visual acceptance → release approval. Revisions preserving ID must reference prior released version and generated artifacts reproducibly; source file is never inferred from export filename.

Provenance enums: `original-created`, `generated-needs-review`, `third-party-licensed`, `public-domain-verified`, `customer-provided`, `unknown`, `rejected`. Third-party assets need creator/rights-holder, actual license terms and distribution proof; customer-provided rights belong to license terms/consent, **not assumed Moonframe package rights**. Generated assets require human source-trace similarity, unintentional brand/character/text scan, tool usage rights, derivative permissions, and potential legal review; AI output is **not automatically trademark-safe or legally unique**. Unknown and rejected assets must remain out of distribution.

**License policy:** store real SPDX ID when applicable, or valid documented `LicenseRef-` with license text evidence; collect version/author/copyright notice/attribution and commercial redistribution conditions, trademark reservations, font Reserved Font Names (RFNs), source and modifications. CC commercial `NC` or restricted derivatives `ND` frequently conflict with public redistribution/adaptation; flag for explicit license/legal gate. Open-font licensing under SIL OFL 1.1 permits many uses subject to conditions (notices, modified-font RFNs). Repository currently has **no LICENSE**, so *repo/public-package rights choice remains a blocker* for publishing. Do not create a fake MIT/OFL/CC license on behalf of owner. Legal counsel review where commercial mark/IP risk significant.

**Review vocabulary:** `requested → brief-approved → source-created → provenance-reviewed → license-cleared → accessibility-reviewed → optimized → visual-reviewed → accepted → published → deprecated`. `quarantined` and `rejected` terminal/hold cases. **Every approved gate must provide reviewer, timestamp, evidence and checksum where file exists.** `proposed`, `rights-pending`, `design-review`, `approved`, `rejected`, `deprecated` are legacy record states, not proof. Use explicit accepted release gate before publishing.

## 6. SVG/vector, icon and raster policies

**SVG:** SVG 2 was **W3C Candidate Recommendation Snapshot 2026-10-06**, not final W3C Recommendation. Vector sources use intrinsic stable `viewBox`, deliberately scalable geometry, explicit stroke/fill convention, currentColor for functional monochrome glyphs, semantic asset/tokens for theme-dependent decorative color, static monochrome/reverse fallback for logo recognition. No `title`/SVG text as sole label: decorative asset empty alternative/aria-hidden, informative art gets accessible name/description appropriate to DOM placement, standalone brand has readable app name. Inline SVG `id` collision avoided with stable prefixed unique IDs or scoped strategy; sprite vs per-file `<img>` depends on CSP/SSR accessibility and proven targets, not chosen today. Accessibility of `<img>`-embedded SVG differs from inline SVG; don't apply ARIA blindly.

**Untrusted SVG import:** reject scripts, on-event attributes, `foreignObject`, external `href`/resource loads, `javascript:`, `vbscript:`, executable `data:`, embedded HTML, unknown namespaces, unbounded references/filters and dangerous CSS/URL functions unless a specifically vetted sanitizer, CSP and threat review justify them. Inspect XML safely (no DTD/entities/network expansion), reject oversized/recursive documents, validate reference IDs, then independently sanitize **before** optimized output. SVGO v4.1.0 is a candidate optimizer with security fixes—not a security sandbox/sanitizer certification. Optimization must preserve viewBox, strokes, paths, needed IDs and high-contrast monochrome intent; DOM/varying-mode screenshot comparison mandatory before acceptance. No arbitrary inline data from users or website gets copied into components.

**Functional icon** semantic name/role stable across skins; skin decorations may wrap frame/shape but cannot change “search”, “delete”, “warning” semantics. Icon-only buttons get programmatic text label. Icon source/license and change log are independently reviewed; no default icon font (Unicode/PFO fallback, font loading and a11y concerns). Icons cannot be offered as third-party official product badges without brand permission.

**Raster:** master/derivatives separate. Choose SVG for scale and geometry, WebP/AVIF for accepted textured/multicolor gradients/illustration where supported, PNG for transparency/lossless/compatibility exports, ICO for browser favicon if target requires, JPEG for photographic fallback if useful. Keep actual dimensions/color profile/transparency and aspect ratio/alpha edge checks; responsive `srcset`/`sizes` only when consumer supports them. Defer heavy textures and illustrations, lazy-load below fold, avoid layout shift by reserving dimensions, prune file metadata that leaks creator/private paths while retaining **internal** provenance registry. Content hashes in filenames for immutable caching, or explicit versioned URLs; never editable production outputs without regeneration.

**Favicon/app icon:** no forced matrix until web/PWA/mobile consumers confirmed. Test SVG `sizes=any` where supported, ICO fallback and Apple/PWA variants only for targeted apps; master mark requires legible 16px/32px thumbnail proof, monochrome/high-contrast variants and brand approval. Favicon is app brand by default, Moonframe logo only for actual Moonframe documentation/showcase. Don't overwrite host brand.

## 7. Typography + font production

Body/default text uses generic licensed/platform stacks pending a real font decision. Distinct display *direction* per skin is not an installed font family. For any proposed font, record upstream source & **exact version/hash/license text**, commercial use, redistribution/subsetting/embedding and RFN conditions, number of glyphs/language/script coverage (Latin/Indonesian, RTL samples as relevant), variable-font axes, fallback metric shift/FOIT/FOUT, WOFF2 self-host vs remote privacy/perf. No remote font tracking calls by default; decide self-hosted subset vs system fonts with real target sample and rights review. Material text must remain HTML text, never baked in image-only font. User agent text scaling and long translations remain functional when font unavailable.

## 8. Optional audio policy — reference existing contract

The [SFX Contract](../../contracts/moonframe-sfx-contract-v0.1.json) **alone owns** actual event IDs, defaults and mute/volume rules. Off by default, requires explicit consent/user gesture, never on page load/typing/hover, no sound-only critical state. MDN documents autoplay blocking including Web Audio. If browser denies audio, fail silently without breaking UI. **Do not create a 15-skin sonic pack** before usability and rights evidence. Proposed portfolio: minimal shared neutral functional cues (if accepted), optional Moonquest celebratory signature distinct from required status, not dozens of per-skin alert noises. A future audio record needs duration/size, codec + fallback/browser proof, perceptual loudness normalization measured with chosen tool, peak and cooldown tests, delivery rights, checksum/source and visual/non-audio equivalent. Exact max duration/KB/LUFS pending browser/UX/prototype measurement, **not invented production thresholds**.

## 9. Pipeline, repository/storage and lifecycle

**Proposed staged pipeline, not code:** design brief approved → source master (private if rights require) → provenance/licensing review → isolated metadata/bytes inspection and SVG sanitizer gate → pinned deterministic optimizer/export → output dimensions/color profile/viewBox/asset checksum → 15 skin/30 modes applicable review; grayscale/decoration disabled, zoom/forced colors → reviewer evidence → accepted manifest entry with stable ID → distributable release registry → deprecation/supersedes migration. Fail closed on unapproved/missing license/unsafe source/unresolved references/duplicate IDs and missing output. Generation must never silently mutate canonical masters. Manifest schema is [here](../../schemas/moonframe-asset-record.schema.json); candidate storage [ADR-0006](../adr/0006-original-asset-pipeline-and-brand.md). SHA-256 source/export integrity proof proposed once files actually exist; hash cannot be faked for planned records.

**Current storage:** text-only Git on current `main`; no binary samples, so no LFS or cloud DAM provider choice. If future asset volume, churn and package size measured, compare Git tracked small masters, Git LFS large binaries and immutable object store/CDN for generated packs. Untrusted uploads must be quarantined outside distributable package. Repo code license, original art license, fonts, user-supplied content and audio may require **different license instruments**.

**Readiness terms:** `planned` (current), `source-created` (file real), `rights-reviewed`, `visual-reviewed`, `accepted`, `published`. A passing JSON schema only validates metadata consistency; **does not** certify license/originality/accessibility. Missing decoration must leave application usable with optional fallback; missing functional icon/label must fail release.

## 10. QA, sign-off, risks and next tasks

[Dedicated QA](../qa/original-asset-validation-plan.md) specifies positive/negative metadata fixtures, rights and checksum provenance, file path traversal, malicious SVG, font licenses, 30 appearance coverage, 105 global pair review, raster/performance, silent audio and screen reader/focus. [Atomic roadmap](../backlog/original-asset-atomic-issues.md) scopes work in small tasks. Existing MF-080–086 are *future production* seeds; no real issue creation or installation here.

**Blocking owner decisions:** (1) approve umbrella and edition naming, (2) master mark trademark/search, (3) repository/public package and art pack licenses separately, (4) exact font families/redistribution, (5) per-platform favicon requirements, (6) source/design asset publishing/storage rights, (7) audio/no-audio commercial strategy. No final logo, SVG, PNG, font, raster, SFX, application build or production assets authorized by this task.

### Dedicated asset QA coverage ledger

The [120-cell appearance review ledger](../../contracts/moonframe-asset-qa-coverage-v0.1.json) documents planned Light/Dark asset contexts and tracks future screenshots, rights and reviewer evidence separately from per-asset metadata and the 105 global grammar pairs. Zero cells have a produced artifact, review or pass. A master mark tested in 15 skins remains **one asset identity**, not 15 unique logos. See [asset QA](../qa/original-asset-validation-plan.md).
