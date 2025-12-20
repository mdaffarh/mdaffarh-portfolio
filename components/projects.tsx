import { client } from "@/lib/sanity"
import { ProjectCard } from "./project-card"

interface Project {
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
  order?: number
}

async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(
    coalesce(order, 999) asc,
    coalesce(endDate, startDate) desc,
    startDate desc
  ) {
    _id,
    title,
    description,
    role,
    image,
    tags,
    githubUrl,
    demoUrl,
    startDate,
    endDate,
    order
  }`

  const projects = await client.fetch(query)
  return projects
}

export async function Projects() {
  const projects = await getProjects()

  return (
    <section id="projects" className="container mx-auto px-4 pt-12 max-w-5xl">
      <div className="mb-12">
        <div className="text-[15px] lg:text-base text-primary mb-4 tracking-wide">Here's some projects I've come across along the adventure!</div>
        <h2 className="text-xl md:text-4xl font-bold text-foreground">Selected Works</h2>
        <div className="h-1 w-20 bg-primary mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length === 0 ? <div className="col-span-2 text-center py-12 text-muted-foreground">No projects yet. Add some in Sanity Studio!</div> : projects.map(project => <ProjectCard key={project._id} project={project} />)}
      </div>
    </section>
  )
}
