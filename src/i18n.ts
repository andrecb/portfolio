import { notFound } from "next/navigation";
import type { GetRequestConfigParams } from "next-intl/server";
import { getRequestConfig } from "next-intl/server";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async (params: GetRequestConfigParams) => {
  // Obtém o locale da requisição
  const locale = await params.requestLocale;

  // Valida se o locale é suportado
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
    timeZone: "America/Sao_Paulo",
  };
});
