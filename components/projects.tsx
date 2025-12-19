import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Project Alpha",
    description: "A modern web application built with Next.js and TypeScript. Features real-time updates and a sleek UI.",
    role: "Full Stack Developer",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Alpha",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Beta",
    description: "Full-stack e-commerce platform with payment integration and inventory management.",
    role: "Lead Developer",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Beta",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Gamma",
    description: "AI-powered tool for content generation with a minimalist interface and powerful features.",
    role: "Frontend Developer",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Gamma",
    tags: ["Python", "AI/ML", "React"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Delta",
    description: "Developer tool for optimizing workflow and automating repetitive tasks.",
    role: "Backend Developer",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Delta",
    tags: ["TypeScript", "CLI", "Node.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="mb-12">
        <div className="text-base text-primary mb-4">Here's some projects I've come across along the adventure!</div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Works</h2>
        <div className="h-1 w-20 bg-primary mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group border-primary/20 bg-amber-100/25 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden dark:bg-transparent">
            <div className="relative h-72 w-full overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/20">
                <p className="text-xs font-medium text-primary">{project.role}</p>
              </div>
              <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <CardTitle className="text-xl font-sans text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </div>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="View source on GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors" aria-label="View live demo">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <CardDescription className="text-foreground/70">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 text-xs bg-accent/20 text-secondary border border-accent/30 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
