# Moonframe UI — Component API & Behavior Audit

**Waktu audit:** 2026-10-25 (Asia/Jakarta). **Repo:** https://github.com/bjo163/moonframe · **default branch:** `main` · **starting HEAD:** `ed1ebc17bf3f218a30039341126e1082ffbfee26`. **Metode:** GitHub recursive tree lengkap (non-truncated), baca penuh manifest/doc inti, status CI, 12 commit terakhir, 6 issues, 0 PR. Remote inspection ≠ local checkout; working-tree lokal tidak dapat diklaim bersih. Hak akses connected GitHub: push true; `main` tidak protected saat audit.

## Inventaris nyata

46 file terlacak. Ada README, master Design System Bible, Theme/Token/Skin Grammar, Premium Catalog, Authentication, Data Workspace, audit/research/ADR, 151 entri komponen di `contracts/moonframe-component-manifest-v0.1.json`, 144 blok (13 family + 131 concrete), 72 halaman, 8 starters, Node structural validator dan satu workflow GitHub Actions. Tidak ditemukan `package.json`, lockfile, TS/React runtime components, TypeScript declarations publik, Stories, rendered screenshots, accessibility browser tests, published package, component imports atau release artifacts. Last pre-audit [Actions #40173990549](https://github.com/bjo163/moonframe/actions/runs/40173990549) sukses, **hanya static docs/contract validation**.

**Sumber & lokasi:** [README](../../README.md) bagian Current status/Documentation; [Master Bible](../moonframe-ui-design-system-bible-v1.3.md) §§3,5–8,10–15; [Premium Bible](../premium/premium-scope-bible.md) §2; [Component manifest](../../contracts/moonframe-component-manifest-v0.1.json) `components[]`; [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json) `skins`, `preferenceResolution`; [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) `pairwiseReviewMatrix`; [existing provider ADR](../adr/0001-primitive-provider.md); [QA](../qa/validation-strategy.md); [Roadmap](../implementation-roadmap.md). JSON source files are parsed, not interpreted from filenames.

## Evidence-based gaps

| ID | Severity | Evidence / contradiction | Why it matters | Corrective specification |
|---|---|---|---|---|
| API-01 | **P1** | 151 manifest entries, `proposedAPI.props = "typed contract pending provider spike"`, identical dummy variant/size defaults | Later agents invent incompatible public props | Define global convention, reference-owned per-item proposed behavior, explicit decision gates |
| API-02 | **P1** | Many `keyboard` fields say only “Follow APG” for everything; `Tooltip`/static cards are not same widget | Inaccessible or inconsistent key behavior | Finite APG/native pattern registry + 151 component-to-pattern refs |
| API-03 | **P1** | Broad default/focus/disabled/invalid state arrays copied to noninteractive content and providers | State explosion and contradictory test expectations | Applicability/NA matrix with per-family acceptance & risk |
| API-04 | **P1** | No canonical controlled state, events, refs or form semantics | Prop names/change timing/parent ownership and form reset ambiguity | Typed policies, state ownership, event order and disabled/readonly semantics |
| API-05 | **P1** | ADR-0001 provider selection deferred but components expose broad placeholder composition expectations | `asChild`/`render` provider lock-in before proof | Provider-neutral public contract; bounded 6-widget spike |
| API-06 | **P2** | `tier="premium-block"` appears on 25 **component** entries (Chip, TreeView, Calendar, FilePreview, etc.) | Tier mistaken for layer C block or readiness | Treat tier as release/distribution planning only; assign behavior layer independently |
| API-07 | **P2** | Legacy block `family:app-shell` and component `app-shell` overlap by unqualified ID | Cross-catalog resolution ambiguity | Honor qualified ID policy, no silent public rename |
| API-08 | **P2** | `Field`, `Label`, `Fieldset`, `FormMessage` and `FormLayout` have unresolved responsibility | Duplicate labels/errors and hidden behavior | Distinct owner model and native HTML associations |
| API-09 | **P2** | DataTable and auth flows only have domain-level catalogs | Shared boundary versus backend/security unclear | Reuse Data Workspace/Auth UI canonical docs; spec component callback boundary |
| API-10 | **P2** | No actual React/TS dependency nor SSR consumer matrix (issue #1) | Ref as prop / forwardRef / hydration and peer range undecidable | React 19 documentation research; version choice still open |
| API-11 | **P2** | CI validator checks catalogs but not per-component behavior coverage | Manifest may drift silently | Add no-dependency cross-contract checker and negative fixtures |
| API-12 | **P3** | No documented public slot/data attribute stability and CSS merge policy | Consumer CSS may depend on private DOM | Public hooks list/decision gate; no undocumented DOM promises |
| API-13 | **P3** | No package distribution choice (existing issue #4) | npm semver vs source-owned migration differs | Provisional exports, breaking-change review; defer package version commitment |
| API-14 | **P3** | No manually verified keyboard/screen-reader or 30 appearance screenshots | False release claims risk | Explicit evidence ledger and implementation/review gate |

**Initial counts:** P0 **0** · P1 **5** · P2 **6** · P3 **3**. Gaps describe pre-implementation specifications, not failing shipped components.

## Source-of-truth decisions

- 151 component names/IDs/tier remain canonical in [component manifest](../../contracts/moonframe-component-manifest-v0.1.json) (do **not** duplicate 151 inventory in prose).
- Public API conventions / state meaning / ownership: [Component API & Behavior Bible](../component-api-behavior-bible.md).
- Per-ID behavior proposal and open decisions: [API coverage contract](../../contracts/moonframe-component-api-contract-v0.1.json).
- State applicability/evidence expectation: [state matrix](../../contracts/moonframe-component-state-matrix-v0.1.json); keyboard patterns/mappings: [keyboard matrix](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json).
- Token names/appearance/preference are **not** owned here; [Theme](../../contracts/moonframe-theme-contract-v1.3.json) and [token architecture](../architecture/token-pipeline.md) remain authoritative.
- Skin construction/105 reviews remain in [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json).
- Premium/auth/data screens are owned by [blocks/page manifests](../../contracts/moonframe-block-manifest-v0.1.json) and [premium docs](../premium/premium-scope-bible.md); no business logic.
- ADR-0001 remains provider-unselected. Tests require source/consumer evidence, not marketing.

## Keep untouched and non-goals

Preserve the exact 15 IDs, Light/Dark resolved modes (30), 105 `not-reviewed` comparisons, 78 proposed token IDs and 30 pending token value slots. Preserve existing `app-shell` historical qualified-family exception. No production components, ThemeProvider implementation, assets, fonts, SFX, auth backend or data-grid engine. Do not claim build/browser/axe/SSR/a11y pass without code and CI traces.

## Safe sequencing

1. Canonical API conventions and annotated uncertainties.
2. Map 151 IDs to behavior families, applicable states, keyboard rules and planned tests.
3. Add schema + structural cross-reference and mutation-negative checks to existing validator.
4. Reconcile README/roadmap/master Bible; track provider spike in existing issue #3, consumer/React in #1, distribution in #4, visual fixtures in #6.
5. Only after evidence select provider/React support, then build minimal Classic/Moonpunk/Moonzine/Moonledger proof outside this phase.
