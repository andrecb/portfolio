"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer relative overflow-hidden backdrop-blur-sm"
      style={{
        backgroundColor: "var(--card-background)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        backgroundColor: "var(--hover-background)",
        boxShadow: "0 4px 20px rgba(60, 9, 108, 0.2)",
        transition: { type: "spring", stiffness: 700, damping: 25, duration: 0.15 },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      transition={{ type: "spring", stiffness: 800, damping: 30, duration: 0.1 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
          transition={{
            duration: 0.1,
            ease: "easeOut",
          }}
        >
          {theme === "dark" ? (
            <Sun size={20} style={{ color: "var(--text-color)" }} />
          ) : (
            <Moon size={20} style={{ color: "var(--text-color)" }} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
