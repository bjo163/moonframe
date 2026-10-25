# Moonframe UI — Master Integration Issue Bible & Deduplicated Backlog

**Audit snapshot:** 2026-10-25 · **Branch policy:** use existing `main`, no speculative branch · **Status:** issue-ready planning (not production implementation). **Canonical issue status:** actual GitHub issue page once created. This document is a **staging/index**, not an independent status tracker. Master governance owner: [decisions-and-governance](../architecture/decisions-and-governance.md); [audit/evidence](../audit/master-integration-audit.md); [roadmap](../implementation-roadmap.md).

## Policy, hierarchy, priority, lifecycle

**Issue hierarchy:** broad release/milestone outcome → domain parent when justified → one focused task with one principal verifiable outcome. Small checklist belongs inside issue, not dozens of micro-issues. No automatic project board/milestone/license/assignee. Reuse six pre-existing IDs. Prefix `MFI-` isolates **integration work** from legacy `MF-`, `AUTH-`, `TOK-`, `PREM-` etc. Avoid collision with external stable IDs.

**P0** blocks integrity/safety; **P1** foundation/dependency; **P2** completeness; **P3** optional. Confidence is high unless explicitly marked otherwise. Choose priority by blocker severity, not ambition. Task type: `audit/research/decision/docs/contract/validation/test/governance/implementation-later`. Suggested fields: `type`, `priority`, `area`, `status` (do not create labels until settings are checked).

**Lifecycle:** `not-started → researching/proposed → specified → implemented → tested → reviewed → released`; `blocked` is a contextual state; `wont-do` requires decision. For documentation-only tasks completion is `specified/reviewed`, **never** `implemented` or `released`. Use separate spec/implementation/test/review/release statuses when necessary. No `tested` without test-run logs; no `reviewed` without reviewer/evidence; no `released` without tag/distribution evidence.

**Global AI-agent DoD:** inspect current HEAD and GitHub duplicates, read canonical docs + ADRs + dependencies, update only scoped files, run verified checks, report exact results and limitations, attach commit/PR/test/review evidence, keep skin IDs/modes stable, never invent approvals or create production assets in this docs sprint. New issues must include problem, status, type, owner if known, priority rationale, file scope, non-goals, blockers, acceptance checklist, evidence, risks and validation commands. Owner/assignee default unassigned.

## Already-created GitHub issues: retain, do not duplicate

| Stable ID | Issue | Intent | Disposition |
|---|---|---|---|
| MF-003 | #1 | [Consumer environment](https://github.com/bjo163/moonframe/issues/1) | existing-open; reuse |
| MF-004 | #2 | [Classic baseline](https://github.com/bjo163/moonframe/issues/2) | existing-open; reuse |
| MF-005 | #3 | [Primitive provider](https://github.com/bjo163/moonframe/issues/3) | existing-open; reuse |
| MF-006 | #4 | [Package boundary](https://github.com/bjo163/moonframe/issues/4) | existing-open; reuse |
| MF-013 | #5 | [DTCG subset](https://github.com/bjo163/moonframe/issues/5) | existing-open; reuse |
| MF-024 | #6 | [Skin Lab fixture](https://github.com/bjo163/moonframe/issues/6) | existing-open; reuse |

Existing issue #1 **is** MF-003 consumer environments. The superseded old roadmap text calling MF-003 a shadcn audit is **not** another new issue. Existing #2 Classic baseline / #3 provider spike cover that territory.

## Dependency-aware master integration backlog (12 tasks: 2 published, 10 proposed)

