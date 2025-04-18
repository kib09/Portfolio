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

      {/* 기술 스택 */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-3">기술 스택</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="font-semibold text-gray-700">React</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="font-semibold text-gray-700">JavaScript</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="font-semibold text-gray-700">HTML</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="font-semibold text-gray-700">CSS</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue"
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="font-semibold text-gray-700">Vue</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
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

            <p className="font-semibold text-gray-700">Tailwind</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
