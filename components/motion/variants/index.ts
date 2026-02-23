import type { Variants } from "motion/react";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0.0, 0.2, 1.0] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3, ease: [0.4, 0.0, 1.0, 1.0] },
  },
};

export const scrollCueBounce: Variants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cardHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const cardOverlay: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.2, ease: [0.0, 0.0, 0.2, 1.0] },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] },
  },
};

export const vitrineProjectChange: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1.0] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: [0.4, 0.0, 1.0, 1.0] },
  },
};
