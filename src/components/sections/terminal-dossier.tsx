"use client";

import * as React from "react";
import { Terminal, Send, Loader2, Mail, Phone, MapPin, Briefcase, GraduationCap, Download, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const EXPERIENCES = [
  {
    role: "Civil Engineering Intern",
    company: "Odisha Police Housing & Welfare Corporation (OPHWC)",
    period: "Dec 2025 - Jan 2026",
    location: "Bhubaneswar, Odisha",
    description: "Conducted AutoCAD drafting for F-Type residential quarters and estimated costs for 3 major public bus stands. Monitored post-tender site execution and safety practices at Excise Bhawan.",
    link: "https://drive.google.com/file/d/15dmI1QnzFciv6MjID9beAqPhZro7y0Zp/view?usp=sharing",
    linkText: "VIEW INTERNSHIP REPORT"
  },
  {
    role: "S.M.ASCE Member",
    company: "American Society of Civil Engineers (Student Chapter)",
    period: "Feb 2025 - Present",
    location: "SRMIST Chennai",
    description: "Active student chapter member participating in workshops, technical seminars, and sustainable infrastructure research discussions."
  },
  {
    role: "Graphic Design Intern",
    company: "Highway Delite",
    period: "Nov 2024 - Apr 2025",
    location: "Remote / Hybrid",
    description: "Created high-impact visual content for digital marketing campaigns, aligning graphic communication with corporate brand identity guidelines."
  },
  {
    role: "Graphic Designer",
    company: "Freelance Practice",
    period: "Apr 2018 - Apr 2025",
    location: "Bhubaneswar / Global",
    description: "7+ years delivering brand identity, logo design, vector collateral, and user interfaces for diverse clients and creative teams."
  }
];

const EDUCATION = [
  {
    degree: "B.Tech in Civil Engineering (with Computer Applications)",
    institution: "SRM Institute of Science and Technology",
    period: "Jun 2024 - May 2028",
    location: "Chennai, India",
    highlight: "Core: Structural Analysis, Concrete Tech, Geotechnical Eng, C/Python/Java"
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Mother's Public School",
    period: "Apr 2021 - May 2023",
    location: "Bhubaneswar, India",
    highlight: "Physics, Chemistry, Mathematics, Computer Science"
  },
  {
    degree: "Matriculation (Secondary Education)",
    institution: "St. Xavier's High School",
    period: "Apr 2020 - Mar 2021",
    location: "Bhubaneswar, India",
    highlight: "High Academic Performance & Science Honors"
  }
];

export function TerminalDossier() {
  const [terminalLogs, setTerminalLogs] = React.useState<string[]>([
    "SYS_ARCH OS v4.8.0-RELEASE (x86_64-civil-tech-tectonics)",
    "HOST: Biswajeet-Engineering-Station // AUTH_TOKEN: GRANTED",
    "$ sys_check --candidate 'BISWAJEET_BISHOYI'",
    "[OK] B.TECH CIVIL ENGINEERING // SRMIST CHENNAI",
    "[OK] FEA / BEAMLAB / STRUCTURAL COMPUTATION ENGINE",
    "[OK] OPHWC CIVIL INTERNSHIP REPORT VALIDATED",
    "$ query_status --intent 'COLLABORATION_OR_HIRING'",
    ">> CANDIDATE ACTIVE: Civil Engineering, Software Tools, 3D/Design Systems.",
    ">> TARGET TIMELINE: Immediate / 2026-2028. Location: Bhubaneswar / Remote / Global."
  ]);
  const [cliInput, setCliInput] = React.useState("");
  
  // Contact Form State
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    domain: "Engineering Collaboration",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const runMacro = (cmd: string) => {
    let response = "";
    if (cmd === "HELP") {
      response = "AVAILABLE COMMANDS: HELP, CAT CV.MD, PING BISWAJEET, CLEAR, STACK";
    } else if (cmd === "CAT CV.MD") {
      response = "RESUME: Biswajeet Bishoyi | SRMIST Civil '28 | Skills: AutoCAD, STAAD, Python, JS, Three.js, Figma";
    } else if (cmd === "PING BISWAJEET") {
      response = "PING: 200 OK // bishoyibiswajeet@gmail.com // Latency 18ms";
    } else if (cmd === "STACK") {
      response = "CORE STACK: Next.js 16, React 19, Three.js, Python, TensorFlow.js, Tailwind v4";
    } else if (cmd === "CLEAR") {
      setTerminalLogs([]);
      return;
    } else {
      response = `Command not recognized: '${cmd}'. Type HELP for options.`;
    }
    setTerminalLogs((prev) => [...prev, `$ ${cmd}`, response]);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    runMacro(cliInput.trim().toUpperCase());
    setCliInput("");
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.domain,
          message: formData.message
        })
      });

      if (!res.ok) throw new Error("Dispatch failed");

      toast.success("TRANSMISSION ACKNOWLEDGED", {
        description: "Your dispatch packet has been routed to Biswajeet's inbox."
      });
      setTerminalLogs((prev) => [
        ...prev,
        `$ packet_dispatch --from '${formData.email}'`,
        "[STATUS 200] Packet encrypted & delivered to bishoyibiswajeet@gmail.com."
      ]);
      setFormData({ name: "", email: "", domain: "Engineering Collaboration", message: "" });
    } catch (error) {
      toast.error("Dispatch Packet Failed", {
        description: "Please email directly at bishoyibiswajeet@gmail.com"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="terminal" className="space-y-8 pt-8">
      {/* SECTION TELEMETRY STRIP */}
      <div className="flex flex-wrap justify-between items-center text-[#8d90a1] font-mono text-[11px] border-b border-[#434655]/60 pb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#ff5708] font-bold">[05_TERMINAL]</span>
          <span className="text-[#434655]">|</span>
          <span className="text-[#e2e2e8]">CAREER DOSSIER & DISPATCH CONSOLE</span>
          <span className="text-[#434655]">|</span>
          <span className="text-[#8d90a1]">ISO-216 CALIBRATION</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#2e6bff] animate-pip" />
          <span className="text-[#e2e2e8]">UPLINK: ENCRYPTED // TLS 1.3</span>
          <span className="text-[#434655]">|</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#2e6bff]" />
            <span className="text-[#b5c4ff]">SYS_STATUS: NOMINAL</span>
          </span>
        </div>
      </div>

      {/* HEADER BANNER */}
      <div className="border border-[#434655] bg-[#0c0e12] p-4 md:p-8 relative crosshair-corner">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 border-b border-[#434655]/60 pb-6">
          <div className="max-w-3xl">
            <div className="font-mono text-xs text-[#ff5708] mb-2 tracking-widest flex items-center gap-2 font-bold">
              <span>[DOSSIER_ID // BB-9920-SRM]</span>
              <span className="inline-block w-4 h-[1px] bg-[#ff5708]" />
              <span>CAREER TIMELINE & DISPATCH</span>
            </div>
            <h2 className="font-title text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight">
              TERMINAL DOSSIER & DISPATCH CONSOLE
            </h2>
          </div>

          <a
            href="https://drive.google.com/file/d/1B4yx4EbrV6w2_P0RF7SdhD4KBSbiDPm3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#2e6bff] text-white font-mono text-xs font-bold uppercase flex items-center gap-2 tectonic-lift"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD COMPLETE DOSSIER (PDF)</span>
          </a>
        </div>

        <p className="pt-4 text-xs sm:text-sm text-[#c3c5d8] leading-relaxed max-w-4xl">
          Verified academic trajectory, civil engineering internships, design practice, and direct command packet dispatch for project inquiries and engineering collaborations.
        </p>
      </div>

      {/* 2-COLUMN WORKSTATION LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Terminal & Direct Packet Dispatch Form */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. CLI Interactive Terminal */}
          <div className="border border-[#434655] bg-[#0c0e12] crosshair-corner">
            
            {/* Terminal Header */}
            <div className="bg-[#1a1c20] border-b border-[#434655] px-4 py-2.5 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-bold">
                <Terminal className="w-4 h-4 text-[#2e6bff]" />
                <span>SYS_ARCH CLI TERMINAL // TELEMETRY</span>
              </div>
              <div className="text-[10px] text-[#8d90a1]">SESSION: #984-ACTIVE</div>
            </div>

            {/* Output Logs Window (Full view, no scrollbars) */}
            <div className="p-4 bg-[#0c0e12] font-mono text-xs text-[#c3c5d8] space-y-1.5 border-b border-[#434655]">
              {terminalLogs.map((log, i) => {
                let colorClass = "text-[#8d90a1]";
                if (log.startsWith("$")) {
                  colorClass = "text-[#2e6bff] font-bold";
                } else if (log.startsWith(">>")) {
                  colorClass = "text-[#ff5708] font-medium";
                } else if (log.startsWith("[OK]")) {
                  colorClass = "text-[#8d90a1]";
                } else if (log.startsWith("HOST:") || log.startsWith("SYS_ARCH")) {
                  colorClass = "text-[#c3c5d8]";
                }
                return (
                  <div key={i} className={colorClass}>
                    {log}
                  </div>
                );
              })}
              {/* Beating cursor at the end like in the Stitch design */}
              <div className="flex items-center gap-1.5 text-[#2e6bff] font-bold pt-1">
                <span>$ awaiting_dispatch_packet</span>
                <span className="inline-block w-2 h-3.5 bg-[#2e6bff] animate-pip align-middle" />
              </div>
            </div>

            {/* Macro Buttons */}
            <div className="p-2.5 bg-[#1a1c20] flex flex-wrap items-center gap-1.5 border-b border-[#434655] font-mono text-[10px]">
              <span className="text-[#8d90a1] mr-1">MACROS:</span>
              <button
                onClick={() => runMacro("HELP")}
                className="px-2 py-0.5 border border-[#434655] bg-[#0c0e12] text-[#e2e2e8] hover:border-[#2e6bff] hover:text-[#b5c4ff]"
              >
                [$ HELP]
              </button>
              <button
                onClick={() => runMacro("CAT CV.MD")}
                className="px-2 py-0.5 border border-[#434655] bg-[#0c0e12] text-[#e2e2e8] hover:border-[#2e6bff] hover:text-[#b5c4ff]"
              >
                [$ CAT CV.MD]
              </button>
              <button
                onClick={() => runMacro("PING BISWAJEET")}
                className="px-2 py-0.5 border border-[#434655] bg-[#0c0e12] text-[#e2e2e8] hover:border-[#2e6bff] hover:text-[#b5c4ff]"
              >
                [$ PING]
              </button>
              <button
                onClick={() => runMacro("STACK")}
                className="px-2 py-0.5 border border-[#434655] bg-[#0c0e12] text-[#e2e2e8] hover:border-[#2e6bff] hover:text-[#b5c4ff]"
              >
                [$ STACK]
              </button>
              <button
                onClick={() => runMacro("CLEAR")}
                className="px-2 py-0.5 border border-[#434655] bg-[#0c0e12] text-[#ffb59c] hover:border-[#ff5708]"
              >
                [$ CLEAR]
              </button>
            </div>

            {/* CLI Input Row */}
            <form onSubmit={handleCliSubmit} className="p-2 bg-[#0c0e12] flex items-center gap-2">
              <span className="font-mono text-xs text-[#2e6bff] pl-2 font-bold">$</span>
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="Type command or click a macro above..."
                className="flex-1 bg-transparent border-0 font-mono text-xs text-white focus:outline-none placeholder:text-[#434655]"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-[#2e6bff] text-white font-mono text-xs uppercase hover:bg-[#2e6bff]/90 font-bold"
              >
                EXEC
              </button>
            </form>
          </div>

          {/* 2. Direct Packet Dispatch Console (Contact Form) */}
          <div className="border border-[#434655] bg-[#0c0e12] crosshair-corner">
            <div className="bg-[#1a1c20] border-b border-[#434655] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase">
                <Send className="w-4 h-4 text-[#ff5708]" />
                <span>DIRECT PACKET DISPATCH // HIGH-PRIORITY UPLINK</span>
              </div>
              <span className="font-mono text-[10px] text-[#8d90a1]">TLS 1.3 POST</span>
            </div>

            <form onSubmit={handleContactSubmit} className="p-5 space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-[#8d90a1] uppercase mb-1">
                    SENDER_CALLSIGN // NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Prof. Davis / Studio Arup"
                    className="w-full bg-[#1a1c20] border border-[#434655] text-white text-xs px-3 py-2.5 font-mono focus:border-[#2e6bff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#8d90a1] uppercase mb-1">
                    RETURN_DISPATCH_EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@organization.com"
                    className="w-full bg-[#1a1c20] border border-[#434655] text-white text-xs px-3 py-2.5 font-mono focus:border-[#2e6bff] focus:outline-none"
                  />
                </div>
              </div>

              {/* Engagement Domain Category */}
              <div>
                <label className="block font-mono text-[10px] text-[#8d90a1] uppercase mb-1.5">
                  ENGAGEMENT_DOMAIN // SELECT MANDATE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px]">
                  {[
                    "Civil & Structural",
                    "Software & Tools",
                    "Design Systems",
                    "Internship & Roles"
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setFormData({ ...formData, domain: cat })}
                      className={`p-2 border text-left transition-colors uppercase ${
                        formData.domain === cat
                          ? "bg-[#2e6bff] text-white border-[#2e6bff] font-bold"
                          : "bg-[#1a1c20] text-[#c3c5d8] border-[#434655] hover:border-[#b5c4ff]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Payload */}
              <div>
                <label className="block font-mono text-[10px] text-[#8d90a1] uppercase mb-1">
                  MESSAGE_SPECIFICATION_PAYLOAD *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="// Specify engineering mandate, project scope, technical query, or hiring timeframe..."
                  className="w-full bg-[#1a1c20] border border-[#434655] text-white text-xs p-3 font-mono focus:border-[#2e6bff] focus:outline-none resize-none"
                />
              </div>

              {/* Submit & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#434655]/60">
                <div className="font-mono text-[10px] text-[#8d90a1]">
                  RESPONSE ESTIMATE: &lt; 24 HRS // BHUBANESWAR NODE
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#ff5708] text-white font-mono text-xs font-bold uppercase flex items-center justify-center gap-2 hover:bg-[#ff5708]/90 disabled:opacity-50 tectonic-lift-orange"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>[TRANSMIT_PACKET // EXECUTE]</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Professional Experience & Academic Dossier */}
        <div className="lg:col-span-5 space-y-6">
          {/* Experience Timeline */}
          <div className="border border-[#434655] bg-[#0c0e12] crosshair-corner">
            <div className="bg-[#1a1c20] border-b border-[#434655] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase">
                <Briefcase className="w-4 h-4 text-[#2e6bff]" />
                <span>PROFESSIONAL ENGAGEMENTS</span>
              </div>
              <span className="font-mono text-[10px] text-[#ffb59c]">4 ROLES</span>
            </div>

            <div className="p-4 space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="border-b border-[#434655]/40 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start font-mono text-[10px] text-[#8d90a1] mb-1">
                    <span className="text-[#b5c4ff] font-bold">{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>

                  <h4 className="font-title text-sm font-bold text-white">
                    {exp.role}
                  </h4>
                  <div className="text-xs text-[#ffb59c] font-mono mb-2">
                    {exp.company}
                  </div>

                  <p className="text-xs text-[#c3c5d8] leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-[#2e6bff] hover:underline mt-2"
                    >
                      <span>{exp.linkText}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Credentials */}
          <div className="border border-[#434655] bg-[#0c0e12] crosshair-corner">
            <div className="bg-[#1a1c20] border-b border-[#434655] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase">
                <GraduationCap className="w-4 h-4 text-[#ff5708]" />
                <span>ACADEMIC TRAJECTORY</span>
              </div>
              <span className="font-mono text-[10px] text-[#b5c4ff]">B.TECH '28</span>
            </div>

            <div className="p-4 space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="border-b border-[#434655]/40 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start font-mono text-[10px] text-[#8d90a1] mb-1">
                    <span className="text-[#ffb59c] font-bold">{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>

                  <h4 className="font-title text-sm font-bold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-[#b5c4ff] font-mono mb-1">
                    {edu.institution}
                  </div>

                  <p className="text-xs text-[#8d90a1] font-mono">
                    {edu.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
