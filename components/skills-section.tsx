"use client";

import { motion } from "framer-motion";
import { Code, Palette, Server, Database, Globe, Zap } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const skillsData = {
  frontend: {
    icon: Code,
    title: "Frontend Development",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
  },
  styling: {
    icon: Palette,
    title: "Design & Styling",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
      "UI/UX Design",
      "Figma",
      "Glassmorphism",
    ],
  },
  backend: {
    icon: Server,
    title: "Backend & APIs",
    gradient: "from-emerald-500 to-teal-500",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Firebase",
      "Supabase",
    ],
  },
  database: {
    icon: Database,
    title: "Database & Cloud",
    gradient: "from-orange-500 to-red-500",
    skills: [
      "MongoDB",
      "Prisma DB",
      "PostgreSQL",
      "Cloudinary",
      "Firebase",
      "MySQL",
    ],
  },
  tools: {
    icon: Zap,
    title: "Tools & Performance",
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      "Git",
      "Postman",
      "Google Analytics",
      "GTmetrix",
      "Meta Pixel",
      "SEO Optimization",
    ],
  },
  web3: {
    icon: Globe,
    title: "Web3, AI & Automation",
    gradient: "from-pink-500 to-rose-500",
    skills: [
      "Google AI Studio",
      "n8n Automation",
      "Codex",
      "Gemini AI",
      "Web3.js",
      "Smart Contracts",
    ],
  },
};

const skills = [
  "Attention to Detail",
  "Problem Solving",
  "User-Centered Design",
  "Agile Collaboration",
  "Time Management",
  "Fast Learning",
  "Remote Work",
  "Project Management",
  "Client Relations",
  "Technical Writing",
];

export function SoftSkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();
  const collapsedCount = isMobile ? 4 : 6;
  const visibleSkills = showAll ? skills : skills.slice(0, collapsedCount);

  return (
    <section className='relative '>
      {/* Container to stop full-width stretch */}
      <div className='max-w-5xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='relative'
        >
          {/* Card */}
          <div
            className={`relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl ${
              isMobile ? "p-4 shadow-md" : "p-8 shadow-2xl backdrop-blur-xl"
            } h-full flex flex-col`}
          >
            {/* Title */}
            <motion.h3 className='text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 text-center mb-2 sm:mb-3'>
              Soft Skills & Expertise
            </motion.h3>

            <p className='text-white/80 text-center mb-5 sm:mb-7 text-base sm:text-lg font-medium'>
              Skills that drive my collaborative, high-impact approach to
              software development and project delivery.
            </p>

            {/* Pills */}
            <div
              className={`grid grid-cols-2 ${
                isMobile ? "gap-2" : "sm:grid-cols-3 gap-3"
              } pb-1 justify-center`}
            >
              {visibleSkills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  className={`
                    px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-white/10 to-white/5
                    backdrop-blur-sm border border-white/20 rounded-2xl text-white/90
                    font-medium text-xs sm:text-base transition-transform duration-300
                    cursor-default min-w-[88px] sm:min-w-[110px] text-center whitespace-nowrap
                    ${
                      isMobile
                        ? ""
                        : "hover:shadow-[0_0_20px_rgba(255,255,255,0.18)]"
                    }
                    relative
                  `}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.02 }}
                  whileHover={isMobile ? {} : { scale: 1.09, y: -2 }}
                >
                  {skill}
                  <span
                    className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-white/5 to-pink-400/10 blur-sm opacity-20 pointer-events-none'
                    aria-hidden='true'
                  />
                </motion.span>
              ))}
            </div>

            {/* Show more/less */}
            {skills.length > collapsedCount && (
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className='block px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500/20 to-pink-400/20 text-white/80 font-semibold rounded-2xl border border-white/20 mx-auto mt-3 sm:mt-4 text-xs sm:text-base transition hover:scale-105'
                style={{ minWidth: isMobile ? "88px" : "110px" }}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}

            {/* Glow (parent is now relative) */}
            <motion.div
              className='pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-white/5 to-pink-500/10 blur-xl opacity-10 sm:opacity-30'
              aria-hidden='true'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SkillsSection() {
  const isMobile = useIsMobile();

  return (
    <section className={`py-12 sm:py-32 relative`}>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-8 sm:mb-20'
        >
          <motion.h2 className='text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3 sm:mb-6'>
            Skills & Technologies
          </motion.h2>
          <motion.div
            className='w-20 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6'
            initial={{ width: 0 }}
            whileInView={{ width: isMobile ? 80 : 128 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className='text-base sm:text-xl text-white/70 max-w-3xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Crafting digital experiences with cutting-edge technologies and
            modern development practices
          </motion.p>
        </motion.div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8`}
        >
          {Object.entries(skillsData).map(([key, category], categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className='group h-full'
              >
                <motion.div
                  className={`bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl shadow-md sm:shadow-2xl h-full flex flex-col ${
                    isMobile ? "p-4" : "p-8"
                  } ${isMobile ? "" : "backdrop-blur-md"}`}
                  whileHover={
                    isMobile
                      ? {}
                      : {
                          scale: 1.03,
                          y: -10,
                          backgroundColor: "rgba(255,255,255,0.08)",
                        }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r ${
                      category.gradient
                    } rounded-xl sm:rounded-2xl mb-6 sm:mb-8 mx-auto shadow ${
                      isMobile ? "" : "group-hover:shadow-2xl"
                    }`}
                  >
                    <IconComponent className='h-7 w-7 sm:h-10 sm:w-10 text-white' />
                  </div>
                  <motion.h3 className='text-lg sm:text-2xl font-bold text-white text-center mb-3 sm:mb-8 min-h-[2.5rem] sm:min-h-[4rem] flex items-center justify-center'>
                    {category.title}
                  </motion.h3>
                  <div className={`grid grid-cols-2 gap-2 sm:gap-3 flex-1`}>
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`px-2 py-1 sm:px-3 sm:py-2 bg-white/5 ${
                          isMobile ? "" : "backdrop-blur-sm"
                        } border border-white/10 rounded-lg sm:rounded-xl text-white/90 font-medium text-xs sm:text-sm text-center cursor-default`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
