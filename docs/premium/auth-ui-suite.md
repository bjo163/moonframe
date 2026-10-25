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
