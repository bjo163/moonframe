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
