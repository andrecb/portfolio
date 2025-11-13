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
      className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer relative overflow-hidden backdrop-blur-sm"
      style={{
        backgroundColor: "var(--card-background)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        backgroundColor: "var(--hover-background)",
        boxShadow: "0 4px 20px rgba(60, 9, 108, 0.2)",
        transition: {
          type: "spring",
          stiffness: 700,
          damping: 25,
          duration: 0.15,
        },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 30,
        duration: 0.1,
      }}
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
