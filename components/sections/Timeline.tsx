"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical line */}
      <div
        className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric via-electric/40 to-transparent md:left-1/2 md:-translate-x-px"
        aria-hidden="true"
      />

      <div className="space-y-12">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative flex flex-col pl-12 md:pl-0 ${
                isLeft
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } md:items-start`}
            >
              {/* Dot on the line */}
              <div
                className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-electric bg-space shadow-[0_0_10px_rgba(0,212,255,0.6)] md:left-1/2"
                aria-hidden="true"
              />

              {/* Content card */}
              <div
                className={`glass-card p-6 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <span
                  className="mb-1 block text-sm font-bold tracking-wider text-electric"
                  style={{ fontFamily: "var(--font-mono-stack)" }}
                >
                  {event.year}
                </span>
                <h3
                  className="mb-2 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {event.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
