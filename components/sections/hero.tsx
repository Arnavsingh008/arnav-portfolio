'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Download, ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { TypingAnimation } from '@/components/typing-animation'
import { Button } from '@/components/ui/button'

export function HeroSection() {
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
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="reveal">
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ transitionDelay: '0.1s' }}>
              Hi, I&apos;m{' '}
              <span className="gradient-text glow-text">Arnav Singh</span>
            </h1>

            <div className="reveal text-xl md:text-2xl text-muted-foreground mb-6 h-8" style={{ transitionDelay: '0.2s' }}>
              <TypingAnimation
                texts={[
                  'Full Stack Developer',
                  'Devops Enginner',
                  'MERN Developer',
                  'Problem Solver',
                  'Quick Learner',
                ]}
                className="text-primary font-mono"
              />
            </div>

            <p className="reveal text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed" style={{ transitionDelay: '0.3s' }}>
              Passionate about building modern web applications with cutting-edge technologies.
              I transform ideas into elegant, functional digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="reveal flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8" style={{ transitionDelay: '0.4s' }}>
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-cyan"
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                <a href="/Arnav_CV.pdf" download="Arnav_Singh_CV.pdf">
                  <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="reveal flex items-center justify-center lg:justify-start gap-4" style={{ transitionDelay: '0.5s' }}>
              <a
                href="https://github.com/ArnavSingh008"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ArnavSingh008"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:arnavsinghh08@gmail.com"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="reveal flex-1 flex justify-center lg:justify-end lg:-translate-x-16" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-8 rounded-full border border-neon-purple/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass p-2 ">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Arnav Singh"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 glass px-3 py-2 rounded-lg animate-float">
                <span className="text-sm font-medium text-primary">MERN Stack</span>
              </div>
              <div className="absolute -left-4 bottom-1/4 glass px-3 py-2 rounded-lg animate-float" style={{ animationDelay: '-2s' }}>
                <span className="text-sm font-medium text-neon-purple">Optimizer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll">
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  )
}
