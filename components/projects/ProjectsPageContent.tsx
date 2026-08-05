"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getProjectsByCategory,
  projectCategories,
  type ProjectCategory,
} from "@/lib/projects";

function ProjectGridCard({
  project,
}: {
  project: ReturnType<typeof getProjectsByCategory>[number];
}) {
  return (
    <Link
      href={project.href}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
    >
      <p className="font-serif text-3xl font-light leading-none text-black">
        {project.number}
      </p>
      <div
        className="relative mt-3 w-full overflow-hidden bg-stone-100 aspect-[3/4]"
      >
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ backgroundColor: project.placeholderColor }}
          />
        )}
      </div>
      <h3 className="font-serif mt-4 text-lg font-bold leading-tight text-black">
        {project.title}
      </h3>
      <p className="font-display mt-1 text-[10px] tracking-[0.08em] text-black/45">
        {project.year}
      </p>
    </Link>
  );
}

export default function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-[180px_1fr] md:px-10 md:py-16">
      <aside>
        <p className="font-display mb-6 text-[10px] uppercase tracking-[0.2em] text-black/50">
          Filter
        </p>
        <ul className="space-y-3">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`font-display text-left text-sm uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "bg-black px-3 py-2 text-white"
                      : "px-3 py-2 text-black hover:bg-black/5"
                  }`}
                >
                  {category.label}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div>
        <h1 className="font-display text-4xl font-medium tracking-[-0.03em] text-black md:text-6xl">
          Projects
        </h1>
        <p className="font-serif mt-3 text-base italic text-black/60">
          ({filteredProjects.length})
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectGridCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
