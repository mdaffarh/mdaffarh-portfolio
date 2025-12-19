import { Starfield } from "@/components/starfield"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Starfield />
      <div className="scanline" />

      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
