export const INPUT_VARIANTS = ['outline', 'filled'] as const;
export const INPUT_STATES = ['default', 'error', 'disabled'] as const;

export type InputVariant = (typeof INPUT_VARIANTS)[number];
export type InputState = (typeof INPUT_STATES)[number];

export interface InputPrimitive {
  variant: InputVariant;
  state: InputState;
  className: string;
  isDisabled: boolean;
  ariaInvalid: boolean;
}

const INPUT_VARIANT_CLASS: Record<InputVariant, string> = {
  outline: 'border border-accent bg-surface',
  filled: 'border-transparent bg-background',
};

export function createInputPrimitive(variant: InputVariant, state: InputState): InputPrimitive {
  return {
    variant,
    state,
    className: `input ${INPUT_VARIANT_CLASS[variant]} state-${state}`,
    isDisabled: state === 'disabled',
    ariaInvalid: state === 'error',
  };
}
