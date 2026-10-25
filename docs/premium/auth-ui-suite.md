# Premium Authentication UI Suite — presentation, never credential authority

**Canonical IDs:** [block manifest](../../contracts/moonframe-block-manifest-v0.1.json), [page manifest](../../contracts/moonframe-page-template-manifest-v0.1.json), [flow references](../../contracts/moonframe-auth-ui-catalog-v0.1.json). This document defines cross-flow behavior without redefining records.

## Taxonomy and coverage

**Sign in:** email/password, social identity choice, passkey fallback, enterprise SSO/domain discovery, redirect/pending/callback error. **Create account:** signup, email verification, invitation acceptance, terms acceptance. **Recover:** forgot/reset password, magic-link request/pending/expired/resend. **Challenge:** OTP code, MFA second factor, recovery codes, alternate method. **Account:** connected identities, sessions/devices, organizations, team invitations. **Onboarding:** welcome, workspace setup, member invitations and initial setup. **Failure:** invalid form, expired token, offline, locked account, provider unavailable, missing permission, retry path, session expired.

Four layout recipes *for any applicable flow*: **minimal**, **split-screen**, **branded**, **enterprise**. Layout variant changes visual composition, not what is sent to the provider or app. Skin applies above variant with its own shell, geometry, typography, panel construction, focus affordance and mobile reflow. Logo/provider visuals are consumer-owned/rights-checked slots.

## State machine contract

`idle → editing → invalid | submitting → pending → provider-reported-success | provider-reported-failure`. Additional valid transitions: pending → expired/offline, authenticated-provider-state → session-expired, sign-in-method → recovery/SSO/passkey. The **app/provider** sets authoritative states. A UI button click never sets `authenticated` by itself. Never infer account existence from differing error text if the auth backend intentionally masks enumeration.

Each presentation flow must define:
- required/optional fields and accessible labels, autocomplete hints and secure password reveal control;
- safe user-intent events (`onSubmitIntent`, `onProviderIntent`, `onResendIntent`, `onRecoveryIntent`, `onBackIntent`), disabled/timeout/retry metadata; error keys are safe and localizable;
- pending state including double-submit prevention, visible progress, accessible status announcement and focus landing for errors;
- validation ownership: constraints may be hinted client-side; all security verification, rate-limits, CSRF protection, session issuance and key handling live outside this package;
- mobile/desktop/RTL/long text support, focus traversal and no layout shift that obscures a code field;
- provider/logo/icon slots with attribution and privacy; callbacks must not log passwords, OTPs, passkeys or recovery codes;
- explicit offline/provider error, unavailable passkey and SSO fallback, expired invitation/token and locked account paths.

## Anti-patterns and acceptance

