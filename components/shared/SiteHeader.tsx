"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";
import HandDrawnUnderline from "@/components/shared/HandDrawnUnderline";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-5 md:gap-14 md:px-10">
        <Link
          href="/"
          aria-label="Home"
          className="font-marker shrink-0 text-2xl leading-none tracking-[0.08em] text-black md:text-3xl"
        >
          MK
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/projects" && pathname.startsWith("/onk"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-display text-[11px] font-normal uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-50 md:text-xs ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
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
