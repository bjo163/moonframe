# Frozen sidebar and header navigation specimen (MF-VF-274)

**Status:** `captured-structural`; **human visual reviewer:** `pending`. This freezes the workspace shell navigation and breadcrumb behavior on the deterministic `/lab` specimen across 15 skins × light/dark mode. It documents stable information architecture and active-page indication; it does not claim pixel parity or human approval.

## Frozen shell and route behavior

Source of truth: `apps/moonframe/app/(lab)/lab/page.tsx`; per-skin/mode browser assertions: `tests/browser/skins.spec.js`. Each capture starts at `/lab` with the Overview route active.

- **Sidebar landmark:** `Workspace and skin navigation`, with the Moonframe home link, Orbit Studio workspace identity, `Main navigation`, skin chooser and Alex Lane profile.
- **Main navigation:** exactly two items in order, **Overview** and **Components**. Overview is active initially. Selecting Components moves `aria-current="page"` to Components and updates the header breadcrumb to **Workspace / Components**; returning to Overview restores both its active state and **Workspace / Overview** breadcrumb.
- **Header:** workspace breadcrumb, current skin badge, `v0.1 preview` label and Alex Lane avatar. Its placement and content are captured as part of the same shell fixture for each skin and mode.
- **Workspace section navigation:** the nested **Overview**, **Projects**, **Tasks**, **Reports**, **Settings** controls retain their order and move the page-current state when selected; the browser probe returns to Overview before capture.

The test verifies shell navigation order, selected-state transfer, breadcrumb updates and return-to-Overview for every skin/mode case. It then checks the same dashboard fixture and writes that default-state capture.

## Capture matrix

Desktop 1440×960 CSS px. Sidecars record the shared `/lab` fixture, locale/timezone, loaded font status, source fingerprint/commit and PNG SHA-256. These are full-page default Overview captures containing the sidebar and header. The PNGs and sidecars are ignored local artifacts; regenerate with `pnpm run test:browser`.

