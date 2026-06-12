"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HardHat, PenTool, Code2, TrendingUp } from "lucide-react"

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SKILL_CATEGORIES.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div key={category.title} variants={fadeUp}>
                  <Card className="h-full border-border bg-surface hover:border-primary/50 transition-colors duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-h3">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="bg-surface-alt hover:bg-surface-alt text-foreground font-normal py-1.5 px-3"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
