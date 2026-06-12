"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Hide default cursor aggressively
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    // Direct DOM manipulation bypassing React completely
    const onMouseMove = (e: MouseEvent) => {
      // Hardware accelerated translation with ZERO CSS transitions on the outer wrapper
      outer.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      
      if (outer.style.opacity === "0" || !outer.style.opacity) {
        outer.style.opacity = "1";
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName?.toLowerCase() === "a" ||
        target.tagName?.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hover-target")
      ) {
        inner.style.transform = "translate(-50%, -50%) scale(3)";
      } else {
        inner.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    const handleMouseLeave = () => {
      outer.style.opacity = "0";
    };

    // Use passive event listeners for maximum performance
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
      document.body.style.cursor = "auto";
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div
      ref={outerRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block opacity-0 transition-opacity duration-300"
      style={{
        transform: `translate3d(-100px, -100px, 0)`,
        willChange: "transform", // Hint browser for GPU acceleration
      }}
    >
      <div
        ref={innerRef}
        className="w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-out"
        style={{
          transform: "translate(-50%, -50%) scale(1)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
