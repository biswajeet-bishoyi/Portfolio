import type { Metadata } from "next";
import { AboutDossier } from "@/components/sections/about-dossier";

export const metadata: Metadata = {
  title: "About — Biswajeet Bishoyi",
  description: "Executive profile, statement of purpose, and engineering doctrine of Biswajeet Bishoyi.",
};

export default function AboutPage() {
  return <AboutDossier />;
}
