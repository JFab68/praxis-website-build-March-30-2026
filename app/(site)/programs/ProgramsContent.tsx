"use client";

import { motion } from "framer-motion";
import { Shield, Scale, DoorOpen, Music } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const programs = [
  {
    icon: Shield,
    title: "Independent Prison Oversight",
    tagline: "Accountability where it's needed most.",
    variant: "navy" as const,
    badge: { label: "Flagship Program", variant: "electric" as const },
    href: "/programs/independent-oversight",
    paragraphs: [
      "For decades, Arizona's Department of Corrections, Rehabilitation and Reentry operated without meaningful independent oversight. The ADCRR reported only to the governor. Complaints about conditions, medical neglect, preventable deaths, and civil rights violations had no truly independent body to receive, investigate, and act on them.",
      "Praxis Initiative spent six years building a bipartisan coalition, drafting legislation, and relentlessly advocating for an independent oversight body. That work culminated in SB 1507, signed into law on June 28, 2025, establishing the Independent Correctional Oversight Office.",
      "The office is now law. But it is not yet funded. Praxis Initiative is leading the fight to secure the appropriations, federal grants, and private dollars necessary to make independent oversight a living reality inside Arizona's prisons.",
    ],
  },
  {
    icon: Scale,
    title: "Systemic Reform & Harm Reduction",
    tagline: "Policy that reflects truth, not fear.",
    variant: "default" as const,
    badge: { label: "Policy & Advocacy", variant: "gold" as const },
    href: "/programs/criminal-legal-reform",
    paragraphs: [
      "Arizona's mass incarceration crisis was built piece by piece through decades of sentencing policy decisions: Truth-in-Sentencing, mandatory minimums, sentence enhancements, and the steady erosion of judicial discretion. Arizona now incarcerates more people per capita than nearly every other democracy in the world.",
      "Praxis Initiative advocates for sentencing reform, proportionality, and the restoration of judicial discretion. We work within bipartisan coalitions because the case for reform is not partisan \u2014 it is empirical. From sentencing reform to overdose prevention, we advocate for criminal legal policies grounded in evidence, humanity, and public safety.",
      "Our harm reduction work addresses the overdose crisis directly \u2014 through community naloxone training, evidence-based drug policy advocacy, and the fundamental recognition that addiction is a public health crisis, not a criminal justice matter.",
    ],
  },
  {
    icon: DoorOpen,
    title: "Returning Citizens Empowerment",
    tagline: "Reentry begins with knowledge and power.",
    variant: "maroon" as const,
    badge: { label: "Funding Priority", variant: "crimson" as const },
    href: "/programs/returning-citizens",
    paragraphs: [
      "Every year, tens of thousands of people are released from Arizona's correctional facilities into a digital world they were never prepared for. Employment applications, benefits portals, healthcare systems, housing \u2014 nearly every essential service is now accessed online. For returning citizens who have been incarcerated for years or decades, this digital divide is not inconvenient. It is a barrier to basic survival.",
      "Praxis Initiative's Returning Citizens Empowerment Programs provide two integrated tracks: Digital Literacy & Access and Core Civics & Advocacy Training. Together, these programs equip returning citizens with the practical skills, civic knowledge, and advocacy power to navigate the present and shape the future.",
      "The 50+ Digital Literacy Cohort is a specialized program track for returning citizens aged 50 and over \u2014 a population that faces compounded barriers and is dramatically underserved by existing reentry programs. This is a high-impact, underfunded area where targeted investment produces measurable outcomes.",
    ],
  },
  {
    icon: Music,
    title: "Arts in Prison \u2014 Think Motion",
    tagline: "Transformation through creativity.",
    variant: "electric" as const,
    badge: { label: "Arts & Healing", variant: "electric" as const },
    href: "/programs/arts-in-prison",
    paragraphs: [
      "Think Motion, led by Dr. Susan Bendix, is a therapeutic arts program operating inside Arizona's correctional facilities. The program delivers workshops in therapeutic movement, visual arts, music, and dance \u2014 creating spaces of creative expression, community, and transformation inside environments designed for deprivation.",
      "Research consistently demonstrates that arts programming in correctional settings produces measurable outcomes: reduced recidivism rates, significant decreases in disciplinary incidents, improved mental health outcomes, and enhanced cognitive development. These are not soft results. They are documented, peer-reviewed findings.",
      "Art is not a reward. It is a catalyst. Think Motion meets participants where they are \u2014 physically, emotionally, and creatively \u2014 and begins the work of healing and transformation before people ever walk out the door.",
    ],
  },
];

export default function ProgramsContent() {
  return (
    <>
      {/* ---- Intro Prose ---- */}
      <section className="section">
        <div className="section-inner">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl">
            <p
              className="mb-6 text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Praxis Initiative does not run programs from the sidelines. We
              run programs from the center &mdash; designed, led, and
              continuously refined by people who know Arizona&apos;s criminal
              legal system from the inside. Each of our four program areas
              addresses a distinct dimension of the same interconnected crisis: a
              system that incarcerates too many people, under conditions too
              inhumane to defend, and releases them without the resources to
              thrive.
            </p>
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Independent oversight ensures those conditions are seen and
              corrected. Systemic reform and harm reduction addresses the
              policies that feed the pipeline. Returning citizen empowerment
              equips people with the tools to navigate &mdash; and transform
              &mdash; the systems that bound them. And arts in prison begins the
              work of healing and transformation before people ever walk out the
              door. These programs do not run parallel to each other. They run
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---- Program Cards (full-width) ---- */}
      <section className="section">
        <div className="section-inner space-y-10">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <GlassCard variant={program.variant} hover={false}>
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                    <div className="flex shrink-0 items-center gap-4 lg:flex-col lg:items-start">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.06)]">
                        <Icon
                          className="h-7 w-7 text-electric"
                          aria-hidden="true"
                        />
                      </div>
                      <Badge variant={program.badge.variant}>
                        {program.badge.label}
                      </Badge>
                    </div>

                    <div className="flex-1">
                      <h3
                        className="mb-1 text-2xl font-bold text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {program.title}
                      </h3>
                      <p
                        className="mb-4 text-sm font-medium text-electric"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {program.tagline}
                      </p>
                      {program.paragraphs.map((para, j) => (
                        <p
                          key={j}
                          className="mb-3 leading-relaxed text-[#C0C0D0] last:mb-0"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {para}
                        </p>
                      ))}
                      <div className="mt-6">
                        <Button
                          href={program.href}
                          variant="secondary"
                          size="md"
                        >
                          Explore This Program
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---- Cross-Program Principles ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="One Theory of Change"
            subtitle="Four programs. One interconnected mission."
          />

          <motion.div {...fadeUp} className="mx-auto max-w-3xl">
            <p
              className="mb-6 text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Every program Praxis Initiative operates is connected to a single
              theory of change: the people most affected by the criminal legal
              system hold the most accurate, most urgent, and most actionable
              knowledge about what must change. That principle is not a slogan.
              It is an organizational architecture.
            </p>
            <p
              className="mb-6 text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our oversight work exposes what is broken. Our reform work changes
              the policies that keep it broken. Our returning citizen programs
              build the power and capacity of the people most impacted. And our
              arts programming begins the process of healing and transformation
              inside the facilities themselves. Each program strengthens the
              others. Graduates of our civics training become legislative
              advocates. Research from our oversight work informs our reform
              campaigns. The stories told through Think Motion&apos;s arts
              programming become the testimony that moves legislators to act.
            </p>
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              This is praxis &mdash; theory made action, knowledge made practice,
              experience made power.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
