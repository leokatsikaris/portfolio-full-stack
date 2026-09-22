import { es } from "./es";
import { en } from "./en";
import type { Messages } from "./es";
import type { Locale } from "./locales";
export const messages: Record<Locale, Messages> = { es, en };
