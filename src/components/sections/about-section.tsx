"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const TRAITS = [
  "Analytical & Precise",
  "Design-Oriented",
  "Tech-Forward",
  "Business-Minded",
]

const STATS = [
  { value: "3+", label: "Years Engineering Study" },
  { value: "10+", label: "Design Projects" },
  { value: "2", label: "National Conferences" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-alt/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-divider" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image & Stats */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative shadow-lg-dark">
                <img 
                  src="/images/my-photo.jpeg" 
                  alt="Biswajeet Bishoyi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {STATS.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-background rounded-lg shadow-sm border border-border">
                    <div className="text-2xl font-bold font-heading text-primary mb-1">{stat.value}</div>
                    <div className="text-caption text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Bio */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-body-lg text-foreground mb-6 font-medium">
                  I like building things that make sense — whether it&apos;s a structure, a layout, or a piece of code.
                </p>
                <p className="text-body text-muted-foreground mb-6">
                  I&apos;m a Civil Engineering student who also works as a freelance graphic designer and coder, blending creativity with logic. From designing brand identities to experimenting with programming in C, Python, Java, JavaScript, and HTML, I&apos;ve learned that good design and strong engineering share the same goal: clarity and structure.
                </p>
                <p className="text-body text-muted-foreground mb-8">
                  Right now, I&apos;m diving deeper into structural engineering and exploring how design and computation can reshape the way we visualize and build the world around us.
                </p>
              </div>

              <h3 className="text-h3 mb-6">Core Traits</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TRAITS.map((trait, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-body text-foreground font-medium">{trait}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
