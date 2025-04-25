import { useLocation } from "react-router-dom";

function NavItem({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <a
      href={to}
      className={`relative px-4 py-2 rounded-md font-bold overflow-hidden transition-all duration-300 group ${
        isActive ? "text-black bg-yellow-400" : "text-white"
      }`}
    >
      <span className="relative z-10">{label}</span>
      {/* hover 애니메이션 배경 */}
      <span
        className={`absolute left-0 top-0 w-0 h-full bg-yellow-400 z-0 transition-all duration-300 ease-in-out group-hover:w-full ${
          isActive ? "w-full" : ""
        }`}
      ></span>
    </a>
  );
}
export default NavItem;
