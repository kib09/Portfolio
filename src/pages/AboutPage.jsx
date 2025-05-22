import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/지브리mini.jpg";
import FadeInItem from "../component/FadeInItem";

function Hero() {
  return (
    <div className="text-3xl  text-white   text-center  whitespace-pre-line ">
      <Typewriter
        words={["안녕하세요 : ) \n 곰같은 개발자 김인배입니다."]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={1}
        delaySpeed={3000}
      />
    </div>
  );
}

function AboutPage() {
  return (
    <div className=" text-white min-h-pull pt-20">
      {/* Hero */}

      <section>
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
          <div className="w-36 h-38 rounded-3xl overflow-hidden border-2 border-yellow-900 object-cover">
            <img src={profile} alt="profile" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold  border-l-4 border-yellow-900 pl-3 text-yellow-900">
              About me
            </h2>
            <div className=" flex flex-col md:items-center md:flex-row">
              <p className="text-5xl font-bold ">김인배</p>
              <div className="flex flex-row gap-2">
                {["(", "In-Bae", "Kim", ")"].map((text, i) => (
                  <FadeInItem key={i} index={i}>
                    <p className="text-3xl flex flex-row">{text}</p>
                  </FadeInItem>
                ))}
              </div>
            </div>
            <div>
              <p>1999 .06 .15</p>
            </div>
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
      </section>
    </div>
  );
}

export default AboutPage;
