"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Light-theme booking modal. Loads the Calendly widget for a 1:1
 * Google Meet session (sajidhossain8272 / broke-innovation-mentor).
 */
export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

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
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[1100] flex items-center justify-center p-1 sm:p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='bg-white border border-[#e7e5e4] shadow-2xl w-full max-w-5xl h-[calc(100vh-2rem)] relative overflow-hidden flex flex-col rounded-2xl sm:rounded-3xl'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='flex items-center justify-between p-4 sm:p-6 border-b border-[#e7e5e4] shrink-0'>
              <div>
                <h2 className='mt-0 mb-1 text-xl sm:text-2xl font-semibold text-[#171717]'>
                  Book a meeting
                </h2>
                <p className='text-[#737373] text-sm'>
                  1:1 on Google Meet — pick a time that works for you
                </p>
              </div>

              <button
                type='button'
                onClick={onClose}
                className='text-[#737373] hover:text-[#171717] transition-colors p-2 rounded-xl hover:bg-[#f5f5f3]'
                aria-label='Close booking modal'
                autoFocus
              >
                <X className='h-6 w-6' />
              </button>
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