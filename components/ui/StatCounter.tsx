"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function StatCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    // If value is a string (non-numeric), just show it directly
    if (typeof value === "string") {
      setDisplayValue(value);
      return;
    }

    const numericValue = value;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericValue);

      setDisplayValue(current.toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center", className)}
    >
      <div
        className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none text-electric"
        style={{ fontFamily: "var(--font-mono-stack)" }}
      >
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p
        className="mt-2 text-sm uppercase tracking-[0.1em] text-[#C0C0D0]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}
