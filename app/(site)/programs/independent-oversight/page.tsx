import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import OversightContent from "./OversightContent";

export const metadata: Metadata = {
  title: "Independent Prison Oversight | Praxis Initiative",
  description:
    "Praxis Initiative's flagship program: six years of advocacy that led to SB 1507 and the establishment of Arizona's Independent Correctional Oversight Office.",
};

export default function IndependentOversightPage() {
  return (
    <main>
      <Hero
        title="Independent Prison Oversight"
        subtitle="Accountability cannot be self-administered. Arizona's prisons need — and now have — independent eyes."
      />

      <QuoteBlock
        quote="Sunlight is the best disinfectant."
        attribution="Justice Louis Brandeis"
      />

      <OversightContent />
    </main>
  );
}
