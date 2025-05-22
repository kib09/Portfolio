import { useScroll } from "../context/ScrollProvider";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

function MainPage() {
  const { sections } = useScroll();

  return (
    <div className="h-screen flex-col py-20 px-4">
      {/* about */}

      <section
        id="about"
        ref={sections.about}
        className="min-h-full  text-white "
      >
        <AboutPage />
      </section>

      {/* skills */}
      <section
        id="skills"
        ref={sections.skills}
        className="min-h-full text-white"
      >
        <SkillsPage />
      </section>

      {/* projects */}
      <section
        id="projects"
        ref={sections.projects}
        className=" min-h-full text-white mb-10"
      >
        <ProjectsPage />
      </section>

      {/* Contact */}
      <section
        id="contact"
        ref={sections.contact}
        className="min-h-1/2 text-white "
      >
        <ContactPage />
      </section>
    </div>
  );
}

export default MainPage;
