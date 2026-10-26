# Frozen compact enterprise operations specimen (MF-VF-277)

**Status:** `captured-structural`; **human visual reviewer:** `pending`. This freezes one dense service-operations table, its summary metrics and filters for comparison across 15 skins × light/dark mode. It verifies consistent data and filtering behavior, not pixel parity, production telemetry, or human visual approval.

## Frozen compact ERP data

Source of truth: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; per-skin/mode assertions and captures: `tests/browser/components.spec.js`. The explicit preview route is `/lab/behavior?fixture=enterprise`. All values are fixed demo data marked **OPERATIONS · DEMO DATA · 12:00 UTC**.

| Summary | Value |
|---|---:|
| Services | 6 |
| Healthy | 4 |
| Needs attention | 2 |
| Monthly spend | $2,840 |

| Service | Environment | Status | Region | Requests / 24h | p95 latency | Monthly cost |
|---|---|---|---|---:|---:|---:|
| Payments API | Production | Healthy | sin1 | 12.4k | 42 ms | $840 |
| Auth Service | Production | Healthy | iad1 | 8.2k | 39 ms | $610 |
| Events Worker | Production | Degraded | sfo1 | 22.1k | 116 ms | $490 |
| Customer Sync | Staging | Healthy | fra1 | 3.6k | 57 ms | $320 |
| Search Index | Production | Attention | syd1 | 18.8k | 203 ms | $390 |
| Audit Export | Staging | Healthy | sin1 | 1.2k | 64 ms | $190 |

**Caption:** Service inventory · refreshed 12:00 UTC. Default filters are all statuses, all regions, and empty search, showing **6 of 6 services**. Status filter `Degraded` returns Events Worker; region `sin1` returns Payments API and Audit Export; search `Search Index` returns that service. These fixed filter probes and all row values are asserted in every skin/mode case.

## Capture matrix

Desktop 1440×960 CSS px; full-page screenshots show the compact default table state and all six rows. Sidecars record the explicit fixture, `enterprise-default` state, frozen time, source fingerprint/commit, locale/timezone, loaded fonts and image hash. PNGs and sidecars are ignored local artifacts; regenerate with `pnpm run test:browser`.

