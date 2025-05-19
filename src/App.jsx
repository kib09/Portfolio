import Header from "./component/Header";
import ProjectsPage from "./pages/ProjectsPage";
import { ScrollProvider } from "./context/ScrollProvider";
import AnimatedBackground from "./component/AnimatedBg";
function App() {
  return (
    <>
      <AnimatedBackground />

      <ScrollProvider>
        <Header />
        <ProjectsPage style={{ position: "relative", zIndex: 1 }} />
      </ScrollProvider>
    </>
  );
}

export default App;