| Skin | Mode | Sidebar/header capture | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-default.png](../../../artifacts/skins/moonpunk-light-1440x960-default.png) | `38addd1b1df315a65d53a654403a185ceea6ad29c2d0e473861d2ed30fb498b1` | `4377daba041b` |
| moonpunk | dark | [moonpunk-dark-1440x960-default.png](../../../artifacts/skins/moonpunk-dark-1440x960-default.png) | `7f634577b669086e7a205b1d69794c70685267d8eeb83633159a494cde4a57b4` | `4377daba041b` |
| moonriot | light | [moonriot-light-1440x960-default.png](../../../artifacts/skins/moonriot-light-1440x960-default.png) | `eb4e0c80b9c0e0e61830173c16d9e8d1285807b970cd42d17098aa7194638dde` | `4377daba041b` |
| moonriot | dark | [moonriot-dark-1440x960-default.png](../../../artifacts/skins/moonriot-dark-1440x960-default.png) | `a23ab76eb83283cbfdb74efa5550fbf522981413a56c8ae4b01923c23ca1106f` | `4377daba041b` |
| moonzine | light | [moonzine-light-1440x960-default.png](../../../artifacts/skins/moonzine-light-1440x960-default.png) | `ebbc1ca674ad5ea7773b62222547a55a26399d4da3379b0aeed52685f56f6a7c` | `4377daba041b` |
| moonzine | dark | [moonzine-dark-1440x960-default.png](../../../artifacts/skins/moonzine-dark-1440x960-default.png) | `3013aa05f2a1753e2c7a255a5dc65388e75cb101a44d9ed73ca12b0445dcea13` | `4377daba041b` |
| moonhalftone | light | [moonhalftone-light-1440x960-default.png](../../../artifacts/skins/moonhalftone-light-1440x960-default.png) | `ee0d14c624ea1362121c66dfbf4de67f6551cc38241b7d7d9f5cd43786007992` | `4377daba041b` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-default.png](../../../artifacts/skins/moonhalftone-dark-1440x960-default.png) | `ff232e9101af346aed5c7ebaa701ce0830d6965210b760a0a90509a315f11950` | `4377daba041b` |
| moonglitch | light | [moonglitch-light-1440x960-default.png](../../../artifacts/skins/moonglitch-light-1440x960-default.png) | `b53a6c6515ec00ceb5fa1065a8747f9dc7bef7a18e215a38734cbee57adf6c73` | `4377daba041b` |
| moonglitch | dark | [moonglitch-dark-1440x960-default.png](../../../artifacts/skins/moonglitch-dark-1440x960-default.png) | `fe277a908f4fa0761ff89e34b19190d13a1b2bc9aa6f66c88ccd74789ebb4034` | `4377daba041b` |
| moonsmash | light | [moonsmash-light-1440x960-default.png](../../../artifacts/skins/moonsmash-light-1440x960-default.png) | `54ef22ac454667e3993089eb0962f66bffc952b8af49d4d21eb220a472f62305` | `4377daba041b` |
| moonsmash | dark | [moonsmash-dark-1440x960-default.png](../../../artifacts/skins/moonsmash-dark-1440x960-default.png) | `949c353b3a131d1bf1202980213a8640541a4b015be46991ddf25d6669bcb0df` | `4377daba041b` |
| moonink | light | [moonink-light-1440x960-default.png](../../../artifacts/skins/moonink-light-1440x960-default.png) | `555467bc6fb353f8d9203f7633deed3df4be35b7b166686dcadaf0f5f6e68063` | `4377daba041b` |
| moonink | dark | [moonink-dark-1440x960-default.png](../../../artifacts/skins/moonink-dark-1440x960-default.png) | `ccf23947d589bb379388757b5ddda06596ccda7fdd7e8d8c24b2c9e977118db9` | `4377daba041b` |
| mooncrash | light | [mooncrash-light-1440x960-default.png](../../../artifacts/skins/mooncrash-light-1440x960-default.png) | `ce72500abfca85fb2cf65b6f69b6fc24c72d99e1a7545fc8761c283f76c2d816` | `4377daba041b` |
| mooncrash | dark | [mooncrash-dark-1440x960-default.png](../../../artifacts/skins/mooncrash-dark-1440x960-default.png) | `73c566321b54742c8d18362f4f12da661c8ba669d82b358b3947319bd192092e` | `4377daba041b` |
| moonpanel | light | [moonpanel-light-1440x960-default.png](../../../artifacts/skins/moonpanel-light-1440x960-default.png) | `76cbb0e2e1116f989b266ddf424c60022e3d578b12916af54c344bce72ca6c08` | `4377daba041b` |
| moonpanel | dark | [moonpanel-dark-1440x960-default.png](../../../artifacts/skins/moonpanel-dark-1440x960-default.png) | `61e25235ced93384e6e9d95d3003a8bc8703604ef58a6318be38bbd173f7f1ce` | `4377daba041b` |
| moonscrawl | light | [moonscrawl-light-1440x960-default.png](../../../artifacts/skins/moonscrawl-light-1440x960-default.png) | `93bd51792c277207ba0c6e0f268d31b9958e7fceb9509c0d9a5e53474e7f0584` | `4377daba041b` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-default.png](../../../artifacts/skins/moonscrawl-dark-1440x960-default.png) | `5d803280834c0a36f9383df24e9a6821c7ac88ab8a27b758941349258d39d36f` | `4377daba041b` |
| moonraw | light | [moonraw-light-1440x960-default.png](../../../artifacts/skins/moonraw-light-1440x960-default.png) | `7999bfc9966326485ec155413615c0e305e9f107653e2b7b41bc9235475987da` | `4377daba041b` |
| moonraw | dark | [moonraw-dark-1440x960-default.png](../../../artifacts/skins/moonraw-dark-1440x960-default.png) | `f1923b5da2cfc271d8b09e7b45667140307b960e936eefc8ebfdef02cbe5ca17` | `4377daba041b` |
| moonchrome | light | [moonchrome-light-1440x960-default.png](../../../artifacts/skins/moonchrome-light-1440x960-default.png) | `0817b93ba3ee3deda3c331d40f1fe9349f4dae7d7d04cada7df099774e4ab57b` | `4377daba041b` |
| moonchrome | dark | [moonchrome-dark-1440x960-default.png](../../../artifacts/skins/moonchrome-dark-1440x960-default.png) | `ff588d463b51a1589461bdc9641c07a58e9b81452efb4874269940ab39d1a8ca` | `4377daba041b` |
| classic | light | [classic-light-1440x960-default.png](../../../artifacts/skins/classic-light-1440x960-default.png) | `581b07281f49b5061867f520b1fe3b17f0a1f16ae47f76b1bf565b04b7b6979a` | `4377daba041b` |
| classic | dark | [classic-dark-1440x960-default.png](../../../artifacts/skins/classic-dark-1440x960-default.png) | `c4812192b1664dd5844ca6ed2c14f897f2778dda689b00ffc57f1c29d647503e` | `4377daba041b` |
| moonquest | light | [moonquest-light-1440x960-default.png](../../../artifacts/skins/moonquest-light-1440x960-default.png) | `145cb606c6e22fdba0561a4dd69999f0724e173967389995fda8c0a620b96e6f` | `4377daba041b` |
| moonquest | dark | [moonquest-dark-1440x960-default.png](../../../artifacts/skins/moonquest-dark-1440x960-default.png) | `bde09ff88d8e56e1349b6045ea21b85f9882c4598fd77be0199332333705aca9` | `4377daba041b` |
| moonledger | light | [moonledger-light-1440x960-default.png](../../../artifacts/skins/moonledger-light-1440x960-default.png) | `5caa3da7051174e2b4eb3d93e2e80e596e0ab6bb20f353de92c502e53d310247` | `4377daba041b` |
| moonledger | dark | [moonledger-dark-1440x960-default.png](../../../artifacts/skins/moonledger-dark-1440x960-default.png) | `f3ec36136d2de53aaecae3f6a7d477d1ebff98be20a317eb798a9ee3530ff7e5` | `4377daba041b` |

## Verification and review

- `pnpm run test:browser` — **57/57 passed** at implementation commit `4377daba041b9824b5b0882814a20219c06f789b`; sidebar/header assertions execute in all 30 skin/mode cases.
- Capture audit — **30/30** default captures match their sidecar SHA-256; all share one source fingerprint/commit, `/lab` fixture, 1440×960 viewport and loaded fonts.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed. The handoff validator retains existing SFX playback-truth and standalone LICENSE warnings.
- Human visual review: pending; no visual approval is implied.

Status is implemented as a frozen navigation/content contract; visual review remains pending. Rollback: revert the implementation commit and its matching evidence/count commit.
