"use client";

import { motion } from "framer-motion";
import { Megaphone, Mail, Users, Share2, Newspaper } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function TakeActionContent() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
  };

  return (
    <>
      {/* ---- Active Petitions ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Active Petitions"
            subtitle="Add your name. Make the legislature hear you."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Petition 1: Fund the ICOO */}
            <motion.div {...fadeUp}>
              <GlassCard variant="navy" className="flex h-full flex-col">
                <Badge variant="crimson" className="mb-4 self-start">
                  Urgent
                </Badge>
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Megaphone
                    className="mr-2 inline-block h-5 w-5 text-electric"
                    aria-hidden="true"
                  />
                  Fund Arizona&apos;s Independent Correctional Oversight Office
                </h3>
                <p
                  className="mb-4 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Arizona&apos;s prisons have operated for decades without
                  independent oversight. People have died from preventable
                  medical conditions. Complaints have been filed and ignored.
                  Families have sought answers that never came.
                </p>
                <p
                  className="mb-4 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  SB 1507 was signed into law on June 28, 2025, establishing the
                  Independent Correctional Oversight Office. But the office was
                  created without funding. The initial $1.5 million appropriation
                  was stripped in a budget standoff. The office exists on paper.
                  Your signature helps make it exist in practice.
                </p>
                <div className="mt-auto rounded-xl border border-dashed border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] p-6 text-center">
                  <p
                    className="text-sm text-[#8080A0]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Action Network petition embed will appear here
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button href="/donate" variant="cta" size="sm">
                    Donate to Fund the ICOO
                  </Button>
                </div>
              </GlassCard>
            </motion.div>

            {/* Petition 2: Sentencing Reform */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <GlassCard variant="default" className="flex h-full flex-col">
                <Badge variant="gold" className="mb-4 self-start">
                  Active Campaign
                </Badge>
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Megaphone
                    className="mr-2 inline-block h-5 w-5 text-gold"
                    aria-hidden="true"
                  />
                  Sentencing Reform for Arizona
                </h3>
                <p
                  className="mb-4 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Arizona incarcerates more people per capita than nearly every
                  other democracy in the world. Truth-in-Sentencing, mandatory
                  minimums, and the steady erosion of judicial discretion have
                  created a system that punishes poverty and addiction with the
                  blunt instrument of incarceration.
                </p>
                <p
                  className="mb-4 leading-relaxed text-[#C0C0D0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  The evidence is clear: longer sentences do not make communities
                  safer. Proportional sentencing, earned time, and judicial
                  discretion do. Add your name to demand that Arizona&apos;s
                  legislators prioritize sentencing reform in the next session.
                </p>
                <div className="mt-auto rounded-xl border border-dashed border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.05)] p-6 text-center">
                  <p
                    className="text-sm text-[#8080A0]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Action Network petition embed will appear here
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- Contact Your Legislators ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Contact Your Legislators"
            subtitle="Arizona's legislators respond to constituent pressure. Make them hear you."
          />

          <motion.div {...fadeUp}>
            <GlassCard variant="maroon" hover={false} className="mx-auto max-w-3xl">
              <div className="flex items-start gap-4">
                <Mail
                  className="mt-1 h-8 w-8 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <div>
                  <h3
                    className="mb-3 text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Make the Call. Send the Email. Show Up.
                  </h3>
                  <p
                    className="mb-4 leading-relaxed text-[#C0C0D0]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Your state legislators need to know that their constituents
                    support funding the Independent Correctional Oversight
                    Office, sentencing reform, and evidence-based harm reduction
                    policy. One phone call from a constituent carries more weight
                    than a thousand social media posts. One personal email gets
                    read. One in-person visit gets remembered.
                  </p>
                  <p
                    className="mb-6 leading-relaxed text-[#C0C0D0]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Find your Arizona state representative and senator using the
                    legislature&apos;s official tool. Tell them you support
                    ICOO funding, sentencing reform, and harm reduction. Be
                    specific. Be direct. Be persistent.
                  </p>
                  <Button
                    href="https://www.azleg.gov/findmylegislator/"
                    variant="secondary"
                    size="md"
                  >
                    Find Your Arizona Legislator
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ---- Volunteer ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Bring Your Skills to the Work"
            subtitle="We need people. Digital advocates, event organizers, writers, researchers, social media managers, legislative researchers, people with lived experience, people who care deeply."
          />

          <motion.div {...fadeUp} className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-electric" aria-hidden="true" />
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Volunteer Interest Form
              </h3>
            </div>
            <VolunteerForm />
          </motion.div>
        </div>
      </section>

      {/* ---- Share Our Work ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Share Our Work"
            subtitle="Amplify the mission. Every share extends our reach."
          />

          <motion.div {...fadeUp}>
            <GlassCard
              variant="electric"
              hover={false}
              className="mx-auto max-w-2xl text-center"
            >
              <Share2
                className="mx-auto mb-4 h-10 w-10 text-electric"
                aria-hidden="true"
              />
              <h3
                className="mb-3 text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Spread the Word
              </h3>
              <p
                className="mb-6 leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Share Praxis Initiative&apos;s work with your network. Post
                about SB 1507. Talk about the funding fight. Tell people that
                independent prison oversight is now Arizona law — and that it
                needs their support to become reality. Use the hashtag{" "}
                <span className="font-semibold text-electric">
                  #FundTheICOO
                </span>{" "}
                on social media.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  href="https://twitter.com/intent/tweet?text=Arizona%20now%20has%20an%20Independent%20Correctional%20Oversight%20Office%20—%20but%20it%20needs%20funding.%20Learn%20more%20at%20praxisinitiative.org%20%23FundTheICOO"
                  variant="secondary"
                  size="sm"
                >
                  Share on X
                </Button>
                <Button
                  href="https://www.facebook.com/sharer/sharer.php?u=https://praxisinitiative.org/take-action"
                  variant="secondary"
                  size="sm"
                >
                  Share on Facebook
                </Button>
                <Button
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://praxisinitiative.org/take-action"
                  variant="secondary"
                  size="sm"
                >
                  Share on LinkedIn
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ---- Newsletter Signup ---- */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Stay in the Fight"
            subtitle="Get updates on legislation, program openings, events, and victories. No noise — just signal."
          />

          <motion.div {...fadeUp} className="mx-auto max-w-xl">
            <GlassCard variant="navy" hover={false}>
              <Newspaper
                className="mx-auto mb-4 h-8 w-8 text-electric"
                aria-hidden="true"
              />
              {newsletterSubmitted ? (
                <div className="text-center">
                  <p
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    You&apos;re in. Welcome to the fight.
                  </p>
                  <p
                    className="mt-2 text-sm text-[#C0C0D0]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(5,5,48,0.6)] px-4 py-3 text-white placeholder:text-[#8080A0] focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  <Button type="submit" variant="cta" size="md">
                    Subscribe
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
