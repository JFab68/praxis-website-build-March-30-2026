"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Heart,
  BookOpen,
  Megaphone,
  TrendingUp,
  Gavel,
  ShieldAlert,
  Syringe,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import StatCounter from "@/components/ui/StatCounter";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import QuoteBlock from "@/components/ui/QuoteBlock";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const policyPositions = [
  {
    icon: Gavel,
    title: "Sentencing Reform & Proportionality",
    description:
      "Arizona's Truth-in-Sentencing laws, enacted in 1994, eliminated most early release mechanisms and created a system where sentences bear little relationship to public safety outcomes. Research consistently shows that sentence length beyond a certain threshold has diminishing returns on deterrence. We advocate for proportional sentencing, expanded earned-time credits, and the restoration of judicial discretion in cases where mandatory minimums produce unjust results.",
    variant: "navy" as const,
  },
  {
    icon: ShieldAlert,
    title: "End Mandatory Minimums for Non-Violent Offenses",
    description:
      "Mandatory minimum sentences remove the ability of judges to consider individual circumstances, driving up incarceration rates without measurable improvements in public safety. Arizona's mandatory minimums for drug offenses disproportionately affect communities of color and fill prisons with people who need treatment, not cages. We support legislation that returns sentencing discretion to judges for non-violent offenses.",
    variant: "default" as const,
  },
  {
    icon: Syringe,
    title: "Harm Reduction as Public Health",
    description:
      "The War on Drugs has failed by every measurable standard. Drug use has not declined, overdose deaths have skyrocketed, and communities have been devastated by mass incarceration. Evidence-based harm reduction — including naloxone distribution, drug courts, diversion programs, and community-based treatment — saves lives and reduces incarceration. We advocate for Arizona to adopt harm reduction as the foundation of its drug policy.",
    variant: "maroon" as const,
  },
  {
    icon: Heart,
    title: "Overdose Prevention & Community Training",
    description:
      "Overdose is preventable. Naloxone reverses opioid overdoses and is safe, effective, and inexpensive. Praxis Initiative supports community naloxone training programs, Good Samaritan protections for people who call for help during an overdose, and expanded access to medication-assisted treatment in correctional facilities and upon release.",
    variant: "electric" as const,
  },
];

