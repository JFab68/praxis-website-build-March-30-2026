"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  attribution: string;
  className?: string;
}

export default function QuoteBlock({
  quote,
  attribution,
  className,
}: QuoteBlockProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("relative py-12 text-center", className)}
    >
      {/* Decorative quotation mark */}
      <span
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none text-[clamp(4rem,10vw,8rem)] leading-none text-gold opacity-40"
        aria-hidden="true"
        style={{ fontFamily: "var(--font-quote)" }}
      >
        &ldquo;
      </span>

      <p
        className="relative mx-auto max-w-3xl text-[clamp(1.25rem,2.5vw,2rem)] italic leading-relaxed text-white"
        style={{ fontFamily: "var(--font-quote)" }}
      >
        {quote}
      </p>

      <footer className="mt-6">
        <cite
          className="not-italic text-sm font-medium tracking-wide text-gold"
          style={{ fontFamily: "var(--font-body)" }}
        >
          &mdash; {attribution}
        </cite>
      </footer>
    </motion.blockquote>
  );
}
