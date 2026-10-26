import * as React from 'react';
import type { SkinId } from './skins.js';
import type { Mode } from './theme.js';

type RefComponent<T, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';

export interface AsChildProps {
  asChild?: boolean;
}

export const Slot: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement>>;

export const Button: RefComponent<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & AsChildProps & {
    variant?: Variant;
    size?: 'sm' | 'md' | 'lg' | 'icon';
    loading?: boolean;
  }
>;
export const Card: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;
export const CardHeader: RefComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & AsChildProps>;
export const CardTitle: RefComponent<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement> & AsChildProps>;
export const CardDescription: RefComponent<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & AsChildProps>;
export const CardContent: RefComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & AsChildProps>;
export const CardFooter: RefComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & AsChildProps>;
export const Input: RefComponent<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>;
export const Textarea: RefComponent<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
export const Label: RefComponent<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>;
export const Select: RefComponent<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>;
export const Badge: RefComponent<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & AsChildProps & { variant?: Variant }>;

export const Table: RefComponent<HTMLTableElement, React.TableHTMLAttributes<HTMLTableElement>>;
export const TableHeader: RefComponent<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>;
export const TableBody: RefComponent<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>;
export const TableFooter: RefComponent<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>;
export const TableRow: RefComponent<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>;
export const TableHead: RefComponent<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>;
export const TableCell: RefComponent<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>;
export const TableCaption: RefComponent<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>;

export interface CheckableProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}
export const Checkbox: RefComponent<HTMLInputElement, CheckableProps>;
export const Switch: RefComponent<HTMLInputElement, CheckableProps>;
export const Progress: RefComponent<HTMLDivElement, Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & { value?: number; max?: number; label?: string }>;
export const Avatar: RefComponent<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { src?: string; alt?: string; fallback?: React.ReactNode }>;
export const Separator: RefComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { orientation?: 'horizontal' | 'vertical'; decorative?: boolean }>;
export const Alert: RefComponent<HTMLDivElement, Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & { title?: React.ReactNode; variant?: Variant }>;
export const Skeleton: RefComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>;

export interface TabItem {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}
export const Tabs: RefComponent<HTMLDivElement, TabsProps>;

export interface DialogProps extends Omit<React.DialogHTMLAttributes<HTMLDialogElement>, 'title'> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  trigger?: React.ReactElement;
  closeLabel?: string;
}
export const Dialog: RefComponent<HTMLDialogElement, DialogProps>;

export interface AccordionItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}
export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  items: AccordionItem[];
  multiple?: boolean;
  defaultValue?: string[];
}
export const Accordion: RefComponent<HTMLDivElement, AccordionProps>;

/* Layout, Shell & Theme Controls */
export const AppShell: RefComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & AsChildProps>;
export const Sidebar: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;
export const Main: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;
export const Header: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;
export const Nav: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;
export const Hero: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;
export const Grid: RefComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { columns?: number }>;

export interface NavItemProps extends React.HTMLAttributes<HTMLElement>, AsChildProps {
  active?: boolean;
  href?: string;
  disabled?: boolean;
}
export const NavItem: RefComponent<HTMLElement, NavItemProps>;

export interface StatCardProps extends React.HTMLAttributes<HTMLElement> {
  label?: React.ReactNode;
  value?: React.ReactNode;
  detail?: React.ReactNode;
  icon?: React.ReactNode;
}
export const StatCard: RefComponent<HTMLElement, StatCardProps>;

export interface SkinSelectorProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  value?: SkinId;
  onValueChange?: (skin: SkinId) => void;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  variant?: 'select' | 'list';
  label?: string;
}
export const SkinSelector: RefComponent<HTMLElement, SkinSelectorProps>;

export interface ModeSelectorProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  value?: Mode;
  onValueChange?: (mode: Mode) => void;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  variant?: 'select' | 'segmented';
  label?: string;
}
export const ModeSelector: RefComponent<HTMLElement, ModeSelectorProps>;

/* Form Field & RadioGroup */
export const FieldDescription: RefComponent<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>;
export const FieldError: RefComponent<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>;
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}
export const Field: RefComponent<HTMLDivElement, FieldProps>;

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  items: RadioOption[];
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}
export const RadioGroup: RefComponent<HTMLDivElement, RadioGroupProps>;

/* Navigation, Overlays, Feedback & Data Display */
export const Breadcrumb: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & { label?: string }>;
export const BreadcrumbItem: RefComponent<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement> & AsChildProps>;
export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, AsChildProps {
  current?: boolean;
}
export const BreadcrumbLink: RefComponent<HTMLElement, BreadcrumbLinkProps>;

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  label?: string;
}
export const Pagination: RefComponent<HTMLElement, PaginationProps>;

