"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { VideoBackground } from "@/components/ui";
import { OutlineButton } from "@/components/motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/motion/variants";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps){
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-10%" });

  return (
    <div className="relative min-h-screen">
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
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Hero section with image */}
        <section className="relative min-h-[70vh] flex flex-col justify-end px-[60px] pb-16 pt-32">
          {/* Background image overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.5)] via-[rgba(10,10,10,0.4)] to-[#0a0a0a]" />
          </div>

          <div className="relative z-10">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <Link href="/projects">
                <OutlineButton variant="tertiary">
                  ← back to projects
                </OutlineButton>
              </Link>
            </motion.div>

            {/* Project meta */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col max-w-[800px]"
              style={{ gap: 24 }}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 flex-wrap">
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#f5f5f0] opacity-40 font-light border border-[rgba(245,245,240,0.2)] px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#f5f5f0] opacity-30 font-light">
                  {project.status}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-heading uppercase text-[#f5f5f0]"
                style={{
                  fontSize: 140,
                  letterSpacing: "0.02em",
                  lineHeight: 0.9,
                  fontFamily: "var(--font-heading)",
                }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-[18px] font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {project.tagline}
              </motion.p>

              {/* Stack */}
              <motion.p variants={fadeInUp} className="text-[12px] text-[#f5f5f0] opacity-25 font-light tracking-wide">
                stack: {project.stack}
              </motion.p>

              {/* Action buttons */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4 flex-wrap pt-2">
                <OutlineButton variant="primary">
                  open project
                </OutlineButton>
                <OutlineButton variant="secondary">
                  view repo
                </OutlineButton>
                <OutlineButton variant="secondary">
                  share
                </OutlineButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Detailed content */}
        <div
          ref={contentRef}
          className="px-[60px] pb-24 grid grid-cols-12 gap-x-6"
        >
          {/* Sidebar sticky nav */}
          <div className="col-span-3 hidden lg:block">
            <ProjectSidebar project={project} isInView={isContentInView} />
          </div>

          {/* Main content — section gap: 80px */}
          <div className="col-span-12 lg:col-span-9 pt-16" style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {/* Overview */}
            <ProjectSection
              id="overview"
              title="overview"
              isInView={isContentInView}
              delay={0}
            >
              <p
                className="text-[16px] font-light leading-[1.8]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {project.overview}
              </p>
            </ProjectSection>

            {/* Why it exists */}
            <ProjectSection
              id="why"
              title="why it exists"
              isInView={isContentInView}
              delay={0.1}
            >
              <p
                className="text-[16px] font-light leading-[1.8]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {project.whyItExists}
              </p>
            </ProjectSection>

            {/* How it works */}
            <ProjectSection
              id="how"
              title="how it works"
              isInView={isContentInView}
              delay={0.15}
            >
              <ol className="flex flex-col gap-4">
                {project.howItWorks.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    className="flex gap-4 items-start"
                  >
                    <span
                      className="font-heading shrink-0"
                      style={{
                        fontSize: 120,
                        letterSpacing: "0.02em",
                        lineHeight: 0.9,
                        fontFamily: "var(--font-heading)",
                        color: "rgba(245,245,240,0.15)",
                        width: 80,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[15px] font-light leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </ProjectSection>

            {/* Core features */}
            <ProjectSection
              id="features"
              title="core features"
              isInView={isContentInView}
              delay={0.2}
            >
              <ul className="grid grid-cols-2 gap-3">
                {project.coreFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    className="flex gap-3 items-start"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f5f5f0] opacity-30 shrink-0" />
                    <span
                      className="text-[14px] font-light leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </ProjectSection>

            {/* MVP Scope */}
            <ProjectSection
              id="mvp"
              title="mvp scope"
              isInView={isContentInView}
              delay={0.25}
            >
              <p
                className="text-[16px] font-light leading-[1.8]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {project.mvpScope}
              </p>
            </ProjectSection>

            {/* Next steps */}
            <ProjectSection
              id="next"
              title="next steps"
              isInView={isContentInView}
              delay={0.3}
            >
              <ul className="flex flex-col gap-3">
                {project.nextSteps.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    className="flex gap-3 items-start"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f5f5f0] opacity-30 shrink-0" />
                    <span
                      className="text-[15px] font-light leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </ProjectSection>

            {/* Links section */}
            <ProjectSection
              id="links"
              title="links"
              isInView={isContentInView}
              delay={0.35}
            >
              <div className="flex items-center gap-4 flex-wrap">
                {project.links.map((link, i) => (
                  <a key={i} href={link.href}>
                    <OutlineButton
                      variant={i === 0 ? "primary" : "secondary"}
                    >
                      {link.label}
                    </OutlineButton>
                  </a>
                ))}
              </div>
            </ProjectSection>

            {/* Bottom navigation */}
            <div className="pt-8 border-t border-[rgba(245,245,240,0.08)] flex justify-between items-center">
              <Link href="/projects">
                <OutlineButton variant="tertiary">
                  ← back to projects
                </OutlineButton>
              </Link>
              <OutlineButton variant="secondary">
                share
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isInView: boolean;
  delay?: number;
}

function ProjectSection({
  id,
  title,
  children,
  isInView,
  delay = 0,
}: ProjectSectionProps){
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.0, 0.0, 0.2, 1.0] }}
      style={{ display: "flex", flexDirection: "column", gap: 32 }}
    >
      <h2
        className="font-heading uppercase"
        style={{
          fontSize: 64,
          letterSpacing: "0.02em",
          lineHeight: 0.9,
          fontFamily: "var(--font-heading)",
          color: "#f5f5f0",
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </motion.section>
  );
}

interface ProjectSidebarProps {
  project: Project;
  isInView: boolean;
}

function ProjectSidebar({ isInView }: ProjectSidebarProps){
  const sections = [
    { id: "overview", label: "overview" },
    { id: "why", label: "why it exists" },
    { id: "how", label: "how it works" },
    { id: "features", label: "core features" },
    { id: "mvp", label: "mvp scope" },
    { id: "next", label: "next steps" },
    { id: "links", label: "links" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-32 flex flex-col gap-3 pt-16"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="text-[11px] tracking-[0.15em] uppercase text-[#f5f5f0] opacity-25 hover:opacity-60 transition-opacity font-light"
        >
          {section.label}
        </a>
      ))}
    </motion.nav>
  );
}
