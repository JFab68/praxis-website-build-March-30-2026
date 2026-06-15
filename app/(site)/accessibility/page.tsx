import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-4xl px-[clamp(16px,4vw,80px)] py-24">
      <SectionHeader title="Accessibility Statement" subtitle="Our Commitment to Digital Accessibility" align="left" />
      <GlassCard variant="default" className="mt-8 space-y-6 text-[#C0C0D0]">
        <p>Praxis Initiative is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>
        <h2 className="text-xl font-bold text-white">Measures to support accessibility</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Including accessibility throughout our internal policies.</li>
          <li>Integrating accessibility into our procurement practices.</li>
          <li>Providing continual accessibility training for our staff.</li>
        </ul>
        <h2 className="text-xl font-bold text-white">Conformance Status</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Praxis Initiative strives to conform to WCAG 2.1 level AA.</p>
        <h2 className="text-xl font-bold text-white">Feedback</h2>
        <p>We welcome your feedback on the accessibility of our site. Please let us know if you encounter accessibility barriers by emailing us at info@praxisinitiative.org.</p>
      </GlassCard>
    </div>
  );
}
