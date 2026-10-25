# Moonframe Auth & Security UI — audit repository aktual

**Tanggal:** 2026-10-25 WIB. **Repository:** https://github.com/bjo163/moonframe · **branch:** `main` · **audited SHA:** `d430a2b1a432900b3cf445a89104820b84f9ca5f` · public, push-permitted, branch not protected saat baca; GitHub tree non-truncated **67 tracked files**, no PR, **6 existing GitHub issues**. CI baseline [#40177067148](https://github.com/bjo163/moonframe/actions/runs/40177067148) sukses hanya untuk kontrak/dokumen. Tidak ada checkout lokal yang diaudit sehingga status working tree lokal tidak diketahui.

## Artefak yang benar-benar ada

- [README](../../README.md), [Master Bible](../moonframe-ui-design-system-bible-v1.3.md), [governance](../architecture/decisions-and-governance.md), [roadmap](../implementation-roadmap.md).
- [Auth UI guidance](../premium/auth-ui-suite.md) (36 lines sebelum perubahan), [Auth UI catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json) (flow groups, 26 auth block references, four layout variants). Keduanya **specified-not-implemented** dan sudah canonical; jangan buat duplikat Bible ataupun replika seluruh block list.
- [Block catalog](../../contracts/moonframe-block-manifest-v0.1.json): **26 concrete category=authentication**. [Page manifest](../../contracts/moonframe-page-template-manifest-v0.1.json): **17 category=authentication** termasuk security center/member pages. [Component API Bible](../component-api-behavior-bible.md) dan [151 component contract records](../../contracts/moonframe-component-api-contract-v0.1.json) adalah sumber bersama Field/Input/OTP/password/menu/dialog.
- [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json), [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [token dictionary](../../contracts/moonframe-token-dictionary-v0.1.json): 15 skin IDs, 30 baseline Light/Dark, 105 global skin pairs masih `not-reviewed`. Tidak ada approved rendered auth screenshots.
- [Integration candidate manifest](../../contracts/moonframe-integration-manifest-v0.1.json) menyebut Auth.js / Better Auth / Clerk sebagai *candidate-not-installed*; bukan adapter yang aktif.
- [Premium Scope](../premium/premium-scope-bible.md), [data workspace](../premium/data-workspace.md) memiliki kepemilikan spesifik: blok/page dan member tables, bukan backend auth.
- [Node contract validator](../../scripts/validate-contracts.mjs), [Actions](../../.github/workflows/contract-validation.yml) memeriksa validitas JSON/refs/status, tetapi **tidak** membuktikan OAuth/session/WebAuthn, browser/AT, identity service, keamanan, atau React behavior.
- Tidak ditemukan package.json, lockfile, source React/TypeScript, server, authentication provider configuration, integration keys, TS build, snapshots, dependency installation atau release/published distribution.
- Existing GitHub issues [#1 consumer stack](https://github.com/bjo163/moonframe/issues/1), [#3 primitive provider](https://github.com/bjo163/moonframe/issues/3), [#4 packaging](https://github.com/bjo163/moonframe/issues/4), [#5 tokens](https://github.com/bjo163/moonframe/issues/5), [#6 Skin Lab](https://github.com/bjo163/moonframe/issues/6) serta local backlog MF-PREM-002/003/008 belum perlu digandakan. No new issues in this audit.

## Findings (P0–P3, specification risks not discovered shipped vulnerabilities)

| ID | Severity | Evidence | Risk & required response |
|---|---|---|---|
| AUTH-01 | P1 | `auth-ui-catalog.uiStateVocabulary` is a flat list of 12 strings; no transition/terminal taxonomy | False “authenticated” on UI click or stale callback; normalized per-flow states/transitions |
| AUTH-02 | P1 | Auth provider candidates only mention optional availability, no capability evidence | Unsupported MFA/passkeys/organization screens may mislead; dated capability matrix with explicit unknown |
| AUTH-03 | P1 | Existing auth docs say backend owns security but no redaction/telemetry/URL restrictions per intent | Secrets/OTP/recovery code leakage through future implementations; explicit safe event contract |
| AUTH-04 | P1 | Auth UI hints are high-level; no account-enumeration/rate-limit/recovery/redirect threat acceptance fixtures | Sensitive flows need anti-enumeration, no unsafe fallback; threat model + negative fixtures |
| AUTH-05 | P1 | No cross-flow provider-confirmed session/tenant/authorization status contract | “Sign out all sessions”/role UI could falsely claim completed security action |
| AUTH-06 | P1 | No review gate for OAuth/OIDC/browser guidance version, WebAuthn 3 and NIST 63-4 | Need current primary sources, adapter protocol boundary, not frontend flow code |
| AUTH-07 | P2 | Four existing layout variants have no flow-specific AT/responsive requirements | Need risk-based 15-skin × Light/Dark review plan, critical status not toast-only |
| AUTH-08 | P2 | 26 blocks/17 pages are specified but no exact flow coverage map for settings/org/onboarding/error types | Map refs without creating duplicate block/page IDs |
| AUTH-09 | P2 | Security account-linking, invitations and tenant transitions lack stale context/race recovery policy | Backend-authoritative confirmation and safe invalidation needed |
| AUTH-10 | P2 | No bounded provider-neutral adapter envelope/semantic event reasons/capability contract | Accidental universal auth framework/vendor leakage risk |
| AUTH-11 | P2 | Generic OTP/password fields are in component contract but no security-specific autocomplete/paste/no-log policy | Must link component semantics to auth-specific trust boundary |
| AUTH-12 | P2 | No negative-fixture validation of capability/flow/secret-denylist and referenced block/page IDs | Extend existing Node structural validator |
| AUTH-13 | P3 | No pinned React/SSR/hosting/browser matrices; external provider pricing/platform constraints unknown | Existing issue #1/#4 must precede provider selection |
| AUTH-14 | P3 | No screenshots, browser/AT, simulated real provider, manual WCAG 2.2 AA proof | Only docs-level status can be marked specified |
| AUTH-15 | P3 | No scheduled compatibility/deprecation plan for future OAuth/provider callback drift | API version and provider adapter must be independently versioned |

**Counts:** P0 **0**; P1 **6**; P2 **6**; P3 **3**.

## Canonical source of truth map

| Area | Owner (existing or scoped extension) |
|---|---|
| Shared component props/ref/native events | [Component API Bible](../component-api-behavior-bible.md), existing manifest |
| Auth flow semantics/security state/provider capabilities/threat boundaries | [existing Auth UI guidance](../premium/auth-ui-suite.md) + [existing Auth catalog](../../contracts/moonframe-auth-ui-catalog-v0.1.json); focused flow/provider/threat extensions only |
| Block/page IDs/composition | [26 existing auth blocks](../../contracts/moonframe-block-manifest-v0.1.json), [17 existing templates](../../contracts/moonframe-page-template-manifest-v0.1.json) |
| Member list/query/filter/selection | [Data Workspace](../premium/data-workspace.md) |
| Token/skin visual grammar/appearance | [theme](../../contracts/moonframe-theme-contract-v1.3.json), [skin grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) |
| Provider candidates/implementation versions | [integration manifest](../../contracts/moonframe-integration-manifest-v0.1.json), provider-neutral matrix; no provider installed |
| QA and dependencies | [QA strategy](../qa/validation-strategy.md), scoped auth QA, existing issues #1/#3/#4/#6 |

**Prohibitions:** never copy provider tokens/state/nonce/PKCE, implement auth session or server permissions, upload secrets, pretend skin changes trust; no React components/assets/SFX. SFX remains opt-in and unrelated.
