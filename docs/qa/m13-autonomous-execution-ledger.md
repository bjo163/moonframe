# MF-VF-073 — Draw original Moonpunk motif SVG

## MF-VF-088 — Draw Moonriot edition badge

- Added `assets/source/skins/moonriot/edition.svg`, an original static Moonframe/Moonriot edition label with accessible title/description and directional angular geometry. It identifies a visual edition under Moonframe and does not present Moonriot as an independent company logo.
- SHA-256: `57D4B99C0E48C9CD672D9B1A2AC309B1A3075EC4451DC14C5038D6135CBFB635`. Dependencies MF-VF-084 and MF-VF-039 are implemented. Status: `implemented`; source inspection only. `git diff --check` exited 0 before the documentation updates. No package-manager commands, validators, tests, typecheck, build, rendering, small-size optical review, or human review run under runner override. Rights review and acceptance remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore the backlog row to planned, then remove this section and its TODO update.

## MF-VF-067 — Draw semantic sun icon

- Added `assets/source/icons/sun.svg`, an original static 24×24 `currentColor` sun glyph with accessible label `Sun`.
- SHA-256: `0d63383d2e0d81d0f33ab795457ba8627b8bdd9a6b7e716349f066af47e20a00`. Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendered-size checks, or browser captures were run. Light/dark/forced-colors rendering, small-size legibility, human review, and acceptance remain pending.
- Live task rows: 82/292 foundation, 57/168 reference, and 28/28 preflight = 167/488 checked; 321 unchecked. Checked does not imply review or acceptance. Host runner owns verification/checkpoint; no commit created.
- Rollback: remove the SVG and restore this task row, TODO update, and ledger entry.

- Added original abstract Moonpunk offset-slab motif `assets/source/creative-reference/r01/moonpunk-offset-slab.svg` (SHA-256 `75D6BE881EDC388016A78D82FC900B73FAC87B194EE70145873DB1B7F1A8C5C3`). It uses embedded geometry only and contains no consumer branding. Dependency MF-VF-072 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, rendered-size inspection, browser capture, human review, or acceptance claimed under runner override. Backlog and summary counts updated to 168/488 checked (82/292 foundation visual + 58/168 reference + 28/28 preflight); rights and acceptance remain pending. No commit created; host runner owns verification/checkpoint. Rollback: remove the SVG and restore the MF-VF-073 row and root counts.

# M13 autonomous execution ledger

## MF-VF-422 — Check all four reference metadata records use correct hashes

- Compared the four `photos` records in `contracts/moonframe-creative-reference-contract-v0.1.json` with `docs/visual/references/reference-index.md`. IDs MWX-REF-001…004 all have matching SHA-256 values and dimensions; every index row says source media is not committed and remains unversioned.
- PowerShell metadata consistency check exited 0. Original bytes are absent, so the hashes were not independently recomputed. This satisfies the task's explicit unversioned-media branch; no image import or rights approval is implied.
- Status: `captured`; human review and acceptance remain pending. No package-manager commands, suites, typecheck, build, browser capture or commit run/created per runner override. Host runner owns verification/checkpoint. Rollback: restore the task row to planned and remove this entry and matching TODO update.

## MF-VF-086 — Draw minimal Moonriot decorative pattern SVG

- Added `assets/source/skins/moonriot/pattern.svg`, an original static five-stripe directional pattern for optional noninteractive margins. SHA-256: `F5337BB7A5042B9FE07DE093C060720089469A94B85CBAA40F159A90FFD3A168`.
- Dependency MF-VF-084 is implemented. XML parse and static scan for scripts, event attributes, `foreignObject`, hrefs, and URL references passed. No package-manager commands, validators, suites, typecheck, build, rendering, browser capture, or human review were run per runner override. Color/contrast, visual distinction, rights review, and acceptance remain pending.
- Status: `implemented`; no commit created. Checkbox counts: 97/292 foundation + 66/168 reference + 28/28 preflight = 191/488 checked; 297 unchecked. Rollback: remove the SVG and restore its backlog row, TODO update, and this entry.

## MF-VF-078 — Moonpunk structural navigation, layout, and typography

- Added a scoped Moonpunk composition in `src/styles.css`: offset sidebar slabs and nav rails, an angular split hero, condensed uppercase display headings, and a heavy header rule. Shared component markup, keyboard behavior, and accessible semantics are unchanged.
- SHA-256 of the resulting stylesheet: `87FC658D887E86229CE3D0483F928258B9D146FAAEAE1126AC66D510308B2EAD`.
- Dependency MF-VF-072 is implemented. Status: `implemented`; `git diff --check` passed. Per runner override, no validators, package-manager commands, tests, typecheck, build, rendering, or browser captures were run; host runner owns verification/checkpoint. Human visual review and acceptance remain pending. No aggregate recount is asserted because existing snapshots conflict.
- No commit created. Rollback: remove the MF-VF-078 CSS block and restore its backlog row and this ledger entry.

## MF-VF-077 — Style stable semantic Moonpunk icon frames

- Updated `src/styles.css` with Moonpunk-scoped SVG icon frame sizing/alignment across navigation, buttons, search, callouts, empty states, and stat headers. Navigation/button glyphs receive a small offset ink shadow; empty-state glyphs are larger; callout glyphs use the existing accent. No shared component markup, glyph meaning, or ARIA behavior changed.
- Dependencies MF-VF-072, MF-VF-050, and MF-VF-057 are implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, tests, typecheck, build, render, browser capture, or human review run. Host runner owns applicable verification/checkpoint; visual review and acceptance remain pending.
- Rollback: remove the scoped CSS rules and restore the matching backlog/TODO entry.

## MF-VF-076 — Draw small Moonpunk edition vector badge

- Added `assets/source/skins/moonpunk/edition.svg`, a self-contained static library/skin label with editable vector text and no external resources, scripts, event handlers, or Moonwitness marks.
- SHA-256: `cb686696f24b5ec02f456af0a467aead2ea14fe1648b9eae876aaf24f0a9c9aa`. Dependencies MF-VF-072 and MF-VF-039 are implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, tests, typecheck, build, rendering, or browser capture were run. Trademark/rights, optical review, and acceptance remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore MF-VF-076 to planned, then remove this ledger section and the matching TODO update.

## MF-VF-076 — Draw small Moonpunk edition vector badge

- Added `assets/source/skins/moonpunk/edition.svg`, a self-contained static library/skin label with editable vector text and no external resources, scripts, event handlers, or Moonwitness marks.
- SHA-256: `cb686696f24b5ec02f456af0a467aead2ea14fe1648b9eae876aaf24f0a9c9aa`. Dependencies MF-VF-072 and MF-VF-039 are implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, tests, typecheck, build, rendering, or browser capture were run. Trademark/rights, optical review, and acceptance remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore MF-VF-076 to planned, then remove this ledger section and the matching TODO update.

## MF-VF-075 — Draw original Moonpunk hero illustration SVG

- Added `assets/source/skins/moonpunk/hero.svg`, an original static abstract block-built lunar/urban illustration with title and description. It uses embedded geometry only and contains no consumer branding, external resource, script, or event handler.
- SHA-256: `25ce3fe8cc0f852ea35671ca3df015cdbabe7a9bee7c9bfcef01bfccc436d106`. Dependency MF-VF-072 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, render, browser capture, or optical/human review run under runner override. Acceptance remains pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore the MF-VF-075 row to planned, then remove this ledger section and its TODO update.

## MF-VF-068 — Draw semantic settings icon

- Added original static 24×24 `currentColor` gear source `assets/source/icons/settings.svg` with accessible label `Settings`; no external asset or consumer branding used.
- SHA-256: `6796d3ac6210ddebfddf5617a514494baf6f1d743c5b66b1b6dc7b24ff973058`. Dependency `MF-VF-033` is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendered-size checks, or browser captures were run. Light/dark/forced-colors review, 16/20/24px legibility review, human review, and acceptance remain pending.
- Rollback: remove the SVG and restore the MF-VF-068 backlog row and this section.

## MF-VF-348 — Prepare R02 responsive screenshot fixture

- Added a deterministic Playwright fixture in `tests/browser/site.spec.js` that renders the R02 masthead, three editorial story tiles, and a three-entry timeline at 1440, 768, and 360 CSS pixels, writing named full-page screenshots under `artifacts/site/` when the host runs the browser suite.
- Status: `implemented`; screenshots have not been captured. Dependency `MF-VF-023` is implemented. `git diff --check` passed. Per runner override, no package-manager commands, validators, test suites, typecheck, build, or browser run. Human visual review, original-reference comparison, rights clearance, and acceptance remain pending. No commit created; host runner handles verification and checkpoint.
- Rollback: remove the R02 test fixture, restore the task to planned, and remove this ledger section.

## MF-VF-074 — Draw minimal Moonpunk decorative pattern SVG

- Added `assets/source/skins/moonpunk/pattern.svg`, a sparse monochrome square-registration pattern with embedded geometry and accessible title/description. SHA-256: `F9C698844A2E9D6D7BAB8EF108208B8B0539660C0E58E6CA26679EA39DCB7242`.
- Dependency MF-VF-072 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, rendering, browser capture, or human optical review run/claimed under runner override. Margin-only placement, optional hide behavior, and visual review remain pending.
- Live task rows: 83/292 foundation, 58/168 reference, and 28/28 preflight = 169/488 checked; 319 unchecked. Checked does not imply review or acceptance. Host runner owns verification/checkpoint; no commit created.
- Rollback: remove the SVG and restore the MF-VF-074 row, TODO count, and this ledger entry.

## MF-VF-049 — Register real accepted art source rights/hash

- Inspected existing draft brand sources and their MF-VF-039–042 evidence alongside `docs/brand/original-asset-brand-bible.md`. Rights, trademark, human visual review, and production approval remain pending; no verified creator/license evidence is available to register.
- Changed MF-VF-049 from `planned` to `blocked`; left its checkbox unchecked. Exact unmet dependency: actual creator/source ownership and applicable redistribution license evidence, plus any required reviewer evidence.
- No implementation or asset manifest claim was added. No package-manager commands, tests, typecheck, build, validators, or browser checks were run per runner override; no commit/push performed. Host runner handles any applicable verification/checkpoint.
- Rollback: restore MF-VF-049 to `planned` and remove the corresponding blocker notes from the backlog, TODO, and this ledger after source/rights evidence is supplied.

## MF-VF-365 — Provide transcript/alt for flattened export

- Added `apps/moonframe/templates/visual-reference/r03-transcript.tsx`, a semantic reusable transcript surface with live title, descriptive artwork text, and optional event details for poster exports.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, test suites, typecheck, build, render, browser capture, or human review run. Host runner owns verification and checkpoint; rights and acceptance remain pending.
- Rollback: remove the transcript component and restore the matching backlog row and ledger entry.

## MF-VF-364 — Implement poster editor-safe crop/zoom preview

- Added `apps/moonframe/templates/visual-reference/r03-preview.tsx` and `.module.css`. The client component keeps controls outside a fixed 2:3 poster viewport, constrains zoom to configurable bounds, and provides scrollable framing for cropped/zoomed content. Native button states and an announced percentage support keyboard and assistive technology use.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source inspection only. Runner override honored: no package-manager commands, validators, suites, typecheck, build, browser rendering, screenshots, source-reference comparison, or human review. Rights clearance and acceptance remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the two component files and restore the matching backlog, TODO, and ledger evidence.

## MF-VF-063 — Draw semantic download icon

- Added `assets/source/icons/download.svg`, an original static 24×24 `currentColor` arrow-and-tray glyph with accessible label `Download`.
- SHA-256: `e750be7cc80e09ba904941f7f103c12960a7d9fab2ac503019b5b84f4adeabe7`. Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendering, or browser captures were run. Light/dark/forced-colors rendering, 16/20/24px legibility, human review, and acceptance remain pending.
- Live task rows: 81/292 foundation, 57/168 reference, and 28/28 preflight = 166/488 checked; 322 unchecked. Checked does not imply review or acceptance. Host runner owns verification/checkpoint; no commit created.
- Rollback: remove the SVG and restore this task row, TODO update, and ledger entry.

## MF-VF-353 — Define original performance title typography hierarchy

- Added `apps/moonframe/templates/visual-reference/r03-title.tsx` and `.module.css`. `R03Title` renders caller-provided title and optional eyebrow as live DOM text, uses a responsive display hierarchy with long-title wrapping, and switches foreground to the system canvas text color in forced-colors mode.
- Dependency `MF-VF-024` is implemented. Status: `implemented`; source inspection only. Per runner override, no package-manager commands, validators, test suites, typecheck, build, render, browser capture, or human review run/claimed. No artwork, lyrics, performer likeness, rights clearance, or acceptance is implied; host runner owns verification/checkpoint.
- No aggregate recount is asserted because live summary snapshots conflict. Rollback: remove the component and stylesheet and restore this task row, TODO update, and ledger entry.

## MF-VF-062 — Draw semantic sort icon

- Added `assets/source/icons/sort.svg`, an original 24×24 `currentColor` glyph with opposing vertical arrows and accessible label `Sort`. SHA-256: `71bf6e991ece6ce0a035cd0b8d1b3f2845c75cd8cdbb4866d27b23d60e22fe52`.
- Dependency MF-VF-033 is implemented. Status: `implemented`; static source inspection confirms the bounded viewBox and absence of scripts, event attributes, and external resources. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendered-size checks, or browser captures were run. Human review and acceptance are not claimed; 16/20/24px and light/dark/forced-colors visual checks remain pending.
- Live task checkbox counts after this change: 79/292 foundation visual, 58/168 reference visual, 28/28 preflight = 165/488 checked; 323 unchecked. Checked does not mean reviewed or accepted. No commit created; host runner handles verification and checkpoint. Rollback: remove the SVG and restore this entry, backlog row, and TODO count.

## MF-VF-362 — Draw energetic yellow label/tag motif

- Added `assets/source/creative-reference/r03/label-sticker.svg`, an original blank yellow sticker backing with irregular geometry and no fixed copy, consumer mark, script, or external resource.
- SHA-256: `895ED690BEEF5342AAA344A124FE91B8552801C87FF10C03127205624772CE90`.
- Dependency `MF-VF-024` is implemented. Status is `implemented`; static source inspection and `git diff --check` passed. Per runner override, no validators, package-manager commands, test suites, typecheck, build, rendering, or browser captures were run; host runner owns verification/checkpoint. No human optical review, rights approval, or acceptance is claimed.
- Counts are not restated because the root/backlog aggregate snapshots conflict. Rollback: remove the SVG and restore the backlog row and this entry.

## MF-VF-328 — Review R01 screenshot against original source (blocked)

- At live HEAD `89d85c7a3ced2c3c2706041d263bed774fdf61c1`, the task dependency `MF-VF-022` is implemented, but required source media is missing: no original R01 PNG exists in the checkout and `/mnt/data/moonframe_m13_reference_originals.zip` is absent.
- The creative reference contract labels the source media unversioned and requires hash verification. Without the original bytes, a four-zone source comparison and delta report would be fabricated; task remains unchecked and `blocked` pending verified owner-supplied media.
- No tests, validators, package-manager commands, captures, comparisons, or reviews run under the runner override. No rights, human review, or acceptance claimed. Unblock after source media is provided and verified against the contract SHA-256. Rollback: return the task row to `planned` and remove this entry if source media becomes available.

## MF-VF-046 — Render actual 32px favicon PNG

- Added `assets/exports/brand/favicon-32.png`, rasterized from `assets/exports/brand/favicon.svg` using a temporary Node script with 8× coverage sampling. The 32×32 RGBA result preserves transparent pixels (736 fully transparent pixels).
- PNG SHA-256: `2f08d6889ca2550898a8a1cb71858bad60fa09339b7b8d026b8ebe2646a2453a`; source SVG SHA-256: `8ade2ea8431f62d34fec3b2fd9c2f0ce79757a1994c9d0b1b4273f31f25e0c4f`.
- Chromium launch through Playwright failed with `spawn EPERM`; no validators, package-manager commands, suites, typecheck, build, or browser suite were run per runner override. Implementation status only; optical/human review, rights, trademark, and acceptance remain pending. Host runner owns verification/checkpoint.
- Live task rows: 162/488 implemented or captured, 326 planned, 0 explicitly blocked. Checked status does not imply capture, human review, or acceptance.
- Rollback: remove the PNG and restore the task row plus this ledger entry.

## MF-VF-360 — Write safe placeholder performance copy

- Added `apps/moonframe/templates/visual-reference/r03-copy.ts` with an original generic event title, short description, sample date and venue, and neutral CTA. It contains no lyrics, real performer identity, or consumer brand marks.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, render, browser capture, or human review run. Host runner owns verification/checkpoint. Rights review and acceptance remain pending.
- This advances the reference backlog by one checked task; aggregate snapshots elsewhere have conflicting historical totals, so no independently recounted aggregate is asserted here.
- Rollback: remove the copy module and restore the MF-VF-360 row and this entry.

# MF-VF-359 — Create torn-caption generic vector band

- Added `assets/source/creative-reference/r03/caption-band.svg`, an original static torn-edge paper backing with a clear center reserved for separately supplied live text. It includes an SVG title and description and contains no embedded copy, lyrics, consumer marks, performer imagery, scripts, event handlers, or external resources.
- SHA-256: `7a3297b50def651464516ca40c31145fc2a6684414c0d4568ec21f7f28a4e091`.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendering, browser capture, or human review run. Host runner owns verification/checkpoint. Rights clearance, optical review, and acceptance remain pending.
- Live checkbox count across the three M13 backlogs: 158/488 implemented-or-captured-or-implemented, 330 pending, 0 explicitly blocked. This is a task-status count, not a review or acceptance claim.
- Rollback: remove the SVG and restore the MF-VF-359 backlog row and this ledger entry.

## MF-VF-061 — Draw semantic filter icon

- Added `assets/source/icons/filter.svg`, an original self-contained 24×24 funnel glyph using `currentColor` with accessible label `Filter`. The source contains a single outlined funnel path and no scripts or external resources.
- Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendering, browser capture, human review, or acceptance claimed. 16/20/24px legibility and light/dark/forced-colors review remain pending; host runner owns verification/checkpoint.
- Aggregate counts are not restated because the root summary and historic ledger snapshots conflict. Rollback: remove the SVG and restore the MF-VF-061 backlog row and this entry.

## MF-VF-060 — Draw semantic edit icon

