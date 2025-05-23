import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const colorRef = useRef();
  const points = useRef([]);
  const animationRef = useRef();
  const sizeRef = useRef({ width: 0, height: 0 });
  const lastTimeRef = useRef(0);

  // Debounce 함수: 특정 함수가 연속적으로 호출될 때 마지막 호출 후 일정 시간(delay)이 지나야 실행되도록 지연시킵니다.
  // 이 함수는 resize 이벤트가 너무 자주 발생하여 화면 깜빡임을 유발하는 것을 방지합니다.
  const debounce = (func, delay) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
    };
  };

  useEffect(() => {
    // 다크/라이트 모드에 따라 색상을 업데이트하는 함수
    const updateDark = () => {
      const isDark = document.documentElement.classList.contains("dark");
      colorRef.current = isDark
        ? { background: "#0e0e1a", point: "#ffffff88", line: "#ffffff22" }
        : { background: "#f4f4f4", point: "#00000055", line: "#00000011" };
    };

    updateDark(); // 컴포넌트 마운트 시 초기 색상 설정

    // HTML 문서의 <html> 요소에 class 속성 변화를 감지하는 MutationObserver 설정
    // 다크/라이트 모드 전환 시 색상을 즉시 업데이트합니다.
    const observer = new MutationObserver(updateDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // 컴포넌트 언마운트 시 observer 연결 해제
    return () => observer.disconnect();
  }, []); // 빈 배열은 이 useEffect가 컴포넌트 마운트 시 한 번만 실행되도록 합니다.

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const POINTS = 60; // 애니메이션에 사용할 점의 개수
    const MAX_DIST = 140; // 점들 사이에 선을 그릴 최대 거리
    const FPS = 60; // 목표 프레임 레이트

    // 뷰포트의 너비와 높이를 가져오는 함수
    // document.documentElement.clientWidth/Height를 사용하여 주소창 유무와 상관없이
    // 레이아웃 뷰포트의 전체 크기를 가져옵니다.
    const getViewportSize = () => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    };

    // 캔버스 크기를 조정하고 점들을 재배치하는 함수
    const resize = () => {
      const dpr = window.devicePixelRatio || 1; // 기기 픽셀 비율 (고해상도 디스플레이 지원)
      const { width, height } = getViewportSize(); // 현재 뷰포트 크기 가져오기

      const { width: oldW, height: oldH } = sizeRef.current;
      const widthChanged = width !== oldW;
      const heightChanged = height !== oldH;

      // 크기 변화가 없으면 함수 종료 (불필요한 작업 방지)
      if (!widthChanged && !heightChanged) return;

      // 캔버스의 내부 해상도(픽셀) 설정
      // 이 부분이 캔버스가 실제로 그릴 수 있는 영역의 크기를 결정합니다.
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      // 캔버스의 CSS 크기 설정 (브라우저가 렌더링할 실제 크기)
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      // DPI 스케일링 적용하여 고해상도 디스플레이에서 선명하게 보이도록 합니다.
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      sizeRef.current = { width, height }; // 현재 캔버스 크기 저장

      // 너비나 높이가 변경되었을 때 점들을 재초기화하여 전체 캔버스 영역에 고르게 분포시킵니다.
      if (widthChanged || heightChanged) {
        points.current = Array.from({ length: POINTS }).map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5, // x축 속도
          vy: (Math.random() - 0.5) * 0.5, // y축 속도
        }));
      }
    };

    // 애니메이션 프레임을 그리는 함수
    const draw = (time) => {
      const { width, height } = sizeRef.current;
      // FPS를 제어하여 너무 빠르게 그리지 않도록 합니다.
      if (time - lastTimeRef.current < 1000 / FPS) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTimeRef.current = time;

      const colors = colorRef.current;
      // 캔버스 전체를 배경색으로 채웁니다.
      // width와 height는 이제 document.documentElement 기준으로 전체 뷰포트를 나타냅니다.
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);

      // 모든 점을 순회하며 위치 업데이트 및 그리기
      for (let i = 0; i < points.current.length; i++) {
        const p1 = points.current[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        // 점이 캔버스 경계를 벗어나면 방향 반전
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // 점 그리기
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2); // 반지름 2인 원
        ctx.fillStyle = colors.point;
        ctx.fill();

        // 다른 점들과의 거리 계산 및 선 그리기
        for (let j = i + 1; j < points.current.length; j++) {
          const p2 = points.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // 두 점 사이의 거리가 MAX_DIST 이내일 경우 선 그리기
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors.line;
            // 거리가 가까울수록 선이 진해지도록 투명도 조절
            ctx.lineWidth = 1 - dist / MAX_DIST;
            ctx.stroke();
          }
        }
      }

      // 다음 애니메이션 프레임 요청
      animationRef.current = requestAnimationFrame(draw);
    };

    // resize 이벤트를 debounce 처리한 핸들러 (200ms 지연)
    const handleResize = debounce(() => {
      resize();
    }, 200); // 필요에 따라 지연 시간 조정

    // 컴포넌트 마운트 시 초기 설정
    // 약간의 딜레이(100ms)를 주어 브라우저가 초기 뷰포트 크기를 확정할 시간을 줍니다.
    setTimeout(() => {
      resize(); // 캔버스 크기 조정
      draw(); // 애니메이션 시작
    }, 100);

    // 윈도우 resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    // visualViewport resize 이벤트 리스너 등록 (모바일 주소창 변화에 더 민감)
    window.visualViewport?.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 리스너 및 애니메이션 해제
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열은 이 useEffect가 컴포넌트 마운트 시 한 번만 실행되도록 합니다.

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1, // 다른 콘텐츠 뒤에 배치
          width: "100vw", // CSS 너비는 항상 뷰포트 너비의 100%
          height: "100vh", // CSS 높이는 항상 뷰포트 높이의 100%
          display: "block",
          pointerEvents: "none", // 캔버스가 마우스 이벤트를 가로채지 않도록 설정
          willChange: "transform", // 성능 최적화를 위한 힌트
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          zIndex: -2,
        }}
        className="bg-[#f4f4f4] dark: bg-[#0e0e1a]"
      />
    </>
  );
};

export default AnimatedBackground;
