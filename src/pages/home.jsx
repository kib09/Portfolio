import TiltCard from "../component/TiltCard";
import bearsImg from "../assets/bg-bears.png";
import FadeInItem from "../component/FadeInItem";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <div className=" text-white flex flex-col justify-center items-center ">
        <section className="flex flex-col md:flex-row px-4 gap-8 items-center pb-5 border-b-4 border-neutral-800">
          {/*  카드  */}
          <TiltCard image={bearsImg} />

          <div className="flex flex-col justify-center text-center md:text-left">
            <div className="flex border-l-amber-300 border-l-4 items-baseline relative justify-center h-full gap-2 mb-5  ">
              <p className="font-paper text-5xl">김인배</p>
              {["(", "Kim", "In", "Bae", ")"].map((text, i) => (
                <>
                  <FadeInItem key={i} index={i}>
                    <span className="text-3xl mb-4">{text}</span>
                  </FadeInItem>
                </>
              ))}
            </div>
            <div className=" text-3xl text-yellow-500 font-bold ">Contact</div>
            <div className=" text-2xl text-white ml-4">
              <div className="flex gap-4">
                Email
                <button className="underline cursor-pointer text-neutral-300">
                  dslqoehf@gmail.com
                </button>
              </div>
              <div className="flex gap-4">
                GitHub
                <button className="underline cursor-pointer text-neutral-300">
                  https://github.com/kib09
                </button>
              </div>
              <div className="flex gap-4">
                Blog
                <button className="underline cursor-pointer text-neutral-300">
                  https://github.com/kib09
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
