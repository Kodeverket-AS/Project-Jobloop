"use client";

import { useMemo } from "react";

const SnowflakesModal = () => {
  const flakes = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: (i * 4) % 100,
      delay: (i % 16) * 0.06,
      duration: 5 + (i % 4) * 1.2,
      size: 10 + (i % 7) * 3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white/70"
          style={{
            left: `${flake.left}%`,
            top: "-100px",
            animation: `snowfall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            fontSize: `${flake.size}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default SnowflakesModal;

