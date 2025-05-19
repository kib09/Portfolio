import StackCard from "../component/StackCard";

function Skills() {
  return (
    <section className="py-16  max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold  border-l-4 border-yellow-500 pl-3 text-yellow-500 mb-4">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        <StackCard
          stackImg={
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-12 h-12 mx-auto mb-2"
            />
          }
          stack={"react"}
        />
        <StackCard
          stackImg={
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-12 h-12 mx-auto mb-2"
            />
          }
          stack={"javascript"}
        />
        <StackCard
          stackImg={
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-12 h-12 mx-auto mb-2"
            />
          }
          stack={"HTML"}
        />{" "}
        <StackCard
          stackImg={
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="w-12 h-12 mx-auto mb-2"
            />
          }
          stack={"CSS"}
        />
        <StackCard
          stackImg={
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue"
              className="w-12 h-12 mx-auto mb-2"
            />
          }
          stack={"Vue"}
        />
        <StackCard
          stackImg={
            <svg
              className="w-12 h-12 mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="#38bdf8"
              />
            </svg>
          }
          stack={"Tailwind"}
        />
      </div>
    </section>
  );
}

export default Skills;
