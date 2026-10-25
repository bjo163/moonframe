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

/* ============================================================================
 * Extended Inputs, Charts, Navigation & Level C Reusable Composite Blocks
 * ========================================================================== */

export const OTPInput = forwardRef(function OTPInput({
  length = 6,
  value,
  defaultValue = '',
  onValueChange,
  onComplete,
  disabled = false,
  label = 'Verification code',
  className,
  ...props
}, ref) {
  const count = Math.max(4, Math.min(8, Number(length) || 6));
  const [code, setCode] = useControllable(value, defaultValue, onValueChange);
  const inputsRef = useRef([]);
  const digits = Array.from({ length: count }, (_, idx) => (code || '')[idx] || '');

  function updateAt(index, char) {
    const clean = char.replace(/\D/g, '').slice(-1);
    const next = digits.slice();
    next[index] = clean;
    const joined = next.join('');
    setCode(joined);
    if (clean && index < count - 1) {
      inputsRef.current[index + 1]?.focus();
    }
    if (joined.length === count && !next.includes('')) {
      onComplete?.(joined);
    }
  }

  function onPaste(event) {
    const pasted = (event.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, count);
    if (!pasted) return;
    event.preventDefault();
    setCode(pasted);
    const focusIdx = Math.min(pasted.length, count - 1);
    inputsRef.current[focusIdx]?.focus();
    if (pasted.length === count) {
      onComplete?.(pasted);
    }
  }

  return h('div', {
    ...props,
    ref,
    role: 'group',
    'aria-label': label,
    className: cx('mf-otp-group', className),
  }, digits.map((digit, index) => h('input', {
    key: index,
    ref: node => { inputsRef.current[index] = node; },
    type: 'text',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    maxLength: 1,
    disabled,
    value: digit,
    autoComplete: index === 0 ? 'one-time-code' : 'off',
    'aria-label': `${label} digit ${index + 1} of ${count}`,
    className: 'mf-input mf-otp-slot',
    onPaste,
    onChange: e => updateAt(index, e.currentTarget.value),
    onKeyDown: e => {
      if (e.key === 'Backspace' && !digit && index > 0) {
        inputsRef.current[index - 1]?.focus();
      } else if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        inputsRef.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < count - 1) {
        e.preventDefault();
        inputsRef.current[index + 1]?.focus();
      }
    },
  })));
});

export const PasswordField = forwardRef(function PasswordField({
  defaultVisible = false,
  showStrength = false,
  toggleLabel,
  value,
  defaultValue,
  onChange,
  className,
  ...props
}, ref) {
  const [visible, setVisible] = useState(defaultVisible);
  const [internal, setInternal] = useState(defaultValue ?? '');
  const current = value !== undefined ? String(value) : String(internal);

  const score = useMemo(() => {
    if (!current) return 0;
    let pts = 0;
    if (current.length >= 8) pts += 1;
    if (/[A-Z]/.test(current) && /[a-z]/.test(current)) pts += 1;
    if (/\d/.test(current)) pts += 1;
    if (/[^A-Za-z0-9]/.test(current)) pts += 1;
    return pts;
  }, [current]);

  const strengthLabels = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'];

  return h('div', { className: cx('mf-password-root', className) },
    h('div', { className: 'mf-password-row' },
      h(Input, {
        ...props,
        ref,
        type: visible ? 'text' : 'password',
        value: value !== undefined ? value : internal,
        onChange: e => {
          if (value === undefined) setInternal(e.currentTarget.value);
          onChange?.(e);
        },
      }),
      h(Button, {
        type: 'button',
        variant: 'secondary',
        size: 'sm',
        className: 'mf-password-toggle',
        'aria-label': toggleLabel ?? (visible ? 'Hide password' : 'Show password'),
        onClick: () => setVisible(v => !v),
      }, visible ? 'Hide' : 'Show')
    ),
    showStrength && h('div', { className: 'mf-password-strength', 'aria-live': 'polite' },
      h('div', { className: 'mf-password-bars' },
        [1, 2, 3, 4].map(level => h('span', {
          key: level,
          className: 'mf-password-bar',
          'data-active': score >= level ? 'true' : undefined,
        }))
      ),
      h('span', { className: 'mf-field-description' }, strengthLabels[score])
    )
  );
});

export const SearchInput = forwardRef(function SearchInput({
  value,
  defaultValue = '',
  onValueChange,
  onClear,
  shortcut,
  placeholder = 'Search…',
  className,
  onChange,
  ...props
}, ref) {
  const [query, setQuery] = useControllable(value, defaultValue, onValueChange);

  return h('div', { className: cx('mf-search-input-wrap', className) },
    h('span', { className: 'mf-search-icon', 'aria-hidden': true }, '⌕'),
    h(Input, {
      ...props,
      ref,
      type: 'search',
      placeholder,
      value: query,
      className: 'mf-search-input',
      onChange: e => {
        setQuery(e.currentTarget.value);
        onChange?.(e);
      },
      onKeyDown: e => {
        props.onKeyDown?.(e);
        if (e.key === 'Escape' && query) {
          setQuery('');
          onClear?.();
        }
      },
    }),
    query
      ? h('button', {
          type: 'button',
          className: 'mf-search-clear',
          'aria-label': 'Clear search',
          onClick: () => {
            setQuery('');
            onClear?.();
          },
        }, '×')
      : shortcut && h(Kbd, { className: 'mf-search-shortcut' }, shortcut)
  );
});

