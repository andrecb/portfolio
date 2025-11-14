"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

import { motion } from "framer-motion";
import { Code, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  SiCss3,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWhatsapp,
} from "react-icons/si";
import Header from "@/components/Header";

export default function Home() {
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
    <main className="p-4 container mx-auto min-h-screen">
      <Header />

      <motion.section
        className="py-6 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-6xl mx-auto"
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
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl"
            style={{
              boxShadow:
                "0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(60, 9, 108, 0.2)",
            }}
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 700,
                damping: 25,
                duration: 0.15,
              },
            }}
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
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #60a5fa, #a78bfa, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
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

      {/* Seção de Tecnologias */}
      <motion.section
        className="py-6 px-4 md:px-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.25 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #60a5fa, #a78bfa, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.25 }}
          >
            {t("technologiesTitle")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.25 }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-8 text-center md:text-left">
                {t("frontend")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Next.js", icon: SiNextdotjs },
                  { name: "React", icon: SiReact },
                  { name: "TypeScript", icon: SiTypescript },
                  { name: "Tailwind CSS", icon: SiTailwindcss },
                  { name: "JavaScript", icon: SiJavascript },
                  { name: "HTML", icon: SiHtml5 },
                  { name: "CSS", icon: SiCss3 },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-lg cursor-pointer relative overflow-hidden backdrop-blur-sm"
                    style={{
                      backgroundColor: "var(--card-background)",
                      color: "var(--text-color)",
                      border: "1px solid var(--card-border)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.05,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      backgroundColor: "var(--hover-background)",
                      boxShadow: "0 8px 30px rgba(60, 9, 108, 0.2)",
                      transition: {
                        type: "spring",
                        stiffness: 700,
                        damping: 25,
                        duration: 0.15,
                      },
                    }}
                    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  >
                    <div className="relative z-10">
                      <tech.icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-center relative z-10">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.25 }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-8 text-center md:text-left">
                {t("backend")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "NestJS", icon: SiNestjs },
                  { name: "Node.js", icon: SiNodedotjs },
                  { name: "Prisma", icon: SiPrisma },
                  { name: "PostgreSQL", icon: SiPostgresql },
                  { name: "Docker", icon: SiDocker },
                  { name: "REST API", icon: Code },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-lg cursor-pointer relative overflow-hidden backdrop-blur-sm"
                    style={{
                      backgroundColor: "var(--card-background)",
                      color: "var(--text-color)",
                      border: "1px solid var(--card-border)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.85 + index * 0.05,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      backgroundColor: "var(--hover-background)",
                      boxShadow: "0 8px 30px rgba(60, 9, 108, 0.2)",
                      transition: {
                        type: "spring",
                        stiffness: 700,
                        damping: 25,
                        duration: 0.15,
                      },
                    }}
                    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  >
                    <div className="relative z-10">
                      <tech.icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-center relative z-10">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-6 px-4 md:px-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.25 }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #60a5fa, #a78bfa, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
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
              className="flex items-center gap-4 px-6 py-5 rounded-xl cursor-pointer backdrop-blur-sm"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-color)",
                border: "1px solid var(--card-border)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.3,
                duration: 0.25,
                type: "spring",
                stiffness: 400,
                damping: 17,
                default: {
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  duration: 0.1,
                },
              }}
              whileHover={{
                scale: 1.02,
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
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              onClick={trackContactClick}
              data-contact="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <SiWhatsapp size={24} style={{ color: "#25D366" }} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">{t("whatsapp")}</span>
                <span className="text-sm opacity-70">{t("phoneNumber")}</span>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contato@andrebarros.dev"
              className="flex items-center gap-4 px-6 py-5 rounded-xl cursor-pointer backdrop-blur-sm"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-color)",
                border: "1px solid var(--card-border)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.4,
                duration: 0.25,
                type: "spring",
                stiffness: 400,
                damping: 17,
                default: {
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  duration: 0.1,
                },
              }}
              whileHover={{
                scale: 1.02,
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
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              onClick={trackContactClick}
              data-contact="email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Mail size={24} style={{ color: "#4285F4" }} />
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
              className="flex items-center justify-center w-14 h-14 rounded-full cursor-pointer backdrop-blur-sm"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-color)",
                border: "1px solid var(--card-border)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.25,
                type: "spring",
                stiffness: 400,
                damping: 17,
                default: {
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  duration: 0.1,
                },
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--hover-background)",
                boxShadow: "0 8px 30px rgba(60, 9, 108, 0.2)",
                transition: {
                  type: "spring",
                  stiffness: 700,
                  damping: 25,
                  duration: 0.15,
                },
              }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
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
              className="flex items-center justify-center w-14 h-14 rounded-full cursor-pointer backdrop-blur-sm"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-color)",
                border: "1px solid var(--card-border)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6,
                duration: 0.25,
                type: "spring",
                stiffness: 400,
                damping: 17,
                default: {
                  type: "spring",
                  stiffness: 800,
                  damping: 30,
                  duration: 0.1,
                },
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--hover-background)",
                boxShadow: "0 8px 30px rgba(60, 9, 108, 0.2)",
                transition: {
                  type: "spring",
                  stiffness: 700,
                  damping: 25,
                  duration: 0.15,
                },
              }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
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

      {/* Rodapé */}
      <motion.footer
        className="py-6 px-4 md:px-8 mt-12"
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
    </main>
  );
}
