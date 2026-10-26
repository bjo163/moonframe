# Frozen authentication preview specimen (MF-VF-275)

**Status:** `captured-structural`; **human visual reviewer:** `pending`. This documents an explicit sign-in simulation at `/lab/behavior?fixture=auth`. It demonstrates the form and local validation without authenticating a user, creating a session, or transmitting/storing credentials. It does not claim production authentication or human visual approval.

## Frozen fixture and behavior

Source of truth: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; browser coverage: `tests/browser/components.spec.js`. The route only renders the sign-in preview when the explicit `fixture=auth` query is present.

| Element | Contract |
|---|---|
| Workspace | Northstar Studio |
| Heading | Sign in to your workspace |
| Email field | Required email input; `autocomplete=email` |
| Password field | Required masked input; `autocomplete=current-password` |
| Remember control | Remember this device; unchecked initially |
| Submit | Sign in |
| Privacy boundary | Local preview only. Credentials are not sent or saved; no account or session is created. |
| Result | After valid local fields, a live status says the preview accepted the address and no account/session was created. The route stays on the fixture. |

The browser test checks empty required-field validity, rejects an invalid email, accepts a well-formed preview-only address/password, and asserts the deterministic status and unchanged route. The submit handler prevents native navigation and makes no network or persistence call. Screenshots are captured before entry, showing the blank ready-to-sign-in state.

## Capture matrix

Desktop 1440×960 CSS px; all captures use the same explicit auth-fixture route and `auth-preview-ready` state at frozen time 2026-10-25T12:00:00Z. Provenance sidecars record source fingerprint/commit, locale/timezone, loaded fonts, browser and PNG digest. PNGs and sidecars are ignored local artifacts; regenerate with `pnpm run test:browser`.

