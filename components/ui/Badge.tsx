import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "electric" | "gold" | "navy" | "maroon" | "crimson";
  className?: string;
}

const variantStyles = {
  electric:
    "bg-[rgba(0,212,255,0.15)] text-electric border-[rgba(0,212,255,0.30)]",
  gold: "bg-[rgba(201,162,39,0.15)] text-gold border-[rgba(201,162,39,0.30)]",
  navy: "bg-[rgba(0,0,128,0.25)] text-white border-[rgba(0,0,128,0.40)]",
  maroon:
    "bg-[rgba(128,0,0,0.25)] text-white border-[rgba(128,0,0,0.40)]",
  crimson:
    "bg-[rgba(255,68,68,0.15)] text-crimson border-[rgba(255,68,68,0.30)]",
};

export default function Badge({
  children,
  variant = "electric",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.08em]",
        variantStyles[variant],
        className
      )}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
    </span>
  );
}
