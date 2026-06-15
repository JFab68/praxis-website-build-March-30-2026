import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import QuoteBlock from "@/components/ui/QuoteBlock";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "News & Research | Praxis Initiative",
  description:
    "The latest news, research, legislation updates, and press coverage from Praxis Initiative on criminal legal reform in Arizona.",
};

export default function NewsPage() {
  return (
    <main>
      <Hero
        title="News & Research"
        subtitle="Analysis, reporting, and research on Arizona's criminal legal system — from the people who know it best."
      />

      <QuoteBlock
        quote="Those closest to the problem are closest to the solution — and they have the most to teach."
        attribution="Praxis Initiative"
      />

      <NewsContent />
    </main>
  );
}
