# Moonframe UI — Motion, Interaction & SFX Bible

**Version:** draft 0.1, 2026-10-25. **Readiness:** `specified-not-implemented` — all examples are proposed policies, not source code, production animations or actual sounds. [Audit](../audit/motion-interaction-sfx-audit.md) · [primary-source research](../research/motion-interaction-sfx-research-log.md) · [engine ADR-0007](../adr/0007-motion-and-optional-audio-engines.md).

> **One behavior system, 15 visual motions, 30 appearances; sound optional, silence safe.**

## 1. Authoritative ownership, non-goals and status

| Concern | Canonical owner and what this Bible adds |
|---|---|
| Native element, focus/keyboard/ARIA, controlled state and async callback semantics | [Component API Bible](../component-api-behavior-bible.md), [151 component state matrix](../../contracts/moonframe-component-state-matrix-v0.1.json), [keyboard matrix](../../contracts/moonframe-keyboard-interaction-matrix-v0.1.json). This Bible owns *cross-component feedback/motion eligibility and interruption*, never redefines `onOpenChange`, `value` or menu keyboard behavior. |
| Motion token **names, types and values** | [Token Dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) and [Token Source Plan](../../contracts/moonframe-token-source-plan-v0.1.json); five historic IDs preserved, no numeric values approved. This Bible owns intended motion semantics/recipe references only. |
| Resolved `skin`, `mode`, `motionPreference`, OS preference, SSR and `data-motion` | [Theme Contract](../../contracts/moonframe-theme-contract-v1.3.json), [Theme pipeline](../architecture/token-pipeline.md) are authoritative. No second ThemeProvider or storage policy here. |
| Overall 15 skin visual grammar and distinctness | [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json), [Skin Specifications](../../contracts/moonframe-skin-specifications-v1.0.json). [Derivative 15-skin motion matrix](../../contracts/moonframe-motion-skin-matrix-v0.1.json) specifies allowed motion accents, **not alternative interaction behavior**. |
| Cross-component named recipes and interruption | [Motion recipe manifest](../../contracts/moonframe-motion-recipes-v0.1.json) is canonical machine-readable recipe owner; narrative rationale here. |
| Cross-component interaction *families* (not component props) | [Motion interaction map](../../contracts/moonframe-motion-interactions-v0.1.json), references existing state/keyboard IDs and component IDs. |
| SFX canonical events, permission/volume/cooldown/mute | **Existing** [SFX Contract](../../contracts/moonframe-sfx-contract-v0.1.json) expanded *in place*; preserves six current event IDs and numeric draft cooldowns. Never make competing `confirm.success` event namespace without migration. |
| Audio files/production rights, symbols and animation assets | [Original Asset & Brand Bible](../brand/original-asset-brand-bible.md) and [Asset Manifest](../../contracts/moonframe-asset-manifest-v0.1.json); zero sound files or approved rights. |
| QA/toolchain and readiness | [Core QA strategy](../qa/validation-strategy.md), [Motion QA](../qa/motion-interaction-sfx-validation-plan.md), and [future tasks](../backlog/motion-interaction-sfx-atomic-issues.md). |

No game reward logic, identity/security decisions, accounting/data behavior, business workflow, CSS/React animation source, installed libraries, OS audio service, sounds or artwork added here.

## 2. Purpose-first grammar; state is not animation

A semantic component changes state **immediately and predictably**. A visual effect is an optional rendering treatment. The same `expanded`, `selected`, `invalid`, `loading`, `complete` semantics must work with animation **disabled or unavailable**. Motion purposes are `feedback`, `orientation`, `continuity`, `hierarchy`, `progress`, `expression`. Expression must remain rare, consent/context sensitive, and cannot delay interaction.

**Rules:** input acceptance, validation, focus movement, ARIA state updates, permission checks and business actions never depend on `animationend`/`transitionend` or audio promise resolution. Default prohibited: mandatory form shaking, perpetual scanlines/glitch flashes, large unexpected zoom/parallax, scroll hijack, focus theft, repeated rerender animations, animation-only progress, sound on every click, game-reward cues on sensitive flows. No animation means the UI is **already at the correct end state**, not a broken intermediate frame.

Example **proposed semantic sequence, not implementation**:
```text
user requests Dialog close → semantic close requested → modal accessibility/focus
transition governed by component/primitive provider → optional cosmetic exit effect
→ DOM/portal cleanup independent of animation completion → focus restored as
specified by component API. If interrupted/reduced/unmounted: settle immediately.
```
The primitive/provider owns actual focus trap, background inertness, portal removal and return focus; motion engine may not override it or hold a hidden dialog focusable.

