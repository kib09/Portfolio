# 🐻 김인배 | 프론트엔드 포트폴리오

곰같이 묵묵하지만 책임감 있게, 성장하고 있는 프론트엔드 개발자 **김인배**의 포트폴리오입니다.

👉 **[배포 링크 바로가기](https://inveloper.vercel.app)**

---

## 📌 주요 내용

- 🎯 사용자 경험(UX) 중심으로 구성된 반응형 SPA
- 🌙 다크모드 지원 및 애니메이션 기반 인터랙션
- 🧭 스크롤 기반 페이지 전환 + GNB 내비게이션
- 📊 프로젝트 상세 모달, 기술 스택 강조, 접근성 반영

---

## 🛠️ 사용 기술

| 구분            | 기술                                      |
| --------------- | ----------------------------------------- |
| 프레임워크      | React (Vite)                              |
| UI 스타일링     | Tailwind CSS                              |
| 라우팅 / 스크롤 | React Router, Scroll Context API          |
| 애니메이션      | Framer Motion, Fadeitem , Swiper          |
| 배포            | Vercel                                    |
| 접근성/SEO      | Lighthouse 기준 90점 이상, meta 설정 완료 |

---

## 🚀 시작하기

### 요구사항

- **Node.js**: 20.0.0 이상 (LTS 버전 권장)
- **npm** 또는 **yarn**

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/kib09/Portfolio-1.git
cd Portfolio-1

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

**⚠️ 중요**: Vercel에서 Node.js 18 지원이 중단되었습니다. Node.js 20 이상 버전을 사용해주세요.

---

## 📷 미리보기

### 메인 페이지

![main](./screenshots/main.png)

### 다크모드

![dark](./screenshots/dark.png)

### 프로젝트 상세 보기

![modal](./screenshots/modal.png)

---

## 📂 프로젝트 구조

```bash
src/
├── components/
│   ├── Header.jsx
│   ├── DarkModeToggle.jsx
│   └── ...
├── pages/
│   ├── MainPage.jsx
│   ├── ProjectsPage.jsx
│   └── ...
├── assets/
├── context/
│   └── ScrollProvider.jsx
└── App.jsx
```
