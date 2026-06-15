import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "cta";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const variantStyles = {
  primary:
    "bg-navy text-white rounded-full shadow-[0_4px_20px_rgba(0,0,128,0.50)] hover:bg-[#0000B3] hover:shadow-[0_8px_30px_rgba(0,0,128,0.70)]",
  secondary:
    "bg-white/10 backdrop-blur-md text-electric border border-electric/50 rounded-xl hover:bg-white/20 hover:border-electric transition-all shadow-[0_4px_16px_rgba(0,0,0,0.1)]",
  cta: "bg-gradient-to-r from-navy to-[#0000B3] text-white rounded-full shadow-[0_4px_20px_rgba(0,0,128,0.50)] hover:shadow-[0_8px_30px_rgba(0,0,128,0.70)] hover:from-[#0000B3] hover:to-navy",
};

const sizeStyles = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-[52px] px-8 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold tracking-[0.02em] transition-all duration-300",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  const style = { fontFamily: "var(--font-body)" };

  if (href) {
    return (
      <Link href={href} className={classes} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