| ID | Priority | Type | Area | Dependencies | GitHub issue |
|---|---|---|---|---|---|
| MFI-001 | P0 | validation | governance | none | [#7](https://github.com/bjo163/moonframe/issues/7) |
| MFI-002 | P1 | validation | governance | MFI-001 | [#8](https://github.com/bjo163/moonframe/issues/8) |
| MFI-003 | P1 | validation | docs | MFI-002 | not-created |
| MFI-004 | P1 | docs | governance | MFI-002 | not-created |
| MFI-005 | P1 | decision | tokens-theme | MFI-002; #5 (MF-013) | not-created |
| MFI-006 | P1 | contract | component-api | MFI-004; #3 (MF-005) | not-created |
| MFI-007 | P1 | docs | premium | MFI-006 | not-created |
| MFI-008 | P1 | docs | auth-data | MFI-007 | not-created |
| MFI-009 | P2 | docs | assets-motion | MFI-002 | not-created |
| MFI-010 | P1 | test | qa | #6 (MF-024); MFI-004 | not-created |
| MFI-011 | P1 | decision | package | #1 (MF-003); #4 (MF-006); MFI-002 | not-created |
| MFI-012 | P2 | governance | github | MFI-001; MFI-002 | not-created |

### MFI-001 — Deteksi benturan task ID antara roadmap, backlog dan GitHub Issues

**Stable ID:** MFI-001  
**Type:** validation · **Priority:** P0 · **Area:** governance · **Status:** spec-proposed; GitHub issue open · **Owner:** unassigned

**Problem / evidence:** MF-003 di roadmap lama berarti audit shadcn, sedangkan issue #1 berarti consumer environment. CI saat ini tidak membuktikan konsistensi identitas task lintas dokumen.

**Scope / method:** Tambah pemeriksaan deterministik ke scripts/validate-contracts.mjs atau fixture governance kecil; definisikan mapping GitHub issue number ↔ stable task ID dari sumber data yang eksplisit.

**Non-goals:** Jangan mengubah enam issue lama, merenumber IDs, membuat branch, atau membangun UI.

**Dependencies / blockers:** none beyond approved baseline

**Affected canonical files/contracts:** `scripts/validate-contracts.mjs`, `docs/implementation-roadmap.md`, `docs/backlog/initial-issues.md`

**Acceptance checklist:**
- [ ] Fixture ID valid diterima; dua makna untuk satu ID ditolak dengan pesan file dan ID.
- [ ] Enam GitHub issue awal ditandai sebagai existing, bukan proposed baru.
- [ ] Legacy alias MF-003 memiliki catatan migrasi; pemeriksaan tidak bergantung network pada CI.
- [ ] Mode negatif menunjukkan exit code gagal; mode positif lulus.

**Validation plan:** node scripts/validate-contracts.mjs dan negative fixture khusus; lampirkan stdout/exit code.

**Risks / accessibility / compatibility / security:** False positive pada referensi historis; izinkan annotation 'historical/superseded' yang eksplisit.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-002 — Validasi canonical ownership registry dan cross-domain references

**Stable ID:** MFI-002  
**Type:** validation · **Priority:** P1 · **Area:** governance · **Status:** spec-proposed; GitHub issue open · **Owner:** unassigned

**Problem / evidence:** Governance sudah memetakan pemilik domain tetapi mesin belum membuktikan keunikan owner dan keberadaan semua path.

**Scope / method:** Tambahkan matriks uji berbasis registry normatif di docs/architecture/decisions-and-governance.md dan checker ringan yang membaca sumber terstruktur tunggal bila diperlukan.

**Non-goals:** Jangan menggandakan kontrak token/skin/component ke manifest baru yang tidak dipakai.

**Dependencies / blockers:** MFI-001

**Affected canonical files/contracts:** `docs/architecture/decisions-and-governance.md`, `scripts/validate-contracts.mjs`

**Acceptance checklist:**
- [ ] Seluruh 15 domain map memiliki satu pemilik kanonik dan file eksis.
- [ ] Referensi dependency dan path file diuji; output audit menunjukkan domain yang gagal.
- [ ] Cross-repo/public external links dibedakan dari local paths.
- [ ] README menautkan registry tanpa menyimpan salinan mutable kedua.

**Validation plan:** node scripts/validate-contracts.mjs dan bukti lintasan dokumentasi.

**Risks / accessibility / compatibility / security:** Duplikasi SoT jika menambah JSON baru tanpa consumer; prioritaskan single authority.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-003 — Audit seluruh tautan Markdown dan referensi kontrak relatif

**Stable ID:** MFI-003  
**Type:** validation · **Priority:** P1 · **Area:** docs · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Validator hijau tidak boleh diartikan semua link eksternal/internal telah diuji menyeluruh.

**Scope / method:** Tambahkan/luaskan pemeriksaan file-local URL relatif Markdown/JSON, anchor praktis dan negatif fixture untuk missing file; catat external links sebagai network-not-checked.

**Non-goals:** Jangan menulis ulang semua link atau mengandalkan akses jaringan CI.

**Dependencies / blockers:** MFI-002

**Affected canonical files/contracts:** `scripts/validate-contracts.mjs`, `docs/qa/validation-strategy.md`

**Acceptance checklist:**
- [ ] Local broken file link membuat validasi gagal deterministik.
- [ ] Valid local anchors diuji pada lingkup yang didukung; unsupported anchors dicatat.
- [ ] URL eksternal tidak salah disebut telah diverifikasi oleh offline CI.
- [ ] Regression case pada dokumen nested dan tautan dengan query/fragment lulus.

**Validation plan:** node scripts/validate-contracts.mjs; fixtures fail/pass.

**Risks / accessibility / compatibility / security:** Link eksternal, anchors heading GitHub memiliki variasi parsing.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-004 — Normalisasikan vocabulary spec, implementation, test, review dan release

**Stable ID:** MFI-004  
**Type:** docs · **Priority:** P1 · **Area:** governance · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Status khusus seperti specified-family-derived, pending, not-rendered dan not-reviewed harus diterjemahkan ke tahapan yang berbeda; jangan disamakan dengan lulus QA.

**Scope / method:** Buat tabel status lintas kontrak + transisi dan evidence minimum di governance/QA; cek pemakaian di roadmap dan issue template.

**Non-goals:** Jangan mengubah status menjadi implemented, reviewed atau released.

**Dependencies / blockers:** MFI-002

**Affected canonical files/contracts:** `docs/architecture/decisions-and-governance.md`, `docs/qa/validation-strategy.md`, `docs/implementation-roadmap.md`

**Acceptance checklist:**
- [ ] SpecStatus, implementationStatus, testStatus, reviewStatus, releaseStatus dibedakan.
- [ ] not-reviewed pada semua 105 pasangan dan pending pada semua 30 slot tetap apa adanya.
- [ ] Transisi meminta artefak bukti dan reviewer sesuai tahap.
- [ ] Sampel dari 4 kontrak diuji terhadap mapping status.

**Validation plan:** Review manual terhadap empat kontrak dan validator yang sudah ada.

**Risks / accessibility / compatibility / security:** Status mengandung domain-specific vocabulary yang tidak boleh disapu bersih.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-005 — Rekonsiliasi token layers, mode resolution dan kontrak provider

**Stable ID:** MFI-005  
**Type:** decision · **Priority:** P1 · **Area:** tokens-theme · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** DTCG 2025.10 subset dan batas runtime/build perlu disetujui sebelum source token 30 appearances.

**Scope / method:** Link ADR-0002/0003, theme contract, token dictionary/source plan; identifikasi nilai final yang memang pending.

**Non-goals:** Jangan membuat nilai warna token final atau generator produksi.

**Dependencies / blockers:** MFI-002; #5 (MF-013)

**Affected canonical files/contracts:** `docs/adr/0002-token-format-and-generator.md`, `docs/adr/0003-theme-runtime-and-css-output.md`, `contracts/moonframe-token-source-plan-v0.1.json`

**Acceptance checklist:**
- [ ] Aturan $type/$value/alias/cycle dan fallback tertulis dengan sumber resmi.
- [ ] Dua mode efektif dan system preference konsisten.
- [ ] Primitive/semantic/recipe/motion token ownership eksplisit.
- [ ] 30 coverageSlots tetap pending tanpa approval visual.

**Validation plan:** Jalankan validator plus fixture alias/type negatif setelah ADR disetujui.

**Risks / accessibility / compatibility / security:** Klaim compliance penuh DTCG padahal hanya subset; versi parser belum dipastikan.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-006 — Tutup gap public API dan state/keyboard semantics lintas 151 komponen

**Stable ID:** MFI-006  
**Type:** contract · **Priority:** P1 · **Area:** component-api · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Manifest berisi 151 ID cocok, tetapi kecocokan ID bukan berarti signature, event dan aksesibilitas sudah approved.

**Scope / method:** Audit sampel per keluarga dan tuliskan keputusan terbuka pada canonical API contract/behavior Bible, tanpa mengubah ID.

**Non-goals:** Jangan implementasikan React components atau pilih primitive tanpa ADR.

**Dependencies / blockers:** MFI-004; #3 (MF-005)

**Affected canonical files/contracts:** `docs/component-api-behavior-bible.md`, `contracts/moonframe-component-api-contract-v0.1.json`, `contracts/moonframe-keyboard-interaction-matrix-v0.1.json`

**Acceptance checklist:**
- [ ] Matriks API/refs/controlled semantics mempunyai approval gate.
- [ ] Kasus Dialog, Select, Combobox, nested Menu diverifikasi terhadap APG.
- [ ] 151 ID tetap satu-ke-satu lintas manifest/API/state/keyboard.
- [ ] Tidak ada claimed tested tanpa run/test evidence.

**Validation plan:** node scripts/validate-contracts.mjs dan review API per keluarga.

**Risks / accessibility / compatibility / security:** Provider drift; shared behavior harus tetap invariant di semua skin.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-007 — Petakan batas primitive, komponen, block, template, starter dan adapter

**Stable ID:** MFI-007  
**Type:** docs · **Priority:** P1 · **Area:** premium · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Beragam manifest premium berpotensi mengulang auth/data APIs dan memberi kesan siap pakai.

**Scope / method:** Buat index referensi ID dan ownership untuk katalog A–F; resolve overlap pada metadata bukan menyalin seluruh daftar.

**Non-goals:** Jangan membangun premium blocks, template atau app starter.

**Dependencies / blockers:** MFI-006

**Affected canonical files/contracts:** `docs/premium/premium-scope-bible.md`, `contracts/moonframe-block-manifest-v0.1.json`, `contracts/moonframe-page-template-manifest-v0.1.json`

**Acceptance checklist:**
- [ ] Setiap contoh sampel masuk tepat satu level produk, dengan komposisi lintas level diizinkan.
- [ ] Auth flow/data preset menunjuk manifest owner, tidak menggandakan API.
- [ ] Fitur business logic dikecualikan secara eksplisit.
- [ ] Tidak ada perubahan ID publik tanpa ADR.

**Validation plan:** Contract validation dan spot-check 20 entri lintas kategori.

**Risks / accessibility / compatibility / security:** Duplicate catalog entry vs legitimate composition; catat keputusan.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-008 — Rekonsiliasi UI auth dan advanced data workspace dengan boundary konsumen

**Stable ID:** MFI-008  
**Type:** docs · **Priority:** P1 · **Area:** auth-data · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Flow login/MFA/passkey dan enterprise grid mudah tercampur dengan layanan backend dan ownership data.

**Scope / method:** Link canonical auth flow contract dan data query contract dari premium catalog, lengkapi adapter boundary.

**Non-goals:** Jangan menambah auth backend, provider credential/session manager, SQL query engine atau policy enforcement.

**Dependencies / blockers:** MFI-007

**Affected canonical files/contracts:** `docs/premium/auth-ui-suite.md`, `docs/premium/data-workspace.md`, `contracts/moonframe-auth-flow-contract-v0.1.json`, `contracts/moonframe-data-workspace-contract-v0.1.json`

**Acceptance checklist:**
- [ ] UI/integration boundary untuk login/MFA/session dan query/select/sort jelas.
- [ ] Server-side security enforcement dan tenant policy milik consumer app.
- [ ] Tidak ada flow API yang diduplikasi ke template catalog.
- [ ] Acceptance states: loading, partial, empty, error, unauthorized terdaftar.

**Validation plan:** Schema/manifest checks; manual threat-boundary review.

**Risks / accessibility / compatibility / security:** Security boundary kabur; validasi kontrak bukan pentest.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-009 — Satukan rujukan asset provenance, motion policy dan opt-in SFX

**Stable ID:** MFI-009  
**Type:** docs · **Priority:** P2 · **Area:** assets-motion · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Visual recipe bisa merujuk assets/motion, tapi kepemilikan produksi dan evidence harus tetap terpisah.

**Scope / method:** Audit references skin asset briefs, motion recipes, SFX policy, rights/provenance and QA.

**Non-goals:** Jangan menghasilkan SVG/PNG/font/audio atau merilis pack.

**Dependencies / blockers:** MFI-002

**Affected canonical files/contracts:** `docs/brand/original-asset-brand-bible.md`, `docs/motion/motion-interaction-sfx-bible.md`, `contracts/moonframe-sfx-contract-v0.1.json`

**Acceptance checklist:**
- [ ] SFX opt-in dan off-by-default tidak dapat menjadi satu-satunya kanal status.
- [ ] Asset IDs menunjuk brief/provenance, tidak dianggap file produksi.
- [ ] Reduced motion, mute, contrast memiliki QA rubric.
- [ ] Rights approval ditandai owner-pending.

**Validation plan:** Existing validator dan spot-check lintas skin.

**Risks / accessibility / compatibility / security:** Lisensi asset dan toleransi motion memerlukan verifikasi manual.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-010 — Definisikan evidence contract untuk 30 appearance dan 105 skin pairs

**Stable ID:** MFI-010  
**Type:** test · **Priority:** P1 · **Area:** qa · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** 30 coverageSlots + 105 pasangan memang terstruktur namun tanpa screenshot dan review manusia.

**Scope / method:** Pastikan template fixture, evidence record, manual reviewer, exceptional status dan release blocker saling terhubung.

**Non-goals:** Jangan mengklaim pasangan mana pun PASS atau membangun Skin Lab sekarang.

**Dependencies / blockers:** #6 (MF-024); MFI-004

**Affected canonical files/contracts:** `docs/qa/accessibility-visual-qa-bible.md`, `docs/qa/validation-strategy.md`, `contracts/moonframe-accessibility-qa-evidence-v0.1.json`

**Acceptance checklist:**
- [ ] Semua pasangan pair status tetap not-reviewed sampai screenshot/reviewer ada.
- [ ] 270 baseline cells tetap not-rendered kecuali bukti nyata.
- [ ] Manual keyboard/focus/forced colors/reduced motion dibanding otomatis.
- [ ] Evidencing checklist dan negative fixture dibuat.

**Validation plan:** Validator spesifikasi dan audit manual template evidence.

**Risks / accessibility / compatibility / security:** False accessibility conformance dari axe-only test.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-011 — Pastikan package/release gate tidak mendahului keputusan konsumen

**Stable ID:** MFI-011  
**Type:** decision · **Priority:** P1 · **Area:** package · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Package architecture masih pilihan; Node exports/trusted publishing berbeda dari bukti paket dapat dikonsumsi.

**Scope / method:** Hubungkan ADR-0009/0010, GitHub #4, support matrix dan release gating dokumen.

**Non-goals:** Jangan publish ke npm, buat monorepo, atau pilih lisensi.

**Dependencies / blockers:** #1 (MF-003); #4 (MF-006); MFI-002

**Affected canonical files/contracts:** `docs/architecture/package-architecture-dx-bible.md`, `docs/qa/validation-strategy.md`, `contracts/moonframe-package-architecture-v0.1.json`

**Acceptance checklist:**
- [ ] Pilihan registry/source-owned/npm punya tradeoff dan approval gate.
- [ ] Build/runtime/package semver vs schema versions dibedakan.
- [ ] Consumer import, CSS, SSR/hydration adalah future evidence, bukan tested.
- [ ] Lisensi dan npm naming remain explicit owner decisions.

**Validation plan:** Review ADR + validator dokumen, bukan package build.

**Risks / accessibility / compatibility / security:** Premature public exports/support promises.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

---

### MFI-012 — Standarkan issue form minimal dan review release gates

**Stable ID:** MFI-012  
**Type:** governance · **Priority:** P2 · **Area:** github · **Status:** proposed · **Owner:** unassigned

**Problem / evidence:** Pada snapshot awal, enam issue pertama belum memakai label dan belum ada issue template; drafting manual berisiko tidak konsisten. Audit settings terbaru dan keputusan template dicatat di bawah acceptance.

**Scope / method:** Usulkan satu issue form YAML atau Markdown template ringan, verifikasi label yang tersedia sebelum memakainya.

**Non-goals:** Jangan mass-create issues, milestones, label tak perlu atau memberlakukan projects berbayar.

**Dependencies / blockers:** MFI-001; MFI-002

**Affected canonical files/contracts:** `.github/ISSUE_TEMPLATE/`, `docs/backlog/master-integration-issue-bible.md`

**Acceptance checklist:**
- [x] Template memuat stable ID, problem, evidence, scope/non-goals, dependency, acceptance, DoD.
- [x] Agent instruction membaca canonical docs dan menahan out-of-scope changes.
- [x] Tidak mengasumsikan milestone, Projects, label atau assignee sudah ada.
- [x] Markdown template dipilih; issue-form YAML tidak dipilih, sehingga parser YAML form tidak diperlukan. Required `name`/`about` front matter diperiksa manual.

**Validation plan:** Manual template sample dan YAML parser bila dipakai.

**Risks / accessibility / compatibility / security:** Overhead governance berlebihan untuk repo spesifikasi.

**Evidence required:** Link exact commit SHA, changed-file diff, validator commands/stdout/exit codes, and reviewer/ADR approval when needed. No fabricated screenshot, WCAG, release, or implementation claims.

**Documentation/ADR follow-up:** Update the canonical docs and research/ADR links only if the task changes a decision; avoid duplicate truth.

**Definition of Done:** All acceptance checks evidenced; tests actually run are reported honestly; dependencies and README/roadmap links corrected; no unrelated file edits or new branches. 

**AI-agent contract:** Read README, docs/moonframe-ui-design-system-bible-v1.3.md, docs/architecture/decisions-and-governance.md, relevant contracts/ADRs, and dependency issues before editing; do not change stable IDs, public API, or production assets beyond approved scope.

**MFI-012 settings audit and decision (2026-10-25):** GitHub API reports a public repository, `main` default branch, Issues/Projects/Wiki features enabled, zero milestones, one assignable account, and ten standard labels. No `.github/ISSUE_TEMPLATE/` existed. Project-list access was unavailable because the authenticated token lacks `read:project`; this template makes no project selection. A single Markdown template was added at `.github/ISSUE_TEMPLATE/task.md`; it sets no labels, assignee, milestone, or project and does not change blank-issue behavior. Markdown issue templates belong in `.github/ISSUE_TEMPLATE/` and use `name`/`about` YAML front matter per [GitHub documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates). No YAML issue form was selected, no YAML parser dependency was added, and no GitHub issues were created.

## Publish / dedupe discipline

Before creating an issue: search both open and closed, compare desired outcome, files and acceptance (not title-only); update/reuse an existing issue when equivalent. Never duplicate #1–#6. Create small priority-first batches and copy real issue number/URL into the report once the GitHub action confirms; leave the rest **proposed**. GitHub issue pages own state once published, while this document preserves requirements/history. Relation syntax uses #1–#6 for published blockers and MFI IDs for proposed blockers; native GitHub dependency links only after tooling/permissions confirmed.

## Release gates for documentation sprint

Baseline record; canonical owners; contradiction register; non-cyclic dependency IDs; 15 unique skin IDs; 30 pending slots; 105 unreviewed pairs; Markdown/JSON where actually tested; never promote QA status without evidence. Spec-validator passes **cannot** declare WCAG compliance, visual uniqueness or package readiness. Full release requires consumers, approved ADRs, production values, real implementation, tests, accessibility/visual evidence, provenance/licensing and package release governance.

## First publication batch (verified 2026-10-25)

- [MFI-001 — GitHub #7](https://github.com/bjo163/moonframe/issues/7): issue **open**, spec/governance task not completed, no labels or assignees assigned.
- [MFI-002 — GitHub #8](https://github.com/bjo163/moonframe/issues/8): issue **open**, depends on MFI-001 (#7); no claim of native GitHub blocker edge.
- MFI-003–MFI-012 remain **proposed markdown only**, not 10 GitHub issues.
- Original six GitHub #1–#6 remain untouched. Original integration docs commit [5c5c1abb](https://github.com/bjo163/moonframe/commit/5c5c1abb2f095e2e1bb95ce8c02a434f296a607d) passed [spec-only CI](https://github.com/bjo163/moonframe/actions/runs/40187919987). This does not constitute UI/a11y QA.
