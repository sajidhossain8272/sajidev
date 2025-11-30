"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    title: "GrafiXr",
    tag: "Digital Agency Portfolio",
    description:
      "A sophisticated portfolio platform designed for creative agencies featuring custom admin panel, dynamic project management, and advanced SEO optimization with modern glassmorphism design.",
    stack: [
      "React.js",
      "Next.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
      "SEO",
    ],
    liveUrl: "https://grafixr.com",
    image: "https://grafixr.com/og-image.png",
    icon: Sparkles,
    gradient: "from-blue-500 to-purple-500",
    period: "Mar 2025 – Aug 2025",
  },
  {
    title: "Quick Convert",
    tag: "Image Conversion Tool",
    description:
      "A secure, privacy-first in-browser image conversion utility built with modern React architecture, focusing on performance, accessibility, and user experience with zero server dependency.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Web APIs"],
    liveUrl: "https://quick-convert-img.vercel.app/",
    image: "https://quick-convert-img.vercel.app/og-image.png",
    icon: Zap,
    gradient: "from-emerald-500 to-teal-500",
    period: "Mar 2025",
  },
  {
    title: "Airdrop Infinity",
    tag: "Web3 Airdrop Tracker",
    description:
      "A comprehensive crypto airdrop discovery platform with AI-powered content automation, real-time tracking, automated social media publishing, and advanced Web3 integrations.",
    stack: ["Web3", "REST API", "Gemini AI", "Automation", "MongoDB", "n8n"],
    liveUrl: "https://airdrop-infinity.vercel.app",
    image: "https://airdrop-infinity.vercel.app/og-image.png",
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
    period: "Nov 2024 – July 2025",
  },
];

export default function ProjectsSection() {
  const isMobile = useIsMobile();

  return (
    <section className={` relative`}>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-10 sm:mb-20'
        >
          <motion.h2
            className='text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6'
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
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
            Showcasing innovative solutions and cutting-edge web applications
            built with modern technologies
          </motion.p>
        </motion.div>

        <div
          className={`grid grid-cols-1 ${
            isMobile ? "" : "lg:grid-cols-3"
          } gap-7 sm:gap-8`}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className='group h-full'
              >
                <motion.div
                  className={`
                    bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-full flex flex-col
                    ${isMobile ? "backdrop-blur-sm" : "backdrop-blur-xl"}
                  `}
                  whileHover={
                    isMobile
                      ? {}
                      : {
                          scale: 1.02,
                          y: -10,
                          backgroundColor: "rgba(255,255,255,0.08)",
                        }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isMobile ? "h-52" : "h-64"
                    }`}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover'
                      loading='lazy'
                      style={
                        isMobile
                          ? { borderRadius: "0.75rem" }
                          : { borderRadius: "1.5rem" }
                      }
                      whileHover={isMobile ? {} : { scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.currentTarget.src =
                          "/placeholder.svg?height=300&width=500";
                      }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    {/* Floating icon: only on desktop */}
                    {!isMobile && (
                      <motion.div
                        className={`w-full bg-gradient-to-r ${
                          project.gradient
                        } hover:opacity-90 text-white font-semibold py-3 rounded-xl border-0 ${
                          isMobile ? "shadow" : "shadow-xl"
                        }`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        animate={{
                          boxShadow: [
                            "0 10px 30px rgba(0,0,0,0.3)",
                            "0 20px 40px rgba(0,0,0,0.4)",
                            "0 10px 30px rgba(0,0,0,0.3)",
                          ],
                        }}
                      >
                        <IconComponent className='h-6 w-6 text-white' />
                      </motion.div>
                    )}
                    {/* Overlay buttons: always visible on mobile */}
                    {isMobile && (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <Button
                          size='default'
                          className='bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className='h-5 w-5 mr-2' />
                          View Live
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className={`p-4 sm:p-8 flex-1 flex flex-col`}>
                    <div className='flex items-center justify-between mb-2 sm:mb-4'>
                      <h3 className='text-xl sm:text-2xl font-bold text-white'>
                        {project.title}
                      </h3>
                      <span
                        className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full font-medium`}
                      >
                        {project.tag}
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-white/60 text-xs sm:text-sm mb-2 sm:mb-4'>
                      <Calendar className='h-4 w-4' />
                      <span>{project.period}</span>
                    </div>
                    <p className='text-white/80 text-xs sm:text-sm mb-3 sm:mb-6 leading-relaxed flex-1'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6'>
                      {project.stack.map((tech) => (
                        <motion.span
                          key={tech}
                          className='px-2 sm:px-3 py-1 bg-white/10 border border-white/20 text-white/90 text-xs rounded-lg font-medium'
                          whileHover={isMobile ? {} : { scale: 1.05, y: -1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Button: always visible, touch-friendly */}
                    <motion.div
                      whileHover={isMobile ? {} : { scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-xl border-0`}
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className='h-4 w-4 mr-2' />
                        Visit Live Site
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
<motion.div
  className="mt-8 rounded-lg bg-white/5 border border-white/10 p-4 sm:p-5 max-w-4xl mx-auto backdrop-blur-sm shadow-lg"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <p className="text-xs sm:text-sm text-white/80 leading-relaxed text-center">
    ⚠️ Some project live links may not work in your region.{" "}
    <span className="block sm:inline">
      You can still view full details & source code on my{" "}
      <a
        href="https://github.com/sajidhossain8272"
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-medium text-blue-400 hover:text-blue-300 transition-colors"
      >
        GitHub profile
      </a>
      .
    </span>
  </p>
</motion.div>


      </div>
    </section>
  );
}
