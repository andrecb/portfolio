"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import type { Locale } from "@/i18n";

export default function LanguageSwitch() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const toggleLanguage = () => {
    // Previne múltiplos cliques
    if (isNavigating) return;

    setIsNavigating(true);
    const newLocale = locale === "pt" ? "en" : "pt";

    // Remove o locale atual do pathname (se existir)
    let pathnameWithoutLocale = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    } else if (pathname.startsWith("/pt") || pathname.startsWith("/en")) {
      // Se o pathname começa com um locale, remove-o
      pathnameWithoutLocale = pathname.replace(/^\/(pt|en)/, "") || "/";
    }

    // Adiciona o novo locale
    const newPathname = `/${newLocale}${pathnameWithoutLocale === "/" ? "" : pathnameWithoutLocale}`;

    router.push(newPathname);

    // Reseta o estado após um pequeno delay
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer relative overflow-hidden backdrop-blur-card bg-card text-primary transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 hover:bg-card-hover hover:shadow-card-hover disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isNavigating}
      aria-label="Toggle language"
    >
      <motion.div
        animate={{ rotate: isNavigating ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Languages size={20} />
      </motion.div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          className="uppercase font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.15 }}
        >
          {locale === "pt" ? "EN" : "PT"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
