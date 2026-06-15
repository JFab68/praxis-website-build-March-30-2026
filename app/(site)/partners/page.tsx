import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PartnersContent from "./PartnersContent";

export const metadata: Metadata = {
  title: "Friends & Partners | Praxis Initiative",
  description:
    "Meet the coalition partners and organizations working alongside Praxis Initiative to reform Arizona's criminal legal system and fund independent oversight.",
};

export default function PartnersPage() {
  return (
    <main>
      <Hero
        title="Friends & Partners"
        subtitle="The organizations and advocates who stand with Praxis Initiative in the fight for criminal legal reform."
      />
      <PartnersContent />
    </main>
  );
}
