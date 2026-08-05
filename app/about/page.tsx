import type { Metadata } from "next";
import SiteHeader from "@/components/shared/SiteHeader";
import SiteFooter from "@/components/shared/SiteFooter";

export const metadata: Metadata = {
  title: "About",
  description: "About Maya Kiernan — researcher and innovator.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div className="relative aspect-[4/5] bg-stone-200" />

          <div>
            <h1 className="font-marker text-5xl leading-none tracking-[0.06em] text-black md:text-7xl">
              Maya Kiernan
            </h1>
            <p className="mt-6 text-[13px] font-normal tracking-[0.04em] text-black md:text-[14px]">
              Researcher &amp; Innovator
            </p>

            <div className="mt-10 space-y-4 text-[13px] font-normal leading-[1.45] text-black/80 md:text-[14px]">
              <p>
                This page is a placeholder for a fuller biography, process notes,
                and the ideas behind my work across research, design, ceramics, and
                software.
              </p>
              <p>
                The magazine-style layout on the homepage will eventually expand
                into a longer editorial story here — background, influences, and
                what I&apos;m building next.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
