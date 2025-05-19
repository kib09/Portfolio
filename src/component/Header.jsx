import { label } from "framer-motion/client";
import { useScroll } from "../context/ScrollProvider";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const { activeSection, scrollTo } = useScroll();

  const navItems = [
    { id: "about", label: "About" },
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="text-white fixed top-0 left-0 w-full  flex justify-between items-center px-5 py-4 z-50 ">
      {/* 좌측 로고 */}
      <h1
        onClick={() => scrollTo("about")}
        className="text-xl font-bold cursor-pointer hover:text-yellow-400 transition"
      >
        Inveloper
      </h1>

      {/* 우측 메뉴 */}
      <nav className="flex gap-6">
        <DarkModeToggle />
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`px-3 py-1 font-bold transition cursor-pointer ${
              activeSection === item.id
                ? "bg-yellow-400 text-black rounded"
                : "hover:text-yellow-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