export const Slider = forwardRef(function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 50,
  onValueChange,
  label,
  showValue = false,
  formatValue,
  className,
  onChange,
  ...props
}, ref) {
  const [current, setCurrent] = useControllable(value, defaultValue, onValueChange);
  const display = formatValue ? formatValue(Number(current)) : `${current}`;

  return h('div', { className: cx('mf-slider-wrap', className) },
    (label || showValue) && h('div', { className: 'mf-slider-header' },
      label && h('span', { className: 'mf-label' }, label),
      showValue && h('output', { className: 'mf-slider-output' }, display)
    ),
    h('input', {
      ...props,
      ref,
      type: 'range',
      min,
      max,
      step,
      value: current,
      'aria-label': props['aria-label'] ?? (typeof label === 'string' ? label : 'Slider'),
      className: 'mf-slider',
      onChange: e => {
        const next = Number(e.currentTarget.value);
        setCurrent(next);
        onChange?.(e);
      },
    })
  );
});

export const TagInput = forwardRef(function TagInput({
  value,
  defaultValue = [],
  onValueChange,
  placeholder = 'Add tag and press Enter…',
  disabled = false,
  label = 'Tags',
  className,
  ...props
}, ref) {
  const [tags, setTags] = useControllable(value, defaultValue, onValueChange);
  const [draft, setDraft] = useState('');

  function addTag(raw) {
    const trimmed = String(raw || '').trim();
    if (!trimmed) return;
    if (!tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setDraft('');
  }

  function removeTag(target) {
    setTags(tags.filter(t => t !== target));
  }

  return h('div', {
    ...props,
    ref,
    role: 'group',
    'aria-label': label,
    className: cx('mf-tag-input', className),
  },
    tags.map(tag => h(Badge, { key: tag, variant: 'secondary', className: 'mf-tag-chip' },
      h('span', null, tag),
      !disabled && h('button', {
        type: 'button',
        className: 'mf-tag-remove',
        'aria-label': `Remove ${tag}`,
        onClick: () => removeTag(tag),
      }, '×')
    )),
    h('input', {
      type: 'text',
      disabled,
      value: draft,
      placeholder,
      'aria-label': placeholder,
      className: 'mf-tag-field',
      onChange: e => setDraft(e.currentTarget.value),
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          addTag(draft);
        } else if (e.key === 'Backspace' && !draft && tags.length > 0) {
          removeTag(tags[tags.length - 1]);
        }
      },
      onBlur: () => {
        if (draft.trim()) addTag(draft);
      },
    })
  );
});

export const SegmentedControl = forwardRef(function SegmentedControl({
  items = [],
  value,
  defaultValue,
  onValueChange,
  label = 'Options',
  size = 'md',
  className,
  ...props
}, ref) {
  const [selected, setSelected] = useControllable(
    value,
    defaultValue ?? items.find(i => !i.disabled)?.value,
    onValueChange,
  );

  return h('div', {
    ...props,
    ref,
    role: 'group',
    'aria-label': label,
    'data-size': size,
    className: cx('mf-segmented', className),
  }, items.map(item => {
    const active = selected === item.value;
    return h('button', {
      key: item.value,
      type: 'button',
      disabled: item.disabled,
      'aria-pressed': active,
      'data-active': active ? 'true' : undefined,
      className: 'mf-segmented-item',
      onClick: () => setSelected(item.value),
    }, item.label);
  }));
});

export const FileDropzone = forwardRef(function FileDropzone({
  accept,
  multiple = false,
  disabled = false,
  title = 'Drop files here or click to browse',
  description = 'Supports standard documents and media files.',
  onFilesSelected,
  className,
  ...props
}, ref) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);

  function handleFiles(fileList) {
    if (!fileList || disabled) return;
    const files = Array.from(fileList);
    setSelectedNames(files.map(f => f.name));
    onFilesSelected?.(files);
  }

  return h('div', {
    ...props,
    ref,
    role: 'button',
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled || undefined,
    'data-dragging': dragging ? 'true' : undefined,
    className: cx('mf-dropzone', className),
    onClick: () => { if (!disabled) inputRef.current?.click(); },
    onKeyDown: e => {
      if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        inputRef.current?.click();
      }
    },
    onDragOver: e => {
      e.preventDefault();
      if (!disabled) setDragging(true);
    },
    onDragLeave: () => setDragging(false),
    onDrop: e => {
      e.preventDefault();
      setDragging(false);
      handleFiles(e.dataTransfer?.files);
    },
  },
    h('input', {
      ref: inputRef,
      type: 'file',
      accept,
      multiple,
      disabled,
      hidden: true,
      onChange: e => handleFiles(e.currentTarget.files),
    }),
    h('strong', { className: 'mf-dropzone-title' }, title),
    description && h('span', { className: 'mf-dropzone-description' }, description),
    selectedNames.length > 0 && h('div', { className: 'mf-dropzone-files' },
      selectedNames.map(name => h(Badge, { key: name, variant: 'primary' }, name))
    )
  );
});

