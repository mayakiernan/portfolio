import type { Metadata } from "next";
import SiteHeader from "@/components/shared/SiteHeader";
import SiteFooter from "@/components/shared/SiteFooter";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Notes and writing by Maya Kiernan.",
};

export default function ThoughtsPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-marker text-4xl tracking-[0.06em] text-black md:text-5xl">
            THOUGHTS
          </h1>
          <p className="font-serif mt-6 text-lg italic text-black/70">
            Writing and notes coming soon.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
