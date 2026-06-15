"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "cta";
}

interface HeroProps {
  title: string;
  subtitle?: string;
  ctas?: HeroCTA[];
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  ctas,
  fullHeight = false,
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        fullHeight ? "min-h-screen" : "min-h-[60vh]",
        "pt-[72px]",
        className
      )}
    >
      {/* Background gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,10,0.3)] to-[rgba(0,0,26,0.7)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section relative z-10">
        <div className="section-inner text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mx-auto max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.15] tracking-tight text-white md:leading-[1.15]"
            style={{
              fontFamily: "var(--font-display)",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.80)",
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#C0C0D0] md:text-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {subtitle}
            </motion.p>
          )}

          {ctas && ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              {ctas.map((cta) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant || "primary"}
                  size="lg"
                >
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          )}

          {children}

          {/* Scroll indicator */}
          {fullHeight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="h-8 w-8 text-electric opacity-60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
