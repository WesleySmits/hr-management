import { describe, expect, it } from 'vitest';
import {
  BUTTON_STATES,
  BUTTON_VARIANTS,
  createButtonPrimitive,
} from '../../../src/shared/primitives/button';
import {
  INPUT_STATES,
  INPUT_VARIANTS,
  createInputPrimitive,
} from '../../../src/shared/primitives/input';
import { BADGE_VARIANTS, createBadgePrimitive } from '../../../src/shared/primitives/badge';

describe('core primitives', () => {
  it('covers every button state/variant combination', () => {
    for (const variant of BUTTON_VARIANTS) {
      for (const state of BUTTON_STATES) {
        const primitive = createButtonPrimitive(variant, state);
        expect(primitive.variant).toBe(variant);
        expect(primitive.state).toBe(state);
        expect(primitive.className).toContain(`state-${state}`);
      }
    }
  });

  it('covers every input state/variant combination', () => {
    for (const variant of INPUT_VARIANTS) {
      for (const state of INPUT_STATES) {
        const primitive = createInputPrimitive(variant, state);
        expect(primitive.variant).toBe(variant);
        expect(primitive.state).toBe(state);
        expect(primitive.className).toContain(`state-${state}`);
      }
    }
  });

  it('covers every badge variant', () => {
    for (const variant of BADGE_VARIANTS) {
      const primitive = createBadgePrimitive(variant);
      expect(primitive.variant).toBe(variant);
      expect(primitive.className).toContain('badge');
    }
  });
});
