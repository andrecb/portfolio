"use client";

import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { useTranslations } from "next-intl";

export default function WhatsAppButton() {
  const t = useTranslations();

  const phoneNumber = "5512991843391";
  const message = t("whatsappButton");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá, gostaria de conversar sobre uma ideia!")}`;

  return (
    <motion.a
      href={whatsappUrl}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full cursor-pointer shadow-2xl"
      style={{
        backgroundColor: "#25D366",
        color: "#ffffff",
        transition: "all 0.1s ease-out",
      }}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 8px 30px rgba(37, 211, 102, 0.4)",
        transition: { type: "spring", stiffness: 700, damping: 25, duration: 0.15 },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsappButton")}
    >
      {/* Efeito de pulso */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: "#25D366",
        }}
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.7, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: "#25D366",
        }}
        animate={{
          scale: [1, 1.3, 1.3],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
      
      {/* Ícone */}
      <motion.div
        className="relative z-10"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <SiWhatsapp size={32} />
      </motion.div>
    </motion.a>
  );
}

