# Frozen dialog and popover specimen (MF-VF-273)

**Status:** `captured-structural`; **human visual reviewer:** `pending`. This specimen freezes the completed-task archive dialog and the Quick help popover in the deterministic behavior lab. It records identical interaction and focus behavior across 15 skins × light/dark mode. It does not claim pixel parity, accessibility conformance, or human approval.

## Frozen fixture and interaction

Source of truth: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; browser matrix: `tests/browser/components.spec.js`. The fixture route is `/lab/behavior?fixture=archive-task`; its completed row is **T-1045 · Verify scheduled export · Mateo Silva · Complete**.

The archive dialog opens with the accessible name **Archive completed task?**, describes that “Verify scheduled export” is complete and archived tasks are available in project history, and exposes **Keep task** and **Archive task** actions. For the focus-return assertion, the test closes the query-opened initial dialog, opens it from its actual **Archive task T-1045** trigger, and verifies Escape closes it and restores focus to that trigger. Reopening and choosing **Keep task** also closes the dialog and returns focus without archiving the row.

After the dialog interaction, each skin/mode case opens **Quick help**, verifies **Popover body copy**, presses Escape, and verifies the popover closes and focus returns to **Open popover**. The PNG matrix captures the archive dialog open; popover behavior is interaction-tested for every matrix entry and is not separately screenshot-captured.

## Capture matrix

Desktop 1440×960 CSS px, frozen time 2026-10-25T12:00:00Z. Each provenance sidecar records the same source fingerprint, commit, locale/timezone, fixture, open-dialog state, loaded font status, browser version, and image SHA-256. PNGs and sidecars are generated local artifacts under the ignored `artifacts/` directory; regenerate with `pnpm run test:browser`.

