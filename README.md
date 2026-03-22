# Arnav Singh - Portfolio Website

A modern, premium portfolio website built with Next.js 15, React 19, and Tailwind CSS. Features a dark theme with neon cyan accents, smooth animations, and interactive elements.

## Features

- **Hero Section** - Animated intro with typing effect, profile photo with glowing rings, and floating skill badges
- **About Section** - Professional summary with animated stats and trait cards
- **Skills Section** - Categorized skills with animated progress bars
- **Projects Section** - Gradient cards showcasing NaapTol and NashaMukti projects
- **Education Section** - Timeline layout with scroll animations
- **Achievements Section** - Animated counters, certificates, and platform badges
- **Contact Section** - Working contact form with Formspree integration

### Premium Effects

- Custom cursor with hover effects (desktop only)
- Scroll progress indicator
- Interactive particle background
- Glassmorphism UI components
- Section reveal animations on scroll
- Smooth scrolling navigation

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Animations:** CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000] in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page component
├── components/
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About section
│   │   ├── skills.tsx       # Skills section
│   │   ├── projects.tsx     # Projects section
│   │   ├── education.tsx    # Education timeline
│   │   ├── achievements.tsx # Achievements section
│   │   └── contact.tsx      # Contact form
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer component
│   ├── particles-background.tsx  # Interactive particles
│   ├── typing-animation.tsx      # Typing effect
│   ├── scroll-progress.tsx       # Scroll indicator
│   └── custom-cursor.tsx         # Custom cursor
├── public/
│   ├── images/
│   │   └── profile.jpeg      # Profile photo
│   └── Arnav_CV.pdf         # Downloadable CV
└── README.md
```

## Customization

### Colors

Edit the design tokens in `app/globals.css`:

```css
--primary: oklch(0.75 0.18 195);      /* Cyan accent */
--background: oklch(0.12 0.02 260);   /* Dark background */
--foreground: oklch(0.98 0.01 260);   /* Light text */
```

### Content

- Update personal info in each section component under `components/sections/`
- Replace `public/images/profile.jpeg` with your photo
- Replace `public/Arnav_CV.pdf` with your CV

### Contact Form

The contact form uses [Formspree](https://formspree.io) to send emails directly to your inbox.

To set up your own Formspree:

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID (e.g., `xyzabcde`)
3. Edit `components/sections/contact.tsx` and replace the form ID in the fetch URL:

Create a local .env.local file in the project root:

NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
A template file is included as .env.example.
Replace your_form_id to your new form ID.



## License

This project is open source and available under the MIT License.

## Contact

- **Email:** arnavsinghh08@gmail.com
- **GitHub:** (https://github.com/arnavsingh008)
- **LinkedIn:** (https://linkedin.com/in/arnavsingh008)
