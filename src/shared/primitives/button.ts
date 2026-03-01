export const BUTTON_VARIANTS = ['primary', 'secondary', 'ghost'] as const;
export const BUTTON_STATES = ['default', 'loading', 'disabled'] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonState = (typeof BUTTON_STATES)[number];

export interface ButtonPrimitive {
  variant: ButtonVariant;
  state: ButtonState;
  className: string;
  isDisabled: boolean;
  showSpinner: boolean;
}

const BUTTON_VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white border-transparent',
  secondary: 'bg-surface text-primary border-accent',
  ghost: 'bg-transparent text-primary border-transparent',
};

export function createButtonPrimitive(variant: ButtonVariant, state: ButtonState): ButtonPrimitive {
  return {
    variant,
    state,
    className: `btn ${BUTTON_VARIANT_CLASS[variant]} state-${state}`,
    isDisabled: state === 'disabled' || state === 'loading',
    showSpinner: state === 'loading',
  };
}
