# Open-gate research brief — provider, package, tokens

**Checked:** 2026-10-25 (Asia/Jakarta). **Purpose:** put the remaining maintainer decisions for MF-005/#3, MF-006/#4, and MF-013/#5 in one reviewable place. This is research only: it does not approve a provider, package model, public name/license, token format, or generator. Canonical decision detail stays in the linked ADRs and spike reports. No issue state was changed.

## At a glance

| Gate | Evidence already available | Still open |
|---|---|---|
| [MF-005 / #3 — provider](../adr/0001-primitive-provider.md) | Three-provider temporary equal fixture; browser keyboard/focus/ARIA/composition; RTL/media; isolated SSR/hydration; bundle and dependency-closure measurements; exploratory APG cases and a Radix submenu wrapper | Maintainer selection or explicit defer rule; manual screen-reader and Windows forced-colors review; broader APG/locale/framework SSR and actual consumer integration |
| [MF-006 / #4 — package](../adr/0009-package-topology.md), [distribution](../adr/0010-package-distribution.md) | Private ESM skeleton; Node self-import and clean tarball import; deep import rejection; empty Vite consumer build; topology/distribution alternatives documented | Owner-reviewed package/distribution target, consumer support, public exports/CSS/peer/type policy, license/name/trademark, release and migration policy; real UI/SSR/CSS/TS evidence |
| [MF-013 / #5 — token subset](../adr/0002-token-format-and-generator.md) | Node 24.22.1 strict four-type fixture, alias/cycle negatives, deterministic CSS and Tailwind bridge; temporary Style Dictionary 5.7.1 compatibility check | Owner acceptance of a deliberately nonconformant subset, source/override semantics, production generator decision and CSS/TS output contract, full maps and reviewed values |

## MF-005 / #3 — provider

The repository's temporary fixture compared Base UI 1.9.0, React Aria Components 1.22.1, and aggregate Radix 1.8.1 under Node 24.22.1, Playwright 1.64.1, and Chromium 156. It recorded 24 baseline browser checks (eight per option), three RTL/media checks, three isolated React SSR/hydration checks, separate Vite/Tailwind builds, and lockfile closure measurements. See the complete methods and caveats in the [provider spike](provider-spike.md); these figures are fixture results, not production guarantees.

| Candidate | Observed tradeoff in this fixture | Official composition/component references |
|---|---|---|
| Base UI | Native coverage for Dialog, Select, editable Combobox and Menu; 394.95 kB JS / 127.64 kB gzip and 9-package runtime closure. Manual AT, broader framework support and production footprint remain unknown. | [Combobox](https://base-ui.com/react/components/combobox), [composition](https://base-ui.com/react/handbook/composition) |
| React Aria | Broad component and internationalization facilities; 431.37 kB / 132.19 kB gzip and 13-package closure. The fixture's directional keyboard/ARIA score was highest, not an approval. | [ComboBox](https://react-aria.adobe.com/ComboBox), [customization](https://react-aria.adobe.com/customization) |
| Radix | Smallest measured JS, 304.20 kB / 95.74 kB gzip, but the fixture needed a Moonframe-owned editable Combobox. Default nested-menu Escape differed from APG behavior; a documented-API wrapper passed its browser suite but transfers maintenance to Moonframe. Aggregate closure was 74 packages. | [Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu), [composition](https://www.radix-ui.com/primitives/docs/guides/composition) |

All sizes include React and app runtime; they are not guarantees about tree-shaking or shipped package cost. The directional ADR scores (Base UI 430, React Aria 425, Radix 400) are hypotheses only. Manual screen-reader and Windows forced-colors review, broader APG/locale coverage, framework SSR, additional composition states, and maintainer signoff remain outstanding. The owner decision is to select one candidate after those checks, or explicitly defer selection and record the accepted gaps. No provider is selected now.

## MF-006 / #4 — package and distribution

The repository currently contains `@moonframe/ui@0.0.0-private`, `private: true`, ESM, one empty root entry and no dependencies. Temporary Node tarball import/deep-path checks and a Vite 8.3.3 production build passed for that empty entry. They establish only the shell's import behavior. They do not establish a public API, React peer, CSS/reset, TypeScript declarations, SSR, browser support, or package release policy.

| Distribution model | Main benefit | Main cost / evidence needed |
|---|---|---|
| Runtime package | Versioned dependency and one support/release path | Real API, peers, CSS/types, tarball and consumer matrix must be proven |
| Source registry | Editable copied files in consumer repositories | Upgrade merges, overwrite safety, integrity/security, license and source ownership |
| Runtime plus source registry | Shared behavior plus editable blocks | Two compatibility/release channels and distinct license/update rules |
| Defer registry until runtime proof | Avoids premature CLI/server and keeps the later option open | Delays source-copy customization |

ADR-0009 conditionally proposes one runtime package first; ADR-0010 proposes deferring a registry until runtime proof. Both remain proposals. Open owner questions include distribution target, public name/scope/trademark and code license (which may remain pending), supported consumer and SSR matrix, exact export/CSS/type surface, React peers, semver/schema/token version boundaries, and migration/rollback. Node's [package entry-point and exports rules](https://nodejs.org/api/packages.html) and npm's [package.json fields](https://docs.npmjs.com/cli/v11/configuring-npm/package-json) are references for implementation; the current Node LTS CI pin does not establish a consumer `engines` range. No public package policy is approved.

## MF-013 / #5 — token subset and generator

The local proof supports explicit token `$type`, sRGB-object color, px/rem dimensions, nonnegative millisecond duration, finite number, and whole-token aliases. It checks multi-hop resolution, type mismatch, cycles, missing references, malformed syntax, deterministic CSS and a Tailwind v4 bridge. It intentionally rejects group `$type` inheritance, `$extends`, `$root`, `$ref` JSON Pointer, unsupported fields/extensions and proposed unsupported types. This is a Moonframe-specific DTCG-inspired subset, not a conformant DTCG implementation: the [DTCG 2025.10 Format](https://www.designtokens.org/tr/2025.10/format/) requires conforming tools to support JSON Pointer references (§7.1.2).

The temporary Style Dictionary 5.7.1 fixture generated CSS for the four tested types and aliases, but also accepted out-of-subset group inheritance and a `2vh` value. Upstream documents [incomplete 2025.10 support](https://styledictionary.com/info/dtcg/). Therefore its compatibility result does not select it as the production generator; any use would need Moonframe's strict validator first. A small custom producer is also possible, but Moonframe would then own parsing, value conversion, alias behavior and future compatibility.

Open owner questions: accept or reject the nonconformant subset and its interoperability wording; approve the token source/overlay/consumer-override boundaries; choose a production generator approach; define the CSS and TypeScript token contract; then review actual token values and contrast before any of the 30 appearance maps leave `pending`. No production maps, generated declarations, or generator selection exist.

## Current state and next action

The current worktree records #3, #4 and #5 as blocked, and live GitHub issues #3–#5 remain open. This brief changes no task status. When the owner is ready, decide or explicitly defer each gate; any implementation must then follow that gate's ADR and evidence requirements. Private local package work remains separate from public distribution approval.

