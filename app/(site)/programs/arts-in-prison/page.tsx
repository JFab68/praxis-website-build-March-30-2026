import type { Metadata } from "next";
import ArtsInPrisonContent from "./ArtsInPrisonContent";

export const metadata: Metadata = {
  title: "Arts in Prison — Think Motion | Praxis Initiative",
  description:
    "Think Motion brings therapeutic movement, visual arts, music, and dance workshops to Arizona correctional facilities, led by Dr. Susan Bendix.",
};

export default function ArtsInPrisonPage() {
  return <ArtsInPrisonContent />;
}
