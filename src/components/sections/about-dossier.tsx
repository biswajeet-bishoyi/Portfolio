"use client";

import * as React from "react";
import { CheckCircle2, Terminal, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

const STATS = [
  { value: "3+", label: "Years Engineering Study", sub: "SRMIST Chennai" },
  { value: "10+", label: "Design & Tech Projects", sub: "FEA, 3D & Web" },
  { value: "2", label: "National Conferences", sub: "Civil & Environmental" },
  { value: "7+", label: "Years Graphic Practice", sub: "Brand & Vector Systems" }
];

const TRAITS = [
  { title: "Analytical & Precise", desc: "Rigorous statics and numerical modeling grounded in civil codes (IS:456 / IS:800 / AISC 360)." },
  { title: "Design-Oriented", desc: "Swiss grid metrology, typographic hierarchy, and clean vector visual identities." },
  { title: "Tech-Forward", desc: "Building browser-based structural solvers with React, Next.js, WebGL, and Python ML." },
  { title: "Business-Minded", desc: "Tendering management, cost estimation, client branding, and digital strategy." }
];

export function AboutDossier() {
  return (
    <section id="about" className="space-y-6 pt-4">
      {/* Tectonic Marquee Banner */}
      <div className="border border-[#434655] bg-[#1a1c20] overflow-hidden py-2 select-none">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-xs text-[#b5c4ff] gap-8">
          <span>BUILDING THE FUTURE ✦ BRIDGING PHYSICAL INFRASTRUCTURE & CODE ✦ ENGINEERING SOLUTIONS ✦ DESIGNING DREAMS ✦ STRUCTURAL RIGOR ✦ ALGORITHMIC SYSTEMS ✦</span>
          <span>BUILDING THE FUTURE ✦ BRIDGING PHYSICAL INFRASTRUCTURE & CODE ✦ ENGINEERING SOLUTIONS ✦ DESIGNING DREAMS ✦ STRUCTURAL RIGOR ✦ ALGORITHMIC SYSTEMS ✦</span>
        </div>
      </div>

      {/* Main Executive Profile Container */}
      <div className="border border-[#434655] bg-[#111317] p-6 sm:p-8 lg:p-10 crosshair-corner">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#434655] mb-8 gap-4">
          <div>
            <div className="font-mono text-xs text-[#ff5708] font-bold uppercase tracking-widest flex items-center gap-2">
              <span>// EXECUTIVE DOSSIER [SEC_00_BIO]</span>
              <span className="w-4 h-[1px] bg-[#ff5708]" />
              <span>PROFILE SPECIFICATION</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
              ABOUT BISWAJEET BISHOYI
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-1 border border-[#2e6bff] bg-[#2e6bff]/10 text-[#b5c4ff] font-bold">
              ID: BB-2028-CE
            </span>
            <span className="px-2.5 py-1 border border-[#434655] bg-[#0c0e12] text-[#8d90a1]">
              STATUS: VERIFIED
            </span>
          </div>
        </div>

        {/* 2-Column Grid: Photo/Stats (Left) + Detailed Bio & Traits (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Photo & Key Metrology Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tectonic Photo Frame */}
            <div className="border border-[#434655] bg-[#0c0e12] p-3 relative crosshair-corner">
              <div className="flex justify-between font-mono text-[10px] text-[#8d90a1] pb-2 mb-2 border-b border-[#434655]/40">
                <span className="text-white font-bold">FIG_01 // CANDIDATE PORTRAIT</span>
                <span className="text-[#ff5708]">20°17'N 85°49'E</span>
              </div>

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1a1c20] border border-[#434655]">
                <img
                  src="/images/1784271769055.png"
                  alt="Biswajeet Bishoyi Portrait"
                  className="w-full h-full object-cover object-top contrast-110"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-2 left-2 right-2 bg-[#0c0e12]/90 border border-[#434655] p-2 flex items-center justify-between font-mono text-[10px]">
                  <div>
                    <div className="text-white font-bold">BISWAJEET BISHOYI</div>
                    <div className="text-[#b5c4ff]">Civil Engineer & Designer</div>
                  </div>
                  <div className="text-[#ffb59c] text-right">
                    SRMIST '28
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#434655]/40 font-mono text-xs">
                <a
                  href="https://github.com/biswajeet-bishoyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8d90a1] hover:text-white"
                >
                  <RiGithubFill className="w-4 h-4 text-[#b5c4ff]" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://linkedin.com/in/biswajeetbishoyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8d90a1] hover:text-white"
                >
                  <RiLinkedinBoxFill className="w-4 h-4 text-[#2e6bff]" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://x.com/BiswajeetBisho5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8d90a1] hover:text-white"
                >
                  <RiTwitterXFill className="w-3.5 h-3.5 text-[#ff5708]" />
                  <span>TWITTER</span>
                </a>
              </div>
            </div>

            {/* 4 Key Metrology Stats Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              {STATS.map((stat, i) => (
                <div key={i} className="p-3 border border-[#434655] bg-[#0c0e12]">
                  <div className="text-xl font-bold text-[#b5c4ff] font-title">{stat.value}</div>
                  <div className="text-xs text-white font-semibold mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#8d90a1] mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (7 Cols): Comprehensive Bio & Core Traits */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Body Paragraphs */}
            <div className="border border-[#434655] bg-[#0c0e12] p-6 space-y-4 leading-relaxed">
              <div className="font-mono text-xs text-[#2e6bff] font-bold uppercase pb-2 border-b border-[#434655]/40 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>// STATEMENT OF PURPOSE & ENGINEERING DOCTRINE</span>
              </div>

              <p className="text-base text-white font-medium">
                &ldquo;I like building things that make sense — whether it&apos;s a structure, a layout, or a piece of code.&rdquo;
              </p>

              <p className="text-sm text-[#c3c5d8]">
                I&apos;m a <strong className="text-white">Civil Engineering student at SRMIST Chennai</strong> who also works as a freelance graphic designer and coder, blending creative design intuition with analytical engineering logic.
              </p>

              <p className="text-sm text-[#c3c5d8]">
                From designing corporate brand identities and vector systems to programming in <strong className="text-[#b5c4ff]">Python, C, Java, JavaScript, TypeScript, and HTML</strong>, I&apos;ve learned that good design and strong engineering share the exact same foundation: <strong className="text-white">clarity, structural integrity, and computational precision</strong>.
              </p>

              <p className="text-sm text-[#c3c5d8]">
                Right now, I&apos;m diving deeper into structural mechanics, finite element analysis (FEA), geotechnical machine learning models, and exploring how computational geometry and real-time WebGL can reshape the way we visualize and engineer the built environment.
              </p>
            </div>

            {/* Core Traits Grid */}
            <div className="border border-[#434655] bg-[#0c0e12] p-6">
              <div className="font-mono text-xs text-white font-bold uppercase pb-3 border-b border-[#434655] mb-4 flex items-center justify-between">
                <span>CORE ENGINEERING & DESIGN TRAITS (4)</span>
                <span className="text-[#ff5708] text-[10px]">VERIFIED METHODOLOGY</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TRAITS.map((trait, idx) => (
                  <div key={idx} className="p-3 bg-[#1a1c20] border border-[#434655]/70 flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2e6bff] shrink-0" />
                      <span className="font-title text-sm font-bold text-white">{trait.title}</span>
                    </div>
                    <p className="text-xs text-[#8d90a1] leading-relaxed">
                      {trait.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Communication Channels Card */}
            <div className="border border-[#434655] bg-[#0c0e12] p-4 sm:p-5 crosshair-corner">
              <div className="font-mono text-xs text-white font-bold uppercase pb-3 border-b border-[#434655] mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2e6bff]" />
                  <span>DIRECT CONTACT CHANNELS</span>
                </div>
                <span className="text-[#ff5708] text-[10px]">ACTIVE WORKSTATION NODE</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center gap-3 p-2.5 bg-[#1a1c20] border border-[#434655] hover:border-[#2e6bff] transition-colors">
                  <Mail className="w-4 h-4 text-[#ff5708] shrink-0" />
                  <a href="mailto:bishoyibiswajeet@gmail.com" className="text-white hover:text-[#b5c4ff] truncate">
                    bishoyibiswajeet@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 p-2.5 bg-[#1a1c20] border border-[#434655] hover:border-[#2e6bff] transition-colors">
                  <Phone className="w-4 h-4 text-[#2e6bff] shrink-0" />
                  <a href="tel:+916370701405" className="text-white hover:text-[#b5c4ff]">
                    +91 6370701405
                  </a>
                </div>

                <div className="flex items-center gap-3 p-2.5 bg-[#1a1c20] border border-[#434655]">
                  <MapPin className="w-4 h-4 text-[#b5c4ff] shrink-0" />
                  <span className="text-[#c3c5d8]">Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
