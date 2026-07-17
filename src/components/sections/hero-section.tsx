"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { fadeUp, staggerContainer } from "@/lib/animations"

export function HeroSection() {
  const ROLES = ["Civil Engineer", "Designer", "Tech Enthusiast"]
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[var(--gradient-hero)] opacity-50 dark:opacity-100 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 w-full text-center sm:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide mb-4">
            HELLO, I&apos;M
          </motion.p>
          
          <motion.h1 variants={fadeUp} className="text-display mb-6">
            Biswajeet Bishoyi
          </motion.h1>
          
          <motion.div variants={fadeUp} className="text-h2 text-muted-foreground h-12 sm:h-16 mb-6">
            I am a{' '}
            <span className="text-foreground inline-block min-w-[200px] font-semibold text-left">
              {ROLES[currentRoleIndex]}
            </span>
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-body-lg text-muted-foreground mb-10 max-w-2xl sm:mx-0 mx-auto">
            The engineer who designs. The designer who codes. The technologist who builds.
            Crafting precise, premium, and performant digital and structural experiences.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start mb-10">
            <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto text-base h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90")}>
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="https://drive.google.com/file/d/1B4yx4EbrV6w2_P0RF7SdhD4KBSbiDPm3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto text-base h-14 px-8 border-border hover:bg-muted")}>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-6 justify-center sm:justify-start">
            <a href="https://linkedin.com/in/biswajeetbishoyi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://github.com/biswajeet-bishoyi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/BiswajeetBisho5" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.022z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  )
}