export const BarChart = forwardRef(function BarChart({
  data = [],
  height = 180,
  label = 'Bar chart',
  formatValue,
  className,
  ...props
}, ref) {
  const maxVal = Math.max(1, ...data.map(d => Number(d.value) || 0));
  const width = Math.max(240, data.length * 56);
  const chartHeight = Math.max(120, Number(height) || 180);
  const plotHeight = chartHeight - 36;

  return h('div', { ...props, ref, className: cx('mf-chart-wrap', className) },
    h('svg', {
      role: 'img',
      'aria-label': label,
      viewBox: `0 0 ${width} ${chartHeight}`,
      className: 'mf-bar-chart',
    },
      h('title', null, label),
      data.map((item, index) => {
        const val = Math.max(0, Number(item.value) || 0);
        const barHeight = Math.max(4, Math.round((val / maxVal) * (plotHeight - 20)));
        const slotWidth = width / Math.max(1, data.length);
        const barWidth = Math.max(16, Math.min(40, slotWidth * 0.58));
        const x = index * slotWidth + (slotWidth - barWidth) / 2;
        const y = plotHeight - barHeight;
        return h('g', { key: item.label ?? index, className: 'mf-bar-group' },
          h('rect', {
            x,
            y,
            width: barWidth,
            height: barHeight,
            rx: 3,
            className: 'mf-bar-rect',
            'data-tone': item.tone,
          }),
          h('text', {
            x: x + barWidth / 2,
            y: Math.max(12, y - 6),
            textAnchor: 'middle',
            className: 'mf-bar-value',
          }, formatValue ? formatValue(val) : String(val)),
          h('text', {
            x: x + barWidth / 2,
            y: chartHeight - 10,
            textAnchor: 'middle',
            className: 'mf-bar-label',
          }, item.label)
        );
      })
    )
  );
});

export const Sparkline = forwardRef(function Sparkline({
  data = [],
  width = 120,
  height = 36,
  label = 'Trend sparkline',
  variant = 'primary',
  className,
  ...props
}, ref) {
  const points = data.length >= 2 ? data.map(Number) : [0, 0];
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const pad = 4;
  const w = Math.max(48, Number(width) || 120);
  const hgt = Math.max(20, Number(height) || 36);

  const coords = points.map((val, idx) => {
    const x = pad + (idx / (points.length - 1)) * (w - pad * 2);
    const y = hgt - pad - ((val - min) / span) * (hgt - pad * 2);
    return [Number(x.toFixed(1)), Number(y.toFixed(1))];
  });
  const polyline = coords.map(([x, y]) => `${x},${y}`).join(' ');
  const area = `${coords[0][0]},${hgt - pad} ${polyline} ${coords[coords.length - 1][0]},${hgt - pad}`;

  return h('svg', {
    ...props,
    ref,
    role: 'img',
    'aria-label': label,
    viewBox: `0 0 ${w} ${hgt}`,
    width: w,
    height: hgt,
    'data-variant': variant,
    className: cx('mf-sparkline', className),
  },
    h('title', null, label),
    h('polygon', { points: area, className: 'mf-sparkline-area' }),
    h('polyline', { points: polyline, fill: 'none', className: 'mf-sparkline-line' })
  );
});

export const Stepper = forwardRef(function Stepper({
  steps = [],
  currentStep = 0,
  orientation = 'horizontal',
  label = 'Progress steps',
  className,
  ...props
}, ref) {
  return h('ol', {
    ...props,
    ref,
    'aria-label': label,
    'data-orientation': orientation,
    className: cx('mf-stepper', className),
  }, steps.map((step, index) => {
    const status = step.status ?? (index < currentStep ? 'complete' : index === currentStep ? 'current' : 'upcoming');
    return h('li', {
      key: step.id ?? step.title ?? index,
      'aria-current': status === 'current' ? 'step' : undefined,
      'data-status': status,
      className: 'mf-stepper-item',
    },
      h('span', { className: 'mf-stepper-indicator', 'aria-hidden': true },
        status === 'complete' ? '✓' : String(index + 1)
      ),
      h('div', { className: 'mf-stepper-copy' },
        h('strong', { className: 'mf-stepper-title' }, step.title),
        step.description && h('span', { className: 'mf-stepper-description' }, step.description)
      )
    );
  }));
});

