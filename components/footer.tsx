'use client'

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">AS</span>
            <span className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Arnav Singh. All rights reserved.
            </span>
          </div>

          {/* Made with love */}
          <div className="text-sm text-muted-foreground absolute md:left-1/2 md:-translate-x-1/2">
            Designed & Developed by Arnav Singh • Full Stack Developer
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ArnavSingh008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ArnavSingh008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arnavsinghh08@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-6 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:text-primary transition-colors" />
      </button>
    </footer>
  )
}
