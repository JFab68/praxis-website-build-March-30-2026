"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

interface CTACard {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  variant?: "default" | "navy" | "maroon" | "electric";
}

interface CTASectionProps {
  headline: string;
  description?: string;
  cards: CTACard[];
  className?: string;
}

export default function CTASection({
  headline,
  description,
  cards,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("section", className)}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 text-center"
        >
          <h2
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {headline}
          </h2>
          {description && (
            <p
              className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <GlassCard variant={card.variant || "default"} className="flex h-full flex-col">
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mb-6 flex-1 text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {card.description}
                </p>
                <Button href={card.href} variant="secondary" size="sm">
                  {card.buttonLabel}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