## 3. Proposed motion token architecture — no made-up final numbers

**Already declared in Token Dictionary:** `motion.duration.fast|normal|slow` (type `duration`, unit milliseconds); `motion.easing.standard` (type `cubicBezier`); `motion.distance.small` (type `dimension`, px/rem). Other candidate namespace labels `motion.duration.immediate`, `motion.easing.enter|exit`, `motion.distance.medium`, `motion.feedback.scale.subtle`, `motion.stagger.short` are **proposals requiring token review**, NOT new canonical production IDs nor generator-resolved values. Types for scale/stagger must be evaluated in [token subset proof](../../contracts/moonframe-token-source-plan-v0.1.json).

A *token* owns scalar timing/easing/distance used by several recipes. A *recipe* owns state trigger, purpose, spatial direction, interruption, reduced replacement and risk. An expressive *skin signature* is a **selector** for optional recipe accent and may add zero animation; Light/Dark only alters material/focus contrast, not motion event semantics. Springs/stagger may be typed recipe-only data if no stable generator proof; do not force arbitrary CSS properties for every notion.

**Numeric policy:** no accepted canonical duration, distance, acceleration or bundle budget without prototype/performance/AT review. The historic Skin Grammar example “Moonpunk 100–180ms” and six SFX `minimumGapMs=1000`/`deduplicateWithinMs=2000` are **historical design hypotheses**, not universally approved cross-device constants. Validation must check reference existence/typed aliases, bounded value domain after token approval, no cycles, 15×2 resolved values and reduced preference results before generating CSS.

## 4. Runtime motion preference, OS and fail-safe

[Existing Theme precedence](../../contracts/moonframe-theme-contract-v1.3.json): controlled requested preference → validated saved explicit preference → OS for `system` → application default → safe fallback. Preserve separate `motionPreference: system|full|reduced` and `resolvedMotion: full|reduced`; never save resolved OS state as user's choice. Initial default **system** per proposed consumer settings; `prefers-reduced-motion: reduce` must suppress nonessential spatial motion on first paint (CSS native media fallback even before JS). Root effective `data-motion` is the resolved mode. User may explicitly request more motion through app policy, but `full` can NEVER disable minimum flash/essential accessibility/energy protection rules. Forced colors and reduced contrast needs supersede decorative recipes.

**When setting changes mid-animation:** stop/cancel nonessential effects and synchronize immediately to semantic end state, preserve keyboard focus/current value and readable status; no surprising replay on switch back. On skin or Light/Dark change with dialog open, keep semantic overlay instance/focus unmodified; re-evaluate decoration only. On server hydration, default to no entrance animation until effective preferences are known, avoid flashes/hydration mismatch; if no-JS/static fallback, all content and actions still visible/usable.

**Reduced strategy vocabulary:** `none` (instant), `static-equivalent` (persistent border/text/icon), `shortened` (reduced travel if justified), `opacity-only` (only where non-distracting and tested), `essential` (exception requires written rationale and *manual* review). Each recipe must declare one and its actual replacement; “opacity is always accessible” is false. Reduced-motion-safe status must be complete without sound. Skin art direction **cannot opt out** of this policy.

## 5. Continuous, auto-moving, flashing and cognitive safety

**Normative:** WCAG 2.2 **SC 2.2.2 Level A** requires pause/stop/hide for automatically moving/blinking/scrolling content running >5s in parallel with other content (unless essential), and also pause/stop/hide or frequency control for automatic updates in parallel, without a 5s exception. **SC 2.3.1 Level A** forbids excessive flashes over threshold. **SC 2.3.2 Level AAA** has a stricter blanket three-flashes rule, and **SC 2.3.3 Level AAA** addresses disabling nonessential interaction-triggered motion. Moonframe additionally opts into a stricter **product policy**: no core decorative autoplay loops, no deliberate strobing, no continuous attention traps, reduced-motion alternatives even beyond minimum AA; this is NOT a claim of actual WCAG compliance.

High-risk: Moonglitch interference near text, Moonsmash large impact transforms, Moonriot signal-flash, Moonchrome glints, Moonquest rewards, auto-scrolling timelines, chart updating and streaming typing effects. Avoid flashing entirely; static text+appropriate ARIA updates are always primary. Background hidden tabs should suspend/defer nonessential effects, avoid catch-up explosion when visible, and dispose WAAPI/observers/timers on unmount. Animation low-power/unsupported API failure means **instant semantic state**.

