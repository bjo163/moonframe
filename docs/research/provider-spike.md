# Primitive provider comparison: paper review and spike gate

**Reviewed:** 2026-10-25 (Asia/Jakarta). Source review and isolated browser spike. Browser fixture lives only under the operating-system temporary directory; no provider dependency, app source, or package manifest was added to Moonframe. The fixture is disposable and is not a supported project tool.

## Source and release snapshots

| Candidate | Version/release evidence | Dialog / Select / editable Combobox / nested action Menu | Main integration shape |
|---|---|---|---|
| Base UI | [v1.9.0 release notes](https://base-ui.com/react/overview/releases/v1-9-0), dated 2026-10-09; docs reviewed on 2026-10-25. | Dialog documents focus entry/return controls; Select and Combobox are separate components; Combobox is for choosing predefined options, while free-form search is a different use case; Menu documents `SubmenuRoot` and nested items. | Compound parts; `render` prop and prop merging. Provides styling freedom but needs a same-fixture proof for ref/event composition and SSR/portal behavior. |
| Radix Primitives | [official release notes](https://www.radix-ui.com/primitives/docs/overview/releases) include a 2026-07-20 maintenance entry; [Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) and [Select](https://www.radix-ui.com/primitives/docs/components/select) docs reviewed on 2026-10-25. Exact stable aggregate package version for a reproducible fixture was not verified in this review. | Dialog and Select have documented keyboard/focus behavior. The official component overview does not identify a dedicated editable Combobox primitive; a custom composition would be needed, so it cannot be counted as equivalent coverage without a design and test. Dropdown Menu offers submenu composition; confirm exact nested interaction behavior in the fixture. | Compound parts with `asChild` composition. Slot/ref/event merging differs from Base UI's `render` API. Style control is strong; custom Combobox raises implementation and accessibility maintenance cost. |
| React Aria | [React Aria v1.22.0 release notes](https://react-aria.adobe.com/releases/) dated 2026-10-08. The docs also have a separate React Aria Components release line; pin package choice and exact version in a future lockfile. | Dialog behavior is assembled with modal/focus primitives; Select and ComboBox components are documented; Menu supports `SubmenuTrigger`. It offers broad internationalization and collection behavior. | Hooks expose DOM props/state; React Aria Components expose composed components/render props and data-state styling. Requires more explicit composition work with hooks; component API offers more complete out-of-box behavior. |

For the spike, package registry resolution and lockfile pinned Base UI 1.9.0, React Aria Components 1.22.1, React/React DOM 19.2.8, Vite 8.3.3, Playwright 1.64.1, Tailwind CSS/@tailwindcss/vite 4.3.3, and jsdom 30.1.3. The fixture was initially run under Node 22.23.4 and rerun successfully under the repository standard Node 24.22.1 LTS. Radix was not installed because an equivalent editable Combobox would require a separate custom implementation; that option remains a paper comparison only. Exact dependency lock is outside the repository at `%TEMP%\\moonframe-provider-spike-node24.22.1\\fixture\\package-lock.json` and is intentionally not committed.

## Equal-fixture plan and evidence status

The fixture implements identical Dialog, Select, editable Combobox, and nested action Menu tasks in Base UI and React Aria. Content and data are fixed. It uses Chromium 156 via Playwright; it does not include manual assistive technology, OS forced-colors, or Next.js.

| Dimension | Source-review finding | Runtime outcome |
|---|---|---|
| Keyboard and focus restoration | All candidates document accessibility/focus support at the component level. | **Passed for tested cases:** 8 Playwright checks, 4 each per provider: Dialog accessible label/Escape/trigger focus return; keyboard Select selection and controlled value; editable Combobox filtering and keyboard selection; nested action Menu activation and focus return. Tab containment, outside dismissal, arrow/typeahead edge cases remain untested. |
| ARIA and semantics | Candidate docs describe semantic patterns, but composition correctness depends on fixture markup and labels. | **Not tested.** Inspect accessible names/roles/states and compare with WAI-ARIA APG. |
| RTL and internationalization | React Aria documents broad internationalization; Radix advertises RTL support; Base UI behavior is component-specific. | **Basic smoke passed:** set document direction to RTL in Chromium; editable Combobox keyboard selection and Dialog open/Escape still worked for both providers. Popup placement, submenu arrow semantics, locale-sensitive typeahead, and broader scripts/locales remain untested. |
| Forced colors / reduced motion | No cross-candidate outcome is established by this review. | **Emulation smoke passed:** Chromium reported `forced-colors: active` and `prefers-reduced-motion: reduce`; core Combobox and Dialog interactions remained available in each provider. No Windows system forced-colors/manual visual audit or motion animation audit was performed. |
| SSR and hydration | Framework compatibility cannot be inferred from client components or portal documentation alone. | **Passed for isolated React SSR fixture:** `renderToString` produced closed-dialog markup for each provider; Chromium hydration preserved the fixture, emitted no console/page errors, and opened the Dialog. This was not a Next.js integration test; framework-specific routing, streaming, portals, and production deployment remain unknown. |
| Styling and composition | Base UI `render`, Radix `asChild`, and React Aria hook/component models are structurally different. | **Not tested.** Check class/style/state exposure, DOM ref forwarding, event order/cancellation, nested button safety and custom elements. |
| Dependencies and bundle | Exact fixture package versions are pinned by its temporary lockfile. | **Measured in separate production builds:** Base UI fixture JS 394.21 kB (gzip 127.44 kB); React Aria fixture JS 431.13 kB (gzip 132.11 kB); both CSS 7.11 kB (gzip 2.05 kB). Same Node/Vite/Tailwind/React versions and content; React and app runtime are included in each JS measurement. This makes the React Aria fixture 36.92 kB raw / 4.67 kB gzip larger in this one build setup. It is a fixture comparison, not a production library size guarantee. Radix and full transitive install footprint remain unmeasured. |

The browser harness ran on 2026-10-25 using Node 24.22.1 LTS, Playwright 1.64.1 and Chromium 156: 8 baseline keyboard/focus checks, 2 RTL/media smoke checks, and 2 SSR/hydration checks passed. Separate Vite/Tailwind production builds reported above. Vite emitted module-level `use client` warnings because this generic client bundle is not an SSR framework build. A prior JSDOM-only SSR attempt failed because browser `CSS` APIs were unavailable in that harness; the successful server-render + real Chromium hydration check supersedes that harness attempt for this isolated fixture only.

## Directional weighted matrix (paper hypotheses only)

This retains the earlier ordinal scoring solely as a review aid. It is **not a provider decision**. Weights total 100; scores 1–5; totals are arithmetic and have low confidence. The custom-Combobox burden is a material Radix caveat, and scores remain source-review hypotheses; runtime evidence is summarized separately above and does not change the scores.

| Criterion | Weight | Base UI | Radix | React Aria | Evidence / caveat |
|---|---:|---:|---:|---:|---|
| Keyboard/ARIA/focus potential | 25 | 4 | 4 | 5 | First-party accessibility docs; no manual AT evidence. |
| Required widget coverage | 20 | 5 | 3 | 5 | Radix has no documented dedicated editable Combobox in its component overview; custom equivalent is unproven. |
| CSS/Tailwind freedom | 20 | 5 | 5 | 4 | Architecture-based prediction only; test the candidate consumer Tailwind v4 setup. |
| Composition ergonomics | 10 | 4 | 4 | 3 | `render`, `asChild`, and hooks/components differ; purely provisional. |
| SSR / hydration / direction | 10 | 4 | 4 | 4 | No fixture evidence; platform unknowns remain. |
| Maintenance / release evidence | 5 | 4 | 4 | 4 | Release pages show activity; cadence is a weak proxy for issue quality/support. |
| Bundle / optionality / rollback | 10 | 3 | 4 | 3 | Unknown until identical builds; low scores reflect uncertainty, not measured cost. |
| **Directional total / 500** | **100** | **430** | **395** | **420** | Do not select by score. |

## Decision and blocker

**Decision: no provider selected.** MF-003 established a synthetic first consumer and recommends MoonWitness XIV board for a later approved real-app smoke. Base UI and React Aria have equal-fixture keyboard/focus checks, basic RTL/media emulation, isolated SSR/hydration checks and separate bundle builds. Radix remains paper-only: its catalog does not provide an editable Combobox, which would require a custom implementation and a separately justified equal-semantic fixture. Manual screen-reader/AT review, Windows forced-colors visual review, broad locale/direction behavior, framework-specific SSR, deeper keyboard/APG coverage, Radix runtime/bundle measurement, and maintainer review remain outstanding. This is partial runtime evidence; MF-005 stays open.

The repository CI and local runtime are pinned to Node 24.22.1 LTS via `.nvmrc`; the fixture uses that same Node version in a temporary isolated directory. Keep the issue open and ADR proposed until outstanding coverage and maintainer review exist. No dependency, public API, or production consumer changes are included in this research.

## Sources

- [Base UI Dialog](https://base-ui.com/react/components/dialog), [Select](https://base-ui.com/react/components/select), [Combobox](https://base-ui.com/react/components/combobox), [Menu](https://base-ui.com/react/components/menu), [composition](https://base-ui.com/react/handbook/composition).
- [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog), [Select](https://www.radix-ui.com/primitives/docs/components/select), [Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu), [composition](https://www.radix-ui.com/primitives/docs/guides/composition), [accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility).
- [React Aria Dialog](https://react-aria.adobe.com/Modal/useDialog), [Select](https://react-aria.adobe.com/Select), [ComboBox](https://react-aria.adobe.com/ComboBox), [Menu](https://react-aria.adobe.com/Menu), [FocusScope](https://react-aria.adobe.com/FocusScope), [releases](https://react-aria.adobe.com/releases/).
- [WAI-ARIA APG Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [Select-only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/), [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).
