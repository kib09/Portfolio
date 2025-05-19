import { img } from "framer-motion/client";
import PookjayoLogo from "../assets/Pookjayo-logo.svg";
import VideOnLogo from "../assets/VideOn-logo.svg";
import KroppLogo from "../assets/Kropp-logo.svg";
const projects = [
  {
    title: "POOKJAYO ",
    period: "2025.03 ~ 2025.04",
    stack: ["React", "Firebase", "Tailwind"],
    description: "숙소 예약 앱으로 DB 연동 및 사용자 인증 기능 포함",
    role: "유저 정보 관련 기능 구현, Firebase 연동, UI 디자인",
    image: PookjayoLogo,
    short: "숙소 예약 앱",
    type: "team",
  },
  {
    title: "VideOn ",
    period: "2023.11 ~ 2023.12",
    stack: ["Vue", "OpenWeather API", "CSS3"],
    description: "날씨 데이터를 지역별로 시각화하여 보여주는 반응형 SPA",
    role: "API 연동, 뷰 라우팅, 반응형 스타일링",
    image: VideOnLogo,
    short: "영화 검색 사이트",
    type: "team",
  },
  {
    title: "Kropp ",
    period: "2023.11 ~ 2023.12",
    stack: ["Vue", "OpenWeather API", "CSS3"],
    description: "날씨 데이터를 지역별로 시각화하여 보여주는 반응형 SPA",
    role: "API 연동, 뷰 라우팅, 반응형 스타일링",
    image: KroppLogo,
    short: "피트니스 사이트",
    type: "personal",
  },
];

export default projects;
