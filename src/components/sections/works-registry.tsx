"use client";

import * as React from "react";
import { ArrowUpRight, ExternalLink, Filter, Compass, FileText, ArrowRight, Terminal, Send } from "lucide-react";
import { RiGithubFill } from "react-icons/ri";
import { toast } from "sonner";

export type Project = {
  id: string;
  prjCode: string; // e.g. "PRJ_01"
  wbsCode: string; // e.g. "24.08.A"
  domain: string; // e.g. "FEA / STRUCTURAL TOPOLOGY ENGINE"
  title: string;
  category: "Engineering" | "Technology" | "3D & Creative";
  disciplineTag: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  dimBar: { // Live Vector Dimension Bar overlay
    section: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  links: {
    live?: string;
    github?: string;
    report?: string;
  };
};

const PROJECTS: Project[] = [
  {
    id: "beamlab",
    prjCode: "PRJ_01",
    wbsCode: "24.08.A",
    domain: "FEA / STRUCTURAL TOPOLOGY ENGINE",
    title: "BeamLab // Structural Workspace",
    category: "Technology",
    disciplineTag: "FEA / AI / REACT",
    shortDesc: "Next-gen structural engineering workspace with real-time shear/moment/deflection analysis and AI Engineering Studio 'Archie'.",
    fullDesc: "An interactive, next-generation structural engineering workspace. Features real-time structural analysis (shear/moment/deflection), an AI Engineering Studio ('Archie'), a Time Machine feature for tracking design evolution, and a cinematic Presentation mode for structural presentations.",
    image: "/images/beamlab.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI Engine", "Structural FEA"],
    metrics: [
      { label: "ENGINE", value: "Real-time FEA" },
      { label: "AI STUDIO", value: "Archie Copilot" },
      { label: "SOLVER", value: "Shear/Moment/Deflection" }
    ],
    dimBar: {
      section: "§ 01-A",
      primary: "BEAM_STUDIO_V3 // AISC 360",
      secondary: "SHEAR / MOMENT / DELTA",
      tertiary: "NODES: 128 // ELEMENTS: 64"
    },
    links: {
      live: "https://beamstudio.vercel.app/",
      github: "https://github.com/biswajeet-bishoyi/BeamLab"
    }
  },
  {
    id: "apex-precision",
    prjCode: "PRJ_02",
    wbsCode: "THREE.JS",
    domain: "3D / INTERACTIVE RENDER ENGINE",
    title: "Apex Precision: Max Verstappen 3D",
    category: "3D & Creative",
    disciplineTag: "THREE.JS / WEBGL / GSAP",
    shortDesc: "High-octane interactive 3D web experience with scroll-linked camera choreography around a detailed RB20 model.",
    fullDesc: "A highly cinematic, interactive 3D web experience celebrating Max Verstappen. Built with Three.js and React Three Fiber, featuring scroll-linked camera choreography around a detailed 3D model of the RB20, dynamic depth of field, and minimalist typography.",
    image: "/images/apex.png",
    tags: ["Three.js", "React Three Fiber", "GSAP", "Next.js", "WebGL"],
    metrics: [
      { label: "FRAMEWORK", value: "R3F / Three.js" },
      { label: "RENDER", value: "60 FPS WebGL" },
      { label: "CAMERA", value: "Scroll-Linked" }
    ],
    dimBar: {
      section: "§ 02-B",
      primary: "RB20_ApexPrecision // 60 FPS",
      secondary: "CAMERA_CHOREOGRAPHY",
      tertiary: "R3F RENDER: 60 FPS @ 1080p"
    },
    links: {
      live: "https://apex-precision-f1.vercel.app/",
      github: "https://github.com/biswajeet-bishoyi/Apex-Precision"
    }
  },
  {
    id: "soil-property-predictor",
    prjCode: "PRJ_03",
    wbsCode: "IS:2720",
    domain: "ML / GEOTECHNICAL ANALYSIS",
    title: "AI Geotechnical Soil Predictor",
    category: "Technology",
    disciplineTag: "ML / TENSORFLOW / GEOTECH",
    shortDesc: "Neural geotechnical analysis tool predicting 6 critical soil properties with interactive Boussinesq stress bulb visualization.",
    fullDesc: "A geotechnical analysis tool that predicts six critical soil properties using TensorFlow.js. It features interactive Boussinesq stress bulb visualization and a foundation recommendation system. Built entirely in the browser for maximum speed and privacy.",
    image: "/images/soil-app.jpeg",
    tags: ["JavaScript", "TensorFlow.js", "Chart.js", "Geotechnical Analysis"],
    metrics: [
      { label: "ACCURACY", value: "94.2% R²" },
      { label: "PROPERTIES", value: "6 Parameters" },
      { label: "VISUALIZER", value: "Boussinesq Bulbs" }
    ],
    dimBar: {
      section: "§ 03-C",
      primary: "GEOTECH_ML_V2 // IS:2720",
      secondary: "BOUSSINESQ STRESS BULB",
      tertiary: "R²: 0.942 // FOUNDATION TYPE"
    },
    links: {
      live: "https://biswajeet-bishoyi.github.io/Soil-Property-Predictor/",
      github: "https://github.com/biswajeet-bishoyi/Soil-Property-Predictor"
    }
  },
  {
    id: "concrete-strength-predictor",
    prjCode: "PRJ_04",
    wbsCode: "IS:10262",
    domain: "MATERIALS / ML REGRESSION",
    title: "Concrete Compressive Strength ML",
    category: "Technology",
    disciplineTag: "PYTHON / SCIKIT-LEARN / MATERIALS",
    shortDesc: "Machine learning regression pipeline predicting compressive strength across mix proportions and curing age.",
    fullDesc: "A machine learning pipeline designed to predict concrete compressive strength. Utilizing Linear Regression and Random Forest Regressors, it analyzes mix proportions (cement, blast furnace slag, fly ash, water, superplasticizer, aggregate) and age to optimize mix design.",
    image: "/images/concrete-app.jpeg",
    tags: ["Python", "Scikit-Learn", "Streamlit", "NumPy", "Materials Science"],
    metrics: [
      { label: "ALGORITHMS", value: "Random Forest / LinReg" },
      { label: "PARAMETERS", value: "8 Mix Variables" },
      { label: "DEPLOY", value: "Streamlit Cloud" }
    ],
    dimBar: {
      section: "§ 04-D",
      primary: "CONCRETE_ML_V1 // IS:10262",
      secondary: "MIX DESIGN OPTIMIZATION",
      tertiary: "RANDOM FOREST // LINREG"
    },
    links: {
      live: "https://concrete-strength-tester.streamlit.app/",
      github: "https://github.com/biswajeet-bishoyi/Concrete-Strength-Predictor"
    }
  },
  {
    id: "seepage-flow-simulator",
    prjCode: "PRJ_05",
    wbsCode: "IS:12183",
    domain: "HYDRAULICS / EARTH DAM SIM",
    title: "Earth Dam Seepage Simulator",
    category: "Engineering",
    disciplineTag: "HYDRAULICS / NUMERICAL / PYTHON",
    shortDesc: "Computational hydraulics simulation modeling phreatic surfaces and seepage flow nets through earth dams.",
    fullDesc: "An advanced simulation tool built to model and analyze seepage flow through earth dams. Designed to help civil engineers visualize phreatic surfaces, calculate flow rates, and evaluate dam stability under variable hydraulic head conditions.",
    image: "/images/seepage-app.jpeg",
    tags: ["Python", "Streamlit", "Hydraulics", "Numerical Methods"],
    metrics: [
      { label: "METHOD", value: "Flow Net Computation" },
      { label: "SURFACE", value: "Phreatic Line" },
      { label: "DOMAIN", value: "Hydraulic Eng" }
    ],
    dimBar: {
      section: "§ 05-E",
      primary: "SEEPAGE_DAM_V1 // IS:12183",
      secondary: "PHREATIC SURFACE COMPUTE",
      tertiary: "HYDRAULIC GRADIENT: 0.38"
    },
    links: {
      live: "https://seepage-flow-simulator-in-earth-dams.streamlit.app/",
      github: "https://github.com/biswajeet-bishoyi/Seepage-Flow-Simulator-in-Earth-Dams"
    }
  },
  {
    id: "ophwc-project",
    prjCode: "PRJ_06",
    wbsCode: "OPHWC.IN",
    domain: "CIVIL / SITE EXEC & TENDERING",
    title: "OPHWC Civil Infrastructure Project",
    category: "Engineering",
    disciplineTag: "AUTOCAD / ESTIMATION / SITE EXEC",
    shortDesc: "AutoCAD drafting for F-Type residential quarters, cost estimation for 3 public bus stands, and Excise Bhawan site monitoring.",
    fullDesc: "Civil engineering internship project involving comprehensive AutoCAD drafting for F-Type residential layouts, cost estimation and tendering calculations for 3 major public bus stands, and structural site execution monitoring at Excise Bhawan, Bhubaneswar.",
    image: "/images/building.png",
    tags: ["AutoCAD", "Cost Estimation", "Site Execution", "Tendering", "Infrastructure"],
    metrics: [
      { label: "ORGANIZATION", value: "OPHWC Govt of Odisha" },
      { label: "PROJECTS", value: "Bus Stands & Housing" },
      { label: "SITE", value: "Excise Bhawan" }
    ],
    dimBar: {
      section: "§ 06-F",
      primary: "OPHWC_2025 // AUTOCAD DWG",
      secondary: "COST ESTIMATION: 3 BUS STANDS",
      tertiary: "TENDER BID: IS:TENDER-CALC"
    },
    links: {
      report: "https://drive.google.com/file/d/15dmI1QnzFciv6MjID9beAqPhZro7y0Zp/view?usp=sharing"
    }
  },
  {
    id: "sustainable-concrete",
    prjCode: "PRJ_07",
    wbsCode: "IS:456",
    domain: "MATERIAL RESEARCH / SCM REPLACEMENT",
    title: "Sustainable Concrete Research",
    category: "Engineering",
    disciplineTag: "MATERIAL RESEARCH / CARBON REDUCTION",
    shortDesc: "Experimental study on partial cement replacement with industrial supplementary cementitious materials.",
    fullDesc: "Experimental research investigating partial replacement of Portland cement with industrial byproducts (slag and fly ash) to lower embodied carbon while retaining targeted 28-day compressive strength and durability.",
    image: "/images/building.png",
    tags: ["Material Science", "Sustainability", "Civil Research", "Eco-Concrete"],
    metrics: [
      { label: "FOCUS", value: "Carbon Reduction" },
      { label: "SUBSTITUTES", value: "Fly Ash & Slag" },
      { label: "STATUS", value: "Experimental Study" }
    ],
    dimBar: {
      section: "§ 07-G",
      primary: "SCM_RESEARCH // IS:456",
      secondary: "PARTIAL CEMENT REPLACEMENT",
      tertiary: "FLY ASH + GGBS // 28 DAY"
    },
    links: {}
  }
];

