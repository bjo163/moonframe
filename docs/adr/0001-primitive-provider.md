# ADR-0001 — Primitive provider (decision deferred pending reproducible spike)

**Date:** 2026-10-25  
**Status:** proposed / not approved; **no dependency chosen or installed**.  
**Context:** repo has documentation/contracts only, so there is no incumbent primitive, compatibility baseline, or migration to perform. shadcn switched its new-project default to Base UI in July 2026 ([source](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)); this **does not** make Base UI the automatic answer for Moonframe.

## Weighted decision matrix (hypotheses, not benchmark results)

Provisional ordinal scores 1–5 represent **documentation-based fit predictions** (not performance test results). Re-score from source-linked spike evidence. Weighted total max 500.

| Criterion | Weight | Base UI | Radix | React Aria | Evidence and caveat |
|---|---:|---:|---:|---:|---|
| Keyboard/ARIA/focus coverage | 25 | 4 | 4 | 5 | [Base UI accessibility](https://base-ui.com/react/overview/accessibility), [Radix](https://www.radix-ui.com/primitives/docs/overview/introduction), [React Aria quality](https://react-aria.adobe.com/quality). Needs real manual tests. |
| Dialog/Menu/Select/Combobox breadth | 20 | 5 | 3 | 5 | [Base UI components](https://base-ui.com/react/overview/about), [Radix list](https://www.radix-ui.com/primitives/docs/overview/introduction), [React Aria](https://react-aria.adobe.com/). Radix overview does not list a built-in Combobox. |
| CSS/Tailwind skin freedom | 20 | 5 | 5 | 4 | All permit styling; complex composition needs prototype. [Tailwind `@theme`](https://tailwindcss.com/docs/theme) is orthogonal to provider. |
| API/composition ergonomics | 10 | 4 | 4 | 3 | Qualitative hypothesis; developer spike required. |
| SSR/hydration and direction | 10 | 4 | 4 | 4 | Unverified against Moonframe runtime; platform guidance only. |
| Ecosystem, maintenance, adoption | 5 | 4 | 5 | 4 | Weak proxy; don't substitute popularity for issue resolution. |
| Bundle cost, optionality, swap cost | 10 | 3 | 4 | 3 | **Unknown** until measurement. Scores low-confidence placeholders. |
| **Weighted hypothesis total / 500** | **100** | **430** | **395** | **420** | Purely directional, not a selection gate. |

The weights and scores are proposals for review; a high total does not approve a provider. Confidence: **low** overall because no runtime, locked version, measured bundle, React version, RTL or SSR fixture exists.

## Proposed decision rule

Keep the provider **unselected** now. Time-box a spike implementing **identical** Dialog, Select, Combobox, and nested Menu fixtures in at least two leading candidates; evaluate all three on paper first. Test keyboard/APG interactions, focus restoration, labels, long lists, controlled/uncontrolled modes, portal layering, SSR/hydration, forced-colors, RTL, customization and package/tree-shaking cost. Record pinned package versions and exact commands. Reject alternatives that fail must-pass a11y behavior even if scored higher on styling.

Prefer one primary provider when evidence is sufficient; component-level exceptions require a separate ADR. Moonframe component API must wrap and isolate provider internals; do not leak provider-specific props without a deliberate documented exception. No dependency changes during this documentation phase.

## Acceptance for moving to "accepted"

- Consumer runtime, React versions and builder constraints pinned.
- Four component fixtures run for all shortlisted options, with screen-reader and keyboard notes.
- Coverage matrix with missing features and workarounds, bundle measurements and integration risks.
- Actual evidence URLs/commits and reviewer signoff; compatibility, licensing, provenance and rollback plan.
