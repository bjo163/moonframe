'use client';

import React, { createContext, forwardRef, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { skins } from './skins.js';
import { useTheme } from './theme.js';

const h = React.createElement;
const cx = (...values) => values.filter(Boolean).join(' ');

function mergeRefs(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === 'function') ref(node);
      else if (ref && typeof ref === 'object') ref.current = node;
    }
  };
}

/**
 * Polymorphic Slot primitive for Next.js `<Link>` (`asChild`) composition.
 * Merges classNames, styles, refs, and event handlers onto the single child element.
 */
export const Slot = forwardRef(function Slot({ children, className, style, ...slotProps }, forwardedRef) {
  if (!React.isValidElement(children)) return null;
  const childProps = children.props || {};
  const mergedProps = { ...slotProps, ...childProps };

  for (const key of Object.keys(slotProps)) {
    if (/^on[A-Z]/.test(key) && typeof slotProps[key] === 'function' && typeof childProps[key] === 'function') {
      mergedProps[key] = (...args) => {
        childProps[key](...args);
        slotProps[key](...args);
      };
    }
  }

  mergedProps.className = cx(className, childProps.className) || undefined;
  if (style || childProps.style) {
    mergedProps.style = { ...(style || {}), ...(childProps.style || {}) };
  }
  const childRef = children.ref ?? childProps.ref;
  mergedProps.ref = childRef ? mergeRefs(forwardedRef, childRef) : forwardedRef;

  return React.cloneElement(children, mergedProps);
});

const element = (tag, baseClass) => forwardRef(function Element({ className, asChild = false, ...props }, ref) {
  const Comp = asChild ? Slot : tag;
  return h(Comp, { ...props, className: cx(baseClass, className), ref });
});

function useControllable(value, defaultValue, onChange) {
  const [internal, setInternal] = useState(defaultValue);
  const controlled = value !== undefined;
  const current = controlled ? value : internal;
  const set = useCallback((next) => {
    if (!controlled) setInternal(next);
    if (next !== current) onChange?.(next);
  }, [controlled, current, onChange]);
  return [current, set];
}

export const Button = forwardRef(function Button({ className, variant = 'primary', size = 'md', type = 'button', asChild = false, loading = false, disabled, children, ...props }, ref) {
  if (asChild) {
    return h(Slot, {
      ...props,
      ref,
      className: cx('mf-button', className),
      'data-variant': variant,
      'data-size': size,
      'data-loading': loading || undefined,
      'aria-busy': loading || undefined,
      'aria-disabled': (disabled || loading) || undefined,
    }, children);
  }
  return h('button', {
    ...props,
    type,
    ref,
    disabled: disabled || loading,
    'aria-busy': loading || undefined,
    'data-loading': loading || undefined,
    className: cx('mf-button', className),
    'data-variant': variant,
    'data-size': size,
  }, children);
});

export const Card = element('section', 'mf-card');
export const CardHeader = element('div', 'mf-card-header');
export const CardTitle = element('h2', 'mf-card-title');
export const CardDescription = element('p', 'mf-card-description');
export const CardContent = element('div', 'mf-card-content');
export const CardFooter = element('div', 'mf-card-footer');

export const Input = forwardRef(function Input({ className, type = 'text', ...props }, ref) {
  return h('input', { ...props, type, ref, className: cx('mf-input', className) });
});
export const Textarea = element('textarea', 'mf-textarea');
export const Label = element('label', 'mf-label');
export const Select = element('select', 'mf-select');

export const Badge = forwardRef(function Badge({ className, variant = 'secondary', asChild = false, ...props }, ref) {
  const Comp = asChild ? Slot : 'span';
  return h(Comp, { ...props, ref, className: cx('mf-badge', className), 'data-variant': variant });
});

