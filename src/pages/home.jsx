import TiltCard from "../component/TiltCard";
import bearsImg from "../assets/bg-bears.png";
import FadeInItem from "../component/FadeInItem";

function Home() {
  return (
    <div className="bg-neutral-600 min-h-screen text-white  flex justify-center items-center">
      <section className="flex flex-col md:flex-row py-20 px-4 gap-8 items-center">
        {/* 기울기 카드 */}
        <TiltCard image={bearsImg} />

        {/* 텍스트 정보 */}

        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="flex relative items-center justify-center h-full gap-2 mb-6 border-b-4 ">
            {["KIM", "IN", "BAE"].map((text, i) => (
              <>
                <FadeInItem key={i} index={i}>
                  <span className="text-5xl mb-4">{text}</span>
                </FadeInItem>
                <span className="absolute  top-0 left-0 -translate-y-1/2 text-2xl md:text-5xl text-yellow-200 opacity-20 pointer-events-none select-none">
                  FrontendDeveloper
                </span>
              </>
            ))}
          </div>
          <div className="text-lg">책임감 있게 성장하는 개발자</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
