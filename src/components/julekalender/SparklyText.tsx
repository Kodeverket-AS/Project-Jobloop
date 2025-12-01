"use client";

import { useEffect, useRef, useState } from "react";

interface SparklyTextProps {
  children: React.ReactNode;
  className?: string;
  numberOfSparkles?: number;
  sparkleColor?: string;
  sparkleSize?: string;
  animationLength?: string;
}

const SparklyText = ({
  children,
  className = "",
  numberOfSparkles = 3,
  sparkleColor = "#4ab9f8",
  sparkleSize = "1em",
  animationLength = "1.5s",
}: SparklyTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [motionOK, setMotionOK] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setMotionOK(mediaQuery.matches);

    const handleChange = () => {
      setMotionOK(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!motionOK || !containerRef.current) return;

    const sparkleSvg = `<svg width="1200" height="1200" viewBox="0 0 1200 1200" aria-hidden="true">
      <path fill="${sparkleColor}" d="m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"/>
    </svg>`;

    const container = containerRef.current;
    const sparkles: SVGElement[] = [];
    const timeouts: NodeJS.Timeout[] = [];

    const cleanupSparkles = () => {
      sparkles.forEach((sparkle) => sparkle.remove());
      sparkles.length = 0;
      timeouts.forEach((timeout) => clearTimeout(timeout));
      timeouts.length = 0;
    };

    const addSparkle = (index: number) => {
      const timeoutId = setTimeout(() => {
        if (!container || !containerRef.current) return;

        const sparkleWrapper = document.createElement("div");
        sparkleWrapper.innerHTML = sparkleSvg;
        const svg = sparkleWrapper.querySelector("svg");
        
        if (!svg) return;

        svg.setAttribute("aria-hidden", "true");
        svg.style.position = "absolute";
        svg.style.zIndex = "-1";
        svg.style.width = sparkleSize;
        svg.style.height = sparkleSize;
        svg.style.transformOrigin = "center";
        svg.style.pointerEvents = "none";
        
        const topPercent = Math.random() * 100;
        const leftPercent = Math.random() * 100;
        
        svg.style.top = `${topPercent}%`;
        svg.style.left = `${leftPercent}%`;
        svg.style.animation = `sparkle-spin ${animationLength} linear infinite`;

        if (sparkleColor === "rainbow") {
          const path = svg.querySelector("path");
          if (path) {
            path.style.animation = `rainbow-colors calc(${animationLength} * 2) linear infinite`;
          }
        }

        if (containerRef.current) {
          containerRef.current.appendChild(svg);
          sparkles.push(svg);

          const handleAnimationIteration = () => {
            if (svg && containerRef.current) {
              svg.style.top = `${Math.random() * 100}%`;
              svg.style.left = `${Math.random() * 100}%`;
            }
          };

          svg.addEventListener("animationiteration", handleAnimationIteration);
        }
      }, index * 500);

      timeouts.push(timeoutId);
    };

    const initTimeout = setTimeout(() => {
      for (let i = 0; i < numberOfSparkles; i++) {
        addSparkle(i);
      }
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      cleanupSparkles();
    };
  }, [motionOK, numberOfSparkles, sparkleColor, sparkleSize, animationLength]);

  return (
    <>
      <style>{`
        .sparkly-text-container {
          position: relative;
          z-index: 0;
          display: inline-block;
          width: 100%;
        }

        @keyframes rainbow-colors {
          0%, 100% { fill: #ff0000; }
          14% { fill: #ff8000; }
          28% { fill: #ffff00; }
          42% { fill: #00ff00; }
          56% { fill: #0000ff; }
          70% { fill: #4b0082; }
          84% { fill: #8f00ff; }
        }

        @keyframes sparkle-spin {
          0% {
            scale: 0;
            opacity: 0;
            rotate: 0deg;
          }
          50% {
            scale: 1;
            opacity: 1;
          }
          100% {
            scale: 0;
            opacity: 0;
            rotate: 180deg;
          }
        }
      `}</style>
      <div ref={containerRef} className={`sparkly-text-container ${className}`}>
        {children}
      </div>
    </>
  );
};

export default SparklyText;
