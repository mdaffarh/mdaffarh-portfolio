"use client"

import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const greetings = [
  { text: "Welcome", lang: "English" },
  { text: "Selamat Datang", lang: "Indonesian" },
  { text: "ようこそ", lang: "Japanese" },
  { text: "환영합니다", lang: "Korean" },
  { text: "Bienvenue", lang: "French" },
  { text: "Bienvenido", lang: "Spanish" },
  { text: "欢迎", lang: "Chinese" },
  { text: "Willkommen", lang: "German" },
  { text: "Ad Astra Abyssosque", lang: "Latin" },
]

export function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prev => (prev + 1) % greetings.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="container mx-auto px-4 pt-16 pb-8 max-w-5xl">
      <div>
        <div className="mb-6 font-sans text-lg font-bold text-secondary tracking-wider transition-all duration-500">{greetings[currentGreeting].text} 🍃</div>

        <h1 className="text-xl mb-10 text-balance">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary font-semibold">Daffa </span>
          <span className="text-primary">Rizmawan.</span>
        </h1>

        <div className="bg-radial bg-amber-100/25 rounded-md px-4 py-5 mb-3 border border-foreground dark:border-none dark:bg-transparent dark:px-0">
          {/* Title */}
          <div className="mb-4">
            <p className="text-lg md:text-xl text-primary font-bold dark:text-white">About Me</p>
          </div>

          {/* Description */}
          <div className="mb-3 flex flex-col gap-y-4 text-[15px] lg:text-base">
            <p className="text-foreground tracking-wide text-justify dark:text-white">
              I'm honestly still figuring out what niche programmer I am but let just go with <span className="font-semibold">fullstack dev</span> because that's what I've been doing since 2023. It started because I'm curious about{" "}
              <span className="font-semibold">how the data go from front page to database</span> and I sort of went deep down from there. I mainly code in PHP though lately I've been using Javascript to follow the markets.
            </p>
            <p className="text-foreground tracking-wide text-justify dark:text-white">
              Right now, I'm a third year Computer Science student at UPI while also doing some project in organizations. I take speciality in <span className="font-semibold">Software Engineering which introduce me to QA and Testing</span>,
              it's a weird things because for onetime I'm not create anything but to evaluate it, I guess it's good to <span className="font-semibold">try a new thing right?.</span>
            </p>
            <p className="text-foreground tracking-wide text-justify dark:text-white">
              People might think I'm all serious but I'm just quiet to most of the time because I need some times to feel comfortable enough to unleash my yapping-slash-clown mode. I'm not a really tech-bros that always update about new
              things but I'm still like talking about tech.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild className="font-mono">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild className="font-mono bg-transparent">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://github.com/mdaffarh/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/daffa-rizmawan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:daffarizmawan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://drive.google.com/file/d/14vpS2NvOgi_pNf0zP4B2Hh7Z9TeYNi5A/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="CV">
            <FileText className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
