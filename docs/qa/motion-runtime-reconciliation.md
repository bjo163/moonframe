# Motion runtime reconciliation

Updated 2026-10-26. This is an inventory of the 25 recipes in `contracts/moonframe-motion-recipes-v0.1.json`; it does not imply visual or accessibility approval. “Specified,” “implemented,” “rendered,” and “reviewed” remain distinct.

## Recipe inventory

| Recipe | Purpose | Declared status | Runtime evidence | Rendered | Reviewed |
|---|---|---|---|---|---|
| `mot.press` (press) | feedback | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.hover` (hover) | hierarchy | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.focus` (focus) | hierarchy | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.select` (select) | feedback | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.tabs` (tabs) | orientation | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.sidebar` (sidebar) | continuity | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.nav` (nav) | orientation | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.route` (route) | continuity | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.menu` (menu) | orientation | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.dialog` (dialog) | orientation | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.drawer` (drawer) | orientation | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.popover` (popover) | orientation | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.tooltip` (tooltip) | hierarchy | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.toast` (toast) | feedback | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.pending` (pending) | progress | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.invalid` (invalid) | feedback | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.data-query` (data query) | continuity | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.row-details` (row details) | orientation | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.skeleton` (skeleton) | progress | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.dropzone` (dropzone) | feedback | specified-not-implemented | `src/styles.css` line(s) 219; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.upload` (upload) | progress | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.ai-stream` (ai stream) | progress | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.chart` (chart) | continuity | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.confirm` (confirm) | feedback | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |
| `mot.quest-reward` (quest reward) | expression | specified-not-implemented | No recipe-specific CSS match found; shared reduced-motion rules at 515–521 | Not captured per recipe | Not reviewed |

## QA coverage boundary

The motion QA plan contains 180 slots. This inventory does not mark any slot rendered or reviewed: no per-slot browser captures or human review records were found while producing this reconciliation. Existing CSS has transitions on the shared surface, switch thumb, dropzone, and chart bar (lines 45, 103, 219, 226); `[data-motion="reduced"]` disables animation/transition and the OS reduced-motion query disables animation. These are shared runtime behaviors, not evidence that all 25 recipes are implemented.

| State | Count | Evidence rule |
|---|---:|---|
| Specified | 25 | Recipe records in the canonical motion contract |
| Implemented | 0 verified per recipe | Requires traceable implementation mapping and behavior evidence; shared CSS alone is insufficient |
| Rendered | 0 recorded | Requires reproducible browser output for the recipe and target appearance |
| Reviewed | 0 recorded | Requires human review evidence; never inferred from automated tests |
| QA slots planned | 180 | Canonical motion QA plan; no slot is completed by this inventory |

## Next verification

Use the motion QA matrix to enumerate exact recipe × appearance/context slots, then capture behavior with motion enabled and disabled, OS reduced motion, forced colors, keyboard focus, and RTL where applicable. Record browser artifacts and reviewer status per slot. Do not claim WCAG conformance from this inventory.
