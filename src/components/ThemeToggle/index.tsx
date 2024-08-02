'use client';

import { useEffect, useState } from 'react';
import { LightThemeSVG } from '../SVG/LightThemeSVG';
import { DarkThemeSVG } from '../SVG/DarkThemeSVG';
import './index.css';

type Theme = 'dark' | 'light';
const LOCAL_STORAGE_KEY = 'theme';

function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && (value === 'light' || value === 'dark');
}
function getPrioritizedTheme() {
  const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');
  const systemTheme = systemMedia.matches ? 'dark' : 'light';
  const storageValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  const storageTheme = isTheme(storageValue) ? storageValue : undefined;

  return storageTheme ?? systemTheme;
}

const labels = {
  toggleToDark: 'Toggle to the dark theme',
  toggleToLight: 'Toggle to the light theme',
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPrioritizedTheme());

  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      setTheme(getPrioritizedTheme());
    };

    darkModePreference.addEventListener('change', listener);

    return () => darkModePreference.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const root = document.querySelector(':root');
    if (root instanceof HTMLElement) {
      root.dataset.theme = theme;
    }
  }, [theme]);

  const label = theme === 'dark' ? labels.toggleToLight : labels.toggleToDark;

  return (
    <button
      className="theme-toggle-button"
      aria-label={label}
      title={label}
      onClick={() => {
        setTheme(prev => {
          const newTheme = prev === 'dark' ? 'light' : 'dark';
          window.localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
          return newTheme;
        });
      }}
    >
      {theme === 'dark' ? <LightThemeSVG /> : <DarkThemeSVG />}
    </button>
  );
}