export const Table = element('table', 'mf-table');
export const TableHeader = element('thead', 'mf-table-header');
export const TableBody = element('tbody', 'mf-table-body');
export const TableFooter = element('tfoot', 'mf-table-footer');
export const TableRow = element('tr', 'mf-table-row');
export const TableHead = forwardRef(function TableHead({ scope = 'col', ...props }, ref) {
  return h('th', { ...props, scope, ref });
});
export const TableCell = element('td', 'mf-table-cell');
export const TableCaption = element('caption', 'mf-table-caption');

function checkable(baseClass, role) {
  return forwardRef(function Checkable({ label, className, id: providedId, onCheckedChange, onChange, ...props }, ref) {
    const generatedId = useId();
    const id = providedId ?? generatedId;
    const handleChange = (event) => {
      onChange?.(event);
      onCheckedChange?.(event.currentTarget.checked);
    };
    const input = h('input', { ...props, id, type: 'checkbox', role, className: cx(baseClass, className), onChange: handleChange, ref });
    return label == null ? input : h('label', { htmlFor: id, className: 'mf-check-label' }, input, h('span', null, label));
  });
}
export const Checkbox = checkable('mf-checkbox');
export const Switch = checkable('mf-switch', 'switch');

export const Progress = forwardRef(function Progress({ value = 0, max = 100, label = 'Progress', className, ...props }, ref) {
  const limit = Number.isFinite(max) && max > 0 ? max : 100;
  const amount = Math.min(limit, Math.max(0, Number.isFinite(value) ? value : 0));
  return h('div', { 'aria-label': label, ...props, ref, role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': limit, 'aria-valuenow': amount, className: cx('mf-progress', className) },
    h('span', { className: 'mf-progress-fill', style: { width: `${amount / limit * 100}%` } }));
});

export const Avatar = forwardRef(function Avatar({ src, alt = '', fallback = '?', className, ...props }, ref) {
  const [failedSource, setFailedSource] = useState(null);
  return h('span', { ...props, ref, className: cx('mf-avatar', className) },
    src && src !== failedSource
      ? h('img', { src, alt, onError: () => setFailedSource(src) })
      : h('span', { role: alt ? 'img' : undefined, 'aria-label': alt || undefined }, fallback));
});

export const Separator = forwardRef(function Separator({ orientation = 'horizontal', decorative = true, className, ...props }, ref) {
  return h('div', { ...props, ref, className: cx('mf-separator', className), role: decorative ? 'none' : 'separator', 'aria-orientation': decorative ? undefined : orientation, 'data-orientation': orientation });
});

export const Alert = forwardRef(function Alert({ title, variant = 'secondary', className, children, role = 'status', ...props }, ref) {
  return h('div', { ...props, role, ref, className: cx('mf-alert', className), 'data-variant': variant }, title && h('strong', { className: 'mf-alert-title' }, title), children);
});

export const Skeleton = forwardRef(function Skeleton({ className, ...props }, ref) {
  return h('div', { ...props, ref, className: cx('mf-skeleton', className), 'aria-hidden': true });
});

/** Automatic-activation tabs. Item values must be unique stable strings. */
export const Tabs = forwardRef(function Tabs({ items, value, defaultValue, onValueChange, orientation = 'horizontal', label = 'Sections', className, ...props }, ref) {
  const id = useId();
  const buttons = useRef([]);
  const [selected, setSelected] = useControllable(value, defaultValue ?? items.find(item => !item.disabled)?.value, onValueChange);
  const effective = items.some(item => item.value === selected && !item.disabled) ? selected : items.find(item => !item.disabled)?.value;
  function onKeyDown(event, index) {
    const enabled = items.map((item, i) => item.disabled ? -1 : i).filter(i => i >= 0);
    let target;
    const current = enabled.indexOf(index);
    const rtl = typeof getComputedStyle === 'function' && getComputedStyle(event.currentTarget).direction === 'rtl';
    const nextKey = orientation === 'vertical' ? 'ArrowDown' : rtl ? 'ArrowLeft' : 'ArrowRight';
    const previousKey = orientation === 'vertical' ? 'ArrowUp' : rtl ? 'ArrowRight' : 'ArrowLeft';
    if (event.key === nextKey) target = enabled[(current + 1) % enabled.length];
    if (event.key === previousKey) target = enabled[(current - 1 + enabled.length) % enabled.length];
    if (event.key === 'Home') target = enabled[0];
    if (event.key === 'End') target = enabled.at(-1);
    if (target !== undefined) {
      event.preventDefault();
      setSelected(items[target].value);
      buttons.current[target]?.focus();
    }
  }
  return h('div', { ...props, ref, className: cx('mf-tabs', className), 'data-orientation': orientation },
    h('div', { role: 'tablist', 'aria-label': label, 'aria-orientation': orientation, className: 'mf-tabs-list' }, items.map((item, index) => h('button', {
      key: item.value, ref: node => { buttons.current[index] = node; }, type: 'button', role: 'tab', className: 'mf-tabs-trigger',
      id: `${id}-tab-${index}`, 'aria-controls': `${id}-panel-${index}`, 'aria-selected': effective === item.value,
      tabIndex: effective === item.value ? 0 : -1, disabled: item.disabled, onClick: () => setSelected(item.value), onKeyDown: event => onKeyDown(event, index),
    }, item.label))),
    items.map((item, index) => h('div', { key: item.value, role: 'tabpanel', className: 'mf-tabs-content', id: `${id}-panel-${index}`, 'aria-labelledby': `${id}-tab-${index}`, hidden: effective !== item.value, tabIndex: 0 }, item.content)));
});

/** Native top-layer modal: focus trapping, inert background and Escape support. */
export const Dialog = forwardRef(function Dialog({ open, defaultOpen = false, onOpenChange, title, description, trigger, closeLabel = 'Close dialog', children, className, onCancel, onClose, ...props }, forwardedRef) {
  const id = useId();
  const dialog = useRef(null);
  const returnFocus = useRef(null);
  const programmaticCloses = useRef([]);
  const [isOpen, setOpen] = useControllable(open, defaultOpen, onOpenChange);
  const currentOpen = useRef(isOpen);
  currentOpen.current = isOpen;
  const setRef = useCallback(node => {
    dialog.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }, [forwardedRef]);
  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (isOpen && !node.open) {
      returnFocus.current = node.ownerDocument.activeElement;
      node.showModal();
    } else if (!isOpen && node.open) {
      programmaticCloses.current.push(false);
      node.close();
      returnFocus.current?.focus?.();
    }
  }, [isOpen]);
  useEffect(() => {
    const node = dialog.current;
    return () => {
      if (node?.open) {
        programmaticCloses.current.push(true);
        node.close();
        returnFocus.current?.focus?.();
      }
    };
  }, []);
  const triggerElement = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    'aria-haspopup': 'dialog', 'aria-expanded': Boolean(isOpen),
    onClick: event => { trigger.props.onClick?.(event); if (!event.defaultPrevented) setOpen(true); },
  }) : null;
  return h(React.Fragment, null, triggerElement,
    h('dialog', { ...props, ref: setRef, className: cx('mf-dialog', className), 'aria-labelledby': `${id}-title`, 'aria-describedby': description ? `${id}-description` : undefined,
      onKeyDown: event => {
        props.onKeyDown?.(event);
        if (event.defaultPrevented || event.key !== 'Tab') return;
        const node = dialog.current;
        if (!node) return;
        const focusables = Array.from(node.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled && (el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!event.shiftKey && (node.ownerDocument.activeElement === last || !node.contains(node.ownerDocument.activeElement))) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && (node.ownerDocument.activeElement === first || node.ownerDocument.activeElement === node)) {
          event.preventDefault();
          last.focus();
        }
      },
      onCancel: event => { onCancel?.(event); if (!event.defaultPrevented) { event.preventDefault(); setOpen(false); } },
      onClose: event => {
        const cleanupClose = programmaticCloses.current.shift();
        if (cleanupClose !== true) onClose?.(event);
        if (cleanupClose === undefined && currentOpen.current) setOpen(false);
      },
    },
    h('div', { className: 'mf-dialog-header' }, h('h2', { className: 'mf-dialog-title', id: `${id}-title` }, title), h(Button, { variant: 'ghost', className: 'mf-dialog-close', 'aria-label': closeLabel, onClick: () => setOpen(false) }, '×')),
    description && h('p', { className: 'mf-dialog-description', id: `${id}-description` }, description),
    h('div', { className: 'mf-dialog-content' }, children)));
});

