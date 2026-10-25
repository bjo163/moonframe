# Auth & Security UI — QA and acceptance plan

**2026-10-25:** specification only. No React package, actual provider, browser harness or penetration testing. [Existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider matrix](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json), [threat model](../../contracts/moonframe-auth-threat-model-v0.1.json), [visual matrix](../../contracts/moonframe-auth-skin-coverage-v0.1.json).

## Evidence layers

| Level | Expected evidence | Currently |
|---|---|---|
| Contract structure | Unique flow IDs mapped to 26 known auth block IDs/17 auth template IDs, allowed states and typed events, 6 providers × 14 features, 20 threat scenarios, 240 pending visual cells, fixtures | Structural checks planned; no executable auth implementation |
| Native form | Labels, required/error text, `autocomplete` semantics, OTP paste, password reveal accessibility | Not run |
| Flow interaction | Single submit intent; expiry, cancel, retry, rate-limit, server-confirmed success, stale callback ignored | Not run |
| Auth integration | Consumer/provider tests for callback state/nonce/issuer, safe redirect destinations, passkey challenge verification, session revocation, tenant authorization | Not run; OUTSIDE Moonframe core |
| Privacy | Representative synthetic credentials absent from logs/analytics/URLs/DOM except intentional transient form inputs; redact error envelope | Not run |
| Keyboard + AT | Enter submit once; focus first invalid; dialog focus/return; high contrast; VoiceOver/NVDA; RTL and long localized copy | Not run |
| Visual parity | 8 existing auth-page specimens × 30 Light/Dark combinations; first four divergent skins then all variants | All 240 not-rendered, 0 passed |
| Security review | Server controls verified by security owner, threat residual risks assessed | Not performed |

## Risk-based fixtures and blockers

For future synthetic consumer integration, cover sign-in/recovery generic account-neutral errors, wrong/expired code, passkey unsupported/cancelled, provider unavailable, MFA step-up, user cancel, rate-limit retryAt, old callback interaction ID, organization change and reauthentication. Ensure UI cannot show confirmed operation before trusted provider response. Authentication backend validates protocol and authorization independently.

Important errors must be readable, persistent and announced, never status by color/audio alone. Form field relationships, screen reader wording, 200–400% zoom, mobile reflow, forced-colors and reduced motion need manual and browser verification; passing axe alone is insufficient. Provider buttons require text names and honest logos/origins. Density/skin cannot alter semantics.

Block release for falsely confirmed sessions/roles/device revocations, lost/ambiguous focus, disappearing critical error, unsupported method silently selected, raw sensitive data in analytics, malicious return routes, unvalidated tenant switch, account disclosure in generic recovery, inaccessible OTP or invalid SSO trust boundary. These are future acceptance requirements, NOT known runtime failures.

## Tooling and commands

Current available CI `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test` perform structural validation, not live identity tests. Future tools, after consumer decision: Testing Library+user-event for form semantics, Playwright for browser/SSR navigation, axe + manual NVDA/VoiceOver for a11y; provider protocol/security checks must be executed by app/backend security owners. No production secret fixture or working IdP in this repo.
