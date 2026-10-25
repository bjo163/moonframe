# Motion, Interaction & SFX — test strategy and evidence gates

**2026-10-25 · specification only, no packages/animations/audio installed.** Authority [Motion Bible](../motion/motion-interaction-sfx-bible.md), [recipes](../../contracts/moonframe-motion-recipes-v0.1.json), [interaction patterns](../../contracts/moonframe-motion-interactions-v0.1.json), [canonical SFX](../../contracts/moonframe-sfx-contract-v0.1.json), [180 planned visual cases](../../contracts/moonframe-motion-qa-coverage-v0.1.json).

## Normative WCAG vs Moonframe product safety policy

- **WCAG 2.2 2.2.2 Pause, Stop, Hide (Level A):** for auto-starting moving content in parallel >5 seconds require pause/stop/hide unless essential; auto-updating in parallel can require pause/stop/hide or frequency controls with no five-second allowance. [W3C](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide).
- **2.3.1 Three Flashes or Below Threshold (Level A)** and **2.3.2 Three Flashes (Level AAA)** are different criteria. [W3C Quickref](https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold), [W3C AAA](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes).
- **2.3.3 Animation from Interactions (Level AAA):** nonessential motion can be disabled except essential. Moonframe proposes this stronger **product policy** for reduced motion even if AA is the baseline; *do not misstate AAA as AA*. [W3C](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions).
- WCAG AA **target**, not compliance evidence: A/AA focus, text/non-text contrast, 200/400% reflow/zoom, forced colors/high contrast, name/role/value and labels must be verified against real pages. No animation/cue may replace required accessible meaning.

## Evidence layers

| Layer | Future checks | Current |
|---|---|---|
| Existing CI static | Strict JSON parsing, 25 unique recipe IDs/token refs, 18 interaction mappings to existing components, 15 unique skin signatures and canonical paths, 6 existing SFX opt-in events and visual equivalents, 180 planned appearance slots | Pending integration into existing Node validator |
| Schema/negative fixtures | Proposed Draft 2020-12 schema, 12 rejected invalid motion recipes: missing reduced policy, missing interruption, fake implemented/reviewed, unknown component/token, autoplay loop, missing focus/instant, unknown SFX | Structural subset only, no independent full schema runtime |
| Unit (later) | Recipe resolution determinism, preference switching, cancellation when old state, stale async, token type parsing, invalid paths/IDs | Not run |
| Component interaction (later) | Native keyboard/touch/pointer parity, focus remains on open dialog/close, dismiss and stale timers, semantic state end without animation | Not run |
| Browser (later) | CSS/WAAPI/View Transition feature-detection and fallback, tab background/suspend, no-JS/SSR hydration, reduced OS toggles, blocked Autoplay and `play()` rejections | Not run |
| Visual (later) | **6 scenarios × 15 skins × Light/Dark = 180 planned cells**; full/reduced/no-motion, focus/forced colors/grayscale/decoration-off, same data/viewport/time | 0 rendered, 0 reviewed |
| Human AT (later) | Manual NVDA/VoiceOver keyboard/AT for dialogs/menus/forms/toasts/data/streaming; no ghost in accessibility tree, live status reading | Not run |
| Performance (later) | Real consumer-device/frame/CPU/bundle profiling of CSS vs WAAPI vs Motion; no arbitrary 60FPS “pass” without evidence | Not run |
| Audio (later) | Consent before playback, mute on mid-audio, background tab, blocked gesture, unsupported codec, lazy/missing asset, category cooldown/dedup, no spam, licensed sound masters and visual/ARIA equivalent | 0 media files |

### Representative fixture and manual review order

Start **Classic/Moonpunk/Moonzine/Moonledger** in both modes, then high-risk Moonglitch/Moonsmash/Moonquest, then all 15. Fix content/viewport/fonts/data/OS state. The 105 global Skin Grammar pair comparisons are **separate unreviewed evidence**; don't auto-approve them from a validated contract file. Motion signatures differ in accents, but keyboard/DOM behavior must match across skins.

### Interruption matrix (mandatory when code exists)

1. OS reduces motion mid-dialog/drawer/route animation → cancel cosmetic; content, focus, active modal and `aria-expanded` correct immediately.
2. Skin or Light/Dark changes while menu/dialog/tooltip open → same open state, focus and scroll position; no replay or layout mismatch.
3. Escape/close mid-exit, open/close rapidly, unmount/route change → no ghost focusable subtree, leaked animation handles/timers, or postponed business callback.
4. Background tab → stop/defer nonessential animation/audio; resume with *current* state, not catch-up storm.
5. Unsupported WAAPI/ViewTransition/audio engine → same semantic final state, no rejected user action.
6. Async data/AI streaming canceled or stale → motion canceled, only current authorized state displayed; no sound on each chunk.
7. Keyboard reduced-motion and forced-colors switching → visible focus ring, stable accessible names; no info hidden under texture/glow.
8. Audio `play()` throws/rejects, device muted, consent missing, missing file, master mute toggled during playback → graceful silence, visible status unaffected.

### Release blockers

Flashing beyond thresholds, nonpausable automatically updating/moving content triggering WCAG A requirement, essential action requiring transition to finish, lost focus/inertness, stale accessible exit nodes, motion-only error/loading/reward, erroneous success implied by animation, unmuted audio without explicit consent, nonfatal playback failure blocking app, event spam/secret leak, unlicensed SFX, reduced mode retaining high-vestibular transitions, styling differences changing semantics, false tested/approved flag without browser/human proof.

**Tooling:** current GitHub Actions Node22 runs `node scripts/validate-contracts.mjs` and `node scripts/validate-contracts.mjs --self-test`. Future measured tools (uninstalled): Testing Library/user-event, Playwright deterministic animations, axe + manual NVDA/VoiceOver, browser performance and media/mock gesture. Do not claim all of these ran.