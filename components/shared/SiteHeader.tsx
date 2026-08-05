"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";
import HandDrawnUnderline from "@/components/shared/HandDrawnUnderline";

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
