# Frozen editorial article specimen (MF-VF-276)

**Status:** `captured-structural`; **human visual reviewer:** `pending`. This freezes one long-form editorial story and its illustration context across 15 skins × light/dark mode. It verifies stable content and semantic typography structure; it does not claim pixel parity, literary review or human visual approval.

## Frozen article and image context

Source of truth: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; per-skin/mode browser assertions and captures: `tests/browser/components.spec.js`. The explicit preview route is `/lab/behavior?fixture=article`.

| Element | Frozen value |
|---|---|
| Section label | Field notes · Planning |
| Headline | Make room for the work that matters |
| Deck | A gentler planning rhythm can make ambitious work easier to begin, easier to share, and easier to finish. |
| Byline | Maya Chen |
| Published | October 25, 2026 (`2026-10-25`) |
| Reading time | 8 min read |
| Hero context | Abstract illustration of a glowing moon above a quiet horizon, with an orbiting path and small stars |
| Caption | A clear horizon makes the next step easier to see. |
| Section headings | Start with the next honest step; Leave space for the unexpected |
| Pull quote | “A good plan creates room to pay attention.” |

The original illustration is drawn from CSS gradients and Moonframe surface/accent tokens; it is not an external or generated bitmap asset. Its semantic image description and article copy stay fixed while skin tokens can change its visual treatment. Browser assertions check the same headings, byline/date, deck, caption, image description, section order and pull quote in all 30 cases.

## Capture matrix

Desktop 1440×960 CSS px; each full-page capture uses the same explicit route and `article-default` state at frozen time 2026-10-25T12:00:00Z. Sidecars record source fingerprint/commit, fixture, locale/timezone, loaded font status, browser and PNG SHA-256. PNGs and sidecars are ignored local artifacts; regenerate with `pnpm run test:browser`.

