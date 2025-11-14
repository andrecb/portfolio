"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import Header from "@/components/Header";

export default function NotFound() {
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_title: "404 - Page Not Found",
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <main className="p-4 container mx-auto min-h-screen">
      <Header />

      <motion.section
        className="py-12 px-4 md:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Emoji animado */}
          <motion.div
            className="text-7xl mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            😅
          </motion.div>

          <motion.h1
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #60a5fa, #a78bfa, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("notFoundTitle")}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {t("notFoundSubtitle")}
          </motion.h2>

          <motion.p
            className="text-lg font-light opacity-80 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {t("notFoundDescription")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Link href={`/${locale}`}>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer backdrop-blur-sm mx-auto"
                style={{
                  backgroundColor: "var(--card-background)",
                  color: "var(--text-color)",
                  border: "1px solid var(--card-border)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "var(--hover-background)",
                  boxShadow: "0 8px 30px rgba(60, 9, 108, 0.2)",
                  transition: {
                    type: "spring",
                    stiffness: 700,
                    damping: 25,
                    duration: 0.15,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  duration: 0.1,
                }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              >
                <Home size={20} />
                <span className="font-semibold">{t("notFoundButton")}</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Rodapé */}
      <motion.footer
        className="py-6 px-4 md:px-8 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} André Barros. {t("footerRights")}.
          </p>
        </div>
      </motion.footer>
    </main>
  );
}

