export const locales = ["bg", "en"] as const;
export const defaultLocale = "bg";

export type Locale = (typeof locales)[number];
