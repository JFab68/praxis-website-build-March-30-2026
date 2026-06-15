"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import StatCounter from "@/components/ui/StatCounter";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

/* =========================================
   Fade-in wrapper for scroll reveals
   ========================================= */
function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   Section 3 — SB 1507 Victory Banner
   ========================================= */
export function VictoryBanner() {
  return (
    <section className="section">
      <div className="section-inner">
        <FadeIn>
          <GlassCard variant="maroon" hover={false} className="relative overflow-hidden p-8 md:p-12">
            {/* Decorative gold accent */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-full opacity-10"
              style={{ background: "radial-gradient(circle, #C9A227 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <Badge variant="gold" className="mb-6">
              Legislative Victory
            </Badge>

            <h2
              className="mb-6 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Six Years. One Law. The Fight Continues.
            </h2>

            <div className="max-w-3xl space-y-4">
              <p
                className="text-lg leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                On June 28, 2025, Governor Katie Hobbs signed Senate Bill 1507 into law — establishing
                Arizona&apos;s Independent Correctional Oversight Office. It passed the Senate 26-3 and the
                House 46-10. For six years, the Praxis Initiative and our coalition partners relentlessly
                pursued this legislation. This is what happens when the people most affected by the system
                refuse to be silent.
              </p>

              <p
                className="text-lg font-semibold leading-relaxed text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                But the work isn&apos;t done. The office was created — but not funded. We are now fighting to
                secure the appropriations, federal grants, and private dollars necessary to make independent
                oversight a living reality inside Arizona&apos;s prisons.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/news" variant="secondary" size="md">
                Read the Full Story
              </Button>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================================
   Section 4 — Who We Are
   ========================================= */
export function WhoWeAre() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <FadeIn>
            <div>
              <div className="mb-4 h-1 w-16 rounded-full bg-electric" />
              <h2
                className="mb-8 text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Who We Are
              </h2>

              <div className="space-y-5">
                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Praxis Initiative began as Arizonans for Transparency and Accountability in Corrections
                  (ATAC), born from the recognition that Arizona&apos;s prison system had operated for decades
                  without meaningful independent oversight. The people who understood this most viscerally were
                  not academics or policy analysts — they were the people inside those facilities, and those who
                  had come home.
                </p>

                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  We rebranded as Praxis Initiative in January 2025 to reflect an expanded mission: one that
                  encompasses not only prison oversight, but the full spectrum of criminal legal reform, harm
                  reduction and drug policy, returning citizen empowerment programs, and arts-in-prison
                  initiatives. The name is intentional. Praxis means theory made action — knowledge that
                  transforms reality through practice.
                </p>

                <p
                  className="text-lg leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  What sets Praxis apart is not just what we do, but who does it. Every program we run, every
                  bill we lobby, every coalition we build is led by people with firsthand knowledge of the
                  system we are working to change. That is not a talking point. It is our mandate.
                </p>
              </div>

              <div className="mt-8">
                <Button href="/about" variant="primary" size="lg">
                  Our Full Story
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Photo placeholder */}
          <FadeIn delay={0.15}>
            <div className="glass-card flex aspect-[4/3] items-center justify-center p-8">
              <div className="text-center">
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-[#8080A0]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm text-[#8080A0]" style={{ fontFamily: "var(--font-body)" }}>
                  Team photo — client to provide
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   Section 5 — Impact Stats
   ========================================= */
export function ImpactStats() {
  return (
    <section className="section">
      <div className="section-inner">
        <FadeIn>
          <div className="glass-card-navy p-8 md:p-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <StatCounter value={6} suffix="+" label="Years of Advocacy" />
              <StatCounter value="SB 1507" label="Signed Into Law" />
              <StatCounter value={7} suffix="+" label="Coalition Partners" />
              <StatCounter value={1000} suffix="+" label="Lives Impacted" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================================
   Section 6 — Programs Overview
   ========================================= */
const programs = [
  {
    title: "Independent Prison Oversight",
    tagline: "Accountability where it's needed most.",
    description:
      "Fought for six years. Won SB 1507. Still fighting to fund it. Independent oversight is not a luxury — it is a constitutional necessity.",
    href: "/programs/independent-oversight",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Systemic Reform & Harm Reduction",
    tagline: "Policy that reflects truth, not fear.",
    description:
      "From sentencing reform to overdose prevention, we advocate for criminal legal policies grounded in evidence, humanity, and public safety — not politics.",
    href: "/programs/criminal-legal-reform",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: "Returning Citizens Empowerment",
    tagline: "Reentry begins with knowledge and power.",
    description:
      "Digital literacy, civic skills, and advocacy training for returning citizens — including a specialized track for those 50 and over navigating a changed digital world.",
    href: "/programs/returning-citizens",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
    ),
  },
  {
    title: "Arts in Prison — Think Motion",
    tagline: "Transformation through creativity.",
    description:
      "Dr. Bendix's Think Motion program brings music, movement, visual arts, and dance inside Arizona's correctional facilities. Art is not a reward. It is a catalyst.",
    href: "/programs/arts-in-prison",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
];

export function ProgramsOverview() {
  return (
    <section className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-electric" />
          <h2
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Programs
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#C0C0D0]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Four interconnected programs. One theory of change: those closest to the problem must lead the solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <GlassCard className="flex h-full flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(0,212,255,0.1)] text-electric">
                  {program.icon}
                </div>

                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-electric"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {program.tagline}
                </p>

                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {program.title}
                </h3>

                <p
                  className="mb-6 flex-1 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {program.description}
                </p>

                <Link
                  href={program.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-[#7FE9FF]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Learn More
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