export const Timeline = forwardRef(function Timeline({
  items = [],
  className,
  ...props
}, ref) {
  return h('ol', { ...props, ref, className: cx('mf-timeline', className) },
    items.map((item, index) => h('li', {
      key: item.id ?? index,
      'data-tone': item.tone,
      className: 'mf-timeline-item',
    },
      h('span', { className: 'mf-timeline-marker', 'aria-hidden': true }, item.icon ?? '•'),
      h('div', { className: 'mf-timeline-body' },
        h('div', { className: 'mf-timeline-header' },
          h('strong', { className: 'mf-timeline-title' }, item.title),
          item.badge && h(Badge, { variant: item.tone ?? 'secondary' }, item.badge),
          item.time && h('time', { className: 'mf-timeline-time' }, item.time)
        ),
        item.description && h('p', { className: 'mf-timeline-description' }, item.description)
      )
    ))
  );
});

export const AvatarGroup = forwardRef(function AvatarGroup({
  items = [],
  max = 4,
  label = 'Team members',
  className,
  ...props
}, ref) {
  const limit = Math.max(1, Number(max) || 4);
  const visible = items.slice(0, limit);
  const remaining = Math.max(0, items.length - visible.length);

  return h('div', {
    ...props,
    ref,
    role: 'group',
    'aria-label': label,
    className: cx('mf-avatar-group', className),
  },
    visible.map((item, idx) => h(Avatar, {
      key: item.id ?? item.alt ?? idx,
      src: item.src,
      alt: item.alt,
      fallback: item.fallback,
      className: 'mf-avatar-group-item',
    })),
    remaining > 0 && h('span', {
      className: 'mf-avatar mf-avatar-group-item mf-avatar-overflow',
      'aria-label': `${remaining} more members`,
    }, `+${remaining}`)
  );
});

export const DescriptionTerm = element('dt', 'mf-dl-term');
export const DescriptionDetails = element('dd', 'mf-dl-details');

export const DescriptionList = forwardRef(function DescriptionList({
  items,
  columns = 2,
  className,
  children,
  ...props
}, ref) {
  return h('dl', {
    ...props,
    ref,
    'data-columns': columns,
    className: cx('mf-dl', className),
  },
    Array.isArray(items)
      ? items.map((item, idx) => h('div', { key: item.term ?? idx, className: 'mf-dl-row' },
          h(DescriptionTerm, null, item.term),
          h(DescriptionDetails, null, item.details)
        ))
      : children
  );
});

export const Callout = forwardRef(function Callout({
  title,
  variant = 'secondary',
  icon,
  action,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}, ref) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return h('section', {
    ...props,
    ref,
    role: 'region',
    'aria-label': typeof title === 'string' ? title : 'Notice',
    'data-variant': variant,
    className: cx('mf-callout', className),
  },
    icon && h('span', { className: 'mf-callout-icon', 'aria-hidden': true }, icon),
    h('div', { className: 'mf-callout-body' },
      title && h('strong', { className: 'mf-callout-title' }, title),
      children && h('div', { className: 'mf-callout-content' }, children)
    ),
    action && h('div', { className: 'mf-callout-action' }, action),
    dismissible && h('button', {
      type: 'button',
      className: 'mf-callout-dismiss',
      'aria-label': 'Dismiss notice',
      onClick: () => {
        setDismissed(true);
        onDismiss?.();
      },
    }, '×')
  );
});

export const Banner = Callout;

export const CommandPalette = forwardRef(function CommandPalette({
  open,
  defaultOpen = false,
  onOpenChange,
  items = [],
  placeholder = 'Type a command or search…',
  emptyText = 'No matching commands.',
  title = 'Command Palette',
  trigger,
  enableHotkey = false,
  className,
  ...props
}, ref) {
  const [isOpen, setOpen] = useControllable(open, defaultOpen, onOpenChange);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!enableHotkey) return;
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enableHotkey, isOpen, setOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(item => {
      const hay = [item.label, item.group, ...(item.keywords || [])].filter(Boolean).join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);

  const enabledItems = filtered.filter(i => !i.disabled);

  return h(Dialog, {
    ...props,
    ref,
    open: isOpen,
    onOpenChange: next => {
      setOpen(next);
      if (!next) setQuery('');
    },
    title,
    trigger,
    className: cx('mf-command-palette', className),
  },
    h('div', { className: 'mf-command-search' },
      h(SearchInput, {
        placeholder,
        value: query,
        onValueChange: val => {
          setQuery(val);
          setActiveIndex(0);
        },
        onKeyDown: e => {
          if (!enabledItems.length) return;
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(i => (i + 1) % enabledItems.length);
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(i => (i - 1 + enabledItems.length) % enabledItems.length);
          } else if (e.key === 'Enter') {
            const chosen = enabledItems[activeIndex];
            if (chosen) {
              e.preventDefault();
              chosen.onSelect?.(chosen);
              setOpen(false);
            }
          }
        },
      })
    ),
    h('div', { role: 'listbox', 'aria-label': title, className: 'mf-command-list' },
      filtered.length > 0
        ? filtered.map((item, idx) => {
            const isSelected = enabledItems[activeIndex]?.id === item.id;
            return h('button', {
              key: item.id ?? idx,
              type: 'button',
              role: 'option',
              disabled: item.disabled,
              'aria-selected': isSelected,
              'data-active': isSelected ? 'true' : undefined,
              className: 'mf-command-item',
              onClick: () => {
                if (item.disabled) return;
                item.onSelect?.(item);
                setOpen(false);
              },
            },
              h('div', { className: 'mf-command-item-copy' },
                item.group && h('small', { className: 'mf-command-group' }, item.group),
                h('span', { className: 'mf-command-label' }, item.label)
              ),
              item.shortcut && h(Kbd, null, item.shortcut)
            );
          })
        : h('p', { className: 'mf-command-empty' }, emptyText)
    )
  );
});

