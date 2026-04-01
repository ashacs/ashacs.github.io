'use client';

import { useState, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import './index.css';

type Theme = 'light' | 'sepia' | 'dark';
type FontFamily = 'literata' | 'garamond' | 'sans';
type LineSpacing = 'compact' | 'normal' | 'relaxed';
type Margin = 'narrow' | 'medium' | 'wide';

interface Settings {
  theme: Theme;
  font: FontFamily;
  fontSize: number;
  lineSpacing: LineSpacing;
  margin: Margin;
}

const DEFAULTS: Settings = {
  theme: 'light',
  font: 'literata',
  fontSize: 17,
  lineSpacing: 'normal',
  margin: 'medium',
};

const LINE_SPACING_MAP: Record<LineSpacing, string> = {
  compact: '1.45',
  normal: '1.75',
  relaxed: '2.1',
};

const MARGIN_MAP: Record<Margin, string> = {
  narrow: 'clamp(0.75rem, 2vw, 1.25rem)',
  medium: 'clamp(1rem, 5vw, 3rem)',
  wide: 'clamp(1.5rem, 10vw, 6rem)',
};

const FONT_SIZE_STOPS = [13, 15, 17, 19, 21] as const;
const FONT_SIZE_STOPS_MIN = FONT_SIZE_STOPS[0];
const FONT_SIZE_STOPS_MAX = FONT_SIZE_STOPS[FONT_SIZE_STOPS.length - 1];

const STORAGE_KEY = 'acs-reading-settings';

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return { ...DEFAULTS, theme: prefersDark ? 'dark' : 'light' };
}

function applySettings(s: Settings) {
  const root = document.documentElement;
  root.dataset.theme = s.theme;
  root.dataset.font = s.font;
  root.style.setProperty('--reader-font-size', `${s.fontSize}px`);
  root.style.setProperty(
    '--reader-line-height',
    LINE_SPACING_MAP[s.lineSpacing]
  );
  root.style.setProperty('--reader-margin', MARGIN_MAP[s.margin]);
}

export function Toolbar() {
  const [settings, setSettings] = useState<Settings>(() => loadSettings());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    applySettings(settings);
  }, [settings]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function updateSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  const pct = Math.round(progress * 100);
  const themes: Theme[] = ['light', 'sepia', 'dark'];
  const fonts: { key: FontFamily; label: string; family: string }[] = [
    {
      key: 'literata',
      label: 'Literata',
      family: 'var(--font-literata, Georgia, serif)',
    },
    {
      key: 'garamond',
      label: 'Garamond',
      family: 'var(--font-garamond, Georgia, serif)',
    },
    {
      key: 'sans',
      label: 'Sans',
      family: "var(--font-sans, 'Helvetica Neue', Arial, sans-serif)",
    },
  ];
  const spacings: LineSpacing[] = ['compact', 'normal', 'relaxed'];
  const margins: Margin[] = ['narrow', 'medium', 'wide'];

  return (
    <Popover.Root>
      <div className="toolbar" role="toolbar" aria-label="Reading controls">
        <div className="toolbar-progressbar-container">
          <div
            className="toolbar-progressbar"
            style={{ width: `${pct}%` }}
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${pct}% read`}
          />
        </div>
        <div className="toolbar-content">
          <span className="reader-progress-label">{pct}%</span>
          <Popover.Trigger asChild>
            <button className="reader-aa-btn" aria-label="Reading settings">
              Aa
            </button>
          </Popover.Trigger>
        </div>
      </div>

      <Popover.Portal>
        <Popover.Content
          className="reading-settings"
          side="top"
          align="end"
          sideOffset={15}
          collisionPadding={15}
        >
          {/* Theme */}
          <fieldset className="reading-settings-fieldset">
            <legend className="reading-settings-label">Theme</legend>
            <div className="reading-settings-row">
              {themes.map((t) => (
                <button
                  key={t}
                  className={`reading-settings-btn reader-theme-btn_${t}`}
                  onClick={() => updateSetting('theme', t)}
                  aria-pressed={settings.theme === t}
                >
                  <span className="reader-theme-swatch" aria-hidden="true" />
                  <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Font */}
          <fieldset className="reading-settings-fieldset">
            <legend className="reading-settings-label">Font</legend>
            <div className="reading-settings-row">
              {fonts.map(({ key, label, family }) => (
                <button
                  key={key}
                  className="reading-settings-btn reader-font-btn"
                  style={{ fontFamily: family }}
                  onClick={() => updateSetting('font', key)}
                  aria-pressed={settings.font === key}
                >
                  Aa<span className="reader-font-label">{label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Font size */}
          <fieldset className="reading-settings-fieldset">
            <legend className="reading-settings-label">Text Size</legend>
            <div className="reader-size-control">
              <button
                className="reader-size-adj"
                onClick={() =>
                  updateSetting('fontSize', Math.max(FONT_SIZE_STOPS_MIN, settings.fontSize - 1))
                }
                disabled={settings.fontSize <= FONT_SIZE_STOPS_MIN}
                aria-label="Decrease text size"
              >
                <span className="reader-size-adj-a">A</span>
                <span className="reader-size-adj-sym">−</span>
              </button>
              <div
                className="reader-size-dots"
                role="radiogroup"
                aria-label="Text size"
              >
                {FONT_SIZE_STOPS.map((size) => {
                  // fontSize can be any integer (stepped by ±1), not just a stop value.
                  // A dot is active if the current size is within 1px of its stop,
                  // which can result in multiple dots appearing active simultaneously.
                  const isActive = Math.abs(settings.fontSize - size) < 1.5;
                  return (
                    <button
                      key={size}
                      role="radio"
                      className={`reader-size-dot ${isActive ? ' reader-size-dot_active' : ''}`}
                      onClick={() => updateSetting('fontSize', size)}
                      aria-checked={isActive}
                      aria-label={`Text size ${size}`}
                    />
                  );
                })}
              </div>
              <button
                className="reader-size-adj"
                onClick={() =>
                  updateSetting('fontSize', Math.min(FONT_SIZE_STOPS_MAX, settings.fontSize + 1))
                }
                disabled={settings.fontSize >= FONT_SIZE_STOPS_MAX}
                aria-label="Increase text size"
              >
                <span className="reader-size-adj-a">A</span>
                <span className="reader-size-adj-sym">+</span>
              </button>
            </div>
          </fieldset>

          {/* Spacing */}
          <fieldset className="reading-settings-fieldset">
            <legend className="reading-settings-label">Spacing</legend>
            <div className="reading-settings-row">
              {spacings.map((s) => (
                <button
                  key={s}
                  className="reading-settings-btn reader-spacing-btn"
                  onClick={() => updateSetting('lineSpacing', s)}
                  aria-pressed={settings.lineSpacing === s}
                >
                  <span
                    className={`reader-spacing-icon reader-spacing-icon_${s}`}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                  <span>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Margins */}
          <fieldset className="reading-settings-fieldset">
            <legend className="reading-settings-label">Margins</legend>
            <div className="reading-settings-row">
              {margins.map((m) => (
                <button
                  key={m}
                  className="reading-settings-btn"
                  onClick={() => updateSetting('margin', m)}
                  aria-pressed={settings.margin === m}
                >
                  <span
                    className={`reader-margin-icon reader-margin-icon_${m}`}
                    aria-hidden="true"
                  >
                    <span className="reader-margin-icon-inner" />
                  </span>
                  <span>{m.charAt(0).toUpperCase() + m.slice(1)}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
