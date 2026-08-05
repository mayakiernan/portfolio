import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-center">
      <p className="font-display text-xs uppercase tracking-[0.25em] text-neutral-500">
        404
      </p>
      <h1 className="font-serif mt-4 text-3xl italic text-neutral-200 md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-serif text-neutral-500">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="font-display mt-8 text-sm uppercase tracking-[0.15em] text-neutral-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
      >
        Back to home
      </Link>
    </main>
  );
}
