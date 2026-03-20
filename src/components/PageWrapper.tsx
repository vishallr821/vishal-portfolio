"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`mx-auto w-full max-w-7xl px-6 py-12 md:py-20 lg:px-8 bg-surface min-h-[calc(100vh-73px)] overflow-hidden ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
