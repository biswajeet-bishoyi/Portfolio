"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { Card, CardContent } from "@/components/ui/card"

const CERTIFICATIONS = [
  {
    title: "Hack and Hit",
    issuer: "Certification",
    date: "Feb 2025",
    link: "#"
  },
  {
    title: "From Gps To Autopilot: How Drones Navigate Without Pilot",
    issuer: "Skyy Skill Academy",
    date: "Feb 2025",
    link: "#"
  },
  {
    title: "AI TOOLS WORKSHOP",
    issuer: "Be10x",
    date: "Jan 2025",
    link: "#"
  },
  {
    title: "Performance Based Scholarship",
    issuer: "SRM Institute of Science and Technology",
    date: "Jan 2025",
    link: "#"
  },
  {
    title: "Sustainable Technological Solutions for Pollution Control Measures",
    issuer: "Coimbatore Institute of Engineering and Technology",
    date: "Dec 2024",
    link: "#"
  },
  {
    title: "Problem Solving Through Programming in C",
    issuer: "NPTEL",
    date: "Apr 2024",
    link: "#"
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-surface-alt/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12 md:mb-16 text-center">
            <h2 className="text-h2 mb-4">Licenses & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full border-border bg-surface hover:border-primary/40 transition-all hover:shadow-md group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="p-3 bg-surface-alt text-primary rounded-lg w-fit mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
                      <Award className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-lg font-bold font-heading mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="text-sm font-medium text-foreground mb-1">
                      {cert.issuer}
                    </div>
                    <div className="text-xs text-muted-foreground mb-6">
                      Issued {cert.date}
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-border">
                      <a 
                        href={cert.link} 
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Show credential <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
