"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    // biome-ignore lint/complexity/noBannedTypes: dataLayer type is defined by @next/third-parties
    dataLayer?: Object[];
  }
}

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const t = useTranslations();

  const phoneNumber = "5512991843391";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá, gostaria de conversar sobre uma ideia!")}`;

  const trackWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const contactType = event.currentTarget.getAttribute("data-contact");
    if (contactType && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "contact_click", {
        contact_type: contactType,
      });
    }
  };

  return (
    <motion.a
      href={whatsappUrl}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full cursor-pointer shadow-2xl bg-[#25D366] text-white transition-all hover:scale-110 active:scale-95 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onClick={trackWhatsAppClick}
      data-contact="whatsapp-floating"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsappButton")}
    >
      {/* Efeito de pulso - usando animação customizada mais lenta */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-slow opacity-75" />
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-slow-delayed opacity-50" />

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
