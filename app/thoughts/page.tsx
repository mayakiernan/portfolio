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
          <h1 className="text-[11px] font-normal uppercase tracking-[0.24em] text-black">
            Thoughts
          </h1>
          <p className="mt-6 text-[13px] font-normal leading-[1.45] text-black/70">
            Writing and notes coming soon.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
