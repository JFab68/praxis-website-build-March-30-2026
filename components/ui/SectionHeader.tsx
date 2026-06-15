"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
  id,
}: SectionHeaderProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Electric accent line */}
      <div
        className={cn(
          "mb-4 h-1 w-16 rounded-full bg-electric",
          align === "center" && "mx-auto"
        )}
      />

      <h2
        className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#C0C0D0]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
