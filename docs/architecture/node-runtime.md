# Node.js runtime policy

**Reviewed:** 2026-10-25. **Repository runtime:** Node.js **24.22.1 LTS**.

Use the exact version in `.nvmrc` for local development and CI. GitHub Actions reads that file through `actions/setup-node`; do not duplicate a separate Node version in workflow YAML or add a second version-manager pin without a concrete tooling need. When moving to a newer supported LTS patch, update `.nvmrc`, validate locally, and let CI verify the same value.

Node.js 24.22.1 is the latest LTS release at this review date, per the [official download page](https://nodejs.org/en/download) and [release list](https://nodejs.org/en/blog/release). This repository standardizes on that one LTS line and exact patch to keep local and CI behavior aligned. Historical evidence may name an older Node version when that version was actually used; it is not the current runtime policy.

The repository now has a private local package skeleton. It deliberately has no `engines` field: Node 24.22.1 LTS is the development/CI pin, not an approved consumer minimum. Add a package support range only after consumer compatibility evidence and owner review.