- Added `assets/source/icons/edit.svg`, an original self-contained 24×24 pencil glyph using `currentColor` with accessible label `Edit`. SHA-256: `972634dda7ff4454c1c383e8c945c864e23dcca3884da58a7103f5b78b141933`.
- Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. Per runner override, no package-manager commands, validators, suites, typecheck, build, browser rendering, or capture were run. 16/20/24px legibility, light/dark/forced-colors review, human review, and acceptance remain pending. Host runner owns verification/checkpoint.
- Root TODO aggregate figures conflict with live historical task evidence, so no aggregate is claimed or recalculated. Rollback: remove the SVG and restore the MF-VF-060 backlog status and this entry.

## MF-VF-072 — Write Moonpunk visual direction and anti-overlap brief

- Added `docs/visual/skins/moonpunk.md`, a direction brief covering block/offset composition, geometry, type and surface roles, navigation/component principles, and distinctions from Moonriot, Moonsmash, and Moonzine. It preserves live DOM/behavior semantics, acid-lime skin identity, decoration-off/reduced-motion constraints, and excludes Moonwitness consumer branding and reference-derived artwork.
- SHA-256: `C05270D06E71F1FC040C8A0E17AABFA4DD344EE81E23C400AE81BAEB32442956`. Dependency MF-VF-015 is implemented. Status: `implemented` only; no validators, package-manager commands, suites, typecheck, build, screenshots, or human review run per runner override. Host runner owns verification. No rights or visual approval claimed.
- Aggregate counts are not restated because live summary snapshots conflict; this task row is the authoritative status change. Rollback: remove the brief and restore the backlog row.

## MF-VF-047 — Create safe SVG favicon candidate

- Added `assets/exports/brand/favicon.svg`, a static 32×32 candidate using only the existing generic geometric-frame draft direction. SHA-256: `8ade2ea8431f62d34fec3b2fd9c2f0ce79757a1994c9d0b1b4273f31f25e0c4f`.
- Source inspection confirms the file uses only an SVG title, path and circle with no executable or external content. Task status is `implemented`; per runner override, no validators, package-manager commands, suites, typecheck, build, render or capture were run. Host runner owns verification/checkpoint. No candidate approval, human review, trademark clearance or distribution rights are claimed.
- The 488-task total moves one task from planned to implemented: this task is an update only, not an independently recounted aggregate because prior ledger counts conflict. Rollback: delete the SVG and restore the task row and this entry.

## MF-VF-045 — Render actual 16px favicon PNG

- Rendered the source favicon through Chromium using Playwright CLI, then Playwright API with `omitBackground:true` to preserve transparency. Output `assets/exports/brand/favicon-16.png` is PNG RGBA, 16×16 px, 187 bytes; SHA-256 `bd3429adc681be73f6591ecfa0055c40ff32e4e8aa1e178ab50968610c62e3f6`.
- The earlier renderer blocker is resolved. Status is `implemented`; human optical review, trademark approval, and distribution rights remain pending.
- Host runner performs contracts, handoff validation, unit tests, typecheck, build, and applicable browser checks before commit.
- Rollback: remove `favicon-16.png` and restore the task row and prior blocker entry.
## MF-VF-345 — Prevent decorative layers over article text

- Made R02 masthead layer order explicit in `r02-masthead.module.css`: backdrop is z-index 0, semantic content is positioned at z-index 1, and the parent isolated stacking context contains both. Backdrop JSX is marked `aria-hidden` and `inert`; CSS disables pointer input.
- Dependency `MF-VF-023` is implemented. Status: `implemented`. Runner override honored: no validators, package-manager commands, tests, typecheck, build, rendering, browser capture, or reference comparison run; host runner owns verification/checkpoint. Human visual review, rights clearance and acceptance remain pending.
- Counts: 145/488 implemented-or-captured, 343/488 planned, 0 explicitly blocked. Checked rows do not imply review, rights clearance or acceptance.
- Rollback: restore the original masthead CSS/JSX, task row, TODO count and this ledger entry.

## MF-VF-344 — Create readable textured title hierarchy fallback

- Updated `apps/moonframe/templates/visual-reference/r02-masthead.module.css` with a resilient system display-font fallback, constrained responsive title width, readable minimum sizing and weight, balanced wrapping, and safe breaking of long unspaced titles. Heading text remains live DOM text; no third-party font or asset was added.
- Dependency MF-VF-023 is implemented. Status: `implemented`; static source inspection only. Runner override honored: no package-manager commands, validators, tests, typecheck, build, render, browser capture, or source comparison run. Human visual review, rights clearance, and acceptance are not claimed; host runner owns verification/checkpoint.
- Counts: 144/488 implemented-or-captured, 344/488 planned, 0 explicitly blocked. Counts do not imply capture, review, or acceptance.
- Rollback: revert the masthead CSS adjustment and restore this task row plus the TODO and ledger count.

## MF-VF-043 — Create single-color mark

- Added `assets/source/brand/moonframe-mark-mono.svg`, an original 32×32 static variant of the refined draft mark using `currentColor` only. SHA-256: `f2443d3e095cc1ff60c727d14e20e678b8e4a62cd70cd942817a489fb4ad4c6c`.
- Dependency `MF-VF-040` is implemented. Status: `implemented`. No validator, package-manager command, suite, typecheck, build, rendered-size inspection, or capture run per runner override; host runner owns verification. Human review, rights, trademark clearance, and acceptance remain pending.
- Rollback: remove the SVG and restore this entry and task row.

## Current live counts after MF-VF-343

- Checked task rows: 141/488 implemented or captured (65/292 foundation visual, 48/168 reference visual, and 28/28 preflight); 347/488 remain planned; 0 explicitly blocked. Counts continue the preceding task ledger; checked rows do not imply human review, rights clearance, or acceptance.

## MF-VF-343 — Style editorial torn border and paper pacing

- Added an opt-in `.mf-editorial-paper` CSS treatment scoped to `[data-skin="moonzine"]` in `src/styles.css`; it adds restrained edge linework and content pacing, with a forced-colors fallback. Shared card defaults and other skin rules are unchanged.
- Dependency `MF-VF-023` is implemented. Task status: `implemented`. Per runner override, no validators, package-manager commands, tests, typecheck, build, browser rendering/capture, or reference comparison were run; host runner owns verification/checkpoint. Human review, rights clearance, and acceptance remain pending.
- Rollback: remove the scoped CSS block and restore this entry, task row, and root TODO summary.

## MF-VF-042 — Create horizontal mark+wordmark lockup

- Added `assets/source/brand/moonframe-lockup.svg`, an original static horizontal lockup combining the refined geometric-frame draft and editable live-text wordmark. SHA-256: `d84ee6c2ff3d7000fa2071bb600231a60da33edebc912dfbf1fd36271f9f68cd`.
- Dependencies `MF-VF-040` and `MF-VF-041` are implemented. Task status: `implemented`. Runner override honored: no package-manager commands, validators, suites, typecheck, build, rendering, browser capture, or reference comparison run. Host runner owns verification/checkpoint. Rights clearance, trademark review, rendered mobile-size inspection, human visual review and production approval remain pending.
- Foundation backlog advances from 56 to 57 checked/implemented-or-captured-or-implemented rows; root TODO updated. Full recount deferred to host verification.
- Rollback: remove the SVG and restore this entry, the task row and root summary.

## Current live counts after MF-VF-342

- Checked task rows: 140/488 implemented or captured (65/292 foundation visual, 47/168 reference visual, and 28/28 preflight); 348/488 remain planned; 0 explicitly blocked. Checked rows do not imply human review, rights clearance, or acceptance.
- The prior recorded count was 139/488; MF-VF-342 adds one implemented row. Root TODO summary is synchronized to the updated count. Exact full recount deferred to host verification; no claim of independent runtime verification.

## MF-VF-342 — Build bottom recruitment/action banner

- Added `apps/moonframe/templates/visual-reference/r02-bottom-cta.tsx` and `r02-bottom-cta.module.css`: semantic heading/copy, a real caller-configured link, optional decorative paint isolated from the interaction, visible keyboard focus, narrow-screen stacked layout, and reduced-motion handling.
- Dependency `MF-VF-023` is implemented. Status `implemented`; per runner override, no package-manager commands, validators, suites, typecheck, build, browser rendering/capture, or reference comparison were run. Host runner owns verification/checkpoint. Human review, rights clearance, and acceptance remain pending.
- Rollback: remove the component and stylesheet and restore the matching backlog/TODO/ledger evidence.

## MF-VF-358 — Create energetic ink/collage title frame

- Added `assets/source/creative-reference/r03/header-frame.svg`, an original static frame of angular paper fragments and loose ink strokes with a clear center for selectable/live headline text. No consumer mark, embedded heading, performer imagery, external resource, script, or event attribute is present.
- SHA-256: `20de87341f4e87d371886a34f63e44f0e499c0ac02d83eba1072f1b60e326be8`.
- Dependency `MF-VF-024` is implemented. Status: `implemented`; static source inspection and `git diff --check` passed. Per runner override, no package-manager commands, validators, suites, typecheck, build, browser rendering, capture, or reference comparison were run. Host runner owns verification/checkpoint. Rights clearance, human optical review, and acceptance remain pending.
- Rollback: remove the SVG and restore the matching task row and root TODO count/summary.

## MF-VF-341 — Draw neutral constellation pin graphics

- Added `assets/source/creative-reference/r02/constellation-pins.svg`, a self-contained original static vector of neutral circular pins joined by fine constellation lines. It has no labels, character imagery, scripts, event handlers, external resources, or reference-derived assets.
- SHA-256: `697704e03eed62be35ee8adc8c849c57fe6a22e7c769ec0c8580b774f682a099`.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; static source inspection only. Runner override honored: no package-manager commands, validators, suites, typecheck, build, rendering, browser capture, or reference comparison run; host runner owns verification/checkpoint. Human optical review, rights clearance, and acceptance remain pending.
- Counts advance from the previous live summary 134/488 implemented-or-captured-or-implemented, 354 planned, 0 explicitly blocked to 135/488, 353 planned, 0 explicitly blocked.
- Rollback: remove the SVG and restore the matching task/backlog/TODO/ledger evidence.

## MF-VF-340 — Prepare crew constellation graph placeholder

- Added `apps/moonframe/templates/visual-reference/r02-crew-map.tsx` and `.module.css`. Consumer-provided members and optional connections render as a deterministic constellation-style graph; all member names/roles also appear in a semantic list. Responsive stacking and forced-colors styles are included.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; static source review only. Per runner override, no validators, package-manager commands, test suites, typecheck, build, rendering, browser capture, or source-reference comparison were run. Host runner owns verification/checkpoint. Human visual review, rights, and acceptance remain pending.
- Rollback: remove the component/CSS module and restore the matching backlog/TODO/ledger evidence.
- Counts: prior live count 133/488 implemented-or-captured, 355 planned, 0 blocked; now 134/488 implemented-or-captured, 354 planned, 0 blocked.

## MF-VF-335 — Draw pink graffiti slash decor

- Added `assets/source/creative-reference/r02/diagonal-spray.svg`, an original slash-and-speckle motif with no embedded text, consumer marks, scripts, event handlers, or external resources. It remains an optional static asset and is not wired into a page.
- SHA-256: `2bb684a231973d51c102bd58b61f34a25c59b2138819827aaa51b4e206ebd808`.
- Dependency `MF-VF-023` is implemented. Status: `implemented`. Per runner override, no validators, package-manager commands, test suites, typecheck, build, rendering, browser capture, or reference comparison were run; host runner owns verification/checkpoint. Human optical review, source rights, and acceptance remain pending.
- Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.
- Counts: prior live summary 124/488 implemented-or-captured, 364 planned, 0 explicitly blocked; now 125/488 implemented-or-captured, 363 planned, 0 blocked.

## MF-VF-054 — Draw semantic arrow-right icon

- Added `assets/source/icons/arrow-right.svg`, a self-contained 24×24 `currentColor` right arrow with accessible label `Continue`.
- SHA-256: `ad70013622db3cc4e196a7174431cfcf32f56b7aed2cdaee4bbcd4e8a33c34a2`.
- Dependency `MF-VF-033` is implemented. Status: `implemented`; static source inspection only. Per runner override, no package-manager commands, validators, test suites, typecheck, build, or browser captures were run; host runner owns verification. Human review and acceptance remain pending.
- Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.
- Counts: prior live count 123 implemented/captured, 365 planned, 0 blocked; now 124/488 implemented/captured, 364/488 planned, 0/488 blocked.

## MF-VF-053 — Draw semantic chevron-down icon

- Added `assets/source/icons/chevron-down.svg`, an original self-contained 24×24 `currentColor` disclosure chevron labeled `Expand`.
- SHA-256: `666cd1e34d82eb52f9b6642b26ab5e53f38a91648ae551c63b2a2c6899207286`.
- Dependency `MF-VF-033` is implemented. Status: `implemented`; static source inspection only. Per runner override, no package-manager commands, validators, test suites, typecheck, build, or browser captures were run; host runner owns verification. Human visual review and acceptance remain pending.
- Rollback: remove the SVG and restore the matching task row and ledger entry.
- Counts: prior recorded total 123 implemented/captured, 365 planned, 0 blocked; now 124 implemented/captured, 364 planned, 0 blocked of 488.

## MF-VF-357 — Draw a decorative geometric spotlight burst

- Added `assets/source/creative-reference/r03/spotlight-burst.svg`, an original self-contained decorative burst of tapered beams. It contains only vector geometry and accessible title/description text, with no source tracing, external references, scripts, event handlers, or performer imagery.
- SHA-256: `0c09e9d7d65105ced7d5958cd41e25f2e5c67d26cd2d5495337309785574390c`.
- Dependency `MF-VF-024` is implemented. Status: `implemented`; static source inspection only. Per runner override, no validators, package-manager commands, test suites, typecheck, build, rendering, or browser capture run. Host runner owns verification/checkpoint. Human optical review and rights approval are not claimed.
- Counts: prior live count 124 implemented-or-captured, 364 planned, 0 blocked; now 125/488 implemented-or-captured, 363/488 planned, 0 blocked.
- Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.

## MF-VF-336 — Draw light-yellow paper speech label

- Added `assets/source/creative-reference/r02/yellow-label.svg`, a self-authored blank paper-label backing with irregular edges and subtle dashed rules. SHA-256: `f30cc15a40553e311abb49426bc9b36af854fb228cd989740f74b57b67040ef`. Text remains live HTML; no consumer-specific mark or external resource is included.
- Dependency `MF-VF-023` is implemented. Status: `implemented`. No validators, package-manager commands, test suites, typecheck, build, rendering, source comparison, or human review run/claimed per runner override; host runner owns verification/checkpoint. Rights and acceptance remain pending.
- Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.
- Counts: prior live count 122/488 implemented-or-captured, 366 planned, 0 explicitly blocked; now 123/488, 365 planned, 0 blocked.

## MF-VF-331 — Draw optional torn masthead background

- Added `assets/source/creative-reference/r02-torn-masthead.svg`, a standalone decorative paper-tone backing with an irregular edge and restrained ink marks. It has no embedded copy, external resources, scripts, or event handlers. The R02 title remains live DOM text; the asset is not enabled by default.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; no package-manager commands, validators, suites, typecheck, build, rendering, reference comparison, or human review run/claimed per runner override. Host runner owns verification/checkpoint; no rights clearance or acceptance claimed.
- Rollback: remove the SVG and restore the MF-VF-331 row, TODO update, and ledger entry.
- Counts: prior live count 120/488 implemented-or-captured, 368/488 planned, 0 explicitly blocked; now 121/488, 367/488, 0 blocked.

## MF-VF-327 — Capture R01 wide, tablet and mobile baseline

- Added a Playwright case in `tests/browser/site.spec.js` for the same `/lab` dashboard fixture at 1440×960, 768×1024 and 360×800. It saves wide, tablet and mobile screenshots under `artifacts/site/`.
- Status: `implemented`; test/capture execution, image inspection, reference comparison and human review remain pending. No package-manager commands, suites, typecheck, build or validators were run per runner override; host runner owns verification/checkpoint. No reference media, rights approval or acceptance is claimed.
- Rollback: remove the test and restore the MF-VF-327 row and TODO count.
- Counts: prior live TODO count 120/488 implemented-or-captured, 368/488 planned, 0 blocked; now 121/488 implemented-or-captured, 367/488 planned, 0 blocked.

## MF-VF-330 — Layered editorial masthead

- Added `apps/moonframe/templates/visual-reference/r02-masthead.tsx` and `.module.css`, with selectable semantic heading text, optional decorative layer, responsive hierarchy and action content slot.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; package-manager commands, validators, suites, typecheck, build, browser capture and R02 reference comparison were not run per runner override. Human review and acceptance are not claimed; host runner owns verification/checkpoint.
- Rollback: remove the component and stylesheet and restore the matching backlog/TODO/ledger evidence.
- Counts: prior live ledger count 119/488 implemented-or-captured, 369/488 planned, 0 blocked; now 120/488, 368/488, 0 blocked.

## MF-VF-329 — Accessible editorial navigation

- Added `apps/moonframe/templates/visual-reference/r02-nav.tsx` and `.module.css` with grouped semantic link lists, native mobile disclosure, visible keyboard focus, touch-sized links, and a responsive desktop grouping layout.
- Dependency `MF-VF-023` is implemented. Static source review and `git diff --check` passed. No package-manager commands, validators, tests, typecheck, build, or browser capture run per runner override; host runner owns verification/checkpoint. No source-reference comparison, human review, or acceptance claimed.
- Rollback: remove the component/CSS module and restore the task row, TODO count, and ledger entry.
- Counts: prior live ledger count 118/488 implemented-or-captured, 370/488 planned, 0 blocked; now 119/488 implemented-or-captured, 369/488 planned, 0 blocked.

## MF-VF-326 — Mobile single-column dashboard flow

- Updated `apps/moonframe/templates/visual-reference/r01-content-grid.tsx` and its CSS module. At the mobile breakpoint the dashboard explicitly uses one column and placement follows DOM/keyboard order: creation, signals, operations, activity streams. The signals region exposes configurable visible graph context with a readable default; no critical explanation is hidden and no fixed desktop screenshot is scaled down.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; no package-manager commands, validators, suites, typecheck, build, or browser captures run per runner override. Host runner owns verification/checkpoint; no commit created. Human review and acceptance remain pending.
- Rollback: revert the component/CSS module and restore the task row, TODO count, and ledger entry.
- Counts: prior live ledger count 117/488 implemented-or-captured, 371/488 planned, 0 blocked; now 118/488 implemented-or-captured, 370/488 planned, 0 blocked.

## MF-VF-325 — Mobile command rail disclosure navigation

