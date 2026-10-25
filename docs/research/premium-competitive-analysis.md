# Moonframe UI — competitive research and provider boundary analysis

**Reviewed:** 2026-10-25, official primary pages. This is documentation research, not installed-version benchmarking or legal clearance. Avoid copying third-party code/assets without separate license review.

| Product/technology | Primary official source | Verified practical role | License / dependency risk | Moonframe decision |
|---|---|---|---|---|
| shadcn/ui components and blocks | [components](https://ui.shadcn.com/docs/components), [blocks](https://ui.shadcn.com/blocks), [login](https://ui.shadcn.com/blocks/login) | Reference breadth for separate components vs login/dashboard layouts | Source-owned component code still needs attribution/license and maintenance assessment | Benchmark completeness and CLI ergonomics; do not claim affiliation |
| React & TypeScript | [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/docs/) | Framework/type system candidates | Actual consumer runtime versions not found in repo | Remain planned until MF-003 |
| Tailwind CSS v4 | [theme](https://tailwindcss.com/docs/theme) | Theme utility namespaces, alongside runtime CSS variables | Compile-time/build integration and cascade/reset ownership | Token bridge, not a separate color-only skin |
| Base UI | [about](https://base-ui.com/react/overview/about), [release](https://base-ui.com/react/overview/releases) | Unstyled accessible interactions; 2026-10-09 v1.9.0 release observed | Provider public API leak/focus/version compatibility | Candidate, undecided ADR-0001 |
| Radix | [official overview](https://www.radix-ui.com/primitives/docs/overview/introduction) | Composable accessible primitives/slots | Missing feature coverage/interop to test; upstream docs have evolved | Candidate, no migration |
| React Aria | [get started](https://react-aria.adobe.com/getting-started) | Accessibility/i18n interaction alternative | Styling API/bundle, SSR integrations unmeasured | Candidate for provider spike |
| TanStack Table | [overview](https://tanstack.com/table/latest/docs/overview) | Headless table processing/state | UI and keyboard remain Moonframe responsibility | Preferred candidate for tier 2–3 spike; **not installed** |
| TanStack Virtual | [intro](https://tanstack.com/virtual/latest/docs/introduction) | Headless long list/table rendering | Screen reader/keyboard virtualized access and row measurements need proof | Optional future, not core |
| React Hook Form | [useForm](https://react-hook-form.com/docs/useform) | Form state management option | Avoid mandatory runtime in basic Field/Input; controlled/uncontrolled compatibility | Optional integration |
| Zod | [basics](https://zod.dev/basics) | Schemas and typed validation | Domain/server validation may differ; current site advertises Zod 4.6 | Optional adapter, not auth security |
| TanStack Query | [React overview](https://tanstack.com/query/latest/docs/framework/react/overview) | Async/server-state library | Do not tie core table UI to caching/query keys | Optional data integration |
| Storybook | [writing tests](https://storybook.js.org/docs/writing-tests) | Component stories/interactions/visual QA | Hosted Chromatic is optional and priced; local Playwright alternative | Future authoring/test tool |
| Playwright | [visual comparisons](https://playwright.dev/docs/test-snapshots) | Screenshot regression | Must pin browser/fonts/time and test environment | Local CI visual alternative |
| FullCalendar | [React](https://fullcalendar.io/docs/react), [license](https://fullcalendar.io/license) | Calendar UI engine | Standard MIT; resource/premium features need commercial or qualifying license | Optional calendar module only |
| Tiptap | [overview](https://tiptap.dev/docs/editor/getting-started/overview) | Modular editor over ProseMirror | OSS core MIT; cloud/pro extensions paid | Optional rich text, not core |
| MUI X Data Grid | [licensing](https://mui.com/x/introduction/licensing/) | Complete grid benchmark | Community MIT vs commercial Pro/Premium; redistribution conditions | Compare enterprise grid vs headless before selecting |
| Better Auth | [intro](https://better-auth.com/docs/introduction), [plugins](https://better-auth.com/docs/plugins) | Authentication/session/security backend with optional features | Security behavior is provider side; version/license/hosting assessment needed | UI callbacks only; optional provider bridge |
| Auth.js | [getting started](https://authjs.dev/getting-started) | Auth strategies/sessions; official docs show migration path to Better Auth | Changes in project direction to research; no hard lock | Optional adapter subject to reassessment |
| Clerk | [SignIn UI](https://clerk.com/components/sign-in), [docs](https://clerk.com/docs/guides/configure/auth-strategies/sign-up-sign-in-options) | Managed auth with hosted/vendor UI | Commercial/service coupling, restyling costs, provider constraints | Integration inspiration, not core dependency |
| WCAG 2.2 / ARIA APG | [WCAG](https://www.w3.org/TR/WCAG22/), [APG](https://www.w3.org/WAI/ARIA/apg/) | Acceptance and interaction patterns | Conformance depends on actual implementation/consumer usage | WCAG 2.2 AA target, human/automated checks |

## Scoring methodology and open risks

For implementation ADRs, score: accessibility keyboard/focus (25%), styling/15-skin freedom (20%), API/provider coverage (15%), bundle cost (10%), SSR/hydration (10%), license/redistribution (10%), adoption/maintenance confidence (5%), migration/lock-in (5%). All actual benchmark scores **pending fixture evidence**; vendor marketing is not proof. For a variant, include default/failure/RTL/motion and screen-reader notes plus bundle size in a pinned sample consumer.

**High-risk legal detail:** FullCalendar Standard versus Premium, MUI X MIT Community versus paid grid tiers, and Tiptap OSS versus paid extensions are different licenses/rights. If future Moonframe ships premium UI templates or public npm packages, the maintainer must review redistribution and trademark rights rather than assuming a typical consumer license covers redistribution.

**Recommended competitive position:** Moonframe should not race to build an entire auth backend, grid engine or editor. Deliver genuinely skin-aware composition, quality state contracts, integration seams and reference fixtures. Use adapters when a credible specialized headless engine is superior and license allows distribution.