/** Semantic disclosure group; native summary keyboard behavior is preserved. */
export const Accordion = forwardRef(function Accordion({ items, multiple = false, defaultValue = [], className, ...props }, ref) {
  const [expanded, setExpanded] = useState(() => new Set(multiple ? defaultValue : defaultValue.slice(0, 1)));
  return h('div', { ...props, ref, className: cx('mf-accordion', className) }, items.map(item => h('details', {
    key: item.value, className: 'mf-accordion-item', open: expanded.has(item.value),
    onToggle: event => {
      const isExpanded = event.currentTarget.open;
      setExpanded(previous => {
        if (previous.has(item.value) === isExpanded) return previous;
        const next = isExpanded && !multiple ? new Set() : new Set(previous);
        if (isExpanded) next.add(item.value); else next.delete(item.value);
        return next;
      });
    },
  }, h('summary', { className: 'mf-accordion-trigger', 'aria-disabled': item.disabled || undefined, tabIndex: item.disabled ? -1 : undefined, onClick: event => { if (item.disabled) event.preventDefault(); } }, item.title), h('div', { className: 'mf-accordion-content' }, item.content))));
});

/* ============================================================================
 * Layout, Shell & Theme Controls for Next.js Consumers
 * ========================================================================== */

export const AppShell = element('div', 'mf-shell');
export const Sidebar = element('aside', 'mf-sidebar');
export const Main = element('main', 'mf-main');
export const Header = element('header', 'mf-header');
export const Nav = element('nav', 'mf-nav');
export const Hero = element('section', 'mf-hero');

