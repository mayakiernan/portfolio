export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-sm italic text-neutral-500">
          © {new Date().getFullYear()} Maya Kiernan
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@mayakiernan.com"
            className="font-display text-xs uppercase tracking-[0.15em] text-neutral-400 transition-colors hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
          >
            Email
          </a>
          <a
            href="https://github.com/mayakiernan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs uppercase tracking-[0.15em] text-neutral-400 transition-colors hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
