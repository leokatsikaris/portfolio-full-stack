export const locales = {
  es: { label: "Español", short: "ES", og: "es_AR" },
  en: { label: "English", short: "EN", og: "en_US" },
} as const;
export type Locale = keyof typeof locales;
export type Localized<T> = Record<Locale, T>;
export const defaultLocale: Locale = "es";
export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && Object.hasOwn(locales, value);
}
