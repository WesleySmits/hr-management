import { THEME_NAMES, type ThemeName } from './tokens';

export const THEME_STORAGE_KEY = 'hr-management-theme';

export interface ThemeStorage {
  // eslint-disable-next-line no-unused-vars
  getItem(key: string): string | null;
  // eslint-disable-next-line no-unused-vars
  setItem(key: string, value: string): void;
}

export function isThemeName(input: string): input is ThemeName {
  return THEME_NAMES.includes(input as ThemeName);
}

export function resolveStoredTheme(storage: ThemeStorage): ThemeName {
  const stored = storage.getItem(THEME_STORAGE_KEY);
  if (stored && isThemeName(stored)) {
    return stored;
  }
  return 'lavandre-light';
}

export function persistTheme(storage: ThemeStorage, theme: ThemeName): void {
  storage.setItem(THEME_STORAGE_KEY, theme);
}

export function nextTheme(currentTheme: ThemeName): ThemeName {
  const index = THEME_NAMES.indexOf(currentTheme);
  const nextIndex = (index + 1) % THEME_NAMES.length;
  const theme = THEME_NAMES[nextIndex];

  if (!theme) {
    return 'lavandre-light';
  }

  return theme;
}

export function switchTheme(storage: ThemeStorage, currentTheme: ThemeName): ThemeName {
  const updatedTheme = nextTheme(currentTheme);
  persistTheme(storage, updatedTheme);
  return updatedTheme;
}