| Skin | Mode | Article capture | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-article.png](../../../artifacts/skins/moonpunk-light-1440x960-article.png) | `70babb0c3f9c5dd3773ef7d55c6d06f7d4269f757aa37c7d41e8cb80bdfd0052` | `b71b11376c42` |
| moonpunk | dark | [moonpunk-dark-1440x960-article.png](../../../artifacts/skins/moonpunk-dark-1440x960-article.png) | `aa865ae86fb6d03fadf45181f1ae0e1a4e4d7edaec636d5b59bade98bb2fd317` | `b71b11376c42` |
| moonriot | light | [moonriot-light-1440x960-article.png](../../../artifacts/skins/moonriot-light-1440x960-article.png) | `9803e7f10fd4404eab9ab0b105c01ab78a05f8075b13a9b117be5cd7e3491aed` | `b71b11376c42` |
| moonriot | dark | [moonriot-dark-1440x960-article.png](../../../artifacts/skins/moonriot-dark-1440x960-article.png) | `98a80fded3e983ed65ccef83b40651f39c9c63d291a05155240a9a850dc13fcb` | `b71b11376c42` |
| moonzine | light | [moonzine-light-1440x960-article.png](../../../artifacts/skins/moonzine-light-1440x960-article.png) | `dbc824a18bd098429cfa5953371582cea74d419611a590cc1941ff489a9e00c7` | `b71b11376c42` |
| moonzine | dark | [moonzine-dark-1440x960-article.png](../../../artifacts/skins/moonzine-dark-1440x960-article.png) | `0178012f51ce5371171656f511071cf198afdef414abf7b9ddedf834fc94b5a1` | `b71b11376c42` |
| moonhalftone | light | [moonhalftone-light-1440x960-article.png](../../../artifacts/skins/moonhalftone-light-1440x960-article.png) | `8f2c5a757e8d2ba0a11ab37744c2458d56eb761fc3daac290300695f87ed5669` | `b71b11376c42` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-article.png](../../../artifacts/skins/moonhalftone-dark-1440x960-article.png) | `fbbb6c132f8f6515186407cde99321bec8631ae628f2be53529534a04c855565` | `b71b11376c42` |
| moonglitch | light | [moonglitch-light-1440x960-article.png](../../../artifacts/skins/moonglitch-light-1440x960-article.png) | `fef8bde5a9f4474f1540e5b38f38069e9470c9453c35c270929bedbfa6735449` | `b71b11376c42` |
| moonglitch | dark | [moonglitch-dark-1440x960-article.png](../../../artifacts/skins/moonglitch-dark-1440x960-article.png) | `0748c48f5f9399f0d6e20f7f7ec8b3d0c89abcab9bc00db484a4326870df26e0` | `b71b11376c42` |
| moonsmash | light | [moonsmash-light-1440x960-article.png](../../../artifacts/skins/moonsmash-light-1440x960-article.png) | `e4989b1932f2105ed9047a7d1db9ace4f9cd7b60d34c6614b4fb215307947206` | `b71b11376c42` |
| moonsmash | dark | [moonsmash-dark-1440x960-article.png](../../../artifacts/skins/moonsmash-dark-1440x960-article.png) | `e08ddcee4cb94dafca7fc104110a39750078be5bac4380988568233c58f71ae0` | `b71b11376c42` |
| moonink | light | [moonink-light-1440x960-article.png](../../../artifacts/skins/moonink-light-1440x960-article.png) | `43f65a184932465e3c3ac2a6cc1fc15933cb93d95b63432bef7fa0336d713c09` | `b71b11376c42` |
| moonink | dark | [moonink-dark-1440x960-article.png](../../../artifacts/skins/moonink-dark-1440x960-article.png) | `45ab97ef940caeb8daa9acc0e3db52bad8faedb4de5cef5d986d14604349979c` | `b71b11376c42` |
| mooncrash | light | [mooncrash-light-1440x960-article.png](../../../artifacts/skins/mooncrash-light-1440x960-article.png) | `174b5db949bb3f5305ab46ac1f4e1c8ac8d07ee5c589f048a6fa41a15236514f` | `b71b11376c42` |
| mooncrash | dark | [mooncrash-dark-1440x960-article.png](../../../artifacts/skins/mooncrash-dark-1440x960-article.png) | `65678e2ae06977291fef289feada4c94f5284c64d8f331a058abbe8c9399209a` | `b71b11376c42` |
| moonpanel | light | [moonpanel-light-1440x960-article.png](../../../artifacts/skins/moonpanel-light-1440x960-article.png) | `169f94ea35ecae9f915a5ccef30dcf4874b69da4a63788a2ef9741450f60325c` | `b71b11376c42` |
| moonpanel | dark | [moonpanel-dark-1440x960-article.png](../../../artifacts/skins/moonpanel-dark-1440x960-article.png) | `6494f99bae1606280a77d8630304767947c6a9a3dbf5bc7d2818323f2b8c206c` | `b71b11376c42` |
| moonscrawl | light | [moonscrawl-light-1440x960-article.png](../../../artifacts/skins/moonscrawl-light-1440x960-article.png) | `76a6753033e861d20d8b83dcc8c57f1c2001d2b0de1297a3fa500bd41ccffb5e` | `b71b11376c42` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-article.png](../../../artifacts/skins/moonscrawl-dark-1440x960-article.png) | `74168979d65d7726840e89a3c28a0a3dfe1cba6c0b365f9fb4bddb3532519636` | `b71b11376c42` |
| moonraw | light | [moonraw-light-1440x960-article.png](../../../artifacts/skins/moonraw-light-1440x960-article.png) | `36622c935517f44d6f0eaa34e76c9fe18ce0522f65795d11f10a4f95a79ef383` | `b71b11376c42` |
| moonraw | dark | [moonraw-dark-1440x960-article.png](../../../artifacts/skins/moonraw-dark-1440x960-article.png) | `f6cb2efec12e1e8e9f87a0f5a89b242f19f586cfcfe6754385a526bb427b2cce` | `b71b11376c42` |
| moonchrome | light | [moonchrome-light-1440x960-article.png](../../../artifacts/skins/moonchrome-light-1440x960-article.png) | `d2234ae668a99b08336fec8754c8783a5b9853f07ce89a601fe0c9c5e84c1e53` | `b71b11376c42` |
| moonchrome | dark | [moonchrome-dark-1440x960-article.png](../../../artifacts/skins/moonchrome-dark-1440x960-article.png) | `0ca5be72cb7e568e4934cbb946d44f75862a5b102e0c04fcf312c56a19a55cc9` | `b71b11376c42` |
| classic | light | [classic-light-1440x960-article.png](../../../artifacts/skins/classic-light-1440x960-article.png) | `63d22bb7ae4f7aa32ca768df7f9fc4726fd23535ae7a78145ba3a4b73de4610b` | `b71b11376c42` |
| classic | dark | [classic-dark-1440x960-article.png](../../../artifacts/skins/classic-dark-1440x960-article.png) | `13d092648670537b034833e85d1c6b0ba1852f546b68b2104c12348d28aaef26` | `b71b11376c42` |
| moonquest | light | [moonquest-light-1440x960-article.png](../../../artifacts/skins/moonquest-light-1440x960-article.png) | `b90df6c1291a524d479ed5e7cfcbe9785732c2889d25bc98928aea99cf5f75be` | `b71b11376c42` |
| moonquest | dark | [moonquest-dark-1440x960-article.png](../../../artifacts/skins/moonquest-dark-1440x960-article.png) | `23f671a1a1bc1c2e38dbfcac4e1f9e6ee0e0ec850d8e88fa0bcf41096705846a` | `b71b11376c42` |
| moonledger | light | [moonledger-light-1440x960-article.png](../../../artifacts/skins/moonledger-light-1440x960-article.png) | `e48fdf88a158da5932bdecefe2d9ac450d75e6181a9ccd2ca6271e8ac79875b9` | `b71b11376c42` |
| moonledger | dark | [moonledger-dark-1440x960-article.png](../../../artifacts/skins/moonledger-dark-1440x960-article.png) | `e81a9554fb55bea147bcdc2891f3e2cdde80007cabfd549b7dc961c04c439c4c` | `b71b11376c42` |

## Verification and review

- `pnpm check` — passed: contract validation, 13/13 runtime tests, TypeScript and production build (88 routes).
- `pnpm run test:browser` — **59/59 passed** at fixture commit `b71b11376c42a734444b5927a3cb945bd3cfa315`; article content, image context and typography hooks are asserted in all 30 skin/mode combinations.
- Capture audit — **30/30** hashes match sidecars; all share one source commit/fingerprint, the explicit article route, `article-default`, 1440×960 and loaded fonts.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings.
- Human visual review: pending. No editorial quality or cross-skin visual parity verdict is claimed.

Status is implemented as a frozen content and image-context contract; visual review remains pending. Rollback: revert implementation commit and the matching evidence/count commit.
