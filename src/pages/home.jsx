import TiltCard from "../component/TiltCard";
import bearsImg from "../assets/bg-bears.png";

function Home() {
  return (
    <div className="bg-neutral-600 min-h-screen text-white pt-10 flex justify-center items-center">
      <section className="flex py-20 px-4 gap-8">
        {/* 기울기 카드 */}
        <TiltCard
          image={bearsImg}
          onClick={() => (window.location.href = "/Projects")}
        />

        {/* 텍스트 정보 */}
        <div className="flex flex-col justify-center">
          <div className="text-7xl font-bold mb-4  border-b-yellow-500 border-b-4 pb-2">
            KIM IN BAE
          </div>
          <div className="text-3xl mb-2">WEB Prontend Developer</div>
          <div className="text-lg"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
