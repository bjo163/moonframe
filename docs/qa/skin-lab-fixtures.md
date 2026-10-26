# Skin Lab — deterministic reference fixtures

**Status:** specification only. This document defines content and capture controls for the future Skin Lab; it does not implement UI, select a renderer, create screenshots, approve a skin, or change any pairwise review status. The first proof is Classic, Moonpunk, Moonzine, and Moonledger in effective Light and Dark modes. All four skins must render the same fixture IDs, copy, data, state, and assets. See the [Classic reference boundary](../research/classic-baseline.md), [token subset](../../scripts/token-subset-proof.mjs), [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [visual baseline matrix](../../contracts/moonframe-visual-baseline-matrix-v0.1.json), and [accessibility/visual QA protocol](accessibility-visual-qa-bible.md).

## 1. Fixture contract

| Field | Fixed baseline | Stress variants and notes |
|---|---|---|
| Product story | Fictional Moonframe workspace named **Northstar Studio**; no real customer, account, or integration | Keep the same name, content, and information order in every skin. |
| Locale and direction | `en-US`, `ltr` | Add `id-ID` long-copy and mixed-number coverage. Add an RTL locale only after supported-locale behavior is defined; it is a layout stress case, not another visual identity. |
| Clock and timezone | Frozen instant `2026-10-25T12:00:00Z`; timezone `UTC` | Inject the clock. No wall-clock reads, relative dates, random IDs, or host timezone defaults. |
| Viewports | Desktop `1440×960`, tablet `768×1024`, narrow `360×800` CSS px | Capture the same content at each size. Add `1280×720` only as a separate short-height stress case. |
| Scale | Browser zoom 100%, device scale factor 1 for baseline | Separate 200% text resize and 400% zoom/reflow runs; never substitute a resized screenshot for those checks. |
| Font | Test-fixture candidate: **Noto Sans v2.015**, upstream tag `NotoSans-v2.015`, source commit `c4a321e123e4d4ff315f57f4e0adf294fe3a95be`; use the variable TTF `NotoSans[wdth,wght].ttf`, axes `wdth=100` and `wght=400/600/700`, with synthetic bold/italic disabled. Google Fonts file revision: [`2984c575fdce412ee02b2baaba67672b9a9434d8`](https://github.com/google/fonts/commit/2984c575fdce412ee02b2baaba67672b9a9434d8); verified TTF SHA-256: `bfb7bb691513f12e734dc346c03a03f784912432d7e3fa8e56efcf906fe86b3d`. The [official release](https://github.com/notofonts/latin-greek-cyrillic/releases/tag/NotoSans-v2.015) and [OFL 1.1 license](https://github.com/notofonts/latin-greek-cyrillic/blob/c4a321e123e4d4ff315f57f4e0adf294fe3a95be/OFL.txt) pin provenance. | This pins only the common QA fixture font; it is not a Moonframe production/skin typography decision. Any copied font must retain the OFL notice. No remote font request. Test font-load failure separately using a declared system fallback and record it as a fallback run. |
| Images | Deterministic local SVGs only; no remote URL, animation, or user upload | The overview/table uses one 640×360 abstract project thumbnail and five 64×64 decorative geometric avatar placeholders. Exact SVG bytes are checked into [the fixture directory](fixtures/skin-lab/); keep them identical across skins. They are ornamental only and must have empty text alternatives; adjacent headings and owner names carry the information. |
| Data and network | Inline versioned JSON fixture; network requests fail the deterministic run | Fixed sort order, IDs, statuses, counts, and timestamps below. No locale-sensitive implicit sort. |
| Motion | Baseline capture freezes animation and transition timing only for screenshot stability | Run reduced-motion and normal-motion behavior separately. Reduced motion must preserve state feedback; no capture mask may hide focus, error, status, or content. |
| Density and contrast | Comfortable density, normal contrast | Add compact and spacious samples, grayscale, decoration-off, high contrast, and OS forced-colors as distinct named runs. These are verification toggles, not skins or modes. |

Capture metadata must include commit SHA, fixture schema/version and content hash, skin ID, resolved `light|dark` mode, locale/direction, density, contrast, motion, viewport, zoom/text scale, DPR, timezone/frozen instant, OS image, browser and version, actual font name/version/source commit/file SHA-256, asset hashes, test command/run URL, screenshot hash, reviewer and review date. The pinned Noto Sans TTF SHA-256 is listed above; the local SVG fixture hashes are listed in §7. Unknown environment fields remain explicitly `unverified`.

The root preference `system` resolves to an effective `light` or `dark` capture and is not a third appearance. The four proof skins × two effective modes make **eight planned reference appearances**, not eight completed renders.

## Current implementation screenshot profile (MF-VF-017)

The existing browser capture suite screenshots the `/lab` default `PropsPlayground` (Button / primary / md / “Explore Moonframe”) and the fixed Northstar Studio dashboard specimen, including its five-row Project tasks table. The dashboard uses the fixture's static heading/date, KPI labels and values, activity/table rows, and long-copy probe across all skins. The table starts in due-date order and has a local task-name/owner/status/ID search plus a task-name sort; browser checks verify the same initial order, sorted order, filtered row and restored baseline across every skin/mode. Desktop is pinned to 1440×960 CSS px, tablet to a real 768×1024 viewport, and phone to a real 360×800 viewport; tablet and phone screenshots are rendered at those sizes rather than resized from desktop. All three use `en-US` / LTR, UTC, and `2026-10-25T12:00:00.000Z`; screenshots wait for `document.fonts.ready`. Tablet and phone checks verify no horizontal page overflow, and phone checks also keep the focused Appearance control within viewport bounds. The capture sidecar records viewport, locale, timezone, frozen time, fixture description, computed root font stack, font loading status, browser name/version and user agent. The current runtime uses its CSS font-family stack and environment-provided fallback; it does not bundle or claim the candidate Noto Sans fixture font. These records make the current implementation captures repeatable and auditable, but do not claim the full future fixture, identical system font rendering across operating systems, or human visual approval.

## 2. Shared screens and exact content

The prototype uses one fictional project-operations workspace. Visual arrangement may differ by skin; semantics, labels, values, row order, and interaction outcomes do not.

### `shell-nav` and `dashboard-overview`

- Workspace heading: **Northstar Studio**; page title: **Overview**; date label: **Sunday, October 25, 2026** (from the frozen clock).
- Navigation order and labels: `Overview`, `Projects`, `Tasks`, `Reports`, `Settings`. Mark `Overview` current. The brand mark may use text; no skin may add a logo that changes meaning.
- KPI order and values: `Open tasks — 12`; `In progress — 4`; `Completed this week — 18`. Each value has a visible text label and is not conveyed by color alone.
- Activity heading: **Recent project activity**. Rows use the same records as the data table fixture.
- Long-copy probe: “Quarterly migration readiness — confirm access, review the rollback checklist, and notify the operations group before the maintenance window.” Keep the full sentence available at every viewport; wrapping is allowed, truncation requires an accessible expansion that is identical across skins.

### `data-table`

Caption: **Project tasks**. Columns, in order: `Task`, `Owner`, `Status`, `Due date`, `Estimate`. Default order is the stable fixture order below. Dates are rendered in the pinned locale/timezone; preserve the canonical ISO values in fixture data.

| ID | Task | Owner | Status | Due date (UTC) | Estimate |
|---|---|---|---|---|---:|
| `T-1042` | Confirm migration checklist | Amina Yusuf | In progress | 2026-10-27 | 3 h |
| `T-1043` | Review workspace permissions | Leo Martin | Needs review | 2026-10-28 | 2 h |
| `T-1044` | Publish release notes draft | Nia Patel | Not started | 2026-10-30 | 4 h |
| `T-1045` | Verify scheduled export | Mateo Silva | Complete | 2026-10-24 | 1 h |
| `T-1046` | Test recovery procedure | Hana Kim | Blocked | 2026-10-31 | 5 h |

Use visible text or icon-plus-text for every status. Sorting, selection, and filtering states must operate on the same records and expose the same accessible names and results. The current `/lab` specimen provides text search by task ID/name/owner/status and sort by due date or task name; browser checks cover the default order, alphabetical order, filtered result and restored state for all skins in both modes. It does not claim backend persistence or selection behavior.

### `forms-validation`

Form title: **Workspace profile**. Fields in order:

1. `Workspace name` — value `Northstar Studio`, required.
2. `Workspace URL` — value `https://northstar.example/workspace`, required; helper text `Use the address your team recognizes.`
3. `Description` — the long-copy probe above; multiline, with no visual-only character count.
4. `Default report time` — `09:30`, with timezone label `UTC` visible.
5. `Notifications` — enabled checkbox, label `Email me about task changes`.
6. Actions: `Cancel` then `Save changes`.

Fixture states are separate captures: default; invalid URL with visible text `Enter a valid workspace URL.` and an associated field error; pending save with `Saving…`; and success with `Workspace profile saved.`. Keep labels, required state, error association, focus order, and status announcement equivalent across skins. Do not submit to a backend.

### `overlays-menus`

Open the dialog from a row action on `T-1045`. Title: **Archive completed task?** Body: **“Verify scheduled export” is complete. You can find archived tasks in the project history.** Actions: `Keep task` (cancel) and `Archive task` (destructive action). The fixture specifies the initial focus target, Escape cancellation, focus containment while modal, and focus return to the invoking row action; these remain behavior requirements for later implementation and are not proven by this document.

Include one navigation overflow menu with the items `Rename workspace`, `Manage members`, and `Archive workspace`. Disabled and destructive states must have text/semantics; color alone cannot distinguish them.

## 3. State and responsive coverage

At minimum, the implementation phase must map these same screens to available default, hover, keyboard focus-visible, active, selected, disabled, invalid, pending, success, empty, error, and offline states where each state applies. Keep state changes separate from skin comparisons: changing a skin must not change fixture data or status.

Use the three fixed viewports in §1 for each screen. At 360 CSS px, verify readable navigation, form labels/errors, dialog actions, and a usable table alternative (responsive columns, row detail, or deliberate horizontal scroll with preserved access). For zoom/reflow, inspect 200% text resizing and 400% browser zoom against the accessibility QA protocol. Include long label and unbreakable-content probes: `Quarterly internationalization and accessibility readiness review`, `northstar.example/workspaces/operations/recovery-checklist-2026`, and `Amina Yusuf — Platform Operations`.

## 4. Appearance and accessibility verification switches

Each switch is recorded independently in capture metadata; never combine several toggles into an unnamed “special” screenshot.

- Effective modes: `light`, `dark`; `system` is resolved before capture.
- Grayscale: remove color information while retaining layout, text, borders, and functional state indicators.
- Decoration-off: disable optional textures, illustrations, ornamental marks, and non-functional effects; retain content, focus indicators, errors, and control boundaries.
- Reduced motion: use the product's reduced-motion behavior; verify no information or state feedback disappears.
- Forced colors: use the OS/browser forced-colors mode when implemented; do not approximate it with grayscale.
- Density: `comfortable` baseline, with separate `compact` and `spacious` checks; preserve target size and readable focus.
- Contrast: normal baseline plus explicit high-contrast preference if implemented.
- Font/image failure: block local fixture assets in a separate run and record fallback, layout shift, and meaningful text alternatives.

Visual-only screenshot stabilization may freeze time and disable transitions, caret blink, and motion effects. A separate functional and accessibility run must exercise real motion preference, keyboard navigation, status/error changes, and focus behavior. Never mask focus rings or problem content to improve diff scores.

## 5. Four-skin proof and pair-review queue

First appearance set: `classic`, `moonpunk`, `moonzine`, `moonledger` × `light`, `dark`. Capture the exact same screen and fixture version for all eight appearances. This is a planned first proof only. Each screenshot remains absent until captured from real implementation; do not increment any rendered/passed/approved count here.

The initial six pairwise review queue is intentionally a mix of baseline contrasts and close-neighbor checks:

1. `classic` ↔ `moonpunk`
2. `classic` ↔ `moonzine`
3. `classic` ↔ `moonledger`
4. `moonpunk` ↔ `moonriot`
5. `moonzine` ↔ `moonhalftone`
6. `moonledger` ↔ `mooncrash`

For each pair, a future reviewer compares matching full-color, grayscale, and decoration-off captures, then records observations for the canonical eight Skin Grammar dimensions: composition, geometry, typography, surface, data/navigation, media, component recipes, and motion. Record named reviewer/date, exact pair key, mode and screen coverage, screenshot/evidence links, findings, follow-up, and verdict in the **existing Skin Grammar pair record only**. This document is not a second review ledger. The proposed six are still `not-reviewed` until comparable screenshots and human evidence exist.

**Per-pair reviewer worksheet:** complete this for each review session, then transfer the evidence, dimension observations, reviewer, date, and overall status to that exact pair in the canonical `pairwiseReviewMatrix`. Keep the worksheet with the review evidence; do not create a second mutable status ledger.

| Field | Reviewer records |
|---|---|
| Canonical pair key | Skin IDs `a` and `b`, matching one existing unordered pair exactly |
| Fixture and capture | Fixture version/hash; screen IDs; effective mode; viewport; locale/direction; density; motion/contrast switches |
| Comparable evidence | Full-color screenshot links for both skins; grayscale links for both; decoration-off links for both; capture commit and environment metadata |
| Composition | Observation for `a` / `b`; evidence link; overlap or distinction to investigate |
| Geometry | Observation for `a` / `b`; evidence link; overlap or distinction to investigate |
| Typography | Observation for `a` / `b`; evidence link; overlap or distinction to investigate |
| Surface | Observation for `a` / `b`; evidence link; overlap or distinction to investigate |
| Data/navigation | Observation for `a` / `b`; evidence link; overlap or distinction to investigate |
| Media | Observation for `a` / `b`; evidence link; overlap or distinction to investigate |
| Component recipes | Observation for `a` / `b`; evidence link; overlap or distinction to investigate |
| Motion | Observation for `a` / `b`; evidence link; reduced-motion fallback evidence where applicable |
| Accessibility/manual review | Keyboard/focus, color-independent cues, forced-colors and assistive-technology notes; unresolved risks |
| Reviewer and disposition | Reviewer name, review date, follow-up owner/action, and one canonical status: `in-review`, `pass`, `needs-revision`, or `exception-approved`; use `not-reviewed` until evidence exists |

The rubric is descriptive, not an automatic score. Record overlap as a concrete follow-up; do not convert a numeric distinctness threshold into legal originality, trademark, or accessibility clearance.

After the pilot queue, process the remaining canonical unordered pairs in `contracts/moonframe-skin-grammar-contract-v1.0.json` exactly once each (total 105). Do not create duplicate pair IDs or infer success from distance scores. The existing contract remains the sole status source; all 105 remain `not-reviewed` until actual review evidence is entered there. If two skins look alike without optional decoration, record the overlap and a design follow-up instead of changing the data or declaring a pass.

Eight dimensions and verdict use the existing [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) definitions and [QA review protocol](accessibility-visual-qa-bible.md). Distinctness scoring is an editorial signal, not legal/trademark clearance or accessibility certification.

## 6. Ownership, exclusions, and implementation handoff

- This file owns fixture copy, fixed data, environment requirements, and the planned pilot queue. Skin visual recipes remain in Skin Grammar and the skin specification; component semantics remain in component contracts.
- No provider, token generator, token values, UI framework, CSS architecture, screenshot service, package export, production font, image license, or production asset is selected here.
- The SVGs in [the fixture directory](fixtures/skin-lab/) are neutral test-only placeholders; they are not original Moonframe brand artwork or production assets.
- The pinned Noto Sans reference above is limited to reproducible test captures; it does not choose any skin's production font or design grammar.
- No screenshots, browser/AT results, rendering, skin-pair verdicts, WCAG pass, trademark/legal review, or release approval are claimed.
- Before golden captures, choose and pin the actual browser/OS/font environment and licensed fixture assets. Store capture output outside the source contract until an approved evidence workflow is available; link it from the canonical pair record when reviewed.
- After a fixture copy/data change, increment a fixture version and update every skin capture together. Never compare different fixture versions as a skin pair.

## 7. Local SVG fixture manifest

These files are first-party, hand-authored geometry used only as identical inert sample content. Their shapes are decorative placeholders, not branded artwork. The page must provide adjacent text; mark them decorative in the consuming UI. No scripts, external references, filters, embedded fonts, or animation are permitted. SHA-256 is over the exact checked-in UTF-8 bytes.

| File | Dimensions | Purpose | SHA-256 |
|---|---:|---|---|
| [`northstar-thumbnail.svg`](fixtures/skin-lab/northstar-thumbnail.svg) | 640×360 | Neutral project thumbnail; decorative | `747b7128044077f0e2292729f68d17d31a11dd9121994024ef9363ed71ef33cf` |
| [`avatar-amina.svg`](fixtures/skin-lab/avatar-amina.svg) | 64×64 | Amina row marker; decorative | `789174d5d7840c69b0f39afa97476b297ad42b20cbeabf2dfe8b2daaa8785a11` |
| [`avatar-leo.svg`](fixtures/skin-lab/avatar-leo.svg) | 64×64 | Leo row marker; decorative | `fba7e719d1c56c5430a7dfe92a6adc3aa626099e376e4c0f4a44ae6e3018df1e` |
| [`avatar-nia.svg`](fixtures/skin-lab/avatar-nia.svg) | 64×64 | Nia row marker; decorative | `ad108aa54b7fe3ffdd3b61f95d8923300715b816835e45d8361a4c562b3f3708` |
| [`avatar-mateo.svg`](fixtures/skin-lab/avatar-mateo.svg) | 64×64 | Mateo row marker; decorative | `ea0df031594eba9c2d29f229615c2963a2ec310fea2c3a83619d831f20fc973f` |
| [`avatar-hana.svg`](fixtures/skin-lab/avatar-hana.svg) | 64×64 | Hana row marker; decorative | `91d7fdcddc1baba2f964d757ce5585f965b3b7b95f72e5d9620985ea815d596a` |

---

## 2026-10-26 supplemental four-image visual reference fixture plan

Use the [creative reference contract](../../contracts/moonframe-creative-reference-contract-v0.1.json) to identify four uploaded Moonwitness images by checksum. These are **different page archetypes** and should not be used as interchangeable pixel-level fixtures: R01 admin command dashboard; R02 public editorial landing; R03 portrait campaign poster; R04 split-screen auth.

For *skin-uniqueness* compare **the same frozen dashboard, table, form and navigation DOM/data** with matching asset slots across skins. For *reference fidelity*, compare each implementation with the corresponding R01–R04 original **only after the original binary is imported and verified**; do not compare a Moonzine story page with a Moonledger table screenshot as proof of unique skin grammar.

Proposed verification cases (not produced in this document): 1440×960 desktop, 768×1024 tablet, 360×800 mobile; light/dark per meaningful screen; grayscale and decorations-off; reduced-motion; 200% text and 400% reflow; keyboard/focus and forced-colors; screenshot manifest with commit SHA/content fixture ID/reference SHA. Keep typography, language and data deterministic, and store a named human review independent of `audit:pairs`.
