import Image from "next/image";
import HandDrawnUnderline from "@/components/shared/HandDrawnUnderline";

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
          <div className="space-y-5 font-display text-base leading-snug text-black md:text-[17px] md:leading-snug">
            <p>
              Currently studying{" "}
              <a
                href="https://mde.harvard.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-black transition-opacity hover:opacity-70"
              >
                Design Engineering
                <HandDrawnUnderline />
              </a>{" "}
              at Harvard. Interested in the things that make us happy, good
              food, beautiful places, and other people.
            </p>
            <p>
              Was and always will be a mixed methods researcher from intimate at
              home ethnographies to global thousand person surveys worked to
              understand people and their worlds. I&apos;ve helped brands
              including Google, Pinterest, Uber, Meta, and Mayo Clinic better
              understand people and the things that matter to them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
