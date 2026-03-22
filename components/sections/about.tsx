'use client'

import { useEffect, useRef } from 'react'
import { Brain, Users, Zap, Code2 } from 'lucide-react'

const traits = [
  {
    icon: Brain,
    title: 'Problem Solving',
    description: 'Analytical thinker with a passion for solving complex challenges through elegant code solutions.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative mindset, thriving in team environments and contributing to shared success.',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Rapidly adapting to new technologies and frameworks, always staying ahead of the curve.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices and design patterns.',
  },
]

export function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            About Me
          </span>
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4" style={{ transitionDelay: '0.1s' }}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="reveal w-20 h-1 bg-gradient-to-r from-primary to-neon-purple mx-auto rounded-full" style={{ transitionDelay: '0.2s' }} />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m a <span className="text-primary font-semibold">Full Stack MERN Developer</span> with a passion for 
              building innovative web applications. Currently pursuing my B.Tech in Computer Science at 
              Lovely Professional University, I specialize in creating end-to-end solutions using modern technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With hands-on experience in building full-stack applications, dashboards, and real-time systems, 
              I bring ideas to life through clean, efficient code. From crafting intuitive user interfaces with 
              React to designing robust backend architectures with Node.js and MongoDB, I handle every aspect 
              of development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I&apos;m an active problem solver with <span className="text-primary font-semibold">150+ DSA problems</span> solved 
              across various platforms. I believe in continuous learning and staying updated with the latest 
              industry trends and technologies.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.3s' }}>
            <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-sm text-muted-foreground">DSA Problems</div>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Certificates</div>
            </div>
          </div>
        </div>

        {/* Traits Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <div
              key={trait.title}
              className="reveal glass p-6 rounded-xl group hover:bg-primary/5 transition-all hover:scale-105"
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <trait.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {trait.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
