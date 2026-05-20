"use client";

import { motion } from "framer-motion";
import {
  Building,
  Calendar,
  ExternalLink,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Software Developer",
    company: "Panorama Management Advisory Services",
    companyUrl: "https://panoramamas.com/",
    type: "Hybrid",
    period: "Oct 2024 – Mar 2026",
    website: "https://panoramamas.com",
    gradient: "from-blue-500 to-purple-500",
    achievements: [
      "Built responsive, high-performing front-end features from the ground up using React.js, Next.js, and Tailwind CSS",
      "Architected and maintained the [[Panorama Assessment Tool|https://pansms.panoramamas.com/]], focusing heavily on smooth user workflows and overall product usability",
      "Collaborated directly with backend developers to define REST APIs, support server-side integrations, and actively monitor DevOps and backend deployment pipelines",
      "Authored Product Requirements Documents (PRDs) and planned continuous development cycles",
      "Co-developed AI-driven auditing tools capable of generating comprehensive, actionable company assessments and instant reports in just 1–2 hours",
      "Designed and deployed automated internal and external workflows using n8n to successfully scale the operations of the [[Panorama Assessment Tool|https://pansms.panoramamas.com/]]",
      "Wrote robust test cases and managed the feature release timeline to ensure stable and reliable deployments",
    ],
  },
  {
    title: "Software Associate",
    company: "Panorama Management Advisory Services",
    companyUrl: "https://panoramamas.com/",
    type: "Hybrid",
    period: "Mar 2024 – Oct 2024",
    website: "https://panoramamas.com",
    gradient: "from-emerald-500 to-teal-500",
    achievements: [
      "Executed comprehensive manual QA testing and bug tracking for front-end features, reducing post-deployment defects by 30%",
      "Created detailed Standard Operating Procedures (SOPs) and technical documentation to streamline daily development workflows and accelerate team onboarding",
      "Monitored website performance and user behavior using GTmetrix and Google Analytics to guide data-driven UI improvements",
    ],
  },
];

export default function ExperienceSection() {
  const isMobile = useIsMobile();

  return (
    <section className={`${isMobile ? "py-14" : "py-32"} relative`}>
      <div className='max-w-6xl mx-auto px-2 sm:px-4'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-10 sm:mb-20'
        >
          <motion.h2 className='text-2xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3 sm:mb-6'>
            Professional Journey
          </motion.h2>
          <motion.div
            className='w-14 sm:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6'
            initial={{ width: 0 }}
            whileInView={{ width: isMobile ? 56 : 128 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          />
          <motion.p
            className='text-base sm:text-xl text-white/70 max-w-3xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Building exceptional digital experiences across diverse projects and
            teams
          </motion.p>
        </motion.div>

        <div className='relative'>
          {/* Timeline Line */}
          <motion.div
            className='absolute left-3 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30'
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, delay: 0.35 }}
            viewport={{ once: true }}
            style={{ zIndex: 1 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: index * 0.13 }}
              viewport={{ once: true }}
              className={`relative mb-10 sm:mb-16 last:mb-0`}
              style={{ zIndex: 2 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute left-0 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r ${
                  exp.gradient
                } rounded-full border-4 border-white/20 shadow-md sm:shadow-2xl ${
                  isMobile ? "" : "backdrop-blur-sm"
                }`}
                whileHover={isMobile ? {} : { scale: 1.18, rotate: 180 }}
                transition={{ duration: 0.3 }}
                animate={
                  isMobile
                    ? {}
                    : {
                        boxShadow: [
                          "0 0 8px rgba(59, 130, 246, 0.2)",
                          "0 0 20px rgba(147, 51, 234, 0.3)",
                          "0 0 8px rgba(59, 130, 246, 0.2)",
                        ],
                      }
                }
              >
                <motion.div
                  className='absolute inset-1 bg-white rounded-full'
                  animate={{ scale: [1, 0.85, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Card */}
              <motion.div
                className={`ml-10 sm:ml-20 
  ${
    isMobile
      ? "bg-white/7 border border-white/10 rounded-2xl p-4 shadow-md"
      : "backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
  }
  group
`}
                whileHover={
                  isMobile
                    ? {}
                    : {
                        scale: 1.02,
                        y: -3,
                        backgroundColor: "rgba(255,255,255,0.08)",
                      }
                }
                transition={{ duration: 0.25 }}
              >
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6'>
                  <div className='mb-2 sm:mb-0'>
                    <motion.h3 className='text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2'>
                      {exp.title}
                    </motion.h3>
                    <div className='flex items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base'>
                      <Building className='h-4 w-4 sm:h-5 sm:w-5' />
                      <a
                        href={exp.companyUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-medium hover:text-blue-300 transition-colors duration-200 underline underline-offset-2 decoration-white/30 hover:decoration-blue-300'
                      >
                        {exp.company}
                      </a>
                      <span className='text-white/40'>•</span>
                      <span className='text-white/60'>{exp.type}</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-2 sm:gap-4'>
                    <div className='flex items-center gap-2 text-white/60 text-xs sm:text-sm'>
                      <Calendar className='h-4 w-4' />
                      <span>{exp.period}</span>
                    </div>
                    <motion.a
                      href={exp.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`p-1 sm:p-2 bg-gradient-to-r ${exp.gradient} rounded-lg sm:rounded-xl text-white shadow`}
                      whileHover={isMobile ? {} : { scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className='h-4 w-4' />
                    </motion.a>
                  </div>
                </div>

                <div className='grid gap-3 sm:gap-4'>
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: isMobile ? 0 : -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + achIndex * 0.08,
                      }}
                      viewport={{ once: true }}
                      className={`flex items-start gap-2 sm:gap-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 group/achievement`}
                      whileHover={
                        isMobile
                          ? {}
                          : { x: 5, backgroundColor: "rgba(255,255,255,0.08)" }
                      }
                    >
                      <motion.div
                        className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0 shadow`}
                        whileHover={isMobile ? {} : { scale: 1.15 }}
                        transition={{ duration: 0.2 }}
                        animate={
                          isMobile
                            ? {}
                            : {
                                boxShadow: [
                                  "0 0 6px rgba(59,130,246,0.18)",
                                  "0 0 14px rgba(147,51,234,0.18)",
                                  "0 0 6px rgba(59,130,246,0.18)",
                                ],
                              }
                        }
                      />
                      <span className='text-white/90 leading-relaxed group-hover/achievement:text-white transition-colors duration-200 text-xs sm:text-base'>
                        {achievement.split(/\[\[([^|\]]+)\|([^\]]+)\]\]/).map((part, i) =>
                          i % 3 === 1 ? (
                            <a
                              key={i}
                              href={achievement.split(/\[\[([^|\]]+)\|([^\]]+)\]\]/)[i + 1]}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-300 hover:text-blue-200 underline underline-offset-2 decoration-blue-400/50 hover:decoration-blue-300 transition-colors duration-200'
                              onClick={(e) => e.stopPropagation()}
                            >
                              {part}
                            </a>
                          ) : i % 3 === 2 ? null : part
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
