import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { WorkstationHeader } from "@/components/layout/workstation-header";
import { WorkstationFooter } from "@/components/layout/workstation-footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biswajeetbishoyi.com"),
  title: {
    default: "Biswajeet Bishoyi // SYS_ARCH - Civil Engineer, Computational Designer & Technologist",
    template: "%s | Biswajeet Bishoyi",
  },
  description:
    "Engineering workstation portfolio of Biswajeet Bishoyi — B.Tech Civil Engineering student at SRMIST, computational designer, and software technologist. Exploring generative infrastructure, structural mechanics, and algorithmic design systems.",
  keywords: [
    "Biswajeet Bishoyi",
    "Civil Engineering",
    "Computational Design",
    "Structural Analysis",
    "FEA",
    "BeamLab",
    "SRMIST",
    "Web Design",
    "Three.js",
    "Bhubaneswar",
  ],
  authors: [{ name: "Biswajeet Bishoyi" }],
  creator: "Biswajeet Bishoyi",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://biswajeetbishoyi.com" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://biswajeetbishoyi.com",
    siteName: "Biswajeet Bishoyi // SYS_ARCH",
    title: "Biswajeet Bishoyi // SYS_ARCH - Civil Engineer & Technologist",
    description:
      "Tectonic precision portfolio spanning civil engineering structural solvers, finite element tools, algorithmic design, and full-stack software development.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Biswajeet Bishoyi Workstation Portfolio" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col bg-[#0c0e12] text-[#e2e2e8] blueprint-grid`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <WorkstationHeader />
          <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-6 xl:px-8 py-3 md:py-4 relative z-10">
            {children}
          </main>
          <WorkstationFooter />
          <Toaster position="bottom-right" richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
