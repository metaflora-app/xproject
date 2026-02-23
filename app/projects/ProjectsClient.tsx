"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VideoBackground } from "@/components/ui";
import { ProjectCard, CategoryFilter } from "@/components/projects";
import type { CategoryKey } from "@/components/projects";
import { staggerContainer, staggerItem, fadeInUp } from "@/components/motion/variants";
import { PROJECTS, getProjectsByCategory } from "@/lib/projects";
import type { Project } from "@/types";

export function ProjectsClient(){
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const filtered = getProjectsByCategory(activeCategory);

  return (
    <div className="relative min-h-screen">
      {/* Video background */}
      <VideoBackground src="/projects/hero-color.mp4" />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-[60px] pt-32 pb-24">
        {/* Page header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12 mb-16"
        >
          {/* Headline block */}
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[80px] leading-none uppercase text-[#f5f5f0] tracking-tight"
            >
              ship first.<br />refine later.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[15px] text-[#f5f5f0] opacity-50 font-light leading-relaxed max-w-[360px] text-right"
            >
              a curated collection of vibe-coded pet projects and micro saas from
              the METAFLORA* ecosystem. browse, open, learn, remix.
            </motion.p>
          </div>

          {/* Category filter */}
          <motion.div variants={fadeInUp}>
            <CategoryFilter
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 gap-[40px]"
          >
            {filtered.map((project) => (
              <motion.div key={project.slug} variants={staggerItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <motion.div
                variants={fadeInUp}
                className="col-span-2 flex flex-col items-center justify-center py-24 gap-4"
              >
                <p className="text-[#f5f5f0] opacity-30 text-[14px] font-light tracking-wide">
                  no projects in this category yet
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
