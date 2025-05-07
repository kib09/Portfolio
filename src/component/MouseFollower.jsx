import { useEffect, useRef } from "react";
import PawImage from "../assets/bears.svg";

function MouseFollower() {
  const followerRef = useRef();
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      const follower = followerRef.current;
      if (follower) {
        follower.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      ref={followerRef}
      src={PawImage}
      alt="곰 발바닥"
      className="w-8 h-8 fixed top-0 left-0 pointer-events-none z-[9999] select-none"
    />
  );
}

export default MouseFollower;
