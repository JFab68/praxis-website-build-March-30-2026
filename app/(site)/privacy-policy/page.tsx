import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-[clamp(16px,4vw,80px)] py-24">
      <SectionHeader title="Privacy Policy" subtitle="Last updated: June 2026" align="left" />
      <GlassCard variant="default" className="mt-8 space-y-6 text-[#C0C0D0]">
        <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
        <p>We only collect information you voluntarily provide to us via our forms, such as your name, email address, and areas of interest. This helps us communicate with you effectively regarding our programs and initiatives.</p>
        <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
        <p>Your information is used strictly to respond to inquiries, send relevant updates, and coordinate volunteer efforts. We do not sell or share your personal data with third parties.</p>
        <h2 className="text-xl font-bold text-white">3. Security</h2>
        <p>We take appropriate measures to ensure your data is secure. However, please be aware that no transmission over the internet is completely secure.</p>
        <h2 className="text-xl font-bold text-white">4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at info@praxisinitiative.org.</p>
      </GlassCard>
    </div>
  );
}
