import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/forms/ContactForm";
import ContactClientSections from "./ContactClientSections";

export const metadata: Metadata = {
  title: "Contact Us | Praxis Initiative",
  description:
    "Get in touch with Praxis Initiative for general inquiries, media requests, partnership opportunities, or volunteer information.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Contact Us"
        subtitle="Questions. Partnerships. Press. We want to hear from you."
      />

      {/* Quote Block */}
      <section className="section" aria-label="Quote">
        <div className="section-inner">
          <QuoteBlock
            quote="The work of reform is built on relationships. Start one here."
            attribution="Praxis Initiative"
          />
        </div>
      </section>

      {/* Contact Form + Info Grid */}
      <section className="section" aria-labelledby="contact-form-heading">
        <div className="section-inner">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info — takes 2 columns */}
            <div className="space-y-6 lg:col-span-2">
              <GlassCard variant="navy" hover={false}>
                <h3
                  className="mb-4 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.1em] text-[#8080A0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:hello@praxisinitiative.org"
                      className="text-electric transition-colors hover:text-electric-soft"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      hello@praxisinitiative.org
                    </a>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.1em] text-[#8080A0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Phone
                    </p>
                    <p
                      className="text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      To be confirmed
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.1em] text-[#8080A0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Mailing Address
                    </p>
                    <p
                      className="text-[#C0C0D0]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Phoenix, Arizona
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover={false}>
                <h3
                  className="mb-4 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Social
                </h3>
                <div className="flex gap-4">
                  {["Twitter/X", "LinkedIn", "Facebook", "Instagram"].map(
                    (platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(0,0,128,0.15)] px-3 py-1.5 text-xs text-[#C0C0D0] transition-colors hover:border-electric hover:text-electric"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {platform}
                      </span>
                    )
                  )}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Tracks */}
      <section className="section" aria-labelledby="inquiry-tracks-heading">
        <div className="section-inner">
          <SectionHeader
            title="How Can We Help?"
            subtitle="Route your inquiry to the right team."
          />
          <ContactClientSections />
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section" aria-label="Location map">
        <div className="section-inner">
          <GlassCard hover={false} className="mx-auto max-w-4xl">
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-electric/20 bg-[rgba(0,0,128,0.08)]">
              <div className="text-center">
                <svg
                  className="mx-auto mb-3 h-10 w-10 text-[#8080A0] opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p
                  className="text-sm text-[#8080A0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Google Maps embed will appear here when office address is
                  confirmed
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
