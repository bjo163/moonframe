# Auth & Security UI — atomic issue-ready task backlog

**2026-10-25 · 14 proposed tasks, zero new GitHub Issues.** Existing [#1](https://github.com/bjo163/moonframe/issues/1), [#3](https://github.com/bjo163/moonframe/issues/3), [#4](https://github.com/bjo163/moonframe/issues/4), [#5](https://github.com/bjo163/moonframe/issues/5), [#6](https://github.com/bjo163/moonframe/issues/6) and MF-PREM-002/003/008 already track adjacent work. Do not duplicate GitHub tickets. Reuse verified `main`, no force push. Tasks AUTH-013/014 are **not authorized to execute** by this documentation assignment.

## AUTH-001: Approve consumer auth architecture

- **Status:** proposed/not-implemented.
- **Depends on:** GitHub #1, #4.
- **Goal/acceptance:** ADR-0005, SSR/BFF/browser decision and session ownership; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-002: Review 62 flow transitions

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-001, MF-PREM-002.
- **Goal/acceptance:** state machine and safe error mapping; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-003: Provider API/license verification

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-001, MF-PREM-008.
- **Goal/acceptance:** pin API versions, provider plans and session/MFA/enterprise capabilities; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-004: Event envelope and redaction policy

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-002.
- **Goal/acceptance:** reject sensitive fields, normalized reason and correlation; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-005: Entry/recovery UX policy

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-002, AUTH-004.
- **Goal/acceptance:** generic responses, rate limits, session-safe return; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-006: Federation return-flow spike

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-003, AUTH-004.
- **Goal/acceptance:** provider/server protocol boundary, return allowlists; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-007: Passkey and MFA recovery review

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-003, AUTH-005.
- **Goal/acceptance:** browser cancellation, enrolment step-up, recovery strength; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-008: Session and security settings lifecycle

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-005, AUTH-007.
- **Goal/acceptance:** trusted revoke acknowledgement and reauthentication; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-009: Organization, invitations and permission UI

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-006, AUTH-008.
- **Goal/acceptance:** reuse Data Workspace and server authority; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-010: Accessibility and skin review plan

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-002, GitHub #6.
- **Goal/acceptance:** 240 visual targets pending and manual AT acceptance; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-011: Schema and validator negatives

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-002, AUTH-004.
- **Goal/acceptance:** fixture mutation catches false readiness and unknown refs; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-012: Release/readiness evidence review

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-010, AUTH-011.
- **Goal/acceptance:** implemented/tested/reviewed only with actual evidence; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-013: Future auth UI implementation slice

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-012.
- **Goal/acceptance:** separate authorization required for React components; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


## AUTH-014: Future real provider integration

- **Status:** proposed/not-implemented.
- **Depends on:** AUTH-013, AUTH-003.
- **Goal/acceptance:** separate consumer/backend security authorization required; preserve canonical existing component/block/template IDs and theme authority.
- **Scope:** [existing Auth Bible](../premium/auth-ui-suite.md), [flow contract](../../contracts/moonframe-auth-flow-contract-v0.1.json), [provider research](../research/auth-security-ui-research-log.md), [QA](../qa/auth-security-ui-validation-plan.md), and topic-specific schema/ADR only.
- **Non-goals:** no React runtime, IdP, sessions, API endpoints, real user secrets, artwork, SFX or provider installation.
- **Definition of Done:** check explicit states and error/cancel/unsupported path, security owner/trust boundary, keyboard/AT impact and responsive layout, evidence with actual source/versions, contract CI only where applicable, compatibility/deprecation note, affected docs and future tests. Never promote component status from successful JSON tests alone.


### Sequence

`#1/#4 → AUTH-001 → AUTH-002 → AUTH-004/AUTH-005`; `AUTH-001 → AUTH-003 → AUTH-006/AUTH-007 → AUTH-008/AUTH-009`; `AUTH-002/#6 → AUTH-010`; then `AUTH-011 → AUTH-012`. Execution AUTH-013/014 only with separate user approval and authenticated consumer security review.
