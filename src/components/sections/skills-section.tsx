"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HardHat, PenTool, Code2, TrendingUp } from "lucide-react"

import MagicBento, { BentoCardData } from "@/components/ui/magic-bento"

const SKILL_CATEGORIES = [
  {
    title: "Civil Engineering",
    icon: HardHat,
    skills: ["Site Supervision", "Pre-Construction", "Construction Site Inspections", "STAAD-Pro", "AutoCAD", "Estimate", "Project Estimation", "Tender Preparation", "Tender Management", "Tender Submissions", "Tender Writing", "Tender Planning"]
  },
  {
    title: "Design & Creative",
    icon: PenTool,
    skills: ["Graphic Design", "Logo Design", "Web Design", "Canva", "Visual Information", "Design", "Brand Identity", "Figma", "Adobe Illustrator", "Photoshop"]
  },
  {
    title: "Tech & Dev",
    icon: Code2,
    skills: ["C", "Java", "Python", "JavaScript", "HTML", "Artificial Intelligence (AI)", "Next.js", "React"]
  },
  {
    title: "Marketing & Strategy",
    icon: TrendingUp,
    skills: ["Search Engine Marketing (SEM)", "Search Engine Optimization (SEO)", "Social Media Marketing", "Online Marketing", "Digital Marketing Media", "Marketing", "Search Engines", "Work-based Learning"]
  }
]

const bentoData: BentoCardData[] = SKILL_CATEGORIES.map((cat, index) => ({
  title: cat.title,
  label: "Skillset",
  description: (
    <div className="flex flex-wrap gap-2 mt-4">
      {cat.skills.map((skill) => (
        <Badge 
          key={skill} 
          variant="secondary"
          className="bg-background/50 hover:bg-background/80 text-foreground font-normal py-1.5 px-3 border border-border/50"
        >
          {skill}
        </Badge>
      ))}
    </div>
  )
}));

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-divider" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-body">
              A comprehensive toolkit spanning physical infrastructure, digital design, and modern technology.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full">
            <MagicBento 
              bentoData={bentoData}
              glowColor="132, 0, 255"
              particleCount={15}
              textAutoHide={false}
              enableTilt={true}
              enableMagnetism={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