| Skin | Mode | Enterprise table capture | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-enterprise.png](../../../artifacts/skins/moonpunk-light-1440x960-enterprise.png) | `f27652821e2e66c70987f502ca510d7aa371800966679fe0f221d870de915bb4` | `cc9a95d5c913` |
| moonpunk | dark | [moonpunk-dark-1440x960-enterprise.png](../../../artifacts/skins/moonpunk-dark-1440x960-enterprise.png) | `c81b6c74fc4f68743551412c1a1893ddb61d56a24e164b94acaf1b8a73116e1b` | `cc9a95d5c913` |
| moonriot | light | [moonriot-light-1440x960-enterprise.png](../../../artifacts/skins/moonriot-light-1440x960-enterprise.png) | `0965ab47f90d16ba1d2aa95b3a2f15a81d6b799423b751f1ec4bc408747b36f1` | `cc9a95d5c913` |
| moonriot | dark | [moonriot-dark-1440x960-enterprise.png](../../../artifacts/skins/moonriot-dark-1440x960-enterprise.png) | `89bb2f52a1caf29c2241dac6a2e4c42a3991e9b75df184c4e0522f5bc6746be4` | `cc9a95d5c913` |
| moonzine | light | [moonzine-light-1440x960-enterprise.png](../../../artifacts/skins/moonzine-light-1440x960-enterprise.png) | `1e8d396c090694ece2c676603672fea41f7fc753ed710dbba5535a8188315e2f` | `cc9a95d5c913` |
| moonzine | dark | [moonzine-dark-1440x960-enterprise.png](../../../artifacts/skins/moonzine-dark-1440x960-enterprise.png) | `0c7285b45b26a3bbe751dd5d1324225cf8a4693ca67e9384c4688f90d04c60f1` | `cc9a95d5c913` |
| moonhalftone | light | [moonhalftone-light-1440x960-enterprise.png](../../../artifacts/skins/moonhalftone-light-1440x960-enterprise.png) | `16047288ec401e6a6a4cedcd4c385148a0b94d0ca6c691fd1c3e95541c1cf496` | `cc9a95d5c913` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-enterprise.png](../../../artifacts/skins/moonhalftone-dark-1440x960-enterprise.png) | `deb4ce61c9eee479020e96bb5387eac8bb4a6f511c164ff7966b2fc47ccba5bd` | `cc9a95d5c913` |
| moonglitch | light | [moonglitch-light-1440x960-enterprise.png](../../../artifacts/skins/moonglitch-light-1440x960-enterprise.png) | `24cc2bada5e1e9fb46d30667dc7480047110e3fd170b70a15394509153cbcabc` | `cc9a95d5c913` |
| moonglitch | dark | [moonglitch-dark-1440x960-enterprise.png](../../../artifacts/skins/moonglitch-dark-1440x960-enterprise.png) | `856b898fe20ff2a8cc33e5df85719dcab287f020ba078852ed83749c38d32f33` | `cc9a95d5c913` |
| moonsmash | light | [moonsmash-light-1440x960-enterprise.png](../../../artifacts/skins/moonsmash-light-1440x960-enterprise.png) | `d2aa3f89a907b2876968e0a8812abd66128cb94f7628cc3ad1f765b9736bc6bb` | `cc9a95d5c913` |
| moonsmash | dark | [moonsmash-dark-1440x960-enterprise.png](../../../artifacts/skins/moonsmash-dark-1440x960-enterprise.png) | `92e53b60be99b10b30b6d4a845a973bdedcd64ad8288d499f823e46410d912a4` | `cc9a95d5c913` |
| moonink | light | [moonink-light-1440x960-enterprise.png](../../../artifacts/skins/moonink-light-1440x960-enterprise.png) | `5657c6f3c8a19b156eb06228919994f0ef4128b100e36826d7aa407d7ccae1d8` | `cc9a95d5c913` |
| moonink | dark | [moonink-dark-1440x960-enterprise.png](../../../artifacts/skins/moonink-dark-1440x960-enterprise.png) | `2b61a1fa83a01ae8886de813a31447d2fa6db43950ba69333c58f63e71257135` | `cc9a95d5c913` |
| mooncrash | light | [mooncrash-light-1440x960-enterprise.png](../../../artifacts/skins/mooncrash-light-1440x960-enterprise.png) | `5bf850c73a0f60dcd2ed300e6eebe24aee3b9d9c83632eb5c50cc4eb38cf18f4` | `cc9a95d5c913` |
| mooncrash | dark | [mooncrash-dark-1440x960-enterprise.png](../../../artifacts/skins/mooncrash-dark-1440x960-enterprise.png) | `1816da5187fa741fcbc964d084eec0c365509102bdf6a41ae983529ccda015ef` | `cc9a95d5c913` |
| moonpanel | light | [moonpanel-light-1440x960-enterprise.png](../../../artifacts/skins/moonpanel-light-1440x960-enterprise.png) | `9b5b84b7e19e7a2433f731b8e6f234e1bd4a42fe81c7f5bc20f91a6aa7827a18` | `cc9a95d5c913` |
| moonpanel | dark | [moonpanel-dark-1440x960-enterprise.png](../../../artifacts/skins/moonpanel-dark-1440x960-enterprise.png) | `a082d01d9de04087fb37a7f61b485cbfb6edb3e90f0edcad29a0c1d9346e125f` | `cc9a95d5c913` |
| moonscrawl | light | [moonscrawl-light-1440x960-enterprise.png](../../../artifacts/skins/moonscrawl-light-1440x960-enterprise.png) | `015c9c8d6606d76f00cee4496dcbbd5d8c9dc9800f52615d974914551ae855ae` | `cc9a95d5c913` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-enterprise.png](../../../artifacts/skins/moonscrawl-dark-1440x960-enterprise.png) | `6ab185a39288093a07b79525777de852bf58ef3db1762eeaa48b690db03fafaf` | `cc9a95d5c913` |
| moonraw | light | [moonraw-light-1440x960-enterprise.png](../../../artifacts/skins/moonraw-light-1440x960-enterprise.png) | `8eb18e9b23dc74499d63c07e0b2a36496d645b91f6c04b4df3b0973edc8b610f` | `cc9a95d5c913` |
| moonraw | dark | [moonraw-dark-1440x960-enterprise.png](../../../artifacts/skins/moonraw-dark-1440x960-enterprise.png) | `0e58fdda13af39f85fd100e70b075d2b96ab1483964f54a739580fad1c14abb7` | `cc9a95d5c913` |
| moonchrome | light | [moonchrome-light-1440x960-enterprise.png](../../../artifacts/skins/moonchrome-light-1440x960-enterprise.png) | `669314bd815199e3ded8fa601dfd6de2c109115b4f95ec0e7808db0ff7f99875` | `cc9a95d5c913` |
| moonchrome | dark | [moonchrome-dark-1440x960-enterprise.png](../../../artifacts/skins/moonchrome-dark-1440x960-enterprise.png) | `03fb232c5099895a3a24a6bafb005ca35ed5f17627e4862d139c652a19a35006` | `cc9a95d5c913` |
| classic | light | [classic-light-1440x960-enterprise.png](../../../artifacts/skins/classic-light-1440x960-enterprise.png) | `3697c33ff0e49fab82f489909ac5d3c21a206a39123d5e8f47624b206a2ff884` | `cc9a95d5c913` |
| classic | dark | [classic-dark-1440x960-enterprise.png](../../../artifacts/skins/classic-dark-1440x960-enterprise.png) | `09e5fdb50f684f7242950b01e11e32e494910ca421f2b86d49cecffd465c7a23` | `cc9a95d5c913` |
| moonquest | light | [moonquest-light-1440x960-enterprise.png](../../../artifacts/skins/moonquest-light-1440x960-enterprise.png) | `0f93387955f05d30badcfbe294af0377b7e7a27a1ff0de52bf89eae32a2ee3aa` | `cc9a95d5c913` |
| moonquest | dark | [moonquest-dark-1440x960-enterprise.png](../../../artifacts/skins/moonquest-dark-1440x960-enterprise.png) | `4bff3853cdc3de52fdac9b18adc48b824e737cef5a4c2c6687176b432df89612` | `cc9a95d5c913` |
| moonledger | light | [moonledger-light-1440x960-enterprise.png](../../../artifacts/skins/moonledger-light-1440x960-enterprise.png) | `0427ac56f0f03b9aa4448c54f31c0495bf198070b3639da8ba91fcec205da301` | `cc9a95d5c913` |
| moonledger | dark | [moonledger-dark-1440x960-enterprise.png](../../../artifacts/skins/moonledger-dark-1440x960-enterprise.png) | `6b55ef8f807e3ba7c2486840cbb1bf154bcfb1522fffd8988efa93b59334982d` | `cc9a95d5c913` |

## Verification and review

- `pnpm check` — passed: contract validation, 13/13 runtime tests, TypeScript and production build (88 routes).
- `pnpm run test:browser` — **60/60 passed** at fixture commit `cc9a95d5c9139dedba8a2d1b4347e69e364ae071`; all rows, summary metrics and status/region/search probes run across all skin/mode combinations.
- Capture audit — **30/30** PNG SHA-256 values match sidecars; shared source fingerprint/commit, enterprise fixture/default state, loaded fonts and 1440×960.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings.
- Human visual review: pending. Demo data is not production telemetry.

Status is implemented as a frozen data/filter contract; reviewer remains pending. Rollback: revert implementation commit and the matching evidence/count commit.
