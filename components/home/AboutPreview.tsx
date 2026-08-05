import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="border-b border-black/10 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="relative">
          <div className="absolute -left-3 top-8 z-10 hidden h-[72%] w-10 bg-[#1a2744] md:block">
            <p className="font-marker rotate-180 px-2 py-4 text-[11px] leading-tight tracking-[0.08em] text-white [writing-mode:vertical-rl]">
              ABOUT
            </p>
          </div>

          <div className="relative ml-0 aspect-[4/5] overflow-hidden bg-stone-200 md:ml-8">
            <Image
              src="/placeholders/portrait.jpg"
              alt="Portrait placeholder"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-marker text-2xl tracking-[0.06em] text-black md:text-3xl">
            ABOUT
          </p>
          <p className="font-display mt-4 text-sm font-medium uppercase tracking-[0.12em] text-black/70">
            Placeholder introduction
          </p>
          <div className="mt-8 space-y-4 font-serif text-base leading-relaxed text-black/80 md:text-lg">
            <p>
              This section will introduce my work across research, design, and
              making. For now, it stands in as a magazine-style layout with room
              for a portrait and editorial copy.
            </p>
            <p>
              The full story lives on the{" "}
              <a href="/about" className="underline underline-offset-4">
                About
              </a>{" "}
              page — background, process, and the threads that connect my
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
