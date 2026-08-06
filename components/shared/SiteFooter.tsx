export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-marker text-3xl tracking-[0.06em] text-black md:text-4xl">
          MAYA KIERNAN
        </p>
        <p className="font-serif mt-3 text-lg italic text-black md:text-xl">
          Researcher &amp; Innovator
        </p>
        <p className="font-display mt-8 text-sm text-black">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            Instagram
          </a>
          <span className="mx-2">,</span>
          <a
            href="mailto:hello@mayakiernan.com"
            className="underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            Email
          </a>
          <span className="mx-2">,</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            Linkedin
          </a>
        </p>
      </div>
    </footer>
  );
}
