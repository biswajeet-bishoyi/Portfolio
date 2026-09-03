import type { Metadata } from "next";
import { TerminalDossier } from "@/components/sections/terminal-dossier";

export const metadata: Metadata = {
  title: "Terminal Dossier — Biswajeet Bishoyi // SYS_ARCH",
  description: "Career trajectory, academic timeline, interactive CLI console, and direct contact dispatch for Biswajeet Bishoyi.",
};

export default function TerminalPage() {
  return <TerminalDossier />;
}
