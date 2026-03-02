"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEME_TOKENS, type ThemeName } from './tokens';
import { resolveStoredTheme, persistTheme } from './theme-preference';

const ThemeContext = createContext({
  theme: 'lavandre-light' as ThemeName,
  setTheme: (t: ThemeName) => {},
});

export function useTheme(){
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }){
  const [theme, setThemeState] = useState<ThemeName>('lavandre-light');

  useEffect(() => {
    const stored = resolveStoredTheme(window.localStorage);
    setThemeState(stored);
    applyTheme(stored);
  }, []);

  function setTheme(t: ThemeName){
    persistTheme(window.localStorage, t);
    setThemeState(t);
    applyTheme(t);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function applyTheme(theme: ThemeName){
  const tokens = THEME_TOKENS[theme];
  const root = document.documentElement;
  root.style.setProperty('--bg', tokens.background);
  root.style.setProperty('--surface', tokens.surface);
  root.style.setProperty('--text-primary', tokens.textPrimary);
  root.style.setProperty('--text-secondary', tokens.textSecondary);
  root.style.setProperty('--accent', tokens.accent);
}
