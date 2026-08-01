import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arnavsingh.dev"),

  title: {
    default: "Arnav Singh | Full Stack MERN Developer",
    template: "%s | Arnav Singh",
  },

  description:
  "Portfolio of Arnav Singh, a Full Stack MERN Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Java, Docker, DevOps, CI/CD, AWS, and modern web development. Explore projects, technical skills, certifications, and problem-solving experience.",

  keywords: [
  "Arnav Singh",
  "Arnav Singh Portfolio",
  "Arnav Singh Developer",
  "Arnav Singh Full Stack Developer",
  "Arnav Singh MERN Developer",
  "Full Stack Developer",
  "Full Stack MERN Developer",
  "MERN Stack Developer",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "Java Developer",
  "Docker",
  "DevOps",
  "CI/CD",
  "GitHub Actions",
  "AWS",
  "Linux",
  "REST API",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "Portfolio",
  "Data Structures",
  "Algorithms",
  "DSA",
  "LeetCode",
  "HackerRank",
  "Lovely Professional University",
  "LPU",
  "Punjab",
  "Hazaribagh",
  "Jharkhand",
  "India",
],

  authors: [
    {
      name: "Arnav Singh",
      url: "https://arnavsingh.dev",
    },
  ],

  creator: "Arnav Singh",
  publisher: "Arnav Singh",
  applicationName: "Arnav Singh",

  verification: {
  google: "gw5eMrxxDFzSWbjNBUAhsuZv69yUI0jsOYrb1j1XsIQ",
},

  alternates: {
    canonical: "https://arnavsingh.dev",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
  icon: [
    {
      url: "/favicon.ico",
    },
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  shortcut: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},

manifest: "/site.webmanifest",

  openGraph: {
    title: "Arnav Singh | Full Stack MERN Developer",
    description:
  "Portfolio of Arnav Singh – Full Stack MERN Developer building scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, Java, Docker, DevOps, CI/CD, and AWS.",

    url: "https://arnavsingh.dev",
    siteName: "Arnav Singh",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arnav Singh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arnav Singh | Full Stack MERN Developer",
    description:
  "Explore my portfolio featuring MERN Stack, Java, Docker, DevOps, CI/CD, AWS, Full Stack projects, and DSA problem-solving experience.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1117",
};

// ---------- Structured Data (JSON-LD) ----------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arnav Singh",
  url: "https://arnavsingh.dev",
  image: "https://arnavsingh.dev/og-image.jpg",
  jobTitle: "Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer specializing in React, Next.js, Node.js, Express.js, MongoDB and Java.",

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lovely Professional University",
  },

  sameAs: [
    "https://github.com/arnavsingh008",
    "https://www.linkedin.com/in/arnavsingh008",
    "https://leetcode.com/u/arnavsingh008/",
  ],
};
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arnav Singh",
  alternateName: "Arnav Singh Portfolio",
  url: "https://arnavsingh.dev",
  description:
    "Portfolio of Arnav Singh, Full Stack MERN Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Java, Docker, DevOps, CI/CD and AWS.",
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd, websiteJsonLd]),
          }}
        />

        {children}

        <Analytics />
      </body>
    </html>
  );
}