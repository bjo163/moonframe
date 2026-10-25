# Node.js runtime policy

**Reviewed:** 2026-10-25. **Repository runtime:** Node.js **24.22.1 LTS**.

Use the exact version in `.nvmrc` for local development and CI. GitHub Actions reads that file through `actions/setup-node`; do not duplicate a separate Node version in workflow YAML or add a second version-manager pin without a concrete tooling need. When moving to a newer supported LTS patch, update `.nvmrc`, validate locally, and let CI verify the same value.

Node.js 24.22.1 is the latest LTS release at this review date, per the [official download page](https://nodejs.org/en/download) and [release list](https://nodejs.org/en/blog/release). Node 22 is also still an LTS line, but this repository standardizes on one line and patch to keep local and CI behavior aligned. Historical evidence may name an older Node version when that version was actually used; it is not the current runtime policy.

This repository has no package manifest yet, so there is no `engines` field to set. Add one when the first package manifest is approved, matching the supported Node policy and validating compatibility before widening its range.
