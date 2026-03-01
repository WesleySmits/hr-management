import { describe, expect, it } from 'vitest';
import { THEME_NAMES, THEME_TOKENS } from '../../../src/shared/theme/tokens';

describe('theme tokens', () => {
  it('ships five supported themes with full token maps', () => {
    expect(THEME_NAMES).toHaveLength(5);

    for (const theme of THEME_NAMES) {
      expect(THEME_TOKENS[theme]).toEqual(
        expect.objectContaining({
          background: expect.any(String),
          surface: expect.any(String),
          textPrimary: expect.any(String),
          textSecondary: expect.any(String),
          accent: expect.any(String),
        }),
      );
    }
  });
});
