import type { Metadata } from "next";
import { CompetencyMatrix } from "@/components/sections/competency-matrix";

export const metadata: Metadata = {
  title: "Competency Matrix — Biswajeet Bishoyi // SYS_ARCH",
  description: "Multi-domain competency registry spanning civil engineering, FEA, machine learning, 3D technology, and design systems.",
};

export default function MatrixPage() {
  return <CompetencyMatrix />;
}
