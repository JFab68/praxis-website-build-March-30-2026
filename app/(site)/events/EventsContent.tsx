"use client";

import { motion } from "framer-motion";
import { eventsData } from "@/lib/events-data";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

function formatEventDate(dateStr: string): { month: string; day: string; year: string } {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate().toString(),
    year: d.getFullYear().toString(),
  };
}

export default function EventsContent() {
  const upcoming = eventsData.filter((e) => !e.past);
  const past = eventsData.filter((e) => e.past);

  return (
    <>
      {/* Upcoming Events */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us in the work. Every event is open to the community."
          />

          {upcoming.length === 0 ? (
            <p
              className="text-center text-lg text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No upcoming events at this time. Check back soon or subscribe for notifications.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {upcoming.map((event, i) => {
                const date = formatEventDate(event.date);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <GlassCard variant="navy" className="flex h-full flex-col">
                      <div className="flex gap-5">
                        {/* Date block */}
                        <div className="flex flex-shrink-0 flex-col items-center rounded-xl bg-[rgba(0,212,255,0.1)] px-4 py-3 border border-electric/20">
                          <span
                            className="text-xs font-bold tracking-wider text-electric"
                            style={{ fontFamily: "var(--font-mono-stack)" }}
                          >
                            {date.month}
                          </span>
                          <span
                            className="text-3xl font-bold leading-tight text-white"
                            style={{ fontFamily: "var(--font-mono-stack)" }}
                          >
                            {date.day}
                          </span>
                        </div>

                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <Badge variant={event.virtual ? "electric" : "gold"}>
                              {event.virtual ? "Virtual" : "In Person"}
                            </Badge>
                          </div>
                          <h3
                            className="mb-1 text-xl font-bold text-white"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {event.title}
                          </h3>
                          <p
                            className="mb-1 text-sm text-electric"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {event.time}
                          </p>
                          <p
                            className="text-sm text-text-muted"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {event.location}
                          </p>
                        </div>
                      </div>

                      <p
                        className="mt-4 flex-1 text-[#C0C0D0] leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {event.description}
                      </p>

                      <div className="mt-5">
                        <Button href={event.rsvpUrl} variant="secondary" size="sm">
                          RSVP
                        </Button>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {past.length > 0 && (
        <section className="section">
          <div className="section-inner">
            <SectionHeader title="Past Events" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {past.map((event, i) => {
                const date = formatEventDate(event.date);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <GlassCard variant="default" className="h-full opacity-80">
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className="text-sm font-bold text-text-muted"
                          style={{ fontFamily: "var(--font-mono-stack)" }}
                        >
                          {date.month} {date.day}, {date.year}
                        </span>
                        <Badge variant={event.virtual ? "electric" : "gold"}>
                          {event.virtual ? "Virtual" : "In Person"}
                        </Badge>
                      </div>
                      <h3
                        className="mb-2 text-lg font-bold text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {event.title}
                      </h3>
                      <p
                        className="text-sm text-[#C0C0D0] leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {event.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Map Placeholder */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Find Us"
            subtitle="In-person events are held across the Phoenix metro area."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard variant="default" hover={false}>
              <div className="flex h-64 items-center justify-center rounded-xl bg-[rgba(0,0,128,0.2)]">
                <div className="text-center">
                  <svg
                    className="mx-auto mb-3 h-12 w-12 text-electric opacity-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p
                    className="text-text-muted"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Google Maps embed will be added when event locations are confirmed.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard variant="navy" hover={false} className="text-center">
              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Never Miss an Event
              </h3>
              <p
                className="mx-auto mb-6 max-w-xl text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Subscribe to receive event announcements, program updates, and legislative action
                alerts directly to your inbox.
              </p>
              <Button href="/take-action" variant="cta" size="lg">
                Subscribe to Updates
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