- Added `apps/moonframe/templates/visual-reference/r01-mobile-navigation.tsx` and `.module.css`. Consumer links remain in source order in a native disclosure at narrow widths, with 44px minimum link/trigger targets, visible keyboard focus, and a horizontal wrapping rail at 48rem and above. No script or image dependency was added.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; no validators, package-manager commands, test suites, typecheck, build, or browser capture run per runner override. The host runner owns verification/checkpoint; no commit created. Reference comparison and human review remain pending.
- Rollback: remove the component/CSS module and restore the task row, TODO count and ledger entry.
- Counts: prior live ledger count 116/488 implemented-or-captured, 372/488 planned, 0 blocked; now 117/488 implemented-or-captured, 371/488 planned, 0 blocked.

## MF-VF-321 — Define project mini-cover card ratios

- Added `apps/moonframe/templates/visual-reference/r01-project-covers.tsx` and `.module.css`, with a 4:3 landscape default and 2:3 poster variant. The image slot requires descriptive alt text and uses lazy loading; consumer art is supplied separately.
- Dependency `MF-VF-022` is implemented. `git diff --check` — exit 0. Status: `implemented`; no browser capture, 360/768/1440 rendering, validators, package-manager commands, test suites, typecheck or build run per runner override. Host runner owns verification/checkpoint. No rights, human visual review or acceptance claimed.
- Rollback: remove the component/CSS module and restore the task row, TODO update and ledger entry.
- Counts: prior live ledger count 115/488 implemented-or-captured, 373/488 planned, 0 blocked; now 116/488, 372/488, 0 blocked.

## MF-VF-324 — Add scratch frame treatment to panel recipes

- Added a decorative dashed inset frame to `apps/moonframe/templates/visual-reference/r01-command-feed.module.css`. It uses a pointer-transparent pseudo-element and preserves the existing solid panel edge and content.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; no validators, package-manager commands, test suites, typecheck, build, browser capture, or visual review run/claimed under the runner override. Host runner owns verification/checkpoint; no commit created.
- Rollback: remove `.feed::after` and its relative positioning, then restore the task/TODO/ledger status.
- Counts: prior live ledger count 113/488 implemented-or-captured, 375/488 planned, 0 blocked; now 114/488, 374/488, 0 blocked.

## MF-VF-323 — Build command/status feed region

- Added `apps/moonframe/templates/visual-reference/r01-command-feed.tsx` and `r01-command-feed.module.css`: consumer-provided command log entries with semantic timestamps, visible status labels, and single-line command truncation that adapts to narrow viewports.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; no validators, package-manager commands, suites, typecheck, build, browser capture, reference comparison, or human review run/claimed per runner override. Host runner owns verification and checkpoint. No rights or acceptance claim.
- Rollback: remove the component and CSS module and restore matching backlog/TODO evidence.
- Counts: prior ledger count 112/488 implemented-or-captured, 376/488 planned, 0 explicitly blocked; now 113/488, 375/488, 0/488 blocked.

## MF-VF-322 — Build active workflow feed section

- Added `apps/moonframe/templates/visual-reference/r01-workflow-feed.tsx` and `r01-workflow-feed.module.css`: an ordered activity list with status text independent of its decorative dot, optional detail/time, and a mobile stacked layout.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; no validators, package-manager commands, suites, typecheck, build, browser capture, reference comparison, or human review run/claimed per runner override. Host runner owns verification and checkpoint. No reference media or rights/acceptance claim.
- Rollback: remove the component and CSS module and restore the matching backlog/TODO evidence.
- Counts: prior ledger count 111/488 implemented-or-captured, 377/488 planned, 0 blocked; now 112/488, 376/488, 0 blocked.

## MF-VF-318 — Build compact feature tiles with icon slot

- Added `apps/moonframe/templates/visual-reference/r01-action-tiles.tsx` and `r01-action-tiles.module.css`: data-driven semantic list, DOM text for metric titles and values, optional aria-hidden icon slot, optional detail, and wrapping grid.
- Dependency `MF-VF-022` is implemented. Status: `implemented`. Runner override honored: no package-manager commands, test suites, typecheck, build, validators, or browser capture run. Host runner will verify and checkpoint. No image rights, visual comparison, human review, or acceptance claimed. No commit created.
- Current counts: 110 implemented-or-captured, 378 planned, 0 blocked of 488. Rollback: remove the component/CSS module and revert matching backlog, TODO and ledger entries.

## MF-VF-317 — Build triple-zone dashboard composition grid

- Added `apps/moonframe/templates/visual-reference/r01-content-grid.tsx` and `r01-content-grid.module.css`: consumer supplied creation, signal, operations and stream regions with responsive three-, two- and one-column layouts.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; `git diff --check` passed. Runner override honored: no package-manager commands, test suites, typecheck, build, validators, or browser capture. Host runner will verify and checkpoint.
- Current counts: 108 implemented-or-captured, 380 planned, 0 blocked of 488. No image rights, reference comparison, human review, or acceptance claimed. No commit created. Rollback: remove the component and CSS module and revert the matching backlog, TODO and ledger updates.


## MF-VF-316 — Define city skyline backplate artwork concept

- Added `assets/source/creative-reference/r01/city-silhouette.svg`: original layered geometric skyline backplate on a transparent canvas, with no embedded text or story-specific figures. SHA-256: `54ed556523a0ed23001f70a275d6303a24073752a6a95166788e1cd48b94fcf1`. It is an optional visual layer and does not bundle reference imagery.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; static source inspection and `git diff --check` passed. No SVG/security validator, package-manager commands, tests, typecheck, build, or browser capture run per runner override. Host runner will verify and checkpoint. Rights clearance and human optical review are not claimed.
- Current counts: 107 implemented-or-captured, 381 planned, 0 blocked of 488. This task does not imply capture, review, or acceptance. No commit created. Rollback: remove the SVG and revert the matching backlog, TODO, and ledger update.

## MF-VF-314 — Draw original luminous moon backdrop asset concept

- Added `assets/source/creative-reference/r01/moon-orbit-scene.svg`: original decorative crescent, halo, orbit arcs, and sparse stars in a transparent, self-contained vector source. It carries a viewBox and is hidden from assistive technology when embedded as decorative art. No screenshot-derived elements or consumer marks were used.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; static source inspection only. No package-manager commands, tests, typecheck, build, validators, or browser capture run per runner override. Host runner will verify and checkpoint. Rights clearance and human optical review are not claimed.
- Current counts: 106 implemented-or-captured, 382 planned, 0 blocked of 488. This task does not imply capture, review, or acceptance. No commit created. Rollback: remove the SVG and revert the matching backlog, TODO, and ledger update.

## MF-VF-312 — Place painted micro-caption / marginalia region

- Added fixture-local marginalia as a separate DOM paragraph in `apps/moonframe/app/(lab)/lab/page.tsx`, styled in `apps/moonframe/app/(lab)/lab/lab.css`. The content is optional decoration, hidden by the existing decorations-off setting, and remains outside navigation/action controls.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; no capture, human review, or acceptance claimed. No source image or external asset used.
- Runner override honored: no package-manager commands, test suites, typecheck, build, browser capture, or validators run. Host runner will verify and checkpoint; no commit created. Rollback: revert scoped markup/CSS and matching backlog/TODO/ledger evidence.
- Counts based on preceding live ledger: 103 implemented-or-captured, 385 planned, 0 explicitly blocked. This task moves one to implemented: 104/384/0 of 488. Human review and acceptance remain unclaimed.

## Recent prior entries

Updated 2026-10-26. This ledger records local task execution evidence; it does not certify owner, legal, license, or human visual approval.

## MF-VF-041 — Create editable Moonframe wordmark SVG

- Added `assets/source/brand/moonframe-wordmark.svg`, an original editable vector wordmark using the selected generic frame-mark draft direction and live SVG text with a system font stack. No reference art or third-party asset was used.
- SHA-256: `CDDE127E2AD3467895385C20611BF0A319CBFA42629D6DDFD6BCF013CA74F302`. Dependency MF-VF-039 is implemented as a draft-direction choice.
- Status: `implemented`; no SVG validator, package-manager command, test suite, typecheck, build, rendered-size inspection, or visual capture run per runner override. Trademark/source rights review, human review, and acceptance are not claimed. No commit created; host runner handles validation and checkpoint.
- Rollback: remove the SVG and restore the MF-VF-041 row and matching TODO/ledger update.
- Counts: prior live ledger count 118/488 implemented-or-captured, 370/488 planned, 0 blocked; now 119/488 implemented-or-captured, 369/488 planned, 0 blocked.
## MF-VF-304 — Nonbinding reference mood palette

- Added a note in `docs/visual/references/reference-index.md` describing black, white, pink, electric blue, yellow and violet as mood cues from the reference set only. It expressly makes no token-value, semantic-color, consumer-overlay, or skin decision.
- Dependency `MF-VF-014` is implemented. Status: `captured` (documentation deliverable); no image bytes, rights, or human review required or claimed.
- Runner override honored: no package-manager commands, test suites, typecheck, build, or browser checks run. No commit created; host runner handles verification/checkpoint. Rollback: revert the note and task evidence.

## Current counts after MF-VF-304

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- Previous ledger counts: 94 implemented-or-captured, 394 planned, 0 explicitly blocked. This task adds one captured record: 95 implemented-or-captured, 393 planned, 0 explicitly blocked. Counts do not imply rights, human visual review, or acceptance.

## MF-VF-303 — Original-work vs source-reference risk matrix

- Added `docs/qa/reference-rights-checklist.md` with per-reference use, provenance unknowns, view-only treatment, derivative clearance, consumer-specific exclusions, and safe original-work directions for MWX-REF-001 through MWX-REF-004.
- Cross-checked scope against the creative-reference contract, Visual Reference Bible, and Asset Brand Bible. Rights and derivative permissions remain unverified; no legal conclusion or permission is inferred.
- Dependency `MF-VF-014` is implemented. Status: `captured` (documentation deliverable). Runner override honored: no package-manager commands, test suites, typecheck, build, or browser checks run. No commit created; host runner handles verification/checkpoint. Rollback: revert the checklist and task evidence.

## Current counts after MF-VF-303

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- Previous ledger counts: 93 implemented-or-captured, 395 planned, 0 explicitly blocked. This task adds one captured record: 94 implemented-or-captured, 394 planned, 0 explicitly blocked. Counts do not imply rights, human visual review, or acceptance.

## MF-VF-302 — Explicit consumer-only words and symbols

- Added a dedicated exclusion section to `docs/visual/cinematic-mangapunk-reference-bible.md`. It keeps Moonwitness names/wordmarks, crown and story symbols, characters and story-specific terms, distinctive wording/lyrics, and consumer project/promotional assets out of generic Moonframe defaults and examples.
- The text explicitly says this is a scope/provenance boundary, not an ownership finding or reuse license. Generic independently created material remains the safe default.
- Dependency `MF-VF-014` is implemented; `MF-VF-301` is captured. Status: `captured` (documentation deliverable); no rights or human review claimed.
- Runner override honored: no package-manager commands, test suites, typecheck, build, or browser checks run. No commit created; host runner handles verification/checkpoint. Rollback: remove the section and restore the task row to planned.

## Current counts after MF-VF-302

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- The task ledgers record 93/488 implemented-or-captured, 395/488 planned, and 0 explicitly blocked. This count is an execution state only and does not imply rights, human visual review, or acceptance.

## MF-VF-040 — Refine selected mark optical padding

- Refined the selected draft source `assets/source/brand/mark-a.svg` within its existing 32×32 viewBox, increasing the uniform inset to 2.5 units and the centered circle radius to 3.5 units. The bounded geometry remains inside the canvas; this is source-level refinement, not rendered-size proof.
- Source SHA-256: `f1d53209bf0af36b90bfaeb0a4348fc1471541e2d3c045bf3289632f44ce2d2d`.
- `node scripts/validate-brand-svg.mjs assets/source/brand/mark-a.svg` — exit 0; `node scripts/validate-contracts.mjs` — exit 0; `node scripts/verify-m13-handoff.mjs` — exit 0 with the existing SFX playback-truth warning. No package-manager commands, suites, typecheck, build, or browser capture run per runner override.
- Status: `implemented`. Native-size inspection and human review, trademark clearance, and distribution approval remain pending. Rollback: restore the SVG and remove this entry and the MF-VF-040 backlog evidence.

## MF-VF-301 — Four reference role classes

- Verified the canonical creative-reference contract defines four distinct records: mission-control administrative dashboard (`MWX-REF-001`), editorial landing (`MWX-REF-002`), campaign poster (`MWX-REF-003`), and authentication scene (`MWX-REF-004`). Each has a primary skin and secondary influences, while the contract authority preserves the canonical 15-skin IDs.
- The contract already satisfied the task acceptance criteria, so no competing classification field or contract edit was added. This structural capture does not verify image bytes, rights, or visual fidelity.
- Status: `captured`. Structural validators and package/test/build commands were not run under runner override. No human review or rights approval claimed. Rollback: restore the task row to planned and remove this evidence.

## MF-VF-295 — Register R03 original digest and dimensions

- Added the R03 reference row to `docs/visual/references/reference-index.md` from `contracts/moonframe-creative-reference-contract-v0.1.json`: ID `MWX-REF-003`, SHA-256 `326ebd139769e13da396a2e02f25322a6b8f9b2036d303f0d61fd63b98452dff`, dimensions 682 × 1024.
- Cross-checked metadata against the canonical contract. Original bytes are absent; this records contract metadata only and does not verify a local digest, grant import/reuse rights, or claim visual review.
- Status: `captured`. Runner override honored: no package-manager commands, test suites, typecheck, or build run. No commit created; host runner will verify and checkpoint. Rollback: revert the task status/evidence and remove the single R03 index row.

## Current counts

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- `MF-PF-001`, `MF-PF-003`, `MF-PF-004`, `MF-PF-005`, `MF-PF-006`, `MF-PF-019`, `MF-PF-023`, `MF-PF-018`, `MF-PF-026`, and `MF-PF-027` are captured. `MF-PF-002`, `MF-PF-007`, `MF-PF-008`, `MF-PF-009`, `MF-PF-010`, `MF-PF-011`, `MF-PF-012`, `MF-PF-013`, `MF-PF-014`, `MF-PF-020`, `MF-PF-016`, `MF-PF-017`, `MF-PF-024`, and `MF-PF-025` are implemented. `MF-PF-021` and `MF-PF-022` are implemented; `MF-PF-028` is captured with clean-clone verification. `MF-VF-033` is implemented as a hierarchy decision; `MF-VF-038` is captured with a hash-verified monochrome size contact sheet. Mark selection, suitability, rights, and human review remain separate.

## MF-VF-285 — Shared functional warning semantics across skins

- Added a browser regression in `tests/browser/components.spec.js` that selects each of the 15 skins and confirms the request-state warning remains an alert with the same message and named retry action. Existing state-matrix coverage also exercises all 15 skins × light/dark modes.
- `node --check tests/browser/components.spec.js` — exit 0; `node scripts/validate-contracts.mjs` — exit 0; `node scripts/verify-m13-handoff.mjs` — exit 0 with the existing SFX playback-truth release warning. Browser suite, screenshots, typecheck, and build were not run under the invocation’s runner override. No human review or visual approval claimed.
- Rollback: revert the regression test and the `MF-VF-285` status/evidence row.
- Freeze baseline: 14 implemented / 474 pending. The code-license selection is recorded under explicit maintainer delegation; trademark clearance, artwork rights and publication approval remain separate and ungranted.
- MF-VF-039 records a delegated maintainer selection of Candidate A as the preferred draft direction for refinement. Live count after MF-VF-293 and MF-VF-039: 85 implemented/captured, 403 planned, 0 blocked. No direct owner inspection, human visual approval, rights, or release authorization is implied.
- Overall progress before MF-VF-286: 85/488 (17.4%) implemented-or-captured; 403/488 (82.6%) planned; 0 blocked. These task states do not imply owner, rights, or human visual approval.

## MF-VF-039 — delegated candidate direction

- Dependency MF-VF-038 is captured: the A/B/C contact sheet is `artifacts/brand-review/mf-vf-038-contact-sheet.png`, SHA-256 `907bd6bd3d9fcf1c5a69130d2918a8cab0c8017b780ce9f5fed75c4bb428046d`.
- On 2026-10-26, repository maintainer used the owner's explicit delegation in the Codex conversation to select Candidate A as preferred **draft direction for refinement**; B and C rationale is recorded in `docs/brand/master-mark-review.md` and `docs/governance/maintainer-decisions-2026-10-26.md`.
- Status: `implemented`. This does not claim direct owner inspection, human visual approval, trademark/source rights, or release authorization. Further optical refinement and independent review remain required. Rollback: restore task to planned and remove the matching decision note.

## MF-VF-050 — Draw semantic search icon

- Added `assets/source/icons/search.svg`, an original 24×24 transparent search lens and handle using `currentColor`; no reference artwork or third-party asset was used.
- Source SHA-256: `f3281be61e5bc81eb86df219d776c77c1f7e649de9d0a33e201c94101c340015`.
- Targeted Node structural check for viewBox, accessible label, lens/handle geometry, currentColor and forbidden active/external-resource constructs — exit 0. `node scripts/validate-contracts.mjs` — exit 0. `node scripts/verify-m13-handoff.mjs` — exit 0 with the existing generic SFX playback-truth warning.
- Runner override honored: no package-manager commands, test suites, typecheck, or build run. No rendered size inspection, human visual review, trademark clearance, or distribution approval claimed. Rollback: remove the SVG and revert this entry and MF-VF-050 task evidence.

## MF-VF-038 — Compare draft marks at four sizes

- Source commit before this task: `323d3376c9bf2644a006a941fcf3a4287afdfcdc`.
- Generated `artifacts/brand-review/mf-vf-038-contact-sheet.png` from the existing candidate A/B/C SVG sources. Each source was rasterized at 16, 24, 32 and 128 CSS px as black on white and white on dark; rendered with Microsoft Edge through a temporary standalone Playwright script. Temporary script was removed after capture.
- SHA-256: `907bd6bd3d9fcf1c5a69130d2918a8cab0c8017b780ce9f5fed75c4bb428046d`.
- Visual inspection confirmed the artifact has all three candidates, eight variants per candidate, and visible labels. This is capture evidence only. No visual quality verdict, owner selection, trademark clearance, or human review is recorded.
- Verification under runner override: no package-manager commands, suites, typecheck, or build run. Rollback: delete the PNG and revert this entry and the MF-VF-038 row to planned.



