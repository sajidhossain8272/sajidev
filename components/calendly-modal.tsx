"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile"; // optional

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false; // fallback for mobile

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      // If script not present, add Calendly widget script once per page
      if (
        !scriptLoadedRef.current &&
        !document.querySelector("#calendly-widget-script")
      ) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.id = "calendly-widget-script";
        document.body.appendChild(script);
        scriptLoadedRef.current = true;
      }

      // Always clear the container before opening (avoids widget stacking)
      if (calendlyContainerRef.current) {
        calendlyContainerRef.current.innerHTML = "";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-1 sm:p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl w-full max-w-5xl h-[calc(100vh-2rem)] relative overflow-hidden flex flex-col
              ${isMobile ? "rounded-xl p-1" : "rounded-3xl p-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='flex items-center justify-between p-4 sm:p-6 border-b border-white/10 shrink-0'>
              <div>
                <h2 className='text-xl sm:text-2xl font-bold text-white mb-1'>
                  Book a Free Consultation
                </h2>
                <p className='text-white/70 text-sm'>
                  Let's discuss your project and how I can help
                </p>
              </div>
              <motion.button
                onClick={onClose}
                className='text-white/60 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label='Close'
                autoFocus
              >
                <X className='h-6 w-6' />
              </motion.button>
            </div>

            {/* Calendly Widget */}
            <div className='flex-1'>
              <div
                ref={calendlyContainerRef}
                className='calendly-inline-widget w-full h-full'
                data-url='https://calendly.com/sajidhossain8272/broke-innovation-mentor'
                style={{ minWidth: "320px", height: "100%" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
