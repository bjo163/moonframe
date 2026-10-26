# Moonpanel visual direction

**Status:** implementation direction derived from the canonical skin contracts; not rendered or approved.
**Depends on:** `MF-VF-015` (reference inventory, implemented).

## Signature direction

Compose Moonpanel as a strict rectangular grid whose panel spans and consistent gutters establish page rhythm. Keep panels bounded, titled, and non-overlapping; vary their size only to express content hierarchy. The grid itself carries the identity, including in grayscale and decoration-off views. Use panel motifs sparingly inside frames, and keep illustrations contained so they cannot obscure live content or control boundaries.

Treat each panel as a predictable reading unit: clear title, aligned body, and stable placement for repeated data. Keep real headings, navigation, values, and controls in the DOM. Use a consistent body hierarchy and chapter-like headings without requiring a particular unlicensed font. Grid transitions must preserve continuity and never imply that content has moved in reading or focus order.

## Distinction from neighboring skins

- **Moonhalftone:** Moonpanel's identity comes from a uniform rectangular grid, deliberate spans, and gutters. Do not use monochrome screentone or varied sequential page pacing as its primary structure.
- **Moonzine:** Moonpanel uses bounded panels and consistent gutters; it must not become an asymmetrical magazine spread or torn-paper collage.
- **Moonpunk:** Moonpanel relies on orderly panel hierarchy, not offset utility slabs, explosive impact marks, or hard-shadow framing.

## Placement and behavior

Keep cards wholly within their grid cells, tables intact within a panel, and dialog content inside a visibly bounded inset frame. Form labels and controls follow complete DOM order inside a boxed form panel. Panel-caption actions and notification tabs supplement full accessible names; they never replace them. Chart summaries retain an accessible textual/table alternative, and status meaning cannot depend on color or illustration.

On narrow screens, serialize panels in semantic reading order and preserve all operations without horizontal overflow. Do not reorder keyboard traversal to reproduce a desktop composition. Bound decorative artwork to optional panel regions; forced-colors, decoration-off, asset-failure, and reduced-motion states retain clear panel boundaries, focus visibility, readable text, and the same behavior. Motion must be brief and nonessential, with a quiet or immediate reduced-motion path.

## Evidence still required

This brief is a written direction only. Motif and pattern production, component recipes, runtime integration, responsive Light/Dark captures, grayscale and forced-colors checks, and human comparison remain separate tasks. No visual approval, rights clearance, production token decision, or implementation status is implied.
