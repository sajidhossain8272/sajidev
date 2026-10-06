"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useBooking } from "./calendly-context";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
] as const;

export default function SiteHeader() {
  const { openBooking } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Compact header while scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section in view
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections =
      document.querySelectorAll<HTMLElement>("main section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          setActive(`#${entry.target.id}`);
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  // Close the mobile menu on Escape
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <nav className="nav container">
        <a href="#home" className="brand" aria-label="Sajid Hossain home">
          <Image
            className="brand-avatar"
            src="/Professional%20Circular%20Green%20Avatar.png"
            alt="Sajid Hossain"
            width={34}
            height={34}
            priority
          />
          <span className="brand-name">Sajid Hossain</span>
        </a>

        <div
          className={menuOpen ? "nav-links open" : "nav-links"}
          id="navLinks"
        >
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="https://www.fiverr.com/s/2ppGxAQ"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-fiverr"
          >
            Fiverr
            <span>↗</span>
          </a>

          <button type="button" className="nav-cta" onClick={openBooking}>
            Let&apos;s talk
            <span>↗</span>
          </button>
        </div>

        <button
          type="button"
          className={
            menuOpen ? "mobile-menu-button open" : "mobile-menu-button"
          }
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
        </button>
      </nav>
    </header>
  );
}