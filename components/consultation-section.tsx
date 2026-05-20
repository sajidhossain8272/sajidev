"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Video,
  MessageSquare,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import CalendlyModal from "./calendly-modal";
import { useIsMobile } from "@/hooks/use-mobile";

const consultationFeatures = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Usually respond within few minutes",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Video,
    title: "Free Consultation",
    description: "30-minute free consultation call",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose a time that works for you",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick project delivery",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Work closely with your team",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Regular updates and feedback",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ConsultationSection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section className={isMobile ? "py-14 relative" : "py-32 relative"}>
      {/* BG Orbs */}
      <div className='absolute inset-0 pointer-events-none select-none'>
        {!isMobile && (
          <>
            <motion.div
              className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl'
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </div>

      <div className='max-w-6xl mx-auto px-2 sm:px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className='text-center mb-10 sm:mb-20'
        >
          <motion.h2 className='text-2xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3 sm:mb-6'>
            Ready to Start Your Project?
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
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's connect for a quick call or project discussion! I'm here to
            help bring your ideas to life with modern web technologies.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div
          className={`${
            isMobile
              ? "grid-cols-2 gap-3 mb-8"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          } grid`}
        >
          {consultationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className={`bg-white/8 border border-white/10 group
  ${
    isMobile
      ? "shadow-md rounded-xl p-4"
      : "backdrop-blur-xl shadow-2xl rounded-2xl p-6"
  }
`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={
                  isMobile
                    ? {}
                    : {
                        scale: 1.05,
                        y: -5,
                        backgroundColor: "rgba(255,255,255,0.08)",
                      }
                }
              >
                <motion.div
                  className={`inline-flex items-center justify-center ${
                    isMobile ? "w-10 h-10 mb-3" : "w-14 h-14 mb-4"
                  } bg-gradient-to-r ${
                    feature.gradient
                  } rounded-lg sm:rounded-xl shadow`}
                  whileHover={isMobile ? {} : { rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent
                    className={`${isMobile ? "h-5 w-5" : "h-7 w-7"} text-white`}
                  />
                </motion.div>
                <h3
                  className={`font-bold text-white mb-1 ${
                    isMobile ? "text-base" : "text-lg"
                  } group-hover:text-blue-100 transition-colors duration-200`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-white/70 ${
                    isMobile ? "text-xs" : "text-sm"
                  } group-hover:text-white/80 transition-colors duration-200`}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <motion.div
            className={`
    ${
      isMobile
        ? "backdrop-blur-md p-6 rounded-xl shadow-md"
        : "backdrop-blur-2xl p-12 rounded-3xl shadow-2xl"
    }
    relative overflow-hidden border border-white/20 mx-auto
  `}
            style={{
              background:
                "linear-gradient(135deg, rgba(30,30,60,0.9) 0%, rgba(45,15,75,0.9) 100%)",
            }}
            whileHover={
              isMobile
                ? {}
                : {
                    scale: 1.02,
                    boxShadow: "0px 0px 40px rgba(120,60,255,0.3)",
                  }
            }
            transition={{ duration: 0.4 }}
          >
            {/* Glow Overlay */}
            <div className='absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-transparent pointer-events-none' />

            {/* Decorative Blurred Glow */}
            <div className='absolute -top-16 -left-16 w-64 h-64 bg-purple-600/30 blur-3xl rounded-full' />
            <div className='absolute -bottom-16 -right-16 w-64 h-64 bg-blue-500/30 blur-3xl rounded-full' />

            {/* Icon */}
            <motion.div
              className='mb-6 sm:mb-8 relative z-10'
              animate={
                !isMobile
                  ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }
                  : undefined
              }
              transition={
                !isMobile
                  ? {
                      rotate: { duration: 4, repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity },
                    }
                  : undefined
              }
            >
              <div className={`inline-flex items-center justify-center ${isMobile ? "w-14 h-14" : "w-20 h-20"} bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl shadow-2xl`}>
                <Sparkles className={`${isMobile ? "h-8 w-8" : "h-10 w-10"} text-white`} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              className={`font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 ${
                isMobile ? "text-xl" : "text-4xl"
              } relative z-10`}
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Let's Build Something Amazing Together
            </motion.h3>

            {/* Description */}
            <motion.p
              className={`text-white/80 mb-5 sm:mb-8 max-w-xl mx-auto ${
                isMobile ? "text-sm" : "text-lg"
              } relative z-10`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Whether you need a complete web application, performance
              optimization, or just want to discuss your ideas, let's create
              something exceptional that makes an impact.
            </motion.p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10'>
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.05, y: -3 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size={isMobile ? "sm" : "lg"}
                  className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg border-0'
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  <Calendar className='mr-2 h-5 w-5' />
                  Book Free Consultation
                </Button>
              </motion.div>

              <motion.div
                whileHover={isMobile ? {} : { scale: 1.05, y: -3 }}
                whileTap={isMobile ? {} : { scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size={isMobile ? "sm" : "lg"}
                  className='bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg'
                  onClick={() =>
                    window.open("mailto:sajidhossain8272@gmail.com", "_blank")
                  }
                >
                  <MessageSquare className='mr-2 h-5 w-5' />
                  Send Email
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </section>
  );
}
