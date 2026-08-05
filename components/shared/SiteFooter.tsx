export default function SiteFooter() {
  return (
    <footer className="border-t border-black bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-marker text-3xl tracking-[0.06em] text-black md:text-4xl">
          MAYA KIERNAN
        </p>
        <p className="mt-3 text-[13px] font-normal tracking-[0.04em] text-black md:text-[14px]">
          Researcher &amp; Innovator
        </p>
        <p className="mt-8 text-[12px] font-normal text-black">
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
