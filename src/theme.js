'use client';

import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { skinIds } from './skins.js';

const ThemeContext = createContext(null);
const MODES = ['light', 'dark', 'system'];
const DENSITIES = ['compact', 'comfortable', 'spacious'];
const MOTIONS = ['full', 'reduced', 'system'];
const CONTRASTS = ['normal', 'high', 'system'];

const pick = (value, choices, fallback) => choices.includes(value) ? value : fallback;

export function normalizePreferences(value = {}, defaults = {}) {
  const input = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  const base = defaults && typeof defaults === 'object' && !Array.isArray(defaults) ? defaults : {};
  return {
    skin: pick(input.skin, skinIds, pick(base.skin, skinIds, 'classic')),
    mode: pick(input.mode, MODES, pick(base.mode, MODES, 'system')),
    density: pick(input.density, DENSITIES, pick(base.density, DENSITIES, 'comfortable')),
    motion: pick(input.motion, MOTIONS, pick(base.motion, MOTIONS, 'system')),
    contrast: pick(input.contrast, CONTRASTS, pick(base.contrast, CONTRASTS, 'system')),
  };
}

export function resolveTheme(preferences = {}, environment = {}) {
  const p = normalizePreferences(preferences);
  const env = environment && typeof environment === 'object' ? environment : {};
  return {
    ...p,
    resolvedMode: p.mode === 'system' ? (env.dark ? 'dark' : 'light') : p.mode,
    resolvedMotion: p.motion === 'system' ? (env.reducedMotion ? 'reduced' : 'full') : p.motion,
    resolvedContrast: p.contrast === 'system' ? (env.highContrast ? 'high' : 'normal') : p.contrast,
  };
}

export function getThemeAttributes(theme) {
  const resolved = theme && typeof theme === 'object' && 'resolvedMode' in theme
    ? theme
    : resolveTheme(theme);
  return {
    'data-skin': resolved.skin,
    'data-mode': resolved.resolvedMode,
    'data-density': resolved.density,
    'data-motion': resolved.resolvedMotion,
    'data-contrast': resolved.resolvedContrast,
  };
}

/**
 * Generates a synchronous pre-paint inline script for Next.js / SSR layouts
 * so persisted preferences and system media queries resolve before first paint without FOUC.
 */
export function getThemeInitScript({
  defaultSkin = 'classic',
  defaultMode = 'system',
  defaultDensity = 'comfortable',
  defaultMotion = 'system',
  defaultContrast = 'system',
  storageKey = 'moonframe:theme',
  selector = ':root, .mf-root',
} = {}) {
  const initial = normalizePreferences({
    skin: defaultSkin,
    mode: defaultMode,
    density: defaultDensity,
    motion: defaultMotion,
    contrast: defaultContrast,
  });
  const config = JSON.stringify({
    initial,
    storageKey: storageKey ?? null,
    selector: typeof selector === 'string' && selector.trim() ? selector : ':root, .mf-root',
    skins: skinIds,
    modes: MODES,
    densities: DENSITIES,
    motions: MOTIONS,
    contrasts: CONTRASTS,
  });
  return `(function(c){try{var p=Object.assign({},c.initial);if(c.storageKey){try{var raw=window.localStorage.getItem(c.storageKey);var s=raw&&JSON.parse(raw);if(s&&typeof s==="object"&&!Array.isArray(s)){if(c.skins.indexOf(s.skin)>-1)p.skin=s.skin;if(c.modes.indexOf(s.mode)>-1)p.mode=s.mode;if(c.densities.indexOf(s.density)>-1)p.density=s.density;if(c.motions.indexOf(s.motion)>-1)p.motion=s.motion;if(c.contrasts.indexOf(s.contrast)>-1)p.contrast=s.contrast;}}catch(e){}}var mm=typeof window.matchMedia==="function"?function(q){return window.matchMedia(q).matches;}:function(){return false;};var mode=p.mode==="system"?(mm("(prefers-color-scheme: dark)")?"dark":"light"):p.mode;var motion=p.motion==="system"?(mm("(prefers-reduced-motion: reduce)")?"reduced":"full"):p.motion;var contrast=p.contrast==="system"?(mm("(prefers-contrast: more)")?"high":"normal"):p.contrast;var nodes=document.querySelectorAll(c.selector);for(var i=0;i<nodes.length;i++){var el=nodes[i];el.setAttribute("data-skin",p.skin);el.setAttribute("data-mode",mode);el.setAttribute("data-density",p.density);el.setAttribute("data-motion",motion);el.setAttribute("data-contrast",contrast);}}catch(e){}})(${config});`;
}

/**
 * Next.js App Router / SSR pre-hydration script component.
 * Place in `app/layout.tsx` inside `<head>` or at the top of `<body>`.
 */
