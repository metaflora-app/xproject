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
}: OutlineButtonProps) {
  const fillProgress = useMotionValue(0);
  const bgColor = useTransform(
    fillProgress,
    [0, 1],
    ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
  );
  const textColor = useTransform(
    fillProgress,
    [0, 0.5, 1],
    ["rgba(255,255,255,1)", "rgba(255,255,255,0.5)", "rgba(0,0,0,1)"]
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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 48,
          paddingLeft: 24,
          paddingRight: 24,
          borderRadius: 999,
          background: "#f5f5f0",
          color: "#0a0a0a",
          border: "1px solid #f5f5f0",
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
        className={className}
      >
        {children}
      </motion.button>
    );
    if (href) return <a href={href} style={{ display: "inline-block" }}>{content}</a>;
    return content;
  }

  if (variant === "tertiary") {
    const content = (
      <motion.button
        onClick={onClick}
        whileHover={{ opacity: 1 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 48,
          paddingLeft: 8,
          paddingRight: 8,
          background: "none",
          border: "none",
          color: "#f5f5f0",
          opacity: 0.5,
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
        className={className}
      >
        {children}
      </motion.button>
    );
    if (href) return <a href={href} style={{ display: "inline-block" }}>{content}</a>;
    return content;
  }

  // Secondary: outline → white fill on hover
  const content = (
    <motion.button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        paddingLeft: 24,
        paddingRight: 24,
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.5)",
        overflow: "hidden",
        background: "transparent",
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        cursor: "pointer",
        color: textColor,
        whiteSpace: "nowrap",
      }}
      className={className}
    >
      <motion.span
        style={{
          position: "absolute",
          inset: 0,
          background: bgColor,
          originX: "0%",
        }}
      />
      <span style={{ position: "relative", zIndex: 10 }}>{children}</span>
    </motion.button>
  );
  if (href) return <a href={href} style={{ display: "inline-block" }}>{content}</a>;
  return content;
}
