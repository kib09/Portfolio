import { useState } from "react";
import projects from "../data/project";
import ProjectCard from "../component/ProjectedCard";
import Modal from "../component/Modal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all"); // 'all' | 'team' | 'personal'

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.type === filter
  );

  return (
    <div className=" py-30 px-6 bg-neutral-600 flex flex-col items-center">
      {/* 필터 버튼 */}
      <div className="mb-10 flex gap-4 ">
        {["all", "team", "personal"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded font-semibold transition cursor-pointer ${
              filter === type
                ? "bg-yellow-400 text-black"
                : "bg-neutral-700 text-white hover:bg-yellow-500"
            }`}
          >
            {type === "team"
              ? "팀 프로젝트"
              : type === "personal"
              ? "개인 프로젝트"
              : "전체 프로젝트"}
          </button>
        ))}
      </div>

      {/* 카드 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {filteredProjects.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
            onClickDetail={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* 모달 */}
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Projects;
