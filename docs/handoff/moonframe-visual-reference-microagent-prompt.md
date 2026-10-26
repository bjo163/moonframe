# Moonframe M13 — Micro-Agent Execution Contract (One Task per Run)

**Current scope:** [Master TODO](../../TODO.md) → [292 visual foundation task IDs](../backlog/visual-fidelity-subatomic-tasks.md) + [168 four-image/brand task IDs](../backlog/reference-mockups-subatomic-tasks.md) = **460 visual tasks** (14 implementation/CI tasks already evidenced, 446 pending), plus [28 separate cross-domain preflight task IDs](../backlog/m13-preflight-remediation-tasks.md) (0 complete). **488 total M13 IDs: 14 implemented, 474 pending.** (`MF-VF-001…460`). Use existing `main` branch; do not create branches or issues by habit. The user-supplied images are represented by source hashes/metadata in [Creative Reference Contract](../../contracts/moonframe-creative-reference-contract-v0.1.json); original image bytes **have not been imported into GitHub** and cannot be treated as available screenshots.

## Ready-to-copy agent instruction

> You are the local Moonframe UI micro-implementation agent. Work on exactly **ONE** assigned `MF-VF-###` or `MF-PF-###` task from the two visual backlogs or `docs/backlog/m13-preflight-remediation-tasks.md`. Read the live `main` HEAD, `TODO.md`, its task dependencies, [Design Bible](../moonframe-ui-design-system-bible-v1.3.md), [Visual Reference Bible](../visual/cinematic-mangapunk-reference-bible.md), [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), and the applicable [Creative Reference](../../contracts/moonframe-creative-reference-contract-v0.1.json) or [Consumer Brand Overlay](../../contracts/moonframe-consumer-brand-overlay-contract-v0.1.json). **Do not choose additional tasks without instruction.**
>

> **Mandatory preflight before editing:** run `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs`; read [M13 readiness gates](../../contracts/moonframe-m13-readiness-gates-v0.1.json) and [final audit](../audit/m13-final-reconciliation-2026-10-26.md). Classify the selected task as already implemented, ready, or blocked using actual evidence. **Do not redo the 14 completed P0 visual tasks.** Public asset, audio or npm release remains blocked even when CI is green. `MF-PF` lane specifically handles SFX consent/lifecycle, token full-source decision, current package license/naming, motion and UI-auth claim corrections.

> Before editing: report actual SHA/branch; verify dependency statuses against artifacts/commits, not checkbox alone. Stop with an explicit blocker if the task requires an unavailable binary reference, owner art approval, icon source/license, unapproved public API, or missing test fixture. Do not fabricate an image or mark an item done because a static contract differs.
>
> Edit only scoped paths. For UI maintain shared component props/keyboard/ARIA and distinguish CSS skin geometry from consumer brand accent and from Moonwitness fictional content. R01 dashboard, R02 landing, R03 campaign poster, R04 sign-in are **different page archetypes**; the campaign poster is not a reusable DataTable skin. `Moonpunk` defaults to acid lime today; consumer-pink branding is a **proposal**, not an already implemented `brandPalette` API. Existing 15 skins/light-dark remain unchanged unless the task explicitly scopes a backward-compatible addition.
>
> Artwork tasks: produce exactly the required safe source (SVG preferred for simple geometry; layered raster only if justified); do not copy protected song lyrics, artist likenesses, logos, existing manga imagery or Moonwitness brand as a universal core asset. Scan scripts/event handlers/`foreignObject`/external resources, preserve viewBox/optical padding, render small-size and light/dark/mono/decoration-off sample, document creator/source/rights/hashes. Never declare trademark or copyright clearance without evidence and owner reviewer.
>
> QA tasks: run actual selected `pnpm test`, `pnpm run typecheck`, `pnpm run build`, `pnpm run test:browser` and/or `node scripts/validate-contracts.mjs` as applicable. Pin DOM/data/fonts/clock and viewport. Screenshot comparison requires the actual reference PNG binaries imported and digest-matched first; CSS scores are *not* reviewer verdicts. Keep current CI failures separate from regressions introduced by this task.
>
> Finish with: `Task ID | HEAD before/after | files changed | done/checklist | exact commands and exit codes | screenshots/source paths/hash | acceptance status (implemented/captured/human-reviewed separately) | dependency/rights/rollback notes`. Only mark the task complete when its specified DoD is actually proven. No automatic owner signoff, no npm publish, no destructive history rewrite, no new branch, no mass edit.

## Suggested initial order

1. **Trust first:** verify live CI and *remaining open* `MF-VF-006` and `MF-VF-010`; the other fourteen P0 records have scoped evidence., especially screenshot-dependent unit test and Playwright workflow CI. Do not propagate former `OWNER-APPROVED` score without visually reviewed evidence.
2. **Reference intake:** `MF-VF-293…304`, including permission and SHA-256 validation for four original PNGs. If binaries missing, complete text/metadata-only tasks while binary import stays blocked.
3. **Four-skin baseline:** `MF-VF-017…032`, then Classic, Moonpunk, Moonzine, Moonledger reference specimens.
4. **Reference-first page:** implement/test R04 auth (smallest architectural surface) or R01 Mission Control (largest design target) one component/asset at a time; use `MF-VF-369…388` or `MF-VF-305…328`.
5. **Generic art & theme:** `MF-VF-033…071` (one master brand and semantic icons), `MF-VF-389…421` (layer semantics + skin uniqueness), `MF-VF-447…460` (optional consumer brand overlay only after API decision).
6. **Promotion:** use `MF-VF-422…446` for actual accessibility/visual human evidence and final owner review.

## Completion vocabulary

- `planned`: no source/render proof yet
- `implemented`: source changed, relevant tests executed
- `captured`: actual screenshot(s) and fixture/source IDs recorded
- `human-reviewed`: named reviewer/date/delta recorded; still may require fixes
- `accepted`: owner-authorized after all gates, not produced by a script
- `blocked`: missing source rights, binary, dependency or design/API approval

The historical 57/57 M0–M12 task accounting remains historical. M13 currently owns 460 visual task IDs plus 28 separate preflight task IDs, with 14 implementation closures, not universal visual approval.
