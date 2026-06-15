"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/programs",
    label: "Programs",
    children: [
      { href: "/programs/independent-oversight", label: "Independent Prison Oversight" },
      { href: "/programs/criminal-legal-reform", label: "Systemic Reform & Harm Reduction" },
      { href: "/programs/returning-citizens", label: "Returning Citizens Programs" },
      { href: "/programs/arts-in-prison", label: "Arts in Prison / Think Motion" },
    ],
  },
  { href: "/take-action", label: "Take Action" },
  { href: "/news", label: "News" },
  { href: "/partners", label: "Partners" },
  { href: "/events", label: "Events" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[200] transition-all duration-300",
        isScrolled
          ? "bg-[rgba(0,0,26,0.90)] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-[rgba(0,212,255,0.10)]"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-[clamp(16px,4vw,80px)] md:h-[72px]"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display relative z-10 text-xl font-bold tracking-tight text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-electric">Praxis</span>{" "}
          <span className="text-white">Initiative</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-electric"
                      : "text-white/80 hover:text-white"
                  )}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                  <svg
                    className={cn(
                      "h-3 w-3 transition-transform",
                      isProgramsOpen && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {isProgramsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="glass-card absolute left-0 top-full mt-1 w-[300px] p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-4 py-3 text-sm transition-colors",
                            isActive(child.href)
                              ? "bg-[rgba(0,212,255,0.1)] text-electric"
                              : "text-white/80 hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                          )}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-electric"
                    : "text-white/80 hover:text-white"
                )}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Donate CTA */}
          <Link
            href="/donate"
            className="ml-4 inline-flex items-center rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,128,0.50)] transition-all hover:bg-[#0000B3] hover:shadow-[0_8px_30px_rgba(0,0,128,0.70)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={cn(
                "block h-0.5 w-full rounded-full bg-white transition-all duration-300",
                isMobileMenuOpen && "translate-y-[9px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full rounded-full bg-white transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full rounded-full bg-white transition-all duration-300",
                isMobileMenuOpen && "-translate-y-[9px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[199] flex flex-col bg-[rgba(0,0,26,0.97)] backdrop-blur-[30px] lg:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-2 pt-[72px]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-block px-4 py-3 text-2xl font-semibold transition-colors",
                      isActive(link.href) ? "text-electric" : "text-white/90 hover:text-white"
                    )}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mt-1 flex flex-col items-center gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "inline-block px-4 py-1.5 text-base transition-colors",
                            isActive(child.href)
                              ? "text-electric"
                              : "text-white/60 hover:text-white/90"
                          )}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/donate"
                  className="inline-flex items-center rounded-full bg-navy px-8 py-3 text-lg font-semibold text-white shadow-[0_4px_20px_rgba(0,0,128,0.50)] transition-all hover:bg-[#0000B3]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Donate
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
