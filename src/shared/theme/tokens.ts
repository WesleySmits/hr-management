export interface ThemeTokens {
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
}

export const THEME_NAMES = ['lavandre-light', 'lavandre-dark', 'sunrise', 'ocean', 'forest'] as const;
export type ThemeName = (typeof THEME_NAMES)[number];

export const THEME_TOKENS: Record<ThemeName, ThemeTokens> = {
  'lavandre-light': {
    background: '#F8F7FF',
    surface: '#FFFFFF',
    textPrimary: '#19172C',
    textSecondary: '#544E78',
    accent: '#7C5CFF',
  },
  'lavandre-dark': {
    background: '#121022',
    surface: '#1B1930',
    textPrimary: '#F3F1FF',
    textSecondary: '#B7B0E5',
    accent: '#9A83FF',
  },
  sunrise: {
    background: '#FFF8F0',
    surface: '#FFFFFF',
    textPrimary: '#2F1D14',
    textSecondary: '#7A5643',
    accent: '#FF8C42',
  },
  ocean: {
    background: '#F2FAFF',
    surface: '#FFFFFF',
    textPrimary: '#102331',
    textSecondary: '#3E647B',
    accent: '#0086CC',
  },
  forest: {
    background: '#F3FAF5',
    surface: '#FFFFFF',
    textPrimary: '#13261A',
    textSecondary: '#3E6A4C',
    accent: '#2F9E44',
  },
};
