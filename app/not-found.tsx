import Link from "next/link";
import SiteHeader from "@/components/shared/SiteHeader";
import SiteFooter from "@/components/shared/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-marker text-3xl tracking-[0.06em] text-black">404</p>
        <h1 className="font-serif mt-4 text-3xl italic text-black md:text-4xl">
          Page not found
        </h1>
        <Link
          href="/"
          className="font-display mt-8 text-sm uppercase tracking-[0.15em] text-black underline underline-offset-4"
        >
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
