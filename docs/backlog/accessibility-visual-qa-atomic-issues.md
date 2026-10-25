# Moonframe — Accessibility & Visual QA atomic, issue-ready backlog

**2026-10-25.** These **16 items are proposed roadmap tasks**, **not** GitHub issues, not React/QA implementation and not visual/a11y release evidence. Check [existing GitHub #1–#6](https://github.com/bjo163/moonframe/issues) before creating a future issue. Existing MF-024/#6 covers Skin Lab fixtures, MF-090 suite testing, MF-092 reduced-motion/contrast/viewport review; no duplicates created. The existing documentation only has a Node22 static validator, not Playwright/axe/Storybook. No branch was created by this task.

## AVQA-001 — Approve initial consumer/browser/AT support profile

- **Status/priority:** `proposed` / P1.
- **Objective:** Approve initial consumer/browser/AT support profile; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** #1/#4.
- **Likely files/package scope:** docs/adr/0008-accessibility-visual-qa-tooling.md; docs/qa/accessibility-visual-qa-bible.md.
- **Acceptance tests and evidence:** Browser, SSR, locale/density/RTL and human AT owners listed with version/timing evidence. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-002 — Review 51 WCAG requirement scopes and exact levels

- **Status/priority:** `proposed` / P1.
- **Objective:** Review 51 WCAG requirement scopes and exact levels; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-001.
- **Likely files/package scope:** contracts/moonframe-accessibility-requirements-v0.1.json.
- **Acceptance tests and evidence:** Verify WCAG A/AA/advisory AAA, exceptions and completeness for actual product surfaces; don't equate bounded map with full WCAG. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-003 — Approve QA evidence/waiver status and conditional schema

- **Status/priority:** `proposed` / P1.
- **Objective:** Approve QA evidence/waiver status and conditional schema; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-002.
- **Likely files/package scope:** schemas/moonframe-accessibility-qa-record.schema.json; contracts/moonframe-accessibility-qa-evidence-v0.1.json.
- **Acceptance tests and evidence:** No fake pass or waiver; real reviewer, issue, scope, expiry, mitigation and test proof required. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-004 — Review all 151 component QA risk profiles

- **Status/priority:** `proposed` / P1.
- **Objective:** Review all 151 component QA risk profiles; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-002; #3.
- **Likely files/package scope:** contracts/moonframe-component-qa-profiles-v0.1.json.
- **Acceptance tests and evidence:** Keyboard pattern and canonical state join, high-risk widget manual AT gates and WCAG applicability accepted. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-005 — Freeze nine same-content visual fixtures and sample refs

- **Status/priority:** `proposed` / P1.
- **Objective:** Freeze nine same-content visual fixtures and sample refs; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** #6; AVQA-001.
- **Likely files/package scope:** contracts/moonframe-visual-baseline-matrix-v0.1.json.
- **Acceptance tests and evidence:** 9 specimen IDs, stable realistic redacted mock data, locale, date/time, stable images and no invented captures. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-006 — Measure deterministic Playwright browser baseline strategy

- **Status/priority:** `proposed` / P1.
- **Objective:** Measure deterministic Playwright browser baseline strategy; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-005; #1/#4.
- **Likely files/package scope:** docs/adr/0008-accessibility-visual-qa-tooling.md.
- **Acceptance tests and evidence:** Pinned OS/browser/fonts/DPR; double-run screenshots, variability/noise measurements, no automatic baseline approval. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-007 — Compare axe-core and Storybook a11y for component states

- **Status/priority:** `proposed` / P2.
- **Objective:** Compare axe-core and Storybook a11y for component states; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-004; #1/#3.
- **Likely files/package scope:** docs/adr/0008-accessibility-visual-qa-tooling.md.
- **Acceptance tests and evidence:** Document violations/passes/incomplete vs manual, package/CI cost and choice from measured real DOM. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-008 — Prototype Classic, Punk, Zine, Ledger proof QA — future

- **Status/priority:** `proposed` / P1.
- **Objective:** Prototype Classic, Punk, Zine, Ledger proof QA — future; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** Explicit production authorization; AVQA-004/005/006.
- **Likely files/package scope:** #6; future Skin Lab / component source.
- **Acceptance tests and evidence:** Four skins×Light/Dark with real renderer screenshot, keyboard/AT and grayscale/decoration-off review. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-009 — Manual keyboard and AT device support proof

- **Status/priority:** `proposed` / P1.
- **Objective:** Manual keyboard and AT device support proof; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-001; AVQA-008.
- **Likely files/package scope:** docs/qa/accessibility-visual-qa-bible.md.
- **Acceptance tests and evidence:** NVDA Firefox/Chrome and VoiceOver Safari on high-risk Dialog/Combo/Table; tested OS/AT versions, named reviewers. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-010 — Contrast, forced-color, zoom and target exception test proof

- **Status/priority:** `proposed` / P1.
- **Objective:** Contrast, forced-color, zoom and target exception test proof; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-008; #5.
- **Likely files/package scope:** docs/qa/accessibility-visual-qa-bible.md.
- **Acceptance tests and evidence:** Resolved alpha/texture contrast; 24 CSS px or evaluated 2.5.8 exception; 2.4.11 focus; 320px reflow with valid table exceptions. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-011 — Responsive/density/long/RTL stress and pointer alternatives

- **Status/priority:** `proposed` / P2.
- **Objective:** Responsive/density/long/RTL stress and pointer alternatives; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-008/010.
- **Likely files/package scope:** contracts/moonframe-visual-baseline-matrix-v0.1.json.
- **Acceptance tests and evidence:** Compact/comfortable/spacious sample; Indonesian long labels, supported RTL, touch non-drag action and 200/400% zoom. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-012 — Cross-axis 30-appearance baseline with approved snapshots

- **Status/priority:** `proposed` / P1.
- **Objective:** Cross-axis 30-appearance baseline with approved snapshots; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-008/009/010/011.
- **Likely files/package scope:** contracts/moonframe-visual-baseline-matrix-v0.1.json.
- **Acceptance tests and evidence:** 270 planned cells have real capture evidence for in-scope screens; every accepted baseline reviewed; no autoaccept. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-013 — 105 canonical skin pair human difference review

- **Status/priority:** `proposed` / P1.
- **Objective:** 105 canonical skin pair human difference review; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-012; #6.
- **Likely files/package scope:** contracts/moonframe-skin-grammar-contract-v1.0.json.
- **Acceptance tests and evidence:** Same-data color/grayscale/decoration-off; eight dimensions, reviewer/date, next action, no clone matrix. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-014 — Defect triage, waiver expiry and snapshot rollback operations

- **Status/priority:** `proposed` / P2.
- **Objective:** Defect triage, waiver expiry and snapshot rollback operations; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-003/006.
- **Likely files/package scope:** contracts/moonframe-accessibility-qa-evidence-v0.1.json; docs/qa/validation-strategy.md.
- **Acceptance tests and evidence:** Blocker→CI/release policy, flaky snapshot handling, supervised exceptions with expiry and rollback. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-015 — Release-scope accessibility decision and consumer validation

- **Status/priority:** `proposed` / P1.
- **Objective:** Release-scope accessibility decision and consumer validation; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-009/012/013/014; #4.
- **Likely files/package scope:** docs/qa/accessibility-visual-qa-bible.md; docs/architecture/decisions-and-governance.md.
- **Acceptance tests and evidence:** Evidence-backed supported scope, outstanding ACT/incomplete cases, manual AT, user impact, package/consumer QA and signed release decision. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.

## AVQA-016 — Integrate Node negative fixtures and active static CI

- **Status/priority:** `proposed` / P1.
- **Objective:** Integrate Node negative fixtures and active static CI; deliver one bounded reviewable output.
- **Prerequisites/dependencies:** AVQA-002/003/004/005.
- **Likely files/package scope:** scripts/validate-contracts.mjs; contracts/fixtures/accessibility-visual-qa-v0.1.json.
- **Acceptance tests and evidence:** 51 criterion refs, 151 QA joins, 9×30 cells, 0 fabricated approvals, 14 rejected fixtures; only spec CI active. Record a real commit SHA, source of truth, owner/reviewer, criteria IDs and impact to any of 15/30/105/151.
- **Explicit non-goals:** no unrelated React component build, icon/audio/font generation, unapproved test package, legal WCAG certificate, arbitrary screenshot pass or new branch.
- **Accessibility/visual acceptance:** real keyboard/contrast/forced colors/zoom and manual screen reader evidence required if task interacts with rendered UI; static spec work must remain `specified-not-tested`.
- **Verified commands (docs-only):** `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` (Node22 GitHub workflow). Future Playwright/axe commands cannot be specified as tested or installed yet.
- **Risks / compatibility:** exposed test status, token/skin IDs, public component contracts, license and baseline changes require owner review, versioning and rollback strategy; avoid mass migrations.
- **Documentation and Definition of Done:** canonical file updated, cross-file refs and README links correct, actual Node CI result recorded, manual proof linked only if it happened, status remains honest; scoped defect/exception IDs used, not a silently edited snapshot.


## Dependency order and issue deduplication

1. **Foundation:** #1/#3/#4/#5/#6 → AVQA-001/002/003.
2. **Coverage:** AVQA-004/005/016 (metadata/Node validator); AVQA-006/007 are *future* tool-selection spikes.
3. **Future separately authorized runtime prototypes:** AVQA-008/009/010/011.
4. **Broader future reviews:** AVQA-012 → AVQA-013 plus AVQA-014.
5. **Release decision:** AVQA-015 only after real browser/AT/consumer proof, versioned baselines and reviewed exceptions.

**Never mark a task `implemented`, `tested` or `reviewed` because its Markdown plan exists.** No actual GitHub issue was created in this step.
