import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import TakeActionContent from "./TakeActionContent";

export const metadata: Metadata = {
  title: "Take Action | Praxis Initiative",
  description:
    "Sign petitions, contact your legislators, volunteer, and support criminal legal reform in Arizona through Praxis Initiative.",
};

export default function TakeActionPage() {
  return (
    <main>
      <Hero
        title="Take Action"
        subtitle="Change doesn't happen in the dark. It happens when enough people demand it out loud."
      />

      <QuoteBlock
        quote="Silence in the face of injustice is complicity. Here is where you speak."
        attribution="Praxis Initiative"
      />

      <TakeActionContent />
    </main>
  );
}
