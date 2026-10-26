# Moonframe UI — M13 Final Cross-Domain Reconciliation & AI-Local Handoff

**Date:** 2026-10-26 (Asia/Jakarta) · **Repository:** [bjo163/moonframe](https://github.com/bjo163/moonframe) · **Branch:** `main` only.  
**Verdict:** **CONDITIONAL GO for small, scoped local implementation; NO-GO for public design/asset release and final visual approval.**  
**Live readiness contract:** [`MF-M13-READINESS-001`](../../contracts/moonframe-m13-readiness-gates-v0.1.json). **Machine integrity gate:** [`scripts/verify-m13-handoff.mjs`](../../scripts/verify-m13-handoff.mjs).  
**Audit baseline:** [green run #40252233550](https://github.com/bjo163/moonframe/actions/runs/40252233550) at `5d18bbc9a3d7f385a79cd039ba047c4104a83f50` (contract validation/negative fixtures/token bridge/unit+SSR/TypeScript/Next build/Playwright/capture inventory). **Subsequent commits are not automatically covered by this historical green run**; read the newest Actions run before executing each task.

## 1. Final scope and source-of-truth policy

This document **reconciles existing authorities**, does not replace their normative content or claim finished visuals. The earlier M0–M12 **57/57** items are historical delivery accounting. The new M13 [292 visual foundation tasks](../backlog/visual-fidelity-subatomic-tasks.md) plus [168 image-reference and optional brand tasks](../backlog/reference-mockups-subatomic-tasks.md) form **460 distinct `MF-VF-001…460` IDs** with **no missing dependencies and no graph cycles**. A forward dependency `MF-VF-048 → MF-VF-049` exists and is allowed by DAG, so numeric ascending order is NOT guaranteed executable order; use dependencies and live status instead. The 460 counts are task records, not automatically 460 GitHub Issues. Code fixes performed in this audit require status reconciliation; do not continue to label all previously planned items done or not-done without evidence.

| Domain | Normative authority | Implementation authority | Evidence / QA owner | Real observed boundary |
|---|---|---|---|---|
| 15 skin IDs, system/light/dark, density | [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) | `src/skins.js`, `src/theme.js` | theme/unit/Playwright and skin lab | 15 IDs exact; 30 light/dark appearances, system is preference, not 31st identity |
| Skin noncolor grammar and anti-overlap | [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) and [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json) | `src/styles.css` + consumer templates | 105 pair record matrix, **human** screenshot review | String/selector scores are structure-only; human judgment is pending |
| Token names and source-values | [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) and [Token Source Plan](../../contracts/moonframe-token-source-plan-v0.1.json) | `scripts/generate-tokens.mjs`, `src/styles.css` | `pnpm run tokens`, real contrast, future canonical values | 78 planned names, 30 source slots **pending**; 17 interim runtime CSS variables and deterministic generator slice exist |
| Consumer identity accents | [Brand Overlay Proposal](../../contracts/moonframe-consumer-brand-overlay-contract-v0.1.json) | **not implemented** in theme API | SSR/hydration/contrast and app isolation later | Moonpunk acid-lime default can coexist with Moonwitness magenta as proposed opt-in layer; no 16th skin |
| Component behavior | [Component API Contract](../../contracts/moonframe-component-api-contract-v0.1.json) and [Component Manifest](../../contracts/moonframe-component-manifest-v0.1.json) | `src/components.js`, `src/components.d.ts` | browser accessibility and consumer API tests | 151 **spec candidates** != current exported/composed components; no permission to claim all 151 shipped |
| Templates and starters | [Page Manifest](../../contracts/moonframe-page-template-manifest-v0.1.json), [Starter Manifest](../../contracts/moonframe-starter-manifest-v0.1.json) | `apps/moonframe/templates/index.tsx`, `apps/moonframe` | preview and scenario-level acceptance | 72 **specified** page records vs **43 implemented** showcase templates; 8 starter records and showcase starters |
| SFX events, consent, aliases, sound rights | [SFX Contract](../../contracts/moonframe-sfx-contract-v0.1.json), [Asset Bible](../brand/original-asset-brand-bible.md) | `SFXProvider`/`useSFX` in `src/components.js` | unit/browser gesture, lifecycle, denied-audio tests | Six events and six aliases match; WebAudio synthesizer runs opt-in, but no licensed binary pack and unresolved consent/playback/lifecycle gaps |
| Motion/state behavior | [Motion Recipes](../../contracts/moonframe-motion-recipes-v0.1.json), interactions/state matrix | CSS recipes/runtime components | 180 planned motion QA cells plus browser checks | 25 motion recipe records, 18 interaction patterns; some CSS transitions work, not complete human coverage |
| Art/logo/icon provenance | [Asset Manifest](../../contracts/moonframe-asset-manifest-v0.1.json), [Asset Briefs](../../contracts/moonframe-skin-asset-briefs-v0.1.json), [Brand Bible](../brand/original-asset-brand-bible.md) | 15 JSX vector brand marks, future external source SVG/raster packs | 120 planned asset QA cells, checksum/license/source review | Inline vectors do NOT imply source SVG masters, trademark clearance, a master wordmark, exported artwork or approved asset packs |
| Four Moonwitness references | [Creative Reference Contract](../../contracts/moonframe-creative-reference-contract-v0.1.json) | consumer-provided imagery, future generic visual layer slots | [Visual Reference Bible](../visual/cinematic-mangapunk-reference-bible.md) and new tasks | Four PNGs verified by actual SHA-256 in this conversation but **binary files are not committed in GitHub**; no pixel-level fidelity claims |
| Package/release | [Package Architecture](../../contracts/moonframe-package-architecture-v0.1.json), [Release Train](../architecture/release-train-and-adoption.md) | root `package.json` and actual tarball/build | clean CI, license, real registry release proof | Current metadata: `@moonwitness/moonframe@0.1.1`, `private:false`, `license: MIT`; historical private `@moonframe/ui` proposal is not current. No standalone `LICENSE` in audited tree; no npm registry publish independently confirmed |
| Security/auth/data integrations | [Auth Flow](../../contracts/moonframe-auth-flow-contract-v0.1.json), [Data Workspace](../../contracts/moonframe-data-workspace-contract-v0.1.json) and [Integration Manifest](../../contracts/moonframe-integration-manifest-v0.1.json) | UI demos/optional consumer adapters | keyboard/authorization clarity, backend integration proof | Auth UI is *not* an actual identity provider, demo data is *not* real-time, optional integrations not selected by specification |
| Accessibility | [Accessibility & Visual QA Bible](../qa/accessibility-visual-qa-bible.md) | actual rendered DOM and browser | automated tests + manual AT and contrast review | 270 baseline cells specified; browser smoke and token contrast do **not** certify complete product WCAG AA |

## 2. Canonical invariants (do not rewrite to make numbers look complete)

1. Exactly **15 canonical skin IDs** across theme/grammar/specification/assets. Exactly **30 effective light/dark appearances**. `system` is a preference resolver; density, contrast and reduced motion are independent.
2. **105 unordered skin pairs** are review *slots*, not automatically approved visual comparisons. 4-skin pilot has 6 pairs. No fake `OWNER-APPROVED` by algorithm.
3. **78 proposed token identifiers × 30 intended appearance slots** remain unapproved full source-value matrix. The currently working **17 runtime CSS bridge variables** are a separate implementation stage, not a contradiction to be fixed by pretending 78×30 production values exist.
4. **Six SFX canonical IDs** (`success`, `warning`, `error`, `notification`, `confirmation`, `quest-reward`) remain stable. Alias names are actually recognized in runtime, even though historic contract called them proposal-only; this is recorded as runtime-present / public-semver approval pending.
5. **No compulsory sound on page load**, no music pack, no arbitrary animation requirements, no sound-only critical information.
6. **One master Moonframe product identity** (future owner-approved mark), 15 visual *editions*, and separately owned Moonwitness brand/crown/characters/content. Do not clone Moonwitness logo or copyrighted artistic/song content into generic package assets.
7. **SFX cannot be declared production-safe yet:** `defaultEnabled` currently can initialize `consentGranted` programmatically; `play()` may claim `played:true` when AudioContext is unavailable or throws; contexts are constructed per cue with no lifecycle close and mute/revoke is not guaranteed to stop sound already active. Fix with an explicit user-gesture/consent and truthful playback state design; test denial/background/reduced-motion/category exclusions. This is a **feature-specific blocking gate**, not grounds to mark all other contracts invalid.
8. Historical packages/QA signoffs may be preserved as records, but **may not certify current HEAD** or all M13 visuals without a matching CI run, artifact hashes and human visual signoff.

## 3. Concrete cross-check counts, without category conflation

| Category | Structure checked | Implementation/approval interpretation |
|---|---:|---|
| Skin IDs | 15 consistent | Theme/skin runtime exists |
| Light/Dark | 30 planned and browser-captured | Real artwork reference parity not reviewed |
| Skin pairs | 105 | Automated contract-string check; human review pending |
| Token names | 78 | Normative future dictionary, *not all implemented CSS variables* |
| Runtime bridge | 17 | Generator/CSS bridge tests passed at cited CI |
| Visual baseline coverage | 270 | Contract slots, not 270 human passes |
| Asset QA | 120 | No licensed artwork acceptance inferred |
| Motion QA | 180 | Contract slots, not 180 rendered approvals |
| SFX | 6 events + 6 aliases | Contract/runtime IDs match; sound policy gaps still open |
| Component records | 151 | Proposed catalog; runtime library smaller |
| Page template records | 72 | Specified; **43** implemented gallery pages |
| Starters | 8 | Specified and showcased |
| Four user references | 4 PNG digests verified | Original images not versioned in GitHub |
| Visual TODO | 292 + 168 = **460** | No duplicate IDs/missing edges/cycles; completion per file evidence |

## 4. Release/security and intellectual-property blockers

- **P0 publication truth:** `package.json` presently declares public, MIT, version 0.1.1. The historical documents mention a private 0.1.0 `@moonframe/ui` tarball. Owner must explicitly reconcile name/license/registry release policy and add a suitable standalone `LICENSE` if adopting MIT for redistribution. Repository visibility and `package.json` license metadata alone are not release proof.
- **P1 optional audio:** improve WebAudio context lifetime, direct gesture consent policy, alias stability decision, true playback result and active stop-on-mute. Default stays off; prevent uninvited sound in auth/finance/destructive contexts.
- **P1 asset rights:** exact four reference files need binary import/checksum and explicit usage permission before derivative reproduction or screenshot fidelity scoring. An example reference is not automatically a sublicensable generic vector/illustration.
- **P1 visual honesty:** generated 105 pair report was previously mislabeled `OWNER-APPROVED`. The generator and current report now identify it as automated structural evidence; real screenshot/side-by-side human acceptance remains a distinct manual gate.
- **P1 theme/brand migration:** do not invent a `brandPalette` prop or replace Moonpunk default acid-lime with magenta globally. Approved consumer overlay must preserve semantic colors, focus, SSR hydration, forced colors and no cross-tenant persisted branding.
- **P1 component completeness:** 151 component IDs and 72 pages were future catalog specifications; don't rebrand 70+ current exported library items as all 151 already working. User-facing counts must come from current generated catalog.
- **P2 typography/media:** original brush lettering must still be selectable accessible headings/labels; handwritten styles belong mainly to display, not dense table body text. No leaked third-party font binaries or copyrighted song lyrics in distributed art.

## 5. QA pipeline stages (build pass ≠ visual approval)

**Technical gate** — current CI runs contract validation and negative fixtures; token bridge proof; unit/SSR; TypeScript; Next.js build; Playwright tests; capture inventory; and artifact upload. It is safe to begin a narrowly scoped local implementation after checking latest `main` and any regressions.

**Structural skin gate** — 15 skins and 105 pairs may pass metadata and CSS selector checks. The tool prints `STRUCTURAL`, not a human art verdict.

**Reference/render gate** — import exact user PNG bytes after rights confirmation; capture R01 dashboard/R02 landing/R03 poster/R04 sign-in at fixed source data/fonts/clock, 1440/768/360, optional artwork removed and grayscale, light/dark where meaningful, focus/zoom/RTL/forced colors.

**Human decision** — name, review date, rendered commit SHA, source reference hash and screenshots, specific accepted/rejected visual deltas, exceptions and IP/license approval. Without this, the status remains `pending-human-review`.

**Release gate** — package metadata/licensing, SFX feature hardening, compatibility, external publication decision and consumer regression smoke. No blanket “100% approved” claim.

## 6. Instructions for small AI agents: dependency ordering, not bulk execution

The [local agent handoff](../handoff/moonframe-visual-reference-microagent-prompt.md) must be used **one `MF-VF` task at a time**, with live dependency status. Don't redo already-fixed screenshot test/workflow tasks simply because prior TODO checkboxes are stale.

**Recommended next sequence:**

1. Validate live `main` with `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs` and inspect latest [CI](https://github.com/bjo163/moonframe/actions). Confirm no new work is overwritten; record HEAD.
2. Update M13 TODO checkboxes **only** for tasks whose exact acceptance evidence now exists (particularly CI unit/browser/screenshot and score truth fixes). Maintain root count as a derived summary, not hand-edited fiction.
3. Resolve the current package/README/LICENCE name/version release gap without publishing by default; fix false storefront counts and auth demo claims.
4. Address SFX hardening in one bounded action each: consent boundary, truthful playback, cleanup/stop, reduced-stimulation/context, alias compatibility, browser tests; never add audio binaries pre-approval.
5. Freeze R01–R04 original references and same-content fixtures; complete Classic/Moonpunk/Moonzine/Moonledger pilot first.
6. Generate *original approved* vector/geometric motifs, brush strokes, original illustrations or image-derived art only where rights and source master are documented; keep consumer-specific logos and narrative out of core.
7. Run 105-pair human review and gated release only after actual screen diff evidence. No new branch/issue or public npm publish as a side effect of a local microtask.

**When blocked:** Record the task `blocked`, blocker type (permission, user rights/owner signoff, asset source, dependency, CI), exact file/commit and a safe fallback. Do not silently bypass blockers or mass-mark tasks complete.

## 7. Mandatory handoff result / “definition of done”

Every completed micro-task must report: task ID; upstream dependency evidence; `git rev-parse HEAD` before/after; exact files edited; unit/type/build/browser commands actually run (including exit code); screenshot or source asset path + SHA-256 when applicable; accessibility/rights effect; rollback; and current `planned/implemented/captured/human-reviewed/accepted` classification.

**Final gate wording for this audit:** **M13 specification and repository cross-contract consistency: CONDITIONALLY READY FOR IMPLEMENTATION. Visual and asset acceptance: NOT READY. Public package/SFX feature release: BLOCKED pending gates.** No tool or generated report can grant an owner signoff.
