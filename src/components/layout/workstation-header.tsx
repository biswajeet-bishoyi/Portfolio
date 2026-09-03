"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, Code2 } from "lucide-react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "works",     label: "[01_WORKS]",     href: "/works" },
  { id: "about",     label: "[02_ABOUT]",     href: "/about" },
  { id: "tectonics", label: "[03_TECTONICS]", href: "/tectonics" },
  { id: "matrix",    label: "[04_MATRIX]",    href: "/matrix" },
  { id: "terminal",  label: "[05_TERMINAL]",  href: "/terminal" },
];

export function WorkstationHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Determine active item
  const activeId = NAV_ITEMS.find((item) => pathname === item.href)?.id ?? (pathname === "/" ? "home" : "");

  // Page-specific Stitch subtitle / telemetry badge
  const renderHeaderBadge = () => {
    switch (pathname) {
      case "/works":
        return (
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 border border-[#434655] bg-[#1a1c20] font-mono text-[11px] text-[#8d90a1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5c4ff] animate-pip inline-block" />
            <span>SYS.RUNNING: VER_4.8.2</span>
          </span>
        );
      case "/tectonics":
        return (
          <div className="hidden lg:flex items-center gap-1 px-2 py-0.5 border border-[#434655] bg-[#1a1c20] font-mono text-[11px] text-[#8d90a1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5708] inline-block animate-pip" />
            <span className="text-[#ff5708] font-bold">NODE_ID::SRM_FEA_01</span>
          </div>
        );
      case "/matrix":
        return (
          <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 border border-[#434655] bg-[#1a1c20] font-mono text-[11px] text-[#8d90a1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5c4ff] inline-block" />
            <span>SYS_CALIBRATED: REV_4.8</span>
          </div>
        );
      case "/terminal":
        return (
          <span className="font-mono text-[11px] text-[#8d90a1] hidden lg:inline-block border-l border-[#434655] pl-3">
            REV 4.8.0 // TECTONICS LAB
          </span>
        );
      case "/about":
        return (
          <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 border border-[#434655] bg-[#1a1c20] font-mono text-[11px] text-[#8d90a1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5708] inline-block animate-pip" />
            <span>DOSSIER_ID::BB_2028_CE</span>
          </div>
        );
      default:
        return (
          <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 border border-[#434655] bg-[#1a1c20] font-mono text-[11px] text-[#8d90a1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5c4ff] animate-pip inline-block" />
            <span>SYS_ARCH // BOOT_MATRIX</span>
          </div>
        );
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 rounded-none bg-[#0c0e12]/95 backdrop-blur border-b border-[#434655]">
      <div className="w-full px-4 md:px-8 xl:px-12 max-w-[1440px] mx-auto flex items-center justify-between h-14">

        {/* Brand Anchor (Stitch Exact Layout) */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#e2e2e8] flex items-center gap-2 hover:text-[#b5c4ff] transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5708] inline-block shadow-[0_0_8px_#ff5708]" />
            <span className="font-bold tracking-tight">SYS_ARCH // WORKSTATION</span>
          </Link>
          
          {/* Dynamic Page Badge */}
          {renderHeaderBadge()}
        </div>

        {/* Navigation Links (Stitch Active / Inactive Tabs) */}
        <nav className="hidden md:flex items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`font-mono text-[11px] tracking-wide transition-all active:translate-x-0.5 active:translate-y-0.5 duration-75 flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#2e6bff] border-b-2 border-[#2e6bff] pb-1 px-1 font-bold"
                    : "border border-dashed border-[#2e6bff]/60 hover:border-[#2e6bff] bg-[#111317]/60 text-[#e2e2e8] hover:text-white px-2 py-0.5"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5708] opacity-80"
                      style={{ borderRadius: "50%" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5708] shadow-[0_0_8px_#ff5708]"
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Trailing Action Clustered Group (Stitch Exact Buttons) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="https://drive.google.com/file/d/1B4yx4EbrV6w2_P0RF7SdhD4KBSbiDPm3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2e6bff] text-white font-mono text-xs uppercase tracking-wider font-semibold border border-[#2e6bff] hover:bg-[#ff5708] hover:border-[#ff5708] transition-all duration-100 active:translate-x-0.5 active:translate-y-0.5 tectonic-lift"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>DOWNLOAD DOSSIER</span>
          </a>

          <a
            href="https://github.com/biswajeet-bishoyi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-[#434655] bg-[#1a1c20] text-[#e2e2e8] font-mono text-xs tracking-wider hover:border-[#2e6bff] hover:text-[#b5c4ff] transition-all duration-100 active:translate-x-0.5 active:translate-y-0.5"
            title="GitHub"
          >
            <RiGithubFill className="w-4 h-4" />
            <span className="hidden lg:inline font-mono">GITHUB</span>
          </a>

          <a
            href="https://linkedin.com/in/biswajeetbishoyi"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 border border-[#434655] bg-[#1a1c20] text-[#e2e2e8] hover:border-[#2e6bff] hover:text-[#b5c4ff] transition-all duration-100 active:translate-x-0.5 active:translate-y-0.5"
            title="LinkedIn"
          >
            <RiLinkedinBoxFill className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border border-[#434655] bg-[#1a1c20] text-[#e2e2e8] hover:border-[#2e6bff]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#434655] bg-[#0c0e12] px-4 py-3 space-y-2 font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 text-xs tracking-wider border ${
                  isActive
                    ? "bg-[#2e6bff] text-white border-[#2e6bff] font-bold"
                    : "border-[#434655] bg-[#1a1c20] text-[#c3c5d8]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5708] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5708] shadow-[0_0_8px_#ff5708]" />
                  </span>
                )}
              </Link>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1B4yx4EbrV6w2_P0RF7SdhD4KBSbiDPm3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-[#2e6bff] text-white text-xs uppercase font-bold"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>DOWNLOAD DOSSIER (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
}
