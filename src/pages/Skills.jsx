import { useState } from "react";
import StackCard from "../component/StackCard";
import tailwind from "../assets/tailwind-ico.svg";
import zustand from "../assets/zustand-ico.svg";

function Skills() {
  const [filter, setFilter] = useState("ALL");

  const stackList = [
    {
      stack: "React",
      type: "Front",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      stack: "JavaScript",
      type: "Languages",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      stack: "HTML",
      type: "Languages",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      stack: "CSS",
      type: "Languages",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      stack: "Vue",
      type: "Front",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      stack: "Tailwind",
      type: "Front",
      img: "tailwind",
    },
    {
      stack: "Git",
      type: "etc",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      stack: "GitHub",
      type: "etc",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      stack: "Figma",
      type: "etc",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      stack: "Zustand",
      type: "etc",
      img: "zustand",
    },
    {
      stack: "Sass",
      type: "Front",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      stack: "TypeScript",
      type: "Languages",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  // 정렬: 필터에 해당하는 항목 우선
  const sortedStacks = [...stackList].sort((a, b) => {
    if (filter === "ALL") return 0;
    if (a.type === filter && b.type !== filter) return -1;
    if (a.type !== filter && b.type === filter) return 1;
    return 0;
  });

  const filterTypes = ["ALL", "Languages", "Front", "etc"];

  return (
    <section className="py-16 max-w-4xl mx-auto">
      <div className="md:flex gap-10 items-start">
        <h2 className="text-3xl font-bold border-l-4 border-yellow-900 pl-3 text-yellow-900 mb-4">
          Skills
        </h2>
        <div className="md:flex gap-4 flex-wrap">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded font-semibold transition cursor-pointer mr-2 mb-2 ${
                filter === type
                  ? "bg-yellow-400 text-black"
                  : "bg-neutral-200 dark:bg-neutral-700 text-white hover:bg-yellow-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center mt-5">
        {sortedStacks.map((item, index) => {
          const isDimmed = filter !== "ALL" && item.type !== filter;
          return (
            <div
              key={index}
              className={`${
                isDimmed ? "opacity-30 grayscale" : "opacity-100"
              } transition-all duration-300`}
            >
              <StackCard
                stackImg={
                  item.img === "tailwind" ? (
                    <img
                      src={tailwind}
                      alt={"tailwindcss"}
                      className="w-12 h-12 mx-auto mb-2"
                    />
                  ) : item.img === "zustand" ? (
                    <img
                      src={zustand}
                      alt={"zustand"}
                      className="w-12 h-12 mx-auto mb-2"
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt={item.stack}
                      className="w-12 h-12 mx-auto mb-2"
                    />
                  )
                }
                stack={item.stack}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
