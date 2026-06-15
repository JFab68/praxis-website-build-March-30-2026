"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  FileText,
  Handshake,
  BookOpen,
  Megaphone,
  DollarSign,
  Mail,
  Share2,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import StatCounter from "@/components/ui/StatCounter";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AdvocacyTimeline from "@/components/sections/AdvocacyTimeline";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const coalitionPartners = [
  {
    name: "Dream.org",
    description:
      "National organization advancing justice reform, green economy, and tech access. Dream.org joined the SB 1507 coalition in 2022 and provided national infrastructure for the campaign.",
  },
  {
    name: "FAMM",
    description:
      "Families Against Mandatory Minimums works to create a more fair and effective criminal legal system through sentencing reform at the state and federal level.",
  },
  {
    name: "Justice Action Network",
    description:
      "Bipartisan organization that brings together conservatives and progressives to advance criminal legal reform through smart-on-crime policies.",
  },
  {
    name: "ACLU Smart Justice",
    description:
      "The ACLU's campaign to reduce the U.S. jail and prison population by 50% and combat racial disparities in the criminal legal system.",
  },
  {
    name: "Arnold Ventures",
    description:
      "Philanthropy dedicated to tackling some of America's most pressing problems, including criminal justice reform, through evidence-based solutions.",
  },
  {
    name: "CPAC Nolan Center",
    description:
      "The conservative policy center advancing criminal justice reform from the right, demonstrating the bipartisan consensus behind oversight and accountability.",
  },
  {
    name: "Bipartisan Policy Center",
    description:
      "Non-profit organization that actively fosters bipartisanship, combining the best ideas from both parties to promote health, security, and opportunity.",
  },
];

