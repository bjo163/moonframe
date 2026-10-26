# Moonframe M13 — R01 Hero Art Direction Microtask

Use this prompt for one bounded R01 hero implementation task after selecting its exact backlog ID and confirming dependencies from the live files.

## Assignment

- **Task ID:** `MF-VF-###` (replace with the selected task; do not work on another ID)
- **Output scope:** only the task's declared files and the matching backlog, TODO, and execution-ledger evidence.
- **Reference:** `MWX-REF-001`, Mission Control dashboard, 1672 × 941. Its canonical SHA-256 and source status are in `contracts/moonframe-creative-reference-contract-v0.1.json`.

## Read before editing

Read `AGENTS.md`, `TODO.md`, the selected backlog row and dependencies, `docs/visual/cinematic-mangapunk-reference-bible.md`, the creative-reference contract, the canonical theme and skin grammar contracts relevant to the task, and the current implementation files in its scope. Confirm dependency artifacts exist; a checkbox alone is not proof. The original reference image is not in the repository unless a local copy is present and digest-verified.

## Art direction and implementation constraints

R01 is an operational dashboard: keep navigation, metrics, statuses, tables, and actions as semantic live DOM. Use Moonpunk composition with restrained Moonpanel/Moonglitch structural cues. Build only the hero element named by the selected task; do not turn the screenshot into a page background or reproduce the consumer wordmark, crown, characters, lyrics, or other protected identity. Use generic original artwork or a neutral caller-provided slot, and record provenance and SHA-256 for any new source asset.

Preserve existing React APIs, keyboard behavior, focus visibility, ARIA meaning, all 15 skin IDs, and light/dark behavior. Keep decorative layers optional, pointer-transparent, and hidden from assistive technology when they convey no content. Keep meaningful text in DOM and provide a no-art fallback. Honor reduced motion, forced colors, narrow viewports, and zoom where the selected task touches them.

## Work and evidence

1. Make only the selected bounded change; add or update its directly relevant regression coverage when the task requires behavior proof.
2. Run the task's required checks and record each exact command and exit code. For visual changes, capture the specified fixture and viewports, bind evidence to the source revision, and do not claim visual parity without the actual digest-matched original and human comparison.
3. Update only that task's status and evidence. Use `implemented` for source-level completion, `captured` only for actual captures, and never self-assign `human-reviewed` or `accepted`.
4. Record changed paths, artifact hashes, dependency evidence, rights boundary, rollback, and verification limitations in the execution ledger and root TODO.

Return a concise report with task ID, starting HEAD, changed files, exact checks/results, evidence paths/hashes, status, blockers, and rollback. Do not commit, push, publish, create issues, or broaden the assignment unless the active runner explicitly directs it.

---

# Moonframe M13 — R04 Accessible Sign-in Microtask

Use this prompt for one bounded R04 sign-in task after selecting its exact backlog ID and confirming dependencies from the live files.

## Assignment

- **Task ID:** `MF-VF-###` (replace with the selected task; do not work on another ID)
- **Output scope:** only the task's declared files and matching backlog, TODO, and execution-ledger evidence.
- **Reference:** `MWX-REF-004`, sign-in screen, 1024 × 576. Read its digest and source status from `contracts/moonframe-creative-reference-contract-v0.1.json`. Do not claim comparison unless the original bytes are present and digest-verified.

## Design and behavior constraints

- Keep the sign-in form as live semantic content in a calm, readable panel. Use visible, programmatically associated labels, native form behavior, clear focus indication, and accessible validation/error messaging; never paint required controls into artwork.
- Keep form content first in DOM reading and keyboard focus order. At narrow widths, place cinematic art below the form or reduce it to an optional decorative masthead.
- Use only generic, original, provenance-recorded artwork or a neutral caller-provided slot. Do not include Moonwitness names/marks, its hooded character, protected copy, or unlicensed source imagery in reusable assets.
- Provider actions, if present, must be supplied by the consumer and invoked only by an explicit user action. A demo submit may show a neutral local result, but must never claim authentication, OAuth, or account access succeeded without a real integration.
- Preserve public APIs, shared keyboard/form/ARIA meanings across all 15 skins, light/dark behavior, reduced-motion preferences, forced-colors visibility, and no-art fallback.

## Work and evidence

1. Make only the selected bounded change and add directly relevant regression coverage when the task requires behavior proof.
2. Run the task's required checks and record exact commands and exit codes. For visual work, capture the specified fixture/viewports and bind evidence to the source revision. Do not claim parity without the digest-matched original and human comparison.
3. Update only the selected task status: `implemented` for source-level completion, `captured` only for actual captures, and never self-assign `human-reviewed` or `accepted`.
4. Record changed paths, dependency evidence, provenance/rights boundary, verification limits, and rollback in the execution ledger and root TODO.

Return a concise report with task ID, starting HEAD, changed files, exact checks/results, evidence paths/hashes, status, blockers, and rollback. Do not commit, push, publish, create issues, or broaden the assignment unless the active runner explicitly directs it.
