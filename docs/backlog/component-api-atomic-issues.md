# Component API & Behavior — Atomic Worklist

**Snapshot:** 2026-10-25. Existing GitHub Issues [#1 consumer compatibility](https://github.com/bjo163/moonframe/issues/1), [#3 provider ADR](https://github.com/bjo163/moonframe/issues/3), [#4 distribution](https://github.com/bjo163/moonframe/issues/4), [#6 Skin Lab fixture](https://github.com/bjo163/moonframe/issues/6). Other token and premium tasks remain in existing backlog docs. **New issues created in this pass: 0**, to avoid duplicate tracker work. Tasks below are issue-ready only.

**Branch/workflow:** inspect live `main` before edits, no speculative new branch; no force push/history rewrite. Each task small and source-of-truth scoped; don't promote status until evidence.

### 1. MF-API-001 — Kunci taxonomy, API grammar, exports provisional
**Status:** proposed, issue-ready only. **Depends on:** Existing issue #1 (consumer versions), #4 (distribution).

**Goal:** Kunci taxonomy, API grammar, exports provisional. **File scope:** docs/component-api-behavior-bible.md; contracts/moonframe-component-api-contract-v0.1.json.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Review size/variant/tone/appearance, native vs semantic events, unresolved prop stubs; record exact reviewer sign-off without claiming public exports. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 2. MF-API-002 — Review first 30 high-priority component contracts individually
**Status:** proposed, issue-ready only. **Depends on:** MF-API-001; existing #3 provider spike.

**Goal:** Review first 30 high-priority component contracts individually. **File scope:** contracts/moonframe-component-api-contract-v0.1.json.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Select Button, Link, Input, Field, Checkbox, Select, Combobox, Dialog, Tabs, Menu, Popover, Tooltip, Table, DataTable and related; define default props/nullability/ref/events/states per ID; remove family-derived ambiguity only for reviewed IDs. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 3. MF-API-003 — Primitive provider equal-fixture comparison
**Status:** proposed, issue-ready only. **Depends on:** Existing #3 and #1; MF-API-001.

**Goal:** Primitive provider equal-fixture comparison. **File scope:** docs/adr/0001-primitive-provider.md; docs/research/component-api-research-log.md.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Compare Base UI, Radix, React Aria for Dialog, Select, Combobox, Menu, Tabs, Tooltip (controlled state, keyboard, RTL, SSR, ref, event cancellation). Pin versions, consumer support, bundle, licensing; no provider change without ADR acceptance. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 4. MF-API-004 — Form anatomy and native HTML semantics
**Status:** proposed, issue-ready only. **Depends on:** MF-API-001; MF-API-002.

**Goal:** Form anatomy and native HTML semantics. **File scope:** docs/component-api-behavior-bible.md; contracts/moonframe-component-api-contract-v0.1.json.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Field/Label/Fieldset/FormMessage/Input ownership, required/invalid association, reset/name/Enter behavior, RHF neutrality. No duplicate label or hidden auth implementation. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 5. MF-API-005 — Controlled/uncontrolled state and callback edge cases
**Status:** proposed, issue-ready only. **Depends on:** MF-API-002; MF-API-003.

**Goal:** Controlled/uncontrolled state and callback edge cases. **File scope:** contracts/moonframe-component-api-contract-v0.1.json; docs/qa/component-testing-strategy.md.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** For Select/Dialog/Tabs/Checkbox/Combobox, specify undefined/null/empty, controlled-state external changes, no callback on prop change, keyboard-pointer parity; invalid unions and reset tests planned. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 6. MF-API-006 — Overlay, menus, focus and portal specifics
**Status:** proposed, issue-ready only. **Depends on:** MF-API-003; MF-API-005.

**Goal:** Overlay, menus, focus and portal specifics. **File scope:** contracts/moonframe-keyboard-interaction-matrix-v0.1.json; docs/component-api-behavior-bible.md.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Dialog/AlertDialog/Drawer/Popover/Tooltip/Menu focus, Escape, outside dismissal, stacking, server/client boundary, focus restoration, nested/RTL testing. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 7. MF-API-007 — Selection and date/async component contracts
**Status:** proposed, issue-ready only. **Depends on:** MF-API-003; MF-API-005.

**Goal:** Selection and date/async component contracts. **File scope:** contracts/moonframe-component-api-contract-v0.1.json; contracts/moonframe-component-state-matrix-v0.1.json.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Editable vs select-only Combobox, MultiSelect, date/calendar locale/timezone, async stale/no-results. No hidden network, preserve focus. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 8. MF-API-008 — Table/DataTable interface without grid scope creep
**Status:** proposed, issue-ready only. **Depends on:** MF-API-002; existing MF-PREM-004 backlog.

**Goal:** Table/DataTable interface without grid scope creep. **File scope:** docs/premium/data-workspace.md; contracts/moonframe-component-api-contract-v0.1.json.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Semantic Table vs DataTable controlled state, stable row IDs, sort/page/selection, keyboard and screen reader, adapter optional and no implicit CRUD. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 9. MF-API-009 — Typed public interface and ref compatibility plan
**Status:** proposed, issue-ready only. **Depends on:** MF-API-002, MF-API-003, existing #1, #4.

**Goal:** Typed public interface and ref compatibility plan. **File scope:** docs/component-api-behavior-bible.md; docs/adr/0001-primitive-provider.md.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Decide React major/peer and ref-as-prop compatibility; type-compile invalid combinations, public exports, no any/cast chains; no package publish. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 10. MF-API-010 — State/keyboard matrix schema gate and negative fixtures
**Status:** proposed, issue-ready only. **Depends on:** MF-API-001; current proposed contracts.

**Goal:** State/keyboard matrix schema gate and negative fixtures. **File scope:** scripts/validate-contracts.mjs; schemas/moonframe-component-behavior.schema.json; schemas/moonframe-component-matrix.schema.json.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Reject orphan ID/pattern, missing/duplicate state, contradictory applicability, fabricated testing status. `node scripts/validate-contracts.mjs --self-test` passes. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 11. MF-API-011 — Skin-parity component specimen specification
**Status:** proposed, issue-ready only. **Depends on:** Existing #6, MF-API-002, #5 token work.

**Goal:** Skin-parity component specimen specification. **File scope:** docs/qa/component-testing-strategy.md; docs/component-api-behavior-bible.md.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Four divergent skins × Light/Dark same behavior/fixtures, forced-colors/reduced-motion/RTL, then all 30 target modes; 105 visual pairs remain not-reviewed. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

### 12. MF-API-012 — Readiness evidence, deprecation and migration policy
**Status:** proposed, issue-ready only. **Depends on:** MF-API-009; MF-API-010; existing #4.

**Goal:** Readiness evidence, deprecation and migration policy. **File scope:** docs/architecture/decisions-and-governance.md; docs/qa/component-testing-strategy.md.

**Non-goals:** no React components, no tests claiming browser proof without runtime, no production assets, no backend/secret data.

**Acceptance/DoD:** Explicit specified/implemented/tested/reviewed/released evidence, public prop/event/data-slot semver policy, changelog and consumer installation gate. Include changed paths, reviewer/decision, exact command + result where available, cross-doc links, a11y/keyboard implication, API/semver risk and rollback. Contract-only check: `node scripts/validate-contracts.mjs --self-test` (CI verified Node 24.22.1 LTS); actual TS/browser tests remain deferred.

## Suggested dependency sequence

`#1 + #3 + #4 → MF-API-001 → MF-API-002/004/010 → MF-API-005/006/007/008 → MF-API-009/011 → MF-API-012`.

Implementation (out of scope): proof vertical slices `Button + Input + Field → sign-in block` and `Table → DataTable → records page`; test semantics on Classic, Moonpunk, Moonzine, Moonledger before scaling 30 appearances. Auth backend remains owned by consumers.
