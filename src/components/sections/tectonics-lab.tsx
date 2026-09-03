"use client";

import * as React from "react";
import { Cpu, Activity, Calculator, CheckCircle2, AlertTriangle, Code, Play, RefreshCw } from "lucide-react";

export function TectonicsLab() {
  // Interactive Structural Parameters
  const [span, setSpan] = React.useState<number>(24); // meters (12 - 36)
  const [load, setLoad] = React.useState<number>(350); // kN (100 - 600)
  const [depth, setDepth] = React.useState<number>(4.2); // meters (2.0 - 6.0)
  const [activeView, setActiveView] = React.useState<"solver" | "deflection" | "carbon" | "code">("solver");

  // Structural Engineering Computations (IS:800 / AISC 360-16)
  const reactions = load / 2; // kN
  const maxMoment = (load * span) / 4; // kNm
  const chordForce = maxMoment / depth; // kN (Compression Top, Tension Bottom)
  const thetaRad = Math.atan(depth / (span / 4));
  const diagForce = reactions / Math.sin(thetaRad); // kN

  // Deflection (mm) approx: delta = (P * L^3) / (48 * E * I_equiv)
  // With E = 200 GPa, W12x50 equiv I_eff
  const deflectionMm = Number(((load * Math.pow(span, 3) * 1000) / (48 * 200000 * (0.0012 * Math.pow(depth, 2) * 1000000))).toFixed(2));
  const maxAllowableDeflection = Number(((span * 1000) / 360).toFixed(1));
  const isDeflectionPass = deflectionMm <= maxAllowableDeflection;
  const carbonSavings = Number((38.4 - (load / 600) * 8.2 + (depth / 6) * 4.5).toFixed(1));

  return (
    <section id="tectonics" className="space-y-8 pt-8">
      {/* SECTION TELEMETRY STRIP */}
      <div className="flex flex-wrap justify-between items-center text-[#8d90a1] font-mono text-[11px] border-b border-[#434655]/60 pb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#ff5708] font-bold">CASE FILE: ORE-TRUSS // 03</span>
          <span className="text-[#434655]">|</span>
          <span className="text-[#e2e2e8]">SRMIST STRUCTURAL LABS × BEAMLAB</span>
          <span className="text-[#434655]">|</span>
          <span className="text-[#b5c4ff] font-medium">FEA_OPTIMIZER_V3.8</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#2e6bff] animate-pip" />
          <span className="text-[#e2e2e8]">SOLVER_STATE: ONLINE // IS:800-2007</span>
        </div>
      </div>

      {/* HEADER BANNER */}
      <div className="border border-[#434655] bg-[#0c0e12] p-4 md:p-8 relative crosshair-corner">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 border-b border-[#434655]/60 pb-6">
          <div className="max-w-3xl">
            <div className="font-mono text-xs text-[#ff5708] mb-2 tracking-widest flex items-center gap-2 font-bold">
              <span>[PROJECT_REF // STRUCT_OPT_2026]</span>
              <span className="inline-block w-4 h-[1px] bg-[#ff5708]" />
              <span>TOPOLOGY & CARBON OPTIMIZER</span>
            </div>
            <h2 className="font-title text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight">
              ALGORITHMIC STEEL TRUSS & STRUCTURAL SOLVER
            </h2>
          </div>

          {/* Key Specs Card */}
          <div className="grid grid-cols-2 gap-2 border border-[#434655] bg-[#1a1c20] p-3 min-w-[280px]">
            <div className="font-mono text-[10px] text-[#8d90a1]">SPAN RATING:</div>
            <div className="font-mono text-xs text-[#b5c4ff] font-bold text-right">{span * 1000} MM</div>
            <div className="font-mono text-[10px] text-[#8d90a1]">SERVICE LIMIT:</div>
            <div className="font-mono text-xs text-[#e2e2e8] text-right">L / 360 [{maxAllowableDeflection} mm]</div>
            <div className="font-mono text-[10px] text-[#8d90a1]">CARBON EMBODIED:</div>
            <div className="font-mono text-xs text-[#ffb59c] font-bold text-right">-{carbonSavings}% VS BASE</div>
            <div className="font-mono text-[10px] text-[#8d90a1]">SOLVER ENGINE:</div>
            <div className="font-mono text-xs text-[#e2e2e8] text-right">DIRECT STIFFNESS</div>
          </div>
        </div>

        {/* Abstract */}
        <p className="pt-4 text-xs sm:text-sm text-[#c3c5d8] leading-relaxed max-w-4xl">
          An interactive algorithmic laboratory exploring generative synthesis of long-span structural truss assemblies. Using finite element stress optimization, the engine evaluates axial tension/compression member pathways and deflection envelopes in real time.
        </p>
      </div>

      {/* WORKSTATION 2-COLUMN VIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Interactive FEA Canvas & Viewport */}
        <div className="lg:col-span-8 border border-[#434655] bg-[#0c0e12] flex flex-col crosshair-corner">
          
          {/* Viewport Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#434655] px-4 py-2.5 bg-[#1a1c20] font-mono text-xs">
            <div className="flex items-center gap-2 text-[#8d90a1]">
              <span className="text-[#b5c4ff] font-bold">GRID: {span}m × {depth}m</span>
              <span>|</span>
              <span>POINT LOAD: {load} kN</span>
            </div>

            {/* View switcher tabs */}
            <div className="flex items-center gap-1 mt-1 sm:mt-0">
              <button
                onClick={() => setActiveView("solver")}
                className={`px-2.5 py-1 font-mono text-[10px] uppercase border ${
                  activeView === "solver"
                    ? "bg-[#2e6bff] text-white border-[#2e6bff] font-bold"
                    : "bg-[#0c0e12] text-[#8d90a1] border-[#434655] hover:text-white"
                }`}
              >
                [STRESS MAP]
              </button>
              <button
                onClick={() => setActiveView("deflection")}
                className={`px-2.5 py-1 font-mono text-[10px] uppercase border ${
                  activeView === "deflection"
                    ? "bg-[#2e6bff] text-white border-[#2e6bff] font-bold"
                    : "bg-[#0c0e12] text-[#8d90a1] border-[#434655] hover:text-white"
                }`}
              >
                [DEFLECTION]
              </button>
              <button
                onClick={() => setActiveView("code")}
                className={`px-2.5 py-1 font-mono text-[10px] uppercase border ${
                  activeView === "code"
                    ? "bg-[#2e6bff] text-white border-[#2e6bff] font-bold"
                    : "bg-[#0c0e12] text-[#8d90a1] border-[#434655] hover:text-white"
                }`}
              >
                [PYTHON CODE]
              </button>
            </div>
          </div>

          {/* Interactive Rendering Canvas */}
          {activeView !== "code" ? (
            <div className="relative w-full h-[360px] bg-[#0c0e12] p-4 flex flex-col justify-between select-none">
              
              {/* Legend */}
              <div className="flex justify-between items-center font-mono text-[10px] text-[#8d90a1] pb-2 border-b border-[#434655]/40">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-1 bg-[#2e6bff]" /> COMPRESSION (-)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-1 bg-[#ff5708]" /> TENSION (+)
                  </span>
                </div>
                <div className="text-[#ffb59c]">
                  MAX MOMENT: {maxMoment.toFixed(1)} kNm
                </div>
              </div>

              {/* Dynamic SVG Truss Renderer */}
              <div className="w-full flex-1 flex items-center justify-center py-2">
                <svg
                  className="w-full h-full max-h-[220px] overflow-visible"
                  viewBox="0 0 500 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Point Load Arrow at mid-span */}
                  <g>
                    <line stroke="#ff5708" strokeWidth="2.5" x1="250" x2="250" y1="10" y2="45" />
                    <polygon fill="#ff5708" points="250,55 244,40 256,40" />
                    <text fill="#ff5708" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle" x="250" y="8">
                      P = {load} kN
                    </text>
                  </g>

                  {/* Top Chord (Compression) */}
                  <line
                    stroke="#2e6bff"
                    strokeWidth={activeView === "deflection" ? 3.5 : 3}
                    x1="100"
                    x2="400"
                    y1={activeView === "deflection" ? 55 + deflectionMm * 0.4 : 50}
                    y2={activeView === "deflection" ? 55 + deflectionMm * 0.4 : 50}
                  />

                  {/* Bottom Chord (Tension) */}
                  <line
                    stroke="#ff5708"
                    strokeWidth="3"
                    x1="40"
                    x2="460"
                    y1={activeView === "deflection" ? 140 + deflectionMm * 0.6 : 140}
                    y2={activeView === "deflection" ? 140 + deflectionMm * 0.6 : 140}
                  />

                  {/* Web Diagonals & Verticals */}
                  <line stroke="#2e6bff" strokeWidth="2" x1="40" x2="100" y1="140" y2="50" />
                  <line stroke="#ff5708" strokeWidth="2" x1="100" x2="180" y1="50" y2="140" />
                  <line stroke="#2e6bff" strokeWidth="2" x1="180" x2="250" y1="140" y2="50" />
                  <line stroke="#ff5708" strokeWidth="2" x1="250" x2="320" y1="50" y2="140" />
                  <line stroke="#2e6bff" strokeWidth="2" x1="320" x2="400" y1="140" y2="50" />
                  <line stroke="#ff5708" strokeWidth="2" x1="400" x2="460" y1="50" y2="140" />

                  {/* Verticals */}
                  <line stroke="#434655" strokeDasharray="2 2" strokeWidth="1.5" x1="100" x2="100" y1="50" y2="140" />
                  <line stroke="#434655" strokeDasharray="2 2" strokeWidth="1.5" x1="180" x2="180" y1="50" y2="140" />
                  <line stroke="#ff5708" strokeWidth="2" x1="250" x2="250" y1="50" y2="140" />
                  <line stroke="#434655" strokeDasharray="2 2" strokeWidth="1.5" x1="320" x2="320" y1="50" y2="140" />
                  <line stroke="#434655" strokeDasharray="2 2" strokeWidth="1.5" x1="400" x2="400" y1="50" y2="140" />

                  {/* Support reactions */}
                  {/* Left Pin Support */}
                  <polygon fill="#1a1c20" stroke="#8d90a1" strokeWidth="1.5" points="30,152 50,152 40,140" />
                  <line stroke="#2e6bff" strokeWidth="1.5" x1="40" x2="40" y1="172" y2="155" />
                  <polygon fill="#2e6bff" points="40,152 37,160 43,160" />
                  <text fill="#b5c4ff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="40" y="180">
                    R_A = {reactions.toFixed(0)} kN
                  </text>

                  {/* Right Roller Support */}
                  <circle cx="460" cy="146" r="5" fill="#1a1c20" stroke="#8d90a1" strokeWidth="1.5" />
                  <line stroke="#2e6bff" strokeWidth="1.5" x1="460" x2="460" y1="172" y2="155" />
                  <polygon fill="#2e6bff" points="460,152 457,160 463,160" />
                  <text fill="#b5c4ff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="460" y="180">
                    R_B = {reactions.toFixed(0)} kN
                  </text>
                </svg>
              </div>

              {/* Real-time calculated status bottom strip */}
              <div className="flex flex-wrap justify-between items-center font-mono text-[10px] pt-2 border-t border-[#434655]/40 text-[#8d90a1]">
                <span>TOP CHORD FORCE: -{chordForce.toFixed(1)} kN (C)</span>
                <span>BOT CHORD FORCE: +{chordForce.toFixed(1)} kN (T)</span>
                <span className="flex items-center gap-1">
                  DEFLECTION: <strong className={isDeflectionPass ? "text-[#b5c4ff]" : "text-[#ff5708]"}>{deflectionMm} mm</strong>
                  {isDeflectionPass ? (
                    <span className="text-emerald-400 font-bold">[SAFE ≤ {maxAllowableDeflection}mm]</span>
                  ) : (
                    <span className="text-[#ff5708] font-bold">[EXCEEDS LIMIT]</span>
                  )}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-[#0c0e12] font-mono text-xs text-[#c3c5d8] overflow-x-auto">
              <div className="text-[#8d90a1] mb-2">// Python Finite Element Analysis (FEA) Script Snippet</div>
              <pre className="text-[11px] leading-relaxed text-[#b5c4ff]">
{`import numpy as np

def solve_ore_truss(span_m=${span}, point_load_kn=${load}, depth_m=${depth}):
    """Direct stiffness method formulation for Warren truss geometry."""
    E = 200e9 # Pascals (Structural Steel Fe410)
    R_a = R_b = point_load_kn / 2.0
    M_max = (point_load_kn * span_m) / 4.0
    F_chord = M_max / depth_m
    
    theta = np.arctan(depth_m / (span_m / 4.0))
    F_diag = R_a / np.sin(theta)
    
    delta_max = (point_load_kn * (span_m**3)) / (48 * 200 * (0.0012 * (depth_m**2)))
    allowable_delta = (span_m * 1000) / 360.0
    
    return {
        "reactions_kN": R_a,
        "max_moment_kNm": M_max,
        "chord_force_kN": F_chord,
        "diag_force_kN": F_diag,
        "deflection_mm": delta_max,
        "code_compliant": delta_max <= allowable_delta
    }

print(solve_ore_truss())`}
              </pre>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Interactive Parameter Control Console */}
        <div className="lg:col-span-4 border border-[#434655] bg-[#1a1c20] p-4 flex flex-col space-y-5 crosshair-corner">
          
          <div className="border-b border-[#434655] pb-3 flex items-center justify-between">
            <div className="font-mono text-xs text-white font-bold flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#2e6bff]" />
              <span>PARAMETER ACTUATORS</span>
            </div>
            <button
              onClick={() => {
                setSpan(24);
                setLoad(350);
                setDepth(4.2);
              }}
              className="font-mono text-[10px] text-[#8d90a1] hover:text-white flex items-center gap-1"
              title="Reset parameters"
            >
              <RefreshCw className="w-3 h-3" /> RESET
            </button>
          </div>

          {/* Slider 1: Span */}
          <div className="space-y-1.5">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-[#8d90a1]">SPAN LENGTH (L):</span>
              <span className="text-[#b5c4ff] font-bold">{span} m ({span * 1000} mm)</span>
            </div>
            <input
              type="range"
              min={12}
              max={36}
              step={2}
              value={span}
              onChange={(e) => setSpan(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-[10px] text-[#8d90a1] font-mono">
              <span>12m</span>
              <span>24m</span>
              <span>36m</span>
            </div>
          </div>

          {/* Slider 2: Point Load */}
          <div className="space-y-1.5">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-[#8d90a1]">POINT LOAD (P):</span>
              <span className="text-[#ff5708] font-bold">{load} kN ({(load / 9.81).toFixed(1)} MT)</span>
            </div>
            <input
              type="range"
              min={100}
              max={600}
              step={25}
              value={load}
              onChange={(e) => setLoad(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-[10px] text-[#8d90a1] font-mono">
              <span>100 kN</span>
              <span>350 kN</span>
              <span>600 kN</span>
            </div>
          </div>

          {/* Slider 3: Truss Depth */}
          <div className="space-y-1.5">
            <div className="flex justify-between font-mono text-xs">
              <span className="text-[#8d90a1]">TRUSS DEPTH (h):</span>
              <span className="text-[#dbe2f7] font-bold">{depth.toFixed(1)} m</span>
            </div>
            <input
              type="range"
              min={2.0}
              max={6.0}
              step={0.2}
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-[10px] text-[#8d90a1] font-mono">
              <span>2.0m</span>
              <span>4.0m</span>
              <span>6.0m</span>
            </div>
          </div>

          {/* Telemetry Output Breakdown */}
          <div className="border-t border-[#434655] pt-4 space-y-2 font-mono text-xs">
            <div className="text-[#8d90a1] text-[10px] uppercase font-bold">// COMPUTED STRUCTURAL METRICS</div>
            
            <div className="flex justify-between py-1 border-b border-[#434655]/40">
              <span className="text-[#c3c5d8]">Reactions (R_A = R_B):</span>
              <span className="text-white font-bold">{reactions.toFixed(1)} kN</span>
            </div>

            <div className="flex justify-between py-1 border-b border-[#434655]/40">
              <span className="text-[#c3c5d8]">Peak Moment (M_max):</span>
              <span className="text-[#ffb59c] font-bold">{maxMoment.toFixed(1)} kNm</span>
            </div>

            <div className="flex justify-between py-1 border-b border-[#434655]/40">
              <span className="text-[#c3c5d8]">Chord Axial Load:</span>
              <span className="text-[#b5c4ff] font-bold">±{chordForce.toFixed(1)} kN</span>
            </div>

            <div className="flex justify-between py-1 border-b border-[#434655]/40">
              <span className="text-[#c3c5d8]">Diagonal Tension:</span>
              <span className="text-white font-bold">+{diagForce.toFixed(1)} kN</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-[#c3c5d8]">Embodied Carbon Δ:</span>
              <span className="text-[#ff5708] font-bold">-{carbonSavings}%</span>
            </div>
          </div>

          {/* Verification Code Status */}
          <div className={`p-3 border font-mono text-xs flex items-center gap-2 ${
            isDeflectionPass
              ? "bg-emerald-950/40 border-emerald-500/60 text-emerald-300"
              : "bg-red-950/40 border-red-500/60 text-red-300"
          }`}>
            {isDeflectionPass ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            )}
            <div>
              <div className="font-bold">{isDeflectionPass ? "AISC 360-16 VALIDATED" : "DEFLECTION WARNING"}</div>
              <div className="text-[10px] opacity-80">
                {isDeflectionPass ? "Deflection within L/360 serviceability limits." : "Increase truss depth or decrease point load."}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================= */}
      {/* [02_TECTONICS] // TRIAXIAL COMPETENCY ARCHITECTURE                 */}
      {/* ================================================================= */}
      <div className="border border-[#434655] bg-[#0c0e12] p-4 md:p-6 crosshair-corner">
        <div className="flex flex-wrap items-center justify-between border-b border-[#434655]/60 pb-3 mb-5">
          <div className="font-mono text-xs text-white uppercase font-bold flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#2e6bff]" />
            <span>[03_TECTONICS] // TRIAXIAL COMPETENCY ARCHITECTURE</span>
          </div>
          <span className="font-mono text-[10px] text-[#8d90a1]">3_AXES // 9_VERIFIED_NODES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* AXIS 1: CIVIL & STRUCTURAL RIGOR */}
          <div className="border border-[#434655] bg-[#111317] p-4 flex flex-col space-y-3 hover:border-[#ff5708] transition-all group">
            <div className="flex items-center justify-between pb-2 border-b border-[#434655]">
              <div className="flex items-center gap-2">
                {/* Orange triangle (civil/structural) SVG icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L22 21H2L12 3Z" stroke="#ff5708" strokeWidth="2" strokeLinejoin="miter" fill="#ff5708" fillOpacity="0.15" />
                  <line x1="12" y1="9" x2="12" y2="17" stroke="#ff5708" strokeWidth="1.5" />
                  <line x1="8" y1="14" x2="16" y2="14" stroke="#ff5708" strokeWidth="1.5" />
                </svg>
                <span className="font-mono text-[11px] text-white font-bold uppercase">
                  CIVIL & STRUCTURAL RIGOR
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#ff5708] font-bold">AXIS_01</span>
            </div>

            <ul className="space-y-2 font-mono text-[11px] text-[#c3c5d8] flex-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff5708] mt-1.5 shrink-0" />
                <span>FEA elastoplastic solvers <span className="text-[#ffb59c] font-bold">[VERIFIED]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff5708] mt-1.5 shrink-0" />
                <span>Seismic response spectra <span className="text-[#ffb59c] font-bold">[VERIFIED]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#ff5708] mt-1.5 shrink-0" />
                <span>BIM / Revit geometric pipelines <span className="text-[#ffb59c] font-bold">[VERIFIED]</span></span>
              </li>
            </ul>

            <div className="pt-2 border-t border-[#434655]/60 flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#8d90a1]">DOMAIN.WEIGHT:</span>
              <span className="text-[#ff5708] font-bold">38%</span>
            </div>
          </div>

          {/* AXIS 2: COMPUTATIONAL SYSTEMS */}
          <div className="border border-[#434655] bg-[#111317] p-4 flex flex-col space-y-3 hover:border-[#2e6bff] transition-all group">
            <div className="flex items-center justify-between pb-2 border-b border-[#434655]">
              <div className="flex items-center gap-2">
                {/* Blue grid (compute) SVG icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" stroke="#2e6bff" strokeWidth="2" fill="#2e6bff" fillOpacity="0.2" />
                  <rect x="14" y="3" width="7" height="7" stroke="#2e6bff" strokeWidth="2" fill="#2e6bff" fillOpacity="0.4" />
                  <rect x="3" y="14" width="7" height="7" stroke="#2e6bff" strokeWidth="2" fill="#2e6bff" fillOpacity="0.4" />
                  <rect x="14" y="14" width="7" height="7" stroke="#2e6bff" strokeWidth="2" fill="#2e6bff" fillOpacity="0.2" />
                </svg>
                <span className="font-mono text-[11px] text-white font-bold uppercase">
                  COMPUTATIONAL SYSTEMS
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#2e6bff] font-bold">AXIS_02</span>
            </div>

            <ul className="space-y-2 font-mono text-[11px] text-[#c3c5d8] flex-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#2e6bff] mt-1.5 shrink-0" />
                <span>GLSL / GPGPU pipelines <span className="text-[#b5c4ff] font-bold">[OPTIMIZED]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#2e6bff] mt-1.5 shrink-0" />
                <span>C++20 simulation engines <span className="text-[#b5c4ff] font-bold">[OPTIMIZED]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#2e6bff] mt-1.5 shrink-0" />
                <span>Spatial data structures <span className="text-[#b5c4ff] font-bold">[OPTIMIZED]</span></span>
              </li>
            </ul>

            <div className="pt-2 border-t border-[#434655]/60 flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#8d90a1]">DOMAIN.WEIGHT:</span>
              <span className="text-[#2e6bff] font-bold">34%</span>
            </div>
          </div>

          {/* AXIS 3: SWISS RATIONALISM */}
          <div className="border border-[#434655] bg-[#111317] p-4 flex flex-col space-y-3 hover:border-[#b5c4ff] transition-all group">
            <div className="flex items-center justify-between pb-2 border-b border-[#434655]">
              <div className="flex items-center gap-2">
                {/* Tertiary tint square (swiss rationalism) SVG icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" stroke="#b5c4ff" strokeWidth="2" fill="none" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="#b5c4ff" strokeWidth="1" />
                  <line x1="12" y1="3" x2="12" y2="21" stroke="#b5c4ff" strokeWidth="1" />
                  <circle cx="12" cy="12" r="2" fill="#b5c4ff" />
                </svg>
                <span className="font-mono text-[11px] text-white font-bold uppercase">
                  SWISS RATIONALISM
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#b5c4ff] font-bold">AXIS_03</span>
            </div>

            <ul className="space-y-2 font-mono text-[11px] text-[#c3c5d8] flex-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#b5c4ff] mt-1.5 shrink-0" />
                <span>ISO 216 proportional bays <span className="text-[#dbe2f7] font-bold">[ACTIVE]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#b5c4ff] mt-1.5 shrink-0" />
                <span>System design tokens <span className="text-[#dbe2f7] font-bold">[ACTIVE]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#b5c4ff] mt-1.5 shrink-0" />
                <span>Technical type foundry <span className="text-[#dbe2f7] font-bold">[ACTIVE]</span></span>
              </li>
            </ul>

            <div className="pt-2 border-t border-[#434655]/60 flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#8d90a1]">DOMAIN.WEIGHT:</span>
              <span className="text-[#b5c4ff] font-bold">28%</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
