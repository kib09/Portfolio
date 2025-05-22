import Header from "./component/Header";
import { ScrollProvider } from "./context/ScrollProvider";
import AnimatedBackground from "./component/AnimatedBg";
import MainPage from "./pages/MainPage";

const savedTheme = localStorage.getItem("theme");

if (
  savedTheme === "dark" ||
  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function App() {
  return (
    <>
      <AnimatedBackground />

      <ScrollProvider>
        <Header />
        <MainPage style={{ position: "relative", zIndex: 1 }} />
      </ScrollProvider>
    </>
  );
}

export default App;
