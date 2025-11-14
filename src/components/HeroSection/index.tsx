"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <motion.section
      className="py-24 md:py-32 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Foto à esquerda */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl shadow-photo transition-transform hover:scale-105"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src="/andre-barros.webp"
            alt="André Barros"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Informações principais à direita */}
      <motion.div className="flex-1 max-w-3xl w-full text-center md:text-left space-y-6">
        <div className="space-y-4">
          <motion.span
            className="text-xl font-light block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {t("greeting")}
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <span>{t("namePrefix")} </span>
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              {t("name")}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {t("description")}
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
}
