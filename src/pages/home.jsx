import BearImage from '../assets/bg-bears.png' // 곰 이미지

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 pt-10">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-yellow-100 to-white">
        <img src={BearImage} alt="곰같은 개발자" className="w-36 h-36 mb-10" />
        <h1 className="text-4xl mb-4">
          안녕하세요! <span className="font-bold">곰같은 개발자 김인배</span> 입니다.{' '}
        </h1>
        <p className="text-lg mt-2 ">
          조용히, 하지만 책임감 있게. 꾸준함으로 성장하는 프론트엔드 개발자입니다.
        </p>
      </section>

      {/* 소개 섹션 */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-yellow-500 pl-3">자기소개</h2>
        <p className="text-md leading-relaxed">
          저는 매일 조금씩 꾸준히 실력을 쌓아가는 프론트엔드 개발자입니다.
          <br />
          곰처럼 묵묵히 맡은 일을 성실히 해내며 팀에 안정감을 주는 개발자를 지향합니다.
          <br />
          포기하지 않고 꾸준히 성장하며 도전하는 것이 저의 가장 큰 장점입니다.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-3">기술 스택</h2>
        <p className="text-md leading-relaxed"></p>
      </section>
    </div>
  )
}

export default Home
