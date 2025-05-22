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
      "/screenshots/pookjayo-1.png",
      "/screenshots/pookjayo-2.png",
    ],
    github: "https://github.com/username/pookjayo",
    deploy: "https://pookjayo.vercel.app",
    short: "숙소 예약 앱",
    type: "team",
  },
  {
    title: "VideOn ",
    period: "2023.11 ~ 2023.12",
    stack: ["JS", "OMDB", "DMDB", "SASS"],
    description:
      "API를 활용한 영화 검색 웹앱으로 사용자가 원하는 영화 정보를 검색하고, 상세 정보를 확인할 수 있는 기능을 제공합니다.",
    role: "API 연동, 상세 페이지 구현, SASS를 활용한 스타일링",
    image: VideOnLogo,
    images: [
      VideOnLogo,
      "/screenshots/pookjayo-1.png",
      "/screenshots/pookjayo-2.png",
    ],
    short: "영화 검색 사이트",
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
