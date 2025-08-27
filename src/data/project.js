import PookjayoLogo from "../assets/Pookjayo-logo.svg";
import VideOnLogo from "../assets/VideOn-logo.svg";
import KroppLogo from "../assets/Kropp-logo.svg";
import Profile from "../assets/지브리mini.jpg";
import PokedexLogo from "../assets/Pokedex-logo.png";
import ZakdangmoiLogo from "../assets/Zakdang-logo.png";
import AlmanLogo from "../assets/Alman-logo.png";
import InluckLogo from "../assets/inluck-logo.png";
const projects = [
  {
    title: "POOKJAYO",
    period: "2025.03 ~ 2025.04",
    stack: ["React", "Firebase", "Tailwind"],
    description:
      "숙소 검색, 예약, 사용자 로그인 기능을 갖춘 숙소 예약 웹앱입니다. 다크모드를 지원하여 ux를 개선하였습니다. Firebase Authentication을 활용한 사용자 인증과 Firestore 기반의 실시간 데이터베이스 기능을 구현하였으며, 반응형 UI를 위한 TailwindCSS를 적용하였습니다.",
    role: "Component - input, toast, skeleton, heart, loading Page - login, signup, find-passwordProtect route 및 private route 구현 ,토스트 프로바이더 구현 인풋 검증 로직 구현",
    image: PookjayoLogo,
    images: [
      PookjayoLogo,
      ...Array.from(
        { length: 4 },
        (_, i) => `/assets/POOKJAYO/pookjayo${i + 1}.png`
      ),
    ],
    github: "https://github.com/jadewisemann/Pookjayo",
    deploy: "https://pookjayo.vercel.app",
    short: "숙소 예약 사이트",
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
        (_, i) => `/assets/VIDEON/videon${i + 1}.png`
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
    images: [
      KroppLogo,
      ...Array.from({ length: 4 }, (_, i) => `/assets/KROPP/kropp${i + 1}.png`),
    ],
    short: "피트니스 사이트",
    github: "https://github.com/jadewisemann/est__team2",
    deploy: "https://jadewisemann.github.io/est__team2/",
    type: "team",
  },
  {
    title: "Portfolio ",
    period: "2025.04~ 2025.05",
    stack: ["react", "tailwind"],
    description:
      "react와 tailwind를 활용하여 제작한 포트폴리오 사이트입니다. 반응형 웹 디자인을 적용 하고 다크모드를 지원하여 ux를 개선하였습니다.",
    role: "사이트 디자인 및 기능 구현",
    image: Profile,
    images: [
      Profile,
      ...Array.from(
        { length: 4 },
        (_, i) => `/assets/PORTFOLIO/portfolio${i + 1}.png`
      ),
    ],
    short: "포트폴리오 사이트",
    github: "https://github.com/kib09/portpolio",
    deploy: "https://inveloper.vercel.app",
    type: "personal",
  },
  {
    title: "Pokedex",
    period: "2025.05~ 2025.06",
    stack: ["react", "styled-components", "fetch", "ts"],
    description:
      "react와 ts를 활용하여 제작한 포켓몬 도감 사이트입니다. styled-components를 사용하여 컴포넌트 기반의 스타일링을 적용하였으며, fetch API를 통해 포켓몬 데이터를 동적으로 불러옵니다.",
    role: "사이트 디자인 및 기능 구현 ",
    image: PokedexLogo,
    images: [
      PokedexLogo,
      ...Array.from(
        { length: 3 },
        (_, i) => `/assets/POKEDEX/pokedex${i + 1}.png`
      ),
    ],
    short: "포켓몬 도감 사이트",
    github: "https://github.com/kib09/pokedex",
    deploy: "https://kib09.github.io/pokedex/",
    type: "personal",
  },
  {
    title: "Zakdangmoi",
    period: "2025.05~ 2025.07",
    stack: [
      "react",
      "styled-components",
      "Tailwind",
      "EmailJS",
      "Zustand",
      "Firebase",
    ],
    description:
      "이 프로젝트는 React와 Vite, Firebase를 기반으로 한 일정, 공지, 메시지, 할 일 관리 웹 애플리케이션입니다. 관리자 및 일반 사용자가 로그인하여 공지사항, 일정, 연락처, 메시지, 할 일 등을 효율적으로 관리할 수 있습니다. 실제 서비스를 염두에 두고 설계되었으며 회원가입 기능을 제한하기 위해 관리자가 직접 email로 초대 하는 방식을 채택하였습니다.또한 실시간으로 변화하는 데이터를 반영하기 위해 Firebase realtime database를 사용하여 메시지 기능을 구현했습니다.",
    role: "사이트 디자인 및 기능 구현 ",
    image: ZakdangmoiLogo,
    images: [
      ZakdangmoiLogo,
      ...Array.from(
        { length: 8 },
        (_, i) => `/assets/ZAKDANGMOI/zakdangmoi${i + 1}.png`
      ),
    ],
    short: "소규모 그룹웨어 사이트",
    github: "https://github.com/kib09/zakdangmoi",
    deploy: "https://kibproject-63d04.web.app/",
    type: "personal",
  },
  {
    title: "Alman",
    period: "2025.07 ~ 2025.07",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    description:
      "Next.js 15와 TypeScript를 기반으로 한 남성 쇼핑몰 웹사이트입니다. Prisma ORM을 사용한 데이터베이스 관리, 반응형 디자인, 다크모드 지원, 실시간 검색 기능을 구현하였습니다. 카테고리별 상품 분류, 장바구니 기능, 위시리스트, 사용자 인증 및 주문 관리 시스템을 포함한 완전한 이커머스 플랫폼입니다.",
    role: "전체 사이트 설계 및 개발, 데이터베이스 스키마 설계, API 엔드포인트 구현, UI/UX 디자인 및 반응형 웹 구현",
    image: AlmanLogo,
    images: [
      AlmanLogo,
      ...Array.from(
        { length: 10 },
        (_, i) => `/assets/ALMAN/Alman${i + 1}.png`
      ),
    ],
    short: "남성 쇼핑몰 사이트",
    github: "https://github.com/kib09/alman",
    deploy: "https://alman.vercel.app",
    type: "personal",
  },
  {
    title: "inluck",
    period: "2025.07 ~ 2025.08",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Google Gemini AI",
      "Google OAuth",
    ],
    description:
      "행운과 미래를 탐험할 수 있는 종합 운세 모바일 앱입니다. 로또 번호 추첨, 별자리별 운세, AI 기반 타로카드 리딩 등 다양한 기능을 통해 사용자에게 신비로운 경험을 제공합니다. React Native와 Expo를 사용하여 iOS와 Android 크로스 플랫폼을 지원하며, Google Gemini AI를 활용한 타로카드 해석과 Google OAuth를 통한 사용자 인증 시스템을 구현하였습니다.",
    role: "전체 앱 설계 및 개발, AI 서비스 연동, OAuth 인증 시스템 구현, 크로스 플랫폼 UI/UX 디자인, 다크모드 지원",
    image: InluckLogo,
    images: [
      InluckLogo,
      ...Array.from(
        { length: 9 },
        (_, i) => `/assets/INLUCK/inluck${i + 1}.png`
      ),
    ],
    short: "운세 및 타로카드 앱",
    github: "https://github.com/kib09/inluck",
    deploy: "https://expo.dev/accounts/kiminbae/projects/inluck",
    type: "personal",
  },
];

export default projects;
