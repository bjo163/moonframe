# Classic — Visual Direction and Anti-Overlap Brief

**Status:** `implemented / not-human-reviewed` · **Task:** MF-VF-216 · **Scope:** restrained compatibility baseline only; no production token, font, logo, asset, or consumer-brand approval.

## Direction

Classic is Moonframe's predictable application baseline. Use a conventional shell with a clear content column, familiar sidebar or topbar navigation, and a stable hierarchy of page title, supporting context, primary action, and content. Standard control geometry, subtle borders, restrained elevation, and clean semantic surfaces should make the interface familiar without drawing attention to decoration. Use a neutral modern system sans stack and conventional heading scale; do not bundle an unverified font or define new token values.

Tables, forms, cards, tabs, and breadcrumbs should follow familiar application patterns. Keep spacing consistent, align labels and values, and use elevation only to clarify layers such as dialogs or menus. Functional icons retain their shared meaning. Skin-specific illustration and texture are unnecessary; any optional decoration stays subordinate and can be removed without changing content or controls.

## Distinction from neighboring skins

- **Moonraw:** Classic uses polished conventional controls, subtle borders, and restrained elevation. Moonraw exposes construction through raw structure, rigid type, and minimal or absent surface treatment. Do not flatten Classic into an unstyled wireframe or give Moonraw Classic's polished neutral finish.
- **Moonledger:** Classic is a general-purpose compatibility baseline. Moonledger is an enterprise data workbench organized around persistent filters, compact aligned columns, and split record panes. Do not make dense ledger geometry the default Classic composition.
- **Moonpunk:** Classic prioritizes familiar, low-distraction application patterns. Moonpunk uses operational workspace slabs, stronger geometry, and a more expressive visual hierarchy. Keep Moonpunk's identity out of Classic.

## Shared behavior and review constraints

Keep public component APIs, DOM and reading order, keyboard interaction, form behavior, and ARIA meanings identical across skins. Light and dark modes must preserve semantic status meanings and readable control boundaries. Maintain visible focus, associated validation messages, usable target sizes, and responsive reflow without page-level horizontal overflow. Reduced motion, grayscale, decoration-off, forced-colors, and zoom must retain all content and actions.

Compare the same fixture content in light and dark modes, grayscale, decoration-off, and responsive viewports before claiming visual distinction. Classic is a Moonframe compatibility baseline, not an official shadcn brand or endorsement. Human pair review, font and asset rights, production token values, and acceptance remain pending.
