# Auth & Security UI Integration — audited delivery & validation report

**Audit date:** 2026-10-25 Asia/Jakarta. **Repo:** https://github.com/bjo163/moonframe. **Branch:** `main` (no new branch). **Starting audited SHA:** [`d430a2b1a432900b3cf445a89104820b84f9ca5f`](https://github.com/bjo163/moonframe/commit/d430a2b1a432900b3cf445a89104820b84f9ca5f). **Last content SHA before this report:** [`dfa4f25bc378992f25c733b48527a2b8fc310185`](https://github.com/bjo163/moonframe/commit/dfa4f25bc378992f25c733b48527a2b8fc310185). All work is **docs and structural validation only**.

## Repo actual and P0–P3 findings

Audited nontruncated tree **67 files**, default public `main`, writable/unprotected at inspection; 6 existing GitHub issues, 0 PRs. Existing [Auth UI Bible](../premium/auth-ui-suite.md) and [Auth catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json) were already canonical. Existing [26 authentication concrete blocks](../../contracts/moonframe-block-manifest-v0.1.json) and [17 authentication page templates](../../contracts/moonframe-page-template-manifest-v0.1.json) are preserved, not cloned. No `package.json`, lockfile, TSX components, provider/client SDK installation, auth backend, identity config, secrets, browser tests, release package or rendered assets. No local checkout checked, so no local working-tree claim.

[Evidence-based audit](auth-security-ui-audit.md): initial **P0=0**, **P1=6**, **P2=6**, **P3=3**, total 15 spec gaps. Risks: flat auth states, unknown provider capability/plan, unsafe general intent/telemetry shape, missing account enumeration/redirect/recovery threat tests, server-confirmation boundary and dated standard research. These were **documentation gaps, not exploitation of any shipped code**.

## Sources actually researched and architecture consequences

