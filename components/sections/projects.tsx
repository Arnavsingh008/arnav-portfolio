'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink, Github, Leaf, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'NaapTol',
    subtitle: 'Farmers Smart Help',
    description: 'A full-stack MERN web platform that allows farmers to digitally manage crop measurements, track market pricing, and maintain structured crop records.',
    features: [
      'Crop management system',
      'Real-time weather updates',
      'Dealer discovery',
      'Analytics dashboard',
      'Real-time chat functionality',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    icon: Leaf,
    gradient: 'from-green-500 to-emerald-600',
    github: 'https://github.com/Arnavsingh008/Farmers-Smart-Help-NaapTol',
  },
  {
    title: 'NashaMukti',
    subtitle: 'Rehabilitation Management System',
    description: 'A centralized web-based system for managing patient records and rehabilitation center operations, including tracking, treatment monitoring, and automated report generation.',
    features: [
      'Patient tracking system',
      'Treatment monitoring',
      'Automated report generation',
      'Secure data management',
      'Admin dashboard',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: Heart,
    gradient: 'from-pink-500 to-rose-600',
    github: 'https://github.com/aaniket21/Centralised-Nasha-Mukti-Database',
    live: 'https://nashamukti.ct.ws',
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            My Work
          </span>
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4" style={{ transitionDelay: '0.1s' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="reveal w-20 h-1 bg-gradient-to-r from-primary to-neon-purple mx-auto rounded-full" style={{ transitionDelay: '0.2s' }} />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal group"
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
                {/* Project Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80">{project.subtitle}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-1/2 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="reveal text-center mt-12" style={{ transitionDelay: '0.5s' }}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10"
          >
            <a href="https://github.com/ArnavSingh008" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
