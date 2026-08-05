import SiteHeader from "@/components/shared/SiteHeader";
import OnkGallery from "@/components/onk/OnkGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ONK Collection",
  description: "Fall 2024 ceramics collection — The ONK Collection by Maya Kiernan.",
  openGraph: {
    title: "ONK Collection | Maya Kiernan",
    description: "Fall 2024 ceramics collection — The ONK Collection by Maya Kiernan.",
    images: [{ url: "/onk/main-image.jpg", width: 1200, height: 630, alt: "ONK Collection" }],
  },
};

export default function OnkPage() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-8 mb-8">
          <p className="font-serif italic text-2xl md:text-3xl mb-2">
            Fall 2024
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-[-0.02em] leading-[0.9]">
            The ONK<br />Collection
          </h1>
        </div>

        <OnkGallery />
      </div>
    </>
  );
}
