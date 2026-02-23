"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "home", href: "/", active: true },
  { label: "projects", href: "/projects", active: true },
  { label: "submit", href: "#", active: false },
  { label: "about", href: "#", active: false },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 88,
        zIndex: 1000,
        background: "transparent",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          paddingLeft: 60,
          paddingRight: 60,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — shifted -20px from grid start */}
        <Link href="/" style={{ marginLeft: -20, display: "flex", flexDirection: "column", lineHeight: 1, textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 300,
              letterSpacing: "0.25em",
              color: "#f5f5f0",
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            МЕТАФЛОРА*
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 300,
              letterSpacing: "0.35em",
              color: "#f5f5f0",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            XProject
          </span>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_ITEMS.map((item) => {
            const isCurrentPage =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) && item.href !== "#";

            if (!item.active) {
              return (
                <span
                  key={item.label}
                  title="coming soon"
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    letterSpacing: "0.15em",
                    color: "#f5f5f0",
                    opacity: 0.25,
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                style={{ position: "relative", display: "inline-block", textDecoration: "none" }}
              >
                <motion.span
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    letterSpacing: "0.15em",
                    color: "#f5f5f0",
                    textTransform: "uppercase",
                    display: "block",
                    paddingBottom: 6,
                  }}
                  animate={{ opacity: isCurrentPage ? 1 : 0.5 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  {item.label}
                </motion.span>
                <AnimatePresence>
                  {isCurrentPage && (
                    <motion.span
                      layoutId="nav-underline"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.7 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 1,
                        background: "#f5f5f0",
                        transformOrigin: "left center",
                        display: "block",
                      }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
