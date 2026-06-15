"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import StatCounter from "@/components/ui/StatCounter";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function ArtsInPrisonContent() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        title="Arts in Prison — Think Motion"
        subtitle="Transformation doesn't wait for release. It starts where people are."
        ctas={[
          { label: "Support This Program", href: "/donate", variant: "cta" },
          { label: "Learn More", href: "#about-think-motion", variant: "secondary" },
        ]}
      />

      {/* 2. Quote Block */}
      <section className="section">
        <div className="section-inner">
          <QuoteBlock
            quote="Art doesn't just pass time inside. It transforms the person doing time."
            attribution="Praxis Initiative"
          />
        </div>
      </section>

      {/* 3. About Think Motion */}
      <section id="about-think-motion" className="section">
        <div className="section-inner">
          <SectionHeader
            title="About Think Motion"
            subtitle="Therapeutic arts programming inside Arizona's correctional facilities."
          />

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Think Motion, led by Dr. Susan Bendix, is a therapeutic arts program operating
              inside Arizona&apos;s correctional facilities. The program delivers workshops in
              therapeutic movement, visual arts, music, and dance — creating spaces of creative
              expression, community, and transformation inside environments designed for
              deprivation.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Inside a correctional facility, nearly every aspect of life is controlled. Movement
              is restricted. Expression is suppressed. Individuality is systematically erased.
              Think Motion creates a counter-space — a place where participants are not defined
              by their charges or their housing unit, but by their creativity, their courage, and
              their willingness to be present. The program does not promise easy transformation.
              It offers the tools and the space for people to begin the work themselves.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 4. Why Arts in Prison? — Evidence-based */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Why Arts in Prison?"
            subtitle="The evidence is clear: arts programming produces measurable outcomes."
          />

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Research consistently demonstrates that arts programming in correctional settings
              produces measurable outcomes: reduced recidivism rates among participants,
              significant decreases in disciplinary incidents, improved mental health outcomes,
              and enhanced cognitive development. These are not soft results. They are documented,
              peer-reviewed findings from programs across the country, including landmark studies
              by the RAND Corporation and the National Endowment for the Arts.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Arts programming also does something that no policy paper can replicate: it reaches
              people inside facilities who are most disengaged, most traumatized, and most likely
              to struggle after release. Think Motion meets participants where they are —
              physically, emotionally, and creatively. The program does not require prior artistic
              experience. It requires only a willingness to show up and engage.
            </motion.p>
          </div>

          {/* Research highlights */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                stat: "Recidivism Reduction",
                detail:
                  "Participants in correctional arts programs show significantly lower rates of reoffending compared to non-participants",
                variant: "navy" as const,
              },
              {
                stat: "Disciplinary Improvement",
                detail:
                  "Facilities with active arts programming report measurable decreases in disciplinary incidents and violence",
                variant: "default" as const,
              },
              {
                stat: "Mental Health Outcomes",
                detail:
                  "Arts engagement supports trauma recovery, reduces symptoms of anxiety and depression, and builds emotional resilience",
                variant: "electric" as const,
              },
            ].map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard variant={item.variant} className="h-full">
                  <h4
                    className="mb-3 text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.stat}
                  </h4>
                  <p className="text-[#C0C0D0]" style={{ fontFamily: "var(--font-body)" }}>
                    {item.detail}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What Participants Experience */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader title="What Participants Experience" />

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A Think Motion session begins with the body. Participants are guided through
              therapeutic movement exercises that reconnect them with physical awareness — a
              practice that is quietly radical in environments where bodies are controlled,
              counted, and confined. Movement becomes a language for emotions that have no safe
              outlet in the general population of a correctional facility.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From movement, the program expands into visual arts, music, and creative writing.
              Participants work with professional artists and trained facilitators to explore
              mediums they may never have encountered. For many, it is the first time anyone has
              asked them to create rather than comply. The results are often extraordinary — not
              because the art is technically masterful, but because it is honest. It carries the
              weight of lived experience, rendered visible.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The community that forms within Think Motion workshops is itself a form of healing.
              Participants build trust, practice vulnerability, and develop interpersonal skills
              that serve them both inside and after release. Art becomes not just a personal
              practice but a shared language — a way of being human together in a space that
              actively discourages humanity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 6. Dr. Bendix Bio */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader title="Program Leadership" />

          <motion.div {...fadeUp} className="mx-auto max-w-3xl">
            <GlassCard variant="maroon" hover={false}>
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {/* Photo placeholder */}
                <div className="flex-shrink-0">
                  <div
                    className="flex h-40 w-40 items-center justify-center rounded-2xl bg-[rgba(128,0,0,0.3)] border border-[rgba(201,162,39,0.2)]"
                    aria-label="Photo of Dr. Susan Bendix — to be provided"
                  >
                    <svg
                      className="h-16 w-16 text-gold opacity-40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0116.5 0"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Dr. Susan Bendix
                  </h3>
                  <p
                    className="mb-4 text-sm font-medium text-gold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Think Motion Program Director
                  </p>
                  <p
                    className="text-lg leading-relaxed text-[#C0C0D0]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Dr. Susan Bendix leads the Think Motion arts-in-prison program, using
                    therapeutic movement, music, and visual arts to support trauma recovery and
                    personal transformation for incarcerated individuals across Arizona&apos;s
                    correctional facilities. Her work sits at the intersection of creative practice
                    and healing — guided by the conviction that art is not a reward for good
                    behavior, but a fundamental tool for human development that no wall should be
                    allowed to withhold.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 7. Program Reach — Stats */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader title="Program Reach" />
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            <StatCounter value="Multiple" label="Arizona Facilities Served" />
            <StatCounter value="100" suffix="+" label="Participants Annually" />
            <StatCounter value={4} label="Creative Disciplines" />
            <StatCounter value="Year-round" label="Programming Schedule" />
          </div>
        </div>
      </section>

      {/* 8. Get Involved CTA */}
      <CTASection
        headline="Support Arts in Prison"
        description="Think Motion needs community support to continue bringing transformation inside Arizona's facilities."
        cards={[
          {
            title: "Donate",
            description:
              "Fund workshops, materials, professional artist fees, and program expansion to additional facilities across Arizona.",
            href: "/donate",
            buttonLabel: "Donate Now",
            variant: "maroon",
          },
          {
            title: "Volunteer",
            description:
              "Artists, musicians, writers, and movement practitioners — bring your creative skills inside. Training provided.",
            href: "/contact",
            buttonLabel: "Get Involved",
            variant: "navy",
          },
          {
            title: "Attend an Exhibition",
            description:
              "Think Motion periodically exhibits participant work in public galleries. See the art. Meet the mission.",
            href: "/events",
            buttonLabel: "View Events",
            variant: "electric",
          },
        ]}
      />
    </main>
  );
}
