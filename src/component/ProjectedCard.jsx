function ProjectCard({ title, description, link }) {
  return (
    <div className="border p-4 rounded shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
      <a href={link} className="text-blue-500" target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  )
}
export default ProjectCard
