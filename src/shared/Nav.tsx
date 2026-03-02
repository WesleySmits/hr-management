"use client";
import React from 'react';
import { useTheme } from './theme/ThemeProvider';
import { THEME_NAMES } from './theme/tokens';

export default function Nav(){
  const { theme, setTheme } = useTheme();

  function toggleTheme(){
    const idx = THEME_NAMES.indexOf(theme as any);
    const next = THEME_NAMES[(idx + 1) % THEME_NAMES.length];
    setTheme(next as any);
  }

  return (
    <nav className="top-nav">
      <div className="nav-left">
        <span className="brand">HR Management</span>
      </div>
      <div className="nav-right">
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">{theme}</button>
      </div>
    </nav>
  );
}
