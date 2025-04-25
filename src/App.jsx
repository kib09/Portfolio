import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MouseFollower from "./component/MouseFollower";
import Header from "./component/Header";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Projects from "./pages/projects";
import About from "./pages/about";

function Layout() {
  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <>
      <MouseFollower />
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
