# Moonframe UI — primary-source research log

**Accessed:** 2026-10-25. Sources were opened and checked live. Publication dates are shown only when visible on the source. This is evidence for design decisions, **not** proof that the repository has installed the reported versions.

| ID | Topic | Primary source (publisher) | Published / version observed | Finding relevant to Moonframe | Decision / verification |
|---|---|---|---|---|---|
| R01 | Source-owned theming | [shadcn/ui theming](https://ui.shadcn.com/docs/theming) | current web docs, publication not verified | CSS variables provide a shared semantic theme surface | Use semantic CSS custom properties; avoid attributing Moonframe as official shadcn; verified |
| R02 | Default primitive | [shadcn July 2026 change](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default) | July 2026 | Base UI became the default for new shadcn configurations; this is not migration evidence for an existing repo | Do not auto-select Base UI; verified |
| R03 | Tailwind runtime/build split | [Tailwind theme variables](https://tailwindcss.com/docs/theme) | docs displayed v4.3 | `@theme` creates design-utility namespaces; ordinary CSS variables work at runtime | Design explicit bridge; actual generator unchosen; verified |
| R04 | Token interchange | [DTCG published reports](https://www.designtokens.org/tr/2025.10/) | Final Community Group Reports, 28 Oct 2025 | DTCG 2025.10 is a publication family; not interchangeable with claim of full tool support | Use bounded DTCG subset after a tool compatibility spike; verified |
| R05 | Format definitions | [W3C CG Final Format Module](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) | 28 Oct 2025 | Token aliases, typed values and groups have formal representation | Validate aliases/types without claiming full spec conformance; verified |
| R06 | Accessibility normative target | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | W3C Recommendation, 12 Dec 2024 | WCAG 2.2 AA is an appropriate acceptance target | Manual and automated test gates both required; verified |
| R07 | Interaction patterns | [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) | living reference; date not verified | Patterns detail roles, states, focus and keyboard design | Per-component behavior contract, not skin-specific forks; verified |
| R08 | Base UI coverage | [Base UI about](https://base-ui.com/react/overview/about), [accessibility](https://base-ui.com/react/overview/accessibility) | site displayed npm 1.9.0; not pinned | Headless React API with Select/Combobox/Dialog/Menu and built-in interaction assistance | Candidate for spike; verified |
| R09 | Radix primitives | [Radix overview](https://www.radix-ui.com/primitives/docs/overview/introduction) | version not pinned | Accessible primitives, slot/composition and SSR guidance; custom Combobox requires separate evaluation | Candidate for spike; verified |
| R10 | React Aria | [React Aria](https://react-aria.adobe.com/), [quality](https://react-aria.adobe.com/quality) | version not pinned | Broad component/accessibility/internationalization support | Candidate for spike, measure API integration; verified |
| R11 | Storybook visual testing | [Storybook visual tests](https://storybook.js.org/docs/writing-tests/visual-testing) | docs displayed 10.6 | Stories can supply deterministic component scenarios; optional hosted visual tooling should not be a hidden dependency | Compare with local snapshots; verified |
| R12 | Local screenshot baseline | [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots) | version not pinned | Screenshot assertions need consistent environments | Prefer pinned browser/font/time/data in CI; verified |
| R13 | Package exports | [Node package exports](https://nodejs.org/api/packages.html#packages_exports) | online docs version fluctuates | Explicit exports constrain supported import paths | Specify contract before public publication; verified |
| R14 | Semver | [npm semantic versioning](https://docs.npmjs.com/about-semantic-versioning) | live docs | Public API changes have compatibility implications | Independently version contracts; migration note for breaking changes; verified |
| R15 | SVG use | [MDN SVG as an image](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_as_an_image) | date not pinned | SVG rendering contexts differ; inlining arbitrary untrusted SVG is risky | Require sanitization, manifest, security review, and no script/event handlers; verified |
| R16 | Audio restrictions | [MDN Web Audio best practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices) | date not pinned | Browsers may block autoplay; respecting user gesture and graceful failure matters | Default disabled; explicit consent; verified |

## Open research questions

1. Which versions of React/TypeScript/Tailwind/SSR toolchain are appropriate for a **new** implementation? None is installed in baseline repository; compare only after the owner chooses a target.
2. Which DTCG 2025.10 resolver/color features can a selected generator actually process? Do not claim exhaustive compatibility.
3. Which primitive has smallest complexity/SSR/keyboard defect surface with Moonframe's required design freedom? Perform instrumented spike before ADR approval.
4. What is the legally approved package scope, license, trademark position, icon/font rights? Owner/legal review is pending.
5. How do actual Moon ecosystem consumers import and bundle the library? A consumer matrix is absent.

## Evidence interpretation

Official library claims (such as 'accessible') describe authors' intent/features, not evidence of WCAG conformance in Moonframe. Every proposed choice and future package version must be re-verified near implementation. No community popularity score is treated as a factual performance benchmark.

## 2026-10-25 Premium Scope research extension (R17–R34)

These sources were opened/verified on 2026-10-25; where the official site did not clearly state a package version or release date, it remains *not confirmed*. The [competitive decision matrix](premium-competitive-analysis.md) records benefits, caveats, optionality and license constraints.

| Ref | Official source | Observed / decision |
|---|---|---|
| R17 | [shadcn components](https://ui.shadcn.com/docs/components) and [blocks](https://ui.shadcn.com/blocks) | Clear product distinction component vs reusable sections/page composition; benchmark structure only |
| R18 | [shadcn login blocks](https://ui.shadcn.com/blocks/login) | Login variants include minimal, cover/split and branded page layouts; no basis to claim they implement server auth |
| R19 | [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/docs/) | Candidate platform API/types; no installed versions proven |
| R20 | [Base UI about](https://base-ui.com/react/overview/about) and [releases](https://base-ui.com/react/overview/releases) | Official site reported Base UI 1.9.0 on **2026-10-09**; candidate, not approved |
| R21 | [Radix overview](https://www.radix-ui.com/primitives/docs/overview/introduction), [React Aria](https://react-aria.adobe.com/getting-started) | Accessibility-focused primitives; compare in existing ADR, no package selected |
| R22 | [TanStack Table overview](https://tanstack.com/table/latest/docs/overview) | Headless table engine; UI surface belongs to Moonframe; compare with external grid |
| R23 | [TanStack Virtual introduction](https://tanstack.com/virtual/latest/docs/introduction) | Virtualizer is headless; optional feature needs keyboard/AT proof |
| R24 | [React Hook Form useForm](https://react-hook-form.com/docs/useform) | Forms state adapter candidate; observed docs labeled v7; not an installed version |
| R25 | [Zod basics](https://zod.dev/basics) | Schema/type validation; official banner showed Zod 4.6; no runtime dependency |
| R26 | [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) | Cache/server-state alternative; observed React docs v5; core remains fetch-neutral |
| R27 | [Storybook testing](https://storybook.js.org/docs/writing-tests), [Playwright screenshots](https://playwright.dev/docs/test-snapshots) | UI docs/tests; hosted visual services optional; local fallback |
| R28 | [FullCalendar React](https://fullcalendar.io/docs/react), [license](https://fullcalendar.io/license) | Standard MIT distinct from Premium commercial/qualifying AGPL; license review required |
| R29 | [Tiptap editor](https://tiptap.dev/docs/editor/getting-started/overview) | Headless editor OSS/paid extensions split; optional |
| R30 | [MUI X licensing](https://mui.com/x/introduction/licensing/) | Community MIT, Pro and Premium commercial; not a core dependency |
| R31 | [Auth.js](https://authjs.dev/getting-started) | Official docs present migration to Better Auth; status and app fit must be reviewed |
| R32 | [Better Auth](https://better-auth.com/docs/introduction), [plugins](https://better-auth.com/docs/plugins) | Auth/session/security provider with passkey/MFA/org abilities, not a UI primitive |
| R33 | [Clerk sign-in](https://clerk.com/components/sign-in) | Managed auth component/service; vendor coupling remains consumer decision |
| R34 | [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) | WCAG 2.2 Recommendation dated 2024-12-12, manual+automated review needed |

**Research gaps:** Recharts official accessibility/feature docs not sufficiently verified during this pass, so treat chart engine as candidate without a technical/library claim. Actual bundle-size benchmarks, licenses of exact versions, SSR/RTL tests, auth-provider callback integrations and final framework support need prototype evidence before selection.


## Master Integration: verified primary-source addendum (2026-10-25)

The links below were checked against official current documentation on **2026-10-25**; publication/version is recorded where the upstream page states it. They guide governance/specification, not evidence of installed dependencies or GitHub Project configuration.

| ID | Publisher / source | Publication/version | Official fact, Moonframe implication | Confidence/caveat |
|---|---|---|---|---|
| INT-R01 | [DTCG Design Tokens 2025.10](https://www.designtokens.org/TR/2025.10/format/) | Final Community Group Report, 2025-10-28 | Stable interchange format with `$value` and optional `$type`, aliases; **not a W3C Recommendation**. Lock approved subset/tool versions under existing #5 and ADR-0002. | high; tooling conformity not tested |
| INT-R02 | [GitHub sub-issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues) | Official current docs, no publication date verified | Parent-child issues supported with permissions; use sparingly for one outcome per task. | high; repository Project views/config not verified |
| INT-R03 | [GitHub issue dependencies](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies) | Official current docs, no date verified | Blocked-by/blocking relationships exist; textual MFI dependency IDs safe until connector support confirmed. | high; do not claim native relationships already created |
| INT-R04 | [GitHub issue forms](https://docs.github.com/en/issues/building-community/configuring-issue-templates-for-your-repository) | Official docs | YAML forms/templates possible; first audit existing forms/labels/milestones before adding. | high; actual installed policy may differ |
| INT-R05 | [Tailwind v4 theme variables](https://tailwindcss.com/docs/theme) | Current docs v4; no page date verified | `@theme` defines compile-time utility namespace and CSS variables; runtime active skin still requires resolved CSS variable semantics. | high; toolchain not installed |
| INT-R06 | [shadcn/ui theming](https://ui.shadcn.com/docs/theming) | Current docs, no date verified | Uses semantic CSS property pairs. Classic can be visually inspired without affiliation or automatic upstream selection. | high; pinned upstream version pending #2 |
| INT-R07 | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | W3C Recommendation (2023, updated 2024) | Testable accessibility target but not claimable from docs alone; manual assistive-tech evidence remains gate. | high |
| INT-R08 | [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) | Official current guidance | Component-specific semantics and keyboard patterns; shared across skins. | high; APG guidance not a substitute for testing |
| INT-R09 | [Storybook accessibility](https://storybook.js.org/docs/writing-tests/accessibility-testing) | Current docs | axe checks are automated subset; incomplete/manual checks required; avoid 'fully accessible' claims. | high; Storybook not installed |
| INT-R10 | [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots) | Current docs | Stable OS/fonts/browser/fixture required to compare screenshots; no screenshot exists yet. | high |
| INT-R11 | [Node.js package exports](https://nodejs.org/api/packages.html) | Current version varies | `exports` controls public subpaths; consumer import proof and support ranges before publication. | high; future decision #4 |
| INT-R12 | [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/) | Current docs | OIDC avoids long-lived npm tokens; prerequisites include supported npm/Node versions; not configured here. | high; actual publisher setup not verified |

**Impact:** Confirms current no-implementation direction; highlights issue identity drift `MF-003` (document audit), separation of build and runtime token layers, production test-evidence gap and need for explicit permission checks. Research logs per specialty remain evidence supplements, not duplicate canonical owner maps.
