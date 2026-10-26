# Moonframe M13 — Nonvisual Preflight: SFX / Tokens / Motion / Package / Security Microtasks

**2026-10-26 · All tasks PLANNED, zero completed in this backlog; GitHub issue status not-created.** Existing [460 visual-fidelity microtasks](visual-fidelity-subatomic-tasks.md) and [reference addendum](reference-mockups-subatomic-tasks.md) retain their original `MF-VF` IDs. These **28 independent `MF-PF` tasks** are targeted reconciliation follow-ups; do not merge namespace/claim these are completed merely because M13 static CI is green. [Readiness contract](../../contracts/moonframe-m13-readiness-gates-v0.1.json) describes corresponding release blockers; [final audit](../audit/m13-final-reconciliation-2026-10-26.md) is the narrative crosswalk. Existing main branch only.

**Rule:** A green build approves source integrity, not sound playback safety, npm license rights, original artwork or full WCAG status. Work one ID per local agent session. Each task must provide before/after SHA, scoped file diff, tests actually run, fail/pass, source/rights as applicable, status and rollback.

| Workstream | Microtasks |
|---|---:|
| P0 — package/claims and machine truth | 6 |
| P1 — SFX consent, playback truth and lifecycle | 12 |
| P1 — tokens, theme, brand and motion | 6 |
| P1/P2 — consumer security and closeout | 4 |
| **Total** | **28** |

## P0 — package/claims and machine truth

- [x] **MF-PF-001 — Freeze current package/release inventory** · **P0** · `captured` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `package.json + docs/audit/m13-final-reconciliation-2026-10-26.md`. **Acceptance:** Verify name/version/exports/private/LICENSE/registry status against live HEAD; no publication
  - **Evidence (HEAD `affdfe6a56362878b8ca19faab61c922a0264c4b`):** `package.json` declares `@moonwitness/moonframe@0.1.1`, `private:false`, `license: MIT`, public publish access, repository URL `https://github.com/bjo163/moonframe`, and five export paths (`.`, `./styles.css`, `./tailwind.css`, `./skins`, `./theme`). No standalone `LICENSE` file is present. Registry publication is **not verified** from local repository evidence; no publication was attempted. `node scripts/validate-contracts.mjs` exit 0; `node scripts/verify-m13-handoff.mjs` exit 0 (with existing SFX and missing-LICENSE release warnings). `pnpm test` was attempted but exited 1 while pnpm recreated `node_modules` and produced no test output; this environment cannot currently supply unit-test evidence. No source/package behavior changed; rollback is to revert the documentation/status evidence only. Status `captured`; no human review or acceptance claimed.
- [ ] **MF-PF-002 — Obtain explicit maintainer license/trademark distribution decision** · **P0** · `planned` · **deps:** `MF-PF-001` · **GitHub issue:** not-created
  - **Scope:** `LICENSE (owner-approved only), package.json, docs/brand/original-asset-brand-bible.md`. **Acceptance:** Record actual chosen license rights for code vs art; no guessed approvals or copyright owner
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [x] **MF-PF-003 — Create release evidence ledger with actual npm registry status** · **P0** · `captured` · **deps:** `MF-PF-001` · **GitHub issue:** not-created
  - **Scope:** `docs/qa/rc-evidence-and-release-ledger.md`. **Acceptance:** Real npm URL/tag/version/provenance if exists; otherwise mark not-verified
  - **Evidence (HEAD `fcd2a165ac5517b09944076012837e4dc49b0c3a`):** Added a current-release evidence section to `docs/qa/rc-evidence-and-release-ledger.md`. Local manifest declares `@moonwitness/moonframe@0.1.1`, `private:false`, MIT and public access; none prove registry publication or license rights. npm URL/tag/version/provenance are explicitly `not verified`; no registry request or publish was made. Historical v0.1.0 notes are identified as non-evidence for 0.1.1. `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` results are recorded in the autonomous execution ledger. Status `captured`; no human review/acceptance claimed. Rollback: revert this row and the added current-release section only.
