import type { Metadata } from "next";
import { WorksRegistry } from "@/components/sections/works-registry";

export const metadata: Metadata = {
  title: "Works Registry — Biswajeet Bishoyi // SYS_ARCH",
  description: "Portfolio registry of Biswajeet Bishoyi — Civil Engineering student at SRMIST Chennai. FEA tools, ML models, 3D platforms, and computational design systems.",
};

export default function WorksPage() {
  return <WorksRegistry />;
}
