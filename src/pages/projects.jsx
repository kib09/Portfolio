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
    <section className=" max-w-4xl mx-auto pt-20">
      <div className="flex flex-col  ">
        <div className="md:flex gap-10 items-start">
          <h2 className="text-3xl font-bold  border-l-4 border-yellow-900 pl-3 text-yellow-900 mb-4">
            Projects
          </h2>

          {/* 필터 버튼 */}
          <div className="flex flex-col md:flex-row justify-left">
            <div className="flex gap-4 ">
              {["all", "team", "personal"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-2 py-2 rounded font-semibold transition cursor-pointer text-center w-24 h-16 flex flex-col justify-center items-center ${
                    filter === type
                      ? "bg-yellow-400 text-black"
                      : "bg-neutral-200 dark:bg-neutral-700 text-white hover:bg-yellow-500"
                  }`}
                >
                  <span className="leading-tight">
                    {type === "team" && (
                      <>
                        <div>팀</div>
                        <div>프로젝트</div>
                      </>
                    )}
                    {type === "personal" && (
                      <>
                        <div>개인</div>
                        <div>프로젝트</div>
                      </>
                    )}
                    {type === "all" && (
                      <>
                        <div>전체</div>
                        <div>프로젝트</div>
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* 카드 리스트 */}
        <div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={i}
                {...project}
                onClickDetail={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
        {/* 모달 */}
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

export default Projects;
