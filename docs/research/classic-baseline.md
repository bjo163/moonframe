# Classic visual baseline and upstream reference boundary

**Reviewed:** 2026-10-25 (Asia/Jakarta). This is a visual reference specification, not copied shadcn source and not an upstream compatibility claim. The pinned capture below makes the Classic visual comparison reproducible; implementation/provider adoption remains deferred.

## Reference snapshot

- shadcn's [July 2026 Base UI default announcement](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default) says new projects now default to Base UI, while Radix remains supported and does not need migration. Its own context says the choice is a new-project default, not a reason to switch a working production app.
- shadcn's [July 2026 React Aria announcement](https://ui.shadcn.com/docs/changelog/2026-07-react-aria) adds React Aria as another first-class option; it states Base UI remains the default and Radix remains supported. The project therefore represents multiple behavior backends behind a similar source-owned component approach.
- The current [theming docs](https://ui.shadcn.com/docs/theming), reviewed 2026-10-25, recommend semantic CSS variables and map them into Tailwind utilities with `@theme inline`. Current examples use a `base-nova` style configuration and semantic pairs such as background/foreground. The [Tailwind v4 guide](https://ui.shadcn.com/docs/tailwind-v4) documents `@theme inline` and says its v4/React 19 setup removes `forwardRef` patterns and adds `data-slot` attributes. These are current docs, not a pinned generated template.
- Current [component pages](https://ui.shadcn.com/docs/components/base/combobox) display Base UI, React Aria, and Radix implementations as selectable alternatives. The current [Next.js install guide](https://ui.shadcn.com/docs/installation/next) is a setup guide, not evidence that Moonframe must use Next.js.

## Pinned Classic comparison capture

Use the official [shadcn@4.22.1 release](https://github.com/shadcn-ui/ui/releases/tag/shadcn%404.22.1) (published 2026-10-18) at exact source commit [`daaf156ee00ed91cc7e6bdd937c1b4973152d141`](https://github.com/shadcn-ui/ui/commit/daaf156ee00ed91cc7e6bdd937c1b4973152d141) as the read-only Classic comparison snapshot. Its pinned [`apps/v4/components.json`](https://github.com/shadcn-ui/ui/blob/daaf156ee00ed91cc7e6bdd937c1b4973152d141/apps/v4/components.json) records `style: "new-york"`, `baseColor: "neutral"`, Tailwind CSS variables enabled, and Tailwind v4's empty config path. Inspect the pinned [Button](https://github.com/shadcn-ui/ui/blob/daaf156ee00ed91cc7e6bdd937c1b4973152d141/apps/v4/public/r/styles/new-york/button.json) and [Card](https://github.com/shadcn-ui/ui/blob/daaf156ee00ed91cc7e6bdd937c1b4973152d141/apps/v4/public/r/styles/new-york/card.json) registry specimens for shape and density: compact rounded controls with a narrow focus ring, and rounded, bordered cards with restrained elevation and generous inner spacing. This is an upstream snapshot for visual comparison, not a Moonframe package, recipe, token set, or provider requirement.

The pinned Button specimen imports Radix Slot. That implementation detail is deliberately excluded from the visual baseline; MF-005 owns provider evidence and decision. The live docs now also show `base-nova` examples and multiple behavior backends, so do not silently replace this pinned capture with mutable `@latest` output.

## Proposed Classic traits

The [existing skin contract](../../contracts/moonframe-skin-specifications-v1.0.json) remains authoritative. For the Classic reference, preserve its proposed conventional sidebar/topbar, balanced content container, comfortable density, neutral sans hierarchy, standard rounded controls, restrained borders/elevation, quiet tables, predictable native-feeling forms, readable modal structure, familiar navigation, restrained motion, and no required signature illustration.

Use semantic role names and CSS custom properties as the conceptual theming reference. Keep Moonframe's 78-token dictionary, its `--mf-*` namespace, 15 distinct skins, explicit Light/Dark modes, and generated skin maps as Moonframe-owned decisions. No shadcn token names, component files, styles, or colors are imported. No production token value is approved by this note; Classic Light/Dark maps remain pending value and contrast review.

| Reference idea | Moonframe treatment |
|---|---|
| Semantic colors exposed through CSS variables | Adopt the architectural pattern; use Moonframe-owned semantic token IDs and `--mf-*` names. |
| Familiar application shell and understated surfaces | Adopt as Classic's proposed grammar; retain the distinct compositions defined by every other Moonframe skin. |
| CLI-generated source-owned components | Do not adopt as the Moonframe package/distribution model. Provider/package choice is covered by MF-005 and MF-006. |
| shadcn styles, component APIs, presets, names, or source files | Do not copy or claim compatibility. If code or artwork is considered later, perform a separate license/provenance and attribution review first. |
| Pinned `new-york`/neutral visual snapshot | Use its restrained geometry, density and semantic color mapping as Classic reference traits; its Radix Slot implementation is excluded. Base UI, Radix and React Aria remain in the equal-fixture provider comparison. |

## Compatibility, accessibility, and rollback

Classic should remain usable if optional assets fail: the contract has no required illustration, and typography must have a legible platform/system fallback. Functional icons and semantic states remain shared rather than skin-specific. Verify text/non-text contrast, visible focus, keyboard/focus restoration, forced-colors, 320px reflow, RTL logical layout, reduced motion, and long localized content in the same fixtures used for Moonpunk, Moonzine, and Moonledger; do not infer passes from upstream accessibility claims.

The four-skin fixture and reviewer workflow belong to [MF-024 / issue #6](https://github.com/bjo163/moonframe/issues/6). Its screenshots and pair-review records remain pending until a rendering implementation exists. Changing this proposed grammar can be reverted in the skin contract and this note without a package migration because no consumer code or dependency was changed.

## Deferred decision

The visual comparison anchor is pinned to `shadcn@4.22.1`, style `new-york`, `neutral`, and the commit above; no upstream files, generator output, or compatibility promise is adopted. The exact generated style is separate from provider approval: MF-005 remains unselected, and MF-006 owns package/distribution. Maintainer review, four-skin renders, accessibility evidence and Moonframe production token values remain pending.
