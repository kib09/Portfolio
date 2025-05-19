import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const lines = ["welcome", "inveloper", "PORTFOLIO"];

  return (
    <div className="h-screen w-full bg-neutral-50 flex items-center justify-center text-black dark:bg-neutral-900 dark:text-white">
      <div
        className="flex flex-col gap-4 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        {lines.map((word, rowIndex) => (
          <div className="flex gap-1 justify-center" key={rowIndex}>
            {word.split("").map((char, i) => (
              <span
                key={i}
                className="text-white text-5xl font-bold inline-block animate-spin-once"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: "0.6s",
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
