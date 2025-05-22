import { createContext, useContext, useRef, useState, useEffect } from "react";

const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "-70px 0px 0px 0px", // 상단 여백만큼 미리 감지
      }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (section) => {
    const element = sections[section]?.current;
    if (!element) return;

    const headerOffset = 70; // 헤더 높이
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <ScrollContext.Provider value={{ sections, activeSection, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}
