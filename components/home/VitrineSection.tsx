"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "motion/react";
import { VideoBackground } from "@/components/ui";
import { OutlineButton } from "@/components/motion";
import { PROJECTS } from "@/lib/projects";
import { vitrineProjectChange, staggerContainer, staggerItem } from "@/components/motion/variants";
import type { Project } from "@/types";

const LABELS = ["featured", "recent drops"] as const;

export function VitrineSection(){
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLabel, setActiveLabel] = useState<(typeof LABELS)[number]>("featured");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20%" });

  const activeProject = PROJECTS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Video background b/w */}
      <VideoBackground
        src="/projects/hero-bw.mp4"
        overlayClassName=""
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.75)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-[60px] py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6 mb-12"
        >
          {LABELS.map((label) => (
            <button
              key={label}
              onClick={() => setActiveLabel(label)}
              className={`text-[11px] tracking-[0.25em] uppercase font-light transition-all ${
                activeLabel === label
                  ? "text-[#f5f5f0] opacity-100 border-b border-[rgba(245,245,240,0.4)] pb-0.5"
                  : "text-[#f5f5f0] opacity-30 hover:opacity-60"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Main vitrine layout */}
        <div className="flex gap-16 flex-1">
          {/* Project list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-0 w-[280px] shrink-0"
          >
            {PROJECTS.map((project, index) => (
              <VitrineProjectItem
                key={project.slug}
                project={project}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </motion.div>

          {/* Active project detail */}
          <div className="flex-1 flex flex-col gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.slug}
                variants={vitrineProjectChange}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-6 flex-1"
              >
                {/* Project image with convex hover effect */}
                <VitrineProjectImage project={activeProject} />

                {/* Project info */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#f5f5f0] opacity-40 font-light border border-[rgba(245,245,240,0.2)] px-3 py-1 rounded-full">
                      {activeProject.category}
                    </span>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#f5f5f0] opacity-30 font-light">
                      {activeProject.status}
                    </span>
                  </div>

                  <h2 className="font-heading text-[48px] leading-none uppercase text-[#f5f5f0]">
                    {activeProject.title}
                  </h2>

                  <p className="text-[15px] text-[#f5f5f0] opacity-55 font-light leading-relaxed max-w-[480px]">
                    {activeProject.tagline}
                  </p>
                </div>

                <Link href={`/projects/${activeProject.slug}`}>
                  <OutlineButton variant="secondary">
                    view project
                  </OutlineButton>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-end pt-12 mt-auto"
        >
          <Link href="/projects">
            <OutlineButton variant="secondary">
              discover all projects
            </OutlineButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface VitrineProjectItemProps {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function VitrineProjectItem({
  project,
  isActive,
  onClick,
}: VitrineProjectItemProps){
  return (
    <motion.button
      variants={staggerItem}
      onClick={onClick}
      className={`text-left py-5 border-b border-[rgba(245,245,240,0.08)] group transition-all duration-200 ${
        isActive ? "" : "hover:border-[rgba(245,245,240,0.2)]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span
            className={`text-[13px] font-light tracking-wide transition-all duration-200 ${
              isActive
                ? "text-[#f5f5f0] opacity-100"
                : "text-[#f5f5f0] opacity-40 group-hover:opacity-70"
            }`}
          >
            {project.title}
          </span>
          <span
            className={`text-[11px] font-light transition-all duration-200 max-w-[200px] leading-relaxed ${
              isActive
                ? "text-[#f5f5f0] opacity-45"
                : "text-[#f5f5f0] opacity-20 group-hover:opacity-35"
            }`}
          >
            {project.tagline}
          </span>
        </div>
        {isActive && (
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#f5f5f0] opacity-40 mt-0.5"
          >
            →
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}

interface VitrineProjectImageProps {
  project: Project;
}

function VitrineProjectImage({ project }: VitrineProjectImageProps){
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateY(x * 10);
    setRotateX(-y * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
      className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-none"
    >
      <motion.div
        animate={{ rotateX, rotateY, scale: rotateX !== 0 || rotateY !== 0 ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
        className="relative w-full h-full"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 50vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.6)] via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}
