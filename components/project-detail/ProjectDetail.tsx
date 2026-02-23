"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { VideoBackground } from "@/components/ui";
import { OutlineButton } from "@/components/motion";
import { staggerContainer, fadeInUp, staggerItem } from "@/components/motion/variants";
import { RatingComments } from "./RatingComments";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
}

const SECTIONS = [
  { id: "overview", label: "overview" },
  { id: "why", label: "why it exists" },
  { id: "how", label: "how it works" },
  { id: "features", label: "core features" },
  { id: "mvp", label: "mvp scope" },
  { id: "next", label: "next steps" },
  { id: "links", label: "links" },
  { id: "rating", label: "rate & discuss" },
];

export function ProjectDetail({ project }: ProjectDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(heroScrollProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.7], [1, 0]);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Video background */}
      <VideoBackground src="/projects/hero-bw.mp4" />

      {/* Dark overlay over video */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.92) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>

        {/* Hero section */}
        <section
          ref={heroRef}
          style={{ position: "relative", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingLeft: 60, paddingRight: 60, paddingBottom: 64, paddingTop: 120 }}
        >
          {/* Parallax project image overlay */}
          <motion.div
            style={{ y: imageY, opacity: heroOpacity, position: "absolute", inset: 0, overflow: "hidden" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              style={{ opacity: 0.18 }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 60%, #0a0a0a 100%)" }} />
          </motion.div>

          <div style={{ position: "relative", zIndex: 10 }}>
            {/* Project meta */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ display: "flex", flexDirection: "column", maxWidth: 840, gap: 24 }}
            >
              <motion.div variants={fadeInUp} style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <span style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#f5f5f0",
                  opacity: 0.4,
                  fontWeight: 300,
                  border: "1px solid rgba(245,245,240,0.2)",
                  padding: "4px 12px",
                  borderRadius: 999,
                }}>
                  {project.category}
                </span>
                <span style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#f5f5f0",
                  opacity: 0.3,
                  fontWeight: 300,
                }}>
                  {project.status}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 140,
                  lineHeight: 0.9,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#f5f5f0",
                  margin: 0,
                }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                style={{
                  fontSize: 18,
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.85)",
                  margin: 0,
                }}
              >
                {project.tagline}
              </motion.p>

              {/* Stack */}
              <motion.p
                variants={fadeInUp}
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.25)",
                  fontWeight: 300,
                  letterSpacing: "0.08em",
                  margin: 0,
                }}
              >
                stack: {project.stack}
              </motion.p>

              {/* Action buttons */}
              <motion.div
                variants={fadeInUp}
                style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
              >
                <OutlineButton variant="primary">open project</OutlineButton>
                <OutlineButton variant="secondary">view repo</OutlineButton>
                <OutlineButton variant="secondary">share</OutlineButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Detailed content */}
        <div style={{ paddingLeft: 60, paddingRight: 60, paddingBottom: 96, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "0 24px" }}>

          {/* Sidebar sticky nav with scroll spy */}
          <div className="hidden lg:block" style={{ gridColumn: "span 3" }}>
            <ProjectSidebar />
          </div>

          {/* Main content */}
          <div style={{ gridColumn: "span 9", display: "flex", flexDirection: "column", gap: 80, paddingTop: 64 }}
               className="col-span-12 lg:col-span-9"
          >
            <ProjectSection id="overview" title="overview">
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                {project.overview}
              </p>
            </ProjectSection>

            <ProjectSection id="why" title="why it exists">
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                {project.whyItExists}
              </p>
            </ProjectSection>

            <ProjectSection id="how" title="how it works">
              <ol style={{ display: "flex", flexDirection: "column", gap: 16, padding: 0, margin: 0, listStyle: "none" }}>
                {project.howItWorks.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 120,
                        lineHeight: 0.9,
                        letterSpacing: "0.02em",
                        color: "rgba(245,245,240,0.12)",
                        flexShrink: 0,
                        width: 88,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", paddingTop: 8 }}>
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </ProjectSection>

            <ProjectSection id="features" title="core features">
              <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 0, margin: 0, listStyle: "none" }}>
                {project.coreFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                  >
                    <span style={{ marginTop: 8, width: 4, height: 4, borderRadius: "50%", background: "rgba(245,245,240,0.35)", flexShrink: 0, display: "block" }} />
                    <span style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </ProjectSection>

            <ProjectSection id="mvp" title="mvp scope">
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                {project.mvpScope}
              </p>
            </ProjectSection>

            <ProjectSection id="next" title="next steps">
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0, listStyle: "none" }}>
                {project.nextSteps.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                  >
                    <span style={{ marginTop: 8, width: 4, height: 4, borderRadius: "50%", background: "rgba(245,245,240,0.35)", flexShrink: 0, display: "block" }} />
                    <span style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </ProjectSection>

            <ProjectSection id="links" title="links">
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                {project.links.map((link, i) => (
                  <a key={i} href={link.href} style={{ display: "inline-block" }}>
                    <OutlineButton variant={i === 0 ? "primary" : "secondary"}>
                      {link.label}
                    </OutlineButton>
                  </a>
                ))}
              </div>
            </ProjectSection>

            {/* Rating + Comments */}
            <div style={{ borderTop: "1px solid rgba(245,245,240,0.08)", paddingTop: 80 }}>
              <RatingComments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section with blur-fade reveal ── */
interface ProjectSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function ProjectSection({ id, title, children }: ProjectSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", flexDirection: "column", gap: 32 }}
    >
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: 64,
          lineHeight: 0.9,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "#f5f5f0",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </motion.section>
  );
}

/* ── Sidebar with scroll spy ── */
function ProjectSidebar() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 12, paddingTop: 64 }}
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            animate={{
              opacity: isActive ? 1 : 0.35,
              color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
            }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: isActive ? 600 : 300,
            }}
          >
            {isActive && (
              <motion.span
                layoutId="sidebar-indicator"
                style={{ width: 16, height: 1, background: "#ffffff", display: "block", flexShrink: 0 }}
              />
            )}
            {section.label}
          </motion.a>
        );
      })}
    </motion.nav>
  );
}
