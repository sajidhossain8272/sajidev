"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Globe, Clock, Award, Users, Code, Target } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  {
    icon: Code,
    label: "Projects",
    value: "32+",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Users,
    label: "Clients",
    value: "25+",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Award,
    label: "Years",
    value: "3+",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: Target,
    label: "Success",
    value: "100%",
    color: "from-orange-400 to-red-400",
  },
];

export default function AboutSection() {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  return (
    <section className='relative py-20 sm:py-32'>
      {/* subtle section glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 opacity-50'
        style={{
          background:
            "radial-gradient(75% 40% at 50% 0%, rgba(56,189,248,0.14), transparent 60%)",
        }}
      />
      <div className='relative max-w-7xl mx-auto px-4'>
        {/* Header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          className='text-center mb-14 sm:mb-20'
        >
          <h2
            className='text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent
                       bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100'
          >
            About Me
          </h2>
          <div className='mx-auto mt-4 h-[3px] w-28 sm:w-36 rounded-full bg-gradient-to-r from-cyan-400/70 via-sky-400/70 to-blue-500/70' />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-12 sm:mb-20'>
          {/* Avatar */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            className='flex justify-center'
          >
            <div className='relative'>
              {/* soft neon ring */}
              <div
                aria-hidden='true'
                className={
                  isMobile
                    ? "absolute -inset-[1px] rounded-2xl opacity-50"
                    : "absolute -inset-[1px] rounded-3xl opacity-60"
                }
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(99,102,241,0.14), rgba(236,72,153,0.14))",
                  filter: "blur(0.4px)",
                }}
              />

              <div
                className={[
                  "relative bg-neutral-900/65 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
                  isMobile
                    ? "w-52 h-52 p-2 rounded-2xl"
                    : "w-96 h-96 p-4 rounded-3xl",
                ].join(" ")}
              >
                {/* quiet top highlight */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-x-0 -top-px h-16 rounded-t-[inherit] opacity-70'
                  style={{
                    background:
                      "radial-gradient(60% 100% at 50% 0%, rgba(56,189,248,0.16), transparent 70%)",
                  }}
                />
                {/* media slot */}
                <div className='relative w-full h-full rounded-[inherit] overflow-hidden'>
                  <AvatarImage
                    src='https://avatars.githubusercontent.com/u/85248510?v=4'
                    alt='Sajid Hossain'
                    isMobile={isMobile}
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + Info */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            className='space-y-7 sm:space-y-8'
          >
            <div className='backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl'>
              <p className='text-base sm:text-lg text-white/85 leading-relaxed mb-4 sm:mb-6'>
                Software Developer with{" "}
                <strong className='text-white'>3+ years</strong> of experience delivering
                responsive, SEO-friendly web applications using{" "}
                <strong className='text-blue-300'>React.js</strong>,{" "}
                <strong className='text-purple-300'>Next.js</strong>,{" "}
                <strong className='text-cyan-300'>TypeScript</strong>, and{" "}
                <strong className='text-emerald-300'>Tailwind CSS</strong>.
              </p>
              <p className='text-base sm:text-lg text-white/80 leading-relaxed'>
                Proven ability to improve performance, accessibility, and user experience while
                collaborating with cross-functional teams.
              </p>
            </div>

            {/* Quick facts */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                  color: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "text-blue-400",
                },
                {
                  icon: Globe,
                  label: "Languages",
                  value: "English, Bangla, Hindi",
                  color: "from-emerald-500/10 to-teal-500/10",
                  iconColor: "text-emerald-400",
                },
                {
                  icon: Clock,
                  label: "Experience",
                  value: "3+ years",
                  color: "from-purple-500/10 to-pink-500/10",
                  iconColor: "text-purple-400",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`backdrop-blur-lg bg-gradient-to-br ${item.color} border border-white/10 rounded-2xl p-4 sm:p-6 text-center shadow-xl`}
                  >
                    <Icon
                      className={`h-7 w-7 sm:h-8 sm:w-8 ${item.iconColor} mx-auto mb-2 sm:mb-3`}
                    />
                    <p className='font-semibold text-white'>{item.label}</p>
                    <p className='text-xs sm:text-sm text-white/70'>
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          className={`grid ${
            isMobile ? "grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
          } gap-4 sm:gap-8`}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`${
                  isMobile
                    ? "bg-white/5 border border-white/10 rounded-2xl p-4 text-center shadow-sm"
                    : "backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl group hidden md:block"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 sm:w-20 sm:h-20 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl mb-4 sm:mb-6`}
                >
                  <Icon className='h-7 w-7 sm:h-10 sm:w-10 text-white' />
                </div>
                <h3 className='text-xl sm:text-4xl font-bold text-white mb-1 sm:mb-2'>
                  {stat.value}
                </h3>
                <p className='text-xs sm:text-base text-white/70 font-medium'>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/** AvatarImage
 *  - Next/Image with blur-up placeholder (no pop-in)
 *  - Graceful fallback to initials if remote image fails
 *  - DPR-aware and responsive
 *
 *  If using LinkedIn images, add this to next.config.js once:
 *  images: { remotePatterns: [{ protocol: "https", hostname: "media.licdn.com" }] }
 */
function AvatarImage({
  src,
  alt,
  isMobile,
  priority = false,
}: {
  src: string;
  alt: string;
  isMobile: boolean;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  const blurDataURL =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzk1OTk5OSI vPjwvc3ZnPg==";

  if (failed) {
    return (
      <div className='flex items-center justify-center w-full h-full bg-neutral-800'>
        <span className='text-neutral-200 text-3xl font-semibold'>SH</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={
        isMobile
          ? "(max-width: 640px) 13rem"
          : "(min-width: 1024px) 24rem, 50vw"
      }
      style={{ objectFit: "cover", imageRendering: "auto" }}
      priority={priority}
      placeholder='blur'
      blurDataURL={blurDataURL}
      onError={() => setFailed(true)}
    />
  );
}
