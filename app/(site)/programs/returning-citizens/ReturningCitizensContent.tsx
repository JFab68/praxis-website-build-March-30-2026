"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import StatCounter from "@/components/ui/StatCounter";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function ReturningCitizensContent() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero
        title="Returning Citizens Empowerment Programs"
        subtitle="Coming home is not the finish line. It's the beginning of a new fight — and we're here for it."
        ctas={[
          { label: "Support This Program", href: "/donate", variant: "cta" },
          { label: "Get Involved", href: "#get-involved", variant: "secondary" },
        ]}
      />

      {/* 2. Quote Block */}
      <section className="section">
        <div className="section-inner">
          <QuoteBlock
            quote="Coming home is not the end of the sentence. It's the beginning of a system that keeps punishing."
            attribution="Praxis Initiative"
          />
        </div>
      </section>

      {/* 3. The Problem — PAS Framework */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="The Reentry Crisis"
            subtitle="A system that releases people without preparing them for the world they return to."
          />

          <div className="mx-auto max-w-3xl space-y-8">
            <motion.div {...fadeUp}>
              <GlassCard variant="default" hover={false}>
                <Badge variant="crimson" className="mb-4">The Problem</Badge>
                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Every year, tens of thousands of people are released from Arizona&apos;s state
                  and county correctional facilities. The system gives them a bus ticket and, in
                  some cases, a small amount of cash. What it does not give them is the digital
                  literacy to apply for a job online, navigate a healthcare portal, access
                  government benefits, or participate meaningfully in civic life. It does not give
                  them the civic knowledge to understand how policy affects them or the advocacy
                  skills to demand change.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div {...fadeUp}>
              <GlassCard variant="maroon" hover={false}>
                <Badge variant="gold" className="mb-4">The Reality</Badge>
                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  In 2026, nearly every essential service is accessed digitally. Employment
                  applications. Benefits portals. Healthcare systems. Housing applications. Banking.
                  And yet people returning from incarceration — particularly those who have been
                  inside for years or decades — often have minimal or no digital skills. The world
                  they return to is not the world they left. For those 50 and older, who left before
                  smartphones became ubiquitous, this gap is not just inconvenient. It is a barrier
                  to basic survival. Research shows that digital exclusion is directly correlated
                  with recidivism — not because returning citizens are less capable, but because the
                  system returns them to a world it never prepared them for.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div {...fadeUp}>
              <GlassCard variant="navy" hover={false}>
                <Badge variant="electric" className="mb-4">The Solution</Badge>
                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  The Praxis Initiative Returning Citizens Empowerment Programs provide two
                  integrated tracks: Digital Literacy &amp; Access and Core Civics &amp; Advocacy
                  Training. Together, these programs give returning citizens the practical skills,
                  civic knowledge, and advocacy power to navigate the present and shape the future.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The 50+ Digital Divide — DEDICATED PROMINENT SECTION */}
      <section className="section relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,212,255,0.25) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="section-inner relative z-10">
          <motion.div {...fadeUp} className="mb-6 text-center">
            <Badge variant="gold" className="mb-4 text-sm">
              Funding Priority
            </Badge>
          </motion.div>

          <SectionHeader
            title="The 50+ Digital Divide"
            subtitle="The most underserved population in reentry services needs a program built specifically for them."
          />

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Among returning citizens, those aged 50 and over face compounded barriers. Many
              entered the criminal legal system before the smartphone era. Some have served
              sentences of 20, 25, or 30 years. They return to a world transformed by technology
              — and they return without a roadmap.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              This population is growing. Driven by long mandatory minimum sentences and
              Truth-in-Sentencing laws, the proportion of incarcerated people over 50 has
              increased dramatically over the past two decades. They represent one of the fastest
              growing demographic groups in state prisons nationwide. And yet, the reentry services
              available to them rarely account for their specific needs. Workforce development
              programs skew toward younger populations. Digital literacy programs assume a baseline
              familiarity that these individuals do not have.
            </motion.p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            <StatCounter value={15} suffix="%" label="Of AZ prison population is 50+" />
            <StatCounter value={20} suffix="+ yrs" label="Average sentence, 50+ cohort" />
            <StatCounter value={85} suffix="%" label="Of jobs require digital applications" />
            <StatCounter value={3} suffix="x" label="Recidivism risk without digital skills" />
          </div>

          <motion.div {...fadeUp} className="mt-12">
            <GlassCard variant="electric" hover={false} className="border-2 border-electric/30">
              <h3
                className="mb-4 text-2xl font-bold text-electric"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why This Matters to Funders
              </h3>
              <p
                className="text-lg leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The 50+ returning citizen population is one of the most underserved and least
                studied groups in reentry services. They are not typically the focus of workforce
                development programs, which skew toward younger populations. Yet they represent a
                growing percentage of the state prison population — driven by long mandatory
                minimum sentences — and they return with the greatest digital gaps. A focused,
                tailored program for this cohort is not only the right thing to do. It is a
                high-impact, underfunded area where targeted investment produces measurable
                outcomes.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Reduced class sizes",
                    desc: "Individualized attention for participants with the greatest digital gaps",
                  },
                  {
                    title: "Accessibility-first design",
                    desc: "Larger text, audio support, step-by-step pacing adapted for older learners",
                  },
                  {
                    title: "Peer mentorship",
                    desc: "Trained formerly incarcerated digital advocates who understand the learning journey",
                  },
                  {
                    title: "Device & connectivity access",
                    desc: "Tablets or laptops provided with help accessing ACP/Lifeline connectivity programs",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl bg-[rgba(0,212,255,0.08)] p-4">
                    <p
                      className="font-semibold text-electric"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 text-sm text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 5. Sub-Program A: Digital Literacy & Access */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Digital Literacy & Access"
            subtitle="Foundational and intermediate digital skills, device access, and connectivity support for returning citizens."
          />

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Digital Literacy &amp; Access program provides structured training for returning
              citizens, covering the essential skills needed to navigate employment, benefits,
              housing, healthcare, and civic participation in the digital age. The curriculum is
              built around real-world tasks — not abstract computer science — because the goal is
              not certification for its own sake. The goal is functional competency that translates
              directly into improved outcomes.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Participants progress through three tiers. The foundational module covers device
              basics, internet safety, and email communication. The intermediate module focuses
              on the platforms that matter most: job application portals, benefits systems like
              AHCCCS and the Arizona Department of Economic Security, and housing search tools.
              The advanced module introduces remote work skills, digital financial literacy, and
              online advocacy tools that connect directly to Praxis Initiative&apos;s civic
              engagement programs.
            </motion.p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                tier: "Foundational",
                items:
                  "Device basics, internet safety, email communication, password management",
                accent: "navy" as const,
              },
              {
                tier: "Intermediate",
                items:
                  "Job application platforms, AHCCCS & AZ DES portals, housing searches, telehealth",
                accent: "default" as const,
              },
              {
                tier: "Advanced",
                items:
                  "Remote work tools, digital financial literacy, online advocacy, social media for employment",
                accent: "electric" as const,
              },
            ].map((mod, i) => (
              <motion.div
                key={mod.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard variant={mod.accent} className="h-full">
                  <h4
                    className="mb-3 text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {mod.tier}
                  </h4>
                  <p className="text-[#C0C0D0]" style={{ fontFamily: "var(--font-body)" }}>
                    {mod.items}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mx-auto mt-12 max-w-3xl">
            <GlassCard variant="navy" hover={false}>
              <h4
                className="mb-4 text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Outcome Metrics
              </h4>
              <div className="space-y-3">
                {[
                  "Participants completing digital literacy certification",
                  "Participants successfully accessing employment, benefits, or healthcare portals within 90 days of completion",
                  "Digital self-efficacy survey scores (pre/post program comparison)",
                  "50+ cohort-specific tracking: device and connectivity retention at 6 months",
                ].map((metric) => (
                  <div key={metric} className="flex items-start gap-3">
                    <span className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-electric" />
                    <p className="text-[#C0C0D0]" style={{ fontFamily: "var(--font-body)" }}>
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 6. Sub-Program B: Core Civics & Advocacy Training */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Core Civics & Advocacy Training"
            subtitle="Transforming lived experience into civic power and legislative impact."
          />

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Core Civics &amp; Advocacy Training program empowers returning citizens with the
              knowledge, skills, and confidence to participate in the democratic process and become
              advocates for systemic change. The curriculum covers how government works, how policy
              is made, how to tell your story effectively, and how to become a professional advocate
              for the issues that directly affect your community.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Participants learn the structure of state and federal government, how bills become
              laws, how to track legislation, and how to engage directly with the legislative
              process. They develop storytelling skills for advocacy, learn how to meet with
              legislators, practice media engagement, and build the coalition-building expertise
              that drives real policy change. By the end of the program, participants are not just
              informed citizens — they are trained advocates prepared to lead.
            </motion.p>

            <motion.div {...fadeUp}>
              <GlassCard variant="maroon" hover={false}>
                <h4
                  className="mb-4 text-xl font-bold text-gold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  The Pipeline to Legislative Impact
                </h4>
                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Graduates of the Core Civics program become the pipeline for Praxis
                  Initiative&apos;s legislative work. The formerly incarcerated advocates who
                  testified for SB 1507 — who walked the halls of the Arizona Capitol and made
                  their case directly to legislators — are exactly the people this program develops.
                  The program is a training ground for the next generation of criminal legal reform
                  advocates. Every cohort strengthens not just the individual participants, but the
                  entire movement.
                </p>
              </GlassCard>
            </motion.div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              {
                title: "How Government Works",
                desc: "Branches of government, levels of authority, the legislative process at state and federal levels",
              },
              {
                title: "Criminal Legal Policy",
                desc: "How bills become laws, tracking legislation, understanding the policy landscape that shapes the system",
              },
              {
                title: "Advocacy Skills",
                desc: "Storytelling for impact, meeting with legislators, media engagement, coalition building",
              },
              {
                title: "Reentry Leadership",
                desc: "From client to advocate — building a professional advocacy identity and community leadership capacity",
              },
            ].map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <h4
                    className="mb-2 text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {mod.title}
                  </h4>
                  <p className="text-[#C0C0D0]" style={{ fontFamily: "var(--font-body)" }}>
                    {mod.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Impact & Outcomes */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader title="Impact & Anticipated Outcomes" />
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            <StatCounter value={200} suffix="+" label="Participants in Year One" />
            <StatCounter value={50} suffix="+" label="50+ Cohort Participants" />
            <StatCounter value={80} suffix="%" label="Target Employment Access Rate" />
            <StatCounter value={100} suffix="%" label="Participants with Device Access" />
          </div>
        </div>
      </section>

      {/* 8. Funding Case */}
      <section className="section">
        <div className="section-inner">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl">
            <GlassCard
              variant="maroon"
              hover={false}
              className="border-2 border-[rgba(201,162,39,0.3)]"
            >
              <div className="mb-4 text-center">
                <Badge variant="gold">Funding Priority</Badge>
              </div>
              <h3
                className="mb-6 text-center text-2xl font-bold text-white md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                This Program Needs Your Investment
              </h3>
              <div className="space-y-4">
                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  The Returning Citizens Empowerment Programs are in active development and
                  actively seeking grant funding and private donations. We are transparent about
                  where we stand: the curriculum is built, the partnerships are forming, and the
                  need is documented. What we need now is the financial investment to launch.
                </p>
                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Funding supports instructor salaries, peer mentor stipends, device procurement,
                  connectivity subsidies, curriculum materials, and program evaluation. Every dollar
                  invested in digital literacy and civic empowerment for returning citizens is a
                  dollar that reduces recidivism, strengthens communities, and builds the advocacy
                  pipeline that drives systemic reform.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/donate" variant="cta" size="lg">
                  Fund This Program
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Partnership Inquiry
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 9. Get Involved CTAs */}
      <div id="get-involved">
        <CTASection
          headline="Get Involved"
          description="There are many ways to support returning citizens in Arizona."
          cards={[
            {
              title: "Volunteer as an Instructor",
              description:
                "Bring your digital skills or civic knowledge to our programs. We need educators, mentors, and facilitators who understand the reentry experience.",
              href: "/contact",
              buttonLabel: "Volunteer",
              variant: "navy",
            },
            {
              title: "Donate",
              description:
                "Fund devices, instructors, peer mentors, and curriculum development. Your donation directly supports returning citizens building new lives.",
              href: "/donate",
              buttonLabel: "Donate Now",
              variant: "maroon",
            },
            {
              title: "Partner With Us",
              description:
                "Employers, service providers, and community organizations — partner with Praxis to create pathways for returning citizens.",
              href: "/contact",
              buttonLabel: "Become a Partner",
              variant: "electric",
            },
          ]}
        />
      </div>
    </main>
  );
}
