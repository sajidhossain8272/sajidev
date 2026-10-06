"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import CalendlyModal from "./calendly-modal";

interface BookingContextValue {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextValue>({
  openBooking: () => {},
});

/**
 * Provides a single Calendly booking modal (1:1 Google Meet) to the whole
 * page. Any component can call `useBooking().openBooking()`.
 */
export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      openBooking: () => setIsOpen(true),
    }),
    []
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <CalendlyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}