"use client";

import { motion } from "framer-motion";
import QuoteBlock from "@/components/ui/QuoteBlock";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

interface Partner {
  name: string;
  description: string;
  url: string;
  coalition: boolean;
}

const partners: Partner[] = [
  {
    name: "Dream.org",
    description:
      "A national organization that closes prison doors and opens doors of opportunity. Dream.org partnered with Praxis Initiative on SB 1507, providing national campaign infrastructure and coalition coordination.",
    url: "https://dream.org",
    coalition: true,
  },
  {
    name: "FAMM",
    description:
      "Families Against Mandatory Minimums works to create a more fair and effective criminal legal system through sentencing reform. A key coalition partner in Arizona's oversight campaign.",
    url: "https://famm.org",
    coalition: true,
  },
  {
    name: "Justice Action Network",
    description:
      "A bipartisan organization that advocates for criminal legal reform at the state and federal level, building conservative and progressive coalitions around shared policy goals.",
    url: "https://www.justiceactionnetwork.org",
    coalition: true,
  },
  {
    name: "ACLU Smart Justice",
    description:
      "The ACLU's campaign to reduce the U.S. jail and prison population by 50 percent while combating racial disparities in the criminal legal system. A coalition partner on SB 1507.",
    url: "https://www.aclu.org/issues/smart-justice",
    coalition: true,
  },
  {
    name: "Arnold Ventures",
    description:
      "A philanthropy dedicated to tackling some of the most pressing problems in the United States, including criminal legal reform. Arnold Ventures has supported the national movement for independent correctional oversight.",
    url: "https://www.arnoldventures.org",
    coalition: true,
  },
  {
    name: "CPAC Nolan Center",
    description:
      "The Nolan Center for Justice at the American Conservative Union Foundation works on criminal legal reform from a conservative perspective, demonstrating the bipartisan nature of oversight advocacy.",
    url: "https://www.conservative.org",
    coalition: true,
  },
  {
    name: "Bipartisan Policy Center",
    description:
      "A Washington, D.C.-based organization that drives principled solutions through rigorous analysis, reasoned negotiation, and respectful dialogue. A supporter of independent oversight models nationwide.",
    url: "https://bipartisanpolicy.org",
    coalition: true,
  },
];

export default function PartnersContent() {
  const coalitionPartners = partners.filter((p) => p.coalition);

  return (
    <>
      {/* Quote Block */}
      <section className="section">
        <div className="section-inner">
          <QuoteBlock
            quote="The arc of justice is long, but it bends faster when we pull together."
            attribution="Praxis Initiative"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="section !pt-0">
        <div className="section-inner">
          <div className="mx-auto max-w-3xl space-y-6">
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The passage of SB 1507 was not the work of one organization. It was the result of a
              broad, bipartisan coalition that stretched from conservative criminal legal reform
              advocates to progressive civil liberties organizations — unified by the recognition
              that Arizona&apos;s prisons cannot be allowed to operate without independent
              accountability. Praxis Initiative is proud to work alongside partners who bring
              diverse perspectives and shared commitment to this cause.
            </motion.p>

            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-[#C0C0D0]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our partnerships extend beyond oversight advocacy. Across our four program areas —
              oversight, systemic reform, returning citizen empowerment, and arts in prison — we
              collaborate with national organizations, local community groups, academic
              institutions, and individual advocates who share our conviction that those closest to
              the problem must lead the solution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Our Partners"
            subtitle="Organizations working alongside Praxis Initiative to reform Arizona's criminal legal system."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <GlassCard className="flex h-full flex-col">
                  {/* Logo placeholder */}
                  <div className="mb-4 flex h-20 items-center justify-center rounded-xl bg-[rgba(0,0,128,0.2)]">
                    <span
                      className="text-lg font-bold text-electric opacity-60"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {partner.name}
                    </span>
                  </div>

                  <h3
                    className="mb-2 text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {partner.name}
                  </h3>
                  <p
                    className="mb-4 flex-1 text-sm text-[#C0C0D0] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {partner.description}
                  </p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-electric transition-colors hover:text-electric-soft"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Visit Website
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SB 1507 Coalition Section */}
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="The SB 1507 Coalition"
            subtitle="The bipartisan coalition that made independent correctional oversight a reality in Arizona."
          />

          <motion.div {...fadeUp} className="mx-auto max-w-3xl">
            <GlassCard variant="maroon" hover={false}>
              <p
                className="mb-6 text-lg leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Senate Bill 1507 passed with overwhelming bipartisan support — 26-3 in the Senate
                and 46-10 in the House — because the coalition behind it was genuinely bipartisan.
                Conservative organizations like the CPAC Nolan Center stood alongside progressive
                groups like the ACLU. National philanthropies like Arnold Ventures provided
                research and resources. Grassroots advocates, many of them formerly incarcerated,
                provided the testimony and moral authority that moved legislators to act.
              </p>

              <div className="flex flex-wrap gap-3">
                {coalitionPartners.map((p) => (
                  <Badge key={p.name} variant="gold">
                    {p.name}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Partnership Inquiry CTA */}
      <section className="section">
        <div className="section-inner">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <GlassCard variant="navy" hover={false}>
              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Interested in Partnering?
              </h3>
              <p
                className="mx-auto mb-6 max-w-lg text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Whether you are a national organization, a local community group, an academic
                institution, or an individual advocate — if you share our commitment to
                transforming Arizona&apos;s criminal legal system, we want to hear from you.
              </p>
              <Button href="/contact" variant="cta" size="lg">
                Contact Us About Partnership
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
