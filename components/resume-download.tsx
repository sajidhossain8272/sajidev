"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Download } from "lucide-react"; // ✅ Download icon

export default function ResumeDownload() {
  const isMobile = useIsMobile();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sajid-Hossain-Resume.pdf"; // ✅ Public folder path
    link.download = "Sajid-Hossain-Resume.pdf"; // ✅ File name for saving
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className='fixed top-4 right-6 sm:top-4 sm:right-8 z-50 print:hidden'
      style={isMobile ? { top: 12, right: 12 } : undefined}
    >
      <motion.div
        whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          title='Download Resume'
          size={isMobile ? "default" : "sm"}
          className={`bg-white/10 ${
            isMobile
              ? "px-7 py-4 text-base shadow-md backdrop-blur-sm"
              : "px-6 py-3 shadow-2xl backdrop-blur-lg"
          } 
          border border-white/20 text-white hover:bg-white/20 
          rounded-2xl font-semibold outline-none focus-visible:ring-4 focus-visible:ring-blue-400 flex items-center gap-2`}
          onClick={handleDownload}
          aria-label='Download Resume'
        >
          <Download className='h-4 w-4' /> {/* ✅ Icon */}
          Resume
        </Button>
      </motion.div>
    </motion.div>
  );
}
  