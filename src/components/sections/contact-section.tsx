"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) throw new Error("Failed to send message")
      
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      })
      reset()
      setValue("subject", "") // Reset select
    } catch (error) {
      toast.error("Failed to send message.", {
        description: "Please try again later or email me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">Let&apos;s Connect</h2>
            <div className="w-20 h-1 bg-gradient-divider" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-body">
              Whether you have a project in mind, want to discuss engineering, or just want to say hi, my inbox is always open.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-8">
              <div className="bg-surface-alt/50 p-8 rounded-2xl border border-border h-full">
                <h3 className="text-h3 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-lg border border-border text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                      <a href="mailto:bishoyibiswajeet@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                        bishoyibiswajeet@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-lg border border-border text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Phone</div>
                      <a href="tel:+916370701405" className="text-foreground hover:text-primary transition-colors font-medium">
                        +91 6370701405
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-lg border border-border text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                      <div className="text-foreground font-medium">
                        Bhubaneswar, Odisha<br/>
                        <span className="text-muted-foreground font-normal text-sm">India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-7">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-surface p-8 rounded-2xl border border-border shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      {...register("name")}
                      className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      {...register("email")}
                      className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select onValueChange={(val: string | null) => setValue("subject", val || "")}>
                    <SelectTrigger className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freelance">Freelance Design Project</SelectItem>
                      <SelectItem value="engineering">Engineering Consultation / Collaboration</SelectItem>
                      <SelectItem value="internship">Internship Opportunity</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Hidden input for react-hook-form to track validation */}
                  <input type="hidden" {...register("subject")} />
                  {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or inquiry..." 
                    rows={5}
                    {...register("message")}
                    className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                {/* Honeypot field for spam prevention */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <Button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 bg-primary text-primary-foreground hover:bg-primary/90" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
