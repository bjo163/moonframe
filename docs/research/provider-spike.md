# Primitive provider comparison: paper review and spike gate

**Reviewed:** 2026-10-25 (Asia/Jakarta). This is a source review, not an implementation spike. No provider was installed, imported, executed, or measured. Documentation/release versions below are evidence snapshots; exact transitive dependency trees and tested compatibility with Moonframe's consumer are unknown.

## Source and release snapshots

| Candidate | Version/release evidence | Dialog / Select / editable Combobox / nested action Menu | Main integration shape |
|---|---|---|---|
| Base UI | [v1.9.0 release notes](https://base-ui.com/react/overview/releases/v1-9-0), dated 2026-10-09; docs reviewed on 2026-10-25. | Dialog documents focus entry/return controls; Select and Combobox are separate components; Combobox is for choosing predefined options, while free-form search is a different use case; Menu documents `SubmenuRoot` and nested items. | Compound parts; `render` prop and prop merging. Provides styling freedom but needs a same-fixture proof for ref/event composition and SSR/portal behavior. |
| Radix Primitives | [official release notes](https://www.radix-ui.com/primitives/docs/overview/releases) include a 2026-07-20 maintenance entry; [Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) and [Select](https://www.radix-ui.com/primitives/docs/components/select) docs reviewed on 2026-10-25. Exact stable aggregate package version for a reproducible fixture was not verified in this review. | Dialog and Select have documented keyboard/focus behavior. The official component overview does not identify a dedicated editable Combobox primitive; a custom composition would be needed, so it cannot be counted as equivalent coverage without a design and test. Dropdown Menu offers submenu composition; confirm exact nested interaction behavior in the fixture. | Compound parts with `asChild` composition. Slot/ref/event merging differs from Base UI's `render` API. Style control is strong; custom Combobox raises implementation and accessibility maintenance cost. |
| React Aria | [React Aria v1.22.0 release notes](https://react-aria.adobe.com/releases/) dated 2026-10-08. The docs also have a separate React Aria Components release line; pin package choice and exact version in a future lockfile. | Dialog behavior is assembled with modal/focus primitives; Select and ComboBox components are documented; Menu supports `SubmenuTrigger`. It offers broad internationalization and collection behavior. | Hooks expose DOM props/state; React Aria Components expose composed components/render props and data-state styling. Requires more explicit composition work with hooks; component API offers more complete out-of-box behavior. |

Version claims in this table are based on each project's first-party release documentation, not package registry resolution. Radix's exact fixture version is **unknown**; React Aria's package family/version mapping needs to be pinned together; all three need an exact lockfile before coding or comparing bundle cost.

## Equal-fixture plan and evidence status

The future fixture should implement identical Dialog, Select, editable Combobox, and nested action Menu behavior in Base UI and React Aria first. Radix may join for Dialog, Select, and Menu, but the Combobox must be explicitly identified as custom and compared on equal semantics, not omitted from score. Keep content, styles, event scenarios, and data fixed. Record source commit, lockfile, Node/package-manager versions, React version, build command, bundle analyzer output, and browser versions.

| Dimension | Source-review finding | Runtime outcome |
|---|---|---|
| Keyboard and focus restoration | All candidates document accessibility/focus support at the component level; Base UI and Radix document Dialog keyboard/focus behaviors. | **Not tested.** Test tab containment, Escape, outside dismissal, trigger restoration, nested-menu arrows/Escape, typeahead, Select type-to-select, and Combobox input/listbox focus. |
| ARIA and semantics | Candidate docs describe semantic patterns, but composition correctness depends on fixture markup and labels. | **Not tested.** Inspect accessible names/roles/states and compare with WAI-ARIA APG. |
| RTL and internationalization | React Aria documents broad internationalization; Radix advertises RTL support; Base UI behavior is component-specific. | **Not tested.** Test direction, text entry, popup placement, submenu navigation and locale-sensitive typeahead. |
| Forced colors / reduced motion | No cross-candidate outcome is established by this review. | **Not tested.** Exercise Windows forced-colors and `prefers-reduced-motion`; no pass inferred from docs. |
| SSR and hydration | Framework compatibility cannot be inferred from client components or portal documentation alone. | **Not tested.** Render/hydrate the same fixture in Next and inspect hydration warnings, IDs, portals, and initial closed state. |
| Styling and composition | Base UI `render`, Radix `asChild`, and React Aria hook/component models are structurally different. | **Not tested.** Check class/style/state exposure, DOM ref forwarding, event order/cancellation, nested button safety and custom elements. |
| Dependencies and bundle | No isolated package graph or equivalent import was built. | **Unmeasured.** Pin package versions, build identical production fixtures, report compressed and uncompressed output and shared React exclusion. |

## Directional weighted matrix (paper hypotheses only)

This retains the earlier ordinal scoring solely as a review aid. It is **not a provider decision**. Weights total 100; scores 1–5; totals are arithmetic and have low confidence. The custom-Combobox burden is a material Radix caveat, and no hands-on outcomes support any score.

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

**Decision: no provider selected.** MF-003 established a synthetic first consumer and recommends MoonWitness XIV board for a later approved real-app smoke. However, the repository's active tooling is documentation validation only, and its package architecture backlog says React/build/Playwright are not installed. The MF-005 issue allows an isolated proof only after the runtime is decided. Therefore this paper review does not satisfy the required two-option hands-on fixture, keyboard/AT/RTL/forced-colors/reduced-motion/SSR results, or bundle measurements.

Before implementation, an owner must choose and record the Node/package-manager/test/browser runtime and authorize the isolated dependency fixture. Then pin all candidate packages and run the equal fixture. Keep the issue open and ADR proposed until those results and maintainer review exist. No dependency, public API, or production consumer changes are authorized by this research.

## Sources

- [Base UI Dialog](https://base-ui.com/react/components/dialog), [Select](https://base-ui.com/react/components/select), [Combobox](https://base-ui.com/react/components/combobox), [Menu](https://base-ui.com/react/components/menu), [composition](https://base-ui.com/react/handbook/composition).
- [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog), [Select](https://www.radix-ui.com/primitives/docs/components/select), [Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu), [composition](https://www.radix-ui.com/primitives/docs/guides/composition), [accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility).
- [React Aria Dialog](https://react-aria.adobe.com/Modal/useDialog), [Select](https://react-aria.adobe.com/Select), [ComboBox](https://react-aria.adobe.com/ComboBox), [Menu](https://react-aria.adobe.com/Menu), [FocusScope](https://react-aria.adobe.com/FocusScope), [releases](https://react-aria.adobe.com/releases/).
- [WAI-ARIA APG Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [Select-only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/), [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).
