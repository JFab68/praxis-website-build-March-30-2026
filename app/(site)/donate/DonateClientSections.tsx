"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

interface Priority {
  title: string;
  description: string;
  accent: "default" | "navy" | "maroon" | "electric";
}

export default function DonateClientSections({
  priorities,
}: {
  priorities: Priority[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {priorities.map((priority, i) => (
        <motion.div
          key={priority.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <GlassCard variant={priority.accent} className="flex h-full flex-col">
            <span
              className="mb-1 block text-xs font-bold uppercase tracking-[0.15em] text-electric"
              style={{ fontFamily: "var(--font-mono-stack)" }}
            >
              Priority {i + 1}
            </span>
            <h3
              className="mb-3 text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {priority.title}
            </h3>
            <p
              className="text-sm leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {priority.description}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
