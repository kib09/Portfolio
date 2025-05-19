import { useEffect, useRef, useState } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let animationId;
    const POINTS = 60;
    const MAX_DIST = 140;
    const FPS = 60;
    const points = [];

    const COLORS = isDark
      ? { background: "#0e0e1a", point: "#ffffff88", line: "#ffffff22" }
      : { background: "#f4f4f4", point: "#00000055", line: "#00000011" };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      points.length = 0;
      for (let i = 0; i < POINTS; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    let lastTime = 0;
    const draw = (time) => {
      if (time - lastTime < 1000 / FPS) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      ctx.fillStyle = COLORS.background;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < POINTS; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.point;
        ctx.fill();

        for (let j = i + 1; j < POINTS; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = COLORS.line;
            ctx.lineWidth = 1 - dist / MAX_DIST;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]); // 다크모드 변경되면 다시 재실행

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
      }}
    />
  );
};

export default AnimatedBackground;
