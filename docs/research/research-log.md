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