## MF-PF-002 — Code license and rights distribution decision

- Decision by the repository maintainer under explicit owner delegation: MIT for project-owned code and documentation only; added the matching root `LICENSE`. The existing package SPDX field remains `MIT`.
- No trademark license/clearance is granted. No rights are granted to conversation reference images, Moonwitness marks/characters, third-party/customer artwork, fonts or audio. They remain outside code-license scope and must not enter distributable assets without item-specific rights. npm publication remains unverified and unauthorized by this decision.
- Updated the asset-manifest license governance and structural validator to enforce this scope. `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` passed; no release/rights clearance claimed beyond the code-license selection.
- Rollback: revert the LICENSE, decision record, manifest/validator and task/count evidence together.
## MF-VF-033 — Approve one-umbrella logo vs edition devices

- Inspected `docs/brand/original-asset-brand-bible.md` and `docs/research/original-asset-brand-research-log.md`.
- The umbrella-brand recommendation is explicitly not owner-approved; owner approval and trademark decisions are listed as blockers. The task requires accepting that brand hierarchy before production marks or edition devices are created.
- Status: `blocked-external-approval`. No owner decision was available in this repo/task context. No approval or logo direction was invented; no production mark is authorized. Resume after the owner records the umbrella/edition naming decision.
## MF-VF-279 — Compare Moonpunk vs Moonriot vs Moonsmash

