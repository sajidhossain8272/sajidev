"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

const EMAIL_ENDPOINT =
  "https://formsubmit.co/ajax/sajidhossain8272@gmail.com";

const PROJECT_TYPES = [
  "Web application",
  "SaaS product",
  "AI agent / automation",
  "E-commerce store",
  "Landing page / website",
  "Developer tool",
  "Something else",
];

const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

const TIMELINES = ["ASAP", "2 – 4 weeks", "1 – 2 months", "2+ months", "Flexible"];

const field =
  "w-full border border-[#e7e5e4] bg-white rounded-[10px] px-4 py-3 text-sm text-[#171717] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#171717] focus:ring-2 focus:ring-[#171717]/10 transition-colors";

const label =
  "block mb-2 text-[10px] font-semibold uppercase tracking-[.08em] text-[#737373]";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Comprehensive project inquiry form. Submissions are forwarded to the
 * owner's Gmail inbox through FormSubmit (no backend required).
 */
export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setError("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      payload[key] = String(value);
    });
    payload._subject = `New project inquiry from ${payload.name || "website visitor"}`;
    payload._template = "table";

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch(EMAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = (await response.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };

      if (!response.ok || json.success === false || json.success === "false") {
        throw new Error(json.message || "Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1100] flex items-center justify-center p-1 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Project inquiry form"
            className="bg-white border border-[#e7e5e4] shadow-2xl w-full max-w-3xl max-h-[calc(100vh-2rem)] relative overflow-hidden flex flex-col rounded-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#e7e5e4] shrink-0">
              <div>
                <h2 className="mt-0 mb-1 text-xl sm:text-2xl font-semibold text-[#171717]">
                  Project inquiry
                </h2>
                <p className="text-[#737373] text-sm">
                  Tell me about your project — I&apos;ll reply within 48 hours
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-[#737373] hover:text-[#171717] transition-colors p-2 rounded-xl hover:bg-[#f5f5f3]"
                aria-label="Close inquiry form"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7">
              {status === "success" ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 mx-auto text-[#16a34a]" />

                  <h3 className="mt-5 text-2xl font-semibold text-[#171717]">
                    Inquiry received
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm text-[#737373]">
                    Thanks for reaching out. I&apos;ll review your project
                    details and get back to you within 48 hours.
                  </p>

                  <button
                    type="button"
                    className="button button-primary mt-7"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  <div>
                    <label className={label} htmlFor="inquiry-name">
                      Name *
                    </label>
                    <input
                      id="inquiry-name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className={field}
                    />
                  </div>

                  <div>
                    <label className={label} htmlFor="inquiry-email">
                      Email *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className={field}
                    />
                  </div>

                  <div>
                    <label className={label} htmlFor="inquiry-company">
                      Company
                    </label>
                    <input
                      id="inquiry-company"
                      name="company"
                      placeholder="Company or brand (optional)"
                      className={field}
                    />
                  </div>

                  <div>
                    <label className={label} htmlFor="inquiry-type">
                      Project type *
                    </label>
                    <select
                      id="inquiry-type"
                      name="projectType"
                      required
                      defaultValue=""
                      className={field}
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      {PROJECT_TYPES.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={label} htmlFor="inquiry-budget">
                      Budget *
                    </label>
                    <select
                      id="inquiry-budget"
                      name="budget"
                      required
                      defaultValue=""
                      className={field}
                    >
                      <option value="" disabled>
                        Select a budget range
                      </option>
                      {BUDGETS.map(budget => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={label} htmlFor="inquiry-timeline">
                      Timeline *
                    </label>
                    <select
                      id="inquiry-timeline"
                      name="timeline"
                      required
                      defaultValue=""
                      className={field}
                    >
                      <option value="" disabled>
                        Select a timeline
                      </option>
                      {TIMELINES.map(timeline => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="inquiry-message">
                      Project details *
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Goals, scope, links, deadlines — anything useful."
                      className={`${field} resize-y min-h-32`}
                    />
                  </div>

                  {status === "error" && (
                    <div className="sm:col-span-2 rounded-[10px] border border-[#fca5a5] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]">
                      Something went wrong sending your inquiry
                      {error ? ` (${error})` : ""}.{" "}
                      <a
                        className="font-semibold underline"
                        href="mailto:sajidhossain8272@gmail.com?subject=Project%20inquiry"
                      >
                        Email me directly
                      </a>{" "}
                      instead.
                    </div>
                  )}

                  <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="button button-primary disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send inquiry
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <span className="text-xs text-[#a3a3a3]">
                      Delivered straight to my inbox — no spam, no lists.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}