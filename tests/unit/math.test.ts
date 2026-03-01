import { describe, expect, it } from 'vitest';
import { add } from '../../src/math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
