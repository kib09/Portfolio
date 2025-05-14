import { useScroll } from "../context/ScrollProvider";
import About from "./about";
import Home from "./home";
import Projects from "./projects";

function ProjectsPage() {
  const { sections } = useScroll();

  return (
    <div className="relative">
      {/* Home Section */}
      <section
        id="home"
        ref={sections.home}
        className="h-screen bg-neutral-800 text-white"
      >
        <Home />
      </section>

      <section
        id="about"
        ref={sections.about}
        className="h-screen bg-neutral-800 text-white"
      >
        <About />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={sections.projects}
        className="h-screen bg-neutral-600 text-white"
      >
        <Projects />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={sections.contact}
        className="h-screen bg-neutral-700 text-white"
      >
        <h1 className="text-4xl p-10">Contact Section</h1>
      </section>
    </div>
  );
}

export default ProjectsPage;
