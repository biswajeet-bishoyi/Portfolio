"use client";

import * as React from "react";
import { HardHat, Code2, PenTool, TrendingUp, Award, CheckCircle, ExternalLink, Cpu, Layers } from "lucide-react";

type Domain = {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  telemetry: { label: string; value: string }[];
  skills: string[];
};

const DOMAINS: Domain[] = [
  {
    id: "civil",
    code: "DOM_01 // STRUCTURAL & CIVIL",
    title: "Civil Engineering & Infrastructure",
    category: "PHYSICAL TECTONICS",
    description: "Structural drafting, finite element analysis, pre-construction planning, site execution monitoring, and tendering calculations for residential and public infrastructure.",
    icon: HardHat,
    telemetry: [
      { label: "STANDARDS:", value: "IS:456 / IS:800 / AISC" },
      { label: "CAD / FEA:", value: "AutoCAD + STAAD-Pro" },
      { label: "MANAGEMENT:", value: "Tender Estimation / Site QA" }
    ],
    skills: [
      "AutoCAD",
      "STAAD-Pro",
      "Site Supervision",
      "Pre-Construction",
      "Site Inspections",
      "Project Estimation",
      "Tender Preparation",
      "Tender Management",
      "Hydraulic Simulation",
      "Structural Steel"
    ]
  },
  {
    id: "software",
    code: "DOM_02 // COMPUTATION & DEV",
    title: "Computational Systems & Software",
    category: "ALGORITHMIC CODE",
    description: "Developing browser-based engineering computation tools, machine learning pipelines for material modeling, and interactive WebGL / Three.js 3D web applications.",
    icon: Code2,
    telemetry: [
      { label: "CORE STACK:", value: "TypeScript / Python / C" },
      { label: "WEBGL / 3D:", value: "Three.js / React Three Fiber" },
      { label: "INTELLIGENCE:", value: "TensorFlow.js / Scikit-Learn" }
    ],
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "C / Java",
      "Three.js",
      "WebGL",
      "TensorFlow.js",
      "Scikit-Learn",
      "Streamlit",
      "Tailwind CSS"
    ]
  },
  {
    id: "design",
    code: "DOM_03 // GRAPHIC PRECISION",
    title: "Design Systems & Visual Identity",
    category: "SWISS METROLOGY",
    description: "Precision Swiss grid design, brand identity systems, corporate vector collateral, typography hierarchy, and UI/UX design crafted with mathematical rigor.",
    icon: PenTool,
    telemetry: [
      { label: "EXPERIENCE:", value: "7+ Years Freelance & Agency" },
      { label: "DESIGN SUITE:", value: "Figma / Adobe Illustrator" },
      { label: "TYPOGRAPHY:", value: "Swiss Grid / Modernism" }
    ],
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "Brand Identity",
      "Logo Design",
      "UI/UX Design",
      "Typography Systems",
      "Canva Pro",
      "Vector Systems",
      "Editorial Layout"
    ]
  },
  {
    id: "strategy",
    code: "DOM_04 // STRATEGY & MARKETING",
    title: "Digital Strategy & Growth",
    category: "DISTRIBUTION & ANALYTICS",
    description: "Search engine optimization (SEO), search marketing (SEM), digital campaign analytics, and structured technical storytelling for digital products.",
    icon: TrendingUp,
    telemetry: [
      { label: "SEARCH:", value: "SEO / SEM / Schema.org" },
      { label: "ENGAGEMENT:", value: "Social Media Campaigns" },
      { label: "WORK-BASED:", value: "Agency & Freelance Client Delivery" }
    ],
    skills: [
      "SEO & SEM",
      "Digital Marketing",
      "Social Media Strategy",
      "Content Architecture",
      "Growth Analytics",
      "Campaign Design"
    ]
  }
];

const CERTIFICATIONS = [
  {
    title: "Hack and Hit",
    issuer: "Technical Hackathon & Certification",
    date: "Feb 2025",
    link: "#",
    tag: "HACKATHON"
  },
  {
    title: "From GPS To Autopilot: Drone Navigation Systems",
    issuer: "Skyy Skill Academy",
    date: "Feb 2025",
    link: "#",
    tag: "AVIONICS & AUTONOMY"
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    date: "Jan 2025",
    link: "#",
    tag: "APPLIED AI"
  },
  {
    title: "Performance Based Scholarship",
    issuer: "SRM Institute of Science and Technology",
    date: "Jan 2025",
    link: "#",
    tag: "ACADEMIC EXCELLENCE"
  },
  {
    title: "Sustainable Tech Solutions for Pollution Control",
    issuer: "Coimbatore Institute of Engineering and Tech",
    date: "Dec 2024",
    link: "#",
    tag: "ENVIRONMENTAL ENG"
  },
  {
    title: "Problem Solving Through Programming in C",
    issuer: "NPTEL (National Programme on Tech Enhanced Learning)",
    date: "Apr 2024",
    link: "#",
    tag: "COMPUTER SCIENCE"
  }
];

