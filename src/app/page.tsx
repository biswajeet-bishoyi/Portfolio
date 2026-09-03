import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cpu, Database, Terminal, Grid3X3, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Biswajeet Bishoyi // SYS_ARCH — Civil Engineer & Technologist",
  description: "Engineering workstation of Biswajeet Bishoyi — Civil Engineering student, computational designer, and technologist.",
};

const STATIONS = [
  {
    id: "01",
    label: "WORKS REGISTRY",
    sublabel: "Project Catalog",
    href: "/works",
    icon: Grid3X3,
    accent: "#ff5708",
    tags: ["BeamLab", "Apex Precision 3D", "AI Soil Predictor", "FEA Tools"],
    desc: "Full catalog of engineering, computation, and 3D creative projects.",
  },
  {
    id: "02",
    label: "EXECUTIVE DOSSIER",
    sublabel: "About & Profile",
    href: "/about",
    icon: User,
    accent: "#b5c4ff",
    tags: ["Portrait", "Bio", "Stats", "Core Traits"],
    desc: "Who I am — engineering doctrine, design philosophy, and personal statement.",
  },
  {
    id: "03",
    label: "TECTONICS LAB",
    sublabel: "Structural Solver",
    href: "/tectonics",
    icon: Cpu,
    accent: "#2e6bff",
    tags: ["FEA Solver", "Truss Analysis", "IS:800", "Live Sliders"],
    desc: "Interactive steel truss structural mechanics calculator with real-time FEA.",
  },
  {
    id: "04",
    label: "COMPETENCY MATRIX",
    sublabel: "Skills & Certs",
    href: "/matrix",
    icon: Database,
    accent: "#ff5708",
    tags: ["Civil", "Computation", "Design", "Strategy"],
    desc: "Multi-domain competency registry spanning engineering, software, and design.",
  },
  {
    id: "05",
    label: "TERMINAL DOSSIER",
    sublabel: "Career & Contact",
    href: "/terminal",
    icon: Terminal,
    accent: "#b5c4ff",
    tags: ["Timeline", "CLI Console", "Contact Form", "Dispatch"],
    desc: "Career trajectory, academic dossier, and direct packet dispatch console.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">

      {/* Boot Header Strip */}
      <div className="border-b border-[#434655] py-2 px-0 font-mono text-[11px] text-[#434655] flex items-center justify-between select-none">
        <span>SYS_ARCH // WORKSTATION_BOOT_v1.0 // BB-2028-CE</span>
        <span className="text-[#ff5708]">STATUS: NOMINAL ● ALL SYSTEMS GO</span>
      </div>

      {/* Hero Identity Block */}
      <div className="border border-[#434655] bg-[#111317] crosshair-corner mt-6 p-8 sm:p-10 lg:p-14 relative overflow-hidden">
        {/* Subtle blueprint lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #b5c4ff 0px, #b5c4ff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #b5c4ff 0px, #b5c4ff 1px, transparent 1px, transparent 40px)",
          }}
        />

        <div className="relative z-10 max-w-4xl">
          <div className="font-mono text-xs text-[#ff5708] font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#ff5708] animate-pip" />
            <span>// IDENTITY NODE [BOOT_SEQUENCE_COMPLETE]</span>
          </div>

          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-[0.95] mb-6">
            BISWAJEET<br />
            <span className="text-[#2e6bff]">BISHOYI</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Civil Engineering Student", "SRMIST Chennai '28", "Computational Designer", "Software Technologist", "Freelance Designer"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 border border-[#434655] bg-[#1a1c20] font-mono text-xs text-[#c3c5d8]">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-base sm:text-lg text-[#c3c5d8] leading-relaxed max-w-2xl">
            Structural mechanics rigor <span className="text-[#ff5708] font-bold">×</span> algorithmic systems <span className="text-[#2e6bff] font-bold">×</span> visual identity — select a workstation module below.
          </p>
        </div>
      </div>

      {/* Station Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {STATIONS.map((station) => {
          const Icon = station.icon;
          return (
            <Link
              key={station.id}
              href={station.href}
              className="group border border-[#434655] bg-[#111317] p-5 flex flex-col justify-between hover:border-[#2e6bff] hover:bg-[#1a1c20] transition-all duration-150 tectonic-lift min-h-[200px]"
            >
              {/* Top row */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-[#434655] group-hover:text-[#8d90a1]">
                      [{station.id}]
                    </span>
                    <Icon className="w-4 h-4" style={{ color: station.accent }} />
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#434655] group-hover:text-white transition-colors"
                  />
                </div>

                <div className="mb-1 font-title text-base font-bold text-white group-hover:text-white uppercase tracking-tight">
                  {station.label}
                </div>
                <div className="font-mono text-[11px] mb-3" style={{ color: station.accent }}>
                  {station.sublabel}
                </div>
                <p className="text-xs text-[#8d90a1] leading-relaxed group-hover:text-[#c3c5d8]">
                  {station.desc}
                </p>
              </div>

              {/* Tag row */}
              <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-[#434655]">
                {station.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 bg-[#0c0e12] border border-[#434655] font-mono text-[10px] text-[#8d90a1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}

        {/* Resume download tile */}
        <a
          href="https://drive.google.com/file/d/1B4yx4EbrV6w2_P0RF7SdhD4KBSbiDPm3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-[#ff5708]/40 bg-[#ff5708]/5 p-5 flex flex-col justify-between hover:bg-[#ff5708]/10 hover:border-[#ff5708] transition-all duration-150 tectonic-lift-orange min-h-[200px]"
        >
          <div>
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono text-[11px] text-[#ff5708]">[06]</span>
              <ArrowUpRight className="w-4 h-4 text-[#ff5708]/50 group-hover:text-[#ff5708] transition-colors" />
            </div>
            <div className="font-title text-base font-bold text-white uppercase tracking-tight mb-1">
              DOWNLOAD DOSSIER
            </div>
            <div className="font-mono text-[11px] text-[#ff5708] mb-3">Resume (PDF)</div>
            <p className="text-xs text-[#8d90a1] leading-relaxed group-hover:text-[#c3c5d8]">
              Full CV with projects, experience, education, and skills.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#ff5708]/30 font-mono text-xs text-[#ff5708] font-bold">
            CLICK TO OPEN PDF →
          </div>
        </a>
      </div>

      {/* Footer coordinate strip */}
      <div className="mt-6 mb-2 border-t border-[#434655] pt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#434655]">
        <span>LAT: 20°17&apos;N // LON: 85°49&apos;E // BHUBANESWAR, ODISHA, INDIA</span>
        <span className="text-[#2e6bff]">NODE: bb-2028-ce.srmist.edu // UPLINK: ACTIVE</span>
      </div>
    </div>
  );
}
