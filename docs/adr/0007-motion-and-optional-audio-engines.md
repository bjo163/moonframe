# ADR-0007 — Motion engine and optional audio playback strategy

**Date:** 2026-10-25. **Status: PROPOSED, not accepted or implemented.** Owner trigger: consumer stack #1, package/distribution #4, primitive provider #3, token-value proof #5, Skin Lab #6. No new dependencies installed.

## Verified context

Moonframe is a **spec-only GitHub repo** without package.json, React/CSS/animation sources, browser supports matrix, audio binaries or shipped bundle. [Theme contract](../../contracts/moonframe-theme-contract-v1.3.json) already owns system/full/reduced, [token dictionary](../../contracts/moonframe-token-dictionary-v0.1.json) owns five proposed scalar IDs, [Skin Grammar](../../contracts/moonframe-skin-grammar-contract-v1.0.json) owns 15 visual territories, [existing SFX](../../contracts/moonframe-sfx-contract-v0.1.json) owns six events. Specific media/bundle performance cannot be measured today.

## Weighted decision framework — criteria and weights, **scores not assigned without real prototype evidence**

| Criterion | Weight | Proof required |
|---|---:|---|
| Native semantics/focus/inert exit safety | 25% | Escape/Tab/return-focus with provider primitive, including interrupted animation |
| Reduced-motion, flash/loop controls and AA/AAA distinctions | 20% | prefers-reduced-motion toggle live/SSR, correct WCAG 2.2 gates |
| Exact need (exit presence, layout, gestures, sequences) | 15% | Same-content 4-skin test, real use-case complexity |
| Browser/SSR/React compatibility | 15% | Pinned target browsers and React framework/version |
| JS/CSS bundle + CPU/main-thread/memory cost | 15% | Reproducible profiling on real examples |
| Maintenance, license, API lock-in, tests | 10% | Version/release/license review and upgrade adapter boundaries |

No fake scores; compare evidence below (supported features ≠ approval).

| Candidate | Primary source | Usable for | Trade-off and status |
|---|---|---|---|
| Native CSS transitions/keyframes | [MDN CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions), [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations) | Simple hover/focus/pressed/soft appearance changes | No JS library; complex exit-presence/unmount semantics remain consumer/primitive responsibility. **Recommended core default hypothesis**, needs tests |
| Web Animations API (WAAPI) | [MDN Using WAAPI](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) | Imperative cancellation/finish/reverse and bounded sequences | Manage handles, `finished` cancellation rejections, cleanup; **conditional** |
| View Transition API | [MDN API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API), [Usage](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using) | Opt-in SPA/MPA view/route continuity | Feature/browser/SSR and a11y focus tests required, unsupported fallback instant. **Optional future** |
| Motion for React | [Motion docs](https://motion.dev/docs/react), [AnimatePresence](https://motion.dev/docs/react-animate-presence), [accessibility](https://motion.dev/docs/react-accessibility) | Presence, layout, springs/gestures and sequences | Adds runtime React dependency and possibility of stale accessible exit nodes; only after real premium requirement and measured bundle, license and peer support. **Not selected** |
| No dedicated motion engine | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Core functions with immediate semantic states | Preferred safe fallback and zero-cost baseline; visually less expressive but correct |
 
### Audio options

| Candidate | Primary source | Trade-off / proposed use |
|---|---|---|
| No playback module in core | [MDN Autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay) | **Default**: zero payload, off/silent, no sounds in core |
| Lazy native HTMLMediaElement | [MDN HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) | Candidate for rare opt-in audio, `play()` failure swallowed, no external engine |
| Native Web Audio | [MDN Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), [Chrome autoplay](https://developer.chrome.com/blog/autoplay) | Only after concurrency/gain/latency need; AudioContext user gesture and disposal |
| Howler or another third party | Maintainer version/license/support and size **not yet verified** | **Unscored/not selected**; requires benchmark or feature that native fails |

**Source accuracy note:** WCAG [2.2.2 Level A](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide), [2.3.1 Level A](https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold), [2.3.2 Level AAA](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes), [2.3.3 Level AAA](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions). A browser permitting sound never authorizes it without explicit Moonframe user consent.

## Bounded evidence spike before acceptance

1. Confirm consumer React major/SSR/hydration, browser list, animation dependency and primitive provider with existing #1/#3/#4.
2. Specimen Button, Dialog, Toast, Tabs, DataTable pending, route transition and Moonquest reward on Classic/Moonpunk/Moonzine/Moonledger (same content/fixtures); test reduced mode first paint/runtime and keyboard focus with instant fallback.
3. Profile CSS-only vs WAAPI vs optional Motion for React only when presence/gesture/layout requirements matter. Record *actual* bundle bytes, frames/CPU, screen reader/focus failures, reduced preference and browser support, not invented 60fps or KB thresholds.
4. Audio native opt-in user gesture, mute-mid-play, missing/unsupported/blocked playback and visible equivalent; optional Web Audio/Howler only if concurrency problem reproduced. Never ship SFX before asset rights.
5. Approve minimal engine, test/semver plan, rollback and version pinned by accessibility/maintainer owner. Changing engine must not change public component state or user sound preferences.

**Proposed conclusion:** core immediate/static semantic rendering + CSS for conservative micro-feedback; WAAPI/View Transition as progressive enhancements; optional separate motion package only if justified. Optional audio pack/engine absent from core. All remain proposals until measured and reviewed.