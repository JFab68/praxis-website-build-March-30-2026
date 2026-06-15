import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import CTASection from "@/components/sections/CTASection";
import NewsGrid from "@/components/sections/NewsGrid";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import {
  VictoryBanner,
  WhoWeAre,
  ImpactStats,
  ProgramsOverview,
} from "@/components/sections/HomeAnimatedSections";

export const metadata: Metadata = {
  title: "Praxis Initiative | Criminal Legal Reform & Prison Oversight Arizona",
  description:
    "Praxis Initiative is Arizona's only prison oversight and criminal legal reform organization led by formerly incarcerated people. We combine lived experience with evidence-based policy to demand real, lasting change.",
  openGraph: {
    title: "Praxis Initiative | Criminal Legal Reform & Prison Oversight Arizona",
    description:
      "Transforming Arizona's criminal legal system through lived experience, evidence-based reform, and direct programming for returning citizens.",
  },
};

const newsArticles = [
  {
    slug: "arizona-state-legislature-2025-and-beyond",
    title: "The Arizona State Legislature: 2025 And Beyond",
    date: "January 2025",
    excerpt:
      "A comprehensive look at the legislative landscape facing criminal legal reform in Arizona — what passed, what failed, and what the next session must address.",
  },
  {
    slug: "arizonas-mass-incarceration-crisis",
    title: "Arizona's Mass Incarceration Crisis: The Evolution of Sentencing",
    date: "November 2024",
    excerpt:
      "How decades of Truth-in-Sentencing laws, mandatory minimums, and the erosion of judicial discretion built one of the highest incarceration rates in the democratic world.",
  },
  {
    slug: "independent-oversight-lewis-prison",
    title: "Independent Oversight Could Have Stopped The Lewis Prison Lock Disaster",
    date: "September 2024",
    excerpt:
      "An analysis of the Lewis Complex lockdown and how independent oversight would have prevented the conditions that led to a crisis affecting thousands of incarcerated people.",
  },
];

const ctaCards = [
  {
    title: "Sign a Petition",
    description:
      "Add your name to our active campaigns. Make the legislature hear you.",
    href: "/take-action",
    buttonLabel: "Take Action",
    variant: "navy" as const,
  },
  {
    title: "Volunteer",
    description:
      "Bring your skills to the work. We need digital advocates, community educators, and movement builders.",
    href: "/take-action",
    buttonLabel: "Get Involved",
    variant: "default" as const,
  },
  {
    title: "Donate",
    description:
      "Fund independent oversight. Fund digital literacy for returning citizens. Fund transformation.",
    href: "/donate",
    buttonLabel: "Donate Now",
    variant: "maroon" as const,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero
        title="Transforming Arizona's Criminal Legal System — From the Inside Out"
        subtitle="Praxis Initiative is Arizona's only prison oversight and criminal legal reform organization led by formerly incarcerated people. We combine lived experience with evidence-based policy to demand real, lasting change."
        ctas={[
          { label: "Learn More", href: "/about", variant: "primary" },
          { label: "Donate Now", href: "/donate", variant: "cta" },
        ]}
        fullHeight
      />

      {/* Section 2 — Central Quote */}
      <QuoteBlock
        quote="Those closest to the problem are closest to the solution."
        attribution="Glenn Martin, JustLeadershipUSA"
        className="py-16 md:py-24"
      />

      {/* Section 3 — SB 1507 Victory Banner */}
      <VictoryBanner />

      {/* Section 4 — Who We Are */}
      <WhoWeAre />

      {/* Section 5 — Impact Stats */}
      <ImpactStats />

      {/* Section 6 — Programs Overview */}
      <ProgramsOverview />

      {/* Section 7 — Featured Quote */}
      <QuoteBlock
        quote="We don't study the problem from the outside. We lived it. That's why we can solve it."
        attribution="John Fabricius, Executive Director"
        className="py-16 md:py-24"
      />

      {/* Section 8 — Take Action CTA */}
      <CTASection
        headline="Your Voice Matters. Use It."
        description="Change requires more than awareness. It requires action. Here are three ways to join the fight right now."
        cards={ctaCards}
      />

      {/* Section 9 — News Teaser */}
      <NewsGrid articles={newsArticles} />

      {/* Section 10 — Partners Marquee */}
      <PartnersMarquee />
    </>
  );
}
