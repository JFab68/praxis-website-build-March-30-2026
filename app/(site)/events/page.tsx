import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import EventsContent from "./EventsContent";

export const metadata: Metadata = {
  title: "Events | Praxis Initiative",
  description:
    "Upcoming and past events from Praxis Initiative: community forums, legislative sessions, advocacy training, and volunteer opportunities in Arizona.",
};

export default function EventsPage() {
  return (
    <main>
      <Hero
        title="Events"
        subtitle="Community forums, training workshops, exhibitions, and advocacy events across Arizona."
      />

      <QuoteBlock
        quote="Change happens when people show up — in the Capitol, in the community, and in the room."
        attribution="Praxis Initiative"
      />

      <EventsContent />
    </main>
  );
}
