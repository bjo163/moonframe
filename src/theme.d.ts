import type { HTMLAttributes, ReactNode, ScriptHTMLAttributes } from 'react';
import type { SkinId } from './skins.js';

export type Mode = 'light' | 'dark' | 'system';
export type Density = 'compact' | 'comfortable' | 'spacious';
export type Motion = 'full' | 'reduced' | 'system';
export type Contrast = 'normal' | 'high' | 'system';

export interface ThemePreferences {
  skin: SkinId;
  mode: Mode;
  density: Density;
  motion: Motion;
  contrast: Contrast;
}

export interface ResolvedTheme extends ThemePreferences {
  resolvedMode: 'light' | 'dark';
  resolvedMotion: 'full' | 'reduced';
  resolvedContrast: 'normal' | 'high';
}

export interface ThemeContextValue extends ResolvedTheme {
  setSkin(value: SkinId): void;
  setMode(value: Mode): void;
  setDensity(value: Density): void;
  setMotion(value: Motion): void;
  setContrast(value: Contrast): void;
  setPreferences(patch: Partial<ThemePreferences> | ((previous: ThemePreferences) => Partial<ThemePreferences>)): void;
  resetPreferences(): void;
}

export interface ThemeInitScriptOptions {
  defaultSkin?: SkinId;
  defaultMode?: Mode;
  defaultDensity?: Density;
  defaultMotion?: Motion;
  defaultContrast?: Contrast;
  storageKey?: string | null;
  selector?: string;
}

export interface ThemeScriptProps extends Omit<ScriptHTMLAttributes<HTMLScriptElement>, 'dangerouslySetInnerHTML' | 'children'>, ThemeInitScriptOptions {}

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  defaultSkin?: SkinId;
  defaultMode?: Mode;
  defaultDensity?: Density;
  defaultMotion?: Motion;
  defaultContrast?: Contrast;
  skin?: SkinId;
  mode?: Mode;
  density?: Density;
  motion?: Motion;
  contrast?: Contrast;
  onPreferencesChange?: (preferences: ThemePreferences) => void;
  storageKey?: string | null;
  syncDocumentElement?: boolean;
}

export function ThemeProvider(props: ThemeProviderProps): ReactNode;
export function ThemeScript(props?: ThemeScriptProps): ReactNode;
export function getThemeInitScript(options?: ThemeInitScriptOptions): string;
export function useTheme(): ThemeContextValue;
export function normalizePreferences(value?: unknown, defaults?: Partial<ThemePreferences>): ThemePreferences;
export function resolveTheme(
  preferences?: Partial<ThemePreferences>,
  environment?: { dark?: boolean; reducedMotion?: boolean; highContrast?: boolean }
): ResolvedTheme;
export function getThemeAttributes(theme: ResolvedTheme | Partial<ThemePreferences>): Record<string, string>;
