import type { Metadata } from "next";
import { TectonicsLab } from "@/components/sections/tectonics-lab";

export const metadata: Metadata = {
  title: "Tectonics Lab — Biswajeet Bishoyi // SYS_ARCH",
  description: "Interactive steel truss structural mechanics solver with real-time FEA calculations — IS:800 / AISC 360.",
};

export default function TectonicsPage() {
  return <TectonicsLab />;
}
