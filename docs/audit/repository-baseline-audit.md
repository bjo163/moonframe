# Moonframe UI — repository baseline audit

**Audit date:** 2026-10-25 (Asia/Jakarta)  
**Repository:** https://github.com/bjo163/moonframe  
**Baseline branch / SHA:** `main` / `f3639659a1d33485aee95b74f14943643c19f051`  
**Audit scope:** remote default-branch tree, six complete text documents/contracts, branch/issue/PR queries, current primary-source research. No local checkout was available; working-tree cleanliness cannot be asserted.  
**Classification:** verified-existing / specified-not-implemented / partially-specified / missing / contradictory / stale-needs-research / implemented-and-tested.

## Verified inventory

The default branch was `main`, publicly readable, writable by the connected GitHub account, and not branch-protected at audit time. Only `main` was returned by branch search. GitHub issue and PR searches returned zero. The recursive repository tree was not truncated and contained **six files**, with no hidden files or workflows:

| File | Classification |
|---|---|
| `README.md` | verified-existing |
| `docs/moonframe-ui-design-system-bible-v1.3.md` | verified-existing; substantial product specification |
| `docs/implementation-roadmap.md` | verified-existing; planned tasks, not issues |
| `contracts/moonframe-theme-contract-v1.3.json` | verified-existing; 15 skin IDs, modes and fallback intentions |
| `contracts/moonframe-skin-grammar-contract-v1.0.json` | verified-existing; 15 skin summaries, 105 unreviewed pairs |
| `contracts/moonframe-token-dictionary-v0.1.json` | verified-existing; 78 example semantic tokens and taxonomy; no production values |

No `package.json`, source tree, lockfile, test runner, package exports, implementation, CI, issue templates, licenses, CONTRIBUTING or SECURITY policy existed in the baseline. There is no basis to report React/TypeScript/Tailwind versions **installed**. The Bible describes a proposed stack only.

**Source anchors:** [baseline tree](https://api.github.com/repos/bjo163/moonframe/git/trees/f3639659a1d33485aee95b74f14943643c19f051?recursive=1), [baseline commit](https://github.com/bjo163/moonframe/commit/f3639659a1d33485aee95b74f14943643c19f051), [theme](../../contracts/moonframe-theme-contract-v1.3.json), [grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [dictionary](../../contracts/moonframe-token-dictionary-v0.1.json).

## Findings and priority

| ID | Severity | Finding and file / evidence | Remediation |
|---|---|---|---|
| A01 | P1 | Theme contract `tokens.canonicalSource` points to the token **dictionary**; dictionary explicitly disclaims production values. Misleading generator input. | Separate required-token vocabulary from future canonical value source; mark pending. |
| A02 | P1 | Neither schemas nor executable cross-contract checks exist; counts currently align but drift would be undetected. | Add deterministic no-dependency validation and CI gate. |
| A03 | P1 | Grammar 105 records contain `status=not-reviewed` but lack complete reviewer/date/next action and evidence slots; skin entries don't have full per-component recipes. | Add review metadata and full descriptive skin specifications without claiming review passes. |
| A04 | P1 | No machine-readable component/template catalog; the Bible's prose cannot drive granular acceptance tests. | Add staged component and block manifests. |
| A05 | P1 | No documented primary-source research, primitive-provider ADR, or confirmed support baseline. | Log sources, explicitly defer implementation/provider decision pending spike. |
| A06 | P2 | No asset provenance schema or approved SVG/export safety pipeline. | Add asset specifications and manifest (without generating assets). |
| A07 | P2 | Optional SFX contract is prose only: lacks enforceable opt-in/event/failure defaults. | Add dedicated machine-readable policy. |
| A08 | P2 | Existing roadmap lists >50 tasks but not independently executable scopes/DoD for the initial batch. | Add issue-ready dependency-ordered backlog. |
| A09 | P2 | No package boundaries, export strategy, versioning/ADR/contributor policy beyond guidance. | Define decisions and staged governance; don't invent npm scope rights. |
| A10 | P2 | No test matrix, screenshot determinism and release-blocker separation. | Add risk-based QA plan with unverified baselines. |
| A11 | P2 | Locked phrasing around shadcn Classic risks being read as upstream compatibility promise. | Label the style inspiration; pin upstream only after real implementation. |
| A12 | P3 | `system` is both appearance preference and OS-resolved mode; API storage versus DOM attribute needs clarification. | Separate requested preference from effective mode for SSR. |
| A13 | P3 | Names of proposed status vocabularies differ between prose and JSON. | Define orthogonal spec/implementation/review states; preserve compatibility. |

**Baseline triage:** P0=0; P1=5; P2=6; P3=2. These counts describe documented gaps, not production bugs or completed fixes. Severity is an engineering recommendation, not a GitHub label audit.

## Correct foundations to retain

- One shared behavioral contract across 15 skins; two resolved appearances per skin; preference `system` adds **zero** skins.
- The theme and grammar files both contain exactly the same **15 unique IDs**.
- The pair matrix contains 105 unique unordered non-self pairs, **all 105** marked `not-reviewed`; no proof screenshots.
- The dictionary lists **78 example semantic names**, explicitly not final values.
- Strong scope separation: UI shell/ERP/RPG styling does not own product-specific data or business logic.
- Non-autoplay audio and provenance requirements are already sensible product constraints.

## Audit limits and verification discipline

GitHub branch listings, issue/PR searches and recursive trees were read remotely. No local checkout, consumer app, generated output, visual specimens, installed build toolchain or browser test environment could be observed. Therefore no installation, keyboard, bundle, WCAG conformance or rendering evidence exists. New documentation/contract validators are not component tests.

## Execution ordering

1. Repair source-of-truth ambiguity and add machine-readable manifests/schemas.
2. Run a provider comparison spike with the same Dialog, Select, Combobox and Menu fixtures.
3. Approve canonical token format and prove a Classic plus three divergent skins on reference screens.
4. Build a tiny runtime theme core/Skin Lab, then implement components incrementally.
5. Review and record 105 pairs only **after** real grayscale and decoration-disabled screenshots exist.

See [research log](../research/research-log.md), [provider ADR](../adr/0001-primitive-provider.md), [validation strategy](../qa/validation-strategy.md), and [small-task backlog](../backlog/initial-issues.md).