export function WorksRegistry() {
  const [activeCategory, setActiveCategory] = React.useState<string>("ALL");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  // Direct Dispatch Form State
  const [dispatchForm, setDispatchForm] = React.useState({
    name: "",
    email: "",
    message: "",
    urgent: false,
  });
  const [isDispatching, setIsDispatching] = React.useState(false);
  const [sysClock, setSysClock] = React.useState<string>("");

  React.useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      
      const tzShort =
        new Intl.DateTimeFormat("en-US", { timeZoneName: "short" })
          .formatToParts(now)
          .find((part) => part.type === "timeZoneName")?.value || "LOC";

      setSysClock(`${hours}:${minutes}:${seconds} ${tzShort}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDirectDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchForm.name || !dispatchForm.email || !dispatchForm.message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setIsDispatching(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: dispatchForm.name,
          email: dispatchForm.email,
          subject: dispatchForm.urgent ? "[URGENT] Workstation Direct Dispatch" : "Workstation Dispatch Payload",
          message: dispatchForm.message,
        }),
      });
      if (!res.ok) throw new Error("Transmission failed");
      toast.success("TRANSMISSION ACKNOWLEDGED", {
        description: "Your dispatch payload has been routed to Biswajeet's terminal.",
      });
      setDispatchForm({ name: "", email: "", message: "", urgent: false });
    } catch {
      toast.error("TRANSMISSION FAILED", {
        description: "Please send directly to bishoyibiswajeet@gmail.com",
      });
    } finally {
      setIsDispatching(false);
    }
  };

  const categories = [
    { label: "ALL", count: PROJECTS.length },
    { label: "ENGINEERING", count: PROJECTS.filter(p => p.category === "Engineering").length },
    { label: "TECHNOLOGY", count: PROJECTS.filter(p => p.category === "Technology").length },
    { label: "3D & CREATIVE", count: PROJECTS.filter(p => p.category === "3D & Creative").length },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "ENGINEERING") return p.category === "Engineering";
    if (activeCategory === "TECHNOLOGY") return p.category === "Technology";
    if (activeCategory === "3D & CREATIVE") return p.category === "3D & Creative";
    return true;
  });

  return (
    <section id="works" className="space-y-6 pt-1">
      {/* SUB-NAV / COORDINATE CALIBRATION STRIP */}
      <div className="w-full flex flex-wrap items-center justify-between border-b border-[#434655] pb-2 font-mono text-[11px] text-[#8d90a1]">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold">LOC: SRMIST // DEPT OF CIVIL ENGINEERING</span>
          <span className="text-[#434655]">|</span>
          <span>REG_ID: BB-2028-CE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#b5c4ff] flex items-center gap-1.5 font-bold">
            <span className="inline-block w-1.5 h-1.5 bg-[#2e6bff]"></span>
            GRID_SYNCHRONIZED (1440x900)
          </span>
          <span className="text-[#ff5708] font-bold">WGS84 LAT 20°17'N LON 85°49'E</span>
          <span className="text-[#434655]">|</span>
          <span className="text-[#c3c5d8] font-bold">ISO-216 CALIBRATION</span>
        </div>
      </div>

      {/* ================================================================= */}
      {/* HERO SECTION: ASYMMETRIC TECTONIC COUPLING                       */}
      {/* ================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border border-[#434655] bg-[#1a1c20] crosshair-corner items-stretch min-h-[calc(100vh-9.5rem)]">
        {/* LEFT HERO ARCHITECTURE (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-7 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#434655] flex flex-col justify-between bg-[#111317]">
          <div>
            {/* Corner Crop Mark Indicators */}
            <div className="flex items-center justify-between font-mono text-[10px] text-[#8d90a1] mb-3.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 border border-[#2e6bff]/50 bg-[#2e6bff]/10 text-[#b5c4ff] font-mono text-[10px] uppercase tracking-wider font-semibold">
                  // CIVIL ENGINEERING STUDENT // UNDERGRADUATE RESEARCHER
                </span>
                <span className="text-[#434655] hidden sm:inline">|</span>
                <span className="text-[#8d90a1] hidden sm:inline">SEC_00 :: EXECUTIVE READOUT</span>
              </div>
              <span className="text-[#8d90a1] font-mono hidden md:inline">AXIS: X0.Y0:Z0 // SCALE 1:100</span>
            </div>

            {/* Massive Architectural Headline */}
            <h1 className="font-title text-3xl sm:text-4xl md:text-[38px] lg:text-[44px] text-white uppercase font-bold tracking-tight leading-[0.96] mb-4">
              STRUCTURAL MECHANICS <span className="text-[#ff5708]">×</span> ALGORITHMIC SYSTEMS <span className="text-[#2e6bff]">×</span> VISUAL IDENTITY
            </h1>

            {/* Precision Subtitle */}
            <div className="space-y-2.5 max-w-2xl">
              <p className="text-xs sm:text-[13.5px] text-[#c3c5d8] font-normal leading-relaxed">
                Portfolio registry of <strong className="text-white font-semibold">Biswajeet Bishoyi</strong> — Civil Engineering student at SRMIST Chennai. Synthesis of finite element analysis rigor, structural mechanics computation, and uncompromising Swiss rational graphic engineering.
              </p>
              <p className="text-xs text-[#8d90a1] leading-relaxed">
                Bridging physical civil infrastructure safety envelopes with real-time interactive computational pipelines. Calibrated for structural engineering labs, architectural technologists, and speculative spatial computation teams.
              </p>

              {/* Theodolite & Structural Grid Blueprint */}
              <div className="relative mt-3 p-3 border border-[#434655]/60 bg-[#0c0e12]/90 overflow-hidden">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#8d90a1] border-b border-[#434655]/40 pb-1 mb-2">
                  <span className="text-[#b5c4ff] flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 bg-[#2e6bff] inline-block" />
                    DWG_001 :: TOTAL STATION THEODOLITE &amp; STRUCTURAL GRID
                  </span>
                  <span className="font-mono text-[#ff5708]">REF_AXIS: A-01 // ELEV +14.25m</span>
                </div>
                <svg className="w-full h-24 stroke-current overflow-visible" viewBox="0 0 620 96">
                  <defs>
                    <pattern id="draftGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="20" y2="0" stroke="#1e2024" strokeWidth="0.75" />
                      <line x1="0" y1="0" x2="0" y2="20" stroke="#1e2024" strokeWidth="0.75" />
                      <circle cx="20" cy="20" r="0.75" fill="#434655" />
                    </pattern>
                  </defs>
                  <rect width="620" height="96" fill="url(#draftGrid)" opacity="0.6" />
                  <line x1="30" y1="85" x2="590" y2="85" stroke="#434655" strokeWidth="1.5" />
                  
                  {/* Theodolite Instrument */}
                  <g stroke="#2e6bff" strokeWidth="1.25" fill="none">
                    <line x1="85" y1="46" x2="62" y2="85" />
                    <line x1="85" y1="46" x2="108" y2="85" />
                    <line x1="85" y1="46" x2="85" y2="85" strokeDasharray="2 2" stroke="#8d90a1" />
                    <rect x="75" y="32" width="20" height="14" fill="#1e2024" stroke="#2e6bff" strokeWidth="1.25" />
                    <circle cx="85" cy="39" r="3.5" fill="#ff5708" />
                    <line x1="65" y1="39" x2="105" y2="39" stroke="#b5c4ff" strokeWidth="1.5" />
                    <circle cx="85" cy="46" r="2.5" fill="#b5c4ff" />
                    <line x1="78" y1="85" x2="92" y2="85" stroke="#ff5708" strokeWidth="2" />
                  </g>
                  
                  {/* Sightline */}
                  <g stroke="#8d90a1" strokeWidth="0.75" strokeDasharray="3 2">
                    <line x1="85" y1="39" x2="260" y2="39" />
                    <line x1="260" y1="20" x2="260" y2="85" />
                  </g>
                  <text x="130" y="34" fill="#b5c4ff" fontFamily="monospace" fontSize="9" letterSpacing="0.05em">
                    COLLIMATION AXIS Ø 0.002° [A-01]
                  </text>
                  
                  {/* Structural Frame Bay */}
                  <g stroke="#434655" strokeWidth="1" fill="none">
                    <line x1="260" y1="40" x2="580" y2="40" stroke="#2e6bff" strokeWidth="1.5" />
                    <line x1="260" y1="85" x2="580" y2="85" stroke="#434655" strokeWidth="1.5" />
                    <rect x="290" y="40" width="24" height="45" fill="#1a1c20" stroke="#8d90a1" />
                    <rect x="410" y="40" width="24" height="45" fill="#1a1c20" stroke="#8d90a1" />
                    <rect x="530" y="40" width="24" height="45" fill="#1a1c20" stroke="#8d90a1" />
                    <line x1="314" y1="40" x2="410" y2="85" stroke="#ff5708" strokeWidth="1.25" />
                    <line x1="410" y1="40" x2="314" y2="85" stroke="#2e6bff" strokeWidth="1.25" strokeDasharray="2 2" />
                    <line x1="434" y1="40" x2="530" y2="85" stroke="#ff5708" strokeWidth="1.25" />
                    <line x1="530" y1="40" x2="434" y2="85" stroke="#2e6bff" strokeWidth="1.25" strokeDasharray="2 2" />
                  </g>

                  {/* Grid Number Pips */}
                  <g fontFamily="monospace" fontSize="8" fill="#8d90a1">
                    <circle cx="302" cy="15" r="8" fill="#111317" stroke="#8d90a1" strokeWidth="0.75" />
                    <text x="299" y="18" fill="#b5c4ff">1</text>
                    <line x1="302" y1="23" x2="302" y2="40" stroke="#8d90a1" strokeWidth="0.75" strokeDasharray="1 2" />
                    <circle cx="422" cy="15" r="8" fill="#111317" stroke="#8d90a1" strokeWidth="0.75" />
                    <text x="419" y="18" fill="#b5c4ff">2</text>
                    <line x1="422" y1="23" x2="422" y2="40" stroke="#8d90a1" strokeWidth="0.75" strokeDasharray="1 2" />
                    <circle cx="542" cy="15" r="8" fill="#111317" stroke="#8d90a1" strokeWidth="0.75" />
                    <text x="539" y="18" fill="#b5c4ff">3</text>
                    <line x1="542" y1="23" x2="542" y2="40" stroke="#8d90a1" strokeWidth="0.75" strokeDasharray="1 2" />
                  </g>
                  <line x1="302" y1="92" x2="422" y2="92" stroke="#ff5708" strokeWidth="1" />
                  <path d="M 302 90 L 302 94 M 422 90 L 422 94" stroke="#ff5708" strokeWidth="1" />
                  <text x="340" y="91" fill="#ffb59c" fontFamily="monospace" fontSize="7.5">BAY_01: 6000mm</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Interaction Triggers */}
          <div className="mt-6 pt-4 border-t border-[#434655]/50 flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href="#works-catalog"
              className="px-5 py-2.5 bg-[#2e6bff] text-white uppercase tracking-wider flex items-center gap-2 font-bold tectonic-lift transition-all"
            >
              <span>[EXEC]</span> VIEW SELECTED REGISTRY
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#terminal"
              className="px-4 py-2.5 border border-[#434655] bg-[#0c0e12] text-white uppercase hover:border-[#2e6bff] hover:text-[#b5c4ff] transition-all"
            >
              // RUN INTERACTIVE CLI
            </a>
          </div>
        </div>

        {/* RIGHT HERO: SYSTEM TELEMETRY HUD PANEL (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0c0e12] p-6 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4">
          {/* Header status row */}
          <div className="flex items-center justify-between pb-3 border-b border-[#434655]">
            <span className="font-mono text-xs text-[#b5c4ff] uppercase flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#2e6bff] inline-block" />
              TELEMETRY // FEEDBACK_01
            </span>
            <span className="px-2 py-0.5 border border-[#ff5708] bg-[#ff5708]/10 font-mono text-[10px] text-[#ffb59c] uppercase font-bold">
              STATUS: ACTIVE
            </span>
          </div>

          {/* Primary Telemetry Blocks */}
          <div className="space-y-3">
            {/* 1: Open For Roles */}
            <div className="border border-[#434655] p-3 bg-[#1a1c20] flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-[#ff5708] mt-1 shrink-0 animate-pip" />
              <div>
                <div className="font-mono text-[10px] text-[#8d90a1] uppercase">AVAILABILITY WINDOW</div>
                <div className="font-title text-sm md:text-base text-white font-bold tracking-wide mt-0.5">
                  OPEN FOR DESIGN-ENG ROLES // Q3 2025
                </div>
                <div className="font-mono text-xs text-[#c3c5d8] mt-0.5">
                  Location: Bhubaneswar / Remote / Distributed Workstations
                </div>
              </div>
            </div>

            {/* 2: Academic Readout */}
            <div className="border border-[#434655] p-3 bg-[#1a1c20]">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#8d90a1] mb-1">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <span className="w-1.5 h-1.5 bg-[#ff5708]" />
                  ACADEMIC DISCIPLINE
                </span>
                <span className="text-[#2e6bff] font-mono font-bold">GPA: 8.9 // HONORS</span>
              </div>
              <div className="font-title text-sm md:text-base text-white font-semibold">
                B.TECH CIVIL ENGINEERING
              </div>
              <div className="font-mono text-xs text-[#2e6bff] mt-1 flex items-center justify-between">
                <span className="text-[#b5c4ff]">SRMIST CHENNAI // STRUCTURAL MECHANICS LAB</span>
                <span className="text-[#8d90a1] text-[10px] font-mono">CLASS OF &apos;28</span>
              </div>
            </div>

            {/* 3: Compute Stack Specification */}
            <div className="border border-[#434655] p-3 bg-[#1a1c20]">
              <div className="font-mono text-[10px] text-[#8d90a1] mb-2 uppercase font-bold">
                COMPUTE &amp; GRAPHICS KERNEL
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-[#333539] border border-[#434655] font-mono text-[11px] text-white">PYTHON</span>
                <span className="px-2 py-0.5 bg-[#333539] border border-[#434655] font-mono text-[11px] text-white">C++20</span>
                <span className="px-2 py-0.5 bg-[#333539] border border-[#434655] font-mono text-[11px] text-white">GLSL SHADERS</span>
                <span className="px-2 py-0.5 bg-[#333539] border border-[#434655] font-mono text-[11px] text-white">THREE.JS / WEBGL</span>
                <span className="px-2 py-0.5 bg-[#333539] border border-[#434655] font-mono text-[11px] text-white">WASM / RUST</span>
              </div>
            </div>

            {/* 4: Design Doctrine & Taxonomy */}
            <div className="border border-[#434655] p-3 bg-[#1a1c20]">
              <div className="font-mono text-[10px] text-[#8d90a1] mb-2 uppercase font-bold">
                DESIGN DOCTRINE &amp; TAXONOMY
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px] text-[#c3c5d8]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#2e6bff]" /> SWISS GRID RHYTHMS
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#2e6bff]" /> TECHNICAL BRANDING
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#2e6bff]" /> ORTHOGRAPHIC DRAWING
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#2e6bff]" /> COMPUTATIONAL TYPE
                </div>
              </div>
            </div>
          </div>

          {/* Metric Footer */}
          <div className="pt-3 border-t border-[#434655] flex items-center justify-between font-mono text-[11px] text-[#8d90a1]">
            <span>LATENCY: 12.4ms</span>
            <span>GPU LOAD: 18%</span>
            <span className="text-[#2e6bff] font-medium font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2e6bff] animate-ping" />
              SYS_CLOCK: {sysClock || "LIVE UTC"}
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* DISCIPLINE FILTER & WORKS REGISTRY CATALOG                        */}
      {/* ================================================================= */}
      <div id="works-catalog" className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-12 mt-6">
        <div>
          <div className="font-mono text-xs text-white uppercase flex items-center gap-2 font-bold">
            <Filter className="w-3.5 h-3.5 text-[#2e6bff]" />
            <span>// WORKS REGISTRY CATALOG ({PROJECTS.length})</span>
          </div>
          <p className="text-xs text-[#8d90a1] mt-0.5">
            Select a discipline tab to filter projects or click any project card for technical specifications.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-3 py-1.5 font-mono text-xs uppercase border transition-all ${
                  isSelected
                    ? "bg-[#2e6bff] text-white border-[#2e6bff] font-semibold"
                    : "bg-[#1a1c20] text-[#c3c5d8] border-[#434655] hover:border-[#b5c4ff] hover:text-white"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="border border-[#434655] bg-[#111317] flex flex-col group hover:border-[#2e6bff] transition-all tectonic-lift crosshair-corner"
          >
            {/* Registration Marks Header Bar (Stitch element) */}
            <div className="px-4 py-2 border-b border-[#434655] bg-[#0c0e12] flex items-center justify-between font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-[#b5c4ff] font-bold">{project.prjCode}</span>
                <span className="text-[#434655]">//</span>
                <span className="text-[#8d90a1]">{project.domain}</span>
              </div>
              <span className="text-[#8d90a1]">{project.wbsCode}</span>
            </div>

            {/* Top Media Banner */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#1a1c20] border-b border-[#434655]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              {/* Discipline overlay */}
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0c0e12]/95 border border-[#434655] font-mono text-[10px] text-[#b5c4ff] uppercase font-bold">
                {project.disciplineTag}
              </div>
            </div>

            {/* Live Vector Dimension Bar Overlay (Stitch element) */}
            <div className="px-4 py-2 bg-[#0c0e12] border-b border-[#434655] font-mono text-[10px] text-[#8d90a1] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[#2e6bff] font-bold">{project.dimBar.section}</span>
                <span className="text-[#434655]">|</span>
                <span className="text-[#c3c5d8]">{project.dimBar.primary}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#ff5708]">{project.dimBar.secondary}</span>
                <span className="text-[#434655]">|</span>
                <span className="text-[#8d90a1]">{project.dimBar.tertiary}</span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-title text-base md:text-lg font-bold text-white group-hover:text-[#b5c4ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#c3c5d8] mt-2 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Stitch [BRACKET] Tag Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#434655]/40">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 bg-[#0c0e12] border border-[#434655] text-[#8d90a1] uppercase"
                  >
                    [{tag.toUpperCase()}]
                  </span>
                ))}
              </div>

              {/* Stitch CTA Row: EXPLORE + inline links */}
              <div className="flex items-center justify-between pt-3 border-t border-[#434655] font-mono text-[10px]">
                {/* EXPLORE CASE STUDY Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 bg-[#2e6bff] text-white uppercase font-bold flex items-center gap-1.5 hover:bg-[#2e6bff]/90 tectonic-lift"
                >
                  EXPLORE CASE STUDY
                  <ArrowUpRight className="w-3 h-3" />
                </button>

                {/* Inline action links */}
                <div className="flex items-center gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8d90a1] hover:text-white flex items-center gap-1 uppercase"
                      title="View Source Code"
                    >
                      <RiGithubFill className="w-3.5 h-3.5" />
                      <span>SRC</span>
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff5708] hover:text-[#ffb59c] flex items-center gap-1 font-bold uppercase"
                      title="Launch Live App"
                    >
                      <span>LAUNCH</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.links.report && (
                    <a
                      href={project.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2e6bff] hover:text-[#b5c4ff] flex items-center gap-1 font-bold uppercase"
                      title="View Technical Report"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>REPORT</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================================================================= */}
      {/* SECTION 03: TRIAXIAL COMPETENCY ARCHITECTURE                      */}
      {/* 3 Wide Columns: Civil & Structural / Computational / Swiss Style   */}
      {/* ================================================================= */}
      <section className="border border-[#434655] bg-[#1a1c20]" id="tectonics">
        {/* Section Header Banner */}
        <div className="border-b border-[#434655] px-4 md:px-6 py-3 bg-[#0c0e12] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2e6bff]" />
            <h2 className="font-title text-sm md:text-base text-white uppercase tracking-wider font-semibold">
              [03_TECTONICS] // TRIAXIAL COMPETENCY ARCHITECTURE
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[#8d90a1]">SEC_03 // 20°17&apos;N 85°49&apos;E</span>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#434655]">
          {/* Pillar 01: Civil & Structural Rigor */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-[#ff5708]">
              <span className="font-bold">01 // TECTONIC</span>
              <svg className="w-6 h-6 stroke-current text-[#ff5708]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <polygon points="4,20 12,4 20,20" stroke="#ff5708" />
                <circle cx="12" cy="8" r="1.2" fill="#ff5708" />
                <circle cx="8" cy="16" r="1.2" fill="#ff5708" />
                <circle cx="16" cy="16" r="1.2" fill="#ff5708" />
                <circle cx="12" cy="15" r="1.8" fill="#ffffff" />
                <line x1="12" y1="15" x2="12" y2="22" stroke="#2e6bff" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-title text-lg text-white font-semibold">
              Civil &amp; Structural Rigor
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#c3c5d8] leading-relaxed">
              Grounded in structural mechanics and civil engineering practice at SRMIST Chennai. Applied AutoCAD drafting, site supervision, and structural code standards (IS:456, IS:800, AISC 360) during civil engineering internship at OPHWC for infrastructure modeling and estimation.
            </p>
            <div className="border-t border-[#434655]/60 pt-3 space-y-1.5 font-mono text-xs text-[#8d90a1]">
              <div className="flex justify-between">
                <span>AUTOCAD &amp; STAAD.PRO</span>
                <span className="text-[#2e6bff]">[VERIFIED]</span>
              </div>
              <div className="flex justify-between">
                <span>IS:456 &amp; IS:800 CODES</span>
                <span className="text-[#2e6bff]">[VERIFIED]</span>
              </div>
              <div className="flex justify-between">
                <span>OPHWC SITE &amp; ESTIMATION</span>
                <span className="text-[#ff5708]">[VALIDATED]</span>
              </div>
            </div>
          </div>

          {/* Pillar 02: Computational Systems */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-[#2e6bff]">
              <span className="font-bold">02 // ALGORITHMIC</span>
              <svg className="w-6 h-6 stroke-current text-[#2e6bff]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <rect x="4" y="4" width="16" height="16" stroke="#2e6bff" />
                <line x1="12" y1="4" x2="12" y2="20" stroke="#2e6bff" strokeDasharray="1 1" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="#2e6bff" strokeDasharray="1 1" />
                <circle cx="4" cy="4" r="1" fill="#ffffff" />
                <circle cx="12" cy="4" r="1" fill="#b5c4ff" />
                <circle cx="20" cy="4" r="1" fill="#ffffff" />
                <circle cx="4" cy="12" r="1" fill="#b5c4ff" />
                <circle cx="12" cy="12" r="1.5" fill="#ff5708" />
                <circle cx="20" cy="12" r="1" fill="#b5c4ff" />
                <circle cx="4" cy="20" r="1" fill="#ffffff" />
                <circle cx="12" cy="20" r="1" fill="#b5c4ff" />
                <circle cx="20" cy="20" r="1" fill="#ffffff" />
              </svg>
            </div>
            <h3 className="font-title text-lg text-white font-semibold">
              Computational Systems &amp; Tools
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#c3c5d8] leading-relaxed">
              Engineering interactive web software, structural computation engines, and numerical analysis pipelines. Built the BeamLab FEA structural analysis workspace, finite element solvers, and reactive web applications using Python, TypeScript, React, and Next.js.
            </p>
            <div className="border-t border-[#434655]/60 pt-3 space-y-1.5 font-mono text-xs text-[#8d90a1]">
              <div className="flex justify-between">
                <span>PYTHON (NUMPY / SCIPY)</span>
                <span className="text-[#2e6bff]">[OPTIMIZED]</span>
              </div>
              <div className="flex justify-between">
                <span>REACT / NEXT.JS / TS</span>
                <span className="text-[#2e6bff]">[OPTIMIZED]</span>
              </div>
              <div className="flex justify-between">
                <span>BEAMLAB FEA SOLVER</span>
                <span className="text-[#2e6bff]">[OPTIMIZED]</span>
              </div>
            </div>
          </div>

          {/* Pillar 03: Swiss Precision & Typography */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-[#bfc6da]">
              <span className="font-bold">03 // TYPOGRAPHIC</span>
              <svg className="w-6 h-6 stroke-current text-[#bfc6da]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <rect x="3" y="6" width="18" height="12" stroke="#bfc6da" />
                <line x1="6" y1="6" x2="6" y2="10" stroke="#ff5708" />
                <line x1="9" y1="6" x2="9" y2="9" stroke="#bfc6da" />
                <line x1="12" y1="6" x2="12" y2="11" stroke="#2e6bff" />
                <line x1="15" y1="6" x2="15" y2="9" stroke="#bfc6da" />
                <line x1="18" y1="6" x2="18" y2="10" stroke="#ff5708" />
              </svg>
            </div>
            <h3 className="font-title text-lg text-white font-semibold">
              Swiss Rationalism &amp; Branding
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#c3c5d8] leading-relaxed">
              7+ years of professional graphic design practice. Developing technical brand visual identities, vector systems, Figma design tokens, and Swiss grid metrology that merge aesthetic clarity with rigid mathematical discipline.
            </p>
            <div className="border-t border-[#434655]/60 pt-3 space-y-1.5 font-mono text-xs text-[#8d90a1]">
              <div className="flex justify-between">
                <span>FIGMA DESIGN TOKENS</span>
                <span className="text-[#ff5708]">[ACTIVE]</span>
              </div>
              <div className="flex justify-between">
                <span>SWISS GRID METROLOGY</span>
                <span className="text-[#ff5708]">[ACTIVE]</span>
              </div>
              <div className="flex justify-between">
                <span>7+ YRS BRAND &amp; VECTOR</span>
                <span className="text-[#ff5708]">[ACTIVE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 04: TECH STACK & TOOLCHAIN MATRIX TABLE                   */}
      {/* ================================================================= */}
      <section className="border border-[#434655] bg-[#1a1c20]" id="matrix">
        {/* Table Header Bar */}
        <div className="border-b border-[#434655] px-4 md:px-6 py-3 bg-[#0c0e12] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff5708]" />
            <h2 className="font-title text-sm md:text-base text-white uppercase tracking-wider font-semibold">
              [04_MATRIX] // COMPREHENSIVE TOOLCHAIN &amp; COMPUTE STACK
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span className="hidden sm:inline px-2 py-0.5 border border-[#434655] bg-[#1e2024] text-[#2e6bff]">AUTOCAD .DWG COMPLIANT</span>
            <span className="hidden md:inline px-2 py-0.5 border border-[#434655] bg-[#1e2024] text-[#ff5708]">AISC / ACI 318 STANDARD</span>
            <span className="text-[#8d90a1]">TABLE_REF: STACK_2025.02</span>
          </div>
        </div>
        {/* Zero-gap Structured Table Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="border-b border-[#434655] bg-[#0c0e12] text-[#8d90a1] text-[11px]">
                <th className="p-3 border-r border-[#434655] w-16">ID</th>
                <th className="p-3 border-r border-[#434655]">DISCIPLINE DOMAIN</th>
                <th className="p-3 border-r border-[#434655]">PRIMARY FRAMEWORKS &amp; PLATFORMS</th>
                <th className="p-3 border-r border-[#434655]">STANDARD BENCHMARKS</th>
                <th className="p-3 text-right">OPERATIONAL STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#434655]">
              <tr className="hover:bg-[#1e2024] transition-colors group">
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">01</td>
                <td className="p-3 border-r border-[#434655] font-bold text-white group-hover:text-[#2e6bff] transition-colors font-sans">
                  CIVIL &amp; STRUCTURAL ENGINEERING
                </td>
                <td className="p-3 border-r border-[#434655] text-[#c3c5d8]">
                  AutoCAD (2D/3D Drafting), STAAD.Pro, BeamLab FEA Engine, Structural Statics &amp; Estimation
                </td>
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">
                  IS:456 / IS:800 / AISC 360-16 Code Standards
                </td>
                <td className="p-3 text-right text-[#2e6bff]">
                  [PROD_READY // DAILY]
                </td>
              </tr>
              <tr className="hover:bg-[#1e2024] transition-colors group">
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">02</td>
                <td className="p-3 border-r border-[#434655] font-bold text-white group-hover:text-[#2e6bff] transition-colors font-sans">
                  FRONTEND &amp; WEB SYSTEMS
                </td>
                <td className="p-3 border-r border-[#434655] text-[#c3c5d8]">
                  React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS, Three.js / WebGL
                </td>
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">
                  Responsive 60 FPS Interactive SPAs &amp; Tools
                </td>
                <td className="p-3 text-right text-[#2e6bff]">
                  [PROD_READY // DAILY]
                </td>
              </tr>
              <tr className="hover:bg-[#1e2024] transition-colors group">
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">03</td>
                <td className="p-3 border-r border-[#434655] font-bold text-white group-hover:text-[#2e6bff] transition-colors font-sans">
                  PROGRAMMING &amp; COMPUTATION
                </td>
                <td className="p-3 border-r border-[#434655] text-[#c3c5d8]">
                  Python (NumPy, SciPy, Pandas, Matplotlib), C, Java, JavaScript, REST APIs
                </td>
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">
                  Algorithmic Simulation &amp; Numerical Analysis
                </td>
                <td className="p-3 text-right text-[#2e6bff]">
                  [PROD_READY // DAILY]
                </td>
              </tr>
              <tr className="hover:bg-[#1e2024] transition-colors group">
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">04</td>
                <td className="p-3 border-r border-[#434655] font-bold text-white group-hover:text-[#2e6bff] transition-colors font-sans">
                  DESIGN SYSTEMS &amp; BRAND IDENTITY
                </td>
                <td className="p-3 border-r border-[#434655] text-[#c3c5d8]">
                  Figma, Adobe Illustrator, Photoshop, Vector Metrology, Typography Systems
                </td>
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">
                  DIN 1451 / ISO-216 Swiss Grid Strictness
                </td>
                <td className="p-3 text-right text-[#ff5708]">
                  [7+ YRS // ACTIVE]
                </td>
              </tr>
              <tr className="hover:bg-[#1e2024] transition-colors group">
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">05</td>
                <td className="p-3 border-r border-[#434655] font-bold text-white group-hover:text-[#2e6bff] transition-colors font-sans">
                  PROJECT EXECUTION &amp; ESTIMATION
                </td>
                <td className="p-3 border-r border-[#434655] text-[#c3c5d8]">
                  Construction Cost Estimation, Tendering Analysis, Site Supervision (OPHWC), ASCE
                </td>
                <td className="p-3 border-r border-[#434655] text-[#8d90a1]">
                  Civil Infrastructure Safety Envelopes
                </td>
                <td className="p-3 text-right text-[#ff5708]">
                  [INTERNSHIP // OPHWC]
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 05: DIRECT TERMINAL QUICK DISPATCH                        */}
      {/* ================================================================= */}
      <section className="border border-[#434655] bg-[#0c0e12] p-6 md:p-8 space-y-6 relative crosshair-corner" id="terminal">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#434655]">
          <div>
            <span className="font-mono text-[11px] text-[#ff5708] font-bold">// [05_TERMINAL] DIRECT DISPATCH INTERFACE</span>
            <h2 className="font-title text-lg md:text-xl text-white font-bold mt-1">
              INITIALIZE TRANSMISSION WITH BISWAJEET BISHOYI
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#8d90a1]">
            <span className="w-2 h-2 bg-[#2e6bff] inline-block" />
            <span>ENCRYPTION: 4096-BIT RSA // RECEPTOR READY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Instructions & Coordinates */}
          <div className="lg:col-span-4 space-y-3 font-sans text-xs text-[#c3c5d8]">
            <p className="leading-relaxed">
              Submit an asynchronous transmission directly to Biswajeet Bishoyi&apos;s local engineering workstation terminal. Queries regarding structural computation roles, creative code commissions, or architectural consulting receive responses within 24 hours.
            </p>
            <div className="border border-[#434655] p-3 bg-[#1a1c20] font-mono text-[11px] space-y-1.5">
              <div className="text-[#8d90a1]">// DIRECT CONTACT COORDINATES:</div>
              <div className="text-white">EMAIL: <a href="mailto:bishoyibiswajeet@gmail.com" className="text-[#2e6bff] hover:underline">bishoyibiswajeet@gmail.com</a></div>
              <div className="text-white">LOC: <span className="text-[#c3c5d8]">Bhubaneswar, India // 20°17&apos; N</span></div>
              <div className="text-white">PGP_FINGERPRINT: <span className="text-[#8d90a1]">4F92 B71A C300 E19D</span></div>
            </div>
          </div>

          {/* Right Input Form */}
          <form onSubmit={handleDirectDispatch} className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] text-[#8d90a1] mb-1 uppercase">
                  // SENDER_IDENTITY [NAME &amp; ORG]
                </label>
                <input
                  type="text"
                  required
                  value={dispatchForm.name}
                  onChange={(e) => setDispatchForm({ ...dispatchForm, name: e.target.value })}
                  placeholder="e.g., Studio Foster / Arup Infrastructure"
                  className="w-full bg-[#1a1c20] border border-[#434655] px-3 py-2 text-white font-mono text-xs focus:border-[#2e6bff] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-[#8d90a1] mb-1 uppercase">
                  // RETURN_COMM_FREQUENCY [EMAIL]
                </label>
                <input
                  type="email"
                  required
                  value={dispatchForm.email}
                  onChange={(e) => setDispatchForm({ ...dispatchForm, email: e.target.value })}
                  placeholder="e.g., contact@organization.com"
                  className="w-full bg-[#1a1c20] border border-[#434655] px-3 py-2 text-white font-mono text-xs focus:border-[#2e6bff] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-[#8d90a1] mb-1 uppercase">
                // DISPATCH_PAYLOAD [PROPOSAL / SPEC / ROLE SPEC]
              </label>
              <textarea
                rows={3}
                required
                value={dispatchForm.message}
                onChange={(e) => setDispatchForm({ ...dispatchForm, message: e.target.value })}
                placeholder="Input project scope, structural specification parameters, or role details..."
                className="w-full bg-[#1a1c20] border border-[#434655] px-3 py-2 text-white font-mono text-xs focus:border-[#2e6bff] focus:outline-none resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <label className="flex items-center gap-2 font-mono text-[10px] text-[#8d90a1] select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={dispatchForm.urgent}
                  onChange={(e) => setDispatchForm({ ...dispatchForm, urgent: e.target.checked })}
                  className="border-[#434655] bg-[#1a1c20] text-[#2e6bff]"
                />
                <span>FLAG HIGH-PRIORITY (INFRASTRUCTURE DEADLINE &lt; 14 DAYS)</span>
              </label>

              <button
                type="submit"
                disabled={isDispatching}
                className="px-6 py-2.5 bg-[#2e6bff] text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#ff5708] transition-all tectonic-lift font-bold cursor-pointer"
              >
                <span>[TRANSMIT]</span>
                <span>{isDispatching ? "SENDING..." : "DISPATCH PAYLOAD"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* PROJECT SPECIFICATION MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="border border-[#434655] bg-[#0c0e12] max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto crosshair-corner shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-[#434655] pb-3 mb-4">
              <div>
                <div className="font-mono text-xs text-[#2e6bff] uppercase font-bold">
                  PROJECT SPECIFICATION // {selectedProject.id.toUpperCase()}
                </div>
                <h2 className="font-title text-xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 border border-[#434655] bg-[#1a1c20] text-[#8d90a1] hover:text-white font-mono text-xs font-bold"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Media Image */}
            <div className="aspect-video w-full overflow-hidden bg-[#1a1c20] border border-[#434655] mb-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-[#e2e2e8] leading-relaxed mb-4">
              {selectedProject.fullDesc}
            </p>

            {/* Metrics */}
            {selectedProject.metrics && (
              <div className="grid grid-cols-3 gap-2 my-4 border-t border-b border-[#434655] py-3">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="bg-[#1a1c20] p-2 border border-[#434655]">
                    <div className="font-mono text-[9px] text-[#8d90a1] uppercase">{m.label}</div>
                    <div className="font-mono text-xs text-[#b5c4ff] font-bold mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 bg-[#1a1c20] border border-[#434655] text-[#c3c5d8]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons in Modal */}
            <div className="flex flex-wrap gap-3 pt-2">
              {selectedProject.links.live && (
                <a
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#ff5708] text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 hover:bg-[#ff5708]/90 tectonic-lift-orange"
                >
                  <span>LAUNCH LIVE APPLICATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {selectedProject.links.github && (
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#434655] bg-[#1a1c20] text-white font-mono text-xs flex items-center gap-1.5 hover:border-[#2e6bff] hover:text-[#b5c4ff]"
                >
                  <RiGithubFill className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
              {selectedProject.links.report && (
                <a
                  href={selectedProject.links.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#2e6bff] text-white font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-[#2e6bff]/90"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW INTERNSHIP REPORT</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
