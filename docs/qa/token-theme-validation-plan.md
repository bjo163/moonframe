# Moonframe token/theme validation plan

**Date:** 2026-10-25. **Status:** specification only. Current Node contract validator may verify syntax/structure/cross-file invariants. No approved token values, runtime theme provider, CSS output or browser visual results exist.

## Validation gate hierarchy

| Gate | Status now | Test/acceptance | Blocker |
|---|---|---|---|
| S0 Documentary contract consistency | can execute | exactly 15 IDs, 30 pending maps, 105 not-reviewed pairs, consistent vocabulary and new field enums/source ownership | invalid structure/duplication |
| S1 Bounded DTCG source syntax | fixture-only test recommended | sample valid/invalid token values, aliases, collision, type, cycles, unknown keys and unit checks | parser failure |
| S2 Production value resolver | **not implementable now** | all 78 existing names × all 30 effective appearances, no unresolved aliases, source lineage, no missing mode | missing/unapproved values |
| S3 Generator deterministic export | **not implementable now** | two runs byte-identical, check vs write separation, generated header and hash, CSS/TS/Skin Lab references | drift, invalid CSS/imports |
| S4 Theme runtime/SSR | **not implementable now** | system/light/dark, OS updates, initial HTML consistency, blocked storage, CSP/prepaint, no-JS and multi-tabs | unhandled stale or wrong mode |
| S5 Accessibility/visual | **not implementable now** | contrast pairing and 30 skins, 105 paired screenshots, responsive zoom, forced-colors/reduced motion, RTL, screen readers | validated violation or missing required human proof |
| S6 Package consumer release | **not implementable now** | tree shaking, real framework CSS import, semver and breakages, legal font/asset rights | failing install/release audit |

## Invalid fixtures (explicit future inputs)

- Token name with spaces/illegal reserved segment; repeat token path across same overlay; key drift from dictionary.
- Unknown `$type`, bad color component (outside allowed range), alpha out of range, unsupported dimension unit, negative duration, non-finite numeric.
- Missing 1/78 required semantic names in any effective map; unknown skin; `system` passed as appearance map.
- Whole-token alias points to nonexistent token; points to itself; A→B→A cycle; referenced type mismatch; masked primitive with conflicting declared type.
- Schema fixture with malicious CSS expression/URL/string where typed value expected; unapproved component token/asset.
- Stub `pass` skin review with no screenshots; token coverage marked complete without real source values.

## Preference test table

| Input/system event | Expected result |
|---|---|
| first visit unset, OS dark | if defaults allow system, effective dark; saved preference stays absent |
| saved `modePreference=system`, OS dark → light | resolved mode changes; **saved stays system** |
| explicit dark + OS flips | dark remains; no preference overwritten |
| unknown skin from storage | Classic fallback, no crash |
| malformed saved mode/density | system/comfortable safe fallback, no persistence crash |
| controlled light + saved dark | controlled light; fallback to saved when control removed |
| motion=system, OS reduce | effective reduced, preserve button feedback |
| `forced-colors:active` | retain discernible focus/status without enforcing brand colors |
| dir=rtl or long translation | logical ordering, readable text, numeric direction deliberate |
| CSS missing skin map | build must fail; runtime last-known-good complete map or safe Classic |

## Contrast and visual approval

Automated checks must pair foreground with background and state/surface, not simply compare isolated hex values. WCAG 2.2 SC 1.4.3 normal text 4.5:1 and large 3:1 (AA); 1.4.11 non-text 3:1 where applicable; AA focus visible and screenreader workflows, AA 2.5.8 target-size rules/exceptions. Complex gradient/translucent backdrop, textures, overlays and high-contrast forced-color cannot be certified by token-only math. Human reviewer records actual specimen, browser, screenshot, role, condition, decision, date and accessibility outcome.

No advanced contrast engine or screenshot baseline has been run. Any future claimed `validated` state must reference a successful local/CI command and report; `reviewed` requires human proof, `released` requires consumer package verification.
