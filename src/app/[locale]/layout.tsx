import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getMessages } from "next-intl/server";
import Providers from "@/components/Providers";
import WhatsAppButton from "@/components/WhatsAppButton";
import { locales } from "@/i18n";
import "../globals.css";

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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang={locale === "pt" ? "pt-BR" : "en"} data-theme="dark">
      <body className={`${inter.className} ${poppins.className}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRS3VW9JY8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MRS3VW9JY8');
          `}
        </Script>
        <Providers messages={messages} locale={locale}>
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
