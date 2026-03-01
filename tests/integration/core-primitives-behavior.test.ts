import { describe, expect, it } from 'vitest';
import { createButtonPrimitive } from '../../src/shared/primitives/button';
import { createInputPrimitive } from '../../src/shared/primitives/input';

describe('core primitives integration behavior', () => {
  it('maps loading button to disabled interactive state', () => {
    const button = createButtonPrimitive('primary', 'loading');
    expect(button.showSpinner).toBe(true);
    expect(button.isDisabled).toBe(true);
  });

  it('maps error input state to aria-invalid', () => {
    const input = createInputPrimitive('outline', 'error');
    expect(input.ariaInvalid).toBe(true);
    expect(input.isDisabled).toBe(false);
  });
});
