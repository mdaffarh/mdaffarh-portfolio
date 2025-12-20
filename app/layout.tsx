import type React from "react"
import type { Metadata } from "next"
import { Space_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Daffa Rizmawan | Fullstack Developer",
  description: "Portfolio of Daffa Rizmawan - Fullstack Developer specializing in web development with PHP and JavaScript. Computer Science student at UPI.",
  keywords: ["Daffa Rizmawan", "Fullstack Developer", "Web Developer", "Portfolio", "UPI", "Computer Science"],
  authors: [{ name: "Daffa Rizmawan" }],
  creator: "Daffa Rizmawan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Daffa Rizmawan | Fullstack Developer",
    description: "Portfolio of Daffa Rizmawan - Fullstack Developer specializing in web development",
    siteName: "Daffa Rizmawan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daffa Rizmawan | Fullstack Developer",
    description: "Portfolio of Daffa Rizmawan - Fullstack Developer",
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍃</text></svg>',
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
