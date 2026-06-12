import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://biswajeetbishoyi.com'),
  title: {
    default: 'Biswajeet Bishoyi — Civil Engineer, Designer & Technologist',
    template: '%s | Biswajeet Bishoyi'
  },
  description: 'Portfolio of Biswajeet Bishoyi — B.Tech Civil Engineering student at SRMIST, graphic designer, and technology enthusiast from Bhubaneswar, India.',
  keywords: ['civil engineer', 'portfolio', 'SRMIST', 'structural engineering', 'graphic design', 'web design', 'Bhubaneswar'],
  authors: [{ name: 'Biswajeet Bishoyi' }],
  creator: 'Biswajeet Bishoyi',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://biswajeetbishoyi.com' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://biswajeetbishoyi.com',
    siteName: 'Biswajeet Bishoyi',
    title: 'Biswajeet Bishoyi — Civil Engineer, Designer & Technologist',
    description: 'Portfolio of Biswajeet Bishoyi — B.Tech Civil Engineering student at SRMIST, graphic designer, and technology enthusiast from Bhubaneswar, India.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Biswajeet Bishoyi Portfolio' }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          
          {/* High-performance Premium Background */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[100px] animate-[spin_20s_linear_infinite] opacity-60 dark:opacity-20" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[100px] animate-[spin_25s_linear_infinite_reverse] opacity-60 dark:opacity-20" />
            
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" 
                 style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
                 
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          </div>

          <main className="min-h-screen pt-16 relative z-10">
            {children}
          </main>
          
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
