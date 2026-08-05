import { projects } from "@/lib/projects";
import ProjectCard from "@/components/shared/ProjectCard";

export default function ProjectLinks() {
  return (
    <section className="bg-neutral-950 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-neutral-500">
          Selected Work
        </p>
        <h2 className="font-serif mt-4 text-3xl italic text-neutral-200 md:text-4xl">
          Projects
        </h2>

        <div className="mt-12 space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
