import type { Metadata } from "next";
import ReturningCitizensContent from "./ReturningCitizensContent";

export const metadata: Metadata = {
  title: "Returning Citizens Empowerment Programs | Praxis Initiative",
  description:
    "Digital literacy, civic engagement, and advocacy training for returning citizens in Arizona, with a dedicated track for the 50+ cohort. A funding priority program from Praxis Initiative.",
};

export default function ReturningCitizensPage() {
  return <ReturningCitizensContent />;
}
