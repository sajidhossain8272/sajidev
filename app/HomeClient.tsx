"use client";

import { useEffect } from "react";

import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import WorkSection from "@/components/work-section";
import AiSection from "@/components/ai-section";
import CapabilitiesSection from "@/components/capabilities-section";
import ExperienceSection from "@/components/experience-section";
import PhilosophySection from "@/components/philosophy-section";
import AboutSection from "@/components/about-section";
import FinalCtaSection from "@/components/final-cta-section";
import Footer from "@/components/footer";
import { CalendlyProvider } from "@/components/calendly-context";

export default function HomeClient() {
  // Scroll reveal + project card micro-interaction
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (typeof IntersectionObserver === "undefined") {
      revealElements.forEach(element => element.classList.add("visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    revealElements.forEach(element => revealObserver.observe(element));

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".project-card")
    );

    const onEnter = (event: Event) => {
      (event.currentTarget as HTMLElement).style.willChange = "transform";
    };

    const onLeave = (event: Event) => {
      (event.currentTarget as HTMLElement).style.willChange = "auto";
    };

    cards.forEach(card => {
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      revealObserver.disconnect();
      cards.forEach(card => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <CalendlyProvider>
      <SiteHeader />

      <main>
        <HeroSection />
        <IntroSection />
        <WorkSection />
        <AiSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <PhilosophySection />
        <AboutSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </CalendlyProvider>
  );
}