"use client";

import * as React from "react";
import { ArrowUp, Terminal, Shield, Cpu, MapPin } from "lucide-react";

export function WorkstationFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[#434655] bg-[#0c0e12] mt-20 text-[#8d90a1] font-mono text-xs">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 py-8">
        
        {/* Top HUD Telemetry Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-6 border-b border-[#434655]/60 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2e6bff]" />
            <span className="text-[#e2e2e8] uppercase">NODE // BHUBANESWAR.IN</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#ff5708]" />
            <span>20°17'N 85°49'E // WGS84</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#b5c4ff]" />
            <span>STACK // NEXT.JS + THREE.JS + TAILWIND</span>
          </div>
          <div className="flex items-center justify-start md:justify-end gap-2">
            <span className="inline-block w-2 h-2 bg-[#ff5708] animate-pip" />
            <span className="text-[#ffb59c]">SYS_STATUS: NOMINAL</span>
          </div>
        </div>

        {/* Middle Meta Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-[#e2e2e8] font-bold text-sm tracking-wide mb-1 font-sans">
              BISWAJEET BISHOYI
            </div>
            <p className="text-[#8d90a1] text-[11px] max-w-md">
              Civil Engineering Student @ SRMIST Chennai. Structural Analysis, Computational Tools & Visual Systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a
              href="mailto:bishoyibiswajeet@gmail.com"
              className="text-[#c3c5d8] hover:text-[#b5c4ff] hover:underline"
            >
              bishoyibiswajeet@gmail.com
            </a>
            <span>//</span>
            <a
              href="https://github.com/biswajeet-bishoyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c3c5d8] hover:text-[#b5c4ff] hover:underline"
            >
              GITHUB
            </a>
            <span>//</span>
            <a
              href="https://linkedin.com/in/biswajeetbishoyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c3c5d8] hover:text-[#b5c4ff] hover:underline"
            >
              LINKEDIN
            </a>
            <span>//</span>
            <a
              href="https://x.com/BiswajeetBisho5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c3c5d8] hover:text-[#b5c4ff] hover:underline"
            >
              TWITTER / X
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#434655] bg-[#1a1c20] text-[#e2e2e8] hover:border-[#2e6bff] hover:text-[#b5c4ff] transition-all tectonic-lift text-xs"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright hairline */}
        <div className="mt-8 pt-4 border-t border-[#434655]/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#8d90a1]">
          <div>ISO-216 CALIBRATED // © {new Date().getFullYear()} BISWAJEET BISHOYI // ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span>BRANCH: MAIN@9F4B2C</span>
            <span className="text-[#434655]">|</span>
            <span>LAT: 20.2833° N</span>
            <span className="text-[#434655]">|</span>
            <span>LON: 85.8167° E</span>
            <span className="text-[#434655]">|</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#2e6bff] animate-pip inline-block" />
              NODE_HEARTBEAT: ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