export function ThemeScript({
  defaultSkin = 'classic',
  defaultMode = 'system',
  defaultDensity = 'comfortable',
  defaultMotion = 'system',
  defaultContrast = 'system',
  storageKey = 'moonframe:theme',
  selector = ':root, .mf-root',
  nonce,
  ...props
}) {
  const code = getThemeInitScript({
    defaultSkin,
    defaultMode,
    defaultDensity,
    defaultMotion,
    defaultContrast,
    storageKey,
    selector,
  });
  return createElement('script', {
    ...props,
    nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: code },
  });
}

const queries = {
  dark: '(prefers-color-scheme: dark)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  highContrast: '(prefers-contrast: more)',
};

/** Scoped provider: preferences persist after mount; SSR and initial hydration match. */
export function ThemeProvider({
  children,
  defaultSkin = 'classic',
  defaultMode = 'system',
  defaultDensity = 'comfortable',
  defaultMotion = 'system',
  defaultContrast = 'system',
  skin: controlledSkin,
  mode: controlledMode,
  density: controlledDensity,
  motion: controlledMotion,
  contrast: controlledContrast,
  onPreferencesChange,
  storageKey = 'moonframe:theme',
  syncDocumentElement = false,
  className = '',
  style,
  ...props
}) {
  const defaults = useMemo(
    () => normalizePreferences({
      skin: defaultSkin,
      mode: defaultMode,
      density: defaultDensity,
      motion: defaultMotion,
      contrast: defaultContrast,
    }),
    [defaultSkin, defaultMode, defaultDensity, defaultMotion, defaultContrast]
  );

  const [preferences, setPreferencesState] = useState(() => defaults);
  const [environment, setEnvironment] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (storageKey) {
      try {
        const saved = JSON.parse(window.localStorage.getItem(storageKey));
        if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
          setPreferencesState(previous => normalizePreferences({ ...previous, ...saved }, defaults));
        }
      } catch { /* Persistence is optional, including restricted browsers. */ }
    }
    setReady(true);
  }, [storageKey, defaults]);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const media = Object.fromEntries(Object.entries(queries).map(([key, query]) => [key, window.matchMedia(query)]));
    const sync = () => setEnvironment(Object.fromEntries(Object.entries(media).map(([key, query]) => [key, query.matches])));
    sync();
    for (const query of Object.values(media)) query.addEventListener('change', sync);
    return () => { for (const query of Object.values(media)) query.removeEventListener('change', sync); };
  }, []);

  const effectivePreferences = useMemo(() => normalizePreferences({
    ...preferences,
    ...(controlledSkin !== undefined ? { skin: controlledSkin } : {}),
    ...(controlledMode !== undefined ? { mode: controlledMode } : {}),
    ...(controlledDensity !== undefined ? { density: controlledDensity } : {}),
    ...(controlledMotion !== undefined ? { motion: controlledMotion } : {}),
    ...(controlledContrast !== undefined ? { contrast: controlledContrast } : {}),
  }, defaults), [
    preferences,
    controlledSkin,
    controlledMode,
    controlledDensity,
    controlledMotion,
    controlledContrast,
    defaults,
  ]);

  useEffect(() => {
    if (!ready || !storageKey) return;
    try { window.localStorage.setItem(storageKey, JSON.stringify(effectivePreferences)); } catch { /* Keep the in-memory selection. */ }
  }, [effectivePreferences, ready, storageKey]);

  const theme = useMemo(() => resolveTheme(effectivePreferences, environment), [effectivePreferences, environment]);
  const attrs = useMemo(() => getThemeAttributes(theme), [theme]);

  useEffect(() => {
    if (!syncDocumentElement || typeof document === 'undefined') return;
    const root = document.documentElement;
    for (const [k, v] of Object.entries(attrs)) root.setAttribute(k, v);
  }, [syncDocumentElement, attrs]);

  const setPreferences = useCallback((patchOrUpdater) => {
    setPreferencesState(previous => {
      const patch = typeof patchOrUpdater === 'function' ? patchOrUpdater(previous) : patchOrUpdater;
      const next = normalizePreferences({ ...previous, ...(patch && typeof patch === 'object' ? patch : {}) }, defaults);
      onPreferencesChange?.(next);
      return next;
    });
  }, [defaults, onPreferencesChange]);

  const resetPreferences = useCallback(() => {
    setPreferencesState(defaults);
    onPreferencesChange?.(defaults);
  }, [defaults, onPreferencesChange]);

  const value = useMemo(() => {
    const update = key => next => setPreferences({ [key]: next });
    return {
      ...theme,
      setSkin: update('skin'),
      setMode: update('mode'),
      setDensity: update('density'),
      setMotion: update('motion'),
      setContrast: update('contrast'),
      setPreferences,
      resetPreferences,
    };
  }, [theme, setPreferences, resetPreferences]);

  return createElement(
    ThemeContext.Provider,
    { value },
    createElement(
      'div',
      {
        ...props,
        ...attrs,
        suppressHydrationWarning: true,
        className: `mf-root ${className}`.trim(),
        style,
      },
      children
    )
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('useTheme must be used within a Moonframe ThemeProvider.');
  return value;
}
