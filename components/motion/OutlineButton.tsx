"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export function OutlineButton({
  children,
  onClick,
  href,
  variant = "secondary",
  className = "",
}: OutlineButtonProps){
  const fillProgress = useMotionValue(0);
  const bgColor = useTransform(
    fillProgress,
    [0, 1],
    ["rgba(245,245,240,0)", "rgba(245,245,240,1)"]
  );
  const textColor = useTransform(
    fillProgress,
    [0, 0.5, 1],
    ["rgba(245,245,240,1)", "rgba(245,245,240,0.5)", "rgba(10,10,10,1)"]
  );

  const handleMouseEnter = () => {
    animate(fillProgress, 1, { duration: 0.25, ease: [0.0, 0.0, 0.2, 1.0] });
  };

  const handleMouseLeave = () => {
    animate(fillProgress, 0, { duration: 0.2, ease: [0.4, 0.0, 1.0, 1.0] });
  };

  if (variant === "primary") {
    const content = (
      <motion.button
        onClick={onClick}
        onMouseEnter={() =>
          animate(fillProgress, 0.15, { duration: 0.25 })
        }
        onMouseLeave={() =>
          animate(fillProgress, 0, { duration: 0.2 })
        }
        className={`inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#f5f5f0] text-[#0a0a0a] transition-opacity hover:opacity-90 ${className}`}
        style={{ fontWeight: 600, fontSize: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
    if (href) {
      return (
        <a href={href} className="inline-block">
          {content}
        </a>
      );
    }
    return content;
  }

  if (variant === "tertiary") {
    const content = (
      <motion.button
        onClick={onClick}
        className={`inline-flex items-center justify-center h-12 px-2 text-[#f5f5f0] opacity-60 hover:opacity-100 transition-opacity ${className}`}
        style={{ fontWeight: 600, fontSize: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
    if (href) {
      return (
        <a href={href} className="inline-block">
          {content}
        </a>
      );
    }
    return content;
  }

  // Secondary: outline with fill animation
  const content = (
    <motion.button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center h-12 px-6 rounded-full border border-[rgba(245,245,240,0.5)] overflow-hidden ${className}`}
      style={{ fontWeight: 600, fontSize: 16, letterSpacing: "0.06em", textTransform: "uppercase", color: textColor }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{
          background: bgColor,
          originX: "0%",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }
  return content;
}
