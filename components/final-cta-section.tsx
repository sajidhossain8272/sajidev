"use client";

import { useState } from "react";
import InquiryModal from "./inquiry-modal";

export default function FinalCtaSection() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

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
            onClick={() => setInquiryOpen(true)}
          >
            Start a project inquiry
            <span>↗</span>
          </button>

          <span className="cta-note">Replies within 48 hours</span>
        </div>
      </div>

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </section>
  );
}