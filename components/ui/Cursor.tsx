"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springX = useSpring(ringX, { stiffness: 120, damping: 22, mass: 0.5 });
  const springY = useSpring(ringY, { stiffness: 120, damping: 22, mass: 0.5 });

  const isHovering = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const enter = () => {
      isHovering.current = true;
      ringRef.current?.setAttribute("data-hover", "true");
    };
    const leave = () => {
      isHovering.current = false;
      ringRef.current?.removeAttribute("data-hover");
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [dotX, dotY, ringX, ringY]);

  return (
    <>
      {/* dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          width: 7,
          height: 7,
          background: "#0a0a0a",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* ring */}
      <motion.div
        ref={ringRef}
        className="cursor-dot"
        style={{
          x: springX,
          y: springY,
          width: 36,
          height: 36,
          border: "1.5px solid rgba(10,10,10,0.35)",
          background: "transparent",
          translateX: "-50%",
          translateY: "-50%",
        }}
        data-hover-expand
      />
    </>
  );
}
