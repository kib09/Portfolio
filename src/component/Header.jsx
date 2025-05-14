import { label } from "framer-motion/client";
import { useScroll } from "../context/ScrollProvider";

function Header() {
  const { activeSection, scrollTo } = useScroll();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-8 py-4 z-50">
      {/* 좌측 로고 */}
      <h1
        onClick={() => scrollTo("home")}
        className="text-xl font-bold cursor-pointer hover:text-yellow-400 transition"
      >
        inveloper
      </h1>

      {/* 우측 메뉴 */}
      <nav className="flex gap-6">
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