export default function OversightContent() {
  return (
    <>
      {/* ---- The Problem (PAS Framework) ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="The Problem"
            subtitle="A system that polices itself cannot be trusted to reform itself."
          />

          <div className="mx-auto max-w-3xl space-y-8">
            {/* PROBLEM */}
            <motion.div {...fadeUp}>
              <GlassCard variant="default" hover={false}>
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-crimson"
                    aria-hidden="true"
                  />
                  <div>
                    <Badge variant="crimson" className="mb-3">
                      The Problem
                    </Badge>
                    <p
                      className="leading-relaxed text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      For decades, Arizona&apos;s Department of Corrections,
                      Rehabilitation and Reentry operated without meaningful
                      independent oversight. The ADCRR reported only to the
                      governor. Complaints about conditions, medical neglect,
                      preventable deaths, and civil rights violations had no
                      truly independent body to receive, investigate, and act on
                      them. The only check on the system was the system itself.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* AGITATE */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <GlassCard variant="maroon" hover={false}>
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <div>
                    <Badge variant="gold" className="mb-3">
                      The Human Cost
                    </Badge>
                    <p
                      className="leading-relaxed text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      This is not an abstract governance failure. It has a human
                      cost. People have died in Arizona&apos;s prisons from
                      preventable medical conditions. People have been held in
                      unconstitutional conditions of confinement. People have
                      filed grievances that disappeared. Families have sought
                      answers that never came. While other states built oversight
                      offices, created ombudsman programs, and established
                      accountability infrastructure, Arizona remained one of the
                      last holdouts &mdash; a $1.4 billion-a-year agency
                      answerable to no one outside itself.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* SOLUTION */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <GlassCard variant="navy" hover={false}>
                <div className="flex items-start gap-4">
                  <FileText
                    className="mt-1 h-6 w-6 shrink-0 text-electric"
                    aria-hidden="true"
                  />
                  <div>
                    <Badge variant="electric" className="mb-3">
                      The Solution
                    </Badge>
                    <p
                      className="leading-relaxed text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Senate Bill 1507, signed into law on June 28, 2025,
                      established Arizona&apos;s Independent Correctional
                      Oversight Office. This is not a reform &mdash; it is a
                      structural change. An independent body, separate from the
                      governor&apos;s office and separate from ADCRR, charged
                      with monitoring confinement conditions, investigating
                      complaints, ensuring compliance with state and federal law,
                      and reporting directly to the legislature and the public.
                      This is what Praxis Initiative spent six years fighting
                      for.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- SB 1507 Deep Dive ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="SB 1507: What the Law Does"
            subtitle="A landmark victory six years in the making."
          />

          {/* Vote Stats */}
          <motion.div
            {...fadeUp}
            className="mb-12"
          >
            <GlassCard variant="navy" hover={false}>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <StatCounter value="26" suffix="-3" label="Senate Vote" />
                <StatCounter value="46" suffix="-10" label="House Vote" />
                <StatCounter value={6} suffix="+" label="Years of Advocacy" />
                <StatCounter
                  value="7"
                  label="Coalition Partners"
                />
              </div>
            </GlassCard>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.div {...fadeUp}>
              <p
                className="text-lg leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Senate Bill 1507 passed Arizona&apos;s Senate by a vote of 26-3
                and the House by 46-10 &mdash; overwhelming bipartisan margins
                that reflect the breadth of the coalition supporting this reform.
                Governor Hobbs signed it as one of her final legislative actions
                of the 2025 session.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <p
                className="text-lg leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The law establishes the Independent Correctional Oversight Office
                (ICOO) and charges it with monitoring the conditions of
                confinement in all Arizona state correctional facilities,
                ensuring compliance with state and federal law including
                constitutional standards, disseminating clear information about
                incarcerated individuals&apos; rights, accepting and
                independently investigating complaints from incarcerated people
                and their families, and establishing a reporting system with
                annual public reports submitted directly to the Arizona
                Legislature.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <GlassCard variant="maroon" hover={false}>
                <div className="flex items-start gap-4">
                  <DollarSign
                    className="mt-1 h-6 w-6 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="mb-2 text-xl font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      The Funding Fight
                    </h3>
                    <p
                      className="leading-relaxed text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      The ICOO was signed into law &mdash; but not funded. The
                      initial appropriation of $1.5 million was stripped from the
                      budget in a standoff between the legislature and the
                      governor&apos;s office. To save the bill, it was amended to
                      authorize funding through future legislative
                      appropriations, federal grants, and private sources. The
                      office exists on paper. Praxis Initiative is now fighting
                      to make it exist in practice.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- Six-Year Campaign Timeline ---- */}
      <AdvocacyTimeline />

      {/* ---- What You Can Do ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="What You Can Do Right Now"
            subtitle="The law is won. The funding fight needs you."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Megaphone,
                title: "Sign the Petition",
                description:
                  "Add your name to demand funding for Arizona's Independent Correctional Oversight Office.",
                href: "/take-action",
                buttonLabel: "Sign Now",
              },
              {
                icon: Mail,
                title: "Contact Legislators",
                description:
                  "Tell your state representative and senator to fund the ICOO in the next budget session.",
                href: "https://www.azleg.gov/findmylegislator/",
                buttonLabel: "Find Your Rep",
              },
              {
                icon: DollarSign,
                title: "Donate",
                description:
                  "Fund Praxis Initiative's continued advocacy for independent oversight implementation.",
                href: "/donate",
                buttonLabel: "Donate Now",
              },
              {
                icon: Share2,
                title: "Share This Page",
                description:
                  "Spread the word about SB 1507, the ICOO, and the ongoing funding fight.",
                href: "/take-action",
                buttonLabel: "Share",
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

      {/* ---- Coalition Partners ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Coalition Partners"
            subtitle="SB 1507 was made possible by a broad, bipartisan coalition united behind one principle: prisons must be accountable."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coalitionPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <GlassCard className="flex h-full flex-col">
                  <Handshake
                    className="mb-3 h-6 w-6 text-gold"
                    aria-hidden="true"
                  />
                  <h3
                    className="mb-2 text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {partner.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-[#C0C0D0]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {partner.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Research & Reports ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Research & Reports"
            subtitle="Evidence drives our advocacy. These documents inform our work."
          />

          <div className="mx-auto max-w-2xl space-y-4">
            {[
              {
                title:
                  "Independent Oversight Could Have Stopped The Lewis Prison Lock Disaster",
                type: "Analysis",
              },
              {
                title:
                  "Access To Courts For Arizona State Inmates: A Comprehensive Analysis",
                type: "Research",
              },
              {
                title:
                  "Our Fifth Year in the Fight for Independent Oversight of the ADCRR",
                type: "Report",
              },
              {
                title:
                  "The Arizona State Legislature: 2025 And Beyond",
                type: "Legislative Brief",
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
