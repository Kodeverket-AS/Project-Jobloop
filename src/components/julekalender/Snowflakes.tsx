"use client";

import { useMemo } from "react";

const Snowflakes = () => {
  const flakes = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: (i * 2.5) % 100,
      delay: (i % 20) * 0.05,
      duration: 6 + (i % 5) * 1.5,
      size: 8 + (i % 8) * 3,
    }));
  }, []);

  return (
    <>
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-200px);
            opacity: 0;
          }
          1% {
            opacity: 0.3;
          }
          2% {
            opacity: 0.8;
          }
          3% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          95% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(calc(100vh + 200px));
            opacity: 0;
          }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {flakes.map((flake) => (
          <div
            key={`bg-${flake.id}`}
            className="absolute text-white/50"
            style={{
              left: `${flake.left}%`,
              top: "-200px",
              animation: `snowfall ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
              fontSize: `${flake.size}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
    </>
  );
};

export default Snowflakes;