## 6. Interaction family inventory and invariant semantics

[Machine-readable interaction inventory](../../contracts/moonframe-motion-interactions-v0.1.json) covers native press/hover/focus, navigation, overlays, forms/async, Data Workspace, upload, AI streaming, Moonquest rewards and destructive/recovery. Each maps existing component IDs and source-of-truth keyboard/state contracts to a *cosmetic recipe*, triggered semantic states, modality, cancellation, keyboard/a11y requirement and **mostly ineligible audio by default**.

**Native press/link:** Space/Enter only as native element dictates, not trigger sound on hover/focus/click. Pointer cancellation/drag must not commit action. Press scale must never alter hit target or cause layout shifts.
**Navigation:** selected/active state and focus independent of page-transition animation; back/forward route restored by app, no stale animated DOM in tab order.
**Overlay:** dialog, menu, tooltip, popover exit animation cannot leave closed interactive content in a11y tree; preserve focus/escape/return focus. Nested overlays may need animation omitted.
**Forms:** error message + programmatic relationship first; no shaking. Pending/invalid/async stale result controlled by app/provider state; visual effect cannot claim success prematurely.
**Data:** sort/filter/virtualization stable rows; don't animate all 50k rows or totals on every refresh; preserve keyboard position and read live updates modestly; no user data synced to audio.
**Upload/async:** progress semantic values follow real operation; complete only on server confirmation; cancellation makes visual final state without waiting for animation.
**AI streaming:** chunks never each beep/stagger; readable text shown immediately when reduced, stopping/regenerating terminates effects; tool approvals require semantic state.
**Moonquest:** decorative reward may opt in; app/game owns actual progression and permission, not motion.
**Destructive/security/finance:** no SFX by default; confirmation/undo/error remain persistent text and semantic focus.

## 7. Named motion recipes, exit and interruption obligations

[Motion recipes v0.1](../../contracts/moonframe-motion-recipes-v0.1.json) define reusable triggers and purposes. A recipe **must include** trigger/source state, target, visual start/end, tokenRefs (canonical existing or proposal-flagged), applicable contexts, `reducedMotion`, `onInterrupt`, no-motion equivalent, focus/ARIA invariants, audio-eligible flag, loop/pause policy, perf hazard, testing requirements and readiness. No recipe may be marked `tested` without browser/reduced/AT evidence.

**Interrupt rules (unconditional):**
- on `Escape` or close request, semantic close wins, not wait-for-exit timing.
- on new render/animation trigger, coalesce same-value changes; cancel obsolete animation; final DOM state remains correct.
- on reduced preference/skin/mode switch, disable/settle cosmetics, never reset field values/focus.
- on route switch/unmount, cancel active handles/timers, settle visibility/accessibility and release resources.
- on low-performance/hidden tab, pause nonessential repeating effects; no catch-up animation storm.
- on API unsupported/blocked, immediate visual final state; no rejected workflow promise.
- decorative transitions cannot temporarily make interactive content unreachable or extra focusable.

## 8. Fifteen expressive directions without behavioral forks

[15-skin derivative motion matrix](../../contracts/moonframe-motion-skin-matrix-v0.1.json) maps Classic and 14 editions to specific permitted accents, disallowed moves, Light/Dark and reduced alternatives, optional audio profile policy and canonical Skin Specification reference. Exactly same interaction callbacks and keyboard semantics for every skin. Four divergent initial review references: Classic, Moonpunk, Moonzine, Moonledger; expand to Moonglitch/Moonquest risks, then remaining 15. No full new motion engine/unique sound pack per skin. All 105 skin-grammar pair reviews remain `not-reviewed`, no animations or screenshots recorded.

## 9. SFX — extend existing contract only, silence is first-class

[Canonical SFX Contract](../../contracts/moonframe-sfx-contract-v0.1.json) retains six stable IDs: `success`, `warning`, `error`, `notification`, `confirmation`, `quest-reward`. Do NOT introduce `confirm.success`, `game.reward` or other aliases as live IDs without a future semver migration/compatibility plan; names in research prompts were candidates only.

**Playback eligibility requires all gates simultaneously:** actual *opt-in user gesture and remembered consent*, explicit master unmute, nonzero effective volume, category enabled, app-context allows feedback, trusted semantic event after state confirmation, cooldown/dedupe, active/visible tab, supported browser, **approved licensed audio asset exists** and reduced-stimulation policy allows it. If any gate fails: `silent-no-op`; never delay a user action. Explicit consent is NOT equivalent to a browser granting autoplay. A user can revoke/mute mid-play: active sound must stop. No audio from mounts, hydration, focus, hover, keystrokes, nav, every click, scrolling, streaming tokens, log lines, frequent row updates, auth/security or financial/destructive confirmation as default.

