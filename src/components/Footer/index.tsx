"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <motion.footer
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.7, duration: 0.25 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} André Barros. {t("footerRights")}.
        </p>
      </div>
    </motion.footer>
  );
}
