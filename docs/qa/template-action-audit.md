# Template action audit (MF-VF-262)

**Date:** 2026-10-27 · **Source:** `apps/moonframe/templates/index.tsx` · **Status:** source audit captured; no browser interaction review performed.

This inventory classifies the action callsites in the 43-template catalog. `setNotice(...)` handlers are working local demonstrations: they update the template's notice and do not perform the named external operation. `href` actions navigate within the showcase. Dialog triggers open their local dialog. Buttons without a handler or link are currently inert and need a later task to implement a local demo or identify the consumer integration seam. This is source evidence, not proof of runtime behavior.

| Action(s) | Classification | Actual behavior / integration seam |
|---|---|---|
| Export CSV; Deploy Release | Demo | Updates notice only; real export pipeline and deployment API are consumer integrations. |
| Inspect Selected; Invite Member; Create API Key | Dialog | Opens local dialog; data persistence, invitations, and key issuance require consumer services. |
| Continue with GitHub (demo); Continue with SSO (demo); Simulate Sign In; Simulate Workspace Setup; simulated recovery/MFA/code confirmation/continue | Demo | Notice explicitly states no auth, redirect, delivery, factor verification, account, or workspace is created. |
| Save Profile; Update Alerts | Demo | Local notice only; persistence/settings service is a consumer seam. |
| Reset Avatar | Inert | No handler or link; should become a local reset demo or receive an avatar storage seam. |
| Post Reply; Synthesize Layout; Schedule Consultation; Retry Operation; Request Elevated Role; Reconnect Now; Replay Payload | Demo | Local notice or browser reload only; real messaging, synthesis, CRM, service retry, authorization, connectivity, and queue APIs are consumer seams. |
| Run Batch Settlement; Export Master CSV; Restart Workloads; Drain Node; Initiate Drill; Dispatch Test Event; Purge Dead Letters; Generate Fiscal Statement; Create SKU; Save Currency; Test SAML Connection; Attune Relic | Inert | No handler/link at source callsite; requires an explicitly simulated local outcome or a consumer-owned finance, operations, inventory, identity, or game service. |
| Install with pnpm; Explore 15 Skins | Inert | No handler/link at source callsite; install needs a copy/open interaction and Explore should navigate or scroll to the skin section. |
| Return to Showcase Home; Browse 22 Templates; Return to Showcase Home; Back to Safe Territory | Navigation | Anchor links to showcase routes. The “22 Templates” label is stale relative to the 43-template catalog. |
| Navigation items in Quickstart/template sidebars | Navigation | Anchor links to in-page sections. |

The audit also found repeated inert actions across distinct template records; the table groups labels by shared behavior so each action class is visible without implying that a demo notice is a backend integration. Follow-up work should wire meaningful local affordances, correct the stale template count, and keep simulated authentication language explicit. No code behavior was changed by this audit.

**Verification:** inspected action callsites with `rg -n "<Button|<button|onClick=|href=" apps/moonframe/templates/index.tsx`; no tests, package-manager commands, validators, typecheck, build, or browser review run under the invocation runner override. Human review/acceptance not claimed.
