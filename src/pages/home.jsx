import TiltCard from "../component/TiltCard";
import bearsImg from "../assets/bg-bears.png";

function Home() {
  return (
    <div className="bg-neutral-600 min-h-screen text-white pt-10 flex justify-center items-center">
      <section className="flex flex-col md:flex-row py-20 px-4 gap-8 items-center">
        {/* 기울기 카드 */}
        <TiltCard
          image={bearsImg}
          onClick={() => (window.location.href = "/Projects")}
        />

        {/* 텍스트 정보 */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="relative text-5xl md:text-7xl font-bold mb-10 border-b-4">
            KIM IN BAE
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-5xl text-yellow-200 opacity-20 pointer-events-none select-none">
              FrontendDeveloper
            </span>
          </div>
          <div className="text-lg">책임감 있게 성장하는 개발자</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