- [ ] **MF-PF-004 — Catalog actual public component exports against 151 planned records** · **P0** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `docs/audit/component-public-export-coverage.md (proposed)`. **Acceptance:** Every spec ID mapped to shipped export/compound/pending, no 151=70 conflation
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-005 — Catalog 72 specified page templates against 43 implemented templates** · **P0** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `docs/audit/page-implementation-coverage.md (proposed)`. **Acceptance:** One row per D-level ID: implemented/pending, route, source, preview and review state
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-006 — Recheck no fake owner approval in generated QA reports** · **P0** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `scripts/audit-skin-pairs.mjs + docs/qa/skin-pairwise-review-report.md`. **Acceptance:** Use STRUCTURAL and pending-human terms with link to actual artifacts
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.

## P1 — SFX consent, playback truth and lifecycle

- [ ] **MF-PF-007 — Separate SFX default enable intent from trusted consent** · **P1** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `src/components.js: SFXProvider`. **Acceptance:** No prop initializes consentGranted as true without an explicit authorized user path
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-008 — Define explicit consent/gesture event API without forced media permission** · **P1** · `planned` · **deps:** `MF-PF-007` · **GitHub issue:** not-created
  - **Scope:** `src/components.d.ts + docs/motion/motion-interaction-sfx-bible.md`. **Acceptance:** Typed grant/revoke semantics unambiguous; no automatic sound on page load or hydration
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-009 — Correct play() result when WebAudio API is absent/blocked** · **P1** · `planned` · **deps:** `MF-PF-007` · **GitHub issue:** not-created
  - **Scope:** `src/components.js: useSFX play`. **Acceptance:** Never return played:true unless the browser accepted playback initiation; specify suspended/blocked/unsupported responses
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-010 — Reuse or close AudioContext and oscillators deterministically** · **P1** · `planned` · **deps:** `MF-PF-009` · **GitHub issue:** not-created
  - **Scope:** `src/components.js: SFXProvider`. **Acceptance:** No new leaked context per cue; resource cleanup after play/unmount
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-011 — Cancel/stop active sound when muted/consent revoked** · **P1** · `planned` · **deps:** `MF-PF-010` · **GitHub issue:** not-created
  - **Scope:** `src/components.js: SFXProvider`. **Acceptance:** Immediate audibility stop with active nodes and context cleanup
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-012 — Skip/stop cues on document hidden and avoid catch-up playback** · **P1** · `planned` · **deps:** `MF-PF-010` · **GitHub issue:** not-created
  - **Scope:** `src/components.js: SFXProvider`. **Acceptance:** Foreground-only opt-in; no replay after visibility return
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-013 — Enforce reduced-stimulation and user motion priority** · **P1** · `planned` · **deps:** `MF-PF-008` · **GitHub issue:** not-created
  - **Scope:** `src/components.js + tests/browser/components.spec.js`. **Acceptance:** No audio in reduced motion/stimulation while display feedback remains
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-014 — Define consumer context exclusions and category suppression** · **P1** · `planned` · **deps:** `MF-PF-008` · **GitHub issue:** not-created
  - **Scope:** `contracts/moonframe-sfx-contract-v0.1.json + src/components.js`. **Acceptance:** Auth/finance/destructive context silent by default, explicit app selection requires review
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-015 — Freeze six aliases/public API stability decision** · **P1** · `planned` · **deps:** `MF-PF-008` · **GitHub issue:** not-created
  - **Scope:** `contracts/moonframe-sfx-contract-v0.1.json + src/components.d.ts`. **Acceptance:** 6 runtime aliases matched; choose documented supported/deprecated/private semantics with version note
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-016 — Test opt-in on click, denial, no AudioContext, muted and revoke** · **P1** · `planned` · **deps:** `MF-PF-007, MF-PF-009, MF-PF-010, MF-PF-011` · **GitHub issue:** not-created
  - **Scope:** `tests/browser/components.spec.js`. **Acceptance:** Browser assertions for silence, play truth, focus/visibility and audio fallback
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-017 — Test 1000ms global rate and 2000ms event deduplication** · **P1** · `planned` · **deps:** `MF-PF-016` · **GitHub issue:** not-created
  - **Scope:** `tests/browser/components.spec.js`. **Acceptance:** Real clock-controlled browser tests; do not claim human approval from timing alone
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-018 — Verify SFX bundled asset status stays zero and no accidental media shipped** · **P1** · `planned` · **deps:** `MF-PF-016` · **GitHub issue:** not-created
  - **Scope:** `scripts/verify-m13-handoff.mjs + contracts/moonframe-asset-manifest-v0.1.json`. **Acceptance:** No unlicensed sound binaries included in npm pack; opt-in synthesized-only clearly stated
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.