`useSFX().grantConsent(event)` requires the original trusted DOM activation event (`click`, `pointerup`, `keydown`, or `touchend`) and returns `true` only when consent was granted. React callers pass their synthetic event; the provider checks its native event. Missing, synthetic/untrusted, or unrelated events leave audio muted and return `false`. This records app-level user consent only: it never prompts for media/device permission, persists consent, or plays audio during the call. `revokeConsent()` clears consent and restores mute; the SFX API does not initiate playback on provider mount or hydration.

**Every event needs visible text/state and appropriate assistive-technology equivalent** independent of playback; e.g. successful operation text/status, warning message, explicit error+retry, notification list/read status, confirmation label, optional quest reward progress detail. `quest-reward` is consumer-triggered expressive optional and never represents actual RPG rule enforcement. Skin sounds are optional presentation profiles, **not** 15 independent mandatory sonic brands. Unknown ID, unsupported codec, audio blocked, missing file/failed decode and SSR have identical harmless silent fallback.

**Audio source/rights metadata** belongs to existing [Asset Manifest](../../contracts/moonframe-asset-manifest-v0.1.json) / [Asset Record Schema](../../schemas/moonframe-asset-record.schema.json): real source/output hashes, license/creator, version, sample rate/channel/duration/format where justified, normalization/peak tests and review evidence before release. No arbitrary LUFS/max KB/seconds invented. Historical `minimumGapMs=1000`/`deduplicateWithinMs=2000` in current SFX are untested candidate defaults subject to user/UX device review, not fixed production target. Playback API default proposal: lazy native `HTMLAudioElement` for rare clips, upgrade to Web Audio only for proven mixing/concurrency; no third-party library unless needed [ADR-0007](../adr/0007-motion-and-optional-audio-engines.md).

## 10. Engine decision boundary, performance and QA

**[ADR-0007](../adr/0007-motion-and-optional-audio-engines.md) is PROPOSED.** Compare native CSS transitions/animations (default candidate), WAAPI (imperative fallback), View Transitions (opt-in route, browser gated), Motion for React (optional premium only after measured need), no audio engine/native HTMLMediaElement, Web Audio and Howler (not researched enough to select). No React/SSR/optimizer/browser/toolchain installed; cannot claim performance/bundle/frame-budget. Optimize `transform`/`opacity` only when appropriate, preserve composited layers/real accessible reading and avoid forced layout loops; monitor reflow/long tasks and reduced-mode render tests after implementation.

[QA plan](../qa/motion-interaction-sfx-validation-plan.md) requires 30 appearance risk cases, 15 reduced-motion signatures, no-audio, forced-colors, 200/400% zoom, keyboard/AT/SSR, device coarse pointer, background tab, cancellation/unmount, sync with all existing semantic state contracts and 15/30/105 constraints. [Atomic backlog](../backlog/motion-interaction-sfx-atomic-issues.md) scopes future work and references #1/#3/#4/#5/#6. Current work **only specified/documented**; test evidence limited to JSON/Node structural contract CI, not motion or audio effects.

## 11. Open decisions, change policy and release gates

**Open:** exact duration/easing/distance values and new token proposals; motion preference product override UI and accessibility consent; consumer browser/SSR versions; animation engine/motion bundle; View Transition support; exit-focus ownership by primitive; sound license/opt-in/persistence; optional audio codecs/normalization budget; spring/gesture need; TypeScript and runtime package version. **Status labels:** `proposed → specified → implemented → tested → reviewed → released`. Changing recipe IDs, SFX event semantics, reduced-motion defaults or token ID is a public compatibility review; vendor-specific motion behavior should be adapter-private, and deprecation documented before migration. No app business state / game reward / Auth session can be created by a motion/SFX event.

**Release blockers when code exists:** motion-only essential state, foreground/hidden focus trap, lost focus on dialog exit, flashing violation, unpausable autoplay loops violating SC 2.2.2, missing reduced-motion state, sound with no opt-in or sound-only status, audio failure blocking action, stale animations altering data, unlicensed SFX, false screenshots/AT approval, unsupported browser leaving invisible controls. QA evidence and owner decisions are separate from **specification-ready** status.
