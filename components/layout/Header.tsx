"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "home", href: "/", active: true },
  { label: "projects", href: "/projects", active: true },
  { label: "submit", href: "#", active: false },
  { label: "about", href: "#", active: false },
] as const;

export function Header(){
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
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
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
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span
            className="text-[13px] font-light tracking-[0.25em] text-[#f5f5f0] uppercase opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            МЕТАФЛОРА*
          </span>
          <span
            className="text-[11px] font-light tracking-[0.35em] text-[#f5f5f0] uppercase opacity-50 group-hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            XProject
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isCurrentPage =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) && item.href !== "#";

            if (!item.active) {
              return (
                <span
                  key={item.label}
                  className="relative text-[13px] font-light tracking-[0.15em] text-[#f5f5f0] opacity-25 uppercase"
                  title="coming soon"
                >
                  {item.label}
                </span>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-[13px] font-light tracking-[0.15em] text-[#f5f5f0] uppercase group"
              >
                <span
                  className={`transition-opacity ${
                    isCurrentPage ? "opacity-100" : "opacity-50 hover:opacity-90"
                  }`}
                >
                  {item.label}
                </span>
                {isCurrentPage && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-[#f5f5f0] opacity-60" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
