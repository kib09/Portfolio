// components/DarkModeToggle.jsx
import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // 초기 테마 설정 (페이지 진입 시)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 테마 상태 변경 함수
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-yellow-300 dark:bg-gray-800 text-black dark:text-white transition-all cursor-pointer"
    >
      {isDark ? "☀️" : " 🌙 "}
    </button>
  );
}

export default DarkModeToggle;
