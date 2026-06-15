"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Mail, Mic, Handshake } from "lucide-react";

const tracks = [
  {
    title: "General Inquiries",
    description:
      "Questions about our programs, volunteering, or anything else? We respond to all inquiries within 2 business days.",
    icon: <Mail className="h-8 w-8 text-electric" />,
    variant: "default" as const,
  },
  {
    title: "Media & Press",
    description:
      "Interview requests, press inquiries, and media partnerships. For urgent media requests, please indicate in your subject line for priority response.",
    icon: <Mic className="h-8 w-8 text-electric" />,
    variant: "navy" as const,
  },
  {
    title: "Partnership Inquiries",
    description:
      "Interested in partnering with Praxis Initiative on legislation, programs, or community advocacy? We build coalitions that win.",
    icon: <Handshake className="h-8 w-8 text-electric" />,
    variant: "default" as const,
  },
];

export default function ContactClientSections() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
      {tracks.map((track, i) => (
        <motion.div
          key={track.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <GlassCard variant={track.variant} className="flex h-full flex-col text-center">
            <div className="mb-4 flex justify-center" aria-hidden="true">
              {track.icon}
            </div>
            <h3
              className="mb-2 text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {track.title}
            </h3>
            <p
              className="text-sm leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {track.description}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
