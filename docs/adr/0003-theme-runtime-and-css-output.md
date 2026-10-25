# ADR-0003 — Theme preferences, runtime attributes, CSS output

**Date:** 2026-10-25. **Status:** `proposed`; *conceptual resolver contract is specified*, framework/SSR/persistence/output partition **open** pending MF-003 consumer audit and MF-013 generator spike. Canonical enums, fallbacks and root attributes are in [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json).

## Recommended invariant

One explicit, validation-first effective state: `{skinId, resolvedMode, density, resolvedMotion, contrast, direction}`. Requested preference `modePreference:system` remains saved as `system`; `resolvedMode` is a computed `light|dark`, NEVER a saved preference. Root attributes are updated consistently; no intermediate `data-mode=system`.

## Precedence

For each axis **application-controlled value** (if explicitly controlled) > validated user-saved preference (if adapter enabled) > OS preference (only if preference says `system` or axis is unset and applicable) > application default > documented safe fallback. Caller-supplied `defaultPreferences` are defaults, **not enforced props**; distinguish from `controlledPreferences`. A stored explicit light/dark must not change on OS mode updates. Forced-colors is a UA-enforced mode, not an app's high contrast toggle and not a third generated appearance. `dir` comes from effective locale/document direction, unless explicit app-controlled direction is supported; no OS direction media query exists.

Root: `data-skin`, `data-mode`, `data-density`, `data-motion`, `data-contrast`, `dir`; `data-motion` only `full|reduced`. CSS cascade order: theme base defaults; skin/mode role maps; density + contrast + motion preference overlays; forced-colors high-priority OS accommodations; local component exceptions last only if approved and MUST NOT override forced-color safety.

## Persistence and SSR options

1. **Server-supplied preference/cookie adapter**: when verified consumer SSR has allowed storage, server renders resolved state; best first-paint continuity but cookie consent/policy and app coupling need evidence.
2. **Client-side storage (localStorage)**: opt-in adapter can restore after JS starts; risk FOUC/hydration mismatch. Optional small CSP-approved bootstrap script may set attributes *before stylesheet paint*; no inline script prescribed without CSP review and hosting framework evidence.
3. **No persistence/default OS**: valid zero-storage fallback; no-JS shows readable Classic using CSS `prefers-color-scheme` when feasible and avoids UI failure.

No framework is installed in Moonframe: **do not say Next.js, Vite, cookie or localStorage is selected**. A future consumer proof must compare first paint, rehydration, blocked storage, OS listener changes, multiple tabs, privacy policy and no-JS fallback.

## CSS output candidate

Start by *evaluating* a consolidated, small, deterministic CSS base for 30 semantic role maps with **lazy optional decoration/media assets** (not 15 large skin art packs). Trade-off: immediate switching/no FOUC if loaded, but higher base CSS bytes. Compare against per-skin split files with SSR/preload or on-demand loading in real consumer; do not promise performance without a benchmark.

[Tailwind v4 `@theme inline`](https://tailwindcss.com/docs/theme) can expose static semantic utilities via runtime CSS variable names, while application skin selection changes scoped custom properties. [Manual dark selector](https://tailwindcss.com/docs/dark-mode) should target `[data-mode=dark]`, not guess from a saved `system` string. Class scanner needs complete static class strings. CSS `color-scheme:light|dark` reflects effective mode for native controls; respect `forced-colors` and `prefers-reduced-motion`.

## Security/compatibility

Validate all skin IDs, token values/units/aliases and asset references at build time; don't interpolate untrusted values into CSS selectors/URLs, don't use `innerHTML` for token application or remote SVG. No analytics/phone-home. Avoid dramatic transitions/glitches if OS prefers reduced motion. Typography licenses, gamut fallback, stacking contexts and high contrast require manual proof.

**Revisit:** when consumer stack or a deploy-specific CSP/hydration policy becomes known, or when first paint/byte measurements show a different CSS packaging better.
