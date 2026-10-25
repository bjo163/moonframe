# Original Asset & Brand — 15 issue-ready small tasks

**2026-10-25.** Status: proposed, not implemented. **Zero new GitHub issues**; dedupe against existing [#1](https://github.com/bjo163/moonframe/issues/1), [#4](https://github.com/bjo163/moonframe/issues/4), [#5](https://github.com/bjo163/moonframe/issues/5), [#6](https://github.com/bjo163/moonframe/issues/6) and roadmap MF-080–086. Do not create new branches or force push. Future asset production (013–015) requires separate owner approval.

## MF-ASSET-001 — Approve umbrella brand and 15 edition labels

**Dependency:** GitHub #4. **File scope:** docs/brand/original-asset-brand-bible.md. **Goal / acceptance:** Owner accepts/shared master identity versus 15 unique marks. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-002 — Define separate package/art/font/SFX license rights

**Dependency:** MF-ASSET-001. **File scope:** contracts/moonframe-asset-manifest-v0.1.json. **Goal / acceptance:** Real repository LICENSE and asset license decision, rights evidence and legal reviewer. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-003 — Asset ID + conditional metadata schema

**Dependency:** MF-ASSET-001. **File scope:** schemas/moonframe-asset-record.schema.json. **Goal / acceptance:** No accepted record without source, hashes, evidence, license, reviewer. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-004 — Review all 15 written skin briefs

**Dependency:** MF-ASSET-001 and existing #6. **File scope:** contracts/moonframe-skin-asset-briefs-v0.1.json. **Goal / acceptance:** Art direction, minimum vs optional and nearest-skin distinctiveness. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-005 — SVG sanitization and SVGO reproducibility spike

**Dependency:** MF-ASSET-003; GitHub #1. **File scope:** docs/qa/original-asset-validation-plan.md. **Goal / acceptance:** Pinned sanitizer/optimizer and unsafe XML inputs, viewBox/ID collision checks. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-006 — Functional icon/BrandMark authority

**Dependency:** MF-ASSET-003 and MF-API-001. **File scope:** docs/component-api-behavior-bible.md. **Goal / acceptance:** Semantic icons, label and rights consistency regardless of skin. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-007 — Raster, favicon and platform matrix

**Dependency:** GitHub #1/#4. **File scope:** docs/brand/original-asset-brand-bible.md. **Goal / acceptance:** Only justified WebP/AVIF/PNG/ICO variants with dimensions/alpha/performance proof. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-008 — Typography/font licensing and fallback

**Dependency:** MF-ASSET-002. **File scope:** docs/brand/original-asset-brand-bible.md. **Goal / acceptance:** Exact version/license/RFN/script/redistribution and failure fallback. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-009 — Pattern texture & illustration overlap review

**Dependency:** MF-ASSET-004 and existing #6. **File scope:** contracts/moonframe-skin-asset-briefs-v0.1.json. **Goal / acceptance:** No borrowed manga/game IP; grayscale and decoration-off review. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-010 — Optional SFX rights and browser QA

**Dependency:** MF-ASSET-002 and MF-084. **File scope:** contracts/moonframe-sfx-contract-v0.1.json. **Goal / acceptance:** No autoplay, mute/consent, audio rights, visual equivalent. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-011 — Git vs Git LFS vs object-store proof

**Dependency:** MF-ASSET-003/005. **File scope:** docs/adr/0006-original-asset-pipeline-and-brand.md. **Goal / acceptance:** Measured real binary size/churn, immutable generated export and checksum. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-012 — Validator invalid fixtures and CI

**Dependency:** MF-ASSET-003/004. **File scope:** scripts/validate-contracts.mjs. **Goal / acceptance:** Reject false licenses/reviews/unsafe paths/unknown skin IDs. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-013 — Future four-skin asset pilot — not authorized now

**Dependency:** Separately authorize after 001–012. **File scope:** future artwork/master source. **Goal / acceptance:** Classic/Punk/Zine/Ledger Light/Dark and human rights/visual QA. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-014 — Future full 15×2 and 105-pair visual review

**Dependency:** MF-ASSET-013. **File scope:** contracts/moonframe-skin-grammar-contract-v1.0.json. **Goal / acceptance:** Human screenshots, eight-dimension proof and grayscale/decoration-off. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.

## MF-ASSET-015 — Asset release, deprecation and distribution

**Dependency:** MF-ASSET-014; GitHub #4. **File scope:** contracts/moonframe-asset-manifest-v0.1.json. **Goal / acceptance:** Source/export SHA, versioning, rights/brand approval and rollback. **Status:** proposed.

**Non-goals:** no production logo, fonts, images, SFX, React code or unlicensed downloads in the current specification phase.

**Checks/DoD:** exact scope and reviewer/owner, primary source/version, rights/provenance, icon/focus/contrast and optional audio implications, light/dark and reduced-decoration QA if relevant, rollback/migration note, relevant file links and validator results. Only use `node scripts/validate-contracts.mjs --self-test` as a verified command for static contract work. Asset/brand/legal approval requires evidence beyond static CI.


## Sequence

Consumer/distribution #1/#4 → 001 → 002/003/004 → 005/006/007/008/009/010/011/012 → *new authorization for art production* 013 → 014 → 015. Retain canonical Skin Grammar/Theme/Token/SFX owners.
