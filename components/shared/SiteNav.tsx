import Link from "next/link";

type SiteNavProps = {
  variant?: "hero" | "solid";
};

export default function SiteNav({ variant = "solid" }: SiteNavProps) {
  const isHero = variant === "hero";

  return (
    <header
      className={
        isHero
          ? "fixed inset-x-0 top-0 z-40 px-6 py-6 md:px-10"
          : "sticky top-0 z-40 border-b border-stone-200 bg-white/95 px-6 py-4 backdrop-blur-sm md:px-10"
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className={`font-display text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
            isHero
              ? "text-neutral-200 hover:text-white"
              : "text-[#1a1a1a] hover:text-[#555]"
          }`}
        >
          Maya Kiernan
        </Link>

        <Link
          href="/"
          className={`font-serif text-sm italic transition-colors ${
            isHero
              ? "text-neutral-400 hover:text-neutral-200"
              : "text-stone-500 hover:text-[#1a1a1a]"
          }`}
        >
          {isHero ? "Portfolio" : "← Home"}
        </Link>
      </nav>
    </header>
  );
}
