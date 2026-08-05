"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";
import HandDrawnUnderline from "@/components/shared/HandDrawnUnderline";

const navLinkClass =
  "relative text-[11px] font-normal uppercase tracking-[0.24em] text-black transition-opacity hover:opacity-50 md:text-[12px]";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-y border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          aria-label="Home"
          className={`${navLinkClass} shrink-0 opacity-100`}
        >
          MK
        </Link>

        <nav className="flex items-center gap-6 md:gap-10">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/projects" && pathname.startsWith("/onk"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${navLinkClass} ${isActive ? "opacity-100" : "opacity-60"}`}
              >
                {item.label}
                {isActive && <HandDrawnUnderline />}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
