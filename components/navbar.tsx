"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type NavLink = { href: string; label: string };

const LINKS: readonly NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#offer", label: "Why Me?" },
  { href: "#consultation", label: "Consultation" },
  { href: "#contact", label: "Contact" },
] as const;

const DESKTOP_LINKS: readonly string[] = [
  "#hero",
  "#about",
  "#projects",
  "#offer",
  "#contact",
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [open]);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sajid_Hossain_Resume_2025.pdf";
    link.download = "Sajid_Hossain_Resume_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50",
        "border-b transition-colors duration-300",
        "backdrop-blur-xl",
        scrolled
          ? "bg-black/50 border-white/10"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <nav className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="#hero" className="group inline-flex items-center gap-2">
            <motion.span
              className="relative font-bold tracking-tight text-white text-lg"
              initial={false}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Sajid
              </span>
              <span className="text-white/60">.dev</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </motion.span>
            <motion.span
              className="text-white/70"
              whileHover={{ rotate: 25, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              aria-hidden="true"
            >
              <Sparkles size={16} />
            </motion.span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          {LINKS.filter((l) => DESKTOP_LINKS.includes(l.href)).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-base text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: Buttons + Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={handleResumeDownload}
              size="sm"
              className="border border-white/20 bg-white/10 text-white hover:bg-white/20 rounded-2xl font-semibold flex items-center gap-2"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
            >
              <a
                href="https://calendly.com/sajidhossain8272/broke-innovation-mentor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3 grid gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setOpen(false);
                handleResumeDownload();
              }}
              className="mt-1 border border-white/20 bg-white/10 text-white hover:bg-white/20 rounded-2xl font-semibold flex items-center gap-2"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
            <Button
              asChild
              className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
            >
              <a
                href="https://calendly.com/sajidhossain8272/broke-innovation-mentor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
