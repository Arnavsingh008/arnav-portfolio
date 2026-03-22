'use client'

import { useEffect, useRef } from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

interface Education {
  degree: string
  institution: string
  location: string
  period: string
  grade: string
  icon: React.ComponentType<{ className?: string }>
}

const educationData: Education[] = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'Aug 2023 - Present',
    grade: 'CGPA: 7.49',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Annada College',
    location: 'Hazaribagh, Jharkhand',
    period: 'Apr 2021 - Mar 2023',
    grade: 'Percentage: 87.4%',
    icon: BookOpen,
  },
  {
    degree: 'Matriculation (10th)',
    institution: "St. Paul's School",
    location: 'Hazaribagh, Jharkhand',
    period: 'Apr 2020 - Mar 2021',
    grade: 'Percentage: 87.8%',
    icon: Award,
  },
]

export function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Education
          </span>
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4" style={{ transitionDelay: '0.1s' }}>
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="reveal w-20 h-1 bg-gradient-to-r from-primary to-neon-purple mx-auto rounded-full" style={{ transitionDelay: '0.2s' }} />
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-neon-purple to-primary" />

          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className={`reveal relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-cyan z-10" />

              {/* Content */}
              <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="glass p-6 rounded-2xl hover:scale-[1.02] transition-transform group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="px-3 py-1 glass rounded-full">{edu.period}</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
