"use client";

import { motion } from "framer-motion";

const partners = [
  "Dream.org",
  "FAMM",
  "Justice Action Network",
  "ACLU Smart Justice",
  "Arnold Ventures",
  "CPAC Nolan Center",
  "Bipartisan Policy Center",
];

export default function PartnersMarquee({ className }: { className?: string }) {
  // Duplicate list for seamless loop
  const doubled = [...partners, ...partners];

  return (
    <section className={`section ${className || ""}`}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <h2
            className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-[#C0C0D0]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Coalition Partners
          </h2>
        </motion.div>

        <div className="glass-card overflow-hidden p-6">
          <div className="partners-marquee-track flex w-max items-center gap-12">
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-white opacity-70 transition-opacity hover:opacity-100 md:text-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee animation via CSS */}
      <style jsx>{`
        .partners-marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }

        .partners-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-marquee-track {
            animation: none;
            flex-wrap: wrap;
            width: auto;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
