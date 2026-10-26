# Reference rights and output-tree checklist

Use this checklist when a documentation-only M13 task records reference or asset status. It distinguishes repository evidence from source-image rights and visual review.

## Documentation-only change

- [ ] Record the exact documentation files changed.
- [ ] Inspect `git status --short` and `git ls-files --others --exclude-standard` before and after the documentation edit.
- [ ] Confirm no screenshot, build, test, or generated asset output was created by the docs-only work.
- [ ] If an output exists, identify its producing command and task before retaining it; do not describe it as a capture unless the command actually ran.
- [ ] Record verification commands that actually ran and their exit results. Do not infer host-runner checks.

## Reference and asset boundaries

- [ ] Use the creative-reference contract as the authority for expected source hashes and dimensions.
- [ ] Recompute a source hash only when the source bytes are present; otherwise label contract values as transcribed metadata.
- [ ] Keep comparison references separate from distributable package assets.
- [ ] Record license/rights status as unresolved until supported by actual authorization or a qualified review.
- [ ] Keep screenshot capture, visual comparison, human review, and acceptance as distinct evidence states.

## Evidence note for MF-VF-444 (2026-10-27)

At starting HEAD `1d7243f91269971b6d2d1c85d3494a0a43d98d25`, `git status --porcelain=v1` and `git ls-files --others --exclude-standard` returned no paths. This documentation-only update adds this checklist; it did not invoke a build, test, screenshot, or asset generator. No generated output was observed from this task. No validators, package-manager commands, test suites, typecheck, build, or browser capture were run under the runner override; host runner owns verification and checkpoint. This is a source-tree inspection, not proof about prior runs or external reference rights.
