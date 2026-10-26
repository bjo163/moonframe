# Proposed token vocabulary to runtime bridge

**Observed:** 2026-10-26 · **Status:** inventory only; values and mappings are not approved.

The token dictionary is the authority for the 78 proposed token IDs. `src/styles.css` currently declares 17 `--mf-*` runtime custom properties. These are two different inventories: the runtime properties do not implement the proposed token vocabulary or its 30 appearance maps. The table below maps vocabulary families to plausible existing runtime roles for audit and prioritization; it does not declare a one-to-one alias, resolved value, DTCG conformance, or production coverage.

| Proposed token IDs | Count | Candidate runtime bridge roles | Coverage status |
|---|---:|---|---|
| `color.surface.canvas`, `.default`, `.raised`, `.sunken` | 4 | `--mf-bg`, `--mf-surface`, `--mf-surface-raised` | Partial role overlap; no explicit canvas/sunken bridge |
| `color.text.primary`, `.secondary`, `.muted`, `.inverse` | 4 | `--mf-text`, `--mf-muted` | Partial role overlap; secondary/inverse not separately exposed |
| `color.action.primary`, `.primary.foreground`, `.secondary` | 3 | `--mf-accent`, `--mf-accent-text` | Partial role overlap; secondary action not separately exposed |
| `color.border.default`, `.subtle`, `.strong` | 3 | `--mf-border` | Partial role overlap; three border roles not separately exposed |
| `color.focus.ring`, `color.selection.background`, `color.overlay.scrim` | 3 | None | No dedicated runtime property |
| `color.status.success`, `.warning`, `.danger`, `.info` | 4 | `--mf-danger` | One candidate status role only; other statuses absent |
| `color.data.series.1`, `.2`, `.3` | 3 | None | No dedicated runtime property |
| `type.family.body`, `.heading`, `.display`, `.mono`, `.data` | 5 | `--mf-font`, `--mf-display` | Partial role overlap; mono/data not separately exposed |
| `type.size.xs`, `.sm`, `.body`, `.lg`, `.display` | 5 | None | No dedicated runtime property |
| `type.weight.regular`, `.medium`, `.semibold`, `.bold` | 4 | None | No dedicated runtime property |
| `type.lineHeight.tight`, `.normal`, `.relaxed` | 3 | None | No dedicated runtime property |
| `space.0`, `.1`, `.2`, `.3`, `.4`, `.6`, `.8`, `.12`, `.16` | 9 | `--mf-space`, `--mf-gap` | Generic spacing roles only; scale values are not individually exposed |
| `size.control.sm`, `.md`, `.lg`; `size.icon.sm`, `.md`; `size.target.minimum` | 6 | `--mf-control-height` | Partial control role; size variants/icons/target absent |
| `geometry.radius.none`, `.control`, `.card`; `geometry.border.default`, `geometry.focus.outline` | 5 | `--mf-radius`, `--mf-border` | Partial radius/border role; widths and focus outline absent |
| `elevation.raised`, `.popover`, `.dialog` | 3 | `--mf-shadow` | Generic shadow role only; levels not separately exposed |
| `motion.duration.fast`, `.normal`, `.slow`; `motion.easing.standard`, `motion.distance.small` | 5 | `--mf-duration` | Partial duration role; variants/easing/distance absent |
| `layer.sticky`, `.dropdown`, `.popover`, `.dialog`, `.toast`, `.tooltip` | 6 | None | No dedicated runtime property |
| `density.compact.controlHeight`, `.comfortable.controlHeight`, `.spacious.controlHeight` | 3 | `--mf-control-height` | One active control-height role; density-specific values are not a canonical source map |
| **Total** | **78** | **17 runtime properties observed** | **No full token-to-runtime coverage claim** |

## Runtime property inventory

Observed declarations in `src/styles.css`: `--mf-bg`, `--mf-surface`, `--mf-surface-raised`, `--mf-text`, `--mf-muted`, `--mf-border`, `--mf-accent`, `--mf-accent-text`, `--mf-danger`, `--mf-radius`, `--mf-shadow`, `--mf-font`, `--mf-display`, `--mf-gap`, `--mf-control-height`, `--mf-space`, and `--mf-duration`.

The family groupings above follow the dictionary vocabulary, and candidate roles are inferred from runtime property names and use. Exact aliases, source values, per-skin/per-mode coverage, token types and owner approval remain future work under the token source plan. Do not turn this inventory into a claim that 78×30 values are present.

## Reproduction

- `node scripts/validate-contracts.mjs` — validates canonical contract structure; it does not prove runtime mapping coverage.
- `node scripts/verify-m13-handoff.mjs` — validates handoff integrity; it does not prove token values or approval.
- Counts inspected directly: `requiredSemanticTokenExamples.length` in `contracts/moonframe-token-dictionary-v0.1.json` = 78; distinct custom-property declarations in `src/styles.css` matching `--name:` = 17.

Rollback: remove this inventory and its matching task, TODO, and ledger evidence only.
