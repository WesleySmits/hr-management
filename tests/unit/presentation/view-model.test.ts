import { describe, expect, it } from 'vitest';
import { createViewModel } from '../../../src/presentation/view-model';

describe('view model', () => {
  it('creates a serializable view model', () => {
    expect(createViewModel('HR Dashboard')).toEqual({ title: 'HR Dashboard' });
  });
});
