"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function CursorDroplet(){
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 280, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 30, mass: 0.5 });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button";
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <>
      {/* Large blur droplet */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 100 : 70,
          height: isHovering ? 100 : 70,
          background: "rgba(245, 245, 240, 0.06)",
          backdropFilter: "blur(2px)",
          border: "1px solid rgba(245, 245, 240, 0.12)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.2s ease",
        }}
      />
      {/* Small dot */}
      <motion.div
        className="pointer-events-none fixed z-[10000] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
          background: "rgba(245, 245, 240, 0.9)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />
    </>
  );
}
