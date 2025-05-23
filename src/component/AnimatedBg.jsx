import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const colorRef = useRef();
  const points = useRef([]);
  const animationRef = useRef();
  const sizeRef = useRef({ width: 0, height: 0 });
  const lastTimeRef = useRef(0);
  const resizingRef = useRef(false);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // 모바일 주소창 문제 해결을 위해 더 큰 높이 사용
  const getViewportSize = () => ({
    width: window.innerWidth,
    height: Math.max(
      window.innerHeight,
      window.visualViewport?.height || window.innerHeight,
      window.screen.height // 스크린 높이도 고려
    ),
  });

  useEffect(() => {
    const updateDark = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const colors = isDark
        ? { background: "#0e0e1a", point: "#ffffff88", line: "#ffffff22" }
        : { background: "#f4f4f4", point: "#00000055", line: "#00000011" };

      colorRef.current = colors;

      // 캔버스 배경색도 실시간 업데이트
      if (canvasRef.current) {
        canvasRef.current.style.backgroundColor = colors.background;
      }
    };

    updateDark();
    const observer = new MutationObserver(updateDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const POINTS = 60;
    const MAX_DIST = 140;
    const FPS = 60;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = getViewportSize();

      // 캔버스 크기 업데이트
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      sizeRef.current = { width, height };

      // 포인트들을 새로운 캔버스 크기에 맞게 재배치
      points.current = Array.from({ length: POINTS }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));

      // 캔버스 배경색 설정
      if (colorRef.current) {
        canvas.style.backgroundColor = colorRef.current.background;
      }
    };

    const draw = (time) => {
      const { width, height } = sizeRef.current;

      if (time - lastTimeRef.current < 1000 / FPS) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      lastTimeRef.current = time;

      if (resizingRef.current) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      const colors = colorRef.current;
      if (!colors) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      // 배경 지우기
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);

      // 포인트들 그리기 및 이동
      for (let i = 0; i < points.current.length; i++) {
        const p1 = points.current[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        // 경계 체크 및 반사
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // 포인트 그리기
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = colors.point;
        ctx.fill();

        // 다른 포인트들과의 연결선 그리기
        for (let j = i + 1; j < points.current.length; j++) {
          const p2 = points.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = 1 - dist / MAX_DIST;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleResize = debounce(() => {
      resizingRef.current = true;
      setTimeout(() => {
        resizeCanvas();
        resizingRef.current = false;
      }, 300);
    }, 150);

    // 초기화
    setTimeout(() => {
      resizeCanvas();
      draw();
    }, 100); // 초기화 딜레이 단축

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // visualViewport 이벤트 (모바일 주소창 대응)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      window.visualViewport.addEventListener("scroll", handleResize);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);

      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
        window.visualViewport.removeEventListener("scroll", handleResize);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        display: "block",
        pointerEvents: "none",
      }}
      className="dark:bg-[#0e0e1a] bg-[#f4f4f4] "
    />
  );
};

export default AnimatedBackground;