export interface DrawerProps extends DialogProps {
  side?: 'left' | 'right';
}
export const Drawer: RefComponent<HTMLDialogElement, DrawerProps>;

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  trigger: React.ReactElement;
  title?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: 'start' | 'end';
}
export const Popover: RefComponent<HTMLDivElement, PopoverProps>;

export interface DropdownMenuItem {
  value?: string;
  label: React.ReactNode;
  disabled?: boolean;
  variant?: Variant;
  onSelect?: (value?: string) => void;
}
export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactElement;
  items: DropdownMenuItem[];
  label?: string;
  align?: 'start' | 'end';
}
export const DropdownMenu: RefComponent<HTMLDivElement, DropdownMenuProps>;

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'> {
  content: React.ReactNode;
  children: React.ReactElement;
}
export const Tooltip: RefComponent<HTMLSpanElement, TooltipProps>;

export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}
export const EmptyState: RefComponent<HTMLDivElement, EmptyStateProps>;

export const Kbd: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement>>;
export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code?: string;
  language?: string;
}
export const CodeBlock: RefComponent<HTMLPreElement, CodeBlockProps>;

export interface ToastInput {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: Variant;
  duration?: number;
}
export interface ToastItem extends ToastInput {
  id: string;
}
export interface ToastContextValue {
  toasts: ToastItem[];
  toast(input: ToastInput): string;
  dismiss(id: string): void;
}
export function ToastProvider(props: { children?: React.ReactNode }): React.ReactNode;
export function useToast(): ToastContextValue;

export interface DataTableColumn<T = Record<string, unknown>> {
  key: string;
  header: React.ReactNode;
  sortable?: boolean;
  accessor?: (row: T) => unknown;
  render?: (row: T, index: number) => React.ReactNode;
}
export interface DataTableProps<T = Record<string, unknown>> extends React.HTMLAttributes<HTMLDivElement> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey?: keyof T | ((row: T, index: number) => React.Key);
  caption?: React.ReactNode;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyTitle?: React.ReactNode;
  emptyDescription?: React.ReactNode;
  pageSize?: number;
}
export const DataTable: RefComponent<HTMLDivElement, DataTableProps<any>>;

/* Extended Inputs, Charts, Navigation & Level C Reusable Composite Blocks */

export interface OTPInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  length?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  label?: string;
}
export const OTPInput: RefComponent<HTMLDivElement, OTPInputProps>;

export interface PasswordFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  defaultVisible?: boolean;
  showStrength?: boolean;
  toggleLabel?: string;
}
export const PasswordField: RefComponent<HTMLInputElement, PasswordFieldProps>;

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  shortcut?: React.ReactNode;
}
export const SearchInput: RefComponent<HTMLInputElement, SearchInputProps>;

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  label?: React.ReactNode;
  showValue?: boolean;
  formatValue?: (value: number) => string;
}
export const Slider: RefComponent<HTMLInputElement, SliderProps>;

export interface TagInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (tags: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}
export const TagInput: RefComponent<HTMLDivElement, TagInputProps>;

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  items: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}
export const SegmentedControl: RefComponent<HTMLDivElement, SegmentedControlProps>;

export interface FileDropzoneProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onFilesSelected?: (files: File[]) => void;
}
export const FileDropzone: RefComponent<HTMLDivElement, FileDropzoneProps>;

export interface BarChartDatum {
  label: string;
  value: number;
  tone?: Variant;
}
export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: BarChartDatum[];
  height?: number;
  label?: string;
  formatValue?: (value: number) => string;
}
export const BarChart: RefComponent<HTMLDivElement, BarChartProps>;

export interface SparklineProps extends React.SVGAttributes<SVGSVGElement> {
  data: number[];
  width?: number;
  height?: number;
  label?: string;
  variant?: Variant;
}
export const Sparkline: RefComponent<SVGSVGElement, SparklineProps>;

export interface StepItem {
  id?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  status?: 'complete' | 'current' | 'upcoming';
}
export interface StepperProps extends React.OlHTMLAttributes<HTMLOListElement> {
  steps: StepItem[];
  currentStep?: number;
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}
export const Stepper: RefComponent<HTMLOListElement, StepperProps>;

export interface TimelineItem {
  id?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  time?: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: Variant;
}
export interface TimelineProps extends React.OlHTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
}
export const Timeline: RefComponent<HTMLOListElement, TimelineProps>;

export interface AvatarGroupItem {
  id?: string;
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AvatarGroupItem[];
  max?: number;
  label?: string;
}
export const AvatarGroup: RefComponent<HTMLDivElement, AvatarGroupProps>;

