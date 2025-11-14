"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Header() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 w-full py-4 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-lg bg-glass-header shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.span
          className="text-lg font-medium transition-transform hover:scale-105"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            opacity: { delay: 0.05, duration: 0.25, ease: [0.4, 0, 0.2, 1] },
            x: { delay: 0.05, duration: 0.25, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          {t("headerTitle")}
        </motion.span>
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <ThemeSwitch />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <LanguageSwitch />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
