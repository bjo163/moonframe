# Moonframe — Original Asset & Brand specification delivery report

**Date:** 2026-10-25 Asia/Jakarta. **Repo:** https://github.com/bjo163/moonframe. **Default/edited branch:** `main`, no branch/PR created. **Audited initial SHA:** [`daea86207bfa38529e689f278f11b9ab5eac12d1`](https://github.com/bjo163/moonframe/commit/daea86207bfa38529e689f278f11b9ab5eac12d1). **Latest content SHA before this report:** [`eb1d8f2840e0906194fe49b5a3e20322df379543`](https://github.com/bjo163/moonframe/commit/eb1d8f2840e0906194fe49b5a3e20322df379543). **Mission scope:** repository audit, official research, documents/contracts/CI only; zero binary assets/artwork/fonts/SFX/React.

## Actual baseline, no fabrication

Complete nontruncated GitHub tree had **79 tracked files**, no visual/media/font/audio binaries, no `assets/`, no `LICENSE`, package.json, asset generation tooling, `.gitattributes`, font manifest or existing accepted brand mark. 15 canonical skin entries × 10 *candidate categories* each, with empty `assets: []` and `not-produced`. Existing SFX catalog has 6 optional event IDs, `producedAssets=[]`, `defaultEnabled=false`, `requiresExplicitConsent=true`. 15 skin IDs, 30 intended effective Light/Dark appearances, 105 pairwise grammar reviews `not-reviewed`. Six existing GitHub issues, zero PR. Local working tree was not available for checking.

[Audit](original-asset-brand-audit.md) gives baseline findings **P0=0; P1=5; P2=6; P3=3**. Top gaps: ten historical per-skin category families could be mistaken for ten mandatory shipped items or independent brands; no rights/provenance/metadata schema, no repository license; SVG safety pipeline undefined; no future reproducible output chain. These are planning gaps in docs-only repo, not a discovered shipped software vulnerability.

## Researched primary sources and updates influenced