| Skin | Mode | Sign-in form capture | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-auth.png](../../../artifacts/skins/moonpunk-light-1440x960-auth.png) | `c0d030eb4c580122a5b301e7c0ef3fcd0a0138e9e2c864065ec79cae99160ca1` | `1ac3ab57ec6e` |
| moonpunk | dark | [moonpunk-dark-1440x960-auth.png](../../../artifacts/skins/moonpunk-dark-1440x960-auth.png) | `6b528d683568884681b1b1bd3bdf8c082d910e9adc8620458263a718be9650de` | `1ac3ab57ec6e` |
| moonriot | light | [moonriot-light-1440x960-auth.png](../../../artifacts/skins/moonriot-light-1440x960-auth.png) | `40c29c39a1e5ccd456a736af06cb32e8e4ab656cb4077d2a7b2794260716beb9` | `1ac3ab57ec6e` |
| moonriot | dark | [moonriot-dark-1440x960-auth.png](../../../artifacts/skins/moonriot-dark-1440x960-auth.png) | `ab2a467328514b71afb71ffaebbcd553ca852e5cbd11ca0c71958fb31190fed8` | `1ac3ab57ec6e` |
| moonzine | light | [moonzine-light-1440x960-auth.png](../../../artifacts/skins/moonzine-light-1440x960-auth.png) | `2d5fba719822694cb34c5270e02de2e23fc89797867b4513b83ce012e5c3041c` | `1ac3ab57ec6e` |
| moonzine | dark | [moonzine-dark-1440x960-auth.png](../../../artifacts/skins/moonzine-dark-1440x960-auth.png) | `f6bfbf39dc717dd041ebd323caadfdf5c2ec8947c4d7847ee7049f69d91c31e5` | `1ac3ab57ec6e` |
| moonhalftone | light | [moonhalftone-light-1440x960-auth.png](../../../artifacts/skins/moonhalftone-light-1440x960-auth.png) | `237f39e8d8ca225caad99d80f15222858fcaeb9408887c6936045b211b2aca58` | `1ac3ab57ec6e` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-auth.png](../../../artifacts/skins/moonhalftone-dark-1440x960-auth.png) | `6069885d66f611ac24a4fe0c7f86e0497d2706e858c6f3ab637a452d0b7681e1` | `1ac3ab57ec6e` |
| moonglitch | light | [moonglitch-light-1440x960-auth.png](../../../artifacts/skins/moonglitch-light-1440x960-auth.png) | `9fb88bb8b50195147721c73ca677110c7bd2578f9910835ef6fa77e91e65fd74` | `1ac3ab57ec6e` |
| moonglitch | dark | [moonglitch-dark-1440x960-auth.png](../../../artifacts/skins/moonglitch-dark-1440x960-auth.png) | `2c60ffa02a21b996e516ecd72b7bac0ecbccf595126a6fc4ddb7bbbad5c3ab0e` | `1ac3ab57ec6e` |
| moonsmash | light | [moonsmash-light-1440x960-auth.png](../../../artifacts/skins/moonsmash-light-1440x960-auth.png) | `bc39d1c481b5378683617d77db433012d6f567352e0c2037557c048d60b3c021` | `1ac3ab57ec6e` |
| moonsmash | dark | [moonsmash-dark-1440x960-auth.png](../../../artifacts/skins/moonsmash-dark-1440x960-auth.png) | `0dd8bd4d3368c73441403cfdc7bf2d2022b175361e0e365be07e9be0c69dea8e` | `1ac3ab57ec6e` |
| moonink | light | [moonink-light-1440x960-auth.png](../../../artifacts/skins/moonink-light-1440x960-auth.png) | `77be07b63044e08bfc1acec04292cf4a0f7727050225e5d4bec4d0ffab1d129c` | `1ac3ab57ec6e` |
| moonink | dark | [moonink-dark-1440x960-auth.png](../../../artifacts/skins/moonink-dark-1440x960-auth.png) | `ad140379d67756f83b28eb4d5517a0db511c8005b9e58f2640acb3456056c74c` | `1ac3ab57ec6e` |
| mooncrash | light | [mooncrash-light-1440x960-auth.png](../../../artifacts/skins/mooncrash-light-1440x960-auth.png) | `d756aecc7cf04cf72560a37ea5bf24e01a461ef67b9866e8b765894612f6833d` | `1ac3ab57ec6e` |
| mooncrash | dark | [mooncrash-dark-1440x960-auth.png](../../../artifacts/skins/mooncrash-dark-1440x960-auth.png) | `2a081500cb6b6b233b2a4369ce365d160bbed28ff52c894a95ecc6b377faf61c` | `1ac3ab57ec6e` |
| moonpanel | light | [moonpanel-light-1440x960-auth.png](../../../artifacts/skins/moonpanel-light-1440x960-auth.png) | `90bd746e40eb0cdeab935c1a04d0de8a2717f0558ca301096286f9c2d9c0e21b` | `1ac3ab57ec6e` |
| moonpanel | dark | [moonpanel-dark-1440x960-auth.png](../../../artifacts/skins/moonpanel-dark-1440x960-auth.png) | `7eb53fdefb8d45de450ca85d6e51937d9e6210b80aa9a5a4695d7f4882284748` | `1ac3ab57ec6e` |
| moonscrawl | light | [moonscrawl-light-1440x960-auth.png](../../../artifacts/skins/moonscrawl-light-1440x960-auth.png) | `0142b6e4ddfdf29d97a5a8109ab3e42c7ef6ae8d9d8b45dba3eb5781ccf17db5` | `1ac3ab57ec6e` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-auth.png](../../../artifacts/skins/moonscrawl-dark-1440x960-auth.png) | `537310da4d6e2ddb609ea5958bd4db170c7ec0be50202cf940931c7ab1ea7f64` | `1ac3ab57ec6e` |
| moonraw | light | [moonraw-light-1440x960-auth.png](../../../artifacts/skins/moonraw-light-1440x960-auth.png) | `82995a6bb2382063d7a60afe83c4c6f4e978d99e0c47752f78c7666553bed79b` | `1ac3ab57ec6e` |
| moonraw | dark | [moonraw-dark-1440x960-auth.png](../../../artifacts/skins/moonraw-dark-1440x960-auth.png) | `af1510f43da8f01f0dc5414aadb5f2a32968761e0cf5cf9bc6669dc238e88645` | `1ac3ab57ec6e` |
| moonchrome | light | [moonchrome-light-1440x960-auth.png](../../../artifacts/skins/moonchrome-light-1440x960-auth.png) | `8a1d60bd42719da0bb9c3497d637c242c50de24ed711832df769e39576f3b7a4` | `1ac3ab57ec6e` |
| moonchrome | dark | [moonchrome-dark-1440x960-auth.png](../../../artifacts/skins/moonchrome-dark-1440x960-auth.png) | `a41fb1cc716cb2b4733599a1dc0477a51c880a1b6c7536dff05d12374db41580` | `1ac3ab57ec6e` |
| classic | light | [classic-light-1440x960-auth.png](../../../artifacts/skins/classic-light-1440x960-auth.png) | `6d6e4aa0359f177c032ab26b6e8f13b614d2a705d13408677760dc631a8772cb` | `1ac3ab57ec6e` |
| classic | dark | [classic-dark-1440x960-auth.png](../../../artifacts/skins/classic-dark-1440x960-auth.png) | `0cebb1e8b5ed2d3817c675dd7b380683069adf3c7548f2c1999185671c79d4b5` | `1ac3ab57ec6e` |
| moonquest | light | [moonquest-light-1440x960-auth.png](../../../artifacts/skins/moonquest-light-1440x960-auth.png) | `bfd32e1b5c7bdfed08df2df1416d60d79cd8401ae9802e11e479211b318f064e` | `1ac3ab57ec6e` |
| moonquest | dark | [moonquest-dark-1440x960-auth.png](../../../artifacts/skins/moonquest-dark-1440x960-auth.png) | `f3c525af0a465df2199ab8e81f1d668b888aa81b44163f1aaa52feb06ed60700` | `1ac3ab57ec6e` |
| moonledger | light | [moonledger-light-1440x960-auth.png](../../../artifacts/skins/moonledger-light-1440x960-auth.png) | `0637dbcc8bca5c6057e77ca7f56956189758bab253978e4cf6a380511fa1321c` | `1ac3ab57ec6e` |
| moonledger | dark | [moonledger-dark-1440x960-auth.png](../../../artifacts/skins/moonledger-dark-1440x960-auth.png) | `b8b6731514e36d0b1aa3d036704aac340c80bb09e529519ff37d47443df14c0b` | `1ac3ab57ec6e` |

## Verification and review

- `pnpm check` — passed (contract validation, 13/13 runtime tests, typecheck and production build; 88 routes).
- `pnpm run test:browser` — **58/58 passed** at fixture commit `1ac3ab57ec6ec4dee47919335545f64814e6ffa8`; the sign-in matrix verifies form and simulated-submit behavior across all 30 skin/mode combinations.
- Capture audit — **30/30** PNG SHA-256 values match; all use one source commit/fingerprint, the explicit auth fixture, `auth-preview-ready`, 1440×960 and loaded fonts.
- `node scripts/verify-m13-handoff.mjs` and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings.
- Human visual review: pending. This simulated page is not a real authentication implementation.

Status is implemented as a frozen simulated-flow contract; reviewer and production-auth status remain unclaimed. Rollback: revert implementation commit(s) and the matching evidence/count commit.