export function CompetencyMatrix() {
  const [selectedDomain, setSelectedDomain] = React.useState<string>("civil");

  return (
    <section id="matrix" className="space-y-8 pt-8">
      {/* SECTION TELEMETRY STRIP */}
      <div className="flex flex-wrap justify-between items-center text-[#8d90a1] font-mono text-[11px] border-b border-[#434655]/60 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-[#2e6bff] font-bold">[04_MATRIX]</span>
          <span className="text-[#434655]">|</span>
          <span className="text-[#e2e2e8]">COMPETENCY MATRIX & COMPUTATION LAB</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#ff5708] animate-pip" />
          <span className="text-[#ffb59c]">CALIBRATED: 4 DOMAINS // 36 SKILLS</span>
        </div>
      </div>

      {/* HEADER BANNER */}
      <div className="border border-[#434655] bg-[#0c0e12] p-4 md:p-8 relative crosshair-corner">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 border-b border-[#434655]/60 pb-6">
          <div className="max-w-3xl">
            <div className="font-mono text-xs text-[#2e6bff] mb-2 tracking-widest flex items-center gap-2 font-bold">
              <span>[SPEC_LAB // SESSION_ID: #00984-ALPHA]</span>
              <span className="inline-block w-4 h-[1px] bg-[#2e6bff]" />
              <span>COMPUTATIONAL CIVIL & TECH MATRIX</span>
            </div>
            <h2 className="font-title text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight">
              COMPETENCY MATRIX & CAPABILITIES
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#8d90a1] bg-[#1a1c20] border border-[#434655] p-3">
            <Cpu className="w-4 h-4 text-[#2e6bff]" />
            <span>DUAL-ENGINE: CIVIL RIGOR + CODE DESIGN</span>
          </div>
        </div>

        <p className="pt-4 text-xs sm:text-sm text-[#c3c5d8] leading-relaxed max-w-4xl">
          A multi-disciplinary skill registry unifying engineering mechanics, algorithmic code architecture, Swiss design systems, and digital analytics.
        </p>
      </div>

      {/* 4-COLUMN DOMAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DOMAINS.map((domain) => {
          const Icon = domain.icon;
          const isSelected = selectedDomain === domain.id;
          return (
            <div
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`p-5 border cursor-pointer flex flex-col justify-between transition-all duration-150 relative crosshair-corner ${
                isSelected
                  ? "bg-[#1a1c20] border-[#2e6bff] shadow-[2px_2px_0px_0px_#2e6bff]"
                  : "bg-[#0c0e12] border-[#434655] hover:border-[#b5c4ff] hover:bg-[#1a1c20]/60"
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-[#8d90a1] mb-3">
                  <span className={isSelected ? "text-[#ff5708] font-bold" : "text-[#8d90a1]"}>
                    {domain.code}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#2e6bff]" : "text-[#8d90a1]"}`} />
                </div>

                <h3 className="font-title text-base font-bold text-white mb-2 leading-tight">
                  {domain.title}
                </h3>

                <p className="text-xs text-[#c3c5d8] mb-4 leading-relaxed line-clamp-3">
                  {domain.description}
                </p>

                {/* Telemetry rows */}
                <div className="space-y-1.5 mb-4 border-t border-b border-[#434655]/40 py-2.5 font-mono text-[10px]">
                  {domain.telemetry.map((t) => (
                    <div key={t.label} className="flex justify-between">
                      <span className="text-[#8d90a1]">{t.label}</span>
                      <span className="text-[#b5c4ff] font-bold text-right">{t.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Pill Chips */}
              <div>
                <div className="flex flex-wrap gap-1">
                  {domain.skills.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 border border-[#434655] bg-[#0c0e12] font-mono text-[9px] text-[#e2e2e8]"
                    >
                      {skill}
                    </span>
                  ))}
                  {domain.skills.length > 6 && (
                    <span className="px-1.5 py-0.5 font-mono text-[9px] text-[#ffb59c]">
                      +{domain.skills.length - 6} more
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-2 border-t border-[#434655]/30 flex items-center justify-between font-mono text-[10px] text-[#2e6bff]">
                  <span>{isSelected ? "ACTIVE CLUSTER" : "SELECT CLUSTER"}</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DETAILED ACTIVE DOMAIN BREAKDOWN */}
      {(() => {
        const activeDom = DOMAINS.find((d) => d.id === selectedDomain) || DOMAINS[0];
        return (
          <div className="border border-[#2e6bff] bg-[#1a1c20] p-6 relative crosshair-corner">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#434655] pb-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#ff5708]" />
                <span className="font-mono text-sm text-white font-bold uppercase">
                  ACTIVE DOMAIN // {activeDom.title}
                </span>
              </div>
              <span className="font-mono text-xs text-[#b5c4ff] bg-[#0c0e12] px-3 py-1 border border-[#434655]">
                {activeDom.category}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#c3c5d8] mb-6 max-w-3xl leading-relaxed">
              {activeDom.description}
            </p>

            <div className="font-mono text-xs text-[#8d90a1] uppercase mb-3 font-semibold">
              COMPLETE REGISTERED SKILLSET //
            </div>

            <div className="flex flex-wrap gap-2">
              {activeDom.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1.5 bg-[#0c0e12] border border-[#434655] font-mono text-xs text-white flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#2e6bff]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* VERIFIED LICENSES & CERTIFICATIONS SECTION */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b border-[#434655] pb-2">
          <div className="font-mono text-xs text-white uppercase flex items-center gap-2 font-bold">
            <Award className="w-4 h-4 text-[#ff5708]" />
            <span>LICENSES & VERIFIED CREDENTIALS ({CERTIFICATIONS.length})</span>
          </div>
          <span className="font-mono text-[11px] text-[#8d90a1]">SRMIST / NPTEL / PROFESSIONAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="border border-[#434655] bg-[#0c0e12] p-4 flex flex-col justify-between hover:border-[#2e6bff] transition-all tectonic-lift crosshair-corner"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[9px] text-[#ffb59c] mb-2">
                  <span className="px-1.5 py-0.5 bg-[#1a1c20] border border-[#434655]">
                    {cert.tag}
                  </span>
                  <span className="text-[#8d90a1]">{cert.date}</span>
                </div>

                <h4 className="font-title text-sm font-bold text-white mb-1">
                  {cert.title}
                </h4>

                <div className="text-xs text-[#8d90a1] font-mono">
                  {cert.issuer}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#434655]/40 flex items-center justify-between">
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> VERIFIED
                </span>

                {cert.link && cert.link !== "#" ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-[#b5c4ff] hover:underline flex items-center gap-1"
                  >
                    <span>CREDENTIAL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="font-mono text-[10px] text-[#8d90a1]">INSTITUTIONAL</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================= */}
      {/* [03_MATRIX] // COMPREHENSIVE TOOLCHAIN & COMPUTE STACK           */}
      {/* ================================================================= */}
      <div className="border border-[#434655] bg-[#0c0e12] p-4 md:p-6 crosshair-corner">
        {/* Section header with compliance badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#434655]/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-white font-bold uppercase">[04_MATRIX] // TOOLCHAIN & COMPUTE STACK</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
            <span className="px-2 py-0.5 border border-[#434655] bg-[#1a1c20] text-[#b5c4ff]">AUTOCAD .DWG COMPLIANT</span>
            <span className="px-2 py-0.5 border border-[#434655] bg-[#1a1c20] text-[#ffb59c]">AISC / ACI 318 STANDARD</span>
            <span className="px-2 py-0.5 border border-[#434655] bg-[#1a1c20] text-[#8d90a1]">TABLE_REF: STACK_2025.02</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full font-mono text-[11px] border-collapse">
            <thead>
              <tr className="border-b border-[#434655]">
                <th className="px-4 py-2.5 text-left text-[#8d90a1] font-bold uppercase w-10">ID</th>
                <th className="px-4 py-2.5 text-left text-[#8d90a1] font-bold uppercase">DISCIPLINE</th>
                <th className="px-4 py-2.5 text-left text-[#8d90a1] font-bold uppercase">FRAMEWORKS</th>
                <th className="px-4 py-2.5 text-left text-[#8d90a1] font-bold uppercase hidden sm:table-cell">BENCHMARKS</th>
                <th className="px-4 py-2.5 text-left text-[#8d90a1] font-bold uppercase">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: FEA & BIM */}
              <tr className="border-b border-[#434655]/60 hover:bg-[#1a1c20]/50 transition-colors group">
                <td className="px-4 py-3 text-[#ff5708] font-bold">01</td>
                <td className="px-4 py-3 text-white font-bold">FINITE ELEMENT &amp; BIM</td>
                <td className="px-4 py-3 text-[#c3c5d8]">
                  <div className="flex flex-wrap gap-1">
                    {["AutoCAD", "STAAD-Pro", "Revit", "SAP2000", "OpenSees"].map((f) => (
                      <span key={f} className="px-1.5 py-0.5 border border-[#434655] bg-[#111317] text-[10px] text-[#b5c4ff]">{f}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-[#8d90a1] hidden sm:table-cell">IS:456 / IS:800 / AISC</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 bg-[#1a1c20] border border-[#2e6bff] text-[#2e6bff] font-bold text-[10px]">PROD_READY // DAILY</span>
                </td>
              </tr>

              {/* Row 2: Compute & Graphics */}
              <tr className="border-b border-[#434655]/60 hover:bg-[#1a1c20]/50 transition-colors group">
                <td className="px-4 py-3 text-[#ff5708] font-bold">02</td>
                <td className="px-4 py-3 text-white font-bold">COMPUTE &amp; GRAPHICS</td>
                <td className="px-4 py-3 text-[#c3c5d8]">
                  <div className="flex flex-wrap gap-1">
                    {["TypeScript", "Three.js", "WebGL", "Python", "C/Java"].map((f) => (
                      <span key={f} className="px-1.5 py-0.5 border border-[#434655] bg-[#111317] text-[10px] text-[#b5c4ff]">{f}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-[#8d90a1] hidden sm:table-cell">60 FPS GPGPU</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 bg-[#1a1c20] border border-[#2e6bff] text-[#2e6bff] font-bold text-[10px]">PROD_READY // DAILY</span>
                </td>
              </tr>

              {/* Row 3: Data Engineering & Sim */}
              <tr className="border-b border-[#434655]/60 hover:bg-[#1a1c20]/50 transition-colors group">
                <td className="px-4 py-3 text-[#ff5708] font-bold">03</td>
                <td className="px-4 py-3 text-white font-bold">DATA ENGINEERING &amp; SIM</td>
                <td className="px-4 py-3 text-[#c3c5d8]">
                  <div className="flex flex-wrap gap-1">
                    {["NumPy/SciPy", "TensorFlow.js", "Streamlit", "Pandas"].map((f) => (
                      <span key={f} className="px-1.5 py-0.5 border border-[#434655] bg-[#111317] text-[10px] text-[#b5c4ff]">{f}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-[#8d90a1] hidden sm:table-cell">Distributed optimization</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 bg-[#1a1c20] border border-[#2e6bff] text-[#2e6bff] font-bold text-[10px]">PROD_READY // DAILY</span>
                </td>
              </tr>

              {/* Row 4: Typography & Brand */}
              <tr className="border-b border-[#434655]/60 hover:bg-[#1a1c20]/50 transition-colors group">
                <td className="px-4 py-3 text-[#ff5708] font-bold">04</td>
                <td className="px-4 py-3 text-white font-bold">TYPOGRAPHY &amp; BRAND</td>
                <td className="px-4 py-3 text-[#c3c5d8]">
                  <div className="flex flex-wrap gap-1">
                    {["Figma", "Adobe Suite", "Canva Pro"].map((f) => (
                      <span key={f} className="px-1.5 py-0.5 border border-[#434655] bg-[#111317] text-[10px] text-[#b5c4ff]">{f}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-[#8d90a1] hidden sm:table-cell">Swiss grid strictness</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 bg-[#1a1c20] border border-[#b5c4ff] text-[#b5c4ff] font-bold text-[10px]">AUTHOR // ACTIVE</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table footnote */}
        <div className="mt-3 pt-2 border-t border-[#434655]/40 flex items-center justify-between font-mono text-[10px] text-[#8d90a1]">
          <span>REGISTRY_VERSION: 2025.02 // 4 DISCIPLINES ACTIVE</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#2e6bff] animate-pip inline-block" />
            SYS_STATE: NOMINAL
          </span>
        </div>
      </div>
    </section>
  );
}