| Skin | Mode | Open-dialog screenshot | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonpunk-light-1440x960-archive-dialog.png) | `4a6dd291dd77d5175b0b0b47133c5ed970c311febd04b3442aa199f861f6975b` | `c9e221838c72` |
| moonpunk | dark | [moonpunk-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonpunk-dark-1440x960-archive-dialog.png) | `78bf276ea6aa4d03285775a11e5ae1f1c9373da8435a67f179288b7726fcaf2d` | `c9e221838c72` |
| moonriot | light | [moonriot-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonriot-light-1440x960-archive-dialog.png) | `054237d863feaf91ecd6afaff3b7c164083c5f62a5aac94c72a837c03117a523` | `c9e221838c72` |
| moonriot | dark | [moonriot-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonriot-dark-1440x960-archive-dialog.png) | `456b9a2bd2a91fc8c5e2739eb4998ee49d88018e8e134d791607035f9c969e21` | `c9e221838c72` |
| moonzine | light | [moonzine-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonzine-light-1440x960-archive-dialog.png) | `0b6f050f9865c5480a3b78e2df94f3c44406afabf0928c684f103d5d53fed280` | `c9e221838c72` |
| moonzine | dark | [moonzine-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonzine-dark-1440x960-archive-dialog.png) | `770ddd0cd2224638a30d2a1ef7b78c04ff2f2d05b7cd4fd7f052a4d52b89d3fe` | `c9e221838c72` |
| moonhalftone | light | [moonhalftone-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonhalftone-light-1440x960-archive-dialog.png) | `003a5e75de7dbd01b3de8609745f0fcf1f1cb8b01f4d915f64a392f6964f2dc6` | `c9e221838c72` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonhalftone-dark-1440x960-archive-dialog.png) | `91acfdad4013958109b5c7e1ff3c52f834eb53f3e1deff20886844747df8195b` | `c9e221838c72` |
| moonglitch | light | [moonglitch-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonglitch-light-1440x960-archive-dialog.png) | `927be57876a7bd86fa558668f9d274732e7f54f420f93d9ad9eed45dce477651` | `c9e221838c72` |
| moonglitch | dark | [moonglitch-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonglitch-dark-1440x960-archive-dialog.png) | `8c406012f8860f010e0f54ed26f3a2d91cb5d378541b313d478c77d52589ef1a` | `c9e221838c72` |
| moonsmash | light | [moonsmash-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonsmash-light-1440x960-archive-dialog.png) | `1a38f06f898c36c637035d933efa125f4c8b42c6bb00b4cc6a4e4b2b57e3fc55` | `c9e221838c72` |
| moonsmash | dark | [moonsmash-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonsmash-dark-1440x960-archive-dialog.png) | `1fa399ba53d5d3a8fb414477f9c280a97443e1be9ab8159e3a0e930a1e45f1b8` | `c9e221838c72` |
| moonink | light | [moonink-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonink-light-1440x960-archive-dialog.png) | `58ecc229d2133467998ce286f5fa98391bb0359d28054661a43b1a7bebfe9013` | `c9e221838c72` |
| moonink | dark | [moonink-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonink-dark-1440x960-archive-dialog.png) | `8108960cdaa8b64126ce731bc8d8f13248cf181097f34f79784f97a27cf639b2` | `c9e221838c72` |
| mooncrash | light | [mooncrash-light-1440x960-archive-dialog.png](../../../artifacts/skins/mooncrash-light-1440x960-archive-dialog.png) | `694c91dc83eb757f534c44c5e48b5c2a0810013daa39ca228454e5d95d2fde21` | `c9e221838c72` |
| mooncrash | dark | [mooncrash-dark-1440x960-archive-dialog.png](../../../artifacts/skins/mooncrash-dark-1440x960-archive-dialog.png) | `50d3a4458abbd299b86103f91f66dbf88ba15f336abd728873f7f4e7c57fd311` | `c9e221838c72` |
| moonpanel | light | [moonpanel-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonpanel-light-1440x960-archive-dialog.png) | `8b359f75653042f01330080cd4de24b1feaf4d27dfbb07a7c69bcba9c6b57995` | `c9e221838c72` |
| moonpanel | dark | [moonpanel-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonpanel-dark-1440x960-archive-dialog.png) | `f7b6b8827aaf5501f1e19f00f9ca5c349a2eac588ae9bb7d6b031b3d29886bc7` | `c9e221838c72` |
| moonscrawl | light | [moonscrawl-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonscrawl-light-1440x960-archive-dialog.png) | `beeac53b38cbbaab923fbfa31531ddca8259e673b2a59b56a01e07cdb68609d4` | `c9e221838c72` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonscrawl-dark-1440x960-archive-dialog.png) | `a43b1053dc9b2ab5d3d3c7bdfbf3f60083c798a2ae3e6d9693edc75c32f3580c` | `c9e221838c72` |
| moonraw | light | [moonraw-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonraw-light-1440x960-archive-dialog.png) | `eaee9b9fddd0e9ab9fbe041f3c610c1da2baf57d84bdfdf7dc0df02515e75868` | `c9e221838c72` |
| moonraw | dark | [moonraw-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonraw-dark-1440x960-archive-dialog.png) | `f7d966553f2231bfb7ad656347e079069f7c08e302550069d3b195a9320dae53` | `c9e221838c72` |
| moonchrome | light | [moonchrome-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonchrome-light-1440x960-archive-dialog.png) | `61010a49e1b71482beb3bd7dc2297e88427ac71f56a96e83b75908a343c1b398` | `c9e221838c72` |
| moonchrome | dark | [moonchrome-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonchrome-dark-1440x960-archive-dialog.png) | `d0156eb28a9aecfd39d612e4d5331a2dbcafe6f3129f744341ea666afb404ebc` | `c9e221838c72` |
| classic | light | [classic-light-1440x960-archive-dialog.png](../../../artifacts/skins/classic-light-1440x960-archive-dialog.png) | `44f6034219b58a0d334245427ae2fb353abf0eeacaf5f3d9311952ecc2081298` | `c9e221838c72` |
| classic | dark | [classic-dark-1440x960-archive-dialog.png](../../../artifacts/skins/classic-dark-1440x960-archive-dialog.png) | `772a3fa936d6d272d1c65bdf6c76c3a2090cbac9aa2fd8a1cfe18641d970004b` | `c9e221838c72` |
| moonquest | light | [moonquest-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonquest-light-1440x960-archive-dialog.png) | `92c3a72b5536d9f4891279426f05efc47c54de463dc8d382e732af26a91b7f1a` | `c9e221838c72` |
| moonquest | dark | [moonquest-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonquest-dark-1440x960-archive-dialog.png) | `7ce29427c696527476fa31bd42185a81d6c2b3ca224d4706d44a873307f5cde9` | `c9e221838c72` |
| moonledger | light | [moonledger-light-1440x960-archive-dialog.png](../../../artifacts/skins/moonledger-light-1440x960-archive-dialog.png) | `804f4943440556c6757d5f2d86b9cab98178c6787bf52e7ec25902d3498ab6e8` | `c9e221838c72` |
| moonledger | dark | [moonledger-dark-1440x960-archive-dialog.png](../../../artifacts/skins/moonledger-dark-1440x960-archive-dialog.png) | `b7392e890092b2a187d7c4ddcaf48ad3650aa25ef18d98b032e88d0c6b392dfe` | `c9e221838c72` |

## Verification and review

- `pnpm run test:browser` — **57/57 passed** at source commit `c9e221838c7212ec5c269dc31b012938e4ce525b`; the matrix test asserts dialog copy/actions, Escape focus restoration, Keep task close, and popover Escape/focus restoration for all 30 skin/mode combinations.
- Capture audit — **30/30** PNG hashes match their sidecars; one shared source fingerprint and source commit; every sidecar records `archive-dialog-open`, `1440x960`, and loaded fonts.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed (handoff retains its existing SFX playback-truth and standalone LICENSE warnings).
- Reviewer: pending. The structural captures and automated interaction results do not provide a human visual verdict.

Status is implemented as a frozen content/interaction contract; visual review remains pending. Rollback: revert the implementation commit and this evidence/count commit.
