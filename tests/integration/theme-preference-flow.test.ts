import { describe, expect, it } from 'vitest';
import {
  resolveStoredTheme,
  switchTheme,
  THEME_STORAGE_KEY,
} from '../../src/shared/theme/theme-preference';

class FakeStorage {
  private readonly entries = new Map<string, string>();

  getItem(key: string): string | null {
    return this.entries.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.entries.set(key, value);
  }
}

describe('theme preference integration flow', () => {
  it('switches themes and persists user preference immediately', () => {
    const storage = new FakeStorage();

    const before = resolveStoredTheme(storage);
    const after = switchTheme(storage, before);

    expect(before).toBe('lavandre-light');
    expect(after).toBe('lavandre-dark');
    expect(storage.getItem(THEME_STORAGE_KEY)).toBe('lavandre-dark');
    expect(resolveStoredTheme(storage)).toBe('lavandre-dark');
  });
});
