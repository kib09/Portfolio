import PookjayoLogo from "../assets/Pookjayo-logo.svg";
import VideOnLogo from "../assets/VideOn-logo.svg";
import KroppLogo from "../assets/Kropp-logo.svg";

const projects = [
  {
    title: "POOKJAYO",
    period: "2025.03 ~ 2025.04",
    stack: ["React", "Firebase", "Tailwind"],
    description:
      "숙소 검색, 예약, 사용자 로그인 기능을 갖춘 숙소 예약 웹앱입니다. Firebase Authentication을 활용한 사용자 인증과 Firestore 기반의 실시간 데이터베이스 기능을 구현하였으며, 반응형 UI를 위한 TailwindCSS를 적용하였습니다.",
    role: "Firebase를 활용한 사용자 로그인/회원가입, 숙소 데이터 CRUD 처리 구현. UI 디자인과 TailwindCSS를 활용한 반응형 레이아웃 설계 및 적용.",
    image: PookjayoLogo,
    images: [
      PookjayoLogo,
      ...Array.from(
        { length: 4 },
        (_, i) => `/assets/POOKJAYO/pookjayo${i + 1}.PNG`
      ),
    ],
    github: "https://github.com/jadewisemann/Pookjayo",
    deploy: "https://pookjayo.vercel.app",
    short: "숙소 예약 앱",
    type: "team",
  },
  {
    title: "VideOn ",
    period: "2023.11 ~ 2023.12",
    stack: ["JS", "OMDB", "DMDB", "SASS"],
    description:
      "omdbAPI, 오픈소스로 영화 정보를 제공하는 api를 이용하여 정보를 받아오고 해당 정보를 유저에게 제공하는 기능을 구현한 사이트.",
    role: "공통 컴포넌트 제작 및 구현 , 검색 결과 페이지 개발 , API 연동으로 추가 검색 기능 개발, tmdb API 와 imdb API 사이 핸들링 기능 구현",
    image: VideOnLogo,
    images: [
      VideOnLogo,
      ...Array.from(
        { length: 4 },
        (_, i) => `/assets/VIDEON/videon${i + 1}.PNG`
      ),
    ],
    short: "영화 검색 사이트",
    github: "https://github.com/jadewisemann/est__team-2__project-2",
    deploy: "https://est-team-2-project-2.vercel.app/",
    type: "team",
  },
  {
    title: "Kropp ",
    period: "2024.12~ 2025.01",
    stack: ["HTML5", "CSS3"],
    description:
      "html, css를 활용한 피트니스 사이트입니다. 반응형 웹 디자인을 적용하여 다양한 화면 크기에서 최적화된 레이아웃을 제공합니다",
    role: "About 서브페이지 디자인 및 퍼블리싱",
    image: KroppLogo,
    images: [KroppLogo, "ss", "ss"],
    short: "피트니스 사이트",
    github: "https://github.com/jadewisemann/est__team2",
    deploy: "https://jadewisemann.github.io/est__team2/",
    type: "team",
  },
];

export default projects;
