import { useScroll } from "../context/ScrollProvider";
import About from "./About";
import Home from "./Home";
import Projects from "./projects";

function ProjectsPage() {
  const { sections } = useScroll();

  return (
    <div className="relative flex-col ">
      {/* about */}
      <section id="about" ref={sections.about} className="h-screen  text-white">
        <About />
      </section>

      {/* Home  */}
      <section id="home" ref={sections.home} className="h-screen  text-white">
        <Home />
      </section>
      {/* projects */}
      <section
        id="projects"
        ref={sections.projects}
        className="h-screen text-white"
      >
        <Projects />
      </section>
    </div>
  );
}

export default ProjectsPage;