Research log: [auth-security-ui-research-log.md](../research/auth-security-ui-research-log.md). Confirmed primary standard dates **IETF [RFC 9700](https://datatracker.ietf.org/doc/html/rfc9700) Jan 2025**, **[RFC 10017](https://datatracker.ietf.org/doc/html/rfc10017) Aug 2026, BCP**, **W3C [WebAuthn Level 3](https://www.w3.org/TR/webauthn-3/) Recommendation Aug 25 2026**, **NIST [SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) final Jul 2025**, [OIDC Core/Discovery](https://openid.net/specs/openid-connect-core-1_0.html) errata2 Dec 2023, [WCAG 2.2](https://www.w3.org/TR/WCAG22/) W3C Recommendation Dec 2024. OWASP [Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html), [Forgot Password](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html), [MFA](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html), [Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [CSRF](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html), Authorization, XSS and Logging define threat/ownership questions. Official Auth.js/Better Auth/Clerk/Supabase/Firebase/WorkOS docs checked 2026-10-25; versions/plans not installed or price-quoted.

**Decision proposal:** UI presentation/adapters are thin and provider-neutral; all OAuth/OIDC state/nonce/PKCE and callback/issuer validation, WebAuthn challenge/origin, sessions/revocations, auth and tenant permissions remain provider/server-owned. **ADR-0005 proposed, not accepted**, provider selection open. Better Auth passkey/2FA/org plugin capabilities are config-dependent; Auth.js WebAuthn is marked experimental in docs; Supabase passkeys **experimental and opt-in** in current docs; Clerk passkey-MFA setting changes with instance creation date; WorkOS Directory Sync alone is not guaranteed session revocation without separate Directory Provisioning. No provider implementation inferred from official claims.

## Delivered documents/contracts (source ownership respected)

| Status | Canonical artifact | Purpose |
|---|---|---|
| New | [Audit](auth-security-ui-audit.md) | Remote baseline exact SHA, P0–P3, overlapping docs |
| New | [Research log](../research/auth-security-ui-research-log.md) | Dated primary standards, vendor caveats/open decisions |
| Extended existing | [Auth UI Bible](../premium/auth-ui-suite.md) | Trust responsibilities, 7 flow categories, normalized states/errors, safe adapter, accessibility/skin, session/tenant, threats, no backend |
| Extended existing | [Auth catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json) | Keep existing 26 block references/4 layout variants; add links and protocol/privacy boundary |
| New | [Flow/state contract](../../contracts/moonframe-auth-flow-contract-v0.1.json) | **62 flows** → original blocks/pages; **20 states**, **26 guarded transitions**, **14 safe event intents** |
| New | [Provider capability research](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) | **6 vendors × 14 features = 84 statuses**, source URLs/caveats and `unverified` state |
| New | [Threat model](../../contracts/moonframe-auth-threat-model-v0.1.json) | **20 risk scenarios**, owner/backend controls, UX response and future acceptance |
| New | [Skin QA map](../../contracts/moonframe-auth-skin-coverage-v0.1.json) | **8 auth-page specimens × 15 canonical skins × light/dark = 240 pending**; no rendered passes |
| New | [Proposed Draft-2020-12 safe-event Schema](../../schemas/moonframe-auth-safe-event.schema.json) + [two valid/ten invalid fixtures](../../contracts/fixtures/auth-security-v0.1.json) | Forbid unexpected/sensitive fields, premature success, unknown states/flow/action |
| New | [ADR-0005](../adr/0005-auth-provider-neutral-ui-integration.md) | Provider-neutral proposed integration and consumer-owned protocol decision trigger |
| New | [Auth QA plan](../qa/auth-security-ui-validation-plan.md) + [14 atomic tasks](../backlog/auth-security-ui-issues.md) | Future keyboard/AT/privacy/protocol acceptance and scoped dependency backlog |
| Updated | [README](../../README.md), [Master Bible](../moonframe-ui-design-system-bible-v1.3.md), [Premium Scope](../premium/premium-scope-bible.md), [Governance](../architecture/decisions-and-governance.md), [Roadmap](../implementation-roadmap.md), [global QA](../qa/validation-strategy.md), [Integration manifest](../../contracts/moonframe-integration-manifest-v0.1.json), [Node validator](../../scripts/validate-contracts.mjs) | Canonical links; no duplicate component, data, skin/token, block/page or provider code |

## Checks executed — exact meaning

**Actions [run #40179351394](https://github.com/bjo163/moonframe/actions/runs/40179351394) success** on content commit `dfa4f25`, including:
- `node scripts/validate-contracts.mjs` **PASS**. Parse strict JSON, 62 unique auth flows matching existing authentication blocks/templates, state transition identifiers/guard, 84 provider-feature cells with source URLs and no installed-provider claim, 20 threat ownership+tests, all 240 unrendered skin cells, no false review/certification; existing 15 skin/30 modes/105 pair invariants and local Markdown links also checked.
- `node scripts/validate-contracts.mjs --self-test` **PASS**: rejects all **10** synthetic bad safe event envelopes; missing auth block ref, fabricated installed provider flag, faked visual pass and unsafe success transition. Earlier skin/component/data/asset negative tests still checked in this workflow.
- The JSON Schema is **parsed and structurally inspected** by Node, but an independent full Draft 2020-12 schema validator (e.g. Ajv) was **not installed/run**. This is a bounded semantic fixture checker, not cryptographic or browser auth code.
- Some intermediate Actions jobs failed because the amended Bible referenced later files before they were created. Later `dfa4f25` confirmed clean. No UI components touched.

**NOT TESTED:** React/TypeScript compiling, browser or real provider login, OAuth/OIDC protocol, WebAuthn authenticator, session revoke, anti-enumeration response/timing, actual server authorization and tenant boundaries, CSRF/XSS, logging integration, accessibility/AT/axe, screenshot/contrast/RTL/SSR, 240 appearance review, 105 global skin pairs, vulnerability scan or pen test. No security/WCAG certification.

## Backlog and next ordered steps

Existing **6 GitHub issues preserved; new GitHub issues created: zero**. [Issue-ready 14 tasks](../backlog/auth-security-ui-issues.md) do **not** exist as GitHub issues. Prerequisites: [#1 app support](https://github.com/bjo163/moonframe/issues/1), [#3 primitives](https://github.com/bjo163/moonframe/issues/3), [#4 distribution](https://github.com/bjo163/moonframe/issues/4), [#6 visual fixture](https://github.com/bjo163/moonframe/issues/6) and old MF-PREM-002/003/008.

Next five: **AUTH-001** consumer session/SSR/BFF/tenant model → **AUTH-002** approve flow transitions and errors → **AUTH-003** pinned provider/plan/security spike → **AUTH-004** safe event/payload/recovery migration → **AUTH-005** public sign-in/sign-up/recovery anti-enumeration; followed by OAuth/SSO + passkey/MFA/tenant/session, keyboard/visual evidence and schema negative checks. **AUTH-013/014 actual UI and provider integrations require new explicit approval; not performed.**

**Explicit non-deliverables:** No React components, working login, IdP, auth backend/session/cookie/OAuth/WebAuthn implementation, server authorization, provider setup, production logo/font/icon/SVG/PNG/media, SFX, runtime package, release or production claims.
