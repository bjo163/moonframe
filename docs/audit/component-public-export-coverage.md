# Component public export coverage (MF-PF-004)

Inspected at source HEAD before this documentation change: `c7ee51e672b993c176719ca2e088ef302a86b38c`. The contract `contracts/moonframe-component-manifest-v0.1.json` specifies 151 candidate IDs and explicitly warns that proposed APIs do not establish exports. The package root `src/index.js` re-exports `src/components.js`; `package.json` exposes that root as `@moonwitness/moonframe`. This catalog maps each manifest ID to the exact same-name implementation/type export where present. “Not a public runtime component export” means no same-name runtime value is exported through that root; it does not prevent a future compound/composed implementation from satisfying the specification after behavior evidence.

Counts: 151 specified records; 47 same-name runtime exports; 47 same-name runtime and type exports; 104 without a same-name runtime export. This is source inventory, not browser behavior, API completeness, accessibility or acceptance proof.

| Spec ID | Spec name | Tier | Observed status | Runtime source / package path | Type source |
|---|---|---|---|---|---|
| `theme-provider` | `ThemeProvider` | core-v1 | runtime + type export | `src/theme.js` → package root `.` and `./theme` | `src/theme.d.ts` via package root `.` and `./theme` |
| `skin-selector` | `SkinSelector` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `mode-selector` | `ModeSelector` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `density-selector` | `DensitySelector` | core-v1 | not a public runtime component export | — | — |
| `responsive-container` | `ResponsiveContainer` | core-v1 | not a public runtime component export | — | — |
| `stack` | `Stack` | core-v1 | not a public runtime component export | — | — |
| `inline` | `Inline` | core-v1 | not a public runtime component export | — | — |
| `grid` | `Grid` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `divider` | `Divider` | core-v1 | not a public runtime component export | — | — |
| `visually-hidden` | `VisuallyHidden` | core-v1 | not a public runtime component export | — | — |
| `icon` | `Icon` | core-v1 | not a public runtime component export | — | — |
| `focus-ring` | `FocusRing` | core-v1 | not a public runtime component export | — | — |
| `error-boundary` | `ErrorBoundary` | core-v1 | not a public runtime component export | — | — |
| `button` | `Button` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `icon-button` | `IconButton` | core-v1 | not a public runtime component export | — | — |
| `link` | `Link` | core-v1 | not a public runtime component export | — | — |
| `button-group` | `ButtonGroup` | core-v1 | not a public runtime component export | — | — |
| `breadcrumbs` | `Breadcrumbs` | core-v1 | not a public runtime component export | — | — |
| `tabs` | `Tabs` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `segmented-control` | `SegmentedControl` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `pagination` | `Pagination` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `navigation-menu` | `NavigationMenu` | core-v1 | not a public runtime component export | — | — |
| `sidebar` | `Sidebar` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `app-shell` | `AppShell` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `topbar` | `Topbar` | core-v1 | not a public runtime component export | — | — |
| `navigation-rail` | `NavigationRail` | core-v1 | not a public runtime component export | — | — |
| `mobile-navigation` | `MobileNavigation` | core-v1 | not a public runtime component export | — | — |
| `dropdown-menu` | `DropdownMenu` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `context-menu` | `ContextMenu` | core-v1 | not a public runtime component export | — | — |
| `menubar` | `Menubar` | core-v1 | not a public runtime component export | — | — |
| `command-palette` | `CommandPalette` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `kbd` | `Kbd` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `input` | `Input` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `textarea` | `Textarea` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `label` | `Label` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `field` | `Field` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `fieldset` | `Fieldset` | core-v1 | not a public runtime component export | — | — |
| `form-message` | `FormMessage` | core-v1 | not a public runtime component export | — | — |
| `checkbox` | `Checkbox` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `radio-group` | `RadioGroup` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `switch` | `Switch` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `select` | `Select` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `combobox` | `Combobox` | core-v1 | not a public runtime component export | — | — |
| `search-input` | `SearchInput` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `number-input` | `NumberInput` | core-v1 | not a public runtime component export | — | — |
| `slider` | `Slider` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `validation-summary` | `ValidationSummary` | core-v1 | not a public runtime component export | — | — |
| `autocomplete` | `Autocomplete` | future | not a public runtime component export | — | — |
| `multi-select` | `MultiSelect` | future | not a public runtime component export | — | — |
| `date-picker` | `DatePicker` | future | not a public runtime component export | — | — |
| `date-range-picker` | `DateRangePicker` | future | not a public runtime component export | — | — |
| `currency-input` | `CurrencyInput` | future | not a public runtime component export | — | — |
| `file-upload` | `FileUpload` | future | not a public runtime component export | — | — |
| `otpinput` | `OTPInput` | future | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `unsaved-changes` | `UnsavedChanges` | future | not a public runtime component export | — | — |
| `dialog` | `Dialog` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `alert-dialog` | `AlertDialog` | core-v1 | not a public runtime component export | — | — |
| `drawer` | `Drawer` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `popover` | `Popover` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `tooltip` | `Tooltip` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `toast` | `Toast` | core-v1 | not a public runtime component export | — | — |
| `alert` | `Alert` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `callout` | `Callout` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `progress` | `Progress` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `spinner` | `Spinner` | core-v1 | not a public runtime component export | — | — |
| `skeleton` | `Skeleton` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `empty-state` | `EmptyState` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `error-state` | `ErrorState` | core-v1 | not a public runtime component export | — | — |
| `status-badge` | `StatusBadge` | core-v1 | not a public runtime component export | — | — |
| `badge` | `Badge` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `avatar` | `Avatar` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `accordion` | `Accordion` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `collapsible` | `Collapsible` | core-v1 | not a public runtime component export | — | — |
| `offline-state` | `OfflineState` | premium-block | not a public runtime component export | — | — |
| `chip` | `Chip` | premium-block | not a public runtime component export | — | — |
| `avatar-group` | `AvatarGroup` | premium-block | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `timeline` | `Timeline` | premium-block | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `activity-feed` | `ActivityFeed` | premium-block | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `table` | `Table` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `data-table` | `DataTable` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `filter-bar` | `FilterBar` | core-v1 | not a public runtime component export | — | — |
| `bulk-action-toolbar` | `BulkActionToolbar` | core-v1 | not a public runtime component export | — | — |
| `column-visibility` | `ColumnVisibility` | premium-block | not a public runtime component export | — | — |
| `row-selection` | `RowSelection` | premium-block | not a public runtime component export | — | — |
| `saved-views` | `SavedViews` | premium-block | not a public runtime component export | — | — |
| `tree-view` | `TreeView` | premium-block | not a public runtime component export | — | — |
| `calendar` | `Calendar` | premium-block | not a public runtime component export | — | — |
| `kanban` | `Kanban` | premium-block | not a public runtime component export | — | — |
| `chart-container` | `ChartContainer` | premium-block | not a public runtime component export | — | — |
| `chart-legend` | `ChartLegend` | premium-block | not a public runtime component export | — | — |
| `data-export` | `DataExport` | premium-block | not a public runtime component export | — | — |
| `quest-card` | `QuestCard` | specialized-optional | not a public runtime component export | — | — |
| `rarity-badge` | `RarityBadge` | specialized-optional | not a public runtime component export | — | — |
| `inventory-slot` | `InventorySlot` | specialized-optional | not a public runtime component export | — | — |
| `progress-indicator` | `ProgressIndicator` | specialized-optional | not a public runtime component export | — | — |
| `journal-frame` | `JournalFrame` | specialized-optional | not a public runtime component export | — | — |
| `ledger-filter-workspace` | `LedgerFilterWorkspace` | specialized-optional | not a public runtime component export | — | — |
| `split-detail-pane` | `SplitDetailPane` | specialized-optional | not a public runtime component export | — | — |
| `audit-timeline` | `AuditTimeline` | specialized-optional | not a public runtime component export | — | — |
| `service-health-panel` | `ServiceHealthPanel` | specialized-optional | not a public runtime component export | — | — |
| `event-stream` | `EventStream` | specialized-optional | not a public runtime component export | — | — |
| `log-viewer` | `LogViewer` | specialized-optional | not a public runtime component export | — | — |
| `editorial-spread` | `EditorialSpread` | specialized-optional | not a public runtime component export | — | — |
| `container` | `Container` | core-v1 | not a public runtime component export | — | — |
| `flex` | `Flex` | core-v1 | not a public runtime component export | — | — |
| `typography` | `Typography` | core-v1 | not a public runtime component export | — | — |
| `scroll-area` | `ScrollArea` | core-v1 | not a public runtime component export | — | — |
| `resizable` | `Resizable` | core-v1 | not a public runtime component export | — | — |
| `logo-slot` | `LogoSlot` | core-v1 | not a public runtime component export | — | — |
| `aspect-ratio` | `AspectRatio` | core-v1 | not a public runtime component export | — | — |
| `surface` | `Surface` | core-v1 | not a public runtime component export | — | — |
| `spacing-token-probe` | `SpacingTokenProbe` | core-v1 | not a public runtime component export | — | — |
| `motion-preference` | `MotionPreference` | core-v1 | not a public runtime component export | — | — |
| `form-layout` | `FormLayout` | core-v1 | not a public runtime component export | — | — |
| `toggle` | `Toggle` | core-v1 | not a public runtime component export | — | — |
| `toggle-group` | `ToggleGroup` | core-v1 | not a public runtime component export | — | — |
| `hover-card` | `HoverCard` | core-v1 | not a public runtime component export | — | — |
| `split-button` | `SplitButton` | core-v1 | not a public runtime component export | — | — |
| `action-menu` | `ActionMenu` | core-v1 | not a public runtime component export | — | — |
| `skip-link` | `SkipLink` | core-v1 | not a public runtime component export | — | — |
| `time-picker` | `TimePicker` | core-v1 | not a public runtime component export | — | — |
| `password-field` | `PasswordField` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `phone-input` | `PhoneInput` | core-v1 | not a public runtime component export | — | — |
| `pin-input` | `PinInput` | core-v1 | not a public runtime component export | — | — |
| `field-array` | `FieldArray` | core-v1 | not a public runtime component export | — | — |
| `nested-field-group` | `NestedFieldGroup` | core-v1 | not a public runtime component export | — | — |
| `password-strength-meter` | `PasswordStrengthMeter` | core-v1 | not a public runtime component export | — | — |
| `file-dropzone` | `FileDropzone` | premium-block | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `confirm-action` | `ConfirmAction` | core-v1 | not a public runtime component export | — | — |
| `inline-error` | `InlineError` | core-v1 | not a public runtime component export | — | — |
| `permission-denied` | `PermissionDenied` | core-v1 | not a public runtime component export | — | — |
| `connection-error` | `ConnectionError` | core-v1 | not a public runtime component export | — | — |
| `maintenance-notice` | `MaintenanceNotice` | core-v1 | not a public runtime component export | — | — |
| `session-expired-notice` | `SessionExpiredNotice` | core-v1 | not a public runtime component export | — | — |
| `card` | `Card` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `stat-card` | `StatCard` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `description-list` | `DescriptionList` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `copy-button` | `CopyButton` | core-v1 | not a public runtime component export | — | — |
| `code-block` | `CodeBlock` | core-v1 | runtime + type export | `src/components.js` → package root `.` | `src/components.d.ts` via package root `. |
| `markdown-content` | `MarkdownContent` | premium-block | not a public runtime component export | — | — |
| `file-preview` | `FilePreview` | premium-block | not a public runtime component export | — | — |
| `media-frame` | `MediaFrame` | core-v1 | not a public runtime component export | — | — |
| `metric-delta` | `MetricDelta` | core-v1 | not a public runtime component export | — | — |
| `expandable-row` | `ExpandableRow` | premium-block | not a public runtime component export | — | — |
| `data-grid-facade` | `DataGridFacade` | premium-block | not a public runtime component export | — | — |
| `table-cell-renderer` | `TableCellRenderer` | premium-block | not a public runtime component export | — | — |
| `column-chooser` | `ColumnChooser` | premium-block | not a public runtime component export | — | — |
| `filter-chip` | `FilterChip` | premium-block | not a public runtime component export | — | — |
| `saved-view-picker` | `SavedViewPicker` | premium-block | not a public runtime component export | — | — |
| `export-menu` | `ExportMenu` | premium-block | not a public runtime component export | — | — |
| `query-state-banner` | `QueryStateBanner` | premium-block | not a public runtime component export | — | — |
