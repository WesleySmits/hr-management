import { describe, expect, it } from 'vitest';
import { canImportLayer } from '../../../src/shared/architecture/layer-rules';

describe('architecture layer rules', () => {
  it('allows imports from same or lower abstraction layers', () => {
    expect(canImportLayer('presentation', 'app')).toBe(true);
    expect(canImportLayer('presentation', 'domain')).toBe(true);
    expect(canImportLayer('domain', 'shared')).toBe(true);
  });

  it('blocks imports from lower abstraction into higher layers', () => {
    expect(canImportLayer('domain', 'presentation')).toBe(false);
    expect(canImportLayer('shared', 'infrastructure')).toBe(false);
  });
});
