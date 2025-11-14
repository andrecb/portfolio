"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function RootNotFound() {
  useEffect(() => {
    // Aplica o tema do localStorage ou preferência do sistema
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  return (
    <main
      className="p-4 container mx-auto min-h-screen flex flex-col items-center justify-center text-center"
      style={{
        color: "var(--text-color)",
      }}
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
          className="text-8xl md:text-9xl font-bold mb-4"
          style={{
            backgroundImage:
              "linear-gradient(to right, #60a5fa, #a78bfa, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </motion.h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ops! Página não encontrada
        </h2>

        <p className="text-lg font-light opacity-80 max-w-md mx-auto mb-8">
          Parece que essa página decidiu tirar férias! 😅 Mas não se preocupe,
          vamos te ajudar a voltar ao caminho certo.
        </p>

        <div>
          <Link href="/pt">
            <motion.button
              className="px-6 py-3 rounded-xl cursor-pointer backdrop-blur-sm font-semibold"
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
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 25,
                duration: 0.15,
              }}
            >
              Voltar para o início
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

