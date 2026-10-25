# Moonframe UI — Master TODO (live execution index)

**Audited on:** 2026-10-25 (Asia/Jakarta) · **branch:** `main` · **source snapshot HEAD:** `08c72ad009d613f39955b8f9e0bfb3e5e301000b`. This SHA denotes the *audited baseline*, not a claim that this plan matches the latest future commit. Before work **`git fetch` and compare the fresh `origin/main`**; later documentation commits advance the remote. Audit source: [Master Integration Audit](docs/audit/master-integration-audit.md). GitHub CI on baseline [passed](https://github.com/bjo163/moonframe/actions/runs/40188542601).

**Ownership (no duplicate backlog):** this root `TODO.md` is the **ordered index**, [Implementation Roadmap](docs/implementation-roadmap.md) is strategic phase narrative, [Issue Bible](docs/backlog/master-integration-issue-bible.md) and other [domain backlog files](docs/backlog/) own atomic task descriptions, **GitHub Issues own live issue states** once created; [Release Train & Adoption](docs/architecture/release-train-and-adoption.md) owns gates/milestone release policy. A row marked `planned` here is **not a created GitHub issue**. If status differs from GitHub, trust GitHub and update this summary. No root TODO existed at source snapshot.

**Verified now:** 15 stable skins, 30 pending Light/Dark token slots, 105 `not-reviewed` skin pairs, 270 `not-rendered` visual cells, 151 proposed component IDs; no npm package or implemented UI, production values, original assets or SFX. Existing GitHub issues **#1–#8 all OPEN** at audit snapshot; no PRs. Current local/CI runtime is Node 24.22.1 LTS via `.nvmrc`; older Node 22 CI references below are historical evidence from earlier commits. Worktree cleanliness and actual local consumer versions were **not verified**. No issue in this TODO is `done`.

**Priority/size key:** `P0` integrity blocker, `P1` foundation, `P2` completeness, `P3` optional. `S` = one bounded agent session; `M` = spike or more complex session with a review checkpoint (split further if independently testable). Issue numbers are links only for verified existing tickets. All expected future paths are proposals until a local agent inspects files. No estimates/hours promised.

**Status key:** `ready` = dependencies listed are satisfied enough to start scoped research/checks, not implementation approval; `blocked` = an upstream task, decision or permission is needed; `planned` = future task not yet at dependency gate; `in-progress` only after actual work starts; `done` only with evidence. A GitHub issue may be open while specification is written. Commit/CI/a11y evidence must match each claimed stage.


## Release train / milestone matrix

| ID | Goal | Entry / blockers | Adoptable artifact | Actual state / release decision | Tasks |
|---|---|---|---|---|---:|
| M0 | Repository / Contract Trust | MFI-001/#7, MFI-002/#8, MFI-003/004/012 complete | validated specification snapshot/docs checkpoint | awaiting maintainer/docs reviewer signoff | 5 |
| M1 | Package foundation + consumer prerequisites | #1 consumers; #3 provider; #4 distribution; no assumed package manager | local package tarball + synthetic importer | blocked: #1/#3/#4 and consumer smoke | 6 |
| M2 | Token source and generator slice | #5 bounded DTCG ADR; may research independently of M1 | deterministic fixture CSS/types | blocked: #5 and generator proof | 5 |
| M3 | Theme runtime slice | Token CSS fixture + package+SSR constraints | theme-preview reference consumer | blocked: token/runtime implementation | 4 |
| M4 | Four-skin proof / Skin Lab | Theme preview, #2 Classic, #6 fixture spec | 8 reference appearance renders + six pair evidence slots | blocked: fixtures/screenshots | 5 |
| M5 | Core API and components | Approved component API + four-skin basic smoke | core component preview tarball | blocked: components/behavior tests | 5 |
| M6 | Forms and overlays | Core subset and provider decision | form+overlay consumer preview | blocked: overlays tests | 4 |
| M7 | Premium blocks/templates | Forms/overlays and bounded block catalog | demo template app | blocked: block UI proof | 5 |
| M8 | Advanced workspace | Basic Table and data adapter ADR | opt-in DataTable preview | blocked: data engine ADR and proof | 3 |
| M9 | Remaining skin batches | Four-skin same-content reference / baseline | skin batches toward 30 renders/105 manual reviews | blocked: screenshots/pair reviews | 4 |
| M10 | Original assets and optional effects | Asset provenance and explicit production approval | rights-approved optional packs or blocker record | blocked: rights/production approval | 4 |
| M11 | RC QA gates | Implemented release scope and evidence | RC evidence package or blocker record | blocked: full release evidence | 4 |
| M12 | Stable publication decision | Maintainer and rights/publication approval | owner-approved published version or explicit no-go | blocked: owner approval; NO npm publish | 3 |

**No release has been issued by this plan.** M0 is documentation-only, not a distributable software release; M1 onward are proposed artifacts until real tests. No tags/npm publish are authorized. Every milestone's version/tag proposal, changelog, compatibility, rollback and excluded scope are specified in [the release strategy](docs/architecture/release-train-and-adoption.md).

## Workstream/parallel ownership & critical path

- **Lane A:** `scripts/validate-contracts.mjs`, registry, README/TODO/handoff. Serial MFI-001 → MFI-002 → MFI-003/004; only one integrator edits validator/governance/README at once.
- **Lane B:** package/consumer evidence (MF-003/#1) can research independently of #7. Provider (#3) and package (#4) are serial after real consumers are known. Package scaffolding remains **blocked** until approval.
- **Lane C:** MF-013/#5 DTCG resolver spike can investigate in parallel with consumer inventory; token source and generator changes must be serialized against theme resolver's public interface.
- **Lane D:** theme resolver then Skin Lab; #2/#6 design/fixture specs can progress as prerequisites permit, but screenshots need functioning rendering.
- **Lane E:** component behavior/API docs can be refined independently after governance; implementations wait provider/runtime. No two agents change component IDs/contracts concurrently.
- **Lane F:** premium/data spec reconciliation can be researched separately in `docs/premium`; runtime blocks need form/core exports; optional heavy grid stays separate.
- **Lane G:** asset/motion/SFX policy-only research may parallel other tasks, production requires separate rights approval.
- **Lane H:** QA plan, release gates and consumer friction; owns evidence. A separate consumer fixture acts as integration checkpoint after every adoptable software milestone.

**Hard critical path:** `MFI-001 → MFI-002 → (MFI-003/MFI-004)`; `MF-003 → MF-005 → MF-006 → MF-BOOT-001 → MF-BOOT-002`; `MF-013 → MF-TOKEN-001 → MF-TOKEN-002 → MF-THEME-001 → MF-THEME-002/003 → MF-SKINLAB-001`; `MF-004 + MF-024 → MF-SKINLAB-002/003 → MF-COMP-* → MF-FORM-* → MF-BLOCK-* / MF-DATA-* → MF-QA-* → MF-REL-*`. Do not create branch/force-push; integrate source changes sequentially on approved `main`, or adopt approved PR flow if repo policy changes. All additions must pass an integration checkpoint before another lane consumes outputs.

**M0 execution progress:** [MFI-001 / #7](https://github.com/bjo163/moonframe/issues/7), [MFI-002 / #8](https://github.com/bjo163/moonframe/issues/8), MFI-003, MFI-004, and MFI-012 are complete with evidence below. The linked [initial local execution prompt](docs/handoff/moonframe-local-coding-agent-execution-prompt.md) is historical and limited to MFI-001. The M0 docs-only checkpoint still requires maintainer/docs reviewer signoff; no implementation or release claim is implied.

## Canonical detailed catalogs (reference, not duplicate mutable data)

[Master Issue Bible](docs/backlog/master-integration-issue-bible.md) · [Token tasks](docs/backlog/token-theme-atomic-issues.md) · [Component tasks](docs/backlog/component-api-atomic-issues.md) · [Premium tasks](docs/backlog/premium-catalog-atomic-issues.md) · [Data workspace tasks](docs/backlog/advanced-data-workspace-issues.md) · [Auth tasks](docs/backlog/auth-security-ui-issues.md) · [Asset tasks](docs/backlog/original-asset-atomic-issues.md) · [Motion tasks](docs/backlog/motion-interaction-sfx-atomic-issues.md) · [Accessibility tasks](docs/backlog/accessibility-visual-qa-atomic-issues.md) · [Package tasks](docs/backlog/package-architecture-dx-atomic-issues.md) · [Legacy first six issue specs](docs/backlog/initial-issues.md).

## M0 — Repository / Contract Trust

**Milestone artifact:** validated specification snapshot/docs checkpoint. **Gate:** all five M0 task deliverables have evidence; maintainer/docs reviewer signoff remains pending. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [x] **MFI-001 — Guard GitHub issue ↔ roadmap stable ID collision** · **P0 / S** · **status:** `done` · **lane:** A · **deps:** — · **issue:** [#7](https://github.com/bjo163/moonframe/issues/7)
  - **Expected file owner/scope:** `scripts/validate-contracts.mjs; docs/backlog`. **AC:** True meaning of MF-003 cannot be reassigned; valid fixture passes, collision fixture fails with file+ID.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; node scripts/validate-contracts.mjs --self-test; assert invalid fixture fails. **Risk/rollback:** Rollback validator rule if false positives while retaining regression fixture. **Adoption/output:** validated specification snapshot/docs checkpoint. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.
  - **Verified evidence:** [code commit](https://github.com/bjo163/moonframe/commit/e8cf0ff541f84b073ce6d9c7cb5713e1c522ec55), [historical Node 22 CI](https://github.com/bjo163/moonframe/actions/runs/40191629703), [#7 evidence comment](https://github.com/bjo163/moonframe/issues/7#issuecomment-6397419631); issue closed after acceptance checks passed.

- [x] **MFI-002 — Check one canonical owner per concern and valid refs** · **P1 / S** · **status:** `done` · **lane:** A · **deps:** MFI-001 · **issue:** [#8](https://github.com/bjo163/moonframe/issues/8)
  - **Expected file owner/scope:** `docs/architecture/decisions-and-governance.md; scripts/`. **AC:** Registry covers all domains; negative owner/ref fixtures fail deterministically.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; --self-test plus owner negatives. **Risk/rollback:** Avoid second mutable registry; revert checker with fixtures only if proven false-positive. **Adoption/output:** validated specification snapshot/docs checkpoint. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.
  - **Verified evidence:** [commit](https://github.com/bjo163/moonframe/commit/4b50a2224e42684a89ed75610acf5df7d6eeb7c1), [historical Node 22 CI](https://github.com/bjo163/moonframe/actions/runs/40192042193), [#8 evidence comment](https://github.com/bjo163/moonframe/issues/8#issuecomment-6397475179); all 17 registry rows passed, issue closed.

- [x] **MFI-003 — Check local Markdown links and nested anchors** · **P1 / S** · **status:** `done` · **lane:** A · **deps:** MFI-002 · **issue:** not-created
  - **Expected file owner/scope:** `scripts/validate-contracts.mjs; docs/qa/`. **AC:** Valid local links pass and missing/invalid linked targets fail; external URLs labeled not tested.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; dedicated fixture test. **Risk/rollback:** Anchor slug dialect risk; rollback only checker changes after fixing fixtures. **Adoption/output:** validated specification snapshot/docs checkpoint. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.
  - **Verified evidence:** [commit](https://github.com/bjo163/moonframe/commit/fa93f0d00aff185fb0f9ac85611f04f37e697543), [historical Node 22 CI](https://github.com/bjo163/moonframe/actions/runs/40192231044); inline local links in README/TODO/docs checked, external URL reachability not tested.

- [x] **MFI-004 — Normalize spec/implemented/tested/reviewed/released evidence** · **P1 / S** · **status:** `done` · **lane:** A · **deps:** MFI-002 · **issue:** not-created
  - **Expected file owner/scope:** `docs/architecture/decisions-and-governance.md; docs/qa/`. **AC:** All stages separate; 30 pending, 105 unreviewed, 270 not-rendered unchanged.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; human sampled status review. **Risk/rollback:** No fabricated progress; revert accidental status upgrades. **Adoption/output:** validated specification snapshot/docs checkpoint. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.
  - **Verified evidence:** [commit](https://github.com/bjo163/moonframe/commit/af5ddd14621e9b6984bcf76c53cb3584c59fa506), [historical Node 22 CI](https://github.com/bjo163/moonframe/actions/runs/40192403045); manually sampled four canonical contracts and negative maturity fixtures passed.

- [x] **MFI-012 — Propose minimal task template after settings audit** · **P2 / S** · **status:** `done` · **lane:** A · **deps:** MFI-001,MFI-002 · **issue:** not-created
  - **Expected file owner/scope:** `docs/backlog/; .github/ISSUE_TEMPLATE/ (optional)`. **AC:** No invented assignees/milestones/labels; templates preserve scope/DoD.
  - **Validation/evidence:** Manual template example; YAML parse only if a YAML form is added. **Risk/rollback:** Skip forms if overhead > benefit; revert only template. **Adoption/output:** validated specification snapshot/docs checkpoint. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.
  - **Settings audit:** Issues enabled; zero milestones; ten standard labels; one assignable account; Projects enabled but project inventory unavailable to this token (`read:project` missing). No template existed. The Markdown template sets no labels, project, milestone, or assignee.
  - **Verified evidence:** [template commit](https://github.com/bjo163/moonframe/commit/ebebb210a87539f84873160ee95c879e25c85f9e), [historical Node 22 CI](https://github.com/bjo163/moonframe/actions/runs/40192684444), and manual check of `name`/`about` front matter plus required sections.

## M1 — Package foundation + consumer prerequisites

**Milestone artifact:** local package tarball + synthetic importer. **Gate:** blocked: #1/#3/#4 and consumer smoke. Entry: #1 consumers; #3 provider; #4 distribution; no assumed package manager. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [x] **MF-003 — Inventory real Moon consumer toolchains/SSR/browser target** · **P1 / S** · **status:** `done` · **lane:** B · **deps:** — · **issue:** [#1](https://github.com/bjo163/moonframe/issues/1)
  - **Expected file owner/scope:** `docs/research/consumer-matrix.md (proposed); ADR-0001`. **AC:** Cite actual commit/version per app or mark unknown; pick synthetic test consumer.
  - **Validation/evidence:** [Pinned-source consumer matrix](docs/research/consumer-matrix.md); [ADR-0001 update](docs/adr/0001-primitive-provider.md). Public manifests audited at linked commits; installed/runtime versions, browser matrix, RTL, and execution remain unknown. **Risk/rollback:** No consumer changes or framework installs. **Adoption/output:** synthetic consumer fixture; XIV board recommended for later real-app smoke behind approval gates. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-005 — Equal-fixture Base UI/Radix/React Aria provider spike** · **P1 / M** · **status:** `in-progress` · **lane:** B/E · **deps:** MF-003 · **issue:** [#3](https://github.com/bjo163/moonframe/issues/3)
  - **Expected file owner/scope:** `docs/adr/0001-primitive-provider.md; docs/research/`. **AC:** Dialog, Select, editable Combobox, nested Menu: keyboard/focus/RTL/SSR + bundle measurements or unmeasured.
  - **Validation/evidence:** [Paper comparison and temporary equal-fixture evidence](docs/research/provider-spike.md); 24 Chromium keyboard/focus/ARIA/composition checks (8 per provider: six keyboard/focus cases, one role/name smoke, one class/data-prop/ref/callback composition smoke), 3 RTL/media smoke checks (including nested Menu ArrowLeft-open/ArrowRight-close with provider-specific RTL context), 3 SSR/hydration checks, and separate Vite/Tailwind production builds passed under repository-pinned Node 24.22.1 LTS across Base UI, React Aria, and Radix with a custom editable Combobox. An additional 12 temporary APG-edge tests passed Select Home/End, nested-menu Left Arrow, and top-level Escape for all providers; default nested-menu Escape returned focus to the parent item for Base UI/React Aria, while Radix closed the root menu (11/12 pass). A temporary Radix wrapper used documented SubContent.onEscapeKeyDown, controlled submenu state, preventDefault, and explicit parent-item focus restoration; the full 36-case equal-behavior suite passed with this wrapper. The wrapper result is browser-only and adds Moonframe-owned behavior; manual AT review remains open. Bundle output: Base UI 394.95 kB (127.64 kB gzip), React Aria 431.37 kB (132.19 kB gzip), Radix + custom Combobox 304.20 kB (95.74 kB gzip), including React/app runtime; common CSS 7.27 kB (2.09 kB gzip). The temporary lockfile runtime dependency closures were Base UI 9 packages/12,031,001 installed bytes, React Aria 13/30,665,126 bytes, and aggregate Radix 74/5,466,242 bytes (peer/dev dependencies excluded; installed bytes are not compressed download sizes). Manual AT/Windows forced-colors, broader locale/direction behavior, framework-specific SSR, deeper APG coverage, production consumer footprint, and maintainer review remain unmeasured. Exact lockfile and extra tests are temporary, outside this repository. Contract validator, self-test, and token proof passed. **Risk/rollback:** Provider locking risk: rollback spike; expose no provider props. **Adoption/output:** synthetic consumer fixture; no provider selected. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-006 — Approve minimal package/export/distribution boundary** · **P1 / S** · **status:** `blocked` · **lane:** B · **deps:** MF-003,MF-005 · **issue:** [#4](https://github.com/bjo163/moonframe/issues/4)
  - **Expected file owner/scope:** `docs/adr/0009-package-topology.md; docs/adr/0010-package-distribution.md`. **AC:** Alternatives and consumer support with owner review; license/npm name pending if not approved.
  - **Validation/evidence:** ADR checklist, export example and consumer proof plan. **Risk/rollback:** No npm/public release; revert ADR status if proof absent. **Adoption/output:** local package tarball + synthetic importer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MFI-011 — Confirm package/release gate follows evidence** · **P1 / S** · **status:** `blocked` · **lane:** B/H · **deps:** MF-003,MF-006,MFI-002 · **issue:** not-created
  - **Expected file owner/scope:** `docs/architecture/package-architecture-dx-bible.md; docs/qa/`. **AC:** Source registry vs npm vs hybrid, CSS tree-shake, compatibility documented.
  - **Validation/evidence:** Existing validator; ADR/consumer matrix review. **Risk/rollback:** Do not assert semver/SSR claims without consumer proof. **Adoption/output:** local package tarball + synthetic importer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-BOOT-001 — Create one minimal approved runtime package skeleton** · **P1 / S** · **status:** `blocked` · **lane:** B · **deps:** MF-006,MFI-011 · **issue:** not-created
  - **Expected file owner/scope:** `future package source/manifest (proposed)`. **AC:** Only approved exports/build/types; no empty monorepo packages; no accidental production API.
  - **Validation/evidence:** Plan: build/typecheck/lint after package toolchain chosen. **Risk/rollback:** Rollback scoped package scaffold; do not force push. **Adoption/output:** local package tarball + synthetic importer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-BOOT-002 — Prove tarball/workspace import from exported surface** · **P1 / S** · **status:** `blocked` · **lane:** B/H · **deps:** MF-BOOT-001 · **issue:** not-created
  - **Expected file owner/scope:** `future examples/synthetic-reference-consumer (proposed)`. **AC:** Clean install and CSS+TS+SSR fixture where supported; no deep source imports.
  - **Validation/evidence:** Plan: approved build, npm pack --dry-run --json if npm package. **Risk/rollback:** Rollback fixture/pin; retain failure logs. **Adoption/output:** local package tarball + synthetic importer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M2 — Token source and generator slice

**Milestone artifact:** deterministic fixture CSS/types. **Gate:** blocked: #5 and generator proof. Entry: #5 bounded DTCG ADR; may research independently of M1. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MF-013 — Decide bounded DTCG subset and resolver compatibility** · **P1 / M** · **status:** `in-progress` · **lane:** C · **deps:** — · **issue:** [#5](https://github.com/bjo163/moonframe/issues/5)
  - **Expected file owner/scope:** `docs/adr/0002-token-format-and-generator.md; token fixtures`. **AC:** Type/value/alias cases, edge-cycles, tool versions and source citations approved.
  - **Validation/evidence:** [DTCG-inspired subset fixture proof v0.1.0](scripts/token-subset-proof.mjs); the proof accepts finite values across four proposed types, resolves multi-hop whole-token aliases, rejects self/two-/three-token cycles, missing targets, alias type mismatch, malformed syntax, and unknown color/dimension/duration value fields; it validates supported description/deprecation/extension metadata and explicitly rejects group inheritance, `$extends`, `$root`, `$ref`, unknown properties and unsupported extension keys instead of silently ignoring them. It also rejects deferred fontFamily/fontWeight/cubicBezier/shadow types. CI and local development share Node 24.22.1 LTS via `.nvmrc`; latest pinned-runtime check passed [run 40198187529](https://github.com/bjo163/moonframe/actions/runs/40198187529). Earlier Node 22.23.4 result remains historical at [run 40193573661](https://github.com/bjo163/moonframe/actions/runs/40193573661). [ADR-0002](docs/adr/0002-token-format-and-generator.md); [source plan](contracts/moonframe-token-source-plan-v0.1.json). Generated CSS compiled in a temporary Tailwind 4.3.3 fixture; the utility resolves to the runtime token variable and both mode variables remain in output. No production maps or TS types. **Risk/rollback:** Unknown production-generator support; subset explicitly excludes DTCG-required JSON Pointer so it is not conformant. **Adoption/output:** deterministic fixture CSS, no production values. **DoD:** owner accepts boundary/runtime and production migration remains gated.

- [ ] **MFI-005 — Reconcile token layers, mode resolution, runtime bridge** · **P1 / S** · **status:** `blocked` · **lane:** C · **deps:** MF-013,MFI-002 · **issue:** not-created
  - **Expected file owner/scope:** `docs/architecture/token-pipeline.md; token plan`. **AC:** One owner for semantic names and value source; 30 production slots pending.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; token provenance review. **Risk/rollback:** No wholesale generated token values. **Adoption/output:** deterministic fixture CSS/types. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-TOKEN-001 — Implement small typed token/alias resolver proof** · **P1 / S** · **status:** `blocked` · **lane:** C · **deps:** MF-013 · **issue:** not-created
  - **Expected file owner/scope:** `future token source fixture and tests (proposed)`. **AC:** Valid fixture resolves; cycles/missing/type mismatch fail; no production palette.
  - **Validation/evidence:** Plan: unit tests after toolchain pinned; deterministic fixture check. **Risk/rollback:** Rollback resolver+fixture atomically. **Adoption/output:** deterministic fixture CSS/types. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-TOKEN-002 — Generate deterministic CSS and TS declarations** · **P1 / S** · **status:** `blocked` · **lane:** C · **deps:** MF-TOKEN-001 · **issue:** not-created
  - **Expected file owner/scope:** `future token generator and emitted-fixture directory`. **AC:** Same input byte-identical output; no arbitrary Tailwind classes; runtime vars bridged.
  - **Validation/evidence:** Plan: run generator twice, diff and consumer CSS smoke. **Risk/rollback:** Rollback generated+generator together. **Adoption/output:** deterministic fixture CSS/types. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-TOKEN-003 — Proof fixture generated token CSS is actually consumable** · **P1 / S** · **status:** `blocked` · **lane:** C/H · **deps:** MF-TOKEN-002,MF-BOOT-002 · **issue:** not-created
  - **Expected file owner/scope:** `future reference consumer + token docs`. **AC:** Consumer renders fixture values and errors on unknown mode/semantic.
  - **Validation/evidence:** Plan: consumer build, deterministic snapshot and typecheck. **Risk/rollback:** No claims about 30 approved production maps. **Adoption/output:** deterministic fixture CSS/types. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M3 — Theme runtime slice

**Milestone artifact:** theme-preview reference consumer. **Gate:** blocked: token/runtime implementation. Entry: Token CSS fixture + package+SSR constraints. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MF-THEME-001 — Requested skin/mode/system resolution and fallback** · **P1 / S** · **status:** `blocked` · **lane:** D · **deps:** MF-TOKEN-002,MF-BOOT-001 · **issue:** not-created
  - **Expected file owner/scope:** `future theme resolver implementation`. **AC:** system -> effective light/dark; wrong skin/density/contrast safely falls back.
  - **Validation/evidence:** Plan: pure resolver unit table against Theme Contract. **Risk/rollback:** Rollback export of resolver on regression. **Adoption/output:** theme-preview reference consumer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-THEME-002 — Persistence, OS change and failure handling** · **P1 / S** · **status:** `blocked` · **lane:** D · **deps:** MF-THEME-001 · **issue:** not-created
  - **Expected file owner/scope:** `future theme preference bridge and tests`. **AC:** Invalid storage/no storage and OS theme changes deterministic; no hydration unsafe writes.
  - **Validation/evidence:** Plan: DOM/SSR tests if runtime supports; manual verify. **Risk/rollback:** Rollback persistence adapter; defaults remain safe. **Adoption/output:** theme-preview reference consumer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-THEME-003 — Prove public theme entry in a synthetic adopter** · **P1 / S** · **status:** `blocked` · **lane:** D/B · **deps:** MF-THEME-002,MF-BOOT-002 · **issue:** not-created
  - **Expected file owner/scope:** `future reference consumer integration`. **AC:** Controlled/uncontrolled preference API, CSS propagation, hydration smoke.
  - **Validation/evidence:** Plan: consumer build, types, browser smoke on supported toolchain. **Risk/rollback:** Revert consumer pin/runtime import on mismatch. **Adoption/output:** theme-preview reference consumer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-THEME-004 — Document accessibility guards for effective modes** · **P2 / S** · **status:** `blocked` · **lane:** H/D · **deps:** MF-THEME-003 · **issue:** not-created
  - **Expected file owner/scope:** `docs/qa/; future preference tests`. **AC:** Reduced motion and forced-colors never incorrectly treated as additional skins.
  - **Validation/evidence:** Plan: media preference fixtures and manual review. **Risk/rollback:** No accessibility conformance claim from spec-only tests. **Adoption/output:** theme-preview reference consumer. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M4 — Four-skin proof / Skin Lab

**Milestone artifact:** 8 reference appearance renders + six pair evidence slots. **Gate:** blocked: fixtures/screenshots. Entry: Theme preview, #2 Classic, #6 fixture spec. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MF-004 — Pin Classic visual baseline without affiliation claims** · **P1 / S** · **status:** `blocked` · **lane:** D · **deps:** MF-003 · **issue:** [#2](https://github.com/bjo163/moonframe/issues/2)
  - **Expected file owner/scope:** `docs/research/classic-baseline.md (proposed); ADR-0001`. **AC:** Source/date, typography/geometry, provider boundaries and fallback clear.
  - **Validation/evidence:** [Dated Classic baseline](docs/research/classic-baseline.md) reviewed against official July 2026 backend announcements and current theming/Tailwind docs; read-only visual reference pinned to shadcn `4.22.1`, `new-york`/`neutral`, source commit `daaf156ee00ed91cc7e6bdd937c1b4973152d141`; `node scripts/validate-contracts.mjs` and `--self-test` pass. Provider/backend remains separate and deferred to MF-005; no upstream code/styles copied. **Blocker:** maintainer/reviewer acceptance; issue #2 remains open. **Risk/rollback:** No automatic shadcn adoption. **Adoption/output:** renders and pair evidence remain pending implementation; no screenshot evidence claimed. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-024 — Specify same-content deterministic Skin Lab fixtures** · **P1 / S** · **status:** `blocked` · **lane:** D/H · **deps:** MF-004,MF-013 · **issue:** [#6](https://github.com/bjo163/moonframe/issues/6)
  - **Expected file owner/scope:** `docs/qa/skin-lab-fixtures.md (proposed)`. **AC:** Pin content/data/fonts/viewport/timezone; grayscale/decorations off planned.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; manual link check. **Risk/rollback:** No screenshots counted without rendering. **Adoption/output:** 8 reference appearance renders + six pair evidence slots. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-SKINLAB-001 — Implement identical dashboard/form/dialog/nav/data content** · **P1 / S** · **status:** `blocked` · **lane:** D · **deps:** MF-THEME-003,MF-024 · **issue:** not-created
  - **Expected file owner/scope:** `future skinlab reference fixtures`. **AC:** Same dataset across four skins and light/dark; renderer isolated.
  - **Validation/evidence:** Plan: fixture deterministic assertion, build and browser smoke. **Risk/rollback:** Rollback fixture if not deterministic. **Adoption/output:** 8 reference appearance renders + six pair evidence slots. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-SKINLAB-002 — Render genuinely different noncolor grammars for four skins** · **P1 / M** · **status:** `blocked` · **lane:** D · **deps:** MF-SKINLAB-001 · **issue:** not-created
  - **Expected file owner/scope:** `future skin recipes for classic/moonpunk/moonzine/moonledger`. **AC:** Eight appearance renders; component semantics same; no recolor-only hacks.
  - **Validation/evidence:** Plan: 8 screenshot baseline outputs + keyboard states. **Risk/rollback:** Rollback individual skin recipe not global semantics. **Adoption/output:** 8 reference appearance renders + six pair evidence slots. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-SKINLAB-003 — Perform first six pair reviews with screenshots** · **P1 / S** · **status:** `blocked` · **lane:** H/D · **deps:** MF-SKINLAB-002 · **issue:** not-created
  - **Expected file owner/scope:** `contracts/moonframe-skin-grammar-contract-v1.0.json; QA evidence`. **AC:** Six unique unordered pair observations with reviewer; leave other 99 not-reviewed.
  - **Validation/evidence:** Plan: screenshots gray/decor-off + human eight-dimension record. **Risk/rollback:** Never auto-set PASS; preserve evidence integrity. **Adoption/output:** 8 reference appearance renders + six pair evidence slots. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M5 — Core API and components

**Milestone artifact:** core component preview tarball. **Gate:** blocked: components/behavior tests. Entry: Approved component API + four-skin basic smoke. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MFI-006 — Lock foundational invariant API proposals before code** · **P1 / S** · **status:** `blocked` · **lane:** E · **deps:** MFI-004,MF-005 · **issue:** not-created
  - **Expected file owner/scope:** `docs/component-api-behavior-bible.md; API/state/keyboard contracts`. **AC:** 151 IDs unchanged; controlled/ref/event/keyboard behavior bounded and testable.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; API review. **Risk/rollback:** No provider-specific public props without ADR. **Adoption/output:** core component preview tarball. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-COMP-001 — Implement Button / icon button primitive slice** · **P1 / S** · **status:** `blocked` · **lane:** E · **deps:** MFI-006,MF-THEME-003 · **issue:** not-created
  - **Expected file owner/scope:** `future src/actions/ component subset`. **AC:** Native button semantics, keyboard activation, disabled/focus/loading tests.
  - **Validation/evidence:** Plan: unit, interaction, types, fixture consumer import. **Risk/rollback:** Rollback export/version, keep API ABI note. **Adoption/output:** core component preview tarball. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-COMP-002 — Implement basic Input, Label and field connection** · **P1 / S** · **status:** `blocked` · **lane:** E · **deps:** MF-COMP-001 · **issue:** not-created
  - **Expected file owner/scope:** `future src/inputs/ minimal`. **AC:** Form label/required/invalid/event semantics across modes.
  - **Validation/evidence:** Plan: form-focused tests and manual keyboard. **Risk/rollback:** Rollback changed export and document migration. **Adoption/output:** core component preview tarball. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-COMP-003 — Implement Badge/Card/simple Table foundation** · **P2 / S** · **status:** `blocked` · **lane:** E · **deps:** MF-COMP-001 · **issue:** not-created
  - **Expected file owner/scope:** `future src/display/ minimal`. **AC:** No business logic, meaningful semantic markup, long-content responsive.
  - **Validation/evidence:** Plan: component + screenshot fixture tests. **Risk/rollback:** Rollback individual components, no global skin fork. **Adoption/output:** core component preview tarball. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-COMP-004 — Publish bounded core preview evidence** · **P1 / S** · **status:** `blocked` · **lane:** H/E · **deps:** MF-COMP-001,MF-COMP-002,MF-COMP-003 · **issue:** not-created
  - **Expected file owner/scope:** `future component docs, tests and consumer`. **AC:** Every exported component has types/docs/keyboard tests and 4 skin smoke.
  - **Validation/evidence:** Plan: build/typecheck/pack consumer plus manual review. **Risk/rollback:** No claim for unimplemented 151 catalog entries. **Adoption/output:** core component preview tarball. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M6 — Forms and overlays

**Milestone artifact:** form+overlay consumer preview. **Gate:** blocked: overlays tests. Entry: Core subset and provider decision. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MF-FORM-001 — Controlled/uncontrolled forms/validation slice** · **P1 / S** · **status:** `blocked` · **lane:** E · **deps:** MF-COMP-002,MF-005 · **issue:** not-created
  - **Expected file owner/scope:** `future form/field adapters`. **AC:** Required/invalid/error/help and native semantics; no backend.
  - **Validation/evidence:** Plan: tests for serialization and error transitions. **Risk/rollback:** Revert adapter only, keep form props stable. **Adoption/output:** form+overlay consumer preview. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-FORM-002 — Dialog/Menu/Popover keyboard and portal slice** · **P1 / M** · **status:** `blocked` · **lane:** E · **deps:** MF-005,MF-COMP-004 · **issue:** not-created
  - **Expected file owner/scope:** `future overlay primitives`. **AC:** Escape, nested focus, restoration, RTL, forced-colors and animation guard.
  - **Validation/evidence:** Plan: browser keyboard regression + manual assistive tech. **Risk/rollback:** Rollback selected adapter, no provider API leak. **Adoption/output:** form+overlay consumer preview. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-FORM-003 — Select/Combobox and list-navigation proof** · **P1 / M** · **status:** `blocked` · **lane:** E · **deps:** MF-FORM-002,MF-FORM-001 · **issue:** not-created
  - **Expected file owner/scope:** `future select/combobox components`. **AC:** Long lists, typeahead/filter, arrows and controlled state work.
  - **Validation/evidence:** Plan: APG keyboard sequence tests + SSR when supported. **Risk/rollback:** Fallback to native element if critical a11y blocked. **Adoption/output:** form+overlay consumer preview. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-FORM-004 — Release form+overlay consumer smoke** · **P1 / S** · **status:** `blocked` · **lane:** H/E · **deps:** MF-FORM-001,MF-FORM-002,MF-FORM-003 · **issue:** not-created
  - **Expected file owner/scope:** `future consumer form example and docs`. **AC:** No focus traps or missing label; 4 skin cases pass and documented.
  - **Validation/evidence:** Plan: browser regression, a11y auto+manual evidence. **Risk/rollback:** Revert preview version on focus regression. **Adoption/output:** form+overlay consumer preview. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M7 — Premium blocks/templates

**Milestone artifact:** demo template app. **Gate:** blocked: block UI proof. Entry: Forms/overlays and bounded block catalog. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MFI-007 — Reconcile component/block/template/starter adapter boundaries** · **P1 / S** · **status:** `blocked` · **lane:** F · **deps:** MFI-006 · **issue:** not-created
  - **Expected file owner/scope:** `docs/premium/premium-scope-bible.md; premium manifests`. **AC:** Every level one owner; composition doesn't duplicate mutable API.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; sampled refs. **Risk/rollback:** Keep backend/auth game/ERP code out. **Adoption/output:** demo template app. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MFI-008 — Reconcile auth/data presentation vs app backend** · **P1 / S** · **status:** `blocked` · **lane:** F · **deps:** MFI-007 · **issue:** not-created
  - **Expected file owner/scope:** `docs/premium/auth-ui-suite.md; data-workspace.md`. **AC:** UI states explicit; query logic/auth enforcement stays consumer-owned.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; threat boundary review. **Risk/rollback:** Rollback duplicate template API definition. **Adoption/output:** demo template app. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-BLOCK-001 — Build sign-in/onboarding **UI-only** blocks** · **P1 / S** · **status:** `blocked` · **lane:** F · **deps:** MFI-007,MF-FORM-004 · **issue:** not-created
  - **Expected file owner/scope:** `future blocks/auth-ui and onboarding`. **AC:** Loading, invalid, pending, disabled, reset states with adapter injection.
  - **Validation/evidence:** Plan: synthetic auth adapter + keyboard tests. **Risk/rollback:** Revert block export; no credentials stored. **Adoption/output:** demo template app. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-BLOCK-002 — Build first reusable pages from blocks** · **P1 / M** · **status:** `blocked` · **lane:** F · **deps:** MF-BLOCK-001,MF-COMP-004 · **issue:** not-created
  - **Expected file owner/scope:** `future templates/dashboard/list/detail/settings`. **AC:** Dashboard CRUD list/detail/settings with synthetic data, responsive/errors.
  - **Validation/evidence:** Plan: demo app build, screens+states. **Risk/rollback:** Rollback template version, keep reusable components. **Adoption/output:** demo template app. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-BLOCK-003 — Demonstrate real-world composability without backend coupling** · **P2 / S** · **status:** `blocked` · **lane:** H/F · **deps:** MF-BLOCK-002 · **issue:** not-created
  - **Expected file owner/scope:** `future sample consumer and docs`. **AC:** Public import only; upgrade guide and no consumer auth service embedded.
  - **Validation/evidence:** Plan: clean consumer rebuild and a11y interaction sampling. **Risk/rollback:** Revert demo pin; preserve user app code. **Adoption/output:** demo template app. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M8 — Advanced workspace

**Milestone artifact:** opt-in DataTable preview. **Gate:** blocked: data engine ADR and proof. Entry: Basic Table and data adapter ADR. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MF-DATA-001 — Approve simple Table vs DataTable engine boundary** · **P1 / S** · **status:** `blocked` · **lane:** F · **deps:** MF-COMP-003,MFI-008 · **issue:** not-created
  - **Expected file owner/scope:** `docs/adr/0004-data-workspace-engine.md; data contracts`. **AC:** Row identity, server query/sort/filter pagination scope and adapter limits accepted.
  - **Validation/evidence:** Review ADR, schema negative cases, no engine unless approved. **Risk/rollback:** Avoid shipping heavy engine in core. **Adoption/output:** opt-in DataTable preview. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-DATA-002 — Build sorting/paging/filters/selection vertical slice** · **P1 / M** · **status:** `blocked` · **lane:** F · **deps:** MF-DATA-001,MF-FORM-004 · **issue:** not-created
  - **Expected file owner/scope:** `future optional data workspace implementation`. **AC:** Stable row IDs, controlled server mode, no forced virtualizer.
  - **Validation/evidence:** Plan: synthetic server and keyboard tests. **Risk/rollback:** Rollback optional module not main package. **Adoption/output:** opt-in DataTable preview. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-DATA-003 — Prove workspace adoption, overflow and big fixture** · **P2 / S** · **status:** `blocked` · **lane:** H/F · **deps:** MF-DATA-002 · **issue:** not-created
  - **Expected file owner/scope:** `future workspace consumer tests/docs`. **AC:** Accessible table/grid semantics, large synthetic data smoke.
  - **Validation/evidence:** Plan: performance + a11y + query contract test. **Risk/rollback:** Consumer can revert to simple Table. **Adoption/output:** opt-in DataTable preview. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M9 — Remaining skin batches

**Milestone artifact:** skin batches toward 30 renders/105 manual reviews. **Gate:** blocked: screenshots/pair reviews. Entry: Four-skin same-content reference / baseline. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MF-SKIN-001 — Roll out next three skins with noncolor design evidence** · **P1 / M** · **status:** `blocked` · **lane:** D · **deps:** MF-SKINLAB-003 · **issue:** not-created
  - **Expected file owner/scope:** `future skin recipes batch 1 (proposed)`. **AC:** Light/dark screenshots and pair reviews for added skins, no recolor-only.
  - **Validation/evidence:** Plan: deterministic fixture + human anti-overlap review. **Risk/rollback:** Revert only affected skin recipe. **Adoption/output:** skin batches toward 30 renders/105 manual reviews. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-SKIN-002 — Roll out next four skins with visual and behavior parity** · **P1 / M** · **status:** `blocked` · **lane:** D · **deps:** MF-SKIN-001 · **issue:** not-created
  - **Expected file owner/scope:** `future skin recipes batch 2`. **AC:** Unique geometry/typography/surfaces, stable behavior and modes.
  - **Validation/evidence:** Plan: visual comparisons/manual review + component smoke. **Risk/rollback:** Safe fallback to last approved skin recipes. **Adoption/output:** skin batches toward 30 renders/105 manual reviews. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-SKIN-003 — Complete remaining four skins and appearance renders** · **P1 / M** · **status:** `blocked` · **lane:** D · **deps:** MF-SKIN-002 · **issue:** not-created
  - **Expected file owner/scope:** `future skin recipes final batch`. **AC:** 15 skins/30 rendered screenshots; no skipped accessibility states.
  - **Validation/evidence:** Plan: screenshot matrix + keyboard/no-decoration smoke. **Risk/rollback:** Revert unreviewed skins behind explicit fallback. **Adoption/output:** skin batches toward 30 renders/105 manual reviews. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-SKIN-004 — Complete/record all 105 distinct pair reviews** · **P1 / M** · **status:** `blocked` · **lane:** H/D · **deps:** MF-SKIN-003 · **issue:** not-created
  - **Expected file owner/scope:** `skin grammar pairwise review and QA evidence`. **AC:** Only evidence-backed reviewer status, exceptions recorded.
  - **Validation/evidence:** Plan: inspect 105 screenshots pairs and 8 dimensions, audit trail. **Risk/rollback:** Do not call PASS by count alone. **Adoption/output:** skin batches toward 30 renders/105 manual reviews. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M10 — Original assets and optional effects

**Milestone artifact:** rights-approved optional packs or blocker record. **Gate:** blocked: rights/production approval. Entry: Asset provenance and explicit production approval. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [x] **MFI-009 — Keep asset and motion/SFX authority consistent** · **P2 / S** · **status:** `done` · **lane:** G · **deps:** MFI-002 · **issue:** not-created
  - **Expected file owner/scope:** `docs/brand/; docs/motion/; sfx/asset contracts`. **AC:** Rights, off-default audio, accessibility rules no duplicates.
  - **Validation/evidence:** Authority crosswalk verified in [Motion Bible §1](docs/motion/motion-interaction-sfx-bible.md), [Asset Bible §1 and §6–7/§9](docs/brand/original-asset-brand-bible.md), [SFX contract](contracts/moonframe-sfx-contract-v0.1.json), [ADR-0006](docs/adr/0006-original-asset-pipeline-and-brand.md), and [ADR-0007](docs/adr/0007-motion-and-optional-audio-engines.md): the SFX contract owns event IDs, consent/default/mute/cooldown; Motion Bible owns motion and reduced-stimulation eligibility; Asset Bible owns media provenance, licensing and distribution. No competing event catalog found; zero media produced; asset rights remain unapproved. Contract validator and self-tests pass. **Risk/rollback:** No asset/music production in this task. **Adoption/output:** rights-approved optional packs or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-ASSET-001 — Produce only approved original asset slice** · **P2 / M** · **status:** `blocked` · **lane:** G · **deps:** MFI-009,MF-SKIN-003 · **issue:** not-created
  - **Expected file owner/scope:** `future optional assets and provenance register`. **AC:** Evidence rights/source/license, asset fallback+contrast verified.
  - **Validation/evidence:** Plan: license review, visual render and fixture integrity. **Risk/rollback:** Remove optional pack on rights failure. **Adoption/output:** rights-approved optional packs or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-MOTION-001 — Prove motion alternatives without status-only animation** · **P2 / S** · **status:** `blocked` · **lane:** G · **deps:** MFI-009,MF-THEME-004 · **issue:** not-created
  - **Expected file owner/scope:** `future opt-in motion recipes`. **AC:** Reduced-motion/forced colors respected, performance budget.
  - **Validation/evidence:** Plan: browser media/keyboard tests. **Risk/rollback:** Motion can be disabled without losing meaning. **Adoption/output:** rights-approved optional packs or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-SFX-001 — Implement optional, muted-by-default cosmetic feedback** · **P3 / S** · **status:** `blocked` · **lane:** G · **deps:** MFI-009,MF-MOTION-001 · **issue:** not-created
  - **Expected file owner/scope:** `future optional SFX module (approval-required)`. **AC:** No sole status channel, audio permission/rights approved, mute works.
  - **Validation/evidence:** Plan: browser opt-in tests & rights review. **Risk/rollback:** Entire optional audio disabled by default; rollback module. **Adoption/output:** rights-approved optional packs or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M11 — RC QA gates

**Milestone artifact:** RC evidence package or blocker record. **Gate:** blocked: full release evidence. Entry: Implemented release scope and evidence. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MFI-010 — Align QA evidence ledger/release claims** · **P1 / S** · **status:** `blocked` · **lane:** H · **deps:** MF-024,MFI-004 · **issue:** not-created
  - **Expected file owner/scope:** `docs/qa/accessibility-visual-qa-bible.md; evidence contracts`. **AC:** All 105 no invented pass; 270 existing not-rendered unless actual evidence.
  - **Validation/evidence:** node scripts/validate-contracts.mjs; evidence audit. **Risk/rollback:** No axe-only conformance claims. **Adoption/output:** RC evidence package or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-QA-001 — Run core behavior and AT/manual coverage against release scope** · **P1 / M** · **status:** `blocked` · **lane:** H · **deps:** MF-COMP-004,MF-SKIN-004 · **issue:** not-created
  - **Expected file owner/scope:** `future functional a11y QA harness and evidence`. **AC:** Keyboard/focus/form/RTL/forced colors/reduced motion evidence links.
  - **Validation/evidence:** Plan: browser, axe and manual AT; environment pinned. **Risk/rollback:** Release blocked on critical accessibility gaps. **Adoption/output:** RC evidence package or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-QA-002 — Prove clean import/exports/SSR/peer/sideEffects/size** · **P1 / S** · **status:** `blocked` · **lane:** H/B · **deps:** MF-QA-001,MF-BOOT-002 · **issue:** not-created
  - **Expected file owner/scope:** `future package release test fixture`. **AC:** Pack filelist and consumer matrix repeatable with CI logs.
  - **Validation/evidence:** Plan: clean package test, build, typecheck, CSS check. **Risk/rollback:** Rollback release candidate to last good tarball. **Adoption/output:** RC evidence package or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-QA-003 — Assemble RC evidence, scope and open risks** · **P1 / S** · **status:** `blocked` · **lane:** H · **deps:** MF-QA-001,MF-QA-002 · **issue:** not-created
  - **Expected file owner/scope:** `docs/qa/; release notes draft`. **AC:** Checklist of known unsupported skins/features + migration + manual signoff.
  - **Validation/evidence:** Plan: QA gate audit and reviewer checklist. **Risk/rollback:** No RC if license/name/security gaps unresolved. **Adoption/output:** RC evidence package or blocker record. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## M12 — Stable publication decision

**Milestone artifact:** owner-approved published version or explicit no-go. **Gate:** blocked: owner approval; NO npm publish. Entry: Maintainer and rights/publication approval. See [release matrix](docs/architecture/release-train-and-adoption.md).

- [ ] **MF-REL-001 — Approve scope/license/name/trademark/consumer support** · **P1 / S** · **status:** `blocked` · **lane:** H · **deps:** MF-QA-003,MF-006 · **issue:** not-created
  - **Expected file owner/scope:** `docs/architecture/release-train-and-adoption.md; ADRs`. **AC:** Explicit maintainer/legal decisions recorded, not assumed.
  - **Validation/evidence:** Plan: signoff records, check package rights and docs. **Risk/rollback:** Blocked means no publish; correct via ADR. **Adoption/output:** owner-approved published version or explicit no-go. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-REL-002 — Configure provenance/trusted publishing if eligible** · **P1 / S** · **status:** `blocked` · **lane:** H · **deps:** MF-REL-001 · **issue:** not-created
  - **Expected file owner/scope:** `future publishing CI only when approved`. **AC:** No long-lived secrets; dist-tag and rollback documented.
  - **Validation/evidence:** Plan: CI dry run, package verification before real release. **Risk/rollback:** Disable publication workflow on identity anomaly. **Adoption/output:** owner-approved published version or explicit no-go. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

- [ ] **MF-REL-003 — Make explicit stable release go/no-go decision** · **P1 / S** · **status:** `blocked` · **lane:** H · **deps:** MF-REL-002 · **issue:** not-created
  - **Expected file owner/scope:** `release notes, changelog, migration, compatibility docs`. **AC:** Publish only owner-authorized tested tag with evidence and consumer rollback.
  - **Validation/evidence:** Plan: reviewer final gates and live release verification. **Risk/rollback:** If blocked preserve last preview, do not mint fake stable tag. **Adoption/output:** owner-approved published version or explicit no-go. **DoD:** evidence-linked scoped diff + valid checks + current GitHub status sync; no release claim without milestone gate.

## Final cross-milestone Definition of Done

Every task: exact HEAD, current issue/ADR, no overwritten user work, scoped diff, tests with exit/status and logs, relevant accessibility/security/migration notes, evidence/commit, issue sync when allowed, no fake pass/review/release. Every milestone: deliverable actually verified, consumer path when software exists, compatibility promise bounded to measured toolchains, release notes and a rollback plan. If blocked, record gate owner/task and keep prior preview as only adoption option. Never declare 15 skins/30 appearances/105 pair approvals from contract counts alone.