- Scope: `docs/qa/reviews/punk-riot-smash.md`; six existing ignored default captures (Moonpunk, Moonriot, Moonsmash × light/dark).
- Inspected the six 1440×960 captures directly. The persistent vertical command rail and offset slabs (Moonpunk), top-spanning horizontal navigation and asymmetric editorial panels (Moonriot), and centered single-column layout with oversized radial hero/headline (Moonsmash) remain structurally distinct in both modes. `src/styles.css` defines corresponding geometry and typography; the screenshot comparison records observations and all six hashes.
- Provenance audit: 6/6 image hashes match sidecars; all use source commit `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, same fixed fixture/time/viewport/browser, and loaded fonts.
- The full browser suite at that source was 61/61 (recorded under MF-VF-278); it is functional/capture evidence, not human visual approval. Reviewer/approval remains pending. Contract/handoff validators and `git diff --check` are recorded after the documentation update. Rollback: revert the evidence/count documentation commit.

## MF-VF-280 — Compare Moonzine vs Moonhalftone vs Moonpanel

- Scope: `docs/qa/reviews/zine-halftone-panel.md`; six existing ignored default captures (three skins × light/dark).
- Direct inspection records the editorial magazine/serif spread (Moonzine), monochrome screened gutters and ink-caption framing (Moonhalftone), and strict rectangular panel/table grid (Moonpanel). Layout and framing differences persist across both appearance modes; no human approval is claimed.
- Provenance/hash audit: 6/6 hashes match sidecars; shared source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, 1440×960, fixed fixture/time, Chromium 156, fonts loaded.
- Browser suite at source was 61/61 (MF-VF-278); functional/capture evidence only. Human review remains pending. Rollback: revert this evidence/count commit.

## MF-VF-281 — Compare Moonink vs Moonscrawl

- Scope: `docs/qa/reviews/ink-scrawl.md`; four existing ignored default captures (two skins × light/dark).
- Direct inspection distinguishes Moonink's open reading composition, curved unboxed hero and ruled text sections from Moonscrawl's page-wide notebook rules, bordered sheets and irregular pencil contours. Captured difference persists across modes; human approval remains pending.
- Provenance/hash audit: 4/4 hashes match sidecars; shared source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, same 1440×960 fixture/time/browser and loaded fonts.
- Browser suite at source was 61/61 (MF-VF-278); it is functional/capture evidence only. Rollback: revert this evidence/count commit.

## MF-VF-282 — Compare Moonglitch vs Moonchrome

- Scope: `docs/qa/reviews/glitch-chrome.md`; four existing ignored default captures (two skins × light/dark).
- Direct inspection records a clear structural contrast: Moonglitch's monospace instrument console, dense aligned records and dashed data rules versus Moonchrome's rounded, centered surfaces with soft contour/elevation. Both remain legible in light/dark captures. Human approval remains pending.
- Provenance/hash audit: 4/4 hashes match sidecars; source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, same fixture/time/viewport/browser, loaded fonts.
- Browser suite at source was 61/61 (MF-VF-278), not a human visual verdict. Rollback: revert this evidence/count commit.

## MF-VF-283 — Compare Mooncrash vs Moonledger

- Scope: `docs/qa/reviews/crash-ledger.md`; four existing ignored default captures (two skins × light/dark).
- Direct inspection contrasts Mooncrash's thick top rail, double sidebar and numbered mechanical panels with Moonledger's compact table spacing, aligned columns, restrained header bands and alternating record rows. Human visual approval remains pending.
- Provenance/hash audit: 4/4 hashes match sidecars; shared source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, 1440×960 fixed fixture/time, Chromium 156, fonts loaded.
- Browser suite at source was 61/61 (MF-VF-278), functional/capture evidence only. Rollback: revert this evidence/count commit.

## MF-VF-284 — Compare Moonraw vs Classic

- Scope: `docs/qa/reviews/raw-classic.md`; four existing ignored default captures (two skins × light/dark).
- Direct inspection contrasts Moonraw's full-width horizontal nav, monospace labels, flat surfaces and thin rules with Classic's left rail, rounded cards/controls and softly elevated gradient hero. The captured composition distinction holds in both modes; human approval remains pending.
- Provenance/hash audit: 4/4 hashes match; shared source `a2baccb89d904d628187899396b74c26fa8e2c3b`, fingerprint `016c6522a24cab82e969046bf71969897b4086c83362b162fc87dd89b7a4a27c`, fixed fixture/time/viewport/browser, fonts loaded.
- Browser suite at source was 61/61 (MF-VF-278), not a human visual verdict. Rollback: revert this evidence/count commit.
## MF-VF-278 — Freeze loading/empty/error/denied specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/states.md`; 120 ignored captures in `artifacts/skins/*-1440x960-state-{loading,empty,error,denied}.png` and provenance sidecars.
- Added a deterministic `/lab/behavior?fixture=states` state chooser for loading, empty, error and access-denied states. Tests cover exact messages, semantic status/alert/busy roles, available actions, and their local transitions/confirmation behavior across all 15 skins × two modes; no service call, project creation or access request occurs.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 61/61 passed; state and dialog capture matrices passed at test commit `a2baccb89d904d628187899396b74c26fa8e2c3b`.
- Capture audit — 120/120 image hashes match sidecars; one fingerprint/source commit; 30 images per each of four states; explicit route/state, loaded fonts and 1440×960. `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed. No human visual review is claimed.
- Status: implemented as a frozen state/message/action contract; reviewer remains pending. Rollback: revert implementation and timeout commits plus the matching evidence/count commit.
## MF-VF-277 — Freeze compact ERP specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/enterprise.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-enterprise.png` and provenance sidecars.
- Added an explicit `/lab/behavior?fixture=enterprise` compact operations fixture with fixed demo-only summary values, six service rows, status and region selectors, and service/region search. Browser assertions compare the full content and exercise each filter in all 15 skins × two modes.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 60/60 passed at implementation commit `cc9a95d5c9139dedba8a2d1b4347e69e364ae071`. Capture audit — 30/30 image hashes match sidecars; one fingerprint/source commit; explicit enterprise fixture and default state; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. The fixture is demo data, not production telemetry; visual review remains pending.
- Status: implemented as a frozen compact data/filter contract. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-276 — Freeze editorial long article specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/article.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-article.png` and provenance sidecars.
- Added an explicit `/lab/behavior?fixture=article` long-form specimen with fixed title, deck, author/date/reading-time metadata, ordered sections, quote, caption and accessible CSS-drawn image context. Browser assertions compare the same content/semantic typography structure across all 15 skins × two modes.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 59/59 passed at implementation commit `b71b11376c42a734444b5927a3cb945bd3cfa315`. Capture audit — 30/30 image hashes match sidecars; one fingerprint/source commit; explicit article fixture and `article-default` state; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. No human visual parity verdict is claimed.
- Status: implemented as a frozen article content/image-context contract; reviewer remains pending. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-275 — Freeze auth flow specimen

- Scope: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; `tests/browser/components.spec.js`; `docs/qa/reference-screens/auth.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-auth.png` and provenance sidecars.
- Added an explicit `/lab/behavior?fixture=auth` sign-in simulation with required email/password inputs, a remember-device control and a clear local-only privacy statement. Submit is intercepted locally: it sends or stores no credential and creates no account/session. Browser assertions check required and invalid-email validity plus the deterministic result and unchanged route across all 15 skins × two modes.
- `pnpm check` — passed (13 runtime tests, typecheck, validation and production build). `pnpm run test:browser` — 58/58 passed at implementation commit `1ac3ab57ec6ec4dee47919335545f64814e6ffa8`. Capture audit — 30/30 hashes match sidecars; one fingerprint/source commit; explicit auth fixture and `auth-preview-ready` state; loaded fonts; 1440×960.
- `node scripts/verify-m13-handoff.mjs` and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. No production authentication or human visual review is claimed.
- Status: implemented as a frozen simulated-flow contract; reviewer and production-auth status remain unclaimed. Rollback: revert implementation commits and the matching evidence/count commit.
## MF-VF-274 — Freeze sidebar/header specimen

- Scope: `tests/browser/skins.spec.js`; `docs/qa/reference-screens/navigation.md`; 30 ignored local `/lab` captures in `artifacts/skins/*-1440x960-default.png` and provenance sidecars.
- Every skin/mode browser case asserts the sidebar landmark and main-navigation order (Overview, Components), initial active item, selected-state transfer to Components, matching header breadcrumb, and return to Overview. The deterministic dashboard's nested workspace navigation and selected state remain asserted in each case.
- `pnpm run test:browser` — 57/57 passed at implementation commit `4377daba041b9824b5b0882814a20219c06f789b`. Capture audit — 30/30 image SHA-256 values match sidecars; one source fingerprint and commit; `/lab` default Overview fixture; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. `git diff --check` — passed. No human visual review is claimed.
- Status: implemented as a frozen navigation/content contract; visual review remains pending. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-273 — Freeze dialog/popover specimen

- Scope: `tests/browser/components.spec.js`; `docs/qa/reference-screens/dialog.md`; 30 ignored local captures in `artifacts/skins/*-1440x960-archive-dialog.png` and provenance sidecars.
- The browser matrix freezes the completed T-1045 archive dialog, accessible name/description and actions, Escape/focus return from its actual trigger, and non-destructive Keep task close. It also verifies Quick help popover content, Escape dismissal and focus return for every one of 15 skins × two modes.
- `pnpm run test:browser` — 57/57 passed at implementation commit `c9e221838c7212ec5c269dc31b012938e4ce525b`. Capture audit — 30/30 image SHA-256 values match sidecars; one source fingerprint and commit; open-dialog state; loaded fonts; 1440×960.
- `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings. `git diff --check` — passed. No human visual review is claimed.
- Status: implemented as a frozen content/interaction contract; visual review remains pending. Rollback: revert implementation commit and its matching evidence/count commit.
## MF-VF-272 — Freeze long form/error specimen

- Scope: `docs/qa/reference-screens/form.md`; fixed Workspace profile form values, helper/error copy, feedback and reset behavior.
- Recorded default values plus deterministic invalid URL/ARIA association, helper restoration, pending `Saving…`, success and Cancel/reset states. The same 30 full-page desktop skin/mode screenshots show the form in its default helper state. The transient error/pending/success states are asserted by the existing Playwright loop in all 30 cases but are not separate PNG captures; visual review of those states is not claimed.
- Verified 30 screenshot hashes and sidecars: one fixed fixture, 1440×960, fonts loaded. Full local browser suite passed 56/56 with form assertions per skin/mode; contract/handoff validators passed.
- Status: implemented as a frozen state/content contract; human visual review remains pending. Rollback: remove the specimen doc and restore prior task/count entries.
## MF-VF-271 — Freeze sortable table specimen

- Scope: `docs/qa/reference-screens/table.md`; same-content project task table across 15 skins × light/dark.
- Frozen accessible name/caption, five columns, all five T-1042–T-1046 task rows, due-date default order, task-name order, and the `Hana Kim` search result (`1 of 5 tasks`). The document indexes 30 1440×960 skin/mode captures with per-image hashes and source commits.
- Verified 30 sidecars share one fixture, loaded fonts and expected viewport; PNG hashes match. `tests/browser/skins.spec.js` asserts table headings, every row field, sorting and search in each skin/mode test. Current local full browser run passed 56/56; contract/handoff validators passed. Human visual review remains pending.
- Status: implemented as a frozen data/interaction contract. Rollback: remove the specimen doc and restore the prior task/count entries.
## MF-VF-270 — Freeze executive dashboard specimen

- Scope: `docs/qa/reference-screens/dashboard.md`; deterministic Northstar Studio dashboard data contract and all skin/mode desktop captures.
- Recorded the exact Overview heading, workspace, frozen date, selected navigation, three KPI labels/values, five activity items and shared long copy. The document indexes 30 actual desktop screenshots with SHA-256/source commit from sidecars. Reviewer remains pending; no parity/approval claim.
- Verified all 30 capture sidecars: identical fixture, loaded fonts, 1440×960 viewport; PNG digests match. `tests/browser/skins.spec.js` asserts dashboard labels/metrics/activity in each of the 15 skin × 2 mode cases. The latest full local run on this source line passed browser 56/56 and built 88 routes. Contract/handoff validators passed.
- Status: implemented as a frozen content/evidence contract; pixel review remains pending. Rollback: remove this specimen doc and restore matching task/count entries.
## MF-VF-032 — Record pilot manual review fields

- Scope: `docs/qa/visual-fidelity-evidence-ledger.md`; six pilot skin pairs × light/dark = 12 review cells.
- All cells link the actual A/B screenshots for the same fixed `/lab` + Northstar Studio fixture. Checked 24 PNG files and sidecars: image digests match, capture viewport is 1440×960, fonts are loaded, and all fixture strings match exactly.
- Added typed `review_status`, `verdict`, `reviewer`, `reviewed_at`, `observations` and `exception` fields. Initial values are `pending` / `unreviewed` / `unassigned` / `not-reviewed` / `not-recorded` / `not-assessed`. No manual visual verdict or reviewer identity was invented. The contact sheet link is included for direct comparison.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs` and `git diff --check` — passed. This documentation task adds no visual approval; all 12 cells remain pending human review.
- Status: implemented. Rollback: remove the worksheet and restore the prior MF-VF-032 task/count entries.
## MF-VF-031 — Build contact sheet with A/B rendered images

- Inspected implementation baseline after MF-VF-030; pilot captures have current-source SHA-256 provenance.
- Scope: `scripts/audit-skin-pairs.mjs`; generated local artifact `artifacts/skins/pilot-pair-contact-sheet.html` and refreshed structural report.
- The existing six-pair pilot set is rendered as direct A/B comparisons for both light and dark modes at matching 1440×960 capture viewports. The HTML has jump links, responsive two-column presentation, descriptive image text and lazy image loading. It explicitly labels the result machine-assembled; no scores are presented as human visual verdicts.
- `node --check scripts/audit-skin-pairs.mjs` — passed. `pnpm run audit:pairs` — passed: 105 structural pair records, 30 desktop + 30 tablet + 30 phone current-source captures. Browser inspection loaded all 24 images across six pair sections. Contract and handoff validators and `git diff --check` passed. The local screenshot suite was run in this checkout: unit 13/13, typecheck, production build 88 routes and browser 56/56.
- Status: implemented; reviewer remains pending. Implementation commit: `6bf517524b78a0017a69ef3ab1bee3e9389918eb`. Rollback: `git revert 6bf517524b78a0017a69ef3ab1bee3e9389918eb`; revert matching evidence-only commit if needed.
## MF-VF-030 — Capture forced-colors specimen

- Inspected implementation commit `9cb668c55cc6c5512417cd2147c6f4ed86d14fbe`.
- Scope: `tests/browser/skins.spec.js`; evidence in `artifacts/skins/*-1440x960-forced-colors.png` and sidecars plus visual capture ledger.
- Added 30 browser captures (15 skins × 2 modes) under active forced-colors preference, focusing Workspace name before capture. Browser checks verify forced-colors media state, visible focus outline, appearance selector, navigation, search/sort controls, five task rows, blocked status, and profile name.
- `pnpm test` — 13/13 passed. `pnpm run typecheck` — passed. `pnpm run test:browser` — 56/56 passed; production build generated 88 routes. `pnpm run audit:pairs` — passed (105 pair records and default profile captures). 30/30 forced-colors sidecars match PNG SHA-256 and source commit and record active preference, focused control `workspaceName`, and loaded fonts. `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff verifier retains existing SFX playback-truth and missing standalone LICENSE warnings.
- Status: implemented with local structural verification complete; no human visual review or accessibility conformance claimed. Rollback: `git revert 9cb668c55cc6c5512417cd2147c6f4ed86d14fbe`.
## MF-PF-012 — Stop sound on backgrounding; do not catch up

- Inspected source HEAD before edits: `8159af076f085fd7c46567875ecbe0c6139c26a4`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, matching preflight task row, root TODO counts, and this ledger.
- Added a document `visibilitychange` listener that stops active oscillators when the page becomes hidden. Existing `play()` guard returns `background-tab` for requests made while hidden. Browser regression schedules a cue, backgrounds the document and checks oscillator stop calls, exercises hidden-play rejection, then restores visibility and confirms no cue is scheduled automatically.
- `node --check src/components.js` — exit 0. `node --check tests/browser/components.spec.js` — exit 0. `node scripts/validate-contracts.mjs` — exit 0. `node scripts/verify-m13-handoff.mjs` — exit 0 with existing SFX playback-truth and missing-LICENSE warnings. `git diff --check` — exit 0.
- The unattended run hit Windows `EPERM` during pnpm dependency refresh; restored the 31 locked workspace packages with `pnpm install --frozen-lockfile --offline` (exit 0).
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 49/49 passed, including stop-on-hidden and no-catch-up behavior.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing generic playback-truth and missing-LICENSE warnings remain.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the visibility listener, browser regression, and matching task/TODO/ledger evidence.

## MF-PF-010 — Deterministic Web Audio resource cleanup

- Inspected source at HEAD `44fd9b2b0fe30df17edfef9af058717429a43f56`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, matching preflight task status/evidence. Reuse one provider-owned AudioContext, disconnect ended oscillators, and stop/disconnect active oscillators plus close the context on unmount. Added browser coverage for context reuse and unmount closure.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from the local pnpm cache.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated.
- `pnpm run test:browser` — exit 0; 48/48 passed, including AudioContext reuse and closure after client-side provider unmount. `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; the handoff verifier still reports its generic playback-truth warning and the separate missing-LICENSE warning.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the provider resource change, browser test, and this matching task/ledger evidence.

## MF-PF-001 — Freeze current package/release inventory

- Live HEAD inspected: `affdfe6a56362878b8ca19faab61c922a0264c4b`.
- Scope: `package.json`, `docs/audit/m13-final-reconciliation-2026-10-26.md`, this ledger, and the matching preflight backlog row.
- Inventory: `@moonwitness/moonframe@0.1.1`; `private:false`; `license: MIT`; public publish access; five declared export paths; no standalone `LICENSE` file. Registry status not verified; no publish attempted.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; emitted existing SFX consent/playback and missing LICENSE release warnings.
- `pnpm install --frozen-lockfile` — exit 0; restored the locked workspace dependencies without changing the lockfile.
- `pnpm test` — exit 0; 12/12 unit and SSR tests passed.
- `pnpm run typecheck` — exit 0.
- `pnpm run build` — exit 0; Next.js generated all 88 static/SSG routes.
- Initial runner verification exposed Windows `pnpm.cmd` process resolution; `scripts/run-m13-autopilot.mjs` now invokes the Windows shim through a shell for its fixed literal checks. A dry-run also exposed that task descriptions containing the word “blocked” were counted as blocked states; the runner now reads the explicit status field. `node --check scripts/run-m13-autopilot.mjs` — exit 0. The corrected counter reports 488 total / 15 complete-or-captured / 0 blocked / 473 pending after this task.
- Status: captured. No human review or acceptance claimed. Rollback: revert only the documentation and task-evidence edits above.

## MF-PF-003 — Current release evidence and registry status

- Inspected local HEAD before edits: `fcd2a165ac5517b09944076012837e4dc49b0c3a`.
- Scope: `docs/qa/rc-evidence-and-release-ledger.md`, `docs/backlog/m13-preflight-remediation-tasks.md`, and this ledger.
- Local `package.json` declares `@moonwitness/moonframe@0.1.1`, `private:false`, MIT, and public publish access. These declarations do not prove license authority or publication.
- Registry URL/tag/version/provenance: **not verified**. No registry request or publish attempted. Historical v0.1.0 release notes do not establish a v0.1.1 release.
- `node scripts/validate-contracts.mjs` — exit 0; structural contract checks passed.
- `node scripts/verify-m13-handoff.mjs` — exit 0; handoff integrity passed with existing SFX-consent/playback and missing-LICENSE warnings.
- Status: captured; no human review or acceptance claimed. Rollback: revert the current-release section and the corresponding task/ledger evidence edits only.

## MF-PF-004 — Public component export coverage

- Inspected source HEAD before documentation edits: `c7ee51e672b993c176719ca2e088ef302a86b38c`.
- Scope: `docs/audit/component-public-export-coverage.md`, matching preflight row, root TODO live counts, and this ledger.
- Compared every one of 151 manifest records against package root/runtime/type entry points. Result: 47 same-name runtime and type exports (including ThemeProvider), 104 records without a same-name runtime component export.
- `node scripts/validate-contracts.mjs` — exit 0; structural contract checks passed.
- `node scripts/verify-m13-handoff.mjs` — exit 0; handoff integrity passed with existing SFX consent/playback and missing LICENSE warnings.
- Status: captured. This static catalog does not establish behavior or human acceptance. Rollback: revert only the catalog, corresponding task/TODO count updates, and this ledger entry.

## MF-PF-005 — Page implementation coverage

- Inspected source HEAD before documentation edits: `ae6395d420c455246aadfb0d0753de631e9f28d5`.
- Scope: `docs/audit/page-implementation-coverage.md`, matching preflight row, root TODO live counts, and this ledger.
- Compared all 72 D-level IDs in `contracts/moonframe-page-template-manifest-v0.1.json` with `TEMPLATE_CATALOG` in `apps/moonframe/lib/catalog.ts` and `TemplateRenderer` cases in `apps/moonframe/templates/index.tsx`. 43 IDs are in both runtime sources; 29 are pending. All catalog IDs are present in the manifest and renderer.
- Route source files exist for `/templates/[id]` and `/preview/[id]`. Per-record screenshots and human visual review are not established; all rows explicitly say `not-reviewed`.
- `node scripts/validate-contracts.mjs` — exit 0; structural contract checks passed.
- `node scripts/verify-m13-handoff.mjs` — exit 0; handoff integrity passed with existing SFX consent/playback and missing LICENSE release warnings.
- Status: captured; no human review or acceptance claimed. Rollback: revert only the catalog, matching task/TODO count updates, and this ledger entry.

## MF-PF-006 — Truthful pairwise QA report

- Inspected source HEAD before edits: `a32b9cb66d713c657018936efd2fbdf30f4dc9a3`.
- Scope: regenerated `docs/qa/skin-pairwise-review-report.md`, matching preflight task row, root TODO live counts, and this ledger.
- `scripts/audit-skin-pairs.mjs` already distinguished automated structural checks and PNG-path inventory from human visual review; the checked-in report was stale and still contained historical `OWNER-APPROVED`, “Verified”, and plain `PASS` language.
- `pnpm run audit:pairs` — exit 0; regenerated 105 pair records as `STRUCTURAL-PASS`, listed 30/30 screenshot paths, and retained pending human visual review. The script does not inspect PNG pixels or provenance.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; emitted existing SFX consent/playback and missing LICENSE warnings.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 packages from cache without lockfile changes.
- `pnpm test` — exit 0; 12/12 tests passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `git diff --check` — exit 0. Browser tests were not needed for this report-only change.
- Status: captured; no human review/acceptance claimed. Rollback: restore the report and revert this task's matching status/count/ledger evidence only.

## MF-PF-019 — Proposed token inventory against runtime CSS bridge

- Inspected source before edits: `src/styles.css` and `contracts/moonframe-token-dictionary-v0.1.json`; dictionary contains 78 proposed IDs and CSS contains 17 distinct `--mf-*` declarations.
- Scope: `docs/audit/token-runtime-coverage.md`, matching preflight row, root TODO live counts, and this ledger. Candidate role relationships are explicitly marked as inference; no aliases, canonical values, 30-appearance coverage, DTCG conformance, or owner approval are claimed.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing SFX consent/playback and missing LICENSE warnings remain.
- The unattended runner hit `EPERM`/`EACCES` while trying to recreate the dependency tree. Outside that subprocess, `pnpm install --frozen-lockfile --offline` exited 0 and restored all 31 locked workspace packages from the existing cache without lockfile changes.
- `pnpm test` — exit 0; 12/12 tests passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 static/SSG routes generated.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing release warnings remain.
- Status: captured from direct source inventory and successful structural/unit/type/build checks. No human review/acceptance claimed. Rollback: remove the inventory and matching task/TODO/ledger evidence only.

## MF-PF-025 — Explicit simulated auth demo states

- Inspected source HEAD: `e1a17d5`.
- Scope: `apps/moonframe/templates/index.tsx`, matching preflight task evidence, root TODO live count, and this ledger.
- Updated demo sign-in, OAuth/SSO, verification, recovery, MFA, and onboarding wording/actions to state that each is simulated. Removed claims of actual authentication, redirects, messages, token timing, verified factors, sessions, or provisioned workspaces.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing SFX consent/playback and missing LICENSE warnings remain.
- The runner's first package check hit `EPERM` while recreating `node_modules` and could not restore packages online (`EACCES`); dependencies were restored with `pnpm install --frozen-lockfile --offline` (exit 0, 31 packages reused from cache).
- `pnpm test` — exit 0; 12/12 unit and SSR tests passed.
- `pnpm run typecheck` — exit 0.
- `pnpm run build` — exit 0; all 88 static/SSG routes generated.
- `pnpm run test:browser` — exit 0; 46/46 Playwright tests passed.
- Status: implemented with local verification complete. No authentication integration or real account action is claimed. Rollback: revert only the template wording/action edits and this evidence.

## MF-PF-007 — Separate SFX default enable intent from trusted consent

- Inspected source HEAD before edits: `625cf4b22ff427f7d30e9e38031f4f5ca6e7c81e`.
- Scope: `src/components.js`, `tests/runtime.test.mjs`, matching preflight task row and this ledger. `defaultEnabled` can no longer grant consent; the SSR fixture requests `defaultEnabled: true` and asserts `consentGranted` remains false.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing SFX playback-truth and missing-LICENSE warnings remain.
- The first unattended attempt hit Windows `EPERM` during pnpm dependency refresh; its bundled cache path also lacked `@emnapi/runtime` metadata. Restored the locked 31 packages through the user's pnpm cache with `pnpm install --frozen-lockfile --offline` (exit 0; no lockfile changes).
- `pnpm test` — exit 0; 12/12 tests passed, including the new default-enabled consent assertion.
- `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 46/46 passed.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing release warnings remain.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the initialization change, its runtime assertion, and matching task status/evidence.

## MF-PF-008 — Explicit trusted-event consent API

- Inspected source HEAD before edits: `d5d8ef9c29b466fc53ddd9896cb89c61bc47763b`.
- Scope: `src/components.js`, `src/components.d.ts`, `apps/moonframe/components/site/InteractivePlayground.tsx`, `docs/motion/motion-interaction-sfx-bible.md`, and `tests/browser/components.spec.js`.
- `grantConsent(event)` accepts only a trusted click, pointerup, keydown, or touchend event; synthetic events and calls without a native event leave consent disabled and return false. The playground forwards its actual click event. No browser permission, persistence, or autoplay is added.
- The unattended pnpm run hit Windows `EPERM` during dependency refresh. `pnpm install --frozen-lockfile --offline` — exit 0; restored the 31 locked workspace packages from the local cache.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0; existing play-result and missing-LICENSE warnings remain.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 46/46 passed, including synthetic denial and real-click grant.
- Status: implemented with local verification complete. No human review or acceptance claimed. Rollback: revert the explicit trusted-event API, call site, browser assertion, documentation, and matching task status/evidence.

## MF-PF-009 — Truthful Web Audio playback result

- Inspected source HEAD before edits: `0ebeb9de87aa66810e6035b9dc22699bc229efce`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, `contracts/moonframe-sfx-contract-v0.1.json`, matching preflight row, TODO counts, and this ledger.
- Unsupported Web Audio returns `{ played: false, reason: 'unsupported' }`; suspended/closed contexts and scheduling errors return `blocked`. Cooldown and last-event state are updated only after scheduling succeeds. Added an unsupported-API browser regression and updated the contract warning with local evidence; broader release approval remains separate.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from the local cache.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 47/47 passed.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0. The handoff verifier still reports its generic playback-truth warning; investigate/fix that independent static heuristic before clearing it.
- Status: implemented with local verification complete. No human review or release approval claimed. Rollback: revert the result states, browser regression, contract note, and matching task/evidence updates.

## MF-PF-011 — Stop active sound on mute or consent revocation

- Inspected source HEAD before edits: `2c480f99e403bd0cb3e725278e7aef4e42a7ecd9`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, `contracts/moonframe-sfx-contract-v0.1.json`, matching preflight row, root TODO counts, and this ledger.
- SFXProvider now stops and disconnects active oscillators immediately when muted, consent is revoked, or volume reaches zero. Browser coverage checks active oscillator stop calls, refusal after revoke, renewed consent, context reuse, and unmount closure.
- `node scripts/validate-contracts.mjs` — exit 0.
- `node scripts/verify-m13-handoff.mjs` — exit 0; existing generic playback-truth and missing-LICENSE release warnings remain.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from the local cache.
- `pnpm test` — exit 0; 12/12 passed. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes generated. `pnpm run test:browser` — exit 0; 48/48 passed.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — exit 0. Handoff verifier still emits its generic playback-truth warning and missing-LICENSE warning.
- Status: implemented with local verification complete. No human review or release approval claimed. Rollback: revert provider stop handling, its browser regression, contract note, and matching task/TODO/ledger evidence only.

## MF-PF-023 — Motion recipe/runtime reconciliation

- Status: `captured`; canonical contract contains 25 recipe records and the planned matrix contains 180 QA slots.
- Artifact: `docs/qa/motion-runtime-reconciliation.md`. Source inspection records shared CSS transitions/reduced-motion handling while leaving per-recipe implementation, rendered captures, and human review unclaimed.
- Verification: `node scripts/validate-contracts.mjs` — exit 0; `node scripts/verify-m13-handoff.mjs` — exit 0 (existing playback-truth and missing-LICENSE warnings). Documentation-only change; browser tests not applicable.
- Rollback: remove the artifact and this entry, then restore matching status/counts in the backlog and TODO.

## MF-PF-013 — Reduced-motion priority for SFX

- Inspected source HEAD before edits: `47d7a544eb06b05ee2c90e50bdb064eae807b521`.
- Scope: `src/components.js`, `tests/browser/components.spec.js`, task evidence, TODO and this ledger. A live OS motion-preference listener and root `data-motion` observer stop active oscillators when reduced motion becomes active; future cues remain suppressed while the status interface stays usable.
- `pnpm install --frozen-lockfile --offline` — exit 0; restored 31 locked packages from local cache. Syntax checks and both structural validators — exit 0; handoff retains its generic playback-truth and missing-LICENSE warnings.
- `pnpm test` — exit 0; 12/12. `pnpm run typecheck` — exit 0. `pnpm run build` — exit 0; 88 routes. `pnpm run test:browser` — exit 0; 50/50, including reduced-motion stop/suppression regression. `git diff --check` — exit 0.
- Status: implemented, local verification complete. No human review or acceptance claimed. After restoring dependencies with `pnpm install --frozen-lockfile --offline`, the current checkout was revalidated: unit 13/13, typecheck, build 88 routes, browser 56/56 (including this regression), both contract/handoff validators, and `git diff --check` passed. The implementation commit remains `e8c05e3` (`fix(sfx): honor reduced motion preference`); no duplicate implementation commit was needed. Rollback: revert the motion listeners, browser test and matching ledger/task evidence.
## MF-PF-014 — Sensitive consumer-context SFX suppression

- Source baseline: commit `e8c05e3` (MF-PF-013 verified). Added explicit provider `context` and root `data-sfx-context` fallback. Auth/authentication, finance/financial, destructive, and security contexts suppress playback even after user consent.
- Browser regression exercises authentication, finance and destructive categories and confirms consent status remains available while sound is suppressed.
- `pnpm install --frozen-lockfile --offline` — exit 0; 31 packages restored. Syntax checks, `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs` — exit 0 (generic playback-truth and missing-LICENSE warnings remain). `pnpm test` — 12/12; typecheck — exit 0; build — 88 routes; browser — 51/51; `git diff --check` — exit 0.
- Status: implemented and locally verified; no consumer review or release approval claimed.
## MF-PF-015 — Freeze alias compatibility semantics

- Preserved six current runtime aliases and their TypeScript input types as compatibility inputs for contract v0.1; no new aliases or remappings in this contract version. Removal or semantic changes need a future major-version migration decision. No owner approval inferred.
- Evidence is contract/source comparison only. `node scripts/validate-contracts.mjs` and `node scripts/verify-m13-handoff.mjs` passed with the existing generic playback-truth and missing-LICENSE warnings; `git diff --check` passed. No browser QA is claimed for this documentation/contract decision.
- Status: captured; runtime behavior unchanged.
## MF-PF-016 — SFX interaction and browser-denial regressions

- Browser regressions cover trusted consent and synthetic-event denial, missing/suspended AudioContext, focus-only silence, mute/revoke, visibility/background behavior, reduced motion, and sensitive contexts. Dedicated suspended-context case confirms focus creates no context, attempted playback reports `blocked`, and revoke prevents further creation.
- Full checks: unit 12/12, typecheck passed, build generated 88 routes, browser suite passed 52/52, structural validators passed. Status: implemented; no human/release approval claimed.

## MF-PF-017 — SFX global rate and deduplication windows

- Playwright clock test verifies 1000 ms global throttling and 2000 ms same-event deduplication: different event immediately rate-limited, same event still deduplicated after 1001 ms, then allowed after 2000 ms.
- Full checks: unit 12/12, typecheck passed, build 88 routes, browser 53/53, validators passed. Automated timing evidence does not equal human UX review. Status: implemented.

## MF-PF-018 — SFX package asset inventory

- No audio binary found in `src/`; contract has `producedAssets: []` and `producedAudioFiles: 0`. `pnpm pack --dry-run --json` exited 0 and included no media binaries. Nothing was published. Status: captured; no future asset license approval implied.

## MF-PF-024 — Combined motion, forced-colors, RTL and keyboard regression

- Browser check combines OS reduced motion and forced colors at 360px, switches to RTL, and checks reduced-motion resolution, visible heading/long text, keyboard focus outline, zero transition duration, and no horizontal overflow. Full browser suite 54/54; unit 12/12, typecheck, 88-route build and structural validators passed. 180 motion slots and human accessibility sign-off remain pending. Status: implemented.

## MF-PF-026 — DataTable runtime and premium scope reconciliation

- Source inspection confirms caller-owned rows, optional in-memory text search, sortable columns, empty state, and optional client-side pagination. Premium scope now explicitly excludes persistence, authorization, server queries and enterprise-grid features. Structural validators passed. Status: captured; no runtime feature claims beyond source.

## MF-PF-027 — User reference image intake and rights boundary

- Four recorded hashes/dimensions transcribed from the canonical contract; repository scan found zero PNG/JPG/JPEG/WebP files. Hashes were not recomputed against unavailable binaries. No import, reuse license, or visual approval is claimed; pixel review awaits source files. Status: captured.

## MF-VF-006 — Bind skin captures to current render inputs

- Each Playwright skin/mode screenshot carries a sidecar with Git source commit, PNG SHA-256, and SHA-256 fingerprint over tracked render inputs. Pair audit rejects missing/malformed sidecars, altered PNG bytes, and source-fingerprint mismatch. Regression verifies source/image mismatch rejection.
- At source/capture commit `2034b75`, unit 13/13, typecheck, build 88 routes, browser 54/54 and `audit:pairs` 105 records + 30/30 current-source captures passed; contract/handoff validators and diff check passed. Pixels remain unreviewed. Status: implemented.

## External/dependency blockers

- `MF-PF-002`: resolved by delegated maintainer decision; MIT applies to project-owned code/documentation only. The standalone LICENSE and asset-manifest policy exclude trademark clearance and all third-party/customer artwork rights; no publish approval is implied.
- `MF-PF-020`: named owner must approve/defer canonical 78×30 token source values and migration/versioning. `MF-PF-021` and `MF-PF-022` remain blocked by that dependency.
- `MF-PF-028`: requires `MF-PF-022` and clean-clone CI evidence; no remote push was authorized. No approval was inferred.

## MF-VF-036 — Draw original angular brutalist logo candidate B

- Added the original static SVG `assets/source/brand/mark-b.svg`, with a hard-edged frame and paired inset bars distinct from candidate A. Source SHA-256: `43ac621e4453f4b5413c3d8ebdd2e9bba513f6e011b33de9f50085ee5db0c630`.
- Updated `scripts/validate-brand-svg.mjs` to preserve candidate A's frame-and-circle requirement while validating candidate B's path geometry; documented source and provenance boundary in `docs/brand/master-mark-review.md`.
- `node scripts/validate-brand-svg.mjs assets/source/brand/mark-a.svg` — exit 0; candidate B equivalent — exit 0. `node scripts/validate-contracts.mjs` — exit 0. `node scripts/verify-m13-handoff.mjs` — exit 0 (existing SFX playback-truth warning). `git diff --check` — exit 0.
- `pnpm test`, `pnpm run typecheck`, and `pnpm run build` each exited 1 while pnpm attempted workspace dependency retrieval; registry requests returned `EACCES` under the network restriction. These checks were not completed. Browser QA was not applicable to this source-only asset/validator task.
- Status: implemented. No render at 16/24/32/128px, visual approval, candidate selection, trademark clearance, or distribution rights are claimed. Rollback: remove candidate B and revert its validator and documentation changes.

## MF-VF-018 — Pin tablet screenshot layout 768x1024

- Tablet-profile implementation is in `b86c39a23559d58bfdc53a64f4854442d823f647`; capture sidecars were subsequently refreshed at `49cfac474c4de0bbb6bf75bc9472ae4a98235788`, `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`, `701d5aea3c1147e844a183da5a5036f84cee7db4`, `c68f93ff648d07d73c679b49a280419830ac536e`, `32281f6e2200602b791b9d9355ab7ba3fc19f845`, and `f0cd752f1bd13c61708173c06aa0a8acd2d61115` after fixture additions.
- Added actual 768×1024 browser rendering for all 15 skins in light and dark mode, with viewport assertion and no-horizontal-overflow check; each tablet PNG has a source fingerprint and image SHA-256 provenance sidecar. The 30 tablet rows are indexed in the [visual evidence ledger](visual-fidelity-evidence-ledger.md#tablet-screenshot-captures-mf-vf-018).
- `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 30/30 desktop and 30/30 tablet captures match their source fingerprint and PNG digest. Contract and M13 handoff validators passed; existing SFX playback-truth and missing-LICENSE warnings remain. Human visual review remains pending.
- Rollback: revert commit `b86c39a23559d58bfdc53a64f4854442d823f647`.
## MF-VF-019 — Pin phone screenshot layout 360x800

- Phone-profile implementation is in `7f78909625c7f8a227338a8e96f987e5f4e9f600`; keyboard focus-bound verification is in `49cfac474c4de0bbb6bf75bc9472ae4a98235788`; latest capture refresh including dashboard, table, form, navigation and open-dialog fixture is `f0cd752f1bd13c61708173c06aa0a8acd2d61115`.
- Added actual 360×800 browser screenshots for all 15 skins in light and dark mode, with viewport assertion and no-horizontal-overflow check; each PNG has a source fingerprint and image SHA-256 sidecar. The 30 phone rows are indexed in the [visual evidence ledger](visual-fidelity-evidence-ledger.md#phone-screenshot-captures-mf-vf-019).
- `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 30/30 each for desktop, tablet and phone captures match their source fingerprint and PNG digest. Contract and M13 handoff validators passed; existing SFX playback-truth and missing-LICENSE warnings remain. Human visual review remains pending.
- Rollback: revert the phone-profile implementation and focus-bound verification commits `7f78909625c7f8a227338a8e96f987e5f4e9f600` and `49cfac474c4de0bbb6bf75bc9472ae4a98235788`.
## MF-VF-020 — Add same-data dashboard specimen

- Implementation commit: `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`.
- Added a fixed Northstar Studio dashboard specimen to the `/lab` workspace with exact fixture heading/date, three KPI labels and values, five activity records, visible textual statuses, and the canonical long-copy probe. Browser assertions verify the invariant content for every one of the 15 skins in both light and dark modes.
- `pnpm test` — 13/13 passed. `pnpm run typecheck` — passed. `pnpm run build` — passed; 88 routes generated. `pnpm run test:browser` — 54/54 passed. `pnpm run audit:pairs` — 105 pair records plus 30/30 each desktop, tablet, and phone captures with source/image provenance. Contract and M13 handoff validators passed; generic SFX playback-truth and missing-LICENSE warnings remain. Human visual review remains pending.
- Rollback: revert commit `70d1598eb5c0e8db2b8c6bef636c6efe01405dff`.

## MF-VF-021 — Add same-data table specimen

- Implementation commit: `701d5aea3c1147e844a183da5a5036f84cee7db4`.
- Added five fixed Northstar Studio task rows with semantic task, owner, status, due date and estimate columns; local search and stable due-date/task-name sorting preserve deterministic fixture state across 15 skins and two modes.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 54/54 passed; `pnpm run audit:pairs` — 30/30 each desktop, tablet and phone captures. Contract and M13 handoff validators passed; human visual review remains pending. Existing generic SFX playback-truth and missing-LICENSE warnings remain.
- Fixed project table and dashboard activity browser selectors to avoid ambiguity with repeated task rows/text.
- Rollback: revert commit `701d5aea3c1147e844a183da5a5036f84cee7db4`.

## MF-VF-022 — Add same-data form specimen

- Implementation commit: `c68f93ff648d07d73c679b49a280419830ac536e`.
- Added the fixed Workspace profile fields, UTC label, helper text, associated invalid URL error, pending/success feedback, and Cancel reset behavior. Browser assertions cover the exact form state under every skin and light/dark mode; no backend submission occurs.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed with 88 routes; `pnpm run test:browser` — 54/54 passed; screenshot evidence refreshed for 30 desktop, 30 tablet and 30 phone views. Contract and handoff validators passed with the existing generic SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Rollback: revert commit `c68f93ff648d07d73c679b49a280419830ac536e`.

## MF-VF-023 — Add reproducible open dialog specimen

- Implementation commit: `32281f6e2200602b791b9d9355ab7ba3fc19f845`.
- Added `/lab/behavior?fixture=archive-task`, a deterministic T-1045 completed-task dialog with exact title/body and Keep task / Archive task actions. The archive action is preview-only. The test checks initially open state, Escape, trigger-based reopening, focus return, and writes [a modal capture](visual-fidelity-evidence-ledger.md#deterministic-dialog-capture-mf-vf-023) with source/image provenance.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 55/55 passed, including the deterministic dialog regression; `pnpm run audit:pairs` — 30/30 current-source desktop, tablet and phone captures. Contract/handoff validators passed; human visual review remains pending.
- Rollback: revert commit `32281f6e2200602b791b9d9355ab7ba3fc19f845`.

## MF-VF-024 — Add common sidebar/nav specimen

- Implementation commit: `f0cd752f1bd13c61708173c06aa0a8acd2d61115`.
- Added fixed `Overview`, `Projects`, `Tasks`, `Reports`, `Settings` navigation to the shared dashboard fixture. Overview is current by default; selecting another item changes only the local current-state marker. Browser assertions verify information order, selection change to Reports, and restoration to Overview across all skins/modes.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run build` — passed, 88 routes; `pnpm run test:browser` — 55/55 passed; `pnpm run audit:pairs` — 30/30 current-source desktop, tablet and phone captures. Contract/handoff validators passed; human visual review remains pending.
- Rollback: revert commit `f0cd752f1bd13c61708173c06aa0a8acd2d61115`.

## MF-VF-025 — Decoration-off fixture toggle

- Implementation commit: `dfd923e675c5b7f4013e678c4b2a977919e01213`.
- Added the “Hide decorative elements” switch. It suppresses decorative skin marks while preserving text, semantic labels, focus, controls, navigation selection, and form validation state. Browser coverage captures each skin in light and dark decoration-off mode; capture ledger lists all 30 files and digests.
- `pnpm test` — 13/13 passed; typecheck passed; production build passed (88 routes); `pnpm run test:browser` — 55/55 passed; `pnpm run audit:pairs` — 105 pair records plus current-source provenance for 30 desktop, 30 tablet, and 30 phone captures; decoration-off sidecar and PNG hash audit — 30/30 passed; contract and M13 handoff validators passed with existing SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Evidence commit records the current 90 baseline capture hashes and 30 decoration-off capture hashes. Rollback: revert `dfd923e675c5b7f4013e678c4b2a977919e01213`.

## MF-VF-026 — Grayscale capture variant

- Implementation commit: `ed7f4958b97c4992dbb0ad61005b935a74684100`.
- The browser capture applies a temporary grayscale filter to the full page at the fixed desktop viewport after asserting the shared dashboard heading, all five fixture tasks and profile field remain present. It removes the filter before standard tablet/phone captures. Thirty skin/mode grayscale PNGs and source/hash records are indexed in the visual evidence ledger; visual inspection of Classic light confirms color is removed while labels, controls and layout remain legible.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 55/55 passed (web server performs production build, 88 routes); `pnpm run audit:pairs` — 105 pair records and 30 current-source captures at each desktop/tablet/phone viewport; grayscale provenance/hash audit — 30/30 passed. Human visual review remains pending.
- Rollback: revert `ed7f4958b97c4992dbb0ad61005b935a74684100`.

## MF-VF-027 — Wait for fonts-ready before captures

- Implementation commit: `e3cfe15da3ec5b82c0ea8eb703a1a4e90be791f2`.
- Added a shared browser helper that awaits `document.fonts.ready` and asserts `document.fonts.status` is `loaded` before decoration-off, standard desktop, grayscale, tablet, and phone captures. The fixed environment-provided CSS font stack remains the documented fallback; no font binary or cross-platform raster identity is implied.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 55/55 passed (web server production build, 88 routes); `pnpm run audit:pairs` — 105 pair records plus current-source baseline captures at desktop/tablet/phone; all 150 skin/mode screenshots matched source, fingerprint, PNG digest, and `fontLoadStatus: loaded`. Contract and M13 handoff validators passed with existing SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Rollback: revert `e3cfe15da3ec5b82c0ea8eb703a1a4e90be791f2`.

## MF-VF-028 — Encode capture identity in output filenames

- Implementation commit: `8755d17e41bd17b88a20b40ca44afae4eed808f6`.
- Added stable filenames encoding skin, mode, viewport, and state. The matrix uniqueness test checks 150 profile names across 15 skins × 2 modes × five capture variants. Pair-audit inventory and A/B record paths now use the explicit desktop/tablet/phone default filenames. Same-profile reruns are reproducible at the same stable output path; different states and viewports have distinct IDs.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 56/56 passed (production build generated 88 routes); `pnpm run audit:pairs` — 105 pair records plus 30 current-source captures each for desktop/tablet/phone; all 150 filenames, sidecar source commits, fingerprints, PNG hashes, and font-ready states verified. Human visual review remains pending.
- Rollback: revert `8755d17e41bd17b88a20b40ca44afae4eed808f6`.

## MF-VF-029 — Capture reduced-motion specimen

- Implementation commit: `15cb218fdd221115bafb9981a869999be015769f`.
- Added a reduced-motion desktop capture for all 15 skins × 2 modes. The test activates the OS preference and verifies `data-motion="reduced"`, zero transition duration, dashboard KPI, selected Overview nav, all five tasks/status labels, and profile content before writing a provenance-bound PNG. It resets to no-preference before regular tablet/phone captures.
- `pnpm test` — 13/13 passed; `pnpm run typecheck` — passed; `pnpm run test:browser` — 56/56 passed (production build generated 88 routes); `pnpm run audit:pairs` — 105 pair records plus 30 current-source default captures at each desktop/tablet/phone size; 180/180 named captures match source, fingerprint, PNG hash and font-ready metadata; all 30 reduced-motion records confirm `motionPreference: reduce`. Contract and handoff validators passed with existing SFX playback-truth and missing-LICENSE warnings. Human visual review remains pending.
- Rollback: revert `15cb218fdd221115bafb9981a869999be015769f`.

## MF-VF-037 — Original negative-space lunar mark candidate C

- Scope: `assets/source/brand/mark-c.svg`; `docs/brand/master-mark-review.md`; matching task, TODO and ledger evidence.
- Authored a single static crescent contour with an inward-swept negative-space opening from basic vector geometry. No references or third-party artwork were used. Source SHA-256: `4934e3344f10b800d9b7c846ab3fd415ac0e6d5336c9e9a8e67f7fe3279e6a95`.
- `node scripts/validate-brand-svg.mjs assets/source/brand/mark-c.svg` — exit 0; `node scripts/validate-contracts.mjs` — exit 0; `node scripts/verify-m13-handoff.mjs` — exit 0 (existing generic SFX playback-truth warning).
- `pnpm test`, `pnpm run typecheck`, and `pnpm run build` were attempted but stopped when pnpm tried to recreate workspace dependencies and package fetches failed with `EACCES` due to unavailable network access. No browser run; this is an isolated asset/documentation task. No rendered size variants or human review, selection, trademark clearance, or distribution approval claimed.
- Rollback: remove `assets/source/brand/mark-c.svg` and revert its review note, task status, and matching counts/evidence.


## MF-VF-293 — Register image R01 original digest and dimensions

- Dependency MF-VF-014 is implemented; its Brand Bible and asset contract distinguish inline runtime marks from independent source assets.
- Added `docs/visual/references/reference-index.md` with the R01 contract ID, attachment label, 1672 × 941 dimensions and SHA-256 copied from `contracts/moonframe-creative-reference-contract-v0.1.json`.
- Cross-checked the values against the canonical contract. Original bytes remain absent from this checkout; this is metadata capture only and does not verify local bytes, rights, or visual parity.
- Status: `captured`. Runner override honored: no package-manager commands, test suites, typecheck, or build run. No human review or rights approval claimed. Rollback: revert the index entry and MF-VF-293 status/evidence.

## MF-VF-286 — Rendered nested surface checks

- Added browser assertions to the existing 15-skin × light/dark matrix for nested card text and surface, a rendered toolbar input, its keyboard focus outline, and a native project dialog plus backdrop. The checks inspect computed styles from actual rendered elements; existing token-pair contrast math remains a separate check.
- `node --check tests/browser/skins.spec.js` — exit 0; `node scripts/validate-contracts.mjs` — exit 0; `node scripts/verify-m13-handoff.mjs` — exit 0 with existing SFX playback-truth and missing-LICENSE warnings. The browser suite, screenshots, typecheck, and build were not run per runner override, so browser outcomes remain unverified. No human visual or accessibility review claimed.
- Status: `implemented`; host runner must execute applicable browser verification before capture status. Rollback: revert the browser regression and the MF-VF-286 task/TODO/ledger evidence.
- Overall progress after this task: 86/488 (17.6%) implemented-or-captured, 402/488 (82.4%) planned, 0 blocked. This count does not imply human review or acceptance.

## MF-VF-287 — No-art/no-custom-font browser fallback

- Added a browser regression in `tests/browser/skins.spec.js` that aborts image and custom-font file requests, then checks fallback typography and readable dashboard content while using task search/sort, workspace navigation, and profile save feedback.
- `pnpm run test:browser -- --grep "critical lab actions and readable content"` — 1/1 passed after scoping the repeated task-name assertion to its summary list. The host runner's first full browser attempt caught that ambiguous locator; it retained the patch without committing. Full browser suite, unit tests, typecheck, build, contracts, and handoff validation are running again before checkpoint. No human visual review claimed.
- Status: `implemented`; targeted browser behavior verified. Rollback: revert the regression and matching task/TODO/ledger evidence.
- Overall progress after this task: 87/488 (17.8%) implemented-or-captured, 401/488 (82.2%) planned, 0 blocked. This arithmetic follows the immediately preceding live ledger count and does not imply human review or acceptance.

## MF-VF-294 — Register R02 original digest and dimensions

- Dependency `MF-VF-014` is implemented. Added the R02 (`MWX-REF-002`) contract metadata to `docs/visual/references/reference-index.md`: SHA-256 `1de1d94a2d251901503dd7edc5bc42aff77b65251dde6e29fd4b5455b7376167`, 1024 × 576.
- Cross-checked ID, digest, dimensions, and source status against `contracts/moonframe-creative-reference-contract-v0.1.json`. Original bytes are absent from this checkout; the hash is transcribed, not recomputed. No import, license, or visual approval is claimed.
- Runner override honored: no package-manager commands, test suites, typecheck, or build run. No commit created; host runner will verify and checkpoint.
- Rollback: revert the MF-VF-294 status/evidence and its one R02 index row.

## MF-VF-296 — Register R04 original digest and dimensions

- Dependency MF-VF-014 is implemented. Added the R04 (MWX-REF-004) contract metadata to docs/visual/references/reference-index.md: SHA-256 9d565501a1aa681f1122d666cb01dbdfad4b8fd8dd89f9648b676d652080eb90, 1024 × 576.
- Cross-checked ID, digest, dimensions, and unversioned source status against contracts/moonframe-creative-reference-contract-v0.1.json. Original bytes remain absent, so the digest is transcribed, not recomputed. No import, license, or visual approval is claimed.
- No package-manager commands, suites, typecheck, or build run per runner override. No commit created; host runner will verify and checkpoint.
- Status: captured. Rollback: revert the MF-VF-296 status/evidence and its one R04 index row.

## MF-VF-305 — Extract top navigation landmark hierarchy

- Added responsive breadcrumb navigation, task search, labeled update status, and named profile avatar to the live R01 dashboard fixture in `apps/moonframe/app/(lab)/lab/page.tsx` and `apps/moonframe/app/(lab)/lab/lab.css`. Search is connected to the existing task filter; duplicate table search was removed. The interface is live DOM content, not screenshot imagery.
- Dependency `MF-VF-022` is implemented. `node --check tests/browser/skins.spec.js`, contracts, handoff, runtime tests (13/13), typecheck, build (88 routes), and `git diff --check` passed. Targeted browser checks passed 2/2. The full browser suite passed the 30 skin × mode matrix plus the no-art fallback scenario, 63/64 total; one unrelated existing dashboard-filter test exceeded its 30-second timeout. Status remains `implemented`, not captured. No image rights or human review claimed.
- Rollback: revert the fixture/CSS changes and restore the task row to planned. No commit created; host runner handles verification and checkpoint.

## Current counts after MF-VF-305

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- Previous live count: 96 implemented-or-captured, 392 planned, 0 explicitly blocked. This task adds one implemented record: 97 implemented-or-captured, 391 planned, 0 explicitly blocked. Counts do not imply human review, rights, or acceptance.

## MF-VF-306 — Extract ink-black left sidebar shell

- Implemented semantic sidebar navigation and responsive ink-black rail in `apps/moonframe/app/(lab)/lab/page.tsx` and `lab.css`; marks are constrained decorative CSS and hidden from assistive technology. Dependency MF-VF-022 is implemented.
- Contract and handoff validators, runtime tests (13/13), typecheck, build (88 routes), and `git diff --check` passed. Browser matrix passed 30/30 skin × mode cases, including responsive breakpoints, keyboard focus, and accessible navigation names. Status is `implemented`, not captured. No human review or asset-rights claim.
- Live task rows: 98 implemented-or-captured (20.1%), 390 planned (79.9%), 0 explicitly blocked of 488. Browser verification is complete for this task; commit/push follows scoped checkpoint.
- Rollback: revert the fixture/CSS and task/TODO/ledger evidence for MF-VF-306.

## MF-VF-307 — Draw independent rough white sidebar border source

- Added `assets/source/creative-reference/r01/rough-rail-frame.svg`, an original decorative-only outline with transparent center and slightly irregular white strokes. It contains no scripting, event attributes, external resources, filters, or embedded fonts. It does not replace the sidebar's accessible CSS border or focus treatment.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; no browser capture or human visual review claimed. Runner override honored: no package-manager commands, suites, typecheck, or build run. No commit created; host runner handles validation and checkpoint.
- Rollback: remove the SVG and restore the task row and counts.

## Current counts after MF-VF-307

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- Previous live count: 98 implemented-or-captured, 390 planned, 0 explicitly blocked. This task adds one implemented record: 99 implemented-or-captured, 389 planned, 0 explicitly blocked. Counts do not imply human review, rights, or acceptance.

## MF-VF-308 — Draw brush-ink pink selected nav plate

- Added `assets/source/creative-reference/r01/active-nav-stroke.svg`, an original decorative pink plate with irregular brush-like geometry and a transparent canvas. It does not communicate selected state by itself; the existing DOM `aria-current` and CSS focus treatment remain authoritative.
- Dependency MF-VF-022 is implemented. SVG source is authored in-repository; no third-party imagery used. No package-manager commands, suites, typecheck, build, contract validation, or handoff validation run per runner override. No capture or human visual review claimed.
- Status: `implemented`; no commit created. Host runner handles verification and checkpoint. Rollback: remove the SVG and restore the MF-VF-308 task/TODO/ledger evidence.

## Current counts after MF-VF-308

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- Previous live count: 99 implemented-or-captured, 389 planned, 0 explicitly blocked. This task adds one implemented record: 100 implemented-or-captured, 388 planned, 0 explicitly blocked. Counts do not imply human review, rights, or acceptance.

## MF-VF-309 — Separate product identity and edition slots

- Split the generic Northstar demo initial, product name, and edition descriptor into explicit markup in `apps/moonframe/app/(lab)/lab/page.tsx`, with responsive CSS in `lab.css`. This makes the consumer-provided identity slot clear without adding Moonwitness names, marks, or art to the framework fixture.
- Increased the existing enterprise browser matrix timeout to 120 seconds; its 30 skin × mode cases took 52 seconds under the loaded runner. Contract and handoff validators, runtime tests (13/13), typecheck, build (88 routes), and the full browser suite (64/64) passed. No human review or rights assertion.
- Status: `implemented`. Rollback: revert the markup/CSS, test-timeout adjustment, and this task evidence.

## Current counts after MF-VF-309

- Total task IDs: 488. 101 implemented-or-captured (20.7%), 387 planned (79.3%), 0 explicitly blocked. These counts do not imply human visual review or acceptance.
# MF-VF-310 — Build mission hero 2-column L1 grid

- Dependency `MF-VF-022` is implemented. The existing R01 dashboard content has a two-column activity/supporting-note grid that collapses to one column at the 800px breakpoint. Added browser assertions for the desktop grid and the 360px single-column layout in `tests/browser/skins.spec.js`.
- Status: `implemented`; no screenshot capture, source art, human review, or asset-rights approval claimed. Contracts and handoff, runtime tests (13/13), typecheck, build (88 routes), and `git diff --check` passed. Browser suite passed 64/64, including the 30 skin × mode grid checks.
- Counts: 102 implemented-or-captured, 386 planned, 0 explicitly blocked of 488 total. Counts do not imply human review, rights, or acceptance.
- Rollback: revert the two browser assertions and matching task/TODO/ledger evidence.

## MF-VF-311 — Oversized expressive heading recipe

- Updated the existing R01 dashboard fixture heading in `apps/moonframe/app/(lab)/lab/lab.css` with responsive `clamp()` sizing, tighter display tracking, balanced wrapping, and a bounded measure. Text remains a semantic DOM heading; no font or artwork dependency was added.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; capture, human review, and acceptance are not claimed.
- Contract and handoff validators, runtime tests (13/13), typecheck, build (88 routes), and `git diff --check` passed. Full browser suite had 63/64 pass: the only failure was an unrelated SFX AudioContext cleanup assertion; its isolated retry passed 1/1. All R01 skin/mode rendering cases passed. No commit created yet. Rollback: revert the scoped CSS and task evidence.

## Current counts after MF-VF-311

- Total task IDs: 488 (460 `MF-VF` + 28 `MF-PF`).
- Previous ledger counts: 102 implemented-or-captured, 386 planned, 0 explicitly blocked. This task adds one implemented record: 103 implemented-or-captured, 385 planned, 0 explicitly blocked. Counts do not imply human review, rights, or acceptance.

## MF-VF-313 — Define panoramic fictional cyber-city scene art slot

- Added `apps/moonframe/templates/visual-reference/r01-scene-slot.tsx` and its CSS module. The optional semantic figure accepts consumer-supplied artwork, descriptive or empty decorative alt text, and a focal point; it reserves a 16:7 wide frame and changes to 4:3 on phones with lazy image loading.
- Dependency `MF-VF-022` is implemented. No artwork is bundled or derived from the missing reference. No package-manager commands, suites, typecheck, build, validators, browser checks, or captures run per runner override; host runner will verify. No rights or human review claimed.
- Status: `implemented`; no commit created. Rollback: remove the component/CSS module and restore the task row/count evidence.
- Counts: prior ledger count 104 implemented-or-captured, 384 planned, 0 blocked; now 105/383/0 of 488. Counts do not imply capture, human review, rights, or acceptance.
## MF-VF-315 — Draw original hooded anonymous observer concept

- Added `assets/source/creative-reference/r01/observer-scene.svg`, a self-contained decorative illustration built from generic geometric shapes. The faceless hooded silhouette is an optional consumer-scene concept; it introduces no consumer mark, embedded text, external reference, or bundled runtime use.
- SHA-256: `67cdaf4c710fedf9a09d15817f33fbfe6fafd1c3d57e0574844d4ea510f83e8f`.
- Dependency MF-VF-022 is implemented. Status: `implemented`; no rights clearance, human optical review, or acceptance claimed. Runner override honored: no package-manager commands, tests, typecheck, build, validator, or browser capture run. Host runner owns verification/checkpoint.
- Rollback: remove the SVG and revert this ledger entry and the matching backlog/TODO evidence.
- Counts: 110/488 implemented-or-captured, 378/488 planned, 0 explicitly blocked. Counts do not imply capture, review, or acceptance.

## MF-VF-319 — Build radial network hub as data visualization seam

- Added `apps/moonframe/templates/visual-reference/r01-signal-hub.tsx`, a reusable consumer-data-driven SVG relationship view with a visible relationship list and node-value table as accessible alternatives. Dangling relationship IDs are omitted.
- Dependency MF-VF-022 is implemented. Status: `implemented`; no validators, package-manager commands, suites, typecheck, build, browser capture, or human review run/claimed per runner override. No reference media or rights/acceptance claim.
- Rollback: remove the component and restore the matching backlog/TODO evidence.
- Counts: prior 110/488 implemented-or-captured, 378/488 planned, 0 blocked; now 111/488, 377/488, 0 blocked.

## MF-VF-332 — Draw original manga editorial illustration concept

- Added `assets/source/creative-reference/r02/manga-editorial-hero.svg`, an original abstract night-city and crescent-moon scene. It contains no people, embedded text, consumer marks, external resources, scripts, or event handlers.
- SHA-256: `6686785dd0f94aed8ceb0d8f3aaa2480d51c2e248857be4eb9f14e5249534193`.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; no validators, package-manager commands, suites, typecheck, build, rendering, source comparison, or browser capture run per runner override. Human optical review, source comparison, rights approval, and acceptance are not claimed; host runner owns verification/checkpoint.
- Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.
- Counts: prior recorded ledger count 115 implemented-or-captured, 373 planned, 0 explicitly blocked; now 116/488 implemented-or-captured, 372/488 planned, 0 blocked. This task is implemented only and does not imply capture, review, or acceptance.

## MF-VF-333 — Define city+moon secondary scenery slot

- Added `apps/moonframe/templates/visual-reference/r02-world-scene.tsx` and `r02-world-scene.module.css`. The optional consumer image has independent responsive framing and focal positioning; foreground children remain live DOM content with separate layout. Decorative empty-alt images are hidden from assistive technology, and no artwork is bundled.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; no tests, validators, typecheck, build, browser capture, source comparison, rights review or human review run/claimed per runner override. Host runner owns verification/checkpoint.
- Counts advance from the latest prior ledger-recorded 121/488 implemented-or-captured, 367 planned, 0 blocked to 122/488, 366 planned, 0 blocked. This records implementation only, not capture, review or acceptance.
- Rollback: remove the component and CSS module, then restore this task row and matching TODO/ledger entry.

## MF-VF-320 — Draw geometric radial network background only

- Added `assets/source/creative-reference/r01/radial-network.svg`, a self-contained decorative concentric-ring and radial-axis field with no labels, nodes, relationships, external resources or scripts. The accessible signal-hub content remains the source of data meaning. SHA-256: `7e6f8deae6622c2d8e4eefaecb8db83c31cf3d0c3663c461d6443313d95c21937`.
- Dependency `MF-VF-022` is implemented. Status: `implemented`; static source inspection and `git diff --check` (exit 0). Package-manager commands, validators, suites, typecheck, build and browser capture were not run per runner override; host runner owns verification/checkpoint. Rights clearance and human optical review are not claimed.
- Counts: prior live ledger count 114/488 implemented-or-captured, 374/488 planned, 0 blocked; now 115/488, 373/488, 0 blocked.
- Rollback: remove the SVG and restore the matching task/TODO/ledger evidence.

## MF-VF-332 — Draw original manga editorial illustration concept

- Added `assets/source/creative-reference/r02/manga-editorial-hero.svg`, an original abstract night-city and crescent-moon scene. It contains no people, embedded text, consumer marks, external resources, scripts, or event handlers.
- SHA-256: `6686785dd0f94aed8ceb0d8f3aaa2480d51c2e248857be4eb9f14e5249534193`.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; no validators, package-manager commands, suites, typecheck, build, rendering, source comparison, or browser capture run per runner override. Human optical review, source comparison, rights approval, and acceptance are not claimed; host runner owns verification/checkpoint.
- Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.
- Counts: prior recorded ledger count 115 implemented-or-captured, 373 planned, 0 explicitly blocked; now 116/488 implemented-or-captured, 372/488 planned, 0 blocked. This task is implemented only and does not imply capture, review, or acceptance.
## MF-VF-052 — Draw semantic menu icon

- Added `assets/source/icons/menu.svg`, a self-contained 24×24 original three-bar glyph using rounded `currentColor` strokes and `aria-label="Menu"`. It contains no external resources, script, or event attributes; no third-party artwork or reference was used.
- Dependency `MF-VF-033` is implemented. SHA-256: `2aeba6c5ddc1354877c8c87359a4cf4005f97c378512d039c5928b3ffde8916a`. Status: `implemented`; static inspection confirms the 24×24 viewBox, exactly three rounded `currentColor` strokes, accessible label, and no script, event attributes, or external resource. No validators, package-manager commands, tests, typecheck, build, browser rendering, or human review run/claimed under the runner override. 16/20/24px legibility and light/dark/forced-colors review remain pending.
- Rollback: remove `assets/source/icons/menu.svg` and restore the matching backlog/TODO/ledger evidence.

## MF-VF-334 — Define R02 decorative accent slot

- Added `R02Annotations` and its CSS module at `apps/moonframe/templates/visual-reference/r02-annotations.tsx` and `.module.css`. Caller supplies any decorative marks; default output is empty, with no bundled consumer marks. Content is pointer-transparent and hidden from assistive technology as decoration.
- Dependency `MF-VF-023` is implemented. `git diff --check` passed. Per runner override, no package-manager commands, validators, test suites, typecheck, build, browser captures, or reference comparison were run. Human review, rights clearance, and acceptance remain pending.
- Rollback: remove the component and stylesheet and restore the matching backlog/TODO/ledger entry.
- Counts: prior live summary 123/488 implemented-or-captured, 365 planned, 0 explicitly blocked; now 124/488, 364 planned, 0 explicitly blocked.

## MF-VF-337 — Build dynamic asymmetric story-tile composition

- Added `apps/moonframe/templates/visual-reference/r02-story-grid.tsx` and `r02-story-grid.module.css`. Consumer-provided entries render as semantic articles with live titles/summaries and optional links/media. Asymmetric desktop spans and a featured tile establish varied pacing; mobile uses a single column preserving DOM order.
- Dependency `MF-VF-023` is implemented. Status: `implemented`; no human review, source rights, or acceptance claimed.
- Static source review only. Runner override honored: no validators, package-manager commands, suites, typecheck, build, render, browser capture, or reference comparison. Host runner owns verification/checkpoint.
- Live task row counts after this change: VF foundation 64/292 implemented-or-captured; reference addendum 40/168 implemented-or-captured; preflight 28/28 implemented-or-captured; total 132/488 implemented-or-captured, 356 planned.
- Rollback: remove the component and stylesheet, restore task row to planned and revert matching root summary and ledger entry.

## MF-VF-338 — Build media tile with caption overlay

- Added `R02StoryCard` and `r02-story-card.module.css`. The title, caption and CTA are live DOM content and remain visible without hover; the link has a title-specific accessible name and visible keyboard focus. The media slot is decorative and caller supplied. Forced-colors mode uses system canvas colors.
- Dependency `MF-VF-023` is implemented. Source review only; runner override honored: no package-manager commands, tests, validators, typecheck, build, browser render or captures. No reference comparison, human visual review, rights clearance or acceptance claimed. No commit created; host runner handles checks and checkpoint.
- Counts advance from the latest ledger-recorded 132/488 implemented-or-captured, 356 planned, 0 blocked to 133/488, 355 planned, 0 explicitly blocked. These counts do not imply capture, review or acceptance.
- Rollback: remove the component and CSS module and restore this ledger entry, backlog row and TODO count.
## MF-VF-339 — Prepare accessible article/timeline filmstrip

- Added `R02Filmstrip` and its CSS module at `apps/moonframe/templates/visual-reference/r02-filmstrip.tsx` and `.module.css`. Entries use ordered-list semantics, a `<time>` element, and semantic titles; the layout stacks on narrow screens and does not rely on a horizontal overflow region.
- Dependency MF-VF-023 is implemented. Status: `implemented`; no reference artwork is bundled. No package-manager commands, validators, suites, typecheck, build, browser capture, or reference comparison run per runner override. Human review, rights clearance, and acceptance are not claimed. Host runner owns verification/checkpoint.
- Counts advance from the prior ledger-recorded 133/488 implemented-or-captured-or-implemented, 355 planned, 0 blocked to 134/488, 354 planned, 0 blocked.
- Rollback: remove the component and CSS module and restore the matching backlog, TODO, and ledger evidence.

## MF-VF-055 — Draw semantic plus icon

- Added `assets/source/icons/plus.svg`, an original static 24×24 `currentColor` plus glyph with accessible `Add` label. SHA-256: `01e209f52759c586bddf4d75a5052faa4b3c90ae92c6cbd748607b29b296093c`.
- Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, suites, typecheck, build, browser rendering, or captures run per runner override. Human review and acceptance are not claimed; host runner owns verification/checkpoint.
- Counts: root TODO foundation wave advances from 55/292 implemented-or-captured, 236 planned, 1 blocked to 56/292, 235 planned, 1 blocked. Counts do not imply rendered review or acceptance.
- Rollback: remove the SVG and restore the corresponding backlog, TODO, and ledger evidence.
## MF-VF-056 — Draw semantic check icon

- Added `assets/source/icons/check.svg`, an original 24×24 `currentColor` check glyph with accessible `Complete` label. SHA-256: `3cece525cb1c28a81e3f23cb633ffb8980c988b0c9532b94454b3ce26b8b6071`.
- Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, browser rendering, or capture were run. 16/20/24px rendering, light/dark/forced-colors review, human review, and acceptance remain pending.
- Checkbox counts after update: 67/292 foundation tasks, 47/168 reference tasks, and 28/28 preflight tasks = 142/488 implemented-or-captured; 346 remain unchecked. This does not imply human review, rights clearance, or acceptance.
- No commit created; host runner handles verification and checkpoint. Rollback: remove the SVG and restore its backlog/TODO/ledger evidence.
## MF-VF-044 — Create reverse-dark mark

- Added `assets/source/brand/moonframe-mark-reverse.svg`, a self-authored static reverse-light variant of the existing 32×32 draft geometry, with a solid light fill and no glow or external content. SHA-256: `1199a36c77c384c22ed6f8dc865d518e2836a0035c0934c55ce0b9c47fbb1c60`.
- Dependency MF-VF-040 is implemented. Status: `implemented`; source inspection only. No SVG validator, rendering, package-manager commands, suites, typecheck, build, browser capture, human review, trademark clearance, or distribution approval claimed under runner override. Host runner owns verification/checkpoint.
- Backlog checkbox counts before this change were 146/488 (68 foundation + 50 reference + 28 preflight); now 147/488 implemented-or-captured and 341 planned. Counts do not imply review, rights, or acceptance.
- Rollback: remove the SVG and restore the matching backlog, TODO summary, and ledger entry.

## MF-VF-346 — Adapt R02 masthead to tablet width

- Updated `apps/moonframe/templates/visual-reference/r02-masthead.module.css` with a 48–70rem tablet layout: bounded right-side content column, vertical centering, and tablet-scaled title sizing. Decorative backdrop remains behind semantic text.
- Updated task status to `implemented` in the reference backlog and synchronized current TODO counts (148/488 implemented-or-captured-or-implemented; 340 planned). Evidence is source-level only. Per runner override, no package-manager commands, validators, tests, typecheck, build, browser capture, or visual comparison were run; host runner owns verification/checkpoint.
- Human visual review and source-image rights remain pending. Rollback: remove the tablet media query and restore the task/TODO/ledger evidence.

## MF-VF-347 — Adapt R02 collage and filmstrip to 360 phone

## Live recount — 2026-10-26

- Recounted task checkboxes in all three canonical backlogs after confirming `MF-VF-346` was already implemented. Counts: 81/292 foundation visual, 58/168 reference visual, and 28/28 preflight = 167/488 checked, 321 unchecked. `MF-VF-328` remains explicitly blocked pending original R01 media. This recount does not elevate implementation to capture, human review, or acceptance.
- No source implementation or task status changed in this invocation. Runner override honored: no package-manager commands, validators, tests, typecheck, build, or browser checks run; host runner owns applicable verification.

- Updated `r02-story-grid.module.css` to force content-first single-column cards, normal DOM flow, compact mobile spacing, and a bounded 16:9 media frame.
- Updated `r02-filmstrip.module.css` and `r02-filmstrip.tsx` to provide a labeled horizontal scroll track with snap-aligned entries, a keyboard-focusable list, visible focus, and forced-colors support.
- Dependency MF-VF-023 is implemented. Status: `implemented`; source inspection only. Per runner override, no package-manager commands, validators, suites, typecheck, build, browser rendering, or capture run. Human visual review, source comparison, rights, and acceptance remain pending; host runner owns verification/checkpoint.
- Checked task counts: 69/292 foundation visual + 52/168 reference visual + 28/28 preflight = 149/488 implemented-or-captured; 339 remain unchecked/planned. No human approval is implied.
- Rollback: revert the two CSS module changes, `tabIndex` addition, backlog row, TODO update, and this entry.

## MF-VF-057 — Draw semantic warning icon

- Added `assets/source/icons/warning.svg`, an original static 24×24 triangle-and-exclamation glyph using `currentColor` with the accessible label `Warning`. SHA-256: `0e68537c6bbe49acb576ee9e3ff90506305ec8057491b2f55cfa059521eb47e6`.
- Dependency MF-VF-033 is implemented. Source inspection confirms the file contains only SVG paths/circle, no scripts, event handlers, or external resource references. Status: `implemented`. Under the runner override, no package-manager commands, tests, validators, build, browser rendering, or captures were run. 16/20/24px rendering, light/dark/forced-colors display, human review, and acceptance remain pending; no consumer/third-party artwork or rights claim.
- Foundation wave count updated from 67 to 68 implemented/captured (224 planned); total task counts are maintained in the backlog/root TODO and remain subject to inconsistent historical ledger snapshots. No commit created; host runner handles verification/checkpoint.
- Rollback: remove the SVG and restore the MF-VF-057 task row, root TODO totals, and this ledger entry.

## MF-VF-058 — Draw semantic info icon

- Added `assets/source/icons/info.svg`, an original static 24×24 information glyph using `currentColor`. SHA-256: `a3d3d0dc66edf965e51bbd26113106317b9b3027702803c761c03015f753fcb9`.
- Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. Per runner override, no SVG validation, rendering, tests, package-manager commands, typecheck, build, browser capture, human review, or acceptance claimed. No rights or production approval is implied.
- Counts: 152/488 implemented-or-captured, 336/488 planned, 0 explicitly blocked according to live checkbox totals; this does not imply human review or acceptance.
- No commit created; host runner handles verification and checkpoint. Rollback: remove the SVG and restore its backlog, TODO, and ledger evidence.

## MF-VF-059 — Draw semantic trash icon

- Added ssets/source/icons/trash.svg, a self-authored static 24×24 currentColor trash glyph with accessible label Delete.
- SHA-256: $h.
- Dependency MF-VF-033 is implemented. Status: implemented; source inspection only. Per runner override, no validators, package-manager commands, tests, typecheck, build, browser rendering, capture, or human review run/claimed. Human optical review and acceptance remain pending.
- No commit created; host runner performs checks and checkpoint. Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.
# MF-VF-084 — Write Moonriot visual direction and anti-overlap brief

- Added `docs/visual/skins/moonriot.md`, based on the canonical skin specification and existing captured structural comparison. The brief specifies Moonriot's open full-width editorial shell, directional cuts and top-band navigation, with explicit distinctions from Moonpunk and Moonsmash. Shared behavior, decoration-off, reduced-motion, accessibility, and rights boundaries are recorded.
- Dependency MF-VF-015 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, rendering, screenshots, human review, or acceptance were performed per runner override. Host runner owns verification/checkpoint. No asset or font rights are claimed.
- Rollback: remove the brief and restore the MF-VF-084 backlog row and this entry.

## MF-VF-351 — Write visual distinction for portrait poster archetype

- Added `docs/visual/skins/moonsmash.md`, a generic campaign-poster direction brief covering focal hierarchy, portrait composition, distinction from application shells and neighboring skins, accessible live content, consumer asset rights, and responsive/reduced-motion constraints.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source review only. No validators, package-manager commands, suites, typecheck, build, screenshots, or human review run under runner override. Rights, visual parity, and acceptance remain pending; host runner owns verification/checkpoint.
- Live TODO recount at the time of this task: 154/488 checked implemented-or-captured, 334 unchecked, 0 explicitly blocked. Checked task states do not imply human review, rights approval, or acceptance.
- No commit created. Rollback: remove the brief and restore the matching backlog, TODO, and ledger evidence.

## MF-VF-361 — Draw music-note/scribble motif as original vectors

- Added `assets/source/creative-reference/r03/music-marks.svg`, a standalone static SVG with generic paired eighth notes and loose abstract ink strokes. SHA-256: `2e89f2589c45042ef314f81d2f752d00c4ae60536d8026e553e8b49e43c17caf`.
- Dependency `MF-VF-024` is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, rendering, browser capture, human review, or rights approval run/claimed under runner override. No official band mark or performer association is implied; optical review, rights, and acceptance remain pending.
- Live task checkbox count advances from 158/488 to 159/488 implemented-or-captured-or-implemented; 329 remain unchecked/planned and 0 explicitly blocked. Status counts do not imply review or acceptance. Host runner owns verification and checkpoint.
- Rollback: remove the SVG and restore the matching backlog/TODO status and this ledger entry.

## MF-VF-352 — Establish 2:3-ish portrait artboard semantics

- Added `apps/moonframe/templates/visual-reference/r03-artboard.tsx` and `.module.css`. The reusable `R03Artboard` defaults to a 2:3 portrait frame, accepts a configurable CSS aspect ratio, scales responsively, and places optional editor controls outside the artwork frame.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source inspection only. No package-manager commands, validators, tests, typecheck, build, browser capture, or human review run/claimed per runner override. No reference-image, performer, lyric, or distribution rights are implied; visual review and acceptance remain pending.
- Task-row counts: 163/488 previously checked, now 164/488 implemented-or-captured-or-implemented and 324 planned; 0 explicitly blocked. This count does not imply capture, review, or acceptance.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the component and CSS module, restore the task row, and revert this ledger/TODO update.

## MF-VF-363 — Define visual reading flow top–center–bottom

- Added `apps/moonframe/templates/visual-reference/r03-layout.tsx` and `.module.css`. The composition keeps title, artwork figure, details, tags, and CTA in meaningful DOM order with optional regions, responsive spacing, and a forced-colors boundary.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source inspection only. No package-manager commands, tests, validators, typecheck, build, browser capture, or human review run/claimed per runner override. No artwork, performer/lyric rights, source-image rights, or acceptance is implied; host runner owns verification/checkpoint.
- Checkbox counts: 79/292 foundation visual + 59/168 reference visual + 28/28 preflight = 166/488 checked; 322 unchecked. Counts do not imply human review or acceptance.
- No commit created. Rollback: remove the component and stylesheet and restore the MF-VF-363 backlog row, TODO count, and this entry.

## MF-VF-064 — Draw semantic upload icon

- Added `assets/source/icons/upload.svg`, an original static 24×24 `currentColor` upward-arrow-and-tray glyph with accessible label `Upload`.
- SHA-256: `7bf095e5684cb2791b090e7987fa4c0c8c008a10d06b4e0e399ff273c736f603`. Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, browser rendering, captures, human review, or acceptance claimed under the runner override. Light/dark/forced-colors display and 16/20/24px legibility remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.
# MF-VF-065 — Draw semantic external-link icon

- Added `assets/source/icons/external-link.svg`, an original static 24×24 `currentColor` glyph showing an arrow leaving an outlined square.
- SHA-256: `E5F2240F9DB8C842C0BF78901AA709447C317A57CC098DF03F70429714939B9B`. Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, rendered-size checks, browser captures, human review, or acceptance claimed under the runner override. Light/dark/forced-colors appearance and 16/20/24px legibility remain pending.
- Live row state: 167/488 checked (implemented/captured), 321 pending, 0 explicitly blocked. This count does not imply visual review or acceptance. No commit created; host runner owns verification/checkpoint.
- Rollback: remove the SVG and restore the matching backlog/TODO row and this ledger entry.

## MF-VF-066 — Draw semantic moon icon

- Added `assets/source/icons/moon.svg`, an original static 24×24 `currentColor` crescent glyph with accessible label `Moon`.
- Dependency MF-VF-033 is implemented. Status: `implemented`; source inspection only. No validators, package-manager commands, tests, typecheck, build, rendered-size checks, or browser captures were run under runner override. Light/dark/forced-colors appearance, 16/20/24px legibility, human review, and acceptance remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore the matching backlog/TODO row and this ledger entry.

## MF-VF-069 — Draw semantic user icon

- Added `assets/source/icons/user.svg`, a self-contained 24×24 `currentColor` profile glyph with an explicit `User` accessible label. SHA-256: `a54935e5f3b404b54d704ff16eb460fc3d9b717d1a0cfc46b7da38ba61a1b274`.
- Dependency `MF-VF-033` is implemented. Status: `implemented`; `git diff --check` exited 0. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendered-size checks, or browser captures were run; host runner owns verification/checkpoint. Light/dark/forced-colors appearance, 16/20/24px legibility, human review, and acceptance remain pending.
- Rollback: remove the SVG and restore the matching task row and this ledger entry.

## MF-VF-070 — Draw semantic calendar icon

- Added `assets/source/icons/calendar.svg`, an original static 24×24 currentColor calendar glyph with a date grid and accessible label. SHA-256: `cf8835939ae09be6e63b481ac7f652a2087c1648624304cfd6e72b1cf816e20a`.
- Dependency `MF-VF-033` is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendered-size checks, or browser captures were run; host runner owns verification/checkpoint. Light/dark/forced-colors appearance, 16/20/24px legibility, human review, and acceptance remain pending.
- Rollback: remove the SVG and restore the matching backlog row and this ledger entry.

## MF-VF-071 — Draw semantic lock icon

- Added `assets/source/icons/lock.svg`, an original static 24×24 `currentColor` lock glyph with accessible `Lock` title. SHA-256: `45e2afd5d29d91053cdfa6c64a81c38dc6e2d8d42e8b36ba935e20f154ff8688`.
- Dependency `MF-VF-033` is implemented. Status: `implemented`; source inspection only. Per runner override, no validators, package-manager commands, tests, typecheck, build, rendering, or browser capture were run; host runner owns applicable checks. Light/dark/forced-colors appearance, 16/20/24px legibility, human review, and acceptance remain pending.
- Rollback: remove the SVG and restore the matching backlog row, TODO update, and this ledger entry.

## MF-VF-085 — Draw original Moonriot motif SVG

- Added ssets/source/skins/moonriot/motif.svg, an original accessible 96×96 angular directional shard with embedded geometry and currentColor; SHA-256: $hash.
- Dependency MF-VF-084 is implemented. Status: implemented; static source inspection only. Per runner override, no validators, package-manager commands, suites, typecheck, build, rendering, browser capture, or human review were run. Mono-size legibility, skin distinction, rights review, and acceptance remain pending.
- No commit created; host runner owns verification/checkpoint. Rollback: remove the SVG and restore the matching backlog/TODO/ledger entry.
# MF-VF-354 — Draw stage floodlight backdrop artwork concept

- Added `assets/source/creative-reference/r03/stage-light.svg`, an original geometric stage backdrop with abstract intersecting light beams. SHA-256: `EC890965FCA7D99E9DC223BDFD41BEB9743195376E8469486B4268AA6D30CBB6`.
- Dependency MF-VF-024 is implemented. Status: `implemented`; static source inspection only. No validators, package-manager commands, tests, typecheck, build, rendering, browser capture, or human review run per runner override. No consumer marks, performer imagery, lyrics, external resources, or third-party rights are included or claimed. Optical review, rights review, and acceptance remain pending.
- No commit created; host runner owns checks and checkpoint. Rollback: remove the SVG and restore the matching backlog/TODO/ledger evidence.

## MF-VF-349 — Check R02 heading/navigation contrast

- Added semantic R02 navigation to the deterministic `/lab/r02-fixture` page and a Playwright browser check for computed title/link contrast (4.5:1), hover/focus state, and visible keyboard focus.
- `git diff --check` exited 0. Browser execution, captures, source-image comparison, human review, and acceptance were not performed; runner override reserves applicable checks for the host runner. The fixture has no original reference backdrop, so scene parity is unclaimed.
- Status: `implemented`; no commit created. Rollback: remove the fixture navigation and browser test, restore the backlog/TODO update, and remove this entry.

## MF-VF-355 — Draw generic anonymous stage/crowd silhouettes

- Added `assets/source/creative-reference/r03/crowd.svg`, original abstract audience head-and-shoulder silhouettes with no identifiable people, external resources, scripts, or consumer marks. SHA-256: `EEC321E1E00A59199041A21B9B30A3BDCFCEBFBB481EBDA3B7574F6C03E6293C`.
- Dependency MF-VF-024 is implemented. Source inspection only; no validators, package-manager commands, suites, typecheck, build, rendering, browser capture, or human review run/claimed under runner override. Rights/optical review and acceptance remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore the MF-VF-355 backlog row and this ledger entry to planned.
# MF-VF-079 — Style Moonpunk table, form, and dialog recipes

- Updated `src/styles.css` with skin-scoped structural treatments for data tables, fields and controls, and dialogs. Shared component APIs/semantics and density remain unchanged.
- Dependency rows `MF-VF-072` and `MF-VF-078` are implemented. Status: `implemented`; source review only. No package-manager commands, suites, typecheck, build, validators, render, or browser capture run under runner override. Human visual review and acceptance remain pending.
- No commit created; host runner owns verification/checkpoint. Rollback: remove the MF-VF-079 CSS rules and restore this backlog/TODO/ledger evidence.

## MF-VF-087 — Draw original Moonriot hero illustration SVG

- Added `assets/source/skins/moonriot/hero.svg`, an original self-contained cut-paper split editorial landscape with embedded geometry and accessible title/description. No essential text or external assets are embedded.
- SHA-256: `3C144367A1ECC95320745F0268F08A1196846C952E24EAD373C424B44879AAD4`. Dependency MF-VF-084 is implemented. Status: `implemented`; source inspection only. No package-manager commands, validators, suites, typecheck, build, rendering, browser capture, or human review were run per runner override. Optical review and acceptance remain pending.
- No commit created; host runner owns verification and checkpoint. Rollback: remove the SVG and restore the MF-VF-087 backlog row, TODO update, and this ledger entry.
# MF-VF-356 — Define central performer slot separate from background

- Added `apps/moonframe/templates/visual-reference/r03-performer-slot.tsx` and `.module.css`. The component requires consumer-owned image `src` and descriptive `alt`, centers the image with `object-fit: contain`, and accepts an optional separate decorative backdrop hidden from assistive technology.
- SHA-256: TSX `147B97E8629D2679A441D227487B226437A86151A42269B64B385B77CF12BCCF`; CSS `FF1E621867D9A8124678466B0D4EB691213497F942F51FFAB1C35980F93EAB8A`.
- Dependency MF-VF-024 is implemented. Status: `implemented`; source inspection and `git diff --check` only. No package-manager commands, validators, test suites, typecheck, build, rendering, browser capture, rights review, or human review run/claimed under runner override. No performer imagery or rights are supplied or inferred.
- Backlog checkbox recount: 192/488 checked (implemented/captured), 296 unchecked. Counts do not indicate acceptance. No commit created; host runner owns verification and checkpoint. Rollback: remove the component and CSS module and restore the MF-VF-356 backlog row, TODO entry, and this ledger entry to planned.

## MF-VF-080 — Verify Moonpunk art-off and reduced-motion fallback

- Audited `apps/moonframe/app/(lab)/lab/lab.css` and the dashboard fixture structure. Decoration-off selectors target decorative glyphs, swatches, and marginalia; visible text labels, navigation controls, dashboard content, form fields, and actions remain. The shared `data-motion="reduced"` rule disables animation/transitions and smooth scrolling without suppressing state or focus styling.
- Dependencies MF-VF-074, MF-VF-075, and MF-VF-079 are implemented. Status: `implemented`; source review only. No package-manager commands, validators, suites, typecheck, build, rendering, browser capture, or human review run under runner override. Visual/accessibility verification and acceptance remain pending host runner.
- No commit created; host runner owns verification and checkpoint. Rollback: restore the MF-VF-080 backlog row and TODO/ledger evidence to planned.

## MF-VF-297 — R01 source import blocker

- The approved local archive /mnt/data/moonframe_m13_reference_originals.zip is absent (Test-Path returned False); the source PNG is not present in the checkout. Its expected SHA-256 is 31829877f5499480ef8ebbfd2e0b103016917216c3ac70a69d0595b2bf2efa04.
- Status changed to locked-external-approval. Resume requires owner-supplied original bytes matching the digest plus explicit review-use rights approval. No reuse or distribution rights are inferred.
- Dependency MF-VF-014 is implemented. No package-manager commands, tests, typecheck, build, or commit run/created per runner override. Rollback: restore the backlog row to planned and remove this ledger entry.
