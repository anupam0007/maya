import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://maya-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maya — Web Experiences That Ship",
  description:
    "Maya is the studio of Anupam Gowda, a Bengaluru-based web developer building fast, beautiful, production-ready Next.js websites — from marketing showcases to full e-commerce platforms.",
  keywords: [
    "Maya",
    "Anupam Gowda",
    "Next.js developer",
    "Bengaluru web developer",
    "freelance web developer",
    "React Three Fiber",
    "e-commerce development",
    "portfolio",
  ],
  authors: [{ name: "Anupam Gowda" }],
  creator: "Anupam Gowda",
  openGraph: {
    title: "Maya — Web Experiences That Ship",
    description:
      "Fast, beautiful, production-ready Next.js websites — from marketing showcases to full e-commerce platforms.",
    url: siteUrl,
    siteName: "Maya",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maya — Web Experiences That Ship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maya — Web Experiences That Ship",
    description:
      "Fast, beautiful, production-ready Next.js websites — from marketing showcases to full e-commerce platforms.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink font-body text-white antialiased">
        {children}
      </body>
    </html>
  );
}
