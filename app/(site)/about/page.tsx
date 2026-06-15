import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Timeline from "@/components/sections/Timeline";
import CTASection from "@/components/sections/CTASection";
import AboutClientSections from "./AboutClientSections";

export const metadata: Metadata = {
  title: "About Us | Praxis Initiative",
  description:
    "Learn about Praxis Initiative, Arizona's only organization dedicated to independent prison oversight led entirely by formerly incarcerated people. Our story, leadership, and values.",
};

const timelineEvents = [
  {
    year: "2018",
    title: "The Seed Is Planted",
    description:
      "John Fabricius is released after 15 years in the Arizona Department of Corrections, Rehabilitation and Reentry. Having witnessed conditions the public never saw, he begins volunteering at the American Friends Service Committee in Tucson and co-authors a foundational proposal for independent oversight of the ADCRR.",
  },
  {
    year: "2020",
    title: "ATAC Is Founded",
    description:
      "Arizonans for Transparency and Accountability in Corrections (ATAC) is co-founded as the only Arizona organization dedicated to independent prison oversight and operated by formerly incarcerated people. John Fabricius serves as Executive Director.",
  },
  {
    year: "2022",
    title: "National Coalition Building",
    description:
      "John joins Dream.org as Senior Digital and Legislative Campaigner, scaling ATAC's work through national coalition infrastructure. Coalition partners include FAMM, Justice Action Network, ACLU Smart Justice, and Arnold Ventures.",
  },
  {
    year: "2024",
    title: "Expansion and Rebrand",
    description:
      "ATAC rebrands as Praxis Initiative to reflect an expanded mission encompassing criminal legal reform, drug policy, returning citizen programming, and arts-in-prison. John transitions to full-time Executive Director.",
  },
  {
    year: "2025",
    title: "Victory: SB 1507",
    description:
      "After six years of relentless advocacy, Senate Bill 1507 is signed by Governor Katie Hobbs on June 28, 2025. The Independent Correctional Oversight Office is established by Arizona law. The funding fight begins immediately.",
  },
  {
    year: "2025\u2013Present",
    title: "Building the Future",
    description:
      "Praxis Initiative launches new programming: Digital Literacy for Returning Citizens with a specialized 50+ cohort, Core Civics & Advocacy Training, and expanded Think Motion arts partnerships. The organization deepens its legislative infrastructure while fighting to fund the ICOO.",
  },
];