export default function ReformContent() {
  return (
    <>
      {/* ---- Two-Part Program Overview ---- */}
      <section className="section">
        <div className="section-inner">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Criminal Legal System Reform */}
            <motion.div {...fadeUp}>
              <GlassCard variant="navy" hover={false} className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <Scale className="h-7 w-7 text-electric" aria-hidden="true" />
                  <Badge variant="electric">Criminal Legal Reform</Badge>
                </div>
                <h3
                  className="mb-4 text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Dismantling Mass Incarceration
                </h3>
                <p
                  className="mb-4 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Arizona&apos;s mass incarceration crisis did not emerge from
                  thin air. It was built, piece by piece, through decades of
                  sentencing policy decisions: the introduction of
                  Truth-in-Sentencing in 1994, mandatory minimums, sentence
                  enhancements, and the steady erosion of judicial discretion.
                  Arizona now incarcerates more people per capita than nearly
                  every other democracy in the world. The average sentence has
                  lengthened. The pathways home have narrowed. And the communities
                  most affected &mdash; disproportionately communities of color
                  &mdash; have carried the weight of a system that punishes
                  poverty and addiction with the blunt instrument of
                  incarceration.
                </p>
                <p
                  className="leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Praxis Initiative&apos;s systemic reform work operates at the
                  legislative level, the coalition level, and the public
                  education level. We research and publish analyses of
                  Arizona&apos;s sentencing policies, their historical evolution,
                  and their present-day impact. We advocate for sentencing
                  reform, proportionality, and the restoration of judicial
                  discretion. We work within bipartisan coalitions because the
                  case for reform is not partisan &mdash; it is empirical.
                </p>
              </GlassCard>
            </motion.div>

            {/* Harm Reduction & Drug Policy */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <GlassCard variant="maroon" hover={false} className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <Heart className="h-7 w-7 text-gold" aria-hidden="true" />
                  <Badge variant="gold">Harm Reduction</Badge>
                </div>
                <h3
                  className="mb-4 text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Saving Lives, Changing Policy
                </h3>
                <p
                  className="mb-4 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  A significant proportion of Arizona&apos;s incarcerated
                  population is there because of drug-related offenses &mdash;
                  many of them driven by addiction, not trafficking or violence.
                  The War on Drugs, waged for half a century, has demonstrably
                  failed to reduce drug use while successfully destroying
                  communities, families, and lives. Evidence-based alternatives
                  &mdash; harm reduction, naloxone distribution, drug courts,
                  diversion programs &mdash; have a proven track record.
                  Arizona&apos;s policies have not caught up with that evidence.
                </p>
                <p
                  className="mb-4 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Praxis Initiative advocates for drug policy that reflects what
                  we know works. We support evidence-based harm reduction
                  programs, community naloxone training, and policy reform that
                  treats addiction as a public health crisis rather than a
                  criminal justice matter. We run community trainings and provide
                  tools to reduce overdose deaths in the communities where we
                  work.
                </p>
                <p
                  className="leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  This work is personal. The overdose crisis is not an
                  abstraction. It is a daily reality in the communities Praxis
                  serves. We bring that urgency to everything we do in this
                  program area.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- Arizona Context Stats ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="The Arizona Context"
            subtitle="The numbers tell a story of a system built on incarceration rather than safety."
          />

          <motion.div {...fadeUp}>
            <GlassCard variant="default" hover={false}>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <StatCounter
                  value={36000}
                  suffix="+"
                  label="People Currently Incarcerated in Arizona"
                />
                <StatCounter
                  value="1994"
                  label="Year Truth-in-Sentencing Enacted"
                />
                <StatCounter
                  value="$1.4"
                  suffix="B"
                  label="Annual ADCRR Budget"
                />
                <StatCounter
                  value="50"
                  suffix="%+"
                  label="Drug-Related Incarcerations (Est.)"
                />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp} className="mx-auto mt-8 max-w-3xl">
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Arizona spends over $1.4 billion per year on its corrections
              system. It incarcerates people at a rate that exceeds most
              countries in the world. The state&apos;s sentencing policies
              &mdash; particularly Truth-in-Sentencing, which requires people to
              serve at least 85% of their sentence &mdash; have lengthened
              average time served without corresponding improvements in public
              safety. Meanwhile, drug-related offenses continue to drive a
              significant portion of admissions, filling prison beds with people
              who need treatment, not confinement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---- Mid-page Quote ---- */}
      <QuoteBlock
        quote="The evidence is clear: we cannot arrest, prosecute, and incarcerate our way to safety. Real safety requires real investment in people and communities."
        attribution="Praxis Initiative"
      />

      {/* ---- Policy Positions ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Policy Positions"
            subtitle="Evidence-based. Bipartisan. Grounded in lived experience."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {policyPositions.map((position, i) => {
              const Icon = position.icon;
              return (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                >
                  <GlassCard
                    variant={position.variant}
                    hover={false}
                    className="h-full"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <Icon
                        className="h-6 w-6 text-electric"
                        aria-hidden="true"
                      />
                      <h3
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {position.title}
                      </h3>
                    </div>
                    <p
                      className="leading-relaxed text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {position.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Take Action ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Take Action"
            subtitle="The case for reform is clear. Make sure your legislators know it."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Megaphone,
                title: "Sign Petitions",
                description:
                  "Add your name to active campaigns for sentencing reform and harm reduction policy in Arizona.",
                href: "/take-action",
                buttonLabel: "View Petitions",
              },
              {
                icon: TrendingUp,
                title: "Advocate",
                description:
                  "Contact your legislators. Tell them you support proportional sentencing, judicial discretion, and evidence-based drug policy.",
                href: "https://www.azleg.gov/findmylegislator/",
                buttonLabel: "Find Your Rep",
              },
              {
                icon: Heart,
                title: "Donate",
                description:
                  "Fund Praxis Initiative's research, coalition building, and legislative advocacy for systemic reform.",
                href: "/donate",
                buttonLabel: "Donate Now",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                >
                  <GlassCard className="flex h-full flex-col text-center">
                    <Icon
                      className="mx-auto mb-3 h-8 w-8 text-electric"
                      aria-hidden="true"
                    />
                    <h3
                      className="mb-2 text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mb-4 flex-1 text-sm leading-relaxed text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.description}
                    </p>
                    <Button href={item.href} variant="secondary" size="sm">
                      {item.buttonLabel}
                    </Button>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Research & Reports ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Research & Reports"
            subtitle="Our advocacy is built on evidence. Explore the research."
          />

          <div className="mx-auto max-w-2xl space-y-4">
            {[
              {
                title:
                  "Arizona's Mass Incarceration Crisis: The Evolution Of Sentencing",
                type: "Research",
              },
              {
                title: "The Arizona State Legislature: 2025 And Beyond",
                type: "Legislative Brief",
              },
              {
                title:
                  "Access To Courts For Arizona State Inmates: A Comprehensive Analysis",
                type: "Analysis",
              },
            ].map((report, i) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <GlassCard hover className="flex items-center gap-4">
                  <BookOpen
                    className="h-5 w-5 shrink-0 text-electric"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <h3
                      className="text-base font-semibold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {report.title}
                    </h3>
                  </div>
                  <Badge variant="navy">{report.type}</Badge>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
