"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/sections/Timeline";

const advocacyEvents = [
  {
    year: "2019",
    title: "First Proposal Drafted",
    description:
      "John Fabricius and Travis Hiland, working with the American Friends Service Committee in Tucson, draft the foundational proposal for independent oversight of the ADCRR. The seed of a six-year campaign is planted.",
  },
  {
    year: "2020",
    title: "ATAC Is Founded",
    description:
      "Arizonans for Transparency and Accountability in Corrections is co-founded as Arizona's only organization dedicated to independent prison oversight and operated by formerly incarcerated people.",
  },
  {
    year: "2021",
    title: "Coalition Formed",
    description:
      "ATAC begins assembling a bipartisan coalition of national and state-level partners. The campaign builds infrastructure for sustained legislative advocacy across multiple sessions.",
  },
  {
    year: "2022",
    title: "Dream.org Joins the Campaign",
    description:
      "John Fabricius joins Dream.org as Senior Digital and Legislative Campaigner, scaling the oversight campaign through national coalition infrastructure while continuing to lead ATAC's Arizona strategy.",
  },
  {
    year: "2023",
    title: "National Model Development",
    description:
      "The campaign studies oversight models from across the country, developing a legislative framework tailored to Arizona's unique political and correctional landscape.",
  },
  {
    year: "2024",
    title: "SB 1507 Introduced",
    description:
      "Senate Bill 1507 is formally introduced in the Arizona Legislature. ATAC rebrands as Praxis Initiative, reflecting an expanded mission. The legislative push intensifies.",
  },
  {
    year: "2025",
    title: "Signed into Law",
    description:
      "Governor Katie Hobbs signs SB 1507 on June 28, 2025. The Independent Correctional Oversight Office is established by Arizona law. The Senate votes 26-3; the House 46-10. The funding fight begins immediately.",
  },
];

export default function AdvocacyTimeline() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          title="Six Years of Advocacy"
          subtitle="From a single proposal to a signed law, the campaign for independent oversight was built year by year through persistence, coalition, and the refusal to be ignored."
        />
        <Timeline events={advocacyEvents} />
      </div>
    </section>
  );
}
