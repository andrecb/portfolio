"use client";

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

interface ProvidersProps {
  children: ReactNode;
  messages: Record<string, unknown>;
  locale: string;
}

export default function Providers({
  children,
  messages,
  locale,
}: ProvidersProps) {
  return (
    <ThemeProvider>
      <NextIntlClientProvider
        messages={messages}
        locale={locale}
        timeZone="America/Sao_Paulo"
      >
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
