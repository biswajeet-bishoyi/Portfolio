"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { RiGithubFill } from "react-icons/ri"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

type ProjectCategory = "All" | "Engineering" | "Technology"

const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Soil Property Predictor",
    category: "Technology",
    description: "A geotechnical analysis tool that predicts six critical soil properties using TensorFlow.js. It features interactive Boussinesq stress bulb visualization and a foundation recommendation system. The web application allows civil engineers to instantly process soil sample data and receive real-time structural insights, significantly reducing manual calculation time. Built entirely in the browser for maximum privacy and speed.",
    image: "/images/soil-app.jpeg",
    tags: ["JavaScript", "TensorFlow.js", "Chart.js", "HTML/CSS"],
    links: { github: "https://github.com/biswajeet-bishoyi/Soil-Property-Predictor", live: "https://biswajeet-bishoyi.github.io/Soil-Property-Predictor/" }
  },
  {
    id: 2,
    title: "Concrete Strength Predictor",
    category: "Technology",
    description: "A machine learning pipeline designed to predict concrete compressive strength. Utilizing Linear Regression and Random Forest Regressors, it analyzes mix proportions (cement, blast furnace slag, fly ash, water, superplasticizer, coarse aggregate, fine aggregate) and age. The tool features visualized insights to help material scientists optimize concrete mixtures for specific structural requirements while minimizing costs and environmental impact.",
    image: "/images/concrete-app.jpeg",
    tags: ["Python", "Scikit-Learn", "Streamlit", "NumPy"],
    links: { github: "https://github.com/biswajeet-bishoyi/Concrete-Strength-Predictor", live: "https://concrete-strength-tester.streamlit.app/" }
  },
  {
    id: 5,
    title: "Seepage Flow Simulator in Earth Dams",
    category: "Technology",
    description: "An advanced simulation tool built to model and analyze seepage flow through earth dams. Designed to help civil engineers visualize phreatic surfaces, calculate flow rates, and ensure dam stability under various hydraulic conditions.",
    image: "/images/seepage-app.jpeg",
    tags: ["Python", "Streamlit", "Hydraulics", "Simulation"],
    links: { github: "https://github.com/biswajeet-bishoyi/Seepage-Flow-Simulator-in-Earth-Dams", live: "https://seepage-flow-simulator-in-earth-dams.streamlit.app/" }
  },
  {
    id: 4,
    title: "Sustainable Concrete Research",
    category: "Engineering",
    description: "Experimental study on partial replacement of cement with industrial byproducts to reduce carbon footprint.",
    image: "/images/building.png",
    tags: ["Research", "Material Science", "Sustainability"],
    links: { live: "#" }
  },
  {
    id: 6,
    title: "OPHWC Civil Engineering Project",
    category: "Engineering",
    description: "Hands-on civil engineering internship involving AutoCAD drafting for F-Type residential layouts, comprehensive cost estimation for 3 major public bus stands, and site execution monitoring at Excise Bhawan, Bhubaneswar.",
    image: "/images/building.png",
    tags: ["AutoCAD", "Cost Estimation", "Site Execution", "Tendering"],
    links: { live: "https://drive.google.com/file/d/15dmI1QnzFciv6MjID9beAqPhZro7y0Zp/view?usp=sharing" }
  }
]

const CATEGORIES: ProjectCategory[] = ["All", "Engineering", "Technology"]

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-border bg-surface hover:border-primary/30 group">
        <div className="relative aspect-video overflow-hidden bg-muted shrink-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="object-cover w-full h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15] group-hover:opacity-90"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-background/80 backdrop-blur text-foreground border-none hover:bg-background/90">
              {project.category}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="pt-6">
          <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <div className="mb-6">
            <p className={`text-muted-foreground text-sm ${!isExpanded ? "line-clamp-3" : ""}`}>
              {project.description}
            </p>
            {project.description.length > 150 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary text-xs font-semibold mt-2 hover:underline focus:outline-none"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-muted-foreground bg-surface-alt px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 pb-6 flex gap-4 mt-auto shrink-0">
          {project.links.live && (
            <a href={project.links.live} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              View Project <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              <RiGithubFill className="mr-1 h-4 w-4" /> Source
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("All")

  const filteredProjects = PROJECTS.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  )

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <motion.div variants={fadeUp}>
              <h2 className="text-h2 mb-4">Featured Work</h2>
              <div className="w-20 h-1 bg-gradient-divider" />
              <p className="text-muted-foreground mt-6 max-w-xl text-body">
                A selection of projects spanning structural analysis, digital product design, and software development.
              </p>
            </motion.div>

            {/* Filter Pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-surface-alt text-muted-foreground hover:bg-surface-alt/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
