# MyPortfolio (v2)

A modern personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Single-page portfolio layout with smooth section navigation
- Sections: Hero, About, Skills, Projects, Education, Achievements, Contact
- Animated UI effects (custom cursor, particles background, scroll progress)
- Contact form integration with Formspree
- Responsive design for desktop and mobile

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI components
- Lucide icons

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Create a local `.env.local` file in the project root:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

A template file is included as `.env.example`.

### 3. Run the development server

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `pnpm dev` - Run in development mode
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting

## GitHub Push Checklist

- Ensure `.env.local` is not committed
- Keep secrets and local config out of Git
- Commit source code and `.env.example` only

## Deployment

This app can be deployed on Vercel or any platform that supports Next.js.

For production, set:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

## Author

Arnav Singh

- GitHub: https://github.com/ArnavSingh008
- LinkedIn: https://linkedin.com/in/ArnavSingh008
