import Link from "next/link";
import SiteHeader from "@/components/shared/SiteHeader";
import SiteFooter from "@/components/shared/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-marker text-3xl tracking-[0.06em] text-black">404</p>
        <h1 className="mt-4 text-[15px] font-normal text-black md:text-[16px]">
          Page not found
        </h1>
        <Link
          href="/"
          className="mt-8 text-[11px] font-normal uppercase tracking-[0.18em] text-black underline underline-offset-4"
        >
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
