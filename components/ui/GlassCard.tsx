"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  variant?: "default" | "navy" | "maroon" | "electric";
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

const variantClasses: Record<string, string> = {
  default: "glass-card",
  navy: "glass-card-navy",
  maroon: "glass-card-maroon",
  electric: "glass-card-electric",
};

export default function GlassCard({
  variant = "default",
  className,
  children,
  hover = true,
  as: Tag = "div",
}: GlassCardProps) {
  if (!hover) {
    return (
      <Tag className={cn(variantClasses[variant], "p-8", className)}>
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      className={cn(
        variantClasses[variant],
        "p-8 transition-shadow duration-300",
        "hover:shadow-[0_16px_48px_rgba(0,0,128,0.55),0_0_0_1px_rgba(0,212,255,0.20),inset_0_1px_0_rgba(255,255,255,0.12)]",
        "hover:border-t-[rgba(0,212,255,0.35)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
