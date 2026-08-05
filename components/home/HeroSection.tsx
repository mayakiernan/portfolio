"use client";

import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f0d0b] px-6 text-center">
      <HeroCanvas />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-lg italic text-neutral-400 md:text-xl"
        >
          Designer & maker
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display mt-4 text-5xl font-extrabold uppercase tracking-[0.08em] text-neutral-100 md:text-7xl lg:text-8xl"
        >
          Maya Kiernan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-6 max-w-xl font-serif text-base leading-relaxed text-neutral-400 md:text-lg"
        >
          Crafting thoughtful objects and digital experiences — from ceramics
          to code.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-neutral-500">
          <span className="font-display text-[10px] uppercase tracking-[0.25em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-8 w-px bg-neutral-600"
          />
        </div>
      </motion.div>
    </section>
  );
}
