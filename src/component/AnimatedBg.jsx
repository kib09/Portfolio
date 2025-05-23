import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const colorRef = useRef();
  const points = useRef([]);
  const animationRef = useRef();
  const sizeRef = useRef({ width: 0, height: 0 });
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const updateDark = () => {
      const isDark = document.documentElement.classList.contains("dark");
      colorRef.current = isDark
        ? { background: "#0e0e1a", point: "#ffffff88", line: "#ffffff22" }
        : { background: "#f4f4f4", point: "#00000055", line: "#00000011" };
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

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const { width: oldW, height: oldH } = sizeRef.current;
      const widthChanged = width !== oldW;
      const heightChanged = height !== oldH;

      if (!widthChanged && !heightChanged) return;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      sizeRef.current = { width, height };

      if (widthChanged && heightChanged) {
        points.current = Array.from({ length: POINTS }).map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        }));
      }
    };

    const draw = (time) => {
      const { width, height } = sizeRef.current;
      if (time - lastTimeRef.current < 1000 / FPS) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTimeRef.current = time;

      const colors = colorRef.current;
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < points.current.length; i++) {
        const p1 = points.current[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = colors.point;
        ctx.fill();

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

    let resizeTimeout;
    const debounceResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
      }, 100);
    };

    window.addEventListener("resize", debounceResize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", debounceResize);
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
        height: "110%",
        display: "block",
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
};

export default AnimatedBackground;
