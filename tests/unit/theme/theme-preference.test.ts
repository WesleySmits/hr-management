import { describe, expect, it } from 'vitest';
import {
  resolveStoredTheme,
  switchTheme,
  THEME_STORAGE_KEY,
} from '../../../src/shared/theme/theme-preference';

class InMemoryThemeStorage {
  private readonly map = new Map<string, string>();

  getItem(key: string): string | null {
    return this.map.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.map.set(key, value);
  }
}

describe('theme preference', () => {
  it('falls back to lavandre-light when storage is empty', () => {
    const storage = new InMemoryThemeStorage();
    expect(resolveStoredTheme(storage)).toBe('lavandre-light');
  });

  it('persists and returns next theme when switched', () => {
    const storage = new InMemoryThemeStorage();
    const next = switchTheme(storage, 'lavandre-light');

    expect(next).toBe('lavandre-dark');
    expect(storage.getItem(THEME_STORAGE_KEY)).toBe('lavandre-dark');
    expect(resolveStoredTheme(storage)).toBe('lavandre-dark');
  });

  it('ignores invalid persisted values and uses fallback', () => {
    const storage = new InMemoryThemeStorage();
    storage.setItem(THEME_STORAGE_KEY, 'unknown');

    expect(resolveStoredTheme(storage)).toBe('lavandre-light');
  });
});
