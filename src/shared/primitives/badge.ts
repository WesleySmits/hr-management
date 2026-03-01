export const BADGE_VARIANTS = ['neutral', 'success', 'warning'] as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[number];

export interface BadgePrimitive {
  variant: BadgeVariant;
  className: string;
}

const BADGE_CLASS: Record<BadgeVariant, string> = {
  neutral: 'bg-surface text-primary',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-amber-100 text-amber-900',
};

export function createBadgePrimitive(variant: BadgeVariant): BadgePrimitive {
  return {
    variant,
    className: `badge ${BADGE_CLASS[variant]}`,
  };
}