/* ============================================================================
 * Level C Reusable Composite Blocks (Exported from @moonframe/ui)
 * ========================================================================== */

export const PageHeader = forwardRef(function PageHeader({
  breadcrumbs,
  eyebrow,
  title,
  description,
  badge,
  actions,
  className,
  children,
  ...props
}, ref) {
  return h('header', { ...props, ref, className: cx('mf-page-header', className) },
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0 && h(Breadcrumb, null,
      breadcrumbs.map((bc, idx) => h(BreadcrumbItem, { key: bc.label ?? idx },
        h(BreadcrumbLink, { href: bc.href, current: bc.current ?? idx === breadcrumbs.length - 1 }, bc.label)
      ))
    ),
    !Array.isArray(breadcrumbs) && breadcrumbs,
    h('div', { className: 'mf-page-header-row' },
      h('div', { className: 'mf-page-header-copy' },
        eyebrow && h('span', { className: 'mf-page-header-eyebrow' }, eyebrow),
        h('div', { className: 'mf-page-header-title-row' },
          h('h1', { className: 'mf-page-header-title' }, title),
          badge && h(Badge, { variant: 'primary' }, badge)
        ),
        description && h('p', { className: 'mf-page-header-description' }, description)
      ),
      actions && h('div', { className: 'mf-page-header-actions' }, actions)
    ),
    children
  );
});

export const MetricGrid = forwardRef(function MetricGrid({
  items = [],
  columns,
  className,
  ...props
}, ref) {
  return h(Grid, { ...props, ref, columns, className: cx('mf-metric-grid', className) },
    items.map((item, idx) => h(StatCard, {
      key: item.id ?? item.label ?? idx,
      label: item.label,
      value: item.value,
      detail: item.detail,
      icon: item.delta ? h(Badge, { variant: item.deltaTone ?? 'primary' }, item.delta) : item.icon,
    },
      Array.isArray(item.trend) && item.trend.length >= 2 && h('div', { className: 'mf-metric-spark' },
        h(Sparkline, { data: item.trend, label: `${item.label} trend` })
      )
    ))
  );
});

export const AuthCard = forwardRef(function AuthCard({
  eyebrow,
  title,
  description,
  logo,
  error,
  status,
  socialActions,
  footer,
  className,
  children,
  ...props
}, ref) {
  return h(Card, { ...props, ref, className: cx('mf-auth-card', className) },
    h(CardHeader, { className: 'mf-auth-card-header' },
      logo && h('div', { className: 'mf-auth-logo' }, logo),
      eyebrow && h(Badge, { variant: 'secondary' }, eyebrow),
      h(CardTitle, null, title),
      description && h(CardDescription, null, description)
    ),
    h(CardContent, { className: 'mf-auth-card-body' },
      error && h(Alert, { variant: 'danger', title: 'Authentication error', role: 'alert' }, error),
      status && h(Alert, { variant: 'primary', title: 'Status' }, status),
      children,
      socialActions && h('div', { className: 'mf-auth-social' },
        h(Separator, null),
        h('div', { className: 'mf-auth-social-buttons' }, socialActions)
      )
    ),
    footer && h(CardFooter, { className: 'mf-auth-card-footer' }, footer)
  );
});

