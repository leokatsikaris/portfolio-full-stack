import { createContext, useContext } from "react";
import type { Locale } from "./locales";
import type { Messages } from "./es";
import type { Theme } from "../config/preferences";
export interface Preferences {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Messages;
}
export const PreferencesContext = createContext<Preferences | null>(null);
export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences requires PreferencesProvider");
  return context;
}
