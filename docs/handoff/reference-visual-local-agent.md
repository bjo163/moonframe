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
