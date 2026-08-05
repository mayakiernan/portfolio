"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects, gridSizeClasses } from "@/lib/projects";

const widthClasses = {
  sm: "w-[42%] min-w-[140px] max-w-[220px]",
  md: "w-[48%] min-w-[180px] max-w-[280px]",
  lg: "w-[52%] min-w-[200px] max-w-[320px]",
  tall: "w-[44%] min-w-[170px] max-w-[260px]",
  wide: "w-full max-w-[560px]",
};

function PlaceholderCover({
  color,
  coverImage,
  title,
}: {
  color: string;
  coverImage?: string;
  title: string;
}) {
  if (coverImage) {
    return (
      <Image
        src={coverImage}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 80vw, 40vw"
      />
    );
  }

  return (
    <div
      className="absolute inset-0"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

export default function FallingProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-marker text-2xl tracking-[0.06em] text-black md:text-3xl">
          PROJECTS
        </p>

        <div className="mt-12 flex flex-wrap items-end gap-x-6 gap-y-14 md:gap-x-10 md:gap-y-16">
          {projects.map((project, index) => {
            const rotation = reduceMotion ? 0 : ((index % 5) - 2) * 1.5;

            return (
              <motion.div
                key={project.slug}
                className={widthClasses[project.size]}
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0, rotate: 0 }
                    : { opacity: 0, y: -140, rotate: rotation - 4 }
                }
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true, margin: "-60px" }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 70,
                        damping: 16,
                        mass: 0.9,
                        delay: index * 0.08,
                      }
                }
              >
                <Link
                  href={project.href}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  <div className="relative w-full overflow-hidden bg-stone-100 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className={`relative w-full ${gridSizeClasses[project.size]}`}>
                      <PlaceholderCover
                        color={project.placeholderColor}
                        coverImage={project.coverImage}
                        title={project.title}
                      />
                    </div>
                  </div>
                  <p className="font-display mt-4 text-sm font-medium tracking-[0.06em] text-black">
                    {project.label}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