## P1 — tokens, theme, brand and motion

- [ ] **MF-PF-019 — Generate 78-name to 17-runtime-var mapping/owner matrix** · **P1** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `docs/audit/token-source-runtime-crosswalk.md (proposed)`. **Acceptance:** Separate normative token dictionary, bounded generator, and static runtime values, with none invented
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-020 — Approve or defer canonical 78×30 source-value production ADR** · **P1** · `planned` · **deps:** `MF-PF-019` · **GitHub issue:** not-created
  - **Scope:** `docs/architecture/token-pipeline.md + contracts/moonframe-token-source-plan-v0.1.json`. **Acceptance:** Named owner decision with migration/versioning; no override of sentinel states to fake implementation
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-021 — Specify no-brand/malformed-brand behavior before new public props** · **P1** · `planned` · **deps:** `MF-PF-020` · **GitHub issue:** not-created
  - **Scope:** `contracts/moonframe-consumer-brand-overlay-contract-v0.1.json`. **Acceptance:** CSS precedence, SSR, cache/tenant boundaries, semantic contrast and fallback contract approved first
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-022 — Test old consumers continue unchanged without optional brand overlay** · **P1** · `planned` · **deps:** `MF-PF-021` · **GitHub issue:** not-created
  - **Scope:** `tests/runtime.test.mjs + tests/browser/skins.spec.js`. **Acceptance:** No FOUC, no cross-consumer persistence, 15×2 defaults unchanged
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-023 — Review 25 motion recipes against CSS implemented and 180 QA slots** · **P1** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `docs/qa/motion-runtime-reconciliation.md (proposed)`. **Acceptance:** Per-pattern status specified/implemented/rendered/reviewed with disabled/fallback state
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-024 — Run actual motion/forced-colors/RTL accessibility regression** · **P1** · `planned` · **deps:** `MF-PF-023` · **GitHub issue:** not-created
  - **Scope:** `tests/browser/skins.spec.js`. **Acceptance:** No overlay or motion hides focus, status, keyboard or long text
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.

## P1/P2 — consumer security and closeout

- [ ] **MF-PF-025 — Make all auth demo states explicit and never claim authentication** · **P1** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `apps/moonframe/templates/index.tsx`. **Acceptance:** Buttons are labeled simulated unless real provider integration; no fake SSO success
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-026 — Review DataTable capability claims vs actual runtime behavior** · **P2** · `planned` · **deps:** `MF-PF-004` · **GitHub issue:** not-created
  - **Scope:** `docs/premium/premium-scope-bible.md`. **Acceptance:** Basic sorting/search/pagination vs enterprise grid plans clearly separated
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-027 — Check source/user four PNG hash imports and rights before pixel review** · **P1** · `planned` · **deps:** `none` · **GitHub issue:** not-created
  - **Scope:** `docs/qa/visual-fidelity-evidence-ledger.md (proposed)`. **Acceptance:** Four hashes verified, files GitHub still absent; do not claim imported/reference-licensed
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.
- [ ] **MF-PF-028 — Perform final latest-HEAD one-task handoff check** · **P1** · `planned` · **deps:** `MF-PF-006, MF-PF-018, MF-PF-022, MF-PF-024, MF-PF-025, MF-PF-027` · **GitHub issue:** not-created
  - **Scope:** `docs/handoff/moonframe-visual-reference-microagent-prompt.md`. **Acceptance:** Clean clone CI green + M13 validator + task deps/rights + no unwanted branch/issue; report SHA
  - **Proof:** exact code/contract diff; relevant `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, unit/type/build/Playwright/browser test as applicable, signed reviewer only if required. Track actual command result and rollback; never invent pass.

## Ordering notes

Technical CI evidence tasks already repaired in prior `MF-VF` work must not be redone. Prioritize release/rights truth and SFX disabled-by-default safety before any optional sound rollout. `MF-PF-020` (token 78×30 source decision) may stay owner-blocked; it must not block unrelated CSS/layout microtask work. Song lyrics, branded Moonwitness characters and logos are consumer materials, not automatically licensed for distribution.
