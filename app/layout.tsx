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
    "Portfolio of Arnav Singh, a Full Stack MERN Developer skilled in React.js, Next.js, Node.js, Express.js, MongoDB, Java, Docker, GitHub Actions, and modern web development.",

  keywords: [
    "Arnav Singh",
    "Arnav Singh Portfolio",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "Java Developer",
    "Docker",
    "GitHub Actions",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Arnav Singh LPU",
    "Arnav Singh Hazaribagh",
    "Arnav Singh MERN Developer",
  ],

  authors: [
    {
      name: "Arnav Singh",
      url: "https://arnavsingh.dev",
    },
  ],

  creator: "Arnav Singh",
  publisher: "Arnav Singh",

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
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },

  openGraph: {
    title: "Arnav Singh | Full Stack MERN Developer",
    description:
      "Explore the portfolio of Arnav Singh, showcasing MERN Stack projects, Java development, Docker, DevOps, and modern web applications.",

    url: "https://arnavsingh.dev",
    siteName: "Arnav Singh Portfolio",
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
      "Explore my portfolio featuring MERN Stack, Java, Docker, DevOps, and Full Stack projects.",
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}

        <Analytics />
      </body>
    </html>
  );
}