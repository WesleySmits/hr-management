import { describe, expect, it } from 'vitest';
import { add } from '../../src/math';

describe('quality gate integration', () => {
  it('verifies strict typed import and runtime behavior', () => {
    const result = add(20, 22);
    expect(result).toBe(42);
  });
});
