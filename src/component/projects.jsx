import ProjectCard from './ProjectedCard'
import projects from '../data/project'

function Projects() {
  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
export default Projects
