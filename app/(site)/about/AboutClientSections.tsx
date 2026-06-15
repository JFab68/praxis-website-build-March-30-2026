"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import {
  Shield,
  Heart,
  BarChart3,
  Users,
  Flame,
  Eye,
} from "lucide-react";

interface Value {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="h-8 w-8 text-electric" />,
  heart: <Heart className="h-8 w-8 text-electric" />,
  chart: <BarChart3 className="h-8 w-8 text-electric" />,
  users: <Users className="h-8 w-8 text-electric" />,
  flame: <Flame className="h-8 w-8 text-electric" />,
  eye: <Eye className="h-8 w-8 text-electric" />,
};

export default function AboutClientSections({
  values,
}: {
  values: Value[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value, i) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <GlassCard className="flex h-full flex-col">
            <div className="mb-4" aria-hidden="true">
              {iconMap[value.icon]}
            </div>
            <h3
              className="mb-2 text-lg font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {value.title}
            </h3>
            <p
              className="text-sm leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {value.description}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
