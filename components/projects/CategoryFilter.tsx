"use client";

import { motion } from "motion/react";

export type CategoryKey = "all" | "pet projects" | "micro saas" | "experiments";

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "all" },
  { key: "pet projects", label: "pet projects" },
  { key: "micro saas", label: "micro saas" },
  { key: "experiments", label: "experiments" },
];

interface CategoryFilterProps {
  activeCategory: CategoryKey;
  onChange: (category: CategoryKey) => void;
}

export function CategoryFilter({
  activeCategory,
  onChange,
}: CategoryFilterProps){
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {CATEGORIES.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className="relative px-5 py-2 rounded-full text-[12px] tracking-[0.15em] uppercase font-light transition-all duration-200"
        >
          {activeCategory === key ? (
            <motion.span
              layoutId="category-pill"
              className="absolute inset-0 rounded-full border border-[rgba(245,245,240,0.4)]"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          ) : null}
          <span
            className={`relative z-10 transition-opacity duration-200 ${
              activeCategory === key
                ? "text-[#f5f5f0] opacity-100"
                : "text-[#f5f5f0] opacity-35 hover:opacity-60"
            }`}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
