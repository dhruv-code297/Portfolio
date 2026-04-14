"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className={`py-14 md:py-20 border-b border-border/60 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </motion.section>
  );
}