export const PricingCard = forwardRef(function PricingCard({
  name,
  price,
  period = '/month',
  description,
  badge,
  featured = false,
  features = [],
  ctaLabel = 'Select plan',
  onSelect,
  footer,
  className,
  ...props
}, ref) {
  return h(Card, {
    ...props,
    ref,
    'data-featured': featured ? 'true' : undefined,
    className: cx('mf-pricing-card', className),
  },
    h(CardHeader, null,
      h('div', { className: 'mf-pricing-header-top' },
        h(CardTitle, null, name),
        badge && h(Badge, { variant: featured ? 'primary' : 'secondary' }, badge)
      ),
      description && h(CardDescription, null, description),
      h('div', { className: 'mf-pricing-price' },
        h('strong', { className: 'mf-pricing-amount' }, price),
        period && h('span', { className: 'mf-pricing-period' }, period)
      )
    ),
    h(CardContent, null,
      h('ul', { className: 'mf-pricing-features' },
        features.map((feat, idx) => h('li', { key: idx, className: 'mf-pricing-feature' },
          h('span', { 'aria-hidden': true, className: 'mf-pricing-check' }, '✓'),
          h('span', null, feat)
        ))
      )
    ),
    h(CardFooter, { className: 'mf-pricing-footer' },
      h(Button, {
        variant: featured ? 'primary' : 'secondary',
        className: 'mf-pricing-cta',
        onClick: onSelect,
      }, ctaLabel),
      footer
    )
  );
});

export const SettingsSection = forwardRef(function SettingsSection({
  title,
  description,
  badge,
  footer,
  action,
  className,
  children,
  ...props
}, ref) {
  return h('section', { ...props, ref, className: cx('mf-settings-section', className) },
    h('div', { className: 'mf-settings-meta' },
      h('div', { className: 'mf-settings-title-row' },
        h('h2', { className: 'mf-settings-title' }, title),
        badge && h(Badge, { variant: 'secondary' }, badge)
      ),
      description && h('p', { className: 'mf-settings-description' }, description)
    ),
    h(Card, { className: 'mf-settings-card' },
      h(CardContent, { className: 'mf-settings-body' }, children),
      (footer || action) && h(CardFooter, { className: 'mf-settings-footer' },
        footer && h('span', { className: 'mf-field-description' }, footer),
        action && h('div', { className: 'mf-settings-action' }, action)
      )
    )
  );
});

export const ActivityFeed = forwardRef(function ActivityFeed({
  title = 'Recent activity',
  description,
  items = [],
  action,
  emptyTitle = 'No recent activity',
  emptyDescription = 'Events and audit entries will appear here.',
  className,
  ...props
}, ref) {
  return h(Card, { ...props, ref, className: cx('mf-activity-feed', className) },
    h(CardHeader, { className: 'mf-activity-header' },
      h('div', null,
        h(CardTitle, null, title),
        description && h(CardDescription, null, description)
      ),
      action
    ),
    h(CardContent, null,
      items.length > 0
        ? h(Timeline, { items })
        : h(EmptyState, { title: emptyTitle, description: emptyDescription })
    )
  );
});

/* M10 Original 15-Skin Vector Brand Marks & Decorative Artwork */

