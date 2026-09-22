import { useEffect, useState, type ReactNode } from "react";
import { PreferencesContext } from "../i18n/context";
import { defaultLocale, isLocale, locales, type Locale } from "../i18n/locales";
import { messages } from "../i18n";
import {
  isTheme,
  preferenceKeys,
  storePreference,
  type Theme,
} from "../config/preferences";
export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>(() =>
    isLocale(document.documentElement.lang)
      ? (document.documentElement.lang as Locale)
      : defaultLocale,
  );
  const [theme, updateTheme] = useState<Theme>(() =>
    isTheme(document.documentElement.dataset.theme)
      ? (document.documentElement.dataset.theme as Theme)
      : "light",
  );
  const [manualTheme, setManualTheme] = useState(
    () => document.documentElement.dataset.themePreference !== "system",
  );
  const t = messages[locale];
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.themePreference = manualTheme ? theme : "system";
    root.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        getComputedStyle(root).getPropertyValue("--bg").trim(),
      );
  }, [theme, manualTheme]);
  useEffect(() => {
    if (manualTheme) return;
    const media = matchMedia("(prefers-color-scheme: dark)");
    const update = () => updateTheme(media.matches ? "dark" : "light");
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [manualTheme]);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.seo.title;
    for (const selector of [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
    ])
      document
        .querySelector(selector)
        ?.setAttribute("content", t.seo.description);
    for (const selector of [
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
    ])
      document.querySelector(selector)?.setAttribute("content", t.seo.title);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", locales[locale].og);
  }, [locale, t]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === preferenceKeys.locale || event.key === null)
        updateLocale(isLocale(event.newValue) ? event.newValue : defaultLocale);
      if (event.key === preferenceKeys.theme || event.key === null) {
        const explicit = isTheme(event.newValue);
        setManualTheme(explicit);
        updateTheme(
          explicit
            ? (event.newValue as Theme)
            : matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        );
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  const setLocale = (value: Locale) => {
    updateLocale(value);
    storePreference(preferenceKeys.locale, value);
  };
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setManualTheme(true);
    updateTheme(next);
    storePreference(preferenceKeys.theme, next);
  };
  return (
    <PreferencesContext.Provider
      value={{ locale, setLocale, theme, toggleTheme, t }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}
