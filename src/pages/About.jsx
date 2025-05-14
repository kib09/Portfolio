import BearImage from "../assets/bg-bears.png"; // 곰 이미지
import StackCard from "../component/StackCard";

function About() {
  return (
    <div className="bg-neutral-600  text-white min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <section className="flex items-center justify-center text-center  bg-gradient-to-b ">
          <img src={BearImage} alt="곰같은 개발자" className="w-36 h-36 m-10" />
          <div className="flex flex-col">
            <h1 className=" text-4xl mb-4">
              안녕하세요!{" "}
              <span className="font-bold">곰같은 개발자 김인배</span> 입니다.{" "}
            </h1>
            <p className="text-lg mt-2 ">
              조용히, 하지만 책임감 있게. 꾸준함으로 성장하는 프론트엔드
              개발자입니다.
            </p>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="py-16  max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-yellow-500 pl-3">
            자기소개
          </h2>
          <p className="text-md leading-relaxed">
            저는 매일 조금씩 꾸준히 실력을 쌓아가는 프론트엔드 개발자입니다.
            <br />
            곰처럼 묵묵히 맡은 일을 성실히 해내며 팀에 안정감을 주는 개발자를
            지향합니다.
            <br />
            포기하지 않고 꾸준히 성장하며 도전하는 것이 저의 가장 큰 장점입니다.
          </p>
        </section>

        {/* 기술 스택 */}
        <section className="py-16  max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-3">
            기술 스택
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
