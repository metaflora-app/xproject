"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cardOverlay } from "@/components/motion/variants";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} style={{ display: "block", textDecoration: "none" }}>
      <motion.article
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        {/* Image container — scale + hover glow */}
        <motion.div
          whileHover={{
            scale: 1.04,
            boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(245,245,240,0.06)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          style={{ position: "relative", aspectRatio: "4/3", borderRadius: 8, overflow: "hidden", background: "#1a1510" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 50vw, 580px"
          />

          {/* Hover overlay "open" */}
          <motion.div
            variants={cardOverlay}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10,10,10,0.55)",
            }}
          >
            <span style={{
              fontSize: 13,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#f5f5f0",
              fontWeight: 300,
              border: "1px solid rgba(245,245,240,0.4)",
              padding: "8px 20px",
              borderRadius: 999,
            }}>
              open
            </span>
          </motion.div>
        </motion.div>

        {/* Card info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5f5f0", opacity: 0.35, fontWeight: 300 }}>
            {project.category}
          </span>
          <motion.h3
            whileHover={{ opacity: 0.8 }}
            style={{ fontFamily: "var(--font-heading)", fontSize: 28, lineHeight: 1, textTransform: "uppercase", color: "#f5f5f0", margin: 0 }}
          >
            {project.title}
          </motion.h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
            {project.tagline}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
