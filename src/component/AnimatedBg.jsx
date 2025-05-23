import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const colorRef = useRef();
  const points = useRef([]);
  const animationRef = useRef();
  const sizeRef = useRef({ width: 0, height: 0 });
  const lastTimeRef = useRef(0);

  // Debounce 함수: 특정 함수가 연속적으로 호출될 때, 마지막 호출 후 일정 시간(delay)이 지나야만 실행되도록 합니다.
  // 모바일에서 resize 이벤트가 빈번하게 발생할 때 불필요한 캔버스 리드로잉을 줄여 깜빡임 현상을 방지합니다.
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
    // 다크/라이트 모드에 따라 색상 업데이트
    const updateDark = () => {
      const isDark = document.documentElement.classList.contains("dark");
      colorRef.current = isDark
        ? { background: "#0e0e1a", point: "#ffffff88", line: "#ffffff22" }
        : { background: "#f4f4f4", point: "#00000055", line: "#00000011" };
    };

    updateDark(); // 초기 색상 설정

    // HTML 문서의 'class' 속성 변경을 감지하여 다크/라이트 모드 변경 시 색상 업데이트
    const observer = new MutationObserver(updateDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 옵저버 해제
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const POINTS = 60; // 애니메이션에 사용할 점의 개수
    const MAX_DIST = 140; // 점들 사이에 선을 그릴 최대 거리
    const FPS = 60; // 초당 프레임 수

    // 현재 뷰포트의 너비와 높이를 가져옵니다.
    // window.innerHeight를 사용하여 모바일 주소창 변화에 더 잘 대응합니다.
    const getViewportSize = () => {
      const width = window.innerWidth;
      const height =
        window.visualViewport?.height || document.documentElement.clientHeight;
      return { width, height };
    };

    // 캔버스 크기를 조정하고 점들을 재배치합니다.
    const resize = () => {
      const dpr = window.devicePixelRatio || 1; // 디바이스 픽셀 비율
      const { width, height } = getViewportSize(); // 현재 뷰포트 크기 가져오기

      const { width: oldW, height: oldH } = sizeRef.current;
      const widthChanged = width !== oldW;
      const heightChanged = height !== oldH;

      // 크기 변화가 없으면 함수 종료
      if (!widthChanged && !heightChanged) return;

      // 캔버스 실제 픽셀 크기 설정 (고해상도 디스플레이 지원)
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      // 캔버스 CSS 크기 설정 (브라우저에 표시될 크기)
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`; // 계산된 픽셀 높이를 CSS에 적용
      // 캔버스 컨텍스트 변환 초기화 및 스케일 조정 (고해상도 디스플레이 지원)
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      sizeRef.current = { width, height }; // 현재 크기 저장

      // 너비와 높이가 모두 크게 변경된 경우 (예: 기기 회전) 점들을 새로 초기화합니다.
      if (widthChanged && heightChanged) {
        points.current = Array.from({ length: POINTS }).map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5, // x축 속도
          vy: (Math.random() - 0.5) * 0.5, // y축 속도
        }));
      } else {
        // 한 가지 차원만 변경된 경우 (예: 주소창 숨김/표시), 기존 점들이 경계를 벗어나지 않도록 조정합니다.
        points.current.forEach((p) => {
          if (p.x < 0) p.x = 0;
          if (p.x > width) p.x = width;
          if (p.y < 0) p.y = 0;
          if (p.y > height) p.y = height;
        });
      }
    };

    // 애니메이션 프레임을 그립니다.
    const draw = (time) => {
      const { width, height } = sizeRef.current;
      // FPS에 따라 프레임 업데이트 속도 조절
      if (time - lastTimeRef.current < 1000 / FPS) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTimeRef.current = time;

      const colors = colorRef.current;
      ctx.fillStyle = colors.background; // 배경색 설정
      ctx.fillRect(0, 0, width, height); // 배경 채우기

      for (let i = 0; i < points.current.length; i++) {
        const p1 = points.current[i];
        p1.x += p1.vx; // 점 이동
        p1.y += p1.vy;

        // 캔버스 경계를 벗어나면 방향 반전
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // 점 그리기
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = colors.point;
        ctx.fill();

        // 다른 점들과의 거리 계산 및 선 연결
        for (let j = i + 1; j < points.current.length; j++) {
          const p2 = points.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // 최대 거리 이내에 있으면 선 그리기
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = 1 - dist / MAX_DIST; // 거리가 가까울수록 선이 진해짐
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw); // 다음 프레임 요청
    };

    // resize 이벤트를 디바운싱하여 처리 (200ms 지연)
    const handleResize = debounce(() => {
      resize();
    }, 200); // 필요에 따라 지연 시간 조정

    // 컴포넌트 초기 로드 시 약간의 딜레이 후 resize 및 draw 호출
    // (모바일 주소창이 완전히 사라지는 시간을 기다려 깜빡임 방지)
    setTimeout(() => {
      resize();
      draw();
    }, 300);

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize); // visualViewport도 함께 사용 (더 정확한 뷰포트 변화 감지)

    // 컴포넌트 언마운트 시 정리 (애니메이션 및 이벤트 리스너 해제)
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열은 컴포넌트 마운트 시 한 번만 실행됨을 의미

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw", // 너비는 100vw 유지
        display: "block",
        pointerEvents: "none", // 마우스 이벤트를 무시하여 하위 요소 클릭 가능하게 함
        willChange: "transform", // 애니메이션 성능 최적화를 위한 힌트
        backgroundColor: "transparent",
      }}
    />
  );
};

export default AnimatedBackground;
