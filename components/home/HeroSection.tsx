"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { VideoBackground } from "@/components/ui";
import { OutlineButton } from "@/components/motion";
import { staggerContainer, fadeInUp, scrollCueBounce } from "@/components/motion/variants";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}
    >
      {/* Video background with parallax */}
      <motion.div style={{ y: videoY, position: "absolute", inset: 0 }}>
        <VideoBackground src="/projects/hero-color.mp4" />
      </motion.div>

      {/* Content layer */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, position: "relative", zIndex: 10, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh", paddingLeft: 60, paddingRight: 60, paddingTop: 32, paddingBottom: 32 }}
      >
        {/* Spacer for header */}
        <div style={{ height: 88 }} />

        {/* Main content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", maxWidth: 760, gap: 32 }}
        >
          {/* Floating draggable badge */}
          <motion.div
            drag
            dragConstraints={{ left: -24, right: 24, top: -10, bottom: 10 }}
            dragElastic={0.12}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-flex", cursor: "grab" }}
            whileDrag={{ cursor: "grabbing", scale: 1.05 }}
          >
            <span style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(245,245,240,0.5)",
              fontWeight: 300,
              border: "1px solid rgba(245,245,240,0.15)",
              padding: "6px 16px",
              borderRadius: 999,
              display: "inline-block",
              userSelect: "none",
            }}>
              METAFLORA* ecosystem
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 88,
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#f5f5f0",
              margin: 0,
            }}
          >
            a showcase of<br />
            vibe-coded projects<br />
            built inside METAFLORA*
          </motion.h1>

          {/* CTA Buttons — directly under h1, gap already 32px via parent */}
          <motion.div
            variants={fadeInUp}
            style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
          >
            <Link href="/projects">
              <OutlineButton variant="primary">explore projects</OutlineButton>
            </Link>
            <OutlineButton variant="secondary">submit a project</OutlineButton>
          </motion.div>
        </motion.div>

        {/* Bottom microcopy + scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingBottom: 32 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,240,0.35)", fontWeight: 300 }}>
              pet projects • micro saas • experiments
            </span>
          </div>

          {/* Scroll cue */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,245,240,0.3)", fontWeight: 300 }}>
              scroll
            </span>
            <motion.div
              variants={scrollCueBounce}
              animate="animate"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}
            >
              <span style={{ width: 1, height: 24, background: "rgba(245,245,240,0.3)", display: "block" }} />
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.3 }}>
                <path d="M1 1L5 5L9 1" stroke="#f5f5f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
