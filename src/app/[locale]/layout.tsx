import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Providers from "@/components/Providers";
import WhatsAppButton from "@/components/WhatsAppButton";
import { locales } from "@/i18n";

export const metadata: Metadata = {
  title: "André Barros | Portfolio",
  description: "Portfólio de André Barros",
  openGraph: {
    title: "André Barros | Portfolio",
    description: "Portfólio de André Barros",
    images: "/og-image.webp",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Necessário para atualizar lang dinamicamente
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = "${locale === "pt" ? "pt-BR" : "en"}";`,
        }}
      />
      <GoogleAnalytics gaId="G-MRS3VW9JY8" />
      <Providers messages={messages} locale={locale}>
        {children}
        <WhatsAppButton />
      </Providers>
    </>
  );
}
