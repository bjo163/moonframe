# Motion / Interaction / SFX — 14 small issue-ready tasks

**Date:** 2026-10-25 · **Status:** proposed tasks, zero new GitHub issues. Existing [#1 consumers](https://github.com/bjo163/moonframe/issues/1), [#3 primitives](https://github.com/bjo163/moonframe/issues/3), [#4 packaging](https://github.com/bjo163/moonframe/issues/4), [#5 tokens](https://github.com/bjo163/moonframe/issues/5), [#6 Skin Lab](https://github.com/bjo163/moonframe/issues/6), MF-020/MF-084/MF-085/MF-092 and [asset tasks](original-asset-atomic-issues.md) are **dependencies, not tickets to duplicate**.

## MOT-001 — Approve source-of-truth and consumer motion requirements

- **Status/goal:** `proposed`; Approve source-of-truth and consumer motion requirements.
- **Depends on:** #1, #3, #4.
- **Likely edit scope:** docs/motion/motion-interaction-sfx-bible.md.
- **Acceptance checklist:** Consumer browsers, SSR and native vs optional animation scope confirmed; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-002 — Review current motion tokens and candidate aliases

- **Status/goal:** `proposed`; Review current motion tokens and candidate aliases.
- **Depends on:** MOT-001 and #5.
- **Likely edit scope:** contracts/moonframe-token-dictionary-v0.1.json.
- **Acceptance checklist:** Five canonical typed names unchanged; proposed names approved/rejected with schema proof; no invented numeric values; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-003 — Review 25 recipe purpose/reduced/interrupt metadata

- **Status/goal:** `proposed`; Review 25 recipe purpose/reduced/interrupt metadata.
- **Depends on:** MOT-002.
- **Likely edit scope:** contracts/moonframe-motion-recipes-v0.1.json.
- **Acceptance checklist:** Every recipe includes trigger, end state, focus/audio and no-motion fallback; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-004 — Review 18 cross-component interaction mappings

- **Status/goal:** `proposed`; Review 18 cross-component interaction mappings.
- **Depends on:** MOT-003 and #3.
- **Likely edit scope:** contracts/moonframe-motion-interactions-v0.1.json.
- **Acceptance checklist:** Every component ID exists and native focus/keyboard stays authoritative; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-005 — OS preference/SSR/live interruption proof plan

- **Status/goal:** `proposed`; OS preference/SSR/live interruption proof plan.
- **Depends on:** MOT-003, #1.
- **Likely edit scope:** docs/motion/motion-interaction-sfx-bible.md.
- **Acceptance checklist:** system/full/reduced mapping, first paint and runtime cancel with focus preserved; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-006 — Approve 15 derivative motion signatures

- **Status/goal:** `proposed`; Approve 15 derivative motion signatures.
- **Depends on:** MOT-003 and #6.
- **Likely edit scope:** contracts/moonframe-motion-skin-matrix-v0.1.json.
- **Acceptance checklist:** Distinct accent/fallback but same interactions; all reviews remain unreviewed until visual proof; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-007 — SFX existing six-event taxonomy and opt-in review

- **Status/goal:** `proposed`; SFX existing six-event taxonomy and opt-in review.
- **Depends on:** MOT-001, MF-084, MF-ASSET-010.
- **Likely edit scope:** contracts/moonframe-sfx-contract-v0.1.json.
- **Acceptance checklist:** No alias breaking change; each event visible/AT equivalent, consent/master mute/cooldown/unknown silent; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-008 — Native CSS vs WAAPI vs View Transition/React motion ADR spike

- **Status/goal:** `proposed`; Native CSS vs WAAPI vs View Transition/React motion ADR spike.
- **Depends on:** MOT-001/003/005 and #4.
- **Likely edit scope:** docs/adr/0007-motion-and-optional-audio-engines.md.
- **Acceptance checklist:** Real same-content tests and version/license/bundle/profile evidence before selecting library; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-009 — Audio engine / browser-autoplay spike plan

- **Status/goal:** `proposed`; Audio engine / browser-autoplay spike plan.
- **Depends on:** MOT-007 and #1/#4.
- **Likely edit scope:** docs/adr/0007-motion-and-optional-audio-engines.md.
- **Acceptance checklist:** Native or no engine default, browser reject/mid-play mute no-op, no SFX files now; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-010 — Schema and negative static contract CI

- **Status/goal:** `proposed`; Schema and negative static contract CI.
- **Depends on:** MOT-003/004/006/007.
- **Likely edit scope:** schemas/moonframe-motion-recipe.schema.json; scripts/validate-contracts.mjs.
- **Acceptance checklist:** Reject bad refs/reduced/focus/false tested, all 180 coverage pending; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-011 — Browser/AT and 30-appearance QA proof plan

- **Status/goal:** `proposed`; Browser/AT and 30-appearance QA proof plan.
- **Depends on:** MOT-004/005/006 and #6.
- **Likely edit scope:** docs/qa/motion-interaction-sfx-validation-plan.md.
- **Acceptance checklist:** Zero false review; six scenarios×30 modes/skins, four-skin first, AT/focus/perf and forced-colors; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-012 — Consumer implementation pilot (future only)

- **Status/goal:** `proposed`; Consumer implementation pilot (future only).
- **Depends on:** Separate user approval; MOT-008/010/011.
- **Likely edit scope:** future React/CSS code.
- **Acceptance checklist:** Proof only after provider, token, licensing and motion-engine decision; not authorized here; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-013 — Optional SFX production/licensing pilot (future only)

- **Status/goal:** `proposed`; Optional SFX production/licensing pilot (future only).
- **Depends on:** Separate user approval; MOT-009 and MF-ASSET-002.
- **Likely edit scope:** future audio/art package.
- **Acceptance checklist:** No audio before consent, rights, codec/loudness and visible-equivalent proofs; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.

## MOT-014 — Release/compatibility sign-off and migration

- **Status/goal:** `proposed`; Release/compatibility sign-off and migration.
- **Depends on:** MOT-012 and MOT-013 if opted in.
- **Likely edit scope:** docs/architecture/decisions-and-governance.md.
- **Acceptance checklist:** Version IDs/events/token changes documented, artifact and AT proofs, no false released status; preserve source-of-truth boundaries and stable skin IDs, six SFX events, five token names and 25 existing recipe IDs when touched.
- **Non-goals:** no unrelated component behavior forks, production UI, art, binary audio, license speculation, installed packages or backend/business logic in this task.
- **Keyboard/accessibility/security/performance:** require instant usable result, reduced-motion/forced-colors/keyboard focus, consent/no-audio status, cleanup/cancel, provenance when media affected; record exceptions and owner approval.
- **Tests/commands:** only the verified Node22 repo commands `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` apply now (static contracts). Runtime/browser/AT/audio commands are **not verified or installed**; specify before running.
- **Definition of Done:** focused change, source/ADR and owner evidence, docs links updated, risk/semver/migration/rollback notes, real command transcript or explicit not-run; status cannot advance beyond `specified` from JSON tests.


### Dependency ordering

`#1/#3/#4 → MOT-001 → MOT-002 → MOT-003 → MOT-004/MOT-005/MOT-006 → MOT-007/MOT-008/MOT-009 → MOT-010/MOT-011 → (separate authorization required) MOT-012/MOT-013 → MOT-014`. No new branches, GitHub issues, SFX or React source authorized by docs-only prompt.
