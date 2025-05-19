import { Typewriter } from "react-simple-typewriter";
import BearImage from "../assets/bg-bears.png"; // 곰 이미지
import StackCard from "../component/StackCard";
import profile from "../assets/지브리mini.png";
import FadeInItem from "../component/FadeInItem";

function Hero() {
  return (
    <h3 className="text-3xl  text-white   text-center  whitespace-pre-line">
      <Typewriter
        words={["안녕하세요 : ) \n 곰같은 개발자 김인배입니다."]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={1}
        delaySpeed={3000}
      />
    </h3>
  );
}
function About() {
  return (
    <div className=" text-white min-h-screen">
      {/* Hero */}

      <section className="py-20 px-4">
        <div className="h-25">
          <Hero />
        </div>
        <section className="flex items-center justify-center text-center  bg-gradient-to-b ">
          <div className="flex flex-col">
            <p className="text-lg mt-2 ">
              조용히, 하지만 책임감 있게. 꾸준함으로 성장하는 프론트엔드
              개발자입니다.
            </p>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="flex flex-col justify-center py-16 max-w-4xl mx-auto gap-5 md:flex-row">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500">
            <img src={profile} alt="profile" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-yellow-500 pl-3 text-yellow-500">
              About me
            </h2>

            <p className="text-5xl ">김인배</p>
            {["(", "Kim", "In", "Bae", ")"].map((text, i) => (
              <>
                <FadeInItem key={i} index={i}>
                  <p className="text-3xl flex flex-row">{text}</p>
                </FadeInItem>
              </>
            ))}

            {/* 곰같은 개발자 */}
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold ">[곰같은 개발자]</div>
              <p className="ml-2">
                겉으론 조용하지만, 맡은 바 책임은 누구보다 무겁게 받아들이는
                스타일입니다.
                <br />
                꼼꼼하고 느긋하게, 그러나 절대 포기하지 않고{" "}
                <span className="font-bold">
                  끝까지 완성하는 끈기 있는 개발자
                </span>
                를 지향합니다.
              </p>
            </div>
            {/* 사용자 경험 중심 */}
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold">
                [사용자의 경험을 고려하는 개발자]
              </div>
              <p className="ml-2">
                CRM QA 업무를 직접 수행하며, 단순한 기능 구현을 넘어서{" "}
                <br className="hidden md:block" />
                사용자의 입장에서 어떻게 더 편리하고 직관적인 UI를 제공할 수
                있을지를 고민하게 되었습니다.
                <br />그 경험을 바탕으로 항상{" "}
                <span className="font-bold">UX 우선의 사고방식</span>을 갖고
                개발에 임하고 있습니다.
              </p>
            </div>

            {/* 성장 지향 */}
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold">
                [성장의 즐거움을 아는 개발자]
              </div>
              <p className="ml-2">
                매일 새로운 기술을 접하고 적용하는 것이 저에게는 도전이자
                즐거움입니다.
                <br />
                배우는것에 대한 두려움이 없고 차근차근 배워 나가는것을 좋아하며
                <br />
                <span className="font-bold">꾸준히 기록하고 회고하는 습관</span>
                을 가지고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="py-16  max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-yellow-500 pl-3 text-yellow-500">
            Skill
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
      </section>
    </div>
  );
}

export default About;