export const Grid = forwardRef(function Grid({ columns, className, style, ...props }, ref) {
  const gridStyle = columns ? { ...style, gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` } : style;
  return h('div', { ...props, ref, className: cx('mf-grid', className), style: gridStyle });
});

export const NavItem = forwardRef(function NavItem({ active = false, asChild = false, href, className, children, ...props }, ref) {
  const shared = {
    ...props,
    ref,
    href,
    className: cx('mf-nav-item', className),
    'aria-current': active ? 'page' : props['aria-current'],
    'data-active': active ? 'true' : undefined,
  };
  if (asChild) return h(Slot, shared, children);
  if (href) return h('a', shared, children);
  return h('button', { type: 'button', ...shared }, children);
});

export const StatCard = forwardRef(function StatCard({ label, value, detail, icon, className, children, ...props }, ref) {
  return h('section', { ...props, ref, className: cx('mf-card mf-stat', className) },
    (label || icon) && h('div', { className: 'mf-stat-header' }, label && h('span', { className: 'mf-stat-label' }, label), icon),
    value !== undefined && h('strong', { className: 'mf-stat-value' }, value),
    detail && h('span', { className: 'mf-stat-detail' }, detail),
    children
  );
});

export const SkinSelector = forwardRef(function SkinSelector({ value, onValueChange, variant = 'select', label = 'Skin', className, ...props }, ref) {
  const theme = useTheme();
  const activeSkin = value ?? theme.skin;
  const setSkin = onValueChange ?? theme.setSkin;

  if (variant === 'list') {
    return h('div', { ...props, ref, role: 'group', 'aria-label': label, className: cx('mf-skin-selector-list', className) },
      skins.map(skin => h('button', {
        key: skin.id,
        type: 'button',
        className: 'mf-nav-item',
        'aria-pressed': activeSkin === skin.id,
        'data-active': activeSkin === skin.id ? 'true' : undefined,
        onClick: () => setSkin(skin.id),
      }, skin.name))
    );
  }

  return h(Select, {
    'aria-label': label,
    ...props,
    ref,
    className,
    value: activeSkin,
    onChange: event => {
      props.onChange?.(event);
      setSkin(event.currentTarget.value);
    },
  }, skins.map(skin => h('option', { key: skin.id, value: skin.id }, skin.name)));
});

export const ModeSelector = forwardRef(function ModeSelector({ value, onValueChange, variant = 'select', label = 'Appearance', className, ...props }, ref) {
  const theme = useTheme();
  const activeMode = value ?? theme.mode;
  const setMode = onValueChange ?? theme.setMode;
  const modes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  if (variant === 'segmented') {
    return h('div', { ...props, ref, role: 'group', 'aria-label': label, className: cx('mf-mode-segmented', className) },
      modes.map(m => h('button', {
        key: m.value,
        type: 'button',
        className: 'mf-tabs-trigger',
        'aria-pressed': activeMode === m.value,
        'aria-selected': activeMode === m.value,
        onClick: () => setMode(m.value),
      }, m.label))
    );
  }

  return h(Select, {
    'aria-label': label,
    ...props,
    ref,
    className,
    value: activeMode,
    onChange: event => {
      props.onChange?.(event);
      setMode(event.currentTarget.value);
    },
  }, modes.map(m => h('option', { key: m.value, value: m.value }, m.label)));
});

/* ============================================================================
 * Form Field & RadioGroup
 * ========================================================================== */

export const FieldDescription = element('p', 'mf-field-description');
export const FieldError = forwardRef(function FieldError({ className, role = 'alert', ...props }, ref) {
  return h('p', { ...props, role, ref, className: cx('mf-field-error', className) });
});

export const Field = forwardRef(function Field({ label, description, error, required = false, htmlFor, className, children, ...props }, ref) {
  const generatedId = useId();
  const controlId = htmlFor ?? `${generatedId}-control`;
  const descId = description ? `${generatedId}-desc` : undefined;
  const errId = error ? `${generatedId}-err` : undefined;
  const describedBy = [descId, errId].filter(Boolean).join(' ') || undefined;

  const enhancedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, {
      id: child.props.id ?? controlId,
      'aria-describedby': [child.props['aria-describedby'], describedBy].filter(Boolean).join(' ') || undefined,
      'aria-invalid': error ? true : child.props['aria-invalid'],
      required: required || child.props.required,
    });
  });

  return h('div', { ...props, ref, className: cx('mf-field', className) },
    label && h(Label, { htmlFor: controlId }, label, required && h('span', { 'aria-hidden': true, className: 'mf-field-required' }, ' *')),
    enhancedChildren,
    description && h(FieldDescription, { id: descId }, description),
    error && h(FieldError, { id: errId }, error)
  );
});

export const RadioGroup = forwardRef(function RadioGroup({ items = [], name, value, defaultValue, onValueChange, label, orientation = 'vertical', className, ...props }, ref) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const [selected, setSelected] = useControllable(value, defaultValue ?? items.find(i => !i.disabled)?.value, onValueChange);

  return h('div', {
    ...props,
    ref,
    role: 'radiogroup',
    'aria-label': label,
    'data-orientation': orientation,
    className: cx('mf-radio-group', className),
  }, items.map(item => {
    const id = `${groupName}-${item.value}`;
    const isChecked = selected === item.value;
    return h('label', { key: item.value, htmlFor: id, className: 'mf-check-label mf-radio-option', 'data-disabled': item.disabled || undefined },
      h('input', {
        id,
        type: 'radio',
        name: groupName,
        value: item.value,
        checked: isChecked,
        disabled: item.disabled,
        className: 'mf-radio',
        onChange: () => setSelected(item.value),
      }),
      h('span', { className: 'mf-radio-copy' },
        h('span', { className: 'mf-radio-label' }, item.label),
        item.description && h('small', { className: 'mf-field-description' }, item.description)
      )
    );
  }));
});

/* ============================================================================
 * Navigation, Overlays, Feedback & Data Display
 * ========================================================================== */

export const Breadcrumb = forwardRef(function Breadcrumb({ label = 'Breadcrumb', className, children, ...props }, ref) {
  return h('nav', { ...props, ref, 'aria-label': label, className: cx('mf-breadcrumb', className) },
    h('ol', { className: 'mf-breadcrumb-list' }, children)
  );
});

export const BreadcrumbItem = element('li', 'mf-breadcrumb-item');

export const BreadcrumbLink = forwardRef(function BreadcrumbLink({ current = false, asChild = false, href, className, children, ...props }, ref) {
  const shared = {
    ...props,
    ref,
    href: current ? undefined : href,
    'aria-current': current ? 'page' : undefined,
    className: cx('mf-breadcrumb-link', className),
  };
  if (asChild) return h(Slot, shared, children);
  if (current || !href) return h('span', shared, children);
  return h('a', shared, children);
});

export const Pagination = forwardRef(function Pagination({ page = 1, totalPages = 1, onPageChange, label = 'Pagination', className, ...props }, ref) {
  const total = Math.max(1, Number(totalPages) || 1);
  const current = Math.min(total, Math.max(1, Number(page) || 1));
  const pages = Array.from({ length: total }, (_, idx) => idx + 1);

  return h('nav', { ...props, ref, 'aria-label': label, className: cx('mf-pagination', className) },
    h(Button, {
      variant: 'secondary',
      size: 'sm',
      disabled: current <= 1,
      onClick: () => onPageChange?.(current - 1),
    }, 'Previous'),
    h('div', { className: 'mf-pagination-pages' },
      pages.map(num => h(Button, {
        key: num,
        variant: num === current ? 'primary' : 'ghost',
        size: 'sm',
        'aria-current': num === current ? 'page' : undefined,
        onClick: () => onPageChange?.(num),
      }, String(num)))
    ),
    h(Button, {
      variant: 'secondary',
      size: 'sm',
      disabled: current >= total,
      onClick: () => onPageChange?.(current + 1),
    }, 'Next')
  );
});

export const Drawer = forwardRef(function Drawer({ side = 'right', className, ...props }, ref) {
  return h(Dialog, {
    ...props,
    ref,
    'data-side': side,
    className: cx('mf-drawer', className),
  });
});

export const Popover = forwardRef(function Popover({ trigger, title, open, defaultOpen = false, onOpenChange, align = 'start', className, children, ...props }, ref) {
  const id = useId();
  const wrapperRef = useRef(null);
  const [isOpen, setOpen] = useControllable(open, defaultOpen, onOpenChange);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, setOpen]);

  const triggerElement = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    'aria-expanded': Boolean(isOpen),
    'aria-controls': `${id}-popover`,
    onClick: event => {
      trigger.props.onClick?.(event);
      if (!event.defaultPrevented) setOpen(!isOpen);
    },
  }) : null;

  return h('div', { ref: mergeRefs(wrapperRef, ref), className: cx('mf-popover-root', className) },
    triggerElement,
    isOpen && h('div', {
      ...props,
      id: `${id}-popover`,
      role: 'dialog',
      'aria-label': typeof title === 'string' ? title : undefined,
      'data-align': align,
      className: 'mf-popover-content',
    }, title && h('strong', { className: 'mf-popover-title' }, title), children)
  );
});

export const DropdownMenu = forwardRef(function DropdownMenu({ trigger, items = [], label = 'Menu', align = 'start', className, ...props }, ref) {
  const id = useId();
  const wrapperRef = useRef(null);
  const itemRefs = useRef([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  function onMenuKeyDown(event, index) {
    const enabled = items.map((it, i) => it.disabled ? -1 : i).filter(i => i >= 0);
    if (!enabled.length) return;
    const pos = enabled.indexOf(index);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      itemRefs.current[enabled[(pos + 1) % enabled.length]]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      itemRefs.current[enabled[(pos - 1 + enabled.length) % enabled.length]]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      itemRefs.current[enabled[0]]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      itemRefs.current[enabled.at(-1)]?.focus();
    }
  }

  const triggerElement = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen,
    'aria-controls': `${id}-menu`,
    onClick: event => {
      trigger.props.onClick?.(event);
      if (!event.defaultPrevented) setOpen(prev => !prev);
    },
  }) : null;

  return h('div', { ref: mergeRefs(wrapperRef, ref), className: cx('mf-popover-root', className) },
    triggerElement,
    isOpen && h('div', {
      ...props,
      id: `${id}-menu`,
      role: 'menu',
      'aria-label': label,
      'data-align': align,
      className: 'mf-popover-content mf-dropdown-menu',
    }, items.map((item, index) => h('button', {
      key: item.value ?? index,
      ref: node => { itemRefs.current[index] = node; },
      type: 'button',
      role: 'menuitem',
      disabled: item.disabled,
      'data-variant': item.variant,
      className: 'mf-dropdown-item',
      onKeyDown: event => onMenuKeyDown(event, index),
      onClick: () => {
        if (item.disabled) return;
        item.onSelect?.(item.value);
        setOpen(false);
      },
    }, item.label)))
  );
});

export const Tooltip = forwardRef(function Tooltip({ content, className, children, ...props }, ref) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const trigger = React.isValidElement(children) ? React.cloneElement(children, {
    'aria-describedby': visible ? id : children.props['aria-describedby'],
    onMouseEnter: e => { children.props.onMouseEnter?.(e); setVisible(true); },
    onMouseLeave: e => { children.props.onMouseLeave?.(e); setVisible(false); },
    onFocus: e => { children.props.onFocus?.(e); setVisible(true); },
    onBlur: e => { children.props.onBlur?.(e); setVisible(false); },
    onKeyDown: e => {
      children.props.onKeyDown?.(e);
      if (e.key === 'Escape') setVisible(false);
    },
  }) : children;

  return h('span', { ...props, ref, className: cx('mf-tooltip-root', className) },
    trigger,
    visible && h('span', { id, role: 'tooltip', className: 'mf-tooltip-bubble' }, content)
  );
});

export const EmptyState = forwardRef(function EmptyState({ icon, title, description, action, className, children, ...props }, ref) {
  return h('div', { ...props, ref, className: cx('mf-empty-state', className) },
    icon && h('div', { className: 'mf-empty-icon', 'aria-hidden': true }, icon),
    title && h('strong', { className: 'mf-empty-title' }, title),
    description && h('p', { className: 'mf-empty-description' }, description),
    action && h('div', { className: 'mf-empty-action' }, action),
    children
  );
});

export const Kbd = element('kbd', 'mf-kbd');

export const CodeBlock = forwardRef(function CodeBlock({ code, language, className, children, ...props }, ref) {
  return h('pre', { ...props, ref, 'data-language': language, className: cx('mf-code-block', className) },
    h('code', null, code ?? children)
  );
});

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(item => item.id !== id));
  }, []);
  const toast = useCallback(({ title, description, variant = 'secondary', duration = 4500 }) => {
    const id = Math.random().toString(36).slice(2, 10);
    setToasts(prev => [...prev, { id, title, description, variant }]);
    if (duration > 0 && typeof window !== 'undefined') {
      window.setTimeout(() => dismiss(id), duration);
    }
    return id;
  }, [dismiss]);

  const value = useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss]);

  return h(ToastContext.Provider, { value },
    children,
    h('div', { className: 'mf-toast-viewport', role: 'status', 'aria-live': 'polite', 'aria-atomic': 'true' },
      toasts.map(item => h('div', { key: item.id, className: 'mf-toast', 'data-variant': item.variant },
        h('div', { className: 'mf-toast-body' },
          item.title && h('strong', { className: 'mf-toast-title' }, item.title),
          item.description && h('div', { className: 'mf-toast-description' }, item.description)
        ),
        h('button', { type: 'button', className: 'mf-toast-close', 'aria-label': 'Dismiss notification', onClick: () => dismiss(item.id) }, '×')
      ))
    )
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a Moonframe ToastProvider.');
  return ctx;
}

/**
 * Interactive DataTable component for Next.js data workspaces.
 * Supports searching, column sorting, pagination, and empty state out of the box.
 */
export const DataTable = forwardRef(function DataTable({
  columns = [],
  data = [],
  rowKey = 'id',
  caption,
  searchable = false,
  searchPlaceholder = 'Search records…',
  emptyTitle = 'No matching records',
  emptyDescription = 'Try adjusting your search or filter criteria.',
  pageSize = 0,
  className,
  ...props
}, ref) {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = !q
      ? [...data]
      : data.filter(row => columns.some(col => {
          const val = col.accessor ? col.accessor(row) : row?.[col.key];
          return val != null && String(val).toLowerCase().includes(q);
        }));

    if (sortBy) {
      const col = columns.find(c => c.key === sortBy);
      rows.sort((a, b) => {
        const av = col?.accessor ? col.accessor(a) : a?.[sortBy];
        const bv = col?.accessor ? col.accessor(b) : b?.[sortBy];
        const cmp = typeof av === 'number' && typeof bv === 'number'
          ? av - bv
          : String(av ?? '').localeCompare(String(bv ?? ''));
        return sortDirection === 'asc' ? cmp : -cmp;
      });
    }
    return rows;
  }, [data, columns, query, sortBy, sortDirection]);

  const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;
  const effectivePage = Math.min(page, totalPages);
  const visibleRows = pageSize > 0
    ? filtered.slice((effectivePage - 1) * pageSize, effectivePage * pageSize)
    : filtered;

  function toggleSort(key) {
    if (sortBy === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortDirection('asc');
    }
  }

  return h('div', { ...props, ref, className: cx('mf-data-table', className) },
    searchable && h('div', { className: 'mf-data-table-toolbar' },
      h(Input, {
        type: 'search',
        'aria-label': searchPlaceholder,
        placeholder: searchPlaceholder,
        value: query,
        onChange: e => { setQuery(e.currentTarget.value); setPage(1); },
      })
    ),
    h('div', { className: 'mf-table-wrapper' },
      h(Table, null,
        caption && h(TableCaption, null, caption),
        h(TableHeader, null,
          h(TableRow, null,
            columns.map(col => h(TableHead, {
              key: col.key,
              'aria-sort': sortBy === col.key ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined,
            }, col.sortable
              ? h('button', {
                  type: 'button',
                  className: 'mf-table-sort',
                  onClick: () => toggleSort(col.key),
                }, col.header, sortBy === col.key ? (sortDirection === 'asc' ? ' ↑' : ' ↓') : '')
              : col.header))
          )
        ),
        h(TableBody, null,
          visibleRows.length > 0
            ? visibleRows.map((row, index) => {
                const key = typeof rowKey === 'function' ? rowKey(row, index) : (row?.[rowKey] ?? index);
                return h(TableRow, { key },
                  columns.map(col => h(TableCell, { key: col.key },
                    col.render ? col.render(row, index) : String((col.accessor ? col.accessor(row) : row?.[col.key]) ?? '')
                  ))
                );
              })
            : h(TableRow, null,
                h(TableCell, { colSpan: Math.max(1, columns.length) },
                  h(EmptyState, { title: emptyTitle, description: emptyDescription })
                )
              )
        )
      )
    ),
    pageSize > 0 && totalPages > 1 && h('div', { className: 'mf-data-table-footer' },
      h(Pagination, { page: effectivePage, totalPages, onPageChange: setPage })
    )
  );
});