const values = [
  {
    title: "Accountability",
    description:
      "We demand transparency from systems that operate in the dark. We hold ourselves to the same standard.",
    icon: "shield",
  },
  {
    title: "Dignity",
    description:
      "Every person inside Arizona's prisons is a human being. Every policy we advocate begins from that fact.",
    icon: "heart",
  },
  {
    title: "Evidence",
    description:
      "We ground our advocacy in data, research, and documented experience \u2014 not ideology.",
    icon: "chart",
  },
  {
    title: "Community",
    description:
      "We are led by the community we serve. Our decisions reflect the people most affected.",
    icon: "users",
  },
  {
    title: "Courage",
    description:
      "Six years of advocacy through political opposition, funding gaps, and systemic resistance. We don't stop because it's hard.",
    icon: "flame",
  },
  {
    title: "Transparency",
    description:
      "We show our work \u2014 in our finances, our strategy, and our outcomes.",
    icon: "eye",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Built from the Inside Out"
        subtitle="Praxis Initiative is led by people who have lived inside the system we are working to change. That is not coincidence. It is our foundation."
      />

      {/* Quote Block */}
      <section className="section" aria-label="Quote">
        <div className="section-inner">
          <QuoteBlock
            quote="We don't study the problem from the outside. We lived it. That's why we can solve it."
            attribution="John Fabricius, Executive Director"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" aria-labelledby="mission-heading">
        <div className="section-inner">
          <SectionHeader id="mission-heading" title="Our Name, Our Purpose" />
          <div className="mx-auto max-w-3xl space-y-6">
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The word <em className="text-white">praxis</em> comes from ancient
              Greek &mdash; it describes knowledge that is not merely
              theoretical, but enacted. Knowledge that transforms the world
              through practice. We chose this name deliberately: the Praxis
              Initiative is built on the conviction that the people who have
              lived inside Arizona&apos;s prisons hold the most accurate, most
              urgent, and most actionable knowledge about what must change.
            </p>
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We are not advocates from afar. We are not researchers who study
              incarceration from the outside. We are, collectively, people who
              have navigated the ADCRR&apos;s housing units, disciplinary
              processes, healthcare failures, and release gates &mdash; and who
              came home determined that others would not face the same system
              unchanged.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="section" aria-labelledby="story-heading">
        <div className="section-inner">
          <SectionHeader
            title="Our Story"
            subtitle="From a proposal written behind walls to a law signed on the Capitol steps."
          />
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Leadership */}
      <section className="section" aria-labelledby="leadership-heading">
        <div className="section-inner">
          <SectionHeader title="Our Leadership" />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <GlassCard variant="navy" hover={false}>

              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                John Fabricius
              </h3>
              <p
                className="mb-4 text-sm font-medium text-electric"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Executive Director
              </p>
              <p
                className="text-sm leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                John Fabricius spent 15 years incarcerated in the Arizona
                Department of Corrections, Rehabilitation and Reentry before his
                release in 2018. During his incarceration, he earned a paralegal
                degree and became a prisoner rights advocate. Since his release,
                he has built one of Arizona&apos;s most effective criminal legal
                reform organizations &mdash; first as ATAC and now as Praxis
                Initiative &mdash; securing the passage of SB 1507 after a
                six-year campaign. He is a nationally recognized voice on
                independent prison oversight and lived-experience leadership.
              </p>
            </GlassCard>

            <GlassCard variant="navy" hover={false}>

              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Dr. Susan Bendix
              </h3>
              <p
                className="mb-4 text-sm font-medium text-electric"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Think Motion Program Director
              </p>
              <p
                className="text-sm leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Dr. Susan Bendix leads the Think Motion arts-in-prison program,
                using therapeutic movement, music, and visual arts to support
                trauma recovery and personal transformation for incarcerated
                individuals across Arizona&apos;s correctional facilities. Her
                work bridges the gap between creative expression and
                rehabilitation, demonstrating the measurable impact of arts
                programming on recidivism and mental health outcomes.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Why Lived Experience Matters */}
      <section
        className="section"
        aria-labelledby="lived-experience-heading"
      >
        <div className="section-inner">
          <SectionHeader title="Why Lived Experience Matters" />
          <div className="mx-auto max-w-3xl space-y-6">
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Research on policy effectiveness consistently shows that programs
              designed with direct input from affected communities produce
              better outcomes, higher participation rates, and more durable
              results. For criminal legal reform, this principle is not simply
              best practice &mdash; it is the moral baseline.
            </p>
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              When Praxis Initiative advocates for independent oversight, we are
              not drawing on reports written by outside observers. We are drawing
              on the direct testimony of people who witnessed failed conditions,
              who lacked access to courts and medical care, who saw what
              independent eyes could have caught and stopped. When we design our
              returning citizen programs, we build them around the actual
              barriers our community members face &mdash; not the hypothetical
              barriers imagined by those who have never navigated them.
            </p>
            <p
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Glenn Martin principle &mdash; that those closest to the
              problem are closest to the solution &mdash; is not a slogan. It is
              an evidence-based framework for organizational effectiveness.
              Praxis Initiative is its proof.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="values-heading">
        <div className="section-inner">
          <SectionHeader title="Our Values" />
          <AboutClientSections values={values} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Join the Work"
        description="Whether you donate, volunteer, or share our story, you become part of the movement to transform Arizona's criminal legal system."
        cards={[
          {
            title: "Donate",
            description:
              "Fund independent oversight, returning citizen programs, and the advocacy that makes lasting change possible.",
            href: "/donate",
            buttonLabel: "Support the Work",
            variant: "navy",
          },
          {
            title: "Volunteer",
            description:
              "Bring your skills to the movement. We need digital advocates, educators, researchers, and people who care deeply.",
            href: "/take-action",
            buttonLabel: "Get Involved",
            variant: "default",
          },
          {
            title: "Stay Connected",
            description:
              "Get updates on legislation, program launches, events, and victories. No noise \u2014 just signal.",
            href: "/contact",
            buttonLabel: "Contact Us",
            variant: "electric",
          },
        ]}
      />
    </>
  );
}
