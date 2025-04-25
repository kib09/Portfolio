import ProjectCard from "../component/ProjectedCard";
import projects from "../data/project";

function Projects() {
  return (
    <div className="min-h-screen py-16 px-6 bg-neutral-600">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