const SKIN_VECTOR_PATHS = {
  moonpunk: [
    { tag: 'polygon', attrs: { points: '6,4 26,2 28,22 18,28 4,24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' } },
    { tag: 'path', attrs: { d: 'M18 5L10 17H16L13 27L23 14H16L18 5Z', fill: 'currentColor' } },
  ],
  moonriot: [
    { tag: 'polygon', attrs: { points: '3,6 29,3 25,27 3,22', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2' } },
    { tag: 'polygon', attrs: { points: '8,11 24,8 20,21 8,19', fill: 'currentColor' } },
  ],
  moonzine: [
    { tag: 'rect', attrs: { x: '4', y: '5', width: '22', height: '22', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeDasharray: '4 2' } },
    { tag: 'path', attrs: { d: 'M8 11H22M8 16H19M8 21H15', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'square' } },
  ],
  moonhalftone: [
    { tag: 'rect', attrs: { x: '3', y: '3', width: '26', height: '26', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' } },
    { tag: 'circle', attrs: { cx: '10', cy: '10', r: '2.5', fill: 'currentColor' } },
    { tag: 'circle', attrs: { cx: '20', cy: '10', r: '1.8', fill: 'currentColor' } },
    { tag: 'circle', attrs: { cx: '10', cy: '20', r: '1.8', fill: 'currentColor' } },
    { tag: 'circle', attrs: { cx: '20', cy: '20', r: '3.2', fill: 'currentColor' } },
  ],
  moonglitch: [
    { tag: 'path', attrs: { d: 'M4 10V4H10M22 4H28V10M28 22V28H22M10 28H4V22', fill: 'none', stroke: 'currentColor', strokeWidth: '2' } },
    { tag: 'path', attrs: { d: 'M7 16H13L15 11L18 21L20 16H25', fill: 'none', stroke: 'currentColor', strokeWidth: '2' } },
  ],
  moonsmash: [
    { tag: 'polygon', attrs: { points: '16,2 20,11 30,9 23,17 29,26 19,23 15,30 12,21 3,24 9,15 3,7 13,10', fill: 'currentColor' } },
  ],
  moonink: [
    { tag: 'path', attrs: { d: 'M24 9C20 5 11 6 8 13C5 20 11 27 19 26C24 25 27 21 26 17', fill: 'none', stroke: 'currentColor', strokeWidth: '3.2', strokeLinecap: 'round' } },
    { tag: 'circle', attrs: { cx: '18', cy: '15', r: '2.5', fill: 'currentColor' } },
  ],
  mooncrash: [
    { tag: 'polygon', attrs: { points: '9,3 23,3 29,9 29,23 23,29 9,29 3,23 3,9', fill: 'none', stroke: 'currentColor', strokeWidth: '2.4' } },
    { tag: 'path', attrs: { d: 'M9 21L16 10L23 21H9Z', fill: 'currentColor' } },
  ],
  moonpanel: [
    { tag: 'rect', attrs: { x: '3', y: '3', width: '11', height: '11', fill: 'currentColor' } },
    { tag: 'rect', attrs: { x: '17', y: '3', width: '12', height: '11', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2' } },
    { tag: 'rect', attrs: { x: '3', y: '17', width: '26', height: '12', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2' } },
  ],
  moonscrawl: [
    { tag: 'path', attrs: { d: 'M6 24C4 14 11 5 21 7C28 9 28 21 20 24C13 26 9 19 13 13C16 9 22 11 20 16', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2', strokeLinecap: 'round' } },
  ],
  moonraw: [
    { tag: 'rect', attrs: { x: '3', y: '3', width: '26', height: '26', fill: 'none', stroke: 'currentColor', strokeWidth: '2.5' } },
    { tag: 'path', attrs: { d: 'M3 16H29M16 3V29', stroke: 'currentColor', strokeWidth: '2.5' } },
  ],
  moonchrome: [
    { tag: 'polygon', attrs: { points: '16,3 29,16 16,29 3,16', fill: 'none', stroke: 'currentColor', strokeWidth: '2' } },
    { tag: 'polygon', attrs: { points: '16,8 24,16 16,24 8,16', fill: 'currentColor' } },
  ],
  classic: [
    { tag: 'rect', attrs: { x: '4', y: '4', width: '24', height: '24', rx: '6', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2' } },
    { tag: 'circle', attrs: { cx: '16', cy: '16', r: '5', fill: 'currentColor' } },
  ],
  moonquest: [
    { tag: 'path', attrs: { d: 'M16 3L27 7V16C27 23 22 27 16 29C10 27 5 23 5 16V7L16 3Z', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2' } },
    { tag: 'polygon', attrs: { points: '16,8 18,14 24,16 18,18 16,24 14,18 8,16 14,14', fill: 'currentColor' } },
  ],
  moonledger: [
    { tag: 'rect', attrs: { x: '4', y: '4', width: '24', height: '24', rx: '2', fill: 'none', stroke: 'currentColor', strokeWidth: '2' } },
    { tag: 'path', attrs: { d: 'M4 11H28M12 11V28M20 11V28M4 19H28', stroke: 'currentColor', strokeWidth: '1.8' } },
  ],
};

export const SkinBrandMark = forwardRef(function SkinBrandMark({
  skin: skinProp,
  size = 28,
  decorative = true,
  label,
  className,
  ...props
}, ref) {
  let themeSkin = 'classic';
  try {
    const theme = useTheme();
    if (theme?.skin) themeSkin = theme.skin;
  } catch {
    themeSkin = 'classic';
  }
  const activeSkin = skinProp && SKIN_VECTOR_PATHS[skinProp] ? skinProp : themeSkin;
  const shapes = SKIN_VECTOR_PATHS[activeSkin] || SKIN_VECTOR_PATHS.classic;
  const ariaLabel = label || `${activeSkin} brand mark`;

  return h('svg', {
    ...props,
    ref,
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    role: decorative ? undefined : 'img',
    'aria-hidden': decorative ? 'true' : undefined,
    'aria-label': decorative ? undefined : ariaLabel,
    'data-skin-mark': activeSkin,
    className: cx('mf-brand-mark', className),
  }, shapes.map((shape, idx) => h(shape.tag, { key: idx, ...shape.attrs })));
});

export const SkinArtwork = forwardRef(function SkinArtwork({
  skin: skinProp,
  title,
  caption,
  className,
  ...props
}, ref) {
  let themeSkin = 'classic';
  try {
    const theme = useTheme();
    if (theme?.skin) themeSkin = theme.skin;
  } catch {
    themeSkin = 'classic';
  }
  const activeSkin = skinProp && SKIN_VECTOR_PATHS[skinProp] ? skinProp : themeSkin;

  return h('figure', {
    ...props,
    ref,
    'data-skin-artwork': activeSkin,
    className: cx('mf-skin-artwork', className),
  },
    h('div', { className: 'mf-skin-artwork-canvas', 'aria-hidden': 'true' },
      h(SkinBrandMark, { skin: activeSkin, size: 56, decorative: true }),
      h('div', { className: 'mf-skin-artwork-grid' })
    ),
    (title || caption) && h('figcaption', { className: 'mf-skin-artwork-caption' },
      title && h('strong', null, title),
      caption && h('span', null, caption)
    )
  );
});

/* M10 Opt-In, Muted-by-Default WebAudio Synthesizer SFX Runtime (MF-SFX-001) */

const SFX_EVENT_PROFILES = {
  success: { freq: [523.25, 659.25], durationMs: 110, type: 'sine' },
  warning: { freq: [392.0, 349.23], durationMs: 130, type: 'triangle' },
  error: { freq: [293.66, 246.94], durationMs: 140, type: 'triangle' },
  notification: { freq: [587.33, 880.0], durationMs: 95, type: 'sine' },
  confirmation: { freq: [440.0, 554.37], durationMs: 90, type: 'sine' },
  'quest-reward': { freq: [523.25, 659.25, 783.99], durationMs: 160, type: 'triangle' },
};

const SFX_ALIASES = {
  'confirm.success': 'success',
  'confirm.warning': 'warning',
  'confirm.error': 'error',
  'notification.incoming': 'notification',
  'operation.progress-complete': 'success',
  'game.reward': 'quest-reward',
};

const SFXContext = createContext({
  enabled: false,
  muted: true,
  volume: 0.35,
  consentGranted: false,
  lastEvent: null,
  grantConsent: () => {},
  revokeConsent: () => {},
  setMuted: () => {},
  setVolume: () => {},
  play: () => ({ played: false, reason: 'provider-missing' }),
});

export function SFXProvider({
  defaultEnabled = false,
  defaultMuted = true,
  defaultVolume = 0.35,
  children,
}) {
  const [consentGranted, setConsentGranted] = useState(Boolean(defaultEnabled));
  const [muted, setMutedState] = useState(defaultEnabled ? Boolean(defaultMuted) : true);
  const [volume, setVolumeState] = useState(() => Math.max(0, Math.min(1, Number(defaultVolume) || 0.35)));
  const [lastEvent, setLastEvent] = useState(null);
  const timingRef = useRef({ lastPlayedAt: 0, byEvent: {} });

  function setVolume(next) {
    const clamped = Math.max(0, Math.min(1, Number(next)));
    if (Number.isFinite(clamped)) setVolumeState(clamped);
  }

  function grantConsent() {
    setConsentGranted(true);
    setMutedState(false);
  }

  function revokeConsent() {
    setConsentGranted(false);
    setMutedState(true);
  }

  function play(rawEventId) {
    const canonicalId = SFX_ALIASES[rawEventId] || rawEventId;
    const profile = SFX_EVENT_PROFILES[canonicalId];
    if (!profile) return { played: false, reason: 'unknown-event' };
    if (!consentGranted || muted || volume <= 0) return { played: false, reason: 'muted-or-no-consent' };
    if (typeof window === 'undefined' || typeof document === 'undefined') return { played: false, reason: 'ssr' };
    if (document.visibilityState === 'hidden') return { played: false, reason: 'background-tab' };

    const rootMotion = document.documentElement?.getAttribute('data-motion');
    const prefersReduced = typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rootMotion === 'reduced' || prefersReduced) {
      return { played: false, reason: 'reduced-motion' };
    }

    const now = Date.now();
    const lastGlobal = timingRef.current.lastPlayedAt || 0;
    const lastSame = timingRef.current.byEvent[canonicalId] || 0;
    if (now - lastGlobal < 1000) return { played: false, reason: 'rate-limited' };
    if (now - lastSame < 2000) return { played: false, reason: 'deduplicated' };

    timingRef.current.lastPlayedAt = now;
    timingRef.current.byEvent[canonicalId] = now;
    setLastEvent({ id: canonicalId, timestamp: now });

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(Math.max(0.01, volume * 0.25), ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + profile.durationMs / 1000);
        gain.connect(ctx.destination);

        profile.freq.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          osc.type = profile.type;
          osc.frequency.setValueAtTime(f, ctx.currentTime + idx * 0.045);
          osc.connect(gain);
          osc.start(ctx.currentTime + idx * 0.045);
          osc.stop(ctx.currentTime + (profile.durationMs / 1000) + idx * 0.045);
        });
      }
    } catch {
      // Graceful silent fallback per MF-SFX-001
    }

    return { played: true, eventId: canonicalId };
  }

  const value = useMemo(() => ({
    enabled: consentGranted && !muted,
    muted,
    volume,
    consentGranted,
    lastEvent,
    grantConsent,
    revokeConsent,
    setMuted: setMutedState,
    setVolume,
    play,
  }), [consentGranted, muted, volume, lastEvent]);

  return h(SFXContext.Provider, { value }, children);
}

export function useSFX() {
  return useContext(SFXContext);
}


