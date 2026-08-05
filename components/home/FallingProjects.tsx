"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects, gridSizeClasses, type Project, type ProjectSize } from "@/lib/projects";

type LayoutSlot = {
  x: number;
  y: number;
  width: number;
  rotate: number;
};

const sizeWidths: Record<ProjectSize, number> = {
  sm: 180,
  md: 220,
  lg: 260,
  tall: 210,
  wide: 340,
};

const layoutSlots: LayoutSlot[] = [
  { x: 0, y: 0, width: 210, rotate: -1.4 },
  { x: 380, y: 48, width: 340, rotate: 1.2 },
  { x: 60, y: 300, width: 220, rotate: -0.8 },
  { x: 420, y: 380, width: 180, rotate: 2.1 },
  { x: 220, y: 160, width: 260, rotate: -1.9 },
  { x: 520, y: 220, width: 220, rotate: 0.7 },
];

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
        sizes="(max-width: 768px) 70vw, 30vw"
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

function ProjectCardContent({
  project,
  width,
}: {
  project: Project;
  width: number;
}) {
  return (
    <Link
      href={project.href}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      style={{ width }}
    >
      <div className="relative w-full overflow-hidden bg-stone-100 shadow-[0_16px_36px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-0.5">
        <div className={`relative w-full ${gridSizeClasses[project.size]}`}>
          <PlaceholderCover
            color={project.placeholderColor}
            coverImage={project.coverImage}
            title={project.title}
          />
        </div>
      </div>

      <h3 className="mt-3 text-[15px] font-semibold leading-[1.15] text-black md:text-[16px]">
        {project.number}. {project.title}
      </h3>
      <p className="mt-2 text-[11px] font-normal leading-none text-black/55">
        {project.year}
      </p>
    </Link>
  );
}

function FallingProjectCard({
  project,
  index,
  slot,
  reduceMotion,
}: {
  project: Project;
  index: number;
  slot: LayoutSlot;
  reduceMotion: boolean | null;
}) {
  const stackX = 28;
  const stackY = index * 16;
  const width = sizeWidths[project.size];

  if (reduceMotion) {
    return (
      <div
        className="absolute left-0 top-0"
        style={{
          width,
          transform: `translate(${slot.x}px, ${slot.y}px) rotate(${slot.rotate}deg)`,
        }}
      >
        <ProjectCardContent project={project} width={width} />
      </div>
    );
  }

  return (
    <motion.div
      className="absolute left-0 top-0"
      style={{ width }}
      initial={{ x: stackX, y: -320, rotate: 0, opacity: 0 }}
      whileInView={{
        x: [stackX, stackX, stackX, stackX, slot.x],
        y: [-320, stackY, stackY + 10, stackY - 6, stackY, slot.y],
        rotate: [0, 0, -6, 6, -4, 4, slot.rotate],
        opacity: [0, 1, 1, 1, 1, 1, 1],
      }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        delay: index * 0.14,
        duration: 1.85,
        times: [0, 0.26, 0.4, 0.54, 0.68, 0.82, 1],
        ease: "easeOut",
      }}
    >
      <ProjectCardContent project={project} width={width} />
    </motion.div>
  );
}

export default function FallingProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative hidden min-h-[780px] md:block">
          {projects.map((project, index) => (
            <FallingProjectCard
              key={project.slug}
              project={project}
              index={index}
              slot={layoutSlots[index]}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="space-y-16 md:hidden">
          {projects.map((project, index) => {
            const width = sizeWidths[project.size];
            const slot = layoutSlots[index];

            if (reduceMotion) {
              return (
                <div key={project.slug}>
                  <ProjectCardContent project={project} width={width} />
                </div>
              );
            }

            return (
              <motion.div
                key={project.slug}
                initial={{ y: -120, opacity: 0, rotate: 0 }}
                whileInView={{
                  y: [ -120, 8, -4, 0 ],
                  rotate: [0, -5, 5, slot.rotate],
                  opacity: 1,
                }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  delay: index * 0.1,
                  duration: 1.2,
                  times: [0, 0.5, 0.75, 1],
                  ease: "easeOut",
                }}
              >
                <ProjectCardContent project={project} width={width} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
