import { defaultLocale, locales } from "../i18n/locales";
export const preferenceKeys = {
  locale: "portfolio.locale",
  theme: "portfolio.theme",
};
export type Theme = "light" | "dark";
export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}
export function storePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Storage may be unavailable; current session still works. */
  }
}
// Injected synchronously by Vite before styles/React to prevent an incorrect theme flash.
export function preferenceBootstrap() {
  return `(function(){var r=document.documentElement,t=null,l=${JSON.stringify(defaultLocale)};try{t=localStorage.getItem(${JSON.stringify(preferenceKeys.theme)});var s=localStorage.getItem(${JSON.stringify(preferenceKeys.locale)});if(${JSON.stringify(Object.keys(locales))}.includes(s))l=s;}catch(e){}var m=t==='dark'||t==='light';r.dataset.theme=m?t:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');r.dataset.themePreference=m?t:'system';r.lang=l;r.style.colorScheme=r.dataset.theme;})();`;
}
