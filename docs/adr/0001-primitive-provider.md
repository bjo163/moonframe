# ADR-0001 — Primitive provider (decision deferred pending manual review and consumer proof)

**Date:** 2026-10-25  
**Status:** proposed / not approved; **no provider dependency has been added to the Moonframe repository** (temporary dependencies exist only in the isolated spike fixture).
**Context:** repo has documentation/contracts only, so there is no incumbent primitive, compatibility baseline, or migration to perform. shadcn switched its new-project default to Base UI in July 2026 ([source](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)); this **does not** make Base UI the automatic answer for Moonframe.

## Weighted decision matrix (directional, not an accepted choice)

Ordinal scores 1–5 remain **low-confidence fit judgments**, not performance rankings. Basic browser results now inform the separate [spike matrix](../research/provider-spike.md); these proposed scores have not been reviewed or used to select a provider. Weighted total max 500.

| Criterion | Weight | Base UI | Radix | React Aria | Evidence and caveat |
|---|---:|---:|---:|---:|---|
| Keyboard/ARIA/focus coverage | 25 | 4 | 4 | 5 | Six keyboard/focus cases and one role/name smoke passed per provider in the temporary fixture; manual AT/APG is still needed. |
| Dialog/Menu/Select/Combobox breadth | 20 | 5 | 3 | 5 | All four fixture tasks pass basic checks; Radix has no dedicated editable Combobox, so that option carries Moonframe-owned code. See [spike](../research/provider-spike.md) and the first-party [Base UI](https://base-ui.com/react/overview/about), [Radix](https://www.radix-ui.com/primitives/docs/overview/introduction), and [React Aria](https://react-aria.adobe.com/) component lists. |
| CSS/Tailwind skin freedom | 20 | 5 | 5 | 4 | Styling freedom remains a documented hypothesis; complex styling/state APIs were not compared. [Tailwind `@theme`](https://tailwindcss.com/docs/theme) is orthogonal to provider. |
| API/composition ergonomics | 10 | 4 | 4 | 3 | One Dialog-trigger class/data-prop/ref/callback smoke passed each; broader prop/event/ref composition remains untested. |
| SSR/hydration and direction | 10 | 4 | 4 | 4 | Isolated React SSR/hydration and basic RTL passed; no Next.js consumer or broad locale/direction evidence. |
| Ecosystem, maintenance, adoption | 5 | 4 | 5 | 4 | Weak proxy; don't substitute popularity for issue resolution. |
| Bundle cost, optionality, swap cost | 10 | 3 | 4 | 3 | Temporary fixture JS sizes: Base 394.95, Radix 304.20, React Aria 431.37 kB. Lockfile runtime closure counts: 9, 74, 13 packages respectively. These do not predict production imports. |
| **Weighted hypothesis total / 500** | **100** | **430** | **400** | **425** | Purely directional, not a selection gate. |

The weights and scores remain proposals for review; a high total does not approve a provider. The temporary fixture pins Node 24.22.1, React/React DOM 19.2.8, Vite 8.3.3 and provider versions, but does not establish a real consumer's support matrix. Confidence remains **low** overall because the fixture is not retained in-repository, styling/state composition and larger APG cases are untested, and manual AT/framework/browser evidence is missing.

## Proposed decision rule

Keep the provider **unselected**. The temporary spike now implements identical Dialog, Select, editable Combobox and nested Menu tasks across all three candidates and records basic keyboard, role/name, RTL/media, SSR/hydration, composition and bundle results. Twelve exploratory APG-edge checks passed on Select Home/End, nested-menu Left Arrow, and top-level Escape for all candidates; nested-menu Escape returned focus to the parent item for Base UI and React Aria, while Radix closed the root menu and returned focus to its trigger. The [WAI-ARIA APG Menu pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) expects Escape to close the menu containing focus and return focus to its opener; the temporary fixture therefore isolates one nested-submenu Escape behavior difference in Radix, not a general menu failure. Maintainer review should decide whether it blocks adoption or requires another menu pattern. Remaining comparison work includes further keyboard/APG edge cases, long lists, controlled/uncontrolled changes, portal layering, real Windows forced-colors, manual AT, framework SSR, styling/customization and repeatable consumer import/tree-shaking. Reject alternatives that fail must-pass accessibility behavior even if scored higher on styling.

Prefer one primary provider when evidence is sufficient; component-level exceptions require a separate ADR. Moonframe component API must wrap and isolate provider internals; do not leak provider-specific props without a deliberate documented exception. No dependency changes during this documentation phase.

## Acceptance for moving to "accepted"

- Synthetic fixture runtime, React versions, builder and provider versions are pinned; real consumer support remains unverified.
- Four component tasks run for all three options with keyboard results; manual screen-reader review remains outstanding.
- Coverage matrix with missing features/workarounds, bundle and installed dependency-closure measurements, and integration risks.
- Actual evidence URLs/commits and reviewer signoff; compatibility, licensing, provenance and rollback plan.

## 2026-10-25 Component API research and expanded equal-fixture spike

[Research log](../research/component-api-research-log.md) confirms React documentation now shows **v19.3**, and the [React ref API](https://react.dev/reference/react/forwardRef) states `forwardRef` is no longer required for React19. React18 compatibility **cannot** be decided before consumer inventory (#1). No incumbent primitive exists in this repo.

Current official provider composition: [Base UI `render`/merging](https://base-ui.com/react/handbook/composition), [Radix `asChild`/Slot](https://www.radix-ui.com/primitives/docs/guides/composition), [React Aria `render` and contexts](https://react-aria.adobe.com/customization). These event/prop/ref merge rules **differ**, so copying one as the public Moonframe composition API before testing risks lock-in and regressions. The July 2026 [shadcn default change](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default) remains a benchmark, not selection evidence.

**Proposed extended tests:** Tabs, Tooltip, controlled/uncontrolled changes, event callback count/order and cancellation, nested trigger/button, portal z-index, form reset/serialization and deeper keyboard/AT coverage. These are **not** in the current fixture. The completed temporary fixture only compares Dialog, Select, editable Combobox and nested action Menu with the limited outcomes listed below. Score on broader fixture outcomes (APG/WCAG failures disqualify); no presumptive provider “winner”. Deliver an ADR signoff or documented ongoing blocker. **Status remains proposed/not approved**.

Consumer environment evidence is tracked in the [consumer matrix](../research/consumer-matrix.md) at pinned public repository commits. The first integration target is a synthetic consumer fixture; MoonWitness XIV board is a recommended later real-app smoke candidate, subject to package/provider gates and maintainer approval. Runtime-resolved versions, browser/RTL support, and actual SSR/hydration behavior remain unverified, so this inventory does not approve a support promise.

## 2026-10-25 Paper comparison and spike gate

The [provider comparison](../research/provider-spike.md) records first-party research and a temporary isolated fixture. Twenty-four Chromium keyboard/focus/ARIA/composition checks passed across Base UI, React Aria, and Radix (eight each: six keyboard/focus cases, one role/name smoke, and one narrow class/data-prop/ref/callback smoke) for dialog behavior, Select selection/typeahead, editable Combobox filtering/selection, and keyboard-navigated nested Menu. Basic RTL/media smoke (three checks), isolated React SSR + Chromium hydration (three checks), separate Vite/Tailwind bundle builds, and lockfile runtime dependency closure counts/file bytes also passed/measured. In the build, Base UI output was 394.95 kB (127.64 kB gzip), React Aria was 431.37 kB (132.19 kB gzip), and Radix with a custom Combobox was 304.20 kB (95.74 kB gzip), including React/app runtime. The lockfile closure is 9 packages for Base UI, 13 for React Aria, and 74 for aggregate `radix-ui`, excluding shared peer dependencies; fixture disk bytes and bundle size do not establish production download or tree-shaking guarantees. Manual AT/Windows forced-colors, broader locale/direction behavior, framework-specific SSR, deeper APG keyboard cases, production consumer footprint, and maintainer review remain unknown. Keep this ADR proposed and select no provider until those gaps and review are resolved.

Classic's shadcn visual reference is separately bounded in the [Classic baseline note](../research/classic-baseline.md). Current shadcn documentation offers Base UI, Radix and React Aria paths; the July 2026 Base UI default is not a Moonframe provider decision. No shadcn source was copied and no exact generated style/template commit is pinned.
