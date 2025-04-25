import { useEffect, useRef } from "react";

function TiltCard({ image, onClick }) {
  const containerRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    const handleMouseMove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rotateY = (-1 / 5) * x + 20;
      const rotateX = (4 / 30) * y - 20;

      overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
      overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;
      container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTransform = () => {
      overlay.style.filter = "opacity(0)";
      container.style.transform =
        "perspective(350px) rotateY(0deg) rotateX(0deg)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseout", resetTransform);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseout", resetTransform);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        onClick={onClick}
        className="relative w-72 h-[450px] rounded-[30px] overflow-hidden cursor-pointer transition-all"
      >
        {/* 오버레이 */}
        <div
          ref={overlayRef}
          className="absolute w-full h-full bg-gradient-to-r from-yellow-300 via-purple-500 to-transparent opacity-80 mix-blend-color-dodge z-10 pointer-events-none"
        />

        {/* 카드 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </>
  );
}

export default TiltCard;
