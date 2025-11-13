"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Header() {
  const t = useTranslations();

  return (
    <motion.header
      className="w-full py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <motion.span
          className="text-lg font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            opacity: { delay: 0.05, duration: 0.25, ease: [0.4, 0, 0.2, 1] },
            x: { delay: 0.05, duration: 0.25, ease: [0.4, 0, 0.2, 1] },
            default: { type: "spring", stiffness: 800, damping: 30, duration: 0.1 },
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 700, damping: 25, duration: 0.15 }
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
