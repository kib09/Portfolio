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
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // 가장 위에 가까운 섹션을 선택
          const topMost = visibleEntries.reduce((prev, current) =>
            prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current
          );
          setActiveSection(topMost.target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px 0px 0px", // 감지 지점을 더 위로
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

    const headerOffset = 70; // 헤더 높이만큼 보정
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
