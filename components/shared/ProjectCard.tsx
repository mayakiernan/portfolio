"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
    >
      <Link
        href={project.href}
        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="font-serif text-sm italic text-neutral-300 md:text-base">
              {project.subtitle}
            </p>
            <h2 className="font-display mt-2 text-2xl font-extrabold uppercase tracking-[-0.02em] text-white md:text-4xl">
              {project.title}
            </h2>
            {project.tags && project.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.12em] text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
