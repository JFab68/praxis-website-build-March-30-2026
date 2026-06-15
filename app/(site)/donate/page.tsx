import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import DonateClientSections from "./DonateClientSections";
import FeathrDonationWidget from "@/components/donations/FeathrDonationWidget";

export const metadata: Metadata = {
  title: "Donate | Praxis Initiative",
  description:
    "Support Praxis Initiative's work to reform Arizona's criminal legal system. Fund independent oversight, returning citizen programs, and harm reduction advocacy.",
};

const fundingPriorities = [
  {
    title: "Fund the ICOO",
    description:
      "Help secure private funding for Arizona's new Independent Correctional Oversight Office while we fight for legislative appropriations. The office was signed into law but remains unfunded \u2014 your contribution helps make independent oversight a living reality inside Arizona\u2019s prisons.",
    accent: "navy" as const,
  },
  {
    title: "Digital Literacy for Returning Citizens",
    description:
      "Equipment, curriculum, instructors, and peer mentors for the Digital Literacy & Access program, including the specialized 50+ cohort for returning citizens who left before the smartphone era and return to a digital-first world.",
    accent: "electric" as const,
  },
  {
    title: "Civics & Advocacy Training",
    description:
      "Building the next generation of criminal legal reform advocates from inside the affected community. Graduates of this program become the trained voices who testify before the legislature and walk the halls of the Arizona Capitol.",
    accent: "default" as const,
  },
  {
    title: "Arts in Prison \u2014 Think Motion",
    description:
      "Supporting Dr. Bendix\u2019s therapeutic arts programming \u2014 movement, music, visual arts, and dance \u2014 inside Arizona correctional facilities. Art is not a reward. It is a catalyst for transformation.",
    accent: "maroon" as const,
  },
  {
    title: "General Operating Support",
    description:
      "Keep the lights on. Fund the coalition calls, the research, the administrative infrastructure, and the daily work that makes everything else possible. General operating support is the backbone of sustained advocacy.",
    accent: "default" as const,
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Support the Work"
        subtitle="Six years of advocacy. One historic law. Four transformative programs. All of it made possible by people like you."
        ctas={[
          { label: "Donate Now", href: "#donate-widget", variant: "cta" },
        ]}
      />

      {/* Quote Block */}
      <section className="section" aria-label="Quote">
        <div className="section-inner">
          <QuoteBlock
            quote="Every dollar given to Praxis Initiative is a dollar spent on the people this system was built to forget."
            attribution="Praxis Initiative"
          />
        </div>
      </section>

      {/* Why Donate — PAS Framework */}
      <section className="section" aria-labelledby="why-donate-heading">
        <div className="section-inner">
          <SectionHeader title="Why Your Donation Matters" />
          <div className="mx-auto max-w-3xl space-y-6">
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Arizona&apos;s criminal legal system incarcerates over 36,000
              people &mdash; one of the highest rates in the country. People
              inside face unconstitutional conditions, limited access to courts,
              inadequate healthcare, and no independent advocate. People leaving
              face a digital world they weren&apos;t prepared for, a civic
              system they were excluded from, and communities that often have
              more barriers than on-ramps.
            </p>
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Change requires sustained, resourced advocacy. SB 1507 did not
              happen in a single session. It happened because Praxis Initiative
              kept showing up, kept building coalitions, kept training advocates,
              and kept telling the truth &mdash; for six years, with minimal
              resources, led almost entirely by formerly incarcerated people.
            </p>
            <p
              className="text-lg leading-relaxed text-white"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your donation sustains that work. It funds the next campaign, the
              next training cohort, the next court filing, the next testimony
              before the Arizona legislature.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Priorities */}
      <section className="section" aria-labelledby="priorities-heading">
        <div className="section-inner">
          <SectionHeader
            title="Where Your Dollars Go"
            subtitle="Every program. Every campaign. Directed by the people closest to the problem."
          />
          <DonateClientSections priorities={fundingPriorities} />
        </div>
      </section>

      {/* Feathr Donation Widget */}
      <section className="section" id="donate-widget" aria-labelledby="donate-widget-heading">
        <div className="section-inner">
          <GlassCard variant="navy" hover={false} className="mx-auto max-w-2xl">
            <div className="py-8">
              <h2
                id="donate-widget-heading"
                className="mb-2 text-center text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Make a Donation
              </h2>
              <p
                className="mb-6 text-center text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Secure donation processing powered by Feathr. Choose a
                one-time gift or become a sustaining monthly donor.
              </p>
              <FeathrDonationWidget />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section" aria-labelledby="other-ways-heading">
        <div className="section-inner">
          <SectionHeader title="Other Ways to Give" />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <GlassCard hover={false}>
              <h3
                className="mb-3 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Monthly Giving
              </h3>
              <p
                className="text-sm leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Recurring donors are our most important supporters. A monthly
                gift of $25, $50, or $100 creates the predictable revenue that
                lets us plan and execute long-term campaigns.
              </p>
            </GlassCard>

            <GlassCard hover={false}>
              <h3
                className="mb-3 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Stock &amp; Securities
              </h3>
              <p
                className="text-sm leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Make a gift of appreciated stock for potential tax benefits.
                Contact us at{" "}
                <span className="text-electric">
                  hello@praxisinitiative.org
                </span>{" "}
                to arrange a securities transfer.
              </p>
            </GlassCard>

            <GlassCard hover={false}>
              <h3
                className="mb-3 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Employer Matching
              </h3>
              <p
                className="text-sm leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Many employers match charitable gifts &mdash; doubling the
                impact of your contribution. Check with your HR department to see
                if your company participates.
              </p>
            </GlassCard>

            <GlassCard hover={false}>
              <h3
                className="mb-3 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Planned Giving
              </h3>
              <p
                className="text-sm leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Include Praxis Initiative in your estate planning and leave a
                lasting legacy for criminal legal reform in Arizona. Contact us
                to discuss planned giving options.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Transparency Pledge */}
      <section className="section" aria-labelledby="transparency-heading">
        <div className="section-inner">
          <GlassCard
            variant="maroon"
            hover={false}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              id="transparency-heading"
              className="mb-4 text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Transparency Pledge
            </h2>
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Praxis Initiative is committed to full financial transparency. We
              publish annual reports detailing how every dollar is used. We
              believe the same accountability we demand from the state&apos;s
              correctional system must apply to our own organization. Your trust
              is our foundation &mdash; and we earn it through openness.
            </p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
