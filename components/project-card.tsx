"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/lib/imageBuilder"

interface ProjectCardProps {
  project: {
    _id: string
    title: string
    description: string
    role: string
    image: any
    tags: string[]
    githubUrl?: string
    demoUrl?: string
    startDate: string
    endDate?: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const maxLength = 120

  const formatDateRange = () => {
    const startFormatted = new Date(project.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    
    if (!project.endDate) {
      return `${startFormatted} - Present`
    }
    
    const endFormatted = new Date(project.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    
    // If start and end are the same, show only once
    if (startFormatted === endFormatted) {
      return startFormatted
    }
    
    return `${startFormatted} - ${endFormatted}`
  }

  return (
    <>
      <Card className="group border-primary/20 bg-amber-100/25 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden dark:bg-transparent">
        <div className="relative h-72 w-full overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/20">
            <p className="text-xs font-medium text-primary">{project.role}</p>
          </div>
          <div className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-primary/20">
            <p className="text-xs font-medium text-foreground">{formatDateRange()}</p>
          </div>
          {project.image && <Image src={urlFor(project.image).width(800).height(600).url()} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />}
        </div>
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <CardTitle className="text-xl font-sans text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
            </div>
          </div>
          <CardDescription className="text-foreground/70">
            {project.description.length > maxLength ? (
              <>
                {project.description.slice(0, maxLength)}...{" "}
                <button onClick={() => setIsModalOpen(true)} className="text-primary hover:underline font-medium">
                  Read more
                </button>
              </>
            ) : (
              project.description
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="px-3 py-1 text-xs bg-accent/20 text-secondary border border-accent/30 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex gap-3 pt-2 border-t border-border/50">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" aria-label="View source on GitHub">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" aria-label="View live demo">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-base text-foreground/80 leading-relaxed pt-4">{project.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
