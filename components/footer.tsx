"use client";

import Image from "next/image";
import { useBooking } from "./calendly-context";

const MENU_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/sajidhossain8272", label: "GitHub" },
  { href: "https://linkedin.com/in/brokephilanthropist", label: "LinkedIn" },
  { href: "https://sajid-hossain-resume.vercel.app/", label: "Resume" },
  { href: "https://www.youtube.com/@agentbroko", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { openBooking } = useBooking();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-big-head">
          <Image
            className="brand-avatar"
            src="/Professional%20Circular%20Green%20Avatar.png"
            alt="Sajid Hossain"
            width={34}
            height={34}
          />

          <div className="footer-col">
            <span className="footer-col-title">Menu</span>

            <nav className="footer-col-links">
              {MENU_LINKS.map(link => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Elsewhere</span>

            <nav className="footer-col-links">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col footer-col-cta">
            <span className="footer-col-title">Have an idea?</span>

            <button
              type="button"
              className="button button-primary"
              onClick={openBooking}
            >
              Book a meeting
              <span>↗</span>
            </button>

            <span className="footer-col-note">1:1 on Google Meet</span>
          </div>
        </div>

        <p className="footer-giant">
          Sajid <span>Hossain.</span>
        </p>

        <div className="footer-bottom">
          <span>© {year} Sajid Hossain</span>
          <span>Built with code, curiosity &amp; AI.</span>
        </div>
      </div>
    </footer>
  );
}