export interface DescriptionListItem {
  term: React.ReactNode;
  details: React.ReactNode;
}
export interface DescriptionListProps extends React.HTMLAttributes<HTMLDListElement> {
  items?: DescriptionListItem[];
  columns?: 1 | 2 | 3;
}
export const DescriptionList: RefComponent<HTMLDListElement, DescriptionListProps>;
export const DescriptionTerm: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;
export const DescriptionDetails: RefComponent<HTMLElement, React.HTMLAttributes<HTMLElement> & AsChildProps>;

export interface CalloutProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}
export const Callout: RefComponent<HTMLElement, CalloutProps>;
export const Banner: RefComponent<HTMLElement, CalloutProps>;

export interface CommandPaletteItem {
  id: string;
  label: string;
  group?: string;
  shortcut?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: (item: CommandPaletteItem) => void;
}
export interface CommandPaletteProps extends Omit<DialogProps, 'title'> {
  items: CommandPaletteItem[];
  placeholder?: string;
  emptyText?: React.ReactNode;
  title?: React.ReactNode;
  enableHotkey?: boolean;
}
export const CommandPalette: RefComponent<HTMLDialogElement, CommandPaletteProps>;

/* Level C Reusable Composite Blocks */

export interface BreadcrumbEntry {
  label: React.ReactNode;
  href?: string;
  current?: boolean;
}
export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  breadcrumbs?: BreadcrumbEntry[] | React.ReactNode;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
}
export const PageHeader: RefComponent<HTMLElement, PageHeaderProps>;

export interface MetricItem {
  id?: string;
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: React.ReactNode;
  deltaTone?: Variant;
  detail?: React.ReactNode;
  trend?: number[];
  icon?: React.ReactNode;
}
export interface MetricGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MetricItem[];
  columns?: number;
}
export const MetricGrid: RefComponent<HTMLDivElement, MetricGridProps>;

export interface AuthCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  logo?: React.ReactNode;
  error?: React.ReactNode;
  status?: React.ReactNode;
  socialActions?: React.ReactNode;
  footer?: React.ReactNode;
}
export const AuthCard: RefComponent<HTMLElement, AuthCardProps>;

export interface PricingCardProps extends React.HTMLAttributes<HTMLElement> {
  name: React.ReactNode;
  price: React.ReactNode;
  period?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  featured?: boolean;
  features: React.ReactNode[];
  ctaLabel?: React.ReactNode;
  onSelect?: () => void;
  footer?: React.ReactNode;
}
export const PricingCard: RefComponent<HTMLElement, PricingCardProps>;

export interface SettingsSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  footer?: React.ReactNode;
  action?: React.ReactNode;
}
export const SettingsSection: RefComponent<HTMLElement, SettingsSectionProps>;

export interface ActivityFeedProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items: TimelineItem[];
  action?: React.ReactNode;
  emptyTitle?: React.ReactNode;
  emptyDescription?: React.ReactNode;
}
export const ActivityFeed: RefComponent<HTMLElement, ActivityFeedProps>;

/* M10 Original 15-Skin Vector Marks & Opt-In SFX */

export interface SkinBrandMarkProps extends React.SVGAttributes<SVGSVGElement> {
  skin?: SkinId;
  size?: number | string;
  decorative?: boolean;
  label?: string;
}
export const SkinBrandMark: RefComponent<SVGSVGElement, SkinBrandMarkProps>;

export interface SkinArtworkProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  skin?: SkinId;
  title?: React.ReactNode;
  caption?: React.ReactNode;
}
export const SkinArtwork: RefComponent<HTMLElement, SkinArtworkProps>;

export type SFXEventId =
  | 'success'
  | 'warning'
  | 'error'
  | 'notification'
  | 'confirmation'
  | 'quest-reward'
  | 'confirm.success'
  | 'confirm.warning'
  | 'confirm.error'
  | 'notification.incoming'
  | 'operation.progress-complete'
  | 'game.reward';

export interface SFXPlayResult {
  played: boolean;
  eventId?: string;
  reason?: string;
}

export interface SFXContextValue {
  enabled: boolean;
  muted: boolean;
  volume: number;
  consentGranted: boolean;
  lastEvent: { id: string; timestamp: number } | null;
  /** Grant app-level audio consent from a trusted click, pointerup, keydown, or touchend event. Does not request browser permission. */
  grantConsent: (event: Event | React.SyntheticEvent) => boolean;
  revokeConsent: () => void;
  setMuted: (muted: boolean) => void;
  setVolume: (volume: number) => void;
  play: (eventId: SFXEventId) => SFXPlayResult;
}

export interface SFXProviderProps {
  defaultEnabled?: boolean;
  defaultMuted?: boolean;
  defaultVolume?: number;
  children?: React.ReactNode;
}
export function SFXProvider(props: SFXProviderProps): React.ReactElement;
export function useSFX(): SFXContextValue;