- **Not a secure login service:** no credential storage, token exchange or session state persistence within Moonframe core.
- **Not an authorization component:** displaying forbidden/allowed states does not enforce routes/API permissions.
- **Not a passkey implementation:** UI may invite WebAuthn; consumer/provider owns challenge and attestation.
- **Not an MFA verification engine:** code field is presentation, not a code-validity oracle.
- **Not a working SSO provider:** domain discovery page only emits intent; app chooses verified provider/redirects.
- **No secret demo data:** use fake placeholder emails and synthetic labels only.
- **No auto-submission or untrusted redirect:** explicit user action, safe URL handling in consumer.
- **No vendor lock:** adapters for [Auth.js](https://authjs.dev/getting-started), [Better Auth](https://better-auth.com/docs/introduction) or [Clerk](https://clerk.com/components/sign-in) must remain optional and their feature/version/licensing suitability reevaluated at implementation.

**P1 proposed UI flows:** sign-in, sign-up, magic link, recovery, reset, verification, OTP, expired session, generic safe errors. **P2:** MFA recovery/passkey/SSO, teams/sessions and onboarding. All remain unimplemented pending real tests.

---

## Auth & Security UI Integration Bible — 2026-10-25 normative specification extension

**Status: specified-provisional, no implementation.** This **extends** the existing Auth UI Bible and [26 canonical blocks](../../contracts/moonframe-block-manifest-v0.1.json)/[17 auth pages](../../contracts/moonframe-page-template-manifest-v0.1.json), instead of replacing them. [Component API Bible](../component-api-behavior-bible.md) continues owning shared Field/Input/Dialog/OTP props, `value/defaultValue`, events/refs/keyboard. [Auth flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json) owns **62** flow-to-block/page references, 20 normalized UI states, 26 transitions and event metadata. [Provider matrix](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) owns vendor evidence; [threat model](../../contracts/moonframe-auth-threat-model-v0.1.json) owns 20 threat scenarios. UI does not implement an IdP.

### 1. Trust responsibility matrix

| Area | Moonframe UI owns | Consumer app / auth provider / backend owns |
|---|---|---|
| Login/sign-up | Native form, labels, pending/error/cancel/return presentation and intent | Credential verification, account identity, enrollment/rate-limiting |
| OAuth/OIDC | Provider choice, redirect handoff state, cancellation/error UI | All RFC 9700/RFC 10017 flows, PKCE, state, nonce, issuer, metadata, audience, signature/redirect validation, token exchange |
| Passkey/WebAuthn | Start intent, unsupported/cancelled/expired ceremony and fallback | Challenge, RP ID/origin validation, attestation/signature/credential storage, account recovery |
| MFA | Input/selection/backup instructions, safe state and retry | Factor enrollment, verification, step-up, retry limits, challenge duration, assurance level |
| Sessions | Present trusted session/device metadata, revoke intent and provider-confirmed status | Secure cookies/session/token lifecycle, rotation, CSRF defenses, session revocation and persistence |
| Authorization | Render granted/unknown/denied policy signals, request access intent | Enforce roles, permissions, tenant/resource access on **each API**, entitlements and authoritative denial |
| Organizations | Switcher, invitation/member/role intent and stale loading UI | Organization identity, membership/policy, invitation verification, tenant isolation, SSO/SCIM |
| Security activity | Redacted audit event list, accessible sorting/detail via Data Workspace | Authentic records, security log access, source audit, retention and tamper resistance |
| Security settings | Password/passkey/MFA/connected-account/recovery presentation | Reauthentication, authorized mutations, email verification and deletion schedules |

**A theme or a hidden UI element is never an authorization mechanism.** No provider app/secret installed. UI `success-confirmed` is allowed only for provider/server-confirmed operation; merely pressing Submit cannot mean authenticated.

### 2. Provider-neutral lightweight adapter model

Future app-owned adapter (not an implementation) must supply:
- `capabilities`: trusted enabled/configured capability IDs + provider specific constraints (plan, tenant, policy, methods). An unsupported feature is **hidden or explained accurately**, never offered as usable.
- `getSessionStatus`: `unknown|checking|anonymous|authenticated|reauth-required|expired|revoked|forbidden`, with authoritative server confirmation, safe subject summary only if needed, active tenant reference and revision. No token or raw session ID.
- `dispatchIntent({flowId, actionId, interactionId, safeTargetRef?})`: **safe envelope** with opaque allowlisted IDs. Ephemeral secret form fields (password, OTP, recovery codes) can be submitted privately by the **consumer's trusted form adapter** to provider-specific APIs, **not** through analytics/global state/event bus.
- `normalizeResult({interactionId, status, safeErrorCode?, retryable?, retryAfter?, nextStep?, sessionRevision?})`: normalize trustworthy response without discarding provider-specific recovery guidance; old interactionId/tenant challenge ignored. A promise resolution without confirmed server status is not authenticated.
- `navigationIntent({destinationId})`: UI never accepts arbitrary `returnTo` URI or raw authorization callback parameters. Consumer maps trusted destination IDs to validated local routes; redirect allowlists live in auth integration.
- `cancelIntent`: UI cancellation need not revoke an existing auth challenge—only backend/provider may guarantee cancellation.
- `demoFixture`: clearly identified **fake provider responses** for Storybook; never a working authentication emulator or security claim.

**No universal adapter promises:** Not all providers have the same recovery, passkey, SCIM, session revoke, organization, hosted UI or factor semantics. Failure/capability metadata may declare unsupported/unverified; do not silently downgrade factor strength, strip a step-up challenge or auto-link accounts.

### 3. State machine and error taxonomy

[Canonical machine-readable flows and transitions](../../contracts/moonframe-auth-flow-contract-v0.1.json). Typical safe path:
```text
idle -> editing -> submitting -> provider-pending/verification-pending
     -> success-confirmed | failure-generic | failure-retryable
     -> expired | rate-limited | provider-unavailable | cancelled
```
Success requires a **trusted confirmed result**; `submitting` is triggered once per interaction and busy disables duplicate action. Server callback with stale challenge ID/session/tenant **does not** overwrite the current flow. Retry only with approved policy; provider-unavailable is not secretly converted to less secure sign-in. State `rate-limited` shows an authoritative retry time if supplied; UI countdown does **not** enforce limits.

Error class and safe copy design:
- `invalid-input`: link to field/error summary and `aria-describedby`; show only consumer-confirmed constraints.
- `credentials-rejected` and `account-not-found/locked` in public login/reset should normally share **generic anti-enumeration copy**, and backend response/timing must also protect identity privacy.
- `challenge-expired|used|invalid`: new challenge request route after provider confirmation, do not reveal raw link/token.
- `passkey-unsupported|user-cancelled`: respectful explanation, alternate only if allowed by security policy.
- `oauth-callback-error|provider-unavailable`: safe generic message with non-secret reference ID; redirect, issuer and provider state never copied to UI.
- `session-expired|revoked`: persistent reauth status, trusted return intent. Clear sensitive stale caches under app policy.
- `permission-denied|tenant-mismatch`: verified access denial without reveal of hidden resource metadata; no client role override.
- `rate-limited|offline|service-error`: recoverability metadata, guarded retry. Never fabricate elapsed server countdown or success.

### 4. Input, privacy and accessibility invariants

Native labels/legend/group/error association; `autocomplete=username`, `current-password`, `new-password`, `one-time-code` as appropriate and tested in real browsers. Password reveal button is `type=button`, keyboard named, does not lose focus/value, and does not log changes. OTP may be one accessible input with paste/autofill or a verified grouped variant; never require six inaccessible fields. Password managers/paste are supported unless validated product policy proves otherwise. Failure UI persistent and announced appropriately; errors lead to field or summary, not only an ephemeral toast. Provider buttons have **text names**, not logo alone.

No password, OTP, recovery code, authorization code, token, session/cookie secret, client secret, raw callback query, identifiable sensitive profile or provider stacktrace in URL, global theme preferences, analytics, logging, error reporting, shared state, sample fixtures or demo screenshot. One-time codes may be revealed only after explicit user intent in a limited trusted UI and never pre-filled in examples. Clipboard copy requires explicit activation and warnings; browser clipboard cannot be remotely “cleared” with proof.

Use WCAG 2.2 AA as **test target**: 200%/400% zoom, reflow, keyboard, high-contrast, reduced-motion, RTL, long translated security copy, labels, status and dialog focus management. [Auth QA plan](../qa/auth-security-ui-validation-plan.md) lists future browser/AT evidence; no axe, Playwright or screen reader tests have run.

### 5. Protocol-specific boundaries

**OAuth/OIDC:** RFC 9700 (2025) and **RFC 10017 final (Aug 2026)** are the currently researched BCPs. Apps decide BFF vs browser public client/authorization code+PKCE according to architecture. No implicit flow recommendation; never embed client secret in browser code. Issuer, audience, nonce, state, PKCE, callback and redirect URI validations are entirely adapter/server-owned. Popup vs full redirect trade-offs and blocked popups must be explicit; no raw OAuth errors in browser rendered messages.

**WebAuthn:** **Level 3 became W3C Recommendation on 25 Aug 2026.** Browser passkey UX is not server challenge verification. A synced passkey is not guaranteed single-device. Device unavailable/user cancelled, discoverable credential, sign-in/enrollment, rename/delete and lost-factor recovery need capability+reauth checks.

**MFA:** TOTP, app push, SMS/email OTP and recovery codes have differing phishing resistance; provider/security policy determines allowed factors and step-up. Backup code disclosure should be one-time, acknowledged and not persisted/logged. Provider push challenge cannot be accepted by UI alone; show deny/report and fatigue warnings if implemented.

**Sessions/tenant:** Sign out of all devices needs server revocation confirmation and per-session status; clearing client cache alone is insufficient. Tenant change must invalidate app-owned cached confidential data and session-aware permissions, and ignore responses tied to the prior tenant; UI cannot create or change server role claims.

### 6. Non-overlapping product modules and templates

The seven flow groups [entry, registration, recovery, mfa-passkey, account, organization, onboarding](../../contracts/moonframe-auth-flow-contract-v0.1.json) each specify needed capability, state, required block/page **existing IDs** and acceptance tests. Four existing variants (minimal, split-screen, branded, enterprise) can wrap compatible flows; **no duplicate new sign-in page templates**. Advanced product capabilities are progressively gated:
- **P1 core**: sign-in/sign-up, magic-link/password recovery, email verification, safe OTP/error, session expiry, basic access denied.
- **P2 premium**: passkeys and stronger MFA, SSO/discovery, device/session management, connected accounts, invitation/org UI, onboarding and step-up if supported.
- **P3 optional**: SMS/push restrictions, domain/SCIM provisioning, account delete/API key and complex enterprise policies requiring provider-specific proof.

Org member tables reuse [Data Workspace](data-workspace.md) for sorting, filters and selection, [Component API](../component-api-behavior-bible.md) for Field/Input/Dialog/OTP/password behavior, and the existing [Premium block/page manifests](../../contracts/moonframe-block-manifest-v0.1.json) for composition. Auth-specific rules only cover trust, identity, security and safe error handling. Security activity lists do not invent tamper-proof audit events.

### 7. The 15-skin contract and QA

The exact skin list and effective `light/dark` mapping are sourced from [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json), not from this document; [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) owns art direction. Visual recipes may change typography, composition, panel and motion, but **provider identity, security semantics, error truth, labels, form behavior, focus and user intent do not change**. Moonglitch cannot distort credential/code text; Moonquest cannot gamify real security incidents; Moonledger cannot shrink focus/touch targets; high-impact skins cannot obscure trusted origin or create fake trust badges.

[Auth skin QA coverage](../../contracts/moonframe-auth-skin-coverage-v0.1.json) defines **8 representative surfaces × 15 skins × 2 modes = 240 planned cells, 0 rendered**, and conditional cases for forced colors, zoom, mobile, RTL and reduced motion. 105 global skin-pair identity reviews remain independent and `not-reviewed`.

### 8. Security evidence, ownership and migration

[Threat register](../../contracts/moonframe-auth-threat-model-v0.1.json) specifies **20** risk categories with assets, boundary, attack scenario, owner, UI response, backend control and acceptance plan. [Six-provider capability matrix](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) distinguishes documented vendor availability from actual Moonframe support; no provider selected. [ADR-0005](../adr/0005-auth-provider-neutral-ui-integration.md) is a *proposal* and must not be treated as accepted provider decision. Data/analytics security promises never derive solely from browser code.

[Dedicated QA](../qa/auth-security-ui-validation-plan.md) and [atomic task list](../backlog/auth-security-ui-issues.md) apply implementation/test/evidence gates. Breaking changes include event result shape, error codes, state semantics, autocomplete/aria and trusted redirect boundaries; provider adapter has version separate from visual components and requires integration migration tests. Readiness: `specified-provisional` (current) is **not** `implemented`, `tested`, `reviewed` or `released`.
