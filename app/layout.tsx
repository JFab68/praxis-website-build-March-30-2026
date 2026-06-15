import type { Metadata } from "next";
import {
  Space_Grotesk,
  Plus_Jakarta_Sans,
  DM_Serif_Display,
  JetBrains_Mono,
} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://praxisinitiative.org"),
  title: {
    default:
      "Praxis Initiative | Criminal Legal Reform & Prison Oversight Arizona",
    template: "%s | Praxis Initiative",
  },
  description:
    "Praxis Initiative transforms Arizona's criminal legal system through lived-experience leadership, independent prison oversight, harm reduction, and returning citizen empowerment programs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://praxisinitiative.org",
    siteName: "Praxis Initiative",
    title:
      "Praxis Initiative | Criminal Legal Reform & Prison Oversight Arizona",
    description:
      "Transforming Arizona's criminal legal system through lived experience, evidence-based reform, and direct programming for returning citizens.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
