import Header from "./component/Header";
import ProjectsPage from "./pages/ProjectsPage";
import { ScrollProvider } from "./context/ScrollProvider";
import MouseFollower from "./component/MouseFollower";
function App() {
  return (
    <>
      <MouseFollower />
      <ScrollProvider>
        <Header />
        <ProjectsPage />
      </ScrollProvider>
    </>
  );
}

export default App;
