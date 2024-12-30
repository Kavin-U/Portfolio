import React, { useRef, useEffect } from "react";

const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = glowRef.current;
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none w-[600px] h-[600px] rounded-full bg-blue-600 opacity-20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 9999 }}
    >
        <div className="transform -translate-x-[-17%] -translate-y-[-17%] rounded-full bg-blue-700 w-[450px] h-[450px] fixed pointer-events-none">
            <div className="transform -translate-x-[-50%] -translate-y-[-50%] rounded-full bg-blue-800 w-[225px] h-[225px] fixed pointer-events-none"></div>
        </div>
    </div>
  );
};

export default MouseGlow;
