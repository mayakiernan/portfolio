"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Tile = { src: string; label: string };

// ─────────────────────────────────────────────────────────────────────────────
// TILE ORDER — edit this array to rearrange the grid.
// Black pieces interleaved roughly every third tile.
// ─────────────────────────────────────────────────────────────────────────────
const TILES: Tile[] = [
  { src: "/onk/bowl-set.webp",               label: "01. Bowl Set" },
  { src: "/onk/cookie-jar.webp",             label: "02. Cookie Jar" },
  { src: "/onk/black/3-treasure-jars.webp",  label: "03. 3 Treasure Jars" },
  { src: "/onk/cookie-jar-2.webp",           label: "04. Cookie Jar 2" },
  { src: "/onk/cup-set.webp",                label: "05. Cup Set" },
  { src: "/onk/black/large-tumbler.webp",    label: "06. Large Tumbler" },
  { src: "/onk/large-cookie-jar.webp",       label: "07. Large Cookie Jar" },
  { src: "/onk/black/small-pitcher.webp",    label: "08. Small Pitcher" },
  { src: "/onk/medium-pitcher.webp",         label: "09. Medium Pitcher" },
  { src: "/onk/mini-cups.webp",              label: "10. Mini Cups" },
  { src: "/onk/black/small-tumblers.webp",   label: "11. Small Tumblers" },
  { src: "/onk/pitcher-set.webp",            label: "12. Pitcher Set" },
  { src: "/onk/black/smallest-pitcher.webp", label: "13. Smallest Pitcher" },
  { src: "/onk/regular-pitcher.webp",        label: "14. Regular Pitcher" },
  { src: "/onk/small-cookie-jar.webp",       label: "15. Small Cookie Jar" },
  { src: "/onk/black/sugar-bowl.webp",       label: "16. Sugar Bowl 2" },
  { src: "/onk/sugar-bowl.webp",             label: "17. Sugar Bowl" },
  { src: "/onk/tumblers.webp",               label: "18. Tumblers" },
  { src: "/onk/wonky-pitcher.webp",          label: "19. Wonky Pitcher" },
];

// Number of tiles to show BEFORE the full-bleed hero image
const HERO_SPLIT = 5;

const GRID_CLASSES =
  "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4";

// ─────────────────────────────────────────────────────────────────────────────

export default function OnkGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const open = useCallback((i: number) => {
    setDirection(0);
    setActiveIndex(i);
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((i) => (i !== null && i < TILES.length - 1 ? i + 1 : i));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const firstHalf = TILES.slice(0, HERO_SPLIT);
  const secondHalf = TILES.slice(HERO_SPLIT);

  return (
    <>
      {/* ── GRID — first row ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className={GRID_CLASSES}>
          {firstHalf.map((tile, i) => (
            <TileCard key={tile.src} tile={tile} index={i} onOpen={open} />
          ))}
        </div>
      </section>

      {/* ── FULL-BLEED HERO IMAGE ────────────────────────────────────────── */}
      <div className="w-full my-14">
        <div className="relative w-full" style={{ aspectRatio: "2.8 / 1" }}>
          <Image
            src="/onk/main-image.jpg"
            alt="ONK Collection"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ── GRID — continued ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className={GRID_CLASSES}>
          {secondHalf.map((tile, i) => (
            <TileCard
              key={tile.src}
              tile={tile}
              index={HERO_SPLIT + i}
              onOpen={open}
            />
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            tiles={TILES}
            activeIndex={activeIndex}
            direction={direction}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tile card
// ─────────────────────────────────────────────────────────────────────────────

function TileCard({
  tile,
  index,
  onOpen,
}: {
  tile: Tile;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <button
      onClick={() => onOpen(index)}
      className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
    >
      <div className="relative w-full aspect-square bg-[#edebe6] overflow-hidden">
        <Image
          src={tile.src}
          alt={tile.label}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className="object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <p className="font-display mt-3 text-base font-medium text-[#1a1a1a] leading-snug">
        {tile.label}
      </p>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Lightbox: Hostem-style, label top-left, bold editorial arrows
// ─────────────────────────────────────────────────────────────────────────────

const SLOTS = [
  { offset: -2, widthPct: "12.5%", opacity: 0.08 },
  { offset: -1, widthPct: "17.5%", opacity: 0.25 },
  { offset: 0, widthPct: "40%", opacity: 1.0 },
  { offset: 1, widthPct: "17.5%", opacity: 0.25 },
  { offset: 2, widthPct: "12.5%", opacity: 0.08 },
];

function Lightbox({
  tiles,
  activeIndex,
  direction,
  onClose,
  onPrev,
  onNext,
}: {
  tiles: Tile[];
  activeIndex: number;
  direction: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < tiles.length - 1;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Top-left label */}
      <div
        className="absolute top-8 left-8 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display text-xl font-medium text-[#1a1a1a] leading-tight">
          {tiles[activeIndex].label}
        </p>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="font-display absolute top-7 right-8 text-[#1a1a1a] hover:text-[#555] text-base font-medium uppercase tracking-[0.1em] z-10 transition-colors"
      >
        Close
      </button>

      {/* ── Image strip ──────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          key={activeIndex}
          className="flex items-center w-full h-[75vh]"
          initial={{ opacity: 0, x: direction * 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {SLOTS.map(({ offset, widthPct, opacity }) => {
            const idx = activeIndex + offset;
            const isCenter = offset === 0;
            const isValid = idx >= 0 && idx < tiles.length;

            return (
              <div
                key={offset}
                style={{ width: widthPct, opacity, flexShrink: 0 }}
                className={`relative h-full ${!isCenter && isValid ? "cursor-pointer" : ""}`}
                onClick={
                  isValid && !isCenter
                    ? offset < 0
                      ? onPrev
                      : onNext
                    : undefined
                }
              >
                {isValid && (
                  <Image
                    src={tiles[idx].src}
                    alt={tiles[idx].label}
                    fill
                    className="object-contain"
                    sizes={isCenter ? "(max-width: 640px) 90vw, 40vw" : "18vw"}
                    priority={isCenter}
                  />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── Arrows ───────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Previous"
          className="font-display text-[#1a1a1a] hover:text-[#555] disabled:opacity-15 transition-colors text-2xl font-bold"
        >
          &#8592;
        </button>
        <span className="font-display text-stone-400 text-sm font-medium tabular-nums">
          {activeIndex + 1} / {tiles.length}
        </span>
        <button
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Next"
          className="font-display text-[#1a1a1a] hover:text-[#555] disabled:opacity-15 transition-colors text-2xl font-bold"
        >
          &#8594;
        </button>
      </div>

      {/* Mobile arrows */}
      <div
        className="sm:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-5 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Previous"
          className="pointer-events-auto font-display text-[#1a1a1a] disabled:opacity-15 text-3xl font-bold transition-colors"
        >
          &#8592;
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Next"
          className="pointer-events-auto font-display text-[#1a1a1a] disabled:opacity-15 text-3xl font-bold transition-colors"
        >
          &#8594;
        </button>
      </div>
    </motion.div>
  );
}
