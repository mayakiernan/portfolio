"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";

function HandDrawnUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 8"
      className="absolute -bottom-1 left-0 h-2 w-full"
      preserveAspectRatio="none"
    >
      <path
        d="M2 5.5 C 18 2, 34 7, 50 4.5 S 82 6.5, 118 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-5 md:gap-12 md:px-10">
        <nav className="flex items-center gap-6 md:gap-10">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/projects" && pathname.startsWith("/onk"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-display text-sm font-medium tracking-[0.04em] text-black transition-opacity hover:opacity-60 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`}
              >
                {item.label}
                {isActive && <HandDrawnUnderline />}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          aria-label="Home"
          className="font-marker text-2xl leading-none tracking-[0.08em] text-black md:text-3xl"
        >
          MK
        </Link>
      </div>
    </header>
  );
}
