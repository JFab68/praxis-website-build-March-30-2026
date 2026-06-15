import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import ProgramsContent from "./ProgramsContent";

export const metadata: Metadata = {
  title: "Our Programs | Praxis Initiative",
  description:
    "Explore Praxis Initiative's programs: independent prison oversight, criminal legal reform, returning citizens empowerment, and arts in prison.",
};

export default function ProgramsPage() {
  return (
    <main>
      <Hero
        title="Our Programs"
        subtitle="Four interconnected programs. One theory of change: those closest to the problem must lead the solution."
      />

      <QuoteBlock
        quote="Reform without the people most affected is policy without purpose."
        attribution="Praxis Initiative"
      />

      <ProgramsContent />
    </main>
  );
}
