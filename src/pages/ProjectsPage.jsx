import { useScroll } from "../context/ScrollProvider";
import About from "./About";
import Contact from "../pages/Contact";
import Projects from "./Projects";
import Skills from "./Skills";

function ProjectsPage() {
  const { sections } = useScroll();

  return (
    <div className="h-screen flex-col py-20 px-4">
      {/* about */}
      <section
        id="about"
        ref={sections.about}
        className="min-h-full  text-white "
      >
        <About />
      </section>

      {/* skills */}
      <section
        id="skills"
        ref={sections.skills}
        className="min-h-full text-white"
      >
        <Skills />
      </section>

      {/* projects */}
      <section
        id="projects"
        ref={sections.projects}
        className=" min-h-full text-white mb-10"
      >
        <Projects />
      </section>

      {/* Contact */}
      <section
        id="contact"
        ref={sections.contact}
        className="min-h-1/2 text-white "
      >
        <Contact />
      </section>
    </div>
  );
}

export default ProjectsPage;
