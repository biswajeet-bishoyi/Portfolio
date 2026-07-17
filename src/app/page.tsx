import { HeroSection } from "@/components/sections/hero-section"
import { CurvedLoop } from "@/components/ui/curved-loop"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="w-full overflow-hidden opacity-30 hover:opacity-100 transition-opacity duration-500">
        <CurvedLoop 
          marqueeText="BUILDING THE FUTURE ✦ BRIDGING THE GAP ✦ ENGINEERING SOLUTIONS ✦ DESIGNING DREAMS ✦" 
          speed={1.5}
          curveAmount={250}
        />
      </div>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
