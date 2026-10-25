# ADR-0005 — Auth & Security UI provider-neutral integration boundary

**Date:** 2026-10-25. **Status:** PROPOSED, not accepted. Next unused ADR after 0004. **Scope:** UI contract/adapters only, not provider selection or installation.

## Context

Moonframe has 26 auth blocks, 17 auth pages, 151 proposed components, no React/auth provider source, no Node package, no identity server or released package. Existing [Auth Bible](../premium/auth-ui-suite.md), [Auth catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json), [component behavior](../component-api-behavior-bible.md) and [Premium Scope](../premium/premium-scope-bible.md) must remain canonical in their respective layers.

IETF [RFC 9700](https://datatracker.ietf.org/doc/html/rfc9700) (2025) and **[RFC 10017](https://datatracker.ietf.org/doc/html/rfc10017) (August 2026 BCP)** establish protocol/security boundaries; [OIDC Core](https://openid.net/specs/openid-connect-core-1_0.html) and [WebAuthn Level 3](https://www.w3.org/TR/webauthn-3/) (Recommendation August 2026) require trusted authentication handling. A UI styling package has no basis for storing or validating secrets/sessions.

## Proposed decision

1. **Presentation-only core**: event intents, accessible feedback, flow states, 15 skins/30 appearances; no credential verification or permission enforcement.
2. **Optional typed app-owned adapters**: trusted capability manifest, normalized safe challenge/session result, per-provider error mapping with redaction, verified return destination; provider-specific protocol remains behind adapter.
3. **No universal provider API**: avoid pretending Auth.js, Better Auth, Clerk, Supabase Auth, Firebase, WorkOS have identical passkeys, sessions, organizations, SSO, SCIM, recovery or pricing.
4. **No selected provider or plan**; [matrix](../../contracts/moonframe-auth-provider-capability-matrix-v0.1.json) is dated research, features `unverified` when API/edition unclear.
5. **Use existing layouts/blocks** and composition by reference. No duplicate pages, 15 forks, or backend modules.

## Evidence and future bounded spike

Before acceptance, verify consuming apps (#1), React/SSR and package distribution (#4), tenant/session ownership, BFF vs browser public client (RFC 10017), desired methods and step-up/role model, legal terms. Build later synthetic adapter fixtures for sign-in, OAuth redirect/error/cancel, WebAuthn unsupported/cancelled, TOTP/recovery codes, sign out other devices, permission denied and cross-tenant stale callback. Test in browser with keyboard/AT; malicious return URI, account enumeration, callback state mismatch, secret logging, duplicate submit, sensitive analytics and missing authorization backend must fail. Pin versions and legal/plan evidence, reviewer sign-off, before choosing a runtime provider.

### Alternatives rejected for current scope

- Adopt a full IdP/session engine inside core: expands security and business scope beyond UI, dangerous.
- Bake Clerk/Auth.js/Better Auth provider APIs into every block: coupling, vendor/edition leakage.
- Claim passkey/MFA/WebAuthn from visual mockups: lacks challenge/session evidence.

**Owner approval needed:** consumer platform/security owner and legal/licensing review if enterprise provider. This ADR isn't security certification or production implementation.
