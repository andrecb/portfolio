"use client";

import { motion } from "framer-motion";
import { Code, GitBranch, Palette } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  SiAxios,
  SiCss3,
  SiCypress,
  SiDocker,
  SiFigma,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJson,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiZod,
} from "react-icons/si";

interface Technology {
  name: string;
  icon?: React.ComponentType<{ size?: number }>;
}

const frontendTechnologies: Technology[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React.js", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "SASS", icon: SiSass },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Nuxt.js", icon: SiNuxtdotjs },
  { name: "Vite", icon: SiVite },
  { name: "Redux", icon: SiRedux },
  { name: "Zustand" },
  { name: "MaterialUI", icon: SiMui },
  { name: "ShadCN", icon: SiShadcnui },
  { name: "React Hook Form", icon: SiReacthookform },
  { name: "Axios", icon: SiAxios },
];

const backendTechnologies: Technology[] = [
  { name: "Nest.js", icon: SiNestjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "REST API", icon: Code },
  { name: "Zod", icon: SiZod },
  { name: "JSON", icon: SiJson },
];

const testingTechnologies: Technology[] = [
  { name: "Jest", icon: SiJest },
  { name: "Cypress", icon: SiCypress },
];

const devopsTechnologies: Technology[] = [
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: SiGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "CI/CD", icon: GitBranch },
];

const designTechnologies: Technology[] = [
  { name: "UI/UX", icon: Palette },
  { name: "Figma", icon: SiFigma },
];

interface TechnologyCategoryProps {
  title: string;
  technologies: Technology[];
  delay: number;
}

function TechnologyCategory({
  title,
  technologies,
  delay,
}: TechnologyCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.25 }}
    >
      <h3 className="text-lg md:text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 auto-rows-fr">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="flex"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: delay + 0.1 + index * 0.03,
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="flex flex-col items-center justify-center gap-2 px-3 py-4 rounded-lg cursor-pointer backdrop-blur-card bg-card text-primary border border-card transition-all hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] hover:bg-card-hover hover:shadow-card-hover w-full h-full">
                {IconComponent ? (
                  <div className="shrink-0 h-7 flex items-center justify-center">
                    <IconComponent size={28} />
                  </div>
                ) : null}
                <span className="text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function TechnologiesSection() {
  const t = useTranslations();

  return (
    <motion.section
      className="py-12 md:py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.25 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 bg-linear-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.25 }}
        >
          {t("technologiesTitle")}
        </motion.h2>

        <div className="space-y-8">
          <TechnologyCategory
            title={t("frontend")}
            technologies={frontendTechnologies}
            delay={0.45}
          />
          <TechnologyCategory
            title={t("backend")}
            technologies={backendTechnologies}
            delay={0.5}
          />
          <TechnologyCategory
            title={t("devops")}
            technologies={devopsTechnologies}
            delay={0.55}
          />
          <TechnologyCategory
            title={t("testing")}
            technologies={testingTechnologies}
            delay={0.6}
          />
          <TechnologyCategory
            title={t("design")}
            technologies={designTechnologies}
            delay={0.65}
          />
        </div>
      </div>
    </motion.section>
  );
}