[Primary-source research log](../research/original-asset-brand-research-log.md) (checked **2026-10-25**):
- [W3C SVG 2](https://www.w3.org/TR/SVG2/): **Candidate Recommendation Snapshot 2026-10-06**, not W3C Recommendation. Vector safe subset, `viewBox`, inline/image security and graphics compatibility.
- [MDN SVG as an image](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_as_an_image): image-context restrictions do not mean inline/document SVG is inherently safe. Sanitizer/import trust gate needed.
- [SVGO releases](https://github.com/svg/svgo/releases): **v4.1.0 (2026-08-24)** contains script-parser/security hardening; optimizer is **not** sole SVG security assurance and is not installed.
- [SPDX license list](https://spdx.org/licenses/) **v3.29.0 (2026-09-16)**, [SIL OFL v1.1](https://openfontlicense.org/) and [FAQ](https://openfontlicense.org/ofl-faq/), [Creative Commons licenses](https://creativecommons.org/cc-licenses/): different rights/attribution/redistribution/RFN requirements; no Moonframe font/license granted by this research.
- [GitHub repository license docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository): public GitHub doesn't mean free redistribution without license. No OWNER-approved LICENSE invented.
- [web.dev Learn Images](https://web.dev/learn/images/), [MDN rel/icon/sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link), [GitHub LFS guidance](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), [MDN Autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay), [DTCG 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/): format/platform-dependent variants, storage decisions after measurement, sound disabled by default, and asset references separate from token values.

All conclusions supported by official sources are separated from **design recommendations** in the research log.

## Canonical architecture (proposed, not legally approved)

**Recommend:** One Moonframe umbrella brand, **15 named endorsed visual editions** with original signature motifs and composition, **not 15 automatically independent logos**, and not one recolored logo masquerading as 15 creative systems. Consumer app owns its application branding and default favicon. Master mark/wordmark artwork and trademark/legal clearance require owner approval; no mark created. `classic` doesn't imply official shadcn branding, `moonquest` isn't game IP, `moonledger` isn't accounting certification. Functional icon semantics remain common to all skins; decoration differs as per Skin Grammar, never changes meaning.

Status model: requested → brief-approved → source-created → provenance-reviewed → license-cleared → accessibility-reviewed → optimized → visual-reviewed → accepted → published → deprecated; quarantined/rejected hold. **Every acceptance needs human reviewer/date/evidence and real source/export SHA256 and rights documents**. Creative tool prompts or AI generation are NOT legal originality/trademark clearance; public redistributable asset pack license remains open.

## Actual repository changes (new + amended)

| File | Authority / effect |
|---|---|
| [Audit](original-asset-brand-audit.md) | Exact repo HEAD/inventory, 14 severity findings and source map |
| [Research log](../research/original-asset-brand-research-log.md) | Official standards/license/media/security evidence |
| [New Original Asset & Brand Bible](../brand/original-asset-brand-bible.md) | Umbrella brand, art/IP/rights, logo/icon/raster/vector/font/SFX rules and source/export governance |
| [Existing asset manifest refined in-place](../../contracts/moonframe-asset-manifest-v0.1.json) | Preserved all 15 empty skin records and no assets; ten candidate groups explicitly not mandatory per skin; pending licenses/brand |
| [15 derivative per-skin briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json) | Distinct motifs, minimum/optional treatment, neighboring anti-overlap, approval missing |
| [Conditional Draft-2020-12 record schema](../../schemas/moonframe-asset-record.schema.json) | Asset provenance and conditional accepted/published SVG/raster/font/audio metadata; structural only |
| [10 invalid + 1 valid synthetic metadata fixtures](../../contracts/fixtures/original-asset-v0.1.json) | Detects fake licensing/approval/source/paths and noncanonical ID in bounded validator |
| [120-case appearance ledger](../../contracts/moonframe-asset-qa-coverage-v0.1.json) | Four semantic asset contexts × 15 skins × Light/Dark, all `not-rendered`/0 pass; 105 pair reviews remain separate |
| [ADR-0006 proposed](../adr/0006-original-asset-pipeline-and-brand.md) | Endorsed model, deterministic pipeline, Git vs LFS/CDN decision pending real sample |
| [Asset QA](../qa/original-asset-validation-plan.md) | Future file/sha/rights/sanitizer/contrast/font/brand/SFX and visual/manual release gates |
| [15 atomic tasks](../backlog/original-asset-atomic-issues.md) | Dependency-ready seeds, no GitHub issues created |
| [Existing SFX](../../contracts/moonframe-sfx-contract-v0.1.json), [README](../../README.md), [Master Bible](../moonframe-ui-design-system-bible-v1.3.md), [Roadmap](../implementation-roadmap.md), [Governance](../architecture/decisions-and-governance.md), [Global QA](../qa/validation-strategy.md) | Linked unique authority; opt-in SFX unchanged; no duplicate skin/brand/token/component rules |

## Validation evidence (not asset production)

**GitHub Actions [run 40181501899](https://github.com/bjo163/moonframe/actions/runs/40181501899) on `eb1d8f28` completed SUCCESS**, including:
- `node scripts/validate-contracts.mjs`: **PASS** — all original cross-doc invariant/Markdown links plus 15 canonical briefs, planned-empty asset inventory, owner-unapproved brand, SFX off, record schema structural markers, 120 unique coverage slots with zero passes.
- `node scripts/validate-contracts.mjs --self-test`: **PASS** — all 10 metadata invalid examples rejected, fake visual rights/license and accepted inventory blocked, 120-slot incomplete/fake review errors detected, existing token/component/auth/data/skin/premium invalid fixture checks still green.

**NOT RUN:** Generic Draft 2020-12 schema evaluation with independent validator, SVG XML parsing/sanitization, SVGO executable/version install, raster export/optimization/image inspection, font license binary coverage verification, audio production/browser playback, real sha256 source/output, actual screenshot/contrast tests, AT/keyboard review, 15 unique artworks and 105 visual-pair human review, legal/trademark search. A green Node contract CI is not trademark/license clearance or a finished brand.

Some intermediate CI runs were red while newly linked documents were not yet committed; subsequent head `eb1d8f` green. Final report commit requires its own subsequent successful run.

## Remaining open decisions

Owner/legal must approve (1) umbrella brand/edition trademark and mark concept, (2) repository public code license vs copyright/brand/icon/font/audio licenses, (3) which font families and distribution are cleared (none today), (4) favicon/PWA/browser targets and variants, (5) binary master source ownership and storage strategy, (6) SVG sanitizer/tool/tool-version proof, (7) optional sonic pack/no-pack. SVG/PNG/ICO production and per-skin mark necessity depend on that approval.

**GitHub Issues:** six existing unchanged; zero new issue created. [Atomic backlog](../backlog/original-asset-atomic-issues.md) has 15 proposed work items; existing #4/#6 and roadmap MF-080–086 cover overlapping tasks. Recommended next: MF-ASSET-001 → 002/003/004 → 005/006/007/008 → 009/010/011/012; 013/014/015 only after separate authorization for artwork/visual production and real review.

**No production files created:** no logo, SVG, PNG, ICO, WebP, AVIF, illustration, third-party image, font file, SFX/audio file, React component, media pack or distribution publication. All rights, visual uniqueness and release claims remain **unapproved/not-reviewed/not-produced**.
