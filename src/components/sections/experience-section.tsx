"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const EXPERIENCE = [
  {
    title: "Student Intern",
    organization: "The Odisha State Police Housing & Welfare Corporation Ltd.",
    period: "Dec 2025 - Jan 2026",
    description: "Student internship in Bhubaneswar, Odisha."
  },
  {
    title: "S.M.ASCE",
    organization: "American Society of Civil Engineers",
    period: "Feb 2025 - Present",
    description: "Active member of the ASCE student chapter, engaging in events, workshops, and discussions that promote innovation and professional growth in civil engineering. Collaborating with peers and faculty to explore sustainable infrastructure, structural design, and emerging technologies."
  },
  {
    title: "Graphic Design Intern",
    organization: "Highway Delite",
    period: "Nov 2024 - Apr 2025",
    description: "Creating visual content for marketing and digital campaigns, supporting the design team with graphics that align with brand identity and communication goals."
  },
  {
    title: "Graphic Designer",
    organization: "Freelance",
    period: "Apr 2018 - Apr 2025",
    description: "Designed digital and print materials for clients, including posters, social media graphics, and branding assets. Collaborated with clients to translate ideas into visually compelling designs."
  }
]

const EDUCATION = [
  {
    title: "B.Tech, Civil Engineering with Computer Applications",
    organization: "SRM IST Chennai",
    period: "Jun 2024 - May 2028",
    description: "Bachelor of Technology program."
  },
  {
    title: "Higher Secondary, Science",
    organization: "Mother's Public School",
    period: "Apr 2021 - May 2023",
    description: "Completed higher secondary education with a focus on science."
  },
  {
    title: "Matriculation",
    organization: "St. Xavier's High School",
    period: "Apr 2020 - Mar 2021",
    description: "High school education."
  }
]

function TimelineItem({ item, isLast }: { item: any, isLast: boolean }) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop Timeline Line */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />
      
      {/* Mobile Timeline Line */}
      {!isLast && <div className="md:hidden absolute left-[11px] top-8 bottom-[-2rem] w-px bg-border" />}
      
      <div className="md:flex items-center justify-between w-full mb-8">
        <div className="md:w-5/12 mb-2 md:mb-0 md:text-right pr-0 md:pr-8">
          <h3 className="text-h3 text-foreground font-bold">{item.title}</h3>
          <div className="text-primary font-medium mt-1">{item.organization}</div>
        </div>
        
        {/* Timeline Dot */}
        <div className="absolute left-0 md:static md:w-2/12 flex justify-center z-10">
          <div className="w-6 h-6 rounded-full bg-surface border-4 border-primary flex items-center justify-center mt-1.5 md:mt-0 shadow-sm" />
        </div>
        
        <div className="md:w-5/12 pl-0 md:pl-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 bg-surface-alt w-fit px-3 py-1 rounded-full">
            <Calendar className="h-3.5 w-3.5" />
            <span>{item.period}</span>
          </div>
          <p className="text-muted-foreground text-body">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface-alt/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Experience Column */}
            <motion.div variants={fadeUp}>
              <div className="mb-10 flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-h2">Experience</h2>
                  <div className="w-12 h-1 bg-gradient-divider mt-2" />
                </div>
              </div>
              
              <div className="space-y-8 relative">
                {/* Mobile timeline line */}
                <div className="absolute left-[11px] top-2 bottom-0 w-px bg-border md:hidden z-0" />
                
                {EXPERIENCE.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-0 z-10">
                    <div className="absolute left-0 md:-left-2 top-2 w-6 h-6 rounded-full bg-surface border-4 border-primary shadow-sm" />
                    <div className="bg-surface p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
                      <div className="text-primary font-medium mb-3">{item.organization}</div>
                      <p className="text-muted-foreground text-body">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Column */}
            <motion.div variants={fadeUp} id="education">
              <div className="mb-10 flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-h2">Education</h2>
                  <div className="w-12 h-1 bg-gradient-divider mt-2" />
                </div>
              </div>
              
              <div className="space-y-8 relative">
                {/* Mobile timeline line */}
                <div className="absolute left-[11px] top-2 bottom-0 w-px bg-border md:hidden z-0" />
                
                {EDUCATION.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-0 z-10">
                    <div className="absolute left-0 md:-left-2 top-2 w-6 h-6 rounded-full bg-surface border-4 border-primary shadow-sm" />
                    <div className="bg-surface p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-heading">{item.title}</h3>
                      <div className="text-primary font-medium mb-3">{item.organization}</div>
                      <p className="text-muted-foreground text-body">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
