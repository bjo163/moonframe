# Moonframe UI — Component API & Behavior Bible

**Edisi:** 2026-10-25 / initial normative **proposed specification**. **Implementasi: tidak ada.** Bahasa penjelasan Indonesia; istilah teknis mengikuti React/HTML/ARIA. Ini adalah **canonical public component behavior policy**, bukan pengganti [Master Design System Bible](moonframe-ui-design-system-bible-v1.3.md), [Theme Contract](../contracts/moonframe-theme-contract-v1.3.json), [Skin Grammar](../contracts/moonframe-skin-grammar-contract-v1.0.json) atau [Premium Scope](premium/premium-scope-bible.md).

> **Invarian:** satu API, meaning, keyboard, accessible state/focus, form semantics dan event contract untuk seluruh **15 skin × Light/Dark = 30 appearance**. `system` adalah pilihan mode, bukan skin/appearance ke-31. Visual layout dapat berubah drastis, semantics dan user intent tidak.

## 1. Authority dan level

| Concern | Canonical owner | Boundary |
|---|---|---|
| IDs, 151 nama dan tier rencana | [Component manifest](../contracts/moonframe-component-manifest-v0.1.json) | Tidak didefinisikan ulang di sini |
| Global prop/state/event/form/ref rules | **Dokumen ini** | Normative proposals; not shipped API |
| Per-ID contract proposal | [API contract](../contracts/moonframe-component-api-contract-v0.1.json) | 151 rekaman; type signatures masih pending |
| State applicability/NA | [State matrix](../contracts/moonframe-component-state-matrix-v0.1.json) | 24 dimensi untuk 151 komponen; tidak ada test pass |
| Keyboard pattern & mappings | [Keyboard matrix](../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) | 37 pola + 151 pemetaan; provider belum diuji |
| Theme resolution/density | [Theme Contract](../contracts/moonframe-theme-contract-v1.3.json), [Token pipeline](architecture/token-pipeline.md) | Tidak menyusun nilai token di sini |
| Visual grammar | [Skin specifications](../contracts/moonframe-skin-specifications-v1.0.json) | Layout/surface/art-direction, bukan behavior |
| C/D/E/F catalog | [Blocks](../contracts/moonframe-block-manifest-v0.1.json), [Pages](../contracts/moonframe-page-template-manifest-v0.1.json), [Starters](../contracts/moonframe-starter-manifest-v0.1.json), [Integrations](../contracts/moonframe-integration-manifest-v0.1.json) | Jangan pindahkan backend/flows ke primitive |
| Provider choice | [ADR-0001](adr/0001-primitive-provider.md), existing [issue #3](https://github.com/bjo163/moonframe/issues/3) | Belum diputuskan |
| QA & release | [Component testing plan](qa/component-testing-strategy.md) | Status specified ≠ implemented/tested |

**Definisi level:** L0 native semantic HTML/helper; L1 behavioral interactive primitives; L2 styled base controls; L3 composites (Combobox, DatePicker, DataTable); L4 domain-agnostic interaction patterns (Field, validation, retry); L5 specialized *presentation-only* (Moonquest/Moonledger), sedangkan Level C blocks/D pages/E starters/F adapters milik Premium Catalog. Manifest legacy field `level=A/B` bermakna prioritas komposisi, **bukan** pemetaan literal L0–L5. Field `tier=premium-block` pada 25 entri komponen adalah klasifikasi jadwal/distribusi historis, **bukan** blok Level C; perlu review migrasi sebelum rename. `app-shell` komponen berbeda dengan `family:app-shell` legacy blueprint.

## 2. API grammar, exports, versioning

- Public React display name **PascalCase** (`Button`, `DataTable`), manifest id **kebab-case**. Proposed source filename `button.tsx` and folders by feature; no files exist, so not an imposed build choice.
- Candidate one public root/subpaths `@moonframe/ui`, `@moonframe/ui/forms`, `@moonframe/ui/data` are **not registered exports**. Actual package shape/peer ranges need existing [issue #4](https://github.com/bjo163/moonframe/issues/4) and [#1](https://github.com/bjo163/moonframe/issues/1). Never import from private provider modules. Public types should be exported explicitly.
- Canonical prop name **`size`** = component scale `sm|md|lg` only where needed; global **density** is separate. **`variant`** = finite structural appearance (`primary|secondary|outline|ghost` for Button *candidate*, not universal). **`tone`** = semantic importance (`neutral|success|warning|danger` when meaningful). **`appearance`** is reserved for theme Light/Dark, never a per-Button synonym for variant. **`kind`** internal discriminant only where multiple behavior modes exist. Avoid dozens of booleans or meaningless variants for noninteractive items.
- Names proposed: `disabled`, `readOnly`, `required`, `invalid`, `loading` only for relevant components; controlled `value/defaultValue/onValueChange` for **non-native selection**; `checked/defaultChecked/onCheckedChange` for checks/switches; `open/defaultOpen/onOpenChange` for overlays; native text input keeps React `value/defaultValue/onChange(event)`. **No promise these are shipped TypeScript props yet**.
- TypeScript: narrow discriminated unions for mutually exclusive `selectionMode='single'|'multiple'`, navigation Link vs action Button, determinate/indeterminate Progress; generic `DataTable<TRecord>` with strongly typed column IDs, stable row IDs; avoid giant polymorphic generic `as` overloads and `any`.
- `className` on documented root and `style` where native safe may be supported; no guarantee private DOM shape, provider `data-*`, styling cascade tricks or internal CSS selectors. Default class merging utility **not selected**. CSS custom properties must be from public Token/Theme contract, with component-only exceptions reviewed.
- Stable public `data-state`, `data-disabled`, `data-invalid`, `data-selected`, `data-orientation`, `data-side`, `data-slot` only **after** spec review per component. Do not promise attributes because a provider happens to expose them. Native `data-*` passthrough cannot override internal accessibility attributes.

## 3. Composition rules (provider-neutral)

Default to native element with explicit `children` and predictable markup for simple controls; compound parts (`Dialog.Root/Trigger/Content/Title/Description`, `Tabs.List/Trigger/Panel`, `Select.Trigger/Content/Item`) are **candidate public APIs**, pending provider spike. Provider **Base UI uses `render`**, **Radix uses `asChild`**; these are not equivalent merge/event-cancellation contracts. React Aria uses `render`/slots/contexts; no “support all three” convenience promise.

Public rule: **one interactive DOM control per interactive task**. Never wrap a `button` inside a `button` or a link inside a link; when composing trigger+Button, exactly one must supply DOM node, and forwarded IDs/ARIA/handlers/refs must survive. Keyboard/pointer activation fires a single semantic intent. Handler composition ordering/defaultPrevented semantics must be tested rather than assumed. A `slot` cannot silently remove required name, relationship, focusability or touch target. Static content should prefer native HTML instead of wrapper explosion.

For complex widgets, composition contract must identify: accessible part/slot, default rendered element, custom element support, event/ref merge order, controlled owner, focus restoration and portal placement. No public free-form `as: ElementType` without demonstrated demand and TS/compiler tests. **Anchor navigation stays anchor; actions stay button**.

## 4. Refs, rendering and client boundaries

React's official site is currently **v19.3**, and documents `ref` as a prop in React 19; `forwardRef` is retained for older support with future deprecation notice. Because no React dependency/consumer matrix exists, default ref strategy is **open**: prefer `Ref<HTMLButtonElement|HTMLInputElement|...>` on the semantically primary DOM control, then choose React19 or compatibility wrapper once peers are pinned. Do not expose arbitrary internal collection/portal nodes or imperative handles unless focus/measurement/scroll use is proven.

Use explicit IDs when supplied; otherwise stable React `useId` for label/help/error and portal associations, never as list/database IDs. SSR markup must match client initial ID/tree; never assume `window`, `matchMedia`, viewport size, locale or portal mount during server render. Interactive features require a documented client boundary; no blanket “use client” until target framework known. Portal host, layer strategy, direction and theme root must be consistent with Theme contract; nested Dialog/Popover and focus-restoration/scroll-lock tested.

## 5. Controlled/uncontrolled and callback sequencing

**A state value has exactly one authority.** Controlled if its controlling prop is present (not merely truthy), uncontrolled if `defaultX` is used. Do not support both simultaneously unless documented precedence. Controlled `undefined` vs `null` vs `''` vs `[]`: **must be defined per component**; as provisional default, `undefined` means not provided/uncontrolled, `null` means intentionally no selection if supported, `''` is a valid text value, `[]` empty multi-selection. A mode switch mid-mounted lifetime is unsupported/warned during implementation. `defaultValue` is initial state only; updates do not silently reinitialize. Native `form.reset()` integration must be proven, especially custom widgets.

Proposed event contract:

| Context | Proposal | Invariant |
|---|---|---|
| Button/Link | `onClick(event)` native React event | exactly once for keyboard/pointer activation; no fake success |
| Native Input/Textarea | `onChange(event)` native React handler | app owns text value; selection/caret unchanged |
| Select/Radio/Tabs | `onValueChange(nextValue)` | logical value, not accidental provider native event |
| Switch/Checkbox | `onCheckedChange(nextChecked)` | tri-state only explicit component; name/form proof |
| Dialog/Popover | `onOpenChange(nextOpen, details?)` | reasons e.g. trigger, escape, outside, controlled prop; **reason shape OPEN** |
| Async composite | `onRetryIntent(details?)`, `onConfirmIntent(details?)` | consumer performs network/mutation, supplies pending/result |
| DataTable | controlled query/selection callbacks | no fetching, export execution, persistence or auth |

**Event timing proposed:** user interaction → native event (if exposed) → shared behavioral interpretation → semantic intent once → parent state update → rerender. Native `preventDefault` or composable provider event veto must follow explicitly documented precedence; never arbitrarily call both `onChange(event)` and `onValueChange(value)` for one transition. Programmatic controlled prop changes must not echo a user-intent callback. Async callbacks never auto-convert a Promise fulfillment into UI “saved” or “authenticated” without app confirmation. Concurrent requests/cancellation/stale result state belong to consumer.

## 6. Form anatomy and ownership

| Item | Owns | Explicitly not owned |
|---|---|---|
| `Field` | association context: label/control/help/error IDs, required/invalid relationship | value, backend validation, submission |
| `Label` | text and native `htmlFor` or wrapping label | independent form state |
| `Fieldset` | grouped control legend & `disabled` propagation where native | control value |
| `Input`/`Textarea` | native input DOM, name/value/onChange, focus/ref | error message prose and backend schema |
| `FormMessage` / `InlineError` | message content/aria-describedby target, appropriate status announcement | create a second field ID, alter value |
| `ValidationSummary` | summary links to invalid fields and move focus when user submits invalid form | run validation algorithm |
| `FormLayout` | responsive field placement | duplicate Field association |
| `PasswordField` / `OTPInput` | masked presentation/input mechanics, accessible reveal or code semantics | auth, token verification, secret storage/logs |

**Native `<button type="button">` for generic Button**, explicitly `type="submit"` for submit actions and `type="reset"` only when desired. `disabled` blocks editing/activation and may remove from normal tab order; `readOnly` allows readable/focusable value but not edits where supported; visual “disabled appearance” must not deceive keyboard or screen readers. For custom Select/Slider/Combobox use real form participation (native, verified hidden input, or document limitation); never assume `name` creates native submission automatically. Required/native constraint validation and RHF/Zod adapter support are opt-in. Enter-key implicit form submit remains browser behavior unless explicitly prevented with justification.

## 7. Behavior and keyboard contract

The [machine-readable keyboard matrix](../contracts/moonframe-keyboard-interaction-matrix-v0.1.json) defines **37 families** and maps all 151 items. A mapping is a **provisional specification**, not verified implementation. For action/navigation use native button/anchor semantics; no div buttons. For Tabs, prefer **manual activation** (arrows focus, Enter/Space selects) unless instantly available panels justify auto and tests prove it. Dialogs require focus containment/return and inert background when modal. Menus support APG arrow/typeahead; nav landmarks use ordinary Tab. Editable Combobox keeps appropriate input focus and uses active descendant/popup pattern as supported. Tooltip contains **no interactive elements** and Escape dismissal, whereas Popover allows interaction. Plain Table stays semantic table; controlled DataTable adds sorting/pagination/select checkboxes and **does not become ARIA grid** without deliberate grid keyboard API. Status/Toast should not steal focus.

Specific patterns: RadioGroup arrow selection, checkbox/switch Space, Slider arrows/Home/End/value label, Calendar day grid arrow/Page behavior per chosen date library, TreeView arrow expand/collapse, OTP native text typing/paste/delete/focus, Resizable keyboard accessible separator, file upload keyboard-trigger native input. Keyboard model must be tested with RTL/locales where orientation and arrow direction matter. WAI-ARIA APG is a reference pattern, **not** substitute for testing real implementation.

## 8. State matrix, skin invariance and async/errors

[State matrix](../contracts/moonframe-component-state-matrix-v0.1.json) covers **24 state dimensions**, per component marked `applicable` or `not-applicable` (future `deferred` allowed only with reason and owner). Global states include focus-visible, selected, expanded, disabled, read-only, invalid, pending, success, empty, no-results, offline, retryable error, stale, overflow, responsive, reduced-motion, forced-colors, effective appearance and density; each state has meaning/acceptance test. Do not require static icon/card to have disabled/selected logic. High-risk state transitions include controlled tabs, multi-select, dialog dismissal, stale async combobox, row selection on paginated tables, OTP, file upload and optimistic data mutation.

For async UI, the **consumer owns request, cancellation, retry, validation and source-of-truth state**. Components render `loading|empty|no-results|ready|error|offline|stale` as applicable and emit intent. A loading indicator never implies successful submission; an error slot is not necessarily an alert live region if it would over-announce. Avoid bogus retries for non-retryable permission failures.

**Visual ownership:** skin controls composition, geometry, typography, surface, spacing and optional decorative recipe. Token contract owns values, effective mode and density; the API must never change keyboard/focus/native meaning with skin. Four future divergent witness skins: `classic`, `moonpunk`, `moonzine`, `moonledger`, each Light/Dark. Then apply all 30 appearances by risk-based component specimens. Existing 105 human pairwise visual reviews remain separate and unreviewed. In `forced-colors` and reduced motion all interactive affordances and information must remain perceivable, even if skin effects are simplified.

## 9. Product boundary exemplars

- **Table**: `<table>`, headings/caption/data semantics, no fetching. **DataTable**: row model and sort/page/selection callbacks; headless engine optional. **Data Workspace**: product composition of filters/saved views/export, owned by [Data Workspace](premium/data-workspace.md). **Enterprise grid** requires separate optional adapter and licensing decision; not equivalent to Table.
- **Auth UI**: PasswordField, OTP, Field and feedback can drive [Auth UI blocks](premium/auth-ui-suite.md), but cannot verify credentials, issue sessions, store MFA codes or enforce authorization. A `ProviderButton` if ever added is appearance + user intent, not an OAuth client.
- **Moonquest/Moonledger**: QuestCard/InventorySlot/LedgerFilterWorkspace are optional presentation, not reward engine or bookkeeping/business authorization. Domain models belong to consumer apps.
- **MarkdownContent/CodeBlock**: default must not allow arbitrary unsanitized HTML/JS, embedded credentials or unsafe third-party URL generation; sanitizer/renderer/version/SSR behavior requires separate security evaluation. No hidden network calls.

## 10. TypeScript pseudo-API (illustrations only; NOT shipped code)

```ts
// Proposed, not compiled or exported.
type Controlled<T> = { value: T; onValueChange(next: T): void; defaultValue?: never };
type Uncontrolled<T> = { value?: never; defaultValue?: T; onValueChange?(next: T): void };
type SelectionProps<T> = Controlled<T> | Uncontrolled<T>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  tone?: 'neutral' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  // default type='button'
};

type TabsProps<T extends string> = {
  activationMode?: 'manual' | 'automatic'; // manual provisional
  orientation?: 'horizontal' | 'vertical';
} & SelectionProps<T>;

type DialogChangeDetails = { reason: 'trigger' | 'escape' | 'outside' | 'close-button' };
// Details/reason cancellation semantics require provider spike.
type DialogProps = { open?: boolean; defaultOpen?: boolean;
  onOpenChange?(next: boolean, details?: DialogChangeDetails): void;
};
```

Do not export TypeScript declarations from spec-only code. Reject broken unions or event signatures after actual compiler/React peer testing. Exact `null`/empty semantics, ref typing and provider merge order remain per-item open.

## 11. Test and release evidence

[Testing strategy](qa/component-testing-strategy.md) defines unit/interaction/DOM/browser/a11y/screen-reader/visual and consumer fixture gates. Public component must eventually have: typed props and export test, native semantics, controlled-state tests when supported, keyboard + focus, form reset/submit when relevant, SSR/hydration if applicable, missing data/async, RTL/zoom, forced-colors/reduced-motion, representative skins and docs story. **No backend network dependency or secrets in fixtures**.

Readiness vocabulary never conflated: `proposed` candidate → `specified` reviewed contract → `implemented` source exists → `tested` relevant tests pass → `reviewed` human/design/AT review completed → `released` tagged/distributed. Contract baseline alone is **specified-provisional**, not final API acceptance.

## 12. Compatibility and decisions still open

**Breaking:** remove/rename export/subpath, prop, event payload/reason, default behavior, value nullability, form serialization, focus keyboard model, ref DOM target, public `data-*`/slot contract or CSS API. Require source-owned migration note, changelog and semver impact based on distribution ADR (#4); don't assume npm package is published. Deprecations should document replacement and scheduled removal; codemods only when repeated use justifies. Internal DOM/provider attributes are not semver guarantees unless explicitly public. Release tags, peer versions, support windows and license not finalized.

**Open with bounded evidence:** React 18 compatibility versus React19 ref-as-prop (#1); Base UI/Radix/React Aria selection (#3); exact `asChild`/render public model (#3); SSR/portal/direction; className merge strategy; how many components really need generic `size`/`variant`; package export structure (#4); test tooling install. Do not upgrade these to "accepted" without pinned fixture/results/reviewer.

## 13. Links to audit, research and next work

[Live audit](audit/component-api-behavior-audit.md) · [Primary research](research/component-api-research-log.md) · [Provider ADR](adr/0001-primitive-provider.md) · [Component API backlog](backlog/component-api-atomic-issues.md) · [Validation schema](../schemas/moonframe-component-behavior.schema.json).

**No React component, generated asset, SFX, package publication, screen-reader certification, provider migration or ThemeProvider implementation was produced by this specification.**

---

## Cross-component cosmetic feedback authority (2026-10-25)

[Motion, Interaction & SFX Bible](motion/motion-interaction-sfx-bible.md) and [18 interaction mappings](../contracts/moonframe-motion-interactions-v0.1.json) reference **this** Bible for focus/keyboard/native/controlled state. [25 motion recipes](../contracts/moonframe-motion-recipes-v0.1.json) are optional visual treatments; cannot delay `onValueChange`, semantic state, dialog restoration or form validity, and must settle correctly if disabled/canceled. Existing SFX [event ID taxonomy](../contracts/moonframe-sfx-contract-v0.1.json) remains opt-in and off by default. These contracts do **not** add a public component prop or runtime implementation.
