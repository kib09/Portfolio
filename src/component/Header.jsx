import { useState } from "react";
import { useScroll } from "../context/ScrollProvider";
import DarkModeToggle from "./DarkModeToggle";
import { Menu, X } from "lucide-react"; // 아이콘 사용 (lucide-react 설치 시)

function Header() {
  const { activeSection, scrollTo } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuClick = (id) => {
    scrollTo(id);
    setMenuOpen(false); // 메뉴 닫기
  };

  return (
    <>
      <header className="text-white fixed top-0 left-0 w-full flex justify-between items-center px-5 py-4 z-50 ">
        {/* 로고 */}
        <h1
          onClick={() => scrollTo("about")}
          className="text-xl font-bold cursor-pointer hover:text-yellow-400 transition"
        >
          Inveloper
        </h1>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden max-h-7">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 focus:outline-none cursor-pointer"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-90 text-white flex flex-col items-center justify-center gap-8 z-40 transition-all duration-300 md:hidden dark:bg-black">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className="text-2xl hover:text-yellow-400 cursor-pointer pont-bold"
            >
              {item.label}
            </button>
          ))}
          <DarkModeToggle />
        </div>
      )}
    </>
  );
}

export default Header;
