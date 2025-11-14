"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  const t = useTranslations();

  const trackContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const contactType = event.currentTarget.getAttribute("data-contact");
    if (contactType && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "contact_click", {
        contact_type: contactType,
      });
    }
  };

  return (
    <motion.section
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.15, duration: 0.25 }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 bg-linear-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.25 }}
        >
          {t("contactTitle")}
        </motion.h2>

        <motion.p
          className="text-lg font-light opacity-80 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.25 }}
        >
          {t("projectMessage")}
        </motion.p>

        {/* Cards principais de contato */}
        <div className="flex flex-col gap-4 mb-8">
          <motion.a
            href={`https://wa.me/5512991843391?text=${encodeURIComponent("Olá, gostaria de conversar sobre uma ideia!")}`}
            className="flex items-center gap-4 px-6 py-5 rounded-xl cursor-pointer backdrop-blur-card bg-card text-primary border border-card transition-all hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] hover:bg-card-hover hover:shadow-card-hover-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.3,
              duration: 0.25,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            onClick={trackContactClick}
            data-contact="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full shrink-0 bg-card border border-card">
              <SiWhatsapp size={24} className="text-[#25D366]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg">{t("whatsapp")}</span>
              <span className="text-sm opacity-70">{t("phoneNumber")}</span>
            </div>
          </motion.a>

          <motion.a
            href="mailto:contato@andrebarros.dev"
            className="flex items-center gap-4 px-6 py-5 rounded-xl cursor-pointer backdrop-blur-card bg-card text-primary border border-card transition-all hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] hover:bg-card-hover hover:shadow-card-hover-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.25,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            onClick={trackContactClick}
            data-contact="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full shrink-0 bg-card border border-card">
              <Mail size={24} className="text-[#4285F4]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg">{t("email")}</span>
              <span className="text-sm opacity-70">{t("emailAddress")}</span>
            </div>
          </motion.a>
        </div>

        {/* Ícones de redes sociais */}
        <div className="flex items-center justify-center gap-4">
          <motion.a
            href="https://github.com/andrecb"
            className="flex items-center justify-center w-14 h-14 rounded-full cursor-pointer backdrop-blur-card bg-card text-primary border border-card transition-all hover:scale-110 active:scale-95 hover:bg-card-hover hover:shadow-card-hover-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.25,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            onClick={trackContactClick}
            data-contact="github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("githubButton")}
          >
            <SiGithub size={24} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/andrecbarros"
            className="flex items-center justify-center w-14 h-14 rounded-full cursor-pointer backdrop-blur-card bg-card text-primary border border-card transition-all hover:scale-110 active:scale-95 hover:bg-card-hover hover:shadow-card-hover-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.25,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            onClick={trackContactClick}
            data-contact="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("linkedinButton")}
          >
            <SiLinkedin size={24} />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
