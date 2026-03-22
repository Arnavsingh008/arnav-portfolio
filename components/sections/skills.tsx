'use client'

import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Java', level: 85, color: 'from-red-400 to-red-600' },
      { name: 'C++', level: 75, color: 'from-blue-400 to-blue-600' },
      { name: 'C', level: 70, color: 'from-gray-400 to-gray-600' },
      { name: 'PHP', level: 65, color: 'from-indigo-400 to-indigo-600' },
    ],
  },
  {
    title: 'Frameworks',
    icon: '🚀',
    skills: [
      { name: 'React.js', level: 90, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'Express.js', level: 85, color: 'from-gray-400 to-gray-600' },
      { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' },
      { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' },
    ],
  },
  {
    title: 'Tools & Databases',
    icon: '🛠️',
    skills: [
      { name: 'MongoDB', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'MySQL', level: 80, color: 'from-blue-400 to-blue-600' },
      { name: 'Git/GitHub', level: 90, color: 'from-purple-400 to-purple-600' },
      { name: 'XAMPP', level: 70, color: 'from-orange-400 to-orange-600' },
    ],
  },
  {
  title: 'DevOps & Cloud',
  icon: '⚙️',
  skills: [
    { name: 'Docker', level: 80, color: 'from-cyan-400 to-blue-500' },
    { name: 'CI/CD (GitHub Actions)', level: 75, color: 'from-purple-400 to-pink-500' },
    { name: 'AWS', level: 70, color: 'from-orange-400 to-yellow-500' },
    { name: 'Linux', level: 75, color: 'from-gray-400 to-gray-600' },
   ],
  },
]

function SkillBar({ skill, isVisible }: { skill: Skill; isVisible: boolean }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.level])

  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            My Skills
          </span>
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4" style={{ transitionDelay: '0.1s' }}>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="reveal w-20 h-1 bg-gradient-to-r from-primary to-neon-purple mx-auto rounded-full" style={{ transitionDelay: '0.2s' }} />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="reveal glass p-6 rounded-2xl hover:scale-[1.02] transition-transform"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="reveal mt-12 text-center" style={{ transitionDelay: '0.5s' }}>
          <h4 className="text-lg font-medium mb-4">Also familiar with</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'JWT Auth', 'Responsive Design', 'State Management', 'Component Architecture', 'Database Design'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 glass rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
