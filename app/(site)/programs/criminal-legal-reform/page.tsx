import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import ReformContent from "./ReformContent";

export const metadata: Metadata = {
  title: "Systemic Reform & Harm Reduction | Praxis Initiative",
  description:
    "Criminal legal system reform and evidence-based drug policy advocacy in Arizona. Sentencing reform, harm reduction, and overdose prevention.",
};

export default function CriminalLegalReformPage() {
  return (
    <main>
      <Hero
        title="Systemic Reform & Harm Reduction"
        subtitle="Mass incarceration is a policy choice. We're fighting to unmake it — and to save lives along the way."
      />

      <QuoteBlock
        quote="We cannot punish our way out of addiction. We cannot incarcerate our way to safety."
        attribution="Praxis Initiative"
      />

      <ReformContent />
    </main>
  );
}
