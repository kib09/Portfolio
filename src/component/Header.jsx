import { useScroll } from "../context/ScrollProvider";

function Header() {
  const { activeSection, scrollTo } = useScroll();

  const navItems = [
    { id: "home", label: "main" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white flex justify-center gap-8 py-4 z-50">
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
    </header>
  );
}

export default Header;
