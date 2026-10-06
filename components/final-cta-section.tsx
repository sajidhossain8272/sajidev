"use client";

import { useBooking } from "./calendly-context";

export default function FinalCtaSection() {
  const { openBooking } = useBooking();

  return (
    <section className="final-cta section container" id="contact">
      <div className="cta-card reveal">
        <div className="cta-content">
          <span className="cta-eyebrow">Have an idea?</span>

          <h2>Let&apos;s build <span>something useful.</span></h2>

          <p>
            Whether you&apos;re building an AI product, SaaS platform,
            automation system or something that doesn&apos;t fit neatly
            into a category, I&apos;m interested in solving difficult
            problems with practical technology.
          </p>
        </div>

        <div className="cta-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={openBooking}
          >
            Book a meeting
            <span>↗</span>
          </button>

          <span className="cta-note">1:1 on Google Meet</span>
        </div>
      </div>
    </section>
  );
}