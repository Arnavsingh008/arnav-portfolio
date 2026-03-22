'use client'

import { useEffect, useRef, useState } from 'react'
import { Trophy, Code2, Award, Star, ExternalLink } from 'lucide-react'

interface Achievement {
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  color: string
}

interface Certificate {
  title: string
  issuer: string
  date: string
  link?: string
}

const achievements: Achievement[] = [
  {
    icon: Code2,
    value: 150,
    suffix: '+',
    label: 'DSA Problems Solved',
    color: 'text-cyan-400',
  },
  {
    icon: Trophy,
    value: 2,
    suffix: '',
    label: 'HackerRank Badges',
    color: 'text-yellow-400',
  },
  {
    icon: Award,
    value: 4,
    suffix: '+',
    label: 'Certificates Earned',
    color: 'text-pink-400',
  },
  {
    icon: Star,
    value: 2,
    suffix: '',
    label: 'Major Projects',
    color: 'text-purple-400',
  },
]

const certificates: Certificate[] = [
  {
    title: 'Full Stack Web Development',
    issuer: 'CipherSchools',
    date: 'Jul 2025',
    link: 'https://cipherschools.com/certificate/preview?id=687e45127efd6d5090703e15',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'iamneo',
    date: 'Dec 2024',
    link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19JSlMVoksoGBjd3tYyHsN%2BfjvUw5C7o5g%3D',
  },
  {
    title: 'Object Oriented Programming',
    issuer: 'iamneo',
    date: 'Dec 2024',
    link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19MHjPSZNRIee2bErEgQTf2GoZj5pDkLno%3D',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Dec 2023',
    link: 'https://freecodecamp.org/certification/fcc08644b28-092e-4573-85ad-fa2b880a942f/responsive-web-design',
  },
]
const platforms = [
  {
    name: 'LeetCode',
    link: 'https://leetcode.com/u/arnavsingh008/',
  },
  {
    name: 'HackerRank',
    link: 'https://www.hackerrank.com/profile/arnavsingh008',
  },
  {
    name: 'GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org/user/arnavsingh08/',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function AchievementsSection() {
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
      ref={sectionRef}
      className="py-24 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Achievements
          </span>
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4" style={{ transitionDelay: '0.1s' }}>
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="reveal w-20 h-1 bg-gradient-to-r from-primary to-neon-purple mx-auto rounded-full" style={{ transitionDelay: '0.2s' }} />
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="reveal glass p-6 rounded-2xl text-center group hover:scale-105 transition-transform"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <achievement.icon className={`w-7 h-7 ${achievement.color}`} />
              </div>
              <div className={`text-4xl font-bold mb-2 ${achievement.color}`}>
                <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="reveal" style={{ transitionDelay: '0.5s' }}>
          <h3 className="text-2xl font-semibold text-center mb-8">Certificates</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="glass p-5 rounded-xl group hover:bg-primary/5 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="View certificate"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-primary/80 mt-2">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms */}
        <div className="reveal mt-12 text-center" style={{ transitionDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">Active on coding platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 glass rